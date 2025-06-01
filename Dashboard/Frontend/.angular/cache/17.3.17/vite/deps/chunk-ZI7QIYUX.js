import {
  ProxyInputs
} from "./chunk-D75HI4BO.js";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  InputFlags,
  NgZone,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-JM6UQCOA.js";
import {
  __decorate,
  __metadata
} from "./chunk-YEKEGRK3.js";

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-busy-indicator.mjs
var _c0 = ["*"];
var BusyIndicatorComponent = class BusyIndicatorComponent2 {
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
    this.ɵfac = function BusyIndicatorComponent_Factory(t) {
      return new (t || BusyIndicatorComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: BusyIndicatorComponent2,
      selectors: [["ui5-busy-indicator"]],
      inputs: {
        text: "text",
        size: "size",
        active: [InputFlags.HasDecoratorInputTransform, "active", "active", booleanAttribute],
        delay: "delay",
        textPlacement: "textPlacement"
      },
      exportAs: ["ui5BusyIndicator"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function BusyIndicatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
BusyIndicatorComponent = __decorate([ProxyInputs(["text", "size", "active", "delay", "textPlacement"]), __metadata("design:paramtypes", [])], BusyIndicatorComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusyIndicatorComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-busy-indicator",
      template: "<ng-content></ng-content>",
      inputs: ["text", "size", "active", "delay", "textPlacement"],
      exportAs: "ui5BusyIndicator"
    }]
  }], () => [], {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  BusyIndicatorComponent
};
//# sourceMappingURL=chunk-ZI7QIYUX.js.map
