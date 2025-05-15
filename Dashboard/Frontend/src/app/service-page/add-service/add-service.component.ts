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
import { InputComponent, LabelComponent } from '@ui5/webcomponents-ngx';
import { TextAreaComponent } from '@ui5/webcomponents-ngx/main/text-area';
// import { FormPreloaderComponent } from '@app/components/form-preloader/form-preloader.component';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { CommonService } from '@app/services/common-service/common.service';
import { ServicePage } from '@app/shared/Model/servicePage';

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
    InputComponent,
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

  Service: ServicePage = new ServicePage().deserialize({});

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  insertData() {
    if (!this.Service.title) {
      this.errorMessage = 'Title required.';
      return;
    }
    this.loading = true;
    this.commonService.post('ServicePages', this.Service.toOdata()).subscribe(
      (response) => {
        console.log(response);
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

  toggleActive($event: any) {
    if($event.target.checked){
      this.isActive= true;
    }
    else{
      this.isActive=false;
    }
  }

  resetForm() {
    this.errorMessage = '';
    this.Service.title = '';
    this.Service.short_description = '';
    this.Service.long_description = '';
  }

  closeDialog() {
    this.isOpen = false;
    this.close.emit();
  }
}
