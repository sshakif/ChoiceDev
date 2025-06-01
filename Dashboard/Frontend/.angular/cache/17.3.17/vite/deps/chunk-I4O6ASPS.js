import {
  ResponsivePopoverCommon_css_default
} from "./chunk-RYF5F2A6.js";
import {
  ResponsivePopover_default
} from "./chunk-D2ZEM7VW.js";
import {
  Popover_default
} from "./chunk-63IT5AAH.js";
import {
  getActiveElement_default
} from "./chunk-V3KTO444.js";
import {
  ResizeHandler_default
} from "./chunk-3NVTNN76.js";
import {
  ValueState_default
} from "./chunk-OMRI665N.js";
import {
  deregisterUI5Element,
  getAllAccessibleNameRefTexts,
  getAssociatedLabelForTexts,
  registerUI5Element
} from "./chunk-HWWW4G3G.js";
import {
  FORM_TEXTFIELD_REQUIRED,
  INPUT_CLEAR_ICON_ACC_NAME,
  INPUT_SUGGESTIONS,
  INPUT_SUGGESTIONS_MORE_HITS,
  INPUT_SUGGESTIONS_NO_HIT,
  INPUT_SUGGESTIONS_ONE_HIT,
  INPUT_SUGGESTIONS_TITLE,
  VALUE_STATE_ERROR,
  VALUE_STATE_INFORMATION,
  VALUE_STATE_SUCCESS,
  VALUE_STATE_TYPE_ERROR,
  VALUE_STATE_TYPE_INFORMATION,
  VALUE_STATE_TYPE_SUCCESS,
  VALUE_STATE_TYPE_WARNING,
  VALUE_STATE_WARNING
} from "./chunk-U6TJ47RH.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  isAndroid,
  isBackSpace,
  isDelete,
  isDown,
  isEnd,
  isEnter,
  isEscape,
  isHome,
  isPageDown,
  isPageUp,
  isPhone,
  isSpace,
  isTabNext,
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
  scopeTag,
  styleMap,
  unsafeHTML
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
  getScopedVarName,
  property_default,
  submitForm
} from "./chunk-V2NLQCH3.js";
import {
  getFeature
} from "./chunk-FE3LTLOF.js";
import {
  init_Themes,
  registerThemePropertiesLoader
} from "./chunk-D5EWR56T.js";
import {
  __async,
  __export
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/sap/base/strings/toHex.js
var fnToHex = function(iChar, iLength) {
  var sHex = iChar.toString(16);
  if (iLength) {
    sHex = sHex.padStart(iLength, "0");
  }
  return sHex;
};
var toHex_default = fnToHex;

// node_modules/@ui5/webcomponents-base/dist/sap/base/security/encodeXML.js
var rHtml = /[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g;
var rHtmlReplace = /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/;
var mHtmlLookup = {
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  '"': "&quot;"
};
var fnHtml = function(sChar) {
  var sEncoded = mHtmlLookup[sChar];
  if (!sEncoded) {
    if (rHtmlReplace.test(sChar)) {
      sEncoded = "&#xfffd;";
    } else {
      sEncoded = "&#x" + toHex_default(sChar.charCodeAt(0)) + ";";
    }
    mHtmlLookup[sChar] = sEncoded;
  }
  return sEncoded;
};
var fnEncodeXML = function(sString) {
  return sString.replace(rHtml, fnHtml);
};
var encodeXML_default = fnEncodeXML;

// node_modules/@ui5/webcomponents-base/dist/util/Caret.js
var getCaretPosition = (field) => {
  let caretPos = 0;
  if (field.selectionStart || field.selectionStart === 0) {
    caretPos = field.selectionDirection === "backward" ? field.selectionStart : field.selectionEnd;
  }
  return caretPos;
};
var setCaretPosition = (field, caretPos) => {
  if (field.selectionStart) {
    field.focus();
    field.setSelectionRange(caretPos, caretPos);
  } else {
    field.focus();
  }
};

// node_modules/@ui5/webcomponents-icons/dist/v4/not-editable.js
var name = "not-editable";
var pathData = "M443 104q5 7 5 12 0 6-5 11L118 453q-4 4-8 4L0 480l22-110q0-5 4-9L352 36q4-4 11-4t11 4zm-121 99l-46-45L52 381l46 46zm87-88l-46-44-64 64 45 45zm71 204l-63 64-65-64-33 32 66 63-66 66 33 32 65-66 63 66 32-32-66-66 66-63z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/not-editable.js
var name2 = "not-editable";
var pathData2 = "M504 94q7 7 7 18t-7 18L130 505q-9 7-18 7H26q-11 0-18.5-7.5T0 486v-86q0-10 8-18L381 7q9-7 18-7 11 0 18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50zm142 270q7 7 7 18t-7.5 18.5T486 512t-18-7l-37-38-38 38q-7 7-18 7t-18.5-7.5T349 486q0-10 8-18l38-37-38-38q-8-8-8-18 0-11 7.5-18.5T375 349q10 0 18 8l38 37 37-37q8-8 18-8 11 0 18.5 7.5T512 375t-7 18l-38 38z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents/dist/types/InputType.js
var InputType;
(function(InputType2) {
  InputType2["Text"] = "Text";
  InputType2["Email"] = "Email";
  InputType2["Number"] = "Number";
  InputType2["Password"] = "Password";
  InputType2["Tel"] = "Tel";
  InputType2["URL"] = "URL";
  InputType2["Search"] = "Search";
})(InputType || (InputType = {}));
var InputType_default = InputType;

// node_modules/@ui5/webcomponents/dist/generated/templates/InputTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><input id="inner" class="ui5-input-inner" style="${styleMap(this.styles.innerInput)}" type="${ifDefined(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${ifDefined(this._innerValue)}" placeholder="${ifDefined(this._placeholder)}" maxlength="${ifDefined(this.maxlength)}" role="${ifDefined(this.accInfo.input.role)}" aria-controls="${ifDefined(this.accInfo.input.ariaControls)}" aria-invalid="${ifDefined(this.accInfo.input.ariaInvalid)}" aria-haspopup="${ifDefined(this.accInfo.input.ariaHasPopup)}" aria-describedby="${ifDefined(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${ifDefined(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${ifDefined(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${ifDefined(this.accInfo.input.ariaExpanded)}" aria-label="${ifDefined(this.accInfo.input.ariaLabel)}" aria-required="${ifDefined(this.required)}" autocomplete="off" @input="${this._handleInput}" @change="${this._handleChange}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${ifDefined(this.nativeInputAttributes.step)}" min="${ifDefined(this.nativeInputAttributes.min)}" max="${ifDefined(this.nativeInputAttributes.max)}" />${this._effectiveShowClearIcon ? block1.call(this, context, tags, suffix) : void 0}${this.icon.length ? block2.call(this, context, tags, suffix) : void 0}<div class="ui5-input-value-state-icon">${unsafeHTML(this._valueStateInputIcon)}</div>${this.showSuggestions ? block3.call(this, context, tags, suffix) : void 0}${this.accInfo.input.ariaDescription ? block4.call(this, context, tags, suffix) : void 0}${this.hasValueState ? block5.call(this, context, tags, suffix) : void 0}</div></div>${this.showSuggestions ? block6.call(this, context, tags, suffix) : void 0}${this.hasValueStateMessage ? block18.call(this, context, tags, suffix) : void 0} `;
}
function block1(context, tags, suffix) {
  return suffix ? effectiveHtml`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper inputIcon" tabindex="-1"><${scopeTag("ui5-icon", tags, suffix)} tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></${scopeTag("ui5-icon", tags, suffix)}></div>` : effectiveHtml`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper inputIcon" tabindex="-1"><ui5-icon tabindex="-1" class="ui5-input-clear-icon" name="decline" accessible-name="${ifDefined(this.clearIconAccessibleName)}"></ui5-icon></div>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`;
}
function block3(context, tags, suffix) {
  return effectiveHtml`<span id="suggestionsText" class="ui5-hidden-text">${ifDefined(this.suggestionsText)}</span><span id="selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="suggestionsCount" class="ui5-hidden-text" aria-live="polite">${ifDefined(this.availableSuggestionsCount)}</span>`;
}
function block4(context, tags, suffix) {
  return effectiveHtml`<span id="descr" class="ui5-hidden-text">${ifDefined(this.accInfo.input.ariaDescription)}</span>`;
}
function block5(context, tags, suffix) {
  return effectiveHtml`<span id="valueStateDesc" class="ui5-hidden-text">${ifDefined(this.ariaValueStateHiddenText)}</span>`;
}
function block6(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-responsive-popover", tags, suffix)} class="${classMap(this.classes.popover)}" hide-arrow prevent-focus-restore prevent-initial-focus placement="Bottom" horizontal-align="Start" tabindex="-1" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open="${ifDefined(this._afterOpenPicker)}" @ui5-close="${ifDefined(this._afterClosePicker)}" @ui5-scroll="${ifDefined(this._scroll)}" .open=${ifDefined(this.open)} .opener=${ifDefined(this)}>${this._isPhone ? block7.call(this, context, tags, suffix) : void 0}${!this._isPhone ? block12.call(this, context, tags, suffix) : void 0}<${scopeTag("ui5-list", tags, suffix)} separators="${ifDefined(this.suggestionSeparators)}" selection-mode="Single" @mousedown="${this.onItemMouseDown}" @ui5-item-click="${ifDefined(this._handleSuggestionItemPress)}" @ui5-selection-change="${ifDefined(this._handleSelectionChange)}"><slot></slot></${scopeTag("ui5-list", tags, suffix)}>${this._isPhone ? block17.call(this, context, tags, suffix) : void 0}</${scopeTag("ui5-responsive-popover", tags, suffix)}>` : effectiveHtml`<ui5-responsive-popover class="${classMap(this.classes.popover)}" hide-arrow prevent-focus-restore prevent-initial-focus placement="Bottom" horizontal-align="Start" tabindex="-1" style="${styleMap(this.styles.suggestionsPopover)}" @ui5-open="${ifDefined(this._afterOpenPicker)}" @ui5-close="${ifDefined(this._afterClosePicker)}" @ui5-scroll="${ifDefined(this._scroll)}" .open=${ifDefined(this.open)} .opener=${ifDefined(this)}>${this._isPhone ? block7.call(this, context, tags, suffix) : void 0}${!this._isPhone ? block12.call(this, context, tags, suffix) : void 0}<ui5-list separators="${ifDefined(this.suggestionSeparators)}" selection-mode="Single" @mousedown="${this.onItemMouseDown}" @ui5-item-click="${ifDefined(this._handleSuggestionItemPress)}" @ui5-selection-change="${ifDefined(this._handleSelectionChange)}"><slot></slot></ui5-list>${this._isPhone ? block17.call(this, context, tags, suffix) : void 0}</ui5-responsive-popover>`;
}
function block7(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closePicker}"></${scopeTag("ui5-button", tags, suffix)}></div><div class="row"><div class="input-root-phone native-input-wrapper"><${scopeTag("ui5-input", tags, suffix)} class="ui5-input-inner-phone" type="${ifDefined(this.inputType)}" .value="${ifDefined(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${ifDefined(this.placeholder)}" @ui5-input="${ifDefined(this._handleInput)}" @ui5-change="${ifDefined(this._handleChange)}"></${scopeTag("ui5-input", tags, suffix)}></div></div></div>${this.hasValueStateMessage ? block8.call(this, context, tags, suffix) : void 0}` : effectiveHtml`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closePicker}"></ui5-button></div><div class="row"><div class="input-root-phone native-input-wrapper"><ui5-input class="ui5-input-inner-phone" type="${ifDefined(this.inputType)}" .value="${ifDefined(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${ifDefined(this.placeholder)}" @ui5-input="${ifDefined(this._handleInput)}" @ui5-change="${ifDefined(this._handleChange)}"></ui5-input></div></div></div>${this.hasValueStateMessage ? block8.call(this, context, tags, suffix) : void 0}`;
}
function block8(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.open ? block9.call(this, context, tags, suffix) : void 0}</div>` : effectiveHtml`<div class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.open ? block9.call(this, context, tags, suffix) : void 0}</div>`;
}
function block9(context, tags, suffix) {
  return effectiveHtml`${this.shouldDisplayDefaultValueStateMessage ? block10.call(this, context, tags, suffix) : block11.call(this, context, tags, suffix)}`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateText)}`;
}
function block11(context, tags, suffix) {
  return effectiveHtml`<slot name="valueStateMessage"></slot>`;
}
function block12(context, tags, suffix) {
  return effectiveHtml`${this.hasValueStateMessage ? block13.call(this, context, tags, suffix) : void 0}`;
}
function block13(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.open ? block14.call(this, context, tags, suffix) : void 0}</div>` : effectiveHtml`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${classMap(this.classes.popoverValueState)}" style=${styleMap(this.styles.suggestionPopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.open ? block14.call(this, context, tags, suffix) : void 0}</div>`;
}
function block14(context, tags, suffix) {
  return effectiveHtml`${this.shouldDisplayDefaultValueStateMessage ? block15.call(this, context, tags, suffix) : block16.call(this, context, tags, suffix)}`;
}
function block15(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateText)}`;
}
function block16(context, tags, suffix) {
  return effectiveHtml`<slot name="valueStateMessage"></slot>`;
}
function block17(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closePicker}">OK</${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closePicker}">OK</ui5-button></div>`;
}
function block18(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-popover", tags, suffix)} skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" tabindex="-1" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" .opener=${ifDefined(this)} .open=${ifDefined(this.valueStateOpen)} @ui5-close="${ifDefined(this._handleValueStatePopoverAfterClose)}"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>${this.valueStateOpen ? block19.call(this, context, tags, suffix) : void 0}</div></${scopeTag("ui5-popover", tags, suffix)}>` : effectiveHtml`<ui5-popover skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" tabindex="-1" horizontal-align="${ifDefined(this._valueStatePopoverHorizontalAlign)}" .opener=${ifDefined(this)} .open=${ifDefined(this.valueStateOpen)} @ui5-close="${ifDefined(this._handleValueStatePopoverAfterClose)}"><div slot="header" class="${classMap(this.classes.popoverValueState)}" style="${styleMap(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${ifDefined(this._valueStateMessageInputIcon)}"></ui5-icon>${this.valueStateOpen ? block19.call(this, context, tags, suffix) : void 0}</div></ui5-popover>`;
}
function block19(context, tags, suffix) {
  return effectiveHtml`${this.shouldDisplayDefaultValueStateMessage ? block20.call(this, context, tags, suffix) : block21.call(this, context, tags, suffix)}`;
}
function block20(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.valueStateText)}`;
}
function block21(context, tags, suffix) {
  return effectiveHtml`<slot name="valueStateMessage"></slot>`;
}
var InputTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/Filters.js
var Filters_exports = {};
__export(Filters_exports, {
  Contains: () => Contains,
  None: () => None,
  StartsWith: () => StartsWith,
  StartsWithPerTerm: () => StartsWithPerTerm
});
var escapeReg = /[[\]{}()*+?.\\^$|]/g;
var escapeRegExp = (str) => {
  return str.replace(escapeReg, "\\$&");
};
var StartsWithPerTerm = (value, items, propName) => {
  const reg = new RegExp(`(^|\\s)${escapeRegExp(value.toLowerCase())}.*`, "g");
  return items.filter((item) => {
    const text = item[propName];
    reg.lastIndex = 0;
    return reg.test(text.toLowerCase());
  });
};
var StartsWith = (value, items, propName) => items.filter((item) => (item[propName] || "").toLowerCase().startsWith(value.toLowerCase()));
var Contains = (value, items, propName) => items.filter((item) => (item[propName] || "").toLowerCase().includes(value.toLowerCase()));
var None = (_, items) => items;

