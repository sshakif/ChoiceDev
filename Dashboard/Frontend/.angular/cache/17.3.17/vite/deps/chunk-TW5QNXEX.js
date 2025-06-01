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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-message-strip.mjs
var _c0 = ["*"];
var MessageStripComponent = class MessageStripComponent2 {
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
    this.ɵfac = function MessageStripComponent_Factory(t) {
      return new (t || MessageStripComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: MessageStripComponent2,
      selectors: [["ui5-message-strip"]],
      inputs: {
        design: "design",
        colorScheme: "colorScheme",
        hideIcon: [InputFlags.HasDecoratorInputTransform, "hideIcon", "hideIcon", booleanAttribute],
        hideCloseButton: [InputFlags.HasDecoratorInputTransform, "hideCloseButton", "hideCloseButton", booleanAttribute]
      },
      outputs: {
        ui5Close: "ui5Close"
      },
      exportAs: ["ui5MessageStrip"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MessageStripComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
MessageStripComponent = __decorate([ProxyInputs(["design", "colorScheme", "hideIcon", "hideCloseButton"]), ProxyOutputs(["close: ui5Close"]), __metadata("design:paramtypes", [])], MessageStripComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageStripComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-message-strip",
      template: "<ng-content></ng-content>",
      inputs: ["design", "colorScheme", "hideIcon", "hideCloseButton"],
      outputs: ["ui5Close"],
      exportAs: "ui5MessageStrip"
    }]
  }], () => [], {
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideCloseButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  MessageStripComponent
};
//# sourceMappingURL=chunk-TW5QNXEX.js.map
