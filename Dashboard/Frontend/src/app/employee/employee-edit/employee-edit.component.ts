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
import { Employee } from '@app/shared/Model/employee';
import { LabelComponent, TextAreaComponent, Ui5MainModule } from '@ui5/webcomponents-ngx';
import { CommonService, } from 'app/services/common-service/common.service';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [     CommonModule,
    FormsModule,
    LabelComponent,
    TextAreaComponent,
    ToastMessageComponent,
    Ui5MainModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.scss'
})
export class EmployeeEditComponent {
  @Input() employeeId: number | null = null;
  @Input() employeeData: any = {};
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

  employee = new Employee().deserialize({});

  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    if (this.employeeData) {
      this.populateData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      this.getCandidateInfo();
    }
  }
populateData(): void {
  Object.assign(this.employee, this.employeeData || {});
  this.isActive = !!this.employee.is_active; // Ensure boolean
}

  getCandidateInfo(): void {
    if (!this.employeeId) return;

    this.loading = true;
    this.commonService.get(`Employees/${this.employeeId}`).subscribe({
      next: (response: any) => {
        this.employeeData = response;
        this.populateData();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
  updateData(): void {
    if (!this.employee.first_name || !this.employee.last_name) {
      this.errorMessage = 'Both Question and Answer fields are required.';
      return;
    }
    this.formloading = true;
    this.ToastType = 'edit';

    this.commonService.put(`Employees(${this.employeeId})`, this.employee, true).subscribe({
      next: () => {
        this.formloading = false;
        this.isOpen = false;
        this.refreshTable.emit();
        this.IsOpenToastAlert.emit();
      },
      error: (error) => {
        this.formloading = false;
        this.isEditError = true;
        this.errorMessage = error.error?.message || 'Error updating Employee';
      },
    });
  }
   toggleActive(event: any): void {
  this.isActive = event.target.checked;
  this.employee.is_active = this.isActive;
}

  closeDialog(): void {
    this.isOpen = false;
    this.close.emit();
  }

  clearErrorMessage(event: Event): void {
    event.stopPropagation();
    this.errorMessage = '';
  }
  //  departmentList: string[] = ['Select','IT', 'HR', 'Finance', 'Marketing'];
  //   designationList: string[] = ['Select','Manager', 'Developer', 'Analyst', 'Support'];
}
