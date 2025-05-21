import { CommonModule, DatePipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnalyticalTableComponent } from '@app/components/analytical-table/analytical-table.component';
import { ToastMessageComponent } from '@app/components/toast-message/toast-message.component';
import { AddServiceComponent } from '@app/service-page/add-service/add-service.component';
import { EditServiceComponent } from '@app/service-page/edit-service/edit-service.component';
import { ServiceDetailsComponent } from '@app/service-page/service-details/service-details.component';
import { CommonService } from '@app/services/common-service/common.service';
import { Employee } from '@app/shared/Model/employee';
import { TextAlign } from '@ui5/webcomponents-react';
import React from 'react';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnalyticalTableComponent,
    AddServiceComponent,
    EditServiceComponent,
    ServiceDetailsComponent,
    ToastMessageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  @Output() refreshTable: EventEmitter<void> = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();
  ToastType: string = '';
  totalEmployee: number = 0;
  itemsPerPage: number;
  currentPage = 1;
  odata: boolean;
  loading: boolean = false;
  isInsert: boolean = false;
  isEdit: boolean = false;
  isDetails: boolean = false;
  isDeleteOpen: boolean = false;
  isDeleteLoading: boolean = false;
  isSuccess: boolean = false;
  isDeleteError: boolean = false;
  sucessMessage: string = '';
  filter: string = '';
  Title: string;
  type: string | null = null;
  selectedEmployeeId: number | null = null;
  selectedEmployeeData: any = null;

  employee = new Employee().deserialize({});
  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {
    this.itemsPerPage = this.commonService.itemsPerPage;
    this.odata = this.commonService.odata;
    this.Title = 'Employee List';
    this.tableColum();
  }
  ngOnInit(): void {}

  tableColum() {
    const columns = [
      {
        Header: 'Sl No.',
        accessor: '.',
        autoResizable: true,
        disableFilters: true,
        disableGroupBy: true,
        disableSortBy: true,
        className: 'custom-class-name',
        Cell: ({ row }: { row: any }) => {
          return React.createElement('span', null, row.index + 1);
        },
        hAlign: 'Center' as TextAlign,
        width: 70,
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
        autoResizable: true,
        className: 'custom-class-name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
        autoResizable: true,
        className: 'custom-class-name',
      },
      {
        Header: 'Email',
        accessor: 'email',
        autoResizable: true,
        className: 'custom-class-name',
      },
      {
        Header: 'phone',
        accessor: 'phone',
        autoResizable: true,
        className: 'custom-class-name',
      },
            {
        Header: 'designation',
        accessor: 'designation',
        autoResizable: true,
        className: 'custom-class-name',
      },
                  {
        Header: 'department',
        accessor: 'department',
        autoResizable: true,
        className: 'custom-class-name',
      },
                  {
        Header: 'address',
        accessor: 'address',
        autoResizable: true,
        className: 'custom-class-name',
      },
      {
        Header: 'Active',
        accessor: 'is_active',
        autoResizable: true,
        disableGroupBy: true,
        disableFilters: true,
        className: 'custom-class-name',
        width: 100,
        hAlign: 'Center' as TextAlign,
      },
      {
        Header: 'Created At',
        accessor: 'created_at',
        autoResizable: true,
        className: 'custom-class-name',
        hAlign: 'Center' as TextAlign,
        Cell: ({ value }: any) =>
          value ? new Date(value).toLocaleDateString() : '',
      },
      {
        Header: 'Updated At',
        accessor: 'updated_at',
        autoResizable: true,
        className: 'custom-class-name',
        hAlign: 'Center' as TextAlign,
        Cell: ({ value }: any) =>
          value ? new Date(value).toLocaleDateString() : '',
      },
    ];
    return columns;
  }

  handleInsertData(isInsert: boolean): void {
    console.log("Received isInsertData:", isInsert);
    if (isInsert) {
      this.isInsert = isInsert;
    }
  }
}
