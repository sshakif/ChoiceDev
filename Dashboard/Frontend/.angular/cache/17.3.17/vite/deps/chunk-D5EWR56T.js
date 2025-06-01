import {
  __async,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/generated/AssetParameters.js
var assetParameters, DEFAULT_THEME, SUPPORTED_THEMES, DEFAULT_LANGUAGE, DEFAULT_LOCALE, SUPPORTED_LOCALES;
var init_AssetParameters = __esm({
  "node_modules/@ui5/webcomponents-base/dist/generated/AssetParameters.js"() {
    assetParameters = { "themes": { "default": "sap_horizon", "all": ["sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_hcb", "sap_horizon_hcw", "sap_horizon_exp", "sap_horizon_dark_exp", "sap_horizon_hcb_exp", "sap_horizon_hcw_exp"] }, "languages": { "default": "en", "all": ["ar", "bg", "ca", "cnr", "cs", "cy", "da", "de", "el", "en", "en_GB", "en_US_sappsd", "en_US_saprigi", "en_US_saptrc", "es", "es_MX", "et", "fi", "fr", "fr_CA", "hi", "hr", "hu", "in", "it", "iw", "ja", "kk", "ko", "lt", "lv", "mk", "ms", "nl", "no", "pl", "pt_PT", "pt", "ro", "ru", "sh", "sk", "sl", "sr", "sv", "th", "tr", "uk", "vi", "zh_CN", "zh_TW"] }, "locales": { "default": "en", "all": ["ar", "ar_EG", "ar_SA", "bg", "ca", "cnr", "cs", "da", "de", "de_AT", "de_CH", "el", "el_CY", "en", "en_AU", "en_GB", "en_HK", "en_IE", "en_IN", "en_NZ", "en_PG", "en_SG", "en_ZA", "es", "es_AR", "es_BO", "es_CL", "es_CO", "es_MX", "es_PE", "es_UY", "es_VE", "et", "fa", "fi", "fr", "fr_BE", "fr_CA", "fr_CH", "fr_LU", "he", "hi", "hr", "hu", "id", "it", "it_CH", "ja", "kk", "ko", "lt", "lv", "ms", "mk", "nb", "nl", "nl_BE", "pl", "pt", "pt_PT", "ro", "ru", "ru_UA", "sk", "sl", "sr", "sr_Latn", "sv", "th", "tr", "uk", "vi", "zh_CN", "zh_HK", "zh_SG", "zh_TW"] } };
    DEFAULT_THEME = assetParameters.themes.default;
    SUPPORTED_THEMES = assetParameters.themes.all;
    DEFAULT_LANGUAGE = assetParameters.languages.default;
    DEFAULT_LOCALE = assetParameters.locales.default;
    SUPPORTED_LOCALES = assetParameters.locales.all;
  }
});

// node_modules/@ui5/webcomponents-base/dist/generated/VersionInfo.js
var VersionInfo, VersionInfo_default;
var init_VersionInfo = __esm({
  "node_modules/@ui5/webcomponents-base/dist/generated/VersionInfo.js"() {
    VersionInfo = {
      version: "2.0.1",
      major: 2,
      minor: 0,
      patch: 1,
      suffix: "",
      isNext: false,
      buildTime: 1720176760
    };
    VersionInfo_default = VersionInfo;
  }
});

// node_modules/@ui5/webcomponents-base/dist/util/getSingletonElementInstance.js
var getSingletonElementInstance, getSingletonElementInstance_default;
var init_getSingletonElementInstance = __esm({
  "node_modules/@ui5/webcomponents-base/dist/util/getSingletonElementInstance.js"() {
    getSingletonElementInstance = (tag, parentElement = document.body, createEl) => {
      let el = document.querySelector(tag);
      if (el) {
        return el;
      }
      el = createEl ? createEl() : document.createElement(tag);
      return parentElement.insertBefore(el, parentElement.firstChild);
    };
    getSingletonElementInstance_default = getSingletonElementInstance;
  }
});

// node_modules/@ui5/webcomponents-base/dist/getSharedResource.js
var getMetaDomEl, getSharedResourcesInstance, getSharedResource, getSharedResource_default;
var init_getSharedResource = __esm({
  "node_modules/@ui5/webcomponents-base/dist/getSharedResource.js"() {
    init_getSingletonElementInstance();
    getMetaDomEl = () => {
      const el = document.createElement("meta");
      el.setAttribute("name", "ui5-shared-resources");
      el.setAttribute("content", "");
      return el;
    };
    getSharedResourcesInstance = () => {
      if (typeof document === "undefined") {
        return null;
      }
      return getSingletonElementInstance_default(`meta[name="ui5-shared-resources"]`, document.head, getMetaDomEl);
    };
    getSharedResource = (namespace, initialValue) => {
      const parts = namespace.split(".");
      let current = getSharedResourcesInstance();
      if (!current) {
        return initialValue;
      }
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const lastPart = i === parts.length - 1;
        if (!Object.prototype.hasOwnProperty.call(current, part)) {
          current[part] = lastPart ? initialValue : {};
        }
        current = current[part];
      }
      return current;
    };
    getSharedResource_default = getSharedResource;
  }
});

