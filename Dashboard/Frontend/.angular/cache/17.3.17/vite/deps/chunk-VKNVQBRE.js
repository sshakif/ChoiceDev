import {
  getRegisteredDependencies,
  getRegisteredStyles,
  getRegisteredToolbarItem
} from "./chunk-RQMM3LCQ.js";
import {
  AriaHasPopup_default
} from "./chunk-7AZT6HQV.js";
import {
  Popover_default
} from "./chunk-63IT5AAH.js";
import {
  Button_default
} from "./chunk-THWQMO7Z.js";
import {
  ResizeHandler_default
} from "./chunk-3NVTNN76.js";
import {
  getEffectiveAriaLabelText
} from "./chunk-HWWW4G3G.js";
import {
  TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL
} from "./chunk-U6TJ47RH.js";
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
  parameters_bundle_css_default,
  repeat,
  scopeTag
} from "./chunk-DMMFI3C7.js";
import {
  getI18nBundle
} from "./chunk-22ISB74T.js";
import {
  UI5Element_default,
  customElement_default,
  executeTemplate_default,
  getScopedVarName,
  property_default
} from "./chunk-V2NLQCH3.js";
import {
  renderFinished
} from "./chunk-FE3LTLOF.js";
import {
  init_Themes,
  registerThemePropertiesLoader
} from "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents/dist/generated/templates/ToolbarTemplate.lit.js
function block0(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="${classMap(this.classes.items)}" role="${ifDefined(this.accInfo.root.role)}" aria-label="${ifDefined(this.accInfo.root.accessibleName)}">${repeat(this.standardItems, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}<${scopeTag("ui5-button", tags, suffix)} aria-hidden="${ifDefined(this.hideOverflowButton)}" icon="overflow" design="Transparent" class="${classMap(this.classes.overflowButton)}" tooltip="${ifDefined(this.accInfo.overflowButton.tooltip)}" accessible-name="${ifDefined(this.accInfo.overflowButton.accessibleName)}" .accessibilityAttributes=${ifDefined(this.accInfo.overflowButton.accessibilityAttributes)}></${scopeTag("ui5-button", tags, suffix)}></div><${scopeTag("ui5-popover", tags, suffix)} class="ui5-overflow-popover" placement="Bottom" horizontal-align="End" @ui5-close="${ifDefined(this.onOverflowPopoverClosed)}" @ui5-open="${ifDefined(this.onOverflowPopoverOpened)}" hide-arrow><div class="ui5-overflow-list ${classMap(this.classes.overflow)}">${repeat(this.overflowItems, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</div></${scopeTag("ui5-popover", tags, suffix)}>` : effectiveHtml`<div class="${classMap(this.classes.items)}" role="${ifDefined(this.accInfo.root.role)}" aria-label="${ifDefined(this.accInfo.root.accessibleName)}">${repeat(this.standardItems, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}<ui5-button aria-hidden="${ifDefined(this.hideOverflowButton)}" icon="overflow" design="Transparent" class="${classMap(this.classes.overflowButton)}" tooltip="${ifDefined(this.accInfo.overflowButton.tooltip)}" accessible-name="${ifDefined(this.accInfo.overflowButton.accessibleName)}" .accessibilityAttributes=${ifDefined(this.accInfo.overflowButton.accessibilityAttributes)}></ui5-button></div><ui5-popover class="ui5-overflow-popover" placement="Bottom" horizontal-align="End" @ui5-close="${ifDefined(this.onOverflowPopoverClosed)}" @ui5-open="${ifDefined(this.onOverflowPopoverOpened)}" hide-arrow><div class="ui5-overflow-list ${classMap(this.classes.overflow)}">${repeat(this.overflowItems, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</div></ui5-popover>`;
}
function block1(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item.toolbarTemplate)}`;
}
function block2(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item.toolbarPopoverTemplate)}`;
}
var ToolbarTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Toolbar.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Toolbar.css.ts", content: `:host(:not([hidden])){width:100%;height:var(--_ui5-v2-0-1-toolbar-height);display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;border-bottom:.0625rem solid var(--sapGroup_ContentBorderColor);padding:0 var(--_ui5-v2-0-1-toolbar-padding-left) 0 var(--_ui5-v2-0-1-toolbar-padding-right);background-color:var(--sapList_HeaderBackground)}:host([align-content="Start"]){justify-content:flex-start}.ui5-tb-items{width:100%;height:100%;display:inherit;align-items:inherit;justify-content:inherit}.ui5-tb-items-full-width{width:100%}.ui5-tb-item{flex-shrink:0}.ui5-tb-item:not(:last-child){margin-inline-end:var(--_ui5-v2-0-1-toolbar-item-margin-right);margin-inline-start:var(--_ui5-v2-0-1-toolbar-item-margin-left)}.ui5-tb-separator{height:var(--_ui5-v2-0-1-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-overflow-btn-hidden{visibility:hidden;position:absolute}:host([design="Transparent"]){background-color:transparent}
` };
var Toolbar_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/generated/themes/ToolbarPopover.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = { packageName: "@ui5/webcomponents", fileName: "themes/ToolbarPopover.css.ts", content: `.ui5-overflow-popover::part(content){padding:var(--_ui5-v2-0-1_toolbar_overflow_padding)}.ui5-overflow-list{display:flex;flex-direction:column;justify-content:center;align-items:center}.ui5-tb-popover-item{width:100%}.ui5-tb-popover-item:not(:last-child){margin-bottom:.25rem}.ui5-tb-separator-in-overflow{display:none;height:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-separator-in-overflow[visible]{display:block}
` };
var ToolbarPopover_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js
var ToolbarItemOverflowBehavior;
(function(ToolbarItemOverflowBehavior2) {
  ToolbarItemOverflowBehavior2["Default"] = "Default";
  ToolbarItemOverflowBehavior2["NeverOverflow"] = "NeverOverflow";
  ToolbarItemOverflowBehavior2["AlwaysOverflow"] = "AlwaysOverflow";
})(ToolbarItemOverflowBehavior || (ToolbarItemOverflowBehavior = {}));
var ToolbarItemOverflowBehavior_default = ToolbarItemOverflowBehavior;

// node_modules/@ui5/webcomponents/dist/Toolbar.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Toolbar_1;
function calculateCSSREMValue(styleSet, propertyName) {
  return Number(styleSet.getPropertyValue(propertyName).replace("rem", "")) * parseInt(getComputedStyle(document.body).getPropertyValue("font-size"));
}
function parsePxValue(styleSet, propertyName) {
  return Number(styleSet.getPropertyValue(propertyName).replace("px", ""));
}
var Toolbar = Toolbar_1 = class Toolbar2 extends UI5Element_default {
  static get styles() {
    const styles = getRegisteredStyles();
    return [
      Toolbar_css_default,
      ToolbarPopover_css_default,
      ...styles
    ];
  }
  static get dependencies() {
    const deps = getRegisteredDependencies();
    return [
      Popover_default,
      Button_default,
      ...deps
    ];
  }
  static onDefine() {
    return __async(this, null, function* () {
      Toolbar_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  constructor() {
    super();
    this.alignContent = "End";
    this.reverseOverflow = false;
    this.design = "Solid";
    this.itemsToOverflow = [];
    this.itemsWidth = 0;
    this.minContentWidth = 0;
    this.popoverOpen = false;
    this.itemsWidthMeasured = false;
    this.ITEMS_WIDTH_MAP = /* @__PURE__ */ new Map();
    this._onResize = this.onResize.bind(this);
    this._onInteract = (e) => this.onInteract(e);
  }
  /**
   * Read-only members
   */
  get overflowButtonSize() {
    return this.overflowButtonDOM?.getBoundingClientRect().width || 0;
  }
  get padding() {
    const toolbarComputedStyle = getComputedStyle(this.getDomRef());
    return calculateCSSREMValue(toolbarComputedStyle, getScopedVarName("--_ui5-toolbar-padding-left")) + calculateCSSREMValue(toolbarComputedStyle, getScopedVarName("--_ui5-toolbar-padding-right"));
  }
  get subscribedEvents() {
    return this.items.map((item) => Array.from(item.subscribedEvents.keys())).flat().filter((value, index, self) => self.indexOf(value) === index);
  }
  get alwaysOverflowItems() {
    return this.items.filter((item) => item.overflowPriority === ToolbarItemOverflowBehavior_default.AlwaysOverflow);
  }
  get movableItems() {
    return this.items.filter((item) => item.overflowPriority !== ToolbarItemOverflowBehavior_default.AlwaysOverflow && item.overflowPriority !== ToolbarItemOverflowBehavior_default.NeverOverflow);
  }
  get overflowItems() {
    const overflowItems = this.getItemsInfo(this.itemsToOverflow.filter((item) => !item.ignoreSpace));
    return this.reverseOverflow ? overflowItems.reverse() : overflowItems;
  }
  get standardItems() {
    return this.getItemsInfo(this.items.filter((item) => this.itemsToOverflow.indexOf(item) === -1));
  }
  get hideOverflowButton() {
    return this.itemsToOverflow.filter((item) => !(item.ignoreSpace || item.isSeparator)).length === 0;
  }
  get classes() {
    return {
      items: {
        "ui5-tb-items": true,
        "ui5-tb-items-full-width": this.hasFlexibleSpacers
      },
      overflow: {
        "ui5-overflow-list--alignleft": this.hasItemWithText
      },
      overflowButton: {
        "ui5-tb-item": true,
        "ui5-tb-overflow-btn": true,
        "ui5-tb-overflow-btn-hidden": this.hideOverflowButton
      }
    };
  }
  get interactiveItemsCount() {
    return this.items.filter((item) => item.isInteractive).length;
  }
  /**
   * Accessibility
   */
  get hasAriaSemantics() {
    return this.interactiveItemsCount > 1;
  }
  get accessibleRole() {
    return this.hasAriaSemantics ? "toolbar" : void 0;
  }
  get ariaLabelText() {
    return this.hasAriaSemantics ? getEffectiveAriaLabelText(this) : void 0;
  }
  get accInfo() {
    return {
      root: {
        role: this.accessibleRole,
        accessibleName: this.ariaLabelText
      },
      overflowButton: {
        accessibleName: Toolbar_1.i18nBundle.getText(TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL),
        tooltip: Toolbar_1.i18nBundle.getText(TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL),
        accessibilityAttributes: {
          expanded: this.overflowButtonDOM?.accessibilityAttributes.expanded,
          hasPopup: AriaHasPopup_default.Menu.toLowerCase()
        }
      }
    };
  }
  /**
   * Toolbar Overflow Popover
   */
  get overflowButtonDOM() {
    return this.shadowRoot.querySelector(".ui5-tb-overflow-btn");
  }
  get itemsDOM() {
    return this.shadowRoot.querySelector(".ui5-tb-items");
  }
  get hasItemWithText() {
    return this.itemsToOverflow.some((item) => item.containsText);
  }
  get hasFlexibleSpacers() {
    return this.items.some((item) => item.hasFlexibleWidth);
  }
  /**
   * Lifecycle methods
   */
  onEnterDOM() {
    ResizeHandler_default.register(this, this._onResize);
  }
  onExitDOM() {
    ResizeHandler_default.deregister(this, this._onResize);
  }
  onInvalidation(changeInfo) {
    if (changeInfo.reason === "childchange" && changeInfo.child === this.itemsToOverflow[0]) {
      this.onToolbarItemChange();
    }
  }
  onBeforeRendering() {
    this.detachListeners();
    this.attachListeners();
  }
  onAfterRendering() {
    return __async(this, null, function* () {
      yield renderFinished();
      this.storeItemsWidth();
      this.processOverflowLayout();
    });
  }
  /**
   * Returns if the overflow popup is open.
   * @public
   */
  isOverflowOpen() {
    const overflowPopover = this.getOverflowPopover();
    return overflowPopover.open;
  }
  openOverflow() {
    const overflowPopover = this.getOverflowPopover();
    overflowPopover.opener = this.overflowButtonDOM;
    overflowPopover.open = true;
    this.reverseOverflow = overflowPopover.actualPlacement === "Top";
  }
  closeOverflow() {
    const overflowPopover = this.getOverflowPopover();
    overflowPopover.open = false;
  }
  toggleOverflow() {
    if (this.popoverOpen) {
      this.closeOverflow();
    } else {
      this.openOverflow();
    }
  }
  getOverflowPopover() {
    return this.shadowRoot.querySelector(".ui5-overflow-popover");
  }
  /**
   * Layout management
   */
  processOverflowLayout() {
    const containerWidth = this.offsetWidth - this.padding;
    const contentWidth = this.itemsWidth;
    const overflowSpace = contentWidth - containerWidth + this.overflowButtonSize;
    if (this.width === containerWidth && this.contentWidth === contentWidth) {
      return;
    }
    this.distributeItems(overflowSpace);
    this.width = containerWidth;
    this.contentWidth = contentWidth;
  }
  storeItemsWidth() {
    let totalWidth = 0, minWidth = 0;
    this.items.forEach((item) => {
      const itemWidth = this.getItemWidth(item);
      totalWidth += itemWidth;
      if (item.overflowPriority === ToolbarItemOverflowBehavior_default.NeverOverflow) {
        minWidth += itemWidth;
      }
      this.ITEMS_WIDTH_MAP.set(item._id, itemWidth);
    });
    if (minWidth !== this.minContentWidth) {
      const spaceAroundContent = this.offsetWidth - this.getDomRef().offsetWidth;
      this.fireEvent("_min-content-width-change", {
        minWidth: minWidth + spaceAroundContent + this.overflowButtonSize
      });
    }
    this.itemsWidth = totalWidth;
    this.minContentWidth = minWidth;
  }
  distributeItems(overflowSpace = 0) {
    const movableItems = this.movableItems.reverse();
    let index = 0;
    let currentItem = movableItems[index];
    this.itemsToOverflow = [];
    this.distributeItemsThatAlwaysOverflow();
    while (overflowSpace > 0 && currentItem) {
      this.itemsToOverflow.unshift(currentItem);
      overflowSpace -= this.getCachedItemWidth(currentItem?._id) || 0;
      index++;
      currentItem = movableItems[index];
    }
    if (index < movableItems.length) {
      let lastItem = movableItems[index];
      while (index <= movableItems.length - 1 && lastItem.isSeparator) {
        this.itemsToOverflow.unshift(lastItem);
        index++;
        lastItem = movableItems[index];
      }
    }
    this.setSeperatorsVisibilityInOverflow();
  }
  distributeItemsThatAlwaysOverflow() {
    this.alwaysOverflowItems.forEach((item) => {
      this.itemsToOverflow.push(item);
    });
  }
  setSeperatorsVisibilityInOverflow() {
    this.itemsToOverflow.forEach((item, idx, items) => {
      if (item.isSeparator) {
        item.visible = this.shouldShowSeparatorInOverflow(idx, items);
      }
    });
  }
  shouldShowSeparatorInOverflow(separatorIdx, overflowItems) {
    let foundPrevNonSeparatorItem = false;
    let foundNextNonSeperatorItem = false;
    overflowItems.forEach((item, idx) => {
      if (idx < separatorIdx && !item.isSeparator) {
        foundPrevNonSeparatorItem = true;
      }
      if (idx > separatorIdx && !item.isSeparator) {
        foundNextNonSeperatorItem = true;
      }
    });
    return foundPrevNonSeparatorItem && foundNextNonSeperatorItem;
  }
  /**
   * Event Handlers
   */
  onOverflowPopoverClosed() {
    this.popoverOpen = false;
    if (this.overflowButtonDOM) {
      this.overflowButtonDOM.accessibilityAttributes.expanded = false;
    }
  }
  onOverflowPopoverOpened() {
    this.popoverOpen = true;
    if (this.overflowButtonDOM) {
      this.overflowButtonDOM.accessibilityAttributes.expanded = true;
    }
  }
  onResize() {
    if (!this.itemsWidth) {
      return;
    }
    this.closeOverflow();
    this.processOverflowLayout();
  }
  onInteract(e) {
    const target = e.target;
    const item = target.closest(".ui5-tb-item") || target.closest(".ui5-tb-popover-item");
    if (target === this.overflowButtonDOM) {
      this.toggleOverflow();
      return;
    }
    if (!item) {
      return;
    }
    const refItemId = target.getAttribute("data-ui5-external-action-item-id");
    if (refItemId) {
      const abstractItem = this.getItemByID(refItemId);
      const eventType = e.type;
      const eventTypeNonPrefixed = e.type.replace("ui5-", "");
      const prevented = !abstractItem?.fireEvent(eventTypeNonPrefixed, e.detail, true);
      const eventOptions = abstractItem?.subscribedEvents.get(eventType) || abstractItem?.subscribedEvents.get(eventTypeNonPrefixed);
      if (prevented || abstractItem?.preventOverflowClosing || eventOptions?.preventClosing) {
        return;
      }
      this.closeOverflow();
    }
  }
  /**
   * Private members
   */
  attachListeners() {
    const popover = this.getOverflowPopover();
    this.subscribedEvents.forEach((e) => {
      this.itemsDOM?.addEventListener(e, this._onInteract);
      popover?.addEventListener(e, this._onInteract);
    });
  }
  detachListeners() {
    const popover = this.getOverflowPopover();
    this.subscribedEvents.forEach((e) => {
      this.itemsDOM?.removeEventListener(e, this._onInteract);
      popover?.removeEventListener(e, this._onInteract);
    });
  }
  onToolbarItemChange() {
    this.itemsToOverflow = [];
    this.contentWidth = 0;
  }
  getItemsInfo(items) {
    return items.map((item) => {
      const ElementClass = getRegisteredToolbarItem(item.constructor.name);
      if (!ElementClass) {
        return null;
      }
      const toolbarItem = {
        toolbarTemplate: executeTemplate_default(ElementClass.toolbarTemplate, item),
        toolbarPopoverTemplate: executeTemplate_default(ElementClass.toolbarPopoverTemplate, item)
      };
      return toolbarItem;
    });
  }
  getItemWidth(item) {
    if (item.ignoreSpace || item.isSeparator) {
      return 0;
    }
    const id = item._id;
    const renderedItem = this.getRegisteredToolbarItemByID(id);
    let itemWidth = 0;
    if (renderedItem) {
      const ItemCSSStyleSet = getComputedStyle(renderedItem);
      itemWidth = renderedItem.offsetWidth + parsePxValue(ItemCSSStyleSet, "margin-inline-end") + parsePxValue(ItemCSSStyleSet, "margin-inline-start");
    } else {
      itemWidth = this.getCachedItemWidth(id) || 0;
    }
    return Math.ceil(itemWidth);
  }
  getCachedItemWidth(id) {
    return this.ITEMS_WIDTH_MAP.get(id);
  }
  getItemByID(id) {
    return this.items.find((item) => item._id === id);
  }
  getRegisteredToolbarItemByID(id) {
    return this.itemsDOM.querySelector(`[data-ui5-external-action-item-id="${id}"]`);
  }
};
__decorate([
  property_default()
], Toolbar.prototype, "alignContent", void 0);
__decorate([
  property_default({ type: Number })
], Toolbar.prototype, "width", void 0);
__decorate([
  property_default({ type: Number })
], Toolbar.prototype, "contentWidth", void 0);
__decorate([
  property_default({ type: Boolean })
], Toolbar.prototype, "reverseOverflow", void 0);
__decorate([
  property_default()
], Toolbar.prototype, "accessibleName", void 0);
__decorate([
  property_default()
], Toolbar.prototype, "accessibleNameRef", void 0);
__decorate([
  property_default()
], Toolbar.prototype, "design", void 0);
__decorate([
  slot_default({ "default": true, type: HTMLElement, invalidateOnChildChange: true })
], Toolbar.prototype, "items", void 0);
Toolbar = Toolbar_1 = __decorate([
  customElement_default({
    tag: "ui5-toolbar",
    languageAware: true,
    renderer: LitRenderer_default,
    template: ToolbarTemplate_lit_default
  })
], Toolbar);
Toolbar.define();

export {
  ToolbarItemOverflowBehavior_default
};
//# sourceMappingURL=chunk-VKNVQBRE.js.map
