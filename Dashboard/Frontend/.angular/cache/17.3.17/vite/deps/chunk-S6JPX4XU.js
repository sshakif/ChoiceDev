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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-tab.mjs
var _c0 = ["*"];
var TabComponent = class TabComponent2 {
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
    this.ɵfac = function TabComponent_Factory(t) {
      return new (t || TabComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: TabComponent2,
      selectors: [["ui5-tab"]],
      inputs: {
        text: "text",
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        additionalText: "additionalText",
        icon: "icon",
        design: "design",
        selected: [InputFlags.HasDecoratorInputTransform, "selected", "selected", booleanAttribute]
      },
      exportAs: ["ui5Tab"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TabComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
TabComponent = __decorate([ProxyInputs(["text", "disabled", "additionalText", "icon", "design", "selected"]), __metadata("design:paramtypes", [])], TabComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-tab",
      template: "<ng-content></ng-content>",
      inputs: ["text", "disabled", "additionalText", "icon", "design", "selected"],
      exportAs: "ui5Tab"
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  TabComponent
};
//# sourceMappingURL=chunk-S6JPX4XU.js.map
