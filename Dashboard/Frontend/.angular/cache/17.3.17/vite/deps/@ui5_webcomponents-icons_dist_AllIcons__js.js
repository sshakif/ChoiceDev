import {
  registerIconLoader
} from "./chunk-XOBH4D6P.js";
import "./chunk-22ISB74T.js";
import "./chunk-FE3LTLOF.js";
import "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-icons/dist/json-imports/Icons.js
var loadIconsBundle = (collection) => __async(void 0, null, function* () {
  let iconData;
  if (collection === "SAP-icons-v5") {
    iconData = (yield import(
      /* webpackChunkName: "ui5-webcomponents-sap-icons-v5" */
      "./SAP-icons-7HB2VTV2.js"
    )).default;
  } else {
    iconData = (yield import(
      /* webpackChunkName: "ui5-webcomponents-sap-icons-v4" */
      "./SAP-icons-4DDSAYES.js"
    )).default;
  }
  if (typeof iconData === "string" && iconData.endsWith(".json")) {
    throw new Error('[icons] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.');
  }
  return iconData;
});
var registerLoaders = () => {
  registerIconLoader("SAP-icons-v4", loadIconsBundle);
  registerIconLoader("SAP-icons-v5", loadIconsBundle);
};
registerLoaders();
//# sourceMappingURL=@ui5_webcomponents-icons_dist_AllIcons__js.js.map
