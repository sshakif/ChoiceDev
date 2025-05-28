import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild // Import ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { CommonService } from '@app/services/common-service/common.service';
import { ServicePage } from '@app/shared/Model/servicePage';
import { LabelComponent, TextAreaComponent } from '@ui5/webcomponents-ngx';
import { AttachmentsComponent } from "../../attachments/attachments.component"; // Ensure correct path
import { MediaItem } from '@app/shared/Model/MediaItem'; // Import MediaItem if you use it in onAttachmentUploaded

@Component({
  selector: 'app-edit-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabelComponent,
    TextAreaComponent,
    ToastMessageComponent,
    AttachmentsComponent, // Import AttachmentsComponent here
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe], // Add DatePipe to providers if not global
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

  ngOnInit(): void {
    // ngOnInit might run before ServiceId is fully available from parent @Input,
    // so ngOnChanges is generally more reliable for reacting to input changes.
    // If ServiceData is passed initially on component creation, this will populate the form.
    if (this.ServiceData && Object.keys(this.ServiceData).length > 0) {
      this.populateData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // This hook is critical for reacting to changes in @Input properties like `isOpen` and `ServiceId`.
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      // Dialog just opened
      if (this.ServiceId) {
        // If ServiceId is present, fetch data for editing
        this.getCandidateInfo();
      } else {
        // If no ServiceId, it implies a new record (though this component is 'edit-service')
        // We'll reset the form to a clean state.
        this.resetForm();
      }
    } else if (changes['ServiceId'] && changes['ServiceId'].currentValue !== changes['ServiceId'].previousValue) {
        // This handles cases where ServiceId might change directly (e.g., from a list selection)
        // while the dialog is already open, if that's a use case.
        if (changes['ServiceId'].currentValue) {
            this.getCandidateInfo();
        } else {
            this.resetForm();
        }
    }
    // If isOpen becomes false, the resetForm is handled by closeDialog().
  }

  populateData(): void {
    this.Service.title = this.ServiceData.title || '';
    this.Service.short_description = this.ServiceData.short_description || '';
    this.Service.long_description = this.ServiceData.long_description || '';
    this.Service.is_active = this.ServiceData.is_active === true; // Ensure boolean
    this.isActive = this.Service.is_active; // Synchronize toggle with model
  }

  // getCandidateInfo(): void {
  //   if (!this.ServiceId) {
  //     this.loading = false;
  //     // Reset attachment component if no ServiceId to ensure no old data is shown
  //     if (this.attachmentComponent) {
  //       this.attachmentComponent.recordId = '';
  //       this.attachmentComponent.loadExistingMediaIfReady();
  //     }
  //     return;
  //   }

  //   this.loading = true;
  //   this.commonService.get(`ServicePages/${this.ServiceId}`).subscribe({
  //     next: (response: any) => {
  //       this.ServiceData = response;
  //       this.populateData();
  //       this.loading = false;
        
  //       // --- KEY INTEGRATION: Pass ServiceId to AttachmentsComponent for existing files ---
  //       if (this.attachmentComponent) {
  //         console.log(`EditServiceComponent: Setting Attachments recordId to ${this.ServiceId}`);
  //         this.attachmentComponent.recordId = this.ServiceId ? this.ServiceId.toString() : '';
  //         this.attachmentComponent.modelName = 'service-page';
  //         // The AttachmentsComponent's ngOnChanges will react to `recordId` change
  //         // and call its own `loadExistingMediaIfReady()`. No need to call it directly here.
  //       }
  //     },
  //     error: (error) => {
  //       this.loading = false;
  //       this.errorMessage = 'Failed to load service page data.';
  //       console.error('Error loading service page for edit:', error);
  //     },
  //   });
  // }
  getCandidateInfo(): void {
    if (!this.ServiceId) { // Ensure ServiceId is present
      this.loading = false;
      // Ensure attachment component is reset if no ID
      if (this.attachmentComponent) {
        this.attachmentComponent.recordId = ''; // Set recordId to empty string
        // AttachmentsComponent's ngOnChanges will then clear its own mediaItems
      }
      return;
    }
    this.loading = true;
    this.commonService.get(`ServicePages/${this.ServiceId}`).subscribe({
      next: (Response: any) => {
        this.ServiceData = Response;
        this.populateData();
        this.loading = false;
        
        // --- THIS IS WHERE YOU PASS THE ID FOR EDITING ---
        if (this.attachmentComponent) {
          console.log(`EditServiceComponent: Setting Attachments recordId to ${this.ServiceId}`);
            this.attachmentComponent.recordId = this.ServiceId?.toString?.() ?? ''; // Pass the ID as a string
          this.attachmentComponent.modelName = 'service-page'; 
          // IMPORTANT: AttachmentsComponent's ngOnChanges will now react to this `recordId` change
          // and call its own `loadExistingMediaIfReady()` to display the images.
          // No need to call `loadExistingMediaIfReady()` directly from here anymore.
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
    // Basic form validation
    if (!this.Service.title || !this.Service.short_description) {
      this.errorMessage = 'Both title and short description are required.';
      return;
    }

    this.Service.is_active = this.isActive; // Ensure the active status is updated in the model before sending

    this.formloading = true;
    this.ToastType = 'edit';
    this.errorMessage = ''; // Clear previous error messages

    this.commonService
      .put(`ServicePages(${this.ServiceId})`, this.Service.toOdata(), true) // Assume Service.toOdata() formats data correctly
      .subscribe({
        next: () => {
          console.log('EditServiceComponent: Service data updated successfully.');
          
          // --- KEY INTEGRATION: Process any pending uploads after successful main data update ---
          if (this.attachmentComponent && this.ServiceId !== null) {
            console.log('EditServiceComponent: Triggering pending uploads for AttachmentsComponent.');
            // Ensure recordId is correctly set on the attachment component BEFORE processing
            this.attachmentComponent.recordId = this.ServiceId.toString(); 
            this.attachmentComponent.modelName = 'service-page';
            this.attachmentComponent.processPendingUploads();
          }

          this.formloading = false;
          // Optionally, wait for attachment uploads to complete before closing dialog
          // For now, close immediately after main data update and trigger uploads
          this.closeDialog(); 
          this.refreshTable.emit(); // Refresh the parent table/list
          this.IsOpenToastAlert.emit(); // Show success toast
        },
        error: (error) => {
          this.formloading = false;
          this.isEditError = true;
          this.errorMessage = error.error?.message || 'Error updating service page.';
          console.error("Update error:", error);
        },
      });
  }
  
  toggleAction(event: any): void {
    this.isActive = event.target.checked;
    this.Service.is_active = this.isActive;
  }

 
  // Handle fileUploaded event from AttachmentsComponent
  onAttachmentUploaded(mediaItem: MediaItem): void {
    console.log('EditServiceComponent: Attachment uploaded:', mediaItem);
    // You might want to display a success message here,
    // or the AttachmentsComponent itself could handle its own success messages.
    // getCandidateInfo() is called in HTML, which will refresh attachments list
    // this.getCandidateInfo(); // Already handled by (fileUploaded) in HTML
  }


  clearErrorMessage(event: Event): void {
    event.stopPropagation();
    this.errorMessage = '';
  }

  closeDialog(): void {
    this.isOpen = false;
    this.close.emit();
    this.resetForm(); // This will clear the recordId in AttachmentsComponent via resetForm
  }

  // Add a resetForm method for consistency and to clear state
  resetForm(): void {
    this.Service = new ServicePage().deserialize({});
    this.ServiceId = null; 
    this.ServiceData = {}; 
    this.isActive = true;
    this.loading = false;
    this.formloading = false;
    this.isEditError = false;
    this.errorMessage = '';
    this.sucessMessage = '';
    this.ToastType = '';

    // Also reset the attachments component
    if (this.attachmentComponent) {
      console.log('EditServiceComponent: Resetting AttachmentsComponent recordId to empty.');
      this.attachmentComponent.recordId = ''; // This will trigger ngOnChanges in AttachmentsComponent
                                             // and clear its mediaItems and pendingFiles.
    }
  }
  
}