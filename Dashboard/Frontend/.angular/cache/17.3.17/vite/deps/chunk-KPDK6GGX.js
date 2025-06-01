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

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-main-tab-container.mjs
var _c0 = ["*"];
var TabContainerComponent = class TabContainerComponent2 {
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
    this.ɵfac = function TabContainerComponent_Factory(t) {
      return new (t || TabContainerComponent2)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: TabContainerComponent2,
      selectors: [["ui5-tabcontainer"]],
      inputs: {
        collapsed: [InputFlags.HasDecoratorInputTransform, "collapsed", "collapsed", booleanAttribute],
        tabLayout: "tabLayout",
        overflowMode: "overflowMode",
        headerBackgroundDesign: "headerBackgroundDesign",
        contentBackgroundDesign: "contentBackgroundDesign"
      },
      outputs: {
        ui5TabSelect: "ui5TabSelect",
        ui5MoveOver: "ui5MoveOver",
        ui5Move: "ui5Move"
      },
      exportAs: ["ui5Tabcontainer"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TabContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
TabContainerComponent = __decorate([ProxyInputs(["collapsed", "tabLayout", "overflowMode", "headerBackgroundDesign", "contentBackgroundDesign"]), ProxyOutputs(["tab-select: ui5TabSelect", "move-over: ui5MoveOver", "move: ui5Move"]), __metadata("design:paramtypes", [])], TabContainerComponent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabContainerComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ui5-tabcontainer",
      template: "<ng-content></ng-content>",
      inputs: ["collapsed", "tabLayout", "overflowMode", "headerBackgroundDesign", "contentBackgroundDesign"],
      outputs: ["ui5TabSelect", "ui5MoveOver", "ui5Move"],
      exportAs: "ui5Tabcontainer"
    }]
  }], () => [], {
    collapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

export {
  TabContainerComponent
};
//# sourceMappingURL=chunk-KPDK6GGX.js.map
