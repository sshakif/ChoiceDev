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
// import { MediaService } from '@app/services/media.service';
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
  isUploading: boolean = false; // Indicates if any upload is in progress
  isDragging: boolean = false;
  public pendingFiles: File[] = []; // <--- CHANGE THIS LINE from private to public

  private destroy$ = new Subject<void>();

  constructor(
    // private mediaService: MediaService,
    private commonService: CommonService,
    private cdr: ChangeDetectorRef
  ) {
    this.api = commonService.api;
  }

  ngOnInit(): void {
    // Only load existing media if recordId is already present on init
    if (this.recordId) {
      this.loadExistingMediaIfReady();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // When recordId input changes or becomes available
    if (changes['recordId'] && changes['recordId'].currentValue) {
      this.loadExistingMediaIfReady(); // Load any media for the (new) record
      this.processPendingUploads(); // Process files that were staged before ID was available
    } else if (changes['recordId'] && !changes['recordId'].currentValue) {
      // If recordId becomes null/empty, clear current media items
      this.mediaItems = [];
      this.pendingFiles = []; // Also clear pending files if the record is being reset
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadExistingMediaIfReady(): void {
    if (!this.modelName || !this.recordId) {
      this.mediaItems = [];
      this.cdr.detectChanges();
      return;
    }

    this.commonService
      .get(`media/${this.modelName}/${this.recordId}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          if (response && response.success) {
            this.mediaItems =
              response.media.map((media: any) => ({
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
            this.mediaItems = [];
          }
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Failed to load existing media:', error);
          this.mediaItems = [];
          this.cdr.detectChanges();
        },
      });
  }

  onUploadClick(): void {
    // Allow clicking even if recordId is missing; files will be staged
    this.fileInput.nativeElement.click();
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleIncomingFiles(Array.from(input.files));
      this.clearFileInput(); // Always clear the input after selection
    }
  }

  onDragEnter(event: DragEvent): void {
    event.preventDefault(); // Prevent default to allow drop
    this.isDragging = true;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Prevent default to allow drop
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    // Check if the mouse is leaving the drop zone area
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX >= rect.right ||
      event.clientY < rect.top ||
      event.clientY >= rect.bottom
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

  /**
   * Processes incoming files, validating them and either uploading directly
   * or staging them if the recordId is not yet available.
   * @param files The File objects to process.
   */
  private handleIncomingFiles(files: File[]): void {
    if (!this.multiple && files.length > 1) {
      this.uploadError.emit('Only one file can be selected at a time.');
      return;
    }

    const validFiles = files.filter((file) => this.validateFile(file));
    if (validFiles.length === 0) {
      if (files.length > 0) {
        // If some files were attempted but none were valid
        this.uploadError.emit(
          'None of the selected files are valid. Check allowed types and sizes.'
        );
      }
      return;
    }

    if (this.recordId) {
      // If recordId is available, upload immediately
      validFiles.forEach((file) => this.uploadFile(file));
    } else {
      // If recordId is not available, stage files
      this.pendingFiles.push(...validFiles);
      this.uploadError.emit(
        'Files will be uploaded after you save the service page.'
      );
      this.cdr.detectChanges(); // Update UI to reflect pending files
    }
  }

  /**
   * Public method to be called by the parent component (AddServiceComponent)
   * to trigger uploads of any files that were staged.
   */
  public processPendingUploads(): void {
    if (this.recordId && this.pendingFiles.length > 0) {
      console.log(
        `AttachmentsComponent: Processing ${this.pendingFiles.length} pending uploads.`
      );
      // Take a copy and clear the pending list immediately to prevent re-processing
      const filesToUpload = [...this.pendingFiles];
      this.pendingFiles = [];

      filesToUpload.forEach((file) => this.uploadFile(file));
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

  uploadFile(file: File): void {
    if (!this.modelName || !this.recordId) {
      // This should ideally not happen if handleIncomingFiles and processPendingUploads are used correctly,
      // but acts as a final safeguard.
      this.uploadError.emit(
        'Cannot upload: Model name or record ID is missing.'
      );
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('model', this.modelName);
    formData.append('id', this.recordId.toString());

    this.isUploading = true; // Set general uploading state
    this.cdr.detectChanges();

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
            this.mediaItems.push(newMedia);
            this.fileUploaded.emit(newMedia);
          } else {
            this.uploadError.emit(
              response?.error || `Upload failed for "${file.name}".`
            );
          }
          // Consider checking if all uploads are complete to set isUploading to false
          this.isUploading = false; // Reset for simplicity, or manage per-file status
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Upload error:', error);
          this.uploadError.emit(
            `Upload failed for "${file.name}". Please try again.`
          );
          this.isUploading = false;
          this.cdr.detectChanges();
        },
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
    if (
      !confirm(
        `Are you sure you want to delete ${this.selectedMediaIds.length} selected file(s)?`
      )
    ) {
      return;
    }

    // Create a copy of selected IDs to iterate over, as selectedMediaIds will change during deletion
    const idsToDelete = [...this.selectedMediaIds];
    let deletedCount = 0;
    const totalToDelete = idsToDelete.length;

    idsToDelete.forEach((mediaId) => {
      this.commonService
        .delete(`media/${mediaId}`)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            // Remove the deleted item from mediaItems locally
            this.mediaItems = this.mediaItems.filter((m) => m.id !== mediaId);
            // Remove from selectedMediaIds
            this.selectedMediaIds = this.selectedMediaIds.filter(
              (id) => id !== mediaId
            );
            deletedCount++;
            this.cdr.detectChanges(); // Update UI after each successful deletion

            if (deletedCount === totalToDelete) {
              this.uploadError.emit('Selected file(s) deleted successfully.'); // Generic success message
            }
          },
          error: (error) => {
            console.error(`Failed to delete media ${mediaId}:`, error);
            this.uploadError.emit(
              `Failed to delete some files. Error deleting ${mediaId}.`
            );
            // Even on error, try to update UI for others that might have succeeded
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
          this.selectedMediaIds = this.selectedMediaIds.filter(
            (id) => id !== mediaId
          );
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Delete error:', error);
          this.uploadError.emit('Failed to delete file.');
        },
      });
  }

  // New: Method to remove a pending file before upload
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

  // Determines if the upload UI elements should be active.
  // Uploads are allowed even if recordId is missing, but files will be staged.
  get isUploadAllowed(): boolean {
    // This getter controls the visual state (e.g., cursor, opacity)
    // The actual staging/upload logic is within handleIncomingFiles
    return true; // Always allow users to select files, they will be staged if no ID
  }
}
