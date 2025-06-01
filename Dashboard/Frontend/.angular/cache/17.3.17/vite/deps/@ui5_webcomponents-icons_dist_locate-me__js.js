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

// node_modules/@ui5/webcomponents-icons/dist/v4/locate-me.js
var name = "locate-me";
var pathData = "M451.667 43q5-3 9 1.5t2 9.5l-198 395q-3 5-9 4t-6-8V264q0-8-8-8h-182q-6 0-7.5-6t4.5-9z";
var ltr = false;
var accData = null;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/locate-me.js
var name2 = "locate-me";
var pathData2 = "M275 464l-64-164-163-65q-16-6-16-24 0-17 16-24L445 34q6-2 10-2 10 0 17.5 7.5T480 58q0 6-2 9L323 464q-7 16-24 16-8 0-14.5-4t-9.5-12z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/locate-me.js
var getPathData = () => __async(void 0, null, function* () {
  return (yield isLegacyThemeFamilyAsync()) ? pathData : pathData2;
});
var locate_me_default = "locate-me";
export {
  accData,
  locate_me_default as default,
  getPathData,
  ltr
};
//# sourceMappingURL=@ui5_webcomponents-icons_dist_locate-me__js.js.map
