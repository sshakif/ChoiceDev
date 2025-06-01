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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-date-picker.mjs
var _c0 = ["*"];
var DatePickerComponent = class DatePickerComponent2 {
  get element() {
    return this.elementRef.nativeElement;
  }
  set cvaValue(val) {
    this.element.value = val;
    this.cdr.detectChanges();
  }
  get cvaValue() {
    return this.element.value;
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
    this.ɵfac = function DatePickerComponent_Factory(t) {
      return new (t || DatePickerComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: DatePickerComponent2,
      selectors: [["ui5-date-picker"]],
      hostBindings: function DatePickerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function DatePickerComponent_change_HostBindingHandler() {
            return ctx._cva == null ? null : ctx._cva.onChange == null ? null : ctx._cva.onChange(ctx.cvaValue);
          })("input", function DatePickerComponent_input_HostBindingHandler() {
            return ctx._cva == null ? null : ctx._cva.onChange == null ? null : ctx._cva.onChange(ctx.cvaValue);
          });
        }
      },
      inputs: {
        primaryCalendarType: "primaryCalendarType",
        secondaryCalendarType: "secondaryCalendarType",
        formatPattern: "formatPattern",
        minDate: "minDate",
        maxDate: "maxDate",
        value: "value",
        valueState: "valueState",
        required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        readonly: [InputFlags.HasDecoratorInputTransform, "readonly", "readonly", booleanAttribute],
        placeholder: "placeholder",
        name: "name",
        hideWeekNumbers: [InputFlags.HasDecoratorInputTransform, "hideWeekNumbers", "hideWeekNumbers", booleanAttribute],
        open: [InputFlags.HasDecoratorInputTransform, "open", "open", booleanAttribute],
        accessibleName: "accessibleName",
        accessibleNameRef: "accessibleNameRef"
      },
      outputs: {
        ui5Change: "ui5Change",
        ui5Input: "ui5Input",
        ui5ValueStateChange: "ui5ValueStateChange"
      },
      exportAs: ["ui5DatePicker"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵHostDirectivesFeature([GenericControlValueAccessor]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function DatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
DatePickerComponent = __decorate([ProxyInputs(["primaryCalendarType", "secondaryCalendarType", "formatPattern", "minDate", "maxDate", "value", "valueState", "required", "disabled", "readonly", "placeholder", "name", "hideWeekNumbers", "open", "accessibleName", "accessibleNameRef"]), ProxyOutputs(["change: ui5Change", "input: ui5Input", "value-state-change: ui5ValueStateChange"]), __metadata("design:paramtypes", [])], DatePickerComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-date-picker",
      template: "<ng-content></ng-content>",
      inputs: ["primaryCalendarType", "secondaryCalendarType", "formatPattern", "minDate", "maxDate", "value", "valueState", "required", "disabled", "readonly", "placeholder", "name", "hideWeekNumbers", "open", "accessibleName", "accessibleNameRef"],
      outputs: ["ui5Change", "ui5Input", "ui5ValueStateChange"],
      exportAs: "ui5DatePicker",
      hostDirectives: [GenericControlValueAccessor],
      host: {
        "(change)": "_cva?.onChange?.(cvaValue);",
        "(input)": "_cva?.onChange?.(cvaValue);"
      }
    }]
  }], () => [], {
    required: [{
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
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideWeekNumbers: [{
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
    }]
  });
})();

export {
  DatePickerComponent
};
//# sourceMappingURL=chunk-TXJB6CKQ.js.map
