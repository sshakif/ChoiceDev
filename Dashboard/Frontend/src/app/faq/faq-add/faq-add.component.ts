import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AngularEditorModule } from '@kolkov/angular-editor';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { CommonService } from '@app/services/common-service/common.service';
import { Faq } from '@app/shared/Model/faq';
import { LabelComponent, TextAreaComponent } from '@ui5/webcomponents-ngx';
@Component({
  selector: 'app-faq-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LabelComponent,
    TextAreaComponent,
    ToastMessageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './faq-add.component.html',
  styleUrl: './faq-add.component.scss',
})
export class FaqAddComponent implements OnInit, OnChanges {
  @Input() isOpen: boolean | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();
  ToastType: string = '';
  loading: boolean = false;
  isSuccess: boolean = false;
  isAddError: boolean = false;

  errorMessage: string = '';

  htmlContent: string = '';
  placeholder: string = '';
  isActive: boolean = true;

  faq = new Faq().deserialize({});

  constructor(
    private commandService: CommonService,
    private datepipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    // this.isOpen = true; //model open
  }
  insertData() {
    if (!this.faq.question || !this.faq.answer) {
      this.errorMessage = 'Please fill all the fields.';
      return;
    }

    this.loading = true;
    this.commandService.post('Faqs', this.faq).subscribe(
      (response: any) => {
        console.log('response', response);
        this.loading = false;
        this.isSuccess = true;
        this.ToastType = 'add';
        setTimeout(() => {
          this.IsOpenToastAlert.emit();
        }, 1000);
        this.resetForm();
        this.closeDialog();
      },
      (error: any) => {
        this.loading = false;
        this.errorMessage = 'An error occurred while submitting the data.';
        console.error(error);
      }
    );
  }
  // toggleAction method removed to resolve duplicate implementation error

  closeDialog() {
    this.isOpen = false;
    this.close.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      this.resetForm(); // Every time modal opens
    }
  }
  resetForm() {
    this.faq.question = '';
    this.faq.answer = '';
    this.htmlContent = '';
    this.isActive = true;
  }

  // count add or  view page apply
  wordCounts = {
    question: 0,
    answer: 0,
  };

  wordErrors = {
    question: false,
    answer: false,
  };
  toggleAction(event: any): void {
    this.isActive = event.target.checked;
    this.faq.is_active = this.isActive;
    console.log('Switch toggled:', this.isActive);
  }

  // toggleAction(event: any): void {
  //   console.log('Switch toggled:', event.target.checked);
  // }

  validateWords(field: 'question' | 'answer', maxWords: number): void {
    const text = this.faq[field] || '';
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word);
    this.wordCounts[field] = words.length;
    this.wordErrors[field] = words.length > maxWords;

    if (words.length > maxWords) {
      // Trim to limit
      const trimmed = words.slice(0, maxWords).join(' ');
      this.faq[field] = trimmed;
      this.wordCounts[field] = maxWords;
      this.wordErrors[field] = true;
    } else {
      this.wordErrors[field] = false;
    }
  }
}
