import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild, 
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { CommonService } from '@app/services/common-service/common.service';
import { ServicePage } from '@app/shared/Model/servicePage';
import { LabelComponent, TextAreaComponent } from '@ui5/webcomponents-ngx';
import { AttachmentsComponent } from "../../attachments/attachments.component"; 
import { MediaItem } from '@app/shared/Model/MediaItem'; 
@Component({
  selector: 'app-edit-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabelComponent,
    TextAreaComponent,
    ToastMessageComponent,
    AttachmentsComponent, 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe],
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.scss',
})
export class EditServiceComponent implements OnInit {
  @Input() ServiceId: number | null = null;
  @Input() ServiceData: any = {}; 
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() refreshTable = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();

  @ViewChild(AttachmentsComponent) attachmentComponent!: AttachmentsComponent;

  loading = true; 
  formloading = false; 
  isActive: boolean = true;
  isEditError = false;
  errorMessage = '';
  sucessMessage = '';
  ToastType = '';

  isTabCollapsed = false;

 Service = new ServicePage().deserialize({});

  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (changes['isOpen'].currentValue === true) {
        console.log('EditServiceComponent: Dialog opened or reopened.');
        if (this.ServiceId) {
          this.getCandidateInfo();
        } else {
          this.resetForm();
          this.loading = false; 
        }
      } else if (changes['isOpen'].currentValue === false) {
        this.resetForm(); 
      }
    } else if (changes['ServiceId'] && changes['ServiceId'].currentValue !== changes['ServiceId'].previousValue) {
      if (changes['ServiceId'].currentValue) {
        console.log(`EditServiceComponent: ServiceId changed to ${changes['ServiceId'].currentValue}. Loading data.`);
        this.getCandidateInfo();
      } else {
        console.log('EditServiceComponent: ServiceId became null/undefined. Resetting form.');
        this.resetForm();
      }
    }
  }

  populateData(): void {
    this.Service = new ServicePage().deserialize(this.ServiceData);

    this.isActive = this.Service.is_active === true;
  }

  getCandidateInfo(): void {
    if (!this.ServiceId) {
      this.loading = false;
      if (this.attachmentComponent) {
        this.attachmentComponent.recordId = '';
      }
      return;
    }

    this.loading = true; 
    console.log(`EditServiceComponent: Fetching ServicePages/${this.ServiceId}`);
    this.commonService.get(`ServicePages/${this.ServiceId}`).subscribe({
      next: (response: any) => {
        this.ServiceData = response; 
        this.populateData(); 

        this.loading = false; 

        if (this.attachmentComponent) {
          console.log(`EditServiceComponent: Setting Attachments recordId to "${this.ServiceId}".`);
          this.attachmentComponent.recordId = this.ServiceId !== null ? this.ServiceId.toString() : ''; // Ensure it's a string and not null
          this.attachmentComponent.modelName = 'service-page';
        }
      },
      error: (error) => {
        this.loading = false; 
        this.errorMessage = 'Failed to load service page data.';
        console.error('Error loading service page for edit:', error);
      },
    });
  }

  updateData(): void {
    if (!this.Service.title || !this.Service.short_description || !this.Service.long_description) {
      this.errorMessage = 'Title, Short Description, and Long Description are required.';
      this.ToastType = 'error';
      this.IsOpenToastAlert.emit();
      return;
    }

    this.Service.is_active = this.isActive;

    this.formloading = true;
    this.errorMessage = ''; 
    
    if (this.ServiceId === null) {
      this.errorMessage = 'Service ID is missing for update operation.';
      this.formloading = false;
      this.ToastType = 'error';
      this.IsOpenToastAlert.emit();
      return;
    }
    console.log(`EditServiceComponent: Updating ServicePages(${this.ServiceId})`, this.Service.toOdata());
    this.commonService
      .put(`ServicePages(${this.ServiceId})`, this.Service.toOdata(), true)
      .subscribe({
        next: () => {
          console.log('EditServiceComponent: Service data updated successfully.');
          if (this.attachmentComponent && this.ServiceId !== null) {
            console.log('EditServiceComponent: Triggering pending uploads for AttachmentsComponent.');
            this.attachmentComponent.recordId = this.ServiceId.toString();
            this.attachmentComponent.modelName = 'service-page'; 
            this.attachmentComponent.processPendingUploads();
          }
          this.formloading = false;
          this.ToastType = 'success';
          this.sucessMessage = 'Service page updated successfully.';
          this.IsOpenToastAlert.emit(); 

        
          setTimeout(() => {
            this.closeDialog(); 
            this.refreshTable.emit(); 
          }, 1000);
        },
        error: (error) => {
          this.formloading = false;
          this.isEditError = true;
          this.errorMessage = error.error?.message || 'Error updating service page.';
          this.ToastType = 'error';
          console.error("Update error:", error);
          this.IsOpenToastAlert.emit();
        },
      });
  }

  toggleAction(event: any): void {
    this.isActive = event.target.checked;
    this.Service.is_active = this.isActive;
  }
  onAttachmentUploaded(mediaItem: MediaItem): void {
    console.log('EditServiceComponent: Attachment uploaded (event received):', mediaItem);
    
  }

  clearErrorMessage(event: Event): void {
    event.stopPropagation();
    this.errorMessage = '';
  }

  closeDialog(): void {
    this.isOpen = false;
    this.close.emit();
    this.resetForm();
  }

  resetForm(): void {
    this.Service = new ServicePage(); 
    this.ServiceId = null;
    this.ServiceData = {}; 
    this.isActive = true;
    this.loading = false;
    this.formloading = false;
    this.isEditError = false;
    this.errorMessage = '';
    this.sucessMessage = '';
    this.ToastType = '';

    if (this.attachmentComponent) {
      console.log('EditServiceComponent: Resetting AttachmentsComponent recordId to empty.');
      this.attachmentComponent.recordId = '';
      this.attachmentComponent.pendingFiles = [];
    }
  }
}