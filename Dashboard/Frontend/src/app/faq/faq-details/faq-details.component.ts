import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './faq-details.component.html',
  styleUrl: './faq-details.component.scss',
})
export class FaqDetailsComponent implements OnInit {
  @Input() faqId: number | null = null;
  @Input() faqData: any = {};
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  formloading: boolean = false;
  question: string = '';
  answer: string = '';
  ngOnInit(): void {
    if (this.faqData) {
      this.question = this.faqData.question;
      this.answer = this.faqData.answer;
    }
  }

  closeDialog() {
    this.isOpen = false;
    this.close.emit();
  }
}
