import {
  SideNavigationSelectableItemBase_default
} from "./chunk-L3KJOGNW.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-XGRVZEVU.js";
import {
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  isLeft,
  isRight
} from "./chunk-ECUZOJV2.js";
import {
  LitRenderer_default,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  scopeTag
} from "./chunk-DMMFI3C7.js";
import {
  registerIcon
} from "./chunk-XOBH4D6P.js";
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

// node_modules/@ui5/webcomponents-icons/dist/v4/navigation-right-arrow.js
var name = "navigation-right-arrow";
var pathData = "M296 268q11-12 0-23L139 86q-10-10-10-23t10-22q9-10 22-10t23 10l191 193q9 9 9 22.5t-9 22.5L183 471q-10 10-23 10t-23-10q-9-9-9-22.5t9-22.5z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/navigation-right-arrow.js
var name2 = "navigation-right-arrow";
var pathData2 = "M186 416q-11 0-18.5-7.5T160 390q0-10 8-18l121-116-121-116q-8-8-8-18 0-11 7.5-18.5T186 96q10 0 17 7l141 134q8 8 8 19 0 12-8 18L203 409q-7 7-17 7z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/navigation-right-arrow.js
var navigation_right_arrow_default = "navigation-right-arrow";

// node_modules/@ui5/webcomponents-icons/dist/v4/navigation-down-arrow.js
var name3 = "navigation-down-arrow";
var pathData3 = "M425.5 137q9-9 22.5-9t22.5 9q10 10 10 23t-10 23l-193 197q-4 2-5 3-2 1-2.5 1.5t-2.5 1.5q-6 2-11 2-2 0-3-.5t-2-.5q-4 0-6-1t-3.5-2-3.5-2q-1-1-1.5-1t-1.5-1-2-1l-192-196q-10-10-10-23t10-23q9-9 22.5-9t22.5 9l154 155q16 10 32 0z";
var ltr3 = false;
var collection3 = "SAP-icons-v4";
var packageName3 = "@ui5/webcomponents-icons";
registerIcon(name3, { pathData: pathData3, ltr: ltr3, collection: collection3, packageName: packageName3 });

// node_modules/@ui5/webcomponents-icons/dist/v5/navigation-down-arrow.js
var name4 = "navigation-down-arrow";
var pathData4 = "M96 186q0-11 7.5-18.5T122 160q10 0 18 8l116 121 116-121q8-8 18-8 11 0 18.5 7.5T416 186q0 10-7 17L275 344q-8 8-19 8-12 0-18-8L103 203q-7-7-7-17z";
var ltr4 = false;
var collection4 = "SAP-icons-v5";
var packageName4 = "@ui5/webcomponents-icons";
registerIcon(name4, { pathData: pathData4, ltr: ltr4, collection: collection4, packageName: packageName4 });

// node_modules/@ui5/webcomponents-icons/dist/navigation-down-arrow.js
var navigation_down_arrow_default = "navigation-down-arrow";

