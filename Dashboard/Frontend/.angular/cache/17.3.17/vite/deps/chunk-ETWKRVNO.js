import {
  ListItemCustom_default
} from "./chunk-NKNWETHW.js";
import {
  ResponsivePopover_default
} from "./chunk-D2ZEM7VW.js";
import {
  SideNavigationItem_default,
  isInstanceOfSideNavigationItem
} from "./chunk-PK5WCAQQ.js";
import {
  SideNavigationSubItem_default
} from "./chunk-IQ2LZ5CS.js";
import {
  SideNavigationItemBase_default,
  isInstanceOfSideNavigationItemBase,
  isInstanceOfSideNavigationSelectableItemBase
} from "./chunk-L3KJOGNW.js";
import {
  SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC,
  SIDE_NAVIGATION_GROUP_HEADER_DESC,
  SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC,
  SIDE_NAVIGATION_OVERFLOW_ACCESSIBLE_NAME,
  SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT
} from "./chunk-G4NX2KR4.js";
import {
  ListItemBase_default,
  ListItem_default,
  List_default
} from "./chunk-NJBEKUUC.js";
import {
  BusyIndicator_default
} from "./chunk-3W4QXVOX.js";
import {
  ItemNavigation_default,
  NavigationMode_default
} from "./chunk-KAQ4T4QR.js";
import {
  AriaHasPopup_default
} from "./chunk-7AZT6HQV.js";
import {
  DOMReference_default
} from "./chunk-63IT5AAH.js";
import {
  Button_default
} from "./chunk-THWQMO7Z.js";
import {
  ResizeHandler_default
} from "./chunk-3NVTNN76.js";
import {
  MENU_BACK_BUTTON_ARIA_LABEL,
  MENU_CLOSE_BUTTON_ARIA_LABEL,
  NAVIGATION_MENU_POPOVER_HIDDEN_TEXT
} from "./chunk-U6TJ47RH.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default3
} from "./chunk-XGRVZEVU.js";
import {
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  isCombi,
  isDesktop,
  isEnter,
  isLeft,
  isPhone,
  isRight,
  isSpace,
  isTablet
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
  __async,
  __spreadValues,
  __superGet
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents/dist/generated/templates/MenuItemTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<li part="native-li" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" class="${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${ifDefined(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${ifDefined(this._accInfo.role)}" aria-expanded="${ifDefined(this._accInfo.ariaExpanded)}" title="${ifDefined(this._accInfo.tooltip)}" aria-level="${ifDefined(this._accInfo.ariaLevel)}" aria-haspopup="${ifDefined(this._accInfo.ariaHaspopup)}" aria-posinset="${ifDefined(this._accInfo.posinset)}" aria-setsize="${ifDefined(this._accInfo.setsize)}" aria-describedby="${ifDefined(this._id)}-invisibleText-describedby" aria-labelledby="${ifDefined(this._accessibleNameRef)}" aria-disabled="${ifDefined(this._ariaDisabled)}" aria-selected="${ifDefined(this._accInfo.ariaSelected)}" aria-checked="${ifDefined(this._accInfo.ariaChecked)}" aria-owns="${ifDefined(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore ? block1.call(this, context, tags, suffix) : void 0}${this._hasHighlightColor ? block7.call(this, context, tags, suffix) : void 0}<div part="content" id="${ifDefined(this._id)}-content" class="ui5-li-content">${this.hasIcon ? block8.call(this, context, tags, suffix) : block9.call(this, context, tags, suffix)}${this.text ? block11.call(this, context, tags, suffix) : void 0}${this.hasSubmenu ? block12.call(this, context, tags, suffix) : block13.call(this, context, tags, suffix)}</div>${this.typeDetail ? block17.call(this, context, tags, suffix) : void 0}${this.typeNavigation ? block18.call(this, context, tags, suffix) : void 0}${this.navigated ? block19.call(this, context, tags, suffix) : void 0}${this.placeSelectionElementAfter ? block20.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this._accInfo.listItemAriaLabel)}${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${ifDefined(this._accInfo.ariaSelectedText)}</span></li>${this.hasSubmenu ? block26.call(this, context, tags, suffix) : void 0}`;
}
function block1(context, tags, suffix) {
  return effectiveHtml`${this.modeSingleSelect ? block2.call(this, context, tags, suffix) : void 0}${this.modeMultiple ? block3.call(this, context, tags, suffix) : void 0}${this.renderDeleteButton ? block4.call(this, context, tags, suffix) : void 0}`;
}
function block2(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : effectiveHtml`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block5.call(this, context, tags, suffix) : block6.call(this, context, tags, suffix)}</div>`;
}
function block5(context, tags, suffix) {
  return effectiveHtml`<slot name="deleteButton"></slot>`;
}
function block6(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`;
}
function block7(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-highlight"></div>`;
}
function block8(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-li-icon" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-li-icon" name="${ifDefined(this.icon)}"></ui5-icon>`;
}
function block9(context, tags, suffix) {
  return effectiveHtml`${this._siblingsWithIcon ? block10.call(this, context, tags, suffix) : void 0}`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-menu-item-dummy-icon"></div>`;
}
function block11(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-menu-item-text">${ifDefined(this.text)}</div>`;
}
function block12(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-menu-item-submenu-icon"><${scopeTag("ui5-icon", tags, suffix)} part="subicon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></${scopeTag("ui5-icon", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-menu-item-submenu-icon"><ui5-icon part="subicon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></ui5-icon></div>`;
}
function block13(context, tags, suffix) {
  return effectiveHtml`${this.hasEndContent ? block14.call(this, context, tags, suffix) : block15.call(this, context, tags, suffix)}`;
}
function block14(context, tags, suffix) {
  return effectiveHtml`<slot name="endContent"></slot>`;
}
function block15(context, tags, suffix) {
  return effectiveHtml`${this.additionalText ? block16.call(this, context, tags, suffix) : void 0}`;
}
function block16(context, tags, suffix) {
  return effectiveHtml`<span part="additional-text" class="ui5-li-additional-text">${ifDefined(this.additionalText)}</span>`;
}
function block17(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-li-detailbtn"><${scopeTag("ui5-button", tags, suffix)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`;
}
function block18(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name ="slim-arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name ="slim-arrow-right"></ui5-icon>`;
}
function block19(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-navigated"></div>`;
}
function block20(context, tags, suffix) {
  return effectiveHtml`${this.modeSingleSelect ? block21.call(this, context, tags, suffix) : void 0}${this.modeMultiple ? block22.call(this, context, tags, suffix) : void 0}${this.renderDeleteButton ? block23.call(this, context, tags, suffix) : void 0}`;
}
function block21(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : effectiveHtml`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`;
}
function block22(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`;
}
function block23(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block24.call(this, context, tags, suffix) : block25.call(this, context, tags, suffix)}</div>`;
}
function block24(context, tags, suffix) {
  return effectiveHtml`<slot name="deleteButton"></slot>`;
}
function block25(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`;
}
function block26(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" prevent-initial-focus prevent-focus-restore hide-arrow allow-target-overlap sub-menu placement=${ifDefined(this.placement)} vertical-align="Top" @ui5-before-open=${ifDefined(this._beforePopoverOpen)} @ui5-open=${ifDefined(this._afterPopoverOpen)} @ui5-before-close=${ifDefined(this._beforePopoverClose)} @ui5-close=${ifDefined(this._afterPopoverClose)}>${this.isPhone ? block27.call(this, context, tags, suffix) : void 0}<div id="${ifDefined(this._id)}-menu-main">${this.items.length ? block28.call(this, context, tags, suffix) : block29.call(this, context, tags, suffix)}</div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : effectiveHtml`<ui5-responsive-popover id="${ifDefined(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" prevent-initial-focus prevent-focus-restore hide-arrow allow-target-overlap sub-menu placement=${ifDefined(this.placement)} vertical-align="Top" @ui5-before-open=${ifDefined(this._beforePopoverOpen)} @ui5-open=${ifDefined(this._afterPopoverOpen)} @ui5-before-close=${ifDefined(this._beforePopoverClose)} @ui5-close=${ifDefined(this._afterPopoverClose)}>${this.isPhone ? block27.call(this, context, tags, suffix) : void 0}<div id="${ifDefined(this._id)}-menu-main">${this.items.length ? block28.call(this, context, tags, suffix) : block29.call(this, context, tags, suffix)}</div></ui5-responsive-popover>`;
}
function block27(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="header" class="ui5-menu-dialog-header"><${scopeTag("ui5-button", tags, suffix)} icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${ifDefined(this.labelBack)}" @click=${this._close}></${scopeTag("ui5-button", tags, suffix)}><div class="ui5-menu-dialog-title"><div>${ifDefined(this.text)}</div></div><${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" aria-label="${ifDefined(this.labelClose)}" @click=${this._closeAll}></${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div slot="header" class="ui5-menu-dialog-header"><ui5-button icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${ifDefined(this.labelBack)}" @click=${this._close}></ui5-button><div class="ui5-menu-dialog-title"><div>${ifDefined(this.text)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${ifDefined(this.labelClose)}" @click=${this._closeAll}></ui5-button></div>`;
}
function block28(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-list", tags, suffix)} id="${ifDefined(this._id)}-menu-list" selection-mode="None" separators="None" accessible-role="menu" ?loading="${this.loading}" loading-delay="${ifDefined(this.loadingDelay)}" @ui5-close-menu=${ifDefined(this._close)}><slot></slot></${scopeTag("ui5-list", tags, suffix)}>` : effectiveHtml`<ui5-list id="${ifDefined(this._id)}-menu-list" selection-mode="None" separators="None" accessible-role="menu" ?loading="${this.loading}" loading-delay="${ifDefined(this.loadingDelay)}" @ui5-close-menu=${ifDefined(this._close)}><slot></slot></ui5-list>`;
}
function block29(context, tags, suffix) {
  return effectiveHtml`${this.loading ? block30.call(this, context, tags, suffix) : void 0}`;
}
function block30(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-busy-indicator", tags, suffix)} id="${ifDefined(this._id)}-menu-busy-indicator" delay="${ifDefined(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : effectiveHtml`<ui5-busy-indicator id="${ifDefined(this._id)}-menu-busy-indicator" delay="${ifDefined(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></ui5-busy-indicator>`;
}
var MenuItemTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/MenuItem.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/MenuItem.css.ts", content: `.ui5-menu-rp[ui5-responsive-popover]::part(header),.ui5-menu-rp[ui5-responsive-popover]::part(content),.ui5-menu-rp[ui5-responsive-popover]::part(footer){padding:0}.ui5-menu-rp[ui5-responsive-popover]{box-shadow:var(--sapContent_Shadow1);border-radius:var(--_ui5-v2-0-1_menu_popover_border_radius)}.ui5-menu-busy-indicator{width:100%}.ui5-menu-dialog-header{display:flex;height:var(--_ui5-v2-0-1-responsive_popover_header_height);align-items:center;justify-content:space-between;padding:0px 1rem;width:100%;overflow:hidden}.ui5-menu-dialog-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:calc(100% - 6.5rem);padding-right:1rem}.ui5-menu-dialog-title>div{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-menu-back-button{margin-right:1rem}.ui5-menu-rp[sub-menu]{margin-top:.25rem;margin-inline:var(--_ui5-v2-0-1_menu_submenu_margin_offset)}.ui5-menu-rp[sub-menu][actual-placement=Start]{margin-top:.25rem;margin-inline:var(--_ui5-v2-0-1_menu_submenu_placement_type_left_margin_offset)}:host([disabled]){pointer-events:initial;opacity:initial}:host([disabled])::part(content){opacity:var(--_ui5-v2-0-1-listitembase_disabled_opacity)}:host([disabled][actionable]:not([active]):not([selected]):hover),:host([disabled][active][actionable]){background:var(--ui5-v2-0-1-listitem-background-color)}:host([disabled][active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapContent_NonInteractiveIconColor)}:host([active][actionable]:not([disabled]))::part(content),:host([active][actionable]:not([disabled]))::part(additional-text){color:var(--sapList_Active_TextColor)}:host([focused]:not([active]):not([disabled])){background-color:var(--sapList_Hover_Background)}:host::part(additional-text){margin:unset;margin-inline-start:1rem;color:var(--sapContent_LabelColor);min-width:max-content}.ui5-menu-item-text{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;display:inline-block}.ui5-menu-item-dummy-icon{visibility:hidden}:host::part(title){font-size:var(--sapFontSize);padding-top:.125rem}:host([icon]:not([is-phone]))::part(title),:host([is-phone]:not([icon=""]))::part(title){padding-top:0}:host(:not([is-phone]))::part(native-li){padding:var(--_ui5-v2-0-1_menu_item_padding)}:host::part(content){padding-inline-end:.25rem}.ui5-menu-item-submenu-icon{min-width:var(--_ui5-v2-0-1_list_item_icon_size);min-height:var(--_ui5-v2-0-1_list_item_icon_size);display:inline-block;vertical-align:middle;pointer-events:none}.ui5-menu-item-icon-end{display:inline-block;vertical-align:middle;padding-inline-start:.5rem;pointer-events:none;position:absolute;inset-inline-end:var(--_ui5-v2-0-1_menu_item_submenu_icon_right)}.ui5-menu-item-dummy-icon{min-width:var(--_ui5-v2-0-1_list_item_icon_size);min-height:var(--_ui5-v2-0-1_list_item_icon_size);display:inline-block;vertical-align:middle;padding-inline-end:.5rem;pointer-events:none}
` };
var MenuItem_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/MenuItem.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MenuItem_1;
var MenuItem = MenuItem_1 = class MenuItem2 extends ListItem_default {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.loading = false;
    this.loadingDelay = 1e3;
    this._siblingsWithIcon = false;
  }
  static onDefine() {
    return __async(this, null, function* () {
      MenuItem_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  get placement() {
    return this.isRtl ? "Start" : "End";
  }
  get isRtl() {
    return this.effectiveDir === "rtl";
  }
  get hasSubmenu() {
    return !!(this.items.length || this.loading) && !this.disabled;
  }
  get hasEndContent() {
    return !!this.endContent.length;
  }
  get hasIcon() {
    return !!this.icon;
  }
  get isSubMenuOpen() {
    return this._popover?.open;
  }
  get ariaLabelledByText() {
    return `${this.text} ${this.accessibleName}`.trim();
  }
  get menuHeaderTextPhone() {
    return this.text;
  }
  get isPhone() {
    return isPhone();
  }
  get labelBack() {
    return MenuItem_1.i18nBundle.getText(MENU_BACK_BUTTON_ARIA_LABEL);
  }
  get labelClose() {
    return MenuItem_1.i18nBundle.getText(MENU_CLOSE_BUTTON_ARIA_LABEL);
  }
  get isSeparator() {
    return false;
  }
  onBeforeRendering() {
    const siblingsWithIcon = this._menuItems.some((menuItem) => !!menuItem.icon);
    this._menuItems.forEach((item) => {
      item._siblingsWithIcon = siblingsWithIcon;
    });
  }
  get _focusable() {
    return true;
  }
  get _accInfo() {
    const accInfoSettings = {
      role: "menuitem",
      ariaHaspopup: this.hasSubmenu ? AriaHasPopup_default.Menu.toLowerCase() : void 0
    };
    return __spreadValues(__spreadValues({}, super._accInfo), accInfoSettings);
  }
  get _popover() {
    return this.shadowRoot.querySelector("[ui5-responsive-popover]");
  }
  get _menuItems() {
    return this.items.filter((item) => !item.isSeparator);
  }
  _closeAll() {
    if (this._popover) {
      this._popover.open = false;
    }
    this.selected = false;
    this.fireEvent("close-menu", {});
  }
  _close() {
    if (this._popover) {
      this._popover.open = false;
    }
    this.selected = false;
  }
  _beforePopoverOpen(e) {
    const prevented = !this.fireEvent("before-open", {}, true, false);
    if (prevented) {
      e.preventDefault();
    }
  }
  _afterPopoverOpen() {
    this.items[0]?.focus();
    this.fireEvent("open", {}, false, false);
  }
  _beforePopoverClose(e) {
    const prevented = !this.fireEvent("before-close", { escPressed: e.detail.escPressed }, true, false);
    if (prevented) {
      e.preventDefault();
      return;
    }
    this.selected = false;
    if (e.detail.escPressed) {
      this.focus();
      if (isPhone()) {
        this.fireEvent("close-menu", {});
      }
    }
  }
  _afterPopoverClose() {
    this.fireEvent("close", {}, false, false);
  }
};
__decorate([
  property_default()
], MenuItem.prototype, "text", void 0);
__decorate([
  property_default()
], MenuItem.prototype, "additionalText", void 0);
__decorate([
  property_default()
], MenuItem.prototype, "icon", void 0);
__decorate([
  property_default({ type: Boolean })
], MenuItem.prototype, "disabled", void 0);
__decorate([
  property_default({ type: Boolean })
], MenuItem.prototype, "loading", void 0);
__decorate([
  property_default({ type: Number })
], MenuItem.prototype, "loadingDelay", void 0);
__decorate([
  property_default()
], MenuItem.prototype, "accessibleName", void 0);
__decorate([
  property_default()
], MenuItem.prototype, "tooltip", void 0);
__decorate([
  property_default({ type: Boolean, noAttribute: true })
], MenuItem.prototype, "_siblingsWithIcon", void 0);
__decorate([
  slot_default({ "default": true, type: HTMLElement, invalidateOnChildChange: true })
], MenuItem.prototype, "items", void 0);
__decorate([
  slot_default({ type: HTMLElement })
], MenuItem.prototype, "endContent", void 0);
MenuItem = MenuItem_1 = __decorate([
  customElement_default({
    tag: "ui5-menu-item",
    template: MenuItemTemplate_lit_default,
    styles: [ListItem_default.styles, MenuItem_css_default],
    dependencies: [...ListItem_default.dependencies, ResponsivePopover_default, List_default, BusyIndicator_default, Icon_default]
  })
], MenuItem);
MenuItem.define();
var MenuItem_default = MenuItem;

// node_modules/@ui5/webcomponents/dist/generated/templates/MenuSeparatorTemplate.lit.js
function block02(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-li-custom", tags, suffix)} class="${classMap(this.classes.main)}" role="separator" disabled></${scopeTag("ui5-li-custom", tags, suffix)}>` : effectiveHtml`<ui5-li-custom class="${classMap(this.classes.main)}" role="separator" disabled></ui5-li-custom>`;
}
var MenuSeparatorTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/generated/themes/MenuSeparator.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = { packageName: "@ui5/webcomponents", fileName: "themes/MenuSeparator.css.ts", content: `:host{border-top:.0625rem solid var(--sapGroup_ContentBorderColor);min-height:.125rem}.ui5-menu-separator{border:inherit;min-height:inherit;background:inherit;opacity:1}
` };
var MenuSeparator_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/MenuSeparator.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MenuSeparator = class MenuSeparator2 extends ListItemBase_default {
  get isSeparator() {
    return true;
  }
  get classes() {
    return {
      main: {
        "ui5-menu-separator": true
      }
    };
  }
  /**
   * @override
   */
  get _focusable() {
    return false;
  }
  /**
   * @override
   */
  get _pressable() {
    return false;
  }
};
MenuSeparator = __decorate2([
  customElement_default({
    tag: "ui5-menu-separator",
    renderer: LitRenderer_default,
    styles: [MenuSeparator_css_default],
    template: MenuSeparatorTemplate_lit_default,
    dependencies: [
      ListItemCustom_default
    ]
  })
], MenuSeparator);
MenuSeparator.define();
var MenuSeparator_default = MenuSeparator;

// node_modules/@ui5/webcomponents/dist/generated/templates/MenuTemplate.lit.js
function block03(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" placement="Bottom" vertical-align="Bottom" .opener=${ifDefined(this.opener)} ?open=${this.open} prevent-initial-focus hide-arrow allow-target-overlap @ui5-before-open=${ifDefined(this._beforePopoverOpen)} @ui5-open=${ifDefined(this._afterPopoverOpen)} @ui5-before-close=${ifDefined(this._beforePopoverClose)} @ui5-close=${ifDefined(this._afterPopoverClose)}>${this.isPhone ? block110.call(this, context, tags, suffix) : void 0}<div id="${ifDefined(this._id)}-menu-main">${this.items.length ? block210.call(this, context, tags, suffix) : block32.call(this, context, tags, suffix)}</div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : effectiveHtml`<ui5-responsive-popover id="${ifDefined(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Start" placement="Bottom" vertical-align="Bottom" .opener=${ifDefined(this.opener)} ?open=${this.open} prevent-initial-focus hide-arrow allow-target-overlap @ui5-before-open=${ifDefined(this._beforePopoverOpen)} @ui5-open=${ifDefined(this._afterPopoverOpen)} @ui5-before-close=${ifDefined(this._beforePopoverClose)} @ui5-close=${ifDefined(this._afterPopoverClose)}>${this.isPhone ? block110.call(this, context, tags, suffix) : void 0}<div id="${ifDefined(this._id)}-menu-main">${this.items.length ? block210.call(this, context, tags, suffix) : block32.call(this, context, tags, suffix)}</div></ui5-responsive-popover>`;
}
function block110(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="header" class="ui5-menu-dialog-header"><div class="ui5-menu-dialog-title"><div>${ifDefined(this.headerText)}</div></div><${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" aria-label="${ifDefined(this.labelClose)}" @click=${this._close}></${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div slot="header" class="ui5-menu-dialog-header"><div class="ui5-menu-dialog-title"><div>${ifDefined(this.headerText)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${ifDefined(this.labelClose)}" @click=${this._close}></ui5-button></div>`;
}
function block210(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-list", tags, suffix)} id="${ifDefined(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${ifDefined(this.loadingDelay)}" separators="None" accessible-role="Menu" @ui5-item-click=${ifDefined(this._itemClick)} @ui5-close-menu=${ifDefined(this._close)} @mouseover=${this._itemMouseOver} @keydown=${this._itemKeyDown}><slot></slot></${scopeTag("ui5-list", tags, suffix)}>` : effectiveHtml`<ui5-list id="${ifDefined(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${ifDefined(this.loadingDelay)}" separators="None" accessible-role="Menu" @ui5-item-click=${ifDefined(this._itemClick)} @ui5-close-menu=${ifDefined(this._close)} @mouseover=${this._itemMouseOver} @keydown=${this._itemKeyDown}><slot></slot></ui5-list>`;
}
function block32(context, tags, suffix) {
  return effectiveHtml`${this.loading ? block42.call(this, context, tags, suffix) : void 0}`;
}
function block42(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-busy-indicator", tags, suffix)} id="${ifDefined(this._id)}-menu-busy-indicator" delay="${ifDefined(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : effectiveHtml`<ui5-busy-indicator id="${ifDefined(this._id)}-menu-busy-indicator" delay="${ifDefined(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></ui5-busy-indicator>`;
}
var MenuTemplate_lit_default = block03;

// node_modules/@ui5/webcomponents/dist/generated/themes/Menu.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData3 = { packageName: "@ui5/webcomponents", fileName: "themes/Menu.css.ts", content: `.ui5-menu-rp[ui5-responsive-popover]::part(header),.ui5-menu-rp[ui5-responsive-popover]::part(content),.ui5-menu-rp[ui5-responsive-popover]::part(footer){padding:0}.ui5-menu-rp[ui5-responsive-popover]{box-shadow:var(--sapContent_Shadow1);border-radius:var(--_ui5-v2-0-1_menu_popover_border_radius)}.ui5-menu-busy-indicator{width:100%}.ui5-menu-dialog-header{display:flex;height:var(--_ui5-v2-0-1-responsive_popover_header_height);align-items:center;justify-content:space-between;padding:0px 1rem;width:100%;overflow:hidden}.ui5-menu-dialog-title{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;width:calc(100% - 6.5rem);padding-right:1rem}.ui5-menu-dialog-title>div{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-menu-back-button{margin-right:1rem}
` };
var Menu_css_default = styleData3;

// node_modules/@ui5/webcomponents/dist/Menu.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Menu_1;
var MENU_OPEN_DELAY = 300;
var Menu = Menu_1 = class Menu2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.open = false;
    this.loading = false;
    this.loadingDelay = 1e3;
  }
  static onDefine() {
    return __async(this, null, function* () {
      Menu_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  get isRtl() {
    return this.effectiveDir === "rtl";
  }
  get labelClose() {
    return Menu_1.i18nBundle.getText(MENU_CLOSE_BUTTON_ARIA_LABEL);
  }
  get isPhone() {
    return isPhone();
  }
  get _popover() {
    return this.shadowRoot.querySelector("[ui5-responsive-popover]");
  }
  get _menuItems() {
    return this.items.filter((item) => !item.isSeparator);
  }
  onBeforeRendering() {
    const siblingsWithIcon = this._menuItems.some((menuItem) => !!menuItem.icon);
    this._menuItems.forEach((item) => {
      item._siblingsWithIcon = siblingsWithIcon;
    });
  }
  _close() {
    this.open = false;
  }
  _openItemSubMenu(item) {
    clearTimeout(this._timeout);
    if (!item._popover || item._popover.open) {
      return;
    }
    this.fireEvent("before-open", {
      item
    }, false, false);
    item._popover.opener = item;
    item._popover.open = true;
    item.selected = true;
  }
  _closeItemSubMenu(item) {
    if (item && item._popover) {
      const openedSibling = item._menuItems.find((menuItem) => menuItem._popover && menuItem._popover.open);
      if (openedSibling) {
        this._closeItemSubMenu(openedSibling);
      }
      item._popover.open = false;
      item.selected = false;
    }
  }
  _itemMouseOver(e) {
    if (isDesktop()) {
      const item = e.target;
      if (item.hasAttribute("ui5-menu-item")) {
        item.focus();
        this._startOpenTimeout(item);
      }
    }
  }
  _startOpenTimeout(item) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => {
      const opener = item.parentElement;
      const openedSibling = opener && opener._menuItems.find((menuItem) => menuItem._popover && menuItem._popover.open);
      if (openedSibling) {
        this._closeItemSubMenu(openedSibling);
      }
      this._openItemSubMenu(item);
    }, MENU_OPEN_DELAY);
  }
  _itemClick(e) {
    const item = e.detail.item;
    if (!item._popover) {
      const prevented = !this.fireEvent("item-click", {
        "item": item,
        "text": item.text || ""
      }, true, false);
      if (!prevented && this._popover) {
        item.fireEvent("close-menu", {});
      }
    } else {
      this._openItemSubMenu(item);
    }
  }
  _itemKeyDown(e) {
    if (!isLeft(e) && !isRight(e)) {
      return;
    }
    const shouldCloseMenu = this.isRtl ? isRight(e) : isLeft(e);
    const shouldOpenMenu = this.isRtl ? isLeft(e) : isRight(e);
    const item = e.target;
    const parentElement = item.parentElement;
    if (isEnter(e)) {
      e.preventDefault();
    }
    if (shouldOpenMenu) {
      this._openItemSubMenu(item);
    } else if (shouldCloseMenu && parentElement.hasAttribute("ui5-menu-item") && parentElement._popover) {
      parentElement._popover.open = false;
      parentElement.selected = false;
      parentElement._popover.opener?.focus();
    }
  }
  _beforePopoverOpen(e) {
    const prevented = !this.fireEvent("before-open", {}, true, true);
    if (prevented) {
      this.open = false;
      e.preventDefault();
    }
  }
  _afterPopoverOpen() {
    this._menuItems[0]?.focus();
    this.fireEvent("open", {}, false, true);
  }
  _beforePopoverClose(e) {
    const prevented = !this.fireEvent("before-close", { escPressed: e.detail.escPressed }, true, true);
    if (prevented) {
      this.open = true;
      e.preventDefault();
    }
  }
  _afterPopoverClose() {
    this.open = false;
    this.fireEvent("close", {}, false, true);
  }
};
__decorate3([
  property_default()
], Menu.prototype, "headerText", void 0);
__decorate3([
  property_default({ type: Boolean })
], Menu.prototype, "open", void 0);
__decorate3([
  property_default({ type: Boolean })
], Menu.prototype, "loading", void 0);
__decorate3([
  property_default({ type: Number })
], Menu.prototype, "loadingDelay", void 0);
__decorate3([
  property_default({ converter: DOMReference_default })
], Menu.prototype, "opener", void 0);
__decorate3([
  slot_default({ "default": true, type: HTMLElement, invalidateOnChildChange: true })
], Menu.prototype, "items", void 0);
Menu = Menu_1 = __decorate3([
  customElement_default({
    tag: "ui5-menu",
    renderer: LitRenderer_default,
    styles: Menu_css_default,
    template: MenuTemplate_lit_default,
    dependencies: [
      ResponsivePopover_default,
      Button_default,
      List_default,
      MenuItem_default,
      MenuSeparator_default,
      BusyIndicator_default
    ]
  }),
  event_default("item-click", {
    detail: {
      /**
       * @public
       */
      item: {
        type: HTMLElement
      },
      /**
       * @public
       */
      text: {
        type: String
      }
    }
  }),
  event_default("before-open", {
    detail: {
      /**
       * @public
       * @since 1.14.0
       */
      item: {
        type: HTMLElement
      }
    }
  }),
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
  event_default("close")
], Menu);
Menu.define();
var Menu_default = Menu;

// node_modules/@ui5/webcomponents/dist/generated/templates/NavigationMenuTemplate.lit.js
function block04(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-navigation-menu-rp" class="ui5-menu-rp ui5-navigation-menu" vertical-align="Center" .opener=${ifDefined(this.opener)} ?open=${this.open} prevent-initial-focus prevent-focus-restore @ui5-before-open=${ifDefined(this._beforePopoverOpen)} @ui5-open=${ifDefined(this._afterPopoverOpen)} @ui5-before-close=${ifDefined(this._beforePopoverClose)} @ui5-close=${ifDefined(this._afterPopoverClose)} accessible-name-ref="${ifDefined(this._id)}-navigationMenuPopoverText"><span id="${ifDefined(this._id)}-navigationMenuPopoverText" class="ui5-hidden-text">${ifDefined(this.accSideNavigationPopoverHiddenText)}</span>${this.isPhone ? block111.call(this, context, tags, suffix) : void 0}<div id="${ifDefined(this._id)}-menu-main" class="ui5-navigation-menu-main">${this.items.length ? block211.call(this, context, tags, suffix) : block33.call(this, context, tags, suffix)}</div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : effectiveHtml`<ui5-responsive-popover id="${ifDefined(this._id)}-navigation-menu-rp" class="ui5-menu-rp ui5-navigation-menu" vertical-align="Center" .opener=${ifDefined(this.opener)} ?open=${this.open} prevent-initial-focus prevent-focus-restore @ui5-before-open=${ifDefined(this._beforePopoverOpen)} @ui5-open=${ifDefined(this._afterPopoverOpen)} @ui5-before-close=${ifDefined(this._beforePopoverClose)} @ui5-close=${ifDefined(this._afterPopoverClose)} accessible-name-ref="${ifDefined(this._id)}-navigationMenuPopoverText"><span id="${ifDefined(this._id)}-navigationMenuPopoverText" class="ui5-hidden-text">${ifDefined(this.accSideNavigationPopoverHiddenText)}</span>${this.isPhone ? block111.call(this, context, tags, suffix) : void 0}<div id="${ifDefined(this._id)}-menu-main" class="ui5-navigation-menu-main">${this.items.length ? block211.call(this, context, tags, suffix) : block33.call(this, context, tags, suffix)}</div></ui5-responsive-popover>`;
}
function block111(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="header" class="ui5-menu-dialog-header"><div class="ui5-menu-dialog-title"><div>${ifDefined(this.headerText)}</div></div><${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" aria-label="${ifDefined(this.labelClose)}" @click=${this._close}></${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div slot="header" class="ui5-menu-dialog-header"><div class="ui5-menu-dialog-title"><div>${ifDefined(this.headerText)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${ifDefined(this.labelClose)}" @click=${this._close}></ui5-button></div>`;
}
function block211(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-list", tags, suffix)} accessible-role="Tree" id="${ifDefined(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${ifDefined(this.loadingDelay)}" separators="None" @ui5-item-click=${ifDefined(this._itemClick)} @ui5-close-menu=${ifDefined(this._close)} @keydown=${this._itemKeyDown}><slot></slot></${scopeTag("ui5-list", tags, suffix)}>` : effectiveHtml`<ui5-list accessible-role="Tree" id="${ifDefined(this._id)}-menu-list" selection-mode="None" ?loading="${this.loading}" loading-delay="${ifDefined(this.loadingDelay)}" separators="None" @ui5-item-click=${ifDefined(this._itemClick)} @ui5-close-menu=${ifDefined(this._close)} @keydown=${this._itemKeyDown}><slot></slot></ui5-list>`;
}
function block33(context, tags, suffix) {
  return effectiveHtml`${this.loading ? block43.call(this, context, tags, suffix) : void 0}`;
}
function block43(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-busy-indicator", tags, suffix)} id="${ifDefined(this._id)}-menu-busy-indicator" delay="${ifDefined(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : effectiveHtml`<ui5-busy-indicator id="${ifDefined(this._id)}-menu-busy-indicator" delay="${ifDefined(this.loadingDelay)}" class="ui5-menu-busy-indicator" active></ui5-busy-indicator>`;
}
var NavigationMenuTemplate_lit_default = block04;

// node_modules/@ui5/webcomponents/dist/generated/themes/NavigationMenu.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData4 = { packageName: "@ui5/webcomponents", fileName: "themes/NavigationMenu.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-navigation-menu .ui5-navigation-menu-main{padding:var(--_ui5-v2-0-1_side_navigation_parent_popup_padding)}.ui5-menu-rp.ui5-navigation-menu{box-shadow:var(--_ui5-v2-0-1_side_navigation_popup_box_shadow);min-width:10rem;background:var(--sapGroup_ContentBackground);border:none;border-radius:.75rem}.ui5-navigation-menu[sub-menu] ::slotted([ui5-navigation-menu-item]){font-weight:400}
` };
var NavigationMenu_css_default = styleData4;

// node_modules/@ui5/webcomponents/dist/NavigationMenu.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NavigationMenu_1;
var NavigationMenu = NavigationMenu_1 = class NavigationMenu2 extends Menu_default {
  _itemMouseOver(e) {
    if (isDesktop()) {
      const item = e.target;
      this._startOpenTimeout(item);
    }
  }
  get accSideNavigationPopoverHiddenText() {
    return NavigationMenu_1.i18nBundle.getText(NAVIGATION_MENU_POPOVER_HIDDEN_TEXT);
  }
};
__decorate4([
  slot_default({ "default": true, type: HTMLElement, invalidateOnChildChange: true })
], NavigationMenu.prototype, "items", void 0);
NavigationMenu = NavigationMenu_1 = __decorate4([
  customElement_default({
    tag: "ui5-navigation-menu",
    renderer: LitRenderer_default,
    styles: [Menu_css_default, NavigationMenu_css_default],
    template: NavigationMenuTemplate_lit_default
  })
], NavigationMenu);
NavigationMenu.define();
var NavigationMenu_default = NavigationMenu;

// node_modules/@ui5/webcomponents-fiori/dist/generated/templates/SideNavigationGroupTemplate.lit.js
function block05(context, tags, suffix) {
  return effectiveHtml`${this.sideNavCollapsed ? block112.call(this, context, tags, suffix) : block212.call(this, context, tags, suffix)}`;
}
function block112(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-sn-item-separator ${ifDefined(this.belowGroupClassName)}"></div><slot></slot><div class="ui5-sn-item-separator"></div>`;
}
function block212(context, tags, suffix) {
  return effectiveHtml`<li id="${ifDefined(this._id)}" class="ui5-sn-list-li ${ifDefined(this.belowGroupClassName)}" role="none"><div class="ui5-sn-item-separator"></div><div class="ui5-sn-item ui5-sn-item-group ${ifDefined(this._classes)}" role="treeitem" data-sap-focus-ref @keydown="${this._onkeydown}" @click="${this._onclick}" @focusin="${this._onfocusin}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-expanded="${ifDefined(this._expanded)}" aria-description="${ifDefined(this.accDescription)}" title="${ifDefined(this._tooltip)}" aria-owns="${ifDefined(this._groupId)}"><div class="ui5-sn-item-text">${ifDefined(this.text)}</div>${this.items.length ? block34.call(this, context, tags, suffix) : void 0}</div>${this.items.length ? block44.call(this, context, tags, suffix) : void 0}<div class="ui5-sn-item-separator"></div></li>`;
}
function block34(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="${ifDefined(this._toggleIconName)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-toggle-icon" name="${ifDefined(this._toggleIconName)}"></ui5-icon>`;
}
function block44(context, tags, suffix) {
  return effectiveHtml`<ul id="${ifDefined(this._groupId)}" class="ui5-sn-item-ul" role="group"><slot></slot></ul>`;
}
var SideNavigationGroupTemplate_lit_default = block05;

// node_modules/@ui5/webcomponents-fiori/dist/generated/themes/SideNavigationGroup.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default3;
}));
var styleData5 = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/SideNavigationGroup.css.ts", content: `.ui5-sn-item-ul{margin:0;padding:0;list-style:none}.ui5-sn-item{display:flex;align-items:center;width:100%;box-sizing:border-box;text-decoration:none;position:relative;height:var(--_ui5-v2-0-1_side_navigation_item_height);min-height:var(--_ui5-v2-0-1_side_navigation_item_height);cursor:pointer;color:inherit;background-color:var(--sapList_Background);border-radius:var(--_ui5-v2-0-1_side_navigation_item_border_radius);transition:var(--_ui5-v2-0-1_side_navigation_item_transition);margin-block-end:var(--_ui5-v2-0-1_side_navigation_item_bottom_margin)}:host(.ui5-sn-item-hidden[side-nav-collapsed]),:host([side-nav-collapsed]) .ui5-sn-item-hidden{display:none}.ui5-sn-item:focus{outline:none}:host([desktop]) .ui5-sn-item:focus:after,.ui5-sn-item:focus-visible:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;content:"";inset:var(--_ui5-v2-0-1_side_navigation_item_focus_border_offset);z-index:2;pointer-events:none;border-radius:var(--_ui5-v2-0-1_side_navigation_item_focus_border_radius)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:focus:before{border:var(--_ui5-v2-0-1_side_navigation_selected_and_focused_border_style_color)}.ui5-sn-item.ui5-sn-item-group:before,.ui5-sn-item.ui5-sn-item-level1:before{border:var(--_ui5-v2-0-1_side_navigation_group_border_style_color);border-width:var(--_ui5-v2-0-1_side_navigation_group_border_width)}.ui5-sn-item-group[aria-expanded=true]:before,.ui5-sn-item-level1[aria-expanded=true]:before{border-width:var(--_ui5-v2-0-1_side_navigation_group_expanded_border_width)}.ui5-sn-item:before{content:"";position:absolute;inset:0;pointer-events:none}.ui5-sn-item.ui5-sn-item-disabled{opacity:var(--sapContent_DisabledOpacity);cursor:default}.ui5-sn-item:not(.ui5-sn-item-disabled):hover{background:var(--sapList_Hover_Background)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected{background:var(--sapList_SelectionBackgroundColor)}.ui5-sn-item:not(.ui5-sn-item-disabled):active .ui5-sn-item-text,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active .ui5-sn-item-text{color:var(--sapList_Active_TextColor)}.ui5-sn-item:not(.ui5-sn-item-disabled):active [ui5-icon],.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active [ui5-icon]{color:var(--sapList_Active_TextColor)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:hover{background:var(--sapList_Hover_SelectionBackground)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:active,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected.ui5-sn-item-active,.ui5-sn-item:not(.ui5-sn-item-disabled):active,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:active,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected.ui5-sn-item-active{background:var(--sapList_Active_Background)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected{background:var(--_ui5-v2-0-1_side_navigation_collapsed_selected_item_background)}.ui5-sn-item:before{border:var(--_ui5-v2-0-1_side_navigation_item_border_style_color);border-width:var(--_ui5-v2-0-1_side_navigation_item_border_width)}:host([side-nav-collapsed]) .ui5-sn-item:before{border-width:var(--_ui5-v2-0-1_side_navigation_item_border_width)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:before{border:var(--_ui5-v2-0-1_side_navigation_selected_border_style_color);border-width:var(--_ui5-v2-0-1_side_navigation_selected_border_width)}.ui5-sn-item:not(.ui5-sn-item-disabled):not(.ui5-sn-item-selected):hover:before{border:var(--_ui5-v2-0-1_side_navigation_hover_border_style_color);border-width:var(--_ui5-v2-0-1_side_navigation_hover_border_width)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:before{border-radius:var(--_ui5-v2-0-1_side_navigation_item_border_radius)}:host([in-popover]:last-of-type) .ui5-sn-item:not(:hover):not(:active):before{border:var(--_ui5-v2-0-1_side_navigation_last_item_border_style)}.ui5-sn-item-icon{color:var(--_ui5-v2-0-1_side_navigation_icon_color);height:var(--_ui5-v2-0-1_side_navigation_icon_font_size);min-width:var(--_ui5-v2-0-1_side_navigation_group_icon_width)}.ui5-sn-item-toggle-icon,.ui5-sn-item-external-link-icon{color:var(--_ui5-v2-0-1_side_navigation_expand_icon_color);min-width:2rem;height:.875rem}.ui5-sn-item-external-link-icon{color:var(--_ui5-v2-0-1_side_navigation_external_link_icon_color)}.ui5-sn-item-fixed .ui5-sn-item-toggle-icon,.ui5-sn-item-fixed .ui5-sn-item-external-link-icon{display:none}:host([side-nav-collapsed]) .ui5-sn-item{justify-content:center}:host([side-nav-collapsed]) .ui5-sn-item-icon{padding:var(--_ui5-v2-0-1_side_navigation_item_collapsed_icon_padding)}:host([side-nav-collapsed]) .ui5-sn-item-text{display:none}:host([side-nav-collapsed]) .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item-external-link-icon{display:none}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus{width:var(--_ui5-v2-0-1_side_navigation_item_collapsed_hover_focus_width);box-shadow:var(--_ui5-v2-0-1_side_navigation_box_shadow);z-index:1}:host([side-nav-collapsed]) .ui5-sn-item.ui5-sn-item-selected:hover,:host([side-nav-collapsed]) .ui5-sn-item.ui5-sn-item-selected:focus{background:var(--sapList_SelectionBackgroundColor)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover:not(.ui5-sn-item-with-expander),:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus:not(.ui5-sn-item-with-expander){padding-inline-end:var(--_ui5-v2-0-1_side_navigation_item_collapsed_hover_focus_padding_right)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-text,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-text,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-external-link-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-external-link-icon{display:var(--_ui5-v2-0-1_side_navigation_item_collapsed_hover_focus_display)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon{display:var(--_ui5-v2-0-1_side_navigation_item_collapsed_hover_focus_display)}.ui5-sn-item[aria-expanded=false]+.ui5-sn-item-ul{display:none}.ui5-sn-item-text{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-sn-item-with-expander .ui5-sn-item-icon:after{display:var(--_ui5-v2-0-1_side_navigation_triangle_display);content:"";width:0;height:0;border-left:.375rem solid transparent;border-bottom:.375rem solid var(--_ui5-v2-0-1_side_navigation_triangle_color);position:absolute;right:.1875rem;bottom:.125rem}.ui5-sn-item-selection-icon{display:none;height:.5rem;width:.5rem;margin-inline:.5rem;color:var(--sapList_SelectionBorderColor)}.ui5-sn-item[aria-expanded] .ui5-sn-item-selection-icon{margin-inline:.5rem 0}.ui5-sn-item-selected .ui5-sn-item-selection-icon{display:var(--_ui5-v2-0-1_side_navigation_selection_indicator_display)}:host([in-popover]) .ui5-sn-item{padding:var(--_ui5-v2-0-1_side_navigation_popup_item_padding);width:auto}.ui5-sn-item-separator{min-height:.75rem}:host{font-size:var(--sapFontSmallSize);font-family:var(--sapFontSemiboldFamily);color:var(--sapContent_LabelColor)}.ui5-sn-item.ui5-sn-item-group{height:2rem;min-height:2rem;padding-inline-start:.5rem;gap:.4375rem}.ui5-sn-item.ui5-sn-item-group .ui5-sn-item-toggle-icon{display:none}.ui5-sn-item.ui5-sn-item-group:hover .ui5-sn-item-toggle-icon,.ui5-sn-item.ui5-sn-item-group:focus .ui5-sn-item-toggle-icon{display:block}:host(:first-child) .ui5-sn-item-separator:first-child,:host(:last-child) .ui5-sn-item-separator:last-child,.ui5-sn-item-group-below-group.ui5-sn-item-separator,.ui5-sn-item-group-below-group .ui5-sn-item-separator:first-child{display:none}
` };
var SideNavigationGroup_css_default = styleData5;

// node_modules/@ui5/webcomponents-fiori/dist/SideNavigationGroup.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SideNavigationGroup_1;
var SideNavigationGroup = SideNavigationGroup_1 = class SideNavigationGroup2 extends SideNavigationItemBase_default {
  constructor() {
    super(...arguments);
    this.expanded = false;
    this._onkeydown = (e) => {
      if (isLeft(e)) {
        this.expanded = false;
        return;
      }
      if (isRight(e)) {
        this.expanded = true;
      }
    };
    this._onclick = () => {
      this._toggle();
    };
    this._onfocusin = (e) => {
      e.stopPropagation();
      this.sideNavigation?.focusItem(this);
    };
  }
  get overflowItems() {
    const separator1 = this.shadowRoot.querySelector(".ui5-sn-item-separator:first-child");
    const separator2 = this.shadowRoot.querySelector(".ui5-sn-item-separator:last-child");
    const overflowItems = this.items.reduce((result, item) => {
      return result.concat(item.overflowItems);
    }, new Array());
    return [separator1, ...overflowItems, separator2];
  }
  get selectableItems() {
    return this.items.reduce((result, item) => {
      return result.concat(item.selectableItems);
    }, new Array());
  }
  get focusableItems() {
    if (this.sideNavCollapsed) {
      return this.items;
    }
    if (this.expanded) {
      return this.items.reduce((result, item) => {
        return result.concat(item.focusableItems);
      }, new Array(this));
    }
    return [this];
  }
  get allItems() {
    return this.items.reduce((result, item) => {
      return result.concat(item.allItems);
    }, new Array(this));
  }
  get _groupId() {
    if (!this.items.length) {
      return void 0;
    }
    return `${this._id}-group`;
  }
  get _expanded() {
    if (!this.items.length) {
      return void 0;
    }
    return this.expanded;
  }
  get _toggleIconName() {
    return this.expanded ? "navigation-down-arrow" : "navigation-right-arrow";
  }
  get belowGroupClassName() {
    if (isInstanceOfSideNavigationGroup(this.previousElementSibling)) {
      return "ui5-sn-item-group-below-group";
    }
    return "";
  }
  get accDescription() {
    return SideNavigationGroup_1.i18nBundle.getText(SIDE_NAVIGATION_GROUP_HEADER_DESC);
  }
  _toggle() {
    this.expanded = !this.expanded;
  }
  get isSideNavigationGroup() {
    return true;
  }
  static onDefine() {
    return __async(this, null, function* () {
      [SideNavigationGroup_1.i18nBundle] = yield Promise.all([
        getI18nBundle("@ui5/webcomponents-fiori"),
        __superGet(SideNavigationGroup2, this, "onDefine").call(this)
      ]);
    });
  }
};
__decorate5([
  property_default({ type: Boolean })
], SideNavigationGroup.prototype, "expanded", void 0);
__decorate5([
  slot_default({ type: HTMLElement, invalidateOnChildChange: true, "default": true })
], SideNavigationGroup.prototype, "items", void 0);
SideNavigationGroup = SideNavigationGroup_1 = __decorate5([
  customElement_default({
    tag: "ui5-side-navigation-group",
    renderer: LitRenderer_default,
    template: SideNavigationGroupTemplate_lit_default,
    styles: SideNavigationGroup_css_default,
    dependencies: [
      Icon_default
    ]
  })
], SideNavigationGroup);
SideNavigationGroup.define();
var isInstanceOfSideNavigationGroup = (object) => {
  return "isSideNavigationGroup" in object;
};
var SideNavigationGroup_default = SideNavigationGroup;

// node_modules/@ui5/webcomponents-fiori/dist/generated/templates/SideNavigationTemplate.lit.js
function block06(context, tags, suffix) {
  return suffix ? effectiveHtml`<nav class="ui5-sn-root ${classMap(this.classes.root)}" role="${ifDefined(this._rootRole)}">${this.showHeader ? block113.call(this, context, tags, suffix) : void 0}${this.collapsed ? block213.call(this, context, tags, suffix) : block35.call(this, context, tags, suffix)}${this.hasFixedItems ? block45.call(this, context, tags, suffix) : void 0}</nav><${scopeTag("ui5-navigation-menu", tags, suffix)} id="${ifDefined(this._id)}-side-navigation-overflow-menu" @ui5-before-open="${ifDefined(this._onBeforeMenuOpen)}" @ui5-before-close="${ifDefined(this._onBeforeMenuClose)}" @ui5-item-click="${ifDefined(this.handleOverflowItemClick)}" class="ui5-side-navigation-popover ui5-side-navigation-overflow-menu">${repeat(this._menuPopoverItems, (item, index) => item._id || index, (item, index) => block72.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-navigation-menu", tags, suffix)}><${scopeTag("ui5-responsive-popover", tags, suffix)} vertical-align="Top" class="ui5-side-navigation-popover" accessible-name-ref="${ifDefined(this._id)}-sideNavigationPopoverText" @ui5-open="${ifDefined(this._onAfterPopoverOpen)}" @ui5-before-open="${ifDefined(this._onBeforePopoverOpen)}" @ui5-before-close="${ifDefined(this._onBeforePopoverClose)}">${this._popoverContents ? block92.call(this, context, tags, suffix) : void 0}</${scopeTag("ui5-responsive-popover", tags, suffix)}>` : effectiveHtml`<nav class="ui5-sn-root ${classMap(this.classes.root)}" role="${ifDefined(this._rootRole)}">${this.showHeader ? block113.call(this, context, tags, suffix) : void 0}${this.collapsed ? block213.call(this, context, tags, suffix) : block35.call(this, context, tags, suffix)}${this.hasFixedItems ? block45.call(this, context, tags, suffix) : void 0}</nav><ui5-navigation-menu id="${ifDefined(this._id)}-side-navigation-overflow-menu" @ui5-before-open="${ifDefined(this._onBeforeMenuOpen)}" @ui5-before-close="${ifDefined(this._onBeforeMenuClose)}" @ui5-item-click="${ifDefined(this.handleOverflowItemClick)}" class="ui5-side-navigation-popover ui5-side-navigation-overflow-menu">${repeat(this._menuPopoverItems, (item, index) => item._id || index, (item, index) => block72.call(this, context, tags, suffix, item, index))}</ui5-navigation-menu><ui5-responsive-popover vertical-align="Top" class="ui5-side-navigation-popover" accessible-name-ref="${ifDefined(this._id)}-sideNavigationPopoverText" @ui5-open="${ifDefined(this._onAfterPopoverOpen)}" @ui5-before-open="${ifDefined(this._onBeforePopoverOpen)}" @ui5-before-close="${ifDefined(this._onBeforePopoverClose)}">${this._popoverContents ? block92.call(this, context, tags, suffix) : void 0}</ui5-responsive-popover>`;
}
function block113(context, tags, suffix) {
  return effectiveHtml`<slot name="header"></slot>`;
}
function block213(context, tags, suffix) {
  return suffix ? effectiveHtml`<div role="menubar" class="ui5-sn-list ui5-sn-flexible" aria-orientation="vertical" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}"><slot></slot><${scopeTag("ui5-side-navigation-item", tags, suffix)} is-overflow id="${ifDefined(this._id)}-sn-overflow-item" text="${ifDefined(this.overflowAccessibleName)}" @click="${this._handleOverflowClick}" class="ui5-sn-item-overflow" side-nav-collapsed icon="overflow"></${scopeTag("ui5-side-navigation-item", tags, suffix)}></div>` : effectiveHtml`<div role="menubar" class="ui5-sn-list ui5-sn-flexible" aria-orientation="vertical" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}"><slot></slot><ui5-side-navigation-item is-overflow id="${ifDefined(this._id)}-sn-overflow-item" text="${ifDefined(this.overflowAccessibleName)}" @click="${this._handleOverflowClick}" class="ui5-sn-item-overflow" side-nav-collapsed icon="overflow"></ui5-side-navigation-item></div>`;
}
function block35(context, tags, suffix) {
  return effectiveHtml`<ul role="tree" class="ui5-sn-list ui5-sn-flexible" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}"><slot></slot></ul>`;
}
function block45(context, tags, suffix) {
  return effectiveHtml`<div role="separator" class="ui5-sn-spacer"></div>${this.collapsed ? block52.call(this, context, tags, suffix) : block62.call(this, context, tags, suffix)}`;
}
function block52(context, tags, suffix) {
  return effectiveHtml`<div role="menubar" class="ui5-sn-list ui5-sn-fixed" aria-orientation="vertical" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}"><slot name="fixedItems"></slot></div>`;
}
function block62(context, tags, suffix) {
  return effectiveHtml`<ul role="tree" class="ui5-sn-list ui5-sn-fixed" aria-roledescription="${ifDefined(this.ariaRoleDescNavigationList)}"><slot name="fixedItems"></slot></ul>`;
}
function block72(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-navigation-menu-item", tags, suffix)} text="${ifDefined(item.text)}" icon="${ifDefined(item.icon)}" ?disabled="${item.disabled}" expanded="true" href="${ifDefined(item.href)}" target="${ifDefined(item.target)}" title="${ifDefined(item.title)}" .associatedItem="${ifDefined(item)}">${repeat(item.items, (item2, index2) => item2._id || index2, (item2, index2) => block82.call(this, context, tags, suffix, item2, index2))}</${scopeTag("ui5-navigation-menu-item", tags, suffix)}>` : effectiveHtml`<ui5-navigation-menu-item text="${ifDefined(item.text)}" icon="${ifDefined(item.icon)}" ?disabled="${item.disabled}" expanded="true" href="${ifDefined(item.href)}" target="${ifDefined(item.target)}" title="${ifDefined(item.title)}" .associatedItem="${ifDefined(item)}">${repeat(item.items, (item2, index2) => item2._id || index2, (item2, index2) => block82.call(this, context, tags, suffix, item2, index2))}</ui5-navigation-menu-item>`;
}
function block82(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-navigation-menu-item", tags, suffix)} text="${ifDefined(item.text)}" icon="${ifDefined(item.icon)}" ?disabled="${item.disabled}" .associatedItem="${ifDefined(item)}" expanded="true" href="${ifDefined(item.href)}" target="${ifDefined(item.target)}" title="${ifDefined(item.title)}"></${scopeTag("ui5-navigation-menu-item", tags, suffix)}>` : effectiveHtml`<ui5-navigation-menu-item text="${ifDefined(item.text)}" icon="${ifDefined(item.icon)}" ?disabled="${item.disabled}" .associatedItem="${ifDefined(item)}" expanded="true" href="${ifDefined(item.href)}" target="${ifDefined(item.target)}" title="${ifDefined(item.title)}"></ui5-navigation-menu-item>`;
}
function block92(context, tags, suffix) {
  return suffix ? effectiveHtml`<span id="${ifDefined(this._id)}-sideNavigationPopoverText" class="ui5-hidden-text">${ifDefined(this.accSideNavigationPopoverHiddenText)}</span><${scopeTag("ui5-side-navigation", tags, suffix)} in-popover class="ui5-side-navigation-in-popover"><${scopeTag("ui5-side-navigation-item", tags, suffix)} text="${ifDefined(this._popoverContents.item.text)}" tooltip="${ifDefined(this._popoverContents.item._tooltip)}" href="${ifDefined(this._popoverContents.item._href)}" target="${ifDefined(this._popoverContents.item._target)}" ?disabled="${this._popoverContents.item.disabled}" expanded="true" _fixed="true" ?selected="${this._popoverContents.item.selected}" @ui5-click="${ifDefined(this.handlePopupItemClick)}" .associatedItem="${ifDefined(this._popoverContents.item)}">${repeat(this._popoverContents.subItems, (item, index) => item._id || index, (item, index) => block102.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-side-navigation-item", tags, suffix)}></${scopeTag("ui5-side-navigation", tags, suffix)}>` : effectiveHtml`<span id="${ifDefined(this._id)}-sideNavigationPopoverText" class="ui5-hidden-text">${ifDefined(this.accSideNavigationPopoverHiddenText)}</span><ui5-side-navigation in-popover class="ui5-side-navigation-in-popover"><ui5-side-navigation-item text="${ifDefined(this._popoverContents.item.text)}" tooltip="${ifDefined(this._popoverContents.item._tooltip)}" href="${ifDefined(this._popoverContents.item._href)}" target="${ifDefined(this._popoverContents.item._target)}" ?disabled="${this._popoverContents.item.disabled}" expanded="true" _fixed="true" ?selected="${this._popoverContents.item.selected}" @ui5-click="${ifDefined(this.handlePopupItemClick)}" .associatedItem="${ifDefined(this._popoverContents.item)}">${repeat(this._popoverContents.subItems, (item, index) => item._id || index, (item, index) => block102.call(this, context, tags, suffix, item, index))}</ui5-side-navigation-item></ui5-side-navigation>`;
}
function block102(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-side-navigation-sub-item", tags, suffix)} text="${ifDefined(item.text)}" tooltip="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}" ?disabled="${item.disabled}" ?selected="${item.selected}" @ui5-click="${ifDefined(item.handlePopupItemClick)}" .associatedItem="${ifDefined(item)}"></${scopeTag("ui5-side-navigation-sub-item", tags, suffix)}>` : effectiveHtml`<ui5-side-navigation-sub-item text="${ifDefined(item.text)}" tooltip="${ifDefined(item._tooltip)}" href="${ifDefined(item._href)}" target="${ifDefined(item._target)}" ?disabled="${item.disabled}" ?selected="${item.selected}" @ui5-click="${ifDefined(item.handlePopupItemClick)}" .associatedItem="${ifDefined(item)}"></ui5-side-navigation-sub-item>`;
}
var SideNavigationTemplate_lit_default = block06;

// node_modules/@ui5/webcomponents-fiori/dist/generated/themes/SideNavigation.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default3;
}));
var styleData6 = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/SideNavigation.css.ts", content: `:host(:not([hidden])){display:inline-block;height:100%;min-width:var(--_ui5-v2-0-1_side_navigation_width);width:var(--_ui5-v2-0-1_side_navigation_width);max-width:100%;transition:width .3s,min-width .3s;border-radius:var(--_ui5-v2-0-1_side_navigation_border_radius);box-shadow:var(--_ui5-v2-0-1_side_navigation_box_shadow);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);background:var(--sapList_Background)}:host([collapsed]){min-width:var(--_ui5-v2-0-1_side_navigation_collapsed_width);width:var(--_ui5-v2-0-1_side_navigation_collapsed_width)}:host([is-touch-device]){border-radius:var(--_ui5-v2-0-1_side_navigation_phone_border_radius)}.ui5-sn-root{height:100%;display:flex;flex-direction:column;box-sizing:border-box;border-radius:inherit;border-inline-end:var(--_ui5-v2-0-1_side_navigation_border_right)}.ui5-sn-spacer{margin:var(--_ui5-v2-0-1_side_navigation_navigation_separator_margin);height:var(--_ui5-v2-0-1_side_navigation_navigation_separator_height);min-height:var(--_ui5-v2-0-1_side_navigation_navigation_separator_height);background-color:var(--_ui5-v2-0-1_side_navigation_navigation_separator_background_color);border-radius:var(--_ui5-v2-0-1_side_navigation_navigation_separator_radius)}.ui5-sn-collapsed .ui5-sn-spacer{margin:var(--_ui5-v2-0-1_side_navigation_navigation_separator_margin_collapsed)}.ui5-sn-flexible{display:flex;flex-direction:column;flex:1;min-height:0;position:relative;box-sizing:border-box}.ui5-sn-fixed{position:relative}.ui5-sn-list{margin:0;padding:var(--_ui5-v2-0-1_side_navigation_padding);list-style:none;box-sizing:border-box;overflow:hidden auto}.ui5-sn-collapsed .ui5-sn-list{overflow:visible;display:flex;flex-direction:column}:host([in-popover]) .ui5-sn-list{padding:var(--_ui5-v2-0-1_side_navigation_parent_popup_padding)}.ui5-sn-item-overflow{margin-top:auto}
` };
var SideNavigation_css_default = styleData6;

// node_modules/@ui5/webcomponents-fiori/dist/generated/themes/SideNavigationPopover.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default3;
}));
var styleData7 = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/SideNavigationPopover.css.ts", content: `.ui5-side-navigation-popover{--_ui5-v2-0-1_popover_box_shadow: var(--_ui5-v2-0-1_side_navigation_popup_box_shadow)}.ui5-side-navigation-popover::part(content){padding:0}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}
` };
var SideNavigationPopover_css_default = styleData7;

// node_modules/@ui5/webcomponents-fiori/dist/SideNavigation.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SideNavigation_1;
var PAGE_UP_DOWN_SIZE = 10;
var SideNavigation = SideNavigation_1 = class SideNavigation2 extends UI5Element_default {
  constructor() {
    super();
    this.collapsed = false;
    this.inPopover = false;
    this._menuPopoverItems = [];
    this._isOverflow = false;
    this.isTouchDevice = false;
    this._flexibleItemNavigation = new ItemNavigation_default(this, {
      skipItemsSize: PAGE_UP_DOWN_SIZE,
      navigationMode: NavigationMode_default.Vertical,
      getItemsCallback: () => this.getEnabledFlexibleItems()
    });
    this._fixedItemNavigation = new ItemNavigation_default(this, {
      skipItemsSize: PAGE_UP_DOWN_SIZE,
      navigationMode: NavigationMode_default.Vertical,
      getItemsCallback: () => this.getEnabledFixedItems()
    });
    this._handleResizeBound = this.handleResize.bind(this);
    this._isOverflow = false;
  }
  onBeforeRendering() {
    super.onBeforeRendering();
    this._getAllItems(this.items).concat(this._getAllItems(this.fixedItems)).forEach((item) => {
      item.sideNavCollapsed = this.collapsed;
      item.inPopover = this.inPopover;
      item.sideNavigation = this;
    });
  }
  _onAfterPopoverOpen() {
    const tree = this.getPickerTree();
    const selectedItem = tree._findSelectedItem(tree.items);
    if (selectedItem) {
      selectedItem.focus();
    } else {
      tree.items[0]?.focus();
    }
  }
  _onBeforePopoverOpen() {
    const popover = this.getPicker();
    popover?.opener?.classList.add("ui5-sn-item-active");
  }
  _onBeforePopoverClose() {
    const popover = this.getPicker();
    popover?.opener?.classList.remove("ui5-sn-item-active");
  }
  _onBeforeMenuOpen() {
    const popover = this.getOverflowPopover();
    popover?.opener?.classList.add("ui5-sn-item-active");
  }
  _onBeforeMenuClose() {
    const popover = this.getOverflowPopover();
    popover?.opener?.classList.remove("ui5-sn-item-active");
  }
  get accSideNavigationPopoverHiddenText() {
    return SideNavigation_1.i18nBundle.getText(SIDE_NAVIGATION_POPOVER_HIDDEN_TEXT);
  }
  get ariaRoleDescNavigationList() {
    let key = SIDE_NAVIGATION_LIST_ARIA_ROLE_DESC;
    if (this.collapsed) {
      key = SIDE_NAVIGATION_COLLAPSED_LIST_ARIA_ROLE_DESC;
    }
    return SideNavigation_1.i18nBundle.getText(key);
  }
  get overflowAccessibleName() {
    return SideNavigation_1.i18nBundle.getText(SIDE_NAVIGATION_OVERFLOW_ACCESSIBLE_NAME);
  }
  handlePopupItemClick(e) {
    const associatedItem = e.target.associatedItem;
    associatedItem.fireEvent("click");
    if (associatedItem.selected) {
      this.closePicker();
      return;
    }
    this._selectItem(associatedItem);
    this.closePicker();
    this._popoverContents.item?.getDomRef().classList.add("ui5-sn-item-no-hover-effect");
  }
  handleOverflowItemClick(e) {
    const associatedItem = e.detail?.item.associatedItem;
    associatedItem.fireEvent("click");
    if (associatedItem.selected) {
      this.closeMenu();
      return;
    }
    this._selectItem(associatedItem);
    this.closeMenu();
    if (associatedItem.nodeName.toLowerCase() === "ui5-side-navigation-sub-item") {
      const parent = associatedItem.parentElement;
      this.focusItem(parent);
      parent?.focus();
    } else {
      this.focusItem(associatedItem);
      associatedItem?.focus();
    }
  }
  getOverflowPopover() {
    return this.shadowRoot.querySelector(".ui5-side-navigation-overflow-menu");
  }
  getPicker() {
    return this.shadowRoot.querySelector("[ui5-responsive-popover]");
  }
  openPicker(opener) {
    opener.classList.add("ui5-sn-item-active");
    const responsivePopover = this.getPicker();
    responsivePopover.opener = opener;
    responsivePopover.open = true;
  }
  openOverflowMenu(opener) {
    opener.classList.add("ui5-sn-item-active");
    const menu = this.getOverflowPopover();
    menu.opener = opener;
    menu.open = true;
  }
  closePicker() {
    const responsivePopover = this.getPicker();
    responsivePopover.open = false;
  }
  closeMenu() {
    const menu = this.getOverflowPopover();
    menu.open = false;
  }
  getPickerTree() {
    const picker = this.getPicker();
    return picker.querySelector("[ui5-side-navigation]");
  }
  get hasHeader() {
    return !!this.header.length;
  }
  get showHeader() {
    return this.hasHeader && !this.collapsed;
  }
  get hasFixedItems() {
    return !!this.fixedItems.length;
  }
  get _rootRole() {
    return this.inPopover ? "none" : void 0;
  }
  get classes() {
    return {
      root: {
        "ui5-sn-collapsed": this.collapsed
      }
    };
  }
  getEnabledFixedItems() {
    return this.getEnabledItems(this.fixedItems);
  }
  getEnabledFlexibleItems() {
    const items = this.getEnabledItems(this.items);
    if (this._overflowItem) {
      items.push(this._overflowItem);
    }
    return items;
  }
  getEnabledItems(items) {
    const result = new Array();
    this._getFocusableItems(items).forEach((item) => {
      if (item.classList.contains("ui5-sn-item-hidden")) {
        return;
      }
      if (!item.disabled) {
        result.push(item);
      }
    });
    return result;
  }
  focusItem(item) {
    if (item.isFixedItem) {
      this._fixedItemNavigation.setCurrentItem(item);
    } else {
      this._flexibleItemNavigation.setCurrentItem(item);
    }
  }
  onAfterRendering() {
    if (!this.getDomRef()?.matches(":focus-within")) {
      let selectedItem = this._findSelectedItem(this.items);
      if (selectedItem) {
        this._flexibleItemNavigation.setCurrentItem(selectedItem);
      }
      selectedItem = this._findSelectedItem(this.fixedItems);
      if (selectedItem) {
        this._fixedItemNavigation.setCurrentItem(selectedItem);
      }
    }
    if (this.collapsed) {
      this.handleResize();
    }
  }
  onEnterDOM() {
    ResizeHandler_default.register(this, this._handleResizeBound);
    this.isTouchDevice = isPhone() || isTablet() && !isCombi();
  }
  onExitDOM() {
    ResizeHandler_default.deregister(this, this._handleResizeBound);
  }
  handleResize() {
    this._updateOverflowItems();
  }
  _updateOverflowItems() {
    const domRef = this.getDomRef();
    if (!this.collapsed || !domRef) {
      return null;
    }
    const overflowItem = this._overflowItem;
    const flexibleContentDomRef = domRef.querySelector(".ui5-sn-flexible");
    if (!overflowItem) {
      return null;
    }
    overflowItem.classList.add("ui5-sn-item-hidden");
    const overflowItems = this.overflowItems;
    let itemsHeight = overflowItems.reduce((sum, itemRef) => {
      itemRef.classList.remove("ui5-sn-item-hidden");
      return sum + itemRef.offsetHeight;
    }, 0);
    const { paddingTop, paddingBottom } = window.getComputedStyle(flexibleContentDomRef);
    const listHeight = flexibleContentDomRef?.offsetHeight - parseInt(paddingTop) - parseInt(paddingBottom);
    if (itemsHeight <= listHeight) {
      return;
    }
    overflowItem.classList.remove("ui5-sn-item-hidden");
    itemsHeight = overflowItem.offsetHeight;
    const selectedItem = overflowItems.find((item) => {
      return isInstanceOfSideNavigationSelectableItemBase(item) && item._selected;
    });
    if (selectedItem && isInstanceOfSideNavigationItemBase(selectedItem)) {
      const selectedItemDomRef = selectedItem.getDomRef();
      const { marginTop, marginBottom } = window.getComputedStyle(selectedItemDomRef);
      itemsHeight += selectedItemDomRef.offsetHeight + parseFloat(marginTop) + parseFloat(marginBottom);
    }
    overflowItems.forEach((item) => {
      if (item === selectedItem) {
        return;
      }
      let itemDomRef;
      if (isInstanceOfSideNavigationItemBase(item)) {
        itemDomRef = item.getDomRef();
      } else {
        itemDomRef = item;
      }
      const { marginTop, marginBottom } = window.getComputedStyle(itemDomRef);
      itemsHeight += itemDomRef.offsetHeight + parseFloat(marginTop) + parseFloat(marginBottom);
      if (itemsHeight > listHeight) {
        item.classList.add("ui5-sn-item-hidden");
      }
    });
    this._flexibleItemNavigation._init();
  }
  _findFocusedItem(items) {
    return this._getFocusableItems(items).find((item) => item.forcedTabIndex === "0");
  }
  _getSelectableItems(items) {
    return items.reduce((result, item) => {
      return result.concat(item.selectableItems);
    }, new Array());
  }
  _getFocusableItems(items) {
    return items.reduce((result, item) => {
      return result.concat(item.focusableItems);
    }, new Array());
  }
  _getAllItems(items) {
    return items.reduce((result, item) => {
      return result.concat(item.allItems);
    }, new Array());
  }
  _findSelectedItem(items) {
    return this._getSelectableItems(items).find((item) => item._selected);
  }
  get overflowItems() {
    return this.items.reduce((result, item) => {
      return result.concat(item.overflowItems);
    }, new Array());
  }
  _handleItemClick(e, item) {
    if (item.selected && !this.collapsed) {
      item.fireEvent("click");
      return;
    }
    if (this.collapsed && isInstanceOfSideNavigationItem(item) && item.items.length) {
      e.preventDefault();
      this._isOverflow = false;
      this._popoverContents = {
        item,
        subItems: item.items
      };
      this.openPicker(item.getFocusDomRef());
    } else {
      item.fireEvent("click");
      if (!item.selected) {
        this._selectItem(item);
      }
    }
  }
  _handleOverflowClick() {
    this._isOverflow = true;
    this._menuPopoverItems = this._getOverflowItems();
    this.openOverflowMenu(this._overflowItem.getFocusDomRef());
  }
  _getOverflowItems() {
    const overflowClass = "ui5-sn-item-hidden";
    const result = [];
    this.overflowItems.forEach((item) => {
      if (isInstanceOfSideNavigationSelectableItemBase(item) && item.classList.contains(overflowClass)) {
        result.push(item);
      }
    });
    return result;
  }
  _selectItem(item) {
    if (item.disabled) {
      return;
    }
    if (!this.fireEvent("selection-change", { item }, true)) {
      return;
    }
    let items = this._getSelectableItems(this.items);
    items = items.concat(this._getSelectableItems(this.fixedItems));
    items.forEach((current) => {
      current.selected = false;
    });
    item.selected = true;
  }
  get _overflowItem() {
    const overflowItem = this.shadowRoot.querySelector(".ui5-sn-item-overflow");
    if (overflowItem) {
      overflowItem.sideNavigation = this;
    }
    return overflowItem;
  }
  get isOverflow() {
    return this._isOverflow;
  }
  _onkeydownOverflow(e) {
    if (isSpace(e)) {
      e.preventDefault();
    }
    if (isEnter(e)) {
      this._handleOverflowClick();
    }
  }
  _onkeyupOverflow(e) {
    if (isSpace(e)) {
      this._handleOverflowClick();
    }
  }
  static onDefine() {
    return __async(this, null, function* () {
      [SideNavigation_1.i18nBundle] = yield Promise.all([
        getI18nBundle("@ui5/webcomponents-fiori"),
        __superGet(SideNavigation2, this, "onDefine").call(this)
      ]);
    });
  }
};
__decorate6([
  property_default({ type: Boolean })
], SideNavigation.prototype, "collapsed", void 0);
__decorate6([
  slot_default({ type: HTMLElement, invalidateOnChildChange: true, "default": true })
], SideNavigation.prototype, "items", void 0);
__decorate6([
  slot_default({ type: HTMLElement, invalidateOnChildChange: true })
], SideNavigation.prototype, "fixedItems", void 0);
__decorate6([
  slot_default()
], SideNavigation.prototype, "header", void 0);
__decorate6([
  property_default({ type: Object })
], SideNavigation.prototype, "_popoverContents", void 0);
__decorate6([
  property_default({ type: Boolean })
], SideNavigation.prototype, "inPopover", void 0);
__decorate6([
  property_default({ type: Array })
], SideNavigation.prototype, "_menuPopoverItems", void 0);
__decorate6([
  property_default({ type: Boolean })
], SideNavigation.prototype, "isTouchDevice", void 0);
SideNavigation = SideNavigation_1 = __decorate6([
  customElement_default({
    tag: "ui5-side-navigation",
    fastNavigation: true,
    renderer: LitRenderer_default,
    template: SideNavigationTemplate_lit_default,
    styles: [SideNavigation_css_default, SideNavigationPopover_css_default],
    dependencies: [
      ResponsivePopover_default,
      SideNavigationGroup_default,
      SideNavigationItem_default,
      SideNavigationSubItem_default,
      NavigationMenu_default
    ]
  }),
  event_default("selection-change", {
    detail: {
      /**
       * @public
       */
      item: { type: HTMLElement }
    }
  })
], SideNavigation);
SideNavigation.define();
var SideNavigation_default = SideNavigation;

export {
  SideNavigation_default
};
//# sourceMappingURL=chunk-ETWKRVNO.js.map
