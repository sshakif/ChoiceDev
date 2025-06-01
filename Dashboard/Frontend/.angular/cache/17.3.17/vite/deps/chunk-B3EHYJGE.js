import {
  getActiveElement_default,
  isElementHidden_default
} from "./chunk-V3KTO444.js";
import {
  ResizeHandler_default
} from "./chunk-3NVTNN76.js";
import {
  getEffectiveAriaLabelText
} from "./chunk-HWWW4G3G.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  isChrome,
  isDesktop,
  isEnter,
  isEscape,
  isPhone,
  isTabPrevious
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
  styleMap
} from "./chunk-DMMFI3C7.js";
import {
  event_default
} from "./chunk-XYCO3572.js";
import {
  UI5Element_default,
  customElement_default,
  instanceOfUI5Element,
  property_default
} from "./chunk-V2NLQCH3.js";
import {
  renderFinished
} from "./chunk-FE3LTLOF.js";
import {
  createStyle,
  getSharedResource_default,
  hasStyle,
  init_ManagedStyles,
  init_Themes,
  init_getSharedResource,
  registerThemePropertiesLoader
} from "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents/dist/generated/themes/BrowserScrollbar.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/BrowserScrollbar.css.ts", content: `:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar:horizontal{height:var(--sapScrollBar_Dimension)}:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar:vertical{width:var(--sapScrollBar_Dimension)}:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor);border-left:var(--browser_scrollbar_border)}:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar-thumb{border-radius:var(--browser_scrollbar_border_radius);background-color:var(--sapScrollBar_FaceColor)}:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar-thumb:hover{background-color:var(--sapScrollBar_Hover_FaceColor)}:not(.ui5-content-native-scrollbars) ::-webkit-scrollbar-corner{background-color:var(--sapScrollBar_TrackColor)}
` };
var BrowserScrollbar_css_default = styleData;

// node_modules/@ui5/webcomponents-base/dist/util/clamp.js
var clamp = (val, min, max) => {
  return Math.min(Math.max(val, min), Math.max(min, max));
};
var clamp_default = clamp;

// node_modules/@ui5/webcomponents/dist/types/PopupAccessibleRole.js
var PopupAccessibleRole;
(function(PopupAccessibleRole2) {
  PopupAccessibleRole2["None"] = "None";
  PopupAccessibleRole2["Dialog"] = "Dialog";
  PopupAccessibleRole2["AlertDialog"] = "AlertDialog";
})(PopupAccessibleRole || (PopupAccessibleRole = {}));
var PopupAccessibleRole_default = PopupAccessibleRole;

// node_modules/@ui5/webcomponents-base/dist/util/isElementClickable.js
var rClickable = /^(?:a|area)$/i;
var rFocusable = /^(?:input|select|textarea|button)$/i;
var isElementClickable = (el) => {
  if (el.disabled) {
    return false;
  }
  const tabIndex = el.getAttribute("tabindex");
  if (tabIndex !== null && tabIndex !== void 0) {
    return parseInt(tabIndex) >= 0;
  }
  return rFocusable.test(el.nodeName) || rClickable.test(el.nodeName) && !!el.href;
};
var isElementClickable_default = isElementClickable;

// node_modules/@ui5/webcomponents-base/dist/util/FocusableElements.js
var isFocusTrap = (el) => {
  return el.hasAttribute("data-ui5-focus-trap");
};
var getFirstFocusableElement = (container, startFromContainer) => __async(void 0, null, function* () {
  if (!container || isElementHidden_default(container)) {
    return null;
  }
  return findFocusableElement(container, true, startFromContainer);
});
var getLastFocusableElement = (container, startFromContainer) => __async(void 0, null, function* () {
  if (!container || isElementHidden_default(container)) {
    return null;
  }
  return findFocusableElement(container, false, startFromContainer);
});
var isElemFocusable = (el) => {
  return el.hasAttribute("data-ui5-focus-redirect") || !isElementHidden_default(el);
};
var findFocusableElement = (container, forward, startFromContainer) => __async(void 0, null, function* () {
  let child;
  let assignedElements;
  let currentIndex = -1;
  if (container.shadowRoot) {
    child = forward ? container.shadowRoot.firstChild : container.shadowRoot.lastChild;
  } else if (container instanceof HTMLSlotElement && container.assignedNodes()) {
    assignedElements = container.assignedNodes();
    currentIndex = forward ? 0 : assignedElements.length - 1;
    child = assignedElements[currentIndex];
  } else if (startFromContainer) {
    child = container;
  } else {
    child = forward ? container.firstElementChild : container.lastElementChild;
  }
  let focusableDescendant;
  while (child) {
    const originalChild = child;
    if (instanceOfUI5Element(child)) {
      child = yield child.getFocusDomRefAsync();
    }
    if (!child) {
      return null;
    }
    if (child.nodeType === 1 && isElemFocusable(child) && !isFocusTrap(child)) {
      if (isElementClickable_default(child)) {
        return child && typeof child.focus === "function" ? child : null;
      }
      focusableDescendant = yield findFocusableElement(child, forward);
      if (focusableDescendant) {
        return focusableDescendant && typeof focusableDescendant.focus === "function" ? focusableDescendant : null;
      }
    }
    child = forward ? originalChild.nextSibling : originalChild.previousSibling;
    if (assignedElements && !assignedElements[currentIndex].contains(child)) {
      currentIndex = forward ? currentIndex + 1 : currentIndex - 1;
      child = assignedElements[currentIndex];
    }
  }
  return null;
});

