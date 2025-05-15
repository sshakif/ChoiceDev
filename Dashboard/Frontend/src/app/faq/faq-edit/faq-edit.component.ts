import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { LabelComponent, TextAreaComponent } from '@ui5/webcomponents-ngx';
import { CommonService } from 'app/services/common-service/common.service';

@Component({
  selector: 'app-faq-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabelComponent,
    TextAreaComponent,
    ToastMessageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './faq-edit.component.html',
  styleUrl: './faq-edit.component.scss',
})
export class FaqEditComponent {
  @Input() faqId: number | null = null;
  @Input() faqData: any = {};
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() refreshTable: EventEmitter<void> = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();

  loading: boolean = true;
  errorMessage: string = '';
  formloading: boolean = false;
  ToastType: string = '';
  odata: boolean = false;
  // api: boolean;
  isEditError: boolean = false;
  isActive: any;
  sucessMessage: string = '';
  faq: any = {};
  answer: string = '';
  question: string = '';
  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe
  ) {
    this.odata = this.commonService.odata;
    // this.api = this.commonService.api;
  }

  ngOnInit(): void {
    // this.isOpen = true;
    if (this.faqData) {
      this.question = this.faqData.question;
      this.answer = this.faqData.answer;
      this.isActive = this.faqData.is_active;
      this.loadfaqData();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      this.getCandidateInfo();
    }
  }
  loadfaqData(): void {

    this.question = this.faqData.name || '';
    this.answer = this.faqData.email || '';
    this.isActive = this.faqData.is_active === true;
  }

  getCandidateInfo() {
    if (!this.faqId) {
      return;
    }
    this.loading = true;
  this.commonService.get(`Faqs/${this.faqId}`).subscribe({
      next: (response: any) => {
        this.faqData = response;
        this.loadfaqData();
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
  updateData() {
    if (!this.question || !this.answer) {
      this.errorMessage = 'Both Question and Answer fields are required.';
      return;
    }

    const formData = {
      question: this.question,
      answer: this.answer,
      is_active: this.isActive ? true : false,
    };
    this.ToastType = 'edit';
    this.formloading = true;

    this.commonService.put(`Faqs(${this.faqId!})`, formData, true).subscribe({
      next: (response: any) => {
        this.formloading = false;
        this.isOpen = false;
        this.refreshTable.emit();
        this.IsOpenToastAlert.emit();
      },
      error: (error: any) => {
        this.formloading = false;
        this.isEditError = true;
        this.errorMessage = error.error?.message || 'Error updating FAQ';
        console.error('Error updating FAQ:', error);
      },
    });
  }
  
  // selectBranch(event: any) {
  //   const combobox = event.detail;
  //   const selectedItem = combobox.item;
  //   if (selectedItem) {
  //     this.faq.id = selectedItem.id;
  //   } else {
  //   }
  // }
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
