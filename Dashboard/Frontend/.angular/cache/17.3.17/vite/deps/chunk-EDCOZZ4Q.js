import {
  TableMode_default
} from "./chunk-EKDSRZUC.js";
import {
  ARIA_LABEL_ROW_SELECTION,
  LIST_ITEM_NOT_SELECTED,
  LIST_ITEM_SELECTED
} from "./chunk-MLGAL3PK.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-HTTIRSAN.js";
import {
  getLastTabbableElement
} from "./chunk-GNDKGQ3S.js";
import {
  CheckBox_default
} from "./chunk-IZADXD4H.js";
import {
  getEventMark
} from "./chunk-MJMWB5QN.js";
import {
  getActiveElement_default
} from "./chunk-V3KTO444.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  isEnter,
  isF7,
  isSpace,
  isTabNext,
  isTabPrevious
} from "./chunk-ECUZOJV2.js";
import {
  LitRenderer_default,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  repeat,
  scopeTag
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

// node_modules/@ui5/webcomponents-compat/dist/types/TableRowType.js
var TableRowType;
(function(TableRowType2) {
  TableRowType2["Inactive"] = "Inactive";
  TableRowType2["Active"] = "Active";
})(TableRowType || (TableRowType = {}));
var TableRowType_default = TableRowType;

// node_modules/@ui5/webcomponents-compat/dist/types/TableColumnPopinDisplay.js
var TableColumnPopinDisplay;
(function(TableColumnPopinDisplay2) {
  TableColumnPopinDisplay2["Block"] = "Block";
  TableColumnPopinDisplay2["Inline"] = "Inline";
})(TableColumnPopinDisplay || (TableColumnPopinDisplay = {}));
var TableColumnPopinDisplay_default = TableColumnPopinDisplay;

// node_modules/@ui5/webcomponents-compat/dist/generated/templates/TableRowTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<tr class="ui5-table-row-root" tabindex="${ifDefined(this.forcedTabIndex)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @click="${this._onrowclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mouseup="${this._onmouseup}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" aria-label="${ifDefined(this.ariaLabelText)}" aria-selected="${ifDefined(this.selected)}" aria-current="${ifDefined(this._ariaCurrent)}" data-sap-focus-ref part="row">${this.isMultiSelect ? block1.call(this, context, tags, suffix) : void 0}${this.shouldPopin ? block2.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}<td class="ui5-table-row-navigated" aria-hidden="true"><div class="ui5-table-div-navigated"></div></td></tr>${this.shouldPopin ? block6.call(this, context, tags, suffix) : void 0} `;
}
function block1(context, tags, suffix) {
  return suffix ? effectiveHtml`<td class="ui5-table-multi-select-cell" aria-hidden="true" role="presentation"><${scopeTag("ui5-checkbox", tags, suffix)} class="ui5-multi-select-checkbox" ?checked="${this.selected}" accessible-name="${ifDefined(this.ariaLabelRowSelection)}" @ui5-change="${ifDefined(this._handleSelection)}" tabindex="-1"></${scopeTag("ui5-checkbox", tags, suffix)}></td>` : effectiveHtml`<td class="ui5-table-multi-select-cell" aria-hidden="true" role="presentation"><ui5-checkbox class="ui5-multi-select-checkbox" ?checked="${this.selected}" accessible-name="${ifDefined(this.ariaLabelRowSelection)}" @ui5-change="${ifDefined(this._handleSelection)}" tabindex="-1"></ui5-checkbox></td>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`${repeat(this.visibleCells, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}`;
}
function block3(context, tags, suffix, item, index) {
  return effectiveHtml`<slot name="${ifDefined(item._individualSlot)}"></slot>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`${repeat(this.cells, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}`;
}
function block5(context, tags, suffix, item, index) {
  return effectiveHtml`<slot name="${ifDefined(item._individualSlot)}"></slot>`;
}
function block6(context, tags, suffix) {
  return effectiveHtml`${repeat(this.popinCells, (item, index) => item._id || index, (item, index) => block7.call(this, context, tags, suffix, item, index))}`;
}
function block7(context, tags, suffix, item, index) {
  return effectiveHtml`<tr part="popin-row" class="${ifDefined(item.classes)}" @click="${this._onrowclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}"><td colspan="${ifDefined(this.visibleCellsCount)}" role="cell">${item.popinDisplayInline ? block8.call(this, context, tags, suffix, item, index) : block10.call(this, context, tags, suffix, item, index)}</td><td class="ui5-table-row-navigated" aria-hidden="true"><div class="ui5-table-div-navigated"></div></td></tr>`;
}
function block8(context, tags, suffix, item, index) {
  return effectiveHtml`<div class="ui5-table-display-inline-container">${item.popinText ? block9.call(this, context, tags, suffix, item, index) : void 0}<span class="ui5-table-cell-display-inline"><slot name="${ifDefined(item.cell._individualSlot)}"></slot></span></div>`;
}
function block9(context, tags, suffix, item, index) {
  return effectiveHtml`<span class="ui5-table-row-popin-title">${ifDefined(item.popinText)}:</span>`;
}
function block10(context, tags, suffix, item, index) {
  return effectiveHtml`${item.popinText ? block11.call(this, context, tags, suffix, item, index) : void 0}<div><slot name="${ifDefined(item.cell._individualSlot)}"></slot></div>`;
}
function block11(context, tags, suffix, item, index) {
  return effectiveHtml`<span class="ui5-table-row-popin-title">${ifDefined(item.popinText)}:</span>`;
}
var TableRowTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents-compat/dist/generated/themes/TableRow.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents-compat", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents-compat", fileName: "themes/TableRow.css.ts", content: `:host{display:contents}:host([_busy]) .ui5-table-row-root{opacity:.72;pointer-events:none}.ui5-table-row-root{background-color:var(--sapList_Background);color:var(--sapList_TextColor);border-top:1px solid var(--sapList_BorderColor)}.ui5-table-row-root:focus{outline:var(--ui5-v2-0-1_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--ui5-v2-0-1_table_focus_outline_offset)}.ui5-table-popin-row{background-color:var(--sapList_Background)}.ui5-table-popin-row.all-columns-popped-in.popin-header{border-top:1px solid var(--sapList_BorderColor)}.ui5-table-popin-row td:not(.ui5-table-row-navigated){padding-top:.5rem;padding-inline-start:1rem}:host([mode="MultiSelect"]) .ui5-table-popin-row td:not(.ui5-table-row-navigated){padding-inline-start:var(--ui5-v2-0-1_table_multiselect_popin_row_padding)}.ui5-table-popin-row:last-child td{padding-bottom:.5rem}.ui5-table-row-popin-title{color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-table-cell-display-inline{margin-inline-start:.5rem}.ui5-table-display-inline-container{display:flex;align-items:center}.ui5-table-multi-select-cell{padding:.25rem 0;box-sizing:border-box;text-align:center;vertical-align:middle}:host([mode="SingleSelect"]) .ui5-table-row-root{cursor:pointer}:host([mode="MultiSelect"]) .ui5-table-row-root .ui5-table-multi-select-cell{cursor:pointer}:host ::slotted([ui5-table-cell]:not([popined])){padding:.25rem .5rem}:host(:not([mode="MultiSelect"])) ::slotted([ui5-table-cell]:not([popined]):first-child){padding-inline-start:1rem}:host([type="Active"]) .ui5-table-row-root:hover,:host([mode="SingleSelect"]) .ui5-table-row-root:hover:not(:active){background-color:var(--sapList_Hover_Background)}:host([type="Active"]) .ui5-table-row-root:active,:host([selected][type="Active"]) .ui5-table-row-root:active{background-color:var(--sapList_Active_Background)}:host([type="Active"]) .ui5-table-row-root:active ::slotted([ui5-table-cell]){color:var(--sapList_Active_TextColor)}:host([selected]) .ui5-table-row-root:not(:active),:host([selected]) .ui5-table-row-root:not(:active)~tr{background-color:var(--sapList_SelectionBackgroundColor)}:host([selected]) tr:last-child{border-bottom:1px solid var(--sapList_SelectionBorderColor)}:host([selected][type="Active"]) .ui5-table-row-root:hover:not(:active),:host([selected][mode="SingleSelect"]) .ui5-table-row-root:hover:not(:active){background-color:var(--sapList_Hover_SelectionBackground)}:host([navigated]) .ui5-table-row-root:focus .ui5-table-div-navigated{width:.09375rem;top:2px;inset-inline-end:2px;bottom:1px}:host([navigated]) .ui5-table-row-navigated{vertical-align:middle;padding:0;position:relative}:host([navigated]) .ui5-table-div-navigated{width:.1875rem;position:absolute;inset:0;background-color:var(--sapList_SelectionBorderColor)}
` };
var TableRow_css_default = styleData;

