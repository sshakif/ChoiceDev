import {
  init_Themes,
  registerThemePropertiesLoader
} from "./chunk-D5EWR56T.js";
import {
  __async,
  __commonJS
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-theming/dist/generated/json-imports/Themes.js
var require_Themes = __commonJS({
  "node_modules/@ui5/webcomponents-theming/dist/generated/json-imports/Themes.js"(exports) {
    init_Themes();
    var loadThemeProperties = (themeName) => __async(exports, null, function* () {
      switch (themeName) {
        case "sap_fiori_3":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3-parameters-bundle" */
            "./parameters-bundle.css-6RZV6UIM.js"
          )).default;
        case "sap_fiori_3_dark":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3_dark-parameters-bundle" */
            "./parameters-bundle.css-YP35OCX6.js"
          )).default;
        case "sap_fiori_3_hcb":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3_hcb-parameters-bundle" */
            "./parameters-bundle.css-6O67XX4S.js"
          )).default;
        case "sap_fiori_3_hcw":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3_hcw-parameters-bundle" */
            "./parameters-bundle.css-DOZUDR45.js"
          )).default;
        case "sap_horizon":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-horizon-parameters-bundle" */
            "./parameters-bundle.css-VKCFYRQU.js"
          )).default;
        case "sap_horizon_dark":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_dark-parameters-bundle" */
            "./parameters-bundle.css-COSNYNQ3.js"
          )).default;
        case "sap_horizon_dark_exp":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_dark_exp-parameters-bundle" */
            "./parameters-bundle.css-CMSCH7CL.js"
          )).default;
        case "sap_horizon_exp":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_exp-parameters-bundle" */
            "./parameters-bundle.css-WO7DFVEZ.js"
          )).default;
        case "sap_horizon_hcb":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcb-parameters-bundle" */
            "./parameters-bundle.css-S72BHAOA.js"
          )).default;
        case "sap_horizon_hcb_exp":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcb_exp-parameters-bundle" */
            "./parameters-bundle.css-FWPX4LXZ.js"
          )).default;
        case "sap_horizon_hcw":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcw-parameters-bundle" */
            "./parameters-bundle.css-QNUUCPTG.js"
          )).default;
        case "sap_horizon_hcw_exp":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcw_exp-parameters-bundle" */
            "./parameters-bundle.css-FPS5QAPQ.js"
          )).default;
        default:
          throw "unknown theme";
      }
    });
    var loadAndCheck = (themeName) => __async(exports, null, function* () {
      const data = yield loadThemeProperties(themeName);
      if (typeof data === "string" && data.endsWith(".json")) {
        throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
      }
      return data;
    });
    ["sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_dark_exp", "sap_horizon_exp", "sap_horizon_hcb", "sap_horizon_hcb_exp", "sap_horizon_hcw", "sap_horizon_hcw_exp"].forEach((themeName) => registerThemePropertiesLoader("@ui5/webcomponents-theming", themeName, loadAndCheck));
  }
});

export {
  require_Themes
};
//# sourceMappingURL=chunk-WZBUF25G.js.map
