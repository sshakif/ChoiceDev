// This code remains the same as in your previous submission, it's already correct for the desired flow.
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
  isActive: boolean = false;

  Service = new ServicePage().deserialize({});
  formloading: boolean|undefined;

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
    this.formloading = true;
    this.ToastType = 'add';
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
        this.loading = false;
        this.isSuccess = true;
        // this.ToastType = this.servicePageId ? 'updated' : 'created';
        this.ToastType = 'add';

        // Determine if it's a new record creation
        const isNewRecord = !this.servicePageId;

        // If it's a new item and we received an ID
        if (isNewRecord && response?.id) {
          this.servicePageId = response.id;
        }

        // Update attachment component with the correct ID and trigger actions
        if (this.attachmentComponent && this.servicePageId !== null) {
          this.attachmentComponent.recordId = this.servicePageId.toString();
          this.attachmentComponent.modelName = 'service-page';

          // Load existing media (important for subsequent edits or if already saved)
          this.attachmentComponent.loadExistingMediaIfReady();

          // If it was a new record, process any files that were staged before saving
          if (isNewRecord) {
            this.attachmentComponent.processPendingUploads();
          }
        }

        this.IsOpenToastAlert.emit();
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = 'Failed to save service page.';
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
    this.servicePageId = null; // Important to reset for new creation
    this.errorMessage = '';
    this.isSuccess = false;
    this.loading = false;
    this.isActive = true;

    // Also reset attachment component when the form is reset
    if (this.attachmentComponent) {
      this.attachmentComponent.recordId = ''; // Clear recordId
      this.attachmentComponent.loadExistingMediaIfReady(); // This will clear its mediaItems
      // The pendingFiles are cleared implicitly by ngOnChanges now as recordId becomes ''
    }
  }
}
