import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { CommonService } from '@app/services/common-service/common.service';
import { MediaItem } from '@app/shared/Model/MediaItem';
import { ServicePage } from '@app/shared/Model/servicePage';
import {
  LabelComponent,
  TextAreaComponent,
  Ui5MainModule,
} from '@ui5/webcomponents-ngx';
import { InputComponent } from '@ui5/webcomponents-ngx/main/input';
import '@ui5/webcomponents/dist/Input.js';
import { AttachmentsComponent } from '../../attachments/attachments.component';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LabelComponent,
    TextAreaComponent,
    ToastMessageComponent,
    InputComponent,
    Ui5MainModule,
    AttachmentsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss'],
})
export class AddServiceComponent {
  @Input() isOpen: boolean | null = null;
  @Input() servicePageId: number | null = null; // Input for editing existing service page
  @Output() close = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();
  @ViewChild(AttachmentsComponent) attachmentComponent!: AttachmentsComponent;

  ToastType: string = '';
  loading: boolean = false;
  isSuccess: boolean = false;
  errorMessage: string = '';
  isTabCollapsed = false;
  isActive: boolean = true;

  Service = new ServicePage().deserialize({ is_active: true });

  constructor(
    private commandService: CommonService,
    private datepipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.servicePageId) {
      this.loadServicePage();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      this.resetForm();
      if (this.servicePageId) {
        this.loadServicePage();
      }
    }
  }

  loadServicePage(): void {
    if (!this.servicePageId) return;

    this.loading = true;
    this.commandService.get(`ServicePages(${this.servicePageId})`).subscribe({
      next: (response: any) => {
        this.Service = new ServicePage().deserialize(response);
        this.isActive = this.Service.is_active;
        this.attachmentComponent.recordId = this.servicePageId!.toString();
        this.attachmentComponent.modelName = 'service-page';
        this.attachmentComponent.loadExistingMediaIfReady();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = 'Failed to load service page.';
        console.error(error);
        this.cdr.detectChanges();
      },
    });
  }

  // insertData(): void {
  //   if (!this.Service.title || !this.Service.short_description) {
  //     this.errorMessage = 'Please fill all required fields.';
  //     return;
  //   }

  //   this.Service.is_active = this.isActive;
  //   this.loading = true;

  //   const request = this.servicePageId
  //     ? this.commandService.put(`ServicePages(${this.servicePageId})`, this.Service.toOdata())
  //     : this.commandService.post('ServicePages', this.Service.toOdata());

  //   request.subscribe({
  //     next: (response: any) => {
  //       console.log(this.servicePageId ? 'Service page updated:' : 'Service page created:', response);

  //       if (!this.servicePageId && response && response.id) {
  //         this.servicePageId = response.id;
  //         // Update attachment component with the new service page ID
  //         if (this.attachmentComponent) {
  //           this.attachmentComponent.recordId = this.servicePageId.toString();
  //           this.attachmentComponent.modelName = 'service-page';
  //           this.attachmentComponent.loadExistingMediaIfReady();
  //         }
  //       }

  //       this.loading = false;
  //       this.isSuccess = true;
  //       this.ToastType = this.servicePageId ? 'update' : 'add';

  //       setTimeout(() => {
  //         this.IsOpenToastAlert.emit();
  //       }, 1000);

  //       this.closeDialog();
  //     },
  //     error: (error: any) => {
  //       this.loading = false;
  //       this.errorMessage = this.servicePageId
  //         ? 'An error occurred while updating the service page.'
  //         : 'An error occurred while creating the service page.';
  //       console.error(error);
  //       this.cdr.detectChanges();
  //     },
  //   });
  // }
  insertData(): void {
    if (!this.Service.title || !this.Service.short_description) {
      this.errorMessage = 'Please fill all required fields.';
      return;
    }

    this.Service.is_active = this.isActive;
    this.loading = true;

    const request = this.servicePageId
      ? this.commandService.put(
          `ServicePages(${this.servicePageId})`,
          this.Service.toOdata()
        )
      : this.commandService.post('ServicePages', this.Service.toOdata());

    request.subscribe({
      next: (response: any) => {
        console.log(
          this.servicePageId
            ? 'Service page updated:'
            : 'Service page created:',
          response
        );

        if (!this.servicePageId && response && response.id) {
          this.servicePageId = response.id;
          // Update attachment component with the new service page ID
          if (this.attachmentComponent && this.servicePageId !== null) {
            this.attachmentComponent.recordId = this.servicePageId.toString();
            this.attachmentComponent.modelName = 'service-page';
            this.attachmentComponent.loadExistingMediaIfReady();
          }
        }

        this.loading = false;
        this.isSuccess = true;
        this.ToastType = this.servicePageId ? 'update' : 'add';

        setTimeout(() => {
          this.IsOpenToastAlert.emit();
          26;
        }, 1000);

        this.closeDialog();
      },
      error: (error: any) => {
        this.loading = false;
        this.errorMessage = this.servicePageId
          ? 'An error occurred while updating the service page.'
          : 'An error occurred while creating the service page.';
        console.error(error);
        this.cdr.detectChanges();
      },
    });
  }
  closeDialog(): void {
    this.isOpen = false;
    this.close.emit();
  }

  resetForm(): void {
    this.Service = new ServicePage().deserialize({ is_active: true });
    this.isActive = true;
    this.errorMessage = '';
    if (this.attachmentComponent) {
      this.attachmentComponent.mediaItems = [];
      this.attachmentComponent.selectedMediaIds = [];
      this.attachmentComponent.recordId = this.servicePageId
        ? this.servicePageId.toString()
        : '';
      this.attachmentComponent.loadExistingMediaIfReady();
    }
    this.cdr.detectChanges();
  }

  toggleAction(event: any): void {
    this.isActive = event.target.checked;
    this.Service.is_active = this.isActive;
    this.cdr.detectChanges();
  }

  onFileUploaded(media: MediaItem): void {
    console.log('File uploaded:', media);
    this.cdr.detectChanges();
  }

  onUploadError(error: string): void {
    console.error('Upload error:', error);
    this.errorMessage = error;
    this.cdr.detectChanges();
  }
}
