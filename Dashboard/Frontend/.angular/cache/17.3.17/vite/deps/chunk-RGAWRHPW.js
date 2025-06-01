import {
  SemanticColor_default,
  TabContainer_default
} from "./chunk-66SXCUXY.js";
import {
  ListItemCustom_default
} from "./chunk-NKNWETHW.js";
import {
  DraggableElement_css_default,
  ListItemType_default
} from "./chunk-NJBEKUUC.js";
import {
  Button_default,
  willShowContent_default
} from "./chunk-THWQMO7Z.js";
import {
  TABCONTAINER_END_OVERFLOW,
  TAB_ARIA_DESIGN_CRITICAL,
  TAB_ARIA_DESIGN_NEGATIVE,
  TAB_ARIA_DESIGN_NEUTRAL,
  TAB_ARIA_DESIGN_POSITIVE,
  TAB_SPLIT_ROLE_DESCRIPTION
} from "./chunk-U6TJ47RH.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  LitRenderer_default,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  repeat,
  scopeTag,
  styleMap
} from "./chunk-DMMFI3C7.js";
import {
  getI18nBundle
} from "./chunk-22ISB74T.js";
import {
  UI5Element_default,
  customElement_default,
  executeTemplate_default,
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
  __superGet
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents/dist/generated/templates/TabTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div id="${ifDefined(this._id)}" class="ui5-tab-root" data-ui5-stable="${ifDefined(this.stableDomRef)}"><slot name="${ifDefined(this._defaultSlotName)}"></slot>${repeat(this.tabs, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</div>`;
}
function block1(context, tags, suffix, item, index) {
  return effectiveHtml`<slot name="${ifDefined(item._effectiveSlotName)}"></slot>`;
}
var TabTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/templates/TabInStripTemplate.lit.js
function block02(context, tags, suffix) {
  return effectiveHtml`<div id="${ifDefined(this._id)}" class="${ifDefined(this.stripClasses.itemClasses)}" tabindex="-1" role="tab" aria-roledescription="${ifDefined(this._roleDescription)}" aria-haspopup="${ifDefined(this._ariaHasPopup)}" aria-posinset="${ifDefined(this._forcedPosinset)}" aria-setsize="${ifDefined(this._forcedSetsize)}" aria-controls="ui5-tc-content" aria-selected="${ifDefined(this.effectiveSelected)}" aria-disabled="${ifDefined(this.effectiveDisabled)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}" ?disabled="${this.effectiveDisabled}" draggable="${ifDefined(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" .realTabReference="${ifDefined(this)}">${this.icon ? block12.call(this, context, tags, suffix) : void 0}${this._designDescription ? block2.call(this, context, tags, suffix) : void 0}<div class="ui5-tab-strip-itemContent">${!this._isInline ? block3.call(this, context, tags, suffix) : void 0}${this.text ? block4.call(this, context, tags, suffix) : void 0}</div>${this.requiresExpandButton ? block7.call(this, context, tags, suffix) : void 0} `;
}
function block12(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-tab-strip-item-icon-outer"><${scopeTag("ui5-icon", tags, suffix)} id="${ifDefined(this._id)}-icon" name="${ifDefined(this.icon)}" class="ui5-tab-strip-item-icon"></${scopeTag("ui5-icon", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-tab-strip-item-icon-outer"><ui5-icon id="${ifDefined(this._id)}-icon" name="${ifDefined(this.icon)}" class="ui5-tab-strip-item-icon"></ui5-icon></div>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<div id="${ifDefined(this._id)}-designDescription" class="ui5-tab-strip-design-description">${ifDefined(this._designDescription)}</div>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<span class="${ifDefined(this.stripClasses.additionalTextClasses)}" id="${ifDefined(this._id)}-additionalText">${ifDefined(this.additionalText)}</span>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-tab-strip-itemText" id="${ifDefined(this._id)}-text">${this.semanticIconName ? block5.call(this, context, tags, suffix) : void 0}${ifDefined(this.displayText)}${this.isSingleClickArea ? block6.call(this, context, tags, suffix) : void 0}</span>`;
}
function block5(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="${ifDefined(this.semanticIconClasses)}" name="${ifDefined(this.semanticIconName)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="${ifDefined(this.semanticIconClasses)}" name="${ifDefined(this.semanticIconName)}"></ui5-icon>`;
}
function block6(context, tags, suffix) {
  return suffix ? effectiveHtml`<span class="ui5-tab-single-click-icon"><${scopeTag("ui5-icon", tags, suffix)} name="slim-arrow-down"></${scopeTag("ui5-icon", tags, suffix)}></span>` : effectiveHtml`<span class="ui5-tab-single-click-icon"><ui5-icon name="slim-arrow-down"></ui5-icon></span>`;
}
function block7(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-tab-expand-button-separator"></div><div class="ui5-tab-expand-button" @click="${this._onTabExpandButtonClick}"><${scopeTag("ui5-button", tags, suffix)} .tab=${ifDefined(this)} icon="slim-arrow-down" design="Transparent" tabindex="-1" ?disabled="${this.disabled}" tooltip="${ifDefined(this.expandButtonTitle)}" .accessibilityAttributes="${ifDefined(this.expandBtnAccessibilityAttributes)}"></${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-tab-expand-button-separator"></div><div class="ui5-tab-expand-button" @click="${this._onTabExpandButtonClick}"><ui5-button .tab=${ifDefined(this)} icon="slim-arrow-down" design="Transparent" tabindex="-1" ?disabled="${this.disabled}" tooltip="${ifDefined(this.expandButtonTitle)}" .accessibilityAttributes="${ifDefined(this.expandBtnAccessibilityAttributes)}"></ui5-button></div>`;
}
var TabInStripTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/generated/templates/TabInOverflowTemplate.lit.js
function block03(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-li-custom", tags, suffix)} id="${ifDefined(this._id)}-li" class="${ifDefined(this.overflowClasses)}" style="${styleMap(this._forcedStyleInOverflow)}" type="${ifDefined(this.overflowState)}" aria-disabled="${ifDefined(this.effectiveDisabled)}" aria-selected="${ifDefined(this.effectiveSelected)}" ?movable="${this.movable}" .realTabReference="${ifDefined(this)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${this.semanticIconName ? block13.call(this, context, tags, suffix) : void 0}${this.icon ? block22.call(this, context, tags, suffix) : void 0}${ifDefined(this.text)}${this.additionalText ? block32.call(this, context, tags, suffix) : void 0}${this._designDescription ? block42.call(this, context, tags, suffix) : void 0}</div></div></${scopeTag("ui5-li-custom", tags, suffix)}>` : effectiveHtml`<ui5-li-custom id="${ifDefined(this._id)}-li" class="${ifDefined(this.overflowClasses)}" style="${styleMap(this._forcedStyleInOverflow)}" type="${ifDefined(this.overflowState)}" aria-disabled="${ifDefined(this.effectiveDisabled)}" aria-selected="${ifDefined(this.effectiveSelected)}" ?movable="${this.movable}" .realTabReference="${ifDefined(this)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${this.semanticIconName ? block13.call(this, context, tags, suffix) : void 0}${this.icon ? block22.call(this, context, tags, suffix) : void 0}${ifDefined(this.text)}${this.additionalText ? block32.call(this, context, tags, suffix) : void 0}${this._designDescription ? block42.call(this, context, tags, suffix) : void 0}</div></div></ui5-li-custom>`;
}
function block13(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="${ifDefined(this.semanticIconClasses)}" name="${ifDefined(this.semanticIconName)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="${ifDefined(this.semanticIconClasses)}" name="${ifDefined(this.semanticIconName)}"></ui5-icon>`;
}
function block22(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name="${ifDefined(this.icon)}"></ui5-icon>`;
}
function block32(context, tags, suffix) {
  return effectiveHtml` (${ifDefined(this.additionalText)}) `;
}
function block42(context, tags, suffix) {
  return effectiveHtml`<div id="${ifDefined(this._id)}-designDescription" class="ui5-hidden-text">${ifDefined(this._designDescription)}</div>`;
}
var TabInOverflowTemplate_lit_default = block03;

// node_modules/@ui5/webcomponents/dist/generated/themes/Tab.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Tab.css.ts", content: `:host{display:inline-block;width:100%}.ui5-tab-root{width:100%;height:100%}
` };
var Tab_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/generated/themes/TabInStrip.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = { packageName: "@ui5/webcomponents", fileName: "themes/TabInStrip.css.ts", content: `.ui5-tab-semantic-icon{display:var(--_ui5-v2-0-1_tc_headerItemSemanticIcon_display);height:var(--_ui5-v2-0-1_tc_headerItemSemanticIcon_size);width:var(--_ui5-v2-0-1_tc_headerItemSemanticIcon_size);margin-inline-end:.5rem}.ui5-tab-semantic-icon--positive{color:var(--sapPositiveElementColor)}.ui5-tab-semantic-icon--negative{color:var(--sapNegativeElementColor)}.ui5-tab-semantic-icon--critical{color:var(--sapCriticalElementColor)}.ui5-tab-strip-item{height:var(--_ui5-v2-0-1_tc_header_height);color:var(--_ui5-v2-0-1_tc_headerItem_color);cursor:pointer;padding:0 var(--_ui5-v2-0-1_tc_headeritem_padding);font-size:var(--sapFontSmallSize);font-weight:var(--_ui5-v2-0-1_tc_headeritem_text_font_weight);text-shadow:var(--sapContent_TextShadow);position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:2rem;max-width:100%;box-sizing:border-box}.ui5-tab-strip-item[data-moving]{background-color:var(--ui5-v2-0-1_tc_header_active_background_color)}.ui5-tab-strip-itemText{position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-tc__separator[hidden],.ui5-tab-strip-item[hidden],.ui5-tab-strip-item--textOnly[hidden],.ui5-tab-strip-item.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--inline[hidden],.ui5-tab-strip-design-description{display:none}.ui5-tab-strip-itemContent{display:flex;height:100%;min-width:0;justify-content:center;flex-direction:column;border:var(--_ui5-v2-0-1_tc_headerItemContent_default_focus_border);border-radius:var(--_ui5-v2-0-1_tc_headerItemContent_focus_border_radius);transition:var(--_ui5-v2-0-1_tc_headerItem_transition)}.ui5-tab-expand-button{display:flex;flex-direction:column;justify-content:center;position:relative;z-index:1;background-color:var(--_ui5-v2-0-1_tc_header_background);padding-inline-end:.188rem}.ui5-tab-expand-button>[ui5-button]{height:1.5rem;min-width:1.5rem;margin-inline-start:var(--_ui5-v2-0-1_tc_headerItem_expand_button_margin_inline_start);--_ui5-v2-0-1_button_border_radius: var(--_ui5-v2-0-1_tc_headerItem_expand_button_border_radius);--_ui5-v2-0-1_button_focused_border_radius: var(--_ui5-v2-0-1_tc_headerItem_expand_button_border_radius)}.ui5-tab-expand-button>[ui5-button]:not([active]){color:var(--_ui5-v2-0-1_tc_headerItem_color)}.ui5-tab-strip-item--selected .ui5-tab-expand-button>[ui5-button]:not([active]){color:var(--_ui5-v2-0-1_tc_headerItem_text_selected_color)}.ui5-tab-expand-button>[ui5-button]:hover:not([active]){color:var(--_ui5-v2-0-1_tc_headerItem_text_selected_hover_color)}.ui5-tab-expand-button-separator{display:var(--_ui5-v2-0-1_tc_headerItem_expand_button_separator_display);position:relative;width:.0625rem;right:-.0625rem;height:.625rem;background:var(--sapTextColor);margin-inline-start:.0625rem;z-index:2;margin-left:.625rem}.ui5-tab-expand-button:hover{z-index:2}.ui5-tab-strip-item--selected .ui5-tab-expand-button-separator{background:var(--_ui5-v2-0-1_tc_headerItem_text_selected_color)}.ui5-tab-single-click-icon{margin-inline-start:var(--_ui5-v2-0-1_tc_headerItem_single_click_expand_button_margin_inline_start)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly{color:var(--_ui5-v2-0-1_tc_headerItem_text_selected_color)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon>[ui5-icon]{color:var(--_ui5-v2-0-1_tc_headerItem_text_selected_color)}.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText{display:flex;align-items:center}.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon{display:flex}.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon>[ui5-icon]{color:var(--_ui5-v2-0-1_tc_headerItem_color)}.ui5-tab-strip-item--textOnly:not(.ui5-tab-strip-item--twoClickArea):not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--negative):hover,.ui5-tab-strip-item--twoClickArea:not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--negative) .ui5-tab-strip-itemContent:hover,.ui5-tab-strip-item--singleClickArea:not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--disabled):hover .ui5-tab-single-click-icon>[ui5-icon]{color:var(--_ui5-v2-0-1_tc_headerItem_text_hover_color)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--selected.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer:after{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:var(--_ui5-v2-0-1_tc_headerItemContent_border_bottom);border-radius:var(--_ui5-v2-0-1_tc_headerItemContent_border_radius);background-color:var(--_ui5-v2-0-1_tc_headerItemContent_border_bg);height:var(--_ui5-v2-0-1_tc_headerItemContent_border_height)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--selected.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent:after{left:var(--_ui5-v2-0-1_tc_headeritem_padding);right:var(--_ui5-v2-0-1_tc_headeritem_padding)}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer:after{bottom:-.9375rem}.ui5-tab-strip-item--disabled{cursor:default;opacity:var(--sapContent_DisabledOpacity)}.ui5-tab-strip-item{outline:none}:host([desktop]) .ui5-tab-strip-item--textOnly:focus:not([data-moving]) .ui5-tab-strip-itemText:before,.ui5-tab-strip-item--textOnly:focus-visible:not([data-moving]) .ui5-tab-strip-itemText:before,:host([desktop]) .ui5-tab-strip-item--inline.ui5-tab-strip-item--textOnly:focus:not([data-moving]) .ui5-tab-strip-itemText:before,.ui5-tab-strip-item--inline.ui5-tab-strip-item--textOnly:focus-visible:not([data-moving]) .ui5-tab-strip-itemText:before{border-radius:var(--_ui5-v2-0-1_tc_headerItem_focus_border_radius);content:"";pointer-events:none;position:absolute;border:var(--_ui5-v2-0-1_tc_headerItem_focus_border);left:var(--_ui5-v2-0-1_tc_headerItem_text_focus_border_offset_left);right:var(--_ui5-v2-0-1_tc_headerItem_text_focus_border_offset_right);top:var(--_ui5-v2-0-1_tc_headerItem_text_focus_border_offset_top);bottom:var(--_ui5-v2-0-1_tc_headerItem_text_focus_border_offset_bottom)}:host([desktop]) .ui5-tab-strip-item--mixedMode:focus:not([data-moving]) .ui5-tab-strip-itemContent:before,.ui5-tab-strip-item--mixedMode:focus-visible:not([data-moving]) .ui5-tab-strip-itemContent:before{border-radius:var(--_ui5-v2-0-1_tc_headerItem_focus_border_radius);content:"";pointer-events:none;position:absolute;border:var(--_ui5-v2-0-1_tc_headerItem_focus_border);left:var(--_ui5-v2-0-1_tc_headerItem_mixed_mode_focus_border_offset_left);right:var(--_ui5-v2-0-1_tc_headerItem_mixed_mode_focus_border_offset_right);top:var(--_ui5-v2-0-1_tc_headerItem_mixed_mode_focus_border_offset_top);bottom:var(--_ui5-v2-0-1_tc_headerItem_mixed_mode_focus_border_offset_bottom)}:host([desktop]) .ui5-tab-strip-item--withIcon:focus:not([data-moving]) .ui5-tab-strip-item-icon-outer:before,.ui5-tab-strip-item--withIcon:focus-visible:not([data-moving]) .ui5-tab-strip-item-icon-outer:before{content:"";pointer-events:none;position:absolute;border:var(--_ui5-v2-0-1_tc_headerItem_focus_border);left:var(--_ui5-v2-0-1_tc_headerItem_focus_border_offset);right:var(--_ui5-v2-0-1_tc_headerItem_focus_border_offset);top:var(--_ui5-v2-0-1_tc_headerItem_focus_border_offset);bottom:var(--_ui5-v2-0-1_tc_headerItem_focus_border_offset);border-radius:var(--_ui5-v2-0-1_tc_headerItemIcon_focus_border_radius)}.ui5-tab-strip-item-icon-outer{display:flex;justify-content:center;align-items:center;position:relative;border:var(--_ui5-v2-0-1_tc_headerItemIcon_border);border-radius:50%;margin-inline-end:.25rem;height:var(--_ui5-v2-0-1_tc_item_icon_circle_size);width:var(--_ui5-v2-0-1_tc_item_icon_circle_size);pointer-events:none;background-color:var(--_ui5-v2-0-1_tc_headerItemIcon_background_color)}.ui5-tab-strip-item-icon{width:var(--_ui5-v2-0-1_tc_item_icon_size);height:var(--_ui5-v2-0-1_tc_item_icon_size);color:var(--_ui5-v2-0-1_tc_headerItemIcon_color);text-shadow:var(--sapContent_TextShadow);pointer-events:none}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v2-0-1_tc_headerItemIcon_selected_background)}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v2-0-1_tc_headerItemIcon_selected_color);text-shadow:none}.ui5-tab-strip-itemAdditionalText+.ui5-tab-strip-itemText{display:flex}.ui5-tab-strip-itemAdditionalText-hidden{visibility:hidden;margin-top:1.25rem}.ui5-tab-strip-item--inline .ui5-tab-strip-itemAdditionalText+.ui5-tab-strip-itemText{display:inline}.ui5-tab-strip-item--withIcon .ui5-tab-strip-itemAdditionalText+.ui5-tab-strip-itemText{margin-block-start:var(--_ui5-v2-0-1_tc_item_add_text_margin_top)}.ui5-tab-strip-item--textOnly,.ui5-tab-strip-item.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--inline{font-size:var(--sapFontSize);height:var(--_ui5-v2-0-1_tc_item_text_only_height);display:flex;align-items:center;line-height:var(--_ui5-v2-0-1_tc_item_text_line_height)}.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{padding:0 .188rem}.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--withAdditionalText{justify-content:flex-start;height:var(--_ui5-v2-0-1_tc_item_text_only_with_additional_text_height)}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemText,.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemAdditionalText{display:inline-block;vertical-align:middle}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent{flex-direction:row;align-items:center}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemAdditionalText{font-size:1.5rem;margin-inline-end:.5rem}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemText{color:var(--_ui5-v2-0-1_tc_mixedMode_itemText_color);font-family:var(--_ui5-v2-0-1_tc_mixedMode_itemText_font_family);font-size:var(--_ui5-v2-0-1_tc_mixedMode_itemText_font_size);font-weight:var(--_ui5-v2-0-1_tc_mixedMode_itemText_font_weight)}.ui5-tab-strip-item--positive.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon-outer{color:var(--_ui5-v2-0-1_tc_headerItem_positive_color);border-color:var(--_ui5-v2-0-1_tc_headerItem_positive_selected_border_color)}.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon{color:var(--_ui5-v2-0-1_tc_headerItem_positive_color)}.ui5-tab-strip-item--positive.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v2-0-1_tc_headerItemIcon_positive_selected_background);color:var(--_ui5-v2-0-1_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item--positive.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v2-0-1_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item.ui5-tab-strip-item--neutral .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon-outer:after{border-color:var(--_ui5-v2-0-1_tc_headerItem_neutral_border_color);background-color:var(--_ui5-v2-0-1_tc_headerItem_neutral_border_bg)}.ui5-tab-strip-item.ui5-tab-strip-item--positive .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon-outer:after{border-color:var(--_ui5-v2-0-1_tc_headerItem_positive_border_color);background-color:var(--_ui5-v2-0-1_tc_headerItem_positive_border_bg)}.ui5-tab-strip-item--negative.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon-outer{color:var(--_ui5-v2-0-1_tc_headerItem_negative_color);border-color:var(--_ui5-v2-0-1_tc_headerItem_negative_selected_border_color)}.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon{color:var(--_ui5-v2-0-1_tc_headerItem_negative_color)}.ui5-tab-strip-item--negative.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v2-0-1_tc_headerItemIcon_negative_selected_background)}.ui5-tab-strip-item--negative.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v2-0-1_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item.ui5-tab-strip-item--negative .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon-outer:after{border-color:var(--_ui5-v2-0-1_tc_headerItem_negative_border_color);background-color:var(--_ui5-v2-0-1_tc_headerItem_negative_border_bg)}.ui5-tab-strip-item--critical.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon-outer{color:var(--_ui5-v2-0-1_tc_headerItem_critical_color);border-color:var(--_ui5-v2-0-1_tc_headerItem_critical_selected_border_color)}.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon{color:var(--_ui5-v2-0-1_tc_headerItem_critical_color)}.ui5-tab-strip-item--critical.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v2-0-1_tc_headerItemIcon_critical_selected_background)}.ui5-tab-strip-item--critical.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v2-0-1_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item.ui5-tab-strip-item--critical .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon-outer:after{border-color:var(--_ui5-v2-0-1_tc_headerItem_critical_border_color);background-color:var(--_ui5-v2-0-1_tc_headerItem_critical_border_bg)}.ui5-tab-strip-item--neutral.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon-outer{color:var(--_ui5-v2-0-1_tc_headerItem_neutral_color);border-color:var(--_ui5-v2-0-1_tc_headerItem_neutral_selected_border_color)}.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon{color:var(--_ui5-v2-0-1_tc_headerItem_neutral_color)}.ui5-tab-strip-item--neutral.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v2-0-1_tc_headerItemIcon_neutral_selected_background)}.ui5-tab-strip-item--neutral.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v2-0-1_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item.ui5-tab-strip-item--neutral .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon:after{border-color:var(--_ui5-v2-0-1_tc_headerItem_neutral_border_color);background-color:var(--_ui5-v2-0-1_tc_headerItem_neutral_border_bg)}.ui5-tab-strip-item--withIcon .ui5-tab-strip-itemContent .ui5-tab-strip-itemAdditionalText{padding:0}.ui5-tab-strip-item .ui5-tab-strip-itemAdditionalText{padding:0 .188rem;color:var(--_ui5-v2-0-1_tc_headerItem_additional_text_color);font-weight:var(--_ui5-v2-0-1_tc_headerItem_additional_text_font_weight)}
` };
var TabInStrip_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/generated/themes/TabInOverflow.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData3 = { packageName: "@ui5/webcomponents", fileName: "themes/TabInOverflow.css.ts", content: `.ui5-tab-semantic-icon{display:var(--_ui5-v2-0-1_tc_headerItemSemanticIcon_display);height:var(--_ui5-v2-0-1_tc_headerItemSemanticIcon_size);width:var(--_ui5-v2-0-1_tc_headerItemSemanticIcon_size);margin-inline-end:.5rem}.ui5-tab-semantic-icon--positive{color:var(--sapPositiveElementColor)}.ui5-tab-semantic-icon--negative{color:var(--sapNegativeElementColor)}.ui5-tab-semantic-icon--critical{color:var(--sapCriticalElementColor)}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-tab-overflow-item{color:var(--_ui5-v2-0-1_tc_overflowItem_default_color)}.ui5-tab-overflow-item--disabled{cursor:default;opacity:var(--sapContent_DisabledOpacity)}.ui5-tab-overflow-item[hidden]{display:none}.ui5-tab-semantic-icon{position:absolute;inset-inline-start:-.25rem}.ui5-tab-overflow-item--positive:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent{color:var(--_ui5-v2-0-1_tc_overflowItem_positive_color)}.ui5-tab-overflow-item--negative:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent{color:var(--_ui5-v2-0-1_tc_overflowItem_negative_color)}.ui5-tab-overflow-item--critical:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent{color:var(--_ui5-v2-0-1_tc_overflowItem_critical_color)}.ui5-tab-overflow-item[active] .ui5-tab-overflow-itemContent{color:var(--sapList_Active_TextColor)}.ui5-tab-overflow-itemContent{display:flex;align-items:center;position:relative;height:var(--_ui5-v2-0-1_tc_item_text);pointer-events:none;font-size:.875rem}.ui5-tab-overflow-itemContent-wrapper{padding-inline-start:calc(var(--_ui5-v2-0-1-tab-indentation-level) * .5rem + var(--_ui5-v2-0-1-tab-extra-indent, 0) * var(--_ui5-v2-0-1_tc_overflowItem_extraIndent))}.ui5-tab-overflow-item--selectedSubTab{background-color:var(--sapList_SelectionBackgroundColor)}.ui5-tab-overflow-item [ui5-icon]:not(.ui5-tab-semantic-icon){width:1.375rem;height:1.375rem;padding-inline-end:.75rem;color:var(--_ui5-v2-0-1_tc_overflowItem_current_color)}.ui5-tab-container-responsive-popover [ui5-li-custom][focused]::part(native-li):after{inset:var(--_ui5-v2-0-1_tc_overflowItem_focus_offset)}.ui5-tab-container-responsive-popover::part(content){padding:0}
` };
var TabInOverflow_css_default = styleData3;

// node_modules/@ui5/webcomponents/dist/Tab.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Tab_1;
var DESIGN_DESCRIPTIONS = {
  [SemanticColor_default.Positive]: TAB_ARIA_DESIGN_POSITIVE,
  [SemanticColor_default.Negative]: TAB_ARIA_DESIGN_NEGATIVE,
  [SemanticColor_default.Neutral]: TAB_ARIA_DESIGN_NEUTRAL,
  [SemanticColor_default.Critical]: TAB_ARIA_DESIGN_CRITICAL
};
var Tab = Tab_1 = class Tab2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.design = "Default";
    this.selected = false;
    this.movable = false;
    this._isTopLevelTab = false;
  }
  set forcedTabIndex(val) {
    this.getDomRefInStrip().setAttribute("tabindex", val);
  }
  get forcedTabIndex() {
    return this.getDomRefInStrip().getAttribute("tabindex");
  }
  get displayText() {
    let text = this.text;
    if (this._isInline && this.additionalText) {
      text += ` (${this.additionalText})`;
    }
    return text;
  }
  get isSeparator() {
    return false;
  }
  get stripPresentation() {
    return executeTemplate_default(Tab_1.stripTemplate, this);
  }
  get overflowPresentation() {
    return executeTemplate_default(Tab_1.overflowTemplate, this);
  }
  get stableDomRef() {
    return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
  }
  get requiresExpandButton() {
    return this.items.length > 0 && this._isTopLevelTab && this.hasOwnContent;
  }
  get isSingleClickArea() {
    return this.items.length > 0 && this._isTopLevelTab && !this.hasOwnContent;
  }
  get isTwoClickArea() {
    return this.items.length > 0 && this._isTopLevelTab && this.hasOwnContent;
  }
  get isOnSelectedTabPath() {
    return this._selectedTabReference === this || this.tabs.some((subTab) => subTab.isOnSelectedTabPath);
  }
  get _effectiveSlotName() {
    return this.isOnSelectedTabPath ? this._individualSlot : `disabled-${this._individualSlot}`;
  }
  get _defaultSlotName() {
    return this._selectedTabReference === this ? "" : "disabled-slot";
  }
  get hasOwnContent() {
    return willShowContent_default(this.content);
  }
  get expandBtnAccessibilityAttributes() {
    return {
      hasPopup: "menu"
    };
  }
  receiveStripInfo({ getElementInStrip, posinset, setsize, isInline, isTopLevelTab, mixedMode }) {
    this._getElementInStrip = getElementInStrip;
    this._forcedPosinset = posinset;
    this._forcedSetsize = setsize;
    this._forcedMixedMode = mixedMode;
    this._isInline = isInline;
    this._isTopLevelTab = !!isTopLevelTab;
  }
  receiveOverflowInfo({ getElementInOverflow, style }) {
    this._getElementInOverflow = getElementInOverflow;
    this._forcedStyleInOverflow = style;
  }
  /**
   * Returns the DOM reference of the tab that is placed in the header.
   *
   * **Note:** Tabs, placed in the `items` slot of other tabs are not shown in the header. Calling this method on such tabs will return `undefined`.
   *
   * **Note:** If you need a DOM ref to the tab content please use the `getDomRef` method.
   * @public
   * @since 1.0.0-rc.16
   */
  getDomRefInStrip() {
    return this._getElementInStrip?.();
  }
  getFocusDomRef() {
    let focusedDomRef = this._getElementInOverflow?.();
    if (!focusedDomRef) {
      focusedDomRef = this._getElementInStrip?.();
    }
    return focusedDomRef;
  }
  focus(focusOptions) {
    return __async(this, null, function* () {
      yield renderFinished();
      return __superGet(Tab2.prototype, this, "focus").call(this, focusOptions);
    });
  }
  get isMixedModeTab() {
    return !this.icon && this._forcedMixedMode;
  }
  get isTextOnlyTab() {
    return !this.icon && !this._forcedMixedMode;
  }
  get isIconTab() {
    return !!this.icon;
  }
  get effectiveDisabled() {
    return this.disabled || void 0;
  }
  get effectiveSelected() {
    const subItemSelected = this.tabs.some((elem) => elem.effectiveSelected);
    return this.selected || this._selectedTabReference === this || subItemSelected;
  }
  get effectiveHidden() {
    return !this.effectiveSelected;
  }
  get tabs() {
    return this.items.filter((tab) => !tab.isSeparator);
  }
  get ariaLabelledBy() {
    const labels = [];
    if (this.text) {
      labels.push(`${this._id}-text`);
    }
    if (this.additionalText) {
      labels.push(`${this._id}-additionalText`);
    }
    if (this.icon) {
      labels.push(`${this._id}-icon`);
    }
    if (this._designDescription) {
      labels.push(`${this._id}-designDescription`);
    }
    return labels.join(" ");
  }
  get stripClasses() {
    const classes = ["ui5-tab-strip-item"];
    if (this.effectiveSelected) {
      classes.push("ui5-tab-strip-item--selected");
    }
    if (this.disabled) {
      classes.push("ui5-tab-strip-item--disabled");
    }
    if (this._isInline) {
      classes.push("ui5-tab-strip-item--inline");
    }
    if (this.additionalText) {
      classes.push("ui5-tab-strip-item--withAdditionalText");
    }
    if (!this.icon && !this._forcedMixedMode) {
      classes.push("ui5-tab-strip-item--textOnly");
    }
    if (this.icon) {
      classes.push("ui5-tab-strip-item--withIcon");
    }
    if (!this.icon && this._forcedMixedMode) {
      classes.push("ui5-tab-strip-item--mixedMode");
    }
    if (this.design !== SemanticColor_default.Default) {
      classes.push(`ui5-tab-strip-item--${this.design.toLowerCase()}`);
    }
    if (this.isSingleClickArea) {
      classes.push(`ui5-tab-strip-item--singleClickArea`);
    }
    if (this.isTwoClickArea) {
      classes.push(`ui5-tab-strip-item--twoClickArea`);
    }
    return {
      itemClasses: classes.join(" "),
      additionalTextClasses: this.additionalTextClasses
    };
  }
  get additionalTextClasses() {
    const classes = [];
    if (this.additionalText) {
      classes.push("ui5-tab-strip-itemAdditionalText");
    }
    if (this.icon && !this.additionalText) {
      classes.push("ui5-tab-strip-itemAdditionalText-hidden");
    }
    return classes.join(" ");
  }
  get expandButtonTitle() {
    return Tab_1.i18nBundle.getText(TABCONTAINER_END_OVERFLOW);
  }
  get _roleDescription() {
    return this.items.length > 0 ? Tab_1.i18nBundle.getText(TAB_SPLIT_ROLE_DESCRIPTION) : void 0;
  }
  get _ariaHasPopup() {
    return this.isSingleClickArea ? "menu" : void 0;
  }
  get semanticIconName() {
    switch (this.design) {
      case SemanticColor_default.Positive:
        return "sys-enter-2";
      case SemanticColor_default.Negative:
        return "error";
      case SemanticColor_default.Critical:
        return "alert";
      default:
        return null;
    }
  }
  get _designDescription() {
    if (this.design === SemanticColor_default.Default) {
      return null;
    }
    return Tab_1.i18nBundle.getText(DESIGN_DESCRIPTIONS[this.design]);
  }
  get semanticIconClasses() {
    const classes = ["ui5-tab-semantic-icon"];
    if (this.design !== SemanticColor_default.Default && this.design !== SemanticColor_default.Neutral) {
      classes.push(`ui5-tab-semantic-icon--${this.design.toLowerCase()}`);
    }
    return classes.join(" ");
  }
  get overflowClasses() {
    const classes = ["ui5-tab-overflow-item"];
    if (this.design !== SemanticColor_default.Default && this.design !== SemanticColor_default.Neutral) {
      classes.push(`ui5-tab-overflow-item--${this.design.toLowerCase()}`);
    }
    if (this.effectiveDisabled) {
      classes.push("ui5-tab-overflow-item--disabled");
    }
    if (this.selected) {
      classes.push("ui5-tab-overflow-item--selectedSubTab");
    }
    return classes.join(" ");
  }
  get overflowState() {
    return this.disabled || this.isSingleClickArea ? ListItemType_default.Inactive : ListItemType_default.Active;
  }
  static get stripTemplate() {
    return TabInStripTemplate_lit_default;
  }
  static get overflowTemplate() {
    return TabInOverflowTemplate_lit_default;
  }
  static onDefine() {
    return __async(this, null, function* () {
      Tab_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  _ondragstart(e) {
    if (e.target instanceof HTMLElement) {
      e.target.setAttribute("data-moving", "");
    }
  }
  _ondragend(e) {
    if (e.target instanceof HTMLElement) {
      e.target.removeAttribute("data-moving");
    }
  }
};
__decorate([
  property_default()
], Tab.prototype, "text", void 0);
__decorate([
  property_default({ type: Boolean })
], Tab.prototype, "disabled", void 0);
__decorate([
  property_default()
], Tab.prototype, "additionalText", void 0);
__decorate([
  property_default()
], Tab.prototype, "icon", void 0);
__decorate([
  property_default()
], Tab.prototype, "design", void 0);
__decorate([
  property_default({ type: Boolean })
], Tab.prototype, "selected", void 0);
__decorate([
  property_default({ type: Boolean })
], Tab.prototype, "movable", void 0);
__decorate([
  property_default({ type: Boolean })
], Tab.prototype, "_isTopLevelTab", void 0);
__decorate([
  property_default({ type: Object })
], Tab.prototype, "_selectedTabReference", void 0);
__decorate([
  slot_default({
    type: Node,
    "default": true,
    invalidateOnChildChange: {
      properties: true,
      slots: false
    }
  })
], Tab.prototype, "content", void 0);
__decorate([
  slot_default({
    type: HTMLElement,
    individualSlots: true,
    invalidateOnChildChange: {
      properties: true,
      slots: false
    }
  })
], Tab.prototype, "items", void 0);
Tab = Tab_1 = __decorate([
  customElement_default({
    tag: "ui5-tab",
    languageAware: true,
    renderer: LitRenderer_default,
    template: TabTemplate_lit_default,
    styles: Tab_css_default,
    dependencies: [
      Icon_default,
      Button_default,
      ListItemCustom_default
    ]
  })
], Tab);
Tab.define();
TabContainer_default.registerTabStyles(TabInStrip_css_default);
TabContainer_default.registerTabStyles(DraggableElement_css_default);
TabContainer_default.registerTabStyles(TabInOverflow_css_default);
//# sourceMappingURL=chunk-RGAWRHPW.js.map