// node_modules/@ui5/webcomponents-base/dist/util/getEffectiveScrollbarStyle.js
var NO_SCROLLBAR_STYLE_CLASS = "ui5-content-native-scrollbars";
var getEffectiveScrollbarStyle = () => document.body.classList.contains(NO_SCROLLBAR_STYLE_CLASS);
var getEffectiveScrollbarStyle_default = getEffectiveScrollbarStyle;

// node_modules/@ui5/webcomponents/dist/Popup.js
init_ManagedStyles();

// node_modules/@ui5/webcomponents-base/dist/util/PopupUtils.js
var getFocusedElement = () => {
  const element = getActiveElement_default();
  return element && typeof element.focus === "function" ? element : null;
};
var isFocusedElementWithinNode = (node) => {
  const fe = getFocusedElement();
  if (fe) {
    return isNodeContainedWithin(node, fe);
  }
  return false;
};
var isNodeContainedWithin = (parent, child) => {
  let currentNode = parent;
  if (currentNode.shadowRoot) {
    const children = Array.from(currentNode.shadowRoot.children);
    currentNode = children.find((n) => n.localName !== "style");
    if (!currentNode) {
      return false;
    }
  }
  if (currentNode === child) {
    return true;
  }
  const childNodes = currentNode.localName === "slot" ? currentNode.assignedNodes() : currentNode.children;
  if (childNodes) {
    return Array.from(childNodes).some((n) => isNodeContainedWithin(n, child));
  }
  return false;
};
var isPointInRect = (x, y, rect) => {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
};
var isClickInRect = (e, rect) => {
  let x;
  let y;
  if (e instanceof MouseEvent) {
    x = e.clientX;
    y = e.clientY;
  } else {
    const touch = e.touches[0];
    x = touch.clientX;
    y = touch.clientY;
  }
  return isPointInRect(x, y, rect);
};
function instanceOfPopup(object) {
  return "isUI5Element" in object && "_show" in object;
}
var getClosedPopupParent = (el) => {
  const parent = el.parentElement || el.getRootNode && el.getRootNode().host;
  if (parent && (instanceOfPopup(parent) || parent === document.documentElement)) {
    return parent;
  }
  return getClosedPopupParent(parent);
};

// node_modules/@ui5/webcomponents-base/dist/MediaRange.js
var mediaRanges = /* @__PURE__ */ new Map();
var DEAFULT_RANGE_SET = /* @__PURE__ */ new Map();
DEAFULT_RANGE_SET.set("S", [0, 599]);
DEAFULT_RANGE_SET.set("M", [600, 1023]);
DEAFULT_RANGE_SET.set("L", [1024, 1439]);
DEAFULT_RANGE_SET.set("XL", [1440, Infinity]);
var RANGESETS;
(function(RANGESETS2) {
  RANGESETS2["RANGE_4STEPS"] = "4Step";
})(RANGESETS || (RANGESETS = {}));
var initRangeSet = (name, range) => {
  mediaRanges.set(name, range);
};
var getCurrentRange = (name, width = window.innerWidth) => {
  let rangeSet = mediaRanges.get(name);
  if (!rangeSet) {
    rangeSet = mediaRanges.get(RANGESETS.RANGE_4STEPS);
  }
  let currentRangeName;
  const effectiveWidth = Math.floor(width);
  rangeSet.forEach((value, key) => {
    if (effectiveWidth >= value[0] && effectiveWidth <= value[1]) {
      currentRangeName = key;
    }
  });
  return currentRangeName || [...rangeSet.keys()][0];
};
var MediaRange = {
  RANGESETS,
  initRangeSet,
  getCurrentRange
};
MediaRange.initRangeSet(MediaRange.RANGESETS.RANGE_4STEPS, DEAFULT_RANGE_SET);
var MediaRange_default = MediaRange;

// node_modules/@ui5/webcomponents/dist/generated/templates/PopupTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" tabindex="-1" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div><span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`;
}
var PopupTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/popup-utils/OpenedPopupsRegistry.js
init_getSharedResource();
var OpenedPopupsRegistry = getSharedResource_default("OpenedPopupsRegistry", { openedRegistry: [] });
var addOpenedPopup = (instance, parentPopovers = []) => {
  if (!OpenedPopupsRegistry.openedRegistry.some((popup) => popup.instance === instance)) {
    OpenedPopupsRegistry.openedRegistry.push({
      instance,
      parentPopovers
    });
  }
  _updateTopModalPopup();
  if (OpenedPopupsRegistry.openedRegistry.length === 1) {
    attachGlobalListener();
  }
};
var removeOpenedPopup = (instance) => {
  OpenedPopupsRegistry.openedRegistry = OpenedPopupsRegistry.openedRegistry.filter((el) => {
    return el.instance !== instance;
  });
  _updateTopModalPopup();
  if (!OpenedPopupsRegistry.openedRegistry.length) {
    detachGlobalListener();
  }
};
var getOpenedPopups = () => {
  return [...OpenedPopupsRegistry.openedRegistry];
};
var _keydownListener = (event) => {
  if (!OpenedPopupsRegistry.openedRegistry.length) {
    return;
  }
  if (isEscape(event)) {
    event.stopPropagation();
    OpenedPopupsRegistry.openedRegistry[OpenedPopupsRegistry.openedRegistry.length - 1].instance.closePopup(true);
  }
};
var attachGlobalListener = () => {
  document.addEventListener("keydown", _keydownListener);
};
var detachGlobalListener = () => {
  document.removeEventListener("keydown", _keydownListener);
};
var _updateTopModalPopup = () => {
  let popup;
  let hasModal = false;
  for (let i = OpenedPopupsRegistry.openedRegistry.length - 1; i >= 0; i--) {
    popup = OpenedPopupsRegistry.openedRegistry[i].instance;
    if (!hasModal && popup.isModal) {
      popup.isTopModalPopup = true;
      hasModal = true;
    } else {
      popup.isTopModalPopup = false;
    }
  }
};

