import {
  getFetchDefaultLanguage,
  getLanguage
} from "./chunk-FE3LTLOF.js";
import {
  DEFAULT_LANGUAGE,
  DEFAULT_LOCALE,
  EventProvider_default,
  init_AssetParameters,
  init_EventProvider
} from "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/util/detectNavigatorLanguage.js
init_AssetParameters();
var isSSR = typeof document === "undefined";
var detectNavigatorLanguage = () => {
  if (isSSR) {
    return DEFAULT_LANGUAGE;
  }
  const browserLanguages = navigator.languages;
  const navigatorLanguage = () => {
    return navigator.language;
  };
  const rawLocale = browserLanguages && browserLanguages[0] || navigatorLanguage();
  return rawLocale || DEFAULT_LANGUAGE;
};
var detectNavigatorLanguage_default = detectNavigatorLanguage;

// node_modules/@ui5/webcomponents-base/dist/locale/languageChange.js
init_EventProvider();
var eventProvider = new EventProvider_default();
var LANG_CHANGE = "languageChange";
var attachLanguageChange = (listener) => {
  eventProvider.attachEvent(LANG_CHANGE, listener);
};
var detachLanguageChange = (listener) => {
  eventProvider.detachEvent(LANG_CHANGE, listener);
};

// node_modules/@ui5/webcomponents-base/dist/config/Language.js
init_AssetParameters();
var curLanguage;
var fetchDefaultLanguage;
var getLanguage2 = () => {
  if (curLanguage === void 0) {
    curLanguage = getLanguage();
  }
  return curLanguage;
};
var setFetchDefaultLanguage = (fetchDefaultLang) => {
  fetchDefaultLanguage = fetchDefaultLang;
};
var getFetchDefaultLanguage2 = () => {
  if (fetchDefaultLanguage === void 0) {
    setFetchDefaultLanguage(getFetchDefaultLanguage());
  }
  return fetchDefaultLanguage;
};

// node_modules/@ui5/webcomponents-base/dist/locale/Locale.js
init_AssetParameters();
var rLocale = /^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;
var Locale = class {
  constructor(sLocaleId) {
    const aResult = rLocale.exec(sLocaleId.replace(/_/g, "-"));
    if (aResult === null) {
      throw new Error(`The given language ${sLocaleId} does not adhere to BCP-47.`);
    }
    this.sLocaleId = sLocaleId;
    this.sLanguage = aResult[1] || DEFAULT_LANGUAGE;
    this.sScript = aResult[2] || "";
    this.sRegion = aResult[3] || "";
    this.sVariant = aResult[4] && aResult[4].slice(1) || null;
    this.sExtension = aResult[5] && aResult[5].slice(1) || null;
    this.sPrivateUse = aResult[6] || null;
    if (this.sLanguage) {
      this.sLanguage = this.sLanguage.toLowerCase();
    }
    if (this.sScript) {
      this.sScript = this.sScript.toLowerCase().replace(/^[a-z]/, (s) => {
        return s.toUpperCase();
      });
    }
    if (this.sRegion) {
      this.sRegion = this.sRegion.toUpperCase();
    }
  }
  getLanguage() {
    return this.sLanguage;
  }
  getScript() {
    return this.sScript;
  }
  getRegion() {
    return this.sRegion;
  }
  getVariant() {
    return this.sVariant;
  }
  getVariantSubtags() {
    return this.sVariant ? this.sVariant.split("-") : [];
  }
  getExtension() {
    return this.sExtension;
  }
  getExtensionSubtags() {
    return this.sExtension ? this.sExtension.slice(2).split("-") : [];
  }
  getPrivateUse() {
    return this.sPrivateUse;
  }
  getPrivateUseSubtags() {
    return this.sPrivateUse ? this.sPrivateUse.slice(2).split("-") : [];
  }
  hasPrivateUseSubtag(sSubtag) {
    return this.getPrivateUseSubtags().indexOf(sSubtag) >= 0;
  }
  toString() {
    const r = [this.sLanguage];
    if (this.sScript) {
      r.push(this.sScript);
    }
    if (this.sRegion) {
      r.push(this.sRegion);
    }
    if (this.sVariant) {
      r.push(this.sVariant);
    }
    if (this.sExtension) {
      r.push(this.sExtension);
    }
    if (this.sPrivateUse) {
      r.push(this.sPrivateUse);
    }
    return r.join("-");
  }
};
var Locale_default = Locale;

