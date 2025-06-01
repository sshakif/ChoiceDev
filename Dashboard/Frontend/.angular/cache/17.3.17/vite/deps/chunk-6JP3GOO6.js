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

// node_modules/@ui5/webcomponents/dist/types/TitleLevel.js
var TitleLevel;
(function(TitleLevel2) {
  TitleLevel2["H1"] = "H1";
  TitleLevel2["H2"] = "H2";
  TitleLevel2["H3"] = "H3";
  TitleLevel2["H4"] = "H4";
  TitleLevel2["H5"] = "H5";
  TitleLevel2["H6"] = "H6";
})(TitleLevel || (TitleLevel = {}));
var TitleLevel_default = TitleLevel;

// node_modules/@ui5/webcomponents/dist/generated/templates/TitleTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`${this.h1 ? block1.call(this, context, tags, suffix) : void 0}${this.h2 ? block2.call(this, context, tags, suffix) : void 0}${this.h3 ? block3.call(this, context, tags, suffix) : void 0}${this.h4 ? block4.call(this, context, tags, suffix) : void 0}${this.h5 ? block5.call(this, context, tags, suffix) : void 0}${this.h6 ? block6.call(this, context, tags, suffix) : void 0}`;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<h1 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h1>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<h2 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h2>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<h3 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h3>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<h4 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h4>`;
}
function block5(context, tags, suffix) {
  return effectiveHtml`<h5 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h5>`;
}
function block6(context, tags, suffix) {
  return effectiveHtml`<h6 class="ui5-title-root"><span id="${ifDefined(this._id)}-inner"><slot></slot></span></h6>`;
}
var TitleTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Title.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Title.css.ts", content: `:host(:not([hidden])){display:block;cursor:text}:host{max-width:100%;color:var(--sapGroup_TitleTextColor);font-size:var(--sapFontHeader2Size);font-family:"72override",var(--sapFontHeaderFamily);text-shadow:var(--sapContent_TextShadow)}.ui5-title-root{display:inline-block;position:relative;font-weight:400;font-size:inherit;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;max-width:100%;vertical-align:bottom;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;margin:0;cursor:inherit}:host{white-space:pre-line}:host([wrapping-type="None"]){white-space:nowrap}.ui5-title-root,:host ::slotted(*){white-space:inherit}::slotted(*){font-size:inherit;font-family:inherit;text-shadow:inherit}:host([level="H1"]){font-size:var(--sapFontHeader1Size)}:host([level="H2"]){font-size:var(--sapFontHeader2Size)}:host([level="H3"]){font-size:var(--sapFontHeader3Size)}:host([level="H4"]){font-size:var(--sapFontHeader4Size)}:host([level="H5"]){font-size:var(--sapFontHeader5Size)}:host([level="H6"]){font-size:var(--sapFontHeader6Size)}
` };
var Title_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Title.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Title = class Title2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.wrappingType = "Normal";
    this.level = "H2";
  }
  get h1() {
    return this.level === TitleLevel_default.H1;
  }
  get h2() {
    return this.level === TitleLevel_default.H2;
  }
  get h3() {
    return this.level === TitleLevel_default.H3;
  }
  get h4() {
    return this.level === TitleLevel_default.H4;
  }
  get h5() {
    return this.level === TitleLevel_default.H5;
  }
  get h6() {
    return this.level === TitleLevel_default.H6;
  }
};
__decorate([
  property_default()
], Title.prototype, "wrappingType", void 0);
__decorate([
  property_default()
], Title.prototype, "level", void 0);
Title = __decorate([
  customElement_default({
    tag: "ui5-title",
    renderer: LitRenderer_default,
    template: TitleTemplate_lit_default,
    styles: Title_css_default
  })
], Title);
Title.define();
var Title_default = Title;

export {
  TitleLevel_default,
  Title_default
};
//# sourceMappingURL=chunk-6JP3GOO6.js.map
