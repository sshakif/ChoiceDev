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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-toolbar-button.mjs
var _c0 = ["*"];
var ToolbarButtonComponent = class ToolbarButtonComponent2 {
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
    this.ɵfac = function ToolbarButtonComponent_Factory(t) {
      return new (t || ToolbarButtonComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: ToolbarButtonComponent2,
      selectors: [["ui5-toolbar-button"]],
      inputs: {
        overflowPriority: "overflowPriority",
        preventOverflowClosing: [InputFlags.HasDecoratorInputTransform, "preventOverflowClosing", "preventOverflowClosing", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        design: "design",
        icon: "icon",
        endIcon: "endIcon",
        tooltip: "tooltip",
        accessibleName: "accessibleName",
        accessibleNameRef: "accessibleNameRef",
        accessibilityAttributes: "accessibilityAttributes",
        text: "text",
        width: "width"
      },
      outputs: {
        ui5Click: "ui5Click"
      },
      exportAs: ["ui5ToolbarButton"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ToolbarButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
ToolbarButtonComponent = __decorate([ProxyInputs(["overflowPriority", "preventOverflowClosing", "disabled", "design", "icon", "endIcon", "tooltip", "accessibleName", "accessibleNameRef", "accessibilityAttributes", "text", "width"]), ProxyOutputs(["click: ui5Click"]), __metadata("design:paramtypes", [])], ToolbarButtonComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarButtonComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-toolbar-button",
      template: "<ng-content></ng-content>",
      inputs: ["overflowPriority", "preventOverflowClosing", "disabled", "design", "icon", "endIcon", "tooltip", "accessibleName", "accessibleNameRef", "accessibilityAttributes", "text", "width"],
      outputs: ["ui5Click"],
      exportAs: "ui5ToolbarButton"
    }]
  }], () => [], {
    preventOverflowClosing: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  ToolbarButtonComponent
};
//# sourceMappingURL=chunk-JMIKTS2T.js.map
