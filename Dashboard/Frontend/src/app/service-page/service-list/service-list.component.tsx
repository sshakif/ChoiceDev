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
import { AddServiceComponent } from "@app/service-page/add-service/add-service.component";
import { EditServiceComponent } from "@app/service-page/edit-service/edit-service.component";
import { ServiceDetailsComponent } from "@app/service-page/service-details/service-details.component";
import { ServicePage } from "@app/shared/Model/servicePage";
import { Button, Icon, TextAlign } from "@ui5/webcomponents-react";
import React from "react";
import { CommonService } from "../../services/common-service/common.service";
@Component({
  selector: "app-service-list",
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
  templateUrl: "./service-list.component.html",
  styleUrl: "./service-list.component.scss",
})
export class ServiceListComponent implements OnInit {
  @Output() refreshTable: EventEmitter<void> = new EventEmitter<void>();
  @Output() IsOpenToastAlert = new EventEmitter<void>();
  ToastType: string = "";
  totalFaqs: number = 0;
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
  selectedServiceId: number | null = null;
  selectedServiceData: any = null;
  ServicePages = ServicePage;
  servicePages = new ServicePage().deserialize({});
  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {
    this.itemsPerPage = this.commonService.itemsPerPage;
    this.odata = this.commonService.odata;
    this.Title = "ServicePage List";
    this.tableColum();
  }
  ngOnInit(): void {
    console.log(this.selectedServiceData);
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
      // {
      //   Header: "Profile",
      //   accessor: "image",
      //   autoResizable: true,
      //   className: "custom-class-name",
      // },
      {
        Header: "Title",
        accessor: "title",
        autoResizable: true,
        className: "custom-class-name",
      },
      {
        Header: "Short Description",
        accessor: "short_description",
        autoResizable: true,
        className: "custom-class-name",
      },
      {
        Header: "Long Description",
        accessor: "long_description",
        autoResizable: true,
        className: "custom-class-name",
      },
      {
        Header: "Media",
        accessor: "media",
        autoResizable: true,
        className: "custom-class-name",
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
                this.editService(row.original);
              }}
            />
            <Button
              icon="information"
              design="Transparent"
              onClick={() => {
                this.DetailsService(row.original);
              }}
            ></Button>

            <Button
              icon="delete"
              design="Transparent"
              onClick={() => {
                this.deleteService(row.original);
              }}
            ></Button>
          </div>
        ),
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

  deleteItemConfirm() {
    this.isDeleteLoading = true;
    const id = this.selectedServiceId;
    this.commonService.delete(`Faqs/${id}`, this.odata).subscribe({
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
  //  list Icon Show
  editService(original: any) {
    this.isEdit = true;
    this.selectedServiceId = original.id;
    this.selectedServiceData = { ...original };
  }

  DetailsService(original: any) {
    this.selectedServiceId = original.id;
    this.selectedServiceData = { ...original };
    this.isDetails = true;
    this.cdr.detectChanges();
  }
  deleteService(original: any) {
    this.isDeleteOpen = true;
    this.selectedServiceId = original.id;
  }
  //Model Open
  closeAddServiceModal() {
    this.isInsert = false;
    this.refreshTable.emit();
  }

  closeEditServiceModal() {
    this.isEdit = false;
  }
  closeServiceDetailsModal() {
    this.isDetails = false;
    this.selectedServiceId = null;
    this.selectedServiceData = null;
  }
}
