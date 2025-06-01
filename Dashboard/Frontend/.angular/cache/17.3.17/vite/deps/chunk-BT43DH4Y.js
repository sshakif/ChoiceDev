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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-input.mjs
var _c0 = ["*"];
var InputComponent = class InputComponent2 {
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
    this.ɵfac = function InputComponent_Factory(t) {
      return new (t || InputComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: InputComponent2,
      selectors: [["ui5-input"]],
      hostBindings: function InputComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function InputComponent_change_HostBindingHandler() {
            return ctx._cva == null ? null : ctx._cva.onChange == null ? null : ctx._cva.onChange(ctx.cvaValue);
          })("input", function InputComponent_input_HostBindingHandler() {
            return ctx._cva == null ? null : ctx._cva.onChange == null ? null : ctx._cva.onChange(ctx.cvaValue);
          });
        }
      },
      inputs: {
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        placeholder: "placeholder",
        readonly: [InputFlags.HasDecoratorInputTransform, "readonly", "readonly", booleanAttribute],
        required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
        noTypeahead: [InputFlags.HasDecoratorInputTransform, "noTypeahead", "noTypeahead", booleanAttribute],
        type: "type",
        value: "value",
        valueState: "valueState",
        name: "name",
        showSuggestions: [InputFlags.HasDecoratorInputTransform, "showSuggestions", "showSuggestions", booleanAttribute],
        maxlength: "maxlength",
        accessibleName: "accessibleName",
        accessibleNameRef: "accessibleNameRef",
        showClearIcon: [InputFlags.HasDecoratorInputTransform, "showClearIcon", "showClearIcon", booleanAttribute],
        open: [InputFlags.HasDecoratorInputTransform, "open", "open", booleanAttribute]
      },
      outputs: {
        ui5Change: "ui5Change",
        ui5Input: "ui5Input",
        ui5SelectionChange: "ui5SelectionChange",
        ui5Open: "ui5Open",
        ui5Close: "ui5Close"
      },
      exportAs: ["ui5Input"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵHostDirectivesFeature([GenericControlValueAccessor]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function InputComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
InputComponent = __decorate([ProxyInputs(["disabled", "placeholder", "readonly", "required", "noTypeahead", "type", "value", "valueState", "name", "showSuggestions", "maxlength", "accessibleName", "accessibleNameRef", "showClearIcon", "open"]), ProxyOutputs(["change: ui5Change", "input: ui5Input", "selection-change: ui5SelectionChange", "open: ui5Open", "close: ui5Close"]), __metadata("design:paramtypes", [])], InputComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-input",
      template: "<ng-content></ng-content>",
      inputs: ["disabled", "placeholder", "readonly", "required", "noTypeahead", "type", "value", "valueState", "name", "showSuggestions", "maxlength", "accessibleName", "accessibleNameRef", "showClearIcon", "open"],
      outputs: ["ui5Change", "ui5Input", "ui5SelectionChange", "ui5Open", "ui5Close"],
      exportAs: "ui5Input",
      hostDirectives: [GenericControlValueAccessor],
      host: {
        "(change)": "_cva?.onChange?.(cvaValue);",
        "(input)": "_cva?.onChange?.(cvaValue);"
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
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    noTypeahead: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showSuggestions: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClearIcon: [{
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
  InputComponent
};
//# sourceMappingURL=chunk-BT43DH4Y.js.map