// node_modules/@ui5/webcomponents-base/dist/locale/getLocale.js
init_AssetParameters();
var cache = /* @__PURE__ */ new Map();
var getLocaleInstance = (lang) => {
  if (!cache.has(lang)) {
    cache.set(lang, new Locale_default(lang));
  }
  return cache.get(lang);
};
var convertToLocaleOrNull = (lang) => {
  try {
    if (lang && typeof lang === "string") {
      return getLocaleInstance(lang);
    }
  } catch (e) {
  }
  return new Locale_default(DEFAULT_LOCALE);
};
var getLocale = (lang) => {
  if (lang) {
    return convertToLocaleOrNull(lang);
  }
  const configLanguage = getLanguage2();
  if (configLanguage) {
    return getLocaleInstance(configLanguage);
  }
  return convertToLocaleOrNull(detectNavigatorLanguage_default());
};
var getLocale_default = getLocale;

// node_modules/@ui5/webcomponents-base/dist/locale/normalizeLocale.js
init_AssetParameters();
var localeRegEX = /^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;
var SAPSupportabilityLocales = /(?:^|-)(saptrc|sappsd)(?:-|$)/i;
var M_ISO639_NEW_TO_OLD = {
  "he": "iw",
  "yi": "ji",
  "nb": "no",
  "sr": "sh"
};
var normalizeLocale = (locale) => {
  let m;
  if (!locale) {
    return DEFAULT_LOCALE;
  }
  if (typeof locale === "string" && (m = localeRegEX.exec(locale.replace(/_/g, "-")))) {
    let language = m[1].toLowerCase();
    let region = m[3] ? m[3].toUpperCase() : void 0;
    const script = m[2] ? m[2].toLowerCase() : void 0;
    const variants = m[4] ? m[4].slice(1) : void 0;
    const isPrivate = m[6];
    language = M_ISO639_NEW_TO_OLD[language] || language;
    if (isPrivate && (m = SAPSupportabilityLocales.exec(isPrivate)) || variants && (m = SAPSupportabilityLocales.exec(variants))) {
      return `en_US_${m[1].toLowerCase()}`;
    }
    if (language === "zh" && !region) {
      if (script === "hans") {
        region = "CN";
      } else if (script === "hant") {
        region = "TW";
      }
    }
    return language + (region ? "_" + region + (variants ? "_" + variants.replace("-", "_") : "") : "");
  }
  return DEFAULT_LOCALE;
};
var normalizeLocale_default = normalizeLocale;

// node_modules/@ui5/webcomponents-base/dist/locale/nextFallbackLocale.js
init_AssetParameters();
var nextFallbackLocale = (locale) => {
  if (!locale) {
    return DEFAULT_LOCALE;
  }
  if (locale === "zh_HK") {
    return "zh_TW";
  }
  const p = locale.lastIndexOf("_");
  if (p >= 0) {
    return locale.slice(0, p);
  }
  return locale !== DEFAULT_LOCALE ? DEFAULT_LOCALE : "";
};
var nextFallbackLocale_default = nextFallbackLocale;

