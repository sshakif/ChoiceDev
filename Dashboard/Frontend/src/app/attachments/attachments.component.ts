import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '@app/services/common-service/common.service';
import { MediaItem } from '@app/shared/Model/MediaItem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-attachments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss'],
})
export class AttachmentsComponent implements OnInit, OnDestroy, OnChanges {
  api: boolean;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @Input() modelName: string = 'service-page';
  @Input() recordId: string | number = ''; 
  @Input() allowedTypes: string[] = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];
  @Input() maxFileSize: number = 2048; // KB
  @Input() multiple: boolean = true;

  @Output() fileUploaded = new EventEmitter<MediaItem>();
  @Output() uploadError = new EventEmitter<string>();

  mediaItems: MediaItem[] = [];
  selectedMediaIds: number[] = [];
  isUploading: boolean = false; 
  isDragging: boolean = false;
  public pendingFiles: File[] = [];
  
  ToastType: string = '';
  private destroy$ = new Subject<void>();

  constructor(
    private commonService: CommonService,
    private cdr: ChangeDetectorRef
  ) {
    this.api = commonService.api;
  }

  ngOnInit(): void {
    if (this.recordId) {
      console.log('AttachmentsComponent: ngOnInit - Initial recordId:', this.recordId);
      this.loadExistingMediaIfReady();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recordId']) {
      const currentRecordId = changes['recordId'].currentValue;
      const previousRecordId = changes['recordId'].previousValue;
      if (currentRecordId && currentRecordId !== previousRecordId) {
        console.log(`AttachmentsComponent: recordId changed from "${previousRecordId}" to "${currentRecordId}". Loading media.`);
        this.loadExistingMediaIfReady(); 
        this.processPendingUploads();
      } 
      else if (!currentRecordId && previousRecordId) {
        console.log(`AttachmentsComponent: recordId became empty. Clearing media and pending files.`);
        this.mediaItems = [];
        this.pendingFiles = [];
        this.selectedMediaIds = []; 
        this.cdr.detectChanges(); 
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadExistingMediaIfReady(): void {
    if (!this.modelName || !this.recordId || String(this.recordId).trim() === '') {
      console.warn('AttachmentsComponent: Cannot load media, modelName or recordId is missing or empty.');
      this.mediaItems = []; 
      this.selectedMediaIds = []; 
      this.cdr.detectChanges();
      return;
    }

    console.log(`AttachmentsComponent: Calling API to load media for ${this.modelName}/${this.recordId}`);
    this.commonService
      .get(`media/${this.modelName}/${this.recordId}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log('AttachmentsComponent: Media API response:', response);
          if (response && response.success && Array.isArray(response.media)) {
            this.mediaItems = response.media.map((media: any) => ({
              ...media,
              original_url: media.full_url || media.url,
              selected: false,
            })) || [];
          } else if (Array.isArray(response)) {
            this.mediaItems = response.map((media: any) => ({
              ...media,
              original_url: media.full_url || media.url,
              selected: false,
            }));
          } else {
            console.warn('AttachmentsComponent: Unexpected media API response format.', response);
            this.mediaItems = []; 
          }
         
          this.selectedMediaIds = []; 
          this.cdr.detectChanges(); 
        },
        error: (error) => {
          console.error('AttachmentsComponent: Failed to load existing media:', error);
          this.mediaItems = []; 
          this.selectedMediaIds = [];
          this.cdr.detectChanges();
          this.uploadError.emit('Failed to load existing attachments.'); 
        },
      });
  }

  onUploadClick(): void {
    this.fileInput.nativeElement.click();
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleIncomingFiles(Array.from(input.files));
      this.clearFileInput(); 
    }
  }

  onDragEnter(event: DragEvent): void {
    event.preventDefault(); 
    this.isDragging = true;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault(); 
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    if (
      event.clientX < rect.left || event.clientX >= rect.right ||
      event.clientY < rect.top || event.clientY >= rect.bottom
    ) {
      this.isDragging = false;
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files) {
      this.handleIncomingFiles(Array.from(event.dataTransfer.files));
    }
  }

  private handleIncomingFiles(files: File[]): void {
    if (!this.multiple && files.length > 1) {
      this.uploadError.emit('Only one file can be selected at a time.');
      return;
    }

    const validFiles = files.filter((file) => this.validateFile(file));
    if (validFiles.length === 0) {
      if (files.length > 0) {
        this.uploadError.emit('None of the selected files are valid. Check allowed types and sizes.');
      }
      return;
    }

    
    if (this.recordId && String(this.recordId).trim() !== '') {
      console.log('AttachmentsComponent: RecordId available, uploading files directly.');
      validFiles.forEach((file) => this.uploadFile(file));
    } else {
      console.log('AttachmentsComponent: No RecordId, staging files.');
      this.pendingFiles.push(...validFiles);
      this.uploadError.emit('Files will be uploaded after you save the service page.');
      this.cdr.detectChanges(); 
    }
  }

  public processPendingUploads(): void {
    if (this.recordId && String(this.recordId).trim() !== '' && this.pendingFiles.length > 0) {
      console.log(`AttachmentsComponent: Processing ${this.pendingFiles.length} pending uploads for record ID: ${this.recordId}.`);
      
      const filesToUpload = [...this.pendingFiles]; 
      this.pendingFiles = []; 

      let uploadsInProgress = filesToUpload.length;
      this.isUploading = true;
      this.cdr.detectChanges();

      filesToUpload.forEach(file => {
        this.uploadFile(file).finally(() => {
          uploadsInProgress--;
          if (uploadsInProgress === 0) {
            this.isUploading = false;
            this.cdr.detectChanges();
            this.loadExistingMediaIfReady(); 
          }
        });
      });
    } else if (this.pendingFiles.length > 0) {
      console.warn('AttachmentsComponent: Cannot process pending uploads without a valid recordId.');
      this.uploadError.emit('Cannot upload pending files: Service Page ID is not yet available.');
    }
  }

  validateFile(file: File): boolean {
    if (!this.allowedTypes.includes(file.type)) {
      this.uploadError.emit(`File type "${file.type}" is not allowed.`);
      return false;
    }

    const fileSizeKB = file.size / 1024;
    if (fileSizeKB > this.maxFileSize) {
      this.uploadError.emit(
        `File size (${this.formatFileSize(file.size)}) exceeds ${
          this.maxFileSize
        }KB limit.`
      );
      return false;
    }
    return true;
  }

  uploadFile(file: File): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.modelName || !this.recordId || String(this.recordId).trim() === '') {
        this.uploadError.emit('Cannot upload: Model name or record ID is missing.');
        reject(new Error('Missing modelName or recordId for upload'));
        return;
      }
      const formData = new FormData();
      formData.append('file', file);
      formData.append('model', this.modelName);
      formData.append('id', this.recordId.toString());
      this.commonService
        .post('media/upload', formData, this.api)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: any) => {
            if (response && response.success) {
              const newMedia = {
                ...response.media,
                original_url: response.media.full_url || response.media.url,
                selected: false,
                
              };
              if (!this.isUploading) { // If not part of a batch process, add immediately
                 this.mediaItems.push(newMedia);
                 this.cdr.detectChanges();
              }
              this.fileUploaded.emit(newMedia);
              console.log(`AttachmentsComponent: File "${file.name}" uploaded successfully.`);
              resolve();
            } else {
              this.uploadError.emit(response?.error || `Upload failed for "${file.name}".`);
              reject(new Error(response?.error || `Upload failed for "${file.name}"`));
            }
          },
          error: (error) => {
            console.error('AttachmentsComponent: Upload error:', error);
            this.uploadError.emit(`Upload failed for "${file.name}". Please try again.`);
            reject(error);
          },
        });
    });
  }

  clearFileInput(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  toggleSelection(mediaId: number): void {
    const index = this.selectedMediaIds.indexOf(mediaId);
    if (index > -1) {
      this.selectedMediaIds.splice(index, 1);
    } else {
      this.selectedMediaIds.push(mediaId);
    }

    this.mediaItems.forEach((media) => {
      media.selected = this.selectedMediaIds.includes(media.id);
    });

    this.cdr.detectChanges();
  }

  downloadSelected(): void {
    if (this.selectedMediaIds.length === 0) return;
    this.selectedMediaIds.forEach((mediaId) => {
      const media = this.mediaItems.find((m) => m.id === mediaId);
      if (media) this.downloadMedia(media);
    });
  }

  downloadMedia(media: MediaItem): void {
    const url = media.original_url;
    if (url) window.open(url, '_blank');
  }

  deleteSelected(): void {
    if (this.selectedMediaIds.length === 0) return;

    if (!confirm(`Are you sure you want to delete ${this.selectedMediaIds.length} selected file(s)?`)) {
      return;
    }

    const idsToDelete = [...this.selectedMediaIds]; 
    let successfulDeletes = 0;
    const totalDeletes = idsToDelete.length;

    idsToDelete.forEach((mediaId) => {
      this.commonService
        .delete(`media/${mediaId}`)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.mediaItems = this.mediaItems.filter((m) => m.id !== mediaId);
            this.selectedMediaIds = this.selectedMediaIds.filter((id) => id !== mediaId); 
            successfulDeletes++;
            this.cdr.detectChanges();

            if (successfulDeletes === totalDeletes) {
              this.uploadError.emit('Selected file(s) deleted successfully.');
            }
          },
          error: (error) => {
            console.error(`AttachmentsComponent: Failed to delete media ${mediaId}:`, error);
            this.uploadError.emit(`Failed to delete file ID ${mediaId}.`);
            this.cdr.detectChanges();
          },
        });
    });
  }

  deleteMedia(mediaId: number, index: number): void {
    if (!confirm('Are you sure you want to delete this file?')) return;

    this.commonService
      .delete(`media/${mediaId}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          this.mediaItems.splice(index, 1);
          this.selectedMediaIds = this.selectedMediaIds.filter((id) => id !== mediaId); 
          this.uploadError.emit('File deleted successfully.');
        },
        error: (error) => {
          console.error('AttachmentsComponent: Delete error:', error);
          this.uploadError.emit('Failed to delete file.');
        },
      });
  }

  removePendingFile(index: number): void {
    if (index >= 0 && index < this.pendingFiles.length) {
      const removedFileName = this.pendingFiles[index].name;
      this.pendingFiles.splice(index, 1);
      this.uploadError.emit(`Pending file "${removedFileName}" removed.`);
      this.cdr.detectChanges();
    }
  }

  getFileIcon(mimeType: string): string {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType === 'application/pdf') return 'picture_as_pdf';
    if (mimeType.includes('word') || mimeType.includes('document'))
      return 'description';
    return 'attach_file';
  }

  isImage(mimeType: string): boolean {
    return mimeType.startsWith('image/');
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return (
        date.toLocaleDateString() +
        ' ' +
        date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    } catch {
      return 'Unknown date';
    }
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none'; 
   
  }

  getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toUpperCase() || 'FILE';
  }

  getAllowedTypesDisplay(): string {
    return this.allowedTypes
      .map((type) => {
        if (type.startsWith('image/')) return 'Images';
        if (type.includes('pdf')) return 'PDF';
        if (type.includes('document') || type.includes('word'))
          return 'Documents';
        const parts = type.split('/');
        return parts.length > 1 ? parts[1].toUpperCase() : type.toUpperCase();
      })
      .filter((value, index, self) => self.indexOf(value) === index) 
      .join(', ');
  }

  trackByMediaId(index: number, media: MediaItem): number {
    return media.id;
  }

  get isUploadAllowed(): boolean {
    return true; 
  }
}