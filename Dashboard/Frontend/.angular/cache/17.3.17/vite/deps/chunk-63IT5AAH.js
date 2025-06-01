import {
  BrowserScrollbar_css_default,
  Popup_default,
  PopupsCommon_css_default,
  addOpenedPopup,
  clamp_default,
  getClosedPopupParent,
  getOpenedPopups,
  isClickInRect,
  removeOpenedPopup
} from "./chunk-B3EHYJGE.js";
import {
  getActiveElement_default
} from "./chunk-V3KTO444.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  isIOS
} from "./chunk-ECUZOJV2.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  classMap,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  styleMap
} from "./chunk-DMMFI3C7.js";
import {
  customElement_default,
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
  __async,
  __spreadProps,
  __spreadValues,
  __superGet
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/util/isElementContainingBlock.js
var isElementContainingBlock = (el) => {
  const computedStyle = getComputedStyle(el);
  return ["size", "inline-size"].indexOf(computedStyle.containerType) > -1 || ["transform", "perspective"].indexOf(computedStyle.willChange) > -1 || ["layout", "paint", "strict", "content"].indexOf(computedStyle.contain) > -1 || computedStyle.transform && computedStyle.transform !== "none" || computedStyle.perspective && computedStyle.perspective !== "none" || computedStyle.backdropFilter && computedStyle.backdropFilter !== "none";
};
var isElementContainingBlock_default = isElementContainingBlock;

// node_modules/@ui5/webcomponents-base/dist/util/getParentElement.js
var getParentElement = (el) => {
  return el.parentElement ? el.parentNode : el.parentNode.host;
};
var getParentElement_default = getParentElement;

// node_modules/@ui5/webcomponents-base/dist/converters/DOMReference.js
var DOMReferenceConverter = {
  toAttribute(propertyValue) {
    if (propertyValue instanceof HTMLElement) {
      return null;
    }
    return propertyValue;
  },
  fromAttribute(value) {
    return value;
  }
};
var DOMReference_default = DOMReferenceConverter;

// node_modules/@ui5/webcomponents/dist/types/PopoverPlacement.js
var PopoverPlacement;
(function(PopoverPlacement2) {
  PopoverPlacement2["Start"] = "Start";
  PopoverPlacement2["End"] = "End";
  PopoverPlacement2["Top"] = "Top";
  PopoverPlacement2["Bottom"] = "Bottom";
})(PopoverPlacement || (PopoverPlacement = {}));
var PopoverPlacement_default = PopoverPlacement;

// node_modules/@ui5/webcomponents/dist/types/PopoverVerticalAlign.js
var PopoverVerticalAlign;
(function(PopoverVerticalAlign2) {
  PopoverVerticalAlign2["Center"] = "Center";
  PopoverVerticalAlign2["Top"] = "Top";
  PopoverVerticalAlign2["Bottom"] = "Bottom";
  PopoverVerticalAlign2["Stretch"] = "Stretch";
})(PopoverVerticalAlign || (PopoverVerticalAlign = {}));
var PopoverVerticalAlign_default = PopoverVerticalAlign;

// node_modules/@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js
var PopoverHorizontalAlign;
(function(PopoverHorizontalAlign2) {
  PopoverHorizontalAlign2["Center"] = "Center";
  PopoverHorizontalAlign2["Start"] = "Start";
  PopoverHorizontalAlign2["End"] = "End";
  PopoverHorizontalAlign2["Stretch"] = "Stretch";
})(PopoverHorizontalAlign || (PopoverHorizontalAlign = {}));
var PopoverHorizontalAlign_default = PopoverHorizontalAlign;

// node_modules/@ui5/webcomponents/dist/popup-utils/PopoverRegistry.js
var updateInterval;
var intervalTimeout = 300;
var openedRegistry = [];
var repositionPopovers = () => {
  openedRegistry.forEach((popover) => {
    popover.instance.reposition();
  });
};
var closePopoversIfLostFocus = () => {
  if (getActiveElement_default().tagName === "IFRAME") {
    getRegistry().reverse().forEach((popup) => popup.instance.closePopup(false, false, true));
  }
};
var runUpdateInterval = () => {
  updateInterval = setInterval(() => {
    repositionPopovers();
    closePopoversIfLostFocus();
  }, intervalTimeout);
};
var stopUpdateInterval = () => {
  clearInterval(updateInterval);
};
var attachGlobalScrollHandler = () => {
  document.addEventListener("scroll", repositionPopovers, { capture: true });
};
var detachGlobalScrollHandler = () => {
  document.removeEventListener("scroll", repositionPopovers, { capture: true });
};
var attachScrollHandler = (popover) => {
  popover && popover.shadowRoot.addEventListener("scroll", repositionPopovers, { capture: true });
};
var detachScrollHandler = (popover) => {
  popover && popover.shadowRoot.removeEventListener("scroll", repositionPopovers, { capture: true });
};
var attachGlobalClickHandler = () => {
  document.addEventListener("mousedown", clickHandler);
};
var detachGlobalClickHandler = () => {
  document.removeEventListener("mousedown", clickHandler);
};
var clickHandler = (event) => {
  const openedPopups = getOpenedPopups();
  if (openedPopups.length === 0) {
    return;
  }
  const isTopPopupPopover = instanceOfPopover(openedPopups[openedPopups.length - 1].instance);
  if (!isTopPopupPopover) {
    return;
  }
  for (let i = openedPopups.length - 1; i !== -1; i--) {
    const popup = openedPopups[i].instance;
    if (popup.isModal || popup.isOpenerClicked(event)) {
      return;
    }
    if (isClickInRect(event, popup.getBoundingClientRect())) {
      break;
    }
    popup.closePopup();
  }
};
var addOpenedPopover = (instance) => {
  const parentPopovers = getParentPopoversIfNested(instance);
  addOpenedPopup(instance, parentPopovers);
  openedRegistry.push({
    instance,
    parentPopovers
  });
  attachScrollHandler(instance);
  if (openedRegistry.length === 1) {
    attachGlobalScrollHandler();
    attachGlobalClickHandler();
    runUpdateInterval();
  }
};
var removeOpenedPopover = (instance) => {
  const popoversToClose = [instance];
  for (let i = 0; i < openedRegistry.length; i++) {
    const indexOfCurrentInstance = openedRegistry[i].parentPopovers.indexOf(instance);
    if (openedRegistry[i].parentPopovers.length > 0 && indexOfCurrentInstance > -1) {
      popoversToClose.push(openedRegistry[i].instance);
    }
  }
  for (let i = popoversToClose.length - 1; i >= 0; i--) {
    for (let j = 0; j < openedRegistry.length; j++) {
      let indexOfItemToRemove = -1;
      if (popoversToClose[i] === openedRegistry[j].instance) {
        indexOfItemToRemove = j;
      }
      if (indexOfItemToRemove >= 0) {
        removeOpenedPopup(openedRegistry[indexOfItemToRemove].instance);
        detachScrollHandler(openedRegistry[indexOfItemToRemove].instance);
        const itemToClose = openedRegistry.splice(indexOfItemToRemove, 1);
        itemToClose[0].instance.closePopup(false, true);
      }
    }
  }
  if (!openedRegistry.length) {
    detachGlobalScrollHandler();
    detachGlobalClickHandler();
    stopUpdateInterval();
  }
};
var getRegistry = () => {
  return openedRegistry;
};
var getParentPopoversIfNested = (instance) => {
  let currentElement = instance.parentNode;
  const parentPopovers = [];
  while (currentElement && currentElement.parentNode) {
    for (let i = 0; i < openedRegistry.length; i++) {
      if (currentElement === openedRegistry[i].instance) {
        parentPopovers.push(currentElement);
      }
    }
    currentElement = currentElement.parentNode;
  }
  return parentPopovers;
};

// node_modules/@ui5/webcomponents/dist/generated/templates/PopoverTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" tabindex="-1" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(this.styles.arrow)}"></span>${this._displayHeader ? block1.call(this, context, tags, suffix) : void 0}<div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter ? block4.call(this, context, tags, suffix) : void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</header>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<slot name="header"></slot>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<h1 class="ui5-popup-header-text">${ifDefined(this.headerText)}</h1>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`${this.footer.length ? block5.call(this, context, tags, suffix) : void 0}`;
}
function block5(context, tags, suffix) {
  return effectiveHtml`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;
}
var PopoverTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Popover.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Popover.css.ts", content: `:host{box-shadow:var(--_ui5-v2-0-1_popover_box_shadow);background-color:var(--_ui5-v2-0-1_popover_background);max-width:calc(100vw - (100vw - 100%) - 2 * var(--_ui5-v2-0-1_popup_viewport_margin))}:host([hide-arrow]){box-shadow:var(--_ui5-v2-0-1_popover_no_arrow_box_shadow)}:host([opened][actual-placement="Top"]){margin-top:var(--_ui5-v2-0-1-popover-margin-bottom)}:host([opened][actual-placement="Bottom"]){margin-top:var(--_ui5-v2-0-1-popover-margin-top)}:host([actual-placement="Bottom"]) .ui5-popover-arrow{left:calc(50% - .5625rem);top:-.5rem;height:.5625rem}:host([actual-placement="Bottom"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-0-1_popover_upward_arrow_margin)}:host([actual-placement="Start"]) .ui5-popover-arrow{top:calc(50% - .5625rem);right:-.5625rem;width:.5625rem}:host([actual-placement="Start"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-0-1_popover_right_arrow_margin)}:host([actual-placement="Top"]) .ui5-popover-arrow{left:calc(50% - .5625rem);height:.5625rem;top:100%}:host([actual-placement="Top"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-0-1_popover_downward_arrow_margin)}:host(:not([actual-placement])) .ui5-popover-arrow,:host([actual-placement="End"]) .ui5-popover-arrow{left:-.5625rem;top:calc(50% - .5625rem);width:.5625rem;height:1rem}:host(:not([actual-placement])) .ui5-popover-arrow:after,:host([actual-placement="End"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-0-1_popover_left_arrow_margin)}:host([hide-arrow]) .ui5-popover-arrow{display:none}.ui5-popover-root{min-width:6.25rem}.ui5-popover-arrow{pointer-events:none;display:block;width:1rem;height:1rem;position:absolute;overflow:hidden}.ui5-popover-arrow:after{content:"";display:block;width:.7rem;height:.7rem;background-color:var(--_ui5-v2-0-1_popover_background);box-shadow:var(--_ui5-v2-0-1_popover_box_shadow);transform:rotate(-45deg)}:host([modal])::backdrop{background-color:var(--_ui5-v2-0-1_popup_block_layer_background)}:host([modal]) .ui5-block-layer{display:block}
` };
var Popover_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Popover.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Popover_1;
var ARROW_SIZE = 8;
var Popover = Popover_1 = class Popover2 extends Popup_default {
  static get VIEWPORT_MARGIN() {
    return 10;
  }
  constructor() {
    super();
    this.placement = "End";
    this.horizontalAlign = "Center";
    this.verticalAlign = "Center";
    this.modal = false;
    this.hideArrow = false;
    this.allowTargetOverlap = false;
    this.disableScrolling = false;
    this.arrowTranslateX = 0;
    this.arrowTranslateY = 0;
    this.actualPlacement = "End";
  }
  /**
   * Defines the ID or DOM Reference of the element at which the popover is shown.
   * When using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.
   * You can only set the `opener` attribute to a DOM Reference when using JavaScript.
   * @public
   * @default undefined
   * @since 1.2.0
   */
  set opener(value) {
    if (this._opener === value) {
      return;
    }
    this._opener = value;
    if (value && this.open) {
      this.openPopup();
    }
  }
  get opener() {
    return this._opener;
  }
  openPopup() {
    return __async(this, null, function* () {
      if (this._opened) {
        return;
      }
      const opener = this.getOpenerHTMLElement(this.opener);
      if (!opener) {
        console.warn("Valid opener id is required. It must be defined before opening the popover.");
        return;
      }
      if (this.isOpenerOutsideViewport(opener.getBoundingClientRect())) {
        yield renderFinished();
        this.open = false;
        this.fireEvent("close", {}, false, false);
        return;
      }
      this._openerRect = opener.getBoundingClientRect();
      yield __superGet(Popover2.prototype, this, "openPopup").call(this);
    });
  }
  isOpenerClicked(e) {
    const target = e.target;
    if (target === this._opener) {
      return true;
    }
    const ui5ElementTarget = target;
    if (ui5ElementTarget.getFocusDomRef && ui5ElementTarget.getFocusDomRef() === this._opener) {
      return true;
    }
    return e.composedPath().indexOf(this._opener) > -1;
  }
  /**
   * Override for the _addOpenedPopup hook, which would otherwise just call addOpenedPopup(this)
   * @private
   */
  _addOpenedPopup() {
    addOpenedPopover(this);
  }
  /**
   * Override for the _removeOpenedPopup hook, which would otherwise just call removeOpenedPopup(this)
   * @private
   */
  _removeOpenedPopup() {
    removeOpenedPopover(this);
  }
  getOpenerHTMLElement(opener) {
    if (opener === void 0 || opener instanceof HTMLElement) {
      return opener;
    }
    const rootNode = this.getRootNode();
    if (rootNode instanceof Document) {
      return rootNode.getElementById(opener);
    }
    return document.getElementById(opener);
  }
  shouldCloseDueToOverflow(placement, openerRect) {
    const threshold = 32;
    const limits = {
      "Start": openerRect.right,
      "End": openerRect.left,
      "Top": openerRect.top,
      "Bottom": openerRect.bottom
    };
    const opener = this.getOpenerHTMLElement(this.opener);
    const closedPopupParent = getClosedPopupParent(opener);
    let overflowsBottom = false;
    let overflowsTop = false;
    if (closedPopupParent instanceof Popover_1) {
      const contentRect = closedPopupParent.contentDOM.getBoundingClientRect();
      overflowsBottom = openerRect.top > contentRect.top + contentRect.height;
      overflowsTop = openerRect.top + openerRect.height < contentRect.top;
    }
    return limits[placement] < 0 || limits[placement] + threshold > closedPopupParent.innerHeight || overflowsBottom || overflowsTop;
  }
  shouldCloseDueToNoOpener(openerRect) {
    return openerRect.top === 0 && openerRect.bottom === 0 && openerRect.left === 0 && openerRect.right === 0;
  }
  isOpenerOutsideViewport(openerRect) {
    return openerRect.bottom < 0 || openerRect.top > window.innerHeight || openerRect.right < 0 || openerRect.left > window.innerWidth;
  }
  /**
   * @override
   */
  _resize() {
    super._resize();
    if (this.open) {
      this.reposition();
    }
  }
  reposition() {
    this._show();
  }
  _show() {
    return __async(this, null, function* () {
      __superGet(Popover2.prototype, this, "_show").call(this);
      if (!this._opened) {
        this._showOutsideViewport();
      }
      const popoverSize = this.getPopoverSize();
      let placement;
      if (popoverSize.width === 0 || popoverSize.height === 0) {
        return;
      }
      if (this.open) {
        this._openerRect = this.getOpenerHTMLElement(this.opener).getBoundingClientRect();
      }
      if (this.shouldCloseDueToNoOpener(this._openerRect) && this.isFocusWithin() && this._oldPlacement) {
        placement = this._oldPlacement;
      } else {
        placement = this.calcPlacement(this._openerRect, popoverSize);
      }
      if (this._preventRepositionAndClose || this.isOpenerOutsideViewport(this._openerRect)) {
        yield this._waitForDomRef();
        return this.closePopup();
      }
      this._oldPlacement = placement;
      this.actualPlacement = placement.placement;
      let left = clamp_default(this._left, Popover_1.VIEWPORT_MARGIN, document.documentElement.clientWidth - popoverSize.width - Popover_1.VIEWPORT_MARGIN);
      if (this.actualPlacement === PopoverPlacement_default.End) {
        left = Math.max(left, this._left);
      }
      let top = clamp_default(this._top, Popover_1.VIEWPORT_MARGIN, document.documentElement.clientHeight - popoverSize.height - Popover_1.VIEWPORT_MARGIN);
      if (this.actualPlacement === PopoverPlacement_default.Bottom) {
        top = Math.max(top, this._top);
      }
      this.arrowTranslateX = placement.arrow.x;
      this.arrowTranslateY = placement.arrow.y;
      top = this._adjustForIOSKeyboard(top);
      Object.assign(this.style, {
        top: `${top}px`,
        left: `${left}px`
      });
      if (this.horizontalAlign === PopoverHorizontalAlign_default.Stretch && this._width) {
        this.style.width = this._width;
      }
    });
  }
  /**
   * Adjust the desired top position to compensate for shift of the screen
   * caused by opened keyboard on iOS which affects all elements with position:fixed.
   * @private
   * @param top The target top in px.
   * @returns The adjusted top in px.
   */
  _adjustForIOSKeyboard(top) {
    if (!isIOS()) {
      return top;
    }
    const actualTop = Math.ceil(this.getBoundingClientRect().top);
    return top + (Number.parseInt(this.style.top || "0") - actualTop);
  }
  _getContainingBlockClientLocation() {
    let parentElement = getParentElement_default(this);
    while (parentElement) {
      if (isElementContainingBlock_default(parentElement)) {
        return parentElement.getBoundingClientRect();
      }
      parentElement = getParentElement_default(parentElement);
    }
    return { left: 0, top: 0 };
  }
  getPopoverSize() {
    const rect = this.getBoundingClientRect(), width = rect.width, height = rect.height;
    return { width, height };
  }
  _showOutsideViewport() {
    Object.assign(this.style, {
      top: "-10000px",
      left: "-10000px"
    });
  }
  get arrowDOM() {
    return this.shadowRoot.querySelector(".ui5-popover-arrow");
  }
  /**
   * @private
   */
  calcPlacement(targetRect, popoverSize) {
    let left = Popover_1.VIEWPORT_MARGIN;
    let top = 0;
    const allowTargetOverlap = this.allowTargetOverlap;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    let maxHeight = clientHeight;
    let maxWidth = clientWidth;
    const placement = this.getActualPlacement(targetRect, popoverSize);
    this._preventRepositionAndClose = this.shouldCloseDueToNoOpener(targetRect) || this.shouldCloseDueToOverflow(placement, targetRect);
    const isVertical = placement === PopoverPlacement_default.Top || placement === PopoverPlacement_default.Bottom;
    if (this.horizontalAlign === PopoverHorizontalAlign_default.Stretch && isVertical) {
      popoverSize.width = targetRect.width;
      this._width = `${targetRect.width}px`;
    } else if (this.verticalAlign === PopoverVerticalAlign_default.Stretch && !isVertical) {
      popoverSize.height = targetRect.height;
    }
    const arrowOffset = this.hideArrow ? 0 : ARROW_SIZE;
    switch (placement) {
      case PopoverPlacement_default.Top:
        left = this.getVerticalLeft(targetRect, popoverSize);
        top = Math.max(targetRect.top - popoverSize.height - arrowOffset, 0);
        if (!allowTargetOverlap) {
          maxHeight = targetRect.top - arrowOffset;
        }
        break;
      case PopoverPlacement_default.Bottom:
        left = this.getVerticalLeft(targetRect, popoverSize);
        top = targetRect.bottom + arrowOffset;
        if (allowTargetOverlap) {
          top = Math.max(Math.min(top, clientHeight - popoverSize.height), 0);
        } else {
          maxHeight = clientHeight - targetRect.bottom - arrowOffset;
        }
        break;
      case PopoverPlacement_default.Start:
        left = Math.max(targetRect.left - popoverSize.width - arrowOffset, 0);
        top = this.getHorizontalTop(targetRect, popoverSize);
        if (!allowTargetOverlap) {
          maxWidth = targetRect.left - arrowOffset;
        }
        break;
      case PopoverPlacement_default.End:
        left = targetRect.left + targetRect.width + arrowOffset;
        top = this.getHorizontalTop(targetRect, popoverSize);
        if (allowTargetOverlap) {
          left = Math.max(Math.min(left, clientWidth - popoverSize.width), 0);
        } else {
          maxWidth = clientWidth - targetRect.right - arrowOffset;
        }
        break;
    }
    if (isVertical) {
      if (popoverSize.width > clientWidth || left < Popover_1.VIEWPORT_MARGIN) {
        left = Popover_1.VIEWPORT_MARGIN;
      } else if (left + popoverSize.width > clientWidth - Popover_1.VIEWPORT_MARGIN) {
        left = clientWidth - Popover_1.VIEWPORT_MARGIN - popoverSize.width;
      }
    } else {
      if (popoverSize.height > clientHeight || top < 0) {
        top = 0;
      } else if (top + popoverSize.height > clientHeight) {
        top -= top + popoverSize.height - clientHeight;
      }
    }
    this._maxHeight = Math.round(maxHeight - Popover_1.VIEWPORT_MARGIN);
    this._maxWidth = Math.round(maxWidth - Popover_1.VIEWPORT_MARGIN);
    if (this._left === void 0 || Math.abs(this._left - left) > 1.5) {
      this._left = Math.round(left);
    }
    if (this._top === void 0 || Math.abs(this._top - top) > 1.5) {
      this._top = Math.round(top);
    }
    const borderRadius = Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));
    const arrowPos = this.getArrowPosition(targetRect, popoverSize, left, top, isVertical, borderRadius);
    return {
      arrow: arrowPos,
      top: this._top,
      left: this._left,
      placement
    };
  }
  /**
   * Calculates the position for the arrow.
   * @private
   * @param targetRect BoundingClientRect of the target element
   * @param popoverSize Width and height of the popover
   * @param left Left offset of the popover
   * @param top Top offset of the popover
   * @param isVertical If the popover is positioned vertically to the target element
   * @param borderRadius Value of the border-radius property
   * @returns  Arrow's coordinates
   */
  getArrowPosition(targetRect, popoverSize, left, top, isVertical, borderRadius) {
    const horizontalAlign = this._actualHorizontalAlign;
    let arrowXCentered = horizontalAlign === PopoverHorizontalAlign_default.Center || horizontalAlign === PopoverHorizontalAlign_default.Stretch;
    if (horizontalAlign === PopoverHorizontalAlign_default.End && left <= targetRect.left) {
      arrowXCentered = true;
    }
    if (horizontalAlign === PopoverHorizontalAlign_default.Start && left + popoverSize.width >= targetRect.left + targetRect.width) {
      arrowXCentered = true;
    }
    let arrowTranslateX = 0;
    if (isVertical && arrowXCentered) {
      arrowTranslateX = targetRect.left + targetRect.width / 2 - left - popoverSize.width / 2;
    }
    let arrowTranslateY = 0;
    if (!isVertical) {
      arrowTranslateY = targetRect.top + targetRect.height / 2 - top - popoverSize.height / 2;
    }
    const safeRangeForArrowY = popoverSize.height / 2 - borderRadius - ARROW_SIZE / 2;
    arrowTranslateY = clamp_default(arrowTranslateY, -safeRangeForArrowY, safeRangeForArrowY);
    const safeRangeForArrowX = popoverSize.width / 2 - borderRadius - ARROW_SIZE / 2;
    arrowTranslateX = clamp_default(arrowTranslateX, -safeRangeForArrowX, safeRangeForArrowX);
    return {
      x: Math.round(arrowTranslateX),
      y: Math.round(arrowTranslateY)
    };
  }
  /**
   * Fallbacks to new placement, prioritizing `Left` and `Right` placements.
   * @private
   */
  fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) {
    if (targetRect.left > popoverSize.width) {
      return PopoverPlacement_default.Start;
    }
    if (clientWidth - targetRect.right > targetRect.left) {
      return PopoverPlacement_default.End;
    }
    if (clientHeight - targetRect.bottom > popoverSize.height) {
      return PopoverPlacement_default.Bottom;
    }
    if (clientHeight - targetRect.bottom < targetRect.top) {
      return PopoverPlacement_default.Top;
    }
  }
  getActualPlacement(targetRect, popoverSize) {
    const placement = this.placement;
    let actualPlacement = placement;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    switch (placement) {
      case PopoverPlacement_default.Top:
        if (targetRect.top < popoverSize.height && targetRect.top < clientHeight - targetRect.bottom) {
          actualPlacement = PopoverPlacement_default.Bottom;
        }
        break;
      case PopoverPlacement_default.Bottom:
        if (clientHeight - targetRect.bottom < popoverSize.height && clientHeight - targetRect.bottom < targetRect.top) {
          actualPlacement = PopoverPlacement_default.Top;
        }
        break;
      case PopoverPlacement_default.Start:
        if (targetRect.left < popoverSize.width) {
          actualPlacement = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placement;
        }
        break;
      case PopoverPlacement_default.End:
        if (clientWidth - targetRect.right < popoverSize.width) {
          actualPlacement = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placement;
        }
        break;
    }
    return actualPlacement;
  }
  getVerticalLeft(targetRect, popoverSize) {
    const horizontalAlign = this._actualHorizontalAlign;
    let left = Popover_1.VIEWPORT_MARGIN;
    switch (horizontalAlign) {
      case PopoverHorizontalAlign_default.Center:
      case PopoverHorizontalAlign_default.Stretch:
        left = targetRect.left - (popoverSize.width - targetRect.width) / 2;
        break;
      case PopoverHorizontalAlign_default.Start:
        left = targetRect.left;
        break;
      case PopoverHorizontalAlign_default.End:
        left = targetRect.right - popoverSize.width;
        break;
    }
    return left;
  }
  getHorizontalTop(targetRect, popoverSize) {
    let top = 0;
    switch (this.verticalAlign) {
      case PopoverVerticalAlign_default.Center:
      case PopoverVerticalAlign_default.Stretch:
        top = targetRect.top - (popoverSize.height - targetRect.height) / 2;
        break;
      case PopoverVerticalAlign_default.Top:
        top = targetRect.top;
        break;
      case PopoverVerticalAlign_default.Bottom:
        top = targetRect.bottom - popoverSize.height;
        break;
    }
    return top;
  }
  get isModal() {
    return this.modal;
  }
  get _ariaLabelledBy() {
    if (!this._ariaLabel && this._displayHeader) {
      return "ui5-popup-header";
    }
    return void 0;
  }
  get styles() {
    return __spreadProps(__spreadValues({}, super.styles), {
      root: {
        "max-height": this._maxHeight ? `${this._maxHeight}px` : "",
        "max-width": this._maxWidth ? `${this._maxWidth}px` : ""
      },
      arrow: {
        transform: `translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`
      }
    });
  }
  get classes() {
    const allClasses = super.classes;
    allClasses.root["ui5-popover-root"] = true;
    return allClasses;
  }
  /**
   * Hook for descendants to hide header.
   */
  get _displayHeader() {
    return !!(this.header.length || this.headerText);
  }
  /**
   * Hook for descendants to hide footer.
   */
  get _displayFooter() {
    return true;
  }
  get _actualHorizontalAlign() {
    if (this.effectiveDir === "rtl") {
      if (this.horizontalAlign === PopoverHorizontalAlign_default.Start) {
        return PopoverHorizontalAlign_default.End;
      }
      if (this.horizontalAlign === PopoverHorizontalAlign_default.End) {
        return PopoverHorizontalAlign_default.Start;
      }
    }
    return this.horizontalAlign;
  }
};
__decorate([
  property_default()
], Popover.prototype, "headerText", void 0);
__decorate([
  property_default()
], Popover.prototype, "placement", void 0);
__decorate([
  property_default()
], Popover.prototype, "horizontalAlign", void 0);
__decorate([
  property_default()
], Popover.prototype, "verticalAlign", void 0);
__decorate([
  property_default({ type: Boolean })
], Popover.prototype, "modal", void 0);
__decorate([
  property_default({ type: Boolean })
], Popover.prototype, "hideArrow", void 0);
__decorate([
  property_default({ type: Boolean })
], Popover.prototype, "allowTargetOverlap", void 0);
__decorate([
  property_default({ type: Boolean })
], Popover.prototype, "disableScrolling", void 0);
__decorate([
  property_default({ type: Number, noAttribute: true })
], Popover.prototype, "arrowTranslateX", void 0);
__decorate([
  property_default({ type: Number, noAttribute: true })
], Popover.prototype, "arrowTranslateY", void 0);
__decorate([
  property_default()
], Popover.prototype, "actualPlacement", void 0);
__decorate([
  property_default({ type: Number, noAttribute: true })
], Popover.prototype, "_maxHeight", void 0);
__decorate([
  property_default({ type: Number, noAttribute: true })
], Popover.prototype, "_maxWidth", void 0);
__decorate([
  slot_default({ type: HTMLElement })
], Popover.prototype, "header", void 0);
__decorate([
  slot_default({ type: HTMLElement })
], Popover.prototype, "footer", void 0);
__decorate([
  property_default({ converter: DOMReference_default })
], Popover.prototype, "opener", null);
Popover = Popover_1 = __decorate([
  customElement_default({
    tag: "ui5-popover",
    styles: [
      Popup_default.styles,
      BrowserScrollbar_css_default,
      PopupsCommon_css_default,
      Popover_css_default
    ],
    template: PopoverTemplate_lit_default
  })
], Popover);
var instanceOfPopover = (object) => {
  return "opener" in object;
};
Popover.define();
var Popover_default = Popover;

export {
  DOMReference_default,
  PopoverPlacement_default,
  PopoverHorizontalAlign_default,
  Popover_default
};
//# sourceMappingURL=chunk-63IT5AAH.js.map
