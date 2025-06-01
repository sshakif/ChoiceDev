import {
  Label_default
} from "./chunk-W4KLC5M5.js";
import {
  BUSY_INDICATOR_TITLE
} from "./chunk-U6TJ47RH.js";
import {
  isDesktop,
  isTabNext
} from "./chunk-ECUZOJV2.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  LitRenderer_default,
  classMap,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  scopeTag
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

// node_modules/@ui5/webcomponents/dist/types/BusyIndicatorTextPlacement.js
var BusyIndicatorTextPlacement;
(function(BusyIndicatorTextPlacement2) {
  BusyIndicatorTextPlacement2["Top"] = "Top";
  BusyIndicatorTextPlacement2["Bottom"] = "Bottom";
})(BusyIndicatorTextPlacement || (BusyIndicatorTextPlacement = {}));
var BusyIndicatorTextPlacement_default = BusyIndicatorTextPlacement;

// node_modules/@ui5/webcomponents/dist/generated/templates/BusyIndicatorTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.root)}">${this._isBusy ? block1.call(this, context, tags, suffix) : void 0}<slot></slot>${this._isBusy ? block6.call(this, context, tags, suffix) : void 0}</div> `;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-busy-indicator-busy-area" title="${ifDefined(this.ariaTitle)}" tabindex="0" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Busy" aria-labelledby="${ifDefined(this.labelId)}" data-sap-focus-ref>${this.textPosition.top ? block2.call(this, context, tags, suffix) : void 0}<div class="ui5-busy-indicator-circles-wrapper"><div class="ui5-busy-indicator-circle circle-animation-0"></div><div class="ui5-busy-indicator-circle circle-animation-1"></div><div class="ui5-busy-indicator-circle circle-animation-2"></div></div>${this.textPosition.bottom ? block4.call(this, context, tags, suffix) : void 0}</div>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`${this.text ? block3.call(this, context, tags, suffix) : void 0}`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-label", tags, suffix)} id="${ifDefined(this._id)}-label" class="ui5-busy-indicator-text">${ifDefined(this.text)}</${scopeTag("ui5-label", tags, suffix)}>` : effectiveHtml`<ui5-label id="${ifDefined(this._id)}-label" class="ui5-busy-indicator-text">${ifDefined(this.text)}</ui5-label>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`${this.text ? block5.call(this, context, tags, suffix) : void 0}`;
}
function block5(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-label", tags, suffix)} id="${ifDefined(this._id)}-label" class="ui5-busy-indicator-text">${ifDefined(this.text)}</${scopeTag("ui5-label", tags, suffix)}>` : effectiveHtml`<ui5-label id="${ifDefined(this._id)}-label" class="ui5-busy-indicator-text">${ifDefined(this.text)}</ui5-label>`;
}
function block6(context, tags, suffix) {
  return effectiveHtml`<span data-ui5-focus-redirect tabindex="0" @focusin="${this._redirectFocus}"></span>`;
}
var BusyIndicatorTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/BusyIndicator.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/BusyIndicator.css.ts", content: `:host(:not([hidden])){display:inline-block}:host([_is-busy]){color:var(--_ui5-v2-0-1_busy_indicator_color)}:host([size="S"]) .ui5-busy-indicator-root{min-width:1.625rem;min-height:.5rem}:host([size="S"][text]:not([text=""])) .ui5-busy-indicator-root{min-height:1.75rem}:host([size="S"]) .ui5-busy-indicator-circle{width:.5rem;height:.5rem}:host([size="S"]) .ui5-busy-indicator-circle:first-child,:host([size="S"]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.0625rem}:host(:not([size])) .ui5-busy-indicator-root,:host([size="M"]) .ui5-busy-indicator-root{min-width:3.375rem;min-height:1rem}:host([size="M"]) .ui5-busy-indicator-circle:first-child,:host([size="M"]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.1875rem}:host(:not([size])[text]:not([text=""])) .ui5-busy-indicator-root,:host([size="M"][text]:not([text=""])) .ui5-busy-indicator-root{min-height:2.25rem}:host(:not([size])) .ui5-busy-indicator-circle,:host([size="M"]) .ui5-busy-indicator-circle{width:1rem;height:1rem}:host([size="L"]) .ui5-busy-indicator-root{min-width:6.5rem;min-height:2rem}:host([size="L"]) .ui5-busy-indicator-circle:first-child,:host([size="L"]) .ui5-busy-indicator-circle:nth-child(2){margin-inline-end:.25rem}:host([size="L"][text]:not([text=""])) .ui5-busy-indicator-root{min-height:3.25rem}:host([size="L"]) .ui5-busy-indicator-circle{width:2rem;height:2rem}.ui5-busy-indicator-root{display:flex;justify-content:center;align-items:center;position:relative;background-color:inherit;height:inherit}.ui5-busy-indicator-busy-area{position:absolute;z-index:99;inset:0;display:flex;justify-content:center;align-items:center;background-color:inherit;flex-direction:column}:host(:not(:empty)) .ui5-busy-indicator-busy-area{background-color:var(--_ui5-v2-0-1_busy_indicator_block_layer)}:host([desktop]) .ui5-busy-indicator-busy-area:focus,.ui5-busy-indicator-busy-area:focus-visible{outline:var(--_ui5-v2-0-1_busy_indicator_focus_outline);outline-offset:-2px;border-radius:var(--_ui5-v2-0-1_busy_indicator_focus_border_radius)}.ui5-busy-indicator-circles-wrapper{line-height:0}.ui5-busy-indicator-circle{display:inline-block;background-color:currentColor;border-radius:50%}.ui5-busy-indicator-circle:before{content:"";width:100%;height:100%;border-radius:100%}.circle-animation-0{animation:grow 1.6s infinite cubic-bezier(.32,.06,.85,1.11)}.circle-animation-1{animation:grow 1.6s infinite cubic-bezier(.32,.06,.85,1.11);animation-delay:.2s}.circle-animation-2{animation:grow 1.6s infinite cubic-bezier(.32,.06,.85,1.11);animation-delay:.4s}.ui5-busy-indicator-text{width:100%;text-align:center}:host([text-placement="Top"]) .ui5-busy-indicator-text{margin-bottom:.5rem}:host(:not([text-placement])) .ui5-busy-indicator-text,:host([text-placement="Bottom"]) .ui5-busy-indicator-text{margin-top:.5rem}@keyframes grow{0%,50%,to{-webkit-transform:scale(.5);-moz-transform:scale(.5);transform:scale(.5)}25%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}
` };
var BusyIndicator_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/BusyIndicator.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BusyIndicator_1;
var BusyIndicator = BusyIndicator_1 = class BusyIndicator2 extends UI5Element_default {
  constructor() {
    super();
    this.size = "M";
    this.active = false;
    this.delay = 1e3;
    this.textPlacement = "Bottom";
    this._isBusy = false;
    this._keydownHandler = this._handleKeydown.bind(this);
    this._preventEventHandler = this._preventEvent.bind(this);
  }
  onEnterDOM() {
    this.addEventListener("keydown", this._keydownHandler, {
      capture: true
    });
    this.addEventListener("keyup", this._preventEventHandler, {
      capture: true
    });
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
  }
  onExitDOM() {
    if (this._busyTimeoutId) {
      clearTimeout(this._busyTimeoutId);
      delete this._busyTimeoutId;
    }
    this.removeEventListener("keydown", this._keydownHandler, true);
    this.removeEventListener("keyup", this._preventEventHandler, true);
  }
  static onDefine() {
    return __async(this, null, function* () {
      BusyIndicator_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  get ariaTitle() {
    return BusyIndicator_1.i18nBundle.getText(BUSY_INDICATOR_TITLE);
  }
  get labelId() {
    return this.text ? `${this._id}-label` : void 0;
  }
  get classes() {
    return {
      root: {
        "ui5-busy-indicator-root": true
      }
    };
  }
  get textPosition() {
    return {
      top: this.text && this.textPlacement === BusyIndicatorTextPlacement_default.Top,
      bottom: this.text && this.textPlacement === BusyIndicatorTextPlacement_default.Bottom
    };
  }
  onBeforeRendering() {
    if (this.active) {
      if (!this._isBusy && !this._busyTimeoutId) {
        this._busyTimeoutId = setTimeout(() => {
          delete this._busyTimeoutId;
          this._isBusy = true;
        }, Math.max(0, this.delay));
      }
    } else {
      if (this._busyTimeoutId) {
        clearTimeout(this._busyTimeoutId);
        delete this._busyTimeoutId;
      }
      this._isBusy = false;
    }
  }
  _handleKeydown(e) {
    if (!this._isBusy) {
      return;
    }
    e.stopImmediatePropagation();
    if (isTabNext(e)) {
      this.focusForward = true;
      this.shadowRoot.querySelector("[data-ui5-focus-redirect]").focus();
      this.focusForward = false;
    }
  }
  _preventEvent(e) {
    if (this._isBusy) {
      e.stopImmediatePropagation();
    }
  }
  /**
   * Moves the focus to busy area when coming with SHIFT + TAB
   */
  _redirectFocus(e) {
    if (this.focusForward) {
      return;
    }
    e.preventDefault();
    this.shadowRoot.querySelector(".ui5-busy-indicator-busy-area").focus();
  }
};
__decorate([
  property_default()
], BusyIndicator.prototype, "text", void 0);
__decorate([
  property_default()
], BusyIndicator.prototype, "size", void 0);
__decorate([
  property_default({ type: Boolean })
], BusyIndicator.prototype, "active", void 0);
__decorate([
  property_default({ type: Number })
], BusyIndicator.prototype, "delay", void 0);
__decorate([
  property_default()
], BusyIndicator.prototype, "textPlacement", void 0);
__decorate([
  property_default({ type: Boolean })
], BusyIndicator.prototype, "_isBusy", void 0);
BusyIndicator = BusyIndicator_1 = __decorate([
  customElement_default({
    tag: "ui5-busy-indicator",
    languageAware: true,
    styles: BusyIndicator_css_default,
    renderer: LitRenderer_default,
    template: BusyIndicatorTemplate_lit_default,
    dependencies: [Label_default]
  })
], BusyIndicator);
BusyIndicator.define();
var BusyIndicator_default = BusyIndicator;

export {
  BusyIndicator_default
};
//# sourceMappingURL=chunk-3W4QXVOX.js.map
