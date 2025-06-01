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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-bar.mjs
var _c0 = ["*"];
var BarComponent = class BarComponent2 {
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
    this.ɵfac = function BarComponent_Factory(t) {
      return new (t || BarComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: BarComponent2,
      selectors: [["ui5-bar"]],
      inputs: {
        design: "design"
      },
      exportAs: ["ui5Bar"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function BarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
BarComponent = __decorate([ProxyInputs(["design"]), __metadata("design:paramtypes", [])], BarComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-bar",
      template: "<ng-content></ng-content>",
      inputs: ["design"],
      exportAs: "ui5Bar"
    }]
  }], () => [], null);
})();

export {
  BarComponent
};
//# sourceMappingURL=chunk-CUVYGCFM.js.map
