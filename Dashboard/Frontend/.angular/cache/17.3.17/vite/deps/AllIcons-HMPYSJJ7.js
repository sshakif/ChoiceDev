import {
  registerIconLoader
} from "./chunk-XOBH4D6P.js";
import "./chunk-22ISB74T.js";
import "./chunk-FE3LTLOF.js";
import "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-icons-business-suite/dist/json-imports/Icons.js
var loadIconsBundle = (collection) => __async(void 0, null, function* () {
  let iconData;
  if (collection === "business-suite-v1") {
    iconData = (yield import(
      /* webpackChunkName: "ui5-webcomponents-sap-icons-business-suite-v1" */
      "./SAP-icons-business-suite-6SPLP4NP.js"
    )).default;
  } else {
    iconData = (yield import(
      /* webpackChunkName: "ui5-webcomponents-sap-icons-business-suite-v2" */
      "./SAP-icons-business-suite-PLQICPPK.js"
    )).default;
  }
  if (typeof iconData === "string" && iconData.endsWith(".json")) {
    throw new Error('[icons-business-suite] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.');
  }
  return iconData;
});
var registerLoaders = () => {
  registerIconLoader("business-suite-v1", loadIconsBundle);
  registerIconLoader("business-suite-v2", loadIconsBundle);
};
registerLoaders();
//# sourceMappingURL=AllIcons-HMPYSJJ7.js.map
