import {
  GenericControlValueAccessor
} from "./chunk-42T6X2T6.js";
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
  ɵɵHostDirectivesFeature,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-JM6UQCOA.js";
import {
  __decorate,
  __metadata
} from "./chunk-YEKEGRK3.js";

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-check-box.mjs
var _c0 = ["*"];
var CheckBoxComponent = class CheckBoxComponent2 {
  get element() {
    return this.elementRef.nativeElement;
  }
  set cvaValue(val) {
    this.element.checked = val;
    this.cdr.detectChanges();
  }
  get cvaValue() {
    return this.element.checked;
  }
  constructor() {
    this.elementRef = inject(ElementRef);
    this.zone = inject(NgZone);
    this.cdr = inject(ChangeDetectorRef);
    this._cva = inject(GenericControlValueAccessor);
    this.cdr.detach();
    this._cva.host = this;
  }
  static {
    this.ɵfac = function CheckBoxComponent_Factory(t) {
      return new (t || CheckBoxComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: CheckBoxComponent2,
      selectors: [["ui5-checkbox"]],
      hostBindings: function CheckBoxComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function CheckBoxComponent_change_HostBindingHandler() {
            return ctx._cva == null ? null : ctx._cva.onChange == null ? null : ctx._cva.onChange(ctx.cvaValue);
          });
        }
      },
      inputs: {
        accessibleNameRef: "accessibleNameRef",
        accessibleName: "accessibleName",
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        readonly: [InputFlags.HasDecoratorInputTransform, "readonly", "readonly", booleanAttribute],
        displayOnly: [InputFlags.HasDecoratorInputTransform, "displayOnly", "displayOnly", booleanAttribute],
        required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
        indeterminate: [InputFlags.HasDecoratorInputTransform, "indeterminate", "indeterminate", booleanAttribute],
        checked: [InputFlags.HasDecoratorInputTransform, "checked", "checked", booleanAttribute],
        text: "text",
        valueState: "valueState",
        wrappingType: "wrappingType",
        name: "name"
      },
      outputs: {
        ui5Change: "ui5Change"
      },
      exportAs: ["ui5Checkbox"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵHostDirectivesFeature([GenericControlValueAccessor]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function CheckBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
CheckBoxComponent = __decorate([ProxyInputs(["accessibleNameRef", "accessibleName", "disabled", "readonly", "displayOnly", "required", "indeterminate", "checked", "text", "valueState", "wrappingType", "name"]), ProxyOutputs(["change: ui5Change"]), __metadata("design:paramtypes", [])], CheckBoxComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckBoxComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-checkbox",
      template: "<ng-content></ng-content>",
      inputs: ["accessibleNameRef", "accessibleName", "disabled", "readonly", "displayOnly", "required", "indeterminate", "checked", "text", "valueState", "wrappingType", "name"],
      outputs: ["ui5Change"],
      exportAs: "ui5Checkbox",
      hostDirectives: [GenericControlValueAccessor],
      host: {
        "(change)": "_cva?.onChange?.(cvaValue);"
      }
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayOnly: [{
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
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  CheckBoxComponent
};
//# sourceMappingURL=chunk-WVIR2XB3.js.map
