import {
  LABEL_COLON
} from "./chunk-U6TJ47RH.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
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

// node_modules/@ui5/webcomponents/dist/generated/templates/LabelTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<label class="ui5-label-root" @click=${this._onclick}><span class="ui5-label-text-wrapper"><bdi id="${ifDefined(this._id)}-bdi"><slot></slot></bdi></span><span aria-hidden="true" class="ui5-label-required-colon" data-colon="${ifDefined(this._colonSymbol)}"></span></label>`;
}
var LabelTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Label.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Label.css.ts", content: `:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapContent_LabelColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;cursor:text}.ui5-label-root{width:100%;cursor:inherit}:host{white-space:normal}:host([wrapping-type="None"]){white-space:nowrap}:host([wrapping-type="None"]) .ui5-label-root{display:inline-flex}:host([wrapping-type="None"]) .ui5-label-text-wrapper{text-overflow:ellipsis;overflow:hidden;display:inline-block;vertical-align:top;flex:0 1 auto;min-width:0}:host([show-colon]) .ui5-label-required-colon:before{content:attr(data-colon)}:host([required]) .ui5-label-required-colon:after{content:"*";color:var(--sapField_RequiredColor);font-size:1.25rem;font-weight:700;position:relative;font-style:normal;vertical-align:middle;line-height:0}:host([required][show-colon]) .ui5-label-required-colon:after{margin-inline-start:.125rem}bdi{padding-right:.075rem}:host([show-colon]) .ui5-label-required-colon{margin-inline-start:-.05rem;white-space:pre}
` };
var Label_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Label.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Label_1;
var Label = Label_1 = class Label2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.showColon = false;
    this.required = false;
    this.wrappingType = "Normal";
  }
  static onDefine() {
    return __async(this, null, function* () {
      Label_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  _onclick() {
    if (!this.for) {
      return;
    }
    const elementToFocus = this.getRootNode().querySelector(`[id="${this.for}"]`);
    if (elementToFocus) {
      elementToFocus.focus();
    }
  }
  get _colonSymbol() {
    return Label_1.i18nBundle.getText(LABEL_COLON);
  }
};
__decorate([
  property_default()
], Label.prototype, "for", void 0);
__decorate([
  property_default({ type: Boolean })
], Label.prototype, "showColon", void 0);
__decorate([
  property_default({ type: Boolean })
], Label.prototype, "required", void 0);
__decorate([
  property_default()
], Label.prototype, "wrappingType", void 0);
Label = Label_1 = __decorate([
  customElement_default({
    tag: "ui5-label",
    renderer: LitRenderer_default,
    template: LabelTemplate_lit_default,
    styles: Label_css_default,
    languageAware: true
  })
], Label);
Label.define();
var Label_default = Label;

export {
  Label_default
};
//# sourceMappingURL=chunk-W4KLC5M5.js.map
