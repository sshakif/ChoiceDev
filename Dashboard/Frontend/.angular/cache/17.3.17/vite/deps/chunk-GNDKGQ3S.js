import {
  isElementHidden_default
} from "./chunk-V3KTO444.js";

// node_modules/@ui5/webcomponents-base/dist/util/isElementTabbable.js
var isElementTabbable = (el) => {
  if (!el) {
    return false;
  }
  if (el.hasAttribute("data-sap-no-tab-ref")) {
    return false;
  }
  if (isElementHidden_default(el)) {
    return false;
  }
  const tabIndex = el.getAttribute("tabindex");
  if (tabIndex !== null && tabIndex !== void 0) {
    return parseInt(tabIndex) >= 0;
  }
  const nodeName = el.nodeName.toLowerCase();
  if (nodeName === "a" || /^(input|select|textarea|button|object)$/.test(nodeName)) {
    return !el.disabled;
  }
  return false;
};
var isElementTabbable_default = isElementTabbable;

// node_modules/@ui5/webcomponents-base/dist/util/TabbableElements.js
var getTabbableElements = (el) => {
  return getTabbables([...el.children]);
};
var getLastTabbableElement = (el) => {
  const tabbables = getTabbables([...el.children]);
  return tabbables.length ? tabbables[tabbables.length - 1] : null;
};
var getTabbables = (nodes, tabbables) => {
  const tabbableElements = tabbables || [];
  if (!nodes) {
    return tabbableElements;
  }
  nodes.forEach((currentNode) => {
    if (currentNode.nodeType === Node.TEXT_NODE || currentNode.nodeType === Node.COMMENT_NODE) {
      return;
    }
    const currentElement = currentNode;
    if (currentElement.hasAttribute("data-sap-no-tab-ref")) {
      return;
    }
    if (isElementTabbable_default(currentElement)) {
      tabbableElements.push(currentElement);
    }
    if (currentElement.tagName === "SLOT") {
      getTabbables(currentElement.assignedNodes(), tabbableElements);
    } else {
      const children = currentElement.shadowRoot ? currentElement.shadowRoot.children : currentElement.children;
      getTabbables([...children], tabbableElements);
    }
  });
  return tabbableElements;
};

export {
  getTabbableElements,
  getLastTabbableElement
};
//# sourceMappingURL=chunk-GNDKGQ3S.js.map
