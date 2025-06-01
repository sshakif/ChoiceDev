import {
  debounce_default,
  getNormalizedTarget_default,
  isElementInView_default
} from "./chunk-VS25K46M.js";
import {
  getTabbableElements
} from "./chunk-GNDKGQ3S.js";
import {
  BusyIndicator_default
} from "./chunk-3W4QXVOX.js";
import {
  CheckBox_default
} from "./chunk-IZADXD4H.js";
import {
  Label_default
} from "./chunk-W4KLC5M5.js";
import {
  ItemNavigation_default,
  NavigationMode_default
} from "./chunk-KAQ4T4QR.js";
import {
  Button_default
} from "./chunk-THWQMO7Z.js";
import {
  getEventMark
} from "./chunk-MJMWB5QN.js";
import {
  BrowserScrollbar_css_default,
  getEffectiveScrollbarStyle_default,
  getFirstFocusableElement
} from "./chunk-B3EHYJGE.js";
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
  getEffectiveAriaLabelText
} from "./chunk-HWWW4G3G.js";
import {
  ARIA_LABEL_LIST_DELETABLE,
  ARIA_LABEL_LIST_ITEM_CHECKBOX,
  ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,
  ARIA_LABEL_LIST_MULTISELECTABLE,
  ARIA_LABEL_LIST_SELECTABLE,
  AVATAR_TOOLTIP,
  DELETE,
  FORM_SELECTABLE_REQUIRED2,
  GROUP_HEADER_TEXT,
  LIST_ITEM_NOT_SELECTED,
  LIST_ITEM_SELECTED,
  LOAD_MORE_TEXT,
  VALUE_STATE_ERROR,
  VALUE_STATE_INFORMATION,
  VALUE_STATE_SUCCESS,
  VALUE_STATE_WARNING
} from "./chunk-U6TJ47RH.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  isDelete,
  isDesktop,
  isDown,
  isEnter,
  isF2,
  isLeft,
  isRight,
  isSpace,
  isTabNext,
  isTabPrevious,
  isUp
} from "./chunk-ECUZOJV2.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  LitRenderer_default,
  classMap,
  effectiveHtml,
  effectiveSvg,
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
  event_default
} from "./chunk-XYCO3572.js";
import {
  UI5Element_default,
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
  __superGet
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-icons/dist/v4/edit.js
var name = "edit";
var pathData = "M475 104q5 7 5 12 0 6-5 11L150 453q-4 4-8 4L32 480l22-110q0-5 4-9L384 36q4-4 11-4t11 4zm-121 99l-46-45L84 381l46 46zm87-88l-46-44-64 64 45 45z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/edit.js
var name2 = "edit";
var pathData2 = "M505 94q7 7 7 18t-6 17L130 505q-7 7-18 7H26q-11 0-18.5-7.5T0 486v-86q1-10 6-16L382 7q7-7 18-7t18 7zm-55 18l-50-50-50 50 50 50zm-86 86l-50-50L62 400l50 50z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents/dist/types/Highlight.js
var Highlight;
(function(Highlight2) {
  Highlight2["None"] = "None";
  Highlight2["Positive"] = "Positive";
  Highlight2["Critical"] = "Critical";
  Highlight2["Negative"] = "Negative";
  Highlight2["Information"] = "Information";
})(Highlight || (Highlight = {}));
var Highlight_default = Highlight;

// node_modules/@ui5/webcomponents/dist/types/ListItemType.js
var ListItemType;
(function(ListItemType2) {
  ListItemType2["Inactive"] = "Inactive";
  ListItemType2["Active"] = "Active";
  ListItemType2["Detail"] = "Detail";
  ListItemType2["Navigation"] = "Navigation";
})(ListItemType || (ListItemType = {}));
var ListItemType_default = ListItemType;

// node_modules/@ui5/webcomponents/dist/types/ListSelectionMode.js
var ListSelectionMode;
(function(ListSelectionMode2) {
  ListSelectionMode2["None"] = "None";
  ListSelectionMode2["Single"] = "Single";
  ListSelectionMode2["SingleStart"] = "SingleStart";
  ListSelectionMode2["SingleEnd"] = "SingleEnd";
  ListSelectionMode2["SingleAuto"] = "SingleAuto";
  ListSelectionMode2["Multiple"] = "Multiple";
  ListSelectionMode2["Delete"] = "Delete";
})(ListSelectionMode || (ListSelectionMode = {}));
var ListSelectionMode_default = ListSelectionMode;

// node_modules/@ui5/webcomponents/dist/generated/themes/ListItemBase.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/ListItemBase.css.ts", content: `:host{box-sizing:border-box;height:var(--_ui5-v2-0-1_list_item_base_height);background-color:var(--ui5-v2-0-1-listitem-background-color);border-bottom:.0625rem solid transparent}:host(:not([hidden])){display:block}:host([disabled]){opacity:var(--_ui5-v2-0-1-listitembase_disabled_opacity);pointer-events:none}:host([actionable]:not([disabled])){cursor:pointer}:host([has-border]){border-bottom:var(--ui5-v2-0-1-listitem-border-bottom)}:host([selected]){background-color:var(--sapList_SelectionBackgroundColor);border-bottom:var(--ui5-v2-0-1-listitem-selected-border-bottom)}:host([actionable]:not([active],[selected]):hover){background-color:var(--sapList_Hover_Background)}:host([actionable][selected]:not([active],[data-moving]):hover){background-color:var(--sapList_Hover_SelectionBackground)}:host([active][actionable]:not([data-moving])),:host([active][actionable][selected]:not([data-moving])){background-color:var(--sapList_Active_Background)}:host([desktop]:not([data-moving])) .ui5-li-root.ui5-li--focusable:focus:after,:host([desktop][focused]:not([data-moving])) .ui5-li-root.ui5-li--focusable:after,:host(:not([data-moving])) .ui5-li-root.ui5-li--focusable:focus-visible:after,:host([desktop]:not([data-moving])) .ui5-li-root .ui5-li-content:focus:after,:host([desktop][focused]:not([data-moving])) .ui5-li-root .ui5-li-content:after,:host(:not([data-moving])) .ui5-li-root .ui5-li-content:focus-visible:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:.125rem;pointer-events:none}.ui5-li-root{position:relative;display:flex;align-items:center;width:100%;height:100%;padding:var(--_ui5-v2-0-1_list_item_base_padding);box-sizing:border-box;background-color:inherit}.ui5-li-root.ui5-li--focusable{outline:none}.ui5-li-content{display:flex;align-items:center;flex:auto;overflow:hidden;max-width:100%;font-family:"72override",var(--sapFontFamily);color:var(--sapList_TextColor)}.ui5-li-content .ui5-li-title{color:var(--sapList_TextColor);font-size:var(--_ui5-v2-0-1_list_item_title_size)}.ui5-li-text-wrapper{display:flex;flex-direction:row;justify-content:space-between;flex:auto;min-width:1px;line-height:normal}
` };
var ListItemBase_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/generated/themes/DraggableElement.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = { packageName: "@ui5/webcomponents", fileName: "themes/DraggableElement.css.ts", content: `[draggable=true]{cursor:grab!important}[draggable=true][data-moving]{cursor:grabbing!important;opacity:var(--sapContent_DisabledOpacity)}
` };
var DraggableElement_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/ListItemBase.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListItemBase = class ListItemBase2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.selected = false;
    this.movable = false;
    this.hasBorder = false;
    this.disabled = false;
    this.focused = false;
    this.actionable = false;
  }
  onEnterDOM() {
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
  }
  onBeforeRendering() {
    this.actionable = true;
  }
  _onfocusin(e) {
    this.fireEvent("_request-tabindex-change", e);
    if (e.target !== this.getFocusDomRef()) {
      return;
    }
    this.fireEvent("_focused", e);
  }
  _onkeydown(e) {
    if (isTabNext(e)) {
      return this._handleTabNext(e);
    }
    if (isTabPrevious(e)) {
      return this._handleTabPrevious(e);
    }
    if (getEventMark(e) === "button") {
      return;
    }
    if (isSpace(e)) {
      e.preventDefault();
    }
    if (isEnter(e)) {
      this.fireItemPress(e);
    }
  }
  _onkeyup(e) {
    if (getEventMark(e) === "button") {
      return;
    }
    if (isSpace(e)) {
      this.fireItemPress(e);
    }
  }
  _onclick(e) {
    if (getEventMark(e) === "button") {
      return;
    }
    this.fireItemPress(e);
  }
  fireItemPress(e) {
    if (this.disabled || !this._pressable) {
      return;
    }
    if (isEnter(e)) {
      e.preventDefault();
    }
    this.fireEvent("_press", { item: this, selected: this.selected, key: e.key });
  }
  _handleTabNext(e) {
    if (this.shouldForwardTabAfter()) {
      if (!this.fireEvent("_forward-after", {}, true)) {
        e.preventDefault();
      }
    }
  }
  _handleTabPrevious(e) {
    const target = e.target;
    if (this.shouldForwardTabBefore(target)) {
      this.fireEvent("_forward-before");
    }
  }
  /**
   * Determines if th current list item either has no tabbable content or
   * [Tab] is performed onto the last tabbale content item.
   */
  shouldForwardTabAfter() {
    const aContent = getTabbableElements(this.getFocusDomRef());
    return aContent.length === 0 || aContent[aContent.length - 1] === getActiveElement_default();
  }
  /**
   * Determines if the current list item is target of [SHIFT+TAB].
   */
  shouldForwardTabBefore(target) {
    return this.getFocusDomRef() === target;
  }
  get classes() {
    return {
      main: {
        "ui5-li-root": true,
        "ui5-li--focusable": this._focusable
      }
    };
  }
  get _ariaDisabled() {
    return this.disabled ? true : void 0;
  }
  get _focusable() {
    return !this.disabled;
  }
  get _pressable() {
    return true;
  }
  get hasConfigurableMode() {
    return false;
  }
  get _effectiveTabIndex() {
    if (!this._focusable) {
      return -1;
    }
    if (this.selected) {
      return 0;
    }
    return this.forcedTabIndex;
  }
};
__decorate([
  property_default({ type: Boolean })
], ListItemBase.prototype, "selected", void 0);
__decorate([
  property_default({ type: Boolean })
], ListItemBase.prototype, "movable", void 0);
__decorate([
  property_default({ type: Boolean })
], ListItemBase.prototype, "hasBorder", void 0);
__decorate([
  property_default()
], ListItemBase.prototype, "forcedTabIndex", void 0);
__decorate([
  property_default({ type: Boolean })
], ListItemBase.prototype, "disabled", void 0);
__decorate([
  property_default({ type: Boolean })
], ListItemBase.prototype, "focused", void 0);
__decorate([
  property_default({ type: Boolean })
], ListItemBase.prototype, "actionable", void 0);
ListItemBase = __decorate([
  customElement_default({
    renderer: LitRenderer_default,
    styles: [ListItemBase_css_default, DraggableElement_css_default]
  }),
  event_default("_request-tabindex-change"),
  event_default("_press"),
  event_default("_focused"),
  event_default("_forward-after"),
  event_default("_forward-before")
], ListItemBase);
var ListItemBase_default = ListItemBase;

// node_modules/@ui5/webcomponents/dist/RadioButtonGroup.js
var RadioButtonGroup = class {
  static hasGroup(groupName) {
    return this.groups.has(groupName);
  }
  static getGroup(groupName) {
    return this.groups.get(groupName);
  }
  static getCheckedRadioFromGroup(groupName) {
    return this.checkedRadios.get(groupName);
  }
  static removeGroup(groupName) {
    this.checkedRadios.delete(groupName);
    return this.groups.delete(groupName);
  }
  static addToGroup(radioBtn, groupName) {
    if (this.hasGroup(groupName)) {
      this.enforceSingleSelection(radioBtn, groupName);
      if (this.getGroup(groupName)) {
        this.getGroup(groupName).push(radioBtn);
      }
    } else {
      this.createGroup(radioBtn, groupName);
    }
    this.updateTabOrder(groupName);
  }
  static removeFromGroup(radioBtn, groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    const checkedRadio = this.getCheckedRadioFromGroup(groupName);
    group.forEach((_radioBtn, idx, arr) => {
      if (radioBtn._id === _radioBtn._id) {
        return arr.splice(idx, 1);
      }
    });
    if (checkedRadio === radioBtn) {
      this.checkedRadios.set(groupName, null);
    }
    if (!group.length) {
      this.removeGroup(groupName);
    }
    this.updateTabOrder(groupName);
  }
  static createGroup(radioBtn, groupName) {
    if (radioBtn.checked) {
      this.checkedRadios.set(groupName, radioBtn);
    }
    this.groups.set(groupName, [radioBtn]);
  }
  static selectNextItem(item, groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    const groupLength = group.length, currentItemPosition = group.indexOf(item);
    if (groupLength <= 1) {
      return;
    }
    const nextItemToSelect = this._nextSelectable(currentItemPosition, group);
    if (!nextItemToSelect) {
      return;
    }
    this.updateSelectionInGroup(nextItemToSelect, groupName);
  }
  static updateFormValidity(groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    const hasRequired = group.some((r) => r.required);
    const hasChecked = group.some((r) => r.checked);
    group.forEach((r) => {
      r._groupChecked = hasChecked;
      r._groupRequired = hasRequired;
    });
  }
  static updateTabOrder(groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    const hasCheckedRadio = group.some((radioBtn) => radioBtn.checked);
    group.filter((radioBtn) => !radioBtn.disabled).forEach((radioBtn, idx) => {
      if (hasCheckedRadio) {
        radioBtn._tabIndex = radioBtn.checked ? "0" : "-1";
      } else {
        radioBtn._tabIndex = idx === 0 ? "0" : "-1";
      }
    });
  }
  static selectPreviousItem(item, groupName) {
    const group = this.getGroup(groupName);
    if (!group) {
      return;
    }
    const groupLength = group.length, currentItemPosition = group.indexOf(item);
    if (groupLength <= 1) {
      return;
    }
    const previousItemToSelect = this._previousSelectable(currentItemPosition, group);
    if (!previousItemToSelect) {
      return;
    }
    this.updateSelectionInGroup(previousItemToSelect, groupName);
  }
  static selectItem(item, groupName) {
    this.updateSelectionInGroup(item, groupName);
    this.updateTabOrder(groupName);
  }
  static updateSelectionInGroup(radioBtnToSelect, groupName) {
    const checkedRadio = this.getCheckedRadioFromGroup(groupName);
    if (checkedRadio) {
      this._deselectRadio(checkedRadio);
    }
    this._selectRadio(radioBtnToSelect);
    this.checkedRadios.set(groupName, radioBtnToSelect);
  }
  static _deselectRadio(radioBtn) {
    if (radioBtn) {
      radioBtn.checked = false;
    }
  }
  static _selectRadio(radioBtn) {
    if (radioBtn) {
      radioBtn.focus();
      radioBtn.checked = true;
      radioBtn._checked = true;
      radioBtn.fireEvent("change");
    }
  }
  static _nextSelectable(pos, group) {
    if (!group) {
      return null;
    }
    const groupLength = group.length;
    let nextRadioToSelect = null;
    if (pos === groupLength - 1) {
      if (group[0].disabled || group[0].readonly) {
        return this._nextSelectable(1, group);
      }
      nextRadioToSelect = group[0];
    } else if (group[pos + 1].disabled || group[pos + 1].readonly) {
      return this._nextSelectable(pos + 1, group);
    } else {
      nextRadioToSelect = group[pos + 1];
    }
    return nextRadioToSelect;
  }
  static _previousSelectable(pos, group) {
    const groupLength = group.length;
    let previousRadioToSelect = null;
    if (pos === 0) {
      if (group[groupLength - 1].disabled || group[groupLength - 1].readonly) {
        return this._previousSelectable(groupLength - 1, group);
      }
      previousRadioToSelect = group[groupLength - 1];
    } else if (group[pos - 1].disabled || group[pos - 1].readonly) {
      return this._previousSelectable(pos - 1, group);
    } else {
      previousRadioToSelect = group[pos - 1];
    }
    return previousRadioToSelect;
  }
  static enforceSingleSelection(radioBtn, groupName) {
    const checkedRadio = this.getCheckedRadioFromGroup(groupName);
    if (radioBtn.checked) {
      if (!checkedRadio) {
        this.checkedRadios.set(groupName, radioBtn);
      } else if (radioBtn !== checkedRadio) {
        this._deselectRadio(checkedRadio);
        this.checkedRadios.set(groupName, radioBtn);
      }
    } else if (radioBtn === checkedRadio) {
      this.checkedRadios.set(groupName, null);
    }
    this.updateTabOrder(groupName);
    this.updateFormValidity(groupName);
  }
  static get groups() {
    if (!this._groups) {
      this._groups = /* @__PURE__ */ new Map();
    }
    return this._groups;
  }
  static get checkedRadios() {
    if (!this._checkedRadios) {
      this._checkedRadios = /* @__PURE__ */ new Map();
    }
    return this._checkedRadios;
  }
};
var RadioButtonGroup_default = RadioButtonGroup;

// node_modules/@ui5/webcomponents/dist/generated/templates/RadioButtonTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-radio-root" role="radio" aria-checked="${ifDefined(this.checked)}" aria-disabled="${ifDefined(this.effectiveAriaDisabled)}" aria-describedby="${ifDefined(this.effectiveAriaDescribedBy)}" aria-label="${ifDefined(this.ariaLabelText)}" tabindex="${ifDefined(this.effectiveTabIndex)}" @click="${this._onclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @focusout="${this._onfocusout}"><div class='ui5-radio-inner ${classMap(this.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${blockSVG1.call(this, context, tags, suffix)}</svg><input type='radio' ?required="${this.required}" ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.effectiveAriaDisabled}" name="${ifDefined(this.name)}"  data-sap-no-tab-ref/></div>${this.text ? block1.call(this, context, tags, suffix) : void 0}${this.hasValueState ? block2.call(this, context, tags, suffix) : void 0}</div>`;
}
function block1(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-label", tags, suffix)} id="${ifDefined(this._id)}-label" class="ui5-radio-label" for="${ifDefined(this._id)}" wrapping-type="${ifDefined(this.wrappingType)}">${ifDefined(this.text)}</${scopeTag("ui5-label", tags, suffix)}>` : effectiveHtml`<ui5-label id="${ifDefined(this._id)}-label" class="ui5-radio-label" for="${ifDefined(this._id)}" wrapping-type="${ifDefined(this.wrappingType)}">${ifDefined(this.text)}</ui5-label>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<span id="${ifDefined(this._id)}-descr" class="ui5-hidden-text">${ifDefined(this.valueStateText)}</span>`;
}
function blockSVG1(context, tags, suffix) {
  return effectiveSvg`<circle part="outer-ring" class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle part="inner-ring" class="ui5-radio-svg-inner" cx="50%" cy="50%" />`;
}
var RadioButtonTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/RadioButton.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData3 = { packageName: "@ui5/webcomponents", fileName: "themes/RadioButton.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v2-0-1_radio_button_min_width);max-width:100%;text-overflow:ellipsis;overflow:hidden;color:var(--_ui5-v2-0-1_radio_button_color);border-radius:var(--_ui5-v2-0-1_radio_button_border_radius)}:host(:not([disabled])) .ui5-radio-root{cursor:pointer}:host([checked]){color:var(--_ui5-v2-0-1_radio_button_checked_fill)}:host([checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-0-1_radio_button_inner_ring_color)}:host([checked]) .ui5-radio-svg-outer{stroke:var(--_ui5-v2-0-1_radio_button_outer_ring_color)}:host([disabled]) .ui5-radio-root{color:var(--_ui5-v2-0-1_radio_button_color);opacity:var(--sapContent_DisabledOpacity)}:host([disabled][checked]) .ui5-radio-svg-outer{stroke:var(--_ui5-v2-0-1_radio_button_color)}:host(:not([disabled])[desktop]) .ui5-radio-root:focus:before,:host(:not([disabled])) .ui5-radio-root:focus-visible:before{content:"";display:var(--_ui5-v2-0-1_radio_button_focus_outline);position:absolute;inset:var(--_ui5-v2-0-1_radio_button_focus_dist);pointer-events:none;border:var(--_ui5-v2-0-1_radio_button_border_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-0-1_radio_button_border_radius)}:host(:not([value-state="Negative"]):not([value-state="Critical"]):not([value-state="Positive"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5-v2-0-1_radio_button_outer_ring_hover_color)}:host(:not([value-state="Negative"]):not([value-state="Critical"]):not([value-state="Positive"]):not([value-state="Information"])[checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5-v2-0-1_radio_button_outer_ring_checked_hover_color)}.ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer,:host([checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-0-1_radio_button_hover_fill)}:host([active][checked]:not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5-v2-0-1_radio_button_outer_ring_checked_hover_color)}:host([active]:not([checked]):not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5-v2-0-1_radio_button_outer_ring_active_color)}:host([text]) .ui5-radio-root{padding-inline-end:var(--_ui5-v2-0-1_radio_button_border_width)}:host([text][desktop]) .ui5-radio-root:focus:before,:host([text]) .ui5-radio-root:focus-visible:before{inset-inline-end:0px}:host([text]) .ui5-radio-inner{padding:var(--_ui5-v2-0-1_radio_button_outer_ring_padding_with_label)}:host([checked][readonly]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-0-1_radio_button_read_only_inner_ring_color)}:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer{fill:var(--sapField_ReadOnly_Background);stroke:var(--sapField_ReadOnly_BorderColor);stroke-dasharray:var(--_ui5-v2-0-1_radio_button_read_only_border_type);stroke-width:var(--_ui5-v2-0-1_radio_button_read_only_border_width)}:host([value-state="Negative"]) .ui5-radio-svg-outer,:host([value-state="Critical"]) .ui5-radio-svg-outer{stroke-width:var(--sapField_InvalidBorderWidth)}:host([value-state="Information"]) .ui5-radio-svg-outer{stroke-width:var(--_ui5-v2-0-1_radio_button_information_border_width)}:host([value-state="Negative"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-0-1_radio_button_checked_error_fill)}:host([value-state="Negative"]) .ui5-radio-svg-outer,:host([value-state="Negative"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_InvalidColor);fill:var(--sapField_InvalidBackground)}:host([value-state="Negative"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-0-1_radio_button_hover_fill_error)}:host([value-state="Critical"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-0-1_radio_button_checked_warning_fill)}:host([value-state="Critical"]) .ui5-radio-svg-outer,:host([value-state="Critical"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_WarningColor);fill:var(--sapField_WarningBackground)}:host([value-state="Critical"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-0-1_radio_button_hover_fill_warning)}:host([value-state="Positive"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-0-1_radio_button_checked_success_fill)}:host([value-state="Positive"]) .ui5-radio-svg-outer,:host([value-state="Positive"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_SuccessColor);fill:var(--sapField_SuccessBackground)}:host([value-state="Positive"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-0-1_radio_button_hover_fill_success)}:host([value-state="Information"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-0-1_radio_button_checked_information_fill)}:host([value-state="Information"]) .ui5-radio-svg-outer,:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_InformationColor);fill:var(--sapField_InformationBackground)}:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-0-1_radio_button_hover_fill_information)}:host([value-state="Negative"]) .ui5-radio-root,:host([value-state="Critical"]) .ui5-radio-root,:host([value-state="Information"]) .ui5-radio-root{stroke-dasharray:var(--_ui5-v2-0-1_radio_button_warning_error_border_dash)}.ui5-radio-root{height:auto;position:relative;display:inline-flex;flex-wrap:nowrap;outline:none;max-width:100%;box-sizing:border-box;border:var(--_ui5-v2-0-1_radio_button_border);border-radius:var(--_ui5-v2-0-1_radio_button_border_radius)}.ui5-radio-inner{display:flex;align-items:center;padding:var(--_ui5-v2-0-1_radio_button_outer_ring_padding);flex-shrink:0;height:var(--_ui5-v2-0-1_radio_button_inner_size);font-size:1rem;pointer-events:none;vertical-align:top}.ui5-radio-inner{outline:none}.ui5-radio-inner input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit;margin:0}[ui5-label].ui5-radio-label{display:flex;align-items:center;padding-inline-end:var(--_ui5-v2-0-1_radio_button_label_offset);padding-block:var(--_ui5-v2-0-1_radio_button_label_side_padding);vertical-align:top;max-width:100%;pointer-events:none;color:var(--_ui5-v2-0-1_radio_button_label_color);overflow-wrap:break-word}:host([wrapping-type="None"][text]) .ui5-radio-root{height:var(--_ui5-v2-0-1_radio_button_height)}:host([wrapping-type="None"][text]) [ui5-label].ui5-radio-label{text-overflow:ellipsis;overflow:hidden}.ui5-radio-svg{height:var(--_ui5-v2-0-1_radio_button_svg_size);width:var(--_ui5-v2-0-1_radio_button_svg_size);overflow:visible;pointer-events:none}.ui5-radio-svg-outer{fill:var(--_ui5-v2-0-1_radio_button_outer_ring_bg);stroke:currentColor;stroke-width:var(--_ui5-v2-0-1_radio_button_outer_ring_width)}.ui5-radio-svg-inner{fill:none;r:var(--_ui5-v2-0-1_radio_button_inner_ring_radius)}.ui5-radio-svg-outer,.ui5-radio-svg-inner{flex-shrink:0}:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer{fill:var(--sapList_Background)}
` };
var RadioButton_css_default = styleData3;

// node_modules/@ui5/webcomponents/dist/RadioButton.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RadioButton_1;
var isGlobalHandlerAttached = false;
var activeRadio;
var RadioButton = RadioButton_1 = class RadioButton2 extends UI5Element_default {
  get formValidityMessage() {
    return RadioButton_1.i18nBundle.getText(FORM_SELECTABLE_REQUIRED2);
  }
  get formValidity() {
    return { valueMissing: this._groupRequired && !this._groupChecked };
  }
  formElementAnchor() {
    return __async(this, null, function* () {
      return this.getFocusDomRefAsync();
    });
  }
  get formFormattedValue() {
    return this.checked ? this.value || "on" : null;
  }
  constructor() {
    super();
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.checked = false;
    this.valueState = "None";
    this.value = "";
    this.wrappingType = "Normal";
    this.active = false;
    this._groupChecked = false;
    this._groupRequired = false;
    this._name = "";
    this._checked = false;
    this._deactivate = () => {
      if (activeRadio) {
        activeRadio.active = false;
      }
    };
    if (!isGlobalHandlerAttached) {
      document.addEventListener("mouseup", this._deactivate);
      isGlobalHandlerAttached = true;
    }
  }
  static onDefine() {
    return __async(this, null, function* () {
      RadioButton_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  onAfterRendering() {
    this.syncGroup();
  }
  onEnterDOM() {
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
  }
  onExitDOM() {
    this.syncGroup(true);
  }
  syncGroup(forceRemove) {
    const oldGroup = this._name;
    const currentGroup = this.name;
    const oldChecked = this._checked;
    const currentChecked = this.checked;
    if (forceRemove) {
      RadioButtonGroup_default.removeFromGroup(this, oldGroup);
    }
    if (currentGroup !== oldGroup) {
      if (oldGroup) {
        RadioButtonGroup_default.removeFromGroup(this, oldGroup);
      }
      if (currentGroup) {
        RadioButtonGroup_default.addToGroup(this, currentGroup);
      }
    } else if (currentGroup) {
      RadioButtonGroup_default.enforceSingleSelection(this, currentGroup);
    }
    if (this.name && currentChecked !== oldChecked) {
      RadioButtonGroup_default.updateTabOrder(this.name);
    }
    this._name = this.name || "";
    this._checked = this.checked;
  }
  _onclick() {
    return this.toggle();
  }
  _handleDown(e) {
    const currentGroup = this.name;
    if (!currentGroup) {
      return;
    }
    e.preventDefault();
    RadioButtonGroup_default.selectNextItem(this, currentGroup);
  }
  _handleUp(e) {
    const currentGroup = this.name;
    if (!currentGroup) {
      return;
    }
    e.preventDefault();
    RadioButtonGroup_default.selectPreviousItem(this, currentGroup);
  }
  _onkeydown(e) {
    if (isSpace(e)) {
      this.active = true;
      return e.preventDefault();
    }
    if (isEnter(e)) {
      this.active = true;
      return this.toggle();
    }
    const isRTL = this.effectiveDir === "rtl";
    if (isDown(e) || !isRTL && isRight(e) || isRTL && isLeft(e)) {
      this._handleDown(e);
    }
    if (isUp(e) || !isRTL && isLeft(e) || isRTL && isRight(e)) {
      this._handleUp(e);
    }
  }
  _onkeyup(e) {
    if (isSpace(e)) {
      this.toggle();
    }
    this.active = false;
  }
  _onmousedown() {
    this.active = true;
    activeRadio = this;
  }
  _onmouseup() {
    this.active = false;
  }
  _onfocusout() {
    this.active = false;
  }
  toggle() {
    if (!this.canToggle()) {
      return this;
    }
    if (!this.name) {
      this.checked = !this.checked;
      this.fireEvent("change");
      return this;
    }
    RadioButtonGroup_default.selectItem(this, this.name);
    return this;
  }
  canToggle() {
    return !(this.disabled || this.readonly || this.checked);
  }
  get classes() {
    return {
      inner: {
        "ui5-radio-inner--hoverable": !this.disabled && !this.readonly && isDesktop()
      }
    };
  }
  get effectiveAriaDisabled() {
    return this.disabled ? "true" : null;
  }
  get ariaLabelText() {
    return [getEffectiveAriaLabelText(this), this.text].filter(Boolean).join(" ");
  }
  get effectiveAriaDescribedBy() {
    return this.hasValueState ? `${this._id}-descr` : void 0;
  }
  get hasValueState() {
    return this.valueState !== ValueState_default.None;
  }
  get valueStateText() {
    switch (this.valueState) {
      case ValueState_default.Negative:
        return RadioButton_1.i18nBundle.getText(VALUE_STATE_ERROR);
      case ValueState_default.Critical:
        return RadioButton_1.i18nBundle.getText(VALUE_STATE_WARNING);
      case ValueState_default.Positive:
        return RadioButton_1.i18nBundle.getText(VALUE_STATE_SUCCESS);
      case ValueState_default.Information:
        return RadioButton_1.i18nBundle.getText(VALUE_STATE_INFORMATION);
      default:
        return "";
    }
  }
  get effectiveTabIndex() {
    const tabindex = this.getAttribute("tabindex");
    if (this.disabled) {
      return "-1";
    }
    if (this.name) {
      return this._tabIndex;
    }
    return tabindex || "0";
  }
};
__decorate2([
  property_default({ type: Boolean })
], RadioButton.prototype, "disabled", void 0);
__decorate2([
  property_default({ type: Boolean })
], RadioButton.prototype, "readonly", void 0);
__decorate2([
  property_default({ type: Boolean })
], RadioButton.prototype, "required", void 0);
__decorate2([
  property_default({ type: Boolean })
], RadioButton.prototype, "checked", void 0);
__decorate2([
  property_default()
], RadioButton.prototype, "text", void 0);
__decorate2([
  property_default()
], RadioButton.prototype, "valueState", void 0);
__decorate2([
  property_default()
], RadioButton.prototype, "name", void 0);
__decorate2([
  property_default()
], RadioButton.prototype, "value", void 0);
__decorate2([
  property_default()
], RadioButton.prototype, "wrappingType", void 0);
__decorate2([
  property_default()
], RadioButton.prototype, "accessibleName", void 0);
__decorate2([
  property_default()
], RadioButton.prototype, "accessibleNameRef", void 0);
__decorate2([
  property_default()
], RadioButton.prototype, "_tabIndex", void 0);
__decorate2([
  property_default({ type: Boolean })
], RadioButton.prototype, "active", void 0);
__decorate2([
  property_default({ type: Boolean, noAttribute: true })
], RadioButton.prototype, "_groupChecked", void 0);
__decorate2([
  property_default({ type: Boolean, noAttribute: true })
], RadioButton.prototype, "_groupRequired", void 0);
RadioButton = RadioButton_1 = __decorate2([
  customElement_default({
    tag: "ui5-radio-button",
    languageAware: true,
    formAssociated: true,
    renderer: LitRenderer_default,
    template: RadioButtonTemplate_lit_default,
    styles: RadioButton_css_default,
    dependencies: [Label_default]
  }),
  event_default("change")
], RadioButton);
RadioButton.define();
var RadioButton_default = RadioButton;

// node_modules/@ui5/webcomponents/dist/generated/themes/ListItem.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData4 = { packageName: "@ui5/webcomponents", fileName: "themes/ListItem.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host([navigated]) .ui5-li-root .ui5-li-navigated{width:.1875rem;position:absolute;right:0;top:0;bottom:0;background-color:var(--sapList_SelectionBorderColor)}:host([active][actionable]) .ui5-li-root .ui5-li-icon{color:var(--sapList_Active_TextColor)}:host([active][actionable]) .ui5-li-title,:host([active][actionable]) .ui5-li-desc,:host([active][actionable]) .ui5-li-additional-text{color:var(--sapList_Active_TextColor)}:host([additional-text-state="Critical"]) .ui5-li-additional-text{color:var(--sapCriticalTextColor)}:host([additional-text-state="Positive"]) .ui5-li-additional-text{color:var(--sapPositiveTextColor)}:host([additional-text-state="Negative"]) .ui5-li-additional-text{color:var(--sapNegativeTextColor)}:host([additional-text-state="Information"]) .ui5-li-additional-text{color:var(--sapInformativeTextColor)}:host([has-title][description]){height:5rem}:host([has-title][image]){height:5rem}:host([_has-image]){height:5rem}:host([image]) .ui5-li-content{height:3rem}::slotted(img[slot="image"]){width:var(--_ui5-v2-0-1_list_item_img_size);height:var(--_ui5-v2-0-1_list_item_img_size);border-radius:var(--ui5-v2-0-1-avatar-border-radius);object-fit:contain}:host([description]) .ui5-li-root{padding:1rem}:host([description]) .ui5-li-content{height:3rem}:host([has-title][description]) .ui5-li-title{padding-bottom:.375rem}.ui5-li-text-wrapper{flex-direction:column}:host([description]) .ui5-li-text-wrapper{height:100%;justify-content:space-between;padding:.125rem 0}.ui5-li-description-info-wrapper{display:flex;justify-content:space-between}.ui5-li-additional-text,:host(:not([wrapping-type="Normal"])) .ui5-li-title,.ui5-li-desc{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host([wrapping-type="Normal"]){height:auto}:host([wrapping-type="Normal"]) .ui5-li-content{margin:var(--_ui5-v2-0-1_list_item_content_vertical_offset) 0}.ui5-li-desc{color:var(--sapContent_LabelColor);font-size:var(--sapFontSize)}:host([description]) .ui5-li-additional-text{align-self:flex-end}.ui5-li-image{min-width:var(--_ui5-v2-0-1_list_item_img_size);min-height:var(--_ui5-v2-0-1_list_item_img_size);margin-top:var(--_ui5-v2-0-1_list_item_img_top_margin);margin-bottom:var(--_ui5-v2-0-1_list_item_img_bottom_margin);margin-inline-end:var(--_ui5-v2-0-1_list_item_img_hn_margin)}.ui5-li-icon{min-width:var(--_ui5-v2-0-1_list_item_icon_size);min-height:var(--_ui5-v2-0-1_list_item_icon_size);color:var(--sapContent_NonInteractiveIconColor);padding-inline-end:var(--_ui5-v2-0-1_list_item_icon_padding-inline-end)}.ui5-li-detailbtn,.ui5-li-deletebtn{display:flex;align-items:center;margin-left:var(--_ui5-v2-0-1_list_buttons_left_space)}.ui5-li-multisel-cb,.ui5-li-singlesel-radiobtn{flex-shrink:0}:host([description]) .ui5-li-singlesel-radiobtn{align-self:flex-start;margin-top:var(--_ui5-v2-0-1_list_item_selection_btn_margin_top)}:host([description]) .ui5-li-multisel-cb{align-self:flex-start;margin-top:var(--_ui5-v2-0-1_list_item_selection_btn_margin_top)}:host([_selection-mode="SingleStart"]) .ui5-li-root{padding-inline:0 1rem}:host([_selection-mode="Multiple"]) .ui5-li-root{padding-inline:0 1rem}:host([_selection-mode="SingleEnd"]) .ui5-li-root{padding-inline:1rem 0}:host [ui5-checkbox].ui5-li-singlesel-radiobtn{margin-right:var(--_ui5-v2-0-1_list_item_cb_margin_right)}.ui5-li-highlight{position:absolute;width:.375rem;bottom:0;left:0;top:0;border-inline-end:.0625rem solid var(--ui5-v2-0-1-listitem-background-color);box-sizing:border-box}:host([highlight="Negative"]) .ui5-li-highlight{background:var(--sapNegativeTextColor)}:host([highlight="Critical"]) .ui5-li-highlight{background:var(--sapCriticalTextColor)}:host([highlight="Positive"]) .ui5-li-highlight{background:var(--sapPositiveTextColor)}:host([highlight="Information"]) .ui5-li-highlight{background:var(--sapInformativeTextColor)}
` };
var ListItem_css_default = styleData4;

