import { CommonModule } from '@angular/common';
import {
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
import { Employee } from '@app/shared/Model/employee';
@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnChanges, OnInit{
  @Input() employeeId: number | null = null;
  @Input() employeeData: any = {};
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  
  formloading: boolean = false;
  isActive: boolean = true;

  employee = new Employee().deserialize({});

  ngOnInit(): void {
    // console.log(this.employeeData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employeeData'] && changes['employeeData'].currentValue) {
      this.setData();
    }
  }
  // All Data Object Create 
setData() {
  if (this.employeeData) {
    Object.assign(this.employee, this.employeeData);
  }
}

    closeDialog() {
    this.isOpen = false;
    this.close.emit();
  }
}
