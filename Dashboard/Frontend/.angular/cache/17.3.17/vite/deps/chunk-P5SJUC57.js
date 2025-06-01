import {
  isDesktop,
  isEnter,
  isSpace
} from "./chunk-ECUZOJV2.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  LitRenderer_default,
  effectiveHtml,
  effectiveSvg,
  ifDefined,
  parameters_bundle_css_default,
  repeat
} from "./chunk-DMMFI3C7.js";
import {
  getIconData,
  getIconDataSync
} from "./chunk-XOBH4D6P.js";
import {
  getI18nBundle
} from "./chunk-22ISB74T.js";
import {
  event_default
} from "./chunk-XYCO3572.js";
import {
  UI5Element_default,
  customElement_default,
  executeTemplate_default,
  property_default
} from "./chunk-V2NLQCH3.js";
import {
  init_Themes,
  registerThemePropertiesLoader
} from "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents/dist/types/IconMode.js
var IconMode;
(function(IconMode2) {
  IconMode2["Image"] = "Image";
  IconMode2["Decorative"] = "Decorative";
  IconMode2["Interactive"] = "Interactive";
})(IconMode || (IconMode = {}));
var IconMode_default = IconMode;

// node_modules/@ui5/webcomponents/dist/generated/templates/IconTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<svg class="ui5-icon-root" part="root" tabindex="${ifDefined(this._tabIndex)}" dir="${ifDefined(this._dir)}" viewBox="${ifDefined(this.viewBox)}" role="${ifDefined(this.effectiveAccessibleRole)}" focusable="false" preserveAspectRatio="xMidYMid meet" aria-label="${ifDefined(this.effectiveAccessibleName)}" aria-hidden=${ifDefined(this.effectiveAriaHidden)} xmlns="http://www.w3.org/2000/svg" @keydown=${this._onkeydown} @keyup=${this._onkeyup}>${blockSVG1.call(this, context, tags, suffix)}</svg>`;
}
function block1(context, tags, suffix) {
  return effectiveSvg`<title id="${ifDefined(this._id)}-tooltip">${ifDefined(this.effectiveAccessibleName)}</title>`;
}
function block2(context, tags, suffix) {
  return effectiveSvg`${ifDefined(this.customSvg)}`;
}
function block3(context, tags, suffix, item, index) {
  return effectiveSvg`<path d="${ifDefined(item)}"></path>`;
}
function blockSVG1(context, tags, suffix) {
  return effectiveSvg`${this.hasIconTooltip ? block1.call(this, context, tags, suffix) : void 0}<g role="presentation">${this.customSvg ? block2.call(this, context, tags, suffix) : void 0}${repeat(this.pathData, (item, index) => item._id || index, (item, index) => block3.call(this, context, tags, suffix, item, index))}</g>`;
}
var IconTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Icon.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Icon.css.ts", content: `:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([hidden]){display:none}:host([invalid]){display:none}:host(:not([hidden]).ui5_hovered){opacity:.7}:host{display:inline-block;width:1rem;height:1rem;color:var(--sapContent_IconColor);fill:currentColor;outline:none}:host([design="Contrast"]){color:var(--sapContent_ContrastIconColor)}:host([design="Critical"]){color:var(--sapCriticalElementColor)}:host([design="Information"]){color:var(--sapInformativeElementColor)}:host([design="Negative"]){color:var(--sapNegativeElementColor)}:host([design="Neutral"]){color:var(--sapNeutralElementColor)}:host([design="NonInteractive"]){color:var(--sapContent_NonInteractiveIconColor)}:host([design="Positive"]){color:var(--sapPositiveElementColor)}:host([mode="Interactive"][desktop]) .ui5-icon-root:focus,:host([mode="Interactive"]) .ui5-icon-root:focus-visible{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--ui5-v2-0-1-icon-focus-border-radius)}.ui5-icon-root{display:flex;height:100%;width:100%;outline:none;vertical-align:top}:host([mode="Interactive"]){cursor:pointer}.ui5-icon-root:not([dir=ltr]){transform:var(--_ui5-v2-0-1_icon_transform_scale);transform-origin:center}
` };
var Icon_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Icon.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ICON_NOT_FOUND = "ICON_NOT_FOUND";
var Icon = class Icon2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.design = "Default";
    this.showTooltip = false;
    this.mode = "Image";
    this.pathData = [];
    this.invalid = false;
  }
  _onkeydown(e) {
    if (this.mode !== IconMode_default.Interactive) {
      return;
    }
    if (isEnter(e)) {
      this.fireEvent("click");
    }
    if (isSpace(e)) {
      e.preventDefault();
    }
  }
  _onkeyup(e) {
    if (this.mode === IconMode_default.Interactive && isSpace(e)) {
      this.fireEvent("click");
    }
  }
  /**
  * Enforce "ltr" direction, based on the icons collection metadata.
  */
  get _dir() {
    return this.ltr ? "ltr" : void 0;
  }
  get effectiveAriaHidden() {
    return this.mode === IconMode_default.Decorative ? "true" : void 0;
  }
  get _tabIndex() {
    return this.mode === IconMode_default.Interactive ? "0" : void 0;
  }
  get effectiveAccessibleRole() {
    switch (this.mode) {
      case IconMode_default.Interactive:
        return "button";
      case IconMode_default.Decorative:
        return "presentation";
      default:
        return "img";
    }
  }
  onEnterDOM() {
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
  }
  onBeforeRendering() {
    return __async(this, null, function* () {
      const name = this.name;
      if (!name) {
        return console.warn("Icon name property is required", this);
      }
      let iconData = getIconDataSync(name);
      if (!iconData) {
        iconData = yield getIconData(name);
      }
      if (!iconData) {
        this.invalid = true;
        return console.warn(`Required icon is not registered. Invalid icon name: ${this.name}`);
      }
      if (iconData === ICON_NOT_FOUND) {
        this.invalid = true;
        return console.warn(`Required icon is not registered. You can either import the icon as a module in order to use it e.g. "@ui5/webcomponents-icons/dist/${name.replace("sap-icon://", "")}.js", or setup a JSON build step and import "@ui5/webcomponents-icons/dist/AllIcons.js".`);
      }
      this.viewBox = iconData.viewBox || "0 0 512 512";
      if (iconData.customTemplate) {
        iconData.pathData = [];
        this.customSvg = executeTemplate_default(iconData.customTemplate, this);
      }
      this.invalid = false;
      this.pathData = Array.isArray(iconData.pathData) ? iconData.pathData : [iconData.pathData];
      this.accData = iconData.accData;
      this.ltr = iconData.ltr;
      this.packageName = iconData.packageName;
      if (this.accessibleName) {
        this.effectiveAccessibleName = this.accessibleName;
      } else if (this.accData) {
        const i18nBundle = yield getI18nBundle(this.packageName);
        this.effectiveAccessibleName = i18nBundle.getText(this.accData) || void 0;
      } else {
        this.effectiveAccessibleName = void 0;
      }
    });
  }
  get hasIconTooltip() {
    return this.showTooltip && this.effectiveAccessibleName;
  }
};
__decorate([
  property_default()
], Icon.prototype, "design", void 0);
__decorate([
  property_default()
], Icon.prototype, "name", void 0);
__decorate([
  property_default()
], Icon.prototype, "accessibleName", void 0);
__decorate([
  property_default({ type: Boolean })
], Icon.prototype, "showTooltip", void 0);
__decorate([
  property_default()
], Icon.prototype, "mode", void 0);
__decorate([
  property_default({ type: Array })
], Icon.prototype, "pathData", void 0);
__decorate([
  property_default({ type: Object, noAttribute: true })
], Icon.prototype, "accData", void 0);
__decorate([
  property_default({ type: Boolean })
], Icon.prototype, "invalid", void 0);
__decorate([
  property_default({ noAttribute: true })
], Icon.prototype, "effectiveAccessibleName", void 0);
Icon = __decorate([
  customElement_default({
    tag: "ui5-icon",
    languageAware: true,
    themeAware: true,
    renderer: LitRenderer_default,
    template: IconTemplate_lit_default,
    styles: Icon_css_default
  }),
  event_default("click")
], Icon);
Icon.define();
var Icon_default = Icon;

export {
  IconMode_default,
  Icon_default
};
//# sourceMappingURL=chunk-P5SJUC57.js.map
