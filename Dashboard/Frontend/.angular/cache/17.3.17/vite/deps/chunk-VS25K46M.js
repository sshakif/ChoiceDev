// node_modules/@ui5/webcomponents-base/dist/util/getNormalizedTarget.js
var getNormalizedTarget = (target) => {
  let element = target;
  if (target.shadowRoot && target.shadowRoot.activeElement) {
    element = target.shadowRoot.activeElement;
  }
  return element;
};
var getNormalizedTarget_default = getNormalizedTarget;

// node_modules/@ui5/webcomponents-base/dist/util/debounce.js
var debounceInterval = null;
var debounce = (fn, delay) => {
  debounceInterval && clearTimeout(debounceInterval);
  debounceInterval = setTimeout(() => {
    debounceInterval = null;
    fn();
  }, delay);
};
var debounce_default = debounce;

// node_modules/@ui5/webcomponents-base/dist/util/isElementInView.js
var isElementInView = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
};
var isElementInView_default = isElementInView;

export {
  getNormalizedTarget_default,
  debounce_default,
  isElementInView_default
};
//# sourceMappingURL=chunk-VS25K46M.js.map
