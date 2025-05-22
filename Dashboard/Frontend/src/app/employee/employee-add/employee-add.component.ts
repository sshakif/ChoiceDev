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
import { AttachmentsComponent } from "../../attachments/attachments.component";
import { Employee } from '@app/shared/Model/employee';
@Component({
  selector: 'app-employee-add',
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
    AttachmentsComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.scss'
})
export class EmployeeAddComponent {
  @Input() isOpen: boolean | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();

  ToastType: string = '';
  loading: boolean = false;
  isSuccess: boolean = false;
  isAddError: boolean = false;
  //tab user
  isTabCollapsed = false;

  errorMessage: string = '';

  htmlContent: string = '';
  placeholder: string = '';
  isActive: boolean = true;

  employee = new Employee().deserialize({});

  constructor(private commandService: CommonService, private datepipe: DatePipe, private cdr: ChangeDetectorRef){}
 
  ngOnInit(): void {
    this.isOpen = true; //model open
  }
    insertData() {
      if (!this.employee.first_name || !this.employee.email) {
        this.errorMessage = 'Please fill all the fields.';
        return;
      }
      console.log('Submitting data...', this.employee);
      this.loading = true;
      this.commandService.post('Employees', this.employee).subscribe(
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
      this.employee.first_name = '';
      this.employee.last_name = '';
      this.employee.email = '';
      this.employee.phone = '';
      this.employee.department = '';
      this.employee.designation = '';
      this.employee.address = '';
      this.employee.date_of_birth = '';
      this.employee.joining_date = '';
      this.employee.salary = 0;

      
      this.htmlContent = '';
      this.isActive = true;
    }
    toggleAction(event: any): void {
      this.isActive = event.target.checked;
        this.employee.is_active = this.isActive;
      console.log('Switch toggled:', this.isActive);
    }
    departmentList: string[] = ['Select','IT', 'HR', 'Finance', 'Marketing'];
    designationList: string[] = ['Select','Manager', 'Developer', 'Analyst', 'Support'];

}
