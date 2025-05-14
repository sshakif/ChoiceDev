import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  Button,
  AnalyticalTable,
  Title,
  Icon,
  Label,
  Input as Ui5Input,
  ThemeProvider,
  AnalyticalTableSubComponentsBehavior,
  AnalyticalTablePropTypes,
  SegmentedButton,
  SegmentedButtonItem,
  Dialog,
  Bar,
  CheckBox,
  List,
  ListItemStandard,
  AnalyticalTableColumnDefinition,
} from "@ui5/webcomponents-react";
import { Toolbar, ToolbarSpacer } from "@ui5/webcomponents-react-compat";
import { CommonService } from "@app/services/common-service/common.service";
import { Router, RouterLink } from "@angular/router";
import { style } from "@angular/animations";
import { CommonModule, DatePipe } from "@angular/common";
import { Ui5MainModule } from "@ui5/webcomponents-ngx";

const containerElementRef = "AnalyticaltableContainer";

@Component({
  selector: "react-analytical-table",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: "./analytical-table.component.html",
  imports: [CommonModule, Ui5MainModule],
  styleUrls: ["./analytical-table.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AnalyticalTableComponent implements OnDestroy, AfterViewInit, OnInit, OnChanges{
  @ViewChild(containerElementRef, { static: true }) containerRef!: ElementRef;
  @ViewChild("searchInput", { static: false }) searchInput!: ElementRef;
  private root: ReturnType<typeof createRoot> | null = null;
  selectedRowData: any = null;

  @Input() model: any;
  @Input() headerTitle: string = "";
  @Input() secondaryTitle: string = "";
  @Input() insertTitle: string = "";
  @Input() apiUrl: string = "";
  @Input() paramUrl: string = "";
  @Input() isOdata: boolean = true;
  @Input() isExternalLink: boolean = false;
  @Input() isTitleOnly: boolean = false;
  @Input() alternateRowColors: boolean = false;
  @Input() externalLinkUrl: string = "";
  @Input() externalLinkTitle: string = "";
  @Input() tableColumn: any[] = [];
  @Input() renderRowSubComponent: any;
  @Input() isSyncPermission: boolean = false;
  @Input() isInsertData: boolean = true;
  @Input() isSearchFilter: boolean = false;
  @Input() isFilterable: boolean = false;
  @Input() isGroupable: boolean = false;
  @Input() isSortable: boolean = false;
  @Input() isTableTree: boolean = false;
  @Input() isInfiniteScroll: boolean = false;
  @Input() isInitialLoadData: boolean = true;
  @Input() isSegmentedState: boolean = true;
  @Input() isStatic: boolean = false;
  @Input() isSetting: boolean = true;
  @Input() rowSelectionBehavior: "Row" | "RowOnly" | "RowSelector" | undefined =
    "Row";
  @Input() staticData = new EventEmitter<any>();
  @Input() infiniteScrollNumber: number = 0;
  @Input() fetchLimit: number = 0;
  @Input() minRowsNumber: number = 0;
  @Input() headerHeight: number = 0;
  @Input() rowHeight: number = 0;
  @Input() selectionMode: "None" | "Single" | "Multiple" | undefined = "None";
  @Input() emptyDataText: string = "";
  @Input() filterQuery: string = "";
  @Input() expandQuery: string = "";
  @Input() public button1Text: any = "";
  @Input() public button2Text: any = "";
  @Input() public button3Text: any = "";

  @Output() onEditSelectData: EventEmitter<any> = new EventEmitter();
  @Output() onRowSelectData: EventEmitter<any> = new EventEmitter();
  @Output() onResponseData: EventEmitter<any> = new EventEmitter();
  @Output() isInsertDataChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() isEditDataChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() refreshTrigger: EventEmitter<any> = new EventEmitter<any>();
  @Input() refreshTriggerLoading: EventEmitter<void> = new EventEmitter<void>();
  @Input() renderTriggerLoading: EventEmitter<void> = new EventEmitter<void>();

  tableDataCount: number = 0;
  allColumns: string[] = [];
  selectedColumns: string[] = [];
  tempSelection: string[] = [];
  filteredColumns: any[] = [];
  isSettingOpen: boolean = false;
  settingSearchText: string = "";
  segmentedState: string = "active";
  status: string = "true";
  data: any[] = [];
  dataList: any[] = [];
  staticDataList: any[] = [];
  loading = false;
  searchFilter: string = "";
  offset = 0;
  limit = 30;
  private debounceSearch: any = null;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef
  ) {
    this.model = new Object();
  }

  private debounceTimeout: any = null;
  private lastClickTime: number = 0;
  private lastClickedRowId: any = null;
  private readonly DOUBLE_CLICK_THRESHOLD: number = 300;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["headerTitle"] && !changes["headerTitle"].isFirstChange()) {
      this.initializeColumns();
      this.render();
    }
  }

  ngOnInit(): void {
    this.initializeColumns();
    if (this.isStatic) {
      this.staticData.subscribe((data: any) => {
        this.render();
        if (data == null) {
          this.staticDataList = [];
          this.tableDataCount = 0;
          this.render();
        } else {
          this.staticDataList = data;
          this.tableDataCount = this.staticDataList.length;
          this.render();
        }
      });
    } else {
      this.loadInitialData();
      this.refreshTrigger.subscribe((items: any) => {
        if (items) {
          let index: number = this.data.findIndex(
            (item: any) => item.id === items.id
          );
          if (index === -1) {
            index = 0;
          }
          this.selectedRowData = { id: Math.abs(index) };
        }
        this.offset = 0;
        this.data = [];
        this.render();
        this.fetchData(this.offset, this.limit, this.status).subscribe({
          next: (response: any) => {
            if (this.isSyncPermission) {
              this.data = response.syncPermissions;
            } else {
              this.data = response.value;
            }
            if (Array.isArray(this.data)) {
              const data = this.data.map((item: any) =>
                new this.model().deserialize(item)
              );
              this.dataList = data;
              this.tableDataCount = response["@count"] || 0;
            } else {
              console.error("Expected an array, but got:", response.value);
            }
            this.offset += this.limit;
            this.loading = false;
            this.onResponseData.emit(this.data);
            this.render();
          },
          error: (error: any) => {
            console.error("Fetch data error:", error);
            this.loading = false;
            this.render();
          },
        });
      });

      this.refreshTriggerLoading.subscribe(() => {
        this.offset = 0;
        this.data = [];
        this.loading = true;
        this.render();
        this.fetchData(this.offset, this.limit, this.status).subscribe({
          next: (response: any) => {
            if (this.isSyncPermission) {
              this.data = response.syncPermissions;
            } else {
              this.data = response.value;
            }
            if (Array.isArray(this.data)) {
              const data = this.data.map((item: any) =>
                new this.model().deserialize(item)
              );
              this.dataList = data;
              this.tableDataCount = response["@count"] || 0;
            } else {
              console.error("Expected an array, but got:", response.value);
            }
            this.offset += this.limit;
            this.loading = false;
            this.onResponseData.emit(this.data);
            this.render();
          },
          error: (error: any) => {
            console.error("Refresh trigger error:", error);
            this.loading = false;
            this.render();
          },
        });
      });

      this.renderTriggerLoading.subscribe(() => {
        this.loading = true;
        this.render();
      });
    }
  }

  ngAfterViewInit() {
    if (!this.root) {
      this.root = createRoot(this.containerRef.nativeElement);
    }
    this.render();
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  // Utility method to generate localStorage key
  private getStorageKey(): string {
    const safeTitle = this.headerTitle
      ? this.headerTitle.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase()
      : "default";
    return `selectedColumns_${safeTitle}`;
  }

  // Dialog methods
  onDialogFilter() {
    this.isSettingOpen = !this.isSettingOpen;
    if (this.isSettingOpen) {
      this.tempSelection = [...this.selectedColumns];
      this.filteredColumns = [...this.tableColumn];
      this.settingSearchText = "";
      if (this.searchInput && this.searchInput.nativeElement) {
        this.searchInput.nativeElement.setAttribute("value", "");
        this.searchInput.nativeElement.value = "";
        this.searchInput.nativeElement.dispatchEvent(new Event("input"));
        this.searchInput.nativeElement.dispatchEvent(
          new CustomEvent("value-changed", { detail: { value: "" } })
        );
      }
    } else {
      this.filteredColumns = [...this.tableColumn];
      this.settingSearchText = "";
    }
    this.cdr.detectChanges();
    this.render();
  }

  selectAll() {
    this.tempSelection = [...this.allColumns];
    this.cdr.detectChanges();
    this.render();
  }

  deselectAll() {
    this.tempSelection = [];
    this.cdr.detectChanges();
    this.render();
  }

  resetDefault() {
    this.tempSelection = [...this.allColumns];
    this.selectedColumns = [...this.allColumns];
    localStorage.setItem(
      this.getStorageKey(),
      JSON.stringify(this.selectedColumns)
    );
    this.filteredColumns = [...this.tableColumn];
    this.cdr.detectChanges();
    this.render();
  }

  toggleColumn(event: any, accessor: string) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.tempSelection = [...this.tempSelection, accessor];
    } else {
      this.tempSelection = this.tempSelection.filter((acc) => acc !== accessor);
    }
    this.cdr.detectChanges();
    this.render();
  }

  filterColumns(event: any) {
    clearTimeout(this.debounceSearch);
    this.debounceSearch = setTimeout(() => {
      const searchValue = event.detail?.value ?? event.target?.value ?? "";
      this.settingSearchText = searchValue.toString().trim();
      const searchTerm = this.settingSearchText.toLowerCase();
      if (searchTerm) {
        this.filteredColumns = this.tableColumn.filter((column: any) => {
          const header = column.Header
            ? column.Header.toString().toLowerCase()
            : "";
          return header.includes(searchTerm);
        });
      } else {
        this.filteredColumns = [...this.tableColumn];
      }
      this.cdr.detectChanges();
    }, 300);
  }

  applySettings() {
    this.selectedColumns = [...this.tempSelection].filter((acc) =>
      this.allColumns.includes(acc)
    );
    const storageKey = this.getStorageKey();
    localStorage.setItem(storageKey, JSON.stringify(this.selectedColumns));
    this.settingSearchText = "";

    // Clear the search input
    let inputElement: any = null;
    if (this.searchInput && this.searchInput.nativeElement) {
      inputElement = this.searchInput.nativeElement;
    } else {
      inputElement = document.getElementById("settingsSearchInput");
    }
    if (inputElement) {
      inputElement.setAttribute("value", "");
      inputElement.value = "";
      inputElement.dispatchEvent(new Event("input"));
      inputElement.dispatchEvent(
        new CustomEvent("value-changed", { detail: { value: "" } })
      );
    } else {
      console.warn("Search input element not found");
    }
    this.cdr.detectChanges();

    this.isSettingOpen = false;
    this.filteredColumns = [...this.tableColumn];
    const filteredTableColumns = this.tableColumn.filter((col: any) =>
      this.selectedColumns.includes(col.accessor)
    );
    this.cdr.detectChanges();
    this.render();
  }

  initializeColumns() {
    this.tableColumn = this.tableColumn.map((col: any) => ({
      ...col,
      Header: col.Header ? col.Header.toString() : "Unnamed Column",
    }));
    this.allColumns = this.tableColumn.map((col: any) => col.accessor);
    const storageKey = this.getStorageKey();
    let cached = localStorage.getItem(storageKey);

    // Backward compatibility: check old key if new key is empty
    if (!cached) {
      cached = localStorage.getItem("selectedColumns");
      if (cached) {
        localStorage.setItem(storageKey, cached);
        localStorage.removeItem("selectedColumns");
      }
    }

    try {
      this.selectedColumns = cached
        ? JSON.parse(cached).filter((acc: string) =>
            this.allColumns.includes(acc)
          )
        : [...this.allColumns];
    } catch (e) {
      console.error("Error parsing localStorage", storageKey, ":", e);
      this.selectedColumns = [...this.allColumns];
      localStorage.setItem(storageKey, JSON.stringify(this.selectedColumns));
    }
    this.tempSelection = [...this.selectedColumns];
    this.filteredColumns = [...this.tableColumn];
    this.formatTableColumns();
  }

  formatTableColumns() {
    this.tableColumn = this.tableColumn.map((column: any) => {
      if (column.accessor === "created_at") {
        return {
          ...column,
          Cell: ({ value }: any) =>
            value ? this.datePipe.transform(value, "dd/MM/yyyy") : "N/A",
        };
      }
      return column;
    });
  }

  openAddModal(): void {
    this.isInsertDataChange.emit(true);
    this.render();
  }

  handleRowSelect(event: any): void {
    const { row, isSelected } = event.detail;
    if (!row) return;
    this.selectedRowData = row;
    if (isSelected) {
      this.onRowSelectData.emit(row.original);
    }
    this.handleDoubleClick(row.original);
  }

  private handleDoubleClick(rowData: any): void {
    const currentTime = Date.now();
    const isSameRow = this.lastClickedRowId === rowData.id;
    const isQuickDoubleClick =
      currentTime - this.lastClickTime < this.DOUBLE_CLICK_THRESHOLD;

    if (isSameRow && isQuickDoubleClick) {
      this.onEditSelectData.emit(rowData);
    }

    this.lastClickTime = currentTime;
    this.lastClickedRowId = rowData.id;
  }

  openExternalLink(): void {
    this.router.navigate([this.externalLinkUrl]);
  }

  loadInitialData() {
    this.loading = true;
    this.render();
    if (!this.isInitialLoadData) {
      return;
    }
    this.fetchData(this.offset, this.limit, this.status).subscribe({
      next: (response: any) => {
        if (this.isSyncPermission) {
          this.data = [...this.data, ...response.syncPermissions];
        } else {
          this.data = [...this.data, ...response.value];
        }
        if (Array.isArray(this.data)) {
          const data = this.data.map((item: any) =>
            new this.model().deserialize(item)
          );
          this.dataList = data;
        } else {
          console.error("Expected an array, but got:", response);
        }
        this.tableDataCount = response["@count"] || 0;
        this.offset += this.limit;
        this.loading = false;
        this.onResponseData.emit(this.data);
        this.render();
      },
      error: (error: any) => {
        console.error("Load initial data error:", error);
        this.loading = false;
        this.render();
      },
    });
  }

  loadMoreData() {
    this.loading = true;
    this.render();
    this.fetchData(this.offset, this.limit, this.status).subscribe({
      next: (response: any) => {
        if (this.isSyncPermission) {
          this.data = [...this.data, ...response.syncPermissions];
        } else {
          this.data = [...this.data, ...response.value];
        }
        if (Array.isArray(this.data)) {
          const data = this.data.map((item: any) =>
            new this.model().deserialize(item)
          );
          this.dataList = data;
        } else {
          console.error("Expected an array, but got:", response.value);
        }
        this.offset += this.limit;
        this.loading = false;
        this.onResponseData.emit(this.data);
        this.render();
      },
      error: (error: any) => {
        console.error("Load more data error:", error);
        this.loading = false;
        this.render();
      },
    });
  }

  fetchData(offset: number, limit: number, status: string) {
    this.loading = true;
    let apiUrl = "";
    if (this.isOdata) {
      if (this.status !== "") {
        apiUrl = `${this.apiUrl}&$filter=(${
          this.filterQuery ? this.filterQuery + " and " : ""
        }is_active eq ${status}) &$skip=${offset}&$top=${limit}&$orderby=created_at desc &$count=true`;
      } else {
        apiUrl = `${this.apiUrl}&$filter=(${
          this.filterQuery
            ? this.filterQuery
            : "is_active eq true or is_active eq false"
        }) &$skip=${offset}&$top=${limit}&$orderby=created_at desc &$count=true`;
      }
    } else {
      if (this.paramUrl !== "") {
        apiUrl = `${this.apiUrl}/${limit}/${offset}?${this.paramUrl}`;
      } else {
        apiUrl = `${this.apiUrl}/${limit}/${offset}?$status=is_active eq ${status}`;
      }
    }
    return this.commonService.get(apiUrl, this.isOdata);
  }

  handleSearch(event: any) {
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      const filter = event.target.value.toString();
      this.searchFilter = filter;
      this.filterData(filter);
    }, 300);
  }

  filterData(filter: string) {
    this.offset = 0;
    this.loading = true;
    this.render();
    this.searchFilter = filter;
    let url = "";
    const filters: string[] = [];
    if (filter) {
      const encodedFilter = encodeURIComponent(filter);
      this.tableColumn.forEach((column: any) => {
        if (
          column.accessor &&
          column.accessor !== "." &&
          column.accessor !== "id" &&
          column.accessor !== " "
        ) {
          filters.push(`contains(${column.accessor}, '${encodedFilter}')`);
        }
      });
    }
    let filterParam = filters.length ? `(${filters.join(" or ")})` : "";
    if (this.status !== "") {
      const statusFilter = `is_active eq ${this.status === "true"}`;
      filterParam = filterParam
        ? `$filter=${filterParam} and ${statusFilter}`
        : `$filter=${statusFilter}`;
    } else if (filterParam) {
      filterParam = `$filter=${filterParam}`;
    }
    const orderBy = "&$orderby=created_at desc";
    const apiUrl = `${this.apiUrl}${
      filterParam ? `&${filterParam}` : ""
    }&$skip=${this.offset}&$top=${this.limit}${orderBy}`;
    url = apiUrl;
    if (!this.isOdata) {
      url = `${this.apiUrl}/${this.limit}/${this.offset}?$status=is_active eq ${this.status}&filter=${filter}`;
    }
    this.commonService.get(url, this.isOdata).subscribe({
      next: (response: any) => {
        if (this.isSyncPermission) {
          this.data = response.syncPermissions;
        } else {
          this.data = response.value;
        }
        if (Array.isArray(this.data)) {
          const data = this.data.map((item: any) =>
            new this.model().deserialize(item)
          );
          this.dataList = data;
        } else {
          console.error("Expected an array, but got:", response.value);
        }
        this.offset += this.limit;
        this.loading = false;
        this.render();
      },
      error: (error: any) => {
        console.error("Filter data error:", error);
        this.loading = false;
        this.render();
      },
    });
  }

  handleLoadMore = () => {
    if (this.searchFilter !== "") {
      this.handleSearch({ target: { value: this.searchFilter } });
    } else {
      this.loadMoreData();
    }
  };

  checkSegment(status: string) {
    this.offset = 0;
    this.data = [];
    this.searchFilter = "";
    this.render();
    if (status === "active") {
      this.segmentedState = "active";
      this.status = "true";
      this.dataList = [];
      this.loadInitialData();
    } else if (status === "inactive") {
      this.segmentedState = "inactive";
      this.status = "false";
      this.dataList = [];
      this.loadInitialData();
    } else {
      this.segmentedState = "all";
      this.status = "";
      this.dataList = [];
      this.loadInitialData();
    }
  }

  private render() {
    if (this.root) {
      const filteredColumns = this.tableColumn.filter((col: any) =>
        this.selectedColumns.includes(col.accessor)
      );
      this.root.render(
        <React.StrictMode>
          <ThemeProvider>
            <div className="analytical-table">
              <Toolbar
                toolbarStyle="Standard"
                design="Auto"
                className="table-toolbar"
              >
                <div className="d-block">
                  {this.secondaryTitle !== "" && (
                    <Label style={{}} className="d-block ms-2">
                      {this.secondaryTitle.length > 80
                        ? `${this.secondaryTitle.substring(0, 80)}...`
                        : this.secondaryTitle}
                    </Label>
                  )}
                </div>
                {this.secondaryTitle === "" && (
                  <Title level="H5">
                    {this.headerTitle} ({this.tableDataCount})
                  </Title>
                )}
                {!this.isTitleOnly && <ToolbarSpacer />}
                {this.isSearchFilter && (
                  <Ui5Input
                    data-accessible-name
                    icon={<Icon name="search" />}
                    showClearIcon
                    value={this.searchFilter}
                    onInput={(event: any) => this.handleSearch(event)}
                    placeholder="Search"
                  />
                )}
                {this.isInsertData && (
                  <Button
                    data-accessible-name
                    design="Emphasized"
                    disabled={this.loading}
                    onClick={() => this.openAddModal()}
                  >
                    {this.insertTitle}
                  </Button>
                )}
                {this.isExternalLink && (
                  <Button
                    data-accessible-name
                    design="Emphasized"
                    onClick={() => this.openExternalLink()}
                  >
                    {this.externalLinkTitle}
                  </Button>
                )}
                {this.isSegmentedState && !this.isStatic && (
                  <SegmentedButton
                    accessibleName="Segmented Button Example"
                    onSelectionChange={() => {}}
                  >
                    <React.Fragment>
                      <SegmentedButtonItem
                        style={
                          this.segmentedState === "all"
                            ? { border: "1px solid blue" }
                            : {}
                        }
                        onClick={() => this.checkSegment("all")}
                      >
                        {this.button1Text}
                      </SegmentedButtonItem>
                      <SegmentedButtonItem
                        style={
                          this.segmentedState === "active"
                            ? { border: "1px solid blue" }
                            : {}
                        }
                        selected={this.segmentedState === "active"}
                        onClick={() => this.checkSegment("active")}
                      >
                        {this.button2Text}
                      </SegmentedButtonItem>
                      <SegmentedButtonItem
                        style={
                          this.segmentedState === "inactive"
                            ? { border: "1px solid blue" }
                            : {}
                        }
                        onClick={() => this.checkSegment("inactive")}
                      >
                        {this.button3Text}
                      </SegmentedButtonItem>
                    </React.Fragment>
                  </SegmentedButton>
                )}
                {this.isSetting && (
                  <Button
                    design="Default"
                    className="border border-slate-500"
                    disabled={this.loading}
                    onClick={() => this.onDialogFilter()}
                    icon="action-settings"
                  ></Button>
                )}
              </Toolbar>
              <AnalyticalTable
                style={{
                  border: "1px solid #dbdbdb",
                  minHeight: "100%",
                  minWidth: "100%",
                  backgroundColor: "white",
                }}
                data={this.isStatic ? this.staticDataList : this.dataList}
                columns={filteredColumns}
                renderRowSubComponent={this.renderRowSubComponent}
                subComponentsBehavior={
                  AnalyticalTableSubComponentsBehavior.Expandable
                }
                filterable={this.isFilterable}
                groupable={this.isGroupable}
                sortable={this.isSortable}
                isTreeTable={this.isTableTree}
                infiniteScroll={this.isInfiniteScroll}
                loading={this.loading}
                loadingDelay={100}
                rowHeight={this.rowHeight}
                headerRowHeight={this.headerHeight}
                minRows={this.minRowsNumber}
                visibleRowCountMode="AutoWithEmptyRows"
                highlightField="status"
                infiniteScrollThreshold={this.infiniteScrollNumber}
                onLoadMore={this.handleLoadMore}
                onAutoResize={() => {}}
                onColumnsReorder={() => {}}
                onRowExpandChange={() => {}}
                onRowSelect={(e: any) => this.handleRowSelect(e)}
                selectedRowIds={
                  this.selectedRowData
                    ? { [this.selectedRowData.id]: true }
                    : {}
                }
                alternateRowColor={this.alternateRowColors}
                selectionMode={this.selectionMode}
                subRowsKey="subRows"
                selectionBehavior={this.rowSelectionBehavior}
                noDataText={this.emptyDataText}
              />
            </div>
          </ThemeProvider>
        </React.StrictMode>
      );
    }
  }
}