// node_modules/@ui5/webcomponents/dist/generated/themes/ListItemAdditionalText.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData5 = { packageName: "@ui5/webcomponents", fileName: "themes/ListItemAdditionalText.css.ts", content: `.ui5-li-additional-text{margin:0 .25rem;color:var(--sapNeutralTextColor);font-size:var(--sapFontSize);min-width:3.75rem;text-align:end;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
` };
var ListItemAdditionalText_css_default = styleData5;

// node_modules/@ui5/webcomponents/dist/ListItem.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListItem_1;
var ListItem = ListItem_1 = class ListItem2 extends ListItemBase_default {
  constructor() {
    super();
    this.type = "Active";
    this.accessibilityAttributes = {};
    this.navigated = false;
    this.active = false;
    this.highlight = "None";
    this.accessibleRole = "ListItem";
    this._selectionMode = "None";
    this.deactivateByKey = (e) => {
      if (isEnter(e)) {
        this.deactivate();
      }
    };
    this.deactivate = () => {
      if (this.active) {
        this.active = false;
      }
    };
    const handleTouchStartEvent = (e) => {
      this._onmousedown(e);
    };
    this._ontouchstart = {
      handleEvent: handleTouchStartEvent,
      passive: true
    };
  }
  onBeforeRendering() {
    super.onBeforeRendering();
    this.actionable = (this.type === ListItemType_default.Active || this.type === ListItemType_default.Navigation) && this._selectionMode !== ListSelectionMode_default.Delete;
  }
  onEnterDOM() {
    super.onEnterDOM();
    document.addEventListener("mouseup", this.deactivate);
    document.addEventListener("touchend", this.deactivate);
    document.addEventListener("keyup", this.deactivateByKey);
  }
  onExitDOM() {
    document.removeEventListener("mouseup", this.deactivate);
    document.removeEventListener("keyup", this.deactivateByKey);
    document.removeEventListener("touchend", this.deactivate);
  }
  _onkeydown(e) {
    return __async(this, null, function* () {
      __superGet(ListItem2.prototype, this, "_onkeydown").call(this, e);
      const itemActive = this.type === ListItemType_default.Active, itemNavigated = this.typeNavigation;
      if ((isSpace(e) || isEnter(e)) && (itemActive || itemNavigated)) {
        this.activate();
      }
      if (isF2(e)) {
        const activeElement = getActiveElement_default();
        const focusDomRef = this.getFocusDomRef();
        if (activeElement === focusDomRef) {
          const firstFocusable = yield getFirstFocusableElement(focusDomRef);
          firstFocusable?.focus();
        } else {
          focusDomRef.focus();
        }
      }
    });
  }
  _onkeyup(e) {
    super._onkeyup(e);
    if (isSpace(e) || isEnter(e)) {
      this.deactivate();
    }
    if (this.modeDelete && isDelete(e)) {
      this.onDelete();
    }
  }
  _onmousedown(e) {
    if (getEventMark(e) === "button") {
      return;
    }
    this.activate();
  }
  _onmouseup(e) {
    if (getEventMark(e) === "button") {
      return;
    }
    this.deactivate();
  }
  _ontouchend(e) {
    this._onmouseup(e);
  }
  _onfocusout() {
    this.deactivate();
  }
  _ondragstart(e) {
    if (!e.dataTransfer) {
      return;
    }
    if (e.target === this._listItem) {
      this.setAttribute("data-moving", "");
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
    }
  }
  _ondragend(e) {
    if (e.target === this._listItem) {
      this.removeAttribute("data-moving");
    }
  }
  /**
   * Called when selection components in Single (ui5-radio-button)
   * and Multi (ui5-checkbox) selection modes are used.
   */
  onMultiSelectionComponentPress(e) {
    if (this.isInactive) {
      return;
    }
    this.fireEvent("_selection-requested", { item: this, selected: e.target.checked, selectionComponentPressed: true });
  }
  onSingleSelectionComponentPress(e) {
    if (this.isInactive) {
      return;
    }
    this.fireEvent("_selection-requested", { item: this, selected: !e.target.checked, selectionComponentPressed: true });
  }
  activate() {
    if (this.type === ListItemType_default.Active || this.type === ListItemType_default.Navigation) {
      this.active = true;
    }
  }
  onDelete() {
    this.fireEvent("_selection-requested", { item: this, selectionComponentPressed: false });
  }
  onDetailClick() {
    this.fireEvent("detail-click", { item: this, selected: this.selected });
  }
  fireItemPress(e) {
    if (this.isInactive) {
      return;
    }
    super.fireItemPress(e);
  }
  get isInactive() {
    return this.type === ListItemType_default.Inactive || this.type === ListItemType_default.Detail;
  }
  get placeSelectionElementBefore() {
    return this._selectionMode === ListSelectionMode_default.Multiple || this._selectionMode === ListSelectionMode_default.SingleStart;
  }
  get placeSelectionElementAfter() {
    return !this.placeSelectionElementBefore && (this._selectionMode === ListSelectionMode_default.SingleEnd || this._selectionMode === ListSelectionMode_default.Delete);
  }
  get modeSingleSelect() {
    return [
      ListSelectionMode_default.SingleStart,
      ListSelectionMode_default.SingleEnd,
      ListSelectionMode_default.Single
    ].includes(this._selectionMode);
  }
  get modeMultiple() {
    return this._selectionMode === ListSelectionMode_default.Multiple;
  }
  get modeDelete() {
    return this._selectionMode === ListSelectionMode_default.Delete;
  }
  /**
   * Used in UploadCollectionItem
   */
  get renderDeleteButton() {
    return this.modeDelete;
  }
  /**
   * End
   */
  get typeDetail() {
    return this.type === ListItemType_default.Detail;
  }
  get typeNavigation() {
    return this.type === ListItemType_default.Navigation;
  }
  get typeActive() {
    return this.type === ListItemType_default.Active;
  }
  get _ariaSelected() {
    if (this.modeMultiple || this.modeSingleSelect) {
      return this.selected;
    }
    return void 0;
  }
  get listItemAccessibleRole() {
    return this.accessibleRole.toLowerCase();
  }
  get ariaSelectedText() {
    let ariaSelectedText;
    if (this._ariaSelected !== void 0) {
      ariaSelectedText = this._ariaSelected ? ListItem_1.i18nBundle.getText(LIST_ITEM_SELECTED) : ListItem_1.i18nBundle.getText(LIST_ITEM_NOT_SELECTED);
    }
    return ariaSelectedText;
  }
  get deleteText() {
    return ListItem_1.i18nBundle.getText(DELETE);
  }
  get hasDeleteButtonSlot() {
    return !!this.deleteButton.length;
  }
  get _accessibleNameRef() {
    if (this.accessibleName) {
      return `${this._id}-invisibleText`;
    }
    return `${this._id}-content ${this._id}-invisibleText`;
  }
  get _accInfo() {
    return {
      role: this.listItemAccessibleRole,
      ariaExpanded: void 0,
      ariaLevel: void 0,
      ariaLabel: ListItem_1.i18nBundle.getText(ARIA_LABEL_LIST_ITEM_CHECKBOX),
      ariaLabelRadioButton: ListItem_1.i18nBundle.getText(ARIA_LABEL_LIST_ITEM_RADIO_BUTTON),
      ariaSelectedText: this.ariaSelectedText,
      ariaHaspopup: this.accessibilityAttributes.hasPopup,
      setsize: this.accessibilityAttributes.ariaSetsize,
      posinset: this.accessibilityAttributes.ariaPosinset,
      tooltip: this.tooltip
    };
  }
  get _hasHighlightColor() {
    return this.highlight !== Highlight_default.None;
  }
  get hasConfigurableMode() {
    return true;
  }
  get _listItem() {
    return this.shadowRoot.querySelector("li");
  }
  static onDefine() {
    return __async(this, null, function* () {
      ListItem_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate3([
  property_default()
], ListItem.prototype, "type", void 0);
__decorate3([
  property_default({ type: Object })
], ListItem.prototype, "accessibilityAttributes", void 0);
__decorate3([
  property_default({ type: Boolean })
], ListItem.prototype, "navigated", void 0);
__decorate3([
  property_default()
], ListItem.prototype, "tooltip", void 0);
__decorate3([
  property_default({ type: Boolean })
], ListItem.prototype, "active", void 0);
__decorate3([
  property_default()
], ListItem.prototype, "highlight", void 0);
__decorate3([
  property_default({ type: Boolean })
], ListItem.prototype, "selected", void 0);
__decorate3([
  property_default()
], ListItem.prototype, "accessibleRole", void 0);
__decorate3([
  property_default()
], ListItem.prototype, "_selectionMode", void 0);
__decorate3([
  slot_default()
], ListItem.prototype, "deleteButton", void 0);
ListItem = ListItem_1 = __decorate3([
  customElement_default({
    languageAware: true,
    styles: [
      ListItemBase_default.styles,
      ListItemAdditionalText_css_default,
      ListItem_css_default
    ],
    dependencies: [
      Button_default,
      RadioButton_default,
      CheckBox_default
    ]
  }),
  event_default("detail-click"),
  event_default("_focused"),
  event_default("_selection-requested")
], ListItem);
var ListItem_default = ListItem;

// node_modules/@ui5/webcomponents/dist/generated/templates/AvatarTemplate.lit.js
function block02(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-avatar-root" tabindex="${ifDefined(this.tabindex)}" data-sap-focus-ref @keyup=${this._onkeyup} @keydown=${this._onkeydown} @click=${this._onclick} role="${ifDefined(this._role)}" aria-haspopup="${ifDefined(this._ariaHasPopup)}" aria-label="${ifDefined(this.accessibleNameText)}" fallback-icon="${ifDefined(this.fallbackIcon)}">${this.hasImage ? block12.call(this, context, tags, suffix) : block22.call(this, context, tags, suffix)}<slot name="badge"></slot></div>`;
}
function block12(context, tags, suffix) {
  return effectiveHtml`<slot></slot>`;
}
function block22(context, tags, suffix) {
  return effectiveHtml`${this.icon ? block3.call(this, context, tags, suffix) : void 0}${this.initials ? block4.call(this, context, tags, suffix) : void 0}`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} class="ui5-avatar-icon" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon class="ui5-avatar-icon" name="${ifDefined(this.icon)}"></ui5-icon>`;
}
function block4(context, tags, suffix) {
  return suffix ? effectiveHtml`<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${ifDefined(this.validInitials)}</span><${scopeTag("ui5-icon", tags, suffix)} class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${ifDefined(this.fallbackIcon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${ifDefined(this.validInitials)}</span><ui5-icon class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${ifDefined(this.fallbackIcon)}"></ui5-icon>`;
}
var AvatarTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/generated/themes/Avatar.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData6 = { packageName: "@ui5/webcomponents", fileName: "themes/Avatar.css.ts", content: `:host(:not([hidden])){display:inline-block;box-sizing:border-box;position:relative;font-family:"72override",var(--sapFontFamily)}:host(:not([hidden]).ui5_hovered){opacity:.7}:host([interactive]:not([disabled])){cursor:pointer}:host([interactive]:not([hidden]):active){background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([interactive]:not([hidden]):not([disabled]):not(:active):hover){box-shadow:var(--ui5-v2-0-1-avatar-hover-box-shadow-offset)}:host([interactive][desktop]:not([hidden])) .ui5-avatar-root:focus,:host([interactive]:not([hidden])) .ui5-avatar-root:focus-visible{outline:var(--_ui5-v2-0-1_avatar_outline);outline-offset:var(--_ui5-v2-0-1_avatar_focus_offset)}:host([disabled]){opacity:var(--sapContent_DisabledOpacity)}:host{height:3rem;width:3rem;border-radius:50%;border:var(--ui5-v2-0-1-avatar-initials-border);outline:none;color:var(--ui5-v2-0-1-avatar-initials-color)}.ui5-avatar-root{display:flex;align-items:center;justify-content:center;outline:none;height:100%;width:100%;border-radius:inherit}:host([_size="XS"]),:host([size="XS"]){height:2rem;width:2rem;min-height:2rem;min-width:2rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_XS)}:host(:not([size])),:host([_size="S"]),:host([size="S"]){min-height:3rem;min-width:3rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_S)}:host([_size="M"]),:host([size="M"]){min-height:4rem;min-width:4rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_M)}:host([_size="L"]),:host([size="L"]){min-height:5rem;min-width:5rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_L)}:host([_size="XL"]),:host([size="XL"]){min-height:7rem;min-width:7rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_XL)}:host .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_fontsize_S);width:var(--_ui5-v2-0-1_avatar_fontsize_S);color:inherit}:host([_size="XS"]) .ui5-avatar-icon,:host([size="XS"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_XS);width:var(--_ui5-v2-0-1_avatar_icon_XS)}:host([_size="S"]) .ui5-avatar-icon,:host([size="S"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_S);width:var(--_ui5-v2-0-1_avatar_icon_S)}:host([_size="M"]) .ui5-avatar-icon,:host([size="M"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_M);width:var(--_ui5-v2-0-1_avatar_icon_M)}:host([_size="L"]) .ui5-avatar-icon,:host([size="L"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_L);width:var(--_ui5-v2-0-1_avatar_icon_L)}:host([_size="XL"]) .ui5-avatar-icon,:host([size="XL"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_XL);width:var(--_ui5-v2-0-1_avatar_icon_XL)}::slotted(*){border-radius:50%;width:100%;height:100%;pointer-events:none}:host([shape="Square"]){border-radius:var(--ui5-v2-0-1-avatar-border-radius)}:host([shape="Square"]) ::slotted(*){border-radius:calc(var(--ui5-v2-0-1-avatar-border-radius) - var(--ui5-v2-0-1-avatar-border-radius-img-deduction))}:host(:not([color-scheme])),:host(:not([_has-image])),:host([_color-scheme="Accent6"]),:host([ui5-avatar][color-scheme="Accent6"]){background-color:var(--ui5-v2-0-1-avatar-accent6);color:var(--ui5-v2-0-1-avatar-accent6-color);border-color:var(--ui5-v2-0-1-avatar-accent6-border-color)}:host([_color-scheme="Accent1"]),:host([ui5-avatar][color-scheme="Accent1"]){background-color:var(--ui5-v2-0-1-avatar-accent1);color:var(--ui5-v2-0-1-avatar-accent1-color);border-color:var(--ui5-v2-0-1-avatar-accent1-border-color)}:host([_color-scheme="Accent2"]),:host([ui5-avatar][color-scheme="Accent2"]){background-color:var(--ui5-v2-0-1-avatar-accent2);color:var(--ui5-v2-0-1-avatar-accent2-color);border-color:var(--ui5-v2-0-1-avatar-accent2-border-color)}:host([_color-scheme="Accent3"]),:host([ui5-avatar][color-scheme="Accent3"]){background-color:var(--ui5-v2-0-1-avatar-accent3);color:var(--ui5-v2-0-1-avatar-accent3-color);border-color:var(--ui5-v2-0-1-avatar-accent3-border-color)}:host([_color-scheme="Accent4"]),:host([ui5-avatar][color-scheme="Accent4"]){background-color:var(--ui5-v2-0-1-avatar-accent4);color:var(--ui5-v2-0-1-avatar-accent4-color);border-color:var(--ui5-v2-0-1-avatar-accent4-border-color)}:host([_color-scheme="Accent5"]),:host([ui5-avatar][color-scheme="Accent5"]){background-color:var(--ui5-v2-0-1-avatar-accent5);color:var(--ui5-v2-0-1-avatar-accent5-color);border-color:var(--ui5-v2-0-1-avatar-accent5-border-color)}:host([_color-scheme="Accent7"]),:host([ui5-avatar][color-scheme="Accent7"]){background-color:var(--ui5-v2-0-1-avatar-accent7);color:var(--ui5-v2-0-1-avatar-accent7-color);border-color:var(--ui5-v2-0-1-avatar-accent7-border-color)}:host([_color-scheme="Accent8"]),:host([ui5-avatar][color-scheme="Accent8"]){background-color:var(--ui5-v2-0-1-avatar-accent8);color:var(--ui5-v2-0-1-avatar-accent8-color);border-color:var(--ui5-v2-0-1-avatar-accent8-border-color)}:host([_color-scheme="Accent9"]),:host([ui5-avatar][color-scheme="Accent9"]){background-color:var(--ui5-v2-0-1-avatar-accent9);color:var(--ui5-v2-0-1-avatar-accent9-color);border-color:var(--ui5-v2-0-1-avatar-accent9-border-color)}:host([_color-scheme="Accent10"]),:host([ui5-avatar][color-scheme="Accent10"]){background-color:var(--ui5-v2-0-1-avatar-accent10);color:var(--ui5-v2-0-1-avatar-accent10-color);border-color:var(--ui5-v2-0-1-avatar-accent10-border-color)}:host([_color-scheme="Placeholder"]),:host([ui5-avatar][color-scheme="Placeholder"]){background-color:var(--ui5-v2-0-1-avatar-placeholder);color:var(--ui5-v2-0-1-avatar-placeholder-color);border-color:var(--ui5-v2-0-1-avatar-placeholder-border-color)}:host([_has-image]){color:var(--ui5-v2-0-1-avatar-accent10-color);background-color:transparent;vertical-align:middle}.ui5-avatar-initials{color:inherit}.ui5-avatar-icon~.ui5-avatar-initials,.ui5-avatar-icon~.ui5-avatar-icon-fallback{display:none}.ui5-avatar-fallback-icon-hidden{display:none}.ui5-avatar-initials-hidden{position:absolute;visibility:hidden;z-index:0;pointer-events:none}::slotted([slot="badge"]){position:absolute;bottom:0;right:0;width:1.125rem;height:1.125rem;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapBackgroundColor);--_ui5-v2-0-1-tag-height: 1.125rem;--_ui5-v2-0-1-tag-border-radius: 50%}:host([_size="L"]) ::slotted([slot="badge"]),:host([size="L"]) ::slotted([slot="badge"]){width:1.25rem;height:1.25rem;--_ui5-v2-0-1-tag-height: 1.25rem;--_ui5-v2-0-1-tag-icon-width: .875rem}:host([_size="XL"]) ::slotted([slot="badge"]),:host([size="XL"]) ::slotted([slot="badge"]){width:1.75rem;height:1.75rem;--_ui5-v2-0-1-tag-height: 1.75rem;--_ui5-v2-0-1-tag-icon-width: 1rem}:host([shape="Square"]) ::slotted([slot="badge"]){bottom:-.125rem;right:-.125rem}:host([_size="L"][shape="Square"]) ::slotted([slot="badge"]),:host([size="L"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.1875rem;right:-.1875rem}:host([_size="XL"][shape="Square"]) ::slotted([slot="badge"]),:host([size="XL"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.25rem;right:-.25rem}
` };
var Avatar_css_default = styleData6;

// node_modules/@ui5/webcomponents-icons/dist/v4/employee.js
var name3 = "employee";
var pathData3 = "M448 512H64V384q0-26 10-49.5t27.5-41T142 266t50-10h64q-27 0-50-10t-40.5-27.5T138 178t-10-50q0-26 10-49.5t27.5-41T206 10t50-10q26 0 49.5 10t41 27.5 27.5 41 10 49.5q0 27-10 50t-27.5 40.5-41 27.5-49.5 10h64q26 0 49.5 10t41 27.5 27.5 41 10 49.5v128zM96 384v96h320v-96q0-40-28-68t-68-28H192q-40 0-68 28t-28 68zm160-160q40 0 68-28t28-68-28-68-68-28-68 28-28 68 28 68 68 28zm32 192v-32h96v32h-96z";
var ltr3 = false;
var collection3 = "SAP-icons-v4";
var packageName3 = "@ui5/webcomponents-icons";
registerIcon(name3, { pathData: pathData3, ltr: ltr3, collection: collection3, packageName: packageName3 });

// node_modules/@ui5/webcomponents-icons/dist/v5/employee.js
var name4 = "employee";
var pathData4 = "M342 255q48 23 77 67.5t29 99.5v32q0 11-7.5 18.5T422 480H90q-11 0-18.5-7.5T64 454v-32q0-55 29-99.5t77-67.5l-4-5q-19-17-28.5-40.5T128 160q0-27 10-50t27.5-40.5 41-27.5T256 32t49.5 10.5 41 28T374 111t10 49q0 27-11 52t-31 43zm-163-95q0 32 22.5 54.5T256 237t54.5-22.5T333 160t-22.5-54.5T256 83t-54.5 22.5T179 160zm51 181l-25-15q-13-7-13-19v-6q-34 17-55.5 49T115 422v7h115v-88zm167 81q0-40-21-72t-56-49v6q0 12-13 19l-26 15v88h116v-7zm-71-70q11 0 18.5 7.5T352 378t-7.5 18-18.5 7h-12q-11 0-18.5-7t-7.5-18 7.5-18.5T314 352h12z";
var ltr4 = false;
var collection4 = "SAP-icons-v5";
var packageName4 = "@ui5/webcomponents-icons";
registerIcon(name4, { pathData: pathData4, ltr: ltr4, collection: collection4, packageName: packageName4 });

// node_modules/@ui5/webcomponents/dist/Avatar.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Avatar_1;
var Avatar = Avatar_1 = class Avatar2 extends UI5Element_default {
  constructor() {
    super();
    this.disabled = false;
    this.interactive = false;
    this.fallbackIcon = "employee";
    this.shape = "Circle";
    this.size = "S";
    this.colorScheme = "Accent6";
    this._colorScheme = "Accent6";
    this.accessibilityAttributes = {};
    this._hasImage = false;
    this._handleResizeBound = this.handleResize.bind(this);
  }
  static onDefine() {
    return __async(this, null, function* () {
      Avatar_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  get tabindex() {
    return this.forcedTabIndex || (this._interactive ? "0" : "-1");
  }
  /**
   * Returns the effective avatar size.
   * @default "S"
   * @private
   */
  get effectiveSize() {
    return this.getAttribute("size");
  }
  /**
   * Returns the effective background color.
   * @default "Accent6"
   * @private
   */
  get еffectiveBackgroundColor() {
    return this.getAttribute("color-scheme") || this._colorScheme;
  }
  get _role() {
    return this._interactive ? "button" : "img";
  }
  get _ariaHasPopup() {
    return this._getAriaHasPopup();
  }
  get _interactive() {
    return this.interactive && !this.disabled;
  }
  get validInitials() {
    const validInitials = /^[a-zA-Zà-üÀ-Ü]{1,3}$/, areInitialsValid = this.initials && validInitials.test(this.initials);
    if (areInitialsValid) {
      return this.initials;
    }
    return null;
  }
  get accessibleNameText() {
    if (this.accessibleName) {
      return this.accessibleName;
    }
    return Avatar_1.i18nBundle.getText(AVATAR_TOOLTIP) || void 0;
  }
  get hasImage() {
    this._hasImage = !!this.image.length;
    return this._hasImage;
  }
  get initialsContainer() {
    return this.getDomRef().querySelector(".ui5-avatar-initials");
  }
  get fallBackIconDomRef() {
    return this.getDomRef().querySelector(".ui5-avatar-icon-fallback");
  }
  onBeforeRendering() {
    this._onclick = this._interactive ? this._onClickHandler.bind(this) : void 0;
  }
  onAfterRendering() {
    return __async(this, null, function* () {
      yield renderFinished();
      if (this.initials && !this.icon) {
        this._checkInitials();
      }
    });
  }
  onEnterDOM() {
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
    this.initialsContainer && ResizeHandler_default.register(this.initialsContainer, this._handleResizeBound);
  }
  onExitDOM() {
    this.initialsContainer && ResizeHandler_default.deregister(this.initialsContainer, this._handleResizeBound);
  }
  handleResize() {
    if (this.initials && !this.icon) {
      this._checkInitials();
    }
  }
  _checkInitials() {
    const avatar = this.getDomRef();
    const avatarInitials = avatar.querySelector(".ui5-avatar-initials");
    const validInitials = this.validInitials && avatarInitials && avatarInitials.scrollWidth <= avatar.scrollWidth;
    if (validInitials) {
      this.showInitials();
      return;
    }
    this.showFallbackIcon();
  }
  showFallbackIcon() {
    this.initialsContainer?.classList.add("ui5-avatar-initials-hidden");
    this.fallBackIconDomRef?.classList.remove("ui5-avatar-fallback-icon-hidden");
  }
  showInitials() {
    this.initialsContainer?.classList.remove("ui5-avatar-initials-hidden");
    this.fallBackIconDomRef?.classList.add("ui5-avatar-fallback-icon-hidden");
  }
  _onClickHandler(e) {
    e.stopPropagation();
    this._fireClick();
  }
  _onkeydown(e) {
    if (!this._interactive) {
      return;
    }
    if (isEnter(e)) {
      this._fireClick();
    }
    if (isSpace(e)) {
      e.preventDefault();
    }
  }
  _onkeyup(e) {
    if (this._interactive && !e.shiftKey && isSpace(e)) {
      this._fireClick();
    }
  }
  _fireClick() {
    this.fireEvent("click");
  }
  _getAriaHasPopup() {
    const ariaHaspopup = this.accessibilityAttributes.hasPopup;
    if (!this._interactive || !ariaHaspopup) {
      return;
    }
    return ariaHaspopup;
  }
};
__decorate4([
  property_default({ type: Boolean })
], Avatar.prototype, "disabled", void 0);
__decorate4([
  property_default({ type: Boolean })
], Avatar.prototype, "interactive", void 0);
__decorate4([
  property_default()
], Avatar.prototype, "icon", void 0);
__decorate4([
  property_default()
], Avatar.prototype, "fallbackIcon", void 0);
__decorate4([
  property_default()
], Avatar.prototype, "initials", void 0);
__decorate4([
  property_default()
], Avatar.prototype, "shape", void 0);
__decorate4([
  property_default()
], Avatar.prototype, "size", void 0);
__decorate4([
  property_default()
], Avatar.prototype, "colorScheme", void 0);
__decorate4([
  property_default()
], Avatar.prototype, "_colorScheme", void 0);
__decorate4([
  property_default()
], Avatar.prototype, "accessibleName", void 0);
__decorate4([
  property_default({ type: Object })
], Avatar.prototype, "accessibilityAttributes", void 0);
__decorate4([
  property_default({ noAttribute: true })
], Avatar.prototype, "forcedTabIndex", void 0);
__decorate4([
  property_default({ type: Boolean })
], Avatar.prototype, "_hasImage", void 0);
__decorate4([
  slot_default({ type: HTMLElement, "default": true })
], Avatar.prototype, "image", void 0);
__decorate4([
  slot_default()
], Avatar.prototype, "badge", void 0);
Avatar = Avatar_1 = __decorate4([
  customElement_default({
    tag: "ui5-avatar",
    languageAware: true,
    renderer: LitRenderer_default,
    styles: Avatar_css_default,
    template: AvatarTemplate_lit_default,
    dependencies: [Icon_default]
  }),
  event_default("click")
], Avatar);
Avatar.define();
var Avatar_default = Avatar;

// node_modules/@ui5/webcomponents/dist/generated/templates/ListItemStandardTemplate.lit.js
function block03(context, tags, suffix) {
  return effectiveHtml`<li part="native-li" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" class="${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${ifDefined(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${ifDefined(this._accInfo.role)}" aria-expanded="${ifDefined(this._accInfo.ariaExpanded)}" title="${ifDefined(this._accInfo.tooltip)}" aria-level="${ifDefined(this._accInfo.ariaLevel)}" aria-haspopup="${ifDefined(this._accInfo.ariaHaspopup)}" aria-posinset="${ifDefined(this._accInfo.posinset)}" aria-setsize="${ifDefined(this._accInfo.setsize)}" aria-describedby="${ifDefined(this._id)}-invisibleText-describedby" aria-labelledby="${ifDefined(this._accessibleNameRef)}" aria-disabled="${ifDefined(this._ariaDisabled)}" aria-selected="${ifDefined(this._accInfo.ariaSelected)}" aria-checked="${ifDefined(this._accInfo.ariaChecked)}" aria-owns="${ifDefined(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore ? block13.call(this, context, tags, suffix) : void 0}${this._hasHighlightColor ? block7.call(this, context, tags, suffix) : void 0}<div part="content" id="${ifDefined(this._id)}-content" class="ui5-li-content">${this.hasImage ? block8.call(this, context, tags, suffix) : void 0}${this.displayIconBegin ? block9.call(this, context, tags, suffix) : void 0}<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${this.description ? block10.call(this, context, tags, suffix) : void 0}${!this.typeActive ? block122.call(this, context, tags, suffix) : void 0}</div>${!this.description ? block132.call(this, context, tags, suffix) : void 0}</div>${this.displayIconEnd ? block15.call(this, context, tags, suffix) : void 0}${this.typeDetail ? block16.call(this, context, tags, suffix) : void 0}${this.typeNavigation ? block17.call(this, context, tags, suffix) : void 0}${this.navigated ? block18.call(this, context, tags, suffix) : void 0}${this.placeSelectionElementAfter ? block19.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this._accInfo.listItemAriaLabel)}${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${ifDefined(this._accInfo.ariaSelectedText)}</span></li> `;
}
function block13(context, tags, suffix) {
  return effectiveHtml`${this.modeSingleSelect ? block23.call(this, context, tags, suffix) : void 0}${this.modeMultiple ? block32.call(this, context, tags, suffix) : void 0}${this.renderDeleteButton ? block42.call(this, context, tags, suffix) : void 0}`;
}
function block23(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : effectiveHtml`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`;
}
function block32(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`;
}
function block42(context, tags, suffix) {
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
  return effectiveHtml`<div class="ui5-li-image"><slot name="image"></slot></div>`;
}
function block9(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" mode="Decorative"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" mode="Decorative"></ui5-icon>`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${ifDefined(this.description)}</span>${this.additionalText ? block11.call(this, context, tags, suffix) : void 0}</div>`;
}
function block11(context, tags, suffix) {
  return effectiveHtml`<span part="additional-text" class="ui5-li-additional-text">${ifDefined(this.additionalText)}</span>`;
}
function block122(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-hidden-text">${ifDefined(this.type)}</span>`;
}
function block132(context, tags, suffix) {
  return effectiveHtml`${this.additionalText ? block14.call(this, context, tags, suffix) : void 0}`;
}
function block14(context, tags, suffix) {
  return effectiveHtml`<span part="additional-text" class="ui5-li-additional-text">${ifDefined(this.additionalText)}</span>`;
}
function block15(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" mode="Decorative"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon part="icon" name="${ifDefined(this.icon)}" class="ui5-li-icon" mode="Decorative"></ui5-icon>`;
}
function block16(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-li-detailbtn"><${scopeTag("ui5-button", tags, suffix)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`;
}
function block17(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name ="slim-arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name ="slim-arrow-right"></ui5-icon>`;
}
function block18(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-navigated"></div>`;
}
function block19(context, tags, suffix) {
  return effectiveHtml`${this.modeSingleSelect ? block20.call(this, context, tags, suffix) : void 0}${this.modeMultiple ? block21.call(this, context, tags, suffix) : void 0}${this.renderDeleteButton ? block222.call(this, context, tags, suffix) : void 0}`;
}
function block20(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : effectiveHtml`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`;
}
function block21(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`;
}
function block222(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block232.call(this, context, tags, suffix) : block24.call(this, context, tags, suffix)}</div>`;
}
function block232(context, tags, suffix) {
  return effectiveHtml`<slot name="deleteButton"></slot>`;
}
function block24(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`;
}
var ListItemStandardTemplate_lit_default = block03;

// node_modules/@ui5/webcomponents/dist/ListItemStandard.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListItemStandard = class ListItemStandard2 extends ListItem_default {
  constructor() {
    super(...arguments);
    this.iconEnd = false;
    this.additionalTextState = "None";
    this.movable = false;
    this.wrappingType = "None";
    this.hasTitle = false;
    this._hasImage = false;
  }
  onBeforeRendering() {
    super.onBeforeRendering();
    this.hasTitle = !!this.textContent;
    this._hasImage = this.hasImage;
  }
  get displayIconBegin() {
    return !!(this.icon && !this.iconEnd);
  }
  get displayIconEnd() {
    return !!(this.icon && this.iconEnd);
  }
  get hasImage() {
    return !!this.image.length;
  }
};
__decorate5([
  property_default()
], ListItemStandard.prototype, "description", void 0);
__decorate5([
  property_default()
], ListItemStandard.prototype, "icon", void 0);
__decorate5([
  property_default({ type: Boolean })
], ListItemStandard.prototype, "iconEnd", void 0);
__decorate5([
  property_default()
], ListItemStandard.prototype, "additionalText", void 0);
__decorate5([
  property_default()
], ListItemStandard.prototype, "additionalTextState", void 0);
__decorate5([
  property_default({ type: Boolean })
], ListItemStandard.prototype, "movable", void 0);
__decorate5([
  property_default()
], ListItemStandard.prototype, "accessibleName", void 0);
__decorate5([
  property_default()
], ListItemStandard.prototype, "wrappingType", void 0);
__decorate5([
  property_default({ type: Boolean })
], ListItemStandard.prototype, "hasTitle", void 0);
__decorate5([
  property_default({ type: Boolean })
], ListItemStandard.prototype, "_hasImage", void 0);
__decorate5([
  slot_default()
], ListItemStandard.prototype, "image", void 0);
ListItemStandard = __decorate5([
  customElement_default({
    tag: "ui5-li",
    template: ListItemStandardTemplate_lit_default,
    dependencies: [
      ...ListItem_default.dependencies,
      Icon_default,
      Avatar_default
    ]
  })
], ListItemStandard);
ListItemStandard.define();
var ListItemStandard_default = ListItemStandard;

// node_modules/@ui5/webcomponents-base/dist/util/dragAndDrop/DragRegistry.js
var draggedElement = null;
var globalHandlersAttached = false;
var subscribers = /* @__PURE__ */ new Set();
var selfManagedDragAreas = /* @__PURE__ */ new Set();
var ondragstart = (e) => {
  if (!e.dataTransfer || !(e.target instanceof HTMLElement)) {
    return;
  }
  if (!selfManagedDragAreas.has(e.target)) {
    draggedElement = e.target;
  }
};
var ondragend = () => {
  draggedElement = null;
};
var ondrop = () => {
  draggedElement = null;
};
var setDraggedElement = (element) => {
  draggedElement = element;
};
var getDraggedElement = () => {
  return draggedElement;
};
var attachGlobalHandlers = () => {
  if (globalHandlersAttached) {
    return;
  }
  document.body.addEventListener("dragstart", ondragstart);
  document.body.addEventListener("dragend", ondragend);
  document.body.addEventListener("drop", ondrop);
};
var detachGlobalHandlers = () => {
  document.body.removeEventListener("dragstart", ondragstart);
  document.body.removeEventListener("dragend", ondragend);
  document.body.removeEventListener("drop", ondrop);
  globalHandlersAttached = false;
};
var subscribe = (subscriber) => {
  subscribers.add(subscriber);
  if (!globalHandlersAttached) {
    attachGlobalHandlers();
  }
};
var unsubscribe = (subscriber) => {
  subscribers.delete(subscriber);
  if (subscribers.size === 0 && globalHandlersAttached) {
    detachGlobalHandlers();
  }
};
var addSelfManagedArea = (area) => {
  selfManagedDragAreas.add(area);
  return setDraggedElement;
};
var removeSelfManagedArea = (area) => {
  selfManagedDragAreas.delete(area);
};
var DragRegistry = {
  subscribe,
  unsubscribe,
  addSelfManagedArea,
  removeSelfManagedArea,
  getDraggedElement
};
var DragRegistry_default = DragRegistry;

// node_modules/@ui5/webcomponents-base/dist/types/MovePlacement.js
var MovePlacement;
(function(MovePlacement2) {
  MovePlacement2["On"] = "On";
  MovePlacement2["Before"] = "Before";
  MovePlacement2["After"] = "After";
})(MovePlacement || (MovePlacement = {}));
var MovePlacement_default = MovePlacement;

// node_modules/@ui5/webcomponents-base/dist/types/Orientation.js
var Orientation;
(function(Orientation2) {
  Orientation2["Vertical"] = "Vertical";
  Orientation2["Horizontal"] = "Horizontal";
})(Orientation || (Orientation = {}));
var Orientation_default = Orientation;

// node_modules/@ui5/webcomponents-base/dist/util/dragAndDrop/findClosestPosition.js
var closestPlacement = (point, beforePoint, centerPoint, afterPoint) => {
  const distToBeforePoint = Math.abs(point - beforePoint);
  const distToCenterPoint = Math.abs(point - centerPoint);
  const distToAfterPoint = Math.abs(point - afterPoint);
  const closestPoint = Math.min(distToBeforePoint, distToCenterPoint, distToAfterPoint);
  let placements = [];
  switch (closestPoint) {
    case distToBeforePoint:
      placements = [MovePlacement_default.Before];
      break;
    case distToCenterPoint:
      placements = [MovePlacement_default.On, distToBeforePoint < distToAfterPoint ? MovePlacement_default.Before : MovePlacement_default.After];
      break;
    case distToAfterPoint:
      placements = [MovePlacement_default.After];
      break;
  }
  return placements;
};
var findClosestPosition = (elements, point, layoutOrientation) => {
  let shortestDist = Number.POSITIVE_INFINITY;
  let closestElement = null;
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    const { left: left2, width: width2, top: top2, height: height2 } = el.getBoundingClientRect();
    let elemCenter;
    if (layoutOrientation === Orientation_default.Vertical) {
      elemCenter = top2 + height2 / 2;
    } else {
      elemCenter = left2 + width2 / 2;
    }
    const distanceToCenter = Math.abs(point - elemCenter);
    if (distanceToCenter < shortestDist) {
      shortestDist = distanceToCenter;
      closestElement = el;
    }
  }
  if (!closestElement) {
    return null;
  }
  const { width, height, left, right, top, bottom } = closestElement.getBoundingClientRect();
  let placements;
  if (layoutOrientation === Orientation_default.Vertical) {
    placements = closestPlacement(point, top, top + height / 2, bottom);
  } else {
    placements = closestPlacement(point, left, left + width / 2, right);
  }
  return {
    element: closestElement,
    placements
  };
};
var findClosestPosition_default = findClosestPosition;

// node_modules/@ui5/webcomponents/dist/types/ListGrowingMode.js
var ListGrowingMode;
(function(ListGrowingMode2) {
  ListGrowingMode2["Button"] = "Button";
  ListGrowingMode2["Scroll"] = "Scroll";
  ListGrowingMode2["None"] = "None";
})(ListGrowingMode || (ListGrowingMode = {}));
var ListGrowingMode_default = ListGrowingMode;

// node_modules/@ui5/webcomponents/dist/generated/templates/DropIndicatorTemplate.lit.js
function block04(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.root)}"></div>`;
}
var DropIndicatorTemplate_lit_default = block04;

// node_modules/@ui5/webcomponents/dist/generated/themes/DropIndicator.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData7 = { packageName: "@ui5/webcomponents", fileName: "themes/DropIndicator.css.ts", content: `:host{position:absolute;pointer-events:none;z-index:99}:host([orientation="Vertical"]) .ui5-di-needle{width:.125rem;height:100%;inset-block:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Vertical"]){margin-left:-.0625rem}:host([orientation="Horizontal"]) .ui5-di-needle{height:.125rem;width:100%;inset-inline:0;background:var(--sapContent_DragAndDropActiveColor)}:host([orientation="Horizontal"]){margin-top:-.0625rem}:host([orientation="Horizontal"][placement="Before"][first]){margin-top:.3125rem}:host([orientation="Horizontal"][placement="After"][last]){margin-top:-.3125rem}:host([orientation="Vertical"]) .ui5-di-needle:before{left:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host([orientation="Horizontal"]) .ui5-di-needle:before{top:-.1875rem;content:"";position:absolute;width:.25rem;height:.25rem;border-radius:.25rem;border:.125rem solid var(--sapContent_DragAndDropActiveColor);background-color:#fff;pointer-events:none}:host .ui5-di-rect{border:.125rem solid var(--sapContent_DragAndDropActiveColor);position:absolute;inset:0}:host .ui5-di-rect:before{content:" ";position:absolute;inset:0;background:var(--sapContent_DragAndDropActiveColor);opacity:.05}
` };
var DropIndicator_css_default = styleData7;

// node_modules/@ui5/webcomponents/dist/DropIndicator.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DropIndicator = class DropIndicator2 extends UI5Element_default {
  get _positionProperty() {
    if (this.orientation === Orientation_default.Vertical) {
      return "left";
    }
    return "top";
  }
  constructor() {
    super();
    this.targetReference = null;
    this.ownerReference = null;
    this.placement = "Before";
    this.orientation = "Vertical";
  }
  onAfterRendering() {
    if (!this.targetReference || !this.ownerReference) {
      Object.assign(this.style, {
        display: "none"
      });
      return;
    }
    const { left, width, right, top, bottom, height } = this.targetReference.getBoundingClientRect();
    const { top: containerTop, height: containerHeight } = this.ownerReference.getBoundingClientRect();
    const style = {
      display: "",
      [this._positionProperty]: "",
      width: "",
      height: ""
    };
    let position = 0;
    let isLast = false;
    let isFirst = false;
    if (this.orientation === Orientation_default.Vertical) {
      switch (this.placement) {
        case MovePlacement_default.Before:
          position = left;
          break;
        case MovePlacement_default.On:
          style.width = `${width}px`;
          position = left;
          break;
        case MovePlacement_default.After:
          position = right;
          break;
      }
      style.height = `${height}px`;
    }
    if (this.orientation === Orientation_default.Horizontal) {
      switch (this.placement) {
        case MovePlacement_default.Before:
          position = top;
          break;
        case MovePlacement_default.On:
          style.height = `${height}px`;
          position = top;
          break;
        case MovePlacement_default.After:
          position = bottom;
          break;
      }
      style.width = `${width}px`;
      position -= containerTop;
      if (position <= 0) {
        isFirst = true;
      }
      if (position >= containerHeight) {
        isLast = true;
      }
    }
    style[this._positionProperty] = `${position}px`;
    this.toggleAttribute("first", isFirst);
    this.toggleAttribute("last", isLast);
    Object.assign(this.style, style);
  }
  get classes() {
    return {
      root: {
        "ui5-di-rect": this.placement === MovePlacement_default.On,
        "ui5-di-needle": this.placement !== MovePlacement_default.On
      }
    };
  }
};
__decorate6([
  property_default({ type: Object })
], DropIndicator.prototype, "targetReference", void 0);
__decorate6([
  property_default({ type: Object })
], DropIndicator.prototype, "ownerReference", void 0);
__decorate6([
  property_default()
], DropIndicator.prototype, "placement", void 0);
__decorate6([
  property_default()
], DropIndicator.prototype, "orientation", void 0);
DropIndicator = __decorate6([
  customElement_default({
    tag: "ui5-drop-indicator",
    renderer: LitRenderer_default,
    styles: DropIndicator_css_default,
    template: DropIndicatorTemplate_lit_default,
    dependencies: []
  })
], DropIndicator);
DropIndicator.define();
var DropIndicator_default = DropIndicator;

// node_modules/@ui5/webcomponents/dist/types/ListSeparator.js
var ListSeparator;
(function(ListSeparator2) {
  ListSeparator2["All"] = "All";
  ListSeparator2["Inner"] = "Inner";
  ListSeparator2["None"] = "None";
})(ListSeparator || (ListSeparator = {}));
var ListSeparator_default = ListSeparator;

// node_modules/@ui5/webcomponents/dist/generated/templates/ListTemplate.lit.js
function block05(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="${classMap(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}" @ui5-_press=${ifDefined(this.onItemPress)} @ui5-close=${ifDefined(this.onItemClose)} @ui5-toggle=${ifDefined(this.onItemToggle)} @ui5-_request-tabindex-change=${ifDefined(this.onItemTabIndexChange)} @ui5-_focused=${ifDefined(this.onItemFocused)} @ui5-_forward-after=${ifDefined(this.onForwardAfter)} @ui5-_forward-before=${ifDefined(this.onForwardBefore)} @ui5-_selection-requested=${ifDefined(this.onSelectionRequested)} @ui5-_focus-requested=${ifDefined(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length ? block110.call(this, context, tags, suffix) : void 0}${this.shouldRenderH1 ? block25.call(this, context, tags, suffix) : void 0}${this.hasData ? block33.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-modeLabel" class="ui5-hidden-text">${ifDefined(this.ariaLabelModeText)}</span><ul id="${ifDefined(this._id)}-listUl" class="ui5-list-ul" role="${ifDefined(this.listAccessibleRole)}" aria-label="${ifDefined(this.ariaLabelTxt)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}"><slot></slot>${this.showNoDataText ? block43.call(this, context, tags, suffix) : void 0}</ul>${this.growsWithButton ? block52.call(this, context, tags, suffix) : void 0}${this.footerText ? block62.call(this, context, tags, suffix) : void 0}${this.hasData ? block72.call(this, context, tags, suffix) : void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.loading ? block82.call(this, context, tags, suffix) : void 0}<${scopeTag("ui5-drop-indicator", tags, suffix)} orientation="Horizontal" .ownerReference="${ifDefined(this)}"></${scopeTag("ui5-drop-indicator", tags, suffix)}></div> ` : effectiveHtml`<div class="${classMap(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}" @ui5-_press=${ifDefined(this.onItemPress)} @ui5-close=${ifDefined(this.onItemClose)} @ui5-toggle=${ifDefined(this.onItemToggle)} @ui5-_request-tabindex-change=${ifDefined(this.onItemTabIndexChange)} @ui5-_focused=${ifDefined(this.onItemFocused)} @ui5-_forward-after=${ifDefined(this.onForwardAfter)} @ui5-_forward-before=${ifDefined(this.onForwardBefore)} @ui5-_selection-requested=${ifDefined(this.onSelectionRequested)} @ui5-_focus-requested=${ifDefined(this.onFocusRequested)}><div class="ui5-list-scroll-container">${this.header.length ? block110.call(this, context, tags, suffix) : void 0}${this.shouldRenderH1 ? block25.call(this, context, tags, suffix) : void 0}${this.hasData ? block33.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-modeLabel" class="ui5-hidden-text">${ifDefined(this.ariaLabelModeText)}</span><ul id="${ifDefined(this._id)}-listUl" class="ui5-list-ul" role="${ifDefined(this.listAccessibleRole)}" aria-label="${ifDefined(this.ariaLabelTxt)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}"><slot></slot>${this.showNoDataText ? block43.call(this, context, tags, suffix) : void 0}</ul>${this.growsWithButton ? block52.call(this, context, tags, suffix) : void 0}${this.footerText ? block62.call(this, context, tags, suffix) : void 0}${this.hasData ? block72.call(this, context, tags, suffix) : void 0}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${this.loading ? block82.call(this, context, tags, suffix) : void 0}<ui5-drop-indicator orientation="Horizontal" .ownerReference="${ifDefined(this)}"></ui5-drop-indicator></div> `;
}
function block110(context, tags, suffix) {
  return effectiveHtml`<slot name="header" />`;
}
function block25(context, tags, suffix) {
  return effectiveHtml`<header id="${ifDefined(this.headerID)}" class="ui5-list-header">${ifDefined(this.headerText)}</header>`;
}
function block33(context, tags, suffix) {
  return effectiveHtml`<div id="${ifDefined(this._id)}-before" tabindex="0" role="none" class="ui5-list-focusarea"></div>`;
}
function block43(context, tags, suffix) {
  return effectiveHtml`<li id="${ifDefined(this._id)}-nodata" class="ui5-list-nodata"><div id="${ifDefined(this._id)}-nodata-text" class="ui5-list-nodata-text">${ifDefined(this.noDataText)}</div></li>`;
}
function block52(context, tags, suffix) {
  return effectiveHtml`<div growing-button><div tabindex="0" role="button" id="${ifDefined(this._id)}-growing-btn" aria-labelledby="${ifDefined(this._id)}-growingButton-text" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" @mousedown="${this._onLoadMoreMousedown}" @mouseup="${this._onLoadMoreMouseup}" growing-button-inner><span id="${ifDefined(this._id)}-growingButton-text" growing-button-text>${ifDefined(this._growingButtonText)}</span></div></div>`;
}
function block62(context, tags, suffix) {
  return effectiveHtml`<footer id="${ifDefined(this._id)}-footer" class="ui5-list-footer">${ifDefined(this.footerText)}</footer>`;
}
function block72(context, tags, suffix) {
  return effectiveHtml`<div id="${ifDefined(this._id)}-after" tabindex="0" role="none" class="ui5-list-focusarea"></div>`;
}
function block82(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-list-loading-row"><${scopeTag("ui5-busy-indicator", tags, suffix)} delay="${ifDefined(this.loadingDelay)}" active class="ui5-list-loading-ind" style="${styleMap(this.styles.loadingInd)}" data-sap-focus-ref></${scopeTag("ui5-busy-indicator", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-list-loading-row"><ui5-busy-indicator delay="${ifDefined(this.loadingDelay)}" active class="ui5-list-loading-ind" style="${styleMap(this.styles.loadingInd)}" data-sap-focus-ref></ui5-busy-indicator></div>`;
}
var ListTemplate_lit_default = block05;

// node_modules/@ui5/webcomponents/dist/generated/themes/List.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData8 = { packageName: "@ui5/webcomponents", fileName: "themes/List.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[growing-button]{display:flex;align-items:center;padding:var(--_ui5-v2-0-1_load_more_padding);border-top:1px solid var(--sapList_BorderColor);border-bottom:var(--_ui5-v2-0-1_load_more_border-bottom);box-sizing:border-box;cursor:pointer;outline:none}[growing-button-inner]{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:var(--_ui5-v2-0-1_load_more_text_height);width:100%;color:var(--sapButton_TextColor);background-color:var(--sapList_Background);border:var(--_ui5-v2-0-1_load_more_border);border-radius:var(--_ui5-v2-0-1_load_more_border_radius);box-sizing:border-box}[growing-button-inner]:focus-visible{outline:var(--_ui5-v2-0-1_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:-.125rem;border-color:transparent}[growing-button-inner]:hover{background-color:var(--sapList_Hover_Background)}[growing-button-inner]:active,[growing-button-inner][active]{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}[growing-button-inner]:active>*,[growing-button-inner][active]>*{color:var(--sapList_Active_TextColor)}[growing-button-text],[growing-button-subtext]{width:100%;text-align:center;font-family:"72override",var(--sapFontFamily);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}[growing-button-text]{height:var(--_ui5-v2-0-1_load_more_text_height);padding:.875rem 1rem 0;font-size:var(--_ui5-v2-0-1_load_more_text_font_size);font-weight:700}[growing-button-subtext]{font-size:var(--sapFontSize);padding:var(--_ui5-v2-0-1_load_more_desc_padding)}:host(:not([hidden])){display:block;max-width:100%;width:100%;-webkit-tap-highlight-color:transparent}:host([indent]) .ui5-list-root{padding:2rem}:host([separators="None"]) .ui5-list-nodata{border-bottom:0}:host([loading]){opacity:.72}:host([loading]) .ui5-list-loading-row{position:absolute;inset:0;outline:none}:host([loading]) .ui5-list-loading-ind{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.ui5-list-root{width:100%;height:100%;position:relative;box-sizing:border-box}.ui5-list-scroll-container{overflow:auto;height:100%}.ui5-list-ul{list-style-type:none;padding:0;margin:0}.ui5-list-ul:focus{outline:none}.ui5-list-focusarea{position:fixed}.ui5-list-header{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;font-size:var(--sapFontHeader4Size);font-family:"72override",var(--sapFontFamily);color:var(--sapGroup_TitleTextColor);height:3rem;line-height:3rem;padding:0 1rem;background-color:var(--sapGroup_TitleBackground);border-bottom:1px solid var(--sapGroup_TitleBorderColor)}.ui5-list-footer{height:2rem;box-sizing:border-box;-webkit-text-size-adjust:none;font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);line-height:2rem;background-color:var(--sapList_FooterBackground);color:var(--ui5-v2-0-1_list_footer_text_color);padding:0 1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-list-nodata{list-style-type:none;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--sapTextColor);background-color:var(--sapList_Background);border-bottom:1px solid var(--sapList_BorderColor);padding:0 1rem!important;height:var(--_ui5-v2-0-1_list_no_data_height);font-size:var(--_ui5-v2-0-1_list_no_data_font_size);font-family:"72override",var(--sapFontFamily)}.ui5-list-nodata-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([growing="Scroll"]) .ui5-list-end-marker{display:inline-block}
` };
var List_css_default = styleData8;

// node_modules/@ui5/webcomponents/dist/generated/templates/ListItemGroupTemplate.lit.js
function block06(context, tags, suffix) {
  return effectiveHtml`<ul class="ui5-group-li-root" role="group">${this.hasHeader ? block111.call(this, context, tags, suffix) : void 0}<slot></slot></ul>`;
}
function block111(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-li-group-header", tags, suffix)} ?focused="${this.focused}" part="header">${this.hasFormattedHeader ? block26.call(this, context, tags, suffix) : block34.call(this, context, tags, suffix)}</${scopeTag("ui5-li-group-header", tags, suffix)}>` : effectiveHtml`<ui5-li-group-header ?focused="${this.focused}" part="header">${this.hasFormattedHeader ? block26.call(this, context, tags, suffix) : block34.call(this, context, tags, suffix)}</ui5-li-group-header>`;
}
function block26(context, tags, suffix) {
  return effectiveHtml`<slot name="header"></slot>`;
}
function block34(context, tags, suffix) {
  return effectiveHtml`${ifDefined(this.headerText)}`;
}
var ListItemGroupTemplate_lit_default = block06;

// node_modules/@ui5/webcomponents/dist/generated/themes/ListItemGroup.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData9 = { packageName: "@ui5/webcomponents", fileName: "themes/ListItemGroup.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{height:var(--_ui5-v2-0-1_group_header_list_item_height);background:var(--ui5-v2-0-1-group-header-listitem-background-color);color:var(--sapList_TableGroupHeaderTextColor)}.ui5-group-li-root{padding:0;margin:0;list-style-type:none}
` };
var ListItemGroup_css_default = styleData9;

// node_modules/@ui5/webcomponents/dist/generated/templates/ListItemGroupHeaderTemplate.lit.js
function block07(context, tags, suffix) {
  return effectiveHtml`<ul part="native-li" tabindex="${ifDefined(this.forcedTabIndex)}" class="ui5-ghli-root ${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" aria-label="${ifDefined(this.ariaLabelText)}" aria-roledescription="${ifDefined(this.groupHeaderText)}" role="group"><div id="${ifDefined(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`;
}
var ListItemGroupHeaderTemplate_lit_default = block07;

// node_modules/@ui5/webcomponents/dist/generated/themes/ListItemGroupHeader.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData10 = { packageName: "@ui5/webcomponents", fileName: "themes/ListItemGroupHeader.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{height:var(--_ui5-v2-0-1_group_header_list_item_height);background:var(--ui5-v2-0-1-group-header-listitem-background-color);color:var(--sapList_TableGroupHeaderTextColor)}:host([has-border]){border-bottom:var(--sapList_BorderWidth) solid var(--sapList_GroupHeaderBorderColor)}.ui5-li-root.ui5-ghli-root{padding-top:.5rem;color:currentColor;font-size:var(--sapFontHeader6Size);font-weight:400;line-height:2rem;margin:0}.ui5-ghli-title{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700;font-family:var(--sapFontHeaderFamily)}.ui5-li-content{width:100%}
` };
var ListItemGroupHeader_css_default = styleData10;

// node_modules/@ui5/webcomponents/dist/ListItemGroupHeader.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListItemGroupHeader_1;
var ListItemGroupHeader = ListItemGroupHeader_1 = class ListItemGroupHeader2 extends ListItemBase_default {
  get groupItem() {
    return true;
  }
  get _pressable() {
    return false;
  }
  get groupHeaderText() {
    return ListItemGroupHeader_1.i18nBundle.getText(GROUP_HEADER_TEXT);
  }
  get ariaLabelText() {
    return [this.textContent, this.accessibleName].filter(Boolean).join(" ");
  }
  static onDefine() {
    return __async(this, null, function* () {
      ListItemGroupHeader_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
};
__decorate7([
  property_default()
], ListItemGroupHeader.prototype, "accessibleName", void 0);
ListItemGroupHeader = ListItemGroupHeader_1 = __decorate7([
  customElement_default({
    tag: "ui5-li-group-header",
    languageAware: true,
    template: ListItemGroupHeaderTemplate_lit_default,
    styles: [ListItemBase_default.styles, ListItemGroupHeader_css_default]
  })
], ListItemGroupHeader);
ListItemGroupHeader.define();
var ListItemGroupHeader_default = ListItemGroupHeader;

// node_modules/@ui5/webcomponents/dist/ListItemGroup.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListItemGroup = class ListItemGroup2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.focused = false;
  }
  get groupHeaderItem() {
    return this.shadowRoot.querySelector("[ui5-li-group-header]");
  }
  get hasHeader() {
    return !!this.headerText || this.hasFormattedHeader;
  }
  get hasFormattedHeader() {
    return !!this.header.length;
  }
  get isListItemGroup() {
    return true;
  }
};
__decorate8([
  property_default()
], ListItemGroup.prototype, "headerText", void 0);
__decorate8([
  property_default()
], ListItemGroup.prototype, "headerAccessibleName", void 0);
__decorate8([
  slot_default({
    "default": true,
    invalidateOnChildChange: true,
    type: HTMLElement
  })
], ListItemGroup.prototype, "items", void 0);
__decorate8([
  property_default({ type: Boolean })
], ListItemGroup.prototype, "focused", void 0);
__decorate8([
  slot_default({ type: HTMLElement })
], ListItemGroup.prototype, "header", void 0);
ListItemGroup = __decorate8([
  customElement_default({
    tag: "ui5-li-group",
    renderer: LitRenderer_default,
    languageAware: true,
    template: ListItemGroupTemplate_lit_default,
    styles: [ListItemGroup_css_default],
    dependencies: [ListItemStandard_default, ListItemGroupHeader_default]
  })
], ListItemGroup);
ListItemGroup.define();
var isInstanceOfListItemGroup = (object) => {
  return "isListItemGroup" in object;
};
var ListItemGroup_default = ListItemGroup;

// node_modules/@ui5/webcomponents/dist/List.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var List_1;
var INFINITE_SCROLL_DEBOUNCE_RATE = 250;
var PAGE_UP_DOWN_SIZE = 10;
var List = List_1 = class List2 extends UI5Element_default {
  static onDefine() {
    return __async(this, null, function* () {
      List_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  constructor() {
    super();
    this.indent = false;
    this.selectionMode = "None";
    this.separators = "All";
    this.growing = "None";
    this.loading = false;
    this.loadingDelay = 1e3;
    this.accessibleRole = "List";
    this._inViewport = false;
    this._loadMoreActive = false;
    this._previouslyFocusedItem = null;
    this._forwardingFocus = false;
    this.resizeListenerAttached = false;
    this.listEndObserved = false;
    this._itemNavigation = new ItemNavigation_default(this, {
      skipItemsSize: PAGE_UP_DOWN_SIZE,
      navigationMode: NavigationMode_default.Vertical,
      getItemsCallback: () => this.getEnabledItems()
    });
    this._handleResize = this.checkListInViewport.bind(this);
    this._handleResize = this.checkListInViewport.bind(this);
    this.initialIntersection = true;
    this.onItemFocusedBound = this.onItemFocused.bind(this);
    this.onForwardAfterBound = this.onForwardAfter.bind(this);
    this.onForwardBeforeBound = this.onForwardBefore.bind(this);
    this.onItemTabIndexChangeBound = this.onItemTabIndexChange.bind(this);
  }
  /**
   * Returns an array containing the list item instances without the groups in a flat structure.
   * @default []
   * @since 2.0.0
   * @public
   */
  get listItems() {
    return this.getItems();
  }
  onEnterDOM() {
    DragRegistry_default.subscribe(this);
  }
  onExitDOM() {
    this.unobserveListEnd();
    this.resizeListenerAttached = false;
    ResizeHandler_default.deregister(this.getDomRef(), this._handleResize);
    DragRegistry_default.unsubscribe(this);
  }
  onBeforeRendering() {
    this.detachGroupHeaderEvents();
    this.prepareListItems();
  }
  onAfterRendering() {
    this.attachGroupHeaderEvents();
    if (this.growsOnScroll) {
      this.observeListEnd();
    } else if (this.listEndObserved) {
      this.unobserveListEnd();
    }
    if (this.grows) {
      this.checkListInViewport();
      this.attachForResize();
    }
  }
  attachGroupHeaderEvents() {
    this.getItems().forEach((item) => {
      if (item.hasAttribute("ui5-li-group-header")) {
        item.addEventListener("ui5-_focused", this.onItemFocusedBound);
        item.addEventListener("ui5-_forward-after", this.onForwardAfterBound);
        item.addEventListener("ui5-_forward-before", this.onForwardBeforeBound);
        item.addEventListener("ui5-_tabindex-change", this.onItemTabIndexChangeBound);
      }
    });
  }
  detachGroupHeaderEvents() {
    this.getItems().forEach((item) => {
      if (item.hasAttribute("ui5-li-group-header")) {
        item.removeEventListener("ui5-_focused", this.onItemFocusedBound);
        item.removeEventListener("ui5-_forward-after", this.onForwardAfterBound);
        item.removeEventListener("ui5-_forward-before", this.onForwardBeforeBound);
        item.removeEventListener("ui5-_tabindex-change", this.onItemTabIndexChangeBound);
      }
    });
  }
  attachForResize() {
    if (!this.resizeListenerAttached) {
      this.resizeListenerAttached = true;
      ResizeHandler_default.register(this.getDomRef(), this._handleResize);
    }
  }
  get shouldRenderH1() {
    return !this.header.length && this.headerText;
  }
  get headerID() {
    return `${this._id}-header`;
  }
  get modeLabelID() {
    return `${this._id}-modeLabel`;
  }
  get listEndDOM() {
    return this.shadowRoot.querySelector(".ui5-list-end-marker");
  }
  get dropIndicatorDOM() {
    return this.shadowRoot.querySelector("[ui5-drop-indicator]");
  }
  get hasData() {
    return this.getItems().length !== 0;
  }
  get showNoDataText() {
    return !this.hasData && this.noDataText;
  }
  get isDelete() {
    return this.selectionMode === ListSelectionMode_default.Delete;
  }
  get isSingleSelect() {
    return [
      ListSelectionMode_default.Single,
      ListSelectionMode_default.SingleStart,
      ListSelectionMode_default.SingleEnd,
      ListSelectionMode_default.SingleAuto
    ].includes(this.selectionMode);
  }
  get isMultiple() {
    return this.selectionMode === ListSelectionMode_default.Multiple;
  }
  get ariaLabelledBy() {
    if (this.accessibleNameRef || this.accessibleName) {
      return void 0;
    }
    const ids = [];
    if (this.isMultiple || this.isSingleSelect || this.isDelete) {
      ids.push(this.modeLabelID);
    }
    if (this.shouldRenderH1) {
      ids.push(this.headerID);
    }
    return ids.length ? ids.join(" ") : void 0;
  }
  get ariaLabelTxt() {
    return getEffectiveAriaLabelText(this);
  }
  get ariaLabelModeText() {
    if (this.hasData) {
      if (this.isMultiple) {
        return List_1.i18nBundle.getText(ARIA_LABEL_LIST_MULTISELECTABLE);
      }
      if (this.isSingleSelect) {
        return List_1.i18nBundle.getText(ARIA_LABEL_LIST_SELECTABLE);
      }
      if (this.isDelete) {
        return List_1.i18nBundle.getText(ARIA_LABEL_LIST_DELETABLE);
      }
    }
    return "";
  }
  get grows() {
    return this.growing !== ListGrowingMode_default.None;
  }
  get growsOnScroll() {
    return this.growing === ListGrowingMode_default.Scroll;
  }
  get growsWithButton() {
    return this.growing === ListGrowingMode_default.Button;
  }
  get _growingButtonText() {
    return this.growingButtonText || List_1.i18nBundle.getText(LOAD_MORE_TEXT);
  }
  get loadingIndPosition() {
    if (!this.grows) {
      return "absolute";
    }
    return this._inViewport ? "absolute" : "sticky";
  }
  get styles() {
    return {
      loadingInd: {
        position: this.loadingIndPosition
      }
    };
  }
  get listAccessibleRole() {
    return this.accessibleRole.toLowerCase();
  }
  get classes() {
    return {
      root: {
        "ui5-list-root": true,
        "ui5-content-native-scrollbars": getEffectiveScrollbarStyle_default()
      }
    };
  }
  prepareListItems() {
    const slottedItems = this.getItemsForProcessing();
    slottedItems.forEach((item, key) => {
      const isLastChild = key === slottedItems.length - 1;
      const showBottomBorder = this.separators === ListSeparator_default.All || this.separators === ListSeparator_default.Inner && !isLastChild;
      if (item.hasConfigurableMode) {
        item._selectionMode = this.selectionMode;
      }
      item.hasBorder = showBottomBorder;
    });
  }
  observeListEnd() {
    return __async(this, null, function* () {
      if (!this.listEndObserved) {
        yield renderFinished();
        this.getIntersectionObserver().observe(this.listEndDOM);
        this.listEndObserved = true;
      }
    });
  }
  unobserveListEnd() {
    if (this.growingIntersectionObserver) {
      this.growingIntersectionObserver.disconnect();
      this.growingIntersectionObserver = null;
      this.listEndObserved = false;
    }
  }
  onInteresection(entries) {
    if (this.initialIntersection) {
      this.initialIntersection = false;
      return;
    }
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        debounce_default(this.loadMore.bind(this), INFINITE_SCROLL_DEBOUNCE_RATE);
      }
    });
  }
  /*
  * ITEM SELECTION BASED ON THE CURRENT MODE
  */
  onSelectionRequested(e) {
    const previouslySelectedItems = this.getSelectedItems();
    let selectionChange = false;
    this._selectionRequested = true;
    if (this.selectionMode !== ListSelectionMode_default.None && this[`handle${this.selectionMode}`]) {
      selectionChange = this[`handle${this.selectionMode}`](e.detail.item, !!e.detail.selected);
    }
    if (selectionChange) {
      const changePrevented = !this.fireEvent("selection-change", {
        selectedItems: this.getSelectedItems(),
        previouslySelectedItems,
        selectionComponentPressed: e.detail.selectionComponentPressed,
        targetItem: e.detail.item,
        key: e.detail.key
      }, true);
      if (changePrevented) {
        this._revertSelection(previouslySelectedItems);
      }
    }
  }
  handleSingle(item) {
    if (item.selected) {
      return false;
    }
    this.deselectSelectedItems();
    item.selected = true;
    return true;
  }
  handleSingleStart(item) {
    return this.handleSingle(item);
  }
  handleSingleEnd(item) {
    return this.handleSingle(item);
  }
  handleSingleAuto(item) {
    return this.handleSingle(item);
  }
  handleMultiple(item, selected) {
    item.selected = selected;
    return true;
  }
  handleDelete(item) {
    this.fireEvent("item-delete", { item });
    return true;
  }
  deselectSelectedItems() {
    this.getSelectedItems().forEach((item) => {
      item.selected = false;
    });
  }
  getSelectedItems() {
    return this.getItems().filter((item) => item.selected);
  }
  getEnabledItems() {
    return this.getItems().filter((item) => item._focusable);
  }
  getItems() {
    const items = [];
    const slottedItems = this.getSlottedNodes("items");
    slottedItems.forEach((item) => {
      if (isInstanceOfListItemGroup(item)) {
        const groupItems = [item.groupHeaderItem, ...item.items].filter(Boolean);
        items.push(...groupItems);
      } else {
        items.push(item);
      }
    });
    return items;
  }
  getItemsForProcessing() {
    return this.getItems();
  }
  _revertSelection(previouslySelectedItems) {
    this.getItems().forEach((item) => {
      const oldSelection = previouslySelectedItems.indexOf(item) !== -1;
      const multiSelectCheckBox = item.shadowRoot.querySelector(".ui5-li-multisel-cb");
      const singleSelectRadioButton = item.shadowRoot.querySelector(".ui5-li-singlesel-radiobtn");
      item.selected = oldSelection;
      if (multiSelectCheckBox) {
        multiSelectCheckBox.checked = oldSelection;
      } else if (singleSelectRadioButton) {
        singleSelectRadioButton.checked = oldSelection;
      }
    });
  }
  _onkeydown(e) {
    if (isTabNext(e)) {
      this._handleTabNext(e);
    }
  }
  _onLoadMoreKeydown(e) {
    if (isSpace(e)) {
      e.preventDefault();
      this._loadMoreActive = true;
    }
    if (isEnter(e)) {
      this._onLoadMoreClick();
      this._loadMoreActive = true;
    }
    if (isTabNext(e)) {
      this.focusAfterElement();
    }
    if (isTabPrevious(e)) {
      if (this.getPreviouslyFocusedItem()) {
        this.focusPreviouslyFocusedItem();
      } else {
        this.focusFirstItem();
      }
      e.preventDefault();
    }
  }
  _onLoadMoreKeyup(e) {
    if (isSpace(e)) {
      this._onLoadMoreClick();
    }
    this._loadMoreActive = false;
  }
  _onLoadMoreMousedown() {
    this._loadMoreActive = true;
  }
  _onLoadMoreMouseup() {
    this._loadMoreActive = false;
  }
  _onLoadMoreClick() {
    this.loadMore();
  }
  checkListInViewport() {
    this._inViewport = isElementInView_default(this.getDomRef());
  }
  loadMore() {
    this.fireEvent("load-more");
  }
  /*
  * KEYBOARD SUPPORT
  */
  _handleTabNext(e) {
    let lastTabbableEl;
    const target = getNormalizedTarget_default(e.target);
    if (!lastTabbableEl) {
      return;
    }
    if (lastTabbableEl === target) {
      if (this.getFirstItem((x) => x.selected && x._focusable)) {
        this.focusFirstSelectedItem();
      } else if (this.getPreviouslyFocusedItem()) {
        this.focusPreviouslyFocusedItem();
      } else {
        this.focusFirstItem();
      }
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  }
  _onfocusin(e) {
    const target = getNormalizedTarget_default(e.target);
    if (!this.isForwardElement(target)) {
      e.stopImmediatePropagation();
      return;
    }
    if (!this.getPreviouslyFocusedItem()) {
      if (this.growsWithButton && this.isForwardAfterElement(target)) {
        this.focusGrowingButton();
      } else {
        this.focusFirstItem();
      }
      e.stopImmediatePropagation();
      return;
    }
    if (!this.getForwardingFocus()) {
      if (this.growsWithButton && this.isForwardAfterElement(target)) {
        this.focusGrowingButton();
        e.stopImmediatePropagation();
        return;
      }
      this.focusPreviouslyFocusedItem();
      e.stopImmediatePropagation();
    }
    this.setForwardingFocus(false);
  }
  _ondragenter(e) {
    e.preventDefault();
  }
  _ondragleave(e) {
    if (e.relatedTarget instanceof Node && this.shadowRoot.contains(e.relatedTarget)) {
      return;
    }
    this.dropIndicatorDOM.targetReference = null;
  }
  _ondragover(e) {
    const draggedElement2 = DragRegistry_default.getDraggedElement();
    if (!(e.target instanceof HTMLElement) || !draggedElement2) {
      return;
    }
    const closestPosition = findClosestPosition_default(this.items, e.clientY, Orientation_default.Vertical);
    if (!closestPosition) {
      this.dropIndicatorDOM.targetReference = null;
      return;
    }
    let placements = closestPosition.placements;
    if (closestPosition.element === draggedElement2) {
      placements = placements.filter((placement) => placement !== MovePlacement_default.On);
    }
    const placementAccepted = placements.some((placement) => {
      const beforeItemMovePrevented = !this.fireEvent("move-over", {
        source: {
          element: draggedElement2
        },
        destination: {
          element: closestPosition.element,
          placement
        }
      }, true);
      if (beforeItemMovePrevented) {
        e.preventDefault();
        this.dropIndicatorDOM.targetReference = closestPosition.element;
        this.dropIndicatorDOM.placement = placement;
        return true;
      }
      return false;
    });
    if (!placementAccepted) {
      this.dropIndicatorDOM.targetReference = null;
    }
  }
  _ondrop(e) {
    e.preventDefault();
    const draggedElement2 = DragRegistry_default.getDraggedElement();
    this.fireEvent("move", {
      source: {
        element: draggedElement2
      },
      destination: {
        element: this.dropIndicatorDOM.targetReference,
        placement: this.dropIndicatorDOM.placement
      }
    });
    this.dropIndicatorDOM.targetReference = null;
    draggedElement2.focus();
  }
  isForwardElement(element) {
    const elementId = element.id;
    const beforeElement = this.getBeforeElement();
    if (this._id === elementId || beforeElement && beforeElement.id === elementId) {
      return true;
    }
    return this.isForwardAfterElement(element);
  }
  isForwardAfterElement(element) {
    const elementId = element.id;
    const afterElement = this.getAfterElement();
    return afterElement && afterElement.id === elementId;
  }
  onItemTabIndexChange(e) {
    const target = e.target;
    this._itemNavigation.setCurrentItem(target);
  }
  onItemFocused(e) {
    const target = e.target;
    e.stopPropagation();
    this._itemNavigation.setCurrentItem(target);
    this.fireEvent("item-focused", { item: target });
    if (this.selectionMode === ListSelectionMode_default.SingleAuto) {
      const detail = {
        item: target,
        selectionComponentPressed: false,
        selected: true,
        key: e.detail.key
      };
      this.onSelectionRequested({ detail });
    }
  }
  onItemPress(e) {
    const pressedItem = e.detail.item;
    if (!this.fireEvent("item-click", { item: pressedItem }, true)) {
      return;
    }
    if (!this._selectionRequested && this.selectionMode !== ListSelectionMode_default.Delete) {
      this._selectionRequested = true;
      const detail = {
        item: pressedItem,
        selectionComponentPressed: false,
        selected: !pressedItem.selected,
        key: e.detail.key
      };
      this.onSelectionRequested({ detail });
    }
    this._selectionRequested = false;
  }
  // This is applicable to NotificationListItem
  onItemClose(e) {
    const target = e.target;
    const shouldFireItemClose = target?.hasAttribute("ui5-li-notification") || target?.hasAttribute("ui5-li-notification-group");
    if (shouldFireItemClose) {
      this.fireEvent("item-close", { item: e.detail?.item });
    }
  }
  onItemToggle(e) {
    this.fireEvent("item-toggle", { item: e.detail.item });
  }
  onForwardBefore(e) {
    this.setPreviouslyFocusedItem(e.target);
    this.focusBeforeElement();
    e.stopPropagation();
  }
  onForwardAfter(e) {
    this.setPreviouslyFocusedItem(e.target);
    if (!this.growsWithButton) {
      this.focusAfterElement();
    } else {
      this.focusGrowingButton();
      e.preventDefault();
    }
    e.stopPropagation();
  }
  focusBeforeElement() {
    this.setForwardingFocus(true);
    this.getBeforeElement().focus();
  }
  focusAfterElement() {
    this.setForwardingFocus(true);
    this.getAfterElement().focus();
  }
  focusGrowingButton() {
    const growingBtn = this.getGrowingButton();
    if (growingBtn) {
      growingBtn.focus();
    }
  }
  getGrowingButton() {
    return this.shadowRoot.querySelector(`[id="${this._id}-growing-btn"]`);
  }
  /**
   * Focuses the first list item and sets its tabindex to "0" via the ItemNavigation
   * @protected
   */
  focusFirstItem() {
    const firstItem = this.getFirstItem((x) => x._focusable);
    if (firstItem) {
      firstItem.focus();
    }
  }
  focusPreviouslyFocusedItem() {
    const previouslyFocusedItem = this.getPreviouslyFocusedItem();
    if (previouslyFocusedItem) {
      previouslyFocusedItem.focus();
    }
  }
  focusFirstSelectedItem() {
    const firstSelectedItem = this.getFirstItem((x) => x.selected && x._focusable);
    if (firstSelectedItem) {
      firstSelectedItem.focus();
    }
  }
  /**
   * Focuses a list item and sets its tabindex to "0" via the ItemNavigation
   * @protected
   * @param item
   */
  focusItem(item) {
    this._itemNavigation.setCurrentItem(item);
    item.focus();
  }
  onFocusRequested(e) {
    setTimeout(() => {
      this.setPreviouslyFocusedItem(e.target);
      this.focusPreviouslyFocusedItem();
    }, 0);
  }
  setForwardingFocus(forwardingFocus) {
    this._forwardingFocus = forwardingFocus;
  }
  getForwardingFocus() {
    return this._forwardingFocus;
  }
  setPreviouslyFocusedItem(item) {
    this._previouslyFocusedItem = item;
  }
  getPreviouslyFocusedItem() {
    return this._previouslyFocusedItem;
  }
  getFirstItem(filter) {
    const slottedItems = this.getItems();
    let firstItem = null;
    if (!filter) {
      return slottedItems.length ? slottedItems[0] : null;
    }
    for (let i = 0; i < slottedItems.length; i++) {
      if (filter(slottedItems[i])) {
        firstItem = slottedItems[i];
        break;
      }
    }
    return firstItem;
  }
  getAfterElement() {
    if (!this._afterElement) {
      this._afterElement = this.shadowRoot.querySelector(`[id="${this._id}-after"]`);
    }
    return this._afterElement;
  }
  getBeforeElement() {
    if (!this._beforeElement) {
      this._beforeElement = this.shadowRoot.querySelector(`[id="${this._id}-before"]`);
    }
    return this._beforeElement;
  }
  getIntersectionObserver() {
    if (!this.growingIntersectionObserver) {
      this.growingIntersectionObserver = new IntersectionObserver(this.onInteresection.bind(this), {
        root: null,
        rootMargin: "0px",
        threshold: 1
      });
    }
    return this.growingIntersectionObserver;
  }
};
__decorate9([
  property_default()
], List.prototype, "headerText", void 0);
__decorate9([
  property_default()
], List.prototype, "footerText", void 0);
__decorate9([
  property_default({ type: Boolean })
], List.prototype, "indent", void 0);
__decorate9([
  property_default()
], List.prototype, "selectionMode", void 0);
__decorate9([
  property_default()
], List.prototype, "noDataText", void 0);
__decorate9([
  property_default()
], List.prototype, "separators", void 0);
__decorate9([
  property_default()
], List.prototype, "growing", void 0);
__decorate9([
  property_default()
], List.prototype, "growingButtonText", void 0);
__decorate9([
  property_default({ type: Boolean })
], List.prototype, "loading", void 0);
__decorate9([
  property_default({ type: Number })
], List.prototype, "loadingDelay", void 0);
__decorate9([
  property_default()
], List.prototype, "accessibleName", void 0);
__decorate9([
  property_default()
], List.prototype, "accessibleNameRef", void 0);
__decorate9([
  property_default()
], List.prototype, "accessibleRole", void 0);
__decorate9([
  property_default({ type: Boolean })
], List.prototype, "_inViewport", void 0);
__decorate9([
  property_default({ type: Boolean })
], List.prototype, "_loadMoreActive", void 0);
__decorate9([
  slot_default({
    type: HTMLElement,
    "default": true,
    invalidateOnChildChange: true
  })
], List.prototype, "items", void 0);
__decorate9([
  slot_default()
], List.prototype, "header", void 0);
List = List_1 = __decorate9([
  customElement_default({
    tag: "ui5-list",
    fastNavigation: true,
    renderer: LitRenderer_default,
    template: ListTemplate_lit_default,
    styles: [BrowserScrollbar_css_default, List_css_default],
    dependencies: [BusyIndicator_default, DropIndicator_default, ListItemGroup_default]
  }),
  event_default("item-click", {
    detail: {
      /**
       * @public
       */
      item: { type: HTMLElement }
    }
  }),
  event_default("item-close", {
    detail: {
      /**
       * @public
       */
      item: { type: HTMLElement }
    }
  }),
  event_default("item-toggle", {
    detail: {
      /**
       * @public
       */
      item: { type: HTMLElement }
    }
  }),
  event_default("item-delete", {
    detail: {
      /**
       * @public
       */
      item: { type: HTMLElement }
    }
  }),
  event_default("selection-change", {
    detail: {
      /**
       * @public
       */
      selectedItems: { type: Array },
      /**
       * @public
       */
      previouslySelectedItems: { type: Array },
      /**
       * protected, holds the event target item
       * @protected
       */
      targetItem: { type: HTMLElement },
      /**
       * protected, indicates if the user used the selection components to change the selection
       * @protected
       */
      selectionComponentPressed: { type: Boolean },
      /**
       * @private
       */
      key: { type: String }
    }
  }),
  event_default("load-more"),
  event_default("item-focused", {
    detail: {
      item: { type: HTMLElement }
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
], List);
List.define();
var List_default = List;

export {
  ListItemType_default,
  ListSelectionMode_default,
  DraggableElement_css_default,
  ListItemBase_default,
  RadioButton_default,
  ListItemAdditionalText_css_default,
  ListItem_default,
  ListItemStandard_default,
  DragRegistry_default,
  MovePlacement_default,
  Orientation_default,
  findClosestPosition_default,
  DropIndicator_default,
  ListSeparator_default,
  ListItemGroupHeader_default,
  ListItemGroup_default,
  List_default
};
//# sourceMappingURL=chunk-NJBEKUUC.js.map