// node_modules/@ui5/webcomponents-base/dist/Runtimes.js
var currentRuntimeIndex, currentRuntimeAlias, compareCache, Runtimes, registerCurrentRuntime, getCurrentRuntimeIndex, compareRuntimes, getAllRuntimes;
var init_Runtimes = __esm({
  "node_modules/@ui5/webcomponents-base/dist/Runtimes.js"() {
    init_VersionInfo();
    init_getSharedResource();
    currentRuntimeAlias = "";
    compareCache = /* @__PURE__ */ new Map();
    Runtimes = getSharedResource_default("Runtimes", []);
    registerCurrentRuntime = () => {
      if (currentRuntimeIndex === void 0) {
        currentRuntimeIndex = Runtimes.length;
        const versionInfo = VersionInfo_default;
        Runtimes.push(__spreadProps(__spreadValues({}, versionInfo), {
          alias: currentRuntimeAlias,
          description: `Runtime ${currentRuntimeIndex} - ver ${versionInfo.version}${currentRuntimeAlias ? ` (${currentRuntimeAlias})` : ""}`
        }));
      }
    };
    getCurrentRuntimeIndex = () => {
      return currentRuntimeIndex;
    };
    compareRuntimes = (index1, index2) => {
      const cacheIndex = `${index1},${index2}`;
      if (compareCache.has(cacheIndex)) {
        return compareCache.get(cacheIndex);
      }
      const runtime1 = Runtimes[index1];
      const runtime2 = Runtimes[index2];
      if (!runtime1 || !runtime2) {
        throw new Error("Invalid runtime index supplied");
      }
      if (runtime1.isNext || runtime2.isNext) {
        return runtime1.buildTime - runtime2.buildTime;
      }
      const majorDiff = runtime1.major - runtime2.major;
      if (majorDiff) {
        return majorDiff;
      }
      const minorDiff = runtime1.minor - runtime2.minor;
      if (minorDiff) {
        return minorDiff;
      }
      const patchDiff = runtime1.patch - runtime2.patch;
      if (patchDiff) {
        return patchDiff;
      }
      const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
      const result = collator.compare(runtime1.suffix, runtime2.suffix);
      compareCache.set(cacheIndex, result);
      return result;
    };
    getAllRuntimes = () => {
      return Runtimes;
    };
  }
});

