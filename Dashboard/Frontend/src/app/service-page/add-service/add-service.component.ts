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
//import { InputComponent } from '@ui5/webcomponents-ngx'; // Uncomment and use the correct component if needed
import { InputComponent } from '@ui5/webcomponents-ngx/main/input';
import '@ui5/webcomponents/dist/Input.js';
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.scss',
})
export class AddServiceComponent {
  @Input() isOpen: boolean | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();

  ToastType: string = '';
  loading: boolean = false;
  isSuccess: boolean = false;
  isAddError: boolean = false;
  isTabCollapsed = false;
  errorMessage: string = '';

  htmlContent: string = '';
  placeholder: string = '';
  isActive: boolean = true;

  Service = new ServicePage().deserialize({});
  constructor(
    private commandService: CommonService,
    private datepipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isOpen = true; //model open
  }

  insertData() {
    if (!this.Service.title || !this.Service.short_description) {
      this.errorMessage = 'Please fill all the fields.';
      return;
    }
    console.log('Submitting data...', this.Service);
    this.loading = true;
    this.commandService.post('ServicePages', this.Service).subscribe(
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
    this.Service.title = '';
    this.Service.short_description = '';
    this.Service.long_description = '';
    this.htmlContent = '';
    this.isActive = true;
  }
  toggleAction(event: any): void {
    this.isActive = event.target.checked;
    console.log('Switch toggled:', this.isActive);
  }
}
