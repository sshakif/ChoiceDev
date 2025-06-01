import {
  html,
  svg
} from "./chunk-DMMFI3C7.js";
import {
  registerFeature
} from "./chunk-FE3LTLOF.js";

// node_modules/lit-html/development/static.js
var brand = Symbol.for("");
var unwrapStaticValue = (value) => {
  if ((value === null || value === void 0 ? void 0 : value.r) !== brand) {
    return void 0;
  }
  return value === null || value === void 0 ? void 0 : value["_$litStatic$"];
};
var unsafeStatic = (value) => ({
  ["_$litStatic$"]: value,
  r: brand
});
var stringsCache = /* @__PURE__ */ new Map();
var withStatic = (coreTag) => (strings, ...values) => {
  const l = values.length;
  let staticValue;
  let dynamicValue;
  const staticStrings = [];
  const dynamicValues = [];
  let i = 0;
  let hasStatics = false;
  let s;
  while (i < l) {
    s = strings[i];
    while (i < l && (dynamicValue = values[i], staticValue = unwrapStaticValue(dynamicValue)) !== void 0) {
      s += staticValue + strings[++i];
      hasStatics = true;
    }
    if (i !== l) {
      dynamicValues.push(dynamicValue);
    }
    staticStrings.push(s);
    i++;
  }
  if (i === l) {
    staticStrings.push(strings[l]);
  }
  if (hasStatics) {
    const key = staticStrings.join("$$lit$$");
    strings = stringsCache.get(key);
    if (strings === void 0) {
      staticStrings.raw = staticStrings;
      stringsCache.set(key, strings = staticStrings);
    }
    values = dynamicValues;
  }
  return coreTag(strings, ...values);
};
var html2 = withStatic(html);
var svg2 = withStatic(svg);

// node_modules/@ui5/webcomponents-base/dist/CustomElementsScope.js
var LitStatic = class {
};
LitStatic.html = html2;
LitStatic.svg = svg2;
LitStatic.unsafeStatic = unsafeStatic;
registerFeature("LitStatic", LitStatic);
/*! Bundled license information:

lit-html/development/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-I5ARTSR5.js.map
