import {
  registerToolbarItem
} from "./chunk-RQMM3LCQ.js";
import {
  Button_default
} from "./chunk-THWQMO7Z.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  scopeTag,
  styleMap
} from "./chunk-DMMFI3C7.js";
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

// node_modules/@ui5/webcomponents/dist/ToolbarItem.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ToolbarItem = class extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.overflowPriority = "Default";
    this.preventOverflowClosing = false;
  }
  /**
  * Defines if the width of the item should be ignored in calculating the whole width of the toolbar
  * @protected
  */
  get ignoreSpace() {
    return false;
  }
  /**
   * Returns if the item contains text. Used to position the text properly inside the popover.
   * Aligned left if the item has text, default aligned otherwise.
   * @protected
   */
  get containsText() {
    return false;
  }
  /**
   * Returns if the item is flexible. An item that is returning true for this property will make
   * the toolbar expand to fill the 100% width of its container.
   * @protected
   */
  get hasFlexibleWidth() {
    return false;
  }
  /**
   * Returns if the item is interactive.
   * This value is used to determinate if the toolbar should have its accessibility role and attributes set.
   * At least two interactive items are needed for the toolbar to have the role="toolbar" attribute set.
   * @protected
   */
  get isInteractive() {
    return true;
  }
  /**
   * Returns if the item is separator.
   * @protected
   */
  get isSeparator() {
    return false;
  }
  /**
   * Returns the template for the toolbar item.
   * @protected
   */
  static get toolbarTemplate() {
    throw new Error("Template must be defined");
  }
  /**
   * Returns the template for the toolbar item popover.
   * @protected
   */
  static get toolbarPopoverTemplate() {
    throw new Error("Popover template must be defined");
  }
  /**
   * Returns the events that the item is subscribed to.
   * @protected
   */
  get subscribedEvents() {
    return /* @__PURE__ */ new Map();
  }
  get stableDomRef() {
    return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
  }
};
__decorate([
  property_default()
], ToolbarItem.prototype, "overflowPriority", void 0);
__decorate([
  property_default({ type: Boolean })
], ToolbarItem.prototype, "preventOverflowClosing", void 0);
var ToolbarItem_default = ToolbarItem;

// node_modules/@ui5/webcomponents/dist/generated/templates/ToolbarButtonTemplate.lit.js
function block0(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} class="ui5-tb-button ui5-tb-item" id="${ifDefined(this.id)}" style="${styleMap(this.styles)}" icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}" tooltip="${ifDefined(this.tooltip)}" accessible-name="${ifDefined(this.accessibleName)}" accessible-name-ref="${ifDefined(this.accessibleNameRef)}" .accessibilityAttributes="${ifDefined(this.accessibilityAttributes)}" design="${ifDefined(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" data-ui5-external-action-item-id="${ifDefined(this._id)}" data-ui5-stable="${ifDefined(this.stableDomRef)}" .refItemId="${ifDefined(this._id)}">${ifDefined(this.text)}</${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button class="ui5-tb-button ui5-tb-item" id="${ifDefined(this.id)}" style="${styleMap(this.styles)}" icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}" tooltip="${ifDefined(this.tooltip)}" accessible-name="${ifDefined(this.accessibleName)}" accessible-name-ref="${ifDefined(this.accessibleNameRef)}" .accessibilityAttributes="${ifDefined(this.accessibilityAttributes)}" design="${ifDefined(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" data-ui5-external-action-item-id="${ifDefined(this._id)}" data-ui5-stable="${ifDefined(this.stableDomRef)}" .refItemId="${ifDefined(this._id)}">${ifDefined(this.text)}</ui5-button>`;
}
var ToolbarButtonTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/templates/ToolbarPopoverButtonTemplate.lit.js
function block02(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}" accessible-name="${ifDefined(this.accessibleName)}" accessible-name-ref="${ifDefined(this.accessibleNameRef)}" .accessibilityAttributes="${ifDefined(this.accessibilityAttributes)}" tooltip="${ifDefined(this.tooltip)}" design="${ifDefined(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" class="ui5-tb-popover-button ui5-tb-popover-item" data-ui5-external-action-item-id="${ifDefined(this._id)}" data-ui5-stable="${ifDefined(this.stableDomRef)}">${ifDefined(this.text)}</${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}" accessible-name="${ifDefined(this.accessibleName)}" accessible-name-ref="${ifDefined(this.accessibleNameRef)}" .accessibilityAttributes="${ifDefined(this.accessibilityAttributes)}" tooltip="${ifDefined(this.tooltip)}" design="${ifDefined(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" class="ui5-tb-popover-button ui5-tb-popover-item" data-ui5-external-action-item-id="${ifDefined(this._id)}" data-ui5-stable="${ifDefined(this.stableDomRef)}">${ifDefined(this.text)}</ui5-button>`;
}
var ToolbarPopoverButtonTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/generated/themes/ToolbarButtonPopover.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/ToolbarButtonPopover.css.ts", content: `:not([icon-only]).ui5-tb-popover-button::part(button){justify-content:start}
` };
var ToolbarButtonPopover_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/ToolbarButton.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ToolbarButton = class ToolbarButton2 extends ToolbarItem_default {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.design = "Default";
    this.accessibilityAttributes = {};
  }
  get styles() {
    return {
      width: this.width,
      display: this.hidden ? "none" : "inline-block"
    };
  }
  get containsText() {
    return true;
  }
  static get toolbarTemplate() {
    return ToolbarButtonTemplate_lit_default;
  }
  static get toolbarPopoverTemplate() {
    return ToolbarPopoverButtonTemplate_lit_default;
  }
  get subscribedEvents() {
    const map = /* @__PURE__ */ new Map();
    map.set("click", { preventClosing: false });
    return map;
  }
};
__decorate2([
  property_default({ type: Boolean })
], ToolbarButton.prototype, "disabled", void 0);
__decorate2([
  property_default()
], ToolbarButton.prototype, "design", void 0);
__decorate2([
  property_default()
], ToolbarButton.prototype, "icon", void 0);
__decorate2([
  property_default()
], ToolbarButton.prototype, "endIcon", void 0);
__decorate2([
  property_default()
], ToolbarButton.prototype, "tooltip", void 0);
__decorate2([
  property_default()
], ToolbarButton.prototype, "accessibleName", void 0);
__decorate2([
  property_default()
], ToolbarButton.prototype, "accessibleNameRef", void 0);
__decorate2([
  property_default({ type: Object })
], ToolbarButton.prototype, "accessibilityAttributes", void 0);
__decorate2([
  property_default()
], ToolbarButton.prototype, "text", void 0);
__decorate2([
  property_default()
], ToolbarButton.prototype, "width", void 0);
ToolbarButton = __decorate2([
  customElement_default({
    tag: "ui5-toolbar-button",
    dependencies: [Button_default],
    styles: ToolbarButtonPopover_css_default
  }),
  event_default("click")
], ToolbarButton);
registerToolbarItem(ToolbarButton);
ToolbarButton.define();

export {
  ToolbarItem_default
};
//# sourceMappingURL=chunk-NWCGTTJG.js.map
