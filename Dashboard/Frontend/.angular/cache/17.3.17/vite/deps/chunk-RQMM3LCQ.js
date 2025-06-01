import {
  getSharedResource_default,
  init_getSharedResource
} from "./chunk-D5EWR56T.js";

// node_modules/@ui5/webcomponents/dist/ToolbarRegistry.js
init_getSharedResource();
var registry = getSharedResource_default("ToolbarItem.registry", /* @__PURE__ */ new Map());
var registerToolbarItem = (ElementClass) => {
  registry.set(ElementClass.name, ElementClass);
};
var getRegisteredToolbarItem = (name) => {
  if (!registry.has(name)) {
    throw new Error(`No template found for ${name}`);
  }
  return registry.get(name);
};
var getRegisteredStyles = () => {
  return [...registry.values()].map((ElementClass) => ElementClass.styles);
};
var getRegisteredDependencies = () => {
  return [...registry.values()].map((ElementClass) => ElementClass.dependencies).flat();
};

export {
  registerToolbarItem,
  getRegisteredToolbarItem,
  getRegisteredStyles,
  getRegisteredDependencies
};
//# sourceMappingURL=chunk-RQMM3LCQ.js.map
