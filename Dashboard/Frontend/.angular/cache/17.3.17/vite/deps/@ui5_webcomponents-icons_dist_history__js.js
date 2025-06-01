import {
  registerIcon
} from "./chunk-XOBH4D6P.js";
import "./chunk-22ISB74T.js";
import {
  isLegacyThemeFamilyAsync
} from "./chunk-FE3LTLOF.js";
import "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-icons/dist/v4/history.js
var name = "history";
var pathData = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-100-20-81.5-55T20 355.5 0 256t20-99.5T74.5 75 156 20 256 0zm0 480q46 0 87-17.5t71.5-48 48-71T480 256q0-46-17.5-87t-48-71.5-71.5-48T256 32q-47 0-87.5 17.5t-71 48-48 71.5T32 256q0 47 17.5 87.5t48 71 71 48T256 480zm144-224q6 0 11 4.5t5 11.5-5 11.5-11 4.5H224V144q0-16 16-16 6 0 11 4.5t5 11.5v112h144z";
var ltr = false;
var accData = null;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/history.js
var name2 = "history";
var pathData2 = "M254 0q53 0 100 20t82 54.5 55.5 81.5T512 256q0 54-20.5 100.5t-55.5 81-82 54.5-101 20q-45 0-86-14.5T92.5 457 35 395 2 317q-2-5-2-6.5V307q0-11 7.5-18t18.5-7q8 0 15 5.5t9 14.5q8 35 27.5 64.5T124 417t60 32.5 69 11.5q43 0 81-16t66-43.5 44.5-65T461 256t-16.5-80.5-44.5-65T334.5 67 254 51q-56 0-105 27.5T73 154h94q11 0 18 7t7 18-7 18.5-18 7.5H26q-11 0-18.5-7.5T0 179V25Q0 14 7.5 7T26 0t18 7 7 18v71q37-46 90.5-71T254 0zm1 96q11 0 18.5 7t7.5 18v125l64 63q8 6 8 17t-7.5 18.5T327 352q-10 0-18-8l-72-70q-7-7-7-18V121q0-11 7-18t18-7z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/history.js
var getPathData = () => __async(void 0, null, function* () {
  return (yield isLegacyThemeFamilyAsync()) ? pathData : pathData2;
});
var history_default = "history";
export {
  accData,
  history_default as default,
  getPathData,
  ltr
};
//# sourceMappingURL=@ui5_webcomponents-icons_dist_history__js.js.map
