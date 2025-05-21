import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { CommonService } from '@app/services/common-service/common.service';
import { ServicePage } from '@app/shared/Model/servicePage';
import { LabelComponent, TextAreaComponent } from '@ui5/webcomponents-ngx';
import { AttachmentsComponent } from "../../attachments/attachments.component";

@Component({
  selector: 'app-edit-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabelComponent,
    TextAreaComponent,
    ToastMessageComponent,
    AttachmentsComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  loading = true;
  formloading = false;
  isActive: boolean = true;
  isEditError = false;
  errorMessage = '';
  sucessMessage = '';
  ToastType = '';

    //tab user
  isTabCollapsed = false;
  
  Service = new ServicePage().deserialize({});

  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    // this.isOpen = true;
    if (this.ServiceData) {
      this.populateData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      this.getCandidateInfo();
    }
  }
  populateData(): void {
  this.Service.title = this.ServiceData.title || '';
  this.Service.short_description = this.ServiceData.short_description || '';
  this.Service.long_description = this.ServiceData.long_description || '';
  this.Service.is_active = this.ServiceData.is_active === true;
  this.isActive = this.Service.is_active; // ⬅️ Synchronize toggle with model
}

  getCandidateInfo(): void {
    if (!this.ServiceData) return;
    this.loading = true;
    this.commonService.get(`ServicePages/${this.ServiceId}`).subscribe({
      next: (Response: any) => {
        this.ServiceData = Response;
        this.populateData();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  updateData(): void {
    if (!this.Service.title || !this.Service.short_description) {
      this.errorMessage = 'Both Services fields are required.';
      return;
    }

    this.formloading = true;
    this.ToastType = 'edit';

    this.commonService
      .put(`ServicePages(${this.ServiceId})`, this.Service, true)
      .subscribe({
        next: () => {
          this.formloading = false;
          this.isOpen = false;
          this.refreshTable.emit();
          this.IsOpenToastAlert.emit();
        },
        error: (error) => {
          this.formloading = false;
          this.isEditError = true;
          this.errorMessage = error.error?.message || 'Error updating FAQ';
        },
      });
  }
  
  toggleAction(event: any): void {
    this.isActive = event.target.checked;
    this.Service.is_active = this.isActive;
  }

  closeDialog(): void {
    this.isOpen = false;
    this.close.emit();
  }

  clearErrorMessage(event: Event): void {
    event.stopPropagation();
    this.errorMessage = '';
  }
}