// node_modules/@ui5/webcomponents/dist/generated/themes/Input.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Input.css.ts", content: `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-0-1_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-0-1_input_icon_padding);border-inline-start:var(--_ui5-v2-0-1_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-0-1_input_icon_border_radius)}.inputIcon[pressed]{background:var(--_ui5-v2-0-1_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-0-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-0-1_select_hover_icon_left_border);color:var(--_ui5-v2-0-1_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-0-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-0-1_select_hover_icon_left_border);color:var(--_ui5-v2-0-1_input_icon_pressed_color)}.inputIcon:not([pressed]):not(:active):hover{background:var(--_ui5-v2-0-1_input_icon_hover_bg);box-shadow:var(--_ui5-v2-0-1_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-0-1_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-0-1_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block}:host{width:var(--_ui5-v2-0-1_input_width);min-width:calc(var(--_ui5-v2-0-1_input_min_width) + (var(--_ui5-v2-0-1-input-icons-count)*var(--_ui5-v2-0-1_input_icon_width)));margin:var(--_ui5-v2-0-1_input_margin_top_bottom) 0;height:var(--_ui5-v2-0-1_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;border:var(--_ui5-v2-0-1-input-border);border-radius:var(--_ui5-v2-0-1_input_border_radius);box-sizing:border-box;text-align:start;transition:var(--_ui5-v2-0-1_input_transition);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v2-0-1_input_background_color)}:host(:not([readonly])),:host([readonly][disabled]){box-shadow:var(--sapField_Shadow)}:host([focused]:not([opened])){border-color:var(--_ui5-v2-0-1_input_focused_border_color);background-color:var(--sapField_Focus_Background)}.ui5-input-focusable-element{position:relative}:host([focused]:not([opened])) .ui5-input-focusable-element:after{content:var(--ui5-v2-0-1_input_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v2-0-1_input_focus_outline_color);border-radius:var(--_ui5-v2-0-1_input_focus_border_radius);top:var(--_ui5-v2-0-1_input_focus_offset);bottom:var(--_ui5-v2-0-1_input_focus_offset);left:var(--_ui5-v2-0-1_input_focus_offset);right:var(--_ui5-v2-0-1_input_focus_offset)}:host([focused][readonly]:not([opened])) .ui5-input-focusable-element:after{top:var(--_ui5-v2-0-1_input_readonly_focus_offset);bottom:var(--_ui5-v2-0-1_input_readonly_focus_offset);left:var(--_ui5-v2-0-1_input_readonly_focus_offset);right:var(--_ui5-v2-0-1_input_readonly_focus_offset);border-radius:var(--_ui5-v2-0-1_input_readonly_focus_border_radius)}.ui5-input-root:before{content:"";position:absolute;width:calc(100% - 2px);left:1px;bottom:-2px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:var(--_ui5-v2-0-1_input_bottom_border_height);transition:var(--_ui5-v2-0-1_input_transition);background-color:var(--_ui5-v2-0-1_input_bottom_border_color)}.ui5-input-root{width:100%;height:100%;position:relative;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit;transition:border-color .2s ease-in-out;border-radius:var(--_ui5-v2-0-1_input_border_radius);overflow:hidden}:host([disabled]){opacity:var(--_ui5-v2-0-1_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-0-1-input_disabled_background);border-color:var(--_ui5-v2-0-1_input_disabled_border_color)}:host([disabled]) .ui5-input-root:before,:host([readonly]) .ui5-input-root:before{content:none}[inner-input]{background:transparent;color:inherit;border:none;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;padding:var(--_ui5-v2-0-1_input_inner_padding);box-sizing:border-box;min-width:var(--_ui5-v2-0-1_input_min_width);width:100%;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;text-align:inherit}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v2-0-1_input_inner_padding_with_icon)}[inner-input][type=search]::-webkit-search-decoration,[inner-input][type=search]::-webkit-search-cancel-button,[inner-input][type=search]::-webkit-search-results-button,[inner-input][type=search]::-webkit-search-results-decoration{display:none}.ui5-input-value-state-icon{height:100%;display:var(--_ui5-v2-0-1-input-value-state-icon-display);align-items:center}.ui5-input-value-state-icon>svg{margin-right:8px}[inner-input]::selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}:host([disabled]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([disabled]) [inner-input]::-moz-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-moz-placeholder{visibility:hidden}[inner-input]::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v2-0-1_input_placeholder_style);color:var(--_ui5-v2-0-1_input_placeholder_color);padding-right:.125rem}[inner-input]::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v2-0-1_input_placeholder_style);color:var(--_ui5-v2-0-1_input_placeholder_color);padding-right:.125rem}:host([value-state="Negative"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-0-1-input_error_placeholder_color);font-weight:var(--_ui5-v2-0-1_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Negative"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-0-1-input_error_placeholder_color);font-weight:var(--_ui5-v2-0-1_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-webkit-input-placeholder{font-weight:var(--_ui5-v2-0-1_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-moz-placeholder{font-weight:var(--_ui5-v2-0-1_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Positive"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-0-1_input_placeholder_color)}:host([value-state="Positive"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-0-1_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-0-1_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-0-1_input_placeholder_color)}.ui5-input-content{height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-end;overflow:hidden;outline:none;background:transparent;color:inherit;border-radius:var(--_ui5-v2-0-1_input_border_radius)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v2-0-1_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-0-1_input_readonly_background)}:host([value-state="None"]:not([readonly]):hover),:host(:not([value-state]):not([readonly]):hover){border:var(--_ui5-v2-0-1_input_hover_border);border-color:var(--_ui5-v2-0-1_input_focused_border_color);box-shadow:var(--sapField_Hover_Shadow);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background)}:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover){box-shadow:none}:host([focused]):not([opened]) .ui5-input-root:before{content:none}:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])){border-width:var(--_ui5-v2-0-1_input_state_border_width)}:host([value-state="Negative"]) [inner-input],:host([value-state="Critical"]) [inner-input]{font-style:var(--_ui5-v2-0-1_input_error_warning_font_style);text-indent:var(--_ui5-v2-0-1_input_error_warning_text_indent)}:host([value-state="Negative"]) [inner-input]{font-weight:var(--_ui5-v2-0-1_input_error_font_weight)}:host([value-state="Critical"]) [inner-input]{font-weight:var(--_ui5-v2-0-1_input_warning_font_weight)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-0-1_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-0-1_input_focused_value_state_error_background);border-color:var(--_ui5-v2-0-1_input_focused_value_state_error_border_color)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-0-1_input_focused_value_state_error_focus_outline_color)}:host([value-state="Negative"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-0-1-input-value-state-error-border-botom-color)}:host([value-state="Negative"]:not([readonly]):not([focused]):hover),:host([value-state="Negative"]:not([readonly])[focused][opened]:hover){background-color:var(--_ui5-v2-0-1_input_value_state_error_hover_background);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])),:host([value-state="Critical"]:not([readonly]):not([disabled])),:host([value-state="Information"]:not([readonly]):not([disabled])){border-style:var(--_ui5-v2-0-1_input_error_warning_border_style)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-0-1_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-0-1_input_focused_value_state_warning_background);border-color:var(--_ui5-v2-0-1_input_focused_value_state_warning_border_color)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-0-1_input_focused_value_state_warning_focus_outline_color)}:host([value-state="Critical"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-0-1_input_value_state_warning_border_botom_color)}:host([value-state="Critical"]:not([readonly]):not([focused]):hover),:host([value-state="Critical"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-0-1_input_value_state_success_border_color);border-width:var(--_ui5-v2-0-1_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-0-1_input_focused_value_state_success_background);border-color:var(--_ui5-v2-0-1_input_focused_value_state_success_border_color)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-0-1_input_focused_value_state_success_focus_outline_color)}:host([value-state="Positive"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-0-1_input_value_state_success_border_botom_color)}:host([value-state="Positive"]:not([readonly]):not([focused]):hover),:host([value-state="Positive"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-0-1_input_value_state_information_border_color);border-width:var(--_ui5-v2-0-1_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Information"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-0-1_input_focused_value_state_information_background);border-color:var(--_ui5-v2-0-1_input_focused_value_state_information_border_color)}:host([value-state="Information"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-0-1_input_value_success_information_border_botom_color)}:host([value-state="Information"]:not([readonly]):not([focused]):hover),:host([value-state="Information"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-input-icon-root{min-width:var(--_ui5-v2-0-1_input_icon_min_width);height:100%;display:flex;justify-content:center;align-items:center}::slotted([ui5-icon][slot="icon"]){align-self:start;padding:var(--_ui5-v2-0-1_input_custom_icon_padding);box-sizing:content-box!important}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-0-1_input_error_warning_icon_padding)}:host([value-state="Negative"][focused]) .inputIcon,:host([value-state="Critical"][focused]) .inputIcon{padding:var(--_ui5-v2-0-1_input_error_warning_focused_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-0-1_input_information_icon_padding)}:host([value-state="Information"][focused]) .inputIcon{padding:var(--_ui5-v2-0-1_input_information_focused_icon_padding)}:host([value-state="Negative"]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-0-1_input_error_warning_custom_icon_padding)}:host([value-state="Negative"][focused]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"][focused]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-0-1_input_error_warning_custom_focused_icon_padding)}:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-0-1_input_information_custom_icon_padding)}:host([value-state="Information"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-0-1_input_information_custom_focused_icon_padding)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-0-1_input_error_icon_box_shadow);color:var(--_ui5-v2-0-1_input_icon_error_pressed_color)}:host([value-state="Negative"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-0-1_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-0-1_input_warning_icon_box_shadow);color:var(--_ui5-v2-0-1_input_icon_warning_pressed_color)}:host([value-state="Critical"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-0-1_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-0-1_input_information_icon_box_shadow);color:var(--_ui5-v2-0-1_input_icon_information_pressed_color)}:host([value-state="Information"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-0-1_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-0-1_input_success_icon_box_shadow);color:var(--_ui5-v2-0-1_input_icon_success_pressed_color)}:host([value-state="Positive"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-0-1_input_success_icon_box_shadow)}.ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-0-1_input_icon_wrapper_height);padding:0;width:var(--_ui5-v2-0-1_input_icon_width);min-width:var(--_ui5-v2-0-1_input_icon_width);display:flex;justify-content:center;align-items:center;box-sizing:border-box}:host([value-state]:not([value-state="None"]):not([value-state="Positive"])) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-0-1_input_icon_wrapper_state_height);vertical-align:top}:host([value-state="Positive"]) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-0-1_input_icon_wrapper_success_state_height)}[ui5-icon].ui5-input-clear-icon{padding:0;color:inherit}[inner-input]::-webkit-outer-spin-button,[inner-input]::-webkit-inner-spin-button{-webkit-appearance:inherit;margin:inherit}
` };
var Input_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/generated/themes/ValueStateMessage.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = { packageName: "@ui5/webcomponents", fileName: "themes/ValueStateMessage.css.ts", content: `.ui5-valuestatemessage-popover{border-radius:var(--_ui5-v2-0-1_value_state_message_popover_border_radius);box-shadow:var(--_ui5-v2-0-1_value_state_message_popover_box_shadow)}.ui5-input-value-state-message-icon{width:var(--_ui5-v2-0-1_value_state_message_icon_width);height:var(--_ui5-v2-0-1_value_state_message_icon_height);display:var(--_ui5-v2-0-1_input_value_state_icon_display);position:absolute;padding-right:.375rem}.ui5-valuestatemessage-root .ui5-input-value-state-message-icon{left:var(--_ui5-v2-0-1_input_value_state_icon_offset)}.ui5-input-value-state-message-icon[name=error]{color:var(--sapNegativeElementColor)}.ui5-input-value-state-message-icon[name=alert]{color:var(--sapCriticalElementColor)}.ui5-input-value-state-message-icon[name=success]{color:var(--sapPositiveElementColor)}.ui5-input-value-state-message-icon[name=information]{color:var(--sapInformativeElementColor)}.ui5-valuestatemessage-root{box-sizing:border-box;display:inline-block;color:var(--sapTextColor);font-size:var(--sapFontSmallSize);font-family:"72override",var(--sapFontFamily);height:auto;padding:var(--_ui5-v2-0-1_value_state_message_padding);overflow:hidden;text-overflow:ellipsis;min-width:6.25rem;border:var(--_ui5-v2-0-1_value_state_message_border);line-height:var(--_ui5-v2-0-1_value_state_message_line_height)}[ui5-responsive-popover] .ui5-valuestatemessage-header,[ui5-popover] .ui5-valuestatemessage-header{min-height:2rem}[ui5-responsive-popover] .ui5-valuestatemessage-header{padding:var(--_ui5-v2-0-1_value_state_header_padding);border:var(--_ui5-v2-0-1_value_state_header_border);border-bottom:var(--_ui5-v2-0-1_value_state_header_border_bottom);flex-grow:1;position:relative}.ui5-valuestatemessage--success{background:var(--sapSuccessBackground)}.ui5-valuestatemessage--warning{background:var(--sapWarningBackground)}.ui5-valuestatemessage--error{background:var(--sapErrorBackground)}.ui5-valuestatemessage--information{background:var(--sapInformationBackground)}.ui5-responsive-popover-header[focused],.ui5-responsive-popover-header:focus{outline-offset:var(--_ui5-v2-0-1_value_state_header_offset);outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-valuestatemessage-popover::part(header),.ui5-valuestatemessage-popover::part(content){padding:0}.ui5-valuestatemessage-popover::part(header),.ui5-valuestatemessage-popover::part(footer){min-height:0}.ui5-valuestatemessage-popover::part(header),.ui5-popover-with-value-state-header::part(header),.ui5-popover-with-value-state-header-phone::part(header){margin-bottom:0}.ui5-popover-with-value-state-header-phone .ui5-valuestatemessage-root{padding:var(--_ui5-v2-0-1_value_state_message_padding_phone);width:100%}.ui5-popover-with-value-state-header-phone .ui5-input-value-state-message-icon{left:var(--_ui5-v2-0-1_value_state_message_icon_offset_phone)}.ui5-popover-with-value-state-header-phone .ui5-valuestatemessage-header{position:relative;flex:none;top:0;left:0}.ui5-popover-with-value-state-header-phone::part(content){padding:0;overflow:hidden;display:flex;flex-direction:column}.ui5-popover-with-value-state-header-phone [ui5-list]{overflow:auto}[ui5-responsive-popover] .ui5-valuestatemessage--error{box-shadow:var(--_ui5-v2-0-1_value_state_header_box_shadow_error)}[ui5-responsive-popover] .ui5-valuestatemessage--information{box-shadow:var(--_ui5-v2-0-1_value_state_header_box_shadow_information)}[ui5-responsive-popover] .ui5-valuestatemessage--success{box-shadow:var(--_ui5-v2-0-1_value_state_header_box_shadow_success)}[ui5-responsive-popover] .ui5-valuestatemessage--warning{box-shadow:var(--_ui5-v2-0-1_value_state_header_box_shadow_warning)}[ui5-responsive-popover].ui5-popover-with-value-state-header .ui5-valuestatemessage-root:has(+[ui5-list]:empty){box-shadow:none}
` };
var ValueStateMessage_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/generated/themes/Suggestions.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData3 = { packageName: "@ui5/webcomponents", fileName: "themes/Suggestions.css.ts", content: `.ui5-suggestions-popover{box-shadow:var(--sapContent_Shadow1)}.ui5-suggestions-popover::part(header),.ui5-suggestions-popover::part(content){padding:0}.ui5-suggestions-popover::part(footer){padding:0 1rem}.input-root-phone.native-input-wrapper{display:contents}.input-root-phone.native-input-wrapper:before{display:none}.native-input-wrapper .ui5-input-inner-phone{margin:0}
` };
var Suggestions_css_default = styleData3;

// node_modules/@ui5/webcomponents/dist/Input.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Input_1;
var INPUT_EVENTS;
(function(INPUT_EVENTS2) {
  INPUT_EVENTS2["CHANGE"] = "change";
  INPUT_EVENTS2["INPUT"] = "input";
  INPUT_EVENTS2["SELECTION_CHANGE"] = "selection-change";
})(INPUT_EVENTS || (INPUT_EVENTS = {}));
var INPUT_ACTIONS;
(function(INPUT_ACTIONS2) {
  INPUT_ACTIONS2["ACTION_ENTER"] = "enter";
  INPUT_ACTIONS2["ACTION_USER_INPUT"] = "input";
})(INPUT_ACTIONS || (INPUT_ACTIONS = {}));
var Input = Input_1 = class Input2 extends UI5Element_default {
  get formValidityMessage() {
    return Input_1.i18nBundle.getText(FORM_TEXTFIELD_REQUIRED);
  }
  get formValidity() {
    return { valueMissing: this.required && !this.value };
  }
  formElementAnchor() {
    return __async(this, null, function* () {
      return this.getFocusDomRefAsync();
    });
  }
  get formFormattedValue() {
    return this.value;
  }
  constructor() {
    super();
    this.disabled = false;
    this.highlight = false;
    this.readonly = false;
    this.required = false;
    this.noTypeahead = false;
    this.type = "Text";
    this.value = "";
    this._innerValue = "";
    this.valueState = "None";
    this.showSuggestions = false;
    this.showClearIcon = false;
    this.open = false;
    this._effectiveShowClearIcon = false;
    this.focused = false;
    this.valueStateOpen = false;
    this._isValueStateFocused = false;
    this._inputAccInfo = {};
    this._nativeInputAttributes = {};
    this._inputIconFocused = false;
    this.hasSuggestionItemSelected = false;
    this.valueBeforeItemSelection = "";
    this.valueBeforeSelectionStart = "";
    this.previousValue = "";
    this.firstRendering = true;
    this.typedInValue = "";
    this.lastConfirmedValue = "";
    this.isTyping = false;
    this._isLatestValueFromSuggestions = false;
    this._handleResizeBound = this._handleResize.bind(this);
    this._keepInnerValue = false;
    this._focusedAfterClear = false;
  }
  onEnterDOM() {
    ResizeHandler_default.register(this, this._handleResizeBound);
    registerUI5Element(this, this._updateAssociatedLabelsTexts.bind(this));
  }
  onExitDOM() {
    ResizeHandler_default.deregister(this, this._handleResizeBound);
    deregisterUI5Element(this);
  }
  _highlightSuggestionItem(item) {
    item.markupText = this.typedInValue ? this.Suggestions?.hightlightInput(item.text || "", this.typedInValue) : encodeXML_default(item.text || "");
  }
  _isGroupItem(item) {
    return item.hasAttribute("ui5-suggestion-item-group");
  }
  onBeforeRendering() {
    if (!this._keepInnerValue) {
      this._innerValue = this.value;
    }
    if (this.showSuggestions) {
      this.enableSuggestions();
      this.suggestionItems.forEach((item) => {
        if (item.hasAttribute("ui5-suggestion-item")) {
          this._highlightSuggestionItem(item);
        } else if (this._isGroupItem(item)) {
          item.items?.forEach((nestedItem) => {
            this._highlightSuggestionItem(nestedItem);
          });
        }
      });
    }
    this._effectiveShowClearIcon = this.showClearIcon && !!this.value && !this.readonly && !this.disabled;
    this.style.setProperty(getScopedVarName("--_ui5-input-icons-count"), `${this.iconsCount}`);
    const hasItems = !!this.suggestionItems.length;
    const hasValue = !!this.value;
    const isFocused = this.shadowRoot.querySelector("input") === getActiveElement_default();
    if (this.shouldDisplayOnlyValueStateMessage) {
      this.openValueStatePopover();
    } else {
      this.closeValueStatePopover();
    }
    const preventOpenPicker = this.disabled || this.readonly;
    if (preventOpenPicker) {
      this.open = false;
    } else if (!this._isPhone) {
      this.open = hasItems && (this.open || hasValue && isFocused && this.isTyping);
    }
    const value = this.value;
    const innerInput = this.getInputDOMRefSync();
    if (!innerInput || !value) {
      return;
    }
    const autoCompletedChars = innerInput.selectionEnd - innerInput.selectionStart;
    if (this._shouldAutocomplete && !isAndroid() && !autoCompletedChars && !this._isKeyNavigation) {
      const item = this._getFirstMatchingItem(value);
      if (item) {
        this._handleTypeAhead(item);
      }
    }
  }
  onAfterRendering() {
    const innerInput = this.getInputDOMRefSync();
    if (this.Suggestions && this.showSuggestions && this.Suggestions._getPicker()) {
      this._listWidth = this.Suggestions._getListWidth();
    }
    if (this._performTextSelection) {
      if (innerInput.value !== this._innerValue) {
        innerInput.value = this._innerValue;
      }
      if (this.typedInValue.length && this.value.length) {
        innerInput.setSelectionRange(this.typedInValue.length, this.value.length);
      }
    }
    this._performTextSelection = false;
  }
  _onkeydown(e) {
    this._isKeyNavigation = true;
    this._shouldAutocomplete = !this.noTypeahead && !(isBackSpace(e) || isDelete(e) || isEscape(e));
    if (isUp(e)) {
      return this._handleUp(e);
    }
    if (isDown(e)) {
      return this._handleDown(e);
    }
    if (isSpace(e)) {
      return this._handleSpace(e);
    }
    if (isTabNext(e)) {
      return this._handleTab();
    }
    if (isEnter(e)) {
      return this._handleEnter(e);
    }
    if (isPageUp(e)) {
      return this._handlePageUp(e);
    }
    if (isPageDown(e)) {
      return this._handlePageDown(e);
    }
    if (isHome(e)) {
      return this._handleHome(e);
    }
    if (isEnd(e)) {
      return this._handleEnd(e);
    }
    if (isEscape(e)) {
      return this._handleEscape();
    }
    if (this.showSuggestions) {
      this._clearPopoverFocusAndSelection();
    }
    this._keyDown = true;
    this._isKeyNavigation = false;
  }
  _onkeyup(e) {
    if (isDelete(e)) {
      this.value = e.target.value;
    }
    this._keyDown = false;
  }
  _handleUp(e) {
    if (this.Suggestions && this.Suggestions.isOpened()) {
      this.Suggestions.onUp(e);
    }
  }
  _handleDown(e) {
    if (this.Suggestions && this.Suggestions.isOpened()) {
      this.Suggestions.onDown(e);
    }
  }
  _handleSpace(e) {
    if (this.Suggestions) {
      this.Suggestions.onSpace(e);
    }
  }
  _handleTab() {
    if (this.Suggestions && this.previousValue !== this.value) {
      this.Suggestions.onTab();
    }
  }
  _handleEnter(e) {
    const suggestionItemPressed = !!(this.Suggestions && this.Suggestions.onEnter(e));
    const innerInput = this.getInputDOMRefSync();
    const matchingItem = this._selectableItems.find((item) => {
      return item.text === this.value;
    });
    if (matchingItem) {
      const itemText = matchingItem.text || "";
      innerInput.setSelectionRange(itemText.length, itemText.length);
      if (!suggestionItemPressed) {
        this.fireSelectionChange(matchingItem, true);
        this.acceptSuggestion(matchingItem, true);
        this.open = false;
      }
    }
    if (this._isPhone && !this.suggestionItems.length && !this.isTypeNumber) {
      innerInput.setSelectionRange(this.value.length, this.value.length);
    }
    if (!suggestionItemPressed) {
      this.lastConfirmedValue = this.value;
      if (this._internals?.form) {
        submitForm(this);
      }
      return;
    }
    this.focused = true;
  }
  _handlePageUp(e) {
    if (this._isSuggestionsFocused) {
      this.Suggestions.onPageUp(e);
    } else {
      e.preventDefault();
    }
  }
  _handlePageDown(e) {
    if (this._isSuggestionsFocused) {
      this.Suggestions.onPageDown(e);
    } else {
      e.preventDefault();
    }
  }
  _handleHome(e) {
    if (this._isSuggestionsFocused) {
      this.Suggestions.onHome(e);
    }
  }
  _handleEnd(e) {
    if (this._isSuggestionsFocused) {
      this.Suggestions.onEnd(e);
    }
  }
  _handleEscape() {
    const hasSuggestions = this.showSuggestions && !!this.Suggestions;
    const isOpen = hasSuggestions && this.open;
    const innerInput = this.getInputDOMRefSync();
    const isAutoCompleted = innerInput.selectionEnd - innerInput.selectionStart > 0;
    this.isTyping = false;
    if (!isOpen) {
      this.value = this.lastConfirmedValue ? this.lastConfirmedValue : this.previousValue;
      return;
    }
    if (isOpen && this.Suggestions._isItemOnTarget()) {
      this.value = this.typedInValue || this.valueBeforeSelectionStart;
      this.focused = true;
      return;
    }
    if (isAutoCompleted) {
      this.value = this.typedInValue;
    }
    if (this._isValueStateFocused) {
      this._isValueStateFocused = false;
      this.focused = true;
    }
  }
  _onfocusin(e) {
    this.focused = true;
    if (!this._focusedAfterClear) {
      this.previousValue = this.value;
    }
    this.valueBeforeSelectionStart = this.value;
    this._inputIconFocused = !!e.target && e.target === this.querySelector("[ui5-icon]");
    this._focusedAfterClear = false;
  }
  /**
   * Called on "focusin" of the native input HTML Element.
   * **Note:** implemented in MultiInput, but used in the Input template.
   */
  innerFocusIn() {
  }
  _onfocusout(e) {
    const toBeFocused = e.relatedTarget;
    if (this.Suggestions?._getPicker().contains(toBeFocused) || this.contains(toBeFocused) || this.getSlottedNodes("valueStateMessage").some((el) => el.contains(toBeFocused))) {
      return;
    }
    this._keepInnerValue = false;
    this.focused = false;
    if (this.showClearIcon && !this._effectiveShowClearIcon) {
      this._clearIconClicked = false;
      this._handleChange();
    }
    this.open = false;
    this._clearPopoverFocusAndSelection();
    if (!this._clearIconClicked) {
      this.previousValue = "";
    }
    this.lastConfirmedValue = "";
    this.isTyping = false;
  }
  _clearPopoverFocusAndSelection() {
    if (!this.showSuggestions || !this.Suggestions) {
      return;
    }
    this._isValueStateFocused = false;
    this.hasSuggestionItemSelected = false;
    this.Suggestions._deselectItems();
    this.Suggestions._clearItemFocus();
  }
  _click() {
    if (isPhone() && !this.readonly && this.Suggestions) {
      this.blur();
      this.open = true;
    }
  }
  _handleChange() {
    if (this._clearIconClicked) {
      this._clearIconClicked = false;
      return;
    }
    const fireChange = () => {
      this.fireEvent(INPUT_EVENTS.CHANGE);
      this.previousValue = this.value;
      this.typedInValue = this.value;
    };
    if (this.previousValue !== this.getInputDOMRefSync().value) {
      if (this.Suggestions?._getPicker().open && this.suggestionItems.some((item) => item.hasAttribute("ui5-suggestion-item") && item.selected)) {
        this._changeToBeFired = true;
      } else {
        fireChange();
      }
    }
  }
  _clear() {
    this.value = "";
    this.fireEvent(INPUT_EVENTS.INPUT, { inputType: "" });
    if (!this._isPhone) {
      this.fireResetSelectionChange();
      this.focus();
      this._focusedAfterClear = true;
    }
  }
  _iconMouseDown() {
    this._clearIconClicked = true;
  }
  _scroll(e) {
    this.fireEvent("suggestion-scroll", {
      scrollTop: e.detail.scrollTop,
      scrollContainer: e.detail.targetRef
    });
  }
  _handleInput(e) {
    const inputDomRef = this.getInputDOMRefSync();
    const emptyValueFiredOnNumberInput = this.value && this.isTypeNumber && !inputDomRef.value;
    const eventType = e.inputType || e.detail.inputType || "";
    this._keepInnerValue = false;
    const allowedEventTypes = [
      "deleteWordBackward",
      "deleteWordForward",
      "deleteSoftLineBackward",
      "deleteSoftLineForward",
      "deleteEntireSoftLine",
      "deleteHardLineBackward",
      "deleteHardLineForward",
      "deleteByDrag",
      "deleteByCut",
      "deleteContent",
      "deleteContentBackward",
      "deleteContentForward",
      "historyUndo"
    ];
    this._shouldAutocomplete = !allowedEventTypes.includes(eventType) && !this.noTypeahead;
    if (e instanceof InputEvent) {
      const delimiterCase = this.isTypeNumber && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward") && !e.target.value.includes(".") && this.value.includes(".");
      const eNotationCase = emptyValueFiredOnNumberInput && e.data === "e";
      const minusRemovalCase = emptyValueFiredOnNumberInput && this.value.startsWith("-") && this.value.length === 2 && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward");
      if (delimiterCase || eNotationCase || minusRemovalCase) {
        this.value = e.target.value;
        this._keepInnerValue = true;
      }
    }
    if (e.target === inputDomRef) {
      this.focused = true;
      e.stopImmediatePropagation();
    }
    this.fireEventByAction(INPUT_ACTIONS.ACTION_ENTER, e);
    this.hasSuggestionItemSelected = false;
    this._isValueStateFocused = false;
    if (this.Suggestions) {
      this.Suggestions.updateSelectedItemPosition(-1);
    }
    this.isTyping = true;
  }
  _startsWithMatchingItems(str) {
    return StartsWith(str, Array.from(this.querySelectorAll("[ui5-suggestion-item], [ui5-suggestion-item-custom]")), "text");
  }
  _getFirstMatchingItem(current) {
    if (!this.suggestionItems.length) {
      return;
    }
    const matchingItems = this._startsWithMatchingItems(current).filter((item) => !this._isGroupItem(item));
    if (matchingItems.length) {
      return matchingItems[0];
    }
  }
  _handleSelectionChange(e) {
    this.Suggestions?.onItemPress(e);
  }
  _handleTypeAhead(item) {
    const value = item.text ? item.text : item.textContent || "";
    this._innerValue = value;
    this.value = value;
    this._performTextSelection = true;
    this._shouldAutocomplete = false;
  }
  _handleResize() {
    this._inputWidth = this.offsetWidth;
  }
  _updateAssociatedLabelsTexts() {
    this._associatedLabelsTexts = getAssociatedLabelForTexts(this);
    this._accessibleLabelsRefTexts = getAllAccessibleNameRefTexts(this);
  }
  _closePicker() {
    this.open = false;
  }
  _afterOpenPicker() {
    if (isPhone()) {
      this.getInputDOMRef().focus();
    }
    this._handlePickerAfterOpen();
  }
  _afterClosePicker() {
    this.announceSelectedItem();
    if (isPhone()) {
      this.blur();
      this.focused = false;
    }
    if (this._changeToBeFired) {
      this.fireEvent(INPUT_EVENTS.CHANGE);
      this._changeToBeFired = false;
    }
    this.open = false;
    this.isTyping = false;
    if (this.hasSuggestionItemSelected) {
      this.focus();
    }
    this._handlePickerAfterClose();
  }
  _handlePickerAfterOpen() {
    this.Suggestions?._onOpen();
    this.fireEvent("open", null, false, false);
  }
  _handlePickerAfterClose() {
    this.Suggestions?._onClose();
    this.fireEvent("close", null, false, false);
  }
  openValueStatePopover() {
    this.valueStateOpen = true;
  }
  closeValueStatePopover() {
    this.valueStateOpen = false;
  }
  _handleValueStatePopoverAfterClose() {
    this.valueStateOpen = false;
  }
  _getValueStatePopover() {
    return this.shadowRoot.querySelector("[ui5-popover]");
  }
  enableSuggestions() {
    if (this.Suggestions) {
      return;
    }
    const Suggestions = getFeature("InputSuggestions");
    if (Suggestions) {
      this.Suggestions = new Suggestions(this, "suggestionItems", true, false);
    } else {
      throw new Error(`You have to import "@ui5/webcomponents/dist/features/InputSuggestions.js" module to use ui5-input suggestions`);
    }
  }
  acceptSuggestion(item, keyboardUsed) {
    if (this._isGroupItem(item)) {
      return;
    }
    const value = this.typedInValue || this.value;
    const itemText = item.text || item.textContent || "";
    const fireChange = keyboardUsed ? this.valueBeforeItemSelection !== itemText : value !== itemText;
    this.hasSuggestionItemSelected = true;
    if (fireChange) {
      this.value = itemText;
      this.valueBeforeItemSelection = itemText;
      this.lastConfirmedValue = itemText;
      this._performTextSelection = true;
      this.fireEvent(INPUT_EVENTS.CHANGE);
      this.typedInValue = this.value;
      this.previousValue = this.value;
    }
    this.valueBeforeSelectionStart = "";
    this.isTyping = false;
    this.open = false;
  }
  /**
   * Updates the input value on item select.
   * @param item The item that is on select
   */
  updateValueOnSelect(item) {
    const itemValue = this._isGroupItem(item) ? this.valueBeforeSelectionStart : item.text;
    this.value = itemValue || "";
    this._performTextSelection = true;
  }
  fireEventByAction(action, e) {
    if (this.disabled || this.readonly) {
      return;
    }
    const inputValue = this.getInputValue();
    const isUserInput = action === INPUT_ACTIONS.ACTION_ENTER;
    this.value = inputValue;
    this.typedInValue = inputValue;
    this.valueBeforeSelectionStart = inputValue;
    if (isUserInput) {
      this.fireEvent(INPUT_EVENTS.INPUT, { inputType: e.inputType });
      this.fireEvent("value-changed");
      this.fireResetSelectionChange();
    }
  }
  getInputValue() {
    const domRef = this.getDomRef();
    if (domRef) {
      return this.getInputDOMRef().value;
    }
    return "";
  }
  getInputDOMRef() {
    if (isPhone() && this.Suggestions) {
      return this.Suggestions._getPicker().querySelector(".ui5-input-inner-phone");
    }
    return this.nativeInput;
  }
  getInputDOMRefSync() {
    if (isPhone() && this.Suggestions?._getPicker()) {
      return this.Suggestions._getPicker().querySelector(".ui5-input-inner-phone").shadowRoot.querySelector("input");
    }
    return this.nativeInput;
  }
  /**
   * Returns a reference to the native input element
   * @protected
   */
  get nativeInput() {
    const domRef = this.getDomRef();
    return domRef ? domRef.querySelector(`input`) : null;
  }
  get nativeInputWidth() {
    return this.nativeInput ? this.nativeInput.offsetWidth : 0;
  }
  /**
   * Returns if the suggestions popover is scrollable.
   * The method returns `Promise` that resolves to true,
   * if the popup is scrollable and false otherwise.
   */
  isSuggestionsScrollable() {
    if (!this.Suggestions) {
      return Promise.resolve(false);
    }
    return this.Suggestions._isScrollable();
  }
  onItemMouseDown(e) {
    e.preventDefault();
  }
  onItemSelected(suggestionItem, keyboardUsed) {
    const shouldFireSelectionChange = !keyboardUsed && !suggestionItem?.focused && this.valueBeforeItemSelection !== suggestionItem.text;
    if (shouldFireSelectionChange) {
      this.fireSelectionChange(suggestionItem, true);
    }
    this.acceptSuggestion(suggestionItem, keyboardUsed);
  }
  _handleSuggestionItemPress(e) {
    this.Suggestions?.onItemPress(e);
  }
  onItemSelect(item) {
    this.valueBeforeItemSelection = this.value;
    this.updateValueOnSelect(item);
    this.announceSelectedItem();
    this.fireSelectionChange(item, true);
  }
  get _flattenItems() {
    return Array.from(this.querySelectorAll("[ui5-suggestion-item], [ui5-suggestion-item-group], [ui5-suggestion-item-custom]"));
  }
  get _selectableItems() {
    return Array.from(this.querySelectorAll("[ui5-suggestion-item], [ui5-suggestion-item-custom]"));
  }
  get valueStateTypeMappings() {
    return {
      "Positive": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_SUCCESS),
      "Information": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_INFORMATION),
      "Negative": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_ERROR),
      "Critical": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_WARNING)
    };
  }
  valueStateTextMappings() {
    return {
      "Positive": Input_1.i18nBundle.getText(VALUE_STATE_SUCCESS),
      "Information": Input_1.i18nBundle.getText(VALUE_STATE_INFORMATION),
      "Negative": Input_1.i18nBundle.getText(VALUE_STATE_ERROR),
      "Critical": Input_1.i18nBundle.getText(VALUE_STATE_WARNING)
    };
  }
  announceSelectedItem() {
    const invisibleText = this.shadowRoot.querySelector(`#selectionText`);
    if (invisibleText) {
      invisibleText.textContent = this.itemSelectionAnnounce;
    }
  }
  fireSelectionChange(item, isValueFromSuggestions) {
    if (this.Suggestions) {
      this.fireEvent(INPUT_EVENTS.SELECTION_CHANGE, { item });
      this._isLatestValueFromSuggestions = isValueFromSuggestions;
    }
  }
  fireResetSelectionChange() {
    if (this._isLatestValueFromSuggestions) {
      this.fireSelectionChange(null, false);
    }
  }
  get _readonly() {
    return this.readonly && !this.disabled;
  }
  get _headerTitleText() {
    return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_TITLE);
  }
  get clearIconAccessibleName() {
    return Input_1.i18nBundle.getText(INPUT_CLEAR_ICON_ACC_NAME);
  }
  get inputType() {
    return this.type.toLowerCase();
  }
  get isTypeNumber() {
    return this.type === InputType_default.Number;
  }
  get suggestionsTextId() {
    return this.showSuggestions ? `suggestionsText` : "";
  }
  get valueStateTextId() {
    return this.hasValueState ? `valueStateDesc` : "";
  }
  get accInfo() {
    const ariaHasPopupDefault = this.showSuggestions ? "dialog" : void 0;
    const ariaAutoCompleteDefault = this.showSuggestions ? "list" : void 0;
    const ariaDescribedBy = this._inputAccInfo.ariaDescribedBy ? `${this.suggestionsTextId} ${this.valueStateTextId} ${this._inputAccInfo.ariaDescribedBy}`.trim() : `${this.suggestionsTextId} ${this.valueStateTextId}`.trim();
    const info = {
      "input": {
        "ariaRoledescription": this._inputAccInfo && (this._inputAccInfo.ariaRoledescription || void 0),
        "ariaDescribedBy": ariaDescribedBy || void 0,
        "ariaInvalid": this.valueState === ValueState_default.Negative ? "true" : void 0,
        "ariaHasPopup": this._inputAccInfo.ariaHasPopup ? this._inputAccInfo.ariaHasPopup : ariaHasPopupDefault,
        "ariaAutoComplete": this._inputAccInfo.ariaAutoComplete ? this._inputAccInfo.ariaAutoComplete : ariaAutoCompleteDefault,
        "role": this._inputAccInfo && this._inputAccInfo.role,
        "ariaControls": this._inputAccInfo && this._inputAccInfo.ariaControls,
        "ariaExpanded": this._inputAccInfo && this._inputAccInfo.ariaExpanded,
        "ariaDescription": this._inputAccInfo && this._inputAccInfo.ariaDescription,
        "ariaLabel": this._inputAccInfo && this._inputAccInfo.ariaLabel || this._accessibleLabelsRefTexts || this.accessibleName || this._associatedLabelsTexts || void 0
      }
    };
    return info;
  }
  get nativeInputAttributes() {
    return {
      "min": this.isTypeNumber ? this._nativeInputAttributes.min : void 0,
      "max": this.isTypeNumber ? this._nativeInputAttributes.max : void 0,
      "step": this.isTypeNumber ? this._nativeInputAttributes.step || "any" : void 0
    };
  }
  get ariaValueStateHiddenText() {
    if (!this.hasValueState) {
      return;
    }
    const valueState = this.valueState !== ValueState_default.None ? this.valueStateTypeMappings[this.valueState] : "";
    if (this.shouldDisplayDefaultValueStateMessage) {
      return this.valueStateText ? `${valueState} ${this.valueStateText}` : valueState;
    }
    return `${valueState}`.concat(" ", this.valueStateMessage.map((el) => el.textContent).join(" "));
  }
  get itemSelectionAnnounce() {
    return this.Suggestions ? this.Suggestions.itemSelectionAnnounce : "";
  }
  get iconsCount() {
    const slottedIconsCount = this.icon ? this.icon.length : 0;
    const clearIconCount = Number(this._effectiveShowClearIcon) ?? 0;
    return slottedIconsCount + clearIconCount;
  }
  get classes() {
    return {
      popover: {
        "ui5-suggestions-popover": this.showSuggestions,
        "ui5-popover-with-value-state-header-phone": this._isPhone && this.showSuggestions && this.hasValueStateMessage,
        "ui5-popover-with-value-state-header": !this._isPhone && this.showSuggestions && this.hasValueStateMessage
      },
      popoverValueState: {
        "ui5-valuestatemessage-root": true,
        "ui5-valuestatemessage-header": true,
        "ui5-valuestatemessage--success": this.valueState === ValueState_default.Positive,
        "ui5-valuestatemessage--error": this.valueState === ValueState_default.Negative,
        "ui5-valuestatemessage--warning": this.valueState === ValueState_default.Critical,
        "ui5-valuestatemessage--information": this.valueState === ValueState_default.Information
      }
    };
  }
  get styles() {
    const remSizeIxPx = parseInt(getComputedStyle(document.documentElement).fontSize);
    const stylesObject = {
      popoverHeader: {
        "max-width": this._inputWidth ? `${this._inputWidth}px` : ""
      },
      suggestionPopoverHeader: {
        "display": this._listWidth === 0 ? "none" : "inline-block",
        "width": this._listWidth ? `${this._listWidth}px` : ""
      },
      suggestionsPopover: {
        "min-width": this._inputWidth ? `${this._inputWidth}px` : "",
        "max-width": this._inputWidth && this._inputWidth / remSizeIxPx > 40 ? `${this._inputWidth}px` : "40rem"
      },
      innerInput: {
        "padding": ""
      }
    };
    return stylesObject;
  }
  get suggestionSeparators() {
    return "None";
  }
  get shouldDisplayOnlyValueStateMessage() {
    return this.hasValueStateMessage && !this.readonly && !this.open && this.focused;
  }
  get shouldDisplayDefaultValueStateMessage() {
    return !this.valueStateMessage.length && this.hasValueStateMessage;
  }
  get hasValueState() {
    return this.valueState !== ValueState_default.None;
  }
  get hasValueStateMessage() {
    return this.hasValueState && this.valueState !== ValueState_default.Positive && (!this._inputIconFocused || !!(this._isPhone && this.Suggestions));
  }
  get valueStateText() {
    return this.valueState !== ValueState_default.None ? this.valueStateTextMappings()[this.valueState] : void 0;
  }
  get suggestionsText() {
    return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS);
  }
  get availableSuggestionsCount() {
    if (this.showSuggestions && (this.value || this.Suggestions.isOpened())) {
      const nonGroupItems = this._selectableItems;
      switch (nonGroupItems.length) {
        case 0:
          return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_NO_HIT);
        case 1:
          return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_ONE_HIT);
        default:
          return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_MORE_HITS, nonGroupItems.length);
      }
    }
    return void 0;
  }
  get step() {
    return this.isTypeNumber ? "any" : void 0;
  }
  get _isPhone() {
    return isPhone();
  }
  get _isSuggestionsFocused() {
    return !this.focused && this.Suggestions && this.Suggestions.isOpened();
  }
  /**
   * Returns the placeholder value.
   * @protected
   */
  get _placeholder() {
    return this.placeholder;
  }
  /**
   * This method is relevant for sap_horizon theme only
   */
  get _valueStateInputIcon() {
    const iconPerValueState = {
      Negative: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929L8.58579 10L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L10 8.58579L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L11.4142 10L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L10 11.4142L7.70711 13.7071Z" fill="#EE3939"/>`,
      Critical: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.8619 0.49298C11.6823 0.187541 11.3544 0 11 0C10.6456 0 10.3177 0.187541 10.1381 0.49298L0.138066 17.493C-0.0438112 17.8022 -0.0461447 18.1851 0.13195 18.4965C0.310046 18.8079 0.641283 19 1 19H21C21.3587 19 21.69 18.8079 21.868 18.4965C22.0461 18.1851 22.0438 17.8022 21.8619 17.493L11.8619 0.49298ZM11 6C11.5523 6 12 6.44772 12 7V10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10V7C10 6.44772 10.4477 6 11 6ZM11 16C11.8284 16 12.5 15.3284 12.5 14.5C12.5 13.6716 11.8284 13 11 13C10.1716 13 9.5 13.6716 9.5 14.5C9.5 15.3284 10.1716 16 11 16Z" fill="#F58B00"/>`,
      Positive: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8 11.5858L6.70711 10.2929C6.31658 9.90237 5.68342 9.90237 5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289Z" fill="#36A41D"/>`,
      Information: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0H3ZM9 6.5C9.82843 6.5 10.5 5.82843 10.5 5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5C7.5 5.82843 8.17157 6.5 9 6.5ZM9 8.5C9.55228 8.5 10 8.94772 10 9.5V13.5C10 14.0523 9.55228 14.5 9 14.5C8.44771 14.5 8 14.0523 8 13.5V9.5C8 8.94772 8.44771 8.5 9 8.5Z" fill="#1B90FF"/>`
    };
    if (this.valueState !== ValueState_default.None) {
      return `
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none">
				${iconPerValueState[this.valueState]};
			</svg>
			`;
    }
    return "";
  }
  get _valueStatePopoverHorizontalAlign() {
    return this.effectiveDir !== "rtl" ? "Start" : "End";
  }
  /**
   * This method is relevant for sap_horizon theme only
   */
  get _valueStateMessageInputIcon() {
    const iconPerValueState = {
      Negative: "error",
      Critical: "alert",
      Positive: "sys-enter-2",
      Information: "information"
    };
    return this.valueState !== ValueState_default.None ? iconPerValueState[this.valueState] : "";
  }
  /**
   * Returns the caret position inside the native input
   * @protected
   */
  getCaretPosition() {
    return getCaretPosition(this.nativeInput);
  }
  /**
   * Sets the caret to a certain position inside the native input
   * @protected
   */
  setCaretPosition(pos) {
    setCaretPosition(this.nativeInput, pos);
  }
  /**
   * Removes the fractional part of floating-point number.
   * @param value the numeric value of Input of type "Number"
   */
  removeFractionalPart(value) {
    if (value.includes(".")) {
      return value.slice(0, value.indexOf("."));
    }
    if (value.includes(",")) {
      return value.slice(0, value.indexOf(","));
    }
    return value;
  }
  static onDefine() {
    return __async(this, null, function* () {
      const Suggestions = getFeature("InputSuggestions");
      [Input_1.i18nBundle] = yield Promise.all([
        getI18nBundle("@ui5/webcomponents"),
        Suggestions ? Suggestions.init() : Promise.resolve()
      ]);
    });
  }
};
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "disabled", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "highlight", void 0);
__decorate([
  property_default()
], Input.prototype, "placeholder", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "readonly", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "required", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "noTypeahead", void 0);
__decorate([
  property_default()
], Input.prototype, "type", void 0);
__decorate([
  property_default()
], Input.prototype, "value", void 0);
__decorate([
  property_default({ noAttribute: true })
], Input.prototype, "_innerValue", void 0);
__decorate([
  property_default()
], Input.prototype, "valueState", void 0);
__decorate([
  property_default()
], Input.prototype, "name", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "showSuggestions", void 0);
__decorate([
  property_default({ type: Number })
], Input.prototype, "maxlength", void 0);
__decorate([
  property_default()
], Input.prototype, "accessibleName", void 0);
__decorate([
  property_default()
], Input.prototype, "accessibleNameRef", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "showClearIcon", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "open", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "_effectiveShowClearIcon", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "focused", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "valueStateOpen", void 0);
__decorate([
  property_default({ type: Boolean })
], Input.prototype, "_isValueStateFocused", void 0);
__decorate([
  property_default({ type: Object })
], Input.prototype, "_inputAccInfo", void 0);
__decorate([
  property_default({ type: Object })
], Input.prototype, "_nativeInputAttributes", void 0);
__decorate([
  property_default({ type: Number })
], Input.prototype, "_inputWidth", void 0);
__decorate([
  property_default({ type: Number })
], Input.prototype, "_listWidth", void 0);
__decorate([
  property_default({ type: Boolean, noAttribute: true })
], Input.prototype, "_inputIconFocused", void 0);
__decorate([
  property_default({ noAttribute: true })
], Input.prototype, "_associatedLabelsTexts", void 0);
__decorate([
  property_default({ noAttribute: true })
], Input.prototype, "_accessibleLabelsRefTexts", void 0);
__decorate([
  slot_default({ type: HTMLElement, "default": true })
], Input.prototype, "suggestionItems", void 0);
__decorate([
  slot_default()
], Input.prototype, "icon", void 0);
__decorate([
  slot_default({
    type: HTMLElement,
    invalidateOnChildChange: true
  })
], Input.prototype, "valueStateMessage", void 0);
Input = Input_1 = __decorate([
  customElement_default({
    tag: "ui5-input",
    languageAware: true,
    formAssociated: true,
    renderer: LitRenderer_default,
    template: InputTemplate_lit_default,
    styles: [
      Input_css_default,
      ResponsivePopoverCommon_css_default,
      ValueStateMessage_css_default,
      Suggestions_css_default
    ],
    get dependencies() {
      const Suggestions = getFeature("InputSuggestions");
      return [Popover_default, ResponsivePopover_default, Icon_default].concat(Suggestions ? Suggestions.dependencies : []);
    }
  }),
  event_default("change"),
  event_default("input"),
  event_default("selection-change", {
    detail: {
      /**
      * @public
      */
      item: { type: HTMLElement }
    }
  }),
  event_default("suggestion-scroll", {
    detail: {
      /**
      * @public
      */
      scrollTop: { type: Number },
      /**
      * @public
      */
      scrollContainer: { type: HTMLElement }
    }
  }),
  event_default("open"),
  event_default("close")
], Input);
Input.define();
var Input_default = Input;

export {
  InputType_default,
  StartsWithPerTerm,
  StartsWith,
  Filters_exports,
  ValueStateMessage_css_default,
  Suggestions_css_default,
  Input_default
};
/*! Bundled license information:

@ui5/webcomponents-base/dist/sap/base/strings/toHex.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-base/dist/sap/base/security/encodeXML.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)
*/
//# sourceMappingURL=chunk-I4O6ASPS.js.map
