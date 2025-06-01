import {
  Button_default
} from "./chunk-THWQMO7Z.js";
import {
  MESSAGE_STRIP_CLOSABLE,
  MESSAGE_STRIP_CLOSE_BUTTON,
  MESSAGE_STRIP_CUSTOM,
  MESSAGE_STRIP_ERROR,
  MESSAGE_STRIP_INFORMATION,
  MESSAGE_STRIP_SUCCESS,
  MESSAGE_STRIP_WARNING
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
  classMap,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
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
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents/dist/types/MessageStripDesign.js
var MessageStripDesign;
(function(MessageStripDesign2) {
  MessageStripDesign2["Information"] = "Information";
  MessageStripDesign2["Positive"] = "Positive";
  MessageStripDesign2["Negative"] = "Negative";
  MessageStripDesign2["Critical"] = "Critical";
  MessageStripDesign2["ColorSet1"] = "ColorSet1";
  MessageStripDesign2["ColorSet2"] = "ColorSet2";
})(MessageStripDesign || (MessageStripDesign = {}));
var MessageStripDesign_default = MessageStripDesign;

// node_modules/@ui5/webcomponents/dist/generated/templates/MessageStripTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.root)}" id="${ifDefined(this._id)}" role="note" aria-labelledby="${ifDefined(this._id)}">${!this.shouldHideIcon ? block1.call(this, context, tags, suffix) : void 0}<span class="ui5-hidden-text">${ifDefined(this.hiddenText)}</span><span class="ui5-message-strip-text"><slot></slot></span>${!this.hideCloseButton ? block4.call(this, context, tags, suffix) : void 0}</div>`;
}
function block1(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-message-strip-icon-wrapper" aria-hidden="true">${this.iconProvided ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</div>`;
}
function block2(context, tags, suffix) {
  return effectiveHtml`<slot name="icon"></slot>`;
}
function block3(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} name="${ifDefined(this.standardIconName)}" class="ui5-message-strip-icon"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon name="${ifDefined(this.standardIconName)}" class="ui5-message-strip-icon"></ui5-icon>`;
}
function block4(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${ifDefined(this._closeButtonText)}" @click=${this._closeClick}></${scopeTag("ui5-button", tags, suffix)}>` : effectiveHtml`<ui5-button icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${ifDefined(this._closeButtonText)}" @click=${this._closeClick}></ui5-button>`;
}
var MessageStripTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/MessageStrip.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/MessageStrip.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-message-strip-root{width:100%;height:100%;display:flex;border-radius:var(--sapPopover_BorderCornerRadius);padding:var(--_ui5-v2-0-1_message_strip_padding);border-width:var(--_ui5-v2-0-1_message_strip_border_width);border-style:solid;box-sizing:border-box;position:relative}.ui5-message-strip-root-hide-icon{padding-inline:var(--_ui5-v2-0-1_message_strip_padding_inline_no_icon);padding-block:var(--_ui5-v2-0-1_message_strip_padding_block_no_icon)}.ui5-message-strip-root-hide-close-button{padding-inline-end:1rem}.ui5-message-strip-root--info{background-color:var(--sapInformationBackground);border-color:var(--sapMessage_InformationBorderColor);color:var(--sapTextColor)}.ui5-message-strip-root--info .ui5-message-strip-icon{color:var(--sapInformativeElementColor)}.ui5-message-strip-root--positive{background-color:var(--sapSuccessBackground);border-color:var(--sapMessage_SuccessBorderColor)}.ui5-message-strip-root--positive .ui5-message-strip-icon{color:var(--sapPositiveElementColor)}.ui5-message-strip-root--negative{background-color:var(--sapErrorBackground);border-color:var(--sapMessage_ErrorBorderColor)}.ui5-message-strip-root--negative .ui5-message-strip-icon{color:var(--sapNegativeElementColor)}.ui5-message-strip-root--critical{background-color:var(--sapWarningBackground);border-color:var(--sapMessage_WarningBorderColor)}.ui5-message-strip-root--critical .ui5-message-strip-icon{color:var(--sapCriticalElementColor)}.ui5-message-strip-icon-wrapper{position:absolute;top:var(--_ui5-v2-0-1_message_strip_icon_top);inset-inline-start:.75rem;box-sizing:border-box}.ui5-message-strip-text{width:100%;color:var(--sapTextColor);line-height:1.2;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-message-strip-close-button{height:1.625rem;min-height:1.625rem;position:absolute;top:var(--_ui5-v2-0-1_message_strip_close_button_top);inset-inline-end:var(--_ui5-v2-0-1_message_strip_close_button_right)}:host([color-scheme="1"]) .ui5-message-strip-root--color-set-1,:host(:not([color-scheme])[design="ColorSet1"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_1_Background);border-color:var(--sapIndicationColor_1_BorderColor)}:host([color-scheme="2"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_2_Background);border-color:var(--sapIndicationColor_2_BorderColor)}:host([color-scheme="3"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_3_Background);border-color:var(--sapIndicationColor_3_BorderColor)}:host([color-scheme="4"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_4_Background);border-color:var(--sapIndicationColor_4_BorderColor)}:host([color-scheme="5"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_5_Background);border-color:var(--sapIndicationColor_5_BorderColor)}:host([color-scheme="6"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_6_Background);border-color:var(--sapIndicationColor_6_BorderColor)}:host([color-scheme="7"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_7_Background);border-color:var(--sapIndicationColor_7_BorderColor)}:host([color-scheme="8"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_8_Background);border-color:var(--sapIndicationColor_8_BorderColor)}:host([color-scheme="9"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_9_Background);border-color:var(--sapIndicationColor_9_BorderColor)}:host([color-scheme="10"]) .ui5-message-strip-root--color-set-1{background-color:var(--sapIndicationColor_10_Background);border-color:var(--sapIndicationColor_10_BorderColor)}:host([color-scheme="1"]) .ui5-message-strip-root--color-set-2,:host(:not([color-scheme])[design="ColorSet2"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_1_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_1_set_2_border_color)}:host([color-scheme="2"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_2_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_2_set_2_border_color)}:host([color-scheme="3"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_3_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_3_set_2_border_color)}:host([color-scheme="4"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_4_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_4_set_2_border_color)}:host([color-scheme="5"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_5_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_5_set_2_border_color)}:host([color-scheme="6"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_6_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_6_set_2_border_color)}:host([color-scheme="7"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_7_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_7_set_2_border_color)}:host([color-scheme="8"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_8_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_8_set_2_border_color)}:host([color-scheme="9"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_9_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_9_set_2_border_color)}:host([color-scheme="10"]) .ui5-message-strip-root--color-set-2{background-color:var(--_ui5-v2-0-1_message_strip_scheme_10_set_2_background);border-color:var(--_ui5-v2-0-1_message_strip_scheme_10_set_2_border_color)}:host([design="ColorSet1"]) .ui5-message-strip-root .ui5-message-strip-text{color:var(--sapContent_ContrastTextColor);text-shadow:var(--sapContent_ContrastTextShadow)}:host([design="ColorSet1"]) .ui5-message-strip-root ::slotted([slot="icon"]){color:var(--sapContent_ContrastIconColor);text-shadow:var(--sapContent_ContrastTextShadow)}:host([design="ColorSet2"]) .ui5-message-strip-root .ui5-message-strip-text{color:var(--sapTextColor)}:host([design="ColorSet1"]) .ui5-message-strip-close-button{color:var(--_ui5-v2-0-1_message_strip_close_button_color_set_1_color)}:host([design="ColorSet2"]) .ui5-message-strip-close-button,:host([design="ColorSet2"]) .ui5-message-strip-root ::slotted([slot="icon"]){color:var(--sapContent_IconColor)}:host([design="ColorSet1"]) .ui5-message-strip-close-button:hover{border-color:var(--sapContent_ContrastIconColor);background-color:var(--_ui5-v2-0-1_message_strip_close_button_color_set_1_background);color:var(--_ui5-v2-0-1_message_strip_close_button_color_set_1_hover_color);text-shadow:var(--sapContent_ContrastTextShadow)}:host([design="ColorSet2"]) .ui5-message-strip-close-button:hover{background-color:var(--_ui5-v2-0-1_message_strip_close_button_color_set_2_background);border-color:var(--sapContent_IconColor);color:var(--sapContent_IconColor)}:host([design="ColorSet1"]) .ui5-message-strip-close-button:active{background:none;border-color:var(--sapContent_ContrastIconColor)}:host([design="ColorSet2"]) .ui5-message-strip-close-button:active{background:none;border-color:var(--sapContent_IconColor)}:host([design="ColorSet1"]) .ui5-message-strip-close-button::part(button):after,:host([design="ColorSet1"]) .ui5-message-strip-close-button::part(button):before{border-color:var(--sapContent_ContrastFocusColor)}
` };
var MessageStrip_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/MessageStrip.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MessageStrip_1;
var DesignClassesMapping;
(function(DesignClassesMapping2) {
  DesignClassesMapping2["Information"] = "ui5-message-strip-root--info";
  DesignClassesMapping2["Positive"] = "ui5-message-strip-root--positive";
  DesignClassesMapping2["Negative"] = "ui5-message-strip-root--negative";
  DesignClassesMapping2["Critical"] = "ui5-message-strip-root--critical";
  DesignClassesMapping2["ColorSet1"] = "ui5-message-strip-root--color-set-1";
  DesignClassesMapping2["ColorSet2"] = "ui5-message-strip-root--color-set-2";
})(DesignClassesMapping || (DesignClassesMapping = {}));
var MessageStrip = MessageStrip_1 = class MessageStrip2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.design = "Information";
    this.colorScheme = "1";
    this.hideIcon = false;
    this.hideCloseButton = false;
  }
  _closeClick() {
    this.fireEvent("close");
  }
  static onDefine() {
    return __async(this, null, function* () {
      MessageStrip_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  static designAnnouncementMappings() {
    const getTranslation = (text) => {
      return MessageStrip_1.i18nBundle.getText(text);
    };
    return {
      Information: getTranslation(MESSAGE_STRIP_INFORMATION),
      Positive: getTranslation(MESSAGE_STRIP_SUCCESS),
      Negative: getTranslation(MESSAGE_STRIP_ERROR),
      Critical: getTranslation(MESSAGE_STRIP_WARNING),
      ColorSet1: getTranslation(MESSAGE_STRIP_CUSTOM),
      ColorSet2: getTranslation(MESSAGE_STRIP_CUSTOM)
    };
  }
  get hiddenText() {
    return `${MessageStrip_1.designAnnouncementMappings()[this.design]} ${this.hideCloseButton ? "" : this._closableText}`;
  }
  get shouldHideIcon() {
    if (this.designClasses === DesignClassesMapping.ColorSet1 || this.designClasses === DesignClassesMapping.ColorSet2) {
      return this.hideIcon || this.icon.length === 0;
    }
    return this.hideIcon;
  }
  get _closeButtonText() {
    return MessageStrip_1.i18nBundle.getText(MESSAGE_STRIP_CLOSE_BUTTON);
  }
  get _closableText() {
    return MessageStrip_1.i18nBundle.getText(MESSAGE_STRIP_CLOSABLE);
  }
  get classes() {
    return {
      root: {
        "ui5-message-strip-root": true,
        "ui5-message-strip-root-hide-icon": this.shouldHideIcon,
        "ui5-message-strip-root-hide-close-button": this.hideCloseButton,
        [this.designClasses]: true
      }
    };
  }
  get iconProvided() {
    return this.icon.length > 0;
  }
  get standardIconName() {
    switch (this.design) {
      case MessageStripDesign_default.Critical:
        return "alert";
      case MessageStripDesign_default.Positive:
        return "sys-enter-2";
      case MessageStripDesign_default.Negative:
        return "error";
      case MessageStripDesign_default.Information:
        return "information";
      default:
        return null;
    }
  }
  get designClasses() {
    return DesignClassesMapping[this.design];
  }
};
__decorate([
  property_default()
], MessageStrip.prototype, "design", void 0);
__decorate([
  property_default()
], MessageStrip.prototype, "colorScheme", void 0);
__decorate([
  property_default({ type: Boolean })
], MessageStrip.prototype, "hideIcon", void 0);
__decorate([
  property_default({ type: Boolean })
], MessageStrip.prototype, "hideCloseButton", void 0);
__decorate([
  slot_default()
], MessageStrip.prototype, "icon", void 0);
MessageStrip = MessageStrip_1 = __decorate([
  customElement_default({
    tag: "ui5-message-strip",
    languageAware: true,
    renderer: LitRenderer_default,
    template: MessageStripTemplate_lit_default,
    styles: MessageStrip_css_default,
    dependencies: [Icon_default, Button_default]
  }),
  event_default("close")
], MessageStrip);
MessageStrip.define();
//# sourceMappingURL=chunk-OWBV4IDF.js.map
