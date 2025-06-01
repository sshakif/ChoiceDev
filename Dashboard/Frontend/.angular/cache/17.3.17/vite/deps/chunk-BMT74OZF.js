import {
  ResizeHandler_default
} from "./chunk-3NVTNN76.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  LitRenderer_default,
  classMap,
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

// node_modules/@ui5/webcomponents/dist/generated/templates/BarTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.root)}" aria-label="${ifDefined(this.accInfo.label)}" role="toolbar" part="bar"><div class="ui5-bar-content-container ui5-bar-startcontent-container"><slot name="startContent"></slot></div><div class="ui5-bar-content-container ui5-bar-midcontent-container"><slot></slot></div><div class="ui5-bar-content-container ui5-bar-endcontent-container"><slot name="endContent"></slot></div></div>`;
}
var BarTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Bar.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Bar.css.ts", content: `:host{background-color:var(--sapPageHeader_Background);height:var(--_ui5-v2-0-1_bar_base_height);width:100%;box-shadow:var(--sapContent_HeaderShadow);display:block}.ui5-bar-root{display:flex;align-items:center;justify-content:space-between;height:inherit;width:inherit;background-color:inherit;box-shadow:inherit;border-radius:inherit}.ui5-bar-root .ui5-bar-startcontent-container{padding-inline-start:var(--_ui5-v2-0-1_bar-start-container-padding-start);display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.ui5-bar-root .ui5-bar-content-container{min-width:calc(30% - calc(var(--_ui5-v2-0-1_bar-start-container-padding-start) + var(--_ui5-v2-0-1_bar-end-container-padding-end) + (2*var(--_ui5-v2-0-1_bar-mid-container-padding-start-end))))}.ui5-bar-root.ui5-bar-root-shrinked .ui5-bar-content-container{min-width:0px;overflow:hidden;height:100%}.ui5-bar-root .ui5-bar-endcontent-container{padding-inline-end:var(--_ui5-v2-0-1_bar-end-container-padding-end);display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.ui5-bar-root .ui5-bar-midcontent-container{padding:0 var(--_ui5-v2-0-1_bar-mid-container-padding-start-end);display:flex;flex-direction:row;align-items:center;justify-content:center}:host([design="Footer"]){background-color:var(--sapPageFooter_Background);border-top:.0625rem solid var(--sapPageFooter_BorderColor);box-shadow:none}:host([design="Subheader"]){height:var(--_ui5-v2-0-1_bar_subheader_height);margin-top:var(--_ui5-v2-0-1_bar_subheader_margin-top)}:host([design="FloatingFooter"]){border-radius:var(--sapElement_BorderCornerRadius);background-color:var(--sapPageFooter_Background);box-shadow:var(--sapContent_Shadow1);border:none}::slotted(*){margin:0 .25rem}
` };
var Bar_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Bar.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Bar = class Bar2 extends UI5Element_default {
  get accInfo() {
    return {
      "label": this.design
    };
  }
  constructor() {
    super();
    this.design = "Header";
    this._handleResizeBound = this.handleResize.bind(this);
  }
  handleResize() {
    const bar = this.getDomRef();
    const barWidth = bar.offsetWidth;
    const needShrinked = Array.from(bar.children).some((child) => {
      return child.offsetWidth > barWidth / 3;
    });
    bar.classList.toggle("ui5-bar-root-shrinked", needShrinked);
  }
  get classes() {
    return {
      root: {
        "ui5-bar-root": true
      }
    };
  }
  onEnterDOM() {
    ResizeHandler_default.register(this, this._handleResizeBound);
    this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach((child) => {
      ResizeHandler_default.register(child, this._handleResizeBound);
    }, this);
  }
  onExitDOM() {
    ResizeHandler_default.deregister(this, this._handleResizeBound);
    this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach((child) => {
      ResizeHandler_default.deregister(child, this._handleResizeBound);
    }, this);
  }
};
__decorate([
  property_default()
], Bar.prototype, "design", void 0);
__decorate([
  slot_default({ type: HTMLElement })
], Bar.prototype, "startContent", void 0);
__decorate([
  slot_default({ type: HTMLElement, "default": true })
], Bar.prototype, "middleContent", void 0);
__decorate([
  slot_default({ type: HTMLElement })
], Bar.prototype, "endContent", void 0);
Bar = __decorate([
  customElement_default({
    tag: "ui5-bar",
    fastNavigation: true,
    renderer: LitRenderer_default,
    styles: Bar_css_default,
    template: BarTemplate_lit_default
  })
], Bar);
Bar.define();
//# sourceMappingURL=chunk-BMT74OZF.js.map
