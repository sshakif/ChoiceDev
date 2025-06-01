import {
  DEFAULT_THEME,
  EventProvider_default,
  SUPPORTED_THEMES,
  attachThemeRegistered,
  compareRuntimes,
  createOrUpdateStyle,
  createStyle,
  getAllRuntimes,
  getCurrentRuntimeIndex,
  getRegisteredPackages,
  getSharedResource_default,
  getThemeProperties,
  hasStyle,
  init_AssetParameters,
  init_EventProvider,
  init_ManagedStyles,
  init_Runtimes,
  init_ThemeRegistered,
  init_Themes,
  init_getSharedResource,
  isThemeRegistered,
  registerCurrentRuntime,
  removeStyle
} from "./chunk-D5EWR56T.js";
import {
  __async
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/FeaturesRegistry.js
var features = /* @__PURE__ */ new Map();
var registerFeature = (name, feature) => {
  features.set(name, feature);
};
var getFeature = (name) => {
  return features.get(name);
};

// node_modules/@ui5/webcomponents-base/dist/Render.js
init_EventProvider();

// node_modules/@ui5/webcomponents-base/dist/RenderQueue.js
var MAX_PROCESS_COUNT = 10;
var RenderQueue = class {
  constructor() {
    this.list = [];
    this.lookup = /* @__PURE__ */ new Set();
  }
  add(webComponent) {
    if (this.lookup.has(webComponent)) {
      return;
    }
    this.list.push(webComponent);
    this.lookup.add(webComponent);
  }
  remove(webComponent) {
    if (!this.lookup.has(webComponent)) {
      return;
    }
    this.list = this.list.filter((item) => item !== webComponent);
    this.lookup.delete(webComponent);
  }
  shift() {
    const webComponent = this.list.shift();
    if (webComponent) {
      this.lookup.delete(webComponent);
      return webComponent;
    }
  }
  isEmpty() {
    return this.list.length === 0;
  }
  isAdded(webComponent) {
    return this.lookup.has(webComponent);
  }
  /**
   * Processes the whole queue by executing the callback on each component,
   * while also imposing restrictions on how many times a component may be processed.
   *
   * @param callback - function with one argument (the web component to be processed)
   */
  process(callback) {
    let webComponent;
    const stats = /* @__PURE__ */ new Map();
    webComponent = this.shift();
    while (webComponent) {
      const timesProcessed = stats.get(webComponent) || 0;
      if (timesProcessed > MAX_PROCESS_COUNT) {
        throw new Error(`Web component processed too many times this task, max allowed is: ${MAX_PROCESS_COUNT}`);
      }
      callback(webComponent);
      stats.set(webComponent, timesProcessed + 1);
      webComponent = this.shift();
    }
  }
};
var RenderQueue_default = RenderQueue;

// node_modules/@ui5/webcomponents-base/dist/CustomElementsRegistry.js
init_getSharedResource();
init_Runtimes();
var Tags = getSharedResource_default("Tags", /* @__PURE__ */ new Map());
var Definitions = /* @__PURE__ */ new Set();
var Failures = /* @__PURE__ */ new Map();
var failureTimeout;
var UNKNOWN_RUNTIME = -1;
var registerTag = (tag) => {
  Definitions.add(tag);
  Tags.set(tag, getCurrentRuntimeIndex());
};
var isTagRegistered = (tag) => {
  return Definitions.has(tag);
};
var getAllRegisteredTags = () => {
  return [...Definitions.values()];
};
var recordTagRegistrationFailure = (tag) => {
  let tagRegRuntimeIndex = Tags.get(tag);
  if (tagRegRuntimeIndex === void 0) {
    tagRegRuntimeIndex = UNKNOWN_RUNTIME;
  }
  if (!Failures.has(tagRegRuntimeIndex)) {
    Failures.set(tagRegRuntimeIndex, /* @__PURE__ */ new Set());
  }
  Failures.get(tagRegRuntimeIndex).add(tag);
  if (!failureTimeout) {
    failureTimeout = setTimeout(() => {
      displayFailedRegistrations();
      Failures = /* @__PURE__ */ new Map();
      failureTimeout = void 0;
    }, 1e3);
  }
};
var displayFailedRegistrations = () => {
  const allRuntimes = getAllRuntimes();
  const currentRuntimeIndex = getCurrentRuntimeIndex();
  const currentRuntime = allRuntimes[currentRuntimeIndex];
  let message = `Multiple UI5 Web Components instances detected.`;
  if (allRuntimes.length > 1) {
    message = `${message}
Loading order (versions before 1.1.0 not listed): ${allRuntimes.map((runtime) => `
${runtime.description}`).join("")}`;
  }
  [...Failures.keys()].forEach((otherRuntimeIndex) => {
    let comparison;
    let otherRuntime;
    if (otherRuntimeIndex === UNKNOWN_RUNTIME) {
      comparison = 1;
      otherRuntime = {
        description: `Older unknown runtime`
      };
    } else {
      comparison = compareRuntimes(currentRuntimeIndex, otherRuntimeIndex);
      otherRuntime = allRuntimes[otherRuntimeIndex];
    }
    let compareWord;
    if (comparison > 0) {
      compareWord = "an older";
    } else if (comparison < 0) {
      compareWord = "a newer";
    } else {
      compareWord = "the same";
    }
    message = `${message}

"${currentRuntime.description}" failed to define ${Failures.get(otherRuntimeIndex).size} tag(s) as they were defined by a runtime of ${compareWord} version "${otherRuntime.description}": ${[...Failures.get(otherRuntimeIndex)].sort().join(", ")}.`;
    if (comparison > 0) {
      message = `${message}
WARNING! If your code uses features of the above web components, unavailable in ${otherRuntime.description}, it might not work as expected!`;
    } else {
      message = `${message}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`;
    }
  });
  message = `${message}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/03-scoping.md.`;
  console.warn(message);
};

// node_modules/@ui5/webcomponents-base/dist/locale/RTLAwareRegistry.js
var rtlAwareSet = /* @__PURE__ */ new Set();
var markAsRtlAware = (klass) => {
  rtlAwareSet.add(klass);
};
var isRtlAware = (klass) => {
  return rtlAwareSet.has(klass);
};

// node_modules/@ui5/webcomponents-base/dist/Render.js
var registeredElements = /* @__PURE__ */ new Set();
var eventProvider = new EventProvider_default();
var invalidatedWebComponents = new RenderQueue_default();
var renderTaskPromise;
var renderTaskPromiseResolve;
var mutationObserverTimer;
var queuePromise;
var renderDeferred = (webComponent) => __async(void 0, null, function* () {
  invalidatedWebComponents.add(webComponent);
  yield scheduleRenderTask();
});
var renderImmediately = (webComponent) => {
  eventProvider.fireEvent("beforeComponentRender", webComponent);
  registeredElements.add(webComponent);
  webComponent._render();
};
var cancelRender = (webComponent) => {
  invalidatedWebComponents.remove(webComponent);
  registeredElements.delete(webComponent);
};
var scheduleRenderTask = () => __async(void 0, null, function* () {
  if (!queuePromise) {
    queuePromise = new Promise((resolve) => {
      window.requestAnimationFrame(() => {
        invalidatedWebComponents.process(renderImmediately);
        queuePromise = null;
        resolve();
        if (!mutationObserverTimer) {
          mutationObserverTimer = setTimeout(() => {
            mutationObserverTimer = void 0;
            if (invalidatedWebComponents.isEmpty()) {
              _resolveTaskPromise();
            }
          }, 200);
        }
      });
    });
  }
  yield queuePromise;
});
var whenDOMUpdated = () => {
  if (renderTaskPromise) {
    return renderTaskPromise;
  }
  renderTaskPromise = new Promise((resolve) => {
    renderTaskPromiseResolve = resolve;
    window.requestAnimationFrame(() => {
      if (invalidatedWebComponents.isEmpty()) {
        renderTaskPromise = void 0;
        resolve();
      }
    });
  });
  return renderTaskPromise;
};
var whenAllCustomElementsAreDefined = () => {
  const definedPromises = getAllRegisteredTags().map((tag) => customElements.whenDefined(tag));
  return Promise.all(definedPromises);
};
var renderFinished = () => __async(void 0, null, function* () {
  yield whenAllCustomElementsAreDefined();
  yield whenDOMUpdated();
});
var _resolveTaskPromise = () => {
  if (!invalidatedWebComponents.isEmpty()) {
    return;
  }
  if (renderTaskPromiseResolve) {
    renderTaskPromiseResolve();
    renderTaskPromiseResolve = void 0;
    renderTaskPromise = void 0;
  }
};
var reRenderAllUI5Elements = (filters) => __async(void 0, null, function* () {
  registeredElements.forEach((element) => {
    const ctor = element.constructor;
    const tag = ctor.getMetadata().getTag();
    const rtlAware = isRtlAware(ctor);
    const languageAware = ctor.getMetadata().isLanguageAware();
    const themeAware = ctor.getMetadata().isThemeAware();
    if (!filters || filters.tag === tag || filters.rtlAware && rtlAware || filters.languageAware && languageAware || filters.themeAware && themeAware) {
      renderDeferred(element);
    }
  });
  yield renderFinished();
});

// node_modules/@ui5/webcomponents-base/dist/thirdparty/isPlainObject.js
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

// node_modules/@ui5/webcomponents-base/dist/thirdparty/_merge.js
var oToken = /* @__PURE__ */ Object.create(null);
var fnMerge = function(arg1, arg2, arg3, arg4) {
  var src, copyIsArray, copy, name, options, clone, target = arguments[2] || {}, i = 3, length = arguments.length, deep = arguments[0] || false, skipToken = arguments[1] ? void 0 : oToken;
  if (typeof target !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i < length; i++) {
    if ((options = arguments[i]) != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (name === "__proto__" || target === copy) {
          continue;
        }
        if (deep && copy && (isPlainObject_default(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject_default(src) ? src : {};
          }
          target[name] = fnMerge(deep, arguments[1], clone, copy);
        } else if (copy !== skipToken) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
};
var merge_default = fnMerge;

// node_modules/@ui5/webcomponents-base/dist/thirdparty/merge.js
var fnMerge2 = function(arg1, arg2) {
  return merge_default(true, false, ...arguments);
};
var merge_default2 = fnMerge2;

// node_modules/@ui5/webcomponents-base/dist/InitialConfiguration.js
init_AssetParameters();

// node_modules/@ui5/webcomponents-base/dist/validateThemeRoot.js
var getMetaTagValue = (metaTagName) => {
  const metaTag = document.querySelector(`META[name="${metaTagName}"]`), metaTagContent = metaTag && metaTag.getAttribute("content");
  return metaTagContent;
};
var validateThemeOrigin = (origin) => {
  const allowedOrigins = getMetaTagValue("sap-allowedThemeOrigins");
  return allowedOrigins && allowedOrigins.split(",").some((allowedOrigin) => {
    return allowedOrigin === "*" || origin === allowedOrigin.trim();
  });
};
var buildCorrectUrl = (oldUrl, newOrigin) => {
  const oldUrlPath = new URL(oldUrl).pathname;
  return new URL(oldUrlPath, newOrigin).toString();
};
var validateThemeRoot = (themeRoot) => {
  let resultUrl;
  try {
    if (themeRoot.startsWith(".") || themeRoot.startsWith("/")) {
      resultUrl = new URL(themeRoot, window.location.href).toString();
    } else {
      const themeRootURL = new URL(themeRoot);
      const origin = themeRootURL.origin;
      if (origin && validateThemeOrigin(origin)) {
        resultUrl = themeRootURL.toString();
      } else {
        resultUrl = buildCorrectUrl(themeRootURL.toString(), window.location.href);
      }
    }
    if (!resultUrl.endsWith("/")) {
      resultUrl = `${resultUrl}/`;
    }
    return `${resultUrl}UI5/`;
  } catch (e) {
  }
};
var validateThemeRoot_default = validateThemeRoot;

// node_modules/@ui5/webcomponents-base/dist/types/AnimationMode.js
var AnimationMode;
(function(AnimationMode2) {
  AnimationMode2["Full"] = "full";
  AnimationMode2["Basic"] = "basic";
  AnimationMode2["Minimal"] = "minimal";
  AnimationMode2["None"] = "none";
})(AnimationMode || (AnimationMode = {}));
var AnimationMode_default = AnimationMode;

// node_modules/@ui5/webcomponents-base/dist/InitialConfiguration.js
var initialized = false;
var initialConfig = {
  animationMode: AnimationMode_default.Full,
  theme: DEFAULT_THEME,
  themeRoot: void 0,
  rtl: void 0,
  language: void 0,
  timezone: void 0,
  calendarType: void 0,
  secondaryCalendarType: void 0,
  noConflict: false,
  formatSettings: {},
  fetchDefaultLanguage: false
};
var getAnimationMode = () => {
  initConfiguration();
  return initialConfig.animationMode;
};
var getTheme = () => {
  initConfiguration();
  return initialConfig.theme;
};
var getThemeRoot = () => {
  initConfiguration();
  return initialConfig.themeRoot;
};
var getLanguage = () => {
  initConfiguration();
  return initialConfig.language;
};
var getFetchDefaultLanguage = () => {
  initConfiguration();
  return initialConfig.fetchDefaultLanguage;
};
var getNoConflict = () => {
  initConfiguration();
  return initialConfig.noConflict;
};
var getCalendarType = () => {
  initConfiguration();
  return initialConfig.calendarType;
};
var getSecondaryCalendarType = () => {
  initConfiguration();
  return initialConfig.secondaryCalendarType;
};
var getTimezone = () => {
  initConfiguration();
  return initialConfig.timezone;
};
var getFormatSettings = () => {
  initConfiguration();
  return initialConfig.formatSettings;
};
var booleanMapping = /* @__PURE__ */ new Map();
booleanMapping.set("true", true);
booleanMapping.set("false", false);
var parseConfigurationScript = () => {
  const configScript = document.querySelector("[data-ui5-config]") || document.querySelector("[data-id='sap-ui-config']");
  let configJSON;
  if (configScript) {
    try {
      configJSON = JSON.parse(configScript.innerHTML);
    } catch (err) {
      console.warn("Incorrect data-sap-ui-config format. Please use JSON");
    }
    if (configJSON) {
      initialConfig = merge_default2(initialConfig, configJSON);
    }
  }
};
var parseURLParameters = () => {
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    const parts = key.split("sap-").length;
    if (parts === 0 || parts === key.split("sap-ui-").length) {
      return;
    }
    applyURLParam(key, value, "sap");
  });
  params.forEach((value, key) => {
    if (!key.startsWith("sap-ui")) {
      return;
    }
    applyURLParam(key, value, "sap-ui");
  });
};
var normalizeThemeRootParamValue = (value) => {
  const themeRoot = value.split("@")[1];
  return validateThemeRoot_default(themeRoot);
};
var normalizeThemeParamValue = (param, value) => {
  if (param === "theme" && value.includes("@")) {
    return value.split("@")[0];
  }
  return value;
};
var applyURLParam = (key, value, paramType) => {
  const lowerCaseValue = value.toLowerCase();
  const param = key.split(`${paramType}-`)[1];
  if (booleanMapping.has(value)) {
    value = booleanMapping.get(lowerCaseValue);
  }
  if (param === "theme") {
    initialConfig.theme = normalizeThemeParamValue(param, value);
    if (value && value.includes("@")) {
      initialConfig.themeRoot = normalizeThemeRootParamValue(value);
    }
  } else {
    initialConfig[param] = value;
  }
};
var applyOpenUI5Configuration = () => {
  const openUI5Support = getFeature("OpenUI5Support");
  if (!openUI5Support || !openUI5Support.isOpenUI5Detected()) {
    return;
  }
  const OpenUI5Config = openUI5Support.getConfigurationSettingsObject();
  initialConfig = merge_default2(initialConfig, OpenUI5Config);
};
var initConfiguration = () => {
  if (typeof document === "undefined" || initialized) {
    return;
  }
  parseConfigurationScript();
  parseURLParameters();
  applyOpenUI5Configuration();
  initialized = true;
};

// node_modules/@ui5/webcomponents-base/dist/theming/applyTheme.js
init_Themes();
init_ManagedStyles();

// node_modules/@ui5/webcomponents-base/dist/theming/getThemeDesignerTheme.js
var warnings = /* @__PURE__ */ new Set();
var getThemeMetadata = () => {
  let el = document.querySelector(".sapThemeMetaData-Base-baseLib") || document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");
  if (el) {
    return getComputedStyle(el).backgroundImage;
  }
  el = document.createElement("span");
  el.style.display = "none";
  el.classList.add("sapThemeMetaData-Base-baseLib");
  document.body.appendChild(el);
  let metadata = getComputedStyle(el).backgroundImage;
  if (metadata === "none") {
    el.classList.add("sapThemeMetaData-UI5-sap-ui-core");
    metadata = getComputedStyle(el).backgroundImage;
  }
  document.body.removeChild(el);
  return metadata;
};
var parseThemeMetadata = (metadataString) => {
  const params = /\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(metadataString);
  if (params && params.length >= 2) {
    let paramsString = params[1];
    paramsString = paramsString.replace(/\\"/g, `"`);
    if (paramsString.charAt(0) !== "{" && paramsString.charAt(paramsString.length - 1) !== "}") {
      try {
        paramsString = decodeURIComponent(paramsString);
      } catch (ex) {
        if (!warnings.has("decode")) {
          console.warn("Malformed theme metadata string, unable to decodeURIComponent");
          warnings.add("decode");
        }
        return;
      }
    }
    try {
      return JSON.parse(paramsString);
    } catch (ex) {
      if (!warnings.has("parse")) {
        console.warn("Malformed theme metadata string, unable to parse JSON");
        warnings.add("parse");
      }
    }
  }
};
var processThemeMetadata = (metadata) => {
  let themeName;
  let baseThemeName;
  try {
    themeName = metadata.Path.match(/\.([^.]+)\.css_variables$/)[1];
    baseThemeName = metadata.Extends[0];
  } catch (ex) {
    if (!warnings.has("object")) {
      console.warn("Malformed theme metadata Object", metadata);
      warnings.add("object");
    }
    return;
  }
  return {
    themeName,
    baseThemeName
  };
};
var getThemeDesignerTheme = () => {
  const metadataString = getThemeMetadata();
  if (!metadataString || metadataString === "none") {
    return;
  }
  const metadata = parseThemeMetadata(metadataString);
  if (metadata) {
    return processThemeMetadata(metadata);
  }
};
var getThemeDesignerTheme_default = getThemeDesignerTheme;

// node_modules/@ui5/webcomponents-base/dist/theming/ThemeLoaded.js
init_EventProvider();
var eventProvider2 = new EventProvider_default();
var THEME_LOADED = "themeLoaded";
var attachThemeLoaded = (listener) => {
  eventProvider2.attachEvent(THEME_LOADED, listener);
};
var detachThemeLoaded = (listener) => {
  eventProvider2.detachEvent(THEME_LOADED, listener);
};
var fireThemeLoaded = (theme) => {
  return eventProvider2.fireEvent(THEME_LOADED, theme);
};

// node_modules/@ui5/webcomponents-base/dist/util/createLinkInHead.js
var createLinkInHead = (href, attributes) => {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  if (attributes) {
    Object.entries(attributes).forEach((pair) => link.setAttribute(...pair));
  }
  link.href = href;
  document.head.appendChild(link);
  return new Promise((resolve) => {
    link.addEventListener("load", resolve);
    link.addEventListener("error", resolve);
  });
};
var createLinkInHead_default = createLinkInHead;

// node_modules/@ui5/webcomponents-base/dist/config/ThemeRoot.js
var currThemeRoot;
var getThemeRoot2 = () => {
  if (currThemeRoot === void 0) {
    currThemeRoot = getThemeRoot();
  }
  return currThemeRoot;
};
var formatThemeLink = (theme) => {
  return `${getThemeRoot2()}Base/baseLib/${theme}/css_variables.css`;
};
var attachCustomThemeStylesToHead = (theme) => __async(void 0, null, function* () {
  const link = document.querySelector(`[sap-ui-webcomponents-theme="${theme}"]`);
  if (link) {
    document.head.removeChild(link);
  }
  yield createLinkInHead_default(formatThemeLink(theme), { "sap-ui-webcomponents-theme": theme });
});

// node_modules/@ui5/webcomponents-base/dist/theming/applyTheme.js
init_AssetParameters();
init_Runtimes();
var BASE_THEME_PACKAGE = "@ui5/webcomponents-theming";
var isThemeBaseRegistered = () => {
  const registeredPackages = getRegisteredPackages();
  return registeredPackages.has(BASE_THEME_PACKAGE);
};
var loadThemeBase = (theme) => __async(void 0, null, function* () {
  if (!isThemeBaseRegistered()) {
    return;
  }
  const cssData = yield getThemeProperties(BASE_THEME_PACKAGE, theme);
  if (cssData) {
    createOrUpdateStyle(cssData, "data-ui5-theme-properties", BASE_THEME_PACKAGE, theme);
  }
});
var deleteThemeBase = () => {
  removeStyle("data-ui5-theme-properties", BASE_THEME_PACKAGE);
};
var loadComponentPackages = (theme, externalThemeName) => __async(void 0, null, function* () {
  const registeredPackages = getRegisteredPackages();
  const packagesStylesPromises = [...registeredPackages].map((packageName) => __async(void 0, null, function* () {
    if (packageName === BASE_THEME_PACKAGE) {
      return;
    }
    const cssData = yield getThemeProperties(packageName, theme, externalThemeName);
    if (cssData) {
      createOrUpdateStyle(cssData, `data-ui5-component-properties-${getCurrentRuntimeIndex()}`, packageName);
    }
  }));
  return Promise.all(packagesStylesPromises);
});
var detectExternalTheme = (theme) => __async(void 0, null, function* () {
  const extTheme = getThemeDesignerTheme_default();
  if (extTheme) {
    return extTheme;
  }
  const openUI5Support = getFeature("OpenUI5Support");
  if (openUI5Support && openUI5Support.isOpenUI5Detected()) {
    const varsLoaded = openUI5Support.cssVariablesLoaded();
    if (varsLoaded) {
      return {
        themeName: openUI5Support.getConfigurationSettingsObject()?.theme,
        baseThemeName: ""
        // baseThemeName is only relevant for custom themes
      };
    }
  } else if (getThemeRoot2()) {
    yield attachCustomThemeStylesToHead(theme);
    return getThemeDesignerTheme_default();
  }
});
var applyTheme = (theme) => __async(void 0, null, function* () {
  const extTheme = yield detectExternalTheme(theme);
  if (!extTheme || theme !== extTheme.themeName) {
    yield loadThemeBase(theme);
  } else {
    deleteThemeBase();
  }
  const packagesTheme = isThemeRegistered(theme) ? theme : extTheme && extTheme.baseThemeName;
  yield loadComponentPackages(packagesTheme || DEFAULT_THEME, extTheme && extTheme.themeName === theme ? theme : void 0);
  fireThemeLoaded(theme);
});
var applyTheme_default = applyTheme;

// node_modules/@ui5/webcomponents-base/dist/config/Theme.js
init_AssetParameters();

// node_modules/@ui5/webcomponents-base/dist/util/whenDOMReady.js
var whenDOMReady = () => {
  return new Promise((resolve) => {
    if (document.body) {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        resolve();
      });
    }
  });
};
var whenDOMReady_default = whenDOMReady;

// node_modules/@ui5/webcomponents-base/dist/Boot.js
init_EventProvider();

// node_modules/@ui5/webcomponents-base/dist/FontFace.js
init_ManagedStyles();

// node_modules/@ui5/webcomponents-base/dist/generated/css/FontFace.css.js
var styleData = {
  packageName: "@ui5/webcomponents-base",
  fileName: "FontFace.css",
  content: `@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`
};
var FontFace_css_default = styleData;

// node_modules/@ui5/webcomponents-base/dist/generated/css/OverrideFontFace.css.js
var styleData2 = {
  packageName: "@ui5/webcomponents-base",
  fileName: "OverrideFontFace.css",
  content: `@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}`
};
var OverrideFontFace_css_default = styleData2;

// node_modules/@ui5/webcomponents-base/dist/FontFace.js
var insertFontFace = () => {
  const openUI5Support = getFeature("OpenUI5Support");
  if (!openUI5Support || !openUI5Support.isOpenUI5Detected()) {
    insertMainFontFace();
  }
  insertOverrideFontFace();
};
var insertMainFontFace = () => {
  if (!hasStyle("data-ui5-font-face")) {
    createStyle(FontFace_css_default, "data-ui5-font-face");
  }
};
var insertOverrideFontFace = () => {
  if (!hasStyle("data-ui5-font-face-override")) {
    createStyle(OverrideFontFace_css_default, "data-ui5-font-face-override");
  }
};
var FontFace_default = insertFontFace;

// node_modules/@ui5/webcomponents-base/dist/SystemCSSVars.js
init_ManagedStyles();

// node_modules/@ui5/webcomponents-base/dist/generated/css/SystemCSSVars.css.js
var styleData3 = {
  packageName: "@ui5/webcomponents-base",
  fileName: "SystemCSSVars.css",
  content: `:root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}`
};
var SystemCSSVars_css_default = styleData3;

// node_modules/@ui5/webcomponents-base/dist/SystemCSSVars.js
var insertSystemCSSVars = () => {
  if (!hasStyle("data-ui5-system-css-vars")) {
    createStyle(SystemCSSVars_css_default, "data-ui5-system-css-vars");
  }
};
var SystemCSSVars_default = insertSystemCSSVars;

// node_modules/@ui5/webcomponents-base/dist/Boot.js
init_Runtimes();
init_ThemeRegistered();
var booted = false;
var bootPromise;
var eventProvider3 = new EventProvider_default();
var isBooted = () => {
  return booted;
};
var attachBoot = (listener) => {
  if (!booted) {
    eventProvider3.attachEvent("boot", listener);
    return;
  }
  listener();
};
var boot = () => __async(void 0, null, function* () {
  if (bootPromise !== void 0) {
    return bootPromise;
  }
  const bootExecutor = (resolve) => __async(void 0, null, function* () {
    registerCurrentRuntime();
    if (typeof document === "undefined") {
      resolve();
      return;
    }
    attachThemeRegistered(onThemeRegistered);
    const openUI5Support = getFeature("OpenUI5Support");
    const isOpenUI5Loaded = openUI5Support ? openUI5Support.isOpenUI5Detected() : false;
    const f6Navigation = getFeature("F6Navigation");
    if (openUI5Support) {
      yield openUI5Support.init();
    }
    if (f6Navigation && !isOpenUI5Loaded) {
      f6Navigation.init();
    }
    yield whenDOMReady_default();
    yield applyTheme_default(getTheme2());
    openUI5Support && openUI5Support.attachListeners();
    FontFace_default();
    SystemCSSVars_default();
    resolve();
    booted = true;
    yield eventProvider3.fireEventAsync("boot");
  });
  bootPromise = new Promise(bootExecutor);
  return bootPromise;
});
var onThemeRegistered = (theme) => {
  if (booted && theme === getTheme2()) {
    applyTheme_default(getTheme2());
  }
};

// node_modules/@ui5/webcomponents-base/dist/config/Theme.js
var curTheme;
var getTheme2 = () => {
  if (curTheme === void 0) {
    curTheme = getTheme();
  }
  return curTheme;
};
var setTheme = (theme) => __async(void 0, null, function* () {
  if (curTheme === theme) {
    return;
  }
  curTheme = theme;
  if (isBooted()) {
    yield applyTheme_default(curTheme);
    yield reRenderAllUI5Elements({ themeAware: true });
  }
});
var isLegacyThemeFamily = () => {
  const currentTheme = getTheme2();
  if (!isKnownTheme(currentTheme)) {
    return !getThemeDesignerTheme_default()?.baseThemeName?.startsWith("sap_horizon");
  }
  return !currentTheme.startsWith("sap_horizon");
};
var isLegacyThemeFamilyAsync = () => __async(void 0, null, function* () {
  yield boot();
  return isLegacyThemeFamily();
});
var isKnownTheme = (theme) => SUPPORTED_THEMES.includes(theme);

export {
  merge_default2 as merge_default,
  registerFeature,
  getFeature,
  AnimationMode_default,
  getAnimationMode,
  getLanguage,
  getFetchDefaultLanguage,
  getNoConflict,
  getCalendarType,
  getSecondaryCalendarType,
  getTimezone,
  getFormatSettings,
  registerTag,
  isTagRegistered,
  recordTagRegistrationFailure,
  markAsRtlAware,
  renderDeferred,
  renderImmediately,
  cancelRender,
  renderFinished,
  reRenderAllUI5Elements,
  attachThemeLoaded,
  detachThemeLoaded,
  getTheme2 as getTheme,
  setTheme,
  isLegacyThemeFamily,
  isLegacyThemeFamilyAsync,
  attachBoot,
  boot
};
//# sourceMappingURL=chunk-FE3LTLOF.js.map
