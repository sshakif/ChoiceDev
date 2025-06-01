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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-label.mjs
var _c0 = ["*"];
var LabelComponent = class LabelComponent2 {
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
    this.ɵfac = function LabelComponent_Factory(t) {
      return new (t || LabelComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: LabelComponent2,
      selectors: [["ui5-label"]],
      inputs: {
        for: "for",
        showColon: [InputFlags.HasDecoratorInputTransform, "showColon", "showColon", booleanAttribute],
        required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
        wrappingType: "wrappingType"
      },
      exportAs: ["ui5Label"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function LabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
LabelComponent = __decorate([ProxyInputs(["for", "showColon", "required", "wrappingType"]), __metadata("design:paramtypes", [])], LabelComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-label",
      template: "<ng-content></ng-content>",
      inputs: ["for", "showColon", "required", "wrappingType"],
      exportAs: "ui5Label"
    }]
  }], () => [], {
    showColon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  LabelComponent
};
//# sourceMappingURL=chunk-L2UQ4SLC.js.map
