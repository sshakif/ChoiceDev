import {
  registerIcon
} from "./chunk-XOBH4D6P.js";
import {
  isLegacyThemeFamilyAsync
} from "./chunk-FE3LTLOF.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-icons/dist/v4/background.js
var name = "background";
var pathData = "M368 192q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm80-160q14 0 23 9t9 23v384q0 14-9 23t-23 9H64q-13 0-22.5-9T32 448V64q0-14 9.5-23T64 32h384zm0 32H64v384h384V64zm-92 288l-58-85 22-43 96 128h-60zm-7 32H94l130-183z";
var ltr = false;
var accData = null;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/background.js
var name2 = "background";
var pathData2 = "M480 390q0 38-26 64t-64 26H122q-38 0-64-26t-26-64V122q0-38 26-64t64-26h268q38 0 64 26t26 64v268zm-397 2l90-96q8-8 19-8 7 0 14 4l41 26 87-87q9-7 18-7 7 0 11 3l66 32V122q0-17-11-28t-28-11H122q-17 0-28 11t-11 28v270zm85-184q-17 0-28.5-11.5T128 168t11.5-28.5T168 128t28.5 11.5T208 168t-11.5 28.5T168 208zm222 221q17 0 28-11t11-28v-73l-72-36-65 65 16 10q12 7 12 22 0 10-7.5 17.5T294 403q-8 0-13-4l-85-53-77 83h271z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/background.js
var getPathData = () => __async(void 0, null, function* () {
  return (yield isLegacyThemeFamilyAsync()) ? pathData : pathData2;
});
var background_default = "background";

export {
  ltr,
  accData,
  getPathData,
  background_default
};
//# sourceMappingURL=chunk-KQDSW2NM.js.map
