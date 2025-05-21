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

  attachments: { file: File; selected: boolean; previewUrl?: string }[] = [];

  constructor(
    private commandService: CommonService,
    private datepipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  // Check if file is an image
  isImage(file: File): boolean {
    return file.type.startsWith('image/');
  }

  // Check if an image is already uploaded
  isImageAlreadyUploaded(): boolean {
    return this.attachments.some((att) => this.isImage(att.file));
  }

  // Open file dialog
  onUploadClick(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  
  // Handle selected files
  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const selectedFile = input.files[0];

      if (this.isImageAlreadyUploaded() && this.isImage(selectedFile)) {
        alert('Only one image can be uploaded.');
        return;
      }

      const attachment: { file: File; selected: boolean; previewUrl?: string } =
        {
          file: selectedFile,
          selected: false,
        };

      if (this.isImage(selectedFile)) {
        attachment.previewUrl = URL.createObjectURL(selectedFile);
      }

      this.attachments.push(attachment);
      this.cdr.detectChanges();
    }

    input.value = ''; // Clear input for next upload
  }

  toggleSelection(index: number): void {
    this.attachments[index].selected = !this.attachments[index].selected;
    this.cdr.detectChanges();
  }

  removeFile(index: number): void {
    const attachment = this.attachments[index];
    if (attachment.previewUrl) {
      URL.revokeObjectURL(attachment.previewUrl);
    }
    this.attachments.splice(index, 1);
    this.cdr.detectChanges();
  }

  downloadSelected(): void {
    const selectedFiles = this.attachments
      .filter((a) => a.selected)
      .map((a) => a.file);

    if (selectedFiles.length === 0) {
      alert('No files selected for download.');
      return;
    }

    try {
      selectedFiles.forEach((file) => {
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(url);
      });
    } catch (error) {
      console.error('Download failed:', error);
      alert('An error occurred while downloading files.');
    }
  }

  ngOnDestroy(): void {
    this.attachments.forEach((attachment) => {
      if (attachment.previewUrl) {
        URL.revokeObjectURL(attachment.previewUrl);
      }
    });
  }
}
