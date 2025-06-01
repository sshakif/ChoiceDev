import {
  ARIA_LABEL_EMPTY_CELL
} from "./chunk-MLGAL3PK.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-HTTIRSAN.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  LitRenderer_default,
  effectiveHtml,
  parameters_bundle_css_default
} from "./chunk-DMMFI3C7.js";
import {
  getI18nBundle
} from "./chunk-22ISB74T.js";
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

// node_modules/@ui5/webcomponents-compat/dist/generated/templates/TableCellTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<td tabindex="-1" part="cell" role="cell"><slot></slot></td>`;
}
var TableCellTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents-compat/dist/generated/themes/TableCell.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents-compat", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents-compat", fileName: "themes/TableCell.css.ts", content: `:host{display:table-cell;font-family:"72override",var(--sapFontFamily);font-size:.875rem;height:var(--ui5-v2-0-1_table_row_height);box-sizing:border-box;color:var(--sapList_TextColor);word-break:break-word;vertical-align:middle}td{display:contents}:host([popined]){padding-left:0;padding-top:.25rem}:host([_popined-inline]){padding-top:0}::slotted([ui5-label]){color:inherit}
` };
var TableCell_css_default = styleData;

// node_modules/@ui5/webcomponents-compat/dist/TableCell.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TableCell_1;
var TableCell = TableCell_1 = class TableCell2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.lastInRow = false;
    this.popined = false;
    this._popinedInline = false;
  }
  static onDefine() {
    return __async(this, null, function* () {
      TableCell_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  get cellContent() {
    return this.getSlottedNodes("content");
  }
  get ariaLabelEmptyCellText() {
    return TableCell_1.i18nBundle.getText(ARIA_LABEL_EMPTY_CELL);
  }
};
__decorate([
  property_default({ type: Boolean })
], TableCell.prototype, "lastInRow", void 0);
__decorate([
  property_default({ type: Boolean })
], TableCell.prototype, "popined", void 0);
__decorate([
  property_default({ type: Boolean })
], TableCell.prototype, "_popinedInline", void 0);
__decorate([
  slot_default({ type: HTMLElement, "default": true })
], TableCell.prototype, "content", void 0);
TableCell = TableCell_1 = __decorate([
  customElement_default({
    tag: "ui5-table-cell",
    renderer: LitRenderer_default,
    template: TableCellTemplate_lit_default,
    styles: TableCell_css_default
  })
], TableCell);
TableCell.define();
var TableCell_default = TableCell;

export {
  TableCell_default
};
//# sourceMappingURL=chunk-KDV7EHOB.js.map
