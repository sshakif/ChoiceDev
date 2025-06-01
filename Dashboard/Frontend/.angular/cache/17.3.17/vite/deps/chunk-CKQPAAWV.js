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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-toolbar.mjs
var _c0 = ["*"];
var ToolbarComponent = class ToolbarComponent2 {
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
    this.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: ToolbarComponent2,
      selectors: [["ui5-toolbar"]],
      inputs: {
        alignContent: "alignContent",
        accessibleName: "accessibleName",
        accessibleNameRef: "accessibleNameRef",
        design: "design"
      },
      exportAs: ["ui5Toolbar"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
ToolbarComponent = __decorate([ProxyInputs(["alignContent", "accessibleName", "accessibleNameRef", "design"]), __metadata("design:paramtypes", [])], ToolbarComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-toolbar",
      template: "<ng-content></ng-content>",
      inputs: ["alignContent", "accessibleName", "accessibleNameRef", "design"],
      exportAs: "ui5Toolbar"
    }]
  }], () => [], null);
})();

export {
  ToolbarComponent
};
//# sourceMappingURL=chunk-CKQPAAWV.js.map
