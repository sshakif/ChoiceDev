import {
  fromEvent
} from "./chunk-WU3G5XZJ.js";
import {
  map
} from "./chunk-YEKEGRK3.js";

// node_modules/@ui5/webcomponents-ngx/fesm2022/ui5-webcomponents-ngx-utils.mjs
function ProxyInputs(inputNames) {
  return (cls) => {
    inputNames.forEach((inputName) => {
      Object.defineProperty(cls.prototype, inputName, {
        get() {
          return this.element[inputName];
        },
        set(val) {
          this.zone.runOutsideAngular(() => this.element[inputName] = val);
        }
      });
    });
  };
}
function ProxyOutputs(outputNames) {
  return (cls) => {
    outputNames.forEach((outputName) => {
      let [eventName, publicName] = outputName.split(":").map((s) => s.trim());
      publicName = publicName || eventName;
      Object.defineProperty(cls.prototype, publicName, {
        get() {
          return fromEvent(this.element, eventName).pipe(map((e) => e.detail));
        }
      });
    });
  };
}

export {
  ProxyInputs,
  ProxyOutputs
};
//# sourceMappingURL=chunk-D75HI4BO.js.map
