import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '@app/services/common-service/common.service';
import { MediaService } from '@app/services/media.service';
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
    'image/jpeg', 'image/png', 'image/webp', 'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  @Input() maxFileSize: number = 2048; // KB
  @Input() multiple: boolean = true;

  @Output() fileUploaded = new EventEmitter<MediaItem>();
  @Output() uploadError = new EventEmitter<string>();

  mediaItems: MediaItem[] = [];
  selectedMediaIds: number[] = [];
  isUploading: boolean = false;
  isDragging: boolean = false;

  private destroy$ = new Subject<void>();

  constructor(
    private mediaService: MediaService,
    private commonService: CommonService,
    private cdr: ChangeDetectorRef
  ) {
    this.api= commonService.api
  }

  ngOnInit(): void {
    this.loadExistingMediaIfReady();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recordId'] && changes['recordId'].currentValue) {
      this.loadExistingMediaIfReady();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadExistingMediaIfReady(): void {
    if (!this.modelName || !this.recordId) return;

    this.commonService.get(`media/${this.modelName}/${this.recordId}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          if (response && response.success) {
            this.mediaItems = response.media.map((media: any) => ({
              ...media,
              original_url: media.full_url || media.url,
              selected: false
            })) || [];
          } else if (Array.isArray(response)) {
            this.mediaItems = response.map((media: any) => ({
              ...media,
              original_url: media.full_url || media.url,
              selected: false
            }));
          } else {
            this.mediaItems = [];
          }
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Failed to load existing media:', error);
          this.mediaItems = [];
          this.cdr.detectChanges();
        }
      });
  }

  onUploadClick(): void {
    if (!this.recordId) {
      this.uploadError.emit('Please save the service page first before uploading attachments.');
      return;
    }else{
       console.error(this.recordId);
    }
    this.fileInput.nativeElement.click();
   
    
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(Array.from(input.files));
    }
  }

  onDragEnter(event: DragEvent): void {
    event.preventDefault();
    if (!this.recordId) return;
    this.isDragging = true;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (!this.recordId) return;
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    if (!this.recordId) return;
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
    if (!this.recordId) {
      this.uploadError.emit('Please save the service page first before uploading attachments.');
      return;
    }
    if (event.dataTransfer?.files) {
      this.handleFiles(Array.from(event.dataTransfer.files));
    }
  }

  handleFiles(files: File[]): void {
    if (!this.recordId) {
      this.uploadError.emit('Please save the service page first before uploading attachments.');
      return;
    }

    if (!this.multiple && files.length > 1) {
      this.uploadError.emit('Only one file is allowed');
      return;
    }

    const validFiles = files.filter(file => this.validateFile(file));
    if (validFiles.length === 0) return;

    validFiles.forEach(file => this.uploadFile(file));
  }

  validateFile(file: File): boolean {
    if (!this.allowedTypes.includes(file.type)) {
      this.uploadError.emit(`File type ${file.type} is not allowed`);
      return false;
    }

    const fileSizeKB = file.size / 1024;
    if (fileSizeKB > this.maxFileSize) {
      this.uploadError.emit(`File size exceeds ${this.maxFileSize}KB limit`);
      return false;
    }

    return true;
  }

  uploadFile(file: File): void {
    if (!this.modelName) {
      this.uploadError.emit('Model name and record ID are required');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('model', this.modelName);
    formData.append('id', this.recordId.toString());

    this.isUploading = true;
    this.cdr.detectChanges();

    this.commonService.post('media/upload', formData,this.api)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          if (response && response.success) {
            const newMedia = {
              ...response.media,
              original_url: response.media.full_url || response.media.url,
              selected: false
            };
            this.mediaItems.push(newMedia);
            this.fileUploaded.emit(newMedia);
            this.clearFileInput();
          } else {
            this.uploadError.emit(response?.error || 'Upload failed');
          }
          this.isUploading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Upload error:', error);
          this.uploadError.emit('Upload failed. Please try again.');
          this.isUploading = false;
          this.cdr.detectChanges();
        }
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

    this.mediaItems.forEach(media => {
      media.selected = this.selectedMediaIds.includes(media.id);
    });

    this.cdr.detectChanges();
  }

  downloadSelected(): void {
    this.selectedMediaIds.forEach(mediaId => {
      const media = this.mediaItems.find(m => m.id === mediaId);
      if (media) this.downloadMedia(media);
    });
  }

  downloadMedia(media: MediaItem): void {
    const url = media.original_url;
    if (url) window.open(url, '_blank');
  }

  deleteMedia(mediaId: number, index: number): void {
    if (!confirm('Are you sure you want to delete this file?')) return;

    this.commonService.delete(`media/${mediaId}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          this.mediaItems.splice(index, 1);
          this.selectedMediaIds = this.selectedMediaIds.filter(id => id !== mediaId);
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Delete error:', error);
          this.uploadError.emit('Failed to delete file.');
        }
      });
  }

  getFileIcon(mimeType: string): string {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType === 'application/pdf') return 'picture_as_pdf';
    if (mimeType.includes('word') || mimeType.includes('document')) return 'description';
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
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
    return this.allowedTypes.map(type => {
      if (type.startsWith('image/')) return 'Images';
      if (type.includes('pdf')) return 'PDF';
      if (type.includes('document') || type.includes('word')) return 'Documents';
      return type.split('/').pop()?.toUpperCase() || 'Files';
    }).filter((value, index, self) => self.indexOf(value) === index).join(', ');
  }

  trackByMediaId(index: number, media: MediaItem): number {
    return media.id;
  }

  // New getter to check if upload is allowed
  get isUploadAllowed(): boolean {
    return !!this.recordId;
  }
}