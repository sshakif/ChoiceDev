import {
  InputType_default,
  Input_default
} from "./chunk-I4O6ASPS.js";
import {
  ResponsivePopoverCommon_css_default
} from "./chunk-RYF5F2A6.js";
import {
  ResponsivePopover_default
} from "./chunk-D2ZEM7VW.js";
import {
  ItemNavigationBehavior_default,
  ItemNavigation_default,
  NavigationMode_default
} from "./chunk-KAQ4T4QR.js";
import {
  AriaHasPopup_default
} from "./chunk-7AZT6HQV.js";
import {
  Button_default
} from "./chunk-THWQMO7Z.js";
import {
  ValueState_default
} from "./chunk-OMRI665N.js";
import {
  getEffectiveAriaLabelText
} from "./chunk-HWWW4G3G.js";
import {
  CALENDAR_HEADER_NEXT_BUTTON,
  CALENDAR_HEADER_PREVIOUS_BUTTON,
  CAL_LEGEND_NON_WORKING_DAY_TEXT,
  CAL_LEGEND_SELECTED_TEXT,
  CAL_LEGEND_TODAY_TEXT,
  CAL_LEGEND_WORKING_DAY_TEXT,
  DATEPICKER_DATE_DESCRIPTION,
  DATEPICKER_OPEN_ICON_TITLE,
  DATEPICKER_POPOVER_ACCESSIBLE_NAME,
  DAY_PICKER_NON_WORKING_DAY,
  DAY_PICKER_TODAY,
  DAY_PICKER_WEEK_NUMBER_TEXT,
  FORM_TEXTFIELD_REQUIRED,
  INPUT_SUGGESTIONS_TITLE,
  MONTH_PICKER_DESCRIPTION,
  YEAR_PICKER_DESCRIPTION
} from "./chunk-U6TJ47RH.js";
import {
  slot_default
} from "./chunk-DSDXH633.js";
import {
  IconMode_default,
  Icon_default
} from "./chunk-P5SJUC57.js";
import {
  isDesktop,
  isDown,
  isEnd,
  isEndCtrl,
  isEnter,
  isEnterShift,
  isF4,
  isF4Shift,
  isF6Next,
  isF6Previous,
  isHome,
  isHomeCtrl,
  isLeft,
  isPageDown,
  isPageDownAlt,
  isPageDownShift,
  isPageDownShiftCtrl,
  isPageUp,
  isPageUpAlt,
  isPageUpShift,
  isPageUpShiftCtrl,
  isPhone,
  isRight,
  isShow,
  isSpace,
  isSpaceShift,
  isTabNext,
  isTabPrevious,
  isUp
} from "./chunk-ECUZOJV2.js";
import {
  parameters_bundle_css_default as parameters_bundle_css_default2
} from "./chunk-G46EOBNK.js";
import {
  LitRenderer_default,
  classMap,
  effectiveHtml,
  ifDefined,
  parameters_bundle_css_default,
  repeat,
  scopeTag,
  styleMap
} from "./chunk-DMMFI3C7.js";
import {
  registerIcon
} from "./chunk-XOBH4D6P.js";
import {
  attachLanguageChange,
  getI18nBundle,
  getLanguage,
  getLocale_default
} from "./chunk-22ISB74T.js";
import {
  event_default
} from "./chunk-XYCO3572.js";
import {
  UI5Element_default,
  customElement_default,
  property_default,
  submitForm
} from "./chunk-V2NLQCH3.js";
import {
  getCalendarType,
  getFeature,
  getFormatSettings,
  getSecondaryCalendarType,
  getTimezone,
  registerFeature,
  renderFinished
} from "./chunk-FE3LTLOF.js";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  init_AssetParameters,
  init_Themes,
  registerThemePropertiesLoader
} from "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/types/CalendarType.js
var CalendarType;
(function(CalendarType3) {
  CalendarType3["Gregorian"] = "Gregorian";
  CalendarType3["Islamic"] = "Islamic";
  CalendarType3["Japanese"] = "Japanese";
  CalendarType3["Buddhist"] = "Buddhist";
  CalendarType3["Persian"] = "Persian";
})(CalendarType || (CalendarType = {}));
var CalendarType_default = CalendarType;

// node_modules/@ui5/webcomponents-base/dist/config/CalendarType.js
var calendarType;
var secondaryCalendarType;
var getCalendarType2 = () => {
  if (calendarType === void 0) {
    calendarType = getCalendarType();
  }
  if (calendarType && calendarType in CalendarType_default) {
    return calendarType;
  }
  return CalendarType_default.Gregorian;
};
var getSecondaryCalendarType2 = () => {
  if (secondaryCalendarType === void 0) {
    secondaryCalendarType = getSecondaryCalendarType();
  }
  if (secondaryCalendarType && secondaryCalendarType in CalendarType_default) {
    return secondaryCalendarType;
  }
  return secondaryCalendarType;
};

// node_modules/@ui5/webcomponents-base/dist/config/Timezone.js
var currTimezone;
var getTimezone2 = () => {
  if (currTimezone === void 0) {
    currTimezone = getTimezone();
  }
  return currTimezone;
};

// node_modules/@ui5/webcomponents-base/dist/util/getDesigntimePropertyAsArray.js
var designTimePropertyAsArray = (value) => {
  const m = /\$([-a-z0-9A-Z._]+)(?::([^$]*))?\$/.exec(value);
  return m && m[2] ? m[2].split(/,/) : null;
};
var getDesigntimePropertyAsArray_default = designTimePropertyAsArray;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/i18n/date/TimezoneUtils.js
var TimezoneUtils = {};
var sLocalTimezone = "";
var aSupportedTimezoneIDs;
var oIntlDateTimeFormatCache = {
  _oCache: /* @__PURE__ */ new Map(),
  /**
   * When cache limit is reached, it gets cleared
   */
  _iCacheLimit: 10,
  /**
   * Creates or gets an instance of Intl.DateTimeFormat.
   *
   * @param {string} sTimezone IANA timezone ID
   * @returns {Intl.DateTimeFormat} Intl.DateTimeFormat instance
   */
  get: function(sTimezone) {
    var cacheEntry = this._oCache.get(sTimezone);
    if (cacheEntry) {
      return cacheEntry;
    }
    var oOptions = {
      hourCycle: "h23",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      fractionalSecondDigits: 3,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: sTimezone,
      timeZoneName: "short",
      era: "narrow",
      weekday: "short"
    };
    var oInstance = new Intl.DateTimeFormat("en-US", oOptions);
    if (this._oCache.size === this._iCacheLimit) {
      this._oCache = /* @__PURE__ */ new Map();
    }
    this._oCache.set(sTimezone, oInstance);
    return oInstance;
  }
};
TimezoneUtils.isValidTimezone = function(sTimezone) {
  if (!sTimezone) {
    return false;
  }
  if (Intl.supportedValuesOf) {
    try {
      aSupportedTimezoneIDs = aSupportedTimezoneIDs || Intl.supportedValuesOf("timeZone");
      if (aSupportedTimezoneIDs.includes(sTimezone)) {
        return true;
      }
    } catch (oError) {
      aSupportedTimezoneIDs = [];
    }
  }
  try {
    oIntlDateTimeFormatCache.get(sTimezone);
    return true;
  } catch (oError) {
    return false;
  }
};
TimezoneUtils.convertToTimezone = function(oDate, sTargetTimezone) {
  var oFormatParts = this._getParts(oDate, sTargetTimezone);
  return TimezoneUtils._getDateFromParts(oFormatParts);
};
TimezoneUtils._getParts = function(oDate, sTargetTimezone) {
  var sKey, oPart, oDateParts = /* @__PURE__ */ Object.create(null), oIntlDate = oIntlDateTimeFormatCache.get(sTargetTimezone), oParts = oIntlDate.formatToParts(new Date(oDate.getTime()));
  for (sKey in oParts) {
    oPart = oParts[sKey];
    if (oPart.type !== "literal") {
      oDateParts[oPart.type] = oPart.value;
    }
  }
  return oDateParts;
};
TimezoneUtils._getDateFromParts = function(oParts) {
  var oDate = /* @__PURE__ */ new Date(0), iUTCYear = parseInt(oParts.year);
  if (oParts.era === "B") {
    iUTCYear = iUTCYear * -1 + 1;
  }
  oDate.setUTCFullYear(iUTCYear, parseInt(oParts.month) - 1, parseInt(oParts.day));
  oDate.setUTCHours(parseInt(oParts.hour), parseInt(oParts.minute), parseInt(oParts.second), parseInt(oParts.fractionalSecond || 0));
  return oDate;
};
TimezoneUtils.calculateOffset = function(oDate, sTimezoneSource) {
  const oDateInTimezone = TimezoneUtils.convertToTimezone(oDate, sTimezoneSource);
  const iGivenTimestamp = oDate.getTime();
  const iInitialOffset = iGivenTimestamp - oDateInTimezone.getTime();
  const oFirstGuess = new Date(iGivenTimestamp + iInitialOffset);
  const oFirstGuessInTimezone = TimezoneUtils.convertToTimezone(oFirstGuess, sTimezoneSource);
  const iFirstGuessInTimezoneTimestamp = oFirstGuessInTimezone.getTime();
  const iSecondOffset = oFirstGuess.getTime() - iFirstGuessInTimezoneTimestamp;
  let iTimezoneOffset = iSecondOffset;
  if (iInitialOffset !== iSecondOffset) {
    const oSecondGuess = new Date(iGivenTimestamp + iSecondOffset);
    const oSecondGuessInTimezone = TimezoneUtils.convertToTimezone(oSecondGuess, sTimezoneSource);
    const iSecondGuessInTimezoneTimestamp = oSecondGuessInTimezone.getTime();
    if (iSecondGuessInTimezoneTimestamp !== iGivenTimestamp && iFirstGuessInTimezoneTimestamp > iSecondGuessInTimezoneTimestamp) {
      iTimezoneOffset = iInitialOffset;
    }
  }
  return iTimezoneOffset / 1e3;
};
TimezoneUtils.mCLDR2ABAPTimezones = {
  "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
  "America/Catamarca": "America/Argentina/Catamarca",
  "America/Cordoba": "America/Argentina/Cordoba",
  "America/Jujuy": "America/Argentina/Jujuy",
  "America/Mendoza": "America/Argentina/Mendoza",
  "America/Indianapolis": "America/Indiana/Indianapolis",
  "America/Louisville": "America/Kentucky/Louisville",
  "Africa/Asmera": "Africa/Asmara",
  "Asia/Katmandu": "Asia/Kathmandu",
  "Asia/Calcutta": "Asia/Kolkata",
  "Atlantic/Faeroe": "Atlantic/Faroe",
  "Pacific/Ponape": "Pacific/Pohnpei",
  "Asia/Rangoon": "Asia/Yangon",
  "Pacific/Truk": "Pacific/Chuuk",
  "America/Godthab": "America/Nuuk",
  "Asia/Saigon": "Asia/Ho_Chi_Minh",
  "America/Coral_Harbour": "America/Atikokan"
};
TimezoneUtils.getLocalTimezone = function() {
  if (sLocalTimezone === "") {
    sLocalTimezone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    sLocalTimezone = TimezoneUtils.mCLDR2ABAPTimezones[sLocalTimezone] || sLocalTimezone;
  }
  return sLocalTimezone;
};
TimezoneUtils._clearLocalTimezoneCache = function() {
  sLocalTimezone = "";
};
var TimezoneUtils_default = TimezoneUtils;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/format/TimezoneUtil.js
var TimezoneUtil_default = TimezoneUtils_default;

// node_modules/@ui5/webcomponents-base/dist/features/LegacyDateFormats.js
var formatSettings;
var LegacyDateFormats = class {
  /**
   * Returns the currently set customizing data for Islamic calendar support
   *
   * @return {object[]} Returns an array that contains the customizing data.
   * @public
   */
  static getLegacyDateCalendarCustomizing() {
    if (formatSettings === void 0) {
      formatSettings = getFormatSettings();
    }
    return formatSettings.legacyDateCalendarCustomizing || [];
  }
};
registerFeature("LegacyDateFormats", LegacyDateFormats);
var LegacyDateFormats_default = LegacyDateFormats;

// node_modules/@ui5/webcomponents-base/dist/config/FormatSettings.js
var formatSettings2;
var getFirstDayOfWeek = () => {
  if (formatSettings2 === void 0) {
    formatSettings2 = getFormatSettings();
  }
  return formatSettings2.firstDayOfWeek;
};
var legacyDateFormats = getFeature("LegacyDateFormats");
var getLegacyDateCalendarCustomizing = legacyDateFormats ? LegacyDateFormats_default.getLegacyDateCalendarCustomizing : () => {
  return [];
};

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/FormatSettings.js
var emptyFn = () => {
};
var FormatSettings = {
  getFormatLocale: getLocale_default,
  getLegacyDateFormat: emptyFn,
  getCustomLocaleData: emptyFn,
  getLegacyDateCalendarCustomizing
};
var FormatSettings_default = FormatSettings;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/Configuration.js
var emptyFn2 = () => {
};
var Configuration = {
  getLanguage,
  getCalendarType: getCalendarType2,
  getSupportedLanguages: () => getDesigntimePropertyAsArray_default("$core-i18n-locales:,ar,bg,ca,cs,da,de,el,en,es,et,fi,fr,hi,hr,hu,it,iw,ja,ko,lt,lv,nl,no,pl,pt,ro,ru,sh,sk,sl,sv,th,tr,uk,vi,zh_CN,zh_TW$"),
  getOriginInfo: emptyFn2,
  getFormatSettings: () => FormatSettings_default,
  getTimezone: () => getTimezone2() || TimezoneUtil_default.getLocalTimezone(),
  // Calculate calendar week numbering by active format locale
  getCalendarWeekNumbering: () => "Default"
};
var Configuration_default = Configuration;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/date/UI5Date.js
var aAllParts = ["year", "month", "day", "hour", "minute", "second", "fractionalSecond"];
var rIsUTCString = /Z|GMT|:.*[\+|\-]|^([\+|\-]\d{2})?\d{4}(-\d{2}){0,2}$/;
var aWeekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var aMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var mWeekdayToDay = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6
};
function addLeadingZeros(iValue, iLength) {
  return (iValue < 0 ? "-" : "") + Math.abs(iValue).toString().padStart(iLength, "0");
}
function UI5Date(vDateParts, sTimezoneID) {
  var oDateInstance = UI5Date._createDateInstance(vDateParts);
  Object.defineProperties(this, {
    sTimezoneID: {
      value: sTimezoneID
    },
    oDate: {
      value: oDateInstance,
      writable: true
    },
    oDateParts: {
      value: void 0,
      writable: true
    }
  });
  if (isNaN(oDateInstance)) {
    return;
  }
  if (vDateParts.length > 1 || vDateParts.length === 1 && typeof vDateParts[0] === "string" && !rIsUTCString.test(vDateParts[0])) {
    this._setParts(
      aAllParts,
      // JavaScript Date parsed the arguments already in local browser time zone
      [oDateInstance.getFullYear(), oDateInstance.getMonth(), oDateInstance.getDate(), oDateInstance.getHours(), oDateInstance.getMinutes(), oDateInstance.getSeconds(), oDateInstance.getMilliseconds()]
    );
  }
}
UI5Date.prototype = Object.create(Date.prototype, {
  constructor: {
    value: Date
  }
});
UI5Date.prototype[Symbol.toStringTag] = "Date";
UI5Date.prototype._getPart = function(sPart) {
  var iResult;
  if (isNaN(this.oDate)) {
    return NaN;
  }
  this.oDateParts = this.oDateParts || TimezoneUtil_default._getParts(this.oDate, this.sTimezoneID);
  if (sPart === "weekday") {
    return mWeekdayToDay[this.oDateParts.weekday];
  }
  iResult = parseInt(this.oDateParts[sPart]);
  if (sPart === "month") {
    iResult -= 1;
  } else if (sPart === "year") {
    if (this.oDateParts.era === "B") {
      iResult = 1 - iResult;
    }
  }
  return iResult;
};
UI5Date.prototype._setParts = function(aParts, aValues) {
  var i, oCurrentDateParts, oNewDateAsUTCTimestamp, iNewTimestamp, sPart, vValue, oDateParts = {}, iMaxLength = Math.min(aParts.length, aValues.length);
  if (iMaxLength === 0) {
    return this.setTime(NaN);
  }
  for (i = 0; i < iMaxLength; i += 1) {
    vValue = parseInt(+aValues[i]);
    sPart = aParts[i];
    if (isNaN(vValue)) {
      return this.setTime(NaN);
    }
    if (sPart === "month") {
      vValue += 1;
    } else if (sPart === "year") {
      if (vValue <= 0) {
        vValue = 1 - vValue;
        oDateParts.era = "B";
      } else {
        oDateParts.era = "A";
      }
    }
    oDateParts[sPart] = vValue.toString();
  }
  if (this.oDateParts) {
    oCurrentDateParts = this.oDateParts;
  } else if (isNaN(this.oDate)) {
    oCurrentDateParts = {
      day: "1",
      fractionalSecond: "0",
      hour: "0",
      minute: "0",
      month: "1",
      second: "0"
    };
  } else {
    oCurrentDateParts = TimezoneUtil_default._getParts(this.oDate, this.sTimezoneID);
  }
  oDateParts = Object.assign({}, oCurrentDateParts, oDateParts);
  oNewDateAsUTCTimestamp = TimezoneUtil_default._getDateFromParts(oDateParts);
  if (isNaN(oNewDateAsUTCTimestamp)) {
    return this.setTime(NaN);
  }
  iNewTimestamp = oNewDateAsUTCTimestamp.getTime() + TimezoneUtil_default.calculateOffset(oNewDateAsUTCTimestamp, this.sTimezoneID) * 1e3;
  return this.setTime(iNewTimestamp);
};
UI5Date.prototype.clone = function() {
  return UI5Date.getInstance(this);
};
UI5Date.prototype.getDate = function() {
  return this._getPart("day");
};
UI5Date.prototype.getDay = function() {
  return this._getPart("weekday");
};
UI5Date.prototype.getFullYear = function() {
  return this._getPart("year");
};
UI5Date.prototype.getHours = function() {
  return this._getPart("hour");
};
UI5Date.prototype.getMilliseconds = function() {
  return this._getPart("fractionalSecond");
};
UI5Date.prototype.getMinutes = function() {
  return this._getPart("minute");
};
UI5Date.prototype.getMonth = function() {
  return this._getPart("month");
};
UI5Date.prototype.getSeconds = function() {
  return this._getPart("second");
};
UI5Date.prototype.getTimezoneOffset = function() {
  return TimezoneUtil_default.calculateOffset(this.oDate, this.sTimezoneID) / 60;
};
UI5Date.prototype.getYear = function() {
  return this._getPart("year") - 1900;
};
UI5Date.prototype.setDate = function(iDay) {
  return this._setParts(["day"], arguments);
};
UI5Date.prototype.setFullYear = function(iYear, iMonth, iDay) {
  return this._setParts(["year", "month", "day"], arguments);
};
UI5Date.prototype.setHours = function(iHours, iMinutes, iSeconds, iMilliseconds) {
  return this._setParts(["hour", "minute", "second", "fractionalSecond"], arguments);
};
UI5Date.prototype.setMilliseconds = function(iMilliseconds) {
  return this._setParts(["fractionalSecond"], arguments);
};
UI5Date.prototype.setMinutes = function(iMinutes, iSeconds, iMilliseconds) {
  return this._setParts(["minute", "second", "fractionalSecond"], arguments);
};
UI5Date.prototype.setMonth = function(iMonth, iDay) {
  return this._setParts(["month", "day"], arguments);
};
UI5Date.prototype.setSeconds = function(iSeconds, iMilliseconds) {
  return this._setParts(["second", "fractionalSecond"], arguments);
};
UI5Date.prototype.setTime = function(iTime) {
  this.oDateParts = void 0;
  return this.oDate.setTime(iTime);
};
UI5Date.prototype.setYear = function(iYear) {
  var iValue = parseInt(iYear);
  iValue = iValue < 0 || iValue > 99 ? iValue : iValue + 1900;
  return this._setParts(["year"], [iValue]);
};
UI5Date.prototype.toDateString = function() {
  if (isNaN(this.oDate)) {
    return this.oDate.toDateString();
  }
  return aWeekday[this.getDay()] + " " + aMonths[this.getMonth()] + " " + addLeadingZeros(this.getDate(), 2) + " " + addLeadingZeros(this.getFullYear(), 4);
};
UI5Date.prototype.toString = function() {
  if (isNaN(this.oDate)) {
    return this.oDate.toString();
  }
  return this.toDateString() + " " + this.toTimeString();
};
UI5Date.prototype.toTimeString = function() {
  var iHours, iMinutes, sSign, iTimeZoneOffset;
  if (isNaN(this.oDate)) {
    return this.oDate.toTimeString();
  }
  iTimeZoneOffset = this.getTimezoneOffset();
  sSign = iTimeZoneOffset > 0 ? "-" : "+";
  iHours = Math.floor(Math.abs(iTimeZoneOffset) / 60);
  iMinutes = Math.abs(iTimeZoneOffset) % 60;
  return addLeadingZeros(this.getHours(), 2) + ":" + addLeadingZeros(this.getMinutes(), 2) + ":" + addLeadingZeros(this.getSeconds(), 2) + " GMT" + sSign + addLeadingZeros(iHours, 2) + addLeadingZeros(iMinutes, 2);
};
["getTime", "getUTCDate", "getUTCDay", "getUTCFullYear", "getUTCHours", "getUTCMilliseconds", "getUTCMinutes", "getUTCMonth", "getUTCSeconds", "toGMTString", "toISOString", "toJSON", "toUTCString", "valueOf"].forEach(function(sMethod) {
  UI5Date.prototype[sMethod] = function() {
    return this.oDate[sMethod].apply(this.oDate, arguments);
  };
});
["toLocaleDateString", "toLocaleString", "toLocaleTimeString"].forEach(function(sMethod) {
  UI5Date.prototype[sMethod] = function(sLocale, oOptions) {
    return this.oDate[sMethod](sLocale || Configuration_default.getLanguageTag(), Object.assign({
      timeZone: this.sTimezoneID
    }, oOptions));
  };
});
["setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds"].forEach(function(sMethod) {
  UI5Date.prototype[sMethod] = function() {
    this.oDateParts = void 0;
    return this.oDate[sMethod].apply(this.oDate, arguments);
  };
});
UI5Date._createDateInstance = function(vParts) {
  if (vParts[0] instanceof Date) {
    vParts[0] = vParts[0].valueOf();
  }
  return new (Function.prototype.bind.apply(Date, [].concat.apply([null], vParts)))();
};
UI5Date.getInstance = function() {
  var sTimezone = Configuration_default.getTimezone();
  if (sTimezone !== TimezoneUtil_default.getLocalTimezone()) {
    return new UI5Date(arguments, sTimezone);
  }
  return UI5Date._createDateInstance(arguments);
};
UI5Date.checkDate = function(oDate) {
  if (isNaN(oDate.getTime())) {
    throw new Error("The given Date is not valid");
  }
  if (!(oDate instanceof UI5Date) && Configuration_default.getTimezone() !== TimezoneUtil_default.getLocalTimezone()) {
    throw new Error("Configured time zone requires the parameter 'oDate' to be an instance of sap.ui.core.date.UI5Date");
  }
};
var UI5Date_default = UI5Date;

// node_modules/@ui5/webcomponents-localization/dist/dates/UI5Date.js
var UI5DateWrapped = UI5Date_default;
var UI5Date2 = class extends UI5DateWrapped {
};
var UI5Date_default2 = UI5Date2;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/Core.js
var emptyFn3 = () => {
};
var Core = {
  getConfiguration: () => Configuration_default,
  getLibraryResourceBundle: emptyFn3(),
  getFormatSettings: () => FormatSettings_default
};
var Core_default = Core;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/util/ObjectPath.js
var ObjectPath = {
  set() {
  }
};
var ObjectPath_default = ObjectPath;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/assert.js
var fnAssert = function(bResult, vMessage) {
  if (!bResult) {
    var sMessage = typeof vMessage === "function" ? vMessage() : vMessage;
    console.assert(bResult, sMessage);
  }
};
var assert_default = fnAssert;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/Log.js
var Log = console;
Log.warning = console.warn;
var Log_default = Log;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/util/array/uniqueSort.js
var fnUniqueSort = function(aArray) {
  assert_default(Array.isArray(aArray), "uniqueSort: input parameter must be an Array");
  var iLength = aArray.length;
  if (iLength > 1) {
    aArray.sort();
    var j = 0;
    for (var i = 1; i < iLength; i++) {
      if (aArray.indexOf(aArray[i]) === i) {
        aArray[++j] = aArray[i];
      }
    }
    if (++j < iLength) {
      aArray.splice(j, iLength - j);
    }
  }
  return aArray;
};
var uniqueSort_default = fnUniqueSort;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/base/Metadata.js
function isFunction(obj) {
  return typeof obj === "function";
}
var Metadata = function(sClassName, oClassInfo) {
  assert_default(typeof sClassName === "string" && sClassName, "Metadata: sClassName must be a non-empty string");
  assert_default(typeof oClassInfo === "object", "Metadata: oClassInfo must be empty or an object");
  if (!oClassInfo || typeof oClassInfo.metadata !== "object") {
    oClassInfo = {
      metadata: oClassInfo || {},
      // retrieve class by its name. Using a lookup costs time but avoids the need for redundant arguments to this function
      constructor: ObjectPath_default.get(sClassName)
      // legacy-relevant, code path not used by extend call
    };
    oClassInfo.metadata.__version = 1;
  }
  oClassInfo.metadata.__version = oClassInfo.metadata.__version || 2;
  if (!isFunction(oClassInfo.constructor)) {
    throw Error("constructor for class " + sClassName + " must have been declared before creating metadata for it");
  }
  this._sClassName = sClassName;
  this._oClass = oClassInfo.constructor;
  this.extend(oClassInfo);
};
Metadata.prototype.extend = function(oClassInfo) {
  this.applySettings(oClassInfo);
  this.afterApplySettings();
};
Metadata.prototype.applySettings = function(oClassInfo) {
  var that = this, oStaticInfo = oClassInfo.metadata, oPrototype;
  if (oStaticInfo.baseType) {
    var oParentClass;
    if (isFunction(oStaticInfo.baseType)) {
      oParentClass = oStaticInfo.baseType;
      if (!isFunction(oParentClass.getMetadata)) {
        throw new TypeError("baseType must be a UI5 class with a static getMetadata function");
      }
    } else {
      oParentClass = ObjectPath_default.get(oStaticInfo.baseType);
      if (!isFunction(oParentClass)) {
        Log_default.fatal("base class '" + oStaticInfo.baseType + "' does not exist");
      }
    }
    if (oParentClass.getMetadata) {
      this._oParent = oParentClass.getMetadata();
      assert_default(oParentClass === oParentClass.getMetadata().getClass(), "Metadata: oParentClass must match the class in the parent metadata");
    } else {
      this._oParent = new Metadata(oStaticInfo.baseType, {});
    }
  } else {
    this._oParent = void 0;
  }
  this._bAbstract = !!oStaticInfo["abstract"];
  this._bFinal = !!oStaticInfo["final"];
  this._sStereotype = oStaticInfo.stereotype || (this._oParent ? this._oParent._sStereotype : "object");
  this._bDeprecated = !!oStaticInfo["deprecated"];
  this._aInterfaces = oStaticInfo.interfaces || [];
  this._aPublicMethods = oStaticInfo.publicMethods || [];
  this._bInterfacesUnique = false;
  oPrototype = this._oClass.prototype;
  for (var n in oClassInfo) {
    if (n !== "metadata" && n !== "constructor") {
      oPrototype[n] = oClassInfo[n];
      if (!n.match(/^_|^on|^init$|^exit$/)) {
        that._aPublicMethods.push(n);
      }
    }
  }
};
Metadata.prototype.afterApplySettings = function() {
  if (this._oParent) {
    this._aAllPublicMethods = this._oParent._aAllPublicMethods.concat(this._aPublicMethods);
    this._bInterfacesUnique = false;
  } else {
    this._aAllPublicMethods = this._aPublicMethods;
  }
};
Metadata.prototype.getStereotype = function() {
  return this._sStereotype;
};
Metadata.prototype.getName = function() {
  return this._sClassName;
};
Metadata.prototype.getClass = function() {
  return this._oClass;
};
Metadata.prototype.getParent = function() {
  return this._oParent;
};
Metadata.prototype._dedupInterfaces = function() {
  if (!this._bInterfacesUnique) {
    uniqueSort_default(this._aInterfaces);
    uniqueSort_default(this._aPublicMethods);
    uniqueSort_default(this._aAllPublicMethods);
    this._bInterfacesUnique = true;
  }
};
Metadata.prototype.getPublicMethods = function() {
  this._dedupInterfaces();
  return this._aPublicMethods;
};
Metadata.prototype.getAllPublicMethods = function() {
  this._dedupInterfaces();
  return this._aAllPublicMethods;
};
Metadata.prototype.getInterfaces = function() {
  this._dedupInterfaces();
  return this._aInterfaces;
};
Metadata.prototype.isInstanceOf = function(sInterface) {
  if (this._oParent) {
    if (this._oParent.isInstanceOf(sInterface)) {
      return true;
    }
  }
  var a = this._aInterfaces;
  for (var i = 0, l = a.length; i < l; i++) {
    if (a[i] === sInterface) {
      return true;
    }
  }
  return false;
};
Object.defineProperty(Metadata.prototype, "_mImplementedTypes", {
  get: function() {
    if (this === Metadata.prototype) {
      throw new Error("sap.ui.base.Metadata: The '_mImplementedTypes' property must not be accessed on the prototype");
    }
    var result = Object.create(this._oParent ? this._oParent._mImplementedTypes : null);
    result[this._sClassName] = true;
    var aInterfaces = this._aInterfaces, i = aInterfaces.length;
    while (i-- > 0) {
      if (!result[aInterfaces[i]]) {
        result[aInterfaces[i]] = true;
      }
    }
    Object.defineProperty(this, "_mImplementedTypes", {
      value: Object.freeze(result),
      writable: false,
      configurable: false
    });
    return result;
  },
  configurable: true
});
Metadata.prototype.isA = function(vTypeName) {
  var mTypes2 = this._mImplementedTypes;
  if (Array.isArray(vTypeName)) {
    for (var i = 0; i < vTypeName.length; i++) {
      if (vTypeName[i] in mTypes2) {
        return true;
      }
    }
    return false;
  }
  return vTypeName in mTypes2;
};
Metadata.prototype.isAbstract = function() {
  return this._bAbstract;
};
Metadata.prototype.isFinal = function() {
  return this._bFinal;
};
Metadata.prototype.isDeprecated = function() {
  return this._bDeprecated;
};
Metadata.prototype.addPublicMethods = function(sMethod) {
  var aNames = sMethod instanceof Array ? sMethod : arguments;
  Array.prototype.push.apply(this._aPublicMethods, aNames);
  Array.prototype.push.apply(this._aAllPublicMethods, aNames);
  this._bInterfacesUnique = false;
};
Metadata.createClass = function(fnBaseClass, sClassName, oClassInfo, FNMetaImpl) {
  if (typeof fnBaseClass === "string") {
    FNMetaImpl = oClassInfo;
    oClassInfo = sClassName;
    sClassName = fnBaseClass;
    fnBaseClass = null;
  }
  assert_default(!fnBaseClass || isFunction(fnBaseClass));
  assert_default(typeof sClassName === "string" && !!sClassName);
  assert_default(!oClassInfo || typeof oClassInfo === "object");
  assert_default(!FNMetaImpl || isFunction(FNMetaImpl));
  FNMetaImpl = FNMetaImpl || Metadata;
  if (isFunction(FNMetaImpl.preprocessClassInfo)) {
    oClassInfo = FNMetaImpl.preprocessClassInfo(oClassInfo);
  }
  oClassInfo = oClassInfo || {};
  oClassInfo.metadata = oClassInfo.metadata || {};
  if (!oClassInfo.hasOwnProperty("constructor")) {
    oClassInfo.constructor = void 0;
  }
  var fnClass = oClassInfo.constructor;
  assert_default(!fnClass || isFunction(fnClass));
  if (fnBaseClass) {
    if (!fnClass) {
      if (oClassInfo.metadata.deprecated) {
        fnClass = function() {
          Log_default.warning("Usage of deprecated class: " + sClassName);
          fnBaseClass.apply(this, arguments);
        };
      } else {
        fnClass = function() {
          fnBaseClass.apply(this, arguments);
        };
      }
    }
    fnClass.prototype = Object.create(fnBaseClass.prototype);
    fnClass.prototype.constructor = fnClass;
    oClassInfo.metadata.baseType = fnBaseClass;
  } else {
    fnClass = fnClass || function() {
    };
    delete oClassInfo.metadata.baseType;
  }
  oClassInfo.constructor = fnClass;
  ObjectPath_default.set(sClassName, fnClass);
  var oMetadata = new FNMetaImpl(sClassName, oClassInfo);
  fnClass.getMetadata = fnClass.prototype.getMetadata = function() {
    return oMetadata;
  };
  if (!fnClass.getMetadata().isFinal()) {
    fnClass.extend = function(sSCName, oSCClassInfo, fnSCMetaImpl) {
      return Metadata.createClass(fnClass, sSCName, oSCClassInfo, fnSCMetaImpl || FNMetaImpl);
    };
  }
  return fnClass;
};
var Metadata_default = Metadata;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/base/Object.js
var BaseObject = Metadata_default.createClass("sap.ui.base.Object", {
  constructor: function() {
    if (!(this instanceof BaseObject)) {
      throw Error('Cannot instantiate object: "new" is missing!');
    }
  }
});
BaseObject.prototype.destroy = function() {
};
BaseObject.prototype.getInterface = function() {
  var oInterface = new BaseObject._Interface(this, this.getMetadata().getAllPublicMethods());
  this.getInterface = function() {
    return oInterface;
  };
  return oInterface;
};
BaseObject.defineClass = function(sClassName, oStaticInfo, FNMetaImpl) {
  var oMetadata = new (FNMetaImpl || Metadata_default)(sClassName, oStaticInfo);
  var fnClass = oMetadata.getClass();
  fnClass.getMetadata = fnClass.prototype.getMetadata = function() {
    return oMetadata;
  };
  if (!oMetadata.isFinal()) {
    fnClass.extend = function(sSCName, oSCClassInfo, fnSCMetaImpl) {
      return Metadata_default.createClass(fnClass, sSCName, oSCClassInfo, fnSCMetaImpl || FNMetaImpl);
    };
  }
  Log_default.debug("defined class '" + sClassName + "'" + (oMetadata.getParent() ? " as subclass of " + oMetadata.getParent().getName() : ""));
  return oMetadata;
};
BaseObject.prototype.isA = function(vTypeName) {
  return this.getMetadata().isA(vTypeName);
};
BaseObject.isA = function(oObject, vTypeName) {
  return oObject instanceof BaseObject && oObject.isA(vTypeName);
};
BaseObject.isObjectA = function(oObject, vTypeName) {
  return oObject instanceof BaseObject && oObject.isA(vTypeName);
};
BaseObject._Interface = function(oObject, aMethods, _bReturnFacade) {
  if (!oObject) {
    return oObject;
  }
  function fCreateDelegator(oObject2, sMethodName2) {
    return function() {
      var tmp = oObject2[sMethodName2].apply(oObject2, arguments);
      if (_bReturnFacade) {
        return this;
      } else {
        return tmp instanceof BaseObject ? tmp.getInterface() : tmp;
      }
    };
  }
  if (!aMethods) {
    return {};
  }
  var sMethodName;
  for (var i = 0, ml = aMethods.length; i < ml; i++) {
    sMethodName = aMethods[i];
    if (!oObject[sMethodName] || typeof oObject[sMethodName] === "function") {
      this[sMethodName] = fCreateDelegator(oObject, sMethodName);
    }
  }
};
var Object_default = BaseObject;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/util/isPlainObject.js
var class2type = {};
var hasOwn = class2type.hasOwnProperty;
var toString = class2type.toString;
var fnToString = hasOwn.toString;
var ObjectFunctionString = fnToString.call(Object);
var fnIsPlainObject = function(obj) {
  var proto, Ctor;
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }
  proto = Object.getPrototypeOf(obj);
  if (!proto) {
    return true;
  }
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
};
var isPlainObject_default = fnIsPlainObject;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/util/resolveReference.js
var resolveReference_default = function() {
  throw new Error("not implemented");
};

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/base/DataType.js
var DataType = function() {
  throw new Error();
};
DataType.prototype.getName = function() {
  return void 0;
};
DataType.prototype.getBaseType = function() {
  return void 0;
};
DataType.prototype.getPrimitiveType = function() {
  var oType = this;
  while (oType.getBaseType()) {
    oType = oType.getBaseType();
  }
  return oType;
};
DataType.prototype.getComponentType = function() {
  return void 0;
};
DataType.prototype.getDefaultValue = function() {
  return void 0;
};
DataType.prototype.isArrayType = function() {
  return false;
};
DataType.prototype.isEnumType = function() {
  return false;
};
DataType.prototype.getEnumValues = function() {
  return void 0;
};
DataType.prototype.parseValue = function(sValue) {
  return sValue;
};
DataType.prototype.isValid = void 0;
DataType.prototype.setNormalizer = function(fnNormalizer) {
  assert_default(typeof fnNormalizer === "function", "DataType.setNormalizer: fnNormalizer must be a function");
  this._fnNormalizer = typeof fnNormalizer === "function" ? fnNormalizer : void 0;
};
DataType.prototype.normalize = function(oValue) {
  return this._fnNormalizer ? this._fnNormalizer(oValue) : oValue;
};
function createType(sName, mSettings, oBase) {
  mSettings = mSettings || {};
  var oBaseObject = oBase || DataType.prototype;
  var oType = Object.create(oBaseObject);
  oType.getName = function() {
    return sName;
  };
  if (mSettings.hasOwnProperty("defaultValue")) {
    var vDefault = mSettings.defaultValue;
    oType.getDefaultValue = function() {
      return vDefault;
    };
  }
  if (mSettings.isValid) {
    var fnIsValid = mSettings.isValid;
    oType.isValid = oBaseObject.isValid ? function(vValue) {
      if (!oBaseObject.isValid(vValue)) {
        return false;
      }
      return fnIsValid(vValue);
    } : fnIsValid;
  }
  if (mSettings.parseValue) {
    oType.parseValue = mSettings.parseValue;
  }
  oType.getBaseType = function() {
    return oBase;
  };
  return oType;
}
var mTypes = {
  "any": createType("any", {
    defaultValue: null,
    isValid: function(vValue) {
      return true;
    }
  }),
  "boolean": createType("boolean", {
    defaultValue: false,
    isValid: function(vValue) {
      return typeof vValue === "boolean";
    },
    parseValue: function(sValue) {
      return sValue == "true";
    }
  }),
  "int": createType("int", {
    defaultValue: 0,
    isValid: function(vValue) {
      return typeof vValue === "number" && (isNaN(vValue) || Math.floor(vValue) == vValue);
    },
    parseValue: function(sValue) {
      return parseInt(sValue);
    }
  }),
  "float": createType("float", {
    defaultValue: 0,
    isValid: function(vValue) {
      return typeof vValue === "number";
    },
    parseValue: function(sValue) {
      return parseFloat(sValue);
    }
  }),
  "string": createType("string", {
    defaultValue: "",
    isValid: function(vValue) {
      return typeof vValue === "string" || vValue instanceof String;
    },
    parseValue: function(sValue) {
      return sValue;
    }
  }),
  "object": createType("object", {
    defaultValue: null,
    isValid: function(vValue) {
      return typeof vValue === "object" || typeof vValue === "function";
    },
    parseValue: function(sValue) {
      return sValue ? JSON.parse(sValue) : null;
    }
  }),
  "function": createType("function", {
    defaultValue: null,
    isValid: function(vValue) {
      return vValue == null || typeof vValue === "function";
    },
    /*
     * Note: the second parameter <code>_oOptions</code> is a hidden feature for internal use only.
     * Its structure is subject to change. No code other than the XMLTemplateProcessor must use it.
     */
    parseValue: function(sValue, _oOptions) {
      if (sValue === "") {
        return void 0;
      }
      if (!/^\.?[A-Z_\$][A-Z0-9_\$]*(\.[A-Z_\$][A-Z0-9_\$]*)*$/i.test(sValue)) {
        throw new Error("Function references must consist of dot separated simple identifiers (A-Z, 0-9, _ or $) only, but was '" + sValue + "'");
      }
      var fnResult, oContext = _oOptions && _oOptions.context, oLocals = _oOptions && _oOptions.locals;
      fnResult = resolveReference_default(sValue, Object.assign({
        ".": oContext
      }, oLocals));
      if (fnResult && this.isValid(fnResult)) {
        return fnResult;
      }
      throw new TypeError("The string '" + sValue + "' couldn't be resolved to a function");
    }
  })
};
var arrayType = createType("array", {
  defaultValue: []
});
function createArrayType(componentType) {
  assert_default(componentType instanceof DataType, "DataType.<createArrayType>: componentType must be a DataType");
  var oType = Object.create(DataType.prototype);
  oType.getName = function() {
    return componentType.getName() + "[]";
  };
  oType.getComponentType = function() {
    return componentType;
  };
  oType.isValid = function(aValues) {
    if (aValues === null) {
      return true;
    }
    if (Array.isArray(aValues)) {
      for (var i = 0; i < aValues.length; i++) {
        if (!componentType.isValid(aValues[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  };
  oType.parseValue = function(sValue) {
    var aValues = sValue.split(",");
    for (var i = 0; i < aValues.length; i++) {
      aValues[i] = componentType.parseValue(aValues[i]);
    }
    return aValues;
  };
  oType.isArrayType = function() {
    return true;
  };
  oType.getBaseType = function() {
    return arrayType;
  };
  return oType;
}
var mEnumRegistry = /* @__PURE__ */ Object.create(null);
function createEnumType(sTypeName, oEnum) {
  var mValues = {}, sDefaultValue;
  for (var sName in oEnum) {
    var sValue = oEnum[sName];
    if (!sDefaultValue) {
      sDefaultValue = sValue;
    }
    if (typeof sValue !== "string") {
      throw new Error("Value " + sValue + " for enum type " + sTypeName + " is not a string");
    }
    if (!mValues.hasOwnProperty(sValue) || sName == sValue) {
      mValues[sValue] = sName;
    }
  }
  var oType = Object.create(DataType.prototype);
  oType.getName = function() {
    return sTypeName;
  };
  oType.isValid = function(v) {
    return typeof v === "string" && mValues.hasOwnProperty(v);
  };
  oType.parseValue = function(sValue2) {
    return oEnum[sValue2];
  };
  oType.getDefaultValue = function() {
    return sDefaultValue;
  };
  oType.getBaseType = function() {
    return mTypes.string;
  };
  oType.isEnumType = function() {
    return true;
  };
  oType.getEnumValues = function() {
    return oEnum;
  };
  return oType;
}
DataType.getType = function(sTypeName) {
  assert_default(sTypeName && typeof sTypeName === "string", "sTypeName must be a non-empty string");
  var oType = mTypes[sTypeName];
  if (!(oType instanceof DataType)) {
    if (sTypeName.indexOf("[]", sTypeName.length - 2) > 0) {
      var sComponentTypeName = sTypeName.slice(0, -2), oComponentType = this.getType(sComponentTypeName);
      oType = oComponentType && createArrayType(oComponentType);
      if (oType) {
        mTypes[sTypeName] = oType;
      }
    } else if (sTypeName !== "array") {
      oType = mEnumRegistry[sTypeName];
      if (oType == null) {
        oType = ObjectPath_default.get(sTypeName);
        if (oType != null) {
          Log_default.error(`The type '${sTypeName}' was accessed via globals. Defining enums via globals is deprecated. Please require the module 'sap/ui/base/DataType' and call the static 'DataType.registerEnum' API.`);
        }
      }
      if (oType instanceof DataType) {
        mTypes[sTypeName] = oType;
      } else if (isPlainObject_default(oType)) {
        oType = mTypes[sTypeName] = createEnumType(sTypeName, oType);
        delete mEnumRegistry[sTypeName];
      } else if (oType) {
        Log_default.warning("[FUTURE FATAL] '" + sTypeName + "' is not a valid data type. Falling back to type 'any'.");
        oType = mTypes.any;
      } else {
        Log_default.error("[FUTURE FATAL] data type '" + sTypeName + "' could not be found.");
        oType = void 0;
      }
    }
  }
  return oType;
};
DataType.createType = function(sName, mSettings, vBase) {
  assert_default(typeof sName === "string" && sName, "DataType.createType: type name must be a non-empty string");
  assert_default(vBase == null || vBase instanceof DataType || typeof vBase === "string" && vBase, "DataType.createType: base type must be empty or a DataType or a non-empty string");
  if (/[\[\]]/.test(sName)) {
    Log_default.error("[FUTURE FATAL] DataType.createType: array types ('something[]') must not be created with createType, they're created on-the-fly by DataType.getType");
  }
  if (typeof vBase === "string") {
    vBase = DataType.getType(vBase);
  }
  vBase = vBase || mTypes.any;
  if (vBase.isArrayType() || vBase.isEnumType()) {
    Log_default.error("[FUTURE FATAL] DataType.createType: base type must not be an array- or enum-type");
  }
  if (sName === "array" || mTypes[sName] instanceof DataType) {
    if (sName === "array" || mTypes[sName].getBaseType() == null) {
      throw new Error("DataType.createType: primitive or hidden type " + sName + " can't be re-defined");
    }
    Log_default.warning("[FUTURE FATAL] DataTypes.createType: type " + sName + " is redefined. This is an unsupported usage of DataType and might cause issues.");
  }
  var oType = mTypes[sName] = createType(sName, mSettings, vBase);
  return oType;
};
var oInterfaces = /* @__PURE__ */ new Set();
DataType.registerInterfaceTypes = function(aTypes) {
  aTypes.forEach(function(sType) {
    oInterfaces.add(sType);
    ObjectPath_default.set(sType, sType);
  });
};
DataType.registerEnum = function(sTypeName, mContent) {
  mEnumRegistry[sTypeName] = mContent;
};
DataType._isEnumCandidate = function(oObject) {
  return !Object.keys(oObject).some((key) => {
    const propertyType = typeof oObject[key];
    return propertyType === "object" || propertyType === "function";
  });
};
DataType.isInterfaceType = function(sType) {
  return oInterfaces.has(sType);
};
var DataType_default = DataType;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/i18n/date/CalendarType.js
var CalendarType2 = {
  /**
   * The Gregorian calendar
   * @public
   */
  Gregorian: "Gregorian",
  /**
   * The Islamic calendar
   * @public
   */
  Islamic: "Islamic",
  /**
   * The Japanese emperor calendar
   * @public
   */
  Japanese: "Japanese",
  /**
   * The Persian Jalali calendar
   * @public
   */
  Persian: "Persian",
  /**
   * The Thai buddhist calendar
   * @public
   */
  Buddhist: "Buddhist"
};
var CalendarType_default2 = CalendarType2;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/CalendarType.js
DataType_default.registerEnum("sap.ui.core.CalendarType", CalendarType_default2);
var CalendarType_default3 = CalendarType_default2;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/i18n/Localization.js
var M_ISO639_OLD_TO_NEW = {
  "iw": "he",
  "ji": "yi"
};
var getModernLanguage = (sLanguage) => {
  return M_ISO639_OLD_TO_NEW[sLanguage] || sLanguage;
};
var Localization = {
  getModernLanguage
};
var Localization_default = Localization;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/i18n/LanguageTag.js
var rLanguageTag = /^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;
var LanguageTag = class {
  /**
   * Get the language.
   *
   * Note that the case might differ from the original script tag
   * (Lower case is enforced as recommended by BCP47/ISO639).
   *
   * @type {string}
   * @public
   */
  language;
  /**
   * Get the script or <code>null</code> if none was specified.
   *
   * Note that the case might differ from the original language tag
   * (Upper case first letter and lower case reminder enforced as
   * recommended by BCP47/ISO15924)
   *
   * @type {string|null}
   * @public
   */
  script;
  /**
   * Get the region or <code>null</code> if none was specified.
   *
   * Note that the case might differ from the original script tag
   * (Upper case is enforced as recommended by BCP47/ISO3166-1).
   *
   * @type {string}
   * @public
   */
  region;
  /**
   * Get the variants as a single string or <code>null</code>.
   *
   * Multiple variants are separated by a dash '-'.
   *
   * @type {string|null}
   * @public
   */
  variant;
  /**
   * Get the variants as an array of individual variants.
   *
   * The separating dashes are not part of the result.
   * If there is no variant section in the language tag, an empty array is returned.
   *
   * @type {string[]}
   * @public
   */
  variantSubtags;
  /**
   * Get the extension as a single string or <code>null</code>.
   *
   * The extension always consists of a singleton character (not 'x'),
   * a dash '-' and one or more extension token, each separated
   * again with a dash.
   *
   * @type {string|null}
   * @public
   */
  extension;
  /**
   * Get the extensions as an array of tokens.
   *
   * The leading singleton and the separating dashes are not part of the result.
   * If there is no extensions section in the language tag, an empty array is returned.
   *
   * @type {string[]}
   * @public
   */
  extensionSubtags;
  /**
   * Get the private use section or <code>null</code>.
   *
   * @type {string}
   */
  privateUse;
  /**
   * Get the private use section as an array of tokens.
   *
   * The leading singleton and the separating dashes are not part of the result.
   * If there is no private use section in the language tag, an empty array is returned.
   *
   * @type {string[]}
   */
  privateUseSubtags;
  constructor(sLanguageTag) {
    var aResult = rLanguageTag.exec(sLanguageTag.replace(/_/g, "-"));
    if (aResult === null) {
      throw new TypeError("The given language tag'" + sLanguageTag + "' does not adhere to BCP-47.");
    }
    this.language = aResult[1] || null;
    this.script = aResult[2] || null;
    this.region = aResult[3] || null;
    this.variant = aResult[4] && aResult[4].slice(1) || null;
    this.variantSubtags = this.variant ? this.variant.split("-") : [];
    this.extension = aResult[5] && aResult[5].slice(1) || null;
    this.extensionSubtags = this.variant ? this.variant.split("-") : [];
    this.privateUse = aResult[6] || null;
    this.privateUseSubtags = this.privateUse ? this.privateUse.slice(2).split("-") : [];
    if (this.language) {
      this.language = this.language.toLowerCase();
    }
    if (this.script) {
      this.script = this.script.toLowerCase().replace(/^[a-z]/, function($) {
        return $.toUpperCase();
      });
    }
    if (this.region) {
      this.region = this.region.toUpperCase();
    }
    Object.freeze(this);
  }
  toString() {
    return this.#join(this.language, this.script, this.region, this.variant, this.extension, this.privateUse);
  }
  #join() {
    return Array.prototype.filter.call(arguments, Boolean).join("-");
  }
};
var LanguageTag_default = LanguageTag;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/Locale.js
var mCache = /* @__PURE__ */ Object.create(null);
var Locale = Object_default.extend(
  "sap.ui.core.Locale",
  /** @lends sap.ui.core.Locale.prototype */
  {
    constructor: function(vLocale) {
      Object_default.apply(this);
      if (vLocale instanceof LanguageTag_default) {
        this.oLanguageTag = vLocale;
        this.sLocaleId = this.oLanguageTag.toString();
      } else {
        this.oLanguageTag = new LanguageTag_default(vLocale);
        this.sLocaleId = vLocale;
      }
      Object.assign(this, this.oLanguageTag);
      this.sLanguage = this.language;
    },
    /**
     * Get the locale language.
     *
     * Note that the case might differ from the original script tag
     * (Lower case is enforced as recommended by BCP47/ISO639).
     *
     * @returns {string} the language code
     * @public
     */
    getLanguage: function() {
      return this.language;
    },
    /**
     * Get the locale script or <code>null</code> if none was specified.
     *
     * Note that the case might differ from the original language tag
     * (Upper case first letter and lower case reminder enforced as
     * recommended by BCP47/ISO15924)
     *
     * @returns {string|null} the script code or <code>null</code>
     * @public
     */
    getScript: function() {
      return this.script;
    },
    /**
     * Get the locale region or <code>null</code> if none was specified.
     *
     * Note that the case might differ from the original script tag
     * (Upper case is enforced as recommended by BCP47/ISO3166-1).
     *
     * @returns {string} the ISO3166-1 region code (2-letter or 3-digits)
     * @public
     */
    getRegion: function() {
      return this.region;
    },
    /**
     * Get the locale variants as a single string or <code>null</code>.
     *
     * Multiple variants are separated by a dash '-'.
     *
     * @returns {string|null} the variant or <code>null</code>
     * @public
     */
    getVariant: function() {
      return this.variant;
    },
    /**
     * Get the locale variants as an array of individual variants.
     *
     * The separating dashes are not part of the result.
     * If there is no variant section in the locale tag, an empty array is returned.
     *
     * @returns {string[]} the individual variant sections
     * @public
     */
    getVariantSubtags: function() {
      return this.variantSubtags;
    },
    /**
     * Get the locale extension as a single string or <code>null</code>.
     *
     * The extension always consists of a singleton character (not 'x'),
     * a dash '-' and one or more extension token, each separated
     * again with a dash.
     *
     * Use {@link #getExtensions} to get the individual extension tokens as an array.
     *
     * @returns {string|null} the extension or <code>null</code>
     * @public
     */
    getExtension: function() {
      return this.extension;
    },
    /**
     * Get the locale extensions as an array of tokens.
     *
     * The leading singleton and the separating dashes are not part of the result.
     * If there is no extensions section in the locale tag, an empty array is returned.
     *
     * @returns {string[]} the individual extension sections
     * @public
     */
    getExtensionSubtags: function() {
      return this.extensionSubtags;
    },
    /**
     * Get the locale private use section or <code>null</code>.
     *
     * @returns {string} the private use section
     * @public
     */
    getPrivateUse: function() {
      return this.privateUse;
    },
    /**
     * Get the locale private use section as an array of tokens.
     *
     * The leading singleton and the separating dashes are not part of the result.
     * If there is no private use section in the locale tag, an empty array is returned.
     *
     * @returns {string[]} the tokens of the private use section
     * @public
     */
    getPrivateUseSubtags: function() {
      return this.privateUseSubtags;
    },
    /**
     * Check if a subtag is provided
     *
     * @param {string} sSubtag The subtag to check
     * @returns {boolean} Wether the subtag is provided or not
     */
    hasPrivateUseSubtag: function(sSubtag) {
      assert_default(sSubtag && sSubtag.match(/^[0-9A-Z]{1,8}$/i), "subtag must be a valid BCP47 private use tag");
      return this.privateUseSubtags.indexOf(sSubtag) >= 0;
    },
    toString: function() {
      return this.oLanguageTag.toString();
    },
    /**
     * Best guess to get a proper SAP Logon Language for this locale.
     *
     * Conversions taken into account:
     * <ul>
     * <li>use the language part only</li>
     * <li>convert old ISO639 codes to newer ones (e.g. 'iw' to 'he')</li>
     * <li>for Chinese, map 'Traditional Chinese' or region 'TW' to SAP proprietary code 'zf'</li>
     * <li>map private extensions x-saptrc, x-sappsd and saprigi to SAP pseudo languages '1Q', '2Q' and '3Q'</li>
     * <li>remove ext. language sub tags</li>
     * <li>convert to uppercase</li>
     * </ul>
     *
     * Note that the conversion also returns a result for languages that are not
     * supported by the default set of SAP languages. This method has no knowledge
     * about the concrete languages of any given backend system.
     *
     * @returns {string} a language code that should
     * @public
     * @since 1.17.0
     * @deprecated As of 1.44, use {@link sap.ui.core.Configuration#getSAPLogonLanguage} instead
     *   as that class allows to configure an SAP Logon language.
     */
    getSAPLogonLanguage: function() {
      return Localization_default._getSAPLogonLanguage(this);
    }
  }
);
Locale._getCoreLocale = function(oLocale) {
  if (oLocale instanceof LanguageTag_default) {
    oLocale = mCache[oLocale.toString()] || new Locale(oLocale);
    mCache[oLocale.toString()] = oLocale;
  }
  return oLocale;
};
var Locale_default = Locale;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/util/_merge.js
var oToken = /* @__PURE__ */ Object.create(null);
var fnMerge = function() {
  var src, copyIsArray, copy, name5, options, clone, target = arguments[2] || {}, i = 3, length = arguments.length, deep = arguments[0] || false, skipToken = arguments[1] ? void 0 : oToken;
  if (typeof target !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i < length; i++) {
    if ((options = arguments[i]) != null) {
      for (name5 in options) {
        src = target[name5];
        copy = options[name5];
        if (name5 === "__proto__" || target === copy) {
          continue;
        }
        if (deep && copy && (isPlainObject_default(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject_default(src) ? src : {};
          }
          target[name5] = fnMerge(deep, arguments[1], clone, copy);
        } else if (copy !== skipToken) {
          target[name5] = copy;
        }
      }
    }
  }
  return target;
};
var merge_default = fnMerge;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/util/extend.js
var fnExtend = function() {
  var args = [false, true];
  args.push.apply(args, arguments);
  return merge_default.apply(null, args);
};
var extend_default = fnExtend;

// node_modules/@ui5/webcomponents-base/dist/asset-registries/LocaleData.js
init_AssetParameters();
var localeDataMap = /* @__PURE__ */ new Map();
var loaders = /* @__PURE__ */ new Map();
var cldrPromises = /* @__PURE__ */ new Map();
var reportedErrors = /* @__PURE__ */ new Set();
var warningShown = false;
var M_ISO639_OLD_TO_NEW2 = {
  "iw": "he",
  "ji": "yi",
  "in": "id"
};
var _showAssetsWarningOnce = (localeId) => {
  if (warningShown) {
    return;
  }
  console.warn(`[LocaleData] Supported locale "${localeId}" not configured, import the "Assets.js" module from the webcomponents package you are using.`);
  warningShown = true;
};
var calcLocale = (language, region, script) => {
  language = language && M_ISO639_OLD_TO_NEW2[language] || language;
  if (language === "no") {
    language = "nb";
  }
  if (language === "zh" && !region) {
    if (script === "Hans") {
      region = "CN";
    } else if (script === "Hant") {
      region = "TW";
    }
  }
  if (language === "sh" || language === "sr" && script === "Latn") {
    language = "sr";
    region = "Latn";
  }
  let localeId = `${language}_${region}`;
  if (SUPPORTED_LOCALES.includes(localeId)) {
    if (loaders.has(localeId)) {
      return localeId;
    }
    _showAssetsWarningOnce(localeId);
    return DEFAULT_LOCALE;
  }
  localeId = language;
  if (SUPPORTED_LOCALES.includes(localeId)) {
    if (loaders.has(localeId)) {
      return localeId;
    }
    _showAssetsWarningOnce(localeId);
    return DEFAULT_LOCALE;
  }
  return DEFAULT_LOCALE;
};
var setLocaleData = (localeId, content) => {
  localeDataMap.set(localeId, content);
};
var getLocaleData = (localeId) => {
  if (!loaders.has(localeId)) {
    localeId = DEFAULT_LOCALE;
  }
  const content = localeDataMap.get(localeId);
  if (!content) {
    throw new Error(`CLDR data for locale ${localeId} is not loaded!`);
  }
  return content;
};
var _loadCldrOnce = (localeId) => {
  if (!cldrPromises.get(localeId)) {
    const loadCldr = loaders.get(localeId);
    if (!loadCldr) {
      throw new Error(`CLDR data for locale ${localeId} is not loaded!`);
    }
    cldrPromises.set(localeId, loadCldr(localeId));
  }
  return cldrPromises.get(localeId);
};
var fetchCldr = (language, region, script) => __async(void 0, null, function* () {
  const localeId = calcLocale(language, region, script);
  const openUI5Support = getFeature("OpenUI5Support");
  if (openUI5Support) {
    const cldrContent = openUI5Support.getLocaleDataObject();
    if (cldrContent) {
      setLocaleData(localeId, cldrContent);
      return;
    }
  }
  try {
    const cldrContent = yield _loadCldrOnce(localeId);
    setLocaleData(localeId, cldrContent);
  } catch (error) {
    const e = error;
    if (!reportedErrors.has(e.message)) {
      reportedErrors.add(e.message);
      console.error(e.message);
    }
  }
});
var registerLocaleDataLoader = (localeId, loader) => {
  loaders.set(localeId, loader);
};
registerLocaleDataLoader("en", () => __async(void 0, null, function* () {
  const cldrContent = yield fetch(`https://sdk.openui5.org/1.120.5/resources/sap/ui/core/cldr/en.json`);
  return cldrContent.json();
}));
attachLanguageChange(() => {
  const locale = getLocale_default();
  return fetchCldr(locale.getLanguage(), locale.getRegion(), locale.getScript());
});

// node_modules/@ui5/webcomponents-localization/dist/sap/base/util/LoaderExtensions.js
var loadResource = (moduleName) => {
  const moduleFormat = moduleName.match(/sap\/ui\/core\/cldr\/(\w+)\.json/);
  if (!moduleFormat) {
    throw new Error(`Unknown module "${moduleName}"`);
  }
  const localeId = moduleFormat[1];
  return getLocaleData(localeId);
};
var LoaderExtensions = {
  loadResource
};
var LoaderExtensions_default = LoaderExtensions;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/i18n/date/CalendarWeekNumbering.js
var CalendarWeekNumbering = {
  /**
   * The default calendar week numbering:
   *
   * The framework determines the week numbering scheme; currently it is derived from the
   * active format locale. Future versions of UI5 might select a different week numbering
   * scheme.
   *
   * @public
   */
  Default: "Default",
  /**
   * Official calendar week numbering in most of Europe (ISO 8601 standard):
   * <ul>
   * <li>Monday is first day of the week,
   * <li>the week containing January 4th is first week of the year.
   * </ul>
   *
   * @public
   */
  ISO_8601: "ISO_8601",
  /**
   * Official calendar week numbering in much of the Middle East (Middle Eastern calendar):
   * <ul>
   * <li>Saturday is first day of the week,
   * <li>the week containing January 1st is first week of the year.
   * </ul>
   *
   * @public
   */
  MiddleEastern: "MiddleEastern",
  /**
   * Official calendar week numbering in the United States, Canada, Brazil, Israel, Japan, and
   * other countries (Western traditional calendar):
   * <ul>
   * <li>Sunday is first day of the week,
   * <li>the week containing January 1st is first week of the year.
   * </ul>
   *
   * @public
   */
  WesternTraditional: "WesternTraditional"
};
Object.defineProperty(CalendarWeekNumbering, "getWeekConfigurationValues", {
  // configurable : false,
  // enumerable : false,
  value: function(sCalendarWeekNumbering) {
    switch (sCalendarWeekNumbering) {
      case CalendarWeekNumbering.ISO_8601:
        return {
          firstDayOfWeek: 1,
          minimalDaysInFirstWeek: 4
        };
      case CalendarWeekNumbering.MiddleEastern:
        return {
          firstDayOfWeek: 6,
          minimalDaysInFirstWeek: 1
        };
      case CalendarWeekNumbering.WesternTraditional:
        return {
          firstDayOfWeek: 0,
          minimalDaysInFirstWeek: 1
        };
      default:
        return void 0;
    }
  }
  // writable : false
});
var CalendarWeekNumbering_default = CalendarWeekNumbering;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/date/CalendarWeekNumbering.js
DataType_default.registerEnum("sap.ui.core.date.CalendarWeekNumbering", CalendarWeekNumbering_default);
var CalendarWeekNumbering_default2 = CalendarWeekNumbering_default;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/LocaleData.js
var rCIgnoreCase = /c/i;
var rEIgnoreCase = /e/i;
var mLegacyUnit2CurrentUnit = {
  "acceleration-meter-per-second-squared": "acceleration-meter-per-square-second",
  "concentr-milligram-per-deciliter": "concentr-milligram-ofglucose-per-deciliter",
  "concentr-part-per-million": "concentr-permillion",
  "consumption-liter-per-100kilometers": "consumption-liter-per-100-kilometer",
  "mass-metric-ton": "mass-tonne",
  "pressure-millimeter-of-mercury": "pressure-millimeter-ofhg",
  "pressure-pound-per-square-inch": "pressure-pound-force-per-square-inch",
  "pressure-inch-hg": "pressure-inch-ofhg",
  "torque-pound-foot": "torque-pound-force-foot"
};
var rNumberInScientificNotation = /^([+-]?)((\d+)(?:\.(\d+))?)[eE]([+-]?\d+)$/;
var rTrailingZeroes = /0+$/;
var rFallbackPatternTextParts = /(.*)?\{[0|1]}(.*)?\{[0|1]}(.*)?/;
var aSupportedWidths = ["narrow", "abbreviated", "wide"];
var LocaleData = Object_default.extend(
  "sap.ui.core.LocaleData",
  /** @lends sap.ui.core.LocaleData.prototype */
  {
    constructor: function(oLocale) {
      Object_default.apply(this);
      this.oLocale = Locale_default._getCoreLocale(oLocale);
      var oDataLoaded = getData(this.oLocale);
      this.mData = oDataLoaded.mData;
      this.sCLDRLocaleId = oDataLoaded.sCLDRLocaleId;
    },
    /**
     * @private
     * @ui5-restricted UI5 Web Components
     */
    _get: function() {
      return this._getDeep(this.mData, arguments);
    },
    /**
     * Retrieves merged object if overlay data is available
     * @private
     * @return {object} merged object
     */
    _getMerged: function() {
      return this._get.apply(this, arguments);
    },
    /**
     * Get month names in width "narrow", "abbreviated" or "wide". Result may contain alternative month names.
     *
     * @param {"narrow"|"abbreviated"|"wide"} sWidth
     *   The required width for the month names
     * @param {sap.ui.core.CalendarType} [sCalendarType]
     *   The type of calendar; defaults to the calendar type either set in configuration or calculated from locale
     * @returns {array}
     *   The array of month names; if no alternative exists the entry for the month is its name as a string; if
     *   there are alternative month names the entry for the month is an array of strings with the alternative names
     * @private
     */
    _getMonthsWithAlternatives: function(sWidth, sCalendarType) {
      return this._get(getCLDRCalendarName(sCalendarType), "months", "format", sWidth);
    },
    /**
     * Get standalone month names in width "narrow", "abbreviated" or "wide". Result may contain alternative month
     * names.
     *
     * @param {"narrow"|"abbreviated"|"wide"} sWidth
     *   The required width for the month names
     * @param {sap.ui.core.CalendarType} [sCalendarType]
     *   The type of calendar; defaults to the calendar type either set in configuration or calculated from locale
     * @returns {array}
     *   The array of month names; if no alternative exists the entry for the month is its name as a string; if
     *   there are alternative month names the entry for the month is an array of strings with the alternative names
     * @private
     */
    _getMonthsStandAloneWithAlternatives: function(sWidth, sCalendarType) {
      return this._get(getCLDRCalendarName(sCalendarType), "months", "stand-alone", sWidth);
    },
    _getDeep: function(oObject, aPropertyNames) {
      var oResult = oObject;
      for (var i = 0; i < aPropertyNames.length; i++) {
        oResult = oResult[aPropertyNames[i]];
        if (oResult === void 0) {
          break;
        }
      }
      return oResult;
    },
    /**
     * Get orientation (left-to-right or right-to-left).
     *
     * @returns {string} character orientation for this locale
     * @public
     */
    getOrientation: function() {
      return this._get("orientation");
    },
    /**
     * Get a display name for the language of the Locale of this LocaleData, using
     * the CLDR display names for languages.
     *
     * The lookup logic works as follows:
     * 1. language code and region is checked (e.g. "en-GB")
     * 2. If not found: language code and script is checked (e.g. "zh-Hant")
     * 3. If not found language code is checked (e.g. "en")
     * 4. If it is then still not found <code>undefined</code> is returned.
     *
     * @returns {string} language name, e.g. "English", "British English", "American English"
     *  or <code>undefined</code> if language cannot be found
     * @private
     * @ui5-restricted sap.ushell
     */
    getCurrentLanguageName: function() {
      return this.getLanguageName(this.oLocale.toString());
    },
    /**
     * Gets the locale-specific language name for the given language tag.
     *
     * The languages returned by {@link #getLanguages} from the CLDR raw data do not contain the
     * language names if they can be derived from the language and the script or the territory.
     * If the map of languages contains no entry for the given language tag, derive the language
     * name from the used script or region.
     *
     * @param {string} sLanguageTag
     *   The language tag, for example "en", "en-US", "en_US", "zh-Hant", or "zh_Hant"
     * @returns {string|undefined}
     *   The language name, or <code>undefined</code> if the name cannot be determined
     * @throws {TypeError} When the given language tag isn't valid
     *
     * @public
     */
    getLanguageName: function(sLanguageTag) {
      const oLanguageTag = new LanguageTag_default(sLanguageTag);
      let sLanguage = Localization_default.getModernLanguage(oLanguageTag.language);
      let sScript = oLanguageTag.script;
      if (sLanguage === "sr" && sScript === "Latn") {
        sLanguage = "sh";
        sScript = null;
      }
      const sRegion = oLanguageTag.region;
      const oLanguages = this._get("languages");
      const sLanguageText = oLanguages[sLanguage];
      if (!sScript && !sRegion || !sLanguageText) {
        return sLanguageText;
      }
      const sResult = oLanguages[sLanguage + "_" + sRegion] || oLanguages[sLanguage + "_" + sScript];
      if (sResult) {
        return sResult;
      }
      if (sScript) {
        const sScriptText = this._get("scripts")[sScript];
        if (sScriptText) {
          return sLanguageText + " (" + sScriptText + ")";
        }
      }
      if (sRegion) {
        const sRegionText = this._get("territories")[sRegion];
        if (sRegionText) {
          return sLanguageText + " (" + sRegionText + ")";
        }
      }
      return sLanguageText;
    },
    /**
     * Gets locale-specific language names, as available in the CLDR raw data.
     *
     * To avoid redundancies, with CLDR version 43 only language names are contained which cannot be derived from
     * the language and the script or the territory. If a language tag is not contained in the map, use
     * {@link #getLanguageName} to get the derived locale-specific language name for that language tag.
     *
     * @returns {Object<string, string>} Maps a language tag to the locale-specific language name
     *
     * @public
     */
    getLanguages: function() {
      const oLanguages = this._get("languages");
      ["ar_001", "de_AT", "de_CH", "en_AU", "en_CA", "en_GB", "en_US", "es_419", "es_ES", "es_MX", "fa_AF", "fr_CA", "fr_CH", "nds_NL", "nl_BE", "pt_BR", "pt_PT", "ro_MD", "sw_CD", "zh_Hans", "zh_Hant"].forEach((sLanguageTag) => {
        if (!oLanguages[sLanguageTag]) {
          oLanguages[sLanguageTag] = this.getLanguageName(sLanguageTag);
        }
      });
      return oLanguages;
    },
    /**
     * Gets locale-specific script names, as available in the CLDR raw data.
     *
     * To avoid redundancies, with CLDR version 43 only scripts are contained for which the language-specific name
     * is different from the script key. If a script key is not contained in the map, use the script key as script
     * name.
     *
     * @returns {Object<string, string>} Maps a script key to the locale-specific script name
     *
     * @public
     */
    getScripts: function() {
      return this._get("scripts");
    },
    /**
     * Gets locale-specific territory names, as available in the CLDR raw data.
     *
     * To avoid redundancies, with CLDR version 43 only territories are contained for which the language-specific
     * name is different from the territory key.
     *
     * @returns {Object<string, string>} Maps a territory key to the locale-specific territory name
     *
     * @public
     */
    getTerritories: function() {
      return this._get("territories");
    },
    /**
     * Get month names in width "narrow", "abbreviated" or "wide".
     *
     * @param {"narrow"|"abbreviated"|"wide"} sWidth
     *   The required width for the month names
     * @param {sap.ui.core.CalendarType} [sCalendarType]
     *   The type of calendar; defaults to the calendar type either set in configuration or calculated from locale
     * @returns {string[]}
     *   The array of month names
     * @public
     */
    getMonths: function(sWidth, sCalendarType) {
      assert_default(aSupportedWidths.includes(sWidth), "sWidth must be narrow, abbreviated or wide");
      return this._get(getCLDRCalendarName(sCalendarType), "months", "format", sWidth).map((vMonthName) => {
        return Array.isArray(vMonthName) ? vMonthName[0] : vMonthName;
      });
    },
    /**
     * Get standalone month names in width "narrow", "abbreviated" or "wide".
     *
     * @param {"narrow"|"abbreviated"|"wide"} sWidth
     *   The required width for the month names
     * @param {sap.ui.core.CalendarType} [sCalendarType]
     *   The type of calendar; defaults to the calendar type either set in configuration or calculated from locale
     * @returns {string[]}
     *   The array of standalone month names
     * @public
     */
    getMonthsStandAlone: function(sWidth, sCalendarType) {
      assert_default(aSupportedWidths.includes(sWidth), "sWidth must be narrow, abbreviated or wide");
      return this._get(getCLDRCalendarName(sCalendarType), "months", "stand-alone", sWidth).map((vMonthName) => {
        return Array.isArray(vMonthName) ? vMonthName[0] : vMonthName;
      });
    },
    /**
     * Get day names in width "narrow", "abbreviated" or "wide".
     *
     * @param {string} sWidth the required width for the day names
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {array} array of day names (starting with Sunday)
     * @public
     */
    getDays: function(sWidth, sCalendarType) {
      assert_default(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide" || sWidth == "short", "sWidth must be narrow, abbreviate, wide or short");
      return this._get(getCLDRCalendarName(sCalendarType), "days", "format", sWidth);
    },
    /**
     * Get standalone day names in width "narrow", "abbreviated" or "wide".
     *
     * @param {string} sWidth the required width for the day names
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {array} array of day names (starting with Sunday)
     * @public
     */
    getDaysStandAlone: function(sWidth, sCalendarType) {
      assert_default(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide" || sWidth == "short", "sWidth must be narrow, abbreviated, wide or short");
      return this._get(getCLDRCalendarName(sCalendarType), "days", "stand-alone", sWidth);
    },
    /**
     * Get quarter names in width "narrow", "abbreviated" or "wide".
     *
     * @param {string} sWidth the required width for the quarter names
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {array} array of quarters
     * @public
     */
    getQuarters: function(sWidth, sCalendarType) {
      assert_default(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
      return this._get(getCLDRCalendarName(sCalendarType), "quarters", "format", sWidth);
    },
    /**
     * Get standalone quarter names in width "narrow", "abbreviated" or "wide".
     *
     * @param {string} sWidth the required width for the quarter names
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {array} array of quarters
     * @public
     */
    getQuartersStandAlone: function(sWidth, sCalendarType) {
      assert_default(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
      return this._get(getCLDRCalendarName(sCalendarType), "quarters", "stand-alone", sWidth);
    },
    /**
     * Get day periods in width "narrow", "abbreviated" or "wide".
     *
     * @param {string} sWidth the required width for the day period names
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {array} array of day periods (AM, PM)
     * @public
     */
    getDayPeriods: function(sWidth, sCalendarType) {
      assert_default(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
      return this._get(getCLDRCalendarName(sCalendarType), "dayPeriods", "format", sWidth);
    },
    /**
     * Get standalone day periods in width "narrow", "abbreviated" or "wide".
     *
     * @param {string} sWidth the required width for the day period names
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {array} array of day periods (AM, PM)
     * @public
     */
    getDayPeriodsStandAlone: function(sWidth, sCalendarType) {
      assert_default(sWidth == "narrow" || sWidth == "abbreviated" || sWidth == "wide", "sWidth must be narrow, abbreviated or wide");
      return this._get(getCLDRCalendarName(sCalendarType), "dayPeriods", "stand-alone", sWidth);
    },
    /**
     * Get date pattern in format "short", "medium", "long" or "full".
     *
     * @param {string} sStyle the required style for the date pattern
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {string} the selected date pattern
     * @public
     */
    getDatePattern: function(sStyle, sCalendarType) {
      assert_default(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
      return this._get(getCLDRCalendarName(sCalendarType), "dateFormats", sStyle);
    },
    /**
     * Get flexible day periods in style format "abbreviated", "narrow" or "wide".
     *
     * @param {string} sWidth
     *   The required width for the flexible day period names
     * @param {sap.ui.core.CalendarType} [sCalendarType]
     *   The type of calendar. If it's not set, it falls back to the calendar type either set in
     *   configuration or calculated from locale.
     * @returns {object|undefined}
     *   Object of flexible day periods or 'undefined' if none can be found
     *
     * @example <caption>Output</caption>
     * {
     *   "midnight": "midnight",
     *   "noon": "noon",
     *   "morning1": "in the morning",
     *   "afternoon1": "in the afternoon",
     *   "evening1": "in the evening",
     *   "night1": "at night"
     * }
     *
     * @private
     */
    getFlexibleDayPeriods: function(sWidth, sCalendarType) {
      return this._get(getCLDRCalendarName(sCalendarType), "flexibleDayPeriods", "format", sWidth);
    },
    /**
     * Get flexible day periods in style format "abbreviated", "narrow" or "wide" for case
     * "stand-alone".
     *
     * @param {string} sWidth
     *   The required width for the flexible day period names
     * @param {sap.ui.core.CalendarType} [sCalendarType]
     *   The type of calendar. If it's not set, it falls back to the calendar type either set in
     *   configuration or calculated from locale.
     * @returns {object|undefined}
     *   Object of flexible day periods or 'undefined' if none can be found
     *
     * @example <caption>Output</caption>
     * {
     *   "midnight": "midnight",
     *   "noon": "noon",
     *   "morning1": "in the morning",
     *   "afternoon1": "in the afternoon",
     *   "evening1": "in the evening",
     *   "night1": "at night"
     * }
     *
     * @private
     */
    getFlexibleDayPeriodsStandAlone: function(sWidth, sCalendarType) {
      return this._get(getCLDRCalendarName(sCalendarType), "flexibleDayPeriods", "stand-alone", sWidth);
    },
    /**
     * Get flexible day period of time or a point in time
     *
     * @param {int} iHour Hour
     * @param {int} iMinute Minute
     * @returns {string} Key of flexible day period of time e.g. <code>afternoon2</code>
     *
     * @private
     */
    getFlexibleDayPeriodOfTime: function(iHour, iMinute) {
      var iAbsoluteMinutes, oDayPeriodRules, sPeriodMatch;
      iAbsoluteMinutes = (iHour * 60 + iMinute) % 1440;
      oDayPeriodRules = this._get("dayPeriodRules");
      function parseToAbsoluteMinutes(sValue) {
        var aSplit = sValue.split(":"), sHour = aSplit[0], sMinute = aSplit[1];
        return parseInt(sHour) * 60 + parseInt(sMinute);
      }
      sPeriodMatch = Object.keys(oDayPeriodRules).find(function(sDayPeriodRule) {
        var oDayPeriodRule = oDayPeriodRules[sDayPeriodRule];
        return oDayPeriodRule["_at"] && parseToAbsoluteMinutes(oDayPeriodRule["_at"]) === iAbsoluteMinutes;
      });
      if (sPeriodMatch) {
        return sPeriodMatch;
      }
      return Object.keys(oDayPeriodRules).find(function(sDayPeriodRule) {
        var iEndValue, aIntervals, iStartValue, oDayPeriodRule = oDayPeriodRules[sDayPeriodRule];
        if (oDayPeriodRule["_at"]) {
          return false;
        }
        iStartValue = parseToAbsoluteMinutes(oDayPeriodRule["_from"]);
        iEndValue = parseToAbsoluteMinutes(oDayPeriodRule["_before"]);
        if (iStartValue > iEndValue) {
          aIntervals = [
            {
              start: iStartValue,
              end: 1440
            },
            // 24 * 60
            {
              start: 0,
              end: iEndValue
            }
          ];
        } else {
          aIntervals = [{
            start: iStartValue,
            end: iEndValue
          }];
        }
        return aIntervals.some(function(oInterval) {
          return oInterval.start <= iAbsoluteMinutes && oInterval.end > iAbsoluteMinutes;
        });
      });
    },
    /**
     * Get time pattern in style "short", "medium", "long" or "full".
     *
     * @param {string} sStyle the required style for the date pattern
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {string} the selected time pattern
     * @public
     */
    getTimePattern: function(sStyle, sCalendarType) {
      assert_default(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
      return this._get(getCLDRCalendarName(sCalendarType), "timeFormats", sStyle);
    },
    /**
     * Get datetime pattern in style "short", "medium", "long" or "full".
     *
     * @param {string} sStyle the required style for the datetime pattern
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {string} the selected datetime pattern
     * @public
     */
    getDateTimePattern: function(sStyle, sCalendarType) {
      assert_default(sStyle == "short" || sStyle == "medium" || sStyle == "long" || sStyle == "full", "sStyle must be short, medium, long or full");
      return this._get(getCLDRCalendarName(sCalendarType), "dateTimeFormats", sStyle);
    },
    /**
     * Get combined datetime pattern with given date and time style.
     *
     * @param {string} sDateStyle the required style for the date part
     * @param {string} sTimeStyle the required style for the time part
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {string} the combined datetime pattern
     * @public
     */
    getCombinedDateTimePattern: function(sDateStyle, sTimeStyle, sCalendarType) {
      assert_default(sDateStyle == "short" || sDateStyle == "medium" || sDateStyle == "long" || sDateStyle == "full", "sStyle must be short, medium, long or full");
      assert_default(sTimeStyle == "short" || sTimeStyle == "medium" || sTimeStyle == "long" || sTimeStyle == "full", "sStyle must be short, medium, long or full");
      var sDateTimePattern = this.getDateTimePattern(sDateStyle, sCalendarType), sDatePattern = this.getDatePattern(sDateStyle, sCalendarType), sTimePattern = this.getTimePattern(sTimeStyle, sCalendarType);
      return sDateTimePattern.replace("{0}", sTimePattern).replace("{1}", sDatePattern);
    },
    /**
     * Get combined pattern with datetime and timezone for the given date and time style.
     *
     * @example
     * // locale de
     * oLocaleData.getCombinedDateTimeWithTimezonePattern("long", "long");
     * // "d. MMMM y 'um' HH:mm:ss z VV"
     *
     * // locale en_GB
     * oLocaleData.getCombinedDateTimeWithTimezonePattern("long", "long");
     * // "d MMMM y 'at' HH:mm:ss z VV"
     *
     * @param {string} sDateStyle The required style for the date part
     * @param {string} sTimeStyle The required style for the time part
     * @param {sap.ui.core.CalendarType} [sCalendarType] The type of calendar. If it's not set,
     *   it falls back to the calendar type either set in the configuration or calculated from
     *   the locale.
     * @returns {string} the combined pattern with datetime and timezone
     * @private
     * @ui5-restricted sap.ui.core.format.DateFormat
     * @since 1.101
     */
    getCombinedDateTimeWithTimezonePattern: function(sDateStyle, sTimeStyle, sCalendarType) {
      return this.applyTimezonePattern(this.getCombinedDateTimePattern(sDateStyle, sTimeStyle, sCalendarType));
    },
    /**
     * Applies the timezone to the pattern
     *
     * @param {string} sPattern pattern, e.g. <code>y</code>
     * @returns {string} applied timezone, e.g. <code>y VV</code>
     * @private
     * @ui5-restricted sap.ui.core.format.DateFormat
     * @since 1.101
     */
    applyTimezonePattern: function(sPattern) {
      var aPatterns = [sPattern];
      var aMissingTokens = [{
        group: "Timezone",
        length: 2,
        field: "zone",
        symbol: "V"
      }];
      this._appendItems(aPatterns, aMissingTokens);
      return aPatterns[0];
    },
    /**
     * Retrieves all timezone translations.
     *
     * E.g. for locale "en"
     * <pre>
     * {
     *  "America/New_York": "Americas, New York"
     *  ...
     * }
     * </pre>
     *
     * @return {Object<string, string>} the mapping, with 'key' being the IANA timezone ID, and
     * 'value' being the translation.
     * @ui5-restricted sap.ui.core.format.DateFormat, sap.ui.export, sap.ushell
     * @private
     */
    getTimezoneTranslations: function() {
      var sLocale = this.oLocale.toString();
      var mTranslations = LocaleData._mTimezoneTranslations[sLocale];
      if (!mTranslations) {
        LocaleData._mTimezoneTranslations[sLocale] = mTranslations = _resolveTimezoneTranslationStructure(this._get("timezoneNames"));
      }
      return Object.assign({}, mTranslations);
    },
    /**
     * Get custom datetime pattern for a given skeleton format.
     *
     * The format string does contain pattern symbols (e.g. "yMMMd" or "Hms") and will be converted into the pattern in the used
     * locale, which matches the wanted symbols best. The symbols must be in canonical order, that is:
     * Era (G), Year (y/Y), Quarter (q/Q), Month (M/L), Week (w/W), Day-Of-Week (E/e/c), Day (d/D),
     * Hour (h/H/k/K/), Minute (m), Second (s), Timezone (z/Z/v/V/O/X/x)
     *
     * See https://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
     *
     * @param {string} sSkeleton the wanted skeleton format for the datetime pattern
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {string} the best matching datetime pattern
     * @since 1.34
     * @public
     */
    getCustomDateTimePattern: function(sSkeleton, sCalendarType) {
      var oAvailableFormats = this._get(getCLDRCalendarName(sCalendarType), "dateTimeFormats", "availableFormats");
      return this._getFormatPattern(sSkeleton, oAvailableFormats, sCalendarType);
    },
    /**
     * Returns the interval format with the given Id (see CLDR documentation for valid Ids)
     * or the fallback format if no interval format with that Id is known.
     *
     * The empty Id ("") might be used to retrieve the interval format fallback.
     *
     * @param {string} sId Id of the interval format, e.g. "d-d"
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {string} interval format string with placeholders {0} and {1}
     * @public
     * @since 1.17.0
     */
    getIntervalPattern: function(sId, sCalendarType) {
      var oIntervalFormats = this._get(getCLDRCalendarName(sCalendarType), "dateTimeFormats", "intervalFormats"), aIdParts, sIntervalId, sDifference, oInterval, sPattern;
      if (sId) {
        aIdParts = sId.split("-");
        sIntervalId = aIdParts[0];
        sDifference = aIdParts[1];
        oInterval = oIntervalFormats[sIntervalId];
        if (oInterval) {
          sPattern = oInterval[sDifference];
          if (sPattern) {
            return sPattern;
          }
        }
      }
      return oIntervalFormats.intervalFormatFallback;
    },
    /**
     * Get combined interval pattern using a given pattern and the fallback interval pattern.
     *
     * If a skeleton based pattern is not available or not wanted, this method can be used to create an interval
     * pattern based on a given pattern, using the fallback interval pattern.
     *
     * @param {string} sPattern the single date pattern to use within the interval pattern
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {string} the calculated interval pattern
     * @since 1.46
     * @public
     */
    getCombinedIntervalPattern: function(sPattern, sCalendarType) {
      const oIntervalFormats = this._get(getCLDRCalendarName(sCalendarType), "dateTimeFormats", "intervalFormats");
      const [
        /*sAll*/
        ,
        sTextBefore,
        sTextBetween,
        sTextAfter
      ] = rFallbackPatternTextParts.exec(oIntervalFormats.intervalFormatFallback);
      return LocaleData._escapeIfNeeded(sTextBefore) + sPattern + LocaleData._escapeIfNeeded(sTextBetween) + sPattern + LocaleData._escapeIfNeeded(sTextAfter);
    },
    /**
     * Get interval pattern for a given skeleton format.
     *
     * The format string does contain pattern symbols (e.g. "yMMMd" or "Hms") and will be converted into the pattern in the used
     * locale, which matches the wanted symbols best. The symbols must be in canonical order, that is:
     * Era (G), Year (y/Y), Quarter (q/Q), Month (M/L), Week (w/W), Day-Of-Week (E/e/c), Day (d/D),
     * Hour (h/H/k/K/), Minute (m), Second (s), Timezone (z/Z/v/V/O/X/x)
     *
     * See https://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
     *
     * @param {string} sSkeleton the wanted skeleton format for the datetime pattern
     * @param {object|string} vGreatestDiff is either a string which represents the symbol matching the greatest difference in the two dates to format or an object which contains key-value pairs.
     *  The value is always true. The key is one of the date field symbol groups whose value are different between the two dates. The key can only be set with 'Year', 'Quarter', 'Month', 'Week',
     *  'Day', 'DayPeriod', 'Hour', 'Minute', or 'Second'.
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar. If it's not set, it falls back to the calendar type either set in configuration or calculated from locale.
     * @returns {string|string[]} the best matching interval pattern if interval difference is given otherwise an array with all possible interval patterns which match the given skeleton format
     * @since 1.46
     * @public
     */
    getCustomIntervalPattern: function(sSkeleton, vGreatestDiff, sCalendarType) {
      var oAvailableFormats = this._get(getCLDRCalendarName(sCalendarType), "dateTimeFormats", "intervalFormats");
      return this._getFormatPattern(sSkeleton, oAvailableFormats, sCalendarType, vGreatestDiff);
    },
    /* Helper functions for skeleton pattern processing */
    _getFormatPattern: function(sSkeleton, oAvailableFormats, sCalendarType, vDiff) {
      var vPattern, aPatterns, oIntervalFormats;
      if (!vDiff) {
        vPattern = oAvailableFormats[sSkeleton];
      } else if (typeof vDiff === "string") {
        if (vDiff == "j" || vDiff == "J") {
          vDiff = this.getPreferredHourSymbol();
        }
        oIntervalFormats = oAvailableFormats[sSkeleton];
        vPattern = oIntervalFormats && oIntervalFormats[vDiff];
      }
      if (vPattern) {
        if (typeof vPattern === "object") {
          aPatterns = Object.keys(vPattern).map(function(sKey) {
            return vPattern[sKey];
          });
        } else {
          return vPattern;
        }
      }
      if (!aPatterns) {
        aPatterns = this._createFormatPattern(sSkeleton, oAvailableFormats, sCalendarType, vDiff);
      }
      if (aPatterns && aPatterns.length === 1) {
        return aPatterns[0];
      }
      return aPatterns;
    },
    _createFormatPattern: function(sSkeleton, oAvailableFormats, sCalendarType, vDiff) {
      var aTokens = this._parseSkeletonFormat(sSkeleton), aPatterns, oBestMatch = this._findBestMatch(aTokens, sSkeleton, oAvailableFormats), oToken2, oAvailableDateTimeFormats, oSymbol, oGroup, sPattern, sSinglePattern, sDiffSymbol, sDiffGroup, rMixedSkeleton = /^([GyYqQMLwWEecdD]+)([hHkKjJmszZvVOXx]+)$/, bSingleDate, i;
      if (vDiff) {
        if (typeof vDiff === "string") {
          sDiffGroup = mCLDRSymbols[vDiff] ? mCLDRSymbols[vDiff].group : "";
          if (sDiffGroup) {
            bSingleDate = mCLDRSymbolGroups[sDiffGroup].index > aTokens[aTokens.length - 1].index;
          }
          sDiffSymbol = vDiff;
        } else {
          bSingleDate = true;
          if (aTokens[0].symbol === "y" && oBestMatch && oBestMatch.pattern.G) {
            oSymbol = mCLDRSymbols["G"];
            oGroup = mCLDRSymbolGroups[oSymbol.group];
            aTokens.splice(0, 0, {
              symbol: "G",
              group: oSymbol.group,
              match: oSymbol.match,
              index: oGroup.index,
              field: oGroup.field,
              length: 1
            });
          }
          for (i = aTokens.length - 1; i >= 0; i--) {
            oToken2 = aTokens[i];
            if (vDiff[oToken2.group]) {
              bSingleDate = false;
              break;
            }
          }
          for (i = 0; i < aTokens.length; i++) {
            oToken2 = aTokens[i];
            if (vDiff[oToken2.group]) {
              sDiffSymbol = oToken2.symbol;
              break;
            }
          }
          if ((sDiffSymbol == "h" || sDiffSymbol == "K") && vDiff.DayPeriod) {
            sDiffSymbol = "a";
          }
        }
        if (bSingleDate) {
          return [this.getCustomDateTimePattern(sSkeleton, sCalendarType)];
        }
        if (oBestMatch && oBestMatch.missingTokens.length === 0) {
          sPattern = oBestMatch.pattern[sDiffSymbol];
          if (sPattern && oBestMatch.distance > 0) {
            sPattern = this._expandFields(sPattern, oBestMatch.patternTokens, aTokens);
          }
        }
        if (!sPattern) {
          oAvailableDateTimeFormats = this._get(getCLDRCalendarName(sCalendarType), "dateTimeFormats", "availableFormats");
          if (rMixedSkeleton.test(sSkeleton) && "ahHkKjJms".indexOf(sDiffSymbol) >= 0) {
            sPattern = this._getMixedFormatPattern(sSkeleton, oAvailableDateTimeFormats, sCalendarType, vDiff);
          } else {
            sSinglePattern = this._getFormatPattern(sSkeleton, oAvailableDateTimeFormats, sCalendarType);
            sPattern = this.getCombinedIntervalPattern(sSinglePattern, sCalendarType);
          }
        }
        aPatterns = [sPattern];
      } else if (!oBestMatch) {
        sPattern = sSkeleton;
        aPatterns = [sPattern];
      } else {
        if (typeof oBestMatch.pattern === "string") {
          aPatterns = [oBestMatch.pattern];
        } else if (typeof oBestMatch.pattern === "object") {
          aPatterns = [];
          for (var sKey in oBestMatch.pattern) {
            sPattern = oBestMatch.pattern[sKey];
            aPatterns.push(sPattern);
          }
        }
        if (oBestMatch.distance > 0) {
          if (oBestMatch.missingTokens.length > 0) {
            if (rMixedSkeleton.test(sSkeleton)) {
              aPatterns = [this._getMixedFormatPattern(sSkeleton, oAvailableFormats, sCalendarType)];
            } else {
              aPatterns = this._expandFields(aPatterns, oBestMatch.patternTokens, aTokens);
              aPatterns = this._appendItems(aPatterns, oBestMatch.missingTokens, sCalendarType);
            }
          } else {
            aPatterns = this._expandFields(aPatterns, oBestMatch.patternTokens, aTokens);
          }
        }
      }
      if (sSkeleton.indexOf("J") >= 0) {
        aPatterns.forEach(function(sPattern2, iIndex) {
          aPatterns[iIndex] = sPattern2.replace(/ ?[abB](?=([^']*'[^']*')*[^']*)$/g, "");
        });
      }
      return aPatterns;
    },
    _parseSkeletonFormat: function(sSkeleton) {
      var aTokens = [], oToken2 = {
        index: -1
      }, sSymbol, oSymbol, oGroup;
      for (var i = 0; i < sSkeleton.length; i++) {
        sSymbol = sSkeleton.charAt(i);
        if (sSymbol == "j" || sSymbol == "J") {
          sSymbol = this.getPreferredHourSymbol();
        }
        if (sSymbol == oToken2.symbol) {
          oToken2.length++;
          continue;
        }
        oSymbol = mCLDRSymbols[sSymbol];
        oGroup = mCLDRSymbolGroups[oSymbol.group];
        if (oSymbol.group == "Other" || oGroup.diffOnly) {
          throw new Error("Symbol '" + sSymbol + "' is not allowed in skeleton format '" + sSkeleton + "'");
        }
        if (oGroup.index <= oToken2.index) {
          throw new Error("Symbol '" + sSymbol + "' at wrong position or duplicate in skeleton format '" + sSkeleton + "'");
        }
        oToken2 = {
          symbol: sSymbol,
          group: oSymbol.group,
          match: oSymbol.match,
          index: oGroup.index,
          field: oGroup.field,
          length: 1
        };
        aTokens.push(oToken2);
      }
      return aTokens;
    },
    _findBestMatch: function(aTokens, sSkeleton, oAvailableFormats) {
      var aTestTokens, aMissingTokens, oToken2, oTestToken, iTest, iDistance, bMatch, iFirstDiffPos, oTokenSymbol, oTestTokenSymbol, oBestMatch = {
        distance: 1e4,
        firstDiffPos: -1
      };
      for (var sTestSkeleton in oAvailableFormats) {
        if (sTestSkeleton === "intervalFormatFallback" || sTestSkeleton.indexOf("B") > -1) {
          continue;
        }
        aTestTokens = this._parseSkeletonFormat(sTestSkeleton);
        iDistance = 0;
        aMissingTokens = [];
        bMatch = true;
        if (aTokens.length < aTestTokens.length) {
          continue;
        }
        iTest = 0;
        iFirstDiffPos = aTokens.length;
        for (var i = 0; i < aTokens.length; i++) {
          oToken2 = aTokens[i];
          oTestToken = aTestTokens[iTest];
          if (iFirstDiffPos === aTokens.length) {
            iFirstDiffPos = i;
          }
          if (oTestToken) {
            oTokenSymbol = mCLDRSymbols[oToken2.symbol];
            oTestTokenSymbol = mCLDRSymbols[oTestToken.symbol];
            if (oToken2.symbol === oTestToken.symbol) {
              if (oToken2.length === oTestToken.length) {
                if (iFirstDiffPos === i) {
                  iFirstDiffPos = aTokens.length;
                }
              } else {
                if (oToken2.length < oTokenSymbol.numericCeiling ? oTestToken.length < oTestTokenSymbol.numericCeiling : oTestToken.length >= oTestTokenSymbol.numericCeiling) {
                  iDistance += Math.abs(oToken2.length - oTestToken.length);
                } else {
                  iDistance += 5;
                }
              }
              iTest++;
              continue;
            } else {
              if (oToken2.match == oTestToken.match) {
                iDistance += Math.abs(oToken2.length - oTestToken.length) + 10;
                iTest++;
                continue;
              }
            }
          }
          aMissingTokens.push(oToken2);
          iDistance += 50 - i;
        }
        if (iTest < aTestTokens.length) {
          bMatch = false;
        }
        if (bMatch && (iDistance < oBestMatch.distance || iDistance === oBestMatch.distance && iFirstDiffPos > oBestMatch.firstDiffPos)) {
          oBestMatch.distance = iDistance;
          oBestMatch.firstDiffPos = iFirstDiffPos;
          oBestMatch.missingTokens = aMissingTokens;
          oBestMatch.pattern = oAvailableFormats[sTestSkeleton];
          oBestMatch.patternTokens = aTestTokens;
        }
      }
      if (oBestMatch.pattern) {
        return oBestMatch;
      }
    },
    _expandFields: function(vPattern, aPatternTokens, aTokens) {
      var bSinglePattern = typeof vPattern === "string";
      var aPatterns;
      if (bSinglePattern) {
        aPatterns = [vPattern];
      } else {
        aPatterns = vPattern;
      }
      var aResult = aPatterns.map(function(sPattern) {
        var mGroups = {}, mPatternGroups = {}, sResultPatterm = "", bQuoted = false, i = 0, iSkeletonLength, iPatternLength, iBestLength, iNewLength, oSkeletonToken, oBestToken, oSymbol, sChar;
        aTokens.forEach(function(oToken2) {
          mGroups[oToken2.group] = oToken2;
        });
        aPatternTokens.forEach(function(oToken2) {
          mPatternGroups[oToken2.group] = oToken2;
        });
        while (i < sPattern.length) {
          sChar = sPattern.charAt(i);
          if (bQuoted) {
            sResultPatterm += sChar;
            if (sChar == "'") {
              bQuoted = false;
            }
          } else {
            oSymbol = mCLDRSymbols[sChar];
            if (oSymbol && mGroups[oSymbol.group] && mPatternGroups[oSymbol.group]) {
              oSkeletonToken = mGroups[oSymbol.group];
              oBestToken = mPatternGroups[oSymbol.group];
              iSkeletonLength = oSkeletonToken.length;
              iBestLength = oBestToken.length;
              iPatternLength = 1;
              while (sPattern.charAt(i + 1) == sChar) {
                i++;
                iPatternLength++;
              }
              if (iSkeletonLength === iBestLength || (iSkeletonLength < oSymbol.numericCeiling ? iPatternLength >= oSymbol.numericCeiling : iPatternLength < oSymbol.numericCeiling)) {
                iNewLength = iPatternLength;
              } else {
                iNewLength = Math.max(iPatternLength, iSkeletonLength);
              }
              for (var j = 0; j < iNewLength; j++) {
                sResultPatterm += sChar;
              }
            } else {
              sResultPatterm += sChar;
              if (sChar == "'") {
                bQuoted = true;
              }
            }
          }
          i++;
        }
        return sResultPatterm;
      });
      return bSinglePattern ? aResult[0] : aResult;
    },
    _appendItems: function(aPatterns, aMissingTokens, sCalendarType) {
      var oAppendItems = this._get(getCLDRCalendarName(sCalendarType), "dateTimeFormats", "appendItems");
      aPatterns.forEach(function(sPattern, iIndex) {
        var sDisplayName, sAppendPattern, sAppendField;
        aMissingTokens.forEach(function(oToken2) {
          sAppendPattern = oAppendItems[oToken2.group];
          sDisplayName = "'" + this.getDisplayName(oToken2.field) + "'";
          sAppendField = "";
          for (var i = 0; i < oToken2.length; i++) {
            sAppendField += oToken2.symbol;
          }
          aPatterns[iIndex] = sAppendPattern.replace(/\{0\}/, sPattern).replace(/\{1\}/, sAppendField).replace(/\{2\}/, sDisplayName);
        }.bind(this));
      }.bind(this));
      return aPatterns;
    },
    _getMixedFormatPattern: function(sSkeleton, oAvailableFormats, sCalendarType, vDiff) {
      var rMixedSkeleton = /^([GyYqQMLwWEecdD]+)([hHkKjJmszZvVOXx]+)$/, rWideMonth = /MMMM|LLLL/, rAbbrevMonth = /MMM|LLL/, rWeekDay = /E|e|c/, oResult, sDateSkeleton, sTimeSkeleton, sStyle, sDatePattern, sTimePattern, sDateTimePattern, sResultPattern;
      oResult = rMixedSkeleton.exec(sSkeleton);
      sDateSkeleton = oResult[1];
      sTimeSkeleton = oResult[2];
      sDatePattern = this._getFormatPattern(sDateSkeleton, oAvailableFormats, sCalendarType);
      if (vDiff) {
        sTimePattern = this.getCustomIntervalPattern(sTimeSkeleton, vDiff, sCalendarType);
      } else {
        sTimePattern = this._getFormatPattern(sTimeSkeleton, oAvailableFormats, sCalendarType);
      }
      if (rWideMonth.test(sDateSkeleton)) {
        sStyle = rWeekDay.test(sDateSkeleton) ? "full" : "long";
      } else if (rAbbrevMonth.test(sDateSkeleton)) {
        sStyle = "medium";
      } else {
        sStyle = "short";
      }
      sDateTimePattern = this.getDateTimePattern(sStyle, sCalendarType);
      sResultPattern = sDateTimePattern.replace(/\{1\}/, sDatePattern).replace(/\{0\}/, sTimePattern);
      return sResultPattern;
    },
    /**
     * Get number symbol "decimal", "group", "plusSign", "minusSign", "percentSign".
     *
     * @param {string} sType the required type of symbol
     * @returns {string} the selected number symbol
     * @public
     */
    getNumberSymbol: function(sType) {
      assert_default(sType == "decimal" || sType == "group" || sType == "plusSign" || sType == "minusSign" || sType == "percentSign", "sType must be decimal, group, plusSign, minusSign or percentSign");
      return this._get("symbols-latn-" + sType);
    },
    /**
     * Get lenient number symbols for "plusSign" or "minusSign".
     *
     * @param {string} sType the required type of symbol
     * @returns {string} the selected lenient number symbols, e.g. "-‒⁻₋−➖﹣"
     * @public
     */
    getLenientNumberSymbols: function(sType) {
      assert_default(sType == "plusSign" || sType == "minusSign", "sType must be plusSign or minusSign");
      return this._get("lenient-scope-number")[sType];
    },
    /**
     * Get decimal format pattern.
     *
     * @returns {string} The pattern
     * @public
     */
    getDecimalPattern: function() {
      return this._get("decimalFormat").standard;
    },
    /**
     * Get currency format pattern.
     *
     * CLDR format pattern:
     *
     * @example standard with currency symbol in front of the number
     * ¤#,##0.00
     * $100,000.00
     * $-100,000.00
     *
     * @example accounting with negative number pattern after the semicolon
     * ¤#,##0.00;(¤#,##0.00)
     * $100,000.00
     * ($100,000.00)
     *
     * @see https://cldr.unicode.org/translation/numbers-currency/number-patterns
     *
     * @param {string} sContext the context of the currency pattern (standard or accounting)
     * @returns {string} The pattern
     * @public
     */
    getCurrencyPattern: function(sContext) {
      return this._get("currencyFormat")[sContext] || this._get("currencyFormat").standard;
    },
    getCurrencySpacing: function(sPosition) {
      return this._get("currencyFormat", "currencySpacing", sPosition === "after" ? "afterCurrency" : "beforeCurrency");
    },
    /**
     * Get percent format pattern.
     *
     * @returns {string} The pattern
     * @public
     */
    getPercentPattern: function() {
      return this._get("percentFormat").standard;
    },
    /**
     * Get miscellaneous pattern.
     *
     * @param {string} sName the name of the misc pattern, can be "approximately", "atLeast", "atMost" or "range"
     * @returns {string} The pattern
     * @public
     */
    getMiscPattern: function(sName) {
      assert_default(sName == "approximately" || sName == "atLeast" || sName == "atMost" || sName == "range", "sName must be approximately, atLeast, atMost or range");
      return this._get("miscPattern")[sName];
    },
    /**
     * Returns the required minimal number of days for the first week of a year.
     *
     * This is the minimal number of days of the week which must be contained in the new year
     * for the week to become the first week of the year. Depending on the country, this
     * is just a single day (in the US) or at least 4 days (in most of Europe).
     *
     * All week data information in the CLDR is provided for territories (countries).
     * If the locale of this LocaleData doesn't contain country information (e.g. if it
     * contains only a language), then the "likelySubtag" information of the CLDR
     * is taken into account to guess the "most likely" territory for the locale.
     *
     * @returns {int} minimal number of days
     * @public
     */
    getMinimalDaysInFirstWeek: function() {
      return this._get("weekData-minDays");
    },
    /**
     * Returns the day that usually is regarded as the first day
     * of a week in the current locale.
     *
     * Days are encoded as integer where Sunday=0, Monday=1 etc.
     *
     * All week data information in the CLDR is provided for territories (countries).
     * If the locale of this LocaleData doesn't contain country information (e.g. if it
     * contains only a language), then the "likelySubtag" information of the CLDR
     * is taken into account to guess the "most likely" territory for the locale.
     *
     * @returns {int} first day of week
     * @public
     */
    getFirstDayOfWeek: function() {
      return this._get("weekData-firstDay");
    },
    /**
     * Returns the first day of a weekend for the given locale.
     *
     * Days are encoded in the same way as for {@link #getFirstDayOfWeek}.
     *
     * All week data information in the CLDR is provided for territories (countries).
     * If the locale of this LocaleData doesn't contain country information (e.g. if it
     * contains only a language), then the "likelySubtag" information of the CLDR
     * is taken into account to guess the "most likely" territory for the locale.
     *
     * @returns {int} first day of weekend
     * @public
     */
    getWeekendStart: function() {
      return this._get("weekData-weekendStart");
    },
    /**
     * Returns the last day of a weekend for the given locale.
     *
     * Days are encoded in the same way as for {@link #getFirstDayOfWeek}.
     *
     * All week data information in the CLDR is provided for territories (countries).
     * If the locale of this LocaleData doesn't contain country information (e.g. if it
     * contains only a language), then the "likelySubtag" information of the CLDR
     * is taken into account to guess the "most likely" territory for the locale.
     *
     * @returns {int} last day of weekend
     * @public
     */
    getWeekendEnd: function() {
      return this._get("weekData-weekendEnd");
    },
    /**
     * Returns a map of custom currency codes, defined via global configuration.
     * @returns {object} map of custom currency codes, e.g.
     * {
     *     "AUD": "AUD",
     *     "BRL": "BRL",
     *     "EUR": "EUR",
     *     "GBP": "GBP",
     * }
     * @private
     * @ui5-restricted sap.ui.core.format.NumberFormat
     * @since 1.63
     */
    getCustomCurrencyCodes: function() {
      var mCustomCurrencies = this._get("currency") || {}, mCustomCurrencyCodes = {};
      Object.keys(mCustomCurrencies).forEach(function(sCurrencyKey) {
        mCustomCurrencyCodes[sCurrencyKey] = sCurrencyKey;
      });
      return mCustomCurrencyCodes;
    },
    /**
     * Returns the number of digits of the specified currency.
     *
     * @param {string} sCurrency ISO 4217 currency code
     * @returns {int} digits of the currency
     * @public
     * @since 1.21.1
     */
    getCurrencyDigits: function(sCurrency) {
      var mCustomCurrencies = this._get("currency");
      if (mCustomCurrencies) {
        if (mCustomCurrencies[sCurrency] && mCustomCurrencies[sCurrency].hasOwnProperty("digits")) {
          return mCustomCurrencies[sCurrency].digits;
        } else if (mCustomCurrencies["DEFAULT"] && mCustomCurrencies["DEFAULT"].hasOwnProperty("digits")) {
          return mCustomCurrencies["DEFAULT"].digits;
        }
      }
      var iDigits = this._get("currencyDigits", sCurrency);
      if (iDigits == null) {
        iDigits = this._get("currencyDigits", "DEFAULT");
        if (iDigits == null) {
          iDigits = 2;
        }
      }
      return iDigits;
    },
    /**
     * Returns the currency symbol for the specified currency, if no symbol is found the ISO 4217 currency code is returned.
     *
     * @param {string} sCurrency ISO 4217 currency code
     * @returns {string} the currency symbol
     * @public
     * @since 1.21.1
     */
    getCurrencySymbol: function(sCurrency) {
      var oCurrencySymbols = this.getCurrencySymbols();
      return oCurrencySymbols && oCurrencySymbols[sCurrency] || sCurrency;
    },
    /**
     * Returns the currency code which is corresponded with the given currency symbol.
     *
     * @param {string} sCurrencySymbol The currency symbol which needs to be converted to currency code
     * @return {string} The corresponded currency code defined for the given currency symbol. The given currency symbol is returned if no currency code can be found by using the given currency symbol.
     * @public
     * @since 1.27.0
     */
    getCurrencyCodeBySymbol: function(sCurrencySymbol) {
      var oCurrencySymbols = this._get("currencySymbols"), sCurrencyCode;
      for (sCurrencyCode in oCurrencySymbols) {
        if (oCurrencySymbols[sCurrencyCode] === sCurrencySymbol) {
          return sCurrencyCode;
        }
      }
      return sCurrencySymbol;
    },
    /**
     * Returns the currency symbols available for this locale.
     * Currency symbols get accumulated by custom currency symbols.
     *
     * @returns {Object<string, string>} the map of all currency symbols available in this locale, e.g.
     * {
     *     "AUD": "A$",
     *     "BRL": "R$",
     *     "EUR": "€",
     *     "GBP": "£",
     * }
     * @public
     * @since 1.60
     */
    getCurrencySymbols: function() {
      var mCustomCurrencies = this._get("currency"), mCustomCurrencySymbols = {}, sIsoCode;
      for (var sCurrencyKey in mCustomCurrencies) {
        sIsoCode = mCustomCurrencies[sCurrencyKey].isoCode;
        if (mCustomCurrencies[sCurrencyKey].symbol) {
          mCustomCurrencySymbols[sCurrencyKey] = mCustomCurrencies[sCurrencyKey].symbol;
        } else if (sIsoCode) {
          mCustomCurrencySymbols[sCurrencyKey] = this._get("currencySymbols")[sIsoCode];
        }
      }
      return Object.assign({}, this._get("currencySymbols"), mCustomCurrencySymbols);
    },
    /**
     * Retrieves the localized display name of a unit by sUnit, e.g. "duration-hour".
     * @param {string} sUnit the unit key, e.g. "duration-hour"
     * @return {string} The localized display name for the requested unit, e.g. <code>"Hour"</code>. Return empty string <code>""</code> if not found
     * @public
     * @since 1.54
     */
    getUnitDisplayName: function(sUnit) {
      var mUnitFormat = this.getUnitFormat(sUnit);
      return mUnitFormat && mUnitFormat["displayName"] || "";
    },
    /**
     * Returns relative time patterns for the given scales as an array of objects containing scale, value and pattern.
     *
     * The array may contain the following values: "year", "month", "week", "day", "hour", "minute" and "second". If
     * no scales are given, patterns for all available scales will be returned.
     *
     * The return array will contain objects looking like:
     * <pre>
     * {
     *     scale: "minute",
     *     sign: 1,
     *     pattern: "in {0} minutes"
     * }
     * </pre>
     *
     * @param {string[]} aScales The scales for which the available patterns should be returned
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 The style of the scale patterns. The valid values are "wide", "short" and "narrow".
     * @returns {object[]} An array of all relative time patterns
     * @public
     * @since 1.34
     */
    getRelativePatterns: function(aScales, sStyle) {
      if (sStyle === void 0) {
        sStyle = "wide";
      }
      assert_default(sStyle === "wide" || sStyle === "short" || sStyle === "narrow", "sStyle is only allowed to be set with 'wide', 'short' or 'narrow'");
      var aPatterns = [], aPluralCategories = this.getPluralCategories(), oScale, oTimeEntry, iValue, iSign;
      if (!aScales) {
        aScales = ["year", "month", "week", "day", "hour", "minute", "second"];
      }
      aScales.forEach(function(sScale) {
        oScale = this._get("dateFields", sScale + "-" + sStyle);
        for (var sEntry in oScale) {
          if (sEntry.indexOf("relative-type-") === 0) {
            iValue = parseInt(sEntry.substr(14));
            aPatterns.push({
              scale: sScale,
              value: iValue,
              pattern: oScale[sEntry]
            });
          } else if (sEntry.indexOf("relativeTime-type-") == 0) {
            oTimeEntry = oScale[sEntry];
            iSign = sEntry.substr(18) === "past" ? -1 : 1;
            aPluralCategories.forEach(function(sKey) {
              var sPattern = oTimeEntry["relativeTimePattern-count-" + sKey];
              if (sPattern) {
                aPatterns.push({
                  scale: sScale,
                  sign: iSign,
                  pattern: sPattern
                });
              }
            });
          }
        }
      }.bind(this));
      return aPatterns;
    },
    /**
     * Returns the relative format pattern with given scale (year, month, week, ...) and difference value.
     *
     * @param {string} sScale the scale the relative pattern is needed for
     * @param {int} iDiff the difference in the given scale unit
     * @param {boolean} [bFuture] whether a future or past pattern should be used
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short" and "narrow"
     * @returns {string} the relative format pattern
     * @public
     * @since 1.34
     */
    getRelativePattern: function(sScale, iDiff, bFuture, sStyle) {
      var sPattern, oTypes, sKey, sPluralCategory;
      if (typeof bFuture === "string") {
        sStyle = bFuture;
        bFuture = void 0;
      }
      if (bFuture === void 0) {
        bFuture = iDiff > 0;
      }
      if (sStyle === void 0) {
        sStyle = "wide";
      }
      assert_default(sStyle === "wide" || sStyle === "short" || sStyle === "narrow", "sStyle is only allowed to be set with 'wide', 'short' or 'narrow'");
      sKey = sScale + "-" + sStyle;
      if (iDiff === 0 || iDiff === -2 || iDiff === 2) {
        sPattern = this._get("dateFields", sKey, "relative-type-" + iDiff);
      }
      if (!sPattern) {
        oTypes = this._get("dateFields", sKey, "relativeTime-type-" + (bFuture ? "future" : "past"));
        sPluralCategory = this.getPluralCategory(Math.abs(iDiff).toString());
        sPattern = oTypes["relativeTimePattern-count-" + sPluralCategory];
      }
      return sPattern;
    },
    /**
     * Returns the relative resource pattern with unit 'second' (like now, "in {0} seconds", "{0} seconds ago" under locale 'en') based on the given
     * difference value (0 means now, positive value means in the future and negative value means in the past).
     *
     * @param {int} iDiff the difference in seconds
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short" and "narrow"
     * @returns {string} the relative resource pattern in unit 'second'
     * @public
     * @since 1.31.0
     */
    getRelativeSecond: function(iDiff, sStyle) {
      return this.getRelativePattern("second", iDiff, sStyle);
    },
    /**
     * Returns the relative resource pattern with unit 'minute' (like "in {0} minute(s)", "{0} minute(s) ago" under locale 'en') based on the given
     * difference value (positive value means in the future and negative value means in the past).
     *
     * There's no pattern defined for 0 difference and the function returns null if 0 is given. In the 0 difference case, you can use the getRelativeSecond
     * function to format the difference using unit 'second'.
     *
     * @param {int} iDiff the difference in minutes
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short" and "narrow"
     * @returns {string|null} the relative resource pattern in unit 'minute'. The method returns null if 0 is given as parameter.
     * @public
     * @since 1.31.0
     */
    getRelativeMinute: function(iDiff, sStyle) {
      if (iDiff == 0) {
        return null;
      }
      return this.getRelativePattern("minute", iDiff, sStyle);
    },
    /**
     * Returns the relative resource pattern with unit 'hour' (like "in {0} hour(s)", "{0} hour(s) ago" under locale 'en') based on the given
     * difference value (positive value means in the future and negative value means in the past).
     *
     * There's no pattern defined for 0 difference and the function returns null if 0 is given. In the 0 difference case, you can use the getRelativeMinute or getRelativeSecond
     * function to format the difference using unit 'minute' or 'second'.
     *
     * @param {int} iDiff the difference in hours
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short" and "narrow"
     * @returns {string|null} the relative resource pattern in unit 'hour'. The method returns null if 0 is given as parameter.
     * @public
     * @since 1.31.0
     */
    getRelativeHour: function(iDiff, sStyle) {
      if (iDiff == 0) {
        return null;
      }
      return this.getRelativePattern("hour", iDiff, sStyle);
    },
    /**
     * Returns the relative day resource pattern (like "Today", "Yesterday", "{0} days ago") based on the given
     * difference of days (0 means today, 1 means tomorrow, -1 means yesterday, ...).
     *
     * @param {int} iDiff the difference in days
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short" and "narrow"
     * @returns {string} the relative day resource pattern
     * @public
     * @since 1.25.0
     */
    getRelativeDay: function(iDiff, sStyle) {
      return this.getRelativePattern("day", iDiff, sStyle);
    },
    /**
     * Returns the relative week resource pattern (like "This week", "Last week", "{0} weeks ago") based on the given
     * difference of weeks (0 means this week, 1 means next week, -1 means last week, ...).
     *
     * @param {int} iDiff the difference in weeks
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short" and "narrow"
     * @returns {string} the relative week resource pattern
     * @public
     * @since 1.31.0
     */
    getRelativeWeek: function(iDiff, sStyle) {
      return this.getRelativePattern("week", iDiff, sStyle);
    },
    /**
     * Returns the relative month resource pattern (like "This month", "Last month", "{0} months ago") based on the given
     * difference of months (0 means this month, 1 means next month, -1 means last month, ...).
     *
     * @param {int} iDiff the difference in months
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short" and "narrow"
     * @returns {string} the relative month resource pattern
     * @public
     * @since 1.25.0
     */
    getRelativeMonth: function(iDiff, sStyle) {
      return this.getRelativePattern("month", iDiff, sStyle);
    },
    /**
     * Returns the display name for a time unit (second, minute, hour, day, week, month, year).
     *
     * @param {string} sType Type (second, minute, hour, day, week, month, year)
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short" and "narrow"
     * returns {string} display name
     * @public
     * @since 1.34.0
     */
    getDisplayName: function(sType, sStyle) {
      assert_default(sType == "second" || sType == "minute" || sType == "hour" || sType == "zone" || sType == "day" || sType == "weekday" || sType == "week" || sType == "month" || sType == "quarter" || sType == "year" || sType == "era", "sType must be second, minute, hour, zone, day, weekday, week, month, quarter, year, era");
      if (sStyle === void 0) {
        sStyle = "wide";
      }
      assert_default(sStyle === "wide" || sStyle === "short" || sStyle === "narrow", "sStyle is only allowed to be set with 'wide', 'short' or 'narrow'");
      var aSingleFormFields = ["era", "weekday", "zone"], sKey = aSingleFormFields.indexOf(sType) === -1 ? sType + "-" + sStyle : sType;
      return this._get("dateFields", sKey, "displayName");
    },
    /**
     * Returns the relative year resource pattern (like "This year", "Last year", "{0} year ago") based on the given
     * difference of years (0 means this year, 1 means next year, -1 means last year, ...).
     *
     * @param {int} iDiff the difference in years
     * @param {string} [sStyle="wide"] @since 1.32.10, 1.34.4 the style of the pattern. The valid values are "wide", "short" and "narrow"
     * @returns {string} the relative year resource pattern
     * @public
     * @since 1.25.0
     */
    getRelativeYear: function(iDiff, sStyle) {
      return this.getRelativePattern("year", iDiff, sStyle);
    },
    /**
     * Returns the short decimal formats (like 1K, 1M....).
     *
     * @param {string} sStyle short or long
     * @param {string} sNumber 1000, 10000 ...
     * @param {string} sPlural one or other (if not exists other is used)
     * @returns {string} decimal format
     * @public
     * @since 1.25.0
     */
    getDecimalFormat: function(sStyle, sNumber, sPlural) {
      var sFormat;
      var oFormats;
      switch (sStyle) {
        case "long":
          oFormats = this._get("decimalFormat-long");
          break;
        default:
          oFormats = this._get("decimalFormat-short");
          break;
      }
      if (oFormats) {
        var sName = sNumber + "-" + sPlural;
        sFormat = oFormats[sName];
        if (!sFormat) {
          sName = sNumber + "-other";
          sFormat = oFormats[sName];
        }
      }
      return sFormat;
    },
    /**
     * Returns the short currency formats (like 1K USD, 1M USD....).
     *
     * @param {string} sStyle short
     * @param {string} sNumber 1000, 10000 ...
     * @param {string} sPlural one or other (if not exists other is used)
     * @returns {string} decimal format
     * @public
     * @since 1.51.0
     */
    getCurrencyFormat: function(sStyle, sNumber, sPlural) {
      var sFormat;
      var oFormats = this._get("currencyFormat-" + sStyle);
      if (!oFormats) {
        if (sStyle === "sap-short") {
          throw new Error('Failed to get CLDR data for property "currencyFormat-sap-short"');
        }
        oFormats = this._get("currencyFormat-short");
      }
      if (oFormats) {
        var sName = sNumber + "-" + sPlural;
        sFormat = oFormats[sName];
        if (!sFormat) {
          sName = sNumber + "-other";
          sFormat = oFormats[sName];
        }
      }
      return sFormat;
    },
    /**
     * Returns a map containing patterns for formatting lists
     *
     *@param {string} [sType='standard'] The type of the list pattern. It can be 'standard' or 'or'.
     *@param {string} [sStyle='wide'] The style of the list pattern. It can be 'wide' or 'short'.
    * @return {object} Map with list patterns
     */
    getListFormat: function(sType, sStyle) {
      var oFormats = this._get("listPattern-" + (sType || "standard") + "-" + (sStyle || "wide"));
      if (oFormats) {
        return oFormats;
      }
      return {};
    },
    /**
     * Retrieves the unit format pattern for a specific unit name considering the unit mappings.
     * @param {string} sUnit unit name, e.g. "duration-hour" or "my"
     * @return {object} The unit format configuration for the given unit name
     * @public
     * @since 1.54
     * @see sap.ui.core.LocaleData#getUnitFromMapping
     */
    getResolvedUnitFormat: function(sUnit) {
      sUnit = this.getUnitFromMapping(sUnit) || sUnit;
      return this.getUnitFormat(sUnit);
    },
    /**
     * Retrieves the unit format pattern for a specific unit name.
     *
     * Note: Does not take unit mapping into consideration.
     * @param {string} sUnit unit name, e.g. "duration-hour"
     * @return {object} The unit format configuration for the given unit name
     * @public
     * @since 1.54
     */
    getUnitFormat: function(sUnit) {
      var oResult = this._get("units", "short", sUnit);
      if (!oResult && mLegacyUnit2CurrentUnit[sUnit]) {
        oResult = this._get("units", "short", mLegacyUnit2CurrentUnit[sUnit]);
      }
      return oResult;
    },
    /**
     * Retrieves all unit format patterns merged.
     *
     * Note: Does not take unit mapping into consideration.
     * @return {object} The unit format patterns
     * @public
     * @since 1.54
     */
    getUnitFormats: function() {
      return this._getMerged("units", "short");
    },
    /**
     * Looks up the unit from defined unit mapping.
     * E.g. for defined unit mapping
     * <code>
     * {
     *  "my": "my-custom-unit",
     *  "cm": "length-centimeter"
     * }
     * </code>
     *
     * Call:
     * <code>getUnitFromMapping("my")</code> would result in <code>"my-custom-unit"</code>
     * @param {string} sMapping mapping identifier
     * @return {string} unit from the mapping
     * @public
     * @since 1.54
     */
    getUnitFromMapping: function(sMapping) {
      return this._get("unitMappings", sMapping);
    },
    /**
     * Returns array of eras.
     *
     * @param {string} sWidth the style of the era name. It can be 'wide', 'abbreviated' or 'narrow'
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar
     * @return {array} the array of eras
     * @public
     * @since 1.32.0
     */
    getEras: function(sWidth, sCalendarType) {
      assert_default(sWidth == "wide" || sWidth == "abbreviated" || sWidth == "narrow", "sWidth must be wide, abbreviate or narrow");
      var oEras = this._get(getCLDRCalendarName(sCalendarType), "era-" + sWidth), aEras = [];
      for (var i in oEras) {
        aEras[parseInt(i)] = oEras[i];
      }
      return aEras;
    },
    /**
     * Returns the map of era IDs to era dates.
     *
     * @param {sap.ui.core.CalendarType} [sCalendarType] the type of calendar
     * @return {array} the array of eras containing objects with either an _end or _start property with a date
     * @public
     * @since 1.32.0
     */
    getEraDates: function(sCalendarType) {
      var oEraDates = this._get("eras-" + sCalendarType.toLowerCase()), aEraDates = [];
      for (var i in oEraDates) {
        aEraDates[parseInt(i)] = oEraDates[i];
      }
      return aEraDates;
    },
    /**
     * Returns the defined pattern for representing the calendar week number.
     *
     * @param {string} sStyle the style of the pattern. It can only be either "wide" or "narrow".
     * @param {int} iWeekNumber the week number
     * @return {string} the week number string
     *
     * @public
     * @since 1.32.0
     */
    getCalendarWeek: function(sStyle, iWeekNumber) {
      assert_default(sStyle == "wide" || sStyle == "narrow", "sStyle must be wide or narrow");
      var oMessageBundle = Core_default.getLibraryResourceBundle("sap.ui.core", this.oLocale.toString()), sKey = "date.week.calendarweek." + sStyle;
      return oMessageBundle.getText(sKey, iWeekNumber ? [iWeekNumber] : void 0);
    },
    /**
     * Whether 1 January is the first day of the first calendar week.
     * This is the definition of the calendar week in the US.
     *
     * @return {boolean} true if the first week of the year starts with 1 January.
     * @public
     * @since 1.92.0
     */
    firstDayStartsFirstWeek: function() {
      return this.oLocale.getLanguage() === "en" && this.oLocale.getRegion() === "US";
    },
    /**
     * Returns the preferred calendar type for the current locale which exists in {@link sap.ui.core.CalendarType}
     *
     * @returns {sap.ui.core.CalendarType} the preferred calendar type
     * @public
     * @since 1.28.6
     */
    getPreferredCalendarType: function() {
      var sCalendarName, sType, i, aCalendars = this._get("calendarPreference") || [];
      for (i = 0; i < aCalendars.length; i++) {
        sCalendarName = aCalendars[i].split("-")[0];
        for (sType in CalendarType_default3) {
          if (sCalendarName === sType.toLowerCase()) {
            return sType;
          }
        }
      }
      return CalendarType_default3.Gregorian;
    },
    /**
     * Returns the preferred hour pattern symbol (h for 12, H for 24 hours) for the current locale.
     *
     * @returns {string} the preferred hour symbol
     * @public
     * @since 1.34
     */
    getPreferredHourSymbol: function() {
      return this._get("timeData", "_preferred");
    },
    /**
     * Returns an array of all plural categories available in this language.
     *
     * @returns {array} The array of plural categories
     * @public
     * @since 1.50
     */
    getPluralCategories: function() {
      var oPlurals = this._get("plurals"), aCategories = Object.keys(oPlurals);
      aCategories.push("other");
      return aCategories;
    },
    /**
     * Returns the plural category (zero, one, two, few, many or other) for the given number value.
     * The number must be passed as an unformatted number string with dot as decimal
     * separator (for example "12345.67"). To determine the correct plural category, it
     * is also necessary to keep the same number of decimal digits as given in the formatted
     * output string. For example "1" and "1.0" could be in different plural categories as
     * the number of decimal digits is different.
     *
     * Compact numbers (for example in "short" format) must be provided in the
     * locale-independent CLDR compact notation. This notation uses the plural rule operand "c"
     * for the compact decimal exponent, for example "1.2c3" for "1.2K" (1200) or "4c6" for
     * "4M" (4000000).
     *
     * Note that the operand "e" is deprecated, but is a synonym corresponding to the CLDR
     * specification for "c" and may be redefined in the future.
     *
     * @param {string|number} vNumber The number to find the plural category for
     * @returns {string} The plural category
     * @public
     * @since 1.50
     */
    getPluralCategory: function(vNumber) {
      var sNumber = typeof vNumber === "number" ? vNumber.toString() : vNumber, oPlurals = this._get("plurals");
      if (!this._pluralTest) {
        this._pluralTest = {};
      }
      for (var sCategory in oPlurals) {
        var fnTest = this._pluralTest[sCategory];
        if (!fnTest) {
          fnTest = this._parsePluralRule(oPlurals[sCategory]);
          this._pluralTest[sCategory] = fnTest;
        }
        if (fnTest(sNumber).bMatch) {
          return sCategory;
        }
      }
      return "other";
    },
    /**
     * Parses a language plural rule as specified in
     * https://unicode.org/reports/tr35/tr35-numbers.html#table-plural-operand-meanings
     *
     * @param {string} sRule The plural rule as a string
     * @returns {function(string)} A function to determine for a number given as string parameter if it matches the
     *   plural rule.
     *
     * @private
     */
    _parsePluralRule: function(sRule) {
      var OP_OR = "or", OP_AND = "and", OP_MOD = "%", OP_EQ = "=", OP_NEQ = "!=", OPD_N = "n", OPD_I = "i", OPD_F = "f", OPD_T = "t", OPD_V = "v", OPD_W = "w", OPD_C = "c", OPD_E = "e", RANGE = "..", SEP = ",";
      var i = 0, aTokens;
      aTokens = sRule.split(" ");
      function accept(sToken) {
        if (aTokens[i] === sToken) {
          i++;
          return true;
        }
        return false;
      }
      function consume() {
        var sToken = aTokens[i];
        i++;
        return sToken;
      }
      function or_condition() {
        var fnAnd, fnOr2;
        fnAnd = and_condition();
        if (accept(OP_OR)) {
          fnOr2 = or_condition();
          return function(o) {
            return fnAnd(o) || fnOr2(o);
          };
        }
        return fnAnd;
      }
      function and_condition() {
        var fnRelation, fnAnd;
        fnRelation = relation();
        if (accept(OP_AND)) {
          fnAnd = and_condition();
          return function(o) {
            return fnRelation(o) && fnAnd(o);
          };
        }
        return fnRelation;
      }
      function relation() {
        var fnExpr, fnRangeList, bEq;
        fnExpr = expr();
        if (accept(OP_EQ)) {
          bEq = true;
        } else if (accept(OP_NEQ)) {
          bEq = false;
        } else {
          throw new Error("Expected '=' or '!='");
        }
        fnRangeList = range_list();
        if (bEq) {
          return function(o) {
            return fnRangeList(o).indexOf(fnExpr(o)) >= 0;
          };
        } else {
          return function(o) {
            return fnRangeList(o).indexOf(fnExpr(o)) === -1;
          };
        }
      }
      function expr() {
        var fnOperand;
        fnOperand = operand();
        if (accept(OP_MOD)) {
          var iDivisor = parseInt(consume());
          return function(o) {
            return fnOperand(o) % iDivisor;
          };
        }
        return fnOperand;
      }
      function operand() {
        if (accept(OPD_N)) {
          return function(o) {
            return o.n;
          };
        } else if (accept(OPD_I)) {
          return function(o) {
            return o.i;
          };
        } else if (accept(OPD_F)) {
          return function(o) {
            return o.f;
          };
        } else if (accept(OPD_T)) {
          return function(o) {
            return o.t;
          };
        } else if (accept(OPD_V)) {
          return function(o) {
            return o.v;
          };
        } else if (accept(OPD_W)) {
          return function(o) {
            return o.w;
          };
        } else if (accept(OPD_C)) {
          return function(o) {
            return o.c;
          };
        } else if (accept(OPD_E)) {
          return function(o) {
            return o.c;
          };
        } else {
          throw new Error("Unknown operand: " + consume());
        }
      }
      function range_list() {
        var aValues = [], sRangeList = consume(), aParts = sRangeList.split(SEP), aRange, iFrom, iTo;
        aParts.forEach(function(sPart) {
          aRange = sPart.split(RANGE);
          if (aRange.length === 1) {
            aValues.push(parseInt(sPart));
          } else {
            iFrom = parseInt(aRange[0]);
            iTo = parseInt(aRange[1]);
            for (var i2 = iFrom; i2 <= iTo; i2++) {
              aValues.push(i2);
            }
          }
        });
        return function(o) {
          return aValues;
        };
      }
      var fnOr = or_condition();
      if (i != aTokens.length) {
        throw new Error("Not completely parsed");
      }
      return function(sValue) {
        var iDotPos, iExponent, iExponentPos, sFraction, sFractionNoZeros, sInteger, o;
        sValue = sValue.replace(rCIgnoreCase, "e");
        iExponentPos = sValue.search(rEIgnoreCase);
        iExponent = iExponentPos < 0 ? 0 : parseInt(sValue.slice(iExponentPos + 1));
        sValue = LocaleData.convertToDecimal(sValue);
        iDotPos = sValue.indexOf(".");
        if (iDotPos === -1) {
          sInteger = sValue;
          sFraction = "";
          sFractionNoZeros = "";
        } else {
          sInteger = sValue.slice(0, iDotPos);
          sFraction = sValue.slice(iDotPos + 1);
          sFractionNoZeros = sFraction.replace(rTrailingZeroes, "");
        }
        o = {
          n: parseFloat(sValue),
          i: parseInt(sInteger),
          v: sFraction.length,
          w: sFractionNoZeros.length,
          f: sFraction === "" ? 0 : parseInt(sFraction),
          t: sFractionNoZeros === "" ? 0 : parseInt(sFractionNoZeros),
          c: iExponent
        };
        return {
          bMatch: fnOr(o),
          oOperands: o
        };
      };
    }
  }
);
LocaleData.convertToDecimal = function(vValue) {
  var iIntegerLength, iExponent, iFractionLength, bNegative, iNewIntegerLength, aResult, sValue = String(vValue);
  if (!sValue.includes("e") && !sValue.includes("E")) {
    return sValue;
  }
  aResult = sValue.match(rNumberInScientificNotation);
  bNegative = aResult[1] === "-";
  sValue = aResult[2].replace(".", "");
  iIntegerLength = aResult[3] ? aResult[3].length : 0;
  iFractionLength = aResult[4] ? aResult[4].length : 0;
  iExponent = parseInt(aResult[5]);
  iNewIntegerLength = iIntegerLength + iExponent;
  if (iExponent > 0) {
    sValue = iExponent < iFractionLength ? sValue.slice(0, iNewIntegerLength) + "." + sValue.slice(iNewIntegerLength) : sValue = sValue.padEnd(iNewIntegerLength, "0");
  } else {
    sValue = -iExponent < iIntegerLength ? sValue = sValue.slice(0, iNewIntegerLength) + "." + sValue.slice(iNewIntegerLength) : sValue = "0." + sValue.padStart(iFractionLength - iExponent, "0");
  }
  if (bNegative) {
    sValue = "-" + sValue;
  }
  return sValue;
};
var mCLDRSymbolGroups = {
  "Era": {
    field: "era",
    index: 0
  },
  "Year": {
    field: "year",
    index: 1
  },
  "Quarter": {
    field: "quarter",
    index: 2
  },
  "Month": {
    field: "month",
    index: 3
  },
  "Week": {
    field: "week",
    index: 4
  },
  "Day-Of-Week": {
    field: "weekday",
    index: 5
  },
  "Day": {
    field: "day",
    index: 6
  },
  "DayPeriod": {
    field: "hour",
    index: 7,
    diffOnly: true
  },
  "Hour": {
    field: "hour",
    index: 8
  },
  "Minute": {
    field: "minute",
    index: 9
  },
  "Second": {
    field: "second",
    index: 10
  },
  "Timezone": {
    field: "zone",
    index: 11
  }
};
var mCLDRSymbols = {
  "G": {
    group: "Era",
    match: "Era",
    numericCeiling: 1
  },
  "y": {
    group: "Year",
    match: "Year",
    numericCeiling: 100
  },
  "Y": {
    group: "Year",
    match: "Year",
    numericCeiling: 100
  },
  "Q": {
    group: "Quarter",
    match: "Quarter",
    numericCeiling: 3
  },
  "q": {
    group: "Quarter",
    match: "Quarter",
    numericCeiling: 3
  },
  "M": {
    group: "Month",
    match: "Month",
    numericCeiling: 3
  },
  "L": {
    group: "Month",
    match: "Month",
    numericCeiling: 3
  },
  "w": {
    group: "Week",
    match: "Week",
    numericCeiling: 100
  },
  "W": {
    group: "Week",
    match: "Week",
    numericCeiling: 100
  },
  "d": {
    group: "Day",
    match: "Day",
    numericCeiling: 100
  },
  "D": {
    group: "Day",
    match: "Day",
    numericCeiling: 100
  },
  "E": {
    group: "Day-Of-Week",
    match: "Day-Of-Week",
    numericCeiling: 1
  },
  "e": {
    group: "Day-Of-Week",
    match: "Day-Of-Week",
    numericCeiling: 3
  },
  "c": {
    group: "Day-Of-Week",
    match: "Day-Of-Week",
    numericCeiling: 2
  },
  "h": {
    group: "Hour",
    match: "Hour12",
    numericCeiling: 100
  },
  "H": {
    group: "Hour",
    match: "Hour24",
    numericCeiling: 100
  },
  "k": {
    group: "Hour",
    match: "Hour24",
    numericCeiling: 100
  },
  "K": {
    group: "Hour",
    match: "Hour12",
    numericCeiling: 100
  },
  "m": {
    group: "Minute",
    match: "Minute",
    numericCeiling: 100
  },
  "s": {
    group: "Second",
    match: "Second",
    numericCeiling: 100
  },
  "z": {
    group: "Timezone",
    match: "Timezone",
    numericCeiling: 1
  },
  "Z": {
    group: "Timezone",
    match: "Timezone",
    numericCeiling: 1
  },
  "O": {
    group: "Timezone",
    match: "Timezone",
    numericCeiling: 1
  },
  "v": {
    group: "Timezone",
    match: "Timezone",
    numericCeiling: 1
  },
  "V": {
    group: "Timezone",
    match: "Timezone",
    numericCeiling: 1
  },
  "X": {
    group: "Timezone",
    match: "Timezone",
    numericCeiling: 1
  },
  "x": {
    group: "Timezone",
    match: "Timezone",
    numericCeiling: 1
  },
  "S": {
    group: "Other",
    numericCeiling: 100
  },
  "u": {
    group: "Other",
    numericCeiling: 100
  },
  "U": {
    group: "Other",
    numericCeiling: 1
  },
  "r": {
    group: "Other",
    numericCeiling: 100
  },
  "F": {
    group: "Other",
    numericCeiling: 100
  },
  "g": {
    group: "Other",
    numericCeiling: 100
  },
  "a": {
    group: "DayPeriod",
    numericCeiling: 1
  },
  "b": {
    group: "Other",
    numericCeiling: 1
  },
  "B": {
    group: "Other",
    numericCeiling: 1
  },
  "A": {
    group: "Other",
    numericCeiling: 100
  }
};
function getDesigntimePropertyAsArray(sValue) {
  var m = /\$([-a-z0-9A-Z._]+)(?::([^$]*))?\$/.exec(sValue);
  return m && m[2] ? m[2].split(/,/) : null;
}
var _cldrLocales = getDesigntimePropertyAsArray("$cldr-locales:ar,ar_EG,ar_SA,bg,ca,cnr,cy,cs,da,de,de_AT,de_CH,el,el_CY,en,en_AU,en_GB,en_HK,en_IE,en_IN,en_NZ,en_PG,en_SG,en_ZA,es,es_AR,es_BO,es_CL,es_CO,es_MX,es_PE,es_UY,es_VE,et,fa,fi,fr,fr_BE,fr_CA,fr_CH,fr_LU,he,hi,hr,hu,id,it,it_CH,ja,kk,ko,lt,lv,mk,ms,nb,nl,nl_BE,pl,pt,pt_PT,ro,ru,ru_UA,sk,sl,sr,sr_Latn,sv,th,tr,uk,vi,zh_CN,zh_HK,zh_SG,zh_TW$");
var M_SUPPORTED_LOCALES = function() {
  var LOCALES = _cldrLocales, result = {}, i;
  if (LOCALES) {
    for (i = 0; i < LOCALES.length; i++) {
      result[LOCALES[i]] = true;
    }
  }
  return result;
}();
var mLocaleDatas = {};
function _resolveTimezoneTranslationStructure(oNode, sKey, oResult, aParentTranslations) {
  aParentTranslations = aParentTranslations ? aParentTranslations.slice() : [];
  oResult = oResult || {};
  sKey = sKey || "";
  Object.keys(oNode).forEach(function(sChildKey) {
    var vChildNode = oNode[sChildKey];
    if (typeof vChildNode === "object") {
      var aParentTranslationForChild = aParentTranslations.slice();
      var sParent = vChildNode["_parent"];
      if (sParent) {
        aParentTranslationForChild.push(sParent);
      }
      _resolveTimezoneTranslationStructure(vChildNode, sKey + sChildKey + "/", oResult, aParentTranslationForChild);
    } else if (typeof vChildNode === "string" && sChildKey !== "_parent") {
      var sParents = aParentTranslations.length ? aParentTranslations.join(", ") + ", " : "";
      oResult[sKey + sChildKey] = sParents + vChildNode;
    }
  });
  return oResult;
}
function getCLDRCalendarName(sCalendarType) {
  if (!sCalendarType) {
    sCalendarType = Configuration_default.getCalendarType();
  }
  return "ca-" + sCalendarType.toLowerCase();
}
function getData(oLocale) {
  var sLanguage = oLocale.getLanguage() || "", sScript = oLocale.getScript() || "", sRegion = oLocale.getRegion() || "", mData;
  function merge(obj, fallbackObj) {
    var name5, value, fallbackValue;
    if (!fallbackObj) {
      return;
    }
    for (name5 in fallbackObj) {
      if (fallbackObj.hasOwnProperty(name5)) {
        value = obj[name5];
        fallbackValue = fallbackObj[name5];
        if (value === void 0) {
          obj[name5] = fallbackValue;
        } else if (value === null) {
          delete obj[name5];
        } else if (typeof value === "object" && typeof fallbackValue === "object" && !Array.isArray(value)) {
          merge(value, fallbackValue);
        }
      }
    }
  }
  function getOrLoad(sId2) {
    if (!mLocaleDatas[sId2] && (!M_SUPPORTED_LOCALES || M_SUPPORTED_LOCALES[sId2] === true)) {
      var data = mLocaleDatas[sId2] = LoaderExtensions_default.loadResource("sap/ui/core/cldr/" + sId2 + ".json", {
        dataType: "json",
        failOnError: false
      });
      if (data && data.__fallbackLocale) {
        merge(data, getOrLoad(data.__fallbackLocale));
        delete data.__fallbackLocale;
      }
    }
    return mLocaleDatas[sId2];
  }
  sLanguage = sLanguage && Localization_default.getModernLanguage(sLanguage) || sLanguage;
  if (sLanguage === "no") {
    sLanguage = "nb";
  }
  if (sLanguage === "zh" && !sRegion) {
    if (sScript === "Hans") {
      sRegion = "CN";
    } else if (sScript === "Hant") {
      sRegion = "TW";
    }
  }
  if (sLanguage === "sh" || sLanguage === "sr" && sScript === "Latn") {
    sLanguage = "sr_Latn";
  }
  var sId = sLanguage + "_" + sRegion;
  var sCLDRLocaleId = sId;
  if (sLanguage && sRegion) {
    mData = getOrLoad(sId);
  }
  if (!mData && sLanguage) {
    mData = getOrLoad(sLanguage);
    sCLDRLocaleId = sLanguage;
  }
  if (!mData) {
    mData = getOrLoad("en");
    sCLDRLocaleId = "en";
  }
  mLocaleDatas[sId] = mData;
  sCLDRLocaleId = sCLDRLocaleId.replace(/_/g, "-");
  return {
    mData,
    sCLDRLocaleId
  };
}
var CustomLocaleData = LocaleData.extend("sap.ui.core.CustomLocaleData", {
  constructor: function(oLocale) {
    LocaleData.apply(this, arguments);
    this.mCustomData = Configuration_default.getFormatSettings().getCustomLocaleData();
  },
  /**
   * Retrieves the value for the given arguments by checking first <code>mCustomData</code> and if not
   * found <code>mData</code>
   * @returns {*} value
   * @private
   */
  _get: function() {
    var aArguments = Array.prototype.slice.call(arguments), sCalendar, sKey;
    if (aArguments[0].indexOf("ca-") == 0) {
      sCalendar = aArguments[0];
      if (sCalendar == getCLDRCalendarName()) {
        aArguments = aArguments.slice(1);
      }
    }
    sKey = aArguments.join("-");
    var vValue = this.mCustomData[sKey];
    if (vValue == null) {
      vValue = this._getDeep(this.mCustomData, arguments);
      if (vValue == null) {
        vValue = this._getDeep(this.mData, arguments);
      }
    }
    return vValue;
  },
  /**
   * Retrieves merged object from <code>mData</code> extended with <code>mCustomData</code>.
   * This function merges the content of <code>mData</code> and <code>mCustomData</code> instead of returning one or the other like <code>_get()</code> does.
   *
   * Note: Properties defined in <code>mCustomData</code> overwrite the ones from <code>mData</code>.
   * @private
   * @return {object} merged object
   */
  _getMerged: function() {
    var mData = this._getDeep(this.mData, arguments);
    var mCustomData = this._getDeep(this.mCustomData, arguments);
    return extend_default({}, mData, mCustomData);
  },
  /**
   * Returns the first day of the week defined by the calendar week numbering algorithm
   * set in the configuration, see {@link sap.ui.core.Configuration#setCalendarWeekNumbering}.
   * If no specific calendar week numbering algorithm is configured the value set by
   * {@link sap.ui.core.Configuration#setFirstDayOfWeek} is returned. Otherwise the first day
   * of the week is determined by the current locale, see {@link sap.ui.core.LocaleData#getFirstDayOfWeek}.
   *
   * Days are encoded as integer where Sunday=0, Monday=1 etc.
   *
   * @returns {int} The first day of week
   * @override sap.ui.core.LocalData#getFirstDayOfWeek
   * @since 1.113.0
   */
  getFirstDayOfWeek: function() {
    var sCalendarWeekNumbering = Configuration_default.getCalendarWeekNumbering();
    if (sCalendarWeekNumbering === CalendarWeekNumbering_default2.Default) {
      return LocaleData.prototype.getFirstDayOfWeek.call(this);
    }
    return CalendarWeekNumbering_default2.getWeekConfigurationValues(sCalendarWeekNumbering).firstDayOfWeek;
  },
  /**
   * Returns the required minimal number of days for the first week of a year defined by the
   * calendar week numbering algorithm set in the configuration,
   * see {@link sap.ui.core.Configuration#setCalendarWeekNumbering}.
   * If no specific calendar week numbering algorithm is configured the required minimal number
   * of days for the first week of a year is determined by the current locale,
   * see {@link sap.ui.core.LocaleData#getMinimalDaysInFirstWeek}.
   *
   * @returns {int} The required minimal number of days for the first week of a year
   * @override sap.ui.core.LocalData#getMinimalDaysInFirstWeek
   * @since 1.113.0
   */
  getMinimalDaysInFirstWeek: function() {
    var sCalendarWeekNumbering = Configuration_default.getCalendarWeekNumbering();
    if (sCalendarWeekNumbering === CalendarWeekNumbering_default2.Default) {
      return LocaleData.prototype.getMinimalDaysInFirstWeek.call(this);
    }
    return CalendarWeekNumbering_default2.getWeekConfigurationValues(sCalendarWeekNumbering).minimalDaysInFirstWeek;
  }
});
LocaleData.getInstance = function(oLocale) {
  oLocale = Locale_default._getCoreLocale(oLocale);
  return oLocale.hasPrivateUseSubtag("sapufmt") ? new CustomLocaleData(oLocale) : new LocaleData(oLocale);
};
LocaleData._cldrLocales = _cldrLocales;
LocaleData._mTimezoneTranslations = {};
var rContainsSymbol = new RegExp("[" + Object.keys(mCLDRSymbols).join("") + "]");
var rTextWithOptionalSpacesAtStartAndEnd = /^(\s)?(.*?)(\s)?$/;
LocaleData._escapeIfNeeded = function(sValue) {
  if (sValue === void 0) {
    return "";
  }
  if (rContainsSymbol.test(sValue)) {
    return sValue.replace(rTextWithOptionalSpacesAtStartAndEnd, "$1'$2'$3");
  }
  return sValue;
};
var LocaleData_default = LocaleData;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/date/_Calendars.js
var mRegistry = /* @__PURE__ */ new Map();
var _Calendars = {
  get: function(sCalendarType) {
    if (!mRegistry.has(sCalendarType)) {
      throw new Error("Required calendar type: " + sCalendarType + " not loaded.");
    }
    return mRegistry.get(sCalendarType);
  },
  set: function(sCalendarType, CalendarClass) {
    mRegistry.set(sCalendarType, CalendarClass);
  }
};
var Calendars_default = _Calendars;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/date/CalendarUtils.js
var CalendarUtils = {
  /**
   * Resolves calendar week configuration.
   *
   * Returns an object with the following fields:
   * <ul>
   *   <li><code>firstDayOfWeek</code>: specifies the first day of the week starting with
   *   <code>0</code> (which is Sunday)</li>
   *   <li><code>minimalDaysInFirstWeek</code>: minimal days at the beginning of the year
   *   which define the first calendar week</li>
   * </ul>
   *
   * @param {sap.ui.core.date.CalendarWeekNumbering} [sCalendarWeekNumbering]
   *   The calendar week numbering; if omitted, the calendar week numbering of the Configuration
   *   is used; see {@link sap.ui.core.Configuration#getCalendarWeekNumbering}. If this value is
   *   <code>Default</code> the returned calendar week configuration is derived from the given
   *   <code>oLocale</code>.
   * @param {sap.ui.core.Locale} [oLocale]
   *   The locale to use; if not provided, this falls back to the format locale from the
   *   Configuration; see {@link sap.ui.core.Configuration.FormatSettings#getFormatLocale}.
   *   Is only used when <code>sCalendarWeekNumbering</code> is set to <code>Default</code>.
   * @returns {{firstDayOfWeek: int, minimalDaysInFirstWeek: int}|undefined}
   *   The calendar week configuration, or <code>undefined<code> for an invalid value of
   *   <code>sap.ui.core.date.CalendarWeekNumbering</code>.
   * @public
   * @since 1.108.0
   */
  getWeekConfigurationValues: function(sCalendarWeekNumbering, oLocale) {
    var oLocaleData, oWeekConfigurationValues;
    if (!sCalendarWeekNumbering) {
      return CalendarUtils.getWeekConfigurationValues(Configuration_default.getCalendarWeekNumbering(), oLocale);
    }
    oWeekConfigurationValues = CalendarWeekNumbering_default2.getWeekConfigurationValues(sCalendarWeekNumbering);
    if (oWeekConfigurationValues) {
      return oWeekConfigurationValues;
    }
    if (sCalendarWeekNumbering === CalendarWeekNumbering_default2.Default) {
      oLocale = oLocale || Configuration_default.getFormatSettings().getFormatLocale();
      oLocaleData = LocaleData_default.getInstance(oLocale);
      return {
        firstDayOfWeek: oLocaleData.getFirstDayOfWeek(),
        minimalDaysInFirstWeek: oLocaleData.getMinimalDaysInFirstWeek()
      };
    }
    return void 0;
  }
};
var CalendarUtils_default = CalendarUtils;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/date/UniversalDate.js
var UniversalDate = Object_default.extend(
  "sap.ui.core.date.UniversalDate",
  /** @lends sap.ui.core.date.UniversalDate.prototype */
  {
    constructor: function() {
      var clDate = UniversalDate.getClass();
      return this.createDate(clDate, arguments);
    }
  }
);
UniversalDate.UTC = function() {
  var clDate = UniversalDate.getClass();
  return clDate.UTC.apply(clDate, arguments);
};
UniversalDate.now = function() {
  return Date.now();
};
UniversalDate.prototype.createDate = function(clDate, aArgs) {
  if (clDate === Date) {
    return UI5Date_default.getInstance.apply(null, aArgs);
  }
  switch (aArgs.length) {
    case 0:
      return new clDate();
    case 1:
      return new clDate(aArgs[0] instanceof Date ? aArgs[0].getTime() : aArgs[0]);
    case 2:
      return new clDate(aArgs[0], aArgs[1]);
    case 3:
      return new clDate(aArgs[0], aArgs[1], aArgs[2]);
    case 4:
      return new clDate(aArgs[0], aArgs[1], aArgs[2], aArgs[3]);
    case 5:
      return new clDate(aArgs[0], aArgs[1], aArgs[2], aArgs[3], aArgs[4]);
    case 6:
      return new clDate(aArgs[0], aArgs[1], aArgs[2], aArgs[3], aArgs[4], aArgs[5]);
    case 7:
      return new clDate(aArgs[0], aArgs[1], aArgs[2], aArgs[3], aArgs[4], aArgs[5], aArgs[6]);
  }
};
UniversalDate.getInstance = function(oDate, sCalendarType) {
  var clDate, oInstance;
  if (oDate instanceof UniversalDate) {
    oDate = oDate.getJSDate();
  }
  if (oDate && isNaN(oDate.getTime())) {
    throw new Error("The given date object is invalid");
  }
  if (!sCalendarType) {
    sCalendarType = Configuration_default.getCalendarType();
  }
  clDate = UniversalDate.getClass(sCalendarType);
  oInstance = Object.create(clDate.prototype);
  oInstance.oDate = oDate ? UI5Date_default.getInstance(oDate) : UI5Date_default.getInstance();
  oInstance.sCalendarType = sCalendarType;
  return oInstance;
};
UniversalDate.getClass = function(sCalendarType) {
  if (!sCalendarType) {
    sCalendarType = Configuration_default.getCalendarType();
  }
  return Calendars_default.get(sCalendarType);
};
["getDate", "getMonth", "getFullYear", "getYear", "getDay", "getHours", "getMinutes", "getSeconds", "getMilliseconds", "getUTCDate", "getUTCMonth", "getUTCFullYear", "getUTCDay", "getUTCHours", "getUTCMinutes", "getUTCSeconds", "getUTCMilliseconds", "getTime", "valueOf", "getTimezoneOffset", "toString", "toDateString", "setDate", "setFullYear", "setYear", "setMonth", "setHours", "setMinutes", "setSeconds", "setMilliseconds", "setUTCDate", "setUTCFullYear", "setUTCMonth", "setUTCHours", "setUTCMinutes", "setUTCSeconds", "setUTCMilliseconds"].forEach(function(sName) {
  UniversalDate.prototype[sName] = function() {
    return this.oDate[sName].apply(this.oDate, arguments);
  };
});
UniversalDate.prototype.getJSDate = function() {
  return this.oDate;
};
UniversalDate.prototype.getCalendarType = function() {
  return this.sCalendarType;
};
UniversalDate.prototype.getEra = function() {
  return UniversalDate.getEraByDate(this.sCalendarType, this.oDate.getFullYear(), this.oDate.getMonth(), this.oDate.getDate());
};
UniversalDate.prototype.setEra = function(iEra) {
};
UniversalDate.prototype.getUTCEra = function() {
  return UniversalDate.getEraByDate(this.sCalendarType, this.oDate.getUTCFullYear(), this.oDate.getUTCMonth(), this.oDate.getUTCDate());
};
UniversalDate.prototype.setUTCEra = function(iEra) {
};
UniversalDate.prototype.getWeek = function(oLocale, vCalendarWeekNumbering) {
  return UniversalDate.getWeekByDate(this.sCalendarType, this.getFullYear(), this.getMonth(), this.getDate(), oLocale, vCalendarWeekNumbering);
};
UniversalDate.prototype.setWeek = function(oWeek, oLocale, vCalendarWeekNumbering) {
  var oDate = UniversalDate.getFirstDateOfWeek(this.sCalendarType, oWeek.year || this.getFullYear(), oWeek.week, oLocale, vCalendarWeekNumbering);
  this.setFullYear(oDate.year, oDate.month, oDate.day);
};
UniversalDate.prototype.getUTCWeek = function(oLocale, vCalendarWeekNumbering) {
  return UniversalDate.getWeekByDate(this.sCalendarType, this.getUTCFullYear(), this.getUTCMonth(), this.getUTCDate(), oLocale, vCalendarWeekNumbering);
};
UniversalDate.prototype.setUTCWeek = function(oWeek, oLocale, vCalendarWeekNumbering) {
  var oDate = UniversalDate.getFirstDateOfWeek(this.sCalendarType, oWeek.year || this.getFullYear(), oWeek.week, oLocale, vCalendarWeekNumbering);
  this.setUTCFullYear(oDate.year, oDate.month, oDate.day);
};
UniversalDate.prototype.getQuarter = function() {
  return Math.floor(this.getMonth() / 3);
};
UniversalDate.prototype.getUTCQuarter = function() {
  return Math.floor(this.getUTCMonth() / 3);
};
UniversalDate.prototype.getDayPeriod = function() {
  if (this.getHours() < 12) {
    return 0;
  } else {
    return 1;
  }
};
UniversalDate.prototype.getUTCDayPeriod = function() {
  if (this.getUTCHours() < 12) {
    return 0;
  } else {
    return 1;
  }
};
UniversalDate.prototype.getTimezoneShort = function() {
  if (this.oDate.getTimezoneShort) {
    return this.oDate.getTimezoneShort();
  }
};
UniversalDate.prototype.getTimezoneLong = function() {
  if (this.oDate.getTimezoneLong) {
    return this.oDate.getTimezoneLong();
  }
};
var iMillisecondsInWeek = 7 * 24 * 60 * 60 * 1e3;
UniversalDate.getWeekByDate = function(sCalendarType, iYear, iMonth, iDay, oLocale, vCalendarWeekNumbering) {
  vCalendarWeekNumbering = vCalendarWeekNumbering || Configuration_default.getCalendarWeekNumbering();
  checkWeekConfig(vCalendarWeekNumbering);
  oLocale = oLocale || Configuration_default.getFormatSettings().getFormatLocale();
  var clDate = this.getClass(sCalendarType);
  var oFirstDay = getFirstDayOfFirstWeek(clDate, iYear, oLocale, vCalendarWeekNumbering);
  var oDate = new clDate(clDate.UTC(iYear, iMonth, iDay));
  var iWeek, iLastYear, iNextYear, oLastFirstDay, oNextFirstDay;
  var bSplitWeek = isSplitWeek(vCalendarWeekNumbering, oLocale);
  if (bSplitWeek) {
    iWeek = calculateWeeks(oFirstDay, oDate);
  } else {
    iLastYear = iYear - 1;
    iNextYear = iYear + 1;
    oLastFirstDay = getFirstDayOfFirstWeek(clDate, iLastYear, oLocale, vCalendarWeekNumbering);
    oNextFirstDay = getFirstDayOfFirstWeek(clDate, iNextYear, oLocale, vCalendarWeekNumbering);
    if (oDate >= oNextFirstDay) {
      iYear = iNextYear;
      iWeek = 0;
    } else if (oDate < oFirstDay) {
      iYear = iLastYear;
      iWeek = calculateWeeks(oLastFirstDay, oDate);
    } else {
      iWeek = calculateWeeks(oFirstDay, oDate);
    }
  }
  return {
    year: iYear,
    week: iWeek
  };
};
UniversalDate.getFirstDateOfWeek = function(sCalendarType, iYear, iWeek, oLocale, vCalendarWeekNumbering) {
  vCalendarWeekNumbering = vCalendarWeekNumbering || Configuration_default.getCalendarWeekNumbering();
  checkWeekConfig(vCalendarWeekNumbering);
  oLocale = oLocale || Configuration_default.getFormatSettings().getFormatLocale();
  var clDate = this.getClass(sCalendarType);
  var oFirstDay = getFirstDayOfFirstWeek(clDate, iYear, oLocale, vCalendarWeekNumbering);
  var oDate = new clDate(oFirstDay.valueOf() + iWeek * iMillisecondsInWeek);
  var bSplitWeek = isSplitWeek(vCalendarWeekNumbering, oLocale);
  if (bSplitWeek && iWeek === 0 && oFirstDay.getUTCFullYear() < iYear) {
    return {
      year: iYear,
      month: 0,
      day: 1
    };
  }
  return {
    year: oDate.getUTCFullYear(),
    month: oDate.getUTCMonth(),
    day: oDate.getUTCDate()
  };
};
function isSplitWeek(vCalendarWeekNumbering, oLocale) {
  var oLocaleData = LocaleData_default.getInstance(oLocale);
  return (vCalendarWeekNumbering === CalendarWeekNumbering_default2.Default || vCalendarWeekNumbering === CalendarWeekNumbering_default2.WesternTraditional) && oLocaleData.firstDayStartsFirstWeek();
}
function checkWeekConfig(vCalendarWeekNumbering) {
  if (typeof vCalendarWeekNumbering === "object") {
    if (typeof vCalendarWeekNumbering.firstDayOfWeek !== "number" || typeof vCalendarWeekNumbering.minimalDaysInFirstWeek !== "number") {
      throw new TypeError("Week config requires firstDayOfWeek and minimalDaysInFirstWeek to be set");
    }
  } else if (!Object.values(CalendarWeekNumbering_default2).includes(vCalendarWeekNumbering)) {
    throw new TypeError("Illegal format option calendarWeekNumbering: '" + vCalendarWeekNumbering + "'");
  }
}
function resolveCalendarWeekConfiguration(vCalendarWeekNumbering, oLocale) {
  if (typeof vCalendarWeekNumbering === "object" && typeof vCalendarWeekNumbering.firstDayOfWeek === "number" && typeof vCalendarWeekNumbering.minimalDaysInFirstWeek === "number") {
    return vCalendarWeekNumbering;
  }
  return CalendarUtils_default.getWeekConfigurationValues(vCalendarWeekNumbering, oLocale);
}
function getFirstDayOfFirstWeek(clDate, iYear, oLocale, vCalendarWeekNumbering) {
  oLocale = oLocale || Configuration_default.getFormatSettings().getFormatLocale();
  var oWeekConfig = resolveCalendarWeekConfiguration(vCalendarWeekNumbering, oLocale);
  var iMinDays = oWeekConfig.minimalDaysInFirstWeek;
  var iFirstDayOfWeek = oWeekConfig.firstDayOfWeek;
  var oFirstDay = new clDate(clDate.UTC(iYear, 0, 1));
  var iDayCount = 7;
  if (isNaN(oFirstDay.getTime())) {
    throw new Error("Could not determine the first day of the week, because the date object is invalid");
  }
  while (oFirstDay.getUTCDay() !== iFirstDayOfWeek) {
    oFirstDay.setUTCDate(oFirstDay.getUTCDate() - 1);
    iDayCount--;
  }
  if (iDayCount < iMinDays) {
    oFirstDay.setUTCDate(oFirstDay.getUTCDate() + 7);
  }
  return oFirstDay;
}
function calculateWeeks(oFromDate, oToDate) {
  return Math.floor((oToDate.valueOf() - oFromDate.valueOf()) / iMillisecondsInWeek);
}
var mEras = {};
UniversalDate.getEraByDate = function(sCalendarType, iYear, iMonth, iDay) {
  var aEras = getEras(sCalendarType), iTimestamp = (/* @__PURE__ */ new Date(0)).setUTCFullYear(iYear, iMonth, iDay), oEra;
  for (var i = aEras.length - 1; i >= 0; i--) {
    oEra = aEras[i];
    if (!oEra) {
      continue;
    }
    if (oEra._start && iTimestamp >= oEra._startInfo.timestamp) {
      return i;
    }
    if (oEra._end && iTimestamp < oEra._endInfo.timestamp) {
      return i;
    }
  }
};
UniversalDate.getCurrentEra = function(sCalendarType) {
  var oNow = UI5Date_default.getInstance();
  return this.getEraByDate(sCalendarType, oNow.getFullYear(), oNow.getMonth(), oNow.getDate());
};
UniversalDate.getEraStartDate = function(sCalendarType, iEra) {
  var aEras = getEras(sCalendarType), oEra = aEras[iEra] || aEras[0];
  if (oEra._start) {
    return oEra._startInfo;
  }
};
function getEras(sCalendarType) {
  var oLocale = Configuration_default.getFormatSettings().getFormatLocale(), oLocaleData = LocaleData_default.getInstance(oLocale), aEras = mEras[sCalendarType];
  if (!aEras) {
    var aEras = oLocaleData.getEraDates(sCalendarType);
    if (!aEras[0]) {
      aEras[0] = {
        _start: "1-1-1"
      };
    }
    for (var i = 0; i < aEras.length; i++) {
      var oEra = aEras[i];
      if (!oEra) {
        continue;
      }
      if (oEra._start) {
        oEra._startInfo = parseDateString(oEra._start);
      }
      if (oEra._end) {
        oEra._endInfo = parseDateString(oEra._end);
      }
    }
    mEras[sCalendarType] = aEras;
  }
  return aEras;
}
function parseDateString(sDateString) {
  var aParts = sDateString.split("-"), iYear, iMonth, iDay;
  if (aParts[0] == "") {
    iYear = -parseInt(aParts[1]);
    iMonth = parseInt(aParts[2]) - 1;
    iDay = parseInt(aParts[3]);
  } else {
    iYear = parseInt(aParts[0]);
    iMonth = parseInt(aParts[1]) - 1;
    iDay = parseInt(aParts[2]);
  }
  return {
    // no need to use UI5Date.getInstance as only the UTC timestamp is used
    timestamp: (/* @__PURE__ */ new Date(0)).setUTCFullYear(iYear, iMonth, iDay),
    year: iYear,
    month: iMonth,
    day: iDay
  };
}
var UniversalDate_default = UniversalDate;

// node_modules/@ui5/webcomponents-localization/dist/dates/UniversalDate.js
var UniversalDate2 = UniversalDate_default;
var UniversalDate_default2 = UniversalDate2;

// node_modules/@ui5/webcomponents-localization/dist/dates/CalendarDate.js
var CalendarDate = class _CalendarDate {
  constructor(year, month, date, calendarType2) {
    let aArgs = arguments, oJSDate, oNow, sCalendarType;
    switch (aArgs.length) {
      case 0:
        oNow = UI5Date_default2.getInstance();
        return this.constructor(oNow.getFullYear(), oNow.getMonth(), oNow.getDate());
      case 1:
      case 2:
        if (!(aArgs[0] instanceof _CalendarDate)) {
          throw new Error("Invalid arguments: the first argument must be of type CalendarDate.");
        }
        sCalendarType = aArgs[1] ? aArgs[1] : aArgs[0]._oUDate.sCalendarType;
        oJSDate = UI5Date_default2.getInstance(aArgs[0].valueOf());
        oJSDate.setFullYear(oJSDate.getUTCFullYear(), oJSDate.getUTCMonth(), oJSDate.getUTCDate());
        oJSDate.setHours(oJSDate.getUTCHours(), oJSDate.getUTCMinutes(), oJSDate.getUTCSeconds(), oJSDate.getUTCMilliseconds());
        this._oUDate = createUniversalUTCDate(oJSDate, sCalendarType);
        break;
      case 3:
      case 4:
        checkNumericLike(aArgs[0], `Invalid year: ${aArgs[0]}`);
        checkNumericLike(aArgs[1], `Invalid month: ${aArgs[1]}`);
        checkNumericLike(aArgs[2], `Invalid date: ${aArgs[2]}`);
        oJSDate = UI5Date_default2.getInstance(0, 0, 1);
        oJSDate.setFullYear(aArgs[0], aArgs[1], aArgs[2]);
        if (aArgs[3]) {
          sCalendarType = aArgs[3];
        }
        this._oUDate = createUniversalUTCDate(oJSDate, sCalendarType);
        break;
      default:
        throw new Error(`${"Invalid arguments. Accepted arguments are: 1) oCalendarDate, (optional)calendarTypeor 2) year, month, date, (optional) calendarType"}${aArgs}`);
    }
  }
  getYear() {
    return this._oUDate.getUTCFullYear();
  }
  setYear(year) {
    checkNumericLike(year, `Invalid year: ${year}`);
    this._oUDate.setUTCFullYear(year);
    return this;
  }
  getMonth() {
    return this._oUDate.getUTCMonth();
  }
  /**
   * Sets the given month as ordinal month of the year.
   * @param {int} month An integer between 0 and 11, representing the months January through December( or their
   * equivalent month names for the given calendar).
   * If the specified value is is outside of the expected range, this method attempts to update the date information
   * accordingly. For example, if 12 is given as a month, the year will be incremented by 1, and 1 will be used for month.
   * @param {int} [date] An integer between 1 and 31, representing the day of the month, but other values are allowed.
   * 0 will result in the previous month's last day.
   * -1 will result in the day before the previous month's last day.
   * 32 will result in:
   * - first day of the next month if the current month has 31 days.
   * - second day of the next month if the current month has 30 days.
   * Other value will result in adding or subtracting days according to the given value.
   * @returns {sap.ui.unified.calendar.CalendarDate} <code>this</code> for method chaining.
   */
  setMonth(month, date) {
    checkNumericLike(month, `Invalid month: ${month}`);
    if (date || date === 0) {
      checkNumericLike(date, `Invalid date: ${date}`);
      this._oUDate.setUTCMonth(month, date);
    } else {
      this._oUDate.setUTCMonth(month);
    }
    return this;
  }
  getDate() {
    return this._oUDate.getUTCDate();
  }
  setDate(date) {
    checkNumericLike(date, `Invalid date: ${date}`);
    this._oUDate.setUTCDate(date);
    return this;
  }
  getDay() {
    return this._oUDate.getUTCDay();
  }
  getCalendarType() {
    return this._oUDate.sCalendarType;
  }
  isBefore(oCalendarDate) {
    checkCalendarDate(oCalendarDate);
    return this.valueOf() < oCalendarDate.valueOf();
  }
  isAfter(oCalendarDate) {
    checkCalendarDate(oCalendarDate);
    return this.valueOf() > oCalendarDate.valueOf();
  }
  isSameOrBefore(oCalendarDate) {
    checkCalendarDate(oCalendarDate);
    return this.valueOf() <= oCalendarDate.valueOf();
  }
  isSameOrAfter(oCalendarDate) {
    checkCalendarDate(oCalendarDate);
    return this.valueOf() >= oCalendarDate.valueOf();
  }
  isSame(oCalendarDate) {
    checkCalendarDate(oCalendarDate);
    return this.valueOf() === oCalendarDate.valueOf();
  }
  toLocalJSDate() {
    const oLocalDate = UI5Date_default2.getInstance(this._oUDate.getTime());
    oLocalDate.setFullYear(oLocalDate.getUTCFullYear(), oLocalDate.getUTCMonth(), oLocalDate.getUTCDate());
    oLocalDate.setHours(0, 0, 0, 0);
    return oLocalDate;
  }
  toUTCJSDate() {
    const oUTCDate = UI5Date_default2.getInstance(this._oUDate.getTime());
    oUTCDate.setUTCHours(0, 0, 0, 0);
    return oUTCDate;
  }
  toString() {
    return `${this._oUDate.sCalendarType}: ${this.getYear()}/${this.getMonth() + 1}/${this.getDate()}`;
  }
  valueOf() {
    return this._oUDate.getTime();
  }
  static fromLocalJSDate(oJSDate, sCalendarType) {
    function isValidDate(date) {
      return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
    }
    if (!isValidDate(oJSDate)) {
      throw new Error(`Date parameter must be a JavaScript Date object: [${oJSDate}].`);
    }
    return new _CalendarDate(oJSDate.getFullYear(), oJSDate.getMonth(), oJSDate.getDate(), sCalendarType);
  }
  static fromTimestamp(iTimestamp, sCalendarType) {
    const oCalDate = new _CalendarDate(0, 0, 1);
    let oUDate;
    try {
      oUDate = UniversalDate_default2.getInstance(UI5Date_default2.getInstance(iTimestamp), sCalendarType);
    } catch (e) {
      oUDate = /* @__PURE__ */ new Date(NaN);
    }
    oCalDate._oUDate = oUDate;
    return oCalDate;
  }
};
function createUniversalUTCDate(oDate, sCalendarType) {
  if (sCalendarType) {
    return UniversalDate_default2.getInstance(createUTCDate(oDate), sCalendarType);
  }
  return new UniversalDate_default2(createUTCDate(oDate).getTime());
}
function createUTCDate(oDate) {
  const oUTCDate = new Date(Date.UTC(0, 0, 1));
  oUTCDate.setUTCFullYear(oDate.getFullYear(), oDate.getMonth(), oDate.getDate());
  return oUTCDate;
}
function checkCalendarDate(oCalendarDate) {
  if (!(oCalendarDate instanceof CalendarDate)) {
    throw new Error(`Invalid calendar date: [${oCalendarDate}]. Expected: CalendarDate`);
  }
}
function checkNumericLike(value, message) {
  if (value === void 0 || value === Infinity || isNaN(value)) {
    throw message;
  }
}
var CalendarDate_default = CalendarDate;

// node_modules/@ui5/webcomponents-localization/dist/dates/modifyDateBy.js
var modifyDateBy = (date, amount, unit, preserveDate = true, minDate, maxDate) => {
  const newDate = new CalendarDate_default(date);
  switch (unit) {
    case "day":
      newDate.setDate(date.getDate() + amount);
      break;
    case "month":
      if (preserveDate) {
        newDate.setMonth(date.getMonth() + amount);
        const stillSameMonth = amount === -1 && newDate.getMonth() === date.getMonth();
        const monthSkipped = amount === 1 && newDate.getMonth() - date.getMonth() > 1;
        if (stillSameMonth || monthSkipped) {
          newDate.setDate(0);
        }
      } else {
        if (amount === 1) {
          newDate.setMonth(newDate.getMonth() + 1, 1);
        }
        if (amount === -1) {
          newDate.setDate(0);
        }
      }
      break;
    case "year":
      newDate.setYear(date.getYear() + amount);
      if (newDate.getMonth() !== date.getMonth()) {
        newDate.setDate(0);
      }
      break;
    default:
      break;
  }
  if (minDate && newDate.isBefore(minDate)) {
    return new CalendarDate_default(minDate);
  }
  if (maxDate && newDate.isAfter(maxDate)) {
    return new CalendarDate_default(maxDate);
  }
  return newDate;
};
var modifyDateBy_default = modifyDateBy;

// node_modules/@ui5/webcomponents-localization/dist/dates/getRoundedTimestamp.js
var getRoundedTimestamp = (millisecondsUTC) => {
  if (!millisecondsUTC) {
    millisecondsUTC = (/* @__PURE__ */ new Date()).getTime();
  }
  const rounded = millisecondsUTC - millisecondsUTC % (24 * 60 * 60 * 1e3);
  return rounded / 1e3;
};
var getRoundedTimestamp_default = getRoundedTimestamp;

// node_modules/@ui5/webcomponents-localization/dist/dates/getTodayUTCTimestamp.js
var getTodayUTCTimestamp = (primaryCalendarType) => CalendarDate_default.fromLocalJSDate(UI5Date_default2.getInstance(), primaryCalendarType).valueOf() / 1e3;
var getTodayUTCTimestamp_default = getTodayUTCTimestamp;

// node_modules/@ui5/webcomponents/dist/types/CalendarPickersMode.js
var CalendarPickersMode;
(function(CalendarPickersMode2) {
  CalendarPickersMode2["DAY_MONTH_YEAR"] = "DAY_MONTH_YEAR";
  CalendarPickersMode2["MONTH_YEAR"] = "MONTH_YEAR";
  CalendarPickersMode2["YEAR"] = "YEAR";
})(CalendarPickersMode || (CalendarPickersMode = {}));
var CalendarPickersMode_default = CalendarPickersMode;

// node_modules/@ui5/webcomponents-icons/dist/v4/appointment-2.js
var name = "appointment-2";
var pathData = "M32 481V65q0-14 9.5-23T64 33h64V1h32v32h192V1h32v32h64q14 0 23 9t9 23v416q0 14-9 23t-23 9H64q-13 0-22.5-9T32 481zm416 0V129H64v352h384zM256 193q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM128 321q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm256-128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm-128 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM96 225q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23zM384 97V65h-32v32h32zM128 65v32h32V65h-32z";
var ltr = false;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/appointment-2.js
var name2 = "appointment-2";
var pathData2 = "M403 64q32 0 54.5 22.5T480 141v294q0 32-22.5 54.5T403 512H109q-32 0-54.5-22.5T32 435V141q0-32 22.5-54.5T109 64h25V26q0-11 7.5-18.5T160 0t18.5 7.5T186 26v38h140V26q0-11 7.5-18.5T352 0t18.5 7.5T378 26v38h25zm-294 51q-11 0-18.5 7.5T83 141v64h346v-64q0-11-7.5-18.5T403 115h-25v19q0 11-7.5 18.5T352 160t-18.5-7.5T326 134v-19H186v19q0 11-7.5 18.5T160 160t-18.5-7.5T134 134v-19h-25zm294 346q11 0 18.5-7.5T429 435V256H83v179q0 11 7.5 18.5T109 461h294zM160 320q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm96 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm96 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9z";
var ltr2 = false;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-localization/dist/sap/base/strings/formatMessage.js
var rMessageFormat = /('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g;
var fnFormatMessage = function(sPattern, aValues) {
  assert_default(typeof sPattern === "string" || sPattern instanceof String, "pattern must be string");
  if (arguments.length > 2 || aValues != null && !Array.isArray(aValues)) {
    aValues = Array.prototype.slice.call(arguments, 1);
  }
  aValues = aValues || [];
  return sPattern.replace(rMessageFormat, function($0, $1, $2, $3, offset) {
    if ($1) {
      return "'";
    } else if ($2) {
      return $2.replace(/''/g, "'");
    } else if ($3) {
      return String(aValues[parseInt($3)]);
    }
    throw new Error("formatMessage: pattern syntax error at pos. " + offset);
  });
};
var formatMessage_default = fnFormatMessage;

// node_modules/@ui5/webcomponents-localization/dist/sap/base/util/deepEqual.js
var fnEqual = function(a, b, maxDepth, contains, depth) {
  if (typeof maxDepth == "boolean") {
    contains = maxDepth;
    maxDepth = void 0;
  }
  if (!depth) {
    depth = 0;
  }
  if (!maxDepth) {
    maxDepth = 10;
  }
  if (depth > maxDepth) {
    Log_default.warning("deepEqual comparison exceeded maximum recursion depth of " + maxDepth + ". Treating values as unequal");
    return false;
  }
  if (a === b || Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (!contains && a.length !== b.length) {
      return false;
    }
    if (a.length > b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!fnEqual(a[i], b[i], maxDepth, contains, depth + 1)) {
        return false;
      }
    }
    return true;
  }
  if (typeof a == "object" && typeof b == "object") {
    if (!a || !b) {
      return false;
    }
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (!contains && Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    if (a instanceof Node) {
      return a.isEqualNode(b);
    }
    if (a instanceof Date) {
      return a.valueOf() === b.valueOf();
    }
    for (var i in a) {
      if (!fnEqual(a[i], b[i], maxDepth, contains, depth + 1)) {
        return false;
      }
    }
    return true;
  }
  return false;
};
var deepEqual_default = fnEqual;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/Supportability.js
var Supportability_default = {
  collectOriginInfo() {
    return false;
  }
};

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/format/DateFormat.js
var DateFormat = function() {
  throw new Error();
};
var mDateFormatTypes = {
  DATE: "date",
  TIME: "time",
  DATETIME: "datetime",
  DATETIME_WITH_TIMEZONE: "datetimeWithTimezone"
};
var mCldrDatePattern = {};
var checkTimezoneParameterType = function(sTimezone) {
  if (typeof sTimezone !== "string" && !(sTimezone instanceof String) && sTimezone != null) {
    throw new TypeError("The given timezone must be a string.");
  }
};
DateFormat.oDateInfo = {
  type: mDateFormatTypes.DATE,
  oDefaultFormatOptions: {
    style: "medium",
    relativeScale: "day",
    relativeStyle: "wide"
  },
  aFallbackFormatOptions: [{
    style: "short"
  }, {
    style: "medium"
  }, {
    pattern: "yyyy-MM-dd"
  }, {
    pattern: "yyyyMMdd",
    strictParsing: true
  }],
  bShortFallbackFormatOptions: true,
  bPatternFallbackWithoutDelimiter: true,
  getPattern: function(oLocaleData, sStyle, sCalendarType) {
    return oLocaleData.getDatePattern(sStyle, sCalendarType);
  },
  oRequiredParts: {
    "text": true,
    "year": true,
    "weekYear": true,
    "month": true,
    "day": true
  },
  aRelativeScales: ["year", "month", "week", "day"],
  aRelativeParseScales: ["year", "quarter", "month", "week", "day", "hour", "minute", "second"],
  aIntervalCompareFields: ["Era", "FullYear", "Quarter", "Month", "Week", "Date"]
};
DateFormat.oDateTimeInfo = {
  type: mDateFormatTypes.DATETIME,
  oDefaultFormatOptions: {
    style: "medium",
    relativeScale: "auto",
    relativeStyle: "wide"
  },
  aFallbackFormatOptions: [{
    style: "short"
  }, {
    style: "medium"
  }, {
    pattern: "yyyy-MM-dd'T'HH:mm:ss"
  }, {
    pattern: "yyyyMMdd HHmmss"
  }],
  getPattern: function(oLocaleData, sStyle, sCalendarType) {
    var iSlashIndex = sStyle.indexOf("/");
    if (iSlashIndex > 0) {
      return oLocaleData.getCombinedDateTimePattern(sStyle.substr(0, iSlashIndex), sStyle.substr(iSlashIndex + 1), sCalendarType);
    } else {
      return oLocaleData.getCombinedDateTimePattern(sStyle, sStyle, sCalendarType);
    }
  },
  oRequiredParts: {
    "text": true,
    "year": true,
    "weekYear": true,
    "month": true,
    "day": true,
    "hour0_23": true,
    "hour1_24": true,
    "hour0_11": true,
    "hour1_12": true
  },
  aRelativeScales: ["year", "month", "week", "day", "hour", "minute", "second"],
  aRelativeParseScales: ["year", "quarter", "month", "week", "day", "hour", "minute", "second"],
  aIntervalCompareFields: ["Era", "FullYear", "Quarter", "Month", "Week", "Date", "DayPeriod", "Hours", "Minutes", "Seconds"]
};
DateFormat._getDateTimeWithTimezoneInfo = function(oFormatOptions) {
  var bShowDate = oFormatOptions.showDate === void 0 || oFormatOptions.showDate;
  var bShowTime = oFormatOptions.showTime === void 0 || oFormatOptions.showTime;
  var bShowTimezone = oFormatOptions.showTimezone === void 0 || oFormatOptions.showTimezone;
  var oBaselineType = DateFormat.oDateTimeInfo;
  if (bShowDate && !bShowTime) {
    oBaselineType = DateFormat.oDateInfo;
  } else if (!bShowDate && bShowTime) {
    oBaselineType = DateFormat.oTimeInfo;
  }
  return Object.assign({}, oBaselineType, {
    type: mDateFormatTypes.DATETIME_WITH_TIMEZONE,
    // This function is used to transform the pattern of the fallbackFormatOptions to a timezone pattern.
    getTimezonePattern: function(sPattern) {
      if (!bShowDate && !bShowTime && bShowTimezone) {
        return "VV";
      } else if (!bShowTimezone) {
        return sPattern;
      } else {
        return sPattern + " VV";
      }
    },
    getPattern: function(oLocaleData, sStyle, sCalendarType) {
      if (!bShowDate && !bShowTime && bShowTimezone) {
        return "VV";
      }
      if (!bShowTimezone) {
        return oBaselineType.getPattern(oLocaleData, sStyle, sCalendarType);
      }
      var sPattern = oBaselineType.getPattern(oLocaleData, sStyle, sCalendarType);
      return oLocaleData.applyTimezonePattern(sPattern);
    }
  });
};
DateFormat.oTimeInfo = {
  type: mDateFormatTypes.TIME,
  oDefaultFormatOptions: {
    style: "medium",
    relativeScale: "auto",
    relativeStyle: "wide"
  },
  aFallbackFormatOptions: [{
    style: "short"
  }, {
    style: "medium"
  }, {
    pattern: "HH:mm:ss"
  }, {
    pattern: "HHmmss"
  }],
  getPattern: function(oLocaleData, sStyle, sCalendarType) {
    return oLocaleData.getTimePattern(sStyle, sCalendarType);
  },
  oRequiredParts: {
    "text": true,
    "hour0_23": true,
    "hour1_24": true,
    "hour0_11": true,
    "hour1_12": true
  },
  aRelativeScales: ["hour", "minute", "second"],
  aRelativeParseScales: ["year", "quarter", "month", "week", "day", "hour", "minute", "second"],
  aIntervalCompareFields: ["DayPeriod", "Hours", "Minutes", "Seconds"]
};
DateFormat.getInstance = function(oFormatOptions, oLocale) {
  return this.getDateInstance(oFormatOptions, oLocale);
};
DateFormat.getDateInstance = function(oFormatOptions, oLocale) {
  return this.createInstance(oFormatOptions, oLocale, this.oDateInfo);
};
DateFormat.getDateTimeInstance = function(oFormatOptions, oLocale) {
  return this.createInstance(oFormatOptions, oLocale, this.oDateTimeInfo);
};
DateFormat.getDateTimeWithTimezoneInstance = function(oFormatOptions, oLocale) {
  if (oFormatOptions && !(oFormatOptions instanceof Locale_default)) {
    (function() {
      oFormatOptions = Object.assign({}, oFormatOptions);
      if (typeof oFormatOptions.showTimezone === "string") {
        var sShowTimezone = oFormatOptions.showTimezone;
        if (oFormatOptions.showDate === void 0 && oFormatOptions.showTime === void 0) {
          if (sShowTimezone === "Hide") {
            oFormatOptions.showTimezone = false;
          } else if (sShowTimezone === "Only") {
            oFormatOptions.showDate = false;
            oFormatOptions.showTime = false;
          }
        }
        oFormatOptions.showTimezone = sShowTimezone !== "Hide";
      }
    })();
    if (oFormatOptions.showDate === false && oFormatOptions.showTime === false && oFormatOptions.showTimezone === false) {
      throw new TypeError("Invalid Configuration. One of the following format options must be true: showDate, showTime or showTimezone.");
    }
  }
  return this.createInstance(oFormatOptions, oLocale, DateFormat._getDateTimeWithTimezoneInfo(oFormatOptions || {}));
};
DateFormat.getTimeInstance = function(oFormatOptions, oLocale) {
  return this.createInstance(oFormatOptions, oLocale, this.oTimeInfo);
};
DateFormat.createInstance = function(oFormatOptions, oLocale, oInfo, bIsFallback) {
  var aFallbackFormatOptions, oFormat, sPattern;
  oFormat = Object.create(this.prototype);
  if (oFormatOptions instanceof Locale_default) {
    oLocale = oFormatOptions;
    oFormatOptions = void 0;
  }
  if (!oLocale) {
    oLocale = Configuration_default.getFormatSettings().getFormatLocale();
  }
  oFormat.oLocale = oLocale;
  oFormat.oLocaleData = LocaleData_default.getInstance(oLocale);
  oFormat.oFormatOptions = extend_default({}, oInfo.oDefaultFormatOptions, oFormatOptions);
  if (oInfo.type === mDateFormatTypes.DATETIME_WITH_TIMEZONE) {
    oFormat.oFormatOptions.interval = false;
    oFormat.oFormatOptions.singleIntervalValue = false;
    oFormat.oFormatOptions.UTC = false;
  } else {
    oFormat.oFormatOptions.showTimezone = void 0;
    oFormat.oFormatOptions.showDate = void 0;
    oFormat.oFormatOptions.showTime = void 0;
  }
  oFormat.type = oInfo.type;
  if (!oFormat.oFormatOptions.calendarType) {
    oFormat.oFormatOptions.calendarType = Configuration_default.getCalendarType();
  }
  if (oFormat.oFormatOptions.firstDayOfWeek === void 0 && oFormat.oFormatOptions.minimalDaysInFirstWeek !== void 0 || oFormat.oFormatOptions.firstDayOfWeek !== void 0 && oFormat.oFormatOptions.minimalDaysInFirstWeek === void 0) {
    throw new TypeError("Format options firstDayOfWeek and minimalDaysInFirstWeek need both to be set, but only one was provided.");
  }
  if (oFormat.oFormatOptions.calendarWeekNumbering && !Object.values(CalendarWeekNumbering_default2).includes(oFormat.oFormatOptions.calendarWeekNumbering)) {
    throw new TypeError("Illegal format option calendarWeekNumbering: '" + oFormat.oFormatOptions.calendarWeekNumbering + "'");
  }
  if (!oFormat.oFormatOptions.pattern) {
    if (oFormat.oFormatOptions.format) {
      oFormat.oFormatOptions.pattern = oFormat.oLocaleData.getCustomDateTimePattern(oFormat.oFormatOptions.format, oFormat.oFormatOptions.calendarType);
    } else {
      oFormat.oFormatOptions.pattern = oInfo.getPattern(oFormat.oLocaleData, oFormat.oFormatOptions.style, oFormat.oFormatOptions.calendarType);
    }
  }
  if (oFormat.oFormatOptions.interval) {
    var sSinglePattern, sDelimiter = oFormat.oFormatOptions.intervalDelimiter;
    if (oFormat.oFormatOptions.format) {
      oFormat.intervalPatterns = oFormat.oLocaleData.getCustomIntervalPattern(oFormat.oFormatOptions.format, null, oFormat.oFormatOptions.calendarType);
      if (typeof oFormat.intervalPatterns === "string") {
        oFormat.intervalPatterns = [oFormat.intervalPatterns];
      }
      sSinglePattern = oFormat.oLocaleData.getCustomDateTimePattern(oFormat.oFormatOptions.format, oFormat.oFormatOptions.calendarType);
      oFormat.intervalPatterns.push(sSinglePattern);
    } else {
      sSinglePattern = oFormat.oFormatOptions.pattern;
      oFormat.intervalPatterns = [
        // when 'format' option is not set, generate the combined interval pattern
        oFormat.oLocaleData.getCombinedIntervalPattern(oFormat.oFormatOptions.pattern, oFormat.oFormatOptions.calendarType),
        // Put the single date pattern into the array in case the date interval is formatted as a single date
        oFormat.oFormatOptions.pattern
      ];
    }
    oFormat.intervalPatterns.push(oFormat.oFormatOptions.pattern + " - " + oFormat.oFormatOptions.pattern);
    if (sDelimiter) {
      sDelimiter = sDelimiter.replace(/'/g, "''");
      sDelimiter = "'" + sDelimiter + "'";
      oFormat.intervalPatterns.unshift(sSinglePattern + sDelimiter + sSinglePattern);
    }
    oFormat.intervalPatterns = Array.from(new Set(oFormat.intervalPatterns));
  }
  if (!bIsFallback) {
    aFallbackFormatOptions = oInfo.aFallbackFormatOptions;
    if (oInfo.bShortFallbackFormatOptions) {
      sPattern = oInfo.getPattern(oFormat.oLocaleData, "short");
      aFallbackFormatOptions = aFallbackFormatOptions.concat(DateFormat._createFallbackOptionsWithoutDelimiter(sPattern));
    }
    if (oFormat.oFormatOptions.pattern && oInfo.bPatternFallbackWithoutDelimiter) {
      aFallbackFormatOptions = DateFormat._createFallbackOptionsWithoutDelimiter(oFormat.oFormatOptions.pattern).concat(aFallbackFormatOptions);
    }
    aFallbackFormatOptions = aFallbackFormatOptions.reduce(function(aFallbacks, oOptions) {
      var aKeys = Object.keys(oOptions), bDuplicate = aFallbacks.some(function(oOptions0) {
        return Object.keys(oOptions0).length === aKeys.length && aKeys.every(function(sKey) {
          return oOptions0[sKey] === oOptions[sKey];
        });
      });
      if (!bDuplicate) {
        aFallbacks.push(oOptions);
      }
      return aFallbacks;
    }, []);
    oFormat.aFallbackFormats = DateFormat._createFallbackFormat(aFallbackFormatOptions, oFormat.oFormatOptions.calendarType, oLocale, oInfo, oFormat.oFormatOptions);
  }
  oFormat.oRequiredParts = oInfo.oRequiredParts;
  oFormat.aRelativeScales = oInfo.aRelativeScales;
  oFormat.aRelativeParseScales = oInfo.aRelativeParseScales;
  oFormat.aIntervalCompareFields = oInfo.aIntervalCompareFields;
  oFormat.init();
  return oFormat;
};
DateFormat.prototype.init = function() {
  var sCalendarType = this.oFormatOptions.calendarType;
  this.aMonthsAbbrev = this.oLocaleData._getMonthsWithAlternatives("abbreviated", sCalendarType);
  this.aMonthsWide = this.oLocaleData.getMonths("wide", sCalendarType);
  this.aMonthsNarrow = this.oLocaleData.getMonths("narrow", sCalendarType);
  this.aMonthsAbbrevSt = this.oLocaleData._getMonthsStandAloneWithAlternatives("abbreviated", sCalendarType);
  this.aMonthsWideSt = this.oLocaleData.getMonthsStandAlone("wide", sCalendarType);
  this.aMonthsNarrowSt = this.oLocaleData.getMonthsStandAlone("narrow", sCalendarType);
  this.aDaysAbbrev = this.oLocaleData.getDays("abbreviated", sCalendarType);
  this.aDaysWide = this.oLocaleData.getDays("wide", sCalendarType);
  this.aDaysNarrow = this.oLocaleData.getDays("narrow", sCalendarType);
  this.aDaysShort = this.oLocaleData.getDays("short", sCalendarType);
  this.aDaysAbbrevSt = this.oLocaleData.getDaysStandAlone("abbreviated", sCalendarType);
  this.aDaysWideSt = this.oLocaleData.getDaysStandAlone("wide", sCalendarType);
  this.aDaysNarrowSt = this.oLocaleData.getDaysStandAlone("narrow", sCalendarType);
  this.aDaysShortSt = this.oLocaleData.getDaysStandAlone("short", sCalendarType);
  this.aQuartersAbbrev = this.oLocaleData.getQuarters("abbreviated", sCalendarType);
  this.aQuartersWide = this.oLocaleData.getQuarters("wide", sCalendarType);
  this.aQuartersNarrow = this.oLocaleData.getQuarters("narrow", sCalendarType);
  this.aQuartersAbbrevSt = this.oLocaleData.getQuartersStandAlone("abbreviated", sCalendarType);
  this.aQuartersWideSt = this.oLocaleData.getQuartersStandAlone("wide", sCalendarType);
  this.aQuartersNarrowSt = this.oLocaleData.getQuartersStandAlone("narrow", sCalendarType);
  this.aErasNarrow = this.oLocaleData.getEras("narrow", sCalendarType);
  this.aErasAbbrev = this.oLocaleData.getEras("abbreviated", sCalendarType);
  this.aErasWide = this.oLocaleData.getEras("wide", sCalendarType);
  this.aDayPeriodsAbbrev = this.oLocaleData.getDayPeriods("abbreviated", sCalendarType);
  this.aDayPeriodsNarrow = this.oLocaleData.getDayPeriods("narrow", sCalendarType);
  this.aDayPeriodsWide = this.oLocaleData.getDayPeriods("wide", sCalendarType);
  this.oFlexibleDayPeriodsAbbrev = this.oLocaleData.getFlexibleDayPeriods("abbreviated", sCalendarType);
  this.oFlexibleDayPeriodsNarrow = this.oLocaleData.getFlexibleDayPeriods("narrow", sCalendarType);
  this.oFlexibleDayPeriodsWide = this.oLocaleData.getFlexibleDayPeriods("wide", sCalendarType);
  this.oFlexibleDayPeriodsAbbrevSt = this.oLocaleData.getFlexibleDayPeriodsStandAlone("abbreviated", sCalendarType);
  this.oFlexibleDayPeriodsNarrowSt = this.oLocaleData.getFlexibleDayPeriodsStandAlone("narrow", sCalendarType);
  this.oFlexibleDayPeriodsWideSt = this.oLocaleData.getFlexibleDayPeriodsStandAlone("wide", sCalendarType);
  this.aFormatArray = this.parseCldrDatePattern(this.oFormatOptions.pattern);
  this.sAllowedCharacters = this.getAllowedCharacters(this.aFormatArray);
};
DateFormat._createFallbackFormat = function(aFallbackFormatOptions, sCalendarType, oLocale, oInfo, oParentFormatOptions) {
  return aFallbackFormatOptions.map(function(oOptions) {
    var oFormatOptions = Object.assign({}, oOptions);
    oFormatOptions.showDate = oParentFormatOptions.showDate;
    oFormatOptions.showTime = oParentFormatOptions.showTime;
    oFormatOptions.showTimezone = oParentFormatOptions.showTimezone;
    if (typeof oInfo.getTimezonePattern === "function" && oFormatOptions.pattern) {
      oFormatOptions.pattern = oInfo.getTimezonePattern(oFormatOptions.pattern);
    }
    if (oParentFormatOptions.interval) {
      oFormatOptions.interval = true;
    }
    oFormatOptions.calendarType = sCalendarType;
    return DateFormat.createInstance(oFormatOptions, oLocale, oInfo, true);
  });
};
DateFormat._createFallbackOptionsWithoutDelimiter = function(sBasePattern) {
  var rNonDateFields = /[^dMyGU]/g, oDayReplace = {
    regex: /d+/g,
    replace: "dd"
  }, oMonthReplace = {
    regex: /M+/g,
    replace: "MM"
  }, oYearReplace = {
    regex: /[yU]+/g,
    replace: ["yyyy", "yy"]
  };
  sBasePattern = sBasePattern.replace(rNonDateFields, "");
  sBasePattern = sBasePattern.replace(oDayReplace.regex, oDayReplace.replace);
  sBasePattern = sBasePattern.replace(oMonthReplace.regex, oMonthReplace.replace);
  return oYearReplace.replace.map(function(sReplace) {
    return {
      pattern: sBasePattern.replace(oYearReplace.regex, sReplace),
      strictParsing: true
    };
  });
};
var oParseHelper = {
  isNumber: function(iCharCode) {
    return iCharCode >= 48 && iCharCode <= 57;
  },
  findNumbers: function(sValue, iMaxLength) {
    var iLength = 0;
    while (iLength < iMaxLength && this.isNumber(sValue.charCodeAt(iLength))) {
      iLength++;
    }
    return sValue.substr(0, iLength);
  },
  /**
   * Returns if the given string starts with another given string ignoring the case.
   *
   * Takes the locale into account to ensure the characters are interpreted the right way.
   *
   * First, an exact case check is performed to remain backward compatible, then a case-insensitive check
   * based on the locale is done.
   *
   * When during the case conversion the length of the string changes we cannot safely match
   * it and return <code>false</code>.
   *
   * @param {string} sValue the value to check, e.g. "März 2013"
   * @param {string} sSubstring the string to compare it with, e.g. "MÄRZ"
   * @param {string} sLocale the locale, e.g. "de-DE"
   * @returns {boolean} true if the given string <code>sValue</code> starts with <code>sSubstring</code>
   * @private
   */
  startsWithIgnoreCase: function(sValue, sSubstring, sLocale) {
    if (sValue.startsWith(sSubstring)) {
      return true;
    }
    try {
      var sSubToLocaleUpperCase = sSubstring.toLocaleUpperCase(sLocale);
      var sValueUpperCase = sValue.toLocaleUpperCase(sLocale);
      if (sSubToLocaleUpperCase.length !== sSubstring.length || sValueUpperCase.length !== sValue.length) {
        return false;
      }
      return sValueUpperCase.startsWith(sSubToLocaleUpperCase);
    } catch (e) {
      return false;
    }
  },
  /**
   * Finds the longest matching entry for which the following applies:
   * * <code>sValue</code> starts with the found entry
   *
   * The index of the finding in <code>aList</code> and the length of the match is returned.
   * The case is ignored and the given locale is used for the string comparison.
   *
   * @example
   * findEntry("MÄRZ 2013", ["Januar", "Februar", "März", "April", ...], "de-DE");
   * // {length: 4, index: 2}
   * @example
   * findEntry("Sep 2013", [..., "Aug", ["Sept", "Sep"], "Oct", ...], "en-GB");
   * // {length: 3, index: 8}
   *
   * @param {string} sValue the input value, e.g. "MÄRZ 2013"
   * @param {string[]|Array<string[]>} aList
   *   The list of values to check, e.g. ["Januar", "Februar", "März", "April", ...]; the list may contain also
   *   arrays of strings containing alternatives, e.g. [..., "Aug", ["Sept", "Sep"], "Oct", ...]
   * @param {string} sLocale the locale which is used for the string comparison, e.g. "de-DE"
   * @returns {{length: number, index: number}} the length of the match in sValue, the index in the list of values
   *   e.g. length: 4, index: 2 ("MÄRZ")
   * @private
   */
  findEntry: function(sValue, aList, sLocale) {
    let iFoundIndex = -1;
    let iMatchedLength = 0;
    aList.forEach((vEntry, j) => {
      (Array.isArray(vEntry) ? vEntry : [vEntry]).forEach((sEntry) => {
        if (sEntry.length > iMatchedLength && this.startsWithIgnoreCase(sValue, sEntry, sLocale)) {
          iFoundIndex = j;
          iMatchedLength = sEntry.length;
        }
      });
    });
    return {
      index: iFoundIndex,
      length: iMatchedLength
    };
  },
  /**
   * Parses a given timezone
   *
   * @param {string} sValue String to parse, e.g. "-0800", "-08:00", "-08"
   * @param {boolean} bColonSeparated Whether or not the values are colon separated, e.g. "-08:00"
   * @returns {{tzDiff: number, length: number}} Object containing the timezone difference in seconds and the length of the parsed segment
   */
  parseTZ: function(sValue, bColonSeparated) {
    var iLength = 0;
    var iTZFactor = sValue.charAt(0) === "+" ? -1 : 1;
    var sPart;
    if (sValue[0] === "Z") {
      return {
        length: 1,
        tzDiff: 0
      };
    }
    iLength++;
    sPart = this.findNumbers(sValue.substr(iLength), 2);
    var iTZDiffHour = parseInt(sPart);
    iLength += 2;
    if (bColonSeparated) {
      iLength++;
    }
    sPart = this.findNumbers(sValue.substr(iLength), 2);
    var iTZDiff = 0;
    if (sPart) {
      iLength += 2;
      iTZDiff = parseInt(sPart);
    }
    return {
      length: iLength,
      tzDiff: (iTZDiff + 60 * iTZDiffHour) * 60 * iTZFactor
    };
  },
  /**
   * Returns <code>false</code> if the given pattern symbol name is required and the value for that part is
   * invalid, otherwise <code>true</code> is returned.
   *
   * @param {string} sSymbolName
   *   A unique pattern symbol name
   * @param {boolean} bPartInvalid
   *   Whether the value for the given pattern symbol name is invalid
   * @param {sap.ui.core.format.DateFormat} oFormat
   *   The <code>DateFormat</code> instance
   * @returns {boolean}
   *   <code>false</code> if the given pattern symbol name is required and the value for that part is invalid,
   *   otherwise <code>true</code>
   */
  checkValid: function(sSymbolName, bPartInvalid, oFormat) {
    if (sSymbolName in oFormat.oRequiredParts && bPartInvalid) {
      return false;
    }
    return true;
  }
};
DateFormat._oParseHelper = oParseHelper;
DateFormat._createPatternSymbol = function(mParameters) {
  var fnIsNumeric = typeof mParameters.isNumeric === "function" && mParameters.isNumeric || function() {
    return mParameters.isNumeric || false;
  };
  return {
    name: mParameters.name,
    /**
     * Formatter for a pattern symbol.
     *
     * @param {Object<string, any>} oField
     *   The date pattern field as parsed by {@link DateFormat#parseCldrDatePattern}
     * @param {sap.ui.core.date.UniversalDate} oDate
     *   The date object to format
     * @param {boolean} bUTC
     *   Whether the UTC option is set
     * @param {sap.ui.core.format.DateFormat} oFormat
     *   The <code>DateFormat</code> instance
     * @returns {string}
     *   The formatted date information for this date pattern part
     */
    format: mParameters.format || function() {
      return "";
    },
    /**
     * Parser for a pattern symbol.
     *
     * @param {string} sValue
     *   The given input
     * @param {Object<string, any>} oPart
     *   The date pattern field as parsed by {@link DateFormat#parseCldrDatePattern}
     * @param {sap.ui.core.format.DateFormat} oFormat
     *   The <code>DateFormat</code> instance
     * @param {object} oConfig
     *   The configuration object for parsing the value
     * @param {object} oConfig.dateValue
     *   The already parsed date fields
     * @param {boolean} oConfig.exactLength
     *   Whether parsing with the exact length specified by {@link DateFormat#parseCldrDatePattern} is needed
     * @param {object[]} oConfig.formatArray
     *   The complete format array as parsed by {@link DateFormat#parseCldrDatePattern}
     * @param {int} oConfig.index
     *   The current index in the format array
     * @param {boolean} oConfig.strict
     *   Whether to disallow overflows for component values of a date (see
     *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date).
     *   Note that the corresponding checks are just for number ranges which are possible <em>at max</em>
     *   without overflow; the check for day does not consider the month and year to compute the maximum
     *   number of days allowed.
     * @param {string} sTimezone
     *   The IANA timezone ID
     * @returns {object}
     *   The parsed date information for this date pattern part; could contain the property <code>valid</code>
     *   set to <code>false</code> if parsing was not successful
     */
    parse: mParameters.parse || function() {
      return {};
    },
    /**
     * Evaluates whether this symbol has a numeric representation.
     *
     * @param {int} [iDigits] The number of repetitions of the pattern symbol, e.g. <code>3</code> for "aaa"
     * @returns {boolean} Whether this symbol has a numeric representation
     */
    isNumeric: fnIsNumeric
  };
};
DateFormat.prototype.oSymbols = {
  "": DateFormat._createPatternSymbol({
    name: "text",
    format: function(oField, oDate) {
      return oField.value;
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sChar;
      var bValid = true;
      var iValueIndex = 0;
      var iPatternIndex = 0;
      var sDelimiter = "-~‐‑‒–—﹘﹣－～";
      const sPartValue = DateFormat._normalize(oPart.value);
      for (; iPatternIndex < sPartValue.length; iPatternIndex++) {
        sChar = sPartValue.charAt(iPatternIndex);
        if (sChar === " ") {
          while (sValue.charAt(iValueIndex) === " ") {
            iValueIndex++;
          }
        } else if (sDelimiter.includes(sChar)) {
          if (!sDelimiter.includes(sValue.charAt(iValueIndex))) {
            bValid = false;
          }
          iValueIndex++;
        } else {
          if (sValue.charAt(iValueIndex) !== sChar) {
            bValid = false;
          }
          iValueIndex++;
        }
        if (!bValid) {
          break;
        }
      }
      if (bValid) {
        return {
          length: iValueIndex
        };
      } else {
        var bPartInvalid = false;
        if (oConfig.index < oConfig.formatArray.length - 1) {
          bPartInvalid = oConfig.formatArray[oConfig.index + 1].type in oFormat.oRequiredParts;
        }
        return {
          valid: oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat)
        };
      }
    }
  }),
  "G": DateFormat._createPatternSymbol({
    name: "era",
    format: function(oField, oDate, bUTC, oFormat) {
      var iEra = oDate.getUTCEra();
      if (oField.digits <= 3) {
        return oFormat.aErasAbbrev[iEra];
      } else if (oField.digits === 4) {
        return oFormat.aErasWide[iEra];
      } else {
        return oFormat.aErasNarrow[iEra];
      }
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var aErasVariants = [oFormat.aErasWide, oFormat.aErasAbbrev, oFormat.aErasNarrow];
      for (var i = 0; i < aErasVariants.length; i++) {
        var aVariants = aErasVariants[i];
        var oFound = oParseHelper.findEntry(sValue, aVariants, oFormat.oLocaleData.sCLDRLocaleId);
        if (oFound.index !== -1) {
          return {
            era: oFound.index,
            length: oFound.length
          };
        }
      }
      return {
        era: oFormat.aErasWide.length - 1,
        valid: oParseHelper.checkValid(oPart.type, true, oFormat)
      };
    }
  }),
  "y": DateFormat._createPatternSymbol({
    name: "year",
    format: function(oField, oDate, bUTC, oFormat) {
      var iYear = oDate.getUTCFullYear();
      var sYear = String(iYear);
      var sCalendarType = oFormat.oFormatOptions.calendarType;
      if (oField.digits === 2 && sYear.length > 2) {
        sYear = sYear.substr(sYear.length - 2);
      }
      if (sCalendarType !== CalendarType_default3.Japanese && oField.digits === 1 && iYear < 100) {
        sYear = sYear.padStart(4, "0");
      }
      return sYear.padStart(oField.digits, "0");
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var iExpectedDigits, sPart, bPartInvalid, sCalendarType = oFormat.oFormatOptions.calendarType;
      if (oPart.digits === 1) {
        iExpectedDigits = 4;
      } else if (oPart.digits === 2) {
        iExpectedDigits = 2;
      } else {
        iExpectedDigits = oPart.digits;
      }
      sPart = oParseHelper.findNumbers(sValue, iExpectedDigits);
      bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length !== iExpectedDigits;
      var iYear = parseInt(sPart);
      if (sCalendarType !== CalendarType_default3.Japanese && sPart.length <= 2) {
        var oCurrentDate = UniversalDate_default.getInstance(UI5Date_default.getInstance(), sCalendarType), iCurrentYear = oCurrentDate.getUTCFullYear(), iCurrentCentury = Math.floor(iCurrentYear / 100), iYearDiff = iCurrentCentury * 100 + iYear - iCurrentYear;
        if (iYearDiff < -70) {
          iYear += (iCurrentCentury + 1) * 100;
        } else if (iYearDiff < 30) {
          iYear += iCurrentCentury * 100;
        } else {
          iYear += (iCurrentCentury - 1) * 100;
        }
      }
      return {
        length: sPart.length,
        valid: oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat),
        year: iYear
      };
    },
    isNumeric: true
  }),
  "Y": DateFormat._createPatternSymbol({
    name: "weekYear",
    format: function(oField, oDate, bUTC, oFormat) {
      var oWeek = oDate.getUTCWeek(oFormat.oLocale, getCalendarWeekParameter(oFormat.oFormatOptions));
      var iWeekYear = oWeek.year;
      var sWeekYear = String(iWeekYear);
      var sCalendarType = oFormat.oFormatOptions.calendarType;
      if (oField.digits === 2 && sWeekYear.length > 2) {
        sWeekYear = sWeekYear.substr(sWeekYear.length - 2);
      }
      if (sCalendarType !== CalendarType_default3.Japanese && oField.digits === 1 && iWeekYear < 100) {
        sWeekYear = sWeekYear.padStart(4, "0");
      }
      return sWeekYear.padStart(oField.digits, "0");
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var iExpectedDigits, sPart, bPartInvalid, sCalendarType = oFormat.oFormatOptions.calendarType;
      if (oPart.digits === 1) {
        iExpectedDigits = 4;
      } else if (oPart.digits === 2) {
        iExpectedDigits = 2;
      } else {
        iExpectedDigits = oPart.digits;
      }
      sPart = oParseHelper.findNumbers(sValue, iExpectedDigits);
      bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length !== iExpectedDigits;
      var iYear = parseInt(sPart);
      var iWeekYear = iYear;
      if (sCalendarType !== CalendarType_default3.Japanese && sPart.length <= 2) {
        var oCurrentDate = UniversalDate_default.getInstance(UI5Date_default.getInstance(), sCalendarType), iCurrentYear = oCurrentDate.getUTCFullYear(), iCurrentCentury = Math.floor(iCurrentYear / 100), iYearDiff = iCurrentCentury * 100 + iWeekYear - iCurrentYear;
        if (iYearDiff < -70) {
          iWeekYear += (iCurrentCentury + 1) * 100;
        } else if (iYearDiff < 30) {
          iWeekYear += iCurrentCentury * 100;
        } else {
          iWeekYear += (iCurrentCentury - 1) * 100;
        }
      }
      return {
        length: sPart.length,
        valid: oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat),
        year: iYear,
        weekYear: iWeekYear
      };
    },
    isNumeric: true
  }),
  "M": DateFormat._createPatternSymbol({
    name: "month",
    format: function(oField, oDate, bUTC, oFormat) {
      var iMonth = oDate.getUTCMonth();
      if (oField.digits === 3) {
        const vName = oFormat.aMonthsAbbrev[iMonth];
        return Array.isArray(vName) ? vName[0] : vName;
      } else if (oField.digits === 4) {
        return oFormat.aMonthsWide[iMonth];
      } else if (oField.digits > 4) {
        return oFormat.aMonthsNarrow[iMonth];
      } else {
        return String(iMonth + 1).padStart(oField.digits, "0");
      }
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var iMonth, sPart, bPartInvalid, bValid, aMonthsVariants = [oFormat.aMonthsWide, oFormat.aMonthsWideSt, oFormat.aMonthsAbbrev, oFormat.aMonthsAbbrevSt, oFormat.aMonthsNarrow, oFormat.aMonthsNarrowSt];
      if (oPart.digits < 3) {
        sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
        bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2;
        bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
        iMonth = parseInt(sPart) - 1;
        if (oConfig.strict && (iMonth > 11 || iMonth < 0)) {
          bValid = false;
        }
      } else {
        for (var i = 0; i < aMonthsVariants.length; i++) {
          var aVariants = aMonthsVariants[i];
          var oFound = oParseHelper.findEntry(sValue, aVariants, oFormat.oLocaleData.sCLDRLocaleId);
          if (oFound.index !== -1) {
            return {
              month: oFound.index,
              length: oFound.length
            };
          }
        }
        bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
      }
      return {
        month: iMonth,
        length: sPart ? sPart.length : 0,
        valid: bValid
      };
    },
    isNumeric: function(iDigits) {
      return iDigits < 3;
    }
  }),
  "L": DateFormat._createPatternSymbol({
    name: "monthStandalone",
    format: function(oField, oDate, bUTC, oFormat) {
      var iMonth = oDate.getUTCMonth();
      if (oField.digits === 3) {
        const vName = oFormat.aMonthsAbbrevSt[iMonth];
        return Array.isArray(vName) ? vName[0] : vName;
      } else if (oField.digits === 4) {
        return oFormat.aMonthsWideSt[iMonth];
      } else if (oField.digits > 4) {
        return oFormat.aMonthsNarrowSt[iMonth];
      } else {
        return String(iMonth + 1).padStart(oField.digits, "0");
      }
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var iMonth, sPart, bPartInvalid, bValid, aMonthsVariants = [oFormat.aMonthsWide, oFormat.aMonthsWideSt, oFormat.aMonthsAbbrev, oFormat.aMonthsAbbrevSt, oFormat.aMonthsNarrow, oFormat.aMonthsNarrowSt];
      if (oPart.digits < 3) {
        sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
        bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2;
        bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
        iMonth = parseInt(sPart) - 1;
        if (oConfig.strict && (iMonth > 11 || iMonth < 0)) {
          bValid = false;
        }
      } else {
        for (var i = 0; i < aMonthsVariants.length; i++) {
          var aVariants = aMonthsVariants[i];
          var oFound = oParseHelper.findEntry(sValue, aVariants, oFormat.oLocaleData.sCLDRLocaleId);
          if (oFound.index !== -1) {
            return {
              month: oFound.index,
              length: oFound.length
            };
          }
        }
        bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
      }
      return {
        month: iMonth,
        length: sPart ? sPart.length : 0,
        valid: bValid
      };
    },
    isNumeric: function(iDigits) {
      return iDigits < 3;
    }
  }),
  "w": DateFormat._createPatternSymbol({
    name: "weekInYear",
    format: function(oField, oDate, bUTC, oFormat) {
      var oWeek = oDate.getUTCWeek(oFormat.oLocale, getCalendarWeekParameter(oFormat.oFormatOptions));
      var iWeek = oWeek.week;
      var sWeek = String(iWeek + 1);
      if (oField.digits < 3) {
        sWeek = sWeek.padStart(oField.digits, "0");
      } else {
        sWeek = oFormat.oLocaleData.getCalendarWeek(oField.digits === 3 ? "narrow" : "wide", sWeek.padStart(2, "0"));
      }
      return sWeek;
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart, bPartInvalid, bValid, iWeek, iLength = 0;
      if (oPart.digits < 3) {
        sPart = oParseHelper.findNumbers(sValue, 2);
        iLength = sPart.length;
        iWeek = parseInt(sPart) - 1;
        bPartInvalid = !sPart || oConfig.exactLength && iLength < 2;
        bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
      } else {
        sPart = oFormat.oLocaleData.getCalendarWeek(oPart.digits === 3 ? "narrow" : "wide");
        sPart = sPart.replace("{0}", "([0-9]+)");
        var rWeekNumber = new RegExp(sPart), oResult = rWeekNumber.exec(sValue);
        if (oResult) {
          iLength = oResult[0].length;
          iWeek = parseInt(oResult[oResult.length - 1]) - 1;
        } else {
          bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
        }
      }
      return {
        length: iLength,
        valid: bValid,
        week: iWeek
      };
    },
    isNumeric: function(iDigits) {
      return iDigits < 3;
    }
  }),
  "W": DateFormat._createPatternSymbol({
    name: "weekInMonth"
  }),
  "D": DateFormat._createPatternSymbol({
    name: "dayInYear"
  }),
  "d": DateFormat._createPatternSymbol({
    name: "day",
    format: function(oField, oDate) {
      var iDate = oDate.getUTCDate();
      return String(iDate).padStart(oField.digits, "0");
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2)), bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2, bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat), iDay = parseInt(sPart);
      if (oConfig.strict && (iDay > 31 || iDay < 1)) {
        bValid = false;
      }
      return {
        day: iDay,
        length: sPart.length,
        valid: bValid
      };
    },
    isNumeric: true
  }),
  "Q": DateFormat._createPatternSymbol({
    name: "quarter",
    format: function(oField, oDate, bUTC, oFormat) {
      var iQuarter = oDate.getUTCQuarter();
      if (oField.digits === 3) {
        return oFormat.aQuartersAbbrev[iQuarter];
      } else if (oField.digits === 4) {
        return oFormat.aQuartersWide[iQuarter];
      } else if (oField.digits > 4) {
        return oFormat.aQuartersNarrow[iQuarter];
      } else {
        return String(iQuarter + 1).padStart(oField.digits, "0");
      }
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart, bPartInvalid, iQuarter, bValid;
      var aQuartersVariants = [oFormat.aQuartersWide, oFormat.aQuartersWideSt, oFormat.aQuartersAbbrev, oFormat.aQuartersAbbrevSt, oFormat.aQuartersNarrow, oFormat.aQuartersNarrowSt];
      if (oPart.digits < 3) {
        sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
        bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2;
        bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
        iQuarter = parseInt(sPart) - 1;
        if (oConfig.strict && iQuarter > 3) {
          bValid = false;
        }
      } else {
        for (var i = 0; i < aQuartersVariants.length; i++) {
          var aVariants = aQuartersVariants[i];
          var oFound = oParseHelper.findEntry(sValue, aVariants, oFormat.oLocaleData.sCLDRLocaleId);
          if (oFound.index !== -1) {
            return {
              quarter: oFound.index,
              length: oFound.length
            };
          }
        }
        bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
      }
      return {
        length: sPart ? sPart.length : 0,
        quarter: iQuarter,
        valid: bValid
      };
    },
    isNumeric: function(iDigits) {
      return iDigits < 3;
    }
  }),
  "q": DateFormat._createPatternSymbol({
    name: "quarterStandalone",
    format: function(oField, oDate, bUTC, oFormat) {
      var iQuarter = oDate.getUTCQuarter();
      if (oField.digits === 3) {
        return oFormat.aQuartersAbbrevSt[iQuarter];
      } else if (oField.digits === 4) {
        return oFormat.aQuartersWideSt[iQuarter];
      } else if (oField.digits > 4) {
        return oFormat.aQuartersNarrowSt[iQuarter];
      } else {
        return String(iQuarter + 1).padStart(oField.digits, "0");
      }
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart, bPartInvalid, iQuarter, bValid;
      var aQuartersVariants = [oFormat.aQuartersWide, oFormat.aQuartersWideSt, oFormat.aQuartersAbbrev, oFormat.aQuartersAbbrevSt, oFormat.aQuartersNarrow, oFormat.aQuartersNarrowSt];
      if (oPart.digits < 3) {
        sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2));
        bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2;
        bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
        iQuarter = parseInt(sPart) - 1;
        if (oConfig.strict && iQuarter > 3) {
          bValid = false;
        }
      } else {
        for (var i = 0; i < aQuartersVariants.length; i++) {
          var aVariants = aQuartersVariants[i];
          var oFound = oParseHelper.findEntry(sValue, aVariants, oFormat.oLocaleData.sCLDRLocaleId);
          if (oFound.index !== -1) {
            return {
              quarter: oFound.index,
              length: oFound.length
            };
          }
        }
        bValid = oParseHelper.checkValid(oPart.type, true, oFormat);
      }
      return {
        length: sPart ? sPart.length : 0,
        quarter: iQuarter,
        valid: bValid
      };
    },
    isNumeric: function(iDigits) {
      return iDigits < 3;
    }
  }),
  "F": DateFormat._createPatternSymbol({
    name: "dayOfWeekInMonth"
  }),
  "E": DateFormat._createPatternSymbol({
    name: "dayNameInWeek",
    //Day of week name, format style.
    format: function(oField, oDate, bUTC, oFormat) {
      var iDay = oDate.getUTCDay();
      if (oField.digits < 4) {
        return oFormat.aDaysAbbrev[iDay];
      } else if (oField.digits === 4) {
        return oFormat.aDaysWide[iDay];
      } else if (oField.digits === 5) {
        return oFormat.aDaysNarrow[iDay];
      } else {
        return oFormat.aDaysShort[iDay];
      }
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var aDaysVariants = [oFormat.aDaysWide, oFormat.aDaysWideSt, oFormat.aDaysAbbrev, oFormat.aDaysAbbrevSt, oFormat.aDaysShort, oFormat.aDaysShortSt, oFormat.aDaysNarrow, oFormat.aDaysNarrowSt];
      for (var i = 0; i < aDaysVariants.length; i++) {
        var aVariants = aDaysVariants[i];
        var oFound = oParseHelper.findEntry(sValue, aVariants, oFormat.oLocaleData.sCLDRLocaleId);
        if (oFound.index !== -1) {
          return {
            // gets translated to dayOfWeek where the day of week is relative to the week
            dayOfWeek: oFound.index,
            length: oFound.length
          };
        }
      }
    }
  }),
  "c": DateFormat._createPatternSymbol({
    name: "dayNameInWeekStandalone",
    format: function(oField, oDate, bUTC, oFormat) {
      var iDay = oDate.getUTCDay();
      if (oField.digits < 4) {
        return oFormat.aDaysAbbrevSt[iDay];
      } else if (oField.digits === 4) {
        return oFormat.aDaysWideSt[iDay];
      } else if (oField.digits === 5) {
        return oFormat.aDaysNarrowSt[iDay];
      } else {
        return oFormat.aDaysShortSt[iDay];
      }
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var aDaysVariants = [oFormat.aDaysWide, oFormat.aDaysWideSt, oFormat.aDaysAbbrev, oFormat.aDaysAbbrevSt, oFormat.aDaysShort, oFormat.aDaysShortSt, oFormat.aDaysNarrow, oFormat.aDaysNarrowSt];
      for (var i = 0; i < aDaysVariants.length; i++) {
        var aVariants = aDaysVariants[i];
        var oFound = oParseHelper.findEntry(sValue, aVariants, oFormat.oLocaleData.sCLDRLocaleId);
        if (oFound.index !== -1) {
          return {
            day: oFound.index,
            length: oFound.length
          };
        }
      }
    }
  }),
  // day number of week (depends on locale's first day of week)
  // e.g. Thursday
  // "de": 4 (firstDay: 1)
  // "en": 5 (firstDay: 0)
  // "ar": 6 (firstDay: 6)
  "u": DateFormat._createPatternSymbol({
    name: "dayNumberOfWeek",
    format: function(oField, oDate, bUTC, oFormat) {
      var iDay = oDate.getUTCDay();
      return oFormat._adaptDayOfWeek(iDay);
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart = oParseHelper.findNumbers(sValue, oPart.digits), bPartInvalid = oConfig.exactLength && sPart.length !== oPart.digits;
      return {
        dayNumberOfWeek: parseInt(sPart),
        length: sPart.length,
        valid: oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat)
      };
    },
    isNumeric: true
  }),
  "a": DateFormat._createPatternSymbol({
    name: "amPmMarker",
    /**
     * Formats the day period.
     *
     * @param {Object<string, any>} oField
     *   The date pattern field as parsed by {@link DateFormat#parseCldrDatePattern}
     * @param {number} oField.digits
     *   The number of repetitions of the pattern symbol, e.g. <code>3</code> for "aaa"
     * @param {string} oField.symbol
     *   The pattern symbol "a"
     * @param {string} oField.type
     *   The symbol name "amPmMarker"
     * @param {sap.ui.core.date.UniversalDate} oDate
     *   The date to format
     * @param {boolean} [bUTC]
     *   Whether the UTC option is set; not used
     * @param {sap.ui.core.format.DateFormat} oFormat
     *   The <code>DateFormat</code> instance
     * @returns {string}
     *   The formatted day period, e.g. "AM" for symbol "a"
     */
    format: function(oField, oDate, bUTC, oFormat) {
      var iDayPeriod = oDate.getUTCDayPeriod();
      if (oField.digits <= 3) {
        return oFormat.aDayPeriodsAbbrev[iDayPeriod];
      } else if (oField.digits === 4) {
        return oFormat.aDayPeriodsWide[iDayPeriod];
      } else {
        return oFormat.aDayPeriodsNarrow[iDayPeriod];
      }
    },
    /**
     * Parses the day period from a given input string.
     *
     * @param {string} sValue
     *   The given input, e.g. "am 13:37"
     * @param {Object<string, any>} oPart
     *   The date pattern field as parsed by {@link DateFormat#parseCldrDatePattern}
     * @param {number} oPart.digits
     *   The number of repetitions of the pattern symbol, e.g. <code>3</code> for "aaa"
     * @param {string} oPart.symbol
     *   The pattern symbol "a"
     * @param {string} oPart.type
     *   The symbol name "amPmMarker"
     * @param {sap.ui.core.format.DateFormat} oFormat
     *   The <code>DateFormat</code> instance
     * @param {Object<string, any>} [oConfig]
     *   The configuration object for parsing the value
     * @param {object[]} [oConfig.formatArray]
     *   The complete format array as parsed by {@link DateFormat#parseCldrDatePattern}
     * @param {object} [oConfig.dateValue]
     *   The already parsed date fields
     * @param {number} [oConfig.index]
     *   The index in the format array
     * @param {boolean} [oConfig.strict]
     *   Whether to use the strict option
     * @param {string} [sTimezone]
     *   The IANA timezone ID
     * @returns {{length : number, pm : boolean}|{}}
     *   An object with the <code>length</code> of the match and the parsed <code>pm</code>
     *   value; or an object with property valid <code>false</code> if it could not be
     *   parsed correctly
     */
    parse: function(sValue, oPart, oFormat, oConfig, sTimezone) {
      var rAMPM, bAMPMAlternativeCase, oEntry, i, aMatch, aVariants, aDayPeriodsVariants = [oFormat.aDayPeriodsWide, oFormat.aDayPeriodsAbbrev, oFormat.aDayPeriodsNarrow];
      rAMPM = /[aApP](?:\.)?[\x20\xA0]?[mM](?:\.)?/;
      aMatch = sValue.match(rAMPM);
      bAMPMAlternativeCase = aMatch && aMatch.index === 0;
      function removeSpacesAndDots(sValue2) {
        return sValue2.replace(/[\x20\xA0]/g, "").replace(/\./g, "");
      }
      if (bAMPMAlternativeCase) {
        sValue = removeSpacesAndDots(sValue);
      }
      for (i = 0; i < aDayPeriodsVariants.length; i += 1) {
        aVariants = aDayPeriodsVariants[i].map((sDayPeriod) => {
          return DateFormat._normalize(sDayPeriod);
        });
        if (bAMPMAlternativeCase) {
          aVariants = aVariants.map(removeSpacesAndDots);
        }
        oEntry = oParseHelper.findEntry(sValue, aVariants, oFormat.oLocaleData.sCLDRLocaleId);
        if (oEntry.index !== -1) {
          return {
            pm: oEntry.index === 1,
            // am/pm alternative may include an additional dot, e.g. "am."
            // therefore the length for the am/pm alternative is the length of the
            // match
            length: bAMPMAlternativeCase ? aMatch[0].length : oEntry.length
          };
        }
      }
      return {
        valid: false
      };
    }
  }),
  "B": DateFormat._createPatternSymbol({
    name: "flexibleDayPeriod",
    /**
     * Formats the flexible day period.
     *
     * @param {Object<string, any>} oField
     *   The date pattern field as parsed by {@link DateFormat#parseCldrDatePattern}
     * @param {int} oField.digits
     *   The number of repetitions of the pattern symbol, e.g. <code>3</code> for "BBB"
     * @param {sap.ui.core.date.UniversalDate} oDate
     *   The date object to format
     * @param {boolean} bUTC
     *   Whether the UTC option is set; not used
     * @param {sap.ui.core.format.DateFormat} oFormat
     *   The <code>DateFormat</code> instance
     * @returns {string}
     *   The selected day period e.g. "in the afternoon" for the according style width
     *   "abbreviated", "narrow" or "wide"
     */
    format: function(oField, oDate, bUTC, oFormat) {
      var bContainsHour = oFormat.aFormatArray.some(function(oFormatElement) {
        return "hHKk".includes(oFormatElement.symbol);
      }), sFlexibleDayPeriod = oFormat.oLocaleData.getFlexibleDayPeriodOfTime(oDate.getUTCHours(), oDate.getUTCMinutes());
      if (bContainsHour) {
        if (oField.digits <= 3) {
          return oFormat.oFlexibleDayPeriodsAbbrev[sFlexibleDayPeriod];
        }
        if (oField.digits === 4) {
          return oFormat.oFlexibleDayPeriodsWide[sFlexibleDayPeriod];
        }
        return oFormat.oFlexibleDayPeriodsNarrow[sFlexibleDayPeriod];
      }
      if (oField.digits <= 3) {
        return oFormat.oFlexibleDayPeriodsAbbrevSt[sFlexibleDayPeriod];
      }
      if (oField.digits === 4) {
        return oFormat.oFlexibleDayPeriodsWideSt[sFlexibleDayPeriod];
      }
      return oFormat.oFlexibleDayPeriodsNarrowSt[sFlexibleDayPeriod];
    },
    /**
     * Parses the flexible day period from a given input string.
     *
     * @param {string} sValue
     *   The given input, e.g. "in the afternoon 01:37"
     * @param {Object<string, any>} oPart
     *   The date pattern field as parsed by {@link DateFormat#parseCldrDatePattern}
     * @param {sap.ui.core.format.DateFormat} oFormat
     *   The <code>DateFormat</code> instance
     * @param {object} oConfig
     *   The configuration object for parsing the value
     * @returns {{flexDayPeriod: string, length: number}|{valid: boolean}}
     *   An object with the parsed <code>flexDayPeriod</code> and the <code>length</code>
     *   value of the match; otherwise, an object with property <code>valid</code>
     *   <code>false</code> if it could not be parsed correctly or in case it is attempted
     *   to parse a string with a stand-alone format
     */
    parse: function(sValue, oPart, oFormat, oConfig) {
      var i, oFound, oVariant, bContainsHour = oFormat.aFormatArray.some(function(oFormatElement) {
        return "hHKk".includes(oFormatElement.symbol);
      }), aFlexibleDayPeriodVariants = [oFormat.oFlexibleDayPeriodsWide, oFormat.oFlexibleDayPeriodsAbbrev, oFormat.oFlexibleDayPeriodsNarrow];
      if (bContainsHour) {
        for (i = 0; i < aFlexibleDayPeriodVariants.length; i++) {
          oVariant = aFlexibleDayPeriodVariants[i];
          oFound = oParseHelper.findEntry(sValue, Object.values(oVariant), oFormat.oLocaleData.sCLDRLocaleId);
          if (oFound.index !== -1) {
            return {
              flexDayPeriod: Object.keys(oVariant)[oFound.index],
              length: oFound.length
            };
          }
        }
      }
      return {
        valid: false
      };
    }
  }),
  "H": DateFormat._createPatternSymbol({
    name: "hour0_23",
    format: function(oField, oDate) {
      var iHours = oDate.getUTCHours();
      return String(iHours).padStart(oField.digits, "0");
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2)), iHours = parseInt(sPart), bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2, bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
      if (oConfig.strict && iHours > 23) {
        bValid = false;
      }
      return {
        hour: iHours,
        length: sPart.length,
        valid: bValid
      };
    },
    isNumeric: true
  }),
  "k": DateFormat._createPatternSymbol({
    name: "hour1_24",
    format: function(oField, oDate) {
      var iHours = oDate.getUTCHours();
      var sHours = iHours === 0 ? "24" : String(iHours);
      return sHours.padStart(oField.digits, "0");
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2)), iHours = parseInt(sPart), bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2, bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
      if (iHours === 24) {
        iHours = 0;
      }
      if (oConfig.strict && iHours > 23) {
        bValid = false;
      }
      return {
        hour: iHours,
        length: sPart.length,
        valid: bValid
      };
    },
    isNumeric: true
  }),
  "K": DateFormat._createPatternSymbol({
    name: "hour0_11",
    format: function(oField, oDate) {
      var iHours = oDate.getUTCHours();
      var sHours = String(iHours > 11 ? iHours - 12 : iHours);
      return sHours.padStart(oField.digits, "0");
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2)), iHours = parseInt(sPart), bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2, bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
      if (oConfig.strict && iHours > 11) {
        bValid = false;
      }
      return {
        hour: iHours,
        length: sPart.length,
        valid: bValid
      };
    },
    isNumeric: true
  }),
  "h": DateFormat._createPatternSymbol({
    name: "hour1_12",
    format: function(oField, oDate) {
      var iHours = oDate.getUTCHours();
      var sHours;
      if (iHours > 12) {
        sHours = String(iHours - 12);
      } else if (iHours === 0) {
        sHours = "12";
      } else {
        sHours = String(iHours);
      }
      return sHours.padStart(oField.digits, "0");
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var bPM = oConfig.dateValue.pm, sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2)), iHours = parseInt(sPart), bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2, bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
      if (iHours === 12) {
        iHours = 0;
        bPM = bPM === void 0 ? true : bPM;
      }
      if (oConfig.strict && iHours > 11) {
        bValid = false;
      }
      return {
        hour: iHours,
        length: sPart.length,
        pm: bPM,
        valid: bValid
      };
    },
    isNumeric: true
  }),
  "m": DateFormat._createPatternSymbol({
    name: "minute",
    format: function(oField, oDate) {
      var iMinutes = oDate.getUTCMinutes();
      return String(iMinutes).padStart(oField.digits, "0");
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart = oParseHelper.findNumbers(sValue, Math.max(oPart.digits, 2)), iMinutes = parseInt(sPart), bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < 2, bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
      if (oConfig.strict && iMinutes > 59) {
        bValid = false;
      }
      return {
        length: sPart.length,
        minute: iMinutes,
        valid: bValid
      };
    },
    isNumeric: true
  }),
  "s": DateFormat._createPatternSymbol({
    name: "second",
    format: function(oField, oDate) {
      var iSeconds = oDate.getUTCSeconds();
      return String(iSeconds).padStart(oField.digits, "0");
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var iExpectedDigits = Math.max(oPart.digits, 2), sPart = oParseHelper.findNumbers(sValue, iExpectedDigits), bPartInvalid = sPart === "" || oConfig.exactLength && sPart.length < iExpectedDigits, iSeconds = parseInt(sPart), bValid = oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat);
      if (oConfig.strict && iSeconds > 59) {
        bValid = false;
      }
      return {
        length: sPart.length,
        second: iSeconds,
        valid: bValid
      };
    },
    isNumeric: true
  }),
  "S": DateFormat._createPatternSymbol({
    name: "fractionalsecond",
    format: function(oField, oDate) {
      var iMilliseconds = oDate.getUTCMilliseconds();
      var sMilliseconds = String(iMilliseconds);
      var sFractionalseconds = sMilliseconds.padStart(3, "0");
      sFractionalseconds = sFractionalseconds.substr(0, oField.digits);
      sFractionalseconds = sFractionalseconds.padEnd(oField.digits, "0");
      return sFractionalseconds;
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var sPart = oParseHelper.findNumbers(sValue, oPart.digits), iLength = sPart.length, bPartInvalid = oConfig.exactLength && iLength < oPart.digits;
      sPart = sPart.substr(0, 3);
      sPart = sPart.padEnd(3, "0");
      var iMilliseconds = parseInt(sPart);
      return {
        length: iLength,
        millisecond: iMilliseconds,
        valid: oParseHelper.checkValid(oPart.type, bPartInvalid, oFormat)
      };
    },
    isNumeric: true
  }),
  "z": DateFormat._createPatternSymbol({
    name: "timezoneGeneral",
    format: function(oField, oDate, bUTC, oFormat, sTimezone) {
      if (oField.digits > 3 && oDate.getTimezoneLong && oDate.getTimezoneLong()) {
        return oDate.getTimezoneLong();
      } else if (oDate.getTimezoneShort && oDate.getTimezoneShort()) {
        return oDate.getTimezoneShort();
      }
      var iTimezoneOffset = TimezoneUtil_default.calculateOffset(oDate, sTimezone);
      var sTimeZone = "GMT";
      var iTZOffset = Math.abs(iTimezoneOffset / 60);
      var bPositiveOffset = iTimezoneOffset > 0;
      var iHourOffset = Math.floor(iTZOffset / 60);
      var iMinuteOffset = Math.floor(iTZOffset % 60);
      if (!bUTC && iTZOffset !== 0) {
        sTimeZone += bPositiveOffset ? "-" : "+";
        sTimeZone += String(iHourOffset).padStart(2, "0");
        sTimeZone += ":";
        sTimeZone += String(iMinuteOffset).padStart(2, "0");
      } else {
        sTimeZone += "Z";
      }
      return sTimeZone;
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      var iLength = 0;
      var iTZDiff;
      var oTZ = sValue.substring(0, 3);
      if (oTZ === "GMT" || oTZ === "UTC") {
        iLength = 3;
      } else if (sValue.substring(0, 2) === "UT") {
        iLength = 2;
      } else if (sValue.charAt(0) === "Z") {
        iLength = 1;
        iTZDiff = 0;
      } else {
        return {
          error: "cannot be parsed correctly by sap.ui.core.format.DateFormat: The given timezone is not supported!"
        };
      }
      if (sValue.charAt(0) !== "Z") {
        var oParsedTZ = oParseHelper.parseTZ(sValue.substr(iLength), true);
        iLength += oParsedTZ.length;
        iTZDiff = oParsedTZ.tzDiff;
      }
      return {
        length: iLength,
        tzDiff: iTZDiff
      };
    }
  }),
  "Z": DateFormat._createPatternSymbol({
    name: "timezoneRFC822",
    format: function(oField, oDate, bUTC, oFormat, sTimezone) {
      var iTimezoneOffset = TimezoneUtil_default.calculateOffset(oDate, sTimezone);
      var iTZOffset = Math.abs(iTimezoneOffset / 60);
      var bPositiveOffset = iTimezoneOffset > 0;
      var iHourOffset = Math.floor(iTZOffset / 60);
      var iMinuteOffset = Math.floor(iTZOffset % 60);
      var sTimeZone = "";
      if (!bUTC) {
        sTimeZone += bPositiveOffset ? "-" : "+";
        sTimeZone += String(iHourOffset).padStart(2, "0");
        sTimeZone += String(iMinuteOffset).padStart(2, "0");
      }
      return sTimeZone;
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      return oParseHelper.parseTZ(sValue, false);
    }
  }),
  "X": DateFormat._createPatternSymbol({
    name: "timezoneISO8601",
    format: function(oField, oDate, bUTC, oFormat, sTimezone) {
      var iTimezoneOffset = TimezoneUtil_default.calculateOffset(oDate, sTimezone);
      var iTZOffset = Math.abs(iTimezoneOffset / 60);
      var bPositiveOffset = iTimezoneOffset > 0;
      var iHourOffset = Math.floor(iTZOffset / 60);
      var iMinuteOffset = Math.floor(iTZOffset % 60);
      var sTimeZone = "";
      if (!bUTC && iTZOffset !== 0) {
        sTimeZone += bPositiveOffset ? "-" : "+";
        sTimeZone += String(iHourOffset).padStart(2, "0");
        if (oField.digits > 1 || iMinuteOffset > 0) {
          if (oField.digits === 3 || oField.digits === 5) {
            sTimeZone += ":";
          }
          sTimeZone += String(iMinuteOffset).padStart(2, "0");
        }
      } else {
        sTimeZone += "Z";
      }
      return sTimeZone;
    },
    parse: function(sValue, oPart, oFormat, oConfig) {
      if (sValue.charAt(0) === "Z") {
        return {
          length: 1,
          tzDiff: 0
        };
      } else {
        return oParseHelper.parseTZ(sValue, oPart.digits === 3 || oPart.digits === 5);
      }
    }
  }),
  "V": DateFormat._createPatternSymbol({
    name: "timezoneID",
    format: function(oField, oDate, bUTC, oFormat, sTimezone) {
      if (!bUTC && oField.digits === 2) {
        return oFormat.oLocaleData.getTimezoneTranslations()[sTimezone] || sTimezone;
      }
      return "";
    },
    parse: function(sValue, oPart, oFormat, oConfig, sTimezone) {
      var oTimezoneParsed = {
        timezone: "",
        length: 0
      };
      if (oPart.digits === 2) {
        var mTimezoneTranslations = oFormat.oLocaleData.getTimezoneTranslations();
        if (sValue === mTimezoneTranslations[sTimezone]) {
          return {
            timezone: sTimezone,
            length: sValue.length
          };
        }
        var aTimezoneTranslations = Object.values(mTimezoneTranslations);
        var oTimezoneResult = oParseHelper.findEntry(sValue, aTimezoneTranslations, oFormat.oLocaleData.sCLDRLocaleId);
        if (oTimezoneResult.index !== -1) {
          return {
            timezone: Object.keys(mTimezoneTranslations)[oTimezoneResult.index],
            length: oTimezoneResult.length
          };
        }
        var sCurrentValue = "";
        for (var i = sValue.length; i > 0; i -= 1) {
          sCurrentValue = sValue.slice(0, i);
          if (TimezoneUtil_default.isValidTimezone(sCurrentValue)) {
            oTimezoneParsed.timezone = sCurrentValue;
            oTimezoneParsed.length = sCurrentValue.length;
            break;
          }
        }
      }
      return oTimezoneParsed;
    }
  })
};
DateFormat.prototype._format = function(oJSDate, bUTC, sTimezone) {
  if (this.oFormatOptions.relative) {
    var sRes = this.formatRelative(oJSDate, bUTC, this.oFormatOptions.relativeRange, sTimezone);
    if (sRes) {
      return sRes;
    }
  }
  var sCalendarType = this.oFormatOptions.calendarType;
  var oDate = UniversalDate_default.getInstance(oJSDate, sCalendarType);
  var aBuffer = [], oPart, sResult, sSymbol;
  for (var i = 0; i < this.aFormatArray.length; i++) {
    oPart = this.aFormatArray[i];
    sSymbol = oPart.symbol || "";
    aBuffer.push(this.oSymbols[sSymbol].format(oPart, oDate, bUTC, this, sTimezone));
  }
  sResult = aBuffer.join("");
  if (Supportability_default.collectOriginInfo()) {
    sResult = new String(sResult);
    sResult.originInfo = {
      source: "Common Locale Data Repository",
      locale: this.oLocale.toString(),
      style: this.oFormatOptions.style,
      pattern: this.oFormatOptions.pattern
    };
  }
  return sResult;
};
DateFormat.prototype.format = function(vJSDate, bUTC) {
  var sTimezone;
  if (this.type === mDateFormatTypes.DATETIME_WITH_TIMEZONE) {
    sTimezone = bUTC;
    bUTC = false;
    checkTimezoneParameterType(sTimezone);
    if (sTimezone && !TimezoneUtil_default.isValidTimezone(sTimezone)) {
      Log_default.error("The given timezone isn't valid.");
      return "";
    }
  }
  var sCalendarType = this.oFormatOptions.calendarType, sResult;
  if (bUTC === void 0) {
    bUTC = this.oFormatOptions.UTC;
  }
  sTimezone = sTimezone || Configuration_default.getTimezone();
  if (Array.isArray(vJSDate)) {
    if (!this.oFormatOptions.interval) {
      Log_default.error("Non-interval DateFormat can't format more than one date instance.");
      return "";
    }
    if (vJSDate.length !== 2) {
      Log_default.error("Interval DateFormat can only format with 2 date instances but " + vJSDate.length + " is given.");
      return "";
    }
    vJSDate = vJSDate.map(function(oJSDate) {
      return convertToTimezone(oJSDate, sTimezone, bUTC);
    });
    if (this.oFormatOptions.singleIntervalValue) {
      if (vJSDate[0] === null) {
        Log_default.error("First date instance which is passed to the interval DateFormat shouldn't be null.");
        return "";
      }
      if (vJSDate[1] === null) {
        sResult = this._format(vJSDate[0], bUTC, sTimezone);
      }
    }
    if (sResult === void 0) {
      if (!vJSDate.every(isValidDateObject)) {
        Log_default.error("At least one date instance which is passed to the interval DateFormat isn't valid.");
        return "";
      }
      sResult = this._formatInterval(vJSDate, bUTC);
    }
  } else {
    if (!isValidDateObject(vJSDate)) {
      if (this.type === mDateFormatTypes.DATETIME_WITH_TIMEZONE && this.oFormatOptions.pattern.includes("VV")) {
        return this.oLocaleData.getTimezoneTranslations()[sTimezone] || sTimezone;
      }
      Log_default.error("The given date instance isn't valid.");
      return "";
    }
    if (this.oFormatOptions.interval) {
      Log_default.error("Interval DateFormat expects an array with two dates for the first argument but only one date is given.");
      return "";
    }
    vJSDate = convertToTimezone(vJSDate, sTimezone, bUTC);
    sResult = this._format(vJSDate, bUTC, sTimezone);
  }
  if (sCalendarType === CalendarType_default3.Japanese && this.oLocale.getLanguage() === "ja") {
    sResult = sResult.replace(/(^|[^\d])1年/g, "$1元年");
  }
  return sResult;
};
DateFormat.prototype._useCustomIntervalDelimiter = function(oDiffFields) {
  var aTokens;
  if (!this.oFormatOptions.intervalDelimiter) {
    return false;
  }
  if (this.oFormatOptions.format) {
    aTokens = this.oLocaleData._parseSkeletonFormat(this.oFormatOptions.format);
    return aTokens.some(function(oToken2) {
      return oDiffFields[oToken2.group];
    });
  }
  return true;
};
DateFormat.prototype._formatInterval = function(aJSDates, bUTC) {
  var oDate, oPart, sPattern, sSymbol, aBuffer = [], sCalendarType = this.oFormatOptions.calendarType, aFormatArray = [], oFromDate = UniversalDate_default.getInstance(aJSDates[0], sCalendarType), oToDate = UniversalDate_default.getInstance(aJSDates[1], sCalendarType), oDiffFields = this._getDiffFields([oFromDate, oToDate]);
  if (!oDiffFields) {
    return this._format(aJSDates[0], bUTC);
  }
  if (this._useCustomIntervalDelimiter(oDiffFields)) {
    sPattern = this.intervalPatterns[0];
  } else if (this.oFormatOptions.format) {
    sPattern = this.oLocaleData.getCustomIntervalPattern(this.oFormatOptions.format, oDiffFields, sCalendarType);
  } else {
    sPattern = this.oLocaleData.getCombinedIntervalPattern(this.oFormatOptions.pattern, sCalendarType);
  }
  aFormatArray = this.parseCldrDatePattern(sPattern);
  oDate = oFromDate;
  for (var i = 0; i < aFormatArray.length; i++) {
    oPart = aFormatArray[i];
    sSymbol = oPart.symbol || "";
    if (oPart.repeat) {
      oDate = oToDate;
    }
    aBuffer.push(this.oSymbols[sSymbol].format(oPart, oDate, bUTC, this));
  }
  return aBuffer.join("");
};
var mFieldToGroup = {
  Era: "Era",
  FullYear: "Year",
  Quarter: "Quarter",
  Month: "Month",
  Week: "Week",
  Date: "Day",
  DayPeriod: "DayPeriod",
  Hours: "Hour",
  Minutes: "Minute",
  Seconds: "Second"
};
DateFormat.prototype._getDiffFields = function(aDates) {
  var bDiffFound = false, mDiff = {};
  this.aIntervalCompareFields.forEach(function(sField) {
    var sGetterPrefix = "getUTC", sMethodName = sGetterPrefix + sField, sFieldGroup = mFieldToGroup[sField], vFromValue = aDates[0][sMethodName].apply(aDates[0]), vToValue = aDates[1][sMethodName].apply(aDates[1]);
    if (!deepEqual_default(vFromValue, vToValue)) {
      bDiffFound = true;
      mDiff[sFieldGroup] = true;
    }
  });
  if (bDiffFound) {
    return mDiff;
  }
  return null;
};
DateFormat.prototype._parse = function(sValue, aFormatArray, bUTC, bStrict, sTimezone) {
  var sFlexibleDayPeriod, oNextPart, oPart, bPM, oPrevPart, oResult, sSubValue, oDateValue = {
    valid: true,
    lastTimezonePatternSymbol: ""
  }, iIndex = 0, oParseConf = {
    formatArray: aFormatArray,
    dateValue: oDateValue,
    strict: bStrict
  }, that = this;
  function getSymbol(oPart0) {
    return that.oSymbols[oPart0.symbol || ""];
  }
  function isNumeric(oPart0) {
    return !!oPart0 && getSymbol(oPart0).isNumeric(oPart0.digits);
  }
  for (var i = 0; i < aFormatArray.length; i++) {
    sSubValue = sValue.substr(iIndex);
    oPart = aFormatArray[i];
    oPrevPart = aFormatArray[i - 1];
    oNextPart = aFormatArray[i + 1];
    oParseConf.index = i;
    oParseConf.exactLength = isNumeric(oPart) && (isNumeric(oPrevPart) || isNumeric(oNextPart));
    oResult = getSymbol(oPart).parse(sSubValue, oPart, this, oParseConf, sTimezone) || {};
    if (oResult.tzDiff !== void 0 || oResult.timezone) {
      oResult.lastTimezonePatternSymbol = oPart.symbol;
    }
    oDateValue = extend_default(oDateValue, oResult);
    if (oResult.valid === false) {
      break;
    }
    iIndex += oResult.length || 0;
  }
  oDateValue.index = iIndex;
  bPM = oDateValue.pm;
  if (oDateValue.flexDayPeriod && oDateValue.hour * 60 + (oDateValue.minute || 0) < 720) {
    sFlexibleDayPeriod = this.oLocaleData.getFlexibleDayPeriodOfTime(oDateValue.hour + 12, oDateValue.minute || 0);
    bPM = oDateValue.flexDayPeriod === sFlexibleDayPeriod;
  }
  if (bPM) {
    oDateValue.hour += 12;
  }
  if (oDateValue.dayNumberOfWeek === void 0 && oDateValue.dayOfWeek !== void 0) {
    oDateValue.dayNumberOfWeek = this._adaptDayOfWeek(oDateValue.dayOfWeek);
  }
  if (oDateValue.quarter !== void 0 && oDateValue.month === void 0 && oDateValue.day === void 0) {
    oDateValue.month = 3 * oDateValue.quarter;
    oDateValue.day = 1;
  }
  return oDateValue;
};
DateFormat.prototype._parseInterval = function(sValue, sCalendarType, bUTC, bStrict, sTimezone) {
  var aDateValues, iRepeat, oDateValue;
  this.intervalPatterns.some(function(sPattern) {
    var aFormatArray = this.parseCldrDatePattern(sPattern);
    iRepeat = void 0;
    for (var i = 0; i < aFormatArray.length; i++) {
      if (aFormatArray[i].repeat) {
        iRepeat = i;
        break;
      }
    }
    if (iRepeat === void 0) {
      oDateValue = this._parse(sValue, aFormatArray, bUTC, bStrict, sTimezone);
      if (oDateValue.index === 0 || oDateValue.index < sValue.length) {
        oDateValue.valid = false;
      }
      if (oDateValue.valid === false) {
        return;
      }
      aDateValues = [oDateValue, oDateValue];
      return true;
    } else {
      aDateValues = [];
      oDateValue = this._parse(sValue, aFormatArray.slice(0, iRepeat), bUTC, bStrict, sTimezone);
      if (oDateValue.valid === false) {
        return;
      }
      aDateValues.push(oDateValue);
      var iLength = oDateValue.index;
      oDateValue = this._parse(sValue.substring(iLength), aFormatArray.slice(iRepeat), bUTC, bStrict, sTimezone);
      if (oDateValue.index === 0 || oDateValue.index + iLength < sValue.length) {
        oDateValue.valid = false;
      }
      if (oDateValue.valid === false) {
        return;
      }
      aDateValues.push(oDateValue);
      return true;
    }
  }.bind(this));
  return aDateValues;
};
function getCalendarWeekParameter(oFormatOptions) {
  if (oFormatOptions.calendarWeekNumbering) {
    return oFormatOptions.calendarWeekNumbering;
  } else if (oFormatOptions.firstDayOfWeek !== void 0 && oFormatOptions.minimalDaysInFirstWeek !== void 0) {
    return {
      firstDayOfWeek: oFormatOptions.firstDayOfWeek,
      minimalDaysInFirstWeek: oFormatOptions.minimalDaysInFirstWeek
    };
  }
  return void 0;
}
var convertToTimezone = function(oJSDate, sTimezone, bUTC) {
  if (!bUTC && isValidDateObject(oJSDate)) {
    return TimezoneUtil_default.convertToTimezone(oJSDate, sTimezone);
  }
  return oJSDate;
};
var fnCreateDate = function(oDateValue, sCalendarType, bUTC, bStrict, sTimezone, oFormatOptions, oLocale) {
  if (!oDateValue.valid) {
    return null;
  }
  var oDate, iYear = typeof oDateValue.year === "number" ? oDateValue.year : 1970;
  oDate = UniversalDate_default.getInstance(/* @__PURE__ */ new Date(0), sCalendarType);
  oDate.setUTCEra(oDateValue.era || UniversalDate_default.getCurrentEra(sCalendarType));
  oDate.setUTCFullYear(iYear);
  oDate.setUTCMonth(oDateValue.month || 0);
  oDate.setUTCDate(oDateValue.day || 1);
  oDate.setUTCHours(oDateValue.hour || 0);
  oDate.setUTCMinutes(oDateValue.minute || 0);
  oDate.setUTCSeconds(oDateValue.second || 0);
  oDate.setUTCMilliseconds(oDateValue.millisecond || 0);
  if (bStrict && (oDateValue.day || 1) !== oDate.getUTCDate()) {
    return null;
  }
  if (oDateValue.week !== void 0 && (oDateValue.month === void 0 || oDateValue.day === void 0)) {
    oDate.setUTCWeek({
      year: oDateValue.weekYear || oDateValue.year,
      week: oDateValue.week
    }, oLocale, getCalendarWeekParameter(oFormatOptions));
    if (oDateValue.dayNumberOfWeek !== void 0) {
      oDate.setUTCDate(oDate.getUTCDate() + oDateValue.dayNumberOfWeek - 1);
    }
  }
  oDate = oDate.getJSDate();
  if (!bUTC && (oDateValue.lastTimezonePatternSymbol === "V" && oDateValue.timezone || oDateValue.tzDiff === void 0)) {
    if (oDateValue.timezone) {
      sTimezone = oDateValue.timezone;
    }
    if (sTimezone) {
      oDateValue.tzDiff = TimezoneUtil_default.calculateOffset(oDate, sTimezone);
    }
  }
  if (oDateValue.tzDiff) {
    oDate.setUTCSeconds(oDate.getUTCSeconds() + oDateValue.tzDiff);
  }
  return oDate;
};
function mergeWithoutOverwrite(object1, object2) {
  if (object1 === object2) {
    return object1;
  }
  var oMergedObject = {};
  Object.keys(object1).forEach(function(sKey) {
    oMergedObject[sKey] = object1[sKey];
  });
  Object.keys(object2).forEach(function(sKey) {
    if (!oMergedObject.hasOwnProperty(sKey)) {
      oMergedObject[sKey] = object2[sKey];
    }
  });
  return oMergedObject;
}
function isValidDateRange(oStartDate, oEndDate) {
  if (oStartDate.getTime() > oEndDate.getTime()) {
    return false;
  }
  return true;
}
function isValidDateObject(oDate) {
  return oDate && typeof oDate.getTime === "function" && !isNaN(oDate.getTime());
}
DateFormat.prototype.parse = function(sValue, bUTC, bStrict) {
  var bShowDate = this.oFormatOptions.showDate === void 0 || this.oFormatOptions.showDate;
  var bShowTime = this.oFormatOptions.showTime === void 0 || this.oFormatOptions.showTime;
  if (this.type === mDateFormatTypes.DATETIME_WITH_TIMEZONE && (bShowDate && !bShowTime || !bShowDate && bShowTime)) {
    throw new TypeError("The input can only be parsed back to date if both date and time are supplied.");
  }
  var sTimezone;
  if (bUTC === void 0 && this.type !== mDateFormatTypes.DATETIME_WITH_TIMEZONE) {
    bUTC = this.oFormatOptions.UTC;
  }
  var bUTCInputParameter = bUTC;
  if (this.type === mDateFormatTypes.DATETIME_WITH_TIMEZONE) {
    sTimezone = bUTC;
    bUTC = false;
    checkTimezoneParameterType(sTimezone);
    if (sTimezone && !TimezoneUtil_default.isValidTimezone(sTimezone)) {
      Log_default.error("The given timezone isn't valid.");
      return null;
    }
  }
  sValue = sValue == null ? "" : String(sValue).trim();
  sValue = DateFormat._normalize(sValue);
  var oDateValue;
  var sCalendarType = this.oFormatOptions.calendarType;
  sTimezone = sTimezone || Configuration_default.getTimezone();
  if (bStrict === void 0) {
    bStrict = this.oFormatOptions.strictParsing;
  }
  if (sCalendarType === CalendarType_default3.Japanese && this.oLocale.getLanguage() === "ja") {
    sValue = sValue.replace(/元年/g, "1年");
  }
  if (!this.oFormatOptions.interval) {
    var oJSDate = this.parseRelative(sValue, bUTC);
    if (oJSDate) {
      return oJSDate;
    }
    oDateValue = this._parse(sValue, this.aFormatArray, bUTC, bStrict, sTimezone);
    if (oDateValue.index === 0 || oDateValue.index < sValue.length) {
      oDateValue.valid = false;
    }
    oJSDate = fnCreateDate(oDateValue, sCalendarType, bUTC, bStrict, sTimezone, this.oFormatOptions, this.oLocale);
    if (oJSDate) {
      if (this.type === mDateFormatTypes.DATETIME_WITH_TIMEZONE) {
        var bShowTimezone = this.oFormatOptions.showTimezone === void 0 || this.oFormatOptions.showTimezone;
        if (!bShowTimezone && bShowDate && bShowTime) {
          return [oJSDate, void 0];
        } else if (bShowTimezone && !bShowDate && !bShowTime) {
          return [void 0, oDateValue.timezone];
        }
        return [oJSDate, oDateValue.timezone || void 0];
      }
      return oJSDate;
    }
  } else {
    var aDateValues = this._parseInterval(sValue, sCalendarType, bUTC, bStrict, sTimezone);
    var oJSDate1, oJSDate2;
    if (aDateValues && aDateValues.length === 2) {
      var oDateValue1 = mergeWithoutOverwrite(aDateValues[0], aDateValues[1]);
      var oDateValue2 = mergeWithoutOverwrite(aDateValues[1], aDateValues[0]);
      oJSDate1 = fnCreateDate(oDateValue1, sCalendarType, bUTC, bStrict, sTimezone, this.oFormatOptions, this.oLocale);
      oJSDate2 = fnCreateDate(oDateValue2, sCalendarType, bUTC, bStrict, sTimezone, this.oFormatOptions, this.oLocale);
      if (oJSDate1 && oJSDate2) {
        if (this.oFormatOptions.singleIntervalValue && oJSDate1.getTime() === oJSDate2.getTime()) {
          return [oJSDate1, null];
        }
        var bValid = isValidDateRange(oJSDate1, oJSDate2);
        if (bStrict && !bValid) {
          Log_default.error("StrictParsing: Invalid date range. The given end date is before the start date.");
          return [null, null];
        }
        return [oJSDate1, oJSDate2];
      }
    }
  }
  if (this.aFallbackFormats) {
    var vDate;
    this.aFallbackFormats.every(function(oFallbackFormat) {
      vDate = oFallbackFormat.parse(sValue, bUTCInputParameter, bStrict);
      if (Array.isArray(vDate)) {
        if (oFallbackFormat.type === mDateFormatTypes.DATETIME_WITH_TIMEZONE) {
          return false;
        }
        return !(vDate[0] && vDate[1]);
      } else {
        return !vDate;
      }
    });
    return vDate;
  }
  if (!this.oFormatOptions.interval) {
    return null;
  } else {
    return [null, null];
  }
};
DateFormat.prototype.parseCldrDatePattern = function(sPattern) {
  if (mCldrDatePattern[sPattern]) {
    return mCldrDatePattern[sPattern];
  }
  var aFormatArray = [], i, bQuoted = false, oCurrentObject = null, sState = "", sNewState = "", mAppeared = {}, bIntervalStartFound = false;
  for (i = 0; i < sPattern.length; i++) {
    var sCurChar = sPattern.charAt(i), sNextChar, sPrevChar, sPrevPrevChar;
    if (bQuoted) {
      if (sCurChar === "'") {
        sPrevChar = sPattern.charAt(i - 1);
        sPrevPrevChar = sPattern.charAt(i - 2);
        sNextChar = sPattern.charAt(i + 1);
        if (sPrevChar === "'" && sPrevPrevChar !== "'") {
          bQuoted = false;
        } else if (sNextChar === "'") {
          i += 1;
        } else {
          bQuoted = false;
          continue;
        }
      }
      if (sState === "text") {
        oCurrentObject.value += sCurChar;
      } else {
        oCurrentObject = {
          type: "text",
          value: sCurChar
        };
        aFormatArray.push(oCurrentObject);
        sState = "text";
      }
    } else {
      if (sCurChar === "'") {
        bQuoted = true;
      } else if (this.oSymbols[sCurChar]) {
        sNewState = this.oSymbols[sCurChar].name;
        if (sState === sNewState) {
          oCurrentObject.digits++;
        } else {
          oCurrentObject = {
            type: sNewState,
            symbol: sCurChar,
            digits: 1
          };
          aFormatArray.push(oCurrentObject);
          sState = sNewState;
          if (!bIntervalStartFound) {
            if (mAppeared[sNewState]) {
              oCurrentObject.repeat = true;
              bIntervalStartFound = true;
            } else {
              mAppeared[sNewState] = true;
            }
          }
        }
      } else {
        if (sState === "text") {
          oCurrentObject.value += sCurChar;
        } else {
          oCurrentObject = {
            type: "text",
            value: sCurChar
          };
          aFormatArray.push(oCurrentObject);
          sState = "text";
        }
      }
    }
  }
  mCldrDatePattern[sPattern] = aFormatArray;
  return aFormatArray;
};
DateFormat.prototype.parseRelative = function(sValue, bUTC) {
  var aPatterns, oEntry, rPattern, oResult, iValue;
  if (!sValue) {
    return null;
  }
  aPatterns = this.oLocaleData.getRelativePatterns(this.aRelativeParseScales, this.oFormatOptions.relativeStyle);
  for (var i = 0; i < aPatterns.length; i++) {
    oEntry = aPatterns[i];
    rPattern = new RegExp("^\\s*" + oEntry.pattern.replace(/\{0\}/, "(\\d+)") + "\\s*$", "i");
    oResult = rPattern.exec(sValue);
    if (oResult) {
      if (oEntry.value !== void 0) {
        return computeRelativeDate(oEntry.value, oEntry.scale);
      } else {
        iValue = parseInt(oResult[1]);
        return computeRelativeDate(iValue * oEntry.sign, oEntry.scale);
      }
    }
  }
  function computeRelativeDate(iDiff, sScale) {
    var oResult2 = UI5Date_default.getInstance();
    if (bUTC) {
      oResult2.setUTCFullYear(oResult2.getFullYear(), oResult2.getMonth(), oResult2.getDate());
      oResult2.setUTCHours(oResult2.getHours(), oResult2.getMinutes(), oResult2.getSeconds(), oResult2.getMilliseconds());
      switch (sScale) {
        case "second":
          oResult2.setUTCSeconds(oResult2.getUTCSeconds() + iDiff);
          break;
        case "minute":
          oResult2.setUTCMinutes(oResult2.getUTCMinutes() + iDiff);
          break;
        case "hour":
          oResult2.setUTCHours(oResult2.getUTCHours() + iDiff);
          break;
        case "day":
          oResult2.setUTCDate(oResult2.getUTCDate() + iDiff);
          break;
        case "week":
          oResult2.setUTCDate(oResult2.getUTCDate() + iDiff * 7);
          break;
        case "month":
          oResult2.setUTCMonth(oResult2.getUTCMonth() + iDiff);
          break;
        case "quarter":
          oResult2.setUTCMonth(oResult2.getUTCMonth() + iDiff * 3);
          break;
        case "year":
          oResult2.setUTCFullYear(oResult2.getUTCFullYear() + iDiff);
          break;
      }
    } else {
      switch (sScale) {
        case "second":
          oResult2.setSeconds(oResult2.getSeconds() + iDiff);
          break;
        case "minute":
          oResult2.setMinutes(oResult2.getMinutes() + iDiff);
          break;
        case "hour":
          oResult2.setHours(oResult2.getHours() + iDiff);
          break;
        case "day":
          oResult2.setDate(oResult2.getDate() + iDiff);
          break;
        case "week":
          oResult2.setDate(oResult2.getDate() + iDiff * 7);
          break;
        case "month":
          oResult2.setMonth(oResult2.getMonth() + iDiff);
          break;
        case "quarter":
          oResult2.setMonth(oResult2.getMonth() + iDiff * 3);
          break;
        case "year":
          oResult2.setFullYear(oResult2.getFullYear() + iDiff);
          break;
      }
    }
    return oResult2;
  }
};
DateFormat.prototype.formatRelative = function(oJSDate, bUTC, aRange, sTimezone) {
  var oDateUTC, iDiff, iDiffSeconds, sPattern, oToday = convertToTimezone(/* @__PURE__ */ new Date(), sTimezone), sScale = this.oFormatOptions.relativeScale || "day";
  iDiffSeconds = (oJSDate.getTime() - oToday.getTime()) / 1e3;
  if (this.oFormatOptions.relativeScale === "auto") {
    sScale = this._getScale(iDiffSeconds, this.aRelativeScales);
    sScale = fixScaleForMonths(oJSDate, oToday, sScale, iDiffSeconds);
  }
  if (!aRange) {
    aRange = this._mRanges[sScale];
  }
  if (sScale === "year" || sScale === "month" || sScale === "day") {
    oToday = new Date(Date.UTC(oToday.getUTCFullYear(), oToday.getUTCMonth(), oToday.getUTCDate()));
    oDateUTC = /* @__PURE__ */ new Date(0);
    oDateUTC.setUTCFullYear(oJSDate.getUTCFullYear(), oJSDate.getUTCMonth(), oJSDate.getUTCDate());
    oJSDate = oDateUTC;
  }
  iDiff = this._getDifference(sScale, [oToday, oJSDate]);
  if (this.oFormatOptions.relativeScale !== "auto" && (iDiff < aRange[0] || iDiff > aRange[1])) {
    return null;
  }
  sPattern = this.oLocaleData.getRelativePattern(sScale, iDiff, iDiffSeconds > 0, this.oFormatOptions.relativeStyle);
  return formatMessage_default(sPattern, [Math.abs(iDiff)]);
};
DateFormat.prototype._mRanges = {
  second: [-60, 60],
  minute: [-60, 60],
  hour: [-24, 24],
  day: [-6, 6],
  week: [-4, 4],
  month: [-12, 12],
  year: [-10, 10]
};
DateFormat.prototype._mScales = {
  second: 1,
  // 1
  minute: 60,
  // 60
  hour: 3600,
  // 60*60
  day: 86400,
  // 60*60*24         1 day
  week: 604800,
  // 60*60*24*7       7 days
  month: 2592e3,
  // 60*60*24*30      30 days
  quarter: 7776e3,
  // 60*60*24*30*3    90 days
  year: 31536e3
  // 60*60*24*365     365 days
};
DateFormat.prototype._getScale = function(iDiffSeconds, aScales) {
  var sScale, sTestScale;
  iDiffSeconds = Math.abs(iDiffSeconds);
  for (var i = 0; i < aScales.length; i++) {
    sTestScale = aScales[i];
    if (iDiffSeconds >= this._mScales[sTestScale]) {
      sScale = sTestScale;
      break;
    }
  }
  if (!sScale) {
    sScale = aScales[aScales.length - 1];
  }
  return sScale;
};
function fixScaleForMonths(oJSDate, oToday, sScale, iDiffSeconds) {
  var iMonthDiff = Math.abs(oJSDate.getUTCMonth() - oToday.getUTCMonth());
  if (sScale === "week" && iMonthDiff === 2) {
    return "month";
  } else if (sScale === "week" && iMonthDiff === 1) {
    if (oJSDate.getUTCDate() === oToday.getUTCDate() || iDiffSeconds < 0 && oJSDate.getUTCDate() < oToday.getUTCDate() || iDiffSeconds > 0 && oJSDate.getUTCDate() > oToday.getUTCDate()) {
      return "month";
    }
  } else if (sScale === "month" && iMonthDiff === 1) {
    if (iDiffSeconds > 0 && oJSDate.getUTCDate() < oToday.getUTCDate() || iDiffSeconds < 0 && oJSDate.getUTCDate() > oToday.getUTCDate()) {
      return "week";
    }
  }
  return sScale;
}
function cutDateFields(oDate, iStartIndex) {
  var sMethodName, aFields = ["FullYear", "Month", "Date", "Hours", "Minutes", "Seconds", "Milliseconds"], oDateCopy = new Date(oDate.getTime());
  for (var i = iStartIndex; i < aFields.length; i++) {
    sMethodName = "setUTC" + aFields[iStartIndex];
    oDateCopy[sMethodName].apply(oDateCopy, [0]);
  }
  return oDateCopy;
}
var mRelativeDiffs = {
  year: function(oFromDate, oToDate) {
    return oToDate.getUTCFullYear() - oFromDate.getUTCFullYear();
  },
  month: function(oFromDate, oToDate) {
    return oToDate.getUTCMonth() - oFromDate.getUTCMonth() + this.year(oFromDate, oToDate) * 12;
  },
  week: function(oFromDate, oToDate, oFormat) {
    var iFromDay = oFormat._adaptDayOfWeek(oFromDate.getUTCDay());
    var iToDay = oFormat._adaptDayOfWeek(oToDate.getUTCDay());
    oFromDate = cutDateFields(oFromDate, 3);
    oToDate = cutDateFields(oToDate, 3);
    return (oToDate.getTime() - oFromDate.getTime() - (iToDay - iFromDay) * oFormat._mScales.day * 1e3) / (oFormat._mScales.week * 1e3);
  },
  day: function(oFromDate, oToDate, oFormat) {
    oFromDate = cutDateFields(oFromDate, 3);
    oToDate = cutDateFields(oToDate, 3);
    return (oToDate.getTime() - oFromDate.getTime()) / (oFormat._mScales.day * 1e3);
  },
  hour: function(oFromDate, oToDate, oFormat) {
    oFromDate = cutDateFields(oFromDate, 4);
    oToDate = cutDateFields(oToDate, 4);
    return (oToDate.getTime() - oFromDate.getTime()) / (oFormat._mScales.hour * 1e3);
  },
  minute: function(oFromDate, oToDate, oFormat) {
    oFromDate = cutDateFields(oFromDate, 5);
    oToDate = cutDateFields(oToDate, 5);
    return (oToDate.getTime() - oFromDate.getTime()) / (oFormat._mScales.minute * 1e3);
  },
  second: function(oFromDate, oToDate, oFormat) {
    oFromDate = cutDateFields(oFromDate, 6);
    oToDate = cutDateFields(oToDate, 6);
    return (oToDate.getTime() - oFromDate.getTime()) / (oFormat._mScales.second * 1e3);
  }
};
DateFormat.prototype._adaptDayOfWeek = function(iDayOfWeek) {
  var vCalendarWeekParameter = getCalendarWeekParameter(this.oFormatOptions), iFirstDayOfWeek;
  if (typeof vCalendarWeekParameter === "object") {
    iFirstDayOfWeek = vCalendarWeekParameter.firstDayOfWeek;
  } else {
    iFirstDayOfWeek = CalendarUtils_default.getWeekConfigurationValues(vCalendarWeekParameter, this.oLocale).firstDayOfWeek;
  }
  var iDayNumberOfWeek = iDayOfWeek - (iFirstDayOfWeek - 1);
  if (iDayNumberOfWeek <= 0) {
    iDayNumberOfWeek += 7;
  }
  return iDayNumberOfWeek;
};
DateFormat.prototype._getDifference = function(sScale, aDates) {
  var oFromDate = aDates[0];
  var oToDate = aDates[1];
  return Math.round(mRelativeDiffs[sScale](oFromDate, oToDate, this));
};
DateFormat.prototype.getAllowedCharacters = function(aFormatArray) {
  if (this.oFormatOptions.relative) {
    return "";
  }
  var sAllowedCharacters = "";
  var bNumbers = false;
  var bAll = false;
  var oPart;
  for (var i = 0; i < aFormatArray.length; i++) {
    oPart = aFormatArray[i];
    switch (oPart.type) {
      case "text":
        if (sAllowedCharacters.indexOf(oPart.value) < 0) {
          sAllowedCharacters += oPart.value;
        }
        break;
      case "day":
      case "year":
      case "weekYear":
      case "dayNumberOfWeek":
      case "weekInYear":
      case "hour0_23":
      case "hour1_24":
      case "hour0_11":
      case "hour1_12":
      case "minute":
      case "second":
      case "fractionalsecond":
        if (!bNumbers) {
          sAllowedCharacters += "0123456789";
          bNumbers = true;
        }
        break;
      case "month":
      case "monthStandalone":
        if (oPart.digits < 3) {
          if (!bNumbers) {
            sAllowedCharacters += "0123456789";
            bNumbers = true;
          }
        } else {
          bAll = true;
        }
        break;
      default:
        bAll = true;
        break;
    }
  }
  if (bAll) {
    sAllowedCharacters = "";
  }
  return sAllowedCharacters;
};
DateFormat.prototype.getPlaceholderText = function() {
  var oResourceBundle = Core_default.getLibraryResourceBundle();
  return oResourceBundle.getText("date.placeholder", [this.format.apply(this, this.getSampleValue())]);
};
DateFormat.prototype.getSampleValue = function() {
  var oDate, iFullYear = UI5Date_default.getInstance().getFullYear(), bUTC = this.oFormatOptions.UTC;
  function getDate(iYear, iMonth, iDay, iHours, iMinutes, iSeconds, iMilliseconds) {
    return bUTC ? UI5Date_default.getInstance(Date.UTC(iYear, iMonth, iDay, iHours, iMinutes, iSeconds, iMilliseconds)) : UI5Date_default.getInstance(iYear, iMonth, iDay, iHours, iMinutes, iSeconds, iMilliseconds);
  }
  oDate = getDate(iFullYear, 11, 31, 23, 59, 58, 123);
  if (this.type === mDateFormatTypes.DATETIME_WITH_TIMEZONE) {
    return [oDate, Configuration_default.getTimezone()];
  }
  if (this.oFormatOptions.interval) {
    return [[getDate(iFullYear, 11, 22, 9, 12, 34, 567), oDate]];
  }
  return [oDate];
};
var rAllRTLCharacters = /[\u200e\u200f\u202a\u202b\u202c]/g;
var rAllSpaces = /\s/g;
DateFormat._normalize = function(sValue) {
  return sValue.replace(rAllRTLCharacters, "").replace(rAllSpaces, " ");
};
var DateFormat_default = DateFormat;

// node_modules/@ui5/webcomponents-localization/dist/DateFormat.js
var DateFormatWrapped = DateFormat_default;
var DateFormat2 = class extends DateFormatWrapped {
};
var DateFormat_default2 = DateFormat2;

// node_modules/@ui5/webcomponents-localization/dist/LocaleData.js
var LocaleDataWrapped = LocaleData_default;
var LocaleData2 = class extends LocaleDataWrapped {
};
var LocaleData_default2 = LocaleData2;

// node_modules/@ui5/webcomponents-localization/dist/getCachedLocaleDataInstance.js
var cache = /* @__PURE__ */ new Map();
var getCachedLocaleDataInstance = (locale) => {
  if (!cache.has(locale)) {
    cache.set(locale, new LocaleData_default2(locale));
  }
  return cache.get(locale);
};
var getCachedLocaleDataInstance_default = getCachedLocaleDataInstance;

// node_modules/@ui5/webcomponents-localization/dist/dates/ExtremeDates.js
var cache2 = /* @__PURE__ */ new Map();
var getMinCalendarDate = (primaryCalendarType) => {
  const key = `min ${primaryCalendarType}`;
  if (!cache2.has(key)) {
    const minDate = new CalendarDate_default(1, 0, 1, primaryCalendarType);
    minDate.setYear(1);
    minDate.setMonth(0);
    minDate.setDate(1);
    cache2.set(key, minDate);
  }
  return cache2.get(key);
};
var getMaxCalendarDate = (primaryCalendarType) => {
  const key = `max ${primaryCalendarType}`;
  if (!cache2.has(key)) {
    const maxDate = new CalendarDate_default(1, 0, 1, primaryCalendarType);
    maxDate.setYear(9999);
    maxDate.setMonth(11);
    const tempDate = new CalendarDate_default(maxDate, primaryCalendarType);
    tempDate.setDate(1);
    tempDate.setMonth(tempDate.getMonth() + 1, 0);
    maxDate.setDate(tempDate.getDate());
    cache2.set(key, maxDate);
  }
  return cache2.get(key);
};

// node_modules/@ui5/webcomponents/dist/DateComponentBase.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DateComponentBase_1;
var DateComponentBase = DateComponentBase_1 = class DateComponentBase2 extends UI5Element_default {
  constructor() {
    super();
    this.minDate = "";
    this.maxDate = "";
  }
  get _primaryCalendarType() {
    const localeData = getCachedLocaleDataInstance_default(getLocale_default());
    return this.primaryCalendarType || getCalendarType2() || localeData.getPreferredCalendarType();
  }
  get _secondaryCalendarType() {
    return this.secondaryCalendarType || getSecondaryCalendarType2();
  }
  get _minDate() {
    let minDate;
    if (this.minDate) {
      minDate = this._getMinMaxCalendarDateFromString(this.minDate);
    }
    return minDate || getMinCalendarDate(this._primaryCalendarType);
  }
  get _maxDate() {
    let maxDate;
    if (this.maxDate) {
      maxDate = this._getMinMaxCalendarDateFromString(this.maxDate);
    }
    return maxDate || getMaxCalendarDate(this._primaryCalendarType);
  }
  get _formatPattern() {
    return this.formatPattern || "medium";
  }
  get _isPattern() {
    return this._formatPattern !== "medium" && this._formatPattern !== "short" && this._formatPattern !== "long";
  }
  get hasSecondaryCalendarType() {
    return !!this.secondaryCalendarType && this.secondaryCalendarType !== this.primaryCalendarType;
  }
  _getMinMaxCalendarDateFromString(date) {
    if (this.getFormat().parse(date)) {
      return this._getCalendarDateFromString(date);
    }
    const jsDate = this.getISOFormat().parse(date);
    if (jsDate) {
      return CalendarDate_default.fromLocalJSDate(jsDate, this._primaryCalendarType);
    }
  }
  _getCalendarDateFromString(value) {
    const jsDate = this.getFormat().parse(value);
    if (jsDate) {
      return CalendarDate_default.fromLocalJSDate(jsDate, this._primaryCalendarType);
    }
  }
  _getTimeStampFromString(value) {
    const calDate = this._getCalendarDateFromString(value);
    if (calDate) {
      return calDate.toUTCJSDate().valueOf();
    }
  }
  _getStringFromTimestamp(timestamp) {
    const localDate = UI5Date_default2.getInstance(timestamp);
    return this.getFormat().format(localDate, true);
  }
  getFormat() {
    return this._isPattern ? DateFormat_default2.getDateInstance({
      strictParsing: true,
      pattern: this._formatPattern,
      calendarType: this._primaryCalendarType
    }) : DateFormat_default2.getDateInstance({
      strictParsing: true,
      style: this._formatPattern,
      calendarType: this._primaryCalendarType
    });
  }
  getISOFormat() {
    if (!this._isoFormatInstance) {
      this._isoFormatInstance = DateFormat_default2.getDateInstance({
        strictParsing: true,
        pattern: "YYYY-MM-dd",
        calendarType: this._primaryCalendarType
      });
    }
    return this._isoFormatInstance;
  }
  static onDefine() {
    return __async(this, null, function* () {
      [DateComponentBase_1.i18nBundle] = yield Promise.all([
        getI18nBundle("@ui5/webcomponents"),
        fetchCldr(getLocale_default().getLanguage(), getLocale_default().getRegion(), getLocale_default().getScript())
      ]);
    });
  }
};
__decorate([
  property_default()
], DateComponentBase.prototype, "primaryCalendarType", void 0);
__decorate([
  property_default()
], DateComponentBase.prototype, "secondaryCalendarType", void 0);
__decorate([
  property_default()
], DateComponentBase.prototype, "formatPattern", void 0);
__decorate([
  property_default()
], DateComponentBase.prototype, "minDate", void 0);
__decorate([
  property_default()
], DateComponentBase.prototype, "maxDate", void 0);
DateComponentBase = DateComponentBase_1 = __decorate([
  customElement_default({
    languageAware: true,
    renderer: LitRenderer_default
  })
], DateComponentBase);
var DateComponentBase_default = DateComponentBase;

// node_modules/@ui5/webcomponents-localization/dist/dates/getDaysInMonth.js
var getDaysInMonth = (date) => {
  const tempCalendarDate = new CalendarDate_default(date);
  tempCalendarDate.setDate(1);
  tempCalendarDate.setMonth(tempCalendarDate.getMonth() + 1);
  tempCalendarDate.setDate(0);
  return tempCalendarDate.getDate();
};
var getDaysInMonth_default = getDaysInMonth;

// node_modules/@ui5/webcomponents-localization/dist/dates/transformDateToSecondaryType.js
var transformDateToSecondaryType = (primaryCalendarType, secondaryCalendarType2, timeStamp, hasYearPicker) => {
  let firstDate = CalendarDate_default.fromLocalJSDate(UI5Date_default2.getInstance(timeStamp * 1e3), primaryCalendarType);
  let lastDate = CalendarDate_default.fromLocalJSDate(UI5Date_default2.getInstance(timeStamp * 1e3), primaryCalendarType);
  firstDate.setDate(1);
  if (hasYearPicker) {
    firstDate.setMonth(0);
    lastDate.setMonth(11);
  }
  lastDate.setDate(getDaysInMonth_default(lastDate));
  firstDate = new CalendarDate_default(firstDate, secondaryCalendarType2);
  lastDate = new CalendarDate_default(lastDate, secondaryCalendarType2);
  return { firstDate, lastDate };
};
var transformDateToSecondaryType_default = transformDateToSecondaryType;

// node_modules/@ui5/webcomponents-localization/dist/dates/convertMonthNumbersToMonthNames.js
var convertMonthNumbersToMonthNames = (firstMonth, lastMonth, calendarType2) => {
  const localeData = getCachedLocaleDataInstance_default(getLocale_default());
  const pattern = localeData.getIntervalPattern("");
  const secondaryMonthsNames = localeData.getMonthsStandAlone("abbreviated", calendarType2);
  const secondaryMonthsNamesWide = localeData.getMonthsStandAlone("wide", calendarType2);
  if (firstMonth === lastMonth) {
    return {
      text: localeData.getMonths("abbreviated", calendarType2)[firstMonth],
      textInfo: localeData.getMonths("wide", calendarType2)[firstMonth]
    };
  }
  return {
    text: pattern.replace(/\{0\}/, secondaryMonthsNames[firstMonth]).replace(/\{1\}/, secondaryMonthsNames[lastMonth]),
    textInfo: pattern.replace(/\{0\}/, secondaryMonthsNamesWide[firstMonth]).replace(/\{1\}/, secondaryMonthsNamesWide[lastMonth])
  };
};
var convertMonthNumbersToMonthNames_default = convertMonthNumbersToMonthNames;

// node_modules/@ui5/webcomponents-icons/dist/v4/slim-arrow-left.js
var name3 = "slim-arrow-left";
var pathData3 = "M351.5 421q12 12 0 23-5 5-11 5t-11-5l-166-165q-9-10-9-23t9-23l165-164q5-5 11.5-5t11.5 5 5 11-5 11l-159 159q-6 6 0 12z";
var ltr3 = false;
var collection3 = "SAP-icons-v4";
var packageName3 = "@ui5/webcomponents-icons";
registerIcon(name3, { pathData: pathData3, ltr: ltr3, collection: collection3, packageName: packageName3 });

// node_modules/@ui5/webcomponents-icons/dist/v5/slim-arrow-left.js
var name4 = "slim-arrow-left";
var pathData4 = "M326 96q11 0 18.5 7.5T352 122q0 10-8 18L223 256l121 116q8 8 8 18 0 11-7.5 18.5T326 416q-10 0-17-7L168 274q-8-6-8-18 0-11 8-19l141-134q7-7 17-7z";
var ltr4 = false;
var collection4 = "SAP-icons-v5";
var packageName4 = "@ui5/webcomponents-icons";
registerIcon(name4, { pathData: pathData4, ltr: ltr4, collection: collection4, packageName: packageName4 });

// node_modules/@ui5/webcomponents-icons/dist/slim-arrow-left.js
var slim_arrow_left_default = "slim-arrow-left";

// node_modules/@ui5/webcomponents/dist/CalendarDate.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CalendarDate2 = class CalendarDate3 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.value = "";
  }
};
__decorate2([
  property_default()
], CalendarDate2.prototype, "value", void 0);
CalendarDate2 = __decorate2([
  customElement_default("ui5-date")
], CalendarDate2);
CalendarDate2.define();
var CalendarDate_default2 = CalendarDate2;

// node_modules/@ui5/webcomponents/dist/CalendarDateRange.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CalendarDateRange = class CalendarDateRange2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.startValue = "";
    this.endValue = "";
  }
};
__decorate3([
  property_default()
], CalendarDateRange.prototype, "startValue", void 0);
__decorate3([
  property_default()
], CalendarDateRange.prototype, "endValue", void 0);
CalendarDateRange = __decorate3([
  customElement_default("ui5-date-range")
], CalendarDateRange);
CalendarDateRange.define();
var CalendarDateRange_default = CalendarDateRange;

// node_modules/@ui5/webcomponents/dist/CalendarPart.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CalendarPart = class CalendarPart2 extends DateComponentBase_default {
  get _minTimestamp() {
    return this._minDate.valueOf() / 1e3;
  }
  get _maxTimestamp() {
    return this._maxDate.valueOf() / 1e3;
  }
  /**
   * Returns the effective timestamp to be used by the respective calendar part
   * @protected
   */
  get _timestamp() {
    let timestamp = this.timestamp !== void 0 ? this.timestamp : getTodayUTCTimestamp_default(this._primaryCalendarType);
    if (this._maxTimestamp && this._maxTimestamp < timestamp) {
      timestamp = this._maxTimestamp;
    } else if (this._minTimestamp && this._minTimestamp > timestamp) {
      timestamp = this._minTimestamp;
    }
    return timestamp;
  }
  get _localDate() {
    return UI5Date_default2.getInstance(this._timestamp * 1e3);
  }
  /**
   * Returns a CalendarDate instance, representing the _timestamp getter - this date is central to all components' rendering logic
   * @protected
   */
  get _calendarDate() {
    return CalendarDate_default.fromTimestamp(this._localDate.getTime(), this._primaryCalendarType);
  }
  /**
   * Change a timestamp and enforce limits
   * @param timestamp
   * @protected
   */
  _safelySetTimestamp(timestamp) {
    const min = this._minDate.valueOf() / 1e3;
    const max = this._maxDate.valueOf() / 1e3;
    if (timestamp < min) {
      timestamp = min;
    }
    if (timestamp > max) {
      timestamp = max;
    }
    this.timestamp = timestamp;
  }
  /**
   * Modify a timestamp by a certain amount of days/months/years and enforce limits
   * @param amount
   * @param unit
   * @param preserveDate whether to preserve the day of the month (f.e. 15th of March + 1 month = 15th of April)
   * @protected
   */
  _safelyModifyTimestampBy(amount, unit, preserveDate) {
    const newDate = modifyDateBy_default(this._calendarDate, amount, unit, preserveDate);
    this._safelySetTimestamp(newDate.valueOf() / 1e3);
  }
  _getTimestampFromDom(domNode) {
    const oMonthDomRef = domNode.getAttribute("data-sap-timestamp");
    return parseInt(oMonthDomRef);
  }
};
__decorate4([
  property_default({ type: Number })
], CalendarPart.prototype, "timestamp", void 0);
CalendarPart = __decorate4([
  customElement_default()
], CalendarPart);
var CalendarPart_default = CalendarPart;

// node_modules/@ui5/webcomponents-localization/dist/dates/calculateWeekNumber.js
var calculateWeekNumber = (confFirstDayOfWeek, oDate, iYear, oLocale, oLocaleData, calendarType2) => {
  let iWeekNum = 0;
  let iWeekDay = 0;
  const iFirstDayOfWeek = Number.isInteger(confFirstDayOfWeek) ? confFirstDayOfWeek : oLocaleData.getFirstDayOfWeek();
  if (oLocale && (oLocale.getLanguage() === "en" && oLocale.getRegion() === "US")) {
    const oJanFirst = UniversalDate_default2.getInstance(oDate, calendarType2);
    oJanFirst.setUTCFullYear(iYear, 0, 1);
    iWeekDay = oJanFirst.getUTCDay();
    const oCheckDate = UniversalDate_default2.getInstance(oDate, calendarType2);
    oCheckDate.setUTCDate(oCheckDate.getUTCDate() - oCheckDate.getUTCDay() + iWeekDay);
    iWeekNum = Math.round((oCheckDate.getTime() - oJanFirst.getTime()) / 864e5 / 7) + 1;
  } else {
    const oThursday = UniversalDate_default2.getInstance(oDate, calendarType2);
    oThursday.setUTCDate(oThursday.getUTCDate() - iFirstDayOfWeek);
    iWeekDay = oThursday.getUTCDay();
    oThursday.setUTCDate(oThursday.getUTCDate() - iWeekDay + 4);
    const oFirstDayOfYear = UniversalDate_default2.getInstance(new Date(oThursday.getTime()), calendarType2);
    oFirstDayOfYear.setUTCMonth(0, 1);
    iWeekDay = oFirstDayOfYear.getUTCDay();
    let iAddDays = 0;
    if (iWeekDay > 4) {
      iAddDays = 7;
    }
    const oFirstThursday = UniversalDate_default2.getInstance(new Date(oFirstDayOfYear.getTime()), calendarType2);
    oFirstThursday.setUTCDate(1 - iWeekDay + 4 + iAddDays);
    iWeekNum = Math.round((oThursday.getTime() - oFirstThursday.getTime()) / 864e5 / 7) + 1;
  }
  return iWeekNum;
};
var calculateWeekNumber_default = calculateWeekNumber;

// node_modules/@ui5/webcomponents/dist/types/CalendarSelectionMode.js
var CalendarSelectionMode;
(function(CalendarSelectionMode2) {
  CalendarSelectionMode2["Single"] = "Single";
  CalendarSelectionMode2["Multiple"] = "Multiple";
  CalendarSelectionMode2["Range"] = "Range";
})(CalendarSelectionMode || (CalendarSelectionMode = {}));
var CalendarSelectionMode_default = CalendarSelectionMode;

// node_modules/@ui5/webcomponents/dist/generated/templates/DayPickerTemplate.lit.js
function block0(context, tags, suffix) {
  return effectiveHtml`<div class="${classMap(this.classes.root)}" style="${styleMap(this.styles.wrapper)}" @keydown=${this._onkeydown} @keyup=${this._onkeyup} @click=${this._onclick} @mouseover=${this._onmouseover} @focusin=${this._onfocusin} @focusout=${this._onfocusout}><div id="${ifDefined(this._id)}-content" class="ui5-dp-content" role="grid" aria-roledescription="${ifDefined(this.ariaRoledescription)}"><div role="row" class="ui5-dp-days-names-container">${repeat(this._dayNames, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</div>${repeat(this._weeks, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</div></div>`;
}
function block1(context, tags, suffix, item, index) {
  return effectiveHtml`<div role="columnheader" aria-label="${ifDefined(item.name)}" class="${ifDefined(item.classes)}">${ifDefined(item.ultraShortName)}</div>`;
}
function block2(context, tags, suffix, item, index) {
  return effectiveHtml`${item.length ? block3.call(this, context, tags, suffix, item, index) : block10.call(this, context, tags, suffix, item, index)}`;
}
function block3(context, tags, suffix, item, index) {
  return effectiveHtml`<div class="ui5-dp-weeks-row" role="row">${repeat(item, (item2, index2) => item2._id || index2, (item2, index2) => block4.call(this, context, tags, suffix, item2, index2))}</div>`;
}
function block4(context, tags, suffix, item, index) {
  return effectiveHtml`${item.timestamp ? block5.call(this, context, tags, suffix, item, index) : block8.call(this, context, tags, suffix, item, index)}`;
}
function block5(context, tags, suffix, item, index) {
  return effectiveHtml`<div ?special-day="${item.type}" tabindex="${ifDefined(item._tabIndex)}" ?data-sap-focus-ref="${item.focusRef}" data-sap-timestamp="${ifDefined(item.timestamp)}" role="gridcell" aria-selected="${ifDefined(item.ariaSelected)}" aria-label="${ifDefined(item.ariaLabel)}" aria-disabled="${ifDefined(item.ariaDisabled)}" class="${ifDefined(item.classes)}"><span class="ui5-dp-daytext" data-sap-timestamp="${ifDefined(item.timestamp)}">${ifDefined(item.day)}</span>${item._isSecondaryCalendarType ? block6.call(this, context, tags, suffix, item, index) : void 0}${item.type ? block7.call(this, context, tags, suffix, item, index) : void 0}</div>`;
}
function block6(context, tags, suffix, item, index) {
  return effectiveHtml`<span class="ui5-dp-daytext ui5-dp-daysectext">${ifDefined(item.secondDay)}</span>`;
}
function block7(context, tags, suffix, item, index) {
  return effectiveHtml`<div class="ui5-dp-specialday ${ifDefined(item.type)}"></div>`;
}
function block8(context, tags, suffix, item, index) {
  return effectiveHtml`${!item.isHidden ? block9.call(this, context, tags, suffix, item, index) : void 0}`;
}
function block9(context, tags, suffix, item, index) {
  return effectiveHtml`<div class="ui5-dp-weekname-container" role="rowheader" aria-label="Calendar Week ${ifDefined(item.weekNum)}"><span class="ui5-dp-weekname">${ifDefined(item.weekNum)}</span></div>`;
}
function block10(context, tags, suffix, item, index) {
  return effectiveHtml`<div class="sapWCEmptyWeek"></div>`;
}
var DayPickerTemplate_lit_default = block0;

// node_modules/@ui5/webcomponents/dist/generated/themes/DayPicker.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData = { packageName: "@ui5/webcomponents", fileName: "themes/DayPicker.css.ts", content: `:host(:not([hidden])){display:block}:host{height:100%;width:100%}:host([hide-week-numbers]) .ui5-dp-content{flex-basis:100%}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item{flex-direction:column;justify-content:var(--_ui5-v2-0-1_day_picker_item_justify_content)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-daytext{height:1.5625rem;padding-inline-end:var(--_ui5-v2-0-1_dp_two_calendar_item_text_padding_top)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-daysectext{font-size:.75rem;height:var(--_ui5-v2-0-1_dp_two_calendar_item_secondary_text_height);padding-block:var(--_ui5-v2-0-1_dp_two_calendar_item_secondary_text_padding_block);padding-inline:50% .4375rem}.ui5-dp-weekname,.ui5-dp-dayname,.ui5-dp-item{width:var(--_ui5-v2-0-1_day_picker_item_width);height:var(--_ui5-v2-0-1_day_picker_item_height);margin-block-start:var(--_ui5-v2-0-1_daypicker_item_margin);margin-inline-end:var(--_ui5-v2-0-1_daypicker_item_margin);font-family:"72override",var(--sapFontFamily);border-radius:var(--_ui5-v2-0-1_daypicker_item_border_radius)}.ui5-dp-weekname{color:var(--_ui5-v2-0-1_daypicker_weekname_color)}.ui5-dp-weeks-row{display:flex}.ui5-dp-content{display:flex;flex-basis:87.5%;flex-direction:column;font-family:"72override",var(--sapFontFamily)}.ui5-dp-days-names-container{display:flex;height:var(--_ui5-v2-0-1_daypicker_daynames_container_height)}.ui5-dp-weeknumber-container{padding-block-start:var(--_ui5-v2-0-1_daypicker_weeknumbers_container_padding_top);flex-basis:12.5%}.ui5-dp-weekname,.ui5-dp-dayname,.ui5-dp-weekname-container,.ui5-dp-item{display:flex;flex-grow:1;justify-content:center;align-items:center;font-size:var(--sapFontSmallSize);outline:none;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ui5-dp-item{position:relative;color:var(--sapTextColor);background:var(--sapLegend_WorkingBackground);font-size:var(--sapFontSize);border:var(--_ui5-v2-0-1_daypicker_item_border);border-radius:var(--_ui5-v2-0-1_daypicker_item_border_radius)}.ui5-dp-item:hover{background:var(--sapList_Hover_Background)}.ui5-dp-daytext{display:flex;width:100%;height:100%;justify-content:center;align-items:center;box-sizing:border-box}.ui5-dp-dayname{color:var(--_ui5-v2-0-1_daypicker_dayname_color);height:100%}.ui5-dp-item.ui5-dp-item--weeekend{background:var(--sapLegend_NonWorkingBackground)}.ui5-dp-item.ui5-dp-item--disabled{pointer-events:none;opacity:.5}.ui5-dp-item.ui5-dp-item--weeekend:hover{background:var(--sapList_Hover_Background);filter:var(--_ui5-v2-0-1_daypicker_item_weeekend_filter)}.ui5-dp-item.ui5-dp-item--othermonth{color:var(--_ui5-v2-0-1_daypicker_item_othermonth_color);background:var(--_ui5-v2-0-1_daypicker_item_othermonth_background_color);border-color:transparent}.ui5-dp-item.ui5-dp-item--othermonth:hover,.ui5-dp-item.ui5-dp-item--weeekend.ui5-dp-item--othermonth:hover{color:var(--_ui5-v2-0-1_daypicker_item_othermonth_hover_color);background:var(--sapList_Hover_Background)}.ui5-dp-item:focus:after{content:"";border:var(--_ui5-v2-0-1_daypicker_item_not_selected_focus_border);position:absolute;inset:var(--_ui5-v2-0-1_daypicker_item_no_selected_inset);outline:none;border-radius:var(--_ui5-v2-0-1_daypicker_item_border_radius_focus_after)}.ui5-dp-item.ui5-dp-item--now:before{position:absolute;inset:var(--_ui5-v2-0-1_daypicker_item_now_not_selected_inset);border:.125rem solid var(--_ui5-v2-0-1_daypicker_item_now_border_color);content:"";border-radius:var(--_ui5-v2-0-1_daypicker_item_border_radius);z-index:1}.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected{box-shadow:var(--_ui5-v2-0-1_daypicker_item_now_box_shadow)}.ui5-dp-item.ui5-dp-item--selected{background:var(--sapContent_Selected_Background)}.ui5-dp-item.ui5-dp-item--selected:not(.ui5-dp-item.ui5-dp-item--now) .ui5-dp-daytext:after{position:absolute;inset:0;border:var(--_ui5-v2-0-1_daypicker_item_selected_border);content:"";border-radius:var(--_ui5-v2-0-1_daypicker_item_border_radius_item);z-index:1}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext{border:var(--_ui5-v2-0-1_day_picker_item_selected_now_border);outline:var(--_ui5-v2-0-1_daypicker_item_selected_text_outline);outline-offset:var(--_ui5-v2-0-1_daypicker_item_now_selected_outline_offset);border-radius:var(--_ui5-v2-0-1_daypicker_item_border_radius_item);font-family:var(--_ui5-v2-0-1_daypicker_item_selected_text_font)}.ui5-dp-item.ui5-dp-item--selected .ui5-dp-daytext{background:var(--_ui5-v2-0-1_daypicker_item_selected_background);color:var(--sapContent_Selected_TextColor);border-radius:var(--_ui5-v2-0-1_daypicker_item_border_radius);border:var(--_ui5-v2-0-1_daypicker_item_selected_text_border);font-family:var(--_ui5-v2-0-1_daypicker_item_selected_text_font)}.ui5-dp-item.ui5-dp-item--selected .ui5-dp-daytext{background:var(--_ui5-v2-0-1_daypicker_item_selected_daytext_hover_background);color:var(--sapContent_Selected_TextColor)}.ui5-dp-item.ui5-dp-item--now:focus:after{inset:var(--_ui5-v2-0-1_daypicker_item_now_inset);border-radius:var(--_ui5-v2-0-1_daypicker_item_now_border_radius_focus_after);border:var(--_ui5-v2-0-1_daypicker_item_now_border_focus_after);position:absolute;content:"";width:auto;height:auto}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now:focus:after{inset:var(--_ui5-v2-0-1_daypicker_item_now_inset);border-radius:var(--_ui5-v2-0-1_day_picker_item_selected_now_border_radius_focus);border:var(--_ui5-v2-0-1_day_picker_item_selected_now_border_focus);position:absolute;content:"";width:auto;height:auto}.ui5-dp-item.ui5-dp-item--selected:hover{background:var( --_ui5-v2-0-1_daypicker_item_selected_hover);color:var(--sapContent_ContrastTextColor)}.ui5-dp-item.ui5-dp-item--selected:focus:after{border-color:var(--_ui5-v2-0-1_daypicker_item_selected_focus_color);border-width:var(--_ui5-v2-0-1_daypicker_item_selected_focus_width)}.ui5-dp-items-container{outline:none}.ui5-dp-item.ui5-dp-item--selected-between .ui5-dp-daytext{border-radius:var(--_ui5-v2-0-1_daypicker_item_border_radius);color:var(--sapTextColor);font-weight:var(--_ui5-v2-0-1_daypicker_item_selected_between_text_font)}.ui5-dp-item.ui5-dp-item--selected-between.ui5-dp-item--now:not(.ui5-dp-item--selected) .ui5-dp-daytext:after{content:"";position:absolute;inset:var(--_ui5-v2-0-1_daypicker_item_now_selected_between_inset);border:var(--_ui5-v2-0-1_daypicker_item_now_selected_between_border);border-radius:var(--_ui5-v2-0-1_daypicker_item_now_selected_between_border_radius)}.ui5-dp-item.ui5-dp-item--selected-between{border:var(--_ui5-v2-0-1_daypicker_item_select_between_border);border-radius:var(--_ui5-v2-0-1_daypicker_item_selected_between_border);background:var(--_ui5-v2-0-1_daypicker_item_selected_between_background)}.ui5-dp-item.ui5-dp-item--selected-between:hover{background:var(--_ui5-v2-0-1_daypicker_item_selected_between_hover_background)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--selected-between:focus:after{border-color:var(--sapContent_FocusColor)}.ui5-dp-items-container>:first-child{justify-content:flex-end}.ui5-dp-emptyweek{height:var(--_ui5-v2-0-1_day_picker_empty_height)}.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype:focus:after{outline-offset:-.1875rem;border-radius:var(--_ui5-v2-0-1-dp-item_withsecondtype_border)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now.ui5-dp-item--withsecondtype .ui5-dp-daysectext,.ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype .ui5-dp-daytext{border:none;outline:none}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected:not(.ui5-dp-item.ui5-dp-item--now) .ui5-dp-daytext:after{border-width:.0625rem}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--now .ui5-dp-daysectext{height:var(--_ui5-v2-0-1_dp_two_calendar_item_secondary_text_height);padding-block-start:0;border-radius:var(--_ui5-v2-0-1_dp_two_calendar_item_secondary_text_border_radios)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now .ui5-dp-daytext{border-radius:var(--_ui5-v2-0-1_daypicker_two_calendar_item_border_radius);margin-block-end:var(--_ui5-v2-0-1_daypicker_two_calendar_item_margin_bottom)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item:focus:after{inset:var(--_ui5-v2-0-1_daypicker_two_calendar_item_no_selected_inset);border-radius:var(--_ui5-v2-0-1_daypicker_two_calendar_item_border_focus_border_radius)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--now:after{inset:var(--_ui5-v2-0-1_daypicker_two_calendar_item_no_selected_focus_inset);border-radius:var(--_ui5-v2-0-1_daypicker_two_calendar_item_no_select_focus_border_radius)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected:focus:after{border-width:var(--_ui5-v2-0-1_daypicker_two_calendar_item_now_selected_border_width);inset:var(--_ui5-v2-0-1_daypicker_two_calendar_item_now_selected_border_inset);border-radius:var(--_ui5-v2-0-1_daypicker_two_calendar_item_border_focus_border_radius)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now:after{inset:var(--_ui5-v2-0-1_daypicker_two_calendar_item_now_inset);border-radius:var(--_ui5-v2-0-1_daypicker_two_calendar_item_selected_now_border_radius_focus)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--now.ui5-dp-item--selected.ui5-dp-item--withsecondtype .ui5-dp-daytext:not(.ui5-dp-daysectext):before{content:var(--_ui5-v2-0-1_daypicker_two_calendar_item_now_day_text_content);position:absolute;inset:.25rem;border-radius:var(--_ui5-v2-0-1_daypicker_two_calendar_item_selected_now_border_radius_focus);outline:var(--_ui5-v2-0-1_daypicker_item_selected__secondary_type_text_outline);z-index:1}.ui5-dp-specialday{width:100%;height:.375rem;position:absolute;box-sizing:border-box;inset-block-start:var(--_ui5-v2-0-1_daypicker_special_day_top);border-end-end-radius:var(--_ui5-v2-0-1_daypicker_special_day_border_bottom_radius);border-end-start-radius:var(--_ui5-v2-0-1_daypicker_special_day_border_bottom_radius);border-block-start:var(--_ui5-v2-0-1_daypicker_special_day_border_top)}.ui5-dp-item--selected .ui5-dp-specialday{width:var(--_ui5-v2-0-1_daypicker_selected_item_special_day_width)}.ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-specialday{inset-block-start:var(--_ui5-v2-0-1_daypicker_selected_item_now_special_day_top);width:var(--_ui5-v2-0-1_daypicker_selected_item_now_special_day_width);border-end-end-radius:var(--_ui5-v2-0-1_daypicker_selected_item_now_special_day_border_bottom_radius);border-end-start-radius:var(--_ui5-v2-0-1_daypicker_selected_item_now_special_day_border_bottom_radius)}.ui5-dp-item--now .ui5-dp-specialday,.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-specialday{height:.3125rem;border-end-end-radius:var(--_ui5-v2-0-1_daypicker_selected_item_now_special_day_border_bottom_radius_alternate);border-end-start-radius:var(--_ui5-v2-0-1_daypicker_selected_item_now_special_day_border_bottom_radius_alternate);inset-block-start:var(--_ui5-v2-0-1_daypicker_item_now_specialday_top);width:var(--_ui5-v2-0-1_daypicker_item_now_specialday_width)}.ui5-dp-item:not(:focus).ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-specialday{border-end-end-radius:var(--_ui5-v2-0-1_daypicker_special_day_selected_border_radius_bottom);border-end-start-radius:var(--_ui5-v2-0-1_daypicker_special_day_selected_border_radius_bottom)}.ui5-dp-item--now .ui5-dp-specialday{width:var(--_ui5-v2-0-1_daypicker_selected_item_now_special_day_width);inset-block-start:var(--_ui5-v2-0-1_daypicker_selected_item_now_special_day_top)}.ui5-dp-item[special-day].ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-daytext{border-radius:var(--_ui5-v2-0-1-daypicker_item_selected_now_border_radius)}.ui5-dp-item[special-day].ui5-dp-item--selected.ui5-dp-item--now:focus:after,.ui5-dp-item[special-day].ui5-dp-item--now:focus:after{margin:var(--_ui5-v2-0-1_daypicker_item_now_focus_margin)}.ui5-dp-item.ui5-dp-item--now:focus .ui5-dp-specialday{inset-block-start:var(--_ui5-v2-0-1_daypicker_specialday_focused_top);width:var(--_ui5-v2-0-1_daypicker_specialday_focused_width);border-end-end-radius:var(--_ui5-v2-0-1_daypicker_specialday_focused_border_bottom);border-end-start-radius:var(--_ui5-v2-0-1_daypicker_specialday_focused_border_bottom);height:.3125rem}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item[special-day].ui5-dp-item--selected.ui5-dp-item--now:after,.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item[special-day].ui5-dp-item--now:after{inset:var(--_ui5-v2-0-1_daypicker_twocalendar_item_special_day_now_inset);border-radius:var(--_ui5-v2-0-1_daypicker_twocalendar_item_special_day_now_border_radius);border-width:var(--_ui5-v2-0-1_daypicker_twocalendar_item_special_day_after_border_width);border-color:var(--_ui5-v2-0-1_daypicker_item_selected_focus_color)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item[special-day].ui5-dp-item--now:not(.ui5-dp-item--selected):after{inset:.1875rem}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item .ui5-dp-specialday{inset-block-start:var(--_ui5-v2-0-1_daypicker_twocalendar_item_special_day_top);inset-inline-end:var(--_ui5-v2-0-1_daypicker_twocalendar_item_special_day_right)}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item:not(.ui5-dp-item--now) .ui5-dp-daysectext{padding-block:var(--_ui5-v2-0-1_dp_two_calendar_item_secondary_text_padding)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now.ui5-dp-item--withsecondtype:focus .ui5-dp-specialday{inset-block-start:var(--_ui5-v2-0-1_daypicker_item_now_selected_two_calendar_focus_special_day_top);inset-inline-end:var(--_ui5-v2-0-1_daypicker_item_now_selected_two_calendar_focus_special_day_right)}.ui5-dp-item.ui5-dp-item--selected.ui5-dp-item--now.ui5-dp-item--withsecondtype:focus .ui5-dp-daysectext{padding-block:var(--_ui5-v2-0-1_daypicker_item_now_selected_two_calendar_focus_secondary_text_padding_block)}.ui5-dp-item--withsecondtype .ui5-dp-daytext{font-size:.75rem}.ui5-dp-item.ui5-dp-item--withsecondtype .ui5-dp-specialday,.ui5-dp-item.ui5-dp-item--withsecondtype.ui5-dp-item--now:focus .ui5-dp-specialday,.ui5-dp-item.ui5-dp-item--withsecondtype:not(:focus).ui5-dp-item--selected.ui5-dp-item--now .ui5-dp-specialday{border-radius:100%;width:var(--_ui5-v2-0-1_daypicker_twocalendar_item_special_day_dot);inset-block-start:var(--_ui5-v2-0-1_daypicker_twocalendar_item_special_day_top);inset-inline-end:var(--_ui5-v2-0-1_daypicker_twocalendar_item_special_day_right);height:var(--_ui5-v2-0-1_daypicker_twocalendar_item_special_day_dot);border-block-start:none}.ui5-dp-root.ui5-dp-twocalendartypes .ui5-dp-item.ui5-dp-item--selected.ui5-dp-item.ui5-dp-item--now:focus .ui5-dp-daytext{margin-block-end:var(--_ui5-v2-0-1_daypicker_two_calendar_item_selected_focus_margin_bottom);padding-inline-end:var(--_ui5-v2-0-1_daypicker_two_calendar_item_selected_focus_padding_right)}.Type01{background:var(--sapLegendColor1)}.Type02{background:var(--sapLegendColor2)}.Type03{background:var(--sapLegendColor3)}.Type04{background:var(--sapLegendColor4)}.Type05{background:var(--sapLegendColor5)}.Type06{background:var(--sapLegendColor6)}.Type07{background:var(--sapLegendColor7)}.Type08{background:var(--sapLegendColor8)}.Type09{background:var(--sapLegendColor9)}.Type10{background:var(--sapLegendColor10)}.Type11{background:var(--sapLegendColor11)}.Type12{background:var(--sapLegendColor12)}.Type13{background:var(--sapLegendColor13)}.Type14{background:var(--sapLegendColor14)}.Type15{background:var(--sapLegendColor15)}.Type16{background:var(--sapLegendColor16)}.Type17{background:var(--sapLegendColor17)}.Type18{background:var(--sapLegendColor18)}.Type19{background:var(--sapLegendColor19)}.Type20{background:var(--sapLegendColor20)}
` };
var DayPicker_css_default = styleData;

// node_modules/@ui5/webcomponents/dist/DayPicker.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DayPicker_1;
var isBetween = (x, num1, num2) => x > Math.min(num1, num2) && x < Math.max(num1, num2);
var DAYS_IN_WEEK = 7;
var DayPicker = DayPicker_1 = class DayPicker2 extends CalendarPart_default {
  constructor() {
    super(...arguments);
    this.selectedDates = [];
    this.selectionMode = "Single";
    this.hideWeekNumbers = false;
    this._weeks = [];
    this._dayNames = [];
    this._hidden = false;
    this.specialCalendarDates = [];
  }
  onBeforeRendering() {
    const localeData = getCachedLocaleDataInstance_default(getLocale_default());
    this._buildWeeks(localeData);
    this._buildDayNames(localeData);
  }
  /**
   * Builds the "_weeks" object that represents the month.
   * @param localeData
   * @private
   */
  _buildWeeks(localeData) {
    if (this._hidden) {
      return;
    }
    this._weeks = [];
    const firstDayOfWeek = this._getFirstDayOfWeek();
    const specialCalendarDates = this._specialCalendarDates;
    const monthsNames = localeData.getMonths("wide", this._primaryCalendarType);
    const secondaryMonthsNames = this.hasSecondaryCalendarType ? localeData.getMonths("wide", this.secondaryCalendarType) : [];
    const nonWorkingDayLabel = DayPicker_1.i18nBundle.getText(DAY_PICKER_NON_WORKING_DAY);
    const todayLabel = DayPicker_1.i18nBundle.getText(DAY_PICKER_TODAY);
    const tempDate = this._getFirstDay();
    const todayDate = CalendarDate_default.fromLocalJSDate(UI5Date_default2.getInstance(), this._primaryCalendarType);
    const calendarDate = this._calendarDate;
    const minDate = this._minDate;
    const maxDate = this._maxDate;
    const tempSecondDate = this.hasSecondaryCalendarType ? this._getSecondaryDay(tempDate) : void 0;
    let week = [];
    for (let i = 0; i < DAYS_IN_WEEK * 6; i++) {
      const timestamp = tempDate.valueOf() / 1e3;
      let dayOfTheWeek = tempDate.getDay() - firstDayOfWeek;
      if (dayOfTheWeek < 0) {
        dayOfTheWeek += DAYS_IN_WEEK;
      }
      const specialCalendarDate = specialCalendarDates.find((specialDate) => specialDate.specialDateTimestamp === timestamp);
      const specialDayType = specialCalendarDate ? specialCalendarDate.type : "";
      const isFocused = tempDate.getMonth() === calendarDate.getMonth() && tempDate.getDate() === calendarDate.getDate();
      const isSelected = this._isDaySelected(timestamp);
      const isSelectedBetween = this._isDayInsideSelectionRange(timestamp);
      const isOtherMonth = tempDate.getMonth() !== calendarDate.getMonth();
      const isWeekend = this._isWeekend(tempDate);
      const isDisabled = tempDate.valueOf() < minDate.valueOf() || tempDate.valueOf() > maxDate.valueOf();
      const isToday = tempDate.isSame(todayDate);
      const isFirstDayOfWeek = tempDate.getDay() === firstDayOfWeek;
      const nonWorkingAriaLabel = isWeekend ? `${nonWorkingDayLabel} ` : "";
      const todayAriaLabel = isToday ? `${todayLabel} ` : "";
      const tempSecondDateNumber = tempSecondDate ? tempSecondDate.getDate() : "";
      const tempSecondYearNumber = tempSecondDate ? tempSecondDate.getYear() : "";
      const secondaryMonthsNamesString = secondaryMonthsNames.length > 0 ? secondaryMonthsNames[tempSecondDate.getMonth()] : "";
      const ariaLabel = this.hasSecondaryCalendarType ? `${todayAriaLabel}${nonWorkingAriaLabel}${monthsNames[tempDate.getMonth()]} ${tempDate.getDate()}, ${tempDate.getYear()}; ${secondaryMonthsNamesString} ${tempSecondDateNumber}, ${tempSecondYearNumber}` : `${todayAriaLabel}${nonWorkingAriaLabel}${monthsNames[tempDate.getMonth()]} ${tempDate.getDate()}, ${tempDate.getYear()}`;
      const day = {
        timestamp: timestamp.toString(),
        focusRef: isFocused,
        _tabIndex: isFocused ? "0" : "-1",
        selected: isSelected || isSelectedBetween,
        day: tempDate.getDate(),
        secondDay: this.hasSecondaryCalendarType ? tempSecondDate.getDate() : void 0,
        _isSecondaryCalendarType: this.hasSecondaryCalendarType,
        classes: `ui5-dp-item ui5-dp-wday${dayOfTheWeek}`,
        ariaLabel,
        ariaSelected: String(isSelected || isSelectedBetween),
        ariaDisabled: isOtherMonth ? "true" : void 0,
        disabled: isDisabled,
        type: specialDayType
      };
      if (isFirstDayOfWeek) {
        day.classes += " ui5-dp-firstday";
      }
      if (isSelected) {
        day.classes += " ui5-dp-item--selected";
      }
      if (isSelectedBetween) {
        day.classes += " ui5-dp-item--selected-between";
      }
      if (isToday) {
        day.classes += " ui5-dp-item--now";
      }
      if (isOtherMonth) {
        day.classes += " ui5-dp-item--othermonth";
      }
      if (isWeekend) {
        day.classes += " ui5-dp-item--weeekend";
      }
      if (isDisabled) {
        day.classes += " ui5-dp-item--disabled";
      }
      if (this.hasSecondaryCalendarType) {
        day.classes += " ui5-dp-item--withsecondtype";
      }
      week.push(day);
      if (dayOfTheWeek === DAYS_IN_WEEK - 1) {
        week.unshift({
          weekNum: calculateWeekNumber_default(getFirstDayOfWeek(), tempDate.toUTCJSDate(), tempDate.getYear(), getLocale_default(), localeData, this._primaryCalendarType),
          isHidden: this.shouldHideWeekNumbers
        });
      }
      if (week.length === DAYS_IN_WEEK + 1) {
        this._weeks.push(week);
        week = [];
      }
      tempDate.setDate(tempDate.getDate() + 1);
      if (this.hasSecondaryCalendarType && tempSecondDate) {
        tempSecondDate.setDate(tempSecondDate.getDate() + 1);
      }
    }
  }
  /**
   * Builds the dayNames object (header of the month).
   * @param localeData
   * @private
   */
  _buildDayNames(localeData) {
    if (this._hidden) {
      return;
    }
    let dayOfTheWeek;
    const aDayNamesWide = localeData.getDays("wide", this._primaryCalendarType);
    let aDayNamesAbbreviated = localeData.getDays("abbreviated", this._primaryCalendarType);
    let dayName;
    if (this.namesTooLong(aDayNamesAbbreviated)) {
      aDayNamesAbbreviated = localeData.getDays("narrow", this._primaryCalendarType);
    }
    this._dayNames = [];
    this._dayNames.push({
      classes: "ui5-dp-dayname",
      name: DayPicker_1.i18nBundle.getText(DAY_PICKER_WEEK_NUMBER_TEXT)
    });
    for (let i = 0; i < DAYS_IN_WEEK; i++) {
      dayOfTheWeek = i + this._getFirstDayOfWeek();
      if (dayOfTheWeek > DAYS_IN_WEEK - 1) {
        dayOfTheWeek -= DAYS_IN_WEEK;
      }
      dayName = {
        name: aDayNamesWide[dayOfTheWeek],
        ultraShortName: aDayNamesAbbreviated[dayOfTheWeek],
        classes: "ui5-dp-dayname"
      };
      this._dayNames.push(dayName);
    }
    this._dayNames[1].classes += " ui5-dp-firstday";
    if (this.shouldHideWeekNumbers) {
      this._dayNames.shift();
    }
  }
  /**
   * Tells if any of the days is more than 4 characters(too long to render).
   * @param dayNames
   * @private
   */
  namesTooLong(dayNames) {
    return dayNames.some((dayName) => dayName.length > 4);
  }
  onAfterRendering() {
    if (this._autoFocus && !this._hidden) {
      this.focus();
    }
    const focusedDay = this.shadowRoot.querySelector("[data-sap-focus-ref]");
    if (focusedDay && document.activeElement !== focusedDay && this._specialCalendarDates.length === 0) {
      focusedDay.focus();
    }
  }
  _onfocusin() {
    this._autoFocus = true;
  }
  _onfocusout() {
    this._autoFocus = false;
  }
  /**
   * Tells if the day is selected (dark blue).
   * @param timestamp
   * @private
   */
  _isDaySelected(timestamp) {
    if (this.selectionMode === CalendarSelectionMode_default.Single) {
      return timestamp === this.selectedDates[0];
    }
    if (this.selectionMode === CalendarSelectionMode_default.Multiple) {
      return this.selectedDates.includes(timestamp);
    }
    return timestamp === this.selectedDates[0] || timestamp === this.selectedDates[this.selectedDates.length - 1];
  }
  /**
   * Tells if the day is inside a selection range (light blue).
   * @param timestamp
   * @private
   */
  _isDayInsideSelectionRange(timestamp) {
    if (this.selectionMode !== CalendarSelectionMode_default.Range || !this.selectedDates.length) {
      return false;
    }
    if (this.selectedDates.length === 1 && this._secondTimestamp) {
      return isBetween(timestamp, this.selectedDates[0], this._secondTimestamp);
    }
    return isBetween(timestamp, this.selectedDates[0], this.selectedDates[this.selectedDates.length - 1]);
  }
  /**
   * Selects/deselects a day.
   * @param e
   * @param isShift true if the user did Click+Shift or Enter+Shift (but not Space+Shift)
   * @private
   */
  _selectDate(e, isShift) {
    let target = e.target;
    if (!target.hasAttribute("data-sap-timestamp")) {
      target = target.parentNode;
    }
    if (!this._isDayPressed(target)) {
      return;
    }
    const timestamp = this._getTimestampFromDom(target);
    this._safelySetTimestamp(timestamp);
    this._updateSecondTimestamp();
    if (this.selectionMode === CalendarSelectionMode_default.Single) {
      this.selectedDates = [timestamp];
    } else if (this.selectionMode === CalendarSelectionMode_default.Multiple) {
      if (this.selectedDates.length > 0 && isShift) {
        this._multipleSelection(timestamp);
      } else {
        this._toggleTimestampInSelection(timestamp);
      }
    } else {
      this.selectedDates = this.selectedDates.length === 1 ? [...this.selectedDates, timestamp] : [timestamp];
    }
    this.fireEvent("change", {
      timestamp: this.timestamp,
      dates: this.selectedDates
    });
  }
  /**
   * Selects/deselects the whole row (week).
   * @private
   */
  _selectWeek() {
    this._weeks.forEach((week) => {
      const _week = week;
      const dayInThisWeek = _week.findIndex((item) => {
        const date = CalendarDate_default.fromTimestamp(parseInt(item.timestamp) * 1e3);
        return date.getMonth() === this._calendarDate.getMonth() && date.getDate() === this._calendarDate.getDate();
      }) !== -1;
      if (dayInThisWeek) {
        const notAllDaysOfThisWeekSelected = _week.some((item) => item.timestamp && !this.selectedDates.includes(parseInt(item.timestamp)));
        if (notAllDaysOfThisWeekSelected) {
          _week.filter((item) => item.timestamp).forEach((item) => {
            this._addTimestampToSelection(parseInt(item.timestamp));
          });
        } else {
          _week.filter((item) => item.timestamp).forEach((item) => {
            this._removeTimestampFromSelection(parseInt(item.timestamp));
          });
        }
      }
    });
    this.fireEvent("change", {
      timestamp: this.timestamp,
      dates: this.selectedDates
    });
  }
  _toggleTimestampInSelection(timestamp) {
    if (this.selectedDates.includes(timestamp)) {
      this._removeTimestampFromSelection(timestamp);
    } else {
      this._addTimestampToSelection(timestamp);
    }
  }
  _addTimestampToSelection(timestamp) {
    if (!this.selectedDates.includes(timestamp)) {
      this.selectedDates = [...this.selectedDates, timestamp];
    }
  }
  _removeTimestampFromSelection(timestamp) {
    this.selectedDates = this.selectedDates.filter((value) => value !== timestamp);
  }
  /**
   * Called when at least one day is selected and the user presses "Shift".
   * @param timestamp
   * @private
   */
  _multipleSelection(timestamp) {
    const min = Math.min(...this.selectedDates);
    const max = Math.max(...this.selectedDates);
    let start;
    let end;
    let toggle = false;
    if (timestamp < min) {
      start = timestamp;
      end = min;
    } else if (timestamp >= min && timestamp <= max) {
      const distanceToMin = Math.abs(timestamp - min);
      const distanceToMax = Math.abs(timestamp - max);
      if (distanceToMin < distanceToMax) {
        start = timestamp;
        end = max;
      } else {
        start = min;
        end = timestamp;
      }
      toggle = true;
    } else {
      start = max;
      end = timestamp;
    }
    const startDate = CalendarDate_default.fromTimestamp(start * 1e3);
    const endDate = CalendarDate_default.fromTimestamp(end * 1e3);
    while (startDate.valueOf() <= endDate.valueOf()) {
      this[toggle ? "_toggleTimestampInSelection" : "_addTimestampToSelection"](startDate.valueOf() / 1e3);
      startDate.setDate(startDate.getDate() + 1);
    }
  }
  /**
   * Set the hovered day as the "_secondTimestamp".
   * @param e
   * @private
   */
  _onmouseover(e) {
    const target = e.target;
    const hoveredItem = target.closest(".ui5-dp-item");
    if (hoveredItem && this.selectionMode === CalendarSelectionMode_default.Range && this.selectedDates.length === 1) {
      this._secondTimestamp = this._getTimestampFromDom(hoveredItem);
    }
  }
  _onkeydown(e) {
    let preventDefault = true;
    if (isEnter(e) || isEnterShift(e)) {
      this._selectDate(e, isEnterShift(e));
    } else if (isSpace(e) || isSpaceShift(e)) {
      e.preventDefault();
    } else if (isLeft(e)) {
      this._modifyTimestampBy(-1, "day", false);
    } else if (isRight(e)) {
      this._modifyTimestampBy(1, "day", false);
    } else if (isUp(e)) {
      this._modifyTimestampBy(-7, "day", false);
    } else if (isDown(e)) {
      this._modifyTimestampBy(7, "day", false);
    } else if (isPageUp(e)) {
      this._modifyTimestampBy(-1, "month");
    } else if (isPageDown(e)) {
      this._modifyTimestampBy(1, "month");
    } else if (isPageUpShift(e) || isPageUpAlt(e)) {
      this._modifyTimestampBy(-1, "year");
    } else if (isPageDownShift(e) || isPageDownAlt(e)) {
      this._modifyTimestampBy(1, "year");
    } else if (isPageUpShiftCtrl(e)) {
      this._modifyTimestampBy(-10, "year");
    } else if (isPageDownShiftCtrl(e)) {
      this._modifyTimestampBy(10, "year");
    } else if (isHome(e) || isEnd(e)) {
      this._onHomeOrEnd(isHome(e));
    } else if (isHomeCtrl(e)) {
      const tempDate = new CalendarDate_default(this._calendarDate, this._primaryCalendarType);
      tempDate.setDate(1);
      this._setTimestamp(tempDate.valueOf() / 1e3);
    } else if (isEndCtrl(e)) {
      const tempDate = new CalendarDate_default(this._calendarDate, this._primaryCalendarType);
      tempDate.setMonth(tempDate.getMonth() + 1);
      tempDate.setDate(0);
      this._setTimestamp(tempDate.valueOf() / 1e3);
    } else {
      preventDefault = false;
    }
    if (preventDefault) {
      e.preventDefault();
    }
  }
  _onkeyup(e) {
    if (isSpace(e) || isSpaceShift(e) && this.selectionMode !== CalendarSelectionMode_default.Multiple) {
      this._selectDate(e, false);
    } else if (isSpaceShift(e)) {
      this._selectWeek();
    }
  }
  /**
   * Click is the same as "Enter".
   * **Note:** "Click+Shift" has the same effect as "Enter+Shift".
   * @param e
   * @private
   */
  _onclick(e) {
    this._selectDate(e, e.shiftKey);
  }
  /**
   * Called upon "Home" or "End" - moves the focus to the first or last item in the row.
   * @param homePressed
   * @private
   */
  _onHomeOrEnd(homePressed) {
    this._weeks.forEach((week) => {
      const _week = week;
      const dayInThisWeek = _week.findIndex((item) => {
        const date = CalendarDate_default.fromTimestamp(parseInt(item.timestamp) * 1e3);
        return date.getMonth() === this._calendarDate.getMonth() && date.getDate() === this._calendarDate.getDate();
      }) !== -1;
      if (dayInThisWeek) {
        const index = homePressed ? 1 : 7;
        this._setTimestamp(parseInt(_week[index].timestamp));
      }
    });
  }
  /**
   * Called by the Calendar component.
   * @protected
   */
  _hasPreviousPage() {
    return !(this._calendarDate.getMonth() === this._minDate.getMonth() && this._calendarDate.getYear() === this._minDate.getYear());
  }
  /**
   * Called by the Calendar component.
   * @protected
   */
  _hasNextPage() {
    return !(this._calendarDate.getMonth() === this._maxDate.getMonth() && this._calendarDate.getYear() === this._maxDate.getYear());
  }
  /**
   * Called by the Calendar component.
   * @protected
   */
  _showPreviousPage() {
    this._modifyTimestampBy(-1, "month", false);
  }
  /**
   * Called by the Calendar component.
   * @protected
   */
  _showNextPage() {
    this._modifyTimestampBy(1, "month", false);
  }
  /**
   * Modifies the timestamp by a certain amount of days/months/years.
   * @param amount
   * @param unit
   * @param preserveDate whether to preserve the day of the month (f.e. 15th of March + 1 month = 15th of April)
   * @private
   */
  _modifyTimestampBy(amount, unit, preserveDate) {
    this._safelyModifyTimestampBy(amount, unit, preserveDate);
    this._updateSecondTimestamp();
    this.fireEvent("navigate", { timestamp: this.timestamp });
  }
  /**
   * Sets the timestamp to an absolute value.
   * @param value
   * @private
   */
  _setTimestamp(value) {
    this._safelySetTimestamp(value);
    this._updateSecondTimestamp();
    this.fireEvent("navigate", { timestamp: this.timestamp });
  }
  /**
   * During range selection, when the user is navigating with the keyboard,
   * the currently focused day is considered the "second day".
   * @private
   */
  _updateSecondTimestamp() {
    if (this.selectionMode === CalendarSelectionMode_default.Range && (this.selectedDates.length === 1 || this.selectedDates.length === 2)) {
      this._secondTimestamp = this.timestamp;
    }
  }
  get _specialCalendarDates() {
    return this.specialCalendarDates;
  }
  get shouldHideWeekNumbers() {
    if (this._primaryCalendarType !== CalendarType_default.Gregorian) {
      return true;
    }
    return this.hideWeekNumbers;
  }
  get classes() {
    return {
      root: {
        "ui5-dp-root": true,
        "ui5-dp-twocalendartypes": this.hasSecondaryCalendarType
      }
    };
  }
  _isWeekend(oDate) {
    const localeData = getCachedLocaleDataInstance_default(getLocale_default());
    const iWeekDay = oDate.getDay(), iWeekendStart = localeData.getWeekendStart(), iWeekendEnd = localeData.getWeekendEnd();
    return iWeekDay >= iWeekendStart && iWeekDay <= iWeekendEnd || iWeekendEnd < iWeekendStart && (iWeekDay >= iWeekendStart || iWeekDay <= iWeekendEnd);
  }
  _isDayPressed(target) {
    const targetParent = target.parentNode;
    return target.className.indexOf("ui5-dp-item") > -1 || targetParent && targetParent.classList && targetParent.classList.contains("ui5-dp-item");
  }
  _getSecondaryDay(tempDate) {
    return new CalendarDate_default(tempDate, this.secondaryCalendarType);
  }
  _getFirstDay() {
    let daysFromPreviousMonth;
    const firstDayOfWeek = this._getFirstDayOfWeek();
    const firstDay = new CalendarDate_default(this._calendarDate, this._primaryCalendarType);
    firstDay.setDate(1);
    daysFromPreviousMonth = firstDay.getDay() - firstDayOfWeek;
    if (daysFromPreviousMonth < 0) {
      daysFromPreviousMonth = 7 + daysFromPreviousMonth;
    }
    if (daysFromPreviousMonth > 0) {
      firstDay.setDate(1 - daysFromPreviousMonth);
    }
    return firstDay;
  }
  _getFirstDayOfWeek() {
    const localeData = getCachedLocaleDataInstance_default(getLocale_default());
    const confFirstDayOfWeek = getFirstDayOfWeek();
    return Number.isInteger(confFirstDayOfWeek) ? confFirstDayOfWeek : localeData.getFirstDayOfWeek();
  }
  get styles() {
    return {
      wrapper: {
        display: this._hidden ? "none" : "flex",
        "justify-content": "center"
      },
      main: {
        width: "100%"
      }
    };
  }
  get ariaRoledescription() {
    return this.hasSecondaryCalendarType ? `${this._primaryCalendarType} calendar with secondary ${this.secondaryCalendarType} calendar` : `${this._primaryCalendarType} calendar`;
  }
};
__decorate5([
  property_default({ type: Array })
], DayPicker.prototype, "selectedDates", void 0);
__decorate5([
  property_default()
], DayPicker.prototype, "selectionMode", void 0);
__decorate5([
  property_default({ type: Boolean })
], DayPicker.prototype, "hideWeekNumbers", void 0);
__decorate5([
  property_default({ type: Array })
], DayPicker.prototype, "_weeks", void 0);
__decorate5([
  property_default({ type: Array })
], DayPicker.prototype, "_dayNames", void 0);
__decorate5([
  property_default({ type: Boolean, noAttribute: true })
], DayPicker.prototype, "_hidden", void 0);
__decorate5([
  property_default()
], DayPicker.prototype, "_secondTimestamp", void 0);
__decorate5([
  property_default({ type: Array })
], DayPicker.prototype, "specialCalendarDates", void 0);
DayPicker = DayPicker_1 = __decorate5([
  customElement_default({
    tag: "ui5-daypicker",
    styles: DayPicker_css_default,
    template: DayPickerTemplate_lit_default
  }),
  event_default("change"),
  event_default("navigate")
], DayPicker);
DayPicker.define();
var DayPicker_default = DayPicker;

// node_modules/@ui5/webcomponents/dist/generated/templates/MonthPickerTemplate.lit.js
function block02(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-mp-root" role="grid" aria-roledescription="${ifDefined(this.roleDescription)}" aria-readonly="false" aria-multiselectable="false" @keydown=${this._onkeydown} @keyup=${this._onkeyup} @click=${this._selectMonth}>${repeat(this._months, (item, index) => item._id || index, (item, index) => block12.call(this, context, tags, suffix, item, index))}</div>`;
}
function block12(context, tags, suffix, item, index) {
  return effectiveHtml`<div role="row" class="ui5-mp-quarter">${repeat(item, (item2, index2) => item2._id || index2, (item2, index2) => block22.call(this, context, tags, suffix, item2, index2))}</div>`;
}
function block22(context, tags, suffix, item, index) {
  return effectiveHtml`<div data-sap-timestamp=${ifDefined(item.timestamp)} tabindex=${ifDefined(item._tabIndex)} ?data-sap-focus-ref="${item.focusRef}" class="${ifDefined(item.classes)}" role="gridcell" aria-selected="${ifDefined(item.ariaSelected)}"><span class="ui5-dp-monthtext">${ifDefined(item.name)}</span>${item.nameInSecType ? block32.call(this, context, tags, suffix, item, index) : void 0}</div>`;
}
function block32(context, tags, suffix, item, index) {
  return effectiveHtml`<span class="ui5-dp-monthtext ui5-dp-monthsectext">${ifDefined(item.nameInSecType)}</span>`;
}
var MonthPickerTemplate_lit_default = block02;

// node_modules/@ui5/webcomponents/dist/generated/themes/MonthPicker.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData2 = { packageName: "@ui5/webcomponents", fileName: "themes/MonthPicker.css.ts", content: `:host(:not([hidden])){display:block}:host{width:100%;height:100%}.ui5-mp-root{box-sizing:border-box;padding:2rem 0 1rem;display:flex;flex-direction:column;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);justify-content:center;align-items:center}.ui5-mp-item{display:flex;flex-direction:column;width:calc(33.333% - .125rem);height:var(--_ui5-v2-0-1_month_picker_item_height);color:var(--sapButton_Lite_TextColor);background-color:var(--sapLegend_WorkingBackground);align-items:center;justify-content:center;margin:var(--_ui5-v2-0-1_monthpicker_item_margin);box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default;outline:none;position:relative;border:var(--_ui5-v2-0-1_monthpicker_item_border);border-radius:var(--_ui5-v2-0-1_monthpicker_item_border_radius)}.ui5-dp-monthsectext{font-size:.75rem;color:var(--sapNeutralElementColor)}.ui5-mp-item:hover{background-color:var(--sapList_Hover_Background)}.ui5-mp-item.ui5-mp-item--selected,.ui5-mp-item.ui5-mp-item--selected .ui5-dp-monthsectext{box-shadow:var(--_ui5-v2-0-1_monthpicker_item_selected_box_shadow);font-weight:var(--_ui5-v2-0-1_monthpicker_item_selected_font_wieght);background-color:var(--_ui5-v2-0-1_monthpicker_item_selected_background_color);color:var(--_ui5-v2-0-1_monthpicker_item_selected_text_color)}.ui5-mp-item.ui5-mp-item--disabled{pointer-events:none;opacity:.5}.ui5-mp-item.ui5-mp-item--selected:focus{background-color:var(--sapContent_Selected_Background)}.ui5-mp-item.ui5-mp-item--selected:focus:after{border-color:var(--_ui5-v2-0-1_monthpicker_item_focus_after_border)}.ui5-mp-item.ui5-mp-item--selected:hover{background-color:var(--_ui5-v2-0-1_monthpicker_item_selected_hover_color)}.ui5-mp-item:focus:after{content:"";position:absolute;border:var(--_ui5-v2-0-1_button_focused_border);inset:0;border-radius:var(--_ui5-v2-0-1_monthpicker_item_focus_after_border_radius)}.ui5-mp-quarter{display:flex;justify-content:center;align-items:center;width:100%}:host([secondary-calendar-type="Persian"]:not([primary-calendar-type="Persian"])) .ui5-mp-root,:host([secondary-calendar-type="Islamic"]:not([primary-calendar-type="Islamic"])) .ui5-mp-root{display:grid;padding:.5625rem 0;grid-template-columns:repeat(2,1fr);gap:var(--_ui5-v2-0-1_monthpicker_item_margin)}:host([secondary-calendar-type="Persian"]:not([primary-calendar-type="Persian"])) .ui5-mp-item,:host([secondary-calendar-type="Islamic"]:not([primary-calendar-type="Islamic"])) .ui5-mp-item{margin:0;width:auto}:host([secondary-calendar-type="Persian"]:not([primary-calendar-type="Persian"])) .ui5-mp-quarter,:host([secondary-calendar-type="Islamic"]:not([primary-calendar-type="Islamic"])) .ui5-mp-quarter{width:100%;display:contents}
` };
var MonthPicker_css_default = styleData2;

// node_modules/@ui5/webcomponents/dist/MonthPicker.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MonthPicker_1;
var PAGE_SIZE = 12;
var MonthPicker = MonthPicker_1 = class MonthPicker2 extends CalendarPart_default {
  constructor() {
    super(...arguments);
    this.selectedDates = [];
    this._months = [];
    this._hidden = false;
  }
  static onDefine() {
    return __async(this, null, function* () {
      MonthPicker_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  get roleDescription() {
    return MonthPicker_1.i18nBundle.getText(MONTH_PICKER_DESCRIPTION);
  }
  onBeforeRendering() {
    this._buildMonths();
  }
  onAfterRendering() {
    if (!this._hidden) {
      this.focus();
    }
  }
  get rowSize() {
    return this.secondaryCalendarType === CalendarType_default.Islamic && this.primaryCalendarType !== CalendarType_default.Islamic || this.secondaryCalendarType === CalendarType_default.Persian && this.primaryCalendarType !== CalendarType_default.Persian ? 2 : 3;
  }
  _buildMonths() {
    if (this._hidden) {
      return;
    }
    const localeData = getCachedLocaleDataInstance_default(getLocale_default());
    const monthsNames = localeData.getMonthsStandAlone("wide", this._primaryCalendarType);
    const months = [];
    const calendarDate = this._calendarDate;
    const minDate = this._minDate;
    const maxDate = this._maxDate;
    const tempDate = new CalendarDate_default(calendarDate, this._primaryCalendarType);
    let timestamp;
    for (let i = 0; i < 12; i++) {
      tempDate.setMonth(i);
      timestamp = tempDate.valueOf() / 1e3;
      const isSelected = this.selectedDates.some((itemTimestamp) => {
        const date = CalendarDate_default.fromTimestamp(itemTimestamp * 1e3, this._primaryCalendarType);
        return date.getYear() === tempDate.getYear() && date.getMonth() === tempDate.getMonth();
      });
      const isFocused = tempDate.getMonth() === calendarDate.getMonth();
      const isDisabled = this._isOutOfSelectableRange(tempDate, minDate, maxDate);
      const month = {
        timestamp: timestamp.toString(),
        focusRef: isFocused,
        _tabIndex: isFocused ? "0" : "-1",
        selected: isSelected,
        ariaSelected: isSelected ? "true" : "false",
        name: monthsNames[i],
        nameInSecType: this.hasSecondaryCalendarType && this._getDisplayedSecondaryMonthText(timestamp).text,
        disabled: isDisabled,
        classes: "ui5-mp-item"
      };
      if (isSelected) {
        month.classes += " ui5-mp-item--selected";
      }
      if (isDisabled) {
        month.classes += " ui5-mp-item--disabled";
      }
      const quarterIndex = Math.floor(i / this.rowSize);
      if (months[quarterIndex]) {
        months[quarterIndex].push(month);
      } else {
        months[quarterIndex] = [month];
      }
    }
    this._months = months;
  }
  _getDisplayedSecondaryMonthText(timestamp) {
    const monthsName = transformDateToSecondaryType_default(this._primaryCalendarType, this.secondaryCalendarType, timestamp);
    return convertMonthNumbersToMonthNames_default(monthsName.firstDate.getMonth(), monthsName.lastDate.getMonth(), this.secondaryCalendarType);
  }
  _onkeydown(e) {
    let preventDefault = true;
    if (isEnter(e)) {
      this._selectMonth(e);
    } else if (isSpace(e)) {
      e.preventDefault();
    } else if (isLeft(e)) {
      this._modifyTimestampBy(-1);
    } else if (isRight(e)) {
      this._modifyTimestampBy(1);
    } else if (isUp(e)) {
      this._modifyTimestampBy(-this.rowSize);
    } else if (isDown(e)) {
      this._modifyTimestampBy(this.rowSize);
    } else if (isPageUp(e)) {
      this._modifyTimestampBy(-PAGE_SIZE);
    } else if (isPageDown(e)) {
      this._modifyTimestampBy(PAGE_SIZE);
    } else if (isHome(e) || isEnd(e)) {
      this._onHomeOrEnd(isHome(e));
    } else if (isHomeCtrl(e)) {
      this._setTimestamp(parseInt(this._months[0][0].timestamp));
    } else if (isEndCtrl(e)) {
      this._setTimestamp(parseInt(this._months[PAGE_SIZE / this.rowSize - 1][this.rowSize - 1].timestamp));
    } else {
      preventDefault = false;
    }
    if (preventDefault) {
      e.preventDefault();
    }
  }
  _onHomeOrEnd(homePressed) {
    this._months.forEach((row) => {
      const indexInRow = row.findIndex((item) => CalendarDate_default.fromTimestamp(parseInt(item.timestamp) * 1e3).getMonth() === this._calendarDate.getMonth());
      if (indexInRow !== -1) {
        const index = homePressed ? 0 : this.rowSize - 1;
        this._setTimestamp(parseInt(row[index].timestamp));
      }
    });
  }
  /**
   * Sets the timestamp to an absolute value.
   * @param value
   * @private
   */
  _setTimestamp(value) {
    this._safelySetTimestamp(value);
    this.fireEvent("navigate", { timestamp: this.timestamp });
  }
  /**
   * Modifies timestamp by a given amount of months and,
   * if necessary, loads the prev/next page.
   * @param amount
   * @param preserveDate whether to preserve the day of the month (f.e. 15th of March + 1 month = 15th of April)
   * @private
   */
  _modifyTimestampBy(amount, preserveDate) {
    this._safelyModifyTimestampBy(amount, "month", preserveDate);
    this.fireEvent("navigate", { timestamp: this.timestamp });
  }
  _onkeyup(e) {
    if (isSpace(e)) {
      this._selectMonth(e);
    }
  }
  /**
   * Selects a month, when the user clicks or presses "Enter" or "Space".
   * @param e
   * @private
   */
  _selectMonth(e) {
    e.preventDefault();
    const target = e.target;
    if (target.className.indexOf("ui5-mp-item") > -1) {
      const timestamp = this._getTimestampFromDom(target);
      this._safelySetTimestamp(timestamp);
      this.fireEvent("change", { timestamp: this.timestamp });
    }
  }
  /**
   * Called by the Calendar component.
   * @protected
   */
  _hasPreviousPage() {
    return this._calendarDate.getYear() !== this._minDate.getYear();
  }
  /**
   * Called by the Calendar component.
   * @protected
   */
  _hasNextPage() {
    return this._calendarDate.getYear() !== this._maxDate.getYear();
  }
  /**
   * Called by Calendar.js.
   *
   * **Note:** when the user presses the "<" button in the calendar header (same as "PageUp")
   * @protected
   */
  _showPreviousPage() {
    this._modifyTimestampBy(-PAGE_SIZE, true);
  }
  /**
   * Called by Calendar.js
   * **Note:** when the user presses the ">" button in the calendar header (same as "PageDown")
   * @protected
   */
  _showNextPage() {
    this._modifyTimestampBy(PAGE_SIZE, true);
  }
  _isOutOfSelectableRange(date, minDate, maxDate) {
    const month = date.getMonth();
    const year = date.getYear();
    const minYear = minDate.getYear();
    const minMonth = minDate.getMonth();
    const maxYear = maxDate.getYear();
    const maxMonth = maxDate.getMonth();
    return year < minYear || year === minYear && month < minMonth || year > maxYear || year === maxYear && month > maxMonth;
  }
};
__decorate6([
  property_default({ type: Array })
], MonthPicker.prototype, "selectedDates", void 0);
__decorate6([
  property_default({ type: Array })
], MonthPicker.prototype, "_months", void 0);
__decorate6([
  property_default({ type: Boolean, noAttribute: true })
], MonthPicker.prototype, "_hidden", void 0);
MonthPicker = MonthPicker_1 = __decorate6([
  customElement_default({
    tag: "ui5-monthpicker",
    template: MonthPickerTemplate_lit_default,
    styles: MonthPicker_css_default
  }),
  event_default("change"),
  event_default("navigate")
], MonthPicker);
MonthPicker.define();
var MonthPicker_default = MonthPicker;

// node_modules/@ui5/webcomponents/dist/generated/templates/YearPickerTemplate.lit.js
function block03(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-yp-root" role="grid" aria-roledescription="${ifDefined(this.roleDescription)}" aria-readonly="false" aria-multiselectable="false" @keydown=${this._onkeydown} @keyup=${this._onkeyup} @click=${this._selectYear}>${repeat(this._years, (item, index) => item._id || index, (item, index) => block13.call(this, context, tags, suffix, item, index))}</div>`;
}
function block13(context, tags, suffix, item, index) {
  return effectiveHtml`<div role="row" class="ui5-yp-interval-container">${repeat(item, (item2, index2) => item2._id || index2, (item2, index2) => block23.call(this, context, tags, suffix, item2, index2))}</div>`;
}
function block23(context, tags, suffix, item, index) {
  return effectiveHtml`<div data-sap-timestamp="${ifDefined(item.timestamp)}" tabindex="${ifDefined(item._tabIndex)}" ?data-sap-focus-ref="${item.focusRef}" class="${ifDefined(item.classes)}" role="gridcell" aria-selected="${ifDefined(item.ariaSelected)}"><span>${ifDefined(item.year)}</span>${item.yearInSecType ? block33.call(this, context, tags, suffix, item, index) : void 0}</div>`;
}
function block33(context, tags, suffix, item, index) {
  return effectiveHtml`<span class="ui5-yp-item-sec-type">${ifDefined(item.yearInSecType)}</span>`;
}
var YearPickerTemplate_lit_default = block03;

// node_modules/@ui5/webcomponents/dist/generated/themes/YearPicker.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData3 = { packageName: "@ui5/webcomponents", fileName: "themes/YearPicker.css.ts", content: `:host(:not([hidden])){display:block}:host{width:100%;height:100%}.ui5-yp-root{padding:2rem 0 1rem;display:flex;flex-direction:column;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);justify-content:center;align-items:center}.ui5-yp-interval-container{display:flex;justify-content:center;align-items:center;width:100%}.ui5-yp-item{display:flex;margin:var(--_ui5-v2-0-1_yearpicker_item_margin);width:calc(25% - .125rem);height:var(--_ui5-v2-0-1_year_picker_item_height);color:var(--sapButton_Lite_TextColor);background-color:var(--sapLegend_WorkingBackground);align-items:center;justify-content:center;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default;outline:none;position:relative;border:var(--_ui5-v2-0-1_yearpicker_item_border);border-radius:var(--_ui5-v2-0-1_yearpicker_item_border_radius)}.ui5-yp-item-secondary-type{flex-direction:column;width:calc(50% - .125rem)}.ui5-yp-item-sec-type{font-size:.75rem;color:var(--sapNeutralElementColor)}.ui5-yp-item:hover{background-color:var(--sapList_Hover_Background)}.ui5-yp-item.ui5-yp-item--selected,.ui5-yp-item.ui5-yp-item--selected .ui5-yp-item-sec-type{background-color:var(--_ui5-v2-0-1_yearpicker_item_selected_background_color);color:var(--_ui5-v2-0-1_yearpicker_item_selected_text_color);box-shadow:var(--_ui5-v2-0-1_yearpicker_item_selected_box_shadow);font-weight:700}.ui5-yp-item.ui5-yp-item--disabled{pointer-events:none;opacity:.5}.ui5-yp-item.ui5-yp-item--selected:focus{background-color:var(--_ui5-v2-0-1_yearpicker_item_selected_focus)}.ui5-yp-item.ui5-yp-item--selected:focus:after{border-color:var(--_ui5-v2-0-1_yearpicker_item_focus_after_border)}.ui5-yp-item.ui5-yp-item--selected:hover{background-color:var(--_ui5-v2-0-1_yearpicker_item_selected_hover_color)}.ui5-yp-item:focus:after{content:"";position:absolute;border:var(--_ui5-v2-0-1_yearpicker_item_focus_after_border);inset:0;border-radius:var(--_ui5-v2-0-1_yearpicker_item_focus_after_border_radius);outline:var(--_ui5-v2-0-1_yearpicker_item_focus_after_outline)}
` };
var YearPicker_css_default = styleData3;

// node_modules/@ui5/webcomponents/dist/YearPicker.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var YearPicker_1;
var YearPicker = YearPicker_1 = class YearPicker2 extends CalendarPart_default {
  constructor() {
    super(...arguments);
    this.selectedDates = [];
    this._years = [];
    this._hidden = false;
  }
  static onDefine() {
    return __async(this, null, function* () {
      YearPicker_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  get roleDescription() {
    return YearPicker_1.i18nBundle.getText(YEAR_PICKER_DESCRIPTION);
  }
  onBeforeRendering() {
    this._buildYears();
  }
  _getPageSize() {
    return this.hasSecondaryCalendarType ? 8 : 20;
  }
  _getRowSize() {
    return this.hasSecondaryCalendarType ? 2 : 4;
  }
  _buildYears() {
    if (this._hidden) {
      return;
    }
    const pageSize = this._getPageSize();
    const locale = getLocale_default();
    const oYearFormat = DateFormat_default2.getDateInstance({ format: "y", calendarType: this._primaryCalendarType }, locale);
    const oYearFormatInSecType = DateFormat_default2.getDateInstance({ format: "y", calendarType: this.secondaryCalendarType }, locale);
    this._calculateFirstYear();
    this._lastYear = this._firstYear + pageSize - 1;
    const calendarDate = this._calendarDate;
    const minDate = this._minDate;
    const maxDate = this._maxDate;
    const tempDate = new CalendarDate_default(calendarDate, this._primaryCalendarType);
    let tempDateInSecType;
    let textInSecType;
    tempDate.setYear(this._firstYear);
    const intervals = [];
    let timestamp;
    for (let i = 0; i < pageSize; i++) {
      timestamp = tempDate.valueOf() / 1e3;
      const isSelected = this.selectedDates.some((itemTimestamp) => {
        const date = CalendarDate_default.fromTimestamp(itemTimestamp * 1e3, this._primaryCalendarType);
        return date.getYear() === tempDate.getYear();
      });
      const isFocused = tempDate.getYear() === calendarDate.getYear();
      const isDisabled = tempDate.getYear() < minDate.getYear() || tempDate.getYear() > maxDate.getYear();
      if (this.hasSecondaryCalendarType) {
        tempDateInSecType = transformDateToSecondaryType_default(this._primaryCalendarType, this.secondaryCalendarType, timestamp, true);
        textInSecType = tempDateInSecType.firstDate.getYear() === tempDateInSecType.lastDate.getYear() ? `${oYearFormatInSecType.format(tempDateInSecType.firstDate.toLocalJSDate(), true)}` : `${oYearFormatInSecType.format(tempDateInSecType.firstDate.toLocalJSDate(), true)} - ${oYearFormatInSecType.format(tempDateInSecType.lastDate.toLocalJSDate(), true)}`;
      }
      const year = {
        timestamp: timestamp.toString(),
        _tabIndex: isFocused ? "0" : "-1",
        focusRef: isFocused,
        selected: isSelected,
        ariaSelected: isSelected ? "true" : "false",
        year: oYearFormat.format(tempDate.toLocalJSDate()),
        yearInSecType: textInSecType,
        disabled: isDisabled,
        classes: "ui5-yp-item"
      };
      if (isSelected) {
        year.classes += " ui5-yp-item--selected";
      }
      if (isDisabled) {
        year.classes += " ui5-yp-item--disabled";
      }
      if (this.hasSecondaryCalendarType) {
        year.classes += " ui5-yp-item-secondary-type";
      }
      const intervalIndex = Math.floor(i / this._getRowSize());
      if (intervals[intervalIndex]) {
        intervals[intervalIndex].push(year);
      } else {
        intervals[intervalIndex] = [year];
      }
      tempDate.setYear(tempDate.getYear() + 1);
    }
    this._years = intervals;
  }
  _calculateFirstYear() {
    const pageSize = this._getPageSize();
    const absoluteMaxYear = getMaxCalendarDate(this._primaryCalendarType).getYear();
    const currentYear = this._calendarDate.getYear();
    if (!this._firstYear) {
      this._firstYear = currentYear - pageSize / 2;
    }
    if (currentYear < this._firstYear) {
      this._firstYear -= pageSize;
    } else if (currentYear >= this._firstYear + pageSize) {
      this._firstYear += pageSize;
    }
    if (Math.abs(this._firstYear - currentYear) >= pageSize) {
      this._firstYear = currentYear - pageSize / 2;
    }
    this._firstYear = Math.max(this._firstYear, this._minDate.getYear());
    this._firstYear = Math.min(this._firstYear, this._maxDate.getYear());
    if (this._firstYear > absoluteMaxYear - pageSize + 1) {
      this._firstYear = absoluteMaxYear - pageSize + 1;
    }
  }
  onAfterRendering() {
    if (!this._hidden) {
      this.focus();
    }
  }
  _onkeydown(e) {
    let preventDefault = true;
    const pageSize = this._getPageSize();
    const rowSize = this._getRowSize();
    if (isEnter(e)) {
      this._selectYear(e);
    } else if (isSpace(e)) {
      e.preventDefault();
    } else if (isLeft(e)) {
      this._modifyTimestampBy(-1);
    } else if (isRight(e)) {
      this._modifyTimestampBy(1);
    } else if (isUp(e)) {
      this._modifyTimestampBy(-rowSize);
    } else if (isDown(e)) {
      this._modifyTimestampBy(rowSize);
    } else if (isPageUp(e)) {
      this._modifyTimestampBy(-pageSize);
    } else if (isPageDown(e)) {
      this._modifyTimestampBy(pageSize);
    } else if (isHome(e) || isEnd(e)) {
      this._onHomeOrEnd(isHome(e));
    } else if (isHomeCtrl(e)) {
      this._setTimestamp(parseInt(this._years[0][0].timestamp));
    } else if (isEndCtrl(e)) {
      this._setTimestamp(parseInt(this._years[pageSize / rowSize - 1][rowSize - 1].timestamp));
    } else {
      preventDefault = false;
    }
    if (preventDefault) {
      e.preventDefault();
    }
  }
  _onHomeOrEnd(homePressed) {
    this._years.forEach((row) => {
      const indexInRow = row.findIndex((item) => CalendarDate_default.fromTimestamp(parseInt(item.timestamp) * 1e3).getYear() === this._calendarDate.getYear());
      if (indexInRow !== -1) {
        const index = homePressed ? 0 : this._getRowSize() - 1;
        this._setTimestamp(parseInt(row[index].timestamp));
      }
    });
  }
  /**
   * Sets the timestamp to an absolute value.
   * @param value
   * @private
   */
  _setTimestamp(value) {
    this._safelySetTimestamp(value);
    this.fireEvent("navigate", { timestamp: this.timestamp });
  }
  /**
   * Modifies timestamp by a given amount of years and, if necessary, loads the prev/next page.
   * @param amount
   * @private
   */
  _modifyTimestampBy(amount) {
    this._safelyModifyTimestampBy(amount, "year");
    this.fireEvent("navigate", { timestamp: this.timestamp });
  }
  _onkeyup(e) {
    if (isSpace(e)) {
      this._selectYear(e);
    }
  }
  /**
   * User clicked with the mouser or pressed Enter/Space
   * @param e
   * @private
   */
  _selectYear(e) {
    e.preventDefault();
    const target = e.target;
    if (target.className.indexOf("ui5-yp-item") > -1) {
      const timestamp = this._getTimestampFromDom(target);
      this._safelySetTimestamp(timestamp);
      this.fireEvent("change", { timestamp: this.timestamp });
    }
  }
  /**
   * Called by the Calendar component.
   * @protected
   */
  _hasPreviousPage() {
    return this._firstYear > this._minDate.getYear();
  }
  /**
   * Called by the Calendar component.
   * @protected
   */
  _hasNextPage() {
    return this._firstYear + this._getPageSize() - 1 < this._maxDate.getYear();
  }
  /**
   * Called by the Calendar component.
   * **Note:** when the user presses the "<" button in the calendar header (same as "PageUp")
   * @protected
   */
  _showPreviousPage() {
    const pageSize = this._getPageSize();
    this._modifyTimestampBy(-pageSize);
  }
  /**
   * Called by the Calendar component.
   * **Note:** when the user presses the ">" button in the calendar header (same as "PageDown")
   * @protected
   */
  _showNextPage() {
    this._modifyTimestampBy(this._getPageSize());
  }
};
__decorate7([
  property_default({ type: Array })
], YearPicker.prototype, "selectedDates", void 0);
__decorate7([
  property_default({ type: Array })
], YearPicker.prototype, "_years", void 0);
__decorate7([
  property_default({ type: Boolean, noAttribute: true })
], YearPicker.prototype, "_hidden", void 0);
YearPicker = YearPicker_1 = __decorate7([
  customElement_default({
    tag: "ui5-yearpicker",
    styles: YearPicker_css_default,
    template: YearPickerTemplate_lit_default
  }),
  event_default("change"),
  event_default("navigate")
], YearPicker);
YearPicker.define();
var YearPicker_default = YearPicker;

// node_modules/@ui5/webcomponents/dist/types/CalendarLegendItemType.js
var CalendarLegendItemType;
(function(CalendarLegendItemType2) {
  CalendarLegendItemType2["Today"] = "Today";
  CalendarLegendItemType2["Selected"] = "Selected";
  CalendarLegendItemType2["None"] = "None";
  CalendarLegendItemType2["Working"] = "Working";
  CalendarLegendItemType2["NonWorking"] = "NonWorking";
  CalendarLegendItemType2["Type01"] = "Type01";
  CalendarLegendItemType2["Type02"] = "Type02";
  CalendarLegendItemType2["Type03"] = "Type03";
  CalendarLegendItemType2["Type04"] = "Type04";
  CalendarLegendItemType2["Type05"] = "Type05";
  CalendarLegendItemType2["Type06"] = "Type06";
  CalendarLegendItemType2["Type07"] = "Type07";
  CalendarLegendItemType2["Type08"] = "Type08";
  CalendarLegendItemType2["Type09"] = "Type09";
  CalendarLegendItemType2["Type10"] = "Type10";
  CalendarLegendItemType2["Type11"] = "Type11";
  CalendarLegendItemType2["Type12"] = "Type12";
  CalendarLegendItemType2["Type13"] = "Type13";
  CalendarLegendItemType2["Type14"] = "Type14";
  CalendarLegendItemType2["Type15"] = "Type15";
  CalendarLegendItemType2["Type16"] = "Type16";
  CalendarLegendItemType2["Type17"] = "Type17";
  CalendarLegendItemType2["Type18"] = "Type18";
  CalendarLegendItemType2["Type19"] = "Type19";
  CalendarLegendItemType2["Type20"] = "Type20";
})(CalendarLegendItemType || (CalendarLegendItemType = {}));
var CalendarLegendItemType_default = CalendarLegendItemType;

// node_modules/@ui5/webcomponents/dist/generated/templates/CalendarLegendTemplate.lit.js
function block04(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-calendar-legend-root" @focusout="${this._onFocusOut}" @focusin="${this._onFocusIn}" @keydown="${this._onItemKeyDown}" @mousedown="${this._onMouseDown}">${repeat(this.defaultItemsMapping, (item, index) => item._id || index, (item, index) => block14.call(this, context, tags, suffix, item, index))}${repeat(this.legendItems, (item, index) => item._id || index, (item, index) => block34.call(this, context, tags, suffix, item, index))}</div>`;
}
function block14(context, tags, suffix, item, index) {
  return effectiveHtml`${!item.hide ? block24.call(this, context, tags, suffix, item, index) : void 0}`;
}
function block24(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-calendar-legend-item", tags, suffix)} type=${ifDefined(item.type)}></${scopeTag("ui5-calendar-legend-item", tags, suffix)}>` : effectiveHtml`<ui5-calendar-legend-item type=${ifDefined(item.type)}></ui5-calendar-legend-item>`;
}
function block34(context, tags, suffix, item, index) {
  return effectiveHtml`<slot name="${ifDefined(item._individualSlot)}"></slot>`;
}
var CalendarLegendTemplate_lit_default = block04;

// node_modules/@ui5/webcomponents/dist/generated/templates/CalendarLegendItemTemplate.lit.js
function block05(context, tags, suffix) {
  return effectiveHtml`<div class="ui5-calendar-legend-item-root" tabindex="${ifDefined(this.forcedTabIndex)}"><div class="ui5-calendar-legend-item-box"></div><div class="ui5-calendar-legend-item-text">${ifDefined(this.effectiveText)}</div></div>`;
}
var CalendarLegendItemTemplate_lit_default = block05;

// node_modules/@ui5/webcomponents/dist/generated/themes/CalendarLegendItem.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData4 = { packageName: "@ui5/webcomponents", fileName: "themes/CalendarLegendItem.css.ts", content: `.ui5-calendar-legend-item-root{display:flex;flex-direction:row;flex-wrap:wrap;width:var(--_ui5-v2-0-1-calendar-legend-item-root-width);white-space:pre-line;text-overflow:ellipsis;overflow:hidden;cursor:default;margin:.0625rem 0}.ui5-calendar-legend-item-box{display:inline-block;box-sizing:border-box;height:1rem;width:1rem;margin:var(--_ui5-v2-0-1-calendar-legend-item-box-margin);margin-inline-end:var(--_ui5-v2-0-1-calendar-legend-item-box-inner-margin);background:var(--sapLegend_WorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-text{display:flex;align-items:center;font-size:.875rem;line-height:1.25rem;color:var(--sapContent_LabelColor);font-weight:400;font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);white-space:pre-line;text-overflow:ellipsis;overflow:hidden;cursor:default}:host([type="Today"]) .ui5-calendar-legend-item-box{border-color:var(--sapLegend_CurrentDateTime);border:.125rem solid var(--sapLegend_CurrentDateTime)}:host([type="Selected"]) .ui5-calendar-legend-item-box{background:var(--sapContent_Selected_Background);border:.0625rem solid var(--sapContent_FocusColor)}:host([type="NonWorking"]) .ui5-calendar-legend-item-box{background:var(--sapLegend_NonWorkingBackground);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type01"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor1);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type02"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor2);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type03"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor3);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type04"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor4);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type05"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor5);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type06"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor6);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type07"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor7);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type08"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor8);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type09"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor9);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type10"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor10);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type11"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor11);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type12"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor12);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type13"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor13);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type14"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor14);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type15"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor15);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type16"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor16);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type17"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor17);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type18"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor18);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type19"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor19);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}:host([type="Type20"]) .ui5-calendar-legend-item-box{background:var(--sapLegendColor20);border:.0625rem solid var(--sapContent_ForegroundBorderColor)}.ui5-calendar-legend-item-root:focus{outline:var(--_ui5-v2-0-1-calendar-legend-item-root-focus-border);outline-offset:var(--_ui5-v2-0-1-calendar-legend-item-root-focus-offset);border-radius:var(--_ui5-v2-0-1-calendar-legend-item-root-focus-border-radius);margin:.0625rem 0}
` };
var CalendarLegendItem_css_default = styleData4;

// node_modules/@ui5/webcomponents/dist/CalendarLegendItem.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CalendarLegendItem_1;
var CalendarLegendItem = CalendarLegendItem_1 = class CalendarLegendItem2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.type = "None";
    this.forcedTabIndex = "-1";
  }
  static onDefine() {
    return __async(this, null, function* () {
      CalendarLegendItem_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  get effectiveText() {
    const TodayI18n = CalendarLegendItem_1.i18nBundle.getText(CAL_LEGEND_TODAY_TEXT);
    const SelectedI18n = CalendarLegendItem_1.i18nBundle.getText(CAL_LEGEND_SELECTED_TEXT);
    const WorkingI18n = CalendarLegendItem_1.i18nBundle.getText(CAL_LEGEND_WORKING_DAY_TEXT);
    const NonWorkingI18n = CalendarLegendItem_1.i18nBundle.getText(CAL_LEGEND_NON_WORKING_DAY_TEXT);
    const typeMapping = {
      [CalendarLegendItemType_default.Today]: TodayI18n,
      [CalendarLegendItemType_default.Selected]: SelectedI18n,
      [CalendarLegendItemType_default.NonWorking]: NonWorkingI18n,
      [CalendarLegendItemType_default.Working]: WorkingI18n
    };
    return typeMapping[this.type] || this.text || this.type;
  }
};
__decorate8([
  property_default()
], CalendarLegendItem.prototype, "text", void 0);
__decorate8([
  property_default()
], CalendarLegendItem.prototype, "type", void 0);
__decorate8([
  property_default({ noAttribute: true })
], CalendarLegendItem.prototype, "forcedTabIndex", void 0);
CalendarLegendItem = CalendarLegendItem_1 = __decorate8([
  customElement_default({
    tag: "ui5-calendar-legend-item",
    renderer: LitRenderer_default,
    styles: CalendarLegendItem_css_default,
    template: CalendarLegendItemTemplate_lit_default
  })
], CalendarLegendItem);
CalendarLegendItem.define();
var CalendarLegendItem_default = CalendarLegendItem;

// node_modules/@ui5/webcomponents/dist/generated/themes/CalendarLegend.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData5 = { packageName: "@ui5/webcomponents", fileName: "themes/CalendarLegend.css.ts", content: `.ui5-calendar-legend-root{column-width:7.5rem;gap:.5rem;padding:var(--_ui5-v2-0-1-calendar-legend-root-padding);margin:1rem 0;width:var(--_ui5-v2-0-1-calendar-legend-root-width);background-color:var(--sapList_Background)}
` };
var CalendarLegend_css_default = styleData5;

// node_modules/@ui5/webcomponents/dist/CalendarLegend.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CalendarLegend = class CalendarLegend2 extends UI5Element_default {
  constructor() {
    super();
    this.hideToday = false;
    this.hideSelectedDay = false;
    this.hideNonWorkingDay = false;
    this.hideWorkingDay = false;
    this._lastFocusedItemIndex = null;
  }
  onAfterRendering() {
    if (!this._itemNavigation) {
      this._itemNavigation = new ItemNavigation_default(this, {
        navigationMode: NavigationMode_default.Horizontal,
        behavior: ItemNavigationBehavior_default.Static,
        getItemsCallback: () => this.focusableElements
      });
      const focusableItemIndex = this._lastFocusedItemIndex !== null ? this._lastFocusedItemIndex : 0;
      this._itemNavigation.setCurrentItem(this.focusableElements[focusableItemIndex]);
    }
  }
  _onMouseDown(e) {
    e.stopPropagation();
    const target = e.target;
    this._itemNavigation.setCurrentItem(target);
    this._itemNavigation._focusCurrentItem();
    this._lastFocusedItemIndex = this.focusableElements.indexOf(target);
  }
  _onFocusIn(e) {
    const target = e.target;
    this.fireEvent("_calendar-legend-selection-change", {
      item: target
    });
    this._lastFocusedItemIndex = this.focusableElements.indexOf(target);
  }
  _onFocusOut() {
    this.fireEvent("_calendar-legend-focus-out");
  }
  _onItemKeyDown(e) {
    const items = this.focusableElements;
    const itemsCount = items.length;
    const currentItem = e.target;
    const currentIndex = items.indexOf(currentItem);
    if (isDown(e)) {
      e.preventDefault();
      const nextIndex = currentIndex + 1;
      if (nextIndex < itemsCount) {
        this._itemNavigation.setCurrentItem(items[nextIndex]);
        this._itemNavigation._focusCurrentItem();
        this._lastFocusedItemIndex = nextIndex;
      }
    }
    if (isUp(e)) {
      e.preventDefault();
      const nextIndex = currentIndex - 1;
      if (nextIndex >= 0) {
        this._itemNavigation.setCurrentItem(items[nextIndex]);
        this._itemNavigation._focusCurrentItem();
        this._lastFocusedItemIndex = nextIndex;
      }
    }
  }
  get focusableElements() {
    const allFocusableItems = [...this.shadowRoot.querySelectorAll("[ui5-calendar-legend-item]"), ...this.legendItems];
    return allFocusableItems;
  }
  get legendItems() {
    const items = this.getSlottedNodes("items");
    return items.filter((item) => item.hasAttribute("ui5-calendar-legend-item"));
  }
  get defaultItemsMapping() {
    const typeMapping = [
      { type: [CalendarLegendItemType_default.Today], hide: this.hideToday },
      { type: [CalendarLegendItemType_default.Selected], hide: this.hideSelectedDay },
      { type: [CalendarLegendItemType_default.Working], hide: this.hideWorkingDay },
      { type: [CalendarLegendItemType_default.NonWorking], hide: this.hideNonWorkingDay }
    ];
    return typeMapping;
  }
};
__decorate9([
  property_default({ type: Boolean })
], CalendarLegend.prototype, "hideToday", void 0);
__decorate9([
  property_default({ type: Boolean })
], CalendarLegend.prototype, "hideSelectedDay", void 0);
__decorate9([
  property_default({ type: Boolean })
], CalendarLegend.prototype, "hideNonWorkingDay", void 0);
__decorate9([
  property_default({ type: Boolean })
], CalendarLegend.prototype, "hideWorkingDay", void 0);
__decorate9([
  slot_default({
    type: HTMLElement,
    invalidateOnChildChange: true,
    individualSlots: true,
    "default": true
  })
], CalendarLegend.prototype, "items", void 0);
CalendarLegend = __decorate9([
  customElement_default({
    tag: "ui5-calendar-legend",
    renderer: LitRenderer_default,
    styles: CalendarLegend_css_default,
    template: CalendarLegendTemplate_lit_default,
    dependencies: [CalendarLegendItem_default]
  }),
  event_default("_calendar-legend-selection-change", {
    detail: {
      item: { type: CalendarLegendItem_default }
    }
  }),
  event_default("_calendar-legend-focus-out")
], CalendarLegend);
CalendarLegend.define();
var CalendarLegend_default = CalendarLegend;

// node_modules/@ui5/webcomponents/dist/SpecialCalendarDate.js
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SpecialCalendarDate = class SpecialCalendarDate2 extends UI5Element_default {
  constructor() {
    super(...arguments);
    this.value = "";
    this.type = "None";
  }
};
__decorate10([
  property_default()
], SpecialCalendarDate.prototype, "value", void 0);
__decorate10([
  property_default()
], SpecialCalendarDate.prototype, "type", void 0);
SpecialCalendarDate = __decorate10([
  customElement_default("ui5-special-date")
], SpecialCalendarDate);
SpecialCalendarDate.define();
var SpecialCalendarDate_default = SpecialCalendarDate;

// node_modules/@ui5/webcomponents-localization/dist/sap/ui/core/date/Gregorian.js
var Gregorian = UniversalDate_default.extend(
  "sap.ui.core.date.Gregorian",
  /** @lends sap.ui.core.date.Gregorian.prototype */
  {
    constructor: function() {
      this.oDate = this.createDate(Date, arguments);
      this.sCalendarType = CalendarType_default3.Gregorian;
    }
  }
);
Gregorian.UTC = function() {
  return Date.UTC.apply(Date, arguments);
};
Gregorian.now = function() {
  return Date.now();
};
Calendars_default.set(CalendarType_default3.Gregorian, Gregorian);

// node_modules/@ui5/webcomponents/dist/generated/templates/CalendarTemplate.lit.js
function block06(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-cal-root" @keydown=${this._onkeydown}><div id="${ifDefined(this._id)}-content" class="ui5-cal-content"><${scopeTag("ui5-daypicker", tags, suffix)} id="${ifDefined(this._id)}-daypicker" ?hidden="${this._isDayPickerHidden}" format-pattern="${ifDefined(this._formatPattern)}" .selectedDates="${ifDefined(this._selectedDatesTimestamps)}" .specialCalendarDates="${ifDefined(this._specialCalendarDates)}" ._hidden="${ifDefined(this._isDayPickerHidden)}" .primaryCalendarType="${ifDefined(this._primaryCalendarType)}" .secondaryCalendarType="${ifDefined(this._secondaryCalendarType)}" .selectionMode="${ifDefined(this.selectionMode)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" timestamp="${ifDefined(this._timestamp)}" ?hide-week-numbers="${this.hideWeekNumbers}" @ui5-change="${ifDefined(this.onSelectedDatesChange)}" @ui5-navigate="${ifDefined(this.onNavigate)}"></${scopeTag("ui5-daypicker", tags, suffix)}><${scopeTag("ui5-monthpicker", tags, suffix)} id="${ifDefined(this._id)}-MP" ?hidden="${this._isMonthPickerHidden}" format-pattern="${ifDefined(this._formatPattern)}" .selectedDates="${ifDefined(this._selectedDatesTimestamps)}" ._hidden="${ifDefined(this._isMonthPickerHidden)}" .primaryCalendarType="${ifDefined(this._primaryCalendarType)}" .secondaryCalendarType="${ifDefined(this._secondaryCalendarType)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" timestamp="${ifDefined(this._timestamp)}" @ui5-change="${ifDefined(this.onSelectedMonthChange)}" @ui5-navigate="${ifDefined(this.onNavigate)}"></${scopeTag("ui5-monthpicker", tags, suffix)}><${scopeTag("ui5-yearpicker", tags, suffix)} id="${ifDefined(this._id)}-YP" ?hidden="${this._isYearPickerHidden}" format-pattern="${ifDefined(this._formatPattern)}" .selectedDates="${ifDefined(this._selectedDatesTimestamps)}" ._hidden="${ifDefined(this._isYearPickerHidden)}" .primaryCalendarType="${ifDefined(this._primaryCalendarType)}" .secondaryCalendarType="${ifDefined(this._secondaryCalendarType)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" timestamp="${ifDefined(this._timestamp)}" @ui5-change="${ifDefined(this.onSelectedYearChange)}" @ui5-navigate="${ifDefined(this.onNavigate)}"></${scopeTag("ui5-yearpicker", tags, suffix)}></div><div class="ui5-calheader"><div class="ui5-calheader-root"><div data-ui5-cal-header-btn-prev class="${classMap(this.classes.prevButton)}" role="button" @mousedown=${this.onPrevButtonClick} title="${ifDefined(this.headerPreviousButtonText)}"><${scopeTag("ui5-icon", tags, suffix)} class="ui5-calheader-arrowicon" name="slim-arrow-left"></${scopeTag("ui5-icon", tags, suffix)}></div><div class="ui5-calheader-midcontainer"><div data-ui5-cal-header-btn-month class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this._isHeaderMonthButtonHidden}" tabindex="0" role="button" aria-label="${ifDefined(this.accInfo.ariaLabelMonthButton)}" @click=${this.onHeaderShowMonthPress} @keydown=${this.onMonthButtonKeyDown} @keyup=${this.onMonthButtonKeyUp}><span>${ifDefined(this._headerMonthButtonText)}</span>${this.hasSecondaryCalendarType ? block15.call(this, context, tags, suffix) : void 0}</div><div data-ui5-cal-header-btn-year class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this._isHeaderYearButtonHidden}" tabindex="0" role="button" @click=${this.onHeaderShowYearPress} @keydown=${this.onYearButtonKeyDown} @keyup=${this.onYearButtonKeyUp}><span>${ifDefined(this._headerYearButtonText)}</span>${this.hasSecondaryCalendarType ? block25.call(this, context, tags, suffix) : void 0}</div></div><div data-ui5-cal-header-btn-next class="${classMap(this.classes.nextButton)}" role="button" @mousedown=${this.onNextButtonClick} title=${ifDefined(this.headerNextButtonText)}><${scopeTag("ui5-icon", tags, suffix)} class="ui5-calheader-arrowicon" name="slim-arrow-right"></${scopeTag("ui5-icon", tags, suffix)}></div></div></div></div><div @ui5-_calendar-legend-selection-change=${ifDefined(this._onCalendarLegendSelectionChange)} @ui5-_calendar-legend-focus-out=${ifDefined(this._onLegendFocusOut)}><slot name="calendarLegend"></slot></div>` : effectiveHtml`<div class="ui5-cal-root" @keydown=${this._onkeydown}><div id="${ifDefined(this._id)}-content" class="ui5-cal-content"><ui5-daypicker id="${ifDefined(this._id)}-daypicker" ?hidden="${this._isDayPickerHidden}" format-pattern="${ifDefined(this._formatPattern)}" .selectedDates="${ifDefined(this._selectedDatesTimestamps)}" .specialCalendarDates="${ifDefined(this._specialCalendarDates)}" ._hidden="${ifDefined(this._isDayPickerHidden)}" .primaryCalendarType="${ifDefined(this._primaryCalendarType)}" .secondaryCalendarType="${ifDefined(this._secondaryCalendarType)}" .selectionMode="${ifDefined(this.selectionMode)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" timestamp="${ifDefined(this._timestamp)}" ?hide-week-numbers="${this.hideWeekNumbers}" @ui5-change="${ifDefined(this.onSelectedDatesChange)}" @ui5-navigate="${ifDefined(this.onNavigate)}"></ui5-daypicker><ui5-monthpicker id="${ifDefined(this._id)}-MP" ?hidden="${this._isMonthPickerHidden}" format-pattern="${ifDefined(this._formatPattern)}" .selectedDates="${ifDefined(this._selectedDatesTimestamps)}" ._hidden="${ifDefined(this._isMonthPickerHidden)}" .primaryCalendarType="${ifDefined(this._primaryCalendarType)}" .secondaryCalendarType="${ifDefined(this._secondaryCalendarType)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" timestamp="${ifDefined(this._timestamp)}" @ui5-change="${ifDefined(this.onSelectedMonthChange)}" @ui5-navigate="${ifDefined(this.onNavigate)}"></ui5-monthpicker><ui5-yearpicker id="${ifDefined(this._id)}-YP" ?hidden="${this._isYearPickerHidden}" format-pattern="${ifDefined(this._formatPattern)}" .selectedDates="${ifDefined(this._selectedDatesTimestamps)}" ._hidden="${ifDefined(this._isYearPickerHidden)}" .primaryCalendarType="${ifDefined(this._primaryCalendarType)}" .secondaryCalendarType="${ifDefined(this._secondaryCalendarType)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" timestamp="${ifDefined(this._timestamp)}" @ui5-change="${ifDefined(this.onSelectedYearChange)}" @ui5-navigate="${ifDefined(this.onNavigate)}"></ui5-yearpicker></div><div class="ui5-calheader"><div class="ui5-calheader-root"><div data-ui5-cal-header-btn-prev class="${classMap(this.classes.prevButton)}" role="button" @mousedown=${this.onPrevButtonClick} title="${ifDefined(this.headerPreviousButtonText)}"><ui5-icon class="ui5-calheader-arrowicon" name="slim-arrow-left"></ui5-icon></div><div class="ui5-calheader-midcontainer"><div data-ui5-cal-header-btn-month class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this._isHeaderMonthButtonHidden}" tabindex="0" role="button" aria-label="${ifDefined(this.accInfo.ariaLabelMonthButton)}" @click=${this.onHeaderShowMonthPress} @keydown=${this.onMonthButtonKeyDown} @keyup=${this.onMonthButtonKeyUp}><span>${ifDefined(this._headerMonthButtonText)}</span>${this.hasSecondaryCalendarType ? block15.call(this, context, tags, suffix) : void 0}</div><div data-ui5-cal-header-btn-year class="ui5-calheader-arrowbtn ui5-calheader-middlebtn" ?hidden="${this._isHeaderYearButtonHidden}" tabindex="0" role="button" @click=${this.onHeaderShowYearPress} @keydown=${this.onYearButtonKeyDown} @keyup=${this.onYearButtonKeyUp}><span>${ifDefined(this._headerYearButtonText)}</span>${this.hasSecondaryCalendarType ? block25.call(this, context, tags, suffix) : void 0}</div></div><div data-ui5-cal-header-btn-next class="${classMap(this.classes.nextButton)}" role="button" @mousedown=${this.onNextButtonClick} title=${ifDefined(this.headerNextButtonText)}><ui5-icon class="ui5-calheader-arrowicon" name="slim-arrow-right"></ui5-icon></div></div></div></div><div @ui5-_calendar-legend-selection-change=${ifDefined(this._onCalendarLegendSelectionChange)} @ui5-_calendar-legend-focus-out=${ifDefined(this._onLegendFocusOut)}><slot name="calendarLegend"></slot></div>`;
}
function block15(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-calheader-btn-sectext">${ifDefined(this.secondMonthButtonText)}</span>`;
}
function block25(context, tags, suffix) {
  return effectiveHtml`<span class="ui5-calheader-btn-sectext">${ifDefined(this._headerYearButtonTextSecType)}</span>`;
}
var CalendarTemplate_lit_default = block06;

// node_modules/@ui5/webcomponents/dist/generated/themes/Calendar.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData6 = { packageName: "@ui5/webcomponents", fileName: "themes/Calendar.css.ts", content: `:host(:not([hidden])){display:inline-block}.ui5-cal-root .ui5-calheader{display:block;height:var(--_ui5-v2-0-1_calendar_header_height);font-family:var(--_ui5-v2-0-1_button_fontFamily)}.ui5-cal-root{background:var(--sapList_Background);box-sizing:border-box;height:var(--_ui5-v2-0-1_calendar_height);width:var(--_ui5-v2-0-1_calendar_width);padding:var(--_ui5-v2-0-1_calendar_top_bottom_padding) var(--_ui5-v2-0-1_calendar_left_right_padding) 0;display:flex;flex-direction:column-reverse;justify-content:flex-end;overflow:hidden}.ui5-cal-root .ui5-cal-content{padding:0 var(--_ui5-v2-0-1_calendar_left_right_padding) var(--_ui5-v2-0-1_calendar_top_bottom_padding)}
` };
var Calendar_css_default = styleData6;

// node_modules/@ui5/webcomponents/dist/generated/themes/CalendarHeader.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData7 = { packageName: "@ui5/webcomponents", fileName: "themes/CalendarHeader.css.ts", content: `:host{display:block;width:100%;height:100%}.ui5-calheader-root{display:flex;height:100%;padding:var(--_ui5-v2-0-1_calendar_header_padding);box-sizing:border-box}.ui5-calheader-arrowbtn{display:flex;justify-content:center;align-items:center;width:var(--_ui5-v2-0-1_calendar_header_arrow_button_width);background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor);cursor:pointer;overflow:hidden;white-space:nowrap;padding:0;font-size:var(--sapFontSize);user-select:none}.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:hover,.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:active,.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled:focus,.ui5-calheader-arrowbtn.ui5-calheader-arrowbtn-disabled{opacity:.4;cursor:default;outline:none;background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor)}[hidden].ui5-calheader-arrowbtn.ui5-calheader-middlebtn{display:none}.ui5-calheader-arrowbtn:focus{outline:none}.ui5-calheader-arrowbtn:hover{background-color:var(--sapButton_Hover_Background);color:var(--sapButton_Lite_TextColor);box-shadow:var(--_ui5-v2-0-1_calendar_header_arrow_button_box_shadow)}.ui5-calheader-arrowbtn:active{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-calheader-arrowbtn,.ui5-calheader-middlebtn{border:var(--_ui5-v2-0-1_calendar_header_arrow_button_border);border-radius:var(--_ui5-v2-0-1_calendar_header_arrow_button_border_radius);display:flex;background-color:var(--sapButton_Lite_Background);border-color:var(--sapButton_Lite_BorderColor)}.ui5-calheader-middlebtn{flex-direction:column;align-items:center;justify-content:center}.ui5-calheader-arrowbtn:not(:active) .ui5-calheader-btn-sectext{color:var(--sapNeutralElementColor);font-size:var(--sapFontSmallSize)}.ui5-calheader-arrowicon{color:currentColor;pointer-events:none}.ui5-calheader-midcontainer{display:flex;justify-content:space-around;flex:1 1 auto;padding:0 .5rem}.ui5-calheader-midcontainer .ui5-calheader-middlebtn:first-child{margin-inline-end:.5rem}.ui5-calheader-middlebtn{font-family:var(--_ui5-v2-0-1_button_fontFamily);width:var(--_ui5-v2-0-1_calendar_header_middle_button_width);flex:var(--_ui5-v2-0-1_calendar_header_middle_button_flex);position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ui5-calheader-middlebtn:focus{border:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_border);border-radius:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_border_radius);outline:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_outline);outline-offset:-.125rem;background:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_background)}.ui5-calheader-middlebtn:focus:active{outline:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_active_outline);outline-offset:-.0625rem;background:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_active_background)}.ui5-calheader-middlebtn:focus:after{content:"";display:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_after_display);width:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_after_width);height:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_after_height);border:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_after_border);position:absolute;top:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_after_top_offset);left:var(--_ui5-v2-0-1_calendar_header_middle_button_focus_after_left_offset)}.ui5-calheader-middlebtn:focus:active:after{border-color:var(--sapContent_ContrastFocusColor)}
` };
var CalendarHeader_css_default = styleData7;

// node_modules/@ui5/webcomponents/dist/Calendar.js
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Calendar_1;
var Calendar = Calendar_1 = class Calendar2 extends CalendarPart_default {
  constructor() {
    super();
    this.selectionMode = "Single";
    this.hideWeekNumbers = false;
    this._currentPicker = "day";
    this._previousButtonDisabled = false;
    this._nextButtonDisabled = false;
    this._pickersMode = "DAY_MONTH_YEAR";
    this._valueIsProcessed = false;
    this._selectedItemType = "None";
    this._valueIsProcessed = false;
  }
  static onDefine() {
    return __async(this, null, function* () {
      Calendar_1.i18nBundle = yield getI18nBundle("@ui5/webcomponents");
    });
  }
  /**
   * @private
   */
  get _selectedDatesTimestamps() {
    let selectedDates = [];
    if (this.selectionMode === CalendarSelectionMode_default.Range) {
      const range = this.dates.find((date) => date.hasAttribute("ui5-date-range"));
      const startDate = range && range.startValue && this.getFormat().parse(range.startValue, true);
      const endDate = range && range.endValue && this.getFormat().parse(range.endValue, true);
      if (startDate) {
        selectedDates.push(startDate.getTime() / 1e3);
      }
      if (endDate) {
        selectedDates.push(endDate.getTime() / 1e3);
      }
    } else {
      selectedDates = this.dates.filter((dateElement) => {
        return dateElement.hasAttribute("ui5-date") && dateElement.value && this._isValidCalendarDate(dateElement.value) && this._getTimeStampFromString(dateElement.value);
      }).map((dateElement) => Number(this._getTimeStampFromString(dateElement.value)) / 1e3);
    }
    return selectedDates;
  }
  /**
   * @private
   */
  _setSelectedDates(selectedDates) {
    const selectedUTCDates = selectedDates.map((timestamp) => this.getFormat().format(UI5Date_default2.getInstance(timestamp * 1e3), true));
    if (this.selectionMode === CalendarSelectionMode_default.Range) {
      if (selectedUTCDates.length) {
        let dateRange = this.dates.find((dateElement) => dateElement.hasAttribute("ui5-date-range") && dateElement.startValue === selectedUTCDates[0]);
        if (!dateRange) {
          dateRange = document.createElement(CalendarDateRange_default.getMetadata().getTag());
          dateRange.startValue = selectedUTCDates[0];
          this.appendChild(dateRange);
        } else {
          dateRange.endValue = selectedUTCDates[1];
        }
        this.dates.filter((dateElement) => {
          return dateElement.hasAttribute("ui5-date") || dateRange && dateElement.startValue !== dateRange.startValue;
        }).forEach((dateElement) => {
          this.removeChild(dateElement);
        });
      }
    } else {
      const valuesInDOM = this._selectedDatesTimestamps.map((timestamp) => this.getFormat().format(UI5Date_default2.getInstance(timestamp * 1e3)));
      this.dates.filter((dateElement) => {
        return dateElement.hasAttribute("ui5-date-range") || dateElement.hasAttribute("ui5-date") && !selectedUTCDates.includes(dateElement.value);
      }).forEach((dateElement) => {
        this.removeChild(dateElement);
      });
      selectedUTCDates.filter((value) => !valuesInDOM.includes(value)).forEach((value) => {
        const dateElement = document.createElement(CalendarDate_default2.getMetadata().getTag());
        dateElement.value = value;
        this.appendChild(dateElement);
      });
    }
  }
  _isValidCalendarDate(dateString) {
    const date = this.getFormat().parse(dateString);
    return !!date;
  }
  get _specialCalendarDates() {
    const validSpecialDates = this._specialDates.filter((date) => {
      const dateType = date.type;
      const dateValue = date.value;
      const isTypeMatch = this._selectedItemType !== "None" ? dateType === this._selectedItemType : true;
      return isTypeMatch && dateValue && this._isValidCalendarDate(dateValue);
    });
    if (validSpecialDates.length === 0) {
      this._selectedItemType = "None";
    }
    const uniqueDates = /* @__PURE__ */ new Set();
    const uniqueSpecialDates = [];
    validSpecialDates.forEach((date) => {
      const dateFromValue = this.getFormat().parse(date.value);
      const timestamp = dateFromValue.getTime();
      if (!uniqueDates.has(timestamp)) {
        uniqueDates.add(timestamp);
        const specialDateTimestamp = CalendarDate_default.fromLocalJSDate(dateFromValue).valueOf() / 1e3;
        const type = date.type;
        uniqueSpecialDates.push({ specialDateTimestamp, type });
      }
    });
    return uniqueSpecialDates;
  }
  _onCalendarLegendSelectionChange(e) {
    this._selectedItemType = e.detail.item.type;
    this._currentPickerDOM._autoFocus = false;
  }
  /**
   * Makes sure that _currentPicker is always set to a value, allowed by _pickersMode
   */
  _normalizeCurrentPicker() {
    if (this._currentPicker === "day" && this._pickersMode !== CalendarPickersMode_default.DAY_MONTH_YEAR) {
      this._currentPicker = "month";
    }
    if (this._currentPicker === "month" && this._pickersMode === CalendarPickersMode_default.YEAR) {
      this._currentPicker = "year";
    }
  }
  onBeforeRendering() {
    this._normalizeCurrentPicker();
    if (!this._valueIsProcessed) {
      if (this._selectedDatesTimestamps) {
        this.timestamp = this._selectedDatesTimestamps[0];
      }
      this._valueIsProcessed = true;
    }
  }
  onAfterRendering() {
    return __async(this, null, function* () {
      yield renderFinished();
      this._previousButtonDisabled = !this._currentPickerDOM._hasPreviousPage();
      this._nextButtonDisabled = !this._currentPickerDOM._hasNextPage();
      const yearFormat = DateFormat_default2.getDateInstance({ format: "y", calendarType: this.primaryCalendarType });
      const localeData = getCachedLocaleDataInstance_default(getLocale_default());
      this._headerMonthButtonText = localeData.getMonthsStandAlone("wide", this.primaryCalendarType)[this._calendarDate.getMonth()];
      if (this._currentPicker === "year") {
        const rangeStart = new CalendarDate_default(this._calendarDate, this._primaryCalendarType);
        const rangeEnd = new CalendarDate_default(this._calendarDate, this._primaryCalendarType);
        rangeStart.setYear(this._currentPickerDOM._firstYear);
        rangeEnd.setYear(this._currentPickerDOM._lastYear);
        this._headerYearButtonText = `${yearFormat.format(rangeStart.toLocalJSDate(), true)} - ${yearFormat.format(rangeEnd.toLocalJSDate(), true)}`;
      } else {
        this._headerYearButtonText = String(yearFormat.format(this._localDate, true));
      }
      this._secondaryCalendarType && this._setSecondaryCalendarTypeButtonText();
    });
  }
  onInvalidation(changeInfo) {
    if (changeInfo.reason === "childchange") {
      this._valueIsProcessed = false;
    }
  }
  /**
   * The user clicked the "month" button in the header
   */
  onHeaderShowMonthPress(e) {
    this.showMonth();
    this.fireEvent("show-month-view", e);
  }
  showMonth() {
    this._currentPickerDOM._autoFocus = false;
    this._currentPicker = "month";
  }
  /**
   * The user clicked the "year" button in the header
   */
  onHeaderShowYearPress(e) {
    this.showYear();
    this.fireEvent("show-year-view", e);
  }
  showYear() {
    this._currentPickerDOM._autoFocus = false;
    this._currentPicker = "year";
  }
  get _currentPickerDOM() {
    return this.shadowRoot.querySelector(`[ui5-${this._currentPicker}picker]`);
  }
  /**
   * The year clicked the "Previous" button in the header
   */
  onHeaderPreviousPress() {
    this._currentPickerDOM._showPreviousPage();
    if (this.calendarLegend) {
      this._currentPickerDOM._autoFocus = true;
    }
  }
  /**
   * The year clicked the "Next" button in the header
   */
  onHeaderNextPress() {
    this._currentPickerDOM._showNextPage();
    if (this.calendarLegend) {
      this._currentPickerDOM._autoFocus = true;
    }
  }
  _setSecondaryCalendarTypeButtonText() {
    const yearFormatSecType = DateFormat_default2.getDateInstance({ format: "y", calendarType: this._secondaryCalendarType });
    if (this._currentPicker === "year") {
      const rangeStart = new CalendarDate_default(this._calendarDate, this._primaryCalendarType);
      const rangeEnd = new CalendarDate_default(this._calendarDate, this._primaryCalendarType);
      rangeStart.setYear(this._currentPickerDOM._firstYear);
      rangeEnd.setYear(this._currentPickerDOM._lastYear);
      const rangeStartSecType = transformDateToSecondaryType_default(this.primaryCalendarType, this._secondaryCalendarType, rangeStart.valueOf() / 1e3, true).firstDate;
      const rangeEndSecType = transformDateToSecondaryType_default(this.primaryCalendarType, this._secondaryCalendarType, rangeEnd.valueOf() / 1e3, true).lastDate;
      this._headerYearButtonTextSecType = `${yearFormatSecType.format(rangeStartSecType.toLocalJSDate(), true)} - ${yearFormatSecType.format(rangeEndSecType.toLocalJSDate(), true)}`;
    } else {
      this._headerYearButtonTextSecType = String(yearFormatSecType.format(this._localDate, true));
    }
  }
  get secondaryCalendarTypeButtonText() {
    if (!this.hasSecondaryCalendarType) {
      return;
    }
    const localDate = UI5Date_default2.getInstance(this._timestamp * 1e3);
    const secondYearFormat = DateFormat_default2.getDateInstance({ format: "y", calendarType: this._secondaryCalendarType });
    const dateInSecType = transformDateToSecondaryType_default(this._primaryCalendarType, this._secondaryCalendarType, this._timestamp);
    const secondMonthInfo = convertMonthNumbersToMonthNames_default(dateInSecType.firstDate.getMonth(), dateInSecType.lastDate.getMonth(), this._secondaryCalendarType);
    const secondYearText = secondYearFormat.format(localDate, true);
    return {
      yearButtonText: secondYearText,
      monthButtonText: secondMonthInfo.text,
      monthButtonInfo: secondMonthInfo.textInfo
    };
  }
  /**
   * The month button is hidden when the month picker or year picker is shown
   * @private
   */
  get _isHeaderMonthButtonHidden() {
    return this._currentPicker === "month" || this._currentPicker === "year";
  }
  /**
   * The year button is hidden when the year picker is shown
   * @private
   */
  get _isHeaderYearButtonHidden() {
    return this._currentPicker === "year";
  }
  get _isDayPickerHidden() {
    return this._currentPicker !== "day";
  }
  get _isMonthPickerHidden() {
    return this._currentPicker !== "month";
  }
  get _isYearPickerHidden() {
    return this._currentPicker !== "year";
  }
  _fireEventAndUpdateSelectedDates(selectedDates) {
    const datesValues = selectedDates.map((timestamp) => {
      const calendarDate = CalendarDate_default.fromTimestamp(timestamp * 1e3, this._primaryCalendarType);
      return this.getFormat().format(calendarDate.toUTCJSDate(), true);
    });
    const defaultPrevented = !this.fireEvent("selection-change", { timestamp: this.timestamp, selectedDates: [...selectedDates], selectedValues: datesValues }, true);
    if (!defaultPrevented) {
      this._setSelectedDates(selectedDates);
    }
  }
  onSelectedDatesChange(e) {
    this.timestamp = e.detail.timestamp;
    this._fireEventAndUpdateSelectedDates(e.detail.dates);
  }
  onSelectedMonthChange(e) {
    this.timestamp = e.detail.timestamp;
    if (this._pickersMode === CalendarPickersMode_default.DAY_MONTH_YEAR) {
      this._currentPicker = "day";
    } else {
      this._fireEventAndUpdateSelectedDates([this.timestamp]);
    }
    this._currentPickerDOM._autoFocus = true;
  }
  onSelectedYearChange(e) {
    this.timestamp = e.detail.timestamp;
    if (this._pickersMode === CalendarPickersMode_default.DAY_MONTH_YEAR) {
      this._currentPicker = "day";
    } else if (this._pickersMode === CalendarPickersMode_default.MONTH_YEAR) {
      this._currentPicker = "month";
    } else {
      this._fireEventAndUpdateSelectedDates([this.timestamp]);
    }
    this._currentPickerDOM._autoFocus = true;
  }
  onNavigate(e) {
    this.timestamp = e.detail.timestamp;
  }
  _onkeydown(e) {
    if (isF4(e) && this._currentPicker !== "month") {
      this._currentPicker = "month";
      this.fireEvent("show-month-view", e);
    }
    if (isF4Shift(e) && this._currentPicker !== "year") {
      this._currentPicker = "year";
      this.fireEvent("show-year-view", e);
    }
  }
  _onLegendFocusOut() {
    this._selectedItemType = "None";
  }
  get _specialDates() {
    return this.getSlottedNodes("specialDates");
  }
  get classes() {
    return {
      prevButton: {
        "ui5-calheader-arrowbtn": true,
        "ui5-calheader-arrowbtn-disabled": this._previousButtonDisabled
      },
      nextButton: {
        "ui5-calheader-arrowbtn": true,
        "ui5-calheader-arrowbtn-disabled": this._nextButtonDisabled
      }
    };
  }
  get accInfo() {
    return {
      ariaLabelMonthButton: this.hasSecondaryCalendarType ? `${this._headerMonthButtonText}, ${this.secondMonthButtonText}` : `${this._headerMonthButtonText}`
    };
  }
  get headerPreviousButtonText() {
    return Calendar_1.i18nBundle?.getText(CALENDAR_HEADER_PREVIOUS_BUTTON);
  }
  get headerNextButtonText() {
    return Calendar_1.i18nBundle?.getText(CALENDAR_HEADER_NEXT_BUTTON);
  }
  get secondMonthButtonText() {
    const secondMonthButtonText = this.secondaryCalendarTypeButtonText?.monthButtonText;
    return secondMonthButtonText;
  }
  onMonthButtonKeyDown(e) {
    if (isSpace(e)) {
      e.preventDefault();
    }
    if (isEnter(e)) {
      this.showMonth();
      this.fireEvent("show-month-view", e);
    }
  }
  onMonthButtonKeyUp(e) {
    if (isSpace(e)) {
      e.preventDefault();
      this.showMonth();
      this.fireEvent("show-month-view", e);
    }
  }
  onYearButtonKeyDown(e) {
    if (isSpace(e)) {
      e.preventDefault();
    }
    if (isEnter(e)) {
      this.showYear();
      this.fireEvent("show-year-view", e);
    }
  }
  onYearButtonKeyUp(e) {
    if (isSpace(e)) {
      this.showYear();
      this.fireEvent("show-year-view", e);
    }
  }
  onPrevButtonClick(e) {
    if (this._previousButtonDisabled) {
      e.preventDefault();
      return;
    }
    this.onHeaderPreviousPress();
    e.preventDefault();
  }
  onNextButtonClick(e) {
    if (this._nextButtonDisabled) {
      e.preventDefault();
      return;
    }
    this.onHeaderNextPress();
    e.preventDefault();
  }
  /**
   * Returns an array of UTC timestamps, representing the selected dates.
   * @protected
   * @deprecated
   */
  get selectedDates() {
    return this._selectedDatesTimestamps;
  }
  /**
   * Creates instances of `ui5-date` or `ui5-date-range` inside this `ui5-calendar` with values, equal to the provided UTC timestamps
   * @protected
   * @deprecated
   * @param selectedDates Array of UTC timestamps
   */
  set selectedDates(selectedDates) {
    this._setSelectedDates(selectedDates);
  }
};
__decorate11([
  property_default()
], Calendar.prototype, "selectionMode", void 0);
__decorate11([
  property_default({ type: Boolean })
], Calendar.prototype, "hideWeekNumbers", void 0);
__decorate11([
  property_default()
], Calendar.prototype, "_currentPicker", void 0);
__decorate11([
  property_default({ type: Boolean })
], Calendar.prototype, "_previousButtonDisabled", void 0);
__decorate11([
  property_default({ type: Boolean })
], Calendar.prototype, "_nextButtonDisabled", void 0);
__decorate11([
  property_default()
], Calendar.prototype, "_headerMonthButtonText", void 0);
__decorate11([
  property_default()
], Calendar.prototype, "_headerYearButtonText", void 0);
__decorate11([
  property_default()
], Calendar.prototype, "_headerYearButtonTextSecType", void 0);
__decorate11([
  property_default({ noAttribute: true })
], Calendar.prototype, "_pickersMode", void 0);
__decorate11([
  slot_default({ type: HTMLElement })
], Calendar.prototype, "calendarLegend", void 0);
__decorate11([
  slot_default({ type: HTMLElement, invalidateOnChildChange: true, "default": true })
], Calendar.prototype, "dates", void 0);
__decorate11([
  slot_default({ type: HTMLElement, invalidateOnChildChange: true })
], Calendar.prototype, "specialDates", void 0);
__decorate11([
  property_default()
], Calendar.prototype, "_selectedItemType", void 0);
Calendar = Calendar_1 = __decorate11([
  customElement_default({
    tag: "ui5-calendar",
    fastNavigation: true,
    template: CalendarTemplate_lit_default,
    styles: [Calendar_css_default, CalendarHeader_css_default],
    dependencies: [
      SpecialCalendarDate_default,
      CalendarDate_default2,
      CalendarDateRange_default,
      DayPicker_default,
      MonthPicker_default,
      YearPicker_default,
      CalendarLegend_default,
      Icon_default
    ]
  }),
  event_default("selection-change", {
    detail: {
      /**
       * @public
       */
      selectedDates: { type: Array },
      /**
       * @public
       */
      selectedValues: { type: Array },
      timestamp: { type: Number }
    }
  }),
  event_default("show-month-view"),
  event_default("show-year-view")
], Calendar);
Calendar.define();
var Calendar_default = Calendar;

// node_modules/@ui5/webcomponents/dist/generated/templates/DatePickerTemplate.lit.js
function block07(context, tags, suffix) {
  return suffix ? effectiveHtml`<div class="ui5-date-picker-root" style="${styleMap(this.styles.main)}"><${scopeTag("ui5-input", tags, suffix)} id="${ifDefined(this._id)}-inner" class="ui5-date-picker-input" placeholder="${ifDefined(this._placeholder)}" type="${ifDefined(this.type)}" value="${ifDefined(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${ifDefined(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${ifDefined(this.accInfo)}" @ui5-change="${ifDefined(this._onInputChange)}" @ui5-input="${ifDefined(this._onInputInput)}" @ui5-submit="${ifDefined(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length ? block16.call(this, context, tags, suffix) : void 0}${!this.readonly ? block26.call(this, context, tags, suffix) : void 0}</${scopeTag("ui5-input", tags, suffix)}></div><${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-responsive-popover" .opener=${ifDefined(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${ifDefined(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${ifDefined(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${ifDefined(this.onResponsivePopoverAfterClose)}" @ui5-before-open="${ifDefined(this.onResponsivePopoverBeforeOpen)}">${this.showHeader ? block35.call(this, context, tags, suffix) : void 0}<${scopeTag("ui5-calendar", tags, suffix)} id="${ifDefined(this._id)}-calendar" primary-calendar-type="${ifDefined(this._primaryCalendarType)}" secondary-calendar-type="${ifDefined(this.secondaryCalendarType)}" format-pattern="${ifDefined(this._formatPattern)}" timestamp="${ifDefined(this._calendarTimestamp)}" .selectionMode="${ifDefined(this._calendarSelectionMode)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" @ui5-selection-change="${ifDefined(this.onSelectedDatesChange)}" @ui5-show-month-view="${ifDefined(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${ifDefined(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${ifDefined(this._calendarCurrentPicker)}" ._pickersMode="${ifDefined(this._calendarPickersMode)}">${repeat(this._calendarSelectedDates, (item, index) => item._id || index, (item, index) => block42.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-calendar", tags, suffix)}>${this.showFooter ? block52.call(this, context, tags, suffix) : void 0}</${scopeTag("ui5-responsive-popover", tags, suffix)}> ` : effectiveHtml`<div class="ui5-date-picker-root" style="${styleMap(this.styles.main)}"><ui5-input id="${ifDefined(this._id)}-inner" class="ui5-date-picker-input" placeholder="${ifDefined(this._placeholder)}" type="${ifDefined(this.type)}" value="${ifDefined(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${ifDefined(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${ifDefined(this.accInfo)}" @ui5-change="${ifDefined(this._onInputChange)}" @ui5-input="${ifDefined(this._onInputInput)}" @ui5-submit="${ifDefined(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length ? block16.call(this, context, tags, suffix) : void 0}${!this.readonly ? block26.call(this, context, tags, suffix) : void 0}</ui5-input></div><ui5-responsive-popover id="${ifDefined(this._id)}-responsive-popover" .opener=${ifDefined(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${ifDefined(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${ifDefined(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${ifDefined(this.onResponsivePopoverAfterClose)}" @ui5-before-open="${ifDefined(this.onResponsivePopoverBeforeOpen)}">${this.showHeader ? block35.call(this, context, tags, suffix) : void 0}<ui5-calendar id="${ifDefined(this._id)}-calendar" primary-calendar-type="${ifDefined(this._primaryCalendarType)}" secondary-calendar-type="${ifDefined(this.secondaryCalendarType)}" format-pattern="${ifDefined(this._formatPattern)}" timestamp="${ifDefined(this._calendarTimestamp)}" .selectionMode="${ifDefined(this._calendarSelectionMode)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" @ui5-selection-change="${ifDefined(this.onSelectedDatesChange)}" @ui5-show-month-view="${ifDefined(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${ifDefined(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${ifDefined(this._calendarCurrentPicker)}" ._pickersMode="${ifDefined(this._calendarPickersMode)}">${repeat(this._calendarSelectedDates, (item, index) => item._id || index, (item, index) => block42.call(this, context, tags, suffix, item, index))}</ui5-calendar>${this.showFooter ? block52.call(this, context, tags, suffix) : void 0}</ui5-responsive-popover> `;
}
function block16(context, tags, suffix) {
  return effectiveHtml`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`;
}
function block26(context, tags, suffix) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-icon", tags, suffix)} id="${ifDefined(this._id)}-value-help" slot="icon" name="${ifDefined(this.openIconName)}" tabindex="-1" accessible-name="${ifDefined(this.openIconTitle)}" mode=${ifDefined(this._iconMode)} show-tooltip @click="${this._togglePicker}" class="inputIcon" ?pressed="${this.open}"></${scopeTag("ui5-icon", tags, suffix)}>` : effectiveHtml`<ui5-icon id="${ifDefined(this._id)}-value-help" slot="icon" name="${ifDefined(this.openIconName)}" tabindex="-1" accessible-name="${ifDefined(this.openIconTitle)}" mode=${ifDefined(this._iconMode)} show-tooltip @click="${this._togglePicker}" class="inputIcon" ?pressed="${this.open}"></ui5-icon>`;
}
function block35(context, tags, suffix) {
  return suffix ? effectiveHtml`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._togglePicker}"></${scopeTag("ui5-button", tags, suffix)}></div></div>` : effectiveHtml`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._togglePicker}"></ui5-button></div></div>`;
}
function block42(context, tags, suffix, item, index) {
  return suffix ? effectiveHtml`<${scopeTag("ui5-date", tags, suffix)} value="${ifDefined(item)}"></${scopeTag("ui5-date", tags, suffix)}>` : effectiveHtml`<ui5-date value="${ifDefined(item)}"></ui5-date>`;
}
function block52(context, tags, suffix) {
  return effectiveHtml``;
}
var DatePickerTemplate_lit_default = block07;

// node_modules/@ui5/webcomponents/dist/generated/themes/DatePicker.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData8 = { packageName: "@ui5/webcomponents", fileName: "themes/DatePicker.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-0-1_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-0-1_input_icon_padding);border-inline-start:var(--_ui5-v2-0-1_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-0-1_input_icon_border_radius)}.inputIcon[pressed]{background:var(--_ui5-v2-0-1_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-0-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-0-1_select_hover_icon_left_border);color:var(--_ui5-v2-0-1_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-0-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-0-1_select_hover_icon_left_border);color:var(--_ui5-v2-0-1_input_icon_pressed_color)}.inputIcon:not([pressed]):not(:active):hover{background:var(--_ui5-v2-0-1_input_icon_hover_bg);box-shadow:var(--_ui5-v2-0-1_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-0-1_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-0-1_input_icon_box_shadow)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v2-0-1_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-0-1_input_readonly_background)}:host([disabled]){opacity:var(--_ui5-v2-0-1_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-0-1-input_disabled_background);border-color:var(--_ui5-v2-0-1_input_disabled_border_color)}:host([value-state="Negative"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-0-1_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-0-1_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-0-1_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-0-1_input_success_icon_box_shadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-0-1_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-0-1_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-0-1_input_value_state_success_border_color);border-width:var(--_ui5-v2-0-1_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-0-1_input_value_state_information_border_color);border-width:var(--_ui5-v2-0-1_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-0-1_input_error_icon_box_shadow);color:var(--_ui5-v2-0-1_input_icon_error_pressed_color)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-0-1_input_warning_icon_box_shadow);color:var(--_ui5-v2-0-1_input_icon_warning_pressed_color)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-0-1_input_information_icon_box_shadow);color:var(--_ui5-v2-0-1_input_icon_information_pressed_color)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-0-1_input_success_icon_box_shadow);color:var(--_ui5-v2-0-1_input_icon_success_pressed_color)}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-0-1_input_error_warning_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-0-1_input_information_icon_padding)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal;height:var(--_ui5-v2-0-1_input_height);border-radius:var(--_ui5-v2-0-1_input_border_radius)}:host{min-width:calc(var(--_ui5-v2-0-1_input_min_width) + var(--_ui5-v2-0-1_input_icon_width));color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-v2-0-1-datepicker_border_radius);margin:var(--_ui5-v2-0-1_input_margin_top_bottom) 0;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host(:not([disabled]):not([readonly]):active){background:var(--_ui5-v2-0-1-datepicker-hover-background)}:host(:not([disabled]):not([readonly]):hover){background:var(--_ui5-v2-0-1-datepicker-hover-background)}.ui5-date-picker-root{border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-date-picker-input{width:100%;min-width:12.5625rem;color:inherit;background-color:inherit;border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;margin:inherit}:host(:not([disabled]):not([readonly])) .ui5-date-picker-input[focused]{background-color:var(--_ui5-v2-0-1-datepicker-hover-background)}
` };
var DatePicker_css_default = styleData8;

// node_modules/@ui5/webcomponents/dist/generated/themes/DatePickerPopover.css.js
init_Themes();
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default;
}));
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", () => __async(void 0, null, function* () {
  return parameters_bundle_css_default2;
}));
var styleData9 = { packageName: "@ui5/webcomponents", fileName: "themes/DatePickerPopover.css.ts", content: `[ui5-calendar]{width:100%;display:flex;justify-content:center}[ui5-responsive-popover]::part(content){padding:0}
` };
var DatePickerPopover_css_default = styleData9;

// node_modules/@ui5/webcomponents/dist/DatePicker.js
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DatePicker_1;
var DatePicker = DatePicker_1 = class DatePicker2 extends DateComponentBase_default {
  constructor() {
    super(...arguments);
    this.value = "";
    this.valueState = "None";
    this.required = false;
    this.disabled = false;
    this.readonly = false;
    this.hideWeekNumbers = false;
    this.open = false;
    this._calendarCurrentPicker = "day";
  }
  get formValidityMessage() {
    return DatePicker_1.i18nBundle.getText(FORM_TEXTFIELD_REQUIRED);
  }
  get formValidity() {
    return { valueMissing: this.required && !this.value };
  }
  formElementAnchor() {
    return __async(this, null, function* () {
      return (yield this.getFocusDomRefAsync())?.getFocusDomRefAsync();
    });
  }
  get formFormattedValue() {
    return this.value;
  }
  /**
   * @protected
   */
  onResponsivePopoverAfterClose() {
    this.open = false;
    if (isPhone()) {
      this.blur();
    } else {
      this._getInput()?.focus();
    }
  }
  onResponsivePopoverBeforeOpen() {
    this._calendarCurrentPicker = this.firstPicker;
  }
  onBeforeRendering() {
    ["minDate", "maxDate"].forEach((prop) => {
      const propValue = this[prop];
      if (!this.isValid(propValue)) {
        console.warn(`Invalid value for property "${prop}": ${propValue} is not compatible with the configured format pattern: "${this._displayFormat}"`);
      }
    });
    this.value = this.normalizeValue(this.value) || this.value;
    this.liveValue = this.value;
  }
  /**
   * Override in derivatives to change calendar selection mode
   * @protected
   */
  get _calendarSelectionMode() {
    return "Single";
  }
  /**
   * Used to provide a timestamp to the Calendar (to focus it to a relevant date when open) based on the component's state
   * Override in derivatives to provide the calendar a timestamp based on their properties
   * By default focus the calendar on the selected date if set, or the current day otherwise
   * @protected
   */
  get _calendarTimestamp() {
    if (this.value && this.dateValueUTC && this._checkValueValidity(this.value)) {
      const millisecondsUTC = this.dateValueUTC.getTime();
      return getRoundedTimestamp_default(millisecondsUTC);
    }
    return getTodayUTCTimestamp_default(this._primaryCalendarType);
  }
  /**
   * Used to provide selectedDates to the calendar based on the component's state
   * Override in derivatives to provide different rules for setting the calendar's selected dates
   * @protected
   */
  get _calendarSelectedDates() {
    if (this.value && this._checkValueValidity(this.value)) {
      return [this.value];
    }
    return [];
  }
  _onkeydown(e) {
    if (isShow(e)) {
      e.preventDefault();
      if (this.open) {
        if (!isF4(e)) {
          this._toggleAndFocusInput();
        }
      } else {
        this._toggleAndFocusInput();
      }
    }
    const target = e.target;
    if (target && this.open && this._getInput().id === target.id && (isTabNext(e) || isTabPrevious(e) || isF6Next(e) || isF6Previous(e))) {
      this._togglePicker();
    }
    if (this.open) {
      return;
    }
    if (isEnter(e)) {
      if (this._internals?.form) {
        submitForm(this);
      }
    } else if (isPageUpShiftCtrl(e)) {
      e.preventDefault();
      this._modifyDateValue(1, "year");
    } else if (isPageUpShift(e)) {
      e.preventDefault();
      this._modifyDateValue(1, "month");
    } else if (isPageUp(e)) {
      e.preventDefault();
      this._modifyDateValue(1, "day");
    } else if (isPageDownShiftCtrl(e)) {
      e.preventDefault();
      this._modifyDateValue(-1, "year");
    } else if (isPageDownShift(e)) {
      e.preventDefault();
      this._modifyDateValue(-1, "month");
    } else if (isPageDown(e)) {
      e.preventDefault();
      this._modifyDateValue(-1, "day");
    }
  }
  /**
   * @param amount
   * @param unit
   * @param preserveDate whether to preserve the day of the month (f.e. 15th of March + 1 month = 15th of April)
   * @protected
   */
  _modifyDateValue(amount, unit, preserveDate) {
    if (!this.dateValue) {
      return;
    }
    const modifiedDate = modifyDateBy_default(CalendarDate_default.fromLocalJSDate(this.dateValue), amount, unit, preserveDate, this._minDate, this._maxDate);
    const newValue = this.formatValue(modifiedDate.toUTCJSDate());
    this._updateValueAndFireEvents(newValue, true, ["change", "value-changed"]);
  }
  _updateValueAndFireEvents(value, normalizeValue, events, updateValue = true) {
    const valid = this._checkValueValidity(value);
    if (valid && normalizeValue) {
      value = this.normalizeValue(value);
    }
    let executeEvent = true;
    this.liveValue = value;
    const previousValue = this.value;
    if (updateValue) {
      this._getInput().value = value;
      this.value = value;
      this._updateValueState();
    }
    events.forEach((e) => {
      if (!this.fireEvent(e, { value, valid }, true)) {
        executeEvent = false;
      }
    });
    if (!executeEvent && updateValue) {
      if (this.value !== previousValue && this.value !== this._getInput().value) {
        return;
      }
      this._getInput().value = previousValue;
      this.value = previousValue;
    }
  }
  _updateValueState() {
    const valid = this._checkValueValidity(this.value);
    const previousValueState = this.valueState;
    this.valueState = valid ? ValueState_default.None : ValueState_default.Negative;
    const eventPrevented = !this.fireEvent("value-state-change", { valueState: this.valueState, valid }, true);
    if (eventPrevented) {
      this.valueState = previousValueState;
    }
  }
  _getInput() {
    return this.shadowRoot.querySelector("[ui5-input]");
  }
  /**
   * The ui5-input "submit" event handler - fire change event when the user presses enter
   * @protected
   */
  _onInputSubmit() {
  }
  /**
   * The ui5-input "change" event handler - fire change event when the user focuses out of the input
   * @protected
   */
  _onInputChange(e) {
    this._updateValueAndFireEvents(e.target.value, true, ["change", "value-changed"]);
  }
  /**
   * The ui5-input "input" event handler - fire input even when the user types
   * @protected
   */
  _onInputInput(e) {
    this._updateValueAndFireEvents(e.target.value, false, ["input"], false);
  }
  /**
   * Checks if the provided value is valid and within valid range.
   * @protected
   * @param value
   */
  _checkValueValidity(value) {
    if (value === "") {
      return true;
    }
    return this.isValid(value) && this.isInValidRange(value);
  }
  _click(e) {
    if (isPhone()) {
      this.responsivePopover.opener = this;
      this.responsivePopover.open = true;
      e.preventDefault();
    }
  }
  /**
   * Checks if a value is valid against the current date format of the DatePicker.
   * @public
   * @param value A value to be tested against the current date format
   */
  isValid(value) {
    if (value === "" || value === void 0) {
      return true;
    }
    return !!this.getFormat().parse(value);
  }
  /**
   * Checks if a date is between the minimum and maximum date.
   * @public
   * @param value A value to be checked
   */
  isInValidRange(value) {
    if (value === "" || value === void 0) {
      return true;
    }
    const calendarDate = this._getCalendarDateFromString(value);
    if (!calendarDate || !this._minDate || !this._maxDate) {
      return false;
    }
    return calendarDate.valueOf() >= this._minDate.valueOf() && calendarDate.valueOf() <= this._maxDate.valueOf();
  }
  /**
   * The parser understands many formats, but we need one format
   * @protected
   */
  normalizeValue(value) {
    if (value === "") {
      return value;
    }
    return this.getFormat().format(this.getFormat().parse(value, true), true);
  }
  get _displayFormat() {
    return this.getFormat().oFormatOptions.pattern;
  }
  /**
   * @protected
   */
  get _placeholder() {
    return this.placeholder !== void 0 ? this.placeholder : this._displayFormat;
  }
  get _headerTitleText() {
    return DatePicker_1.i18nBundle.getText(INPUT_SUGGESTIONS_TITLE);
  }
  get phone() {
    return isPhone();
  }
  get showHeader() {
    return this.phone;
  }
  get showFooter() {
    return this.phone;
  }
  get accInfo() {
    return {
      "ariaRoledescription": this.dateAriaDescription,
      "ariaHasPopup": AriaHasPopup_default.Grid.toLowerCase(),
      "ariaRequired": this.required,
      "ariaLabel": getEffectiveAriaLabelText(this)
    };
  }
  get openIconTitle() {
    return DatePicker_1.i18nBundle.getText(DATEPICKER_OPEN_ICON_TITLE);
  }
  get openIconName() {
    return "appointment-2";
  }
  get dateAriaDescription() {
    return DatePicker_1.i18nBundle.getText(DATEPICKER_DATE_DESCRIPTION);
  }
  get pickerAccessibleName() {
    return DatePicker_1.i18nBundle.getText(DATEPICKER_POPOVER_ACCESSIBLE_NAME);
  }
  /**
   * Defines whether the dialog on mobile should have header
   * @private
   */
  get _shouldHideHeader() {
    return false;
  }
  /**
   * Returns the first picker depending on the CalendarPickerMode
   */
  get firstPicker() {
    const calendarPickerMode = this._calendarPickersMode;
    let firstPicker = "day";
    if (calendarPickerMode === CalendarPickersMode_default.YEAR) {
      firstPicker = "year";
    } else if (calendarPickerMode === CalendarPickersMode_default.MONTH_YEAR) {
      firstPicker = "month";
    }
    return firstPicker;
  }
  /**
   * Defines whether the value help icon is hidden
   * @private
   */
  get _iconMode() {
    return isDesktop() ? IconMode_default.Decorative : IconMode_default.Interactive;
  }
  _respPopover() {
    return this.shadowRoot.querySelector("[ui5-responsive-popover]");
  }
  _canOpenPicker() {
    return !this.disabled && !this.readonly;
  }
  get _calendarPickersMode() {
    const format = this.getFormat();
    const patternSymbolTypes = format.aFormatArray.map((patternSymbolSettings) => {
      return patternSymbolSettings.type.toLowerCase();
    });
    if (patternSymbolTypes.includes("day")) {
      return CalendarPickersMode_default.DAY_MONTH_YEAR;
    }
    if (patternSymbolTypes.includes("month") || patternSymbolTypes.includes("monthstandalone")) {
      return CalendarPickersMode_default.MONTH_YEAR;
    }
    return CalendarPickersMode_default.YEAR;
  }
  /**
   * The user selected a new date in the calendar
   * @param e
   * @protected
   */
  onSelectedDatesChange(e) {
    e.preventDefault();
    const newValue = e.detail.selectedValues && e.detail.selectedValues[0];
    this._updateValueAndFireEvents(newValue, true, ["change", "value-changed"]);
    this._togglePicker();
  }
  /**
   * The user clicked the "month" button in the header
   */
  onHeaderShowMonthPress() {
    this._calendarCurrentPicker = "month";
  }
  /**
   * The user clicked the "year" button in the header
   */
  onHeaderShowYearPress() {
    this._calendarCurrentPicker = "year";
  }
  /**
   * Formats a Java Script date object into a string representing a locale date
   * according to the `formatPattern` property of the DatePicker instance
   * @public
   * @param date A Java Script date object to be formatted as string
   * @returns The date as string
   */
  formatValue(date) {
    return this.getFormat().format(date);
  }
  _togglePicker() {
    this.open = !this.open;
  }
  _toggleAndFocusInput() {
    this._togglePicker();
    this._getInput().focus();
  }
  /**
   * Currently selected date represented as a Local JavaScript Date instance.
   * @public
   * @default null
   */
  get dateValue() {
    return this.liveValue ? this.getFormat().parse(this.liveValue) : this.getFormat().parse(this.value);
  }
  get dateValueUTC() {
    return this.liveValue ? this.getFormat().parse(this.liveValue, true) : this.getFormat().parse(this.value);
  }
  get styles() {
    return {
      main: {
        width: "100%"
      }
    };
  }
  get type() {
    return InputType_default.Text;
  }
};
__decorate12([
  property_default()
], DatePicker.prototype, "value", void 0);
__decorate12([
  property_default()
], DatePicker.prototype, "valueState", void 0);
__decorate12([
  property_default({ type: Boolean })
], DatePicker.prototype, "required", void 0);
__decorate12([
  property_default({ type: Boolean })
], DatePicker.prototype, "disabled", void 0);
__decorate12([
  property_default({ type: Boolean })
], DatePicker.prototype, "readonly", void 0);
__decorate12([
  property_default()
], DatePicker.prototype, "placeholder", void 0);
__decorate12([
  property_default()
], DatePicker.prototype, "name", void 0);
__decorate12([
  property_default({ type: Boolean })
], DatePicker.prototype, "hideWeekNumbers", void 0);
__decorate12([
  property_default({ type: Boolean })
], DatePicker.prototype, "open", void 0);
__decorate12([
  property_default()
], DatePicker.prototype, "accessibleName", void 0);
__decorate12([
  property_default()
], DatePicker.prototype, "accessibleNameRef", void 0);
__decorate12([
  property_default({ type: Object })
], DatePicker.prototype, "_respPopoverConfig", void 0);
__decorate12([
  property_default()
], DatePicker.prototype, "_calendarCurrentPicker", void 0);
__decorate12([
  slot_default({ type: HTMLElement })
], DatePicker.prototype, "valueStateMessage", void 0);
DatePicker = DatePicker_1 = __decorate12([
  customElement_default({
    tag: "ui5-date-picker",
    languageAware: true,
    formAssociated: true,
    template: DatePickerTemplate_lit_default,
    styles: [
      DatePicker_css_default,
      ResponsivePopoverCommon_css_default,
      DatePickerPopover_css_default
    ],
    dependencies: [
      Icon_default,
      ResponsivePopover_default,
      Calendar_default,
      CalendarDate_default2,
      Input_default,
      Button_default
    ]
  }),
  event_default("change", {
    detail: {
      /**
       * @public
       */
      value: {
        type: String
      },
      /**
       * @public
       */
      valid: {
        type: Boolean
      }
    }
  }),
  event_default("input", {
    detail: {
      /**
       * @public
       */
      value: {
        type: String
      },
      /**
       * @public
       */
      valid: {
        type: Boolean
      }
    }
  }),
  event_default("value-state-change", {
    detail: {
      /**
       * @public
       */
      valueState: {
        type: String
      },
      /**
       * @public
       */
      valid: {
        type: Boolean
      }
    }
  })
], DatePicker);
DatePicker.define();
var DatePicker_default = DatePicker;

export {
  slim_arrow_left_default,
  UI5Date_default2 as UI5Date_default,
  fetchCldr,
  registerLocaleDataLoader,
  CalendarDate_default,
  getCachedLocaleDataInstance_default,
  DateFormat_default2 as DateFormat_default,
  CalendarDateRange_default,
  modifyDateBy_default,
  getTodayUTCTimestamp_default,
  CalendarPickersMode_default,
  Calendar_default,
  DatePicker_default
};
/*! Bundled license information:

@ui5/webcomponents-localization/dist/sap/base/i18n/date/TimezoneUtils.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/core/format/TimezoneUtil.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/core/date/UI5Date.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/base/assert.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/base/util/array/uniqueSort.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/base/Metadata.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/base/Object.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)
  (*!oObject[sMethodName] for 'lazy' loading interface methods ;-) *)

@ui5/webcomponents-localization/dist/sap/base/util/isPlainObject.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/base/DataType.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/base/i18n/date/CalendarType.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/core/CalendarType.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/base/i18n/LanguageTag.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/core/Locale.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/base/util/_merge.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/base/util/extend.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/base/i18n/date/CalendarWeekNumbering.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/core/date/CalendarWeekNumbering.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/core/LocaleData.js:
  (*!
  * OpenUI5
  * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
  * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
  *)

@ui5/webcomponents-localization/dist/sap/ui/core/date/CalendarUtils.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/core/date/UniversalDate.js:
  (*!
  * OpenUI5
  * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
  * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
  *)

@ui5/webcomponents-localization/dist/sap/base/strings/formatMessage.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/base/util/deepEqual.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/core/format/DateFormat.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)

@ui5/webcomponents-localization/dist/sap/ui/core/date/Gregorian.js:
  (*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   *)
*/
//# sourceMappingURL=chunk-OK6GZDE6.js.map