// node_modules/@ui5/webcomponents-compat/dist/TableRow.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TableRow_1;
var TableRow = TableRow_1 = class TableRow2 extends UI5Element_default {
  constructor() {
    super();
    this.type = "Inactive";
    this.selected = false;
    this.navigated = false;
    this.mode = "None";
    this.active = false;
    this.forcedBusy = false;
    this.visibleCells = [];
    this.popinCells = [];
    this.tabbableElements = [];
    this._columnsInfoString = "";
    const handleToushStartEvent = () => {
      this.activate();
    };
    this._ontouchstart = {
      handleEvent: handleToushStartEvent,
      passive: true
    };
  }
  _onmouseup() {
    this.deactivate();
  }
  _onkeydown(e) {
    const activeElement = getActiveElement_default();
    const itemActive = this.type === TableRowType_default.Active;
    const isSingleSelect = this.isSingleSelect;
    const itemSelectable = isSingleSelect || this.isMultiSelect;
    const isRowFocused = this._activeElementHasAttribute("ui5-table-row");
    const target = e.target;
    const checkboxPressed = target.classList.contains("ui5-multi-select-checkbox");
    const rowElements = Array.from(this.shadowRoot.querySelectorAll("tr") || []);
    const elements = rowElements.map(getLastTabbableElement);
    const lastFocusableElement = elements.pop();
    if (isTabNext(e) && activeElement === (lastFocusableElement || this.root)) {
      this.fireEvent("_forward-after", { target: activeElement });
    }
    if (isTabPrevious(e) && activeElement === this.root) {
      this.fireEvent("_forward-before", { target: activeElement });
    }
    if (isSpace(e) && target.tagName.toLowerCase() === "tr") {
      e.preventDefault();
    }
    if (isRowFocused && !checkboxPressed) {
      if (isSpace(e) && itemSelectable || isEnter(e) && isSingleSelect) {
        this.fireEvent("selection-requested", { row: this });
      }
      if (isEnter(e) && itemActive) {
        this.fireEvent("row-click", { row: this });
        if (!isSingleSelect) {
          this.activate();
        }
      }
    }
    if (isF7(e)) {
      e.preventDefault();
      this.fireEvent("f7-pressed", { row: this });
    }
  }
  _onkeyup(e) {
    if (isSpace(e) || isEnter(e)) {
      this.deactivate();
    }
  }
  _ontouchend() {
    this.deactivate();
  }
  _onfocusout() {
    this.deactivate();
  }
  _onfocusin(e, forceSelfFocus = false) {
    if (forceSelfFocus || this._activeElementHasAttribute("ui5-table-cell")) {
      this.root.focus();
      this.activate();
    }
    this.fireEvent("_focused");
  }
  _onrowclick(e) {
    const checkboxPressed = e.target.classList.contains("ui5-multi-select-checkbox");
    if (getEventMark(e) === "button") {
      return;
    }
    const activeElement = this.getRootNode().activeElement;
    if (!this.contains(activeElement)) {
      this._onfocusin(
        e,
        true
        /* force row focus */
      );
      this.deactivate();
    }
    if (this._activeElementHasAttribute("ui5-table-row")) {
      if (this.isSingleSelect) {
        this._handleSelection();
      }
      if (this.type === TableRowType_default.Active && !checkboxPressed) {
        this.fireEvent("row-click", { row: this });
      }
    }
  }
  _handleSelection() {
    this.fireEvent("selection-requested", { row: this });
  }
  _activeElementHasAttribute(attr) {
    return !!this.getRootNode().activeElement?.hasAttribute(attr);
  }
  get _ariaCurrent() {
    return this.navigated ? true : void 0;
  }
  activate() {
    if (this.type === TableRowType_default.Active) {
      this.active = true;
    }
  }
  deactivate() {
    if (this.active) {
      this.active = false;
    }
  }
  get shouldPopin() {
    return this._columnsInfo?.filter((el) => {
      return el.demandPopin || !el.visible;
    }).length;
  }
  get allColumnsPoppedIn() {
    return this._columnsInfo?.every((el) => el.demandPopin && !el.visible);
  }
  onBeforeRendering() {
    if (!this.shouldPopin) {
      return;
    }
    this.visibleCells = [];
    this.popinCells = [];
    if (this.cells.length === 0) {
      return;
    }
    const allColumnsPoppedInClass = this.allColumnsPoppedIn ? "all-columns-popped-in" : "";
    this._columnsInfo?.forEach((info, index) => {
      const cell = this.cells[index];
      const popinDisplay = info.popinDisplay === TableColumnPopinDisplay_default.Inline;
      if (!cell) {
        return;
      }
      if (info.visible) {
        this.visibleCells.push(cell);
        cell.popined = false;
        cell._popinedInline = false;
      } else if (info.demandPopin) {
        const popinHeaderClass = this.popinCells.length === 0 ? "popin-header" : "";
        this.popinCells.push({
          cell,
          popinText: info.popinText,
          classes: `ui5-table-popin-row ${allColumnsPoppedInClass} ${popinHeaderClass}`,
          popinDisplayInline: popinDisplay
        });
        cell.popined = true;
        if (info.popinDisplay === TableColumnPopinDisplay_default.Inline) {
          cell._popinedInline = true;
        }
      } else {
        cell.popined = false;
        cell._popinedInline = false;
      }
    });
    const lastVisibleCell = this.visibleCells[this.visibleCells.length - 1];
    if (lastVisibleCell) {
      lastVisibleCell.lastInRow = true;
    }
  }
  get visibleCellsCount() {
    let visibleCellsCount = this.visibleCells.length;
    if (this.isMultiSelect) {
      visibleCellsCount += 1;
    }
    return visibleCellsCount;
  }
  get ariaLabelText() {
    const isSelected = this.selected ? TableRow_1.i18nBundle.getText(LIST_ITEM_SELECTED) : TableRow_1.i18nBundle.getText(LIST_ITEM_NOT_SELECTED);
    const isRowSelectable = this.isSingleSelect || this.isMultiSelect;
    const ariaLabel = this.cells.map((cell, index) => {
      const columText = this.getColumnTextByIdx(index);
      const cellText = cell.cellContent.length ? this.getCellText(cell) : cell.ariaLabelEmptyCellText;
      return `${columText} ${cellText}`;
    }).join(" ");
    if (isRowSelectable) {
      return `${ariaLabel}. ${this.forcedAriaPosition}. ${isSelected}`;
    }
    return `${ariaLabel}. ${this.forcedAriaPosition}`;
  }
  get ariaLabelRowSelection() {
    return TableRow_1.i18nBundle.getText(ARIA_LABEL_ROW_SELECTION);
  }
  get isSingleSelect() {
    return this.mode === TableMode_default.SingleSelect;
  }
  get isMultiSelect() {
    return this.mode === TableMode_default.MultiSelect;
  }
  get root() {
    return this.shadowRoot.querySelector(".ui5-table-row-root");
  }
  getCellText(cell) {
    const cellTextContent = cell.textContent;
    return cellTextContent ? this.getNormilzedTextContent(cellTextContent) : "";
  }
  getColumnTextByIdx(index) {
    const columnInfo = this._columnsInfo?.[index];
    if (!columnInfo) {
      return "";
    }
    return columnInfo.text ? this.getNormilzedTextContent(columnInfo.text) : "";
  }
  getNormilzedTextContent(textContent) {
    return textContent.replace(/[\n\r\t]/g, "").trim();
  }
  static onDefine() {
    return __async(this, null, function* () {
      TableRow_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate([
  property_default()
], TableRow.prototype, "type", void 0);
__decorate([
  property_default({ type: Boolean })
], TableRow.prototype, "selected", void 0);
__decorate([
  property_default({ type: Boolean })
], TableRow.prototype, "navigated", void 0);
__decorate([
  property_default()
], TableRow.prototype, "mode", void 0);
__decorate([
  property_default({ type: Boolean })
], TableRow.prototype, "active", void 0);
__decorate([
  property_default({ type: Array })
], TableRow.prototype, "_columnsInfo", void 0);
__decorate([
  property_default()
], TableRow.prototype, "forcedTabIndex", void 0);
__decorate([
  property_default({ type: Boolean })
], TableRow.prototype, "forcedBusy", void 0);
__decorate([
  property_default({ noAttribute: true })
], TableRow.prototype, "forcedAriaPosition", void 0);
__decorate([
  slot_default({ type: HTMLElement, "default": true, individualSlots: true })
], TableRow.prototype, "cells", void 0);
TableRow = TableRow_1 = __decorate([
  customElement_default({
    tag: "ui5-table-row",
    styles: TableRow_css_default,
    renderer: LitRenderer_default,
    template: TableRowTemplate_lit_default,
    dependencies: [CheckBox_default]
  }),
  event_default("row-click"),
  event_default("_focused"),
  event_default("selection-requested"),
  event_default("f7-pressed")
], TableRow);
TableRow.define();
var TableRow_default = TableRow;

export {
  TableRow_default
};
//# sourceMappingURL=chunk-EDCOZZ4Q.js.map
