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
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { CommonService } from '@app/services/common-service/common.service';
import {
  LabelComponent,
  TextAreaComponent,
  Ui5MainModule,
} from '@ui5/webcomponents-ngx';
//import { InputComponent } from '@ui5/webcomponents-ngx'; // Uncomment and use the correct component if needed
import { AddServiceComponent } from '@app/service-page/add-service/add-service.component';
import { Employee } from '@app/shared/Model/employee';
import { InputComponent } from '@ui5/webcomponents-ngx/main/input';
import '@ui5/webcomponents/dist/Input.js';
import { AttachmentsComponent } from '../../attachments/attachments.component';
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
    AttachmentsComponent,
    AddServiceComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.scss',
})
export class EmployeeAddComponent {
  @Input() isOpen: boolean | null = null;
  @Input() employeeId: number | null = null; // Input for editing existing service page
  @Output() close = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();
  @ViewChild(AttachmentsComponent) attachmentComponent!: AttachmentsComponent;

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

  serviceslist: any[] = [];
  selectedServiceId: string = ''; // or number, depends on your API

  constructor(
    private commandService: CommonService,
    private datepipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.isOpen = true; //model open
    // this.getServicesList(); // Load services list on initialization
  }

  // Inside your component or service
  // getServicesList(): void {
  //   this.commandService.get('ServicePages').subscribe(
  //     (response: any) => {
  //       console.log('Services list response:', response);
  //       this.serviceslist = response.value // or response, depends on your API structure
  //       console.log(response.time);
  //       console.log('Services loaded:', this.serviceslist);
  //     },
  //     (error) => {
  //       console.error('Failed to load services list:', error);
  //     }
  //   );
  // }


insertData(): void {
  // 1. Validate required fields
  if (!this.employee.first_name || !this.employee.email) {
    this.errorMessage = 'Please fill all the fields.';
    return;
  }

  this.loading = true; // Show loading indicator

  // 2. Make the POST request to create a new employee
  this.commandService.post('Employees', this.employee.toOdata()).subscribe({
    next: (response: any) => {
      this.loading = false; // Hide loading indicator
      this.isSuccess = true;
      this.ToastType = 'add'; // Set toast type for "add"

      // 3. Store the ID of the newly created employee
      if (response?.id) {
        this.employeeId = response.id; // Assuming API returns 'id' for new record
      }

      // 4. Handle attachments if the component and employeeId are ready
      // Make sure 'attachmentComponent' is a @ViewChild in your component
      if (this.attachmentComponent && this.employeeId !== null) {
        this.attachmentComponent.recordId = this.employeeId.toString();
        this.attachmentComponent.modelName = 'employee'; // Link to 'employee' model

        // Load existing media (though for a *new* record, this might be empty initially)
        this.attachmentComponent.loadExistingMediaIfReady();

        // Process any files the user staged *before* the employee was saved
        this.attachmentComponent.processPendingUploads();
      }

      // 5. Emit toast alert and update UI
      this.IsOpenToastAlert.emit();
      this.cdr.detectChanges();

      // 6. Reset form and close dialog after successful submission
      // Consider if you want to wait for attachments to fully upload before closing
      // If attachments are background uploads, this is fine.
      this.resetForm();
      this.closeDialog();
    },
    error: (error) => {
      this.loading = false; // Hide loading indicator
      this.errorMessage = 'An error occurred while creating the employee.';
      console.error(error);
      this.cdr.detectChanges(); // Update UI with error message
    },
  });
}
  // toggleAction method removed to resolve duplicate implementation error

  closeDialog() {
    this.isOpen = true;
    this.close.emit();
  }
//   closeDialog() {
//   // Only close if data is successfully inserted
//   if (this.isSuccess) {
//     this.isOpen = false;
//     this.close.emit();
//   }
// }


  onServiceChange(event: any): void {
  const selectedValue = event.target.selectedOption.value;
  this.selectedServiceId = selectedValue;
  console.log('Selected Service ID:', this.selectedServiceId);
}

  onChange(field: string, event: any) {
    const value = event.target.value;
    console.log(`Selected ${field}:`, value);
    console.log('employee object:', this.employee);
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
    // this.employee.department = '';
    // this.employee.designation = '';
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
  // employees = {
  //   department: 'Select',
  //   designation: '',
  // };
  // departmentList: string[] = ['Select', 'IT', 'HR', 'Finance', 'Marketing'];
  // designationList: string[] = ['Manager', 'Developer', 'Analyst', 'Support'];
}