// node_modules/@ui5/webcomponents-base/dist/asset-registries/i18n.js
init_AssetParameters();
var warningShown = /* @__PURE__ */ new Set();
var reportedErrors = /* @__PURE__ */ new Set();
var bundleData = /* @__PURE__ */ new Map();
var bundlePromises = /* @__PURE__ */ new Map();
var loaders = /* @__PURE__ */ new Map();
var registerI18nLoader = (packageName, localeId, loader) => {
  const bundleKey = `${packageName}/${localeId}`;
  loaders.set(bundleKey, loader);
};
var _setI18nBundleData = (packageName, data) => {
  bundleData.set(packageName, data);
};
var getI18nBundleData = (packageName) => {
  return bundleData.get(packageName);
};
var _hasLoader = (packageName, localeId) => {
  const bundleKey = `${packageName}/${localeId}`;
  return loaders.has(bundleKey);
};
var _loadMessageBundleOnce = (packageName, localeId) => {
  const bundleKey = `${packageName}/${localeId}`;
  const loadMessageBundle = loaders.get(bundleKey);
  if (loadMessageBundle && !bundlePromises.get(bundleKey)) {
    bundlePromises.set(bundleKey, loadMessageBundle(localeId));
  }
  return bundlePromises.get(bundleKey);
};
var _showAssetsWarningOnce = (packageName) => {
  if (!warningShown.has(packageName)) {
    console.warn(
      `[${packageName}]: Message bundle assets are not configured. Falling back to English texts.`,
      /* eslint-disable-line */
      ` Add \`import "${packageName}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`
    );
    warningShown.add(packageName);
  }
};
var useFallbackBundle = (packageName, localeId) => {
  return localeId !== DEFAULT_LANGUAGE && !_hasLoader(packageName, localeId);
};
var fetchI18nBundle = (packageName) => __async(void 0, null, function* () {
  const language = getLocale_default().getLanguage();
  const region = getLocale_default().getRegion();
  const variant = getLocale_default().getVariant();
  let localeId = language + (region ? `-${region}` : ``) + (variant ? `-${variant}` : ``);
  if (useFallbackBundle(packageName, localeId)) {
    localeId = normalizeLocale_default(localeId);
    while (useFallbackBundle(packageName, localeId)) {
      localeId = nextFallbackLocale_default(localeId);
    }
  }
  const fetchDefaultLanguage2 = getFetchDefaultLanguage2();
  if (localeId === DEFAULT_LANGUAGE && !fetchDefaultLanguage2) {
    _setI18nBundleData(packageName, null);
    return;
  }
  if (!_hasLoader(packageName, localeId)) {
    _showAssetsWarningOnce(packageName);
    return;
  }
  try {
    const data = yield _loadMessageBundleOnce(packageName, localeId);
    _setI18nBundleData(packageName, data);
  } catch (error) {
    const e = error;
    if (!reportedErrors.has(e.message)) {
      reportedErrors.add(e.message);
      console.error(e.message);
    }
  }
});
attachLanguageChange((lang) => {
  const allPackages = [...bundleData.keys()];
  return Promise.all(allPackages.map(fetchI18nBundle));
});

// node_modules/@ui5/webcomponents-base/dist/util/formatMessage.js
var messageFormatRegEX = /('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g;
var formatMessage = (text, values) => {
  values = values || [];
  return text.replace(messageFormatRegEX, ($0, $1, $2, $3, offset) => {
    if ($1) {
      return "'";
    }
    if ($2) {
      return $2.replace(/''/g, "'");
    }
    if ($3) {
      const ind = typeof $3 === "string" ? parseInt($3) : $3;
      return String(values[ind]);
    }
    throw new Error(`[i18n]: pattern syntax error at pos ${offset}`);
  });
};
var formatMessage_default = formatMessage;

// node_modules/@ui5/webcomponents-base/dist/i18nBundle.js
var I18nBundleInstances = /* @__PURE__ */ new Map();
var customGetI18nBundle;
var I18nBundle = class {
  constructor(packageName) {
    this.packageName = packageName;
  }
  /**
   * Returns a text in the currently loaded language
   *
   * @public
   * @param textObj key/defaultText pair or just the key
   * @param params Values for the placeholders
   */
  getText(textObj, ...params) {
    if (typeof textObj === "string") {
      textObj = { key: textObj, defaultText: textObj };
    }
    if (!textObj || !textObj.key) {
      return "";
    }
    const bundle = getI18nBundleData(this.packageName);
    if (bundle && !bundle[textObj.key]) {
      console.warn(`Key ${textObj.key} not found in the i18n bundle, the default text will be used`);
    }
    const messageText = bundle && bundle[textObj.key] ? bundle[textObj.key] : textObj.defaultText || textObj.key;
    return formatMessage_default(messageText, params);
  }
};
var getI18nBundleSync = (packageName) => {
  if (I18nBundleInstances.has(packageName)) {
    return I18nBundleInstances.get(packageName);
  }
  const i18nBundle = new I18nBundle(packageName);
  I18nBundleInstances.set(packageName, i18nBundle);
  return i18nBundle;
};
var getI18nBundle = (packageName) => __async(void 0, null, function* () {
  if (customGetI18nBundle) {
    return customGetI18nBundle(packageName);
  }
  yield fetchI18nBundle(packageName);
  return getI18nBundleSync(packageName);
});
var i18nBundle_default = I18nBundle;

export {
  attachLanguageChange,
  detachLanguageChange,
  getLanguage2 as getLanguage,
  getLocale_default,
  registerI18nLoader,
  getI18nBundle,
  i18nBundle_default
};
//# sourceMappingURL=chunk-22ISB74T.js.map
