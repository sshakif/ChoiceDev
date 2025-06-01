import {
  getEffectiveAriaLabelText
} from "./chunk-HWWW4G3G.js";
import {
  FORM_CHECKABLE_REQUIRED
} from "./chunk-U6TJ47RH.js";
import {
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  isDesktop,
  isEnter,
  isSafari,
  isSpace
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

// node_modules/@ui5/webcomponents-icons/dist/v4/less.js
var name = "less";
var pathData = "M464 224q16 0 16 16v32q0 16-16 16H48q-6 0-11-4.5T32 272v-32q0-7 5-11.5t11-4.5h416z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/less.js
var name2 = "less";
var pathData2 = "M454 275H58q-11 0-18.5-7T32 250t7.5-18.5T58 224h396q11 0 18.5 7.5T480 250t-7.5 18-18.5 7z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents/dist/types/SwitchDesign.js
var SwitchDesign;
(function(SwitchDesign2) {
  SwitchDesign2["Textual"] = "Textual";
  SwitchDesign2["Graphical"] = "Graphical";
})(SwitchDesign || (SwitchDesign = {}));
var SwitchDesign_default = SwitchDesign;

// node_modules/@ui5/webcomponents/dist/generated/templates/SwitchTemplate.lit.js
function block0(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-switch-root ${classMap(this.classes.main)}" role="switch" aria-label="${ifDefined(this.ariaLabelText)}" aria-checked="${ifDefined(this.checked)}" aria-disabled="${ifDefined(this.effectiveAriaDisabled)}" aria-required="${ifDefined(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${ifDefined(this.effectiveTabIndex)}" title="${ifDefined(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}<span class="ui5-switch-handle" part="handle"><${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-handle-icon"></${scopeTag("ui5-icon", tags, suffix)}></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/></div>` : effectiveHtml`<div class="ui5-switch-root ${classMap(this.classes.main)}" role="switch" aria-label="${ifDefined(this.ariaLabelText)}" aria-checked="${ifDefined(this.checked)}" aria-disabled="${ifDefined(this.effectiveAriaDisabled)}" aria-required="${ifDefined(this.required)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" tabindex="${ifDefined(this.effectiveTabIndex)}" title="${ifDefined(this.tooltip)}"><div class="ui5-switch-inner"><div class="ui5-switch-track" part="slider"><div class="ui5-switch-slider">${this.graphical ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}<span class="ui5-switch-handle" part="handle"><ui5-icon name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-handle-icon"></ui5-icon></span></div></div></div><input type='checkbox' ?checked="${this.checked}" class="ui5-switch-input" data-sap-no-tab-ref/></div>`;
}
function block1(context, tags, suffix) {
  return suffix ? effectiveHtml`<span class="ui5-switch-text ui5-switch-text--on"><${scopeTag("ui5-icon", tags, suffix)} name="accept" class="ui5-switch-icon-on"></${scopeTag("ui5-icon", tags, suffix)}></span><span class="ui5-switch-text ui5-switch-text--off"><${scopeTag("ui5-icon", tags, suffix)} name="decline" class="ui5-switch-icon-off"></${scopeTag("ui5-icon", tags, suffix)}></span>` : effectiveHtml`<span class="ui5-switch-text ui5-switch-text--on"><ui5-icon name="accept" class="ui5-switch-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off"><ui5-icon name="decline" class="ui5-switch-icon-off"></ui5-icon></span>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`${this.hasNoLabel ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></${scopeTag("ui5-icon", tags, suffix)}></span><span class="ui5-switch-text ui5-switch-text--off ui5-switch-no-label-icon" part="text-off"><${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></${scopeTag("ui5-icon", tags, suffix)}></span>` : effectiveHtml`<span class="ui5-switch-text ui5-switch-text--on ui5-switch-no-label-icon" part="text-on"><ui5-icon name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-no-label-icon-on"></ui5-icon></span><span class="ui5-switch-text ui5-switch-text--off ui5-switch-no-label-icon" part="text-off"><ui5-icon name="${ifDefined(this.sapNextIcon)}" class="ui5-switch-no-label-icon-off"></ui5-icon></span>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-switch-text ui5-switch-text--on" part="text-on">${ifDefined(this._textOn)}</span><span class="ui5-switch-text ui5-switch-text--off" part="text-off">${ifDefined(this._textOff)}</span>`;
}
var SwitchTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/Switch.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Switch.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:inline-block}.ui5-switch-root{position:relative;display:flex;align-items:center;width:var(--_ui5-v2-0-1_switch_width);height:var(--_ui5-v2-0-1_switch_height);min-width:var(--_ui5-v2-0-1_switch_min_width);cursor:pointer;outline:none;border-radius:var(--_ui5-v2-0-1-switch-root-border-radius)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic){width:var(--_ui5-v2-0-1_switch_with_label_width);height:var(--_ui5-v2-0-1_switch_height)}.ui5-switch-root.ui5-switch--no-label{min-width:var(--_ui5-v2-0-1_switch_width)}.ui5-switch-inner{display:flex;align-items:center;justify-content:center;height:100%;width:100%;min-width:inherit;overflow:hidden;pointer-events:none;will-change:transform}:host([checked]) .ui5-switch-inner{border-radius:6.25rem;box-shadow:var(--_ui5-v2-0-1-switch-root-box-shadow)}.ui5-switch-track{display:flex;align-items:center;height:var(--_ui5-v2-0-1_switch_track_height);width:var(--_ui5-v2-0-1_switch_track_width);border:var(--_ui5-v2-0-1-switch-track-border);border-radius:var(--_ui5-v2-0-1_switch_track_border_radius);box-sizing:border-box;transition:var(--_ui5-v2-0-1_switch_track_transition)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-track{height:var(--_ui5-v2-0-1_switch_track_with_label_height);width:var(--_ui5-v2-0-1_switch_track_with_label_width)}.ui5-switch-slider{position:relative;height:var(--_ui5-v2-0-1_switch_height);width:100%;transition:transform .1s ease-in;transform-origin:top left}.ui5-switch-slider>*:not(.ui5-switch-handle){display:var(--_ui5-v2-0-1-switch-slider-texts-display)}.ui5-switch-handle{position:absolute;display:flex;justify-content:center;align-items:center;width:var(--_ui5-v2-0-1_switch_handle_width);height:var(--_ui5-v2-0-1_switch_handle_height);border:var(--_ui5-v2-0-1_switch_handle_border);border-radius:var(--_ui5-v2-0-1_switch_handle_border_radius);box-sizing:border-box}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-handle{height:var(--_ui5-v2-0-1_switch_handle_with_label_height);width:var(--_ui5-v2-0-1_switch_handle_with_label_width)}.ui5-switch-handle-icon{display:var(--_ui5-v2-0-1-switch-handle-icon-display);transition:var(--_ui5-v2-0-1_switch_track_transition)}:host([checked]) .ui5-switch-handle-icon{color:var(--_ui5-v2-0-1-switch_track-on-background)}.ui5-switch-text{display:flex;justify-content:center;position:absolute;z-index:var(--_ui5-v2-0-1_switch_text_z_index);min-width:var(--_ui5-v2-0-1_switch_text_min_width);font-size:var(--_ui5-v2-0-1_switch_text_font_size);font-family:var(--_ui5-v2-0-1-switch-text_font_family);text-transform:uppercase;text-align:center;white-space:nowrap;user-select:none;-webkit-user-select:none}.ui5-switch-handle,.ui5-switch-text{inset-inline-start:var(--_ui5-v2-0-1_switch_handle_left);top:50%;transform:translateY(-50%)}.ui5-switch--desktop.ui5-switch-root:focus:after{content:"";position:absolute;inset-inline-start:var(--_ui5-v2-0-1_switch_root_outline_left);inset-inline-end:var(--_ui5-v2-0-1_switch_root_outline_right);top:var(--_ui5-v2-0-1_switch_root_outline_top);bottom:var(--_ui5-v2-0-1_switch_root_outline_bottom);border:var(--_ui5-v2-0-1_switch_focus_outline);border-radius:var(--_ui5-v2-0-1_switch_root_after_boreder_radius);pointer-events:none;transition:var(--_ui5-v2-0-1_switch_track_transition);outline:var(--_ui5-v2-0-1_switch_root_after_outline)}.ui5-switch-root .ui5-switch-input{position:absolute;inset-inline-start:0;width:0;height:0;margin:0;visibility:hidden;appearance:none;-webkit-appearance:none}.ui5-switch-root.ui5-switch--disabled{opacity:var(--_ui5-v2-0-1_switch_disabled_opacity);cursor:default}.ui5-switch-root.ui5-switch--checked .ui5-switch-text--off{visibility:var(--_ui5-v2-0-1_switch_text_hidden)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-text--on{visibility:var(--_ui5-v2-0-1_switch_text_hidden)}.ui5-switch-root.ui5-switch--checked.ui5-switch--semantic .ui5-switch-text--on,.ui5-switch-root.ui5-switch--checked.ui5-switch--desktop.ui5-switch--no-label .ui5-switch-text--on{inset-inline-start:var(--_ui5-v2-0-1_switch_text_active_left)}.ui5-switch-root:not(.ui5-switch--checked).ui5-switch--semantic .ui5-switch-text--off,.ui5-switch-root:not(.ui5-switch--checked).ui5-switch--desktop.ui5-switch--no-label .ui5-switch-text--off{inset-inline-start:var(--_ui5-v2-0-1_switch_text_inactive_left);inset-inline-end:var(--_ui5-v2-0-1_switch_text_inactive_right)}.ui5-switch-root.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5-v2-0-1_switch_handle_active_background_color);border-color:var(--_ui5-v2-0-1_switch_handle_active_border_color)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--_ui5-v2-0-1_switch_handle_inactive_background_color);border-color:var(--_ui5-v2-0-1_switch_handle_inactive_border_color)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5-v2-0-1_switch_handle_hover_active_background_color);border-color:var(--_ui5-v2-0-1_switch_handle_hover_active_border_color)}.ui5-switch--desktop.ui5-switch-root:not(.ui5-switch--disabled):not(.ui5-switch--checked):hover .ui5-switch-handle{background:var(--_ui5-v2-0-1_switch_handle_hover_inactive_background_color);border-color:var(--_ui5-v2-0-1_switch_handle_hover_inactive_border_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-handle{background:var(--_ui5-v2-0-1_switch_handle_semantic_accept_background_color);border-color:var(--_ui5-v2-0-1_switch_handle_semantic_accept_border_color)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-handle{background:var(--_ui5-v2-0-1_switch_handle_semantic_reject_background_color);border-color:var(--_ui5-v2-0-1_switch_handle_semantic_reject_border_color)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5-v2-0-1_switch_handle_semantic_hover_accept_background_color);border-color:var(--_ui5-v2-0-1_switch_handle_semantic_hover_accept_border_color)}.ui5-switch--desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-handle{background:var(--_ui5-v2-0-1_switch_handle_semantic_hover_reject_background_color);border-color:var(--_ui5-v2-0-1_switch_handle_semantic_hover_reject_border_color)}.ui5-switch-root.ui5-switch--checked .ui5-switch-track{background:var(--_ui5-v2-0-1_switch_track_active_background_color);border-color:var(--_ui5-v2-0-1_switch_track_active_border_color)}.ui5-switch-root:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5-v2-0-1_switch_track_inactive_background_color);border-color:var(--_ui5-v2-0-1_switch_track_inactive_border_color)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-0-1_switch_track_hover_active_background_color);border-color:var(--_ui5-v2-0-1_switch_track_hover_active_border_color)}.ui5-switch--desktop.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-0-1_switch_track_hover_inactive_background_color);border-color:var(--_ui5-v2-0-1_switch_track_hover_inactive_border_color)}.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked .ui5-switch-track{background:var(--_ui5-v2-0-1_switch_track_semantic_accept_background_color);border-color:var(--_ui5-v2-0-1_switch_track_semantic_accept_border_color)}.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--checked) .ui5-switch-track{background:var(--_ui5-v2-0-1_switch_track_semantic_reject_background_color);border-color:var(--_ui5-v2-0-1_switch_track_semantic_reject_border_color)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-0-1_switch_track_semantic_hover_accept_background_color);border-color:var(--_ui5-v2-0-1_switch_track_semantic_hover_accept_border_color)}.ui5-switch--desktop.ui5-switch--semantic.ui5-switch-root:not(.ui5-switch--checked):not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-0-1_switch_track_semantic_hover_reject_background_color);border-color:var(--_ui5-v2-0-1_switch_track_semantic_hover_reject_border_color)}.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider{transform:var(--_ui5-v2-0-1_switch_transform_with_label)}.ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5-v2-0-1_switch_transform)}.ui5-switch-text .ui5-switch-text--on .ui5-switch-no-label-icon,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text,.ui5-switch-root.ui5-switch--no-label .ui5-switch-text{display:flex;justify-content:center}.ui5-switch--no-label .ui5-switch-no-label-icon-on,.ui5-switch--no-label .ui5-switch-no-label-icon-off{width:var(--_ui5-v2-0-1_switch_icon_width);height:var(--_ui5-v2-0-1_switch_icon_height);display:var(--_ui5-v2-0-1_switch_track_icon_display)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off{width:var(--_ui5-v2-0-1_switch_icon_width);height:var(--_ui5-v2-0-1_switch_icon_height)}.ui5-switch-root .ui5-switch-text{font-family:var(--_ui5-v2-0-1_switch_text_font_family);font-size:var(--_ui5-v2-0-1_switch_text_font_size);width:var(--_ui5-v2-0-1_switch_text_width)}.ui5-switch-root:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-text{font-family:var(--_ui5-v2-0-1_switch_text_with_label_font_family);font-size:var(--_ui5-v2-0-1_switch_text_with_label_font_size);width:var(--_ui5-v2-0-1_switch_text_with_label_width)}:host([active]) .ui5-switch--desktop.ui5-switch-root:not(.ui5-switch--disabled) .ui5-switch-track{background:var( --_ui5-v2-0-1-switch_track-off-active-background)}:host([active]) .ui5-switch--desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-track{background:var(--_ui5-v2-0-1-switch_track-on-active-background)}.ui5-switch--desktop.ui5-switch-root:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v2-0-1_switch_handle_off_hover_box_shadow)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v2-0-1_switch_handle_on_hover_box_shadow)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--semantic:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v2-0-1_switch_handle_semantic_off_hover_box_shadow)}.ui5-switch--desktop.ui5-switch-root.ui5-switch--semantic.ui5-switch--checked:not(.ui5-switch--disabled):hover .ui5-switch-handle{box-shadow:var(--_ui5-v2-0-1_switch_handle_semantic_on_hover_box_shadow)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-on,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--on{color:var(--_ui5-v2-0-1_switch_text_semantic_accept_color)}.ui5-switch-root.ui5-switch--semantic .ui5-switch-icon-off,.ui5-switch-root.ui5-switch--semantic .ui5-switch-text--off{color:var(--_ui5-v2-0-1_switch_text_semantic_reject_color)}.ui5-switch-root .ui5-switch-text--on{color:var(--_ui5-v2-0-1_switch_text_active_color);overflow:var(--_ui5-v2-0-1_switch_text_overflow);text-overflow:ellipsis;inset-inline-start:var(--_ui5-v2-0-1_switch_text_active_left_alternate)}.ui5-switch-root .ui5-switch-text--off{color:var(--_ui5-v2-0-1_switch_text_inactive_color);overflow:var(--_ui5-v2-0-1_switch_text_overflow);text-overflow:ellipsis;inset-inline-start:var(--_ui5-v2-0-1_switch_text_inactive_left_alternate);inset-inline-end:var(--_ui5-v2-0-1_switch_text_inactive_right_alternate)}.ui5-switch-root.ui5-switch--safari .ui5-switch-text--on.ui5-switch-no-label-icon,.ui5-switch-root.ui5-switch--safari .ui5-switch-text--off.ui5-switch-no-label-icon{inset-inline-start:.1875rem}.ui5-switch-root .ui5-switch-no-label-icon-on,.ui5-switch-root .ui5-switch-icon-on{color:var(--_ui5-v2-0-1_switch_text_active_color)}.ui5-switch-root .ui5-switch-no-label-icon-off,.ui5-switch-root .ui5-switch-icon-off{color:var(--_ui5-v2-0-1_switch_text_inactive_color)}:dir(rtl).ui5-switch-root.ui5-switch--checked:not(.ui5-switch--no-label):not(.ui5-switch--semantic) .ui5-switch-slider{transform:var(--_ui5-v2-0-1_switch_rtl_transform_with_label)}:dir(rtl).ui5-switch-root.ui5-switch--checked .ui5-switch-slider{transform:var(--_ui5-v2-0-1_switch_rtl_transform)}
` };
var Switch_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/Switch.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Switch_1;
var Switch = Switch_1 = class Switch2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.design = "Textual";
    this.checked = false;
    this.disabled = false;
    this.required = false;
  }
  get formValidityMessage() {
    return Switch_1.i18nBundle.getText(FORM_CHECKABLE_REQUIRED);
  }
  get formValidity() {
    return { valueMissing: this.required && !this.checked };
  }
  formElementAnchor() {
    return __async(this, null, function* () {
      return this.getFocusDomRefAsync();
    });
  }
  get formFormattedValue() {
    return this.checked ? "on" : null;
  }
  get sapNextIcon() {
    return this.checked ? "accept" : "less";
  }
  _onclick() {
    this.toggle();
  }
  _onkeydown(e) {
    if (isSpace(e)) {
      e.preventDefault();
    }
    if (isEnter(e)) {
      this._onclick();
    }
  }
  _onkeyup(e) {
    if (isSpace(e)) {
      this._onclick();
    }
  }
  toggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
      const changePrevented = !this.fireEvent("change", null, true);
      const valueChangePrevented = !this.fireEvent("value-changed", null, true);
      if (changePrevented || valueChangePrevented) {
        this.checked = !this.checked;
      }
    }
  }
  get graphical() {
    return this.design === SwitchDesign_default.Graphical;
  }
  get hasNoLabel() {
    return !(this.graphical || this.textOn || this.textOff);
  }
  get _textOn() {
    return this.graphical ? "" : this.textOn;
  }
  get _textOff() {
    return this.graphical ? "" : this.textOff;
  }
  get effectiveTabIndex() {
    return this.disabled ? void 0 : "0";
  }
  get classes() {
    const hasLabel = this.graphical || this.textOn || this.textOff;
    return {
      main: {
        "ui5-switch--desktop": isDesktop(),
        "ui5-switch--disabled": this.disabled,
        "ui5-switch--checked": this.checked,
        "ui5-switch--semantic": this.graphical,
        "ui5-switch--no-label": !hasLabel,
        "ui5-switch--safari": isSafari()
      }
    };
  }
  get effectiveAriaDisabled() {
    return this.disabled ? "true" : void 0;
  }
  get accessibilityOnText() {
    return this._textOn;
  }
  get accessibilityOffText() {
    return this._textOff;
  }
  get hiddenText() {
    return this.checked ? this.accessibilityOnText : this.accessibilityOffText;
  }
  get ariaLabelText() {
    return [getEffectiveAriaLabelText(this), this.hiddenText].join(" ").trim();
  }
  static onDefine() {
    return __async(this, null, function* () {
      Switch_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate([
  property_default()
], Switch.prototype, "design", void 0);
__decorate([
  property_default({ type: Boolean })
], Switch.prototype, "checked", void 0);
__decorate([
  property_default({ type: Boolean })
], Switch.prototype, "disabled", void 0);
__decorate([
  property_default()
], Switch.prototype, "textOn", void 0);
__decorate([
  property_default()
], Switch.prototype, "textOff", void 0);
__decorate([
  property_default()
], Switch.prototype, "accessibleName", void 0);
__decorate([
  property_default()
], Switch.prototype, "accessibleNameRef", void 0);
__decorate([
  property_default()
], Switch.prototype, "tooltip", void 0);
__decorate([
  property_default({ type: Boolean })
], Switch.prototype, "required", void 0);
__decorate([
  property_default()
], Switch.prototype, "name", void 0);
Switch = Switch_1 = __decorate([
  customElement_default({
    tag: "ui5-switch",
    formAssociated: true,
    languageAware: true,
    styles: Switch_css_default,
    renderer: LitRenderer_default,
    template: SwitchTemplate_lit_default,
    dependencies: [Icon_default]
  }),
  event_default("change")
], Switch);
Switch.define();
//# sourceMappingURL=chunk-3DP4YXBR.js.map