// node_modules/@ui5/webcomponents/dist/generated/themes/Popup.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = { packageName: "@ui5/webcomponents", fileName: "themes/Popup.css.ts", content: `:host{min-width:1px;overflow:visible;border:none;inset:unset;margin:0;padding:0}
` };
var Popup_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/generated/themes/PopupBlockLayer.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData3 = { packageName: "@ui5/webcomponents", fileName: "themes/PopupBlockLayer.css.ts", content: `.ui5-block-layer{position:fixed;z-index:-1;display:none;inset:-500px;outline:none;pointer-events:all}
` };
var PopupBlockLayer_css_default = styleData3;

// node_modules/@ui5/webcomponents/dist/generated/themes/PopupGlobal.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData4 = { packageName: "@ui5/webcomponents", fileName: "themes/PopupGlobal.css.ts", content: `.ui5-popup-scroll-blocker{overflow:hidden}
` };
var PopupGlobal_css_default = styleData4;

// node_modules/@ui5/webcomponents/dist/Popup.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Popup_1;
var createBlockingStyle = () => {
  if (!hasStyle("data-ui5-popup-scroll-blocker")) {
    createStyle(PopupGlobal_css_default, "data-ui5-popup-scroll-blocker");
  }
};
createBlockingStyle();
var pageScrollingBlockers = /* @__PURE__ */ new Set();
var Popup = Popup_1 = class Popup2 extends UI5Element_default {
  constructor() {
    super();
    this.preventFocusRestore = false;
    this.accessibleRole = "Dialog";
    this.preventInitialFocus = false;
    this.isTopModalPopup = false;
    this.onPhone = false;
    this.onDesktop = false;
    this._opened = false;
    this._open = false;
    this._resizeHandler = this._resize.bind(this);
    this._getRealDomRef = () => {
      return this.shadowRoot.querySelector("[root-element]");
    };
  }
  onBeforeRendering() {
    this.onPhone = isPhone();
    this.onDesktop = isDesktop();
  }
  onAfterRendering() {
    renderFinished().then(() => {
      this._updateMediaRange();
    });
  }
  onEnterDOM() {
    this.setAttribute("popover", "manual");
    ResizeHandler_default.register(this, this._resizeHandler);
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
    this.tabIndex = -1;
  }
  onExitDOM() {
    if (this._opened) {
      Popup_1.unblockPageScrolling(this);
      this._removeOpenedPopup();
    }
    ResizeHandler_default.deregister(this, this._resizeHandler);
  }
  /**
   * Indicates if the element is open
   * @public
   * @default false
   * @since 1.2.0
   */
  set open(value) {
    if (this._open === value) {
      return;
    }
    this._open = value;
    if (value) {
      this.openPopup();
    } else {
      this.closePopup();
    }
  }
  get open() {
    return this._open;
  }
  openPopup() {
    return __async(this, null, function* () {
      if (this._opened) {
        return;
      }
      const prevented = !this.fireEvent("before-open", {}, true, false);
      if (prevented || this._opened) {
        return;
      }
      this._opened = true;
      if (this.isModal) {
        Popup_1.blockPageScrolling(this);
      }
      this._focusedElementBeforeOpen = getFocusedElement();
      this._show();
      if (this.getDomRef()) {
        this._updateMediaRange();
      }
      this._addOpenedPopup();
      this.open = true;
      yield this.applyInitialFocus();
      yield renderFinished();
      yield this.applyInitialFocus();
      if (this.isConnected) {
        this.fireEvent("open", {}, false, false);
      }
    });
  }
  _resize() {
    this._updateMediaRange();
  }
  /**
   * Prevents the user from interacting with the content under the block layer
   */
  _preventBlockLayerFocus(e) {
    e.preventDefault();
  }
  /**
   * Temporarily removes scrollbars from the html element
   * @protected
   */
  static blockPageScrolling(popup) {
    pageScrollingBlockers.add(popup);
    if (pageScrollingBlockers.size !== 1) {
      return;
    }
    document.documentElement.classList.add("ui5-popup-scroll-blocker");
  }
  /**
   * Restores scrollbars on the html element, if needed
   * @protected
   */
  static unblockPageScrolling(popup) {
    pageScrollingBlockers.delete(popup);
    if (pageScrollingBlockers.size !== 0) {
      return;
    }
    document.documentElement.classList.remove("ui5-popup-scroll-blocker");
  }
  _scroll(e) {
    this.fireEvent("scroll", {
      scrollTop: e.target.scrollTop,
      targetRef: e.target
    });
  }
  _onkeydown(e) {
    const isTabOutAttempt = e.target === this._root && isTabPrevious(e);
    const isEnterOnClosedPopupChild = isEnter(e) && !this.open;
    if (isTabOutAttempt || isEnterOnClosedPopupChild) {
      e.preventDefault();
    }
  }
  _onfocusout(e) {
    if (!e.relatedTarget) {
      this._shouldFocusRoot = true;
    }
  }
  _onmousedown(e) {
    if (this.shadowRoot.contains(e.target)) {
      this._shouldFocusRoot = true;
    } else {
      this._shouldFocusRoot = false;
    }
  }
  _onmouseup() {
    if (this._shouldFocusRoot) {
      if (isChrome()) {
        this._root.focus();
      }
      this._shouldFocusRoot = false;
    }
  }
  /**
   * Focus trapping
   * @private
   */
  forwardToFirst() {
    return __async(this, null, function* () {
      const firstFocusable = yield getFirstFocusableElement(this);
      if (firstFocusable) {
        firstFocusable.focus();
      } else {
        this._root.focus();
      }
    });
  }
  /**
   * Focus trapping
   * @private
   */
  forwardToLast() {
    return __async(this, null, function* () {
      const lastFocusable = yield getLastFocusableElement(this);
      if (lastFocusable) {
        lastFocusable.focus();
      } else {
        this._root.focus();
      }
    });
  }
  /**
   * Use this method to focus the element denoted by "initialFocus", if provided,
   * or the first focusable element otherwise.
   * @protected
   */
  applyInitialFocus() {
    return __async(this, null, function* () {
      if (!this.preventInitialFocus) {
        yield this.applyFocus();
      }
    });
  }
  /**
   * Focuses the element denoted by `initialFocus`, if provided,
   * or the first focusable element otherwise.
   * @public
   * @returns Promise that resolves when the focus is applied
   */
  applyFocus() {
    return __async(this, null, function* () {
      if (this.querySelector("[autofocus]")) {
        return;
      }
      yield this._waitForDomRef();
      if (this.getRootNode() === this) {
        return;
      }
      let element;
      if (this.initialFocus) {
        element = this.getRootNode().getElementById(this.initialFocus) || document.getElementById(this.initialFocus);
      }
      element = element || (yield getFirstFocusableElement(this)) || this._root;
      if (element) {
        element.focus();
      }
    });
  }
  isFocusWithin() {
    return isFocusedElementWithinNode(this._root);
  }
  _updateMediaRange() {
    this.mediaRange = MediaRange_default.getCurrentRange(MediaRange_default.RANGESETS.RANGE_4STEPS, this.getDomRef().offsetWidth);
  }
  /**
   * Adds the popup to the "opened popups registry"
   * @protected
   */
  _addOpenedPopup() {
    addOpenedPopup(this);
  }
  /**
   * Closes the popup.
   */
  closePopup(escPressed = false, preventRegistryUpdate = false, preventFocusRestore = false) {
    if (!this._opened) {
      return;
    }
    const prevented = !this.fireEvent("before-close", { escPressed }, true, false);
    if (prevented) {
      return;
    }
    this._opened = false;
    if (this.isModal) {
      Popup_1.unblockPageScrolling(this);
    }
    this.hide();
    this.open = false;
    if (!preventRegistryUpdate) {
      this._removeOpenedPopup();
    }
    if (!this.preventFocusRestore && !preventFocusRestore) {
      this.resetFocus();
    }
    this.fireEvent("close", {}, false, false);
  }
  /**
   * Removes the popup from the "opened popups registry"
   * @protected
   */
  _removeOpenedPopup() {
    removeOpenedPopup(this);
  }
  /**
   * Returns the focus to the previously focused element
   * @protected
   */
  resetFocus() {
    if (!this._focusedElementBeforeOpen) {
      return;
    }
    this._focusedElementBeforeOpen.focus();
    this._focusedElementBeforeOpen = null;
  }
  /**
   * Sets "block" display to the popup. The property can be overriden by derivatives of Popup.
   * @protected
   */
  _show() {
    if (this.isConnected) {
      this.setAttribute("popover", "manual");
      this.showPopover();
    }
  }
  /**
   * Sets "none" display to the popup
   * @protected
   */
  hide() {
    this.isConnected && this.hidePopover();
  }
  /**
   * Ensures ariaLabel is never null or empty string
   * @protected
   */
  get _ariaLabel() {
    return getEffectiveAriaLabelText(this);
  }
  get _root() {
    return this.shadowRoot.querySelector(".ui5-popup-root");
  }
  get _role() {
    return this.accessibleRole === PopupAccessibleRole_default.None ? void 0 : this.accessibleRole.toLowerCase();
  }
  get _ariaModal() {
    return this.accessibleRole === PopupAccessibleRole_default.None ? void 0 : "true";
  }
  get contentDOM() {
    return this.shadowRoot.querySelector(".ui5-popup-content");
  }
  get styles() {
    return {
      root: {},
      content: {}
    };
  }
  get classes() {
    return {
      root: {
        "ui5-popup-root": true,
        "ui5-content-native-scrollbars": getEffectiveScrollbarStyle_default()
      },
      content: {
        "ui5-popup-content": true
      }
    };
  }
};
__decorate([
  property_default()
], Popup.prototype, "initialFocus", void 0);
__decorate([
  property_default({ type: Boolean })
], Popup.prototype, "preventFocusRestore", void 0);
__decorate([
  property_default()
], Popup.prototype, "accessibleName", void 0);
__decorate([
  property_default()
], Popup.prototype, "accessibleNameRef", void 0);
__decorate([
  property_default()
], Popup.prototype, "accessibleRole", void 0);
__decorate([
  property_default()
], Popup.prototype, "mediaRange", void 0);
__decorate([
  property_default({ type: Boolean })
], Popup.prototype, "preventInitialFocus", void 0);
__decorate([
  property_default({ type: Boolean, noAttribute: true })
], Popup.prototype, "isTopModalPopup", void 0);
__decorate([
  slot_default({ type: HTMLElement, "default": true })
], Popup.prototype, "content", void 0);
__decorate([
  property_default({ type: Boolean })
], Popup.prototype, "onPhone", void 0);
__decorate([
  property_default({ type: Boolean })
], Popup.prototype, "onDesktop", void 0);
__decorate([
  property_default({ type: Boolean })
], Popup.prototype, "open", null);
Popup = Popup_1 = __decorate([
  customElement_default({
    renderer: LitRenderer_default,
    styles: [Popup_css_default, PopupBlockLayer_css_default],
    template: PopupTemplate_lit_default
  }),
  event_default("before-open"),
  event_default("open"),
  event_default("before-close", {
    detail: {
      /**
       * @public
       */
      escPressed: {
        type: Boolean
      }
    }
  }),
  event_default("close"),
  event_default("scroll")
], Popup);
var Popup_default = Popup;

// node_modules/@ui5/webcomponents/dist/generated/themes/PopupsCommon.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData5 = { packageName: "@ui5/webcomponents", fileName: "themes/PopupsCommon.css.ts", content: `:host{position:fixed;background:var(--sapGroup_ContentBackground);border-radius:var(--_ui5-v2-0-1_popup_border_radius);min-height:2rem;box-sizing:border-box}:host([open]){display:flex}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;flex:1 1 auto;outline:none}.ui5-popup-root .ui5-popup-header-root{color:var(--sapPageHeader_TextColor);box-shadow:var(--_ui5-v2-0-1_popup_header_shadow);border-bottom:var(--_ui5-v2-0-1_popup_header_border)}.ui5-popup-content{color:var(--sapTextColor);flex:auto}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-header-root,.ui5-popup-footer-root,:host([header-text]) .ui5-popup-header-text{margin:0;font-size:1rem;font-family:"72override",var(--_ui5-v2-0-1_popup_header_font_family);display:flex;justify-content:center;align-items:center}.ui5-popup-header-root .ui5-popup-header-text{font-weight:var(--_ui5-v2-0-1_popup_header_font_weight)}.ui5-popup-content{overflow:auto;box-sizing:border-box}:host([header-text]) .ui5-popup-header-text{text-align:center;min-height:var(--_ui5-v2-0-1_popup_default_header_height);max-height:var(--_ui5-v2-0-1_popup_default_header_height);line-height:var(--_ui5-v2-0-1_popup_default_header_height);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-block}:host([header-text]) .ui5-popup-header-root{justify-content:var(--_ui5-v2-0-1_popup_header_prop_header_text_alignment)}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([no-scrolling]) .ui5-popup-content{overflow:hidden}:host([media-range="S"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-0-1_popup_content_padding_s)}:host([media-range="M"]) .ui5-popup-content,:host([media-range="L"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-0-1_popup_content_padding_m_l)}:host([media-range="XL"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-0-1_popup_content_padding_xl)}.ui5-popup-header-root{background:var(--_ui5-v2-0-1_popup_header_background)}:host([media-range="S"]) .ui5-popup-header-root,:host([media-range="S"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-0-1_popup_header_footer_padding_s);padding-right:var(--_ui5-v2-0-1_popup_header_footer_padding_s)}:host([media-range="M"]) .ui5-popup-header-root,:host([media-range="L"]) .ui5-popup-header-root,:host([media-range="M"]) .ui5-popup-footer-root,:host([media-range="L"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-0-1_popup_header_footer_padding_m_l);padding-right:var(--_ui5-v2-0-1_popup_header_footer_padding_m_l)}:host([media-range="XL"]) .ui5-popup-header-root,:host([media-range="XL"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-0-1_popup_header_footer_padding_xl);padding-right:var(--_ui5-v2-0-1_popup_header_footer_padding_xl)}
` };
var PopupsCommon_css_default = styleData5;

export {
  isElementClickable_default,
  getFirstFocusableElement,
  getEffectiveScrollbarStyle_default,
  BrowserScrollbar_css_default,
  getFocusedElement,
  isClickInRect,
  getClosedPopupParent,
  clamp_default,
  MediaRange_default,
  PopupAccessibleRole_default,
  addOpenedPopup,
  removeOpenedPopup,
  getOpenedPopups,
  Popup_default,
  PopupsCommon_css_default
};
//# sourceMappingURL=chunk-B3EHYJGE.js.map
