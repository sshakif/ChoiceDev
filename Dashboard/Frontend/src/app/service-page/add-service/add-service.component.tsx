import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LabelComponent } from '@ui5/webcomponents-ngx';
import { TextAreaComponent } from '@ui5/webcomponents-ngx/main/text-area';
// import { FormPreloaderComponent } from '@app/components/form-preloader/form-preloader.component';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { CommonService } from '@app/services/common-service/common.service';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LabelComponent,
    // FormPreloaderComponent,
    TextAreaComponent,
    ToastMessageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.scss',
})
export class AddServiceComponent implements OnInit {
  @Input() isOpen: boolean | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();

  loading: boolean = false;
  isAddError: boolean = false;
  isActive: boolean = true;
  ToastType: string = '';
  errorMessage: string = '';

  title: string = '';
  slug: string = '';
  short_description: string = '';
  long_description: string = '';

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  insertData() {
    if (!this.title ) {
      this.errorMessage = 'Title required.';
      return;
    }

    const data = {
      title: this.title,
      slug: this.slug,
      short_description: this.short_description,
      long_description: this.long_description,
      is_active: this.isActive,
    };
    this.loading = true;
    this.commonService.post('ServicePages', data).subscribe(
      (response) => {
        this.loading = false;
        this.ToastType = 'add';
        setTimeout(() => {
          this.IsOpenToastAlert.emit();
        }, 1000);
        this.resetForm();
        this.closeDialog();
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'An error occurred while submitting the data.';
        console.error(error);
      }
    );
  }

  toggleActive(event: any) {
    this.isActive = event.target.checked;
  }

  resetForm() {
    this.errorMessage = '';
    this.title = '';
    this.slug = '';
    this.short_description = '';
    this.long_description = '';
  }

  closeDialog() {
    this.isOpen = false;
    this.close.emit();
  }
}