// node_modules/@ui5/webcomponents-base/dist/ManagedStyles.js
var isSSR, getStyleId, shouldUpdate, createStyle, updateStyle, hasStyle, removeStyle, createOrUpdateStyle, mergeStyles;
var init_ManagedStyles = __esm({
  "node_modules/@ui5/webcomponents-base/dist/ManagedStyles.js"() {
    init_Runtimes();
    isSSR = typeof document === "undefined";
    getStyleId = (name, value) => {
      return value ? `${name}|${value}` : name;
    };
    shouldUpdate = (runtimeIndex) => {
      if (runtimeIndex === void 0) {
        return true;
      }
      return compareRuntimes(getCurrentRuntimeIndex(), parseInt(runtimeIndex)) === 1;
    };
    createStyle = (data, name, value = "", theme) => {
      const content = typeof data === "string" ? data : data.content;
      const currentRuntimeIndex2 = getCurrentRuntimeIndex();
      const stylesheet = new CSSStyleSheet();
      stylesheet.replaceSync(content);
      stylesheet._ui5StyleId = getStyleId(name, value);
      if (theme) {
        stylesheet._ui5RuntimeIndex = currentRuntimeIndex2;
        stylesheet._ui5Theme = theme;
      }
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];
    };
    updateStyle = (data, name, value = "", theme) => {
      const content = typeof data === "string" ? data : data.content;
      const currentRuntimeIndex2 = getCurrentRuntimeIndex();
      const stylesheet = document.adoptedStyleSheets.find((sh) => sh._ui5StyleId === getStyleId(name, value));
      if (!stylesheet) {
        return;
      }
      if (!theme) {
        stylesheet.replaceSync(content || "");
      } else {
        const stylesheetRuntimeIndex = stylesheet._ui5RuntimeIndex;
        const stylesheetTheme = stylesheet._ui5Theme;
        if (stylesheetTheme !== theme || shouldUpdate(stylesheetRuntimeIndex)) {
          stylesheet.replaceSync(content || "");
          stylesheet._ui5RuntimeIndex = String(currentRuntimeIndex2);
          stylesheet._ui5Theme = theme;
        }
      }
    };
    hasStyle = (name, value = "") => {
      if (isSSR) {
        return true;
      }
      return !!document.adoptedStyleSheets.find((sh) => sh._ui5StyleId === getStyleId(name, value));
    };
    removeStyle = (name, value = "") => {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter((sh) => sh._ui5StyleId !== getStyleId(name, value));
    };
    createOrUpdateStyle = (data, name, value = "", theme) => {
      if (hasStyle(name, value)) {
        updateStyle(data, name, value, theme);
      } else {
        createStyle(data, name, value, theme);
      }
    };
    mergeStyles = (style1, style2) => {
      if (style1 === void 0) {
        return style2;
      }
      if (style2 === void 0) {
        return style1;
      }
      const style2Content = typeof style2 === "string" ? style2 : style2.content;
      if (typeof style1 === "string") {
        return `${style1} ${style2Content}`;
      }
      return {
        content: `${style1.content} ${style2Content}`,
        packageName: style1.packageName,
        fileName: style1.fileName
      };
    };
  }
});

// node_modules/@ui5/webcomponents-base/dist/EventProvider.js
var EventProvider, EventProvider_default;
var init_EventProvider = __esm({
  "node_modules/@ui5/webcomponents-base/dist/EventProvider.js"() {
    EventProvider = class {
      constructor() {
        this._eventRegistry = /* @__PURE__ */ new Map();
      }
      attachEvent(eventName, fnFunction) {
        const eventRegistry = this._eventRegistry;
        const eventListeners = eventRegistry.get(eventName);
        if (!Array.isArray(eventListeners)) {
          eventRegistry.set(eventName, [fnFunction]);
          return;
        }
        if (!eventListeners.includes(fnFunction)) {
          eventListeners.push(fnFunction);
        }
      }
      detachEvent(eventName, fnFunction) {
        const eventRegistry = this._eventRegistry;
        const eventListeners = eventRegistry.get(eventName);
        if (!eventListeners) {
          return;
        }
        const indexOfFnToDetach = eventListeners.indexOf(fnFunction);
        if (indexOfFnToDetach !== -1) {
          eventListeners.splice(indexOfFnToDetach, 1);
        }
        if (eventListeners.length === 0) {
          eventRegistry.delete(eventName);
        }
      }
      /**
       * Fires an event and returns the results of all event listeners as an array.
       *
       * @param eventName the event to fire
       * @param data optional data to pass to each event listener
       * @returns {Array} an array with the results of all event listeners
       */
      fireEvent(eventName, data) {
        const eventRegistry = this._eventRegistry;
        const eventListeners = eventRegistry.get(eventName);
        if (!eventListeners) {
          return [];
        }
        return eventListeners.map((fn) => {
          return fn.call(this, data);
        });
      }
      /**
       * Fires an event and returns a promise that will resolve once all listeners have resolved.
       *
       * @param eventName the event to fire
       * @param data optional data to pass to each event listener
       * @returns {Promise} a promise that will resolve when all listeners have resolved
       */
      fireEventAsync(eventName, data) {
        return Promise.all(this.fireEvent(eventName, data));
      }
      isHandlerAttached(eventName, fnFunction) {
        const eventRegistry = this._eventRegistry;
        const eventListeners = eventRegistry.get(eventName);
        if (!eventListeners) {
          return false;
        }
        return eventListeners.includes(fnFunction);
      }
      hasListeners(eventName) {
        return !!this._eventRegistry.get(eventName);
      }
    };
    EventProvider_default = EventProvider;
  }
});

