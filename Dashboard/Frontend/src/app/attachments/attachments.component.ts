import { CommonModule, DatePipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '@app/services/common-service/common.service';
import {  MediaService } from '@app/services/media.service';
import { MediaItem } from '@app/shared/Model/MediaItem';

@Component({
  selector: 'app-attachments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './attachments.component.html',
  styleUrl: './attachments.component.scss',
})
export class AttachmentsComponent implements OnInit, OnDestroy {
   @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  mediaItems: MediaItem[] = [];

  attachments: { file: File; selected: boolean; previewUrl?: string }[] = [];

  modelName = 'servicepage';
  recordId = 1;

  constructor(private mediaService: MediaService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadMedia();
  }

  loadMedia() {
    this.mediaService.getMedia(this.modelName, this.recordId).subscribe(
      (media) => {
        this.mediaItems = media;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Failed to load media', error);
      }
    );
  }

  onUploadClick(): void {
    this.fileInput.nativeElement.click();
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      this.mediaService.uploadMedia(this.modelName, this.recordId, file).subscribe(
        (uploadedMedia) => {

          this.mediaItems.push(uploadedMedia);
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Upload failed', error);
        }
      );
    }
    input.value = '';
  }

  deleteMedia(mediaId: number, index: number): void {
    this.mediaService.deleteMedia(mediaId).subscribe(
      () => {
        this.mediaItems.splice(index, 1);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Delete failed', error);
      }
    );
  }

  downloadMedia(media: MediaItem): void {
    const a = document.createElement('a');
    a.href = media.original_url;
    a.download = media.file_name;
    a.target = '_blank';
    a.click();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }
}