import {
  BrowserScrollbar_css_default,
  PopupAccessibleRole_default,
  Popup_default,
  PopupsCommon_css_default,
  clamp_default
} from "./chunk-B3EHYJGE.js";
import {
  ValueState_default
} from "./chunk-OMRI665N.js";
import {
  DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE,
  DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE,
  DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE,
  DIALOG_HEADER_ARIA_ROLE_DESCRIPTION
} from "./chunk-U6TJ47RH.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  isDown,
  isDownShift,
  isLeft,
  isLeftShift,
  isRight,
  isRightShift,
  isUp,
  isUpShift
} from "./chunk-ECUZOJV2.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  classMap,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  scopeTag,
  styleMap
} from "./chunk-DMMFI3C7.js";
import {
  registerIcon
} from "./chunk-XOBH4D6P.js";
import {
  getI18nBundle
} from "./chunk-22ISB74T.js";
import {
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

// node_modules/@ui5/webcomponents-icons/dist/v4/resize-corner.js
var name = "resize-corner";
var pathData = "M384 224v32q0 12-10 22L182 470q-10 10-22 10h-32zM224 480l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/resize-corner.js
var name2 = "resize-corner";
var pathData2 = "M202 512q-11 0-18.5-7.5T176 486q0-10 8-18l204-205q7-7 18-7t18.5 7.5T432 282t-7 18L220 505q-7 7-18 7zm128 0q-11 0-18.5-7.5T304 486q0-10 8-18l76-77q7-7 18-7t18.5 7.5T432 410t-7 18l-77 77q-7 7-18 7z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents/dist/generated/templates/DialogTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" tabindex="-1" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span>${this._displayHeader ? block1.call(this, context, tags, suffix) : void 0}<div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this.footer.length ? block10.call(this, context, tags, suffix) : void 0}${this._showResizeHandle ? block11.call(this, context, tags, suffix) : void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section> `;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<header><div class="ui5-popup-header-root" id="ui5-popup-header" role="group" aria-describedby=${ifDefined(this.effectiveAriaDescribedBy)} aria-roledescription=${ifDefined(this.ariaRoleDescriptionHeaderText)} tabindex="${ifDefined(this._headerTabIndex)}" @keydown="${this._onDragOrResizeKeyDown}" @mousedown="${this._onDragMouseDown}" part="header" state="${ifDefined(this.state)}">${this.hasValueState ? block2.call(this, context, tags, suffix) : void 0}${this.header.length ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}${this.resizable ? block5.call(this, context, tags, suffix) : block8.call(this, context, tags, suffix)}</div></header>`;
}
function block2(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-dialog-value-state-icon" name="${ifDefined(this._dialogStateIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-dialog-value-state-icon" name="${ifDefined(this._dialogStateIcon)}"></ui5-icon>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<slot name="header"></slot>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<h1 id="ui5-popup-header-text" class="ui5-popup-header-text">${ifDefined(this.headerText)}</h1>`;
}
function block5(context, tags, suffix) {
  return effectiveHtml`${this.draggable ? block6.call(this, context, tags, suffix) : block7.call(this, context, tags, suffix)}`;
}
function block6(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.ariaDescribedByHeaderTextDraggableAndResizable)}</span>`;
}
function block7(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.ariaDescribedByHeaderTextResizable)}</span>`;
}
function block8(context, tags, suffix) {
  return effectiveHtml`${this.draggable ? block9.call(this, context, tags, suffix) : void 0}`;
}
function block9(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-descr" aria-hidden="true" class="ui5-hidden-text">${ifDefined(this.ariaDescribedByHeaderTextDraggable)}</span>`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;
}
function block11(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name="resize-corner" class="ui5-popup-resize-handle" @mousedown="${this._onResizeMouseDown}"></ui5-icon>`;
}
var DialogTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Dialog.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Dialog.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3);border-radius:var(--sapElement_BorderCornerRadius)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%;border-radius:0}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot="header"]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}::slotted([slot="header"]){max-width:100%}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}.ui5-popup-header-root:before{content:"";position:absolute;inset-block-start:auto;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;height:var(--_ui5-v2-0-1_dialog_header_state_line_height);background:var(--sapObjectHeader_BorderColor)}:host([state="Negative"]) .ui5-popup-header-root:before{background:var(--sapErrorBorderColor)}:host([state="Information"]) .ui5-popup-header-root:before{background:var(--sapInformationBorderColor)}:host([state="Positive"]) .ui5-popup-header-root:before{background:var(--sapSuccessBorderColor)}:host([state="Critical"]) .ui5-popup-header-root:before{background:var(--sapWarningBorderColor)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem;flex-shrink:0}:host([state="Negative"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-0-1_dialog_header_error_state_icon_color)}:host([state="Information"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-0-1_dialog_header_information_state_icon_color)}:host([state="Positive"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-0-1_dialog_header_success_state_icon_color)}:host([state="Critical"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-0-1_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}:host([desktop]) .ui5-popup-header-root:focus:after,.ui5-popup-header-root:focus-visible:after{content:"";position:absolute;left:var(--_ui5-v2-0-1_dialog_header_focus_left_offset);bottom:var(--_ui5-v2-0-1_dialog_header_focus_bottom_offset);right:var(--_ui5-v2-0-1_dialog_header_focus_right_offset);top:var(--_ui5-v2-0-1_dialog_header_focus_top_offset);border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-0-1_dialog_header_border_radius) var(--_ui5-v2-0-1_dialog_header_border_radius) 0 0;pointer-events:none}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5-v2-0-1_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:var(--_ui5-v2-0-1_dialog_resize_handle_bottom);inset-inline-end:var(--_ui5-v2-0-1_dialog_resize_handle_right);cursor:var(--_ui5-v2-0-1_dialog_resize_cursor);color:var(--_ui5-v2-0-1_dialog_resize_handle_color)}::slotted([slot="footer"]){height:var(--_ui5-v2-0-1_dialog_footer_height)}::slotted([slot="footer"][ui5-bar][design="Footer"]){border-top:none}::slotted([slot="header"][ui5-bar]){box-shadow:none}:host::backdrop{background-color:var(--_ui5-v2-0-1_popup_block_layer_background)}.ui5-block-layer{display:block}
` };
var Dialog_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Dialog.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Dialog_1;
var STEP_SIZE = 16;
var ICON_PER_STATE = {
  [ValueState_default.Negative]: "error",
  [ValueState_default.Critical]: "alert",
  [ValueState_default.Positive]: "sys-enter-2",
  [ValueState_default.Information]: "information"
};
var Dialog = Dialog_1 = class Dialog2 extends Popup_default {
  constructor() {
    super();
    this.stretch = false;
    this.draggable = false;
    this.resizable = false;
    this.state = "None";
    this._draggedOrResized = false;
    this._revertSize = () => {
      Object.assign(this.style, {
        top: "",
        left: "",
        width: "",
        height: ""
      });
    };
    this._screenResizeHandler = this._screenResize.bind(this);
    this._dragMouseMoveHandler = this._onDragMouseMove.bind(this);
    this._dragMouseUpHandler = this._onDragMouseUp.bind(this);
    this._resizeMouseMoveHandler = this._onResizeMouseMove.bind(this);
    this._resizeMouseUpHandler = this._onResizeMouseUp.bind(this);
    this._dragStartHandler = this._handleDragStart.bind(this);
  }
  static onDefine() {
    return __async(this, null, function* () {
      Dialog_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  static _isHeader(element) {
    return element.classList.contains("ui5-popup-header-root") || element.getAttribute("slot") === "header";
  }
  get isModal() {
    return true;
  }
  get _ariaLabelledBy() {
    let ariaLabelledById;
    if (this.headerText && !this._ariaLabel) {
      ariaLabelledById = "ui5-popup-header-text";
    }
    return ariaLabelledById;
  }
  get ariaRoleDescriptionHeaderText() {
    return this.resizable || this.draggable ? Dialog_1.i18nBundle.getText(DIALOG_HEADER_ARIA_ROLE_DESCRIPTION) : void 0;
  }
  get effectiveAriaDescribedBy() {
    return this.resizable || this.draggable ? `${this._id}-descr` : void 0;
  }
  get ariaDescribedByHeaderTextResizable() {
    return Dialog_1.i18nBundle.getText(DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE);
  }
  get ariaDescribedByHeaderTextDraggable() {
    return Dialog_1.i18nBundle.getText(DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE);
  }
  get ariaDescribedByHeaderTextDraggableAndResizable() {
    return Dialog_1.i18nBundle.getText(DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE);
  }
  /**
   * Determines if the header should be shown.
   */
  get _displayHeader() {
    return this.header.length || this.headerText || this.draggable || this.resizable;
  }
  get _movable() {
    return !this.stretch && this.onDesktop && (this.draggable || this.resizable);
  }
  get _headerTabIndex() {
    return this._movable ? "0" : void 0;
  }
  get _showResizeHandle() {
    return this.resizable && this.onDesktop;
  }
  get _minHeight() {
    let minHeight = Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);
    const header = this._root.querySelector(".ui5-popup-header-root");
    if (header) {
      minHeight += header.offsetHeight;
    }
    const footer = this._root.querySelector(".ui5-popup-footer-root");
    if (footer) {
      minHeight += footer.offsetHeight;
    }
    return minHeight;
  }
  get hasValueState() {
    return this.state !== ValueState_default.None;
  }
  get _dialogStateIcon() {
    return ICON_PER_STATE[this.state];
  }
  get _role() {
    if (this.accessibleRole === PopupAccessibleRole_default.None) {
      return void 0;
    }
    if (this.state === ValueState_default.Negative || this.state === ValueState_default.Critical) {
      return PopupAccessibleRole_default.AlertDialog.toLowerCase();
    }
    return this.accessibleRole.toLowerCase();
  }
  _show() {
    super._show();
    this._center();
  }
  onBeforeRendering() {
    super.onBeforeRendering();
    this._isRTL = this.effectiveDir === "rtl";
  }
  onEnterDOM() {
    super.onEnterDOM();
    this._attachScreenResizeHandler();
    this.addEventListener("dragstart", this._dragStartHandler);
  }
  onExitDOM() {
    super.onExitDOM();
    this._detachScreenResizeHandler();
    this.removeEventListener("dragstart", this._dragStartHandler);
  }
  /**
   * @override
   */
  _resize() {
    super._resize();
    if (!this._draggedOrResized) {
      this._center();
    }
  }
  _screenResize() {
    this._center();
  }
  _attachScreenResizeHandler() {
    if (!this._screenResizeHandlerAttached) {
      window.addEventListener("resize", this._screenResizeHandler);
      this._screenResizeHandlerAttached = true;
    }
  }
  _detachScreenResizeHandler() {
    if (this._screenResizeHandlerAttached) {
      window.removeEventListener("resize", this._screenResizeHandler);
      this._screenResizeHandlerAttached = false;
    }
  }
  _center() {
    const height = window.innerHeight - this.offsetHeight, width = window.innerWidth - this.offsetWidth;
    Object.assign(this.style, {
      top: `${Math.round(height / 2)}px`,
      left: `${Math.round(width / 2)}px`
    });
  }
  /**
   * Event handlers
   */
  _onDragMouseDown(e) {
    if (!this._movable || !this.draggable || !Dialog_1._isHeader(e.target)) {
      return;
    }
    e.preventDefault();
    const { top, left } = this.getBoundingClientRect();
    const { width, height } = window.getComputedStyle(this);
    Object.assign(this.style, {
      top: `${top}px`,
      left: `${left}px`,
      width: `${Math.round(Number.parseFloat(width) * 100) / 100}px`,
      height: `${Math.round(Number.parseFloat(height) * 100) / 100}px`
    });
    this._x = e.clientX;
    this._y = e.clientY;
    this._draggedOrResized = true;
    this._attachMouseDragHandlers();
  }
  _onDragMouseMove(e) {
    e.preventDefault();
    const { clientX, clientY } = e;
    const calcX = this._x - clientX;
    const calcY = this._y - clientY;
    const { left, top } = this.getBoundingClientRect();
    Object.assign(this.style, {
      left: `${Math.floor(left - calcX)}px`,
      top: `${Math.floor(top - calcY)}px`
    });
    this._x = clientX;
    this._y = clientY;
  }
  _onDragMouseUp() {
    delete this._x;
    delete this._y;
    this._detachMouseDragHandlers();
  }
  _onDragOrResizeKeyDown(e) {
    if (!this._movable || !Dialog_1._isHeader(e.target)) {
      return;
    }
    if (this.draggable && [isUp, isDown, isLeft, isRight].some((key) => key(e))) {
      this._dragWithEvent(e);
      return;
    }
    if (this.resizable && [isUpShift, isDownShift, isLeftShift, isRightShift].some((key) => key(e))) {
      this._resizeWithEvent(e);
    }
  }
  _dragWithEvent(e) {
    const { top, left, width, height } = this.getBoundingClientRect();
    let newPos = 0;
    let posDirection = "top";
    switch (true) {
      case isUp(e):
        newPos = top - STEP_SIZE;
        posDirection = "top";
        break;
      case isDown(e):
        newPos = top + STEP_SIZE;
        posDirection = "top";
        break;
      case isLeft(e):
        newPos = left - STEP_SIZE;
        posDirection = "left";
        break;
      case isRight(e):
        newPos = left + STEP_SIZE;
        posDirection = "left";
        break;
    }
    newPos = clamp_default(newPos, 0, posDirection === "left" ? window.innerWidth - width : window.innerHeight - height);
    this.style[posDirection] = `${newPos}px`;
  }
  _resizeWithEvent(e) {
    this._draggedOrResized = true;
    this.addEventListener("ui5-before-close", this._revertSize, { once: true });
    const { top, left } = this.getBoundingClientRect(), style = window.getComputedStyle(this), minWidth = Number.parseFloat(style.minWidth), maxWidth = window.innerWidth - left, maxHeight = window.innerHeight - top;
    let width = Number.parseFloat(style.width), height = Number.parseFloat(style.height);
    switch (true) {
      case isUpShift(e):
        height -= STEP_SIZE;
        break;
      case isDownShift(e):
        height += STEP_SIZE;
        break;
      case isLeftShift(e):
        width -= STEP_SIZE;
        break;
      case isRightShift(e):
        width += STEP_SIZE;
        break;
    }
    width = clamp_default(width, minWidth, maxWidth);
    height = clamp_default(height, this._minHeight, maxHeight);
    Object.assign(this.style, {
      width: `${width}px`,
      height: `${height}px`
    });
  }
  _attachMouseDragHandlers() {
    window.addEventListener("mousemove", this._dragMouseMoveHandler);
    window.addEventListener("mouseup", this._dragMouseUpHandler);
  }
  _detachMouseDragHandlers() {
    window.removeEventListener("mousemove", this._dragMouseMoveHandler);
    window.removeEventListener("mouseup", this._dragMouseUpHandler);
  }
  _onResizeMouseDown(e) {
    if (!this._movable || !this.resizable) {
      return;
    }
    e.preventDefault();
    const { top, left } = this.getBoundingClientRect();
    const { width, height, minWidth } = window.getComputedStyle(this);
    this._initialX = e.clientX;
    this._initialY = e.clientY;
    this._initialWidth = Number.parseFloat(width);
    this._initialHeight = Number.parseFloat(height);
    this._initialTop = top;
    this._initialLeft = left;
    this._minWidth = Number.parseFloat(minWidth);
    this._cachedMinHeight = this._minHeight;
    Object.assign(this.style, {
      top: `${top}px`,
      left: `${left}px`
    });
    this._draggedOrResized = true;
    this._attachMouseResizeHandlers();
  }
  _onResizeMouseMove(e) {
    const { clientX, clientY } = e;
    let newWidth, newLeft;
    if (this._isRTL) {
      newWidth = clamp_default(this._initialWidth - (clientX - this._initialX), this._minWidth, this._initialLeft + this._initialWidth);
      newLeft = clamp_default(this._initialLeft + (clientX - this._initialX), 0, this._initialX + this._initialWidth - this._minWidth);
    } else {
      newWidth = clamp_default(this._initialWidth + (clientX - this._initialX), this._minWidth, window.innerWidth - this._initialLeft);
    }
    const newHeight = clamp_default(this._initialHeight + (clientY - this._initialY), this._cachedMinHeight, window.innerHeight - this._initialTop);
    Object.assign(this.style, {
      height: `${newHeight}px`,
      width: `${newWidth}px`,
      left: newLeft ? `${newLeft}px` : void 0
    });
  }
  _onResizeMouseUp() {
    delete this._initialX;
    delete this._initialY;
    delete this._initialWidth;
    delete this._initialHeight;
    delete this._initialTop;
    delete this._initialLeft;
    delete this._minWidth;
    delete this._cachedMinHeight;
    this._detachMouseResizeHandlers();
  }
  _handleDragStart(e) {
    if (this.draggable) {
      e.preventDefault();
    }
  }
  _attachMouseResizeHandlers() {
    window.addEventListener("mousemove", this._resizeMouseMoveHandler);
    window.addEventListener("mouseup", this._resizeMouseUpHandler);
    this.addEventListener("ui5-before-close", this._revertSize, { once: true });
  }
  _detachMouseResizeHandlers() {
    window.removeEventListener("mousemove", this._resizeMouseMoveHandler);
    window.removeEventListener("mouseup", this._resizeMouseUpHandler);
  }
};
__decorate([
  property_default()
], Dialog.prototype, "headerText", void 0);
__decorate([
  property_default({ type: Boolean })
], Dialog.prototype, "stretch", void 0);
__decorate([
  property_default({ type: Boolean })
], Dialog.prototype, "draggable", void 0);
__decorate([
  property_default({ type: Boolean })
], Dialog.prototype, "resizable", void 0);
__decorate([
  property_default()
], Dialog.prototype, "state", void 0);
__decorate([
  slot_default()
], Dialog.prototype, "header", void 0);
__decorate([
  slot_default()
], Dialog.prototype, "footer", void 0);
Dialog = Dialog_1 = __decorate([
  customElement_default({
    tag: "ui5-dialog",
    template: DialogTemplate_lit_default,
    styles: [
      Popup_default.styles,
      BrowserScrollbar_css_default,
      PopupsCommon_css_default,
      Dialog_css_default
    ],
    dependencies: [
      Icon_default
    ]
  })
], Dialog);
Dialog.define();
var Dialog_default = Dialog;

export {
  Dialog_default
};
//# sourceMappingURL=chunk-VC54E4Y2.js.map
