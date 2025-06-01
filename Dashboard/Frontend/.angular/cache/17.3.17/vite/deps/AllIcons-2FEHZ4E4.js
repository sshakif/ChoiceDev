import {
  registerIconLoader
} from "./chunk-XOBH4D6P.js";
import "./chunk-22ISB74T.js";
import "./chunk-FE3LTLOF.js";
import "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-icons-tnt/dist/json-imports/Icons.js
var loadIconsBundle = (collection) => __async(void 0, null, function* () {
  let iconData;
  if (collection === "tnt-v3") {
    iconData = (yield import(
      /* webpackChunkName: "ui5-webcomponents-sap-icons-tnt-v3" */
      "./SAP-icons-TNT-NAQKBB6T.js"
    )).default;
  } else {
    iconData = (yield import(
      /* webpackChunkName: "ui5-webcomponents-sap-icons-tnt-v2" */
      "./SAP-icons-TNT-MV25OS2J.js"
    )).default;
  }
  if (typeof iconData === "string" && iconData.endsWith(".json")) {
    throw new Error('[icons-tnt] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.');
  }
  return iconData;
});
var registerLoaders = () => {
  registerIconLoader("tnt-v2", loadIconsBundle);
  registerIconLoader("tnt-v3", loadIconsBundle);
};
registerLoaders();
//# sourceMappingURL=AllIcons-2FEHZ4E4.js.map
