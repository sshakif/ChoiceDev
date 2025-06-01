import {
  TableMode_default
} from "./chunk-EKDSRZUC.js";
import {
  ARIA_LABEL_SELECT_ALL_CHECKBOX,
  LOAD_MORE_TEXT,
  TABLE_HEADER_ROW_INFORMATION,
  TABLE_ROW_POSITION
} from "./chunk-MLGAL3PK.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-HTTIRSAN.js";
import {
  debounce_default,
  getNormalizedTarget_default,
  isElementInView_default
} from "./chunk-VS25K46M.js";
import {
  getLastTabbableElement,
  getTabbableElements
} from "./chunk-GNDKGQ3S.js";
import {
  BusyIndicator_default
} from "./chunk-3W4QXVOX.js";
import {
  CheckBox_default
} from "./chunk-IZADXD4H.js";
import {
  ItemNavigation_default,
  NavigationMode_default
} from "./chunk-KAQ4T4QR.js";
import {
  getActiveElement_default
} from "./chunk-V3KTO444.js";
import {
  ResizeHandler_default
} from "./chunk-3NVTNN76.js";
import {
  getEffectiveAriaLabelText
} from "./chunk-HWWW4G3G.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  isCtrlA,
  isDownAlt,
  isDownShift,
  isEndCtrl,
  isEndShift,
  isEnter,
  isHomeCtrl,
  isHomeShift,
  isSpace,
  isTabNext,
  isTabPrevious,
  isUpAlt,
  isUpShift
} from "./chunk-ECUZOJV2.js";
import {
  LitRenderer_default,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  repeat,
  scopeTag,
  styleMap
} from "./chunk-DMMFI3C7.js";
import {
  getI18nBundle
} from "./chunk-22ISB74T.js";
import {
  event_default
} from "./chunk-XYCO3572.js";
import {
  UI5Element_default,
  customElement_default,
  property_default
} from "./chunk-V2NLQCH3.js";
import {
  init_Themes,
  registerThemePropertiesLoader
} from "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-compat/dist/types/TableGrowingMode.js
var TableGrowingMode;
(function(TableGrowingMode2) {
  TableGrowingMode2["Button"] = "Button";
  TableGrowingMode2["Scroll"] = "Scroll";
  TableGrowingMode2["None"] = "None";
})(TableGrowingMode || (TableGrowingMode = {}));
var TableGrowingMode_default = TableGrowingMode;

