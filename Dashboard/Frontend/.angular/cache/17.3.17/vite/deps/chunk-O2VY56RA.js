import {
  TableMode_default
} from "./chunk-EKDSRZUC.js";
import {
  TABLE_GROUP_ROW_ARIA_LABEL
} from "./chunk-MLGAL3PK.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-HTTIRSAN.js";
import {
  CheckBox_default
} from "./chunk-IZADXD4H.js";
import {
  LitRenderer_default,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default
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

// node_modules/@ui5/webcomponents-compat/dist/generated/templates/TableGroupRowTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<tr class="ui5-table-group-row-root" part="group-row" aria-label=${ifDefined(this.ariaLabelText)} tabindex="${ifDefined(this.forcedTabIndex)}" @focusin="${this._onfocusin}"><td colspan=${ifDefined(this.colSpan)}><slot></slot></td></tr>`;
}
var TableGroupRowTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents-compat/dist/generated/themes/TableGroupRow.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents-compat", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents-compat", fileName: "themes/TableGroupRow.css.ts", content: `:host{display:contents}:host([_busy]) .ui5-table-group-row-root{opacity:.72;pointer-events:none}.ui5-table-group-row-root{height:var(--ui5-v2-0-1_table_group_row_height);border-style:solid;border-color:var(--sapList_TableGroupHeaderBorderColor);border-width:var(--ui5-v2-0-1_table_border_width);background-color:var(--sapList_TableGroupHeaderBackground);color:var(--sapList_TableGroupHeaderTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5-v2-0-1_table_group_row_font-weight)}.ui5-table-group-row-root:focus{outline:var(--ui5-v2-0-1_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--ui5-v2-0-1_table_focus_outline_offset)}td{word-break:break-word;vertical-align:middle;padding:.5rem .25rem .5rem 1rem;text-align:start}
` };
var TableGroupRow_css_default = styleData;

// node_modules/@ui5/webcomponents-compat/dist/TableGroupRow.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TableGroupRow_1;
var TableGroupRow = TableGroupRow_1 = class TableGroupRow2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.mode = "None";
    this.forcedBusy = false;
    this.selected = false;
    this.tabbableElements = [];
    this._columnsInfoString = "";
  }
  get colSpan() {
    return this._colSpan;
  }
  get ariaLabelText() {
    return `${TableGroupRow_1.i18nBundle.getText(TABLE_GROUP_ROW_ARIA_LABEL)} ${this.innerText}. ${this.forcedAriaPosition}`;
  }
  visibleColCount() {
    let count = this._columnsInfo?.reduce((acc, column) => {
      return column.visible ? ++acc : acc;
    }, 0) || 0;
    if (this.mode === TableMode_default.MultiSelect) {
      count++;
    }
    return count;
  }
  onBeforeRendering() {
    if (!this._columnsInfo || this._columnsInfo.length === 0) {
      return;
    }
    this._colSpan = this.visibleColCount();
  }
  _onfocusin(e) {
    this.fireEvent("_focused", e);
  }
  static onDefine() {
    return __async(this, null, function* () {
      TableGroupRow_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate([
  property_default()
], TableGroupRow.prototype, "mode", void 0);
__decorate([
  property_default({ type: Array })
], TableGroupRow.prototype, "_columnsInfo", void 0);
__decorate([
  property_default()
], TableGroupRow.prototype, "forcedTabIndex", void 0);
__decorate([
  property_default({ type: Boolean })
], TableGroupRow.prototype, "forcedBusy", void 0);
__decorate([
  property_default()
], TableGroupRow.prototype, "forcedAriaPosition", void 0);
TableGroupRow = TableGroupRow_1 = __decorate([
  customElement_default({
    tag: "ui5-table-group-row",
    styles: TableGroupRow_css_default,
    renderer: LitRenderer_default,
    template: TableGroupRowTemplate_lit_default,
    dependencies: [
      CheckBox_default
    ]
  }),
  event_default("_focused")
], TableGroupRow);
TableGroupRow.define();
var TableGroupRow_default = TableGroupRow;

export {
  TableGroupRow_default
};
//# sourceMappingURL=chunk-O2VY56RA.js.map
