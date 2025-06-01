import {
  ProxyInputs,
  ProxyOutputs
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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-button.mjs
var _c0 = ["*"];
var ButtonComponent = class ButtonComponent2 {
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
    this.ɵfac = function ButtonComponent_Factory(t) {
      return new (t || ButtonComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: ButtonComponent2,
      selectors: [["ui5-button"]],
      inputs: {
        design: "design",
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        icon: "icon",
        endIcon: "endIcon",
        submits: [InputFlags.HasDecoratorInputTransform, "submits", "submits", booleanAttribute],
        tooltip: "tooltip",
        accessibleName: "accessibleName",
        accessibleNameRef: "accessibleNameRef",
        accessibilityAttributes: "accessibilityAttributes",
        type: "type",
        accessibleRole: "accessibleRole"
      },
      outputs: {
        ui5Click: "ui5Click"
      },
      exportAs: ["ui5Button"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
ButtonComponent = __decorate([ProxyInputs(["design", "disabled", "icon", "endIcon", "submits", "tooltip", "accessibleName", "accessibleNameRef", "accessibilityAttributes", "type", "accessibleRole"]), ProxyOutputs(["click: ui5Click"]), __metadata("design:paramtypes", [])], ButtonComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-button",
      template: "<ng-content></ng-content>",
      inputs: ["design", "disabled", "icon", "endIcon", "submits", "tooltip", "accessibleName", "accessibleNameRef", "accessibilityAttributes", "type", "accessibleRole"],
      outputs: ["ui5Click"],
      exportAs: "ui5Button"
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    submits: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  ButtonComponent
};
//# sourceMappingURL=chunk-JDVI2JVR.js.map
