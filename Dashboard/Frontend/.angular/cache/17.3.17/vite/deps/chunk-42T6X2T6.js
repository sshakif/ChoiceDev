import {
  NG_VALUE_ACCESSOR
} from "./chunk-UQ6VCNE3.js";
import {
  Directive,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-JM6UQCOA.js";

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-generic-cva.mjs
var GenericControlValueAccessor = class _GenericControlValueAccessor {
  constructor() {
    this.setDisabledState = (isDisabled) => {
      this.host.element["disabled"] = isDisabled;
    };
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  writeValue(val) {
    this.host.cvaValue = val;
  }
  static {
    this.ɵfac = function GenericControlValueAccessor_Factory(t) {
      return new (t || _GenericControlValueAccessor)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GenericControlValueAccessor,
      selectors: [["", "noop", ""]],
      hostBindings: function GenericControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function GenericControlValueAccessor_focusout_HostBindingHandler() {
            return ctx.onTouched == null ? null : ctx.onTouched();
          });
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: _GenericControlValueAccessor,
        multi: true
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenericControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "[noop]",
      standalone: true,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: GenericControlValueAccessor,
        multi: true
      }],
      host: {
        "(focusout)": "onTouched?.()"
      }
    }]
  }], null, null);
})();

export {
  GenericControlValueAccessor
};
//# sourceMappingURL=chunk-42T6X2T6.js.map
