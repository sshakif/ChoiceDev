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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-switch.mjs
var _c0 = ["*"];
var SwitchComponent = class SwitchComponent2 {
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
    this.ɵfac = function SwitchComponent_Factory(t) {
      return new (t || SwitchComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: SwitchComponent2,
      selectors: [["ui5-switch"]],
      hostBindings: function SwitchComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function SwitchComponent_change_HostBindingHandler() {
            return ctx._cva == null ? null : ctx._cva.onChange == null ? null : ctx._cva.onChange(ctx.cvaValue);
          });
        }
      },
      inputs: {
        design: "design",
        checked: [InputFlags.HasDecoratorInputTransform, "checked", "checked", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        textOn: "textOn",
        textOff: "textOff",
        accessibleName: "accessibleName",
        accessibleNameRef: "accessibleNameRef",
        tooltip: "tooltip",
        required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
        name: "name"
      },
      outputs: {
        ui5Change: "ui5Change"
      },
      exportAs: ["ui5Switch"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵHostDirectivesFeature([GenericControlValueAccessor]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SwitchComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
SwitchComponent = __decorate([ProxyInputs(["design", "checked", "disabled", "textOn", "textOff", "accessibleName", "accessibleNameRef", "tooltip", "required", "name"]), ProxyOutputs(["change: ui5Change"]), __metadata("design:paramtypes", [])], SwitchComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-switch",
      template: "<ng-content></ng-content>",
      inputs: ["design", "checked", "disabled", "textOn", "textOff", "accessibleName", "accessibleNameRef", "tooltip", "required", "name"],
      outputs: ["ui5Change"],
      exportAs: "ui5Switch",
      hostDirectives: [GenericControlValueAccessor],
      host: {
        "(change)": "_cva?.onChange?.(cvaValue);"
      }
    }]
  }], () => [], {
    checked: [{
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
  SwitchComponent
};
//# sourceMappingURL=chunk-X5LSSDBI.js.map
