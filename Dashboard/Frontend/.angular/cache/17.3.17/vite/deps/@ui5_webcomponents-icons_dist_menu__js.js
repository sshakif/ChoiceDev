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

// node_modules/@ui5/webcomponents-icons/dist/v4/menu.js
var name = "menu";
var pathData = "M32 64q14 0 23 9.5T64 96q0 14-9 23t-23 9q-13 0-22.5-9T0 96q0-13 9.5-22.5T32 64zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 256q0-13 9.5-22.5T32 224zm0 160q14 0 23 9.5t9 22.5q0 14-9 23t-23 9q-13 0-22.5-9T0 416q0-13 9.5-22.5T32 384zm128-255q-13 0-22.5-9.5T128 97q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 256q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160zm0 159q-13 0-22.5-9.5T128 415q0-14 9.5-23t22.5-9h320q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H160z";
var ltr = false;
var accData = null;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/menu.js
var name2 = "menu";
var pathData2 = "M48 64q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 64H186q-11 0-18.5-7.5T160 102t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 128zM48 208q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 80H186q-11 0-18.5-7.5T160 262t7.5-18 18.5-7h300q11 0 18.5 7t7.5 18-7.5 18.5T486 288zM48 352q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm438 83H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 384h300q11 0 18.5 7.5T512 410t-7.5 18-18.5 7z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/menu.js
var getPathData = () => __async(void 0, null, function* () {
  return (yield isLegacyThemeFamilyAsync()) ? pathData : pathData2;
});
var menu_default = "menu";
export {
  accData,
  menu_default as default,
  getPathData,
  ltr
};
//# sourceMappingURL=@ui5_webcomponents-icons_dist_menu__js.js.map