// node_modules/@ui5/webcomponents-compat/dist/generated/templates/TableTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-table-root" @ui5-selection-requested="${ifDefined(this._handleSelect)}" @ui5-_forward-after="${ifDefined(this._onForwardAfter)}" @ui5-_forward-before="${ifDefined(this._onForwardBefore)}" @focusin="${this._onfocusin}"><div id="${ifDefined(this._id)}-before" tabindex="0" class="ui5-table-focusarea"></div>${this.busy ? block1.call(this, context, tags, suffix) : void 0}<table border="0" cellspacing="0" cellpadding="0" @keydown="${this._onkeydown}" role="table" aria-label="${ifDefined(this.tableAriaLabelText)}"><thead><tr id="${ifDefined(this._columnHeader.id)}" class="ui5-table-header-row" aria-label="${ifDefined(this.ariaLabelText)}" tabindex="${ifDefined(this._columnHeader.forcedTabIndex)}" @click="${this._onColumnHeaderClick}" @focusin="${this._onColumnHeaderFocused}" @keydown="${this._onColumnHeaderKeydown}">${this.isMultiSelect ? block2.call(this, context, tags, suffix) : void 0}${repeat(this.visibleColumns, (item, index) => item._id || index, (item, index) => block4.call(this, context, tags, suffix, item, index))}<th class="ui5-table-header-row-navigated" aria-hidden="true"></th></tr></thead><tbody>${repeat(this.rows, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}${!this.rows.length ? block6.call(this, context, tags, suffix) : void 0}${this.growsWithButton ? block8.call(this, context, tags, suffix) : void 0}${this.growsOnScroll ? block10.call(this, context, tags, suffix) : void 0}</tbody></table><div id="${ifDefined(this._id)}-after" tabindex="0" class="ui5-table-focusarea"></div></div> `;
}
function block1(context, tags, suffix) {
  return suffix ? effectiveHtml`<div tabindex="-1" class="ui5-table-busy-row"><${scopeTag("ui5-busy-indicator", tags, suffix)} delay="${ifDefined(this.busyDelay)}" class="ui5-table-busy-ind" style="${styleMap(this.styles.busy)}" active data-sap-focus-ref></${scopeTag("ui5-busy-indicator", tags, suffix)}></div>` : effectiveHtml`<div tabindex="-1" class="ui5-table-busy-row"><ui5-busy-indicator delay="${ifDefined(this.busyDelay)}" class="ui5-table-busy-ind" style="${styleMap(this.styles.busy)}" active data-sap-focus-ref></ui5-busy-indicator></div>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<th class="ui5-table-select-all-column" role="presentation" aria-hidden="true">${this.rows.length ? block3.call(this, context, tags, suffix) : void 0}</th>`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} class="ui5-table-select-all-checkbox" ?checked="${this._allRowsSelected}" @ui5-change="${ifDefined(this._selectAll)}" accessible-name="${ifDefined(this.ariaLabelSelectAllText)}" tabindex="-1"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox class="ui5-table-select-all-checkbox" ?checked="${this._allRowsSelected}" @ui5-change="${ifDefined(this._selectAll)}" accessible-name="${ifDefined(this.ariaLabelSelectAllText)}" tabindex="-1"></ui5-checkbox>`;
}
function block4(context, tags, suffix, item, index) {
  return effectiveHtml`<slot name="${ifDefined(item._individualSlot)}"></slot>`;
}
function block5(context, tags, suffix, item, index) {
  return effectiveHtml`<slot name="${ifDefined(item._individualSlot)}"></slot>`;
}
function block6(context, tags, suffix) {
  return effectiveHtml`${!this.hideNoData ? block7.call(this, context, tags, suffix) : void 0}`;
}
function block7(context, tags, suffix) {
  return effectiveHtml`<tr class="ui5-table-no-data-row-root"><td colspan="${ifDefined(this.visibleColumnsCount)}" role="cell" style="width: 100%"><div class="ui5-table-no-data-row"><span>${ifDefined(this.noDataText)}</span></div></td></tr>`;
}
function block8(context, tags, suffix) {
  return effectiveHtml`<tr><td colspan="${ifDefined(this.visibleColumnsCount)}"><div growing-button><div id="${ifDefined(this._id)}-growingButton" tabindex="0" role="button" aria-labelledby="${ifDefined(this.loadMoreAriaLabelledBy)}" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" growing-button-inner><span id="${ifDefined(this._id)}-growingButton-text" growing-button-text>${ifDefined(this._growingButtonText)}</span>${this.growingButtonSubtext ? block9.call(this, context, tags, suffix) : void 0}</div></div></td></tr>`;
}
function block9(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-growingButton-subtext" growing-button-subtext>${ifDefined(this.growingButtonSubtext)}</span>`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`<tr tabindex="-1" class="ui5-table-end-row"><td tabindex="-1"><span tabindex="-1" aria-hidden="true" class="ui5-table-end-marker"></span></td></tr>`;
}
var TableTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents-compat/dist/generated/themes/Table.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents-compat", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents-compat", fileName: "themes/Table.css.ts", content: `[growing-button]{display:flex;align-items:center;padding:var(--_ui5-v2-0-1_load_more_padding);border-top:1px solid var(--sapList_BorderColor);border-bottom:var(--_ui5-v2-0-1_load_more_border-bottom);box-sizing:border-box;cursor:pointer;outline:none}[growing-button-inner]{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:var(--_ui5-v2-0-1_load_more_text_height);width:100%;color:var(--sapButton_TextColor);background-color:var(--sapList_Background);border:var(--_ui5-v2-0-1_load_more_border);border-radius:var(--_ui5-v2-0-1_load_more_border_radius);box-sizing:border-box}[growing-button-inner]:focus-visible{outline:var(--_ui5-v2-0-1_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:-.125rem;border-color:transparent}[growing-button-inner]:hover{background-color:var(--sapList_Hover_Background)}[growing-button-inner]:active,[growing-button-inner][active]{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}[growing-button-inner]:active>*,[growing-button-inner][active]>*{color:var(--sapList_Active_TextColor)}[growing-button-text],[growing-button-subtext]{width:100%;text-align:center;font-family:"72override",var(--sapFontFamily);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}[growing-button-text]{height:var(--_ui5-v2-0-1_load_more_text_height);padding:.875rem 1rem 0;font-size:var(--_ui5-v2-0-1_load_more_text_font_size);font-weight:700}[growing-button-subtext]{font-size:var(--sapFontSize);padding:var(--_ui5-v2-0-1_load_more_desc_padding)}:host(:not([hidden])){display:inline-block;width:100%}.ui5-table-root{position:relative;border-bottom:var(--ui5-v2-0-1_table_bottom_border)}table{width:100%;border-spacing:0;border-collapse:collapse}.ui5-table-header-row-navigated{width:.1875rem;background:var(--sapList_HeaderBackground);vertical-align:middle}.ui5-table-header-row{color:var(--sapList_HeaderTextColor);height:var(--ui5-v2-0-1_table_header_row_height);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5-v2-0-1_table_header_row_font_weight);border-bottom:var(--ui5-v2-0-1_table_header_row_border_width) solid var(--ui5-v2-0-1_table_header_row_border_bottom_color)}.ui5-table-header-row:focus{outline:var(--ui5-v2-0-1_table_header_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--ui5-v2-0-1_table_focus_outline_offset)}tr{height:3rem}.ui5-table-no-data-row{display:flex;align-items:center;width:100%;height:auto;justify-content:center;text-align:center;padding:.5rem 1rem;font-family:"72override",var(--sapFontFamily);font-size:.875rem;box-sizing:border-box;color:var(--sapTextColor);min-height:3rem;background-color:var(--sapList_Background)}.ui5-table-end-row{height:0px}:host([busy]) .ui5-table-busy-row{position:absolute;inset:0;outline:none;z-index:100}:host([busy]) .ui5-table-busy-ind{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}:host([busy]) [growing-button]{opacity:.72}:host [growing-button]{border-bottom:var(--_ui5-v2-0-1_table_load_more_border-bottom)}.ui5-table-select-all-column{width:var(--ui5-v2-0-1_table_multiselect_column_width);text-align:center}:host([sticky-column-header]) .ui5-table-header-row{position:sticky;top:0;z-index:99}th{background:var(--sapList_HeaderBackground)}.ui5-table-focusarea{position:fixed}
` };
var Table_css_default = styleData;

