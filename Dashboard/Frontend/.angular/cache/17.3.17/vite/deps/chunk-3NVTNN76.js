import {
  instanceOfUI5Element
} from "./chunk-V2NLQCH3.js";

// node_modules/@ui5/webcomponents-base/dist/delegate/ResizeHandler.js
var resizeObserver;
var observedElements = /* @__PURE__ */ new Map();
var getResizeObserver = () => {
  if (!resizeObserver) {
    resizeObserver = new window.ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        entries.forEach((entry) => {
          const callbacks = observedElements.get(entry.target);
          callbacks && Promise.all(callbacks.map((callback) => callback()));
        });
      });
    });
  }
  return resizeObserver;
};
var observe = (element, callback) => {
  const callbacks = observedElements.get(element) || [];
  if (!callbacks.length) {
    getResizeObserver().observe(element);
  }
  observedElements.set(element, [...callbacks, callback]);
};
var unobserve = (element, callback) => {
  const callbacks = observedElements.get(element) || [];
  if (callbacks.length === 0) {
    return;
  }
  const filteredCallbacks = callbacks.filter((fn) => fn !== callback);
  if (filteredCallbacks.length === 0) {
    getResizeObserver().unobserve(element);
    observedElements.delete(element);
  } else {
    observedElements.set(element, filteredCallbacks);
  }
};
var ResizeHandler = class {
  /**
   * @public
   * @param element UI5 Web Component or DOM Element to be observed
   * @param callback Callback to be executed
   */
  static register(element, callback) {
    let effectiveElement = element;
    if (instanceOfUI5Element(effectiveElement)) {
      effectiveElement = effectiveElement.getDomRef();
    }
    if (effectiveElement instanceof HTMLElement) {
      observe(effectiveElement, callback);
    } else {
      console.warn("Cannot register ResizeHandler for element", element);
    }
  }
  /**
   * @public
   * @param element UI5 Web Component or DOM Element to be unobserved
   * @param callback Callback to be removed
   */
  static deregister(element, callback) {
    let effectiveElement = element;
    if (instanceOfUI5Element(effectiveElement)) {
      effectiveElement = effectiveElement.getDomRef();
    }
    if (effectiveElement instanceof HTMLElement) {
      unobserve(effectiveElement, callback);
    } else {
      console.warn("Cannot deregister ResizeHandler for element", element);
    }
  }
};
var ResizeHandler_default = ResizeHandler;

export {
  ResizeHandler_default
};
//# sourceMappingURL=chunk-3NVTNN76.js.map
