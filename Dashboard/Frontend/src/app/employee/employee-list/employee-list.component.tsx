import { CommonModule, DatePipe } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AnalyticalTableComponent } from "@app/components/analytical-table/analytical-table.component";
import { ToastMessageComponent } from "@app/components/toast-message/toast-message.component";
import { CommonService } from "@app/services/common-service/common.service";
import { Employee } from "@app/shared/Model/employee";
import { Button, Icon, TextAlign } from "@ui5/webcomponents-react";
import React from "react";
import { EmployeeAddComponent } from "../employee-add/employee-add.component";
import { EmployeeDetailsComponent } from "../employee-details/employee-details.component";
import { EmployeeEditComponent } from "../employee-edit/employee-edit.component";

@Component({
  selector: "app-employee-list",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnalyticalTableComponent,
   EmployeeAddComponent,
   EmployeeListComponent,
   EmployeeDetailsComponent,
   EmployeeEditComponent,
    ToastMessageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: "./employee-list.component.html",
  styleUrl: "./employee-list.component.scss",
})
export class EmployeeListComponent implements OnInit {
  @Output() refreshTable: EventEmitter<void> = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();
  ToastType: string = "";
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
  sucessMessage: string = "";
  filter: string = "";
  Title: string;
  type: string | null = null;
  selectedEmployeeId: number | null = null;
  selectedEmployeeData: any = null;
  Employee = Employee;
  employee = new Employee().deserialize({});
  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {
    this.itemsPerPage = this.commonService.itemsPerPage;
    this.odata = this.commonService.odata;
    this.Title = "Employee List";
    this.tableColum();
  }
  ngOnInit(): void {
    console.log(this.selectedEmployeeData);
  }

  tableColum() {
    const columns = [
      {
        Header: "Sl No.",
        accessor: ".",
        autoResizable: true,
        disableFilters: true,
        disableGroupBy: true,
        disableSortBy: true,
        className: "custom-class-name",
        Cell: ({ row }: { row: any }) => {
          return React.createElement("span", null, row.index + 1);
        },
        hAlign: "Center" as TextAlign,
        width: 70,
      },
      {
        Header: "First Name",
        accessor: "first_name",
        autoResizable: true,
        className: "custom-class-name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        autoResizable: true,
        className: "custom-class-name",
      },
      {
        Header: "Email",
        accessor: "email",
        autoResizable: true,
        className: "custom-class-name",
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
        Header: "Active",
        accessor: "is_active",
        autoResizable: true,
        disableGroupBy: true,
        disableFilters: true,
        className: "custom-class-name",
        width: 100,
        hAlign: "Center" as TextAlign,
        Cell: ({ value }: any) =>
          value ? <Icon name="accept" /> : <Icon name="decline" />,
      },
      {
        Header: "Created At",
        accessor: "created_at",
        autoResizable: true,
        className: "custom-class-name",
        hAlign: "Center" as TextAlign,
        Cell: ({ value }: any) =>
          value ? new Date(value).toLocaleDateString() : "",
      },
      {
        Header: "Updated At",
        accessor: "updated_at",
        autoResizable: true,
        className: "custom-class-name",
        hAlign: "Center" as TextAlign,
        Cell: ({ value }: any) =>
          value ? new Date(value).toLocaleDateString() : "",
      },
      {
        Header: "   Actions",
        accessor: ".",
        cellLabel: () => "",
        disableFilters: true,
        disableGroupBy: true,
        disableSortBy: true,
        autoResizable: true,
        id: "actions",
        className: "custom-class-name",
        width: 150,
        hAlign: "Center" as TextAlign,
        Cell: ({ row }: any) => (
          <div>
            <Button
              icon="edit"
              design="Transparent"
              onClick={() => {
                this.editEmployee(row.original);
              }}
            />
            <Button
              icon="information"
              design="Transparent"
              onClick={() => {
                this.DetailsEmployee(row.original);
              }}
            ></Button>

            <Button
              icon="delete"
              design="Transparent"
              onClick={() => {
                this.deleteEmployee(row.original);
              }}
            ></Button>
          </div>
        ),
      },
    ];
    return columns;
  }

  deleteItemConfirm() {
    this.isDeleteLoading = true;
    const id = this.selectedEmployeeId;
    this.commonService.delete(`Employees/${id}`, this.odata).subscribe({
      next: (response: any) => {
        this.isDeleteOpen = false;
        this.isDeleteLoading = false;
        this.ToastType = "delete";
        setTimeout(() => {
          this.IsOpenToastAlert.emit();
        }, 1000);
        this.refreshTable.emit();
      },
      error: (error: any) => {
        console.log(error);
        this.isDeleteError = true;
        this.isDeleteOpen = false;
        this.isDeleteLoading = false;
        this.refreshTable.emit();
      },
    });
  }

  editEmployee(original: any) {
    this.isEdit = true;
    this.selectedEmployeeId = original.id;
    this.selectedEmployeeData = { ...original };
  }
  DetailsEmployee(original: any) {
    this.selectedEmployeeId = original.id;
    this.selectedEmployeeData = { ...original };
    this.isDetails = true;
    this.cdr.detectChanges();
  }
  deleteEmployee(original: any) {
    this.isDeleteOpen = true;
    this.selectedEmployeeId = original.id;
  }

  handleInsertData(isInsert: boolean): void {
    console.log("Received isInsertData:", isInsert);
    if (isInsert) {
      this.isInsert = isInsert;
    }
  }
  closeAddEmployeeModal(){
    this.isInsert = false;
    this.refreshTable.emit();
  }
  closeEditEmployeeModal(){
    this.isEdit = false;
  }
  closeEmployeeDetailsModal(){
    this.isDetails = false;
    this.selectedEmployeeId = null;
    this.selectedEmployeeData = null;
  }
}