// node_modules/@ui5/webcomponents-compat/dist/Table.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Table_1;
var GROWING_WITH_SCROLL_DEBOUNCE_RATE = 250;
var PAGE_UP_DOWN_SIZE = 20;
var TableFocusTargetElement;
(function(TableFocusTargetElement2) {
  TableFocusTargetElement2["Row"] = "tableRow";
  TableFocusTargetElement2["GroupRow"] = "tableGroupRow";
  TableFocusTargetElement2["ColumnHeader"] = "columnHeader";
  TableFocusTargetElement2["MoreButton"] = "moreButton";
})(TableFocusTargetElement || (TableFocusTargetElement = {}));
var Table = Table_1 = class Table2 extends UI5Element_default {
  static onDefine() {
    return __async(this, null, function* () {
      Table_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  constructor() {
    super();
    this.hideNoData = false;
    this.growing = "None";
    this.busy = false;
    this.busyDelay = 1e3;
    this.stickyColumnHeader = false;
    this.mode = "None";
    this._noDataDisplayed = false;
    this._loadMoreActive = false;
    this._inViewport = false;
    this._allRowsSelected = false;
    this.visibleColumns = [];
    this._columnHeader = {
      id: `${this._id}-columnHeader`,
      forcedTabIndex: "0"
    };
    this._itemNavigation = new ItemNavigation_default(this, {
      navigationMode: NavigationMode_default.Vertical,
      affectedPropertiesNames: ["_columnHeader"],
      getItemsCallback: () => [this._columnHeader, ...this.rows],
      skipItemsSize: PAGE_UP_DOWN_SIZE
    });
    this._handleResize = this.popinContent.bind(this);
    this.fnOnRowFocused = this.onRowFocused.bind(this);
    this.fnHandleF7 = this._handleF7.bind(this);
    this.tableEndObserved = false;
    this.lastFocusedElement = null;
    this._forwardingFocus = false;
    this._prevNestedElementIndex = 0;
    this.initialIntersection = true;
  }
  onBeforeRendering() {
    const columnSettings = this.getColumnPropagationSettings();
    const columnSettingsString = JSON.stringify(columnSettings);
    const rowsCount = this.rows.length + 1;
    const selectedRows = this.selectedRows;
    this.rows.forEach((row, index) => {
      if (row._columnsInfoString !== columnSettingsString) {
        row._columnsInfo = columnSettings;
        row._columnsInfoString = JSON.stringify(row._columnsInfo);
      }
      row.forcedAriaPosition = Table_1.i18nBundle.getText(TABLE_ROW_POSITION, index + 2, rowsCount);
      row.forcedBusy = this.busy;
      row.removeEventListener("ui5-_focused", this.fnOnRowFocused);
      row.addEventListener("ui5-_focused", this.fnOnRowFocused);
      row.removeEventListener("ui5-f7-pressed", this.fnHandleF7);
      row.addEventListener("ui5-f7-pressed", this.fnHandleF7);
      row.mode = this.mode;
    });
    this.visibleColumns = this.columns.filter((column, index) => {
      return !this._hiddenColumns?.[index];
    });
    this._noDataDisplayed = !this.rows.length && !this.hideNoData;
    this.visibleColumnsCount = this.visibleColumns.length;
    if (this.isMultiSelect) {
      this.visibleColumnsCount += 1;
    }
    this._allRowsSelected = selectedRows.length === this.rows.length;
    this._prevFocusedRow = this._prevFocusedRow || this.rows[0];
  }
  onAfterRendering() {
    if (this.growsOnScroll) {
      this.observeTableEnd();
    }
    this.checkTableInViewport();
  }
  onEnterDOM() {
    this.growingIntersectionObserver = this.getIntersectionObserver();
    ResizeHandler_default.register(this.getDomRef(), this._handleResize);
    this._itemNavigation.setCurrentItem(this.rows.length ? this.rows[0] : this._columnHeader);
  }
  onExitDOM() {
    ResizeHandler_default.deregister(this.getDomRef(), this._handleResize);
    this.growingIntersectionObserver.disconnect();
    this.growingIntersectionObserver = null;
    this.tableEndObserved = false;
  }
  _onkeydown(e) {
    if (isTabNext(e) || isTabPrevious(e)) {
      this._handleTab(e);
    }
    if (isCtrlA(e)) {
      e.preventDefault();
      this.isMultiSelect && this._selectAll();
    }
    if (isUpAlt(e) || isDownAlt(e)) {
      this._handleArrowAlt(e);
    }
    if ((isUpShift(e) || isDownShift(e)) && this.isMultiSelect) {
      this._handleArrowNav(e);
    }
    if (isHomeCtrl(e)) {
      e.preventDefault();
      this._itemNavigation._handleHome();
      this._itemNavigation._applyTabIndex();
      this._itemNavigation._focusCurrentItem();
    }
    if (isEndCtrl(e)) {
      e.preventDefault();
      this._itemNavigation._handleEnd();
      this._itemNavigation._applyTabIndex();
      this._itemNavigation._focusCurrentItem();
    }
    if ((isHomeShift(e) || isEndShift(e)) && this.isMultiSelect) {
      this._handleHomeEndSelection(e);
    }
  }
  _handleTab(e) {
    const isNext = isTabNext(e);
    const target = getNormalizedTarget_default(e.target);
    const targetType = this.getFocusedElementType(e.target);
    if (this.columnHeaderTabbables.includes(target)) {
      if (isNext && this.columnHeaderLastElement === target) {
        return this._focusNextElement();
      }
      return;
    }
    if (isNext && targetType === TableFocusTargetElement.ColumnHeader && !this.columnHeaderTabbables.length) {
      return this._focusNextElement();
    }
    if (targetType === TableFocusTargetElement.Row || !targetType) {
      return;
    }
    switch (targetType) {
      case TableFocusTargetElement.GroupRow:
        return isNext ? this._focusNextElement() : this._focusForwardElement(false);
      case TableFocusTargetElement.ColumnHeader:
        return !isNext && this._focusForwardElement(false);
      case TableFocusTargetElement.MoreButton:
        if (isNext) {
          this._focusForwardElement(true);
        } else {
          e.preventDefault();
          this.currentElement?.focus();
        }
    }
  }
  _focusNextElement() {
    if (!this.growsWithButton) {
      this._focusForwardElement(true);
    } else {
      this.morеBtn.focus();
    }
  }
  _handleArrowNav(e) {
    const isRowFocused = this.currentElement.localName === "tr";
    if (!isRowFocused) {
      return;
    }
    const previouslySelectedRows = this.selectedRows;
    const currentItem = this.currentItem;
    const currentItemIdx = this.currentItemIdx;
    const prevItemIdx = currentItemIdx - 1;
    const nextItemIdx = currentItemIdx + 1;
    const prevItem = this.rows[prevItemIdx];
    const nextItem = this.rows[nextItemIdx];
    const wasSelected = !!currentItem.selected;
    if (isUpShift(e) && !prevItem || isDownShift(e) && !nextItem) {
      return;
    }
    if (isUpShift(e)) {
      currentItem.selected = currentItem.selected && !prevItem.selected;
      prevItem.selected = currentItem.selected || wasSelected && !currentItem.selected;
      prevItem.focus();
    }
    if (isDownShift(e)) {
      currentItem.selected = currentItem.selected && !nextItem.selected;
      nextItem.selected = currentItem.selected || wasSelected && !currentItem.selected;
      nextItem.focus();
    }
    const selectedRows = this.selectedRows;
    this.fireEvent("selection-change", {
      selectedRows,
      previouslySelectedRows
    });
  }
  _handleHomeEndSelection(e) {
    const isRowFocused = this.currentElement.localName === "tr";
    if (!isRowFocused) {
      return;
    }
    const rows = this.rows;
    const previouslySelectedRows = this.selectedRows;
    const currentItemIdx = this.currentItemIdx;
    if (isHomeShift(e)) {
      rows.slice(0, currentItemIdx + 1).forEach((item) => {
        item.selected = true;
      });
      rows[0].focus();
    }
    if (isEndShift(e)) {
      rows.slice(currentItemIdx).forEach((item) => {
        item.selected = true;
      });
      rows[rows.length - 1].focus();
    }
    const selectedRows = this.selectedRows;
    this.fireEvent("selection-change", {
      selectedRows,
      previouslySelectedRows
    });
  }
  /**
   * Handles Alt + Up/Down.
   * Switches focus between column header, last focused item, and "More" button (if applicable).
   * @private
   */
  _handleArrowAlt(e) {
    const shouldMoveUp = isUpAlt(e);
    const target = e.target;
    const focusedElementType = this.getFocusedElementType(target);
    if (shouldMoveUp) {
      switch (focusedElementType) {
        case TableFocusTargetElement.Row:
        case TableFocusTargetElement.GroupRow:
          this._prevFocusedRow = target;
          return this._onColumnHeaderClick(e);
        case TableFocusTargetElement.ColumnHeader:
          return this.morеBtn ? this.morеBtn.focus() : this._prevFocusedRow?.focus();
        case TableFocusTargetElement.MoreButton:
          return this._prevFocusedRow ? this._prevFocusedRow.focus() : this._onColumnHeaderClick(e);
      }
    } else {
      switch (focusedElementType) {
        case TableFocusTargetElement.Row:
        case TableFocusTargetElement.GroupRow:
          this._prevFocusedRow = target;
          return this.morеBtn ? this.morеBtn.focus() : this._onColumnHeaderClick(e);
        case TableFocusTargetElement.ColumnHeader:
          if (this._prevFocusedRow) {
            this._prevFocusedRow.focus();
          } else if (this.morеBtn) {
            this.morеBtn.focus();
          }
          return;
        case TableFocusTargetElement.MoreButton:
          return this._onColumnHeaderClick(e);
      }
    }
  }
  /**
   * Determines the type of the currently focused element.
   * @private
   */
  getFocusedElementType(element) {
    if (element === this.columnHeader) {
      return TableFocusTargetElement.ColumnHeader;
    }
    if (element === this.morеBtn) {
      return TableFocusTargetElement.MoreButton;
    }
    if (this.rows.includes(element)) {
      const isGroupRow = element.hasAttribute("ui5-table-group-row");
      return isGroupRow ? TableFocusTargetElement.GroupRow : TableFocusTargetElement.Row;
    }
  }
  /**
   * Toggles focus between the table row's root and the last focused nested element.
   * @private
   */
  _handleF7(e) {
    const row = e.detail.row;
    row.tabbableElements = getTabbableElements(row);
    const activeElement = getActiveElement_default();
    const lastFocusedElement = row.tabbableElements[this._prevNestedElementIndex] || row.tabbableElements[0];
    const targetIndex = row.tabbableElements.indexOf(activeElement);
    if (!row.tabbableElements.length) {
      return;
    }
    if (activeElement === row.root) {
      lastFocusedElement.focus();
    } else if (targetIndex > -1) {
      this._prevNestedElementIndex = targetIndex;
      row.root.focus();
    }
  }
  _onfocusin(e) {
    const target = getNormalizedTarget_default(e.target);
    if (!this._isForwardElement(target)) {
      this.lastFocusedElement = target;
      return;
    }
    if (!this._forwardingFocus) {
      if (this.lastFocusedElement) {
        this.lastFocusedElement.focus();
      } else {
        this.currentElement.focus();
      }
      e.stopImmediatePropagation();
    }
    this._forwardingFocus = false;
  }
  _onForwardBefore(e) {
    this.lastFocusedElement = e.detail.target;
    this._focusForwardElement(false);
    e.stopImmediatePropagation();
  }
  _onForwardAfter(e) {
    this.lastFocusedElement = e.detail.target;
    if (!this.growsWithButton) {
      this._focusForwardElement(true);
    } else {
      this.morеBtn.focus();
    }
  }
  _focusForwardElement(isAfter) {
    this._forwardingFocus = true;
    this.shadowRoot.querySelector(`#${this._id}-${isAfter ? "after" : "before"}`).focus();
  }
  _isForwardElement(element) {
    const elementId = element.id;
    const afterElement = this._getForwardElement(true);
    const beforeElement = this._getForwardElement(false);
    if (this._id === elementId || beforeElement && beforeElement.id === elementId) {
      return true;
    }
    return !!(afterElement && afterElement.id === elementId);
  }
  _getForwardElement(isAfter) {
    if (isAfter) {
      return this._getAfterForwardElement();
    }
    return this._getBeforeForwardElement();
  }
  _getAfterForwardElement() {
    if (!this._afterElement) {
      this._afterElement = this.shadowRoot.querySelector(`[id="${this._id}-after"]`);
    }
    return this._afterElement;
  }
  _getBeforeForwardElement() {
    if (!this._beforeElement) {
      this._beforeElement = this.shadowRoot.querySelector(`[id="${this._id}-before"]`);
    }
    return this._beforeElement;
  }
  onRowFocused(e) {
    this._itemNavigation.setCurrentItem(e.target);
  }
  _onColumnHeaderFocused() {
    this._itemNavigation.setCurrentItem(this._columnHeader);
  }
  _onColumnHeaderClick(e) {
    if (!e.target) {
      this.columnHeader.focus();
    }
    const target = getNormalizedTarget_default(e.target);
    const isNestedElement = this.columnHeaderTabbables.includes(target);
    if (!isNestedElement) {
      this.columnHeader.focus();
    }
  }
  _onColumnHeaderKeydown(e) {
    if (isSpace(e)) {
      e.preventDefault();
      this.isMultiSelect && this._selectAll();
    }
  }
  _onLoadMoreKeydown(e) {
    if (isSpace(e)) {
      e.preventDefault();
      this._loadMoreActive = true;
    }
    if (isEnter(e)) {
      this._onLoadMoreClick();
      this._loadMoreActive = true;
    }
  }
  _onLoadMoreKeyup(e) {
    if (isSpace(e)) {
      this._onLoadMoreClick();
    }
    this._loadMoreActive = false;
  }
  _onLoadMoreClick() {
    this.fireEvent("load-more");
  }
  observeTableEnd() {
    if (!this.tableEndObserved) {
      this.getIntersectionObserver().observe(this.tableEndDOM);
      this.tableEndObserved = true;
    }
  }
  onInteresection(entries) {
    if (this.initialIntersection) {
      this.initialIntersection = false;
      return;
    }
    if (entries.some((entry) => entry.isIntersecting)) {
      debounce_default(this.loadMore.bind(this), GROWING_WITH_SCROLL_DEBOUNCE_RATE);
    }
  }
  loadMore() {
    this.fireEvent("load-more");
  }
  _handleSingleSelect(e) {
    const row = this.getRowParent(e.target);
    if (!row) {
      return;
    }
    if (!row.selected) {
      const previouslySelectedRows = this.selectedRows;
      this.rows.forEach((item) => {
        if (item.selected) {
          item.selected = false;
        }
      });
      row.selected = true;
      this.fireEvent("selection-change", {
        selectedRows: [row],
        previouslySelectedRows
      });
    }
  }
  _handleMultiSelect(e) {
    const row = this.getRowParent(e.target);
    const previouslySelectedRows = this.selectedRows;
    if (!row) {
      return;
    }
    row.selected = !row.selected;
    const selectedRows = this.selectedRows;
    if (selectedRows.length === this.rows.length) {
      this._allRowsSelected = true;
    } else {
      this._allRowsSelected = false;
    }
    this.fireEvent("selection-change", {
      selectedRows,
      previouslySelectedRows
    });
  }
  _handleSelect(e) {
    if (this.isSingleSelect) {
      this._handleSingleSelect(e);
      return;
    }
    if (this.isMultiSelect) {
      this._handleMultiSelect(e);
    }
  }
  _selectAll() {
    const bAllSelected = !this._allRowsSelected;
    const previouslySelectedRows = this.rows.filter((row) => row.selected);
    this._allRowsSelected = bAllSelected;
    this.rows.forEach((row) => {
      row.selected = bAllSelected;
    });
    const selectedRows = bAllSelected ? this.rows : [];
    this.fireEvent("selection-change", {
      selectedRows,
      previouslySelectedRows
    });
  }
  getRowParent(child) {
    if (child.hasAttribute("ui5-table-row")) {
      return child;
    }
    const parent = child.parentElement;
    if (!parent) {
      return;
    }
    if (parent.hasAttribute("ui5-table-row")) {
      return parent;
    }
    return this.getRowParent(parent);
  }
  get columnHeader() {
    const domRef = this.getDomRef();
    return domRef ? domRef.querySelector(`#${this._id}-columnHeader`) : null;
  }
  get morеBtn() {
    const domRef = this.getDomRef();
    if (this.growsWithButton && domRef) {
      return domRef.querySelector(`#${this._id}-growingButton`);
    }
    return null;
  }
  handleResize() {
    this.checkTableInViewport();
    this.popinContent();
  }
  checkTableInViewport() {
    this._inViewport = isElementInView_default(this.getDomRef());
  }
  popinContent() {
    const clientRect = this.getDomRef().getBoundingClientRect();
    const tableWidth = clientRect.width;
    const hiddenColumns = [];
    const visibleColumnsIndexes = [];
    this.columns.forEach((column, index) => {
      if (tableWidth < column.minWidth && column.minWidth !== Infinity) {
        hiddenColumns[index] = {
          index,
          popinText: column.popinText,
          demandPopin: column.demandPopin
        };
      } else {
        visibleColumnsIndexes.push(index);
      }
    });
    if (visibleColumnsIndexes.length) {
      if (!this.isMultiSelect) {
        this.columns[visibleColumnsIndexes[0]].first = true;
      }
      this.columns[visibleColumnsIndexes[visibleColumnsIndexes.length - 1]].last = true;
    }
    const hiddenColumnsChange = this._hiddenColumns?.length !== hiddenColumns.length || this._hiddenColumns?.some((column, index) => column !== hiddenColumns[index]);
    const shownColumnsChange = hiddenColumns.length === 0;
    if (hiddenColumnsChange || shownColumnsChange) {
      this._hiddenColumns = hiddenColumns;
      this.fireEvent("popin-change", {
        poppedColumns: this._hiddenColumns
      });
    }
  }
  /**
   * Gets settings to be propagated from columns to rows.
   */
  getColumnPropagationSettings() {
    return this.columns.map((column, index) => {
      return {
        index,
        minWidth: column.minWidth,
        demandPopin: column.demandPopin,
        text: column.textContent,
        popinText: column.popinText,
        popinDisplay: column.popinDisplay,
        visible: !this._hiddenColumns?.[index]
      };
    }, this);
  }
  getIntersectionObserver() {
    if (!this.growingIntersectionObserver) {
      this.growingIntersectionObserver = new IntersectionObserver(this.onInteresection.bind(this), {
        root: document,
        rootMargin: "0px",
        threshold: 1
      });
    }
    return this.growingIntersectionObserver;
  }
  get styles() {
    return {
      busy: {
        position: this.busyIndPosition
      }
    };
  }
  get growsWithButton() {
    return this.growing === TableGrowingMode_default.Button;
  }
  get growsOnScroll() {
    return this.growing === TableGrowingMode_default.Scroll;
  }
  get _growingButtonText() {
    return this.growingButtonText || Table_1.i18nBundle.getText(LOAD_MORE_TEXT);
  }
  get ariaLabelText() {
    const rowsCount = this.rows.length + 1;
    const headerRowText = Table_1.i18nBundle.getText(TABLE_HEADER_ROW_INFORMATION, rowsCount);
    const columnsTitle = this.columns.map((column) => {
      return column.textContent.trim();
    }).join(" ");
    return `${headerRowText} ${columnsTitle}`;
  }
  get tableAriaLabelText() {
    return getEffectiveAriaLabelText(this);
  }
  get ariaLabelSelectAllText() {
    return Table_1.i18nBundle.getText(ARIA_LABEL_SELECT_ALL_CHECKBOX);
  }
  get loadMoreAriaLabelledBy() {
    if (this.moreDataText) {
      return `${this._id}-growingButton-text ${this._id}-growingButton-subtext`;
    }
    return `${this._id}-growingButton-text`;
  }
  get tableEndDOM() {
    return this.shadowRoot.querySelector(".ui5-table-end-marker");
  }
  get busyIndPosition() {
    return this._inViewport ? "absolute" : "sticky";
  }
  get isMultiSelect() {
    return this.mode === TableMode_default.MultiSelect;
  }
  get isSingleSelect() {
    return this.mode === TableMode_default.SingleSelect;
  }
  get selectedRows() {
    return this.rows.filter((row) => row.selected);
  }
  get currentItemIdx() {
    return this.rows.indexOf(this.currentItem);
  }
  get currentItem() {
    return this.getRootNode().activeElement;
  }
  get currentElement() {
    return this._itemNavigation._getCurrentItem();
  }
  get columnHeaderTabbables() {
    return this.columnHeader ? getTabbableElements(this.columnHeader) : [];
  }
  get columnHeaderLastElement() {
    return this.columnHeader && getLastTabbableElement(this.columnHeader);
  }
};
__decorate([
  property_default()
], Table.prototype, "noDataText", void 0);
__decorate([
  property_default()
], Table.prototype, "growingButtonText", void 0);
__decorate([
  property_default()
], Table.prototype, "growingButtonSubtext", void 0);
__decorate([
  property_default({ type: Boolean })
], Table.prototype, "hideNoData", void 0);
__decorate([
  property_default()
], Table.prototype, "growing", void 0);
__decorate([
  property_default({ type: Boolean })
], Table.prototype, "busy", void 0);
__decorate([
  property_default({ type: Number })
], Table.prototype, "busyDelay", void 0);
__decorate([
  property_default({ type: Boolean })
], Table.prototype, "stickyColumnHeader", void 0);
__decorate([
  property_default()
], Table.prototype, "mode", void 0);
__decorate([
  property_default()
], Table.prototype, "accessibleName", void 0);
__decorate([
  property_default()
], Table.prototype, "accessibleNameRef", void 0);
__decorate([
  property_default({ type: Array })
], Table.prototype, "_hiddenColumns", void 0);
__decorate([
  property_default({ type: Boolean })
], Table.prototype, "_noDataDisplayed", void 0);
__decorate([
  property_default({ type: Boolean })
], Table.prototype, "_loadMoreActive", void 0);
__decorate([
  property_default({ type: Object })
], Table.prototype, "_columnHeader", void 0);
__decorate([
  property_default({ type: Boolean })
], Table.prototype, "_inViewport", void 0);
__decorate([
  property_default({ type: Boolean })
], Table.prototype, "_allRowsSelected", void 0);
__decorate([
  slot_default({
    type: HTMLElement,
    "default": true,
    individualSlots: true,
    invalidateOnChildChange: true
  })
], Table.prototype, "rows", void 0);
__decorate([
  slot_default({
    type: HTMLElement,
    individualSlots: true,
    invalidateOnChildChange: {
      properties: true,
      slots: false
    }
  })
], Table.prototype, "columns", void 0);
Table = Table_1 = __decorate([
  customElement_default({
    tag: "ui5-table",
    fastNavigation: true,
    styles: Table_css_default,
    renderer: LitRenderer_default,
    template: TableTemplate_lit_default,
    dependencies: [BusyIndicator_default, CheckBox_default]
  }),
  event_default("row-click", {
    detail: {
      /**
      * @public
      */
      row: { type: HTMLElement }
    }
  }),
  event_default("popin-change", {
    detail: {
      /**
      * @public
      */
      poppedColumns: {
        type: Array
      }
    }
  }),
  event_default("load-more"),
  event_default("selection-change", {
    detail: {
      /**
       * @public
       */
      selectedRows: { type: Array },
      /**
       * @public
       */
      previouslySelectedRows: { type: Array }
    }
  })
], Table);
Table.define();
var Table_default = Table;

export {
  Table_default
};
//# sourceMappingURL=chunk-IVAQFGOG.js.map
