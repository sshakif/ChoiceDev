import {
  markEvent
} from "./chunk-MJMWB5QN.js";
import {
  getEffectiveAriaLabelText
} from "./chunk-HWWW4G3G.js";
import {
  LINK_EMPHASIZED,
  LINK_SUBTLE
} from "./chunk-U6TJ47RH.js";
import {
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  isEnter,
  isSpace
} from "./chunk-ECUZOJV2.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  LitRenderer_default,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
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

// node_modules/@ui5/webcomponents/dist/types/LinkDesign.js
var LinkDesign;
(function(LinkDesign2) {
  LinkDesign2["Default"] = "Default";
  LinkDesign2["Subtle"] = "Subtle";
  LinkDesign2["Emphasized"] = "Emphasized";
})(LinkDesign || (LinkDesign = {}));
var LinkDesign_default = LinkDesign;

// node_modules/@ui5/webcomponents/dist/generated/templates/LinkTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<a class="ui5-link-root" role="${ifDefined(this.effectiveAccRole)}" href="${ifDefined(this.parsedRef)}" target="${ifDefined(this.target)}" rel="${ifDefined(this._rel)}" tabindex="${ifDefined(this.effectiveTabIndex)}" title="${ifDefined(this.tooltip)}" ?disabled="${this.disabled}" aria-label="${ifDefined(this.ariaLabelText)}" aria-haspopup="${ifDefined(this._hasPopup)}" aria-expanded="${ifDefined(this.accessibilityAttributes.expanded)}" @focusin=${this._onfocusin} @focusout=${this._onfocusout} @click=${this._onclick} @keydown=${this._onkeydown} @keyup=${this._onkeyup}>${this.icon ? block1.call(this, context, tags, suffix) : void 0}<span class="ui5-link-text"><slot></slot></span>${this.hasLinkType ? block2.call(this, context, tags, suffix) : void 0}${this.endIcon ? block3.call(this, context, tags, suffix) : void 0}</a>`;
}
function block1(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-link-icon" name="${ifDefined(this.icon)}" mode="Decorative" part="icon"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-link-icon" name="${ifDefined(this.icon)}" mode="Decorative" part="icon"></ui5-icon>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-hidden-text">${ifDefined(this.linkTypeText)}</span>`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-link-end-icon" name="${ifDefined(this.endIcon)}" mode="Decorative" part="endIcon"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-link-end-icon" name="${ifDefined(this.endIcon)}" mode="Decorative" part="endIcon"></ui5-icon>`;
}
var LinkTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Link.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Link.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:var(--sapLinkColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);cursor:pointer;outline:none;text-decoration:var(--_ui5-v2-0-1_link_text_decoration);text-shadow:var(--sapContent_TextShadow);white-space:normal;overflow-wrap:break-word}:host(:hover){color:var(--sapLink_Hover_Color);text-decoration:var(--_ui5-v2-0-1_link_hover_text_decoration)}:host(:active){color:var(--sapLink_Active_Color);text-decoration:var(--_ui5-v2-0-1_link_active_text_decoration)}:host([disabled]){pointer-events:none}:host([disabled]) .ui5-link-root{text-shadow:none;outline:none;cursor:default;pointer-events:none;opacity:var(--sapContent_DisabledOpacity)}:host([design="Emphasized"]) .ui5-link-root{font-family:var(--sapFontBoldFamily)}:host([design="Subtle"]){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5-v2-0-1_link_subtle_text_decoration)}:host([design="Subtle"]:hover:not(:active)){color:var(--sapLink_SubtleColor);text-decoration:var(--_ui5-v2-0-1_link_subtle_text_decoration_hover)}:host([wrapping-type="None"]){white-space:nowrap;overflow-wrap:normal}.ui5-link-root{max-width:100%;display:inline-block;position:relative;overflow:hidden;text-overflow:ellipsis;outline:none;white-space:inherit;overflow-wrap:inherit;text-decoration:inherit;color:inherit}:host([wrapping-type="None"][end-icon]) .ui5-link-root{display:inline-flex;align-items:end}:host .ui5-link-root{outline-offset:-.0625rem;border-radius:var(--_ui5-v2-0-1_link_focus_border-radius)}.ui5-link-icon,.ui5-link-end-icon{color:inherit;flex-shrink:0}.ui5-link-icon{float:inline-start;margin-inline-end:.125rem}.ui5-link-end-icon{margin-inline-start:.125rem;vertical-align:bottom}.ui5-link-text{overflow:hidden;text-overflow:ellipsis}:host([focused]) .ui5-link-root,:host([design="Subtle"][focused]) .ui5-link-root{background-color:var(--_ui5-v2-0-1_link_focus_background_color);outline:var(--_ui5-v2-0-1_link_outline);border-radius:var(--_ui5-v2-0-1_link_focus_border-radius);text-shadow:none}:host([focused]),:host([design="Subtle"][focused]){color:var(--_ui5-v2-0-1_link_focus_color);text-decoration:var(--_ui5-v2-0-1_link_focus_text_decoration)}:host([focused]:hover:not(:active)){color:var(--_ui5-v2-0-1_link_focused_hover_text_color);text-decoration:var(--_ui5-v2-0-1_link_focused_hover_text_decoration)}
` };
var Link_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Link.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Link_1;
var Link = Link_1 = class Link2 extends UI5Element_default {
  constructor() {
    super();
    this.disabled = false;
    this.design = "Default";
    this.wrappingType = "Normal";
    this.accessibleRole = "Link";
    this.accessibilityAttributes = {};
    this.focused = false;
    this._dummyAnchor = document.createElement("a");
  }
  onBeforeRendering() {
    const needsNoReferrer = this.target !== "_self" && this.href && this._isCrossOrigin(this.href);
    this._rel = needsNoReferrer ? "noreferrer noopener" : void 0;
  }
  _isCrossOrigin(href) {
    const loc = window.location;
    this._dummyAnchor.href = href;
    return !(this._dummyAnchor.hostname === loc.hostname && this._dummyAnchor.port === loc.port && this._dummyAnchor.protocol === loc.protocol);
  }
  get effectiveTabIndex() {
    if (this.forcedTabIndex) {
      return this.forcedTabIndex;
    }
    return this.disabled || !this.textContent?.length ? "-1" : "0";
  }
  get ariaLabelText() {
    return getEffectiveAriaLabelText(this);
  }
  get hasLinkType() {
    return this.design !== LinkDesign_default.Default;
  }
  static typeTextMappings() {
    return {
      "Subtle": LINK_SUBTLE,
      "Emphasized": LINK_EMPHASIZED
    };
  }
  get linkTypeText() {
    return Link_1.i18nBundle.getText(Link_1.typeTextMappings()[this.design]);
  }
  get parsedRef() {
    return this.href && this.href.length > 0 ? this.href : void 0;
  }
  get effectiveAccRole() {
    return this.accessibleRole.toLowerCase();
  }
  get _hasPopup() {
    return this.accessibilityAttributes.hasPopup;
  }
  static onDefine() {
    return __async(this, null, function* () {
      Link_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  _onclick(e) {
    const { altKey, ctrlKey, metaKey, shiftKey } = e;
    e.stopImmediatePropagation();
    markEvent(e, "link");
    const executeEvent = this.fireEvent("click", {
      altKey,
      ctrlKey,
      metaKey,
      shiftKey
    }, true);
    if (!executeEvent) {
      e.preventDefault();
    }
  }
  _onfocusin(e) {
    markEvent(e, "link");
    this.focused = true;
  }
  _onfocusout() {
    this.focused = false;
  }
  _onkeydown(e) {
    if (isEnter(e) && !this.href) {
      this._onclick(e);
    } else if (isSpace(e)) {
      e.preventDefault();
    }
    markEvent(e, "link");
  }
  _onkeyup(e) {
    if (!isSpace(e)) {
      markEvent(e, "link");
      return;
    }
    this._onclick(e);
    if (this.href && !e.defaultPrevented) {
      const customEvent = new MouseEvent("click");
      customEvent.stopImmediatePropagation();
      this.getDomRef().dispatchEvent(customEvent);
    }
  }
};
__decorate([
  property_default({ type: Boolean })
], Link.prototype, "disabled", void 0);
__decorate([
  property_default()
], Link.prototype, "tooltip", void 0);
__decorate([
  property_default()
], Link.prototype, "href", void 0);
__decorate([
  property_default()
], Link.prototype, "target", void 0);
__decorate([
  property_default()
], Link.prototype, "design", void 0);
__decorate([
  property_default()
], Link.prototype, "wrappingType", void 0);
__decorate([
  property_default()
], Link.prototype, "accessibleName", void 0);
__decorate([
  property_default()
], Link.prototype, "accessibleNameRef", void 0);
__decorate([
  property_default()
], Link.prototype, "accessibleRole", void 0);
__decorate([
  property_default({ type: Object })
], Link.prototype, "accessibilityAttributes", void 0);
__decorate([
  property_default()
], Link.prototype, "icon", void 0);
__decorate([
  property_default()
], Link.prototype, "endIcon", void 0);
__decorate([
  property_default({ noAttribute: true })
], Link.prototype, "_rel", void 0);
__decorate([
  property_default({ noAttribute: true })
], Link.prototype, "forcedTabIndex", void 0);
__decorate([
  property_default({ type: Boolean })
], Link.prototype, "focused", void 0);
Link = Link_1 = __decorate([
  customElement_default({
    tag: "ui5-link",
    languageAware: true,
    renderer: LitRenderer_default,
    template: LinkTemplate_lit_default,
    styles: Link_css_default,
    dependencies: [Icon_default]
  }),
  event_default("click", {
    detail: {
      /**
       * @public
       */
      altKey: { type: Boolean },
      /**
       * @public
       */
      ctrlKey: { type: Boolean },
      /**
       * @public
       */
      metaKey: { type: Boolean },
      /**
       * @public
       */
      shiftKey: { type: Boolean }
    }
  })
], Link);
Link.define();
var Link_default = Link;

export {
  LinkDesign_default,
  Link_default
};
//# sourceMappingURL=chunk-JGKP4HKE.js.map
