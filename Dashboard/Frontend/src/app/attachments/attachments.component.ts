// src/app/components/attachments/attachments.component.ts
import { CommonModule, DatePipe } from '@angular/common'; // Import DatePipe here
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
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; // Import DomSanitizer and SafeUrl
import { CommonService } from '@app/services/common-service/common.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaItem } from '@app/shared/Model/MediaItem';

@Component({
  selector: 'app-attachments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe],
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss'],
})
export class AttachmentsComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @Input() modelName: string = 'service-page'; 
  @Input() recordId: string | number | null = null; 
  @Input() allowedTypes: string[] = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
    'application/msword', 
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
    'application/vnd.ms-excel', 
    'application/vnd.openxmlformats-officedocument.presentationml.presentation', 
    'application/vnd.ms-powerpoint', 
  ];
  @Input() maxFileSize: number = 2048; 
  @Input() multiple: boolean = true;

  @Output() fileUploaded = new EventEmitter<MediaItem>(); 
  @Output() uploadError = new EventEmitter<string>(); 
  @Output() refreshTable = new EventEmitter<void>();
  mediaItems: MediaItem[] = []; 
  selectedMediaIds: number[] = [];
  isUploading: boolean = false; 
  isDragging: boolean = false; 

  public pendingFiles: { file: File; local_url?: SafeUrl }[] = [];

  private destroy$ = new Subject<void>(); 

  constructor(
    private commonService: CommonService,
    private cdr: ChangeDetectorRef, 
    private sanitizer: DomSanitizer, 
    private datePipe: DatePipe 
  ) {}

  ngOnInit(): void {
    if (this.recordId) {
      console.log(
        'AttachmentsComponent: ngOnInit - Initial recordId:',
        this.recordId
      );
      this.loadExistingMediaIfReady();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recordId']) {
      const currentRecordId = changes['recordId'].currentValue;
      const previousRecordId = changes['recordId'].previousValue
      if (
        currentRecordId &&
        String(currentRecordId).trim() !== '' &&
        currentRecordId !== previousRecordId
      ) {
        console.log(
          `AttachmentsComponent: recordId changed from "${previousRecordId}" to "${currentRecordId}".`
        );
        this.loadExistingMediaIfReady(); 
        this.processPendingUploads(); 
      }
      else if (
        (!currentRecordId || String(currentRecordId).trim() === '') &&
        previousRecordId !== undefined
      ) {
        console.log(
          `AttachmentsComponent: recordId became empty/null. Clearing media and pending files.`
        );
        this.clearAllAttachmentsState(); 
      }
    }

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    this.pendingFiles.forEach((item) => {
      if (item.local_url) {
        URL.revokeObjectURL(item.local_url.toString());
      }
    });
    console.log('AttachmentsComponent: ngOnDestroy - Cleaned up object URLs.');
  }

  private clearAllAttachmentsState(): void {
    this.mediaItems = [];
    this.pendingFiles.forEach((item) => {
      if (item.local_url) {
        URL.revokeObjectURL(item.local_url.toString());
      }
    });
    this.pendingFiles = [];
    this.selectedMediaIds = [];
    this.isUploading = false;
    this.isDragging = false;
    this.cdr.detectChanges(); 
  }
  loadExistingMediaIfReady(): void {
    if (
      !this.modelName ||
      !this.recordId ||
      String(this.recordId).trim() === ''
    ) {
      console.warn(
        'AttachmentsComponent: Cannot load media. modelName or recordId is missing or empty.'
      );
      this.mediaItems = [];
      this.selectedMediaIds = [];
      this.cdr.detectChanges();
      return;
    }

    console.log(
      `AttachmentsComponent: Calling API to load media for model: "${this.modelName}", ID: "${this.recordId}"`
    );
   
    this.commonService
      .get<any>(`media/${this.modelName}/${this.recordId}`, false)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          console.log(
            'AttachmentsComponent: Media API response for GET:',
            response
          );
          let loadedMedia: MediaItem[] = [];
        this.refreshTable.emit();

          if (response && response.success && Array.isArray(response.media)) {
            loadedMedia = response.media;
          } else if (Array.isArray(response)) {

            loadedMedia = response;
          } else {
            console.warn(
              'AttachmentsComponent: Unexpected media API response format. Expected { success: boolean, media: [] } or just [].',
              response
            );

            this.uploadError.emit(
              'Server returned unexpected format for existing attachments.'
            );
            this.mediaItems = []; 
            this.cdr.detectChanges();
            return;
          }

          this.mediaItems = loadedMedia.map((media: any) => ({
            id: media.id,
            name: media.name,
            file_name: media.file_name,
            mime_type: media.mime_type,
            size: media.size,
            url: media.url,
            full_url: media.full_url,
            original_url: media.original_url || media.full_url || media.url, 
            selected: false, 
            created_at: media.created_at,
          }));

          this.selectedMediaIds = []; 
          this.cdr.detectChanges(); 
        },
        error: (error) => {
          console.error(
            'AttachmentsComponent: Error loading existing media:',
            error
          );
          this.mediaItems = []; 
          this.selectedMediaIds = [];
          this.uploadError.emit(
            'Failed to load existing attachments. ' +
              (error.error?.message || error.message || '')
          );
          this.cdr.detectChanges(); 
        },
      });
  }

  onUploadClick(): void {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.click();
    }
  }
  onFilesSelected(event: Event | DragEvent): void {
    let files: FileList | null = null;

    if (event instanceof DragEvent && event.dataTransfer) {
      files = event.dataTransfer.files;
      this.isDragging = false; 
    } else {
      const input = event.target as HTMLInputElement;
      files = input.files;
    }
    

    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      for (const file of newFiles) {

        if (!this.isValidFileType(file)) {
          this.uploadError.emit(
            `Invalid file type: ${
              file.name
            }. Allowed types: ${this.getAllowedTypesDisplay()}`
          );
          continue;
        }
        if (file.size / 1024 > this.maxFileSize) {

          this.uploadError.emit(
            `File too large: ${file.name}. Max size: ${
              this.maxFileSize
            }KB (Actual: ${this.formatFileSize(file.size)})`
          );
          continue;
        }

        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {

            const localUrl = this.sanitizer.bypassSecurityTrustUrl(
              e.target?.result as string
            );
            this.pendingFiles.push({ file, local_url: localUrl });
            this.cdr.detectChanges(); 
          };
          reader.readAsDataURL(file); 
        } else {
          this.pendingFiles.push({ file });
          this.cdr.detectChanges(); 
        }
      }

      if (event instanceof Event && event.target) {
        (event.target as HTMLInputElement).value = '';
      }
    }
  }

  async processPendingUploads(): Promise<void> {
    if (this.pendingFiles.length === 0) {
      console.log('AttachmentsComponent: No pending files to upload.');
      return; 
    }
    if (!this.recordId || String(this.recordId).trim() === '') {
      console.warn(
        'AttachmentsComponent: Cannot process pending uploads. recordId is null or empty.'
      );
      this.uploadError.emit(
        'Cannot upload files without a valid record ID. Please save the main form first.'
      );
      return;
    }
    if (this.isUploading) {
      console.warn(
        'AttachmentsComponent: Already uploading. Skipping new process.'
      );
      return;
    }

    this.isUploading = true;
    console.log(
      `AttachmentsComponent: Starting upload of ${this.pendingFiles.length} pending files for record ID: ${this.recordId}`
    );

    const uploadPromises: Promise<void>[] = [];

    for (let i = 0; i < this.pendingFiles.length; i++) {
      const pendingFileItem = this.pendingFiles[i];
      const formData = new FormData();
      formData.append('file', pendingFileItem.file);
      formData.append('model', this.modelName);
      formData.append('id', String(this.recordId)); 

      const uploadApiUrl = 'media/upload'; 

      const uploadPromise = new Promise<void>((resolve, reject) => {
        this.commonService
          .post<any>(uploadApiUrl, formData, false)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response: any) => {
              if (response && response.success && response.media) {
                const uploadedMedia: MediaItem = {
                  id: response.media.id,
                  name: response.media.name,
                  file_name: response.media.file_name,
                  mime_type: response.media.mime_type,
                  size: response.media.size,
                  url: response.media.url,
                  full_url: response.media.full_url,
                  original_url:
                    response.media.original_url ||
                    response.media.full_url ||
                    response.media.url,
                  created_at: response.media.created_at,
                };
                this.mediaItems.push(uploadedMedia); 
                this.fileUploaded.emit(uploadedMedia); 
                console.log(
                  'AttachmentsComponent: Successfully uploaded:',
                  uploadedMedia.name
                );
                if (pendingFileItem.local_url) {
                  URL.revokeObjectURL(pendingFileItem.local_url.toString());
                }
                resolve();
              } else {
                const errorMessage =
                  response?.error?.message || 'Unknown upload error';
                console.error(
                  'AttachmentsComponent: Upload failed for',
                  pendingFileItem.file.name,
                  ':',
                  errorMessage
                );
                this.uploadError.emit(
                  `Failed to upload ${pendingFileItem.file.name}: ${errorMessage}`
                );
                reject(errorMessage);
              }
            },
            error: (error) => {
              const errorMessage =
                error.error?.message ||
                error.message ||
                'Server error during upload';
              console.error(
                'AttachmentsComponent: HTTP error during upload for',
                pendingFileItem.file.name,
                ':',
                error
              );
              this.uploadError.emit(
                `Failed to upload ${pendingFileItem.file.name}: ${errorMessage}`
              );
              reject(errorMessage);
            },
          });
      });
      uploadPromises.push(uploadPromise);
    }

    try {
      await Promise.all(uploadPromises);
      this.pendingFiles = []; 
      console.log('AttachmentsComponent: All pending uploads processed.');
    } catch (e) {
      console.error('AttachmentsComponent: One or more uploads failed.', e);
  
    } finally {
      this.isUploading = false;
      this.cdr.detectChanges(); 
    }
  }

  /**
   * Deletes a single media item from the server and updates the UI.
   * @param mediaId The ID of the media item to delete.
   * @param index The index of the media item in the mediaItems array (for UI update).
   */
  deleteMedia(mediaId: number, index: number): void {
    if (!confirm('Are you sure you want to delete this file?')) {
      return;
    }

    console.log(
      `AttachmentsComponent: Attempting to delete media with ID: ${mediaId}`
    );

    this.commonService
      .delete<any>(`media/${mediaId}`, false)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: any) => {
          if (response && response.success) {
            console.log(
              'AttachmentsComponent: Media deleted successfully:',
              mediaId
            );
            this.mediaItems.splice(index, 1); 
            this.selectedMediaIds = this.selectedMediaIds.filter(
              (id) => id !== mediaId
            ); 
            this.cdr.detectChanges(); 
          } else {
            const errorMessage =
              response?.error?.message || 'Unknown delete error';
            console.error(
              'AttachmentsComponent: Delete failed for ID',
              mediaId,
              ':',
              errorMessage
            );
            this.uploadError.emit(`Failed to delete file: ${errorMessage}`);
          }
        },
        error: (error) => {
          const errorMessage =
            error.error?.message ||
            error.message ||
            'Server error during delete';
          console.error(
            'AttachmentsComponent: HTTP error during delete for ID',
            mediaId,
            ':',
            error
          );
          this.uploadError.emit(`Failed to delete file: ${errorMessage}`);
        },
      });
  }

  /**
   * Removes a file from the pending uploads list (before it's uploaded).
   */
  removePendingFile(index: number): void {
    if (index >= 0 && index < this.pendingFiles.length) {

      if (this.pendingFiles[index].local_url) {
        URL.revokeObjectURL(this.pendingFiles[index].local_url!.toString());
      }
      this.pendingFiles.splice(index, 1);
      this.cdr.detectChanges(); 
      console.log(
        'AttachmentsComponent: Removed pending file at index:',
        index
      );
    }
  }

  /**
   * Toggles selection of a media item for bulk actions.
   */
  toggleSelection(mediaId: number): void {
    const index = this.selectedMediaIds.indexOf(mediaId);
    const mediaItem = this.mediaItems.find((item) => item.id === mediaId);

    if (mediaItem) {
      if (index > -1) {
        this.selectedMediaIds.splice(index, 1);
        mediaItem.selected = false;
      } else {
        this.selectedMediaIds.push(mediaId);
        mediaItem.selected = true;
      }
      this.cdr.detectChanges(); 
    }
  }

  /**
   * Handles bulk deletion of selected media items.
   */
  async deleteSelected(): Promise<void> {
    if (this.selectedMediaIds.length === 0) {
      return;
    }
    if (
      !confirm(
        `Are you sure you want to delete ${this.selectedMediaIds.length} selected files?`
      )
    ) {
      return;
    }

    console.log(
      `AttachmentsComponent: Deleting ${this.selectedMediaIds.length} selected files.`
    );
    const deletePromises: Promise<void>[] = [];

    for (const mediaId of this.selectedMediaIds) {
      const deletePromise = new Promise<void>((resolve, reject) => {
        this.commonService
          .delete<any>(`media/${mediaId}`, false)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response) => {
              if (response && response.success) {
                console.log(
                  `AttachmentsComponent: Successfully deleted media ID: ${mediaId}`
                );
                resolve();
              } else {
                const errorMessage =
                  response?.error?.message || 'Unknown delete error';
                console.error(
                  `AttachmentsComponent: Failed to delete media ID: ${mediaId}:`,
                  errorMessage
                );
                this.uploadError.emit(
                  `Failed to delete file ID ${mediaId}: ${errorMessage}`
                );
                reject(errorMessage);
              }
            },
            error: (error) => {
              const errorMessage =
                error.error?.message ||
                error.message ||
                'Server error during delete';
              console.error(
                `AttachmentsComponent: HTTP error deleting media ID: ${mediaId}:`,
                error
              );
              this.uploadError.emit(
                `Failed to delete file ID ${mediaId}: ${errorMessage}`
              );
              reject(errorMessage);
            },
          });
      });
      deletePromises.push(deletePromise);
    }

    try {
      await Promise.all(deletePromises);
      console.log(
        'AttachmentsComponent: All selected files deleted successfully.'
      );
    
      this.loadExistingMediaIfReady();
      this.selectedMediaIds = []; 
    } catch (e) {
      console.error(
        'AttachmentsComponent: One or more selected files failed to delete.',
        e
      );
      this.loadExistingMediaIfReady();
    } finally {
      this.cdr.detectChanges();
    }
  }
  downloadMedia(media: MediaItem): void {
    if (media.original_url) {
      window.open(media.original_url, '_blank');
      console.log(
        'AttachmentsComponent: Downloading media:',
        media.name,
        media.original_url
      );
    } else {
      console.warn(
        'AttachmentsComponent: Cannot download media, no URL found for:',
        media.name
      );
    
      this.uploadError.emit(
        `Cannot download ${media.name}: URL not available.`
      );
    }
  }
  /**
   * Downloads selected media items.
   * For simplicity, this will open each selected file in a new tab.
   * For true "download" functionality, you'd need a backend endpoint that serves files.
   */
  downloadSelected(): void {
    if (this.selectedMediaIds.length === 0) {
      return;
    }
    const filesToDownload = this.mediaItems.filter((item) =>
      this.selectedMediaIds.includes(item.id!)
    );

    filesToDownload.forEach((file) => {
      if (file.original_url) {
        window.open(file.original_url, '_blank');
      } else {
        console.warn(
          `AttachmentsComponent: No URL found for media ID ${file.id} to download.`
        );
      }
    });
  }

  /**
   * Helper function to determine if a file type is an image.
   */
  isImage(mimeType: string): boolean {
    return mimeType.startsWith('image/');
  }

  /**
   * Helper to check if a file's type is allowed.
   */
  isValidFileType(file: File): boolean {
    if (
      this.allowedTypes.includes('image/*') &&
      file.type.startsWith('image/')
    ) {
      return true;
    }
    // Check for exact mime type match
    return this.allowedTypes.includes(file.type);
  }

  /**
   * Helper to get a display string of allowed file types.
   */
  getAllowedTypesDisplay(): string {
    const typesMap: { [key: string]: string } = {
      'image/jpeg': 'JPG',
      'image/png': 'PNG',
      'image/webp': 'WEBP',
      'image/*': 'Images',
      'application/pdf': 'PDF',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        'DOCX',
      'application/msword': 'DOC',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        'XLSX',
      'application/vnd.ms-excel': 'XLS',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        'PPTX',
      'application/vnd.ms-powerpoint': 'PPT',
    };
    return this.allowedTypes
      .map(
        (type) => typesMap[type] || type.split('/')[1]?.toUpperCase() || type
      )
      .join(', ');
  }

  /**
   * Helper to get file extension for display.
   */
  getFileExtension(fileName: string): string {
    const parts = fileName.split('.');
    return parts.length > 1 ? parts.pop()!.toUpperCase() : 'FILE';
  }

  /**
   * Helper to get an icon name based on mime type. (Using SVG icon paths in HTML)
   * This function returns a string identifier that maps to your SVG icon cases in HTML.
   */
  getFileIcon(mimeType: string): string {
    if (mimeType.startsWith('image/')) return 'image'; 
    if (mimeType.includes('pdf')) return 'picture_as_pdf';
    if (mimeType.includes('word')) return 'description'; 
    if (mimeType.includes('excel') || mimeType.includes('spreadsheet'))
      return 'table_chart';
    if (mimeType.includes('presentation')) return 'slideshow'; 
    if (mimeType.includes('audio')) return 'audiotrack';
    if (mimeType.includes('video')) return 'videocam';
    if (mimeType.includes('zip') || mimeType.includes('rar'))
      return 'folder_zip';
    return 'article'; 
  }

  /**
   * Helper to format file size into a human-readable string.
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Formats a date string using DatePipe.
   */
  formatDate(dateString: string): string {
    return this.datePipe.transform(dateString, 'mediumDate') || '';
  }

  /**
   * Handles errors when an image fails to load in the <img> tag.
   * Prevents broken image icon and hides the element.
   */
  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.onerror = null; 
    imgElement.style.display = 'none'; 
    console.warn('AttachmentsComponent: Image failed to load:', imgElement.src);
    this.cdr.detectChanges(); 
  }

  // --- Drag and Drop Handlers ---
  onDragOver(event: DragEvent): void {
    event.preventDefault(); 
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragEnter(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (
      event.relatedTarget &&
      (event.currentTarget as Element).contains(event.relatedTarget as Element)
    ) {
      return; 
    }
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    this.onFilesSelected(event); 
  }
  
  trackByMediaId(index: number, media: MediaItem): number | undefined {
    return media.id;
  }
  get isUploadAllowed(): boolean {
    return !!this.recordId; 
  }
}
