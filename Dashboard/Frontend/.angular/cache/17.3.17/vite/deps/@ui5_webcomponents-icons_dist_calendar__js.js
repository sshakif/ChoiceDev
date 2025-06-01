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

// node_modules/@ui5/webcomponents-icons/dist/v4/calendar.js
var name = "calendar";
var pathData = "M32 481V65q0-14 9.5-23T64 33h64V1h32v32h192V1h32v32h64q14 0 23 9t9 23v416q0 14-9 23t-23 9H64q-13 0-22.5-9T32 481zm416 0V129H64v352h384zM256 193q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM128 321q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm256-128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm-128 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM96 225q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23zM384 97V65h-32v32h32zM128 65v32h32V65h-32z";
var ltr = true;
var accData = null;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/calendar.js
var name2 = "calendar";
var pathData2 = "M390 64q38 0 64 26t26 64v268q0 38-26 64t-64 26H122q-38 0-64-26t-26-64V154q0-38 26-64t64-26h6V26q0-11 7.5-18.5T154 0t18 7.5 7 18.5v38h154V26q0-11 7-18.5T358 0t18.5 7.5T384 26v38h6zm-268 51q-17 0-28 11t-11 28v51h346v-51q0-17-11-28t-28-11h-6v19q0 11-7.5 18.5T358 160t-18-7.5-7-18.5v-19H179v19q0 11-7 18.5t-18 7.5-18.5-7.5T128 134v-19h-6zm268 346q17 0 28-11t11-28V256H83v166q0 17 11 28t28 11h268z";
var ltr2 = true;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/calendar.js
var getPathData = () => __async(void 0, null, function* () {
  return (yield isLegacyThemeFamilyAsync()) ? pathData : pathData2;
});
var calendar_default = "calendar";
export {
  accData,
  calendar_default as default,
  getPathData,
  ltr
};
//# sourceMappingURL=@ui5_webcomponents-icons_dist_calendar__js.js.map