// node_modules/@ui5/webcomponents-base/dist/theming/ThemeRegistered.js
var eventProvider, THEME_REGISTERED, attachThemeRegistered, fireThemeRegistered;
var init_ThemeRegistered = __esm({
  "node_modules/@ui5/webcomponents-base/dist/theming/ThemeRegistered.js"() {
    init_EventProvider();
    eventProvider = new EventProvider_default();
    THEME_REGISTERED = "themeRegistered";
    attachThemeRegistered = (listener) => {
      eventProvider.attachEvent(THEME_REGISTERED, listener);
    };
    fireThemeRegistered = (theme) => {
      return eventProvider.fireEvent(THEME_REGISTERED, theme);
    };
  }
});

// node_modules/@ui5/webcomponents-base/dist/asset-registries/Themes.js
var themeStyles, loaders, customLoaders, registeredPackages, registeredThemes, registerThemePropertiesLoader, getThemeProperties, _getThemeProperties, getRegisteredPackages, isThemeRegistered;
var init_Themes = __esm({
  "node_modules/@ui5/webcomponents-base/dist/asset-registries/Themes.js"() {
    init_AssetParameters();
    init_ManagedStyles();
    init_ThemeRegistered();
    themeStyles = /* @__PURE__ */ new Map();
    loaders = /* @__PURE__ */ new Map();
    customLoaders = /* @__PURE__ */ new Map();
    registeredPackages = /* @__PURE__ */ new Set();
    registeredThemes = /* @__PURE__ */ new Set();
    registerThemePropertiesLoader = (packageName, themeName, loader) => {
      loaders.set(`${packageName}/${themeName}`, loader);
      registeredPackages.add(packageName);
      registeredThemes.add(themeName);
      fireThemeRegistered(themeName);
    };
    getThemeProperties = (packageName, themeName, externalThemeName) => __async(void 0, null, function* () {
      const cacheKey = `${packageName}_${themeName}_${externalThemeName || ""}`;
      const cachedStyleData = themeStyles.get(cacheKey);
      if (cachedStyleData !== void 0) {
        return cachedStyleData;
      }
      if (!registeredThemes.has(themeName)) {
        const regThemesStr = [...registeredThemes.values()].join(", ");
        console.warn(`You have requested a non-registered theme ${themeName} - falling back to ${DEFAULT_THEME}. Registered themes are: ${regThemesStr}`);
        return _getThemeProperties(packageName, DEFAULT_THEME);
      }
      const [style, customStyle] = yield Promise.all([
        _getThemeProperties(packageName, themeName),
        externalThemeName ? _getThemeProperties(packageName, externalThemeName, true) : void 0
      ]);
      const styleData = mergeStyles(style, customStyle);
      if (styleData) {
        themeStyles.set(cacheKey, styleData);
      }
      return styleData;
    });
    _getThemeProperties = (packageName, themeName, forCustomTheme = false) => __async(void 0, null, function* () {
      const loadersMap = forCustomTheme ? customLoaders : loaders;
      const loader = loadersMap.get(`${packageName}/${themeName}`);
      if (!loader) {
        if (!forCustomTheme) {
          console.error(`Theme [${themeName}] not registered for package [${packageName}]`);
        }
        return;
      }
      let data;
      try {
        data = yield loader(themeName);
      } catch (error) {
        const e = error;
        console.error(packageName, e.message);
        return;
      }
      const themeProps = data._ || data;
      return themeProps;
    });
    getRegisteredPackages = () => {
      return registeredPackages;
    };
    isThemeRegistered = (theme) => {
      return registeredThemes.has(theme);
    };
  }
});

export {
  EventProvider_default,
  init_EventProvider,
  VersionInfo_default,
  init_VersionInfo,
  getSingletonElementInstance_default,
  init_getSingletonElementInstance,
  getSharedResource_default,
  init_getSharedResource,
  registerCurrentRuntime,
  getCurrentRuntimeIndex,
  compareRuntimes,
  getAllRuntimes,
  init_Runtimes,
  createStyle,
  hasStyle,
  removeStyle,
  createOrUpdateStyle,
  init_ManagedStyles,
  DEFAULT_THEME,
  SUPPORTED_THEMES,
  DEFAULT_LANGUAGE,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  init_AssetParameters,
  attachThemeRegistered,
  init_ThemeRegistered,
  registerThemePropertiesLoader,
  getThemeProperties,
  getRegisteredPackages,
  isThemeRegistered,
  init_Themes
};
//# sourceMappingURL=chunk-D5EWR56T.js.map
