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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-dialog.mjs
var _c0 = ["*"];
var DialogComponent = class DialogComponent2 {
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
    this.ɵfac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: DialogComponent2,
      selectors: [["ui5-dialog"]],
      inputs: {
        initialFocus: "initialFocus",
        preventFocusRestore: [InputFlags.HasDecoratorInputTransform, "preventFocusRestore", "preventFocusRestore", booleanAttribute],
        accessibleName: "accessibleName",
        accessibleNameRef: "accessibleNameRef",
        accessibleRole: "accessibleRole",
        preventInitialFocus: [InputFlags.HasDecoratorInputTransform, "preventInitialFocus", "preventInitialFocus", booleanAttribute],
        open: [InputFlags.HasDecoratorInputTransform, "open", "open", booleanAttribute],
        headerText: "headerText",
        stretch: [InputFlags.HasDecoratorInputTransform, "stretch", "stretch", booleanAttribute],
        draggable: [InputFlags.HasDecoratorInputTransform, "draggable", "draggable", booleanAttribute],
        resizable: [InputFlags.HasDecoratorInputTransform, "resizable", "resizable", booleanAttribute],
        state: "state"
      },
      outputs: {
        ui5BeforeOpen: "ui5BeforeOpen",
        ui5Open: "ui5Open",
        ui5BeforeClose: "ui5BeforeClose",
        ui5Close: "ui5Close"
      },
      exportAs: ["ui5Dialog"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
DialogComponent = __decorate([ProxyInputs(["initialFocus", "preventFocusRestore", "accessibleName", "accessibleNameRef", "accessibleRole", "preventInitialFocus", "open", "headerText", "stretch", "draggable", "resizable", "state"]), ProxyOutputs(["before-open: ui5BeforeOpen", "open: ui5Open", "before-close: ui5BeforeClose", "close: ui5Close"]), __metadata("design:paramtypes", [])], DialogComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-dialog",
      template: "<ng-content></ng-content>",
      inputs: ["initialFocus", "preventFocusRestore", "accessibleName", "accessibleNameRef", "accessibleRole", "preventInitialFocus", "open", "headerText", "stretch", "draggable", "resizable", "state"],
      outputs: ["ui5BeforeOpen", "ui5Open", "ui5BeforeClose", "ui5Close"],
      exportAs: "ui5Dialog"
    }]
  }], () => [], {
    preventFocusRestore: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventInitialFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    open: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    draggable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resizable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  DialogComponent
};
//# sourceMappingURL=chunk-LFSYODQR.js.map
