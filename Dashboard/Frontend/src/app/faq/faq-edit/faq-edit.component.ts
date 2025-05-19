import { CommonModule, DatePipe } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { Faq } from '@app/shared/Model/faq';
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
  styleUrls: ['./faq-edit.component.scss'],
})
export class FaqEditComponent {
  @Input() faqId: number | null = null;
  @Input() faqData: any = {};
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() refreshTable = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();

  loading = true;
  formloading = false;
  isActive: boolean = false;
  isEditError = false;
  errorMessage = '';
  sucessMessage = '';
  ToastType = '';

  // question = '';
  // answer = '';
  faq = new Faq().deserialize({});
  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    if (this.faqData) {
      this.populateData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      this.getCandidateInfo();
    }
  }

  populateData(): void {
    this.faq.question = this.faqData.question || '';
    this.faq.answer = this.faqData.answer || '';
    this.faq.is_active = this.faqData.is_active === true;
     this.isActive = this.faq.is_active; // ⬅️ Synchronize toggle with model
  }

  getCandidateInfo(): void {
    if (!this.faqId) return;

    this.loading = true;
    this.commonService.get(`Faqs/${this.faqId}`).subscribe({
      next: (response: any) => {
        this.faqData = response;
        this.populateData();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  updateData(): void {
    if (!this.faq.question || !this.faq.answer) {
      this.errorMessage = 'Both Question and Answer fields are required.';
      return;
    }
    this.formloading = true;
    this.ToastType = 'edit';

    this.commonService.put(`Faqs(${this.faqId})`, this.faq, true).subscribe({
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
  toggleActive(event: any): void {
  this.isActive = event.target.checked;
  this.faq.is_active = this.isActive;
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
