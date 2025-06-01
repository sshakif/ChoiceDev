import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-HTTIRSAN.js";
import {
  LitRenderer_default,
  effectiveHtml,
  parameters_bundle_css_default
} from "./chunk-DMMFI3C7.js";
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

// node_modules/@ui5/webcomponents-compat/dist/generated/templates/TableColumnTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<th scope="col" part="column" role="columnheader"><slot></slot></th>`;
}
var TableColumnTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents-compat/dist/generated/themes/TableColumn.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents-compat", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents-compat", fileName: "themes/TableColumn.css.ts", content: `:host{display:contents}th{background:var(--sapList_HeaderBackground);width:inherit;font-weight:var(--ui5-v2-0-1_table_header_row_font_weight);font-size:var(--sapFontMediumSize);font-family:var(--ui5-v2-0-1_table_header_row_font_family);padding:.5rem;box-sizing:border-box;text-align:start;vertical-align:middle}:host([first]) th{padding-inline-start:1rem}th ::slotted([ui5-label]){font-weight:var(--ui5-v2-0-1_table_header_row_font_weight);font-size:var(--sapFontMediumSize);font-family:var(--ui5-v2-0-1_table_header_row_font_family)}
` };
var TableColumn_css_default = styleData;

// node_modules/@ui5/webcomponents-compat/dist/TableColumn.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TableColumn = class TableColumn2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.minWidth = Infinity;
    this.demandPopin = false;
    this.popinDisplay = "Block";
    this.first = false;
    this.last = false;
  }
};
__decorate([
  property_default({ type: Number })
], TableColumn.prototype, "minWidth", void 0);
__decorate([
  property_default()
], TableColumn.prototype, "popinText", void 0);
__decorate([
  property_default({ type: Boolean })
], TableColumn.prototype, "demandPopin", void 0);
__decorate([
  property_default()
], TableColumn.prototype, "popinDisplay", void 0);
__decorate([
  property_default({ type: Boolean })
], TableColumn.prototype, "first", void 0);
__decorate([
  property_default({ type: Boolean })
], TableColumn.prototype, "last", void 0);
TableColumn = __decorate([
  customElement_default({
    tag: "ui5-table-column",
    styles: TableColumn_css_default,
    renderer: LitRenderer_default,
    template: TableColumnTemplate_lit_default
  })
], TableColumn);
TableColumn.define();
var TableColumn_default = TableColumn;

export {
  TableColumn_default
};
//# sourceMappingURL=chunk-TGQAUUBJ.js.map
