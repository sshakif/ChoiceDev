import {
  Title_default
} from "./chunk-6JP3GOO6.js";
import {
  Dialog_default
} from "./chunk-VC54E4Y2.js";
import {
  Popover_default
} from "./chunk-63IT5AAH.js";
import {
  Button_default
} from "./chunk-THWQMO7Z.js";
import {
  RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON
} from "./chunk-U6TJ47RH.js";
import {
  isPhone
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
  __async,
  __superGet
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents/dist/generated/templates/ResponsivePopoverTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`${this._isPhone ? block1.call(this, context, tags, suffix) : block7.call(this, context, tags, suffix)}`;
}
function block1(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-dialog", tags, suffix)} root-element accessible-name=${ifDefined(this.accessibleName)} accessible-name-ref=${ifDefined(this.accessibleNameRef)} accessible-role=${ifDefined(this.accessibleRole)} stretch ?prevent-initial-focus="${this.preventInitialFocus}" initial-focus="${ifDefined(this.initialFocus)}" @ui5-before-open="${ifDefined(this._beforeDialogOpen)}" @ui5-open="${ifDefined(this._propagateDialogEvent)}" @ui5-before-close="${ifDefined(this._propagateDialogEvent)}" @ui5-close="${ifDefined(this._afterDialogClose)}" exportparts="content, header, footer" .open=${ifDefined(this.open)}>${!this._hideHeader ? block2.call(this, context, tags, suffix) : void 0}<slot></slot><slot slot="footer" name="footer"></slot></${scopeTag("ui5-dialog", tags, suffix)}>` : effectiveHtml`<ui5-dialog root-element accessible-name=${ifDefined(this.accessibleName)} accessible-name-ref=${ifDefined(this.accessibleNameRef)} accessible-role=${ifDefined(this.accessibleRole)} stretch ?prevent-initial-focus="${this.preventInitialFocus}" initial-focus="${ifDefined(this.initialFocus)}" @ui5-before-open="${ifDefined(this._beforeDialogOpen)}" @ui5-open="${ifDefined(this._propagateDialogEvent)}" @ui5-before-close="${ifDefined(this._propagateDialogEvent)}" @ui5-close="${ifDefined(this._afterDialogClose)}" exportparts="content, header, footer" .open=${ifDefined(this.open)}>${!this._hideHeader ? block2.call(this, context, tags, suffix) : void 0}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`${this.header.length ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<slot slot="header" name="header"></slot>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.header)}" slot="header">${this.headerText ? block5.call(this, context, tags, suffix) : void 0}${!this._hideCloseButton ? block6.call(this, context, tags, suffix) : void 0}</div>`;
}
function block5(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-title", tags, suffix)} level="H2" wrapping-type="None" class="ui5-popup-header-text ui5-responsive-popover-header-text">${ifDefined(this.headerText)}</${scopeTag("ui5-title", tags, suffix)}>` : effectiveHtml`<ui5-title level="H2" wrapping-type="None" class="ui5-popup-header-text ui5-responsive-popover-header-text">${ifDefined(this.headerText)}</ui5-title>`;
}
function block6(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" accessible-name="${ifDefined(this._closeDialogAriaLabel)}" @click="${this.closePopup}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button icon="decline" design="Transparent" accessible-name="${ifDefined(this._closeDialogAriaLabel)}" @click="${this.closePopup}"></ui5-button>`;
}
function block7(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" tabindex="-1" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(this.styles.arrow)}"></span>${this._displayHeader ? block8.call(this, context, tags, suffix) : void 0}<div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter ? block11.call(this, context, tags, suffix) : void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`;
}
function block8(context, tags, suffix) {
  return effectiveHtml`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length ? block9.call(this, context, tags, suffix) : block10.call(this, context, tags, suffix)}</header>`;
}
function block9(context, tags, suffix) {
  return effectiveHtml`<slot name="header"></slot>`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`<h1 class="ui5-popup-header-text">${ifDefined(this.headerText)}</h1>`;
}
function block11(context, tags, suffix) {
  return effectiveHtml`${this.footer.length ? block12.call(this, context, tags, suffix) : void 0}`;
}
function block12(context, tags, suffix) {
  return effectiveHtml`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;
}
var ResponsivePopoverTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/ResponsivePopover.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/ResponsivePopover.css.ts", content: `:host{--_ui5-v2-0-1_input_width: 100%;min-width:6.25rem;min-height:2rem}:host([on-phone]){display:contents}.ui5-responsive-popover-header{height:var(--_ui5-v2-0-1-responsive_popover_header_height);display:flex;justify-content:space-between;align-items:center;width:100%}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5-v2-0-1_button_base_min_width))}.ui5-responsive-popover-header-no-title{justify-content:flex-end}
` };
var ResponsivePopover_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/ResponsivePopover.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ResponsivePopover_1;
var ResponsivePopover = ResponsivePopover_1 = class ResponsivePopover2 extends Popover_default {
  constructor() {
    super();
    this.contentOnlyOnDesktop = false;
    this._hideHeader = false;
    this._hideCloseButton = false;
  }
  openPopup() {
    return __async(this, null, function* () {
      if (!isPhone()) {
        yield __superGet(ResponsivePopover2.prototype, this, "openPopup").call(this);
      } else if (this._dialog) {
        this._dialog.open = true;
      }
    });
  }
  _show() {
    return __async(this, null, function* () {
      if (!isPhone()) {
        return __superGet(ResponsivePopover2.prototype, this, "_show").call(this);
      }
    });
  }
  /**
   * Closes the popover/dialog.
   * @override
   */
  closePopup(escPressed = false, preventRegistryUpdate = false, preventFocusRestore = false) {
    if (!isPhone()) {
      super.closePopup(escPressed, preventRegistryUpdate, preventFocusRestore);
    } else {
      this._dialog?.closePopup(escPressed, preventRegistryUpdate, preventFocusRestore);
    }
  }
  toggle(opener) {
    if (this.open) {
      this.closePopup();
      return;
    }
    this.opener = opener;
    this.open = true;
  }
  get classes() {
    const allClasses = super.classes;
    allClasses.header = {
      "ui5-responsive-popover-header": true,
      "ui5-responsive-popover-header-no-title": !this.headerText
    };
    return allClasses;
  }
  get _dialog() {
    return this.shadowRoot.querySelector("[ui5-dialog]");
  }
  get contentDOM() {
    return isPhone() ? this._dialog.contentDOM : super.contentDOM;
  }
  get _isPhone() {
    return isPhone();
  }
  get _displayHeader() {
    return (isPhone() || !this.contentOnlyOnDesktop) && super._displayHeader;
  }
  get _displayFooter() {
    return isPhone() || !this.contentOnlyOnDesktop;
  }
  get _closeDialogAriaLabel() {
    return ResponsivePopover_1.i18nBundle.getText(RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON);
  }
  _beforeDialogOpen(e) {
    this._opened = true;
    this.open = true;
    this._propagateDialogEvent(e);
  }
  _afterDialogClose(e) {
    this._opened = false;
    this.open = false;
    this._propagateDialogEvent(e);
  }
  _propagateDialogEvent(e) {
    const type = e.type.replace("ui5-", "");
    this.fireEvent(type, e.detail);
  }
  get isModal() {
    if (!isPhone()) {
      return super.isModal;
    }
    return this._dialog.isModal;
  }
  static onDefine() {
    return __async(this, null, function* () {
      ResponsivePopover_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate([
  property_default({ type: Boolean })
], ResponsivePopover.prototype, "contentOnlyOnDesktop", void 0);
__decorate([
  property_default({ type: Boolean })
], ResponsivePopover.prototype, "_hideHeader", void 0);
__decorate([
  property_default({ type: Boolean })
], ResponsivePopover.prototype, "_hideCloseButton", void 0);
ResponsivePopover = ResponsivePopover_1 = __decorate([
  customElement_default({
    tag: "ui5-responsive-popover",
    styles: [Popover_default.styles, ResponsivePopover_css_default],
    template: ResponsivePopoverTemplate_lit_default,
    dependencies: [
      ...Popover_default.dependencies,
      Button_default,
      Dialog_default,
      Title_default
    ]
  })
], ResponsivePopover);
ResponsivePopover.define();
var ResponsivePopover_default = ResponsivePopover;

export {
  ResponsivePopover_default
};
//# sourceMappingURL=chunk-D2ZEM7VW.js.map
