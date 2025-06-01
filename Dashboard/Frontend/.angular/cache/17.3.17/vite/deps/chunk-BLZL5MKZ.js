import {
  event_default
} from "./chunk-XYCO3572.js";
import {
  UI5Element_default,
  customElement_default,
  property_default
} from "./chunk-V2NLQCH3.js";

// node_modules/@ui5/webcomponents-fiori/dist/ShellBarItem.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ShellBarItem = class ShellBarItem2 extends UI5Element_default {
  get stableDomRef() {
    return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
  }
  fireClickEvent(e) {
    return this.fireEvent("click", {
      targetRef: e.target
    }, true);
  }
};
__decorate([
  property_default()
], ShellBarItem.prototype, "icon", void 0);
__decorate([
  property_default()
], ShellBarItem.prototype, "text", void 0);
__decorate([
  property_default()
], ShellBarItem.prototype, "count", void 0);
ShellBarItem = __decorate([
  customElement_default("ui5-shellbar-item"),
  event_default("click", {
    detail: {
      targetRef: { type: HTMLElement }
    }
  })
], ShellBarItem);
ShellBarItem.define();
var ShellBarItem_default = ShellBarItem;

export {
  ShellBarItem_default
};
//# sourceMappingURL=chunk-BLZL5MKZ.js.map
