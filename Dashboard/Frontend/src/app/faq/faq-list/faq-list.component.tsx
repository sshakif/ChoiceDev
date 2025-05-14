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
import { Faq } from "@app/shared/Model/faq";
import { Button, Icon, TextAlign } from "@ui5/webcomponents-react";
import React from "react";
import { FaqAddComponent } from "@app/faq/faq-add/faq-add.component";
import { FaqDetailsComponent } from "@app/faq/faq-details/faq-details.component";
import { FaqEditComponent } from "@app/faq/faq-edit/faq-edit.component";

@Component({
  selector: "app-faq-list",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnalyticalTableComponent,
    FaqAddComponent,
    FaqEditComponent,
    FaqDetailsComponent,
    ToastMessageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: "./faq-list.component.html",
  styleUrl: "./faq-list.component.scss",
})
export class FaqListComponent implements OnInit {
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
  selectedFaqId: number | null = null;
  selectedFaqData: any = null;
  Faqs = Faq
  faqs = new Faq().deserialize({});
  constructor(
    private commonService: CommonService,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {
    this.itemsPerPage = this.commonService.itemsPerPage;
    this.odata = this.commonService.odata;
    this.Title = "Faq List";
    this.tableColum();
  }
  ngOnInit(): void {}

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
        Header: " Quastion",
        accessor: "question",
        autoResizable: true,
        className: "custom-class-name",
      },
      {
        Header: "Answer",
        accessor: "Answer",
        autoResizable: true,
        className: "custom-class-name",
      },
      {
        Header: "Created At",
        accessor: "created_at",
        autoResizable: true,
        className: "custom-class-name",
        hAlign: "Center" as TextAlign,
        Cell: ({ value }: any) => new Date(value).toLocaleDateString(),
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
                // this.editFaq(row.original);
              }}
            />
            <Button
              icon="information"
              design="Transparent"
              onClick={() => {
                // this.FaqsDetails(row.original);
              }}
            ></Button>

            <Button
              icon="delete"
              design="Transparent"
              onClick={() => {
                // this.deleteFaqs(row.original);
              }}
            ></Button>
          </div>
        ),
      },
    ];
    return columns;
  }
}