// node_modules/@ui5/webcomponents-fiori/dist/generated/templates/SideNavigationItemTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`${this.sideNavCollapsed ? block1.call(this, context, tags, suffix) : block8.call(this, context, tags, suffix)}`;
}
function block1(context, tags, suffix) {
  return effectiveHtml`${this._href ? block2.call(this, context, tags, suffix) : block5.call(this, context, tags, suffix)}`;
}
function block2(context, tags, suffix) {
  return suffix ? effectiveHtml`<a id="${ifDefined(this._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(this._classes)}" role="${ifDefined(this.ariaRole)}" data-sap-focus-ref @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @mouseenter="${this._onmouseenter}" @mouseleave="${this._onmouseleave}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-haspopup="${ifDefined(this._ariaHasPopup)}" aria-checked="${ifDefined(this._ariaChecked)}" title="${ifDefined(this._tooltip)}" href="${ifDefined(this._href)}" target="${ifDefined(this._target)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}><div class="ui5-sn-item-text">${ifDefined(this.text)}</div>${this.items.length ? block3.call(this, context, tags, suffix) : void 0}${this.isExternalLink ? block4.call(this, context, tags, suffix) : void 0}</a>` : effectiveHtml`<a id="${ifDefined(this._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(this._classes)}" role="${ifDefined(this.ariaRole)}" data-sap-focus-ref @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @mouseenter="${this._onmouseenter}" @mouseleave="${this._onmouseleave}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-haspopup="${ifDefined(this._ariaHasPopup)}" aria-checked="${ifDefined(this._ariaChecked)}" title="${ifDefined(this._tooltip)}" href="${ifDefined(this._href)}" target="${ifDefined(this._target)}"><ui5-icon class="ui5-sn-item-icon" name="${ifDefined(this.icon)}"></ui5-icon><div class="ui5-sn-item-text">${ifDefined(this.text)}</div>${this.items.length ? block3.call(this, context, tags, suffix) : void 0}${this.isExternalLink ? block4.call(this, context, tags, suffix) : void 0}</a>`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></ui5-icon>`;
}
function block4(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`;
}
function block5(context, tags, suffix) {
  return suffix ? effectiveHtml`<div id="${ifDefined(this._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(this._classes)}" role="${ifDefined(this.ariaRole)}" data-sap-focus-ref @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @mouseenter="${this._onmouseenter}" @mouseleave="${this._onmouseleave}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-haspopup="${ifDefined(this._ariaHasPopup)}" aria-checked="${ifDefined(this._ariaChecked)}" title="${ifDefined(this._tooltip)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}><div class="ui5-sn-item-text">${ifDefined(this.text)}</div>${this.items.length ? block6.call(this, context, tags, suffix) : void 0}${this.isExternalLink ? block7.call(this, context, tags, suffix) : void 0}</div>` : effectiveHtml`<div id="${ifDefined(this._id)}" class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(this._classes)}" role="${ifDefined(this.ariaRole)}" data-sap-focus-ref @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @mouseenter="${this._onmouseenter}" @mouseleave="${this._onmouseleave}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-haspopup="${ifDefined(this._ariaHasPopup)}" aria-checked="${ifDefined(this._ariaChecked)}" title="${ifDefined(this._tooltip)}"><ui5-icon class="ui5-sn-item-icon" name="${ifDefined(this.icon)}"></ui5-icon><div class="ui5-sn-item-text">${ifDefined(this.text)}</div>${this.items.length ? block6.call(this, context, tags, suffix) : void 0}${this.isExternalLink ? block7.call(this, context, tags, suffix) : void 0}</div>`;
}
function block6(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-toggle-icon" name="navigation-right-arrow"></ui5-icon>`;
}
function block7(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`;
}
function block8(context, tags, suffix) {
  return effectiveHtml`<li id="${ifDefined(this._id)}" class="ui5-sn-list-li" role="none">${this._href ? block9.call(this, context, tags, suffix) : block13.call(this, context, tags, suffix)}${this.items.length ? block17.call(this, context, tags, suffix) : void 0}</li>`;
}
function block9(context, tags, suffix) {
  return suffix ? effectiveHtml`<a class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(this._classes)}" role="${ifDefined(this.ariaRole)}" data-sap-focus-ref @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusin="${this._onfocusin}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-expanded="${ifDefined(this._expanded)}" aria-current="${ifDefined(this._ariaCurrent)}" aria-selected="${ifDefined(this.selected)}" title="${ifDefined(this._tooltip)}" aria-owns="${ifDefined(this._groupId)}" href="${ifDefined(this._href)}" target="${ifDefined(this._target)}">${this.icon ? block10.call(this, context, tags, suffix) : void 0}<div class="ui5-sn-item-text">${ifDefined(this.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}>${this.isExternalLink ? block11.call(this, context, tags, suffix) : void 0}${this.items.length ? block12.call(this, context, tags, suffix) : void 0}</a>` : effectiveHtml`<a class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(this._classes)}" role="${ifDefined(this.ariaRole)}" data-sap-focus-ref @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusin="${this._onfocusin}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-expanded="${ifDefined(this._expanded)}" aria-current="${ifDefined(this._ariaCurrent)}" aria-selected="${ifDefined(this.selected)}" title="${ifDefined(this._tooltip)}" aria-owns="${ifDefined(this._groupId)}" href="${ifDefined(this._href)}" target="${ifDefined(this._target)}">${this.icon ? block10.call(this, context, tags, suffix) : void 0}<div class="ui5-sn-item-text">${ifDefined(this.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon>${this.isExternalLink ? block11.call(this, context, tags, suffix) : void 0}${this.items.length ? block12.call(this, context, tags, suffix) : void 0}</a>`;
}
function block10(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(this.icon)}"></ui5-icon>`;
}
function block11(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`;
}
function block12(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="${ifDefined(this._toggleIconName)}" @click="${this._onToggleClick}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-toggle-icon" name="${ifDefined(this._toggleIconName)}" @click="${this._onToggleClick}"></ui5-icon>`;
}
function block13(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(this._classes)}" role="${ifDefined(this.ariaRole)}" data-sap-focus-ref @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusin="${this._onfocusin}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-expanded="${ifDefined(this._expanded)}" aria-current="${ifDefined(this._ariaCurrent)}" aria-selected="${ifDefined(this.selected)}" title="${ifDefined(this._tooltip)}" aria-owns="${ifDefined(this._groupId)}">${this.icon ? block14.call(this, context, tags, suffix) : void 0}<div class="ui5-sn-item-text">${ifDefined(this.text)}</div><${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-selection-icon" name="circle-task-2"></${scopeTag("ui5-icon", tags, suffix)}>${this.isExternalLink ? block15.call(this, context, tags, suffix) : void 0}${this.items.length ? block16.call(this, context, tags, suffix) : void 0}</div>` : effectiveHtml`<div class="ui5-sn-item ui5-sn-item-level1 ${ifDefined(this._classes)}" role="${ifDefined(this.ariaRole)}" data-sap-focus-ref @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusin="${this._onfocusin}" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-expanded="${ifDefined(this._expanded)}" aria-current="${ifDefined(this._ariaCurrent)}" aria-selected="${ifDefined(this.selected)}" title="${ifDefined(this._tooltip)}" aria-owns="${ifDefined(this._groupId)}">${this.icon ? block14.call(this, context, tags, suffix) : void 0}<div class="ui5-sn-item-text">${ifDefined(this.text)}</div><ui5-icon class="ui5-sn-item-selection-icon" name="circle-task-2"></ui5-icon>${this.isExternalLink ? block15.call(this, context, tags, suffix) : void 0}${this.items.length ? block16.call(this, context, tags, suffix) : void 0}</div>`;
}
function block14(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-icon" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-icon" name="${ifDefined(this.icon)}"></ui5-icon>`;
}
function block15(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-external-link-icon" name="arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-external-link-icon" name="arrow-right"></ui5-icon>`;
}
function block16(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-sn-item-toggle-icon" name="${ifDefined(this._toggleIconName)}" @click="${this._onToggleClick}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-sn-item-toggle-icon" name="${ifDefined(this._toggleIconName)}" @click="${this._onToggleClick}"></ui5-icon>`;
}
function block17(context, tags, suffix) {
  return effectiveHtml`<ul id="${ifDefined(this._groupId)}" class="ui5-sn-item-ul" role="group"><slot></slot></ul>`;
}
var SideNavigationItemTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents-fiori/dist/generated/themes/SideNavigationItem.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/SideNavigationItem.css.ts", content: `.ui5-sn-item-ul{margin:0;padding:0;list-style:none}.ui5-sn-item{display:flex;align-items:center;width:100%;box-sizing:border-box;text-decoration:none;position:relative;height:var(--_ui5-v2-0-1_side_navigation_item_height);min-height:var(--_ui5-v2-0-1_side_navigation_item_height);cursor:pointer;color:inherit;background-color:var(--sapList_Background);border-radius:var(--_ui5-v2-0-1_side_navigation_item_border_radius);transition:var(--_ui5-v2-0-1_side_navigation_item_transition);margin-block-end:var(--_ui5-v2-0-1_side_navigation_item_bottom_margin)}:host(.ui5-sn-item-hidden[side-nav-collapsed]),:host([side-nav-collapsed]) .ui5-sn-item-hidden{display:none}.ui5-sn-item:focus{outline:none}:host([desktop]) .ui5-sn-item:focus:after,.ui5-sn-item:focus-visible:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;content:"";inset:var(--_ui5-v2-0-1_side_navigation_item_focus_border_offset);z-index:2;pointer-events:none;border-radius:var(--_ui5-v2-0-1_side_navigation_item_focus_border_radius)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:focus:before{border:var(--_ui5-v2-0-1_side_navigation_selected_and_focused_border_style_color)}.ui5-sn-item.ui5-sn-item-group:before,.ui5-sn-item.ui5-sn-item-level1:before{border:var(--_ui5-v2-0-1_side_navigation_group_border_style_color);border-width:var(--_ui5-v2-0-1_side_navigation_group_border_width)}.ui5-sn-item-group[aria-expanded=true]:before,.ui5-sn-item-level1[aria-expanded=true]:before{border-width:var(--_ui5-v2-0-1_side_navigation_group_expanded_border_width)}.ui5-sn-item:before{content:"";position:absolute;inset:0;pointer-events:none}.ui5-sn-item.ui5-sn-item-disabled{opacity:var(--sapContent_DisabledOpacity);cursor:default}.ui5-sn-item:not(.ui5-sn-item-disabled):hover{background:var(--sapList_Hover_Background)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected{background:var(--sapList_SelectionBackgroundColor)}.ui5-sn-item:not(.ui5-sn-item-disabled):active .ui5-sn-item-text,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active .ui5-sn-item-text{color:var(--sapList_Active_TextColor)}.ui5-sn-item:not(.ui5-sn-item-disabled):active [ui5-icon],.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active [ui5-icon]{color:var(--sapList_Active_TextColor)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:hover{background:var(--sapList_Hover_SelectionBackground)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:active,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected.ui5-sn-item-active,.ui5-sn-item:not(.ui5-sn-item-disabled):active,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:active,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected.ui5-sn-item-active{background:var(--sapList_Active_Background)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected{background:var(--_ui5-v2-0-1_side_navigation_collapsed_selected_item_background)}.ui5-sn-item:before{border:var(--_ui5-v2-0-1_side_navigation_item_border_style_color);border-width:var(--_ui5-v2-0-1_side_navigation_item_border_width)}:host([side-nav-collapsed]) .ui5-sn-item:before{border-width:var(--_ui5-v2-0-1_side_navigation_item_border_width)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:before{border:var(--_ui5-v2-0-1_side_navigation_selected_border_style_color);border-width:var(--_ui5-v2-0-1_side_navigation_selected_border_width)}.ui5-sn-item:not(.ui5-sn-item-disabled):not(.ui5-sn-item-selected):hover:before{border:var(--_ui5-v2-0-1_side_navigation_hover_border_style_color);border-width:var(--_ui5-v2-0-1_side_navigation_hover_border_width)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:before{border-radius:var(--_ui5-v2-0-1_side_navigation_item_border_radius)}:host([in-popover]:last-of-type) .ui5-sn-item:not(:hover):not(:active):before{border:var(--_ui5-v2-0-1_side_navigation_last_item_border_style)}.ui5-sn-item-icon{color:var(--_ui5-v2-0-1_side_navigation_icon_color);height:var(--_ui5-v2-0-1_side_navigation_icon_font_size);min-width:var(--_ui5-v2-0-1_side_navigation_group_icon_width)}.ui5-sn-item-toggle-icon,.ui5-sn-item-external-link-icon{color:var(--_ui5-v2-0-1_side_navigation_expand_icon_color);min-width:2rem;height:.875rem}.ui5-sn-item-external-link-icon{color:var(--_ui5-v2-0-1_side_navigation_external_link_icon_color)}.ui5-sn-item-fixed .ui5-sn-item-toggle-icon,.ui5-sn-item-fixed .ui5-sn-item-external-link-icon{display:none}:host([side-nav-collapsed]) .ui5-sn-item{justify-content:center}:host([side-nav-collapsed]) .ui5-sn-item-icon{padding:var(--_ui5-v2-0-1_side_navigation_item_collapsed_icon_padding)}:host([side-nav-collapsed]) .ui5-sn-item-text{display:none}:host([side-nav-collapsed]) .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item-external-link-icon{display:none}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus{width:var(--_ui5-v2-0-1_side_navigation_item_collapsed_hover_focus_width);box-shadow:var(--_ui5-v2-0-1_side_navigation_box_shadow);z-index:1}:host([side-nav-collapsed]) .ui5-sn-item.ui5-sn-item-selected:hover,:host([side-nav-collapsed]) .ui5-sn-item.ui5-sn-item-selected:focus{background:var(--sapList_SelectionBackgroundColor)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover:not(.ui5-sn-item-with-expander),:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus:not(.ui5-sn-item-with-expander){padding-inline-end:var(--_ui5-v2-0-1_side_navigation_item_collapsed_hover_focus_padding_right)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-text,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-text,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-external-link-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-external-link-icon{display:var(--_ui5-v2-0-1_side_navigation_item_collapsed_hover_focus_display)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon{display:var(--_ui5-v2-0-1_side_navigation_item_collapsed_hover_focus_display)}.ui5-sn-item[aria-expanded=false]+.ui5-sn-item-ul{display:none}.ui5-sn-item-text{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-sn-item-with-expander .ui5-sn-item-icon:after{display:var(--_ui5-v2-0-1_side_navigation_triangle_display);content:"";width:0;height:0;border-left:.375rem solid transparent;border-bottom:.375rem solid var(--_ui5-v2-0-1_side_navigation_triangle_color);position:absolute;right:.1875rem;bottom:.125rem}.ui5-sn-item-selection-icon{display:none;height:.5rem;width:.5rem;margin-inline:.5rem;color:var(--sapList_SelectionBorderColor)}.ui5-sn-item[aria-expanded] .ui5-sn-item-selection-icon{margin-inline:.5rem 0}.ui5-sn-item-selected .ui5-sn-item-selection-icon{display:var(--_ui5-v2-0-1_side_navigation_selection_indicator_display)}:host([in-popover]) .ui5-sn-item{padding:var(--_ui5-v2-0-1_side_navigation_popup_item_padding);width:auto}.ui5-sn-item-separator{min-height:.75rem}:host{color:var(--sapList_TextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--_ui5-v2-0-1_side_navigation_group_text_weight)}.ui5-sn-item-level1:not(:has(>.ui5-sn-item-icon)),.ui5-sn-item-level1.ui5-sn-item-selected:not(:has(>.ui5-sn-item-icon)){padding-inline-start:var(--_ui5-v2-0-1_side_navigation_item_padding_left)}:host([in-popover]) .ui5-sn-item-level1{margin-bottom:var(--_ui5-v2-0-1_side_navigation_group_bottom_margin_in_popup)}:host([in-popover]) .ui5-sn-item-level1 .ui5-sn-item-text{margin:0 1rem 0 0;font-size:var(--_ui5-v2-0-1_side_navigation_popup_title_text_size);line-height:var(--_ui5-v2-0-1_side_navigation_popup_title_line_height)}.ui5-sn-item.ui5-sn-item-level1.ui5-sn-item-overflow{margin-top:auto}
` };
var SideNavigationItem_css_default = styleData;

// node_modules/@ui5/webcomponents-fiori/dist/SideNavigationItem.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SideNavigationItem = class SideNavigationItem2 extends SideNavigationSelectableItemBase_default {
  constructor() {
    super(...arguments);
    this.expanded = false;
    this._fixed = false;
    this._onToggleClick = (e) => {
      e.stopPropagation();
      this.expanded = !this.expanded;
    };
    this._onkeydown = (e) => {
      if (isLeft(e)) {
        this.expanded = false;
        return;
      }
      if (isRight(e)) {
        this.expanded = true;
        return;
      }
      super._onkeydown(e);
    };
    this._onkeyup = (e) => {
      super._onkeyup(e);
    };
    this._onfocusin = (e) => {
      super._onfocusin(e);
    };
    this._onclick = (e) => {
      super._onclick(e);
    };
    this._onfocusout = () => {
      if (!this.sideNavCollapsed) {
        return;
      }
      this.getDomRef().classList.remove("ui5-sn-item-no-hover-effect");
    };
    this._onmouseenter = () => {
      if (!this.sideNavCollapsed) {
        return;
      }
      this.getDomRef().classList.remove("ui5-sn-item-no-hover-effect");
    };
    this._onmouseleave = () => {
      if (!this.sideNavCollapsed || !this._selected) {
        return;
      }
      this.getDomRef().classList.add("ui5-sn-item-no-hover-effect");
    };
  }
  get overflowItems() {
    return [this];
  }
  get selectableItems() {
    return [this, ...this.items];
  }
  get focusableItems() {
    if (this.sideNavCollapsed) {
      return [this];
    }
    if (this.expanded) {
      return [this, ...this.items];
    }
    return [this];
  }
  get allItems() {
    return [this, ...this.items];
  }
  get _ariaHasPopup() {
    if (!this.disabled && this.sideNavCollapsed && this.items.length) {
      return "tree";
    }
    return void 0;
  }
  get _ariaChecked() {
    if (this.isOverflow) {
      return void 0;
    }
    return this.selected;
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
  get classesArray() {
    const classes = super.classesArray;
    if (!this.disabled && this.parentNode.collapsed && this.items.length) {
      classes.push("ui5-sn-item-with-expander");
    }
    if (this._fixed) {
      classes.push("ui5-sn-item-fixed");
    }
    return classes;
  }
  get _selected() {
    if (this.sideNavCollapsed) {
      return this.selected || this.items.some((item) => item.selected);
    }
    return this.selected;
  }
  get isSideNavigationItem() {
    return true;
  }
};
__decorate([
  property_default({ type: Boolean })
], SideNavigationItem.prototype, "expanded", void 0);
__decorate([
  property_default({ type: Boolean })
], SideNavigationItem.prototype, "_fixed", void 0);
__decorate([
  slot_default({ type: HTMLElement, invalidateOnChildChange: true, "default": true })
], SideNavigationItem.prototype, "items", void 0);
SideNavigationItem = __decorate([
  customElement_default({
    tag: "ui5-side-navigation-item",
    renderer: LitRenderer_default,
    template: SideNavigationItemTemplate_lit_default,
    styles: SideNavigationItem_css_default,
    dependencies: [
      Icon_default
    ]
  })
], SideNavigationItem);
SideNavigationItem.define();
var isInstanceOfSideNavigationItem = (object) => {
  return "isSideNavigationItem" in object;
};
var SideNavigationItem_default = SideNavigationItem;

export {
  navigation_right_arrow_default,
  navigation_down_arrow_default,
  isInstanceOfSideNavigationItem,
  SideNavigationItem_default
};
//# sourceMappingURL=chunk-PK5WCAQQ.js.map
