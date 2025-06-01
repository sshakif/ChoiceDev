import {
  ProxyInputs
} from "./chunk-D75HI4BO.js";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  inject,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-JM6UQCOA.js";
import {
  __decorate,
  __metadata
} from "./chunk-YEKEGRK3.js";

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-title.mjs
var _c0 = ["*"];
var TitleComponent = class TitleComponent2 {
  get element() {
    return this.elementRef.nativeElement;
  }
  constructor() {
    this.elementRef = inject(ElementRef);
    this.zone = inject(NgZone);
    this.cdr = inject(ChangeDetectorRef);
    this.cdr.detach();
  }
  static {
    this.ɵfac = function TitleComponent_Factory(t) {
      return new (t || TitleComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: TitleComponent2,
      selectors: [["ui5-title"]],
      inputs: {
        wrappingType: "wrappingType",
        level: "level"
      },
      exportAs: ["ui5Title"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
TitleComponent = __decorate([ProxyInputs(["wrappingType", "level"]), __metadata("design:paramtypes", [])], TitleComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-title",
      template: "<ng-content></ng-content>",
      inputs: ["wrappingType", "level"],
      exportAs: "ui5Title"
    }]
  }], () => [], null);
})();

export {
  TitleComponent
};
//# sourceMappingURL=chunk-S7OTUACA.js.map
