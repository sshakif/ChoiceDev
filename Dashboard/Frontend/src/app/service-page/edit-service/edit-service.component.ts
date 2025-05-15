import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { ServicePage } from '@app/shared/Model/servicePage';
import { InputComponent, LabelComponent, TextAreaComponent } from '@ui5/webcomponents-ngx';
import { CommonService } from 'app/services/common-service/common.service';


@Component({
  selector: 'app-edit-service',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    LabelComponent,
    TextAreaComponent,
    ToastMessageComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.scss',
})
export class EditServiceComponent implements OnInit, OnChanges {
  @Input() servicePageId: number | null = null;
  @Input() servicePageData: any = {};
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() refreshTable: EventEmitter<void> = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();

  loading: boolean = true;
  errorMessage: string = '';
  formloading: boolean = false;
  ToastType: string = '';
  odata: boolean;
  api: boolean;
  isEditError: boolean = false;
  isActive: any;
  sucessMessage: string = '';
  servicePage: any = {};
  title: string = '';
  short_description: string = '';
  long_description: string = '';

  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe
  ) {
    this.odata = this.commonService.odata;
    this.api = this.commonService.api;
  }

  ngOnInit(): void {
    if (this.servicePageData) {
      this.title = this.servicePageData.title;
      this.short_description = this.servicePageData.short_description;
      this.long_description = this.servicePageData.long_description;
      this.isActive = this.servicePageData.is_active;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      this.getCandidateInfo();
    }
  }

  getCandidateInfo() {
    if (!this.servicePageId) {
      return;
    }
    this.loading = true;
    this.commonService.get(`ServicePages/${this.servicePageId}`).subscribe((response: any) => {
      this.servicePage = response;
    });
  }

  selectBranch(event: any) {
    const combobox = event.detail;
    const selectedItem = combobox.item;
    if (selectedItem) {
      this.servicePage.id = selectedItem.id;
    } else {
    }
  }
  updateData() {
    if (!this.title) {
      this.errorMessage = 'Title field is required.';
      return;
    }

    const formData = {
      title: this.title,
      short_description: this.short_description,
      long_description: this.long_description,
      is_active: this.isActive ? true : false,
    };
    this.ToastType = 'edit';
    this.formloading = true;

    this.commonService.put(`ServicePages(${this.servicePage.id})`, formData, true).subscribe({
      next: (response: any) => {
        this.formloading = false;
        this.isOpen = false;
        this.refreshTable.emit();
        this.IsOpenToastAlert.emit();
      },
      error: (error: any) => {
        this.formloading = false;
        this.isEditError = true;
        this.errorMessage = error.error?.message || 'Error updating Service Page';
        console.error('Error updating Service Page:', error);
      },
    });
  }
  toggleActive($event: any) {
    this.isActive = $event.target.checked;
  }
  closeDialog() {
    this.isOpen = false;
    this.close.emit();
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
  clearErrorMessage(event: Event) {
    event.stopPropagation();
    this.errorMessage = '';
  }
}

