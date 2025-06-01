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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-icon.mjs
var _c0 = ["*"];
var IconComponent = class IconComponent2 {
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
    this.ɵfac = function IconComponent_Factory(t) {
      return new (t || IconComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: IconComponent2,
      selectors: [["ui5-icon"]],
      inputs: {
        design: "design",
        name: "name",
        accessibleName: "accessibleName",
        showTooltip: [InputFlags.HasDecoratorInputTransform, "showTooltip", "showTooltip", booleanAttribute],
        mode: "mode"
      },
      exportAs: ["ui5Icon"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function IconComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
IconComponent = __decorate([ProxyInputs(["design", "name", "accessibleName", "showTooltip", "mode"]), __metadata("design:paramtypes", [])], IconComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-icon",
      template: "<ng-content></ng-content>",
      inputs: ["design", "name", "accessibleName", "showTooltip", "mode"],
      exportAs: "ui5Icon"
    }]
  }], () => [], {
    showTooltip: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  IconComponent
};
//# sourceMappingURL=chunk-TNUODRTN.js.map
