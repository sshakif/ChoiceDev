import {
  ListItem_default
} from "./chunk-NJBEKUUC.js";
import {
  isF2,
  isTabNext,
  isTabPrevious
} from "./chunk-ECUZOJV2.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  classMap,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  scopeTag
} from "./chunk-DMMFI3C7.js";
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

// node_modules/@ui5/webcomponents/dist/generated/templates/ListItemCustomTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<li part="native-li" data-sap-focus-ref tabindex="${ifDefined(this._effectiveTabIndex)}" class="${classMap(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @mouseup="${this._onmouseup}" @mousedown="${this._onmousedown}" @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" @click="${this._onclick}" draggable="${ifDefined(this.movable)}" @dragstart="${this._ondragstart}" @dragend="${this._ondragend}" role="${ifDefined(this._accInfo.role)}" aria-expanded="${ifDefined(this._accInfo.ariaExpanded)}" title="${ifDefined(this._accInfo.tooltip)}" aria-level="${ifDefined(this._accInfo.ariaLevel)}" aria-haspopup="${ifDefined(this._accInfo.ariaHaspopup)}" aria-posinset="${ifDefined(this._accInfo.posinset)}" aria-setsize="${ifDefined(this._accInfo.setsize)}" aria-describedby="${ifDefined(this._id)}-invisibleText-describedby" aria-labelledby="${ifDefined(this._accessibleNameRef)}" aria-disabled="${ifDefined(this._ariaDisabled)}" aria-selected="${ifDefined(this._accInfo.ariaSelected)}" aria-checked="${ifDefined(this._accInfo.ariaChecked)}" aria-owns="${ifDefined(this._accInfo.ariaOwns)}">${this.placeSelectionElementBefore ? block1.call(this, context, tags, suffix) : void 0}${this._hasHighlightColor ? block7.call(this, context, tags, suffix) : void 0}<div part="content" id="${ifDefined(this._id)}-content" class="ui5-li-content"><slot></slot></div>${this.typeDetail ? block8.call(this, context, tags, suffix) : void 0}${this.typeNavigation ? block9.call(this, context, tags, suffix) : void 0}${this.navigated ? block10.call(this, context, tags, suffix) : void 0}${this.placeSelectionElementAfter ? block11.call(this, context, tags, suffix) : void 0}<span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this._accInfo.listItemAriaLabel)}${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-invisibleText-describedby" class="ui5-hidden-text">${ifDefined(this._accInfo.ariaSelectedText)}</span></li> `;
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
  return suffix ? effectiveHtml`<div class="ui5-li-detailbtn"><${scopeTag("ui5-button", tags, suffix)} part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></${scopeTag("ui5-button", tags, suffix)}></div>` : effectiveHtml`<div class="ui5-li-detailbtn"><ui5-button part="detail-button" design="Transparent" icon="edit" @click="${this.onDetailClick}"></ui5-button></div>`;
}
function block9(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name ="slim-arrow-right"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name ="slim-arrow-right"></ui5-icon>`;
}
function block10(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-navigated"></div>`;
}
function block11(context, tags, suffix) {
  return effectiveHtml`${this.modeSingleSelect ? block12.call(this, context, tags, suffix) : void 0}${this.modeMultiple ? block13.call(this, context, tags, suffix) : void 0}${this.renderDeleteButton ? block14.call(this, context, tags, suffix) : void 0}`;
}
function block12(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-radio-button", tags, suffix)} part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></${scopeTag("ui5-radio-button", tags, suffix)}>` : effectiveHtml`<ui5-radio-button part="radio" ?disabled="${this.isInactive}" accessible-name="${ifDefined(this._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${ifDefined(this._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${this.selected}" @click="${this.onSingleSelectionComponentPress}"></ui5-radio-button>`;
}
function block13(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-checkbox", tags, suffix)} part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></${scopeTag("ui5-checkbox", tags, suffix)}>` : effectiveHtml`<ui5-checkbox part="checkbox" ?disabled="${this.isInactive}" ?indeterminate=${this.indeterminate} tabindex="-1" id="${ifDefined(this._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${this.selected}" accessible-name="${ifDefined(this._accInfo.ariaLabel)}" @click="${this.onMultiSelectionComponentPress}"></ui5-checkbox>`;
}
function block14(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-li-deletebtn">${this.hasDeleteButtonSlot ? block15.call(this, context, tags, suffix) : block16.call(this, context, tags, suffix)}</div>`;
}
function block15(context, tags, suffix) {
  return effectiveHtml`<slot name="deleteButton"></slot>`;
}
function block16(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button part="delete-button" tabindex="-1" data-sap-no-tab-ref id="${ifDefined(this._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${this.disableDeleteButton}" @click="${this.onDelete}" tooltip="${ifDefined(this.deleteText)}"></ui5-button>`;
}
var ListItemCustomTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/ListItemCustom.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/ListItemCustom.css.ts", content: `:host(:not([hidden])){display:block}:host{min-height:var(--_ui5-v2-0-1_list_item_base_height);height:auto;box-sizing:border-box}.ui5-li-root.ui5-custom-li-root{pointer-events:inherit;min-height:inherit}.ui5-li-root.ui5-custom-li-root .ui5-li-content{pointer-events:inherit}[ui5-checkbox].ui5-li-singlesel-radiobtn,[ui5-radio-button].ui5-li-singlesel-radiobtn{display:flex;align-items:center}.ui5-li-root.ui5-custom-li-root,[ui5-checkbox].ui5-li-singlesel-radiobtn,[ui5-radio-button].ui5-li-singlesel-radiobtn{min-width:var(--_ui5-v2-0-1_custom_list_item_rb_min_width)}
` };
var ListItemCustom_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/ListItemCustom.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListItemCustom = class ListItemCustom2 extends ListItem_default {
  constructor() {
    super(...arguments);
    this.movable = false;
  }
  _onkeydown(e) {
    return __async(this, null, function* () {
      const isTab = isTabNext(e) || isTabPrevious(e);
      const isFocused = this.matches(":focus");
      if (!isTab && !isFocused && !isF2(e)) {
        return;
      }
      yield __superGet(ListItemCustom2.prototype, this, "_onkeydown").call(this, e);
    });
  }
  _onkeyup(e) {
    const isTab = isTabNext(e) || isTabPrevious(e);
    const isFocused = this.matches(":focus");
    if (!isTab && !isFocused && !isF2(e)) {
      return;
    }
    super._onkeyup(e);
  }
  get classes() {
    const result = super.classes;
    result.main["ui5-custom-li-root"] = true;
    return result;
  }
};
__decorate([
  property_default({ type: Boolean })
], ListItemCustom.prototype, "movable", void 0);
__decorate([
  property_default()
], ListItemCustom.prototype, "accessibleName", void 0);
ListItemCustom = __decorate([
  customElement_default({
    tag: "ui5-li-custom",
    template: ListItemCustomTemplate_lit_default,
    styles: [ListItem_default.styles, ListItemCustom_css_default]
  })
], ListItemCustom);
ListItemCustom.define();
var ListItemCustom_default = ListItemCustom;

export {
  ListItemCustom_default
};
//# sourceMappingURL=chunk-NKNWETHW.js.map
