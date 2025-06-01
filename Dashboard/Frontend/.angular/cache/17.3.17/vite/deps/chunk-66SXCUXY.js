import {
  ResponsivePopoverCommon_css_default
} from "./chunk-RYF5F2A6.js";
import {
  ListItemCustom_default
} from "./chunk-NKNWETHW.js";
import {
  ResponsivePopover_default
} from "./chunk-D2ZEM7VW.js";
import {
  DragRegistry_default,
  DropIndicator_default,
  List_default,
  MovePlacement_default,
  Orientation_default,
  findClosestPosition_default
} from "./chunk-NJBEKUUC.js";
import {
  ItemNavigation_default
} from "./chunk-KAQ4T4QR.js";
import {
  Button_default
} from "./chunk-THWQMO7Z.js";
import {
  MediaRange_default
} from "./chunk-B3EHYJGE.js";
import {
  ResizeHandler_default
} from "./chunk-3NVTNN76.js";
import {
  TABCONTAINER_END_OVERFLOW,
  TABCONTAINER_NEXT_ICON_ACC_NAME,
  TABCONTAINER_OVERFLOW_MENU_TITLE,
  TABCONTAINER_POPOVER_CANCEL_BUTTON,
  TABCONTAINER_PREVIOUS_ICON_ACC_NAME,
  TABCONTAINER_SUBTABS_DESCRIPTION
} from "./chunk-U6TJ47RH.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  isDesktop,
  isDown,
  isEnter,
  isLeft,
  isRight,
  isSpace,
  isUp
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
  repeat,
  scopeTag
} from "./chunk-DMMFI3C7.js";
import {
  registerIcon
} from "./chunk-XOBH4D6P.js";
import {
  getI18nBundle
} from "./chunk-22ISB74T.js";
import {
  event_default
} from "./chunk-XYCO3572.js";
import {
  UI5Element_default,
  arraysAreEqual_default,
  customElement_default,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/animations/AnimationQueue.js
var tasks = /* @__PURE__ */ new WeakMap();
var AnimationQueue = class _AnimationQueue {
  static get tasks() {
    return tasks;
  }
  static enqueue(element, task) {
    if (!tasks.has(element)) {
      tasks.set(element, []);
    }
    tasks.get(element).push(task);
  }
  static run(element, task) {
    if (!tasks.has(element)) {
      tasks.set(element, []);
    }
    return task().then(() => {
      const elementTasks = tasks.get(element);
      if (elementTasks.length > 0) {
        return _AnimationQueue.run(element, elementTasks.shift());
      }
      tasks.delete(element);
    });
  }
  static push(element, task) {
    const elementTasks = tasks.get(element);
    if (elementTasks) {
      _AnimationQueue.enqueue(element, task);
    } else {
      _AnimationQueue.run(element, task);
    }
  }
};
var AnimationQueue_default = AnimationQueue;

// node_modules/@ui5/webcomponents-base/dist/animations/animate.js
var animate = (options) => {
  let start = null;
  let stopped = false;
  let animationFrame;
  let stop;
  let advanceAnimation;
  const promise = new Promise((resolve, reject) => {
    advanceAnimation = (timestamp) => {
      start = start || timestamp;
      const timeElapsed = timestamp - start;
      const remaining = options.duration - timeElapsed;
      if (timeElapsed <= options.duration) {
        const currentAdvance = 1 - remaining / options.duration;
        options.advance(currentAdvance);
        if (!stopped) {
          animationFrame = requestAnimationFrame(advanceAnimation);
        }
      } else {
        options.advance(1);
        resolve();
      }
    };
    stop = () => {
      stopped = true;
      cancelAnimationFrame(animationFrame);
      reject(new Error("animation stopped"));
    };
  }).catch((reason) => reason);
  AnimationQueue_default.push(options.element, () => {
    if (typeof options.beforeStart === "function") {
      options.beforeStart();
    }
    requestAnimationFrame(advanceAnimation);
    return new Promise((resolve) => {
      promise.then(() => resolve());
    });
  });
  return {
    promise: () => promise,
    stop: () => stop
  };
};
var duration = 400;
var animate_default = animate;

// node_modules/@ui5/webcomponents-base/dist/animations/slideDown.js
var slideDown = (element) => {
  let computedStyles, paddingTop, paddingBottom, marginTop, marginBottom, height;
  let storedOverflow, storedPaddingTop, storedPaddingBottom, storedMarginTop, storedMarginBottom, storedHeight;
  const animation = animate_default({
    beforeStart: () => {
      element.style.display = "block";
      computedStyles = getComputedStyle(element);
      paddingTop = parseFloat(computedStyles.paddingTop);
      paddingBottom = parseFloat(computedStyles.paddingBottom);
      marginTop = parseFloat(computedStyles.marginTop);
      marginBottom = parseFloat(computedStyles.marginBottom);
      height = parseFloat(computedStyles.height);
      storedOverflow = element.style.overflow;
      storedPaddingTop = element.style.paddingTop;
      storedPaddingBottom = element.style.paddingBottom;
      storedMarginTop = element.style.marginTop;
      storedMarginBottom = element.style.marginBottom;
      storedHeight = element.style.height;
      element.style.overflow = "hidden";
      element.style.paddingTop = "0";
      element.style.paddingBottom = "0";
      element.style.marginTop = "0";
      element.style.marginBottom = "0";
      element.style.height = "0";
    },
    duration,
    element,
    advance: (progress) => {
      element.style.display = "block";
      element.style.paddingTop = `${paddingTop * progress}px`;
      element.style.paddingBottom = `${paddingBottom * progress}px`;
      element.style.marginTop = `${marginTop * progress}px`;
      element.style.marginBottom = `${marginBottom * progress}px`;
      element.style.height = `${height * progress}px`;
    }
  });
  animation.promise().then(() => {
    element.style.overflow = storedOverflow;
    element.style.paddingTop = storedPaddingTop;
    element.style.paddingBottom = storedPaddingBottom;
    element.style.marginTop = storedMarginTop;
    element.style.marginBottom = storedMarginBottom;
    element.style.height = storedHeight;
  });
  return animation;
};
var slideDown_default = slideDown;

// node_modules/@ui5/webcomponents-base/dist/animations/slideUp.js
var slideUp = (element) => {
  let computedStyles, paddingTop, paddingBottom, marginTop, marginBottom, height;
  let storedOverflow, storedPaddingTop, storedPaddingBottom, storedMarginTop, storedMarginBottom, storedHeight;
  const animation = animate_default({
    beforeStart: () => {
      const el = element;
      computedStyles = getComputedStyle(el);
      paddingTop = parseFloat(computedStyles.paddingTop);
      paddingBottom = parseFloat(computedStyles.paddingBottom);
      marginTop = parseFloat(computedStyles.marginTop);
      marginBottom = parseFloat(computedStyles.marginBottom);
      height = parseFloat(computedStyles.height);
      storedOverflow = el.style.overflow;
      storedPaddingTop = el.style.paddingTop;
      storedPaddingBottom = el.style.paddingBottom;
      storedMarginTop = el.style.marginTop;
      storedMarginBottom = el.style.marginBottom;
      storedHeight = el.style.height;
      el.style.overflow = "hidden";
    },
    duration,
    element,
    advance: (progress) => {
      element.style.paddingTop = `${paddingTop - paddingTop * progress}px`;
      element.style.paddingBottom = `${paddingBottom - paddingBottom * progress}px`;
      element.style.marginTop = `${marginTop - marginTop * progress}px`;
      element.style.marginBottom = `${marginBottom - marginBottom * progress}px`;
      element.style.height = `${height - height * progress}px`;
    }
  });
  animation.promise().then((reason) => {
    if (!(reason instanceof Error)) {
      element.style.overflow = storedOverflow;
      element.style.paddingTop = storedPaddingTop;
      element.style.paddingBottom = storedPaddingBottom;
      element.style.marginTop = storedMarginTop;
      element.style.marginBottom = storedMarginBottom;
      element.style.height = storedHeight;
      element.style.display = "none";
    }
  });
  return animation;
};
var slideUp_default = slideUp;

// node_modules/@ui5/webcomponents-icons/dist/v4/slim-arrow-up.js
var name = "slim-arrow-up";
var pathData = "M261.5 197q-6-6-11 0l-160 160q-5 5-11.5 5t-11.5-5-5-11.5 5-11.5l166-165q9-9 22-9t23 9l165 165q5 5 5 11t-5 11q-12 12-23 0z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/slim-arrow-up.js
var name2 = "slim-arrow-up";
var pathData2 = "M96 326q0-10 7-17l135-141q6-8 18-8 11 0 19 8l134 141q7 7 7 17 0 11-7.5 18.5T390 352q-10 0-18-8L256 223 140 344q-8 8-18 8-11 0-18.5-7.5T96 326z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/slim-arrow-up.js
var slim_arrow_up_default = "slim-arrow-up";

// node_modules/@ui5/webcomponents-icons/dist/v4/slim-arrow-down.js
var name3 = "slim-arrow-down";
var pathData3 = "M420.5 187q11-12 23 0 5 5 5 11t-5 11l-165 165q-10 9-23 9t-22-9l-166-165q-5-5-5-11.5t5-11.5 11.5-5 11.5 5l160 160q5 6 11 0z";
var ltr3 = false;
var collection3 = "SAP-icons-v4";
var packageName3 = "@ui5/webcomponents-icons";
registerIcon(name3, { pathData: pathData3, ltr: ltr3, collection: collection3, packageName: packageName3 });

// node_modules/@ui5/webcomponents-icons/dist/v5/slim-arrow-down.js
var name4 = "slim-arrow-down";
var pathData4 = "M96 186q0-11 7.5-18.5T122 160q10 0 18 8l116 121 116-121q8-8 18-8 11 0 18.5 7.5T416 186q0 10-7 17L275 344q-8 8-19 8-12 0-18-8L103 203q-7-7-7-17z";
var ltr4 = false;
var collection4 = "SAP-icons-v5";
var packageName4 = "@ui5/webcomponents-icons";
registerIcon(name4, { pathData: pathData4, ltr: ltr4, collection: collection4, packageName: packageName4 });

// node_modules/@ui5/webcomponents-icons/dist/slim-arrow-down.js
var slim_arrow_down_default = "slim-arrow-down";

// node_modules/@ui5/webcomponents-base/dist/util/dragAndDrop/longDragOverHandler.js
var lastTarget = null;
var lastTargetDragOverStart = Date.now();
var LONG_DRAG_OVER_THRESHOLD = 300;
var longDragOverHandler = (targetsSelector) => {
  return (target, propertyKey, descriptor) => {
    const origHandler = descriptor.value;
    descriptor.value = function handleDragOver(e) {
      let isLongDragOver = false;
      if (e.target instanceof HTMLElement) {
        const currentTarget = e.target.closest(targetsSelector);
        if (currentTarget === lastTarget && Date.now() - lastTargetDragOverStart >= LONG_DRAG_OVER_THRESHOLD) {
          isLongDragOver = true;
        } else if (currentTarget !== lastTarget) {
          lastTarget = currentTarget;
          lastTargetDragOverStart = Date.now();
        }
      }
      origHandler.apply(this, [e, isLongDragOver]);
    };
    return descriptor;
  };
};
var longDragOverHandler_default = longDragOverHandler;

// node_modules/@ui5/webcomponents/dist/types/TabContainerTabsPlacement.js
var TabContainerTabsPlacement;
(function(TabContainerTabsPlacement2) {
  TabContainerTabsPlacement2["Top"] = "Top";
  TabContainerTabsPlacement2["Bottom"] = "Bottom";
})(TabContainerTabsPlacement || (TabContainerTabsPlacement = {}));
var TabContainerTabsPlacement_default = TabContainerTabsPlacement;

// node_modules/@ui5/webcomponents/dist/types/SemanticColor.js
var SemanticColor;
(function(SemanticColor2) {
  SemanticColor2["Default"] = "Default";
  SemanticColor2["Positive"] = "Positive";
  SemanticColor2["Negative"] = "Negative";
  SemanticColor2["Critical"] = "Critical";
  SemanticColor2["Neutral"] = "Neutral";
})(SemanticColor || (SemanticColor = {}));
var SemanticColor_default = SemanticColor;

// node_modules/@ui5/webcomponents/dist/types/TabLayout.js
var TabLayout;
(function(TabLayout2) {
  TabLayout2["Inline"] = "Inline";
  TabLayout2["Standard"] = "Standard";
})(TabLayout || (TabLayout = {}));
var TabLayout_default = TabLayout;

// node_modules/@ui5/webcomponents/dist/types/OverflowMode.js
var OverflowMode;
(function(OverflowMode2) {
  OverflowMode2["End"] = "End";
  OverflowMode2["StartAndEnd"] = "StartAndEnd";
})(OverflowMode || (OverflowMode = {}));
var OverflowMode_default = OverflowMode;

// node_modules/@ui5/webcomponents/dist/generated/templates/TabContainerTemplate.lit.js
function block0(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="${classMap(this.classes.root)}">${this.tabsAtTheBottom ? block1.call(this, context, tags, suffix) : void 0}<div class="${classMap(this.classes.header)}" id="${ifDefined(this._id)}-header" @focusin="${this._onHeaderFocusin}" @dragstart="${this._onDragStart}" @dragenter="${this._onHeaderDragEnter}" @dragover="${this._onHeaderDragOver}" @drop="${this._onHeaderDrop}" @dragleave="${this._onHeaderDragLeave}" part="tabstrip"><div class="ui5-tc__overflow ui5-tc__overflow--start" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.startOverflowButton.length ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}</div><div id="${ifDefined(this._id)}-tabStrip" class="${classMap(this.classes.tabStrip)}" role="tablist" aria-describedby="${ifDefined(this.tablistAriaDescribedById)}" @click="${this._onTabStripClick}" @keydown="${this._onTabStripKeyDown}" @keyup="${this._onTabStripKeyUp}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}</div><div class="ui5-tc__overflow ui5-tc__overflow--end" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.overflowButton.length ? block6.call(this, context, tags, suffix) : block7.call(this, context, tags, suffix)}</div><${scopeTag("ui5-drop-indicator", tags, suffix)} orientation="Vertical" .ownerReference="${ifDefined(this)}"></${scopeTag("ui5-drop-indicator", tags, suffix)}></div>${!this.tabsAtTheBottom ? block8.call(this, context, tags, suffix) : void 0}${this.hasItems ? block10.call(this, context, tags, suffix) : void 0}</div><${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-overflowMenu" horizontal-align="End" placement="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover" @dragstart="${this._onDragStart}"><${scopeTag("ui5-list", tags, suffix)} selection-mode="Single" separators="None" @ui5-item-click="${ifDefined(this._onOverflowListItemClick)}" @ui5-move-over="${ifDefined(this._onPopoverListMoveOver)}" @ui5-move="${ifDefined(this._onPopoverListMove)}">${repeat(this._popoverItemsFlat, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}><div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closePopover}">${ifDefined(this.popoverCancelButtonText)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : effectiveHtml`<div class="${classMap(this.classes.root)}">${this.tabsAtTheBottom ? block1.call(this, context, tags, suffix) : void 0}<div class="${classMap(this.classes.header)}" id="${ifDefined(this._id)}-header" @focusin="${this._onHeaderFocusin}" @dragstart="${this._onDragStart}" @dragenter="${this._onHeaderDragEnter}" @dragover="${this._onHeaderDragOver}" @drop="${this._onHeaderDrop}" @dragleave="${this._onHeaderDragLeave}" part="tabstrip"><div class="ui5-tc__overflow ui5-tc__overflow--start" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.startOverflowButton.length ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}</div><div id="${ifDefined(this._id)}-tabStrip" class="${classMap(this.classes.tabStrip)}" role="tablist" aria-describedby="${ifDefined(this.tablistAriaDescribedById)}" @click="${this._onTabStripClick}" @keydown="${this._onTabStripKeyDown}" @keyup="${this._onTabStripKeyUp}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}</div><div class="ui5-tc__overflow ui5-tc__overflow--end" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.overflowButton.length ? block6.call(this, context, tags, suffix) : block7.call(this, context, tags, suffix)}</div><ui5-drop-indicator orientation="Vertical" .ownerReference="${ifDefined(this)}"></ui5-drop-indicator></div>${!this.tabsAtTheBottom ? block8.call(this, context, tags, suffix) : void 0}${this.hasItems ? block10.call(this, context, tags, suffix) : void 0}</div><ui5-responsive-popover id="${ifDefined(this._id)}-overflowMenu" horizontal-align="End" placement="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover" @dragstart="${this._onDragStart}"><ui5-list selection-mode="Single" separators="None" @ui5-item-click="${ifDefined(this._onOverflowListItemClick)}" @ui5-move-over="${ifDefined(this._onPopoverListMoveOver)}" @ui5-move="${ifDefined(this._onPopoverListMove)}">${repeat(this._popoverItemsFlat, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}</ui5-list><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closePopover}">${ifDefined(this.popoverCancelButtonText)}</ui5-button></div></ui5-responsive-popover>`;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.content)}" part="content"><div class="ui5-tc__contentItem" id="ui5-tc-content" ?hidden="${this._selectedTab?.effectiveHidden}" role="tabpanel" aria-labelledby="${ifDefined(this._selectedTab?._id)}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</div></div>`;
}
function block2(context, tags, suffix, item, index) {
  return effectiveHtml`<slot name="${ifDefined(item._effectiveSlotName)}"></slot>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<slot name="startOverflowButton"></slot>`;
}
function block4(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} end-icon="${ifDefined(this.overflowMenuIcon)}" data-ui5-stable="overflow-start" tabindex="-1" tooltip="${ifDefined(this.overflowMenuTitle)}" .accessibilityAttributes="${ifDefined(this.overflowBtnAccessibilityAttributes)}">${ifDefined(this._startOverflowText)}</${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button end-icon="${ifDefined(this.overflowMenuIcon)}" data-ui5-stable="overflow-start" tabindex="-1" tooltip="${ifDefined(this.overflowMenuTitle)}" .accessibilityAttributes="${ifDefined(this.overflowBtnAccessibilityAttributes)}">${ifDefined(this._startOverflowText)}</ui5-button>`;
}
function block5(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item.stripPresentation)}`;
}
function block6(context, tags, suffix) {
  return effectiveHtml`<slot name="overflowButton"></slot>`;
}
function block7(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} end-icon="${ifDefined(this.overflowMenuIcon)}" data-ui5-stable="overflow-end" tabindex="-1" tooltip="${ifDefined(this.overflowMenuTitle)}" .accessibilityAttributes="${ifDefined(this.overflowBtnAccessibilityAttributes)}">${ifDefined(this._endOverflowText)}</${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button end-icon="${ifDefined(this.overflowMenuIcon)}" data-ui5-stable="overflow-end" tabindex="-1" tooltip="${ifDefined(this.overflowMenuTitle)}" .accessibilityAttributes="${ifDefined(this.overflowBtnAccessibilityAttributes)}">${ifDefined(this._endOverflowText)}</ui5-button>`;
}
function block8(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.content)}" part="content"><div class="ui5-tc__contentItem" id="ui5-tc-content" ?hidden="${this._selectedTab?.effectiveHidden}" role="tabpanel" aria-labelledby="${ifDefined(this._selectedTab?._id)}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block9.call(this, context, tags, suffix, item, index))}</div></div>`;
}
function block9(context, tags, suffix, item, index) {
  return effectiveHtml`<slot name="${ifDefined(item._effectiveSlotName)}"></slot>`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this.accInvisibleText)}</span>`;
}
function block11(context, tags, suffix, item, index) {
  return effectiveHtml`${ifDefined(item.overflowPresentation)}`;
}
var TabContainerTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/TabContainer.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/TabContainer.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;width:100%}.ui5-tc-root{display:flex;flex-direction:column;width:100%;height:100%;font-family:"72override",var(--sapFontFamily);font-size:1rem}.ui5-tc__header{position:relative;display:flex;align-items:center;background-color:var(--_ui5-v2-0-1_tc_header_background);--ui5-v2-0-1_tc_header_active_background_color: var(--_ui5-v2-0-1_tc_header_background);height:var(--_ui5-v2-0-1_tc_header_height);box-shadow:var(--_ui5-v2-0-1_tc_header_box_shadow);box-sizing:border-box}:host([tabs-placement="Bottom"]) .ui5-tc__header{border-top:var(--_ui5-v2-0-1_tc_header_border_bottom)}:host([header-background-design="Transparent"]) .ui5-tc__header{background-color:transparent;--ui5-v2-0-1_tc_header_active_background_color: transparent}:host([header-background-design="Translucent"]) .ui5-tc__header{background-color:var(--_ui5-v2-0-1_tc_header_background_translucent);--ui5-v2-0-1_tc_header_active_background_color: var(--_ui5-v2-0-1_tc_header_background_translucent)}.ui5-tc-root.ui5-tc--textOnly .ui5-tc__header{height:var(--_ui5-v2-0-1_tc_header_height_text_only)}.ui5-tc-root.ui5-tc--textOnly.ui5-tc--withAdditionalText.ui5-tc--standardTabLayout .ui5-tc__header{height:var(--_ui5-v2-0-1_tc_header_height_text_with_additional_text)}.ui5-tc__tabStrip{flex:1;display:flex;overflow:hidden;box-sizing:border-box;position:relative;white-space:nowrap}.ui5-tc__separator:focus{outline:none}.ui5-tc__overflow{flex:0 0 0}.ui5-tc__overflow.ui5-tc__overflow--end{padding-inline-start:.188rem;margin-inline-end:1rem}.ui5-tc__overflow.ui5-tc__overflow--start{margin-inline-start:1rem}.ui5-tc__overflow[hidden]{display:none}.ui5-tc__overflow>[ui5-button]{border-radius:.75rem;height:1.5rem}.ui5-tc__overflow>[ui5-button]:not([active]){color:var(--_ui5-v2-0-1_tc_overflow_text_color)}.ui5-tc__overflow>[ui5-button]:not([active]):hover{color:var(--_ui5-v2-0-1_tc_overflow_text_color)}.ui5-tc__overflow>[ui5-button][focused]{outline-offset:.125rem;--_ui5-v2-0-1_button_focused_border: none;outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-tc-root.ui5-tc--textOnly .ui5-tc__content{height:calc(100% - var(--_ui5-v2-0-1_tc_header_height_text_only))}.ui5-tc__content{position:relative;display:flex;height:calc(100% - var(--_ui5-v2-0-1_tc_header_height));background-color:var(--_ui5-v2-0-1_tc_content_background);border-bottom:var(--_ui5-v2-0-1_tc_content_border_bottom);box-sizing:border-box}:host([tabs-placement="Bottom"]) .ui5-tc__content{border-top:var(--_ui5-v2-0-1_tc_content_border_bottom)}:host([content-background-design="Transparent"]) .ui5-tc__content{background-color:transparent}:host([content-background-design="Translucent"]) .ui5-tc__content{background-color:var(--_ui5-v2-0-1_tc_content_background_translucent)}.ui5-tc__content--collapsed{display:none}.ui5-tc--transparent .ui5-tc__content{background-color:transparent}.ui5-tc__contentItem{max-height:100%;display:flex;flex-grow:1;overflow:auto}.ui5-tc__contentItem[hidden]{display:none}.ui5-tc__header{padding:0}.ui5-tc__content{padding:1rem}:host([media-range="M"]) .ui5-tc__header,:host([media-range="L"]) .ui5-tc__header{padding:0 1rem}:host([media-range="M"]) .ui5-tc__content,:host([media-range="L"]) .ui5-tc__content{padding:1rem 2rem}:host([media-range="XL"]) .ui5-tc__header{padding:0 2rem}:host([media-range="XL"]) .ui5-tc__content{padding:1rem 3rem}
` };
var TabContainer_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/TabContainer.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TabContainer_1;
var tabStyles = [];
var PAGE_UP_DOWN_SIZE = 5;
var TabContainer = TabContainer_1 = class TabContainer2 extends UI5Element_default {
  static registerTabStyles(styles) {
    tabStyles.push(styles);
  }
  constructor() {
    super();
    this.collapsed = false;
    this.tabLayout = "Standard";
    this.overflowMode = "End";
    this.headerBackgroundDesign = "Solid";
    this.contentBackgroundDesign = "Solid";
    this.tabsPlacement = "Top";
    this._animationRunning = false;
    this._contentCollapsed = false;
    this._startOverflowText = "0";
    this._endOverflowText = "More";
    this._popoverItemsFlat = [];
    this._itemsFlat = [];
    this._hasScheduledPopoverOpen = false;
    this._handleResizeBound = this._handleResize.bind(this);
    this._itemNavigation = new ItemNavigation_default(this, {
      getItemsCallback: () => this._getFocusableRefs(),
      skipItemsSize: PAGE_UP_DOWN_SIZE
    });
  }
  onBeforeRendering() {
    this._itemsFlat = this._flatten(this.items);
    if (!this._itemsFlat.length) {
      return;
    }
    const selectedTab = this._itemsFlat.find((tab) => !tab.isSeparator && tab.selected);
    if (selectedTab) {
      this._selectedTab = selectedTab;
    } else {
      this._selectedTab = this._itemsFlat[0];
    }
    walk(this.items, (item) => {
      if (!item.isSeparator) {
        item._selectedTabReference = this._selectedTab;
      }
    });
    this._sendStripPresentationInfos(this.items);
    if (!this._animationRunning) {
      this._contentCollapsed = this.collapsed;
    }
  }
  onAfterRendering() {
    if (!this.items.length) {
      return;
    }
    this._setItemsForStrip();
    if (!this.shadowRoot.contains(document.activeElement)) {
      const focusStart = this._getRootTab(this._selectedTab);
      if (focusStart) {
        this._itemNavigation.setCurrentItem(focusStart);
      }
    }
    if (this.responsivePopover?.open) {
      const popoverItems = this._getPopoverItemsFor(this._getPopoverOwner(this.responsivePopover.opener));
      if (popoverItems.length) {
        this._setPopoverItems(popoverItems);
      } else {
        this._closePopover();
      }
    }
  }
  onEnterDOM() {
    ResizeHandler_default.register(this._getHeader(), this._handleResizeBound);
    DragRegistry_default.subscribe(this);
    this._setDraggedElement = DragRegistry_default.addSelfManagedArea(this);
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
  }
  onExitDOM() {
    ResizeHandler_default.deregister(this._getHeader(), this._handleResizeBound);
    DragRegistry_default.unsubscribe(this);
    DragRegistry_default.removeSelfManagedArea(this);
    this._setDraggedElement = void 0;
  }
  _handleResize() {
    if (this.responsivePopover && this.responsivePopover.open) {
      this._closePopover();
    }
    this._width = this.offsetWidth;
    this._updateMediaRange(this._width);
  }
  _updateMediaRange(width) {
    this.mediaRange = MediaRange_default.getCurrentRange(MediaRange_default.RANGESETS.RANGE_4STEPS, width);
  }
  _sendStripPresentationInfos(items) {
    const setsize = this._getTabs().length;
    let posinset = 1;
    items.forEach((item) => {
      let info = {
        getElementInStrip: () => this.getDomRef().querySelector(`[id="${item._id}"]`)
      };
      if (!item.isSeparator) {
        info = __spreadProps(__spreadValues({}, info), {
          isInline: this.tabLayout === TabLayout_default.Inline,
          mixedMode: this.mixedMode,
          posinset,
          setsize,
          isTopLevelTab: items.some((i) => i === item)
        });
        posinset++;
      }
      item.receiveStripInfo(info);
    });
  }
  _onHeaderFocusin(e) {
    const tab = getTabInStrip(e.target);
    if (tab) {
      this._itemNavigation.setCurrentItem(tab.realTabReference);
    }
  }
  _onDragStart(e) {
    if (!e.dataTransfer || !(e.target instanceof HTMLElement)) {
      return;
    }
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
    this._setDraggedElement(e.target.realTabReference);
  }
  _onHeaderDragEnter(e) {
    e.preventDefault();
  }
  _onHeaderDragOver(e, isLongDragOver) {
    if (!(e.target instanceof HTMLElement) || !e.target.closest("[data-ui5-stable=overflow-start],[data-ui5-stable=overflow-end],[role=tab],[role=separator]")) {
      this.dropIndicatorDOM.targetReference = null;
      return;
    }
    const draggedElement = DragRegistry_default.getDraggedElement();
    const closestPosition = findClosestPosition_default([...this._getTabStrip().querySelectorAll(`[role="tab"]:not([hidden])`)], e.clientX, Orientation_default.Horizontal);
    const overflowButton = e.target.closest("[data-ui5-stable=overflow-start],[data-ui5-stable=overflow-end]");
    let popoverTarget = null;
    if (overflowButton) {
      popoverTarget = overflowButton;
      e.preventDefault();
    } else if (closestPosition) {
      const dropTarget = closestPosition.element.realTabReference;
      let placements = closestPosition.placements;
      if (dropTarget === draggedElement) {
        placements = placements.filter((placement) => placement !== MovePlacement_default.On);
      }
      const acceptedPlacement = placements.find((placement) => {
        const dragOverPrevented = !this.fireEvent("move-over", {
          source: {
            element: draggedElement
          },
          destination: {
            element: dropTarget,
            placement
          }
        }, true);
        if (dragOverPrevented) {
          e.preventDefault();
          this.dropIndicatorDOM.targetReference = closestPosition.element;
          this.dropIndicatorDOM.placement = placement;
          return true;
        }
        return false;
      });
      if (acceptedPlacement === MovePlacement_default.On && closestPosition.element.realTabReference.items.length) {
        popoverTarget = closestPosition.element;
      } else if (!acceptedPlacement) {
        this.dropIndicatorDOM.targetReference = null;
      }
    }
    if (popoverTarget && isLongDragOver) {
      this._showPopoverAt(popoverTarget, false, true);
    } else {
      this._closePopover();
    }
  }
  _onHeaderDrop(e) {
    if (e.target === this._getStartOverflowBtnDOM() || e.target === this._getEndOverflowBtnDOM()) {
      return;
    }
    e.preventDefault();
    const draggedElement = DragRegistry_default.getDraggedElement();
    this.fireEvent("move", {
      source: {
        element: draggedElement
      },
      destination: {
        element: this.dropIndicatorDOM.targetReference.realTabReference,
        placement: this.dropIndicatorDOM.placement
      }
    });
    this.dropIndicatorDOM.targetReference = null;
    draggedElement.focus();
  }
  _onHeaderDragLeave(e) {
    if (e.relatedTarget instanceof Node && this.shadowRoot.contains(e.relatedTarget)) {
      return;
    }
    this.dropIndicatorDOM.targetReference = null;
  }
  _onPopoverListMoveOver(e) {
    const { destination } = e.detail;
    const draggedElement = DragRegistry_default.getDraggedElement();
    const dropTarget = destination.element.realTabReference;
    if (destination.placement === MovePlacement_default.On && (dropTarget.isSeparator || draggedElement === dropTarget)) {
      return;
    }
    if (draggedElement !== dropTarget && draggedElement.contains(dropTarget)) {
      return;
    }
    const placementAccepted = !this.fireEvent("move-over", {
      source: {
        element: draggedElement
      },
      destination: {
        element: dropTarget,
        placement: destination.placement
      }
    }, true);
    if (placementAccepted) {
      e.preventDefault();
    } else {
      this.dropIndicatorDOM.targetReference = null;
    }
  }
  _onPopoverListMove(e) {
    const { destination } = e.detail;
    const draggedElement = DragRegistry_default.getDraggedElement();
    e.preventDefault();
    this.fireEvent("move", {
      source: {
        element: draggedElement
      },
      destination: {
        element: destination.element.realTabReference,
        placement: destination.placement
      }
    }, true);
    this.dropIndicatorDOM.targetReference = null;
    draggedElement.focus();
  }
  _onTabStripClick(e) {
    return __async(this, null, function* () {
      const tab = getTabInStrip(e.target);
      if (!tab || tab.realTabReference.disabled) {
        return;
      }
      e.stopPropagation();
      e.preventDefault();
      if (e.target.hasAttribute("ui5-button")) {
        this._onTabExpandButtonClick(e);
        return;
      }
      if (!tab.realTabReference.hasOwnContent && tab.realTabReference.tabs.length) {
        yield this._togglePopover(tab);
        return;
      }
      this._onHeaderItemSelect(tab);
    });
  }
  _onTabExpandButtonClick(e) {
    return __async(this, null, function* () {
      e.stopPropagation();
      e.preventDefault();
      let tabInstance;
      if (isTabInStrip(e.target)) {
        tabInstance = e.target;
      } else {
        tabInstance = getTabInStrip(e.target);
      }
      if (tabInstance) {
        tabInstance.focus();
      }
      let opener = e.target;
      if (e.type === "keydown" && !e.target.realTabReference.isSingleClickArea) {
        opener = e.target.querySelector(".ui5-tab-expand-button [ui5-button]");
      }
      if (!tabInstance) {
        this._onHeaderItemSelect(opener.parentElement);
        return;
      }
      yield this._togglePopover(opener, true);
    });
  }
  _setPopoverInitialFocus() {
    const selectedTabInOverflow = this._getSelectedTabInOverflow();
    const tab = selectedTabInOverflow || this._getFirstFocusableItemInOverflow();
    this.responsivePopover.initialFocus = `${tab.realTabReference._id}-li`;
  }
  _getSelectedTabInOverflow() {
    return this.responsivePopover.content[0].items.find((item) => {
      return item.realTabReference && item.realTabReference.selected;
    });
  }
  _getFirstFocusableItemInOverflow() {
    return this.responsivePopover.content[0].items.find((item) => item.classList.contains("ui5-tab-overflow-item"));
  }
  _findTabInOverflow(realTab) {
    if (!this.responsivePopover.open) {
      return void 0;
    }
    return this.responsivePopover.content[0].items.find((item) => item.realTabReference === realTab);
  }
  _onTabStripKeyDown(e) {
    const tab = getTabInStrip(e.target);
    if (!tab || tab.realTabReference.disabled) {
      return;
    }
    if (isEnter(e)) {
      if (tab.realTabReference.isSingleClickArea) {
        this._onTabStripClick(e);
      } else {
        this._onHeaderItemSelect(tab);
      }
    }
    if (isSpace(e)) {
      e.preventDefault();
    }
    if (isDown(e) || isUp(e)) {
      if (tab.realTabReference.requiresExpandButton) {
        this._onTabExpandButtonClick(e);
      }
      if (tab.realTabReference.isSingleClickArea) {
        this._onTabStripClick(e);
      }
    }
  }
  _onTabStripKeyUp(e) {
    const tab = getTabInStrip(e.target);
    if (!tab || tab.realTabReference.disabled) {
      return;
    }
    if (isSpace(e)) {
      e.preventDefault();
      if (tab.realTabReference.isSingleClickArea) {
        this._onTabStripClick(e);
      } else {
        this._onHeaderItemSelect(tab);
      }
    }
  }
  _onHeaderItemSelect(tab) {
    if (!tab.hasAttribute("disabled")) {
      this._onItemSelect(tab.id);
    }
  }
  _onOverflowListItemClick(e) {
    return __async(this, null, function* () {
      e.preventDefault();
      this._onItemSelect(e.detail.item.id.slice(0, -3));
      this._closePopover();
      yield renderFinished();
      const selectedTopLevel = this._getRootTab(this._selectedTab);
      selectedTopLevel?.getDomRefInStrip().focus();
    });
  }
  /**
   * Returns all slotted tabs and their subTabs in a flattened array.
   * The order of tabs is depth-first.
   *
   * @public
   * @default []
   */
  get allItems() {
    return this._flatten(this.items);
  }
  _flatten(items) {
    const result = [];
    walk(items, (item) => {
      if (item.hasAttribute("ui5-tab") || item.hasAttribute("ui5-tab-separator")) {
        result.push(item);
      }
    });
    return result;
  }
  _onItemSelect(selectedTabId) {
    const selectedTabIndex = this._itemsFlat.findIndex((item) => item.__id === selectedTabId);
    const selectedTab = this._itemsFlat[selectedTabIndex];
    const selectionSuccessful = this.selectTab(selectedTab, selectedTabIndex);
    if (!selectionSuccessful) {
      return;
    }
    this._itemsFlat.forEach((item) => {
      if (!item.isSeparator) {
        item.selected = item === selectedTab;
      }
    });
  }
  /**
   * Fires the `tab-select` event and changes the internal reference for the currently selected tab.
   * If the event is prevented, the current tab is not changed.
   * @private
   * @param selectedTab selected tab instance
   * @param selectedTabIndex selected tab index for an array containing all tabs and sub tabs. **Note:** Use the method `allTabs` to get this array.
   * @returns true if the tab selection is successful, false if it was prevented
   */
  selectTab(selectedTab, selectedTabIndex) {
    if (!this.fireEvent("tab-select", { tab: selectedTab, tabIndex: selectedTabIndex }, true)) {
      return false;
    }
    this._selectedTab = selectedTab;
    return true;
  }
  slideContentDown(element) {
    return slideDown_default(element).promise();
  }
  slideContentUp(element) {
    return slideUp_default(element).promise();
  }
  _onOverflowClick(e) {
    return __async(this, null, function* () {
      if (e.target.classList.contains("ui5-tc__overflow")) {
        return;
      }
      const overflow = e.currentTarget;
      const isEndOverflow = overflow.classList.contains("ui5-tc__overflow--end");
      let opener;
      if (isEndOverflow) {
        opener = this.overflowButton[0] || this._getEndOverflowBtnDOM();
      } else {
        opener = this.startOverflowButton[0] || this._getStartOverflowBtnDOM();
      }
      yield this._togglePopover(opener, true);
    });
  }
  _sendOverflowPresentationInfos(items) {
    const extraIndent = items.filter((item) => !item.isSeparator).some((tab) => tab.design !== SemanticColor_default.Default && tab.design !== SemanticColor_default.Neutral);
    walk(items, (item, level) => {
      item.receiveOverflowInfo({
        getElementInOverflow: () => {
          return this._findTabInOverflow(item);
        },
        style: {
          [getScopedVarName("--_ui5-tab-indentation-level")]: item.isSeparator ? level + 1 : level,
          [getScopedVarName("--_ui5-tab-extra-indent")]: extraIndent ? 1 : null
        }
      });
    });
  }
  _onOverflowKeyDown(e) {
    return __async(this, null, function* () {
      const overflow = e.currentTarget;
      const isEndOverflow = overflow.classList.contains("ui5-tc__overflow--end");
      const isStartOverflow = overflow.classList.contains("ui5-tc__overflow--start");
      if (isDown(e) || isStartOverflow && isLeft(e) || isEndOverflow && isRight(e)) {
        e.stopPropagation();
        e.preventDefault();
        yield this._onOverflowClick(e);
      }
    });
  }
  _setItemsForStrip() {
    const tabStrip = this._getTabStrip();
    let allItemsWidth = 0;
    if (!this._selectedTab) {
      return;
    }
    const itemsDomRefs = this.items.map((item) => item.getDomRefInStrip());
    this._getStartOverflow().setAttribute("hidden", "");
    this._getEndOverflow().setAttribute("hidden", "");
    for (let i = 0; i < itemsDomRefs.length; i++) {
      itemsDomRefs[i].removeAttribute("hidden");
      itemsDomRefs[i].removeAttribute("start-overflow");
      itemsDomRefs[i].removeAttribute("end-overflow");
    }
    itemsDomRefs.forEach((item) => {
      allItemsWidth += this._getItemWidth(item);
    });
    const hasOverflow = tabStrip.offsetWidth < allItemsWidth;
    if (!hasOverflow) {
      return;
    }
    if (this.isModeStartAndEnd) {
      this._updateStartAndEndOverflow(itemsDomRefs);
      this._updateOverflowCounters();
    } else {
      this._updateEndOverflow(itemsDomRefs);
    }
  }
  _getRootTab(tab) {
    while (tab?.hasAttribute("ui5-tab")) {
      if (tab.parentElement.hasAttribute("ui5-tabcontainer")) {
        break;
      }
      tab = tab.parentElement;
    }
    return tab;
  }
  _updateEndOverflow(itemsDomRefs) {
    this._getEndOverflow().removeAttribute("hidden");
    const selectedTab = this._getRootTab(this._selectedTab);
    const selectedTabDomRef = selectedTab?.getDomRefInStrip();
    const containerWidth = this._getTabStrip().offsetWidth;
    const selectedItemIndexAndWidth = this._getSelectedItemIndexAndWidth(itemsDomRefs, selectedTabDomRef);
    const lastVisibleTabIndex = this._findLastVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width);
    for (let i = lastVisibleTabIndex + 1; i < itemsDomRefs.length; i++) {
      itemsDomRefs[i].setAttribute("hidden", "");
      itemsDomRefs[i].setAttribute("end-overflow", "");
    }
    this._endOverflowText = this.overflowButtonText;
  }
  _updateStartAndEndOverflow(itemsDomRefs) {
    let containerWidth = this._getTabStrip().offsetWidth;
    const selectedTab = this._getRootTab(this._selectedTab);
    const selectedTabDomRef = selectedTab?.getDomRefInStrip();
    const selectedItemIndexAndWidth = this._getSelectedItemIndexAndWidth(itemsDomRefs, selectedTabDomRef);
    const hasStartOverflow = this._hasStartOverflow(containerWidth, itemsDomRefs, selectedItemIndexAndWidth);
    const hasEndOverflow = this._hasEndOverflow(containerWidth, itemsDomRefs, selectedItemIndexAndWidth);
    let firstVisible;
    let lastVisible;
    if (!hasStartOverflow) {
      this._getEndOverflow().removeAttribute("hidden");
      containerWidth = this._getTabStrip().offsetWidth;
      lastVisible = this._findLastVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width);
      for (let i = lastVisible + 1; i < itemsDomRefs.length; i++) {
        itemsDomRefs[i].setAttribute("hidden", "");
        itemsDomRefs[i].setAttribute("end-overflow", "");
      }
      return;
    }
    if (!hasEndOverflow) {
      this._getStartOverflow().removeAttribute("hidden");
      containerWidth = this._getTabStrip().offsetWidth;
      firstVisible = this._findFirstVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width);
      for (let i = firstVisible - 1; i >= 0; i--) {
        itemsDomRefs[i].setAttribute("hidden", "");
        itemsDomRefs[i].setAttribute("start-overflow", "");
      }
      return;
    }
    this._getStartOverflow().removeAttribute("hidden");
    this._getEndOverflow().removeAttribute("hidden");
    containerWidth = this._getTabStrip().offsetWidth;
    firstVisible = this._findFirstVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width, selectedItemIndexAndWidth.index - 1);
    lastVisible = this._findLastVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width, firstVisible);
    for (let i = firstVisible - 1; i >= 0; i--) {
      itemsDomRefs[i].setAttribute("hidden", "");
      itemsDomRefs[i].setAttribute("start-overflow", "");
    }
    for (let i = lastVisible + 1; i < itemsDomRefs.length; i++) {
      itemsDomRefs[i].setAttribute("hidden", "");
      itemsDomRefs[i].setAttribute("end-overflow", "");
    }
  }
  _hasStartOverflow(containerWidth, itemsDomRefs, selectedItemIndexAndWidth) {
    if (selectedItemIndexAndWidth.index === 0) {
      return false;
    }
    let leftItemsWidth = 0;
    for (let i = selectedItemIndexAndWidth.index - 1; i >= 0; i--) {
      leftItemsWidth += this._getItemWidth(itemsDomRefs[i]);
    }
    let hasStartOverflow = containerWidth < leftItemsWidth + selectedItemIndexAndWidth.width;
    if (!hasStartOverflow) {
      this._getEndOverflow().removeAttribute("hidden");
      containerWidth = this._getTabStrip().offsetWidth;
      hasStartOverflow = containerWidth < leftItemsWidth + selectedItemIndexAndWidth.width;
      this._getEndOverflow().setAttribute("hidden", "");
    }
    return hasStartOverflow;
  }
  _hasEndOverflow(containerWidth, itemsDomRefs, selectedItemIndexAndWidth) {
    if (selectedItemIndexAndWidth.index >= itemsDomRefs.length) {
      return false;
    }
    let rightItemsWidth = 0;
    for (let i = selectedItemIndexAndWidth.index; i < itemsDomRefs.length; i++) {
      rightItemsWidth += this._getItemWidth(itemsDomRefs[i]);
    }
    let hasEndOverflow = containerWidth < rightItemsWidth + selectedItemIndexAndWidth.width;
    if (!hasEndOverflow) {
      this._getStartOverflow().removeAttribute("hidden");
      containerWidth = this._getTabStrip().offsetWidth;
      hasEndOverflow = containerWidth < rightItemsWidth + selectedItemIndexAndWidth.width;
      this._getStartOverflow().setAttribute("hidden", "");
    }
    return hasEndOverflow;
  }
  _getItemWidth(itemDomRef) {
    const styles = window.getComputedStyle(itemDomRef);
    const margins = Number.parseInt(styles.marginLeft) + Number.parseInt(styles.marginRight);
    return itemDomRef.offsetWidth + margins;
  }
  _getSelectedItemIndexAndWidth(itemsDomRefs, selectedTabDomRef) {
    if (!selectedTabDomRef) {
      return {
        index: 0,
        width: 0
      };
    }
    let index = itemsDomRefs.indexOf(selectedTabDomRef);
    let width = selectedTabDomRef.offsetWidth;
    let selectedSeparator;
    if (itemsDomRefs[index - 1] && itemsDomRefs[index - 1].realTabReference.isSeparator) {
      selectedSeparator = itemsDomRefs[index - 1];
      width += this._getItemWidth(selectedSeparator);
    }
    itemsDomRefs.splice(index, 1);
    if (selectedSeparator) {
      itemsDomRefs.splice(index - 1, 1);
      index--;
    }
    return {
      index,
      width
    };
  }
  _findFirstVisibleItem(itemsDomRefs, containerWidth, selectedItemWidth, startIndex) {
    if (startIndex === void 0) {
      startIndex = itemsDomRefs.length - 1;
    }
    let lastVisible = startIndex + 1;
    for (let index = startIndex; index >= 0; index--) {
      const itemWidth = this._getItemWidth(itemsDomRefs[index]);
      if (containerWidth < selectedItemWidth + itemWidth) {
        break;
      }
      selectedItemWidth += itemWidth;
      lastVisible = index;
    }
    return lastVisible;
  }
  _findLastVisibleItem(itemsDomRefs, containerWidth, selectedItemWidth, startIndex = 0) {
    let lastVisibleIndex = startIndex - 1;
    let index = startIndex;
    for (; index < itemsDomRefs.length; index++) {
      const itemWidth = this._getItemWidth(itemsDomRefs[index]);
      if (containerWidth < selectedItemWidth + itemWidth) {
        break;
      }
      selectedItemWidth += itemWidth;
      lastVisibleIndex = index;
    }
    const prevItem = itemsDomRefs[index - 1];
    if (prevItem && prevItem.realTabReference.isSeparator) {
      lastVisibleIndex -= 1;
    }
    return lastVisibleIndex;
  }
  get isModeStartAndEnd() {
    return this.overflowMode === OverflowMode_default.StartAndEnd;
  }
  _updateOverflowCounters() {
    let startOverflowItemsCount = 0;
    let endOverflowItemsCount = 0;
    this._getTabs().map((tab) => tab.getDomRefInStrip()).forEach((tab) => {
      if (tab.hasAttribute("start-overflow")) {
        startOverflowItemsCount++;
      }
      if (tab.hasAttribute("end-overflow")) {
        endOverflowItemsCount++;
      }
    });
    this._startOverflowText = `+${startOverflowItemsCount}`;
    this._endOverflowText = `+${endOverflowItemsCount}`;
  }
  _getFocusableRefs() {
    if (!this.getDomRef()) {
      return [];
    }
    const focusableRefs = [];
    if (!this._getStartOverflow().hasAttribute("hidden")) {
      focusableRefs.push(this.startOverflowButton[0] || this._getStartOverflowBtnDOM());
    }
    this._getTabs().forEach((tab) => {
      const ref = tab.getDomRefInStrip();
      const focusable = ref && !ref.hasAttribute("hidden");
      if (focusable) {
        focusableRefs.push(tab);
      }
    });
    if (!this._getEndOverflow().hasAttribute("hidden")) {
      focusableRefs.push(this.overflowButton[0] || this._getEndOverflowBtnDOM());
    }
    return focusableRefs;
  }
  _getHeader() {
    return this.shadowRoot.querySelector(`#${this._id}-header`);
  }
  _getTabs() {
    return this.items.filter((item) => !item.isSeparator);
  }
  _getPopoverOwner(opener) {
    if (opener === this._getStartOverflowBtnDOM() || opener.slot === "startOverflowButton") {
      return "start-overflow";
    }
    if (opener === this._getEndOverflowBtnDOM() || opener.slot === "overflowButton") {
      return "end-overflow";
    }
    return getTabInStrip(opener);
  }
  _getPopoverItemsFor(targetOwner) {
    if (targetOwner === "start-overflow") {
      return this.items.filter((item) => {
        const stripRef = item.getDomRefInStrip();
        return stripRef && stripRef.hasAttribute("start-overflow");
      });
    }
    if (targetOwner === "end-overflow") {
      return this.items.filter((item) => {
        const stripRef = item.getDomRefInStrip();
        return stripRef && stripRef.hasAttribute("end-overflow");
      });
    }
    return targetOwner.realTabReference.items;
  }
  _setPopoverItems(items) {
    this._sendOverflowPresentationInfos(items);
    const newItemsFlat = this._flatten(items);
    if (!arraysAreEqual_default(this._popoverItemsFlat, newItemsFlat)) {
      this._popoverItemsFlat = newItemsFlat;
    }
  }
  _togglePopover(opener, setInitialFocus = false) {
    return __async(this, null, function* () {
      this.responsivePopover = yield this._respPopover();
      if (this.responsivePopover.open) {
        this._closePopover();
      } else {
        yield this._showPopoverAt(opener, setInitialFocus);
      }
    });
  }
  _showPopoverAt(opener, setInitialFocus = false, preventInitialFocus = false) {
    return __async(this, null, function* () {
      this._hasScheduledPopoverOpen = true;
      this._setPopoverItems(this._getPopoverItemsFor(this._getPopoverOwner(opener)));
      this.responsivePopover = yield this._respPopover();
      if (setInitialFocus) {
        this._setPopoverInitialFocus();
      }
      if (this._hasScheduledPopoverOpen) {
        this.responsivePopover.preventInitialFocus = preventInitialFocus;
        this.responsivePopover.opener = opener;
        this.responsivePopover.open = true;
      }
    });
  }
  get hasItems() {
    const tabs = this._getTabs();
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].items.length > 0) {
        return true;
      }
    }
    return false;
  }
  _getTabStrip() {
    return this.shadowRoot.querySelector(`#${this._id}-tabStrip`);
  }
  _getStartOverflow() {
    return this.shadowRoot.querySelector(".ui5-tc__overflow--start");
  }
  _getEndOverflow() {
    return this.shadowRoot.querySelector(".ui5-tc__overflow--end");
  }
  _getStartOverflowBtnDOM() {
    return this._getStartOverflow().querySelector("[ui5-button]");
  }
  _getEndOverflowBtnDOM() {
    return this._getEndOverflow().querySelector("[ui5-button]");
  }
  _respPopover() {
    return __async(this, null, function* () {
      yield renderFinished();
      return this.shadowRoot.querySelector(`#${this._id}-overflowMenu`);
    });
  }
  _closePopover() {
    this._hasScheduledPopoverOpen = false;
    if (this.responsivePopover) {
      this.responsivePopover.open = false;
    }
  }
  get dropIndicatorDOM() {
    return this.shadowRoot.querySelector("[ui5-drop-indicator]");
  }
  get classes() {
    return {
      root: {
        "ui5-tc-root": true,
        "ui5-tc--textOnly": this.textOnly,
        "ui5-tc--withAdditionalText": this.withAdditionalText,
        "ui5-tc--standardTabLayout": this.standardTabLayout
      },
      header: {
        "ui5-tc__header": true
      },
      tabStrip: {
        "ui5-tc__tabStrip": true
      },
      separator: {
        "ui5-tc__separator": true
      },
      content: {
        "ui5-tc__content": true,
        "ui5-tc__content--collapsed": this._contentCollapsed
      }
    };
  }
  get mixedMode() {
    const tabs = this._getTabs();
    return tabs.some((item) => item.icon) && tabs.some((item) => item.text);
  }
  get textOnly() {
    return this._getTabs().every((item) => !item.icon);
  }
  get withAdditionalText() {
    return this._getTabs().some((item) => !!item.additionalText);
  }
  get standardTabLayout() {
    return this.tabLayout === TabLayout_default.Standard;
  }
  get previousIconACCName() {
    return TabContainer_1.i18nBundle.getText(TABCONTAINER_PREVIOUS_ICON_ACC_NAME);
  }
  get nextIconACCName() {
    return TabContainer_1.i18nBundle.getText(TABCONTAINER_NEXT_ICON_ACC_NAME);
  }
  get overflowMenuTitle() {
    return TabContainer_1.i18nBundle.getText(TABCONTAINER_OVERFLOW_MENU_TITLE);
  }
  get tabsAtTheBottom() {
    return this.tabsPlacement === TabContainerTabsPlacement_default.Bottom;
  }
  get overflowMenuIcon() {
    return this.tabsAtTheBottom ? "slim-arrow-up" : "slim-arrow-down";
  }
  get overflowButtonText() {
    return TabContainer_1.i18nBundle.getText(TABCONTAINER_END_OVERFLOW);
  }
  get popoverCancelButtonText() {
    return TabContainer_1.i18nBundle.getText(TABCONTAINER_POPOVER_CANCEL_BUTTON);
  }
  get accInvisibleText() {
    return TabContainer_1.i18nBundle.getText(TABCONTAINER_SUBTABS_DESCRIPTION);
  }
  get overflowBtnAccessibilityAttributes() {
    return {
      hasPopup: "menu"
    };
  }
  get tablistAriaDescribedById() {
    return this.hasItems ? `${this._id}-invisibleText` : void 0;
  }
  static onDefine() {
    return __async(this, null, function* () {
      TabContainer_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate([
  property_default({ type: Boolean })
], TabContainer.prototype, "collapsed", void 0);
__decorate([
  property_default()
], TabContainer.prototype, "tabLayout", void 0);
__decorate([
  property_default()
], TabContainer.prototype, "overflowMode", void 0);
__decorate([
  property_default()
], TabContainer.prototype, "headerBackgroundDesign", void 0);
__decorate([
  property_default()
], TabContainer.prototype, "contentBackgroundDesign", void 0);
__decorate([
  property_default()
], TabContainer.prototype, "tabsPlacement", void 0);
__decorate([
  property_default()
], TabContainer.prototype, "mediaRange", void 0);
__decorate([
  property_default({ type: Object })
], TabContainer.prototype, "_selectedTab", void 0);
__decorate([
  property_default({ type: Boolean, noAttribute: true })
], TabContainer.prototype, "_animationRunning", void 0);
__decorate([
  property_default({ type: Boolean, noAttribute: true })
], TabContainer.prototype, "_contentCollapsed", void 0);
__decorate([
  property_default({ noAttribute: true })
], TabContainer.prototype, "_startOverflowText", void 0);
__decorate([
  property_default({ noAttribute: true })
], TabContainer.prototype, "_endOverflowText", void 0);
__decorate([
  property_default({ type: Array })
], TabContainer.prototype, "_popoverItemsFlat", void 0);
__decorate([
  property_default({ type: Number, noAttribute: true })
], TabContainer.prototype, "_width", void 0);
__decorate([
  slot_default({
    "default": true,
    type: HTMLElement,
    individualSlots: true,
    invalidateOnChildChange: {
      properties: true,
      slots: true
    }
  })
], TabContainer.prototype, "items", void 0);
__decorate([
  slot_default()
], TabContainer.prototype, "overflowButton", void 0);
__decorate([
  slot_default()
], TabContainer.prototype, "startOverflowButton", void 0);
__decorate([
  longDragOverHandler_default("[data-ui5-stable=overflow-start],[data-ui5-stable=overflow-end],[role=tab]")
], TabContainer.prototype, "_onHeaderDragOver", null);
TabContainer = TabContainer_1 = __decorate([
  customElement_default({
    tag: "ui5-tabcontainer",
    languageAware: true,
    fastNavigation: true,
    styles: [
      tabStyles,
      TabContainer_css_default,
      ResponsivePopoverCommon_css_default
    ],
    renderer: LitRenderer_default,
    template: TabContainerTemplate_lit_default,
    dependencies: [
      Button_default,
      Icon_default,
      List_default,
      ResponsivePopover_default,
      DropIndicator_default,
      ListItemCustom_default
    ]
  }),
  event_default("tab-select", {
    detail: {
      /**
       * @public
       */
      tab: { type: HTMLElement },
      /**
       * @public
       */
      tabIndex: { type: Number }
    }
  }),
  event_default("move-over", {
    detail: {
      /**
       * @public
       */
      source: { type: Object },
      /**
       * @public
       */
      destination: { type: Object }
    }
  }),
  event_default("move", {
    detail: {
      /**
       * @public
       */
      source: { type: Object },
      /**
       * @public
       */
      destination: { type: Object }
    }
  })
], TabContainer);
var isTabInStrip = (el) => el.localName === "div" && el.getAttribute("role") === "tab";
var getTabInStrip = (el) => {
  while (el) {
    if (isTabInStrip(el)) {
      return el;
    }
    el = el.parentElement;
  }
  return false;
};
var _walk = (items, callback, level) => {
  [...items].forEach((item) => {
    callback(item, level);
    if (item.hasAttribute("ui5-tab") && item.items) {
      _walk(item.items, callback, level + 1);
    }
  });
};
var walk = (items, callback) => {
  _walk(items, callback, 0);
};
TabContainer.define();
var TabContainer_default = TabContainer;

export {
  slim_arrow_up_default,
  slim_arrow_down_default,
  duration,
  animate_default,
  slideDown_default,
  slideUp_default,
  SemanticColor_default,
  TabContainer_default
};
//# sourceMappingURL=chunk-66SXCUXY.js.map
