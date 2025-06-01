import {
  isDesktop,
  isEnter,
  isSpace
} from "./chunk-ECUZOJV2.js";
import {
  registerIcon
} from "./chunk-XOBH4D6P.js";
import {
  event_default
} from "./chunk-XYCO3572.js";
import {
  UI5Element_default,
  customElement_default,
  property_default
} from "./chunk-V2NLQCH3.js";

// node_modules/@ui5/webcomponents-icons/dist/v4/circle-task-2.js
var name = "circle-task-2";
var pathData = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20q-54 0-100-20t-81-55-55-81.5T0 256t20-99.5T75 75t81-55T256 0z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/circle-task-2.js
var name2 = "circle-task-2";
var pathData2 = "M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/circle-task-2.js
var circle_task_2_default = "circle-task-2";

// node_modules/@ui5/webcomponents-icons/dist/v4/arrow-right.js
var name3 = "arrow-right";
var pathData3 = "M503 234q9 9 9 22.5t-9 22.5L344 439q-10 10-23 10t-23-10q-9-9-9-22.5t9-22.5l106-106H32q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224h372L299 119q-10-10-10-23t10-22q9-10 22-10t22 10z";
var ltr3 = false;
var collection3 = "SAP-icons-v4";
var packageName3 = "@ui5/webcomponents-icons";
registerIcon(name3, { pathData: pathData3, ltr: ltr3, collection: collection3, packageName: packageName3 });

// node_modules/@ui5/webcomponents-icons/dist/v5/arrow-right.js
var name4 = "arrow-right";
var pathData4 = "M331 409q-7 7-17 7-11 0-18.5-7.5T288 390q0-10 8-18l95-90H58q-11 0-18.5-7.5T32 256t7.5-18.5T58 230h333l-95-90q-8-8-8-18 0-11 7.5-18.5T314 96q10 0 17 7l141 134q8 8 8 19 0 12-8 18z";
var ltr4 = false;
var collection4 = "SAP-icons-v5";
var packageName4 = "@ui5/webcomponents-icons";
registerIcon(name4, { pathData: pathData4, ltr: ltr4, collection: collection4, packageName: packageName4 });

// node_modules/@ui5/webcomponents-fiori/dist/SideNavigationItemBase.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SideNavigationItemBase = class extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.sideNavCollapsed = false;
    this.inPopover = false;
  }
  onEnterDOM() {
    if (isDesktop()) {
      this.setAttribute("desktop", "");
    }
  }
  get _tooltip() {
    return this.tooltip || void 0;
  }
  get classesArray() {
    const classes = [];
    if (this.disabled) {
      classes.push("ui5-sn-item-disabled");
    }
    return classes;
  }
  get _classes() {
    return this.classesArray.join(" ");
  }
  get effectiveTabIndex() {
    if (this.disabled) {
      return void 0;
    }
    return this.forcedTabIndex;
  }
  get sideNavigation() {
    return this._sideNavigation;
  }
  set sideNavigation(sideNavigation) {
    this._sideNavigation = sideNavigation;
  }
  get isFixedItem() {
    let element = this;
    let parentElement = element.parentElement;
    while (parentElement) {
      if (parentElement.hasAttribute("ui5-side-navigation")) {
        break;
      }
      element = parentElement;
      parentElement = element.parentElement;
    }
    return element?.slot === "fixedItems";
  }
  get isSideNavigationItemBase() {
    return true;
  }
};
__decorate([
  property_default()
], SideNavigationItemBase.prototype, "text", void 0);
__decorate([
  property_default({ type: Boolean })
], SideNavigationItemBase.prototype, "disabled", void 0);
__decorate([
  property_default()
], SideNavigationItemBase.prototype, "tooltip", void 0);
__decorate([
  property_default({ noAttribute: true })
], SideNavigationItemBase.prototype, "forcedTabIndex", void 0);
__decorate([
  property_default({ type: Boolean })
], SideNavigationItemBase.prototype, "sideNavCollapsed", void 0);
__decorate([
  property_default({ type: Boolean })
], SideNavigationItemBase.prototype, "inPopover", void 0);
var isInstanceOfSideNavigationItemBase = (object) => {
  return "isSideNavigationItemBase" in object;
};
var SideNavigationItemBase_default = SideNavigationItemBase;

// node_modules/@ui5/webcomponents-fiori/dist/SideNavigationSelectableItemBase.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SideNavigationSelectableItemBase = class SideNavigationSelectableItemBase2 extends SideNavigationItemBase_default {
  constructor() {
    super(...arguments);
    this.selected = false;
    this.isOverflow = false;
  }
  get ariaRole() {
    if (this.sideNavCollapsed) {
      return this.isOverflow ? "menuitem" : "menuitemradio";
    }
    return "treeitem";
  }
  get _href() {
    return !this.disabled && this.href ? this.href : void 0;
  }
  get _target() {
    return !this.disabled && this.target ? this.target : void 0;
  }
  get isExternalLink() {
    return this.href && this.target === "_blank";
  }
  get _selected() {
    return this.selected;
  }
  get classesArray() {
    const classes = [];
    if (this.disabled) {
      classes.push("ui5-sn-item-disabled");
    }
    if (this._selected) {
      classes.push("ui5-sn-item-selected");
    }
    return classes;
  }
  get _classes() {
    return this.classesArray.join(" ");
  }
  get _ariaCurrent() {
    if (!this.selected) {
      return void 0;
    }
    return "page";
  }
  _onkeydown(e) {
    if (isSpace(e)) {
      e.preventDefault();
    }
    if (isEnter(e)) {
      this._activate(e);
    }
  }
  _onkeyup(e) {
    if (isSpace(e)) {
      this._activate(e);
    }
  }
  _onclick(e) {
    this._activate(e);
  }
  _onfocusin(e) {
    e.stopPropagation();
    this.sideNavigation?.focusItem(this);
  }
  _activate(e) {
    e.stopPropagation();
    if (this.isOverflow) {
      this.fireEvent("click");
    } else {
      this.sideNavigation?._handleItemClick(e, this);
    }
  }
  get isSideNavigationSelectableItemBase() {
    return true;
  }
};
__decorate2([
  property_default()
], SideNavigationSelectableItemBase.prototype, "icon", void 0);
__decorate2([
  property_default({ type: Boolean })
], SideNavigationSelectableItemBase.prototype, "selected", void 0);
__decorate2([
  property_default()
], SideNavigationSelectableItemBase.prototype, "href", void 0);
__decorate2([
  property_default()
], SideNavigationSelectableItemBase.prototype, "target", void 0);
__decorate2([
  property_default({ type: Boolean })
], SideNavigationSelectableItemBase.prototype, "isOverflow", void 0);
SideNavigationSelectableItemBase = __decorate2([
  event_default("click"),
  customElement_default()
], SideNavigationSelectableItemBase);
var isInstanceOfSideNavigationSelectableItemBase = (object) => {
  return "isSideNavigationSelectableItemBase" in object;
};
var SideNavigationSelectableItemBase_default = SideNavigationSelectableItemBase;

export {
  circle_task_2_default,
  isInstanceOfSideNavigationItemBase,
  SideNavigationItemBase_default,
  isInstanceOfSideNavigationSelectableItemBase,
  SideNavigationSelectableItemBase_default
};
//# sourceMappingURL=chunk-L3KJOGNW.js.map
