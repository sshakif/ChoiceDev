// node_modules/@ui5/webcomponents-base/dist/util/getActiveElement.js
var getActiveElement = () => {
  let element = document.activeElement;
  while (element && element.shadowRoot && element.shadowRoot.activeElement) {
    element = element.shadowRoot.activeElement;
  }
  return element;
};
var getActiveElement_default = getActiveElement;

// node_modules/@ui5/webcomponents-base/dist/util/isElementHidden.js
var isElementHidden = (el) => {
  if (el.nodeName === "SLOT") {
    return false;
  }
  return el.offsetWidth <= 0 && el.offsetHeight <= 0 || el.style && el.style.visibility === "hidden";
};
var isElementHidden_default = isElementHidden;

export {
  getActiveElement_default,
  isElementHidden_default
};
//# sourceMappingURL=chunk-V3KTO444.js.map
