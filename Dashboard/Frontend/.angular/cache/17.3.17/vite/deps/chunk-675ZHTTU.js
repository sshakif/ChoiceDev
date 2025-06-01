import {
  init_Themes,
  registerThemePropertiesLoader
} from "./chunk-D5EWR56T.js";
import {
  __async,
  __commonJS
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents/dist/generated/json-imports/Themes.js
var require_Themes = __commonJS({
  "node_modules/@ui5/webcomponents/dist/generated/json-imports/Themes.js"(exports) {
    init_Themes();
    var loadThemeProperties = (themeName) => __async(exports, null, function* () {
      switch (themeName) {
        case "sap_fiori_3":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-fiori_3-parameters-bundle" */
            "./parameters-bundle.css-CTTX5H7I.js"
          )).default;
        case "sap_fiori_3_dark":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-fiori_3_dark-parameters-bundle" */
            "./parameters-bundle.css-UEFEHGDV.js"
          )).default;
        case "sap_fiori_3_hcb":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-fiori_3_hcb-parameters-bundle" */
            "./parameters-bundle.css-K63FTTLM.js"
          )).default;
        case "sap_fiori_3_hcw":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-fiori_3_hcw-parameters-bundle" */
            "./parameters-bundle.css-Y2N56LQP.js"
          )).default;
        case "sap_horizon":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-horizon-parameters-bundle" */
            "./parameters-bundle.css-FRQTFN33.js"
          )).default;
        case "sap_horizon_dark":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-horizon_dark-parameters-bundle" */
            "./parameters-bundle.css-L4J6ZA4D.js"
          )).default;
        case "sap_horizon_dark_exp":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-horizon_dark_exp-parameters-bundle" */
            "./parameters-bundle.css-PRF3F4QE.js"
          )).default;
        case "sap_horizon_exp":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-horizon_exp-parameters-bundle" */
            "./parameters-bundle.css-BCOSYTG4.js"
          )).default;
        case "sap_horizon_hcb":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-horizon_hcb-parameters-bundle" */
            "./parameters-bundle.css-3GXDBWCZ.js"
          )).default;
        case "sap_horizon_hcb_exp":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-horizon_hcb_exp-parameters-bundle" */
            "./parameters-bundle.css-OWPAYISL.js"
          )).default;
        case "sap_horizon_hcw":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-horizon_hcw-parameters-bundle" */
            "./parameters-bundle.css-CIWUID7I.js"
          )).default;
        case "sap_horizon_hcw_exp":
          return (yield import(
            /* webpackChunkName: "ui5-webcomponents-sap-horizon_hcw_exp-parameters-bundle" */
            "./parameters-bundle.css-7XWMP6CC.js"
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
    ["sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_dark_exp", "sap_horizon_exp", "sap_horizon_hcb", "sap_horizon_hcb_exp", "sap_horizon_hcw", "sap_horizon_hcw_exp"].forEach((themeName) => registerThemePropertiesLoader("@ui5/webcomponents", themeName, loadAndCheck));
  }
});

export {
  require_Themes
};
//# sourceMappingURL=chunk-675ZHTTU.js.map
