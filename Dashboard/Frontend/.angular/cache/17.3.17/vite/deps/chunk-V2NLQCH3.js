import {
  boot,
  cancelRender,
  getFeature,
  getNoConflict,
  isTagRegistered,
  markAsRtlAware,
  merge_default,
  reRenderAllUI5Elements,
  recordTagRegistrationFailure,
  registerTag,
  renderDeferred,
  renderImmediately
} from "./chunk-FE3LTLOF.js";
import {
  EventProvider_default,
  VersionInfo_default,
  getSharedResource_default,
  init_EventProvider,
  init_VersionInfo,
  init_getSharedResource
} from "./chunk-D5EWR56T.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/CustomElementsScopeUtils.js
init_VersionInfo();
var suf;
var rulesObj = {
  include: [/^ui5-/],
  exclude: []
};
var tagsCache = /* @__PURE__ */ new Map();
var getCustomElementsScopingSuffix = () => {
  return suf;
};
var shouldScopeCustomElement = (tag) => {
  if (!tagsCache.has(tag)) {
    const result = rulesObj.include.some((rule) => tag.match(rule)) && !rulesObj.exclude.some((rule) => tag.match(rule));
    tagsCache.set(tag, result);
  }
  return tagsCache.get(tag);
};
var getEffectiveScopingSuffixForTag = (tag) => {
  if (shouldScopeCustomElement(tag)) {
    return getCustomElementsScopingSuffix();
  }
};
var getScopedVarName = (name) => {
  const versionStr = `v${VersionInfo_default.version.replaceAll(".", "-")}`;
  const expr = /(--_?ui5)([^,:)\s]+)/g;
  return name.replaceAll(expr, `$1-${versionStr}$2`);
};

// node_modules/@ui5/webcomponents-base/dist/features/InputElementsFormSupport.js
var attachFormElementInternals = (element) => {
  element._internals = element.attachInternals();
  if (isInputElement(element)) {
    setFormValue(element);
  }
};
var setFormValue = (element) => {
  if (!element._internals?.form) {
    return;
  }
  setFormValidity(element);
  if (!element.name) {
    element._internals?.setFormValue(null);
    return;
  }
  element._internals.setFormValue(element.formFormattedValue);
};
var setFormValidity = (element) => __async(void 0, null, function* () {
  if (!element._internals?.form) {
    return;
  }
  if (element.formValidity && Object.keys(element.formValidity).some((key) => key)) {
    const focusRef = yield element.formElementAnchor?.();
    element._internals.setValidity(element.formValidity, element.formValidityMessage, focusRef);
  } else {
    element._internals.setValidity({});
  }
});
var submitForm = (element) => {
  element._internals?.form?.requestSubmit();
};
var resetForm = (element) => {
  element._internals?.form?.reset();
};
var isInputElement = (element) => {
  return "formFormattedValue" in element && "name" in element;
};

// node_modules/@ui5/webcomponents-base/dist/util/StringHelper.js
var kebabToCamelMap = /* @__PURE__ */ new Map();
var camelToKebabMap = /* @__PURE__ */ new Map();
var kebabToCamelCase = (string) => {
  if (!kebabToCamelMap.has(string)) {
    const result = toCamelCase(string.split("-"));
    kebabToCamelMap.set(string, result);
  }
  return kebabToCamelMap.get(string);
};
var camelToKebabCase = (string) => {
  if (!camelToKebabMap.has(string)) {
    const result = string.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    camelToKebabMap.set(string, result);
  }
  return camelToKebabMap.get(string);
};
var toCamelCase = (parts) => {
  return parts.map((string, index) => {
    return index === 0 ? string.toLowerCase() : string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }).join("");
};

// node_modules/@ui5/webcomponents-base/dist/util/SlotsHelper.js
var getSlotName = (node) => {
  if (!(node instanceof HTMLElement)) {
    return "default";
  }
  const slot = node.getAttribute("slot");
  if (slot) {
    const match = slot.match(/^(.+?)-\d+$/);
    return match ? match[1] : slot;
  }
  return "default";
};
var getSlottedNodes = (node) => {
  if (node instanceof HTMLSlotElement) {
    return node.assignedNodes({ flatten: true }).filter((item) => item instanceof HTMLElement);
  }
  return [node];
};
var getSlottedNodesList = (nodeList) => {
  return nodeList.reduce((acc, curr) => acc.concat(getSlottedNodes(curr)), []);
};

// node_modules/@ui5/webcomponents-base/dist/UI5ElementMetadata.js
var UI5ElementMetadata = class {
  constructor(metadata) {
    this.metadata = metadata;
  }
  getInitialState() {
    if (Object.prototype.hasOwnProperty.call(this, "_initialState")) {
      return this._initialState;
    }
    const initialState = {};
    const slotsAreManaged = this.slotsAreManaged();
    if (slotsAreManaged) {
      const slots = this.getSlots();
      for (const [slotName, slotData] of Object.entries(slots)) {
        const propertyName = slotData.propertyName || slotName;
        initialState[propertyName] = [];
        initialState[kebabToCamelCase(propertyName)] = initialState[propertyName];
      }
    }
    this._initialState = initialState;
    return initialState;
  }
  /**
   * Validates the slot's value and returns it if correct
   * or throws an exception if not.
   * **Note:** Only intended for use by UI5Element.js
   * @public
   */
  static validateSlotValue(value, slotData) {
    return validateSingleSlot(value, slotData);
  }
  /**
   * Returns the tag of the UI5 Element without the scope
   * @public
   */
  getPureTag() {
    return this.metadata.tag || "";
  }
  /**
   * Returns the tag of the UI5 Element
   * @public
   */
  getTag() {
    const pureTag = this.metadata.tag;
    if (!pureTag) {
      return "";
    }
    const suffix = getEffectiveScopingSuffixForTag(pureTag);
    if (!suffix) {
      return pureTag;
    }
    return `${pureTag}-${suffix}`;
  }
  /**
   * Determines whether a property should have an attribute counterpart
   * @public
   * @param propName
   */
  hasAttribute(propName) {
    const propData = this.getProperties()[propName];
    return propData.type !== Object && propData.type !== Array && !propData.noAttribute;
  }
  /**
   * Returns an array with the properties of the UI5 Element (in camelCase)
   * @public
   */
  getPropertiesList() {
    return Object.keys(this.getProperties());
  }
  /**
   * Returns an array with the attributes of the UI5 Element (in kebab-case)
   * @public
   */
  getAttributesList() {
    return this.getPropertiesList().filter(this.hasAttribute.bind(this)).map(camelToKebabCase);
  }
  /**
   * Determines whether this UI5 Element has a default slot of type Node, therefore can slot text
   */
  canSlotText() {
    return this.getSlots().default?.type === Node;
  }
  /**
   * Determines whether this UI5 Element supports any slots
   * @public
   */
  hasSlots() {
    return !!Object.entries(this.getSlots()).length;
  }
  /**
   * Determines whether this UI5 Element supports any slots with "individualSlots: true"
   * @public
   */
  hasIndividualSlots() {
    return this.slotsAreManaged() && Object.values(this.getSlots()).some((slotData) => slotData.individualSlots);
  }
  /**
   * Determines whether this UI5 Element needs to invalidate if children are added/removed/changed
   * @public
   */
  slotsAreManaged() {
    return !!this.metadata.managedSlots;
  }
  /**
   * Determines whether this control supports F6 fast navigation
   * @public
   */
  supportsF6FastNavigation() {
    return !!this.metadata.fastNavigation;
  }
  /**
   * Returns an object with key-value pairs of properties and their metadata definitions
   * @public
   */
  getProperties() {
    if (!this.metadata.properties) {
      this.metadata.properties = {};
    }
    return this.metadata.properties;
  }
  /**
   * Returns an object with key-value pairs of events and their metadata definitions
   * @public
   */
  getEvents() {
    if (!this.metadata.events) {
      this.metadata.events = {};
    }
    return this.metadata.events;
  }
  /**
   * Returns an object with key-value pairs of slots and their metadata definitions
   * @public
   */
  getSlots() {
    if (!this.metadata.slots) {
      this.metadata.slots = {};
    }
    return this.metadata.slots;
  }
  /**
   * Determines whether this UI5 Element has any translatable texts (needs to be invalidated upon language change)
   */
  isLanguageAware() {
    return !!this.metadata.languageAware;
  }
  /**
   * Determines whether this UI5 Element has any theme dependant carachteristics.
   */
  isThemeAware() {
    return !!this.metadata.themeAware;
  }
  getShadowRootOptions() {
    return this.metadata.shadowRootOptions || {};
  }
  /**
   * Determines whether this UI5 Element has any theme dependant carachteristics.
   */
  isFormAssociated() {
    return !!this.metadata.formAssociated;
  }
  /**
   * Matches a changed entity (property/slot) with the given name against the "invalidateOnChildChange" configuration
   * and determines whether this should cause and invalidation
   *
   * @param slotName the name of the slot in which a child was changed
   * @param type the type of change in the child: "property" or "slot"
   * @param name the name of the property/slot that changed
   */
  shouldInvalidateOnChildChange(slotName, type, name) {
    const config = this.getSlots()[slotName].invalidateOnChildChange;
    if (config === void 0) {
      return false;
    }
    if (typeof config === "boolean") {
      return config;
    }
    if (typeof config === "object") {
      if (type === "property") {
        if (config.properties === void 0) {
          return false;
        }
        if (typeof config.properties === "boolean") {
          return config.properties;
        }
        if (Array.isArray(config.properties)) {
          return config.properties.includes(name);
        }
        throw new Error("Wrong format for invalidateOnChildChange.properties: boolean or array is expected");
      }
      if (type === "slot") {
        if (config.slots === void 0) {
          return false;
        }
        if (typeof config.slots === "boolean") {
          return config.slots;
        }
        if (Array.isArray(config.slots)) {
          return config.slots.includes(name);
        }
        throw new Error("Wrong format for invalidateOnChildChange.slots: boolean or array is expected");
      }
    }
    throw new Error("Wrong format for invalidateOnChildChange: boolean or object is expected");
  }
};
var validateSingleSlot = (value, slotData) => {
  value && getSlottedNodes(value).forEach((el) => {
    if (!(el instanceof slotData.type)) {
      throw new Error(`The element is not of type ${slotData.type.toString()}`);
    }
  });
  return value;
};
var UI5ElementMetadata_default = UI5ElementMetadata;

// node_modules/@ui5/webcomponents-base/dist/UI5Element.js
init_EventProvider();

// node_modules/@ui5/webcomponents-base/dist/theming/CustomStyle.js
init_getSharedResource();
init_EventProvider();
var getEventProvider = () => getSharedResource_default("CustomStyle.eventProvider", new EventProvider_default());
var CUSTOM_CSS_CHANGE = "CustomCSSChange";
var attachCustomCSSChange = (listener) => {
  getEventProvider().attachEvent(CUSTOM_CSS_CHANGE, listener);
};
var fireCustomCSSChange = (tag) => {
  return getEventProvider().fireEvent(CUSTOM_CSS_CHANGE, tag);
};
var getCustomCSSFor = () => getSharedResource_default("CustomStyle.customCSSFor", {});
var skipRerender;
attachCustomCSSChange((tag) => {
  if (!skipRerender) {
    reRenderAllUI5Elements({ tag });
  }
});
var addCustomCSS = (tag, css) => {
  const customCSSFor = getCustomCSSFor();
  if (!customCSSFor[tag]) {
    customCSSFor[tag] = [];
  }
  customCSSFor[tag].push(css);
  skipRerender = true;
  try {
    fireCustomCSSChange(tag);
  } finally {
    skipRerender = false;
  }
  return reRenderAllUI5Elements({ tag });
};
var getCustomCSS = (tag) => {
  const customCSSFor = getCustomCSSFor();
  return customCSSFor[tag] ? customCSSFor[tag].join("") : "";
};

// node_modules/@ui5/webcomponents-base/dist/theming/getStylesString.js
var MAX_DEPTH_INHERITED_CLASSES = 10;
var getStylesString = (styles) => {
  if (Array.isArray(styles)) {
    return styles.filter((style) => !!style).flat(MAX_DEPTH_INHERITED_CLASSES).map((style) => {
      return typeof style === "string" ? style : style.content;
    }).join(" ");
  }
  return typeof styles === "string" ? styles : styles.content;
};
var getStylesString_default = getStylesString;

// node_modules/@ui5/webcomponents-base/dist/theming/getEffectiveStyle.js
var effectiveStyleMap = /* @__PURE__ */ new Map();
attachCustomCSSChange((tag) => {
  effectiveStyleMap.delete(`${tag}_normal`);
});
var getEffectiveStyle = (ElementClass) => {
  const tag = ElementClass.getMetadata().getTag();
  const key = `${tag}_normal`;
  const openUI5Enablement = getFeature("OpenUI5Enablement");
  if (!effectiveStyleMap.has(key)) {
    let busyIndicatorStyles = "";
    if (openUI5Enablement) {
      busyIndicatorStyles = getStylesString_default(openUI5Enablement.getBusyIndicatorStyles());
    }
    const customStyle = getCustomCSS(tag) || "";
    const builtInStyles = getStylesString_default(ElementClass.styles);
    const effectiveStyle = `${builtInStyles} ${customStyle} ${busyIndicatorStyles}`;
    effectiveStyleMap.set(key, effectiveStyle);
  }
  return effectiveStyleMap.get(key);
};
var getEffectiveStyle_default = getEffectiveStyle;

// node_modules/@ui5/webcomponents-base/dist/theming/getConstructableStyle.js
var constructableStyleMap = /* @__PURE__ */ new Map();
attachCustomCSSChange((tag) => {
  constructableStyleMap.delete(`${tag}_normal`);
});
var getConstructableStyle = (ElementClass) => {
  const tag = ElementClass.getMetadata().getTag();
  const key = `${tag}_normal`;
  if (!constructableStyleMap.has(key)) {
    const styleContent = getEffectiveStyle_default(ElementClass);
    const style = new CSSStyleSheet();
    style.replaceSync(styleContent);
    constructableStyleMap.set(key, [style]);
  }
  return constructableStyleMap.get(key);
};
var getConstructableStyle_default = getConstructableStyle;

// node_modules/@ui5/webcomponents-base/dist/updateShadowRoot.js
var updateShadowRoot = (element) => {
  const ctor = element.constructor;
  const shadowRoot = element.shadowRoot;
  const renderResult = element.render();
  if (!shadowRoot) {
    console.warn(`There is no shadow root to update`);
    return;
  }
  shadowRoot.adoptedStyleSheets = getConstructableStyle_default(ctor);
  ctor.renderer(renderResult, shadowRoot, { host: element });
};
var updateShadowRoot_default = updateShadowRoot;

// node_modules/@ui5/webcomponents-base/dist/IgnoreCustomElements.js
var tagPrefixes = [];
var shouldIgnoreCustomElement = (tag) => {
  return tagPrefixes.some((pref) => tag.startsWith(pref));
};

// node_modules/@ui5/webcomponents-base/dist/DOMObserver.js
var observers = /* @__PURE__ */ new WeakMap();
var observeDOMNode = (node, callback, options) => {
  const observer = new MutationObserver(callback);
  observers.set(node, observer);
  observer.observe(node, options);
};
var unobserveDOMNode = (node) => {
  const observer = observers.get(node);
  if (observer) {
    observer.disconnect();
    observers.delete(node);
  }
};

// node_modules/@ui5/webcomponents-base/dist/config/NoConflict.js
var excludeList = [
  "value-changed",
  "click"
];
var noConflict;
var shouldFireOriginalEvent = (eventName) => {
  return excludeList.includes(eventName);
};
var shouldNotFireOriginalEvent = (eventName) => {
  const nc = getNoConflict2();
  return !(typeof nc !== "boolean" && nc.events && nc.events.includes && nc.events.includes(eventName));
};
var getNoConflict2 = () => {
  if (noConflict === void 0) {
    noConflict = getNoConflict();
  }
  return noConflict;
};
var skipOriginalEvent = (eventName) => {
  const nc = getNoConflict2();
  if (shouldFireOriginalEvent(eventName)) {
    return false;
  }
  if (nc === true) {
    return true;
  }
  return !shouldNotFireOriginalEvent(eventName);
};

// node_modules/@ui5/webcomponents-base/dist/locale/getEffectiveDir.js
var getEffectiveDir = (element) => {
  if (element.matches(":dir(rtl)")) {
    return "rtl";
  }
  return "ltr";
};
var getEffectiveDir_default = getEffectiveDir;

// node_modules/@ui5/webcomponents-base/dist/util/isValidPropertyName.js
var allowList = [
  "disabled",
  "title",
  "hidden",
  "role",
  "draggable"
];
var isValidPropertyName = (name) => {
  if (allowList.includes(name) || name.startsWith("aria")) {
    return true;
  }
  const classes = [
    HTMLElement,
    Element,
    Node
  ];
  return !classes.some((klass) => klass.prototype.hasOwnProperty(name));
};
var isValidPropertyName_default = isValidPropertyName;

// node_modules/@ui5/webcomponents-base/dist/util/arraysAreEqual.js
var arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
var arraysAreEqual_default = arraysAreEqual;

// node_modules/@ui5/webcomponents-base/dist/renderer/executeTemplate.js
var executeTemplate = (template, component) => {
  const tagsToScope = getTagsToScope(component);
  const scope = getCustomElementsScopingSuffix();
  return template.call(component, component, tagsToScope, scope);
};
var getTagsToScope = (component) => {
  const ctor = component.constructor;
  const componentTag = ctor.getMetadata().getPureTag();
  const tagsToScope = ctor.getUniqueDependencies().map((dep) => dep.getMetadata().getPureTag()).filter(shouldScopeCustomElement);
  if (shouldScopeCustomElement(componentTag)) {
    tagsToScope.push(componentTag);
  }
  return tagsToScope;
};
var executeTemplate_default = executeTemplate;

// node_modules/@ui5/webcomponents-base/dist/UI5Element.js
var DEV_MODE = true;
var autoId = 0;
var elementTimeouts = /* @__PURE__ */ new Map();
var uniqueDependenciesCache = /* @__PURE__ */ new Map();
var defaultConverter = {
  fromAttribute(value, type) {
    if (type === Boolean) {
      return value !== null;
    }
    if (type === Number) {
      return value === null ? void 0 : parseFloat(value);
    }
    return value;
  },
  toAttribute(value, type) {
    if (type === Boolean) {
      return value ? "" : null;
    }
    if (type === Object || type === Array) {
      return null;
    }
    if (value === null || value === void 0) {
      return null;
    }
    return String(value);
  }
};
function _invalidate(changeInfo) {
  if (this._suppressInvalidation) {
    return;
  }
  this.onInvalidation(changeInfo);
  this._changedState.push(changeInfo);
  renderDeferred(this);
  this._invalidationEventProvider.fireEvent("invalidate", __spreadProps(__spreadValues({}, changeInfo), { target: this }));
}
function getPropertyDescriptor(proto, name) {
  do {
    const descriptor = Object.getOwnPropertyDescriptor(proto, name);
    if (descriptor) {
      return descriptor;
    }
    proto = Object.getPrototypeOf(proto);
  } while (proto && proto !== HTMLElement.prototype);
}
var UI5Element = class _UI5Element extends HTMLElement {
  constructor() {
    super();
    this._rendered = false;
    const ctor = this.constructor;
    this._changedState = [];
    this._suppressInvalidation = true;
    this._inDOM = false;
    this._fullyConnected = false;
    this._childChangeListeners = /* @__PURE__ */ new Map();
    this._slotChangeListeners = /* @__PURE__ */ new Map();
    this._invalidationEventProvider = new EventProvider_default();
    this._componentStateFinalizedEventProvider = new EventProvider_default();
    let deferredResolve;
    this._domRefReadyPromise = new Promise((resolve) => {
      deferredResolve = resolve;
    });
    this._domRefReadyPromise._deferredResolve = deferredResolve;
    this._doNotSyncAttributes = /* @__PURE__ */ new Set();
    this._slotsAssignedNodes = /* @__PURE__ */ new WeakMap();
    this._state = __spreadValues({}, ctor.getMetadata().getInitialState());
    this.initializedProperties = /* @__PURE__ */ new Map();
    const allProps = this.constructor.getMetadata().getPropertiesList();
    allProps.forEach((propertyName) => {
      if (this.hasOwnProperty(propertyName)) {
        const value = this[propertyName];
        this.initializedProperties.set(propertyName, value);
      }
    });
    this._initShadowRoot();
  }
  _initShadowRoot() {
    const ctor = this.constructor;
    if (ctor._needsShadowDOM()) {
      const defaultOptions = { mode: "open" };
      this.attachShadow(__spreadValues(__spreadValues({}, defaultOptions), ctor.getMetadata().getShadowRootOptions()));
      const slotsAreManaged = ctor.getMetadata().slotsAreManaged();
      if (slotsAreManaged) {
        this.shadowRoot.addEventListener("slotchange", this._onShadowRootSlotChange.bind(this));
      }
    }
  }
  /**
   * Note: this "slotchange" listener is for slots, rendered in the component's shadow root
   */
  _onShadowRootSlotChange(e) {
    const targetShadowRoot = e.target?.getRootNode();
    if (targetShadowRoot === this.shadowRoot) {
      this._processChildren();
    }
  }
  /**
   * Returns a unique ID for this UI5 Element
   *
   * @deprecated - This property is not guaranteed in future releases
   * @protected
   */
  get _id() {
    if (!this.__id) {
      this.__id = `ui5wc_${++autoId}`;
    }
    return this.__id;
  }
  render() {
    const template = this.constructor.template;
    return executeTemplate_default(template, this);
  }
  /**
   * Do not call this method from derivatives of UI5Element, use "onEnterDOM" only
   * @private
   */
  connectedCallback() {
    return __async(this, null, function* () {
      if (DEV_MODE) {
        const rootNode = this.getRootNode();
        if (rootNode instanceof ShadowRoot && instanceOfUI5Element(rootNode.host)) {
          const klass = rootNode.host.constructor;
          const hasDependency = getTagsToScope(rootNode.host).includes(this.constructor.getMetadata().getPureTag());
          if (!hasDependency) {
            console.error(`[UI5-FWK] ${this.constructor.getMetadata().getTag()} not found in dependencies of ${klass.getMetadata().getTag()}`);
          }
        }
      }
      if (DEV_MODE) {
        const props = this.constructor.getMetadata().getProperties();
        for (const [prop, propData] of Object.entries(props)) {
          if (Object.hasOwn(this, prop) && !this.initializedProperties.has(prop)) {
            console.error(`[UI5-FWK] ${this.constructor.getMetadata().getTag()} has a property [${prop}] that is shadowed by the instance. Updates to this property will not invalidate the component. Possible reason is TS target ES2022 or TS useDefineForClassFields`);
          }
        }
      }
      const ctor = this.constructor;
      this.setAttribute(ctor.getMetadata().getPureTag(), "");
      if (ctor.getMetadata().supportsF6FastNavigation()) {
        this.setAttribute("data-sap-ui-fastnavgroup", "true");
      }
      const slotsAreManaged = ctor.getMetadata().slotsAreManaged();
      this._inDOM = true;
      if (slotsAreManaged) {
        this._startObservingDOMChildren();
        yield this._processChildren();
      }
      if (!this._inDOM) {
        return;
      }
      renderImmediately(this);
      this._domRefReadyPromise._deferredResolve();
      this._fullyConnected = true;
      this.onEnterDOM();
    });
  }
  /**
   * Do not call this method from derivatives of UI5Element, use "onExitDOM" only
   * @private
   */
  disconnectedCallback() {
    const ctor = this.constructor;
    const slotsAreManaged = ctor.getMetadata().slotsAreManaged();
    this._inDOM = false;
    if (slotsAreManaged) {
      this._stopObservingDOMChildren();
    }
    if (this._fullyConnected) {
      this.onExitDOM();
      this._fullyConnected = false;
    }
    this._domRefReadyPromise._deferredResolve();
    cancelRender(this);
  }
  /**
   * Called every time before the component renders.
   * @public
   */
  onBeforeRendering() {
  }
  /**
   * Called every time after the component renders.
   * @public
   */
  onAfterRendering() {
  }
  /**
   * Called on connectedCallback - added to the DOM.
   * @public
   */
  onEnterDOM() {
  }
  /**
   * Called on disconnectedCallback - removed from the DOM.
   * @public
   */
  onExitDOM() {
  }
  /**
   * @private
   */
  _startObservingDOMChildren() {
    const ctor = this.constructor;
    const metadata = ctor.getMetadata();
    const shouldObserveChildren = metadata.hasSlots();
    if (!shouldObserveChildren) {
      return;
    }
    const canSlotText = metadata.canSlotText();
    const mutationObserverOptions = {
      childList: true,
      subtree: canSlotText,
      characterData: canSlotText
    };
    observeDOMNode(this, this._processChildren.bind(this), mutationObserverOptions);
  }
  /**
   * @private
   */
  _stopObservingDOMChildren() {
    unobserveDOMNode(this);
  }
  /**
   * Note: this method is also manually called by "compatibility/patchNodeValue.js"
   * @private
   */
  _processChildren() {
    return __async(this, null, function* () {
      const hasSlots = this.constructor.getMetadata().hasSlots();
      if (hasSlots) {
        yield this._updateSlots();
      }
    });
  }
  /**
   * @private
   */
  _updateSlots() {
    return __async(this, null, function* () {
      const ctor = this.constructor;
      const slotsMap = ctor.getMetadata().getSlots();
      const canSlotText = ctor.getMetadata().canSlotText();
      const domChildren = Array.from(canSlotText ? this.childNodes : this.children);
      const slotsCachedContentMap = /* @__PURE__ */ new Map();
      const propertyNameToSlotMap = /* @__PURE__ */ new Map();
      for (const [slotName, slotData] of Object.entries(slotsMap)) {
        const propertyName = slotData.propertyName || slotName;
        propertyNameToSlotMap.set(propertyName, slotName);
        slotsCachedContentMap.set(propertyName, [...this._state[propertyName]]);
        this._clearSlot(slotName, slotData);
      }
      const autoIncrementMap = /* @__PURE__ */ new Map();
      const slottedChildrenMap = /* @__PURE__ */ new Map();
      const allChildrenUpgraded = domChildren.map((child, idx) => __async(this, null, function* () {
        const slotName = getSlotName(child);
        const slotData = slotsMap[slotName];
        if (slotData === void 0) {
          if (slotName !== "default") {
            const validValues = Object.keys(slotsMap).join(", ");
            console.warn(`Unknown slotName: ${slotName}, ignoring`, child, `Valid values are: ${validValues}`);
          }
          return;
        }
        if (slotData.individualSlots) {
          const nextIndex = (autoIncrementMap.get(slotName) || 0) + 1;
          autoIncrementMap.set(slotName, nextIndex);
          child._individualSlot = `${slotName}-${nextIndex}`;
        }
        if (child instanceof HTMLElement) {
          const localName = child.localName;
          const shouldWaitForCustomElement = localName.includes("-") && !shouldIgnoreCustomElement(localName);
          if (shouldWaitForCustomElement) {
            const isDefined = customElements.get(localName);
            if (!isDefined) {
              const whenDefinedPromise = customElements.whenDefined(localName);
              let timeoutPromise = elementTimeouts.get(localName);
              if (!timeoutPromise) {
                timeoutPromise = new Promise((resolve) => setTimeout(resolve, 1e3));
                elementTimeouts.set(localName, timeoutPromise);
              }
              yield Promise.race([whenDefinedPromise, timeoutPromise]);
            }
            customElements.upgrade(child);
          }
        }
        child = ctor.getMetadata().constructor.validateSlotValue(child, slotData);
        if (instanceOfUI5Element(child) && slotData.invalidateOnChildChange) {
          const childChangeListener = this._getChildChangeListener(slotName);
          child.attachInvalidate.call(child, childChangeListener);
        }
        if (child instanceof HTMLSlotElement) {
          this._attachSlotChange(child, slotName, !!slotData.invalidateOnChildChange);
        }
        const propertyName = slotData.propertyName || slotName;
        if (slottedChildrenMap.has(propertyName)) {
          slottedChildrenMap.get(propertyName).push({ child, idx });
        } else {
          slottedChildrenMap.set(propertyName, [{ child, idx }]);
        }
      }));
      yield Promise.all(allChildrenUpgraded);
      slottedChildrenMap.forEach((children, propertyName) => {
        this._state[propertyName] = children.sort((a, b) => a.idx - b.idx).map((_) => _.child);
        this._state[kebabToCamelCase(propertyName)] = this._state[propertyName];
      });
      let invalidated = false;
      for (const [slotName, slotData] of Object.entries(slotsMap)) {
        const propertyName = slotData.propertyName || slotName;
        if (!arraysAreEqual_default(slotsCachedContentMap.get(propertyName), this._state[propertyName])) {
          _invalidate.call(this, {
            type: "slot",
            name: propertyNameToSlotMap.get(propertyName),
            reason: "children"
          });
          invalidated = true;
          if (ctor.getMetadata().isFormAssociated()) {
            setFormValue(this);
          }
        }
      }
      if (!invalidated) {
        _invalidate.call(this, {
          type: "slot",
          name: "default",
          reason: "textcontent"
        });
      }
    });
  }
  /**
   * Removes all children from the slot and detaches listeners, if any
   * @private
   */
  _clearSlot(slotName, slotData) {
    const propertyName = slotData.propertyName || slotName;
    const children = this._state[propertyName];
    children.forEach((child) => {
      if (instanceOfUI5Element(child)) {
        const childChangeListener = this._getChildChangeListener(slotName);
        child.detachInvalidate.call(child, childChangeListener);
      }
      if (child instanceof HTMLSlotElement) {
        this._detachSlotChange(child, slotName);
      }
    });
    this._state[propertyName] = [];
    this._state[kebabToCamelCase(propertyName)] = this._state[propertyName];
  }
  /**
   * Attach a callback that will be executed whenever the component is invalidated
   *
   * @param callback
   * @public
   */
  attachInvalidate(callback) {
    this._invalidationEventProvider.attachEvent("invalidate", callback);
  }
  /**
   * Detach the callback that is executed whenever the component is invalidated
   *
   * @param callback
   * @public
   */
  detachInvalidate(callback) {
    this._invalidationEventProvider.detachEvent("invalidate", callback);
  }
  /**
   * Callback that is executed whenever a monitored child changes its state
   *
   * @param slotName the slot in which a child was invalidated
   * @param childChangeInfo the changeInfo object for the child in the given slot
   * @private
   */
  _onChildChange(slotName, childChangeInfo) {
    if (!this.constructor.getMetadata().shouldInvalidateOnChildChange(slotName, childChangeInfo.type, childChangeInfo.name)) {
      return;
    }
    _invalidate.call(this, {
      type: "slot",
      name: slotName,
      reason: "childchange",
      child: childChangeInfo.target
    });
  }
  /**
   * Do not override this method in derivatives of UI5Element
   * @private
   */
  attributeChangedCallback(name, oldValue, newValue) {
    let newPropertyValue;
    if (this._doNotSyncAttributes.has(name)) {
      return;
    }
    const properties = this.constructor.getMetadata().getProperties();
    const realName = name.replace(/^ui5-/, "");
    const nameInCamelCase = kebabToCamelCase(realName);
    if (properties.hasOwnProperty(nameInCamelCase)) {
      const propData = properties[nameInCamelCase];
      const converter = propData.converter ?? defaultConverter;
      newPropertyValue = converter.fromAttribute(newValue, propData.type);
      this[nameInCamelCase] = newPropertyValue;
    }
  }
  formAssociatedCallback() {
    const ctor = this.constructor;
    if (!ctor.getMetadata().isFormAssociated()) {
      return;
    }
    attachFormElementInternals(this);
  }
  static get formAssociated() {
    return this.getMetadata().isFormAssociated();
  }
  /**
   * @private
   */
  _updateAttribute(name, newValue) {
    const ctor = this.constructor;
    if (!ctor.getMetadata().hasAttribute(name)) {
      return;
    }
    const properties = ctor.getMetadata().getProperties();
    const propData = properties[name];
    const attrName = camelToKebabCase(name);
    const converter = propData.converter || defaultConverter;
    if (DEV_MODE) {
      const tag = this.constructor.getMetadata().getTag();
      if (typeof newValue === "boolean" && propData.type !== Boolean) {
        console.error(`[UI5-FWK] boolean value for property [${name}] of component [${tag}] is missing "{ type: Boolean }" in its property decorator. Attribute conversion will treat it as a string. If this is intended, pass the value converted to string, otherwise add the type to the property decorator`);
      }
      if (typeof newValue === "number" && propData.type !== Number) {
        console.error(`[UI5-FWK] numeric value for property [${name}] of component [${tag}] is missing "{ type: Number }" in its property decorator. Attribute conversion will treat it as a string. If this is intended, pass the value converted to string, otherwise add the type to the property decorator`);
      }
    }
    const newAttrValue = converter.toAttribute(newValue, propData.type);
    if (newAttrValue === null || newAttrValue === void 0) {
      this._doNotSyncAttributes.add(attrName);
      this.removeAttribute(attrName);
      this._doNotSyncAttributes.delete(attrName);
    } else {
      this.setAttribute(attrName, newAttrValue);
    }
  }
  /**
   * Returns a singleton event listener for the "change" event of a child in a given slot
   *
   * @param slotName the name of the slot, where the child is
   * @private
   */
  _getChildChangeListener(slotName) {
    if (!this._childChangeListeners.has(slotName)) {
      this._childChangeListeners.set(slotName, this._onChildChange.bind(this, slotName));
    }
    return this._childChangeListeners.get(slotName);
  }
  /**
   * Returns a singleton slotchange event listener that invalidates the component due to changes in the given slot
   *
   * @param slotName the name of the slot, where the slot element (whose slotchange event we're listening to) is
   * @private
   */
  _getSlotChangeListener(slotName) {
    if (!this._slotChangeListeners.has(slotName)) {
      this._slotChangeListeners.set(slotName, this._onSlotChange.bind(this, slotName));
    }
    return this._slotChangeListeners.get(slotName);
  }
  /**
   * @private
   */
  _attachSlotChange(slot, slotName, invalidateOnChildChange) {
    const slotChangeListener = this._getSlotChangeListener(slotName);
    slot.addEventListener("slotchange", (e) => {
      slotChangeListener.call(slot, e);
      if (invalidateOnChildChange) {
        const previousChildren = this._slotsAssignedNodes.get(slot);
        if (previousChildren) {
          previousChildren.forEach((child) => {
            if (instanceOfUI5Element(child)) {
              const childChangeListener = this._getChildChangeListener(slotName);
              child.detachInvalidate.call(child, childChangeListener);
            }
          });
        }
        const newChildren = getSlottedNodesList([slot]);
        this._slotsAssignedNodes.set(slot, newChildren);
        newChildren.forEach((child) => {
          if (instanceOfUI5Element(child)) {
            const childChangeListener = this._getChildChangeListener(slotName);
            child.attachInvalidate.call(child, childChangeListener);
          }
        });
      }
    });
  }
  /**
   * @private
   */
  _detachSlotChange(child, slotName) {
    child.removeEventListener("slotchange", this._getSlotChangeListener(slotName));
  }
  /**
   * Whenever a slot element is slotted inside a UI5 Web Component, its slotchange event invalidates the component
   * Note: this "slotchange" listener is for slots that are children of the component (in the light dom, as opposed to slots rendered by the component in the shadow root)
   *
   * @param slotName the name of the slot, where the slot element (whose slotchange event we're listening to) is
   * @private
   */
  _onSlotChange(slotName) {
    _invalidate.call(this, {
      type: "slot",
      name: slotName,
      reason: "slotchange"
    });
  }
  /**
   * A callback that is executed each time an already rendered component is invalidated (scheduled for re-rendering)
   *
   * @param  changeInfo An object with information about the change that caused invalidation.
   * The object can have the following properties:
   *  - type: (property|slot) tells what caused the invalidation
   *   1) property: a property value was changed either directly or as a result of changing the corresponding attribute
   *   2) slot: a slotted node(nodes) changed in one of several ways (see "reason")
   *
   *  - name: the name of the property or slot that caused the invalidation
   *
   *  - reason: (children|textcontent|childchange|slotchange) relevant only for type="slot" only and tells exactly what changed in the slot
   *   1) children: immediate children (HTML elements or text nodes) were added, removed or reordered in the slot
   *   2) textcontent: text nodes in the slot changed value (or nested text nodes were added or changed value). Can only trigger for slots of "type: Node"
   *   3) slotchange: a slot element, slotted inside that slot had its "slotchange" event listener called. This practically means that transitively slotted children changed.
   *	  Can only trigger if the child of a slot is a slot element itself.
   *   4) childchange: indicates that a UI5Element child in that slot was invalidated and in turn invalidated the component.
   *	  Can only trigger for slots with "invalidateOnChildChange" metadata descriptor
   *
   *  - newValue: the new value of the property (for type="property" only)
   *
   *  - oldValue: the old value of the property (for type="property" only)
   *
   *  - child the child that was changed (for type="slot" and reason="childchange" only)
   *
   * @public
   */
  onInvalidation(changeInfo) {
  }
  // eslint-disable-line
  updateAttributes() {
    const ctor = this.constructor;
    const props = ctor.getMetadata().getProperties();
    for (const [prop, propData] of Object.entries(props)) {
      this._updateAttribute(prop, this[prop]);
    }
  }
  /**
   * Do not call this method directly, only intended to be called by js
   * @protected
   */
  _render() {
    const ctor = this.constructor;
    const hasIndividualSlots = ctor.getMetadata().hasIndividualSlots();
    if (this.initializedProperties.size > 0) {
      Array.from(this.initializedProperties.entries()).forEach(([prop, value]) => {
        delete this[prop];
        this[prop] = value;
      });
      this.initializedProperties.clear();
    }
    this._suppressInvalidation = true;
    this.onBeforeRendering();
    if (!this._rendered) {
      this.updateAttributes();
    }
    this._componentStateFinalizedEventProvider.fireEvent("componentStateFinalized");
    this._suppressInvalidation = false;
    this._changedState = [];
    if (ctor._needsShadowDOM()) {
      updateShadowRoot_default(this);
    }
    this._rendered = true;
    if (hasIndividualSlots) {
      this._assignIndividualSlotsToChildren();
    }
    this.onAfterRendering();
  }
  /**
   * @private
   */
  _assignIndividualSlotsToChildren() {
    const domChildren = Array.from(this.children);
    domChildren.forEach((child) => {
      if (child._individualSlot) {
        child.setAttribute("slot", child._individualSlot);
      }
    });
  }
  /**
   * @private
   */
  _waitForDomRef() {
    return this._domRefReadyPromise;
  }
  /**
   * Returns the DOM Element inside the Shadow Root that corresponds to the opening tag in the UI5 Web Component's template
   * *Note:* For logical (abstract) elements (items, options, etc...), returns the part of the parent's DOM that represents this option
   * Use this method instead of "this.shadowRoot" to read the Shadow DOM, if ever necessary
   *
   * @public
   */
  getDomRef() {
    if (typeof this._getRealDomRef === "function") {
      return this._getRealDomRef();
    }
    if (!this.shadowRoot || this.shadowRoot.children.length === 0) {
      return;
    }
    return this.shadowRoot.children[0];
  }
  /**
   * Returns the DOM Element marked with "data-sap-focus-ref" inside the template.
   * This is the element that will receive the focus by default.
   * @public
   */
  getFocusDomRef() {
    const domRef = this.getDomRef();
    if (domRef) {
      const focusRef = domRef.querySelector("[data-sap-focus-ref]");
      return focusRef || domRef;
    }
  }
  /**
   * Waits for dom ref and then returns the DOM Element marked with "data-sap-focus-ref" inside the template.
   * This is the element that will receive the focus by default.
   * @public
   */
  getFocusDomRefAsync() {
    return __async(this, null, function* () {
      yield this._waitForDomRef();
      return this.getFocusDomRef();
    });
  }
  /**
   * Set the focus to the element, returned by "getFocusDomRef()" (marked by "data-sap-focus-ref")
   * @param focusOptions additional options for the focus
   * @public
   */
  focus(focusOptions) {
    return __async(this, null, function* () {
      yield this._waitForDomRef();
      const focusDomRef = this.getFocusDomRef();
      if (focusDomRef === this) {
        HTMLElement.prototype.focus.call(this, focusOptions);
      } else if (focusDomRef && typeof focusDomRef.focus === "function") {
        focusDomRef.focus(focusOptions);
      }
    });
  }
  /**
   *
   * @public
   * @param name - name of the event
   * @param data - additional data for the event
   * @param cancelable - true, if the user can call preventDefault on the event object
   * @param bubbles - true, if the event bubbles
   * @returns false, if the event was cancelled (preventDefault called), true otherwise
   */
  fireEvent(name, data, cancelable = false, bubbles = true) {
    const eventResult = this._fireEvent(name, data, cancelable, bubbles);
    const camelCaseEventName = kebabToCamelCase(name);
    if (camelCaseEventName !== name) {
      return eventResult && this._fireEvent(camelCaseEventName, data, cancelable, bubbles);
    }
    return eventResult;
  }
  _fireEvent(name, data, cancelable = false, bubbles = true) {
    const noConflictEvent = new CustomEvent(`ui5-${name}`, {
      detail: data,
      composed: false,
      bubbles,
      cancelable
    });
    const noConflictEventResult = this.dispatchEvent(noConflictEvent);
    if (skipOriginalEvent(name)) {
      return noConflictEventResult;
    }
    const normalEvent = new CustomEvent(name, {
      detail: data,
      composed: false,
      bubbles,
      cancelable
    });
    const normalEventResult = this.dispatchEvent(normalEvent);
    return normalEventResult && noConflictEventResult;
  }
  /**
   * Returns the actual children, associated with a slot.
   * Useful when there are transitive slots in nested component scenarios and you don't want to get a list of the slots, but rather of their content.
   * @public
   */
  getSlottedNodes(slotName) {
    return getSlottedNodesList(this[slotName]);
  }
  /**
   * Attach a callback that will be executed whenever the component's state is finalized
   *
   * @param callback
   * @public
   */
  attachComponentStateFinalized(callback) {
    this._componentStateFinalizedEventProvider.attachEvent("componentStateFinalized", callback);
  }
  /**
   * Detach the callback that is executed whenever the component's state is finalized
   *
   * @param callback
   * @public
   */
  detachComponentStateFinalized(callback) {
    this._componentStateFinalizedEventProvider.detachEvent("componentStateFinalized", callback);
  }
  /**
   * Determines whether the component should be rendered in RTL mode or not.
   * Returns: "rtl", "ltr" or undefined
   *
   * @public
   * @default undefined
   */
  get effectiveDir() {
    markAsRtlAware(this.constructor);
    return getEffectiveDir_default(this);
  }
  /**
   * Used to duck-type UI5 elements without using instanceof
   * @public
   * @default true
   */
  get isUI5Element() {
    return true;
  }
  get classes() {
    return {};
  }
  /**
   * Returns the component accessibility info.
   * @private
   */
  get accessibilityInfo() {
    return {};
  }
  /**
   * Do not override this method in derivatives of UI5Element, use metadata properties instead
   * @private
   */
  static get observedAttributes() {
    return this.getMetadata().getAttributesList();
  }
  /**
   * @private
   */
  static _needsShadowDOM() {
    return !!this.template || Object.prototype.hasOwnProperty.call(this.prototype, "render");
  }
  /**
   * @private
   */
  static _generateAccessors() {
    const proto = this.prototype;
    const slotsAreManaged = this.getMetadata().slotsAreManaged();
    const properties = this.getMetadata().getProperties();
    for (const [prop, propData] of Object.entries(properties)) {
      if (!isValidPropertyName_default(prop)) {
        console.warn(`"${prop}" is not a valid property name. Use a name that does not collide with DOM APIs`);
      }
      const descriptor = getPropertyDescriptor(proto, prop);
      let origSet;
      if (descriptor?.set) {
        origSet = descriptor.set;
      }
      let origGet;
      if (descriptor?.get) {
        origGet = descriptor.get;
      }
      Object.defineProperty(proto, prop, {
        get() {
          if (origGet) {
            return origGet.call(this);
          }
          return this._state[prop];
        },
        set(value) {
          const ctor = this.constructor;
          const oldState = origGet ? origGet.call(this) : this._state[prop];
          const isDifferent = oldState !== value;
          if (isDifferent) {
            if (origSet) {
              origSet.call(this, value);
            } else {
              this._state[prop] = value;
            }
            _invalidate.call(this, {
              type: "property",
              name: prop,
              newValue: value,
              oldValue: oldState
            });
            if (this._rendered) {
              this._updateAttribute(prop, value);
            }
            if (ctor.getMetadata().isFormAssociated()) {
              setFormValue(this);
            }
          }
        }
      });
    }
    if (slotsAreManaged) {
      const slots = this.getMetadata().getSlots();
      for (const [slotName, slotData] of Object.entries(slots)) {
        if (!isValidPropertyName_default(slotName)) {
          console.warn(`"${slotName}" is not a valid property name. Use a name that does not collide with DOM APIs`);
        }
        const propertyName = slotData.propertyName || slotName;
        const propertyDescriptor = {
          get() {
            if (this._state[propertyName] !== void 0) {
              return this._state[propertyName];
            }
            return [];
          },
          set() {
            throw new Error("Cannot set slot content directly, use the DOM APIs (appendChild, removeChild, etc...)");
          }
        };
        Object.defineProperty(proto, propertyName, propertyDescriptor);
        if (propertyName !== kebabToCamelCase(propertyName)) {
          Object.defineProperty(proto, kebabToCamelCase(propertyName), propertyDescriptor);
        }
      }
    }
  }
  /**
   * Returns an array with the dependencies for this UI5 Web Component, which could be:
   *  - composed components (used in its shadow root or static area item)
   *  - slotted components that the component may need to communicate with
   *
   * @protected
   */
  static get dependencies() {
    return [];
  }
  /**
   * Returns a list of the unique dependencies for this UI5 Web Component
   *
   * @public
   */
  static getUniqueDependencies() {
    if (!uniqueDependenciesCache.has(this)) {
      const filtered = this.dependencies.filter((dep, index, deps) => deps.indexOf(dep) === index);
      uniqueDependenciesCache.set(this, filtered);
    }
    return uniqueDependenciesCache.get(this) || [];
  }
  /**
   * Returns a promise that resolves whenever all dependencies for this UI5 Web Component have resolved
   */
  static whenDependenciesDefined() {
    return Promise.all(this.getUniqueDependencies().map((dep) => dep.define()));
  }
  /**
   * Hook that will be called upon custom element definition
   *
   * @protected
   */
  static onDefine() {
    return __async(this, null, function* () {
      return Promise.resolve();
    });
  }
  /**
   * Registers a UI5 Web Component in the browser window object
   * @public
   */
  static define() {
    return __async(this, null, function* () {
      yield boot();
      yield Promise.all([
        this.whenDependenciesDefined(),
        this.onDefine()
      ]);
      const tag = this.getMetadata().getTag();
      const definedLocally = isTagRegistered(tag);
      const definedGlobally = customElements.get(tag);
      if (definedGlobally && !definedLocally) {
        recordTagRegistrationFailure(tag);
      } else if (!definedGlobally) {
        this._generateAccessors();
        registerTag(tag);
        customElements.define(tag, this);
      }
      return this;
    });
  }
  /**
   * Returns an instance of UI5ElementMetadata.js representing this UI5 Web Component's full metadata (its and its parents')
   * Note: not to be confused with the "get metadata()" method, which returns an object for this class's metadata only
   * @public
   */
  static getMetadata() {
    if (this.hasOwnProperty("_metadata")) {
      return this._metadata;
    }
    const metadataObjects = [this.metadata];
    let klass = this;
    while (klass !== _UI5Element) {
      klass = Object.getPrototypeOf(klass);
      metadataObjects.unshift(klass.metadata);
    }
    const mergedMetadata = merge_default({}, ...metadataObjects);
    this._metadata = new UI5ElementMetadata_default(mergedMetadata);
    return this._metadata;
  }
  get validity() {
    return this._internals?.validity;
  }
  get validationMessage() {
    return this._internals?.validationMessage;
  }
  checkValidity() {
    return this._internals?.checkValidity();
  }
  reportValidity() {
    return this._internals?.reportValidity();
  }
};
UI5Element.metadata = {};
UI5Element.styles = "";
var instanceOfUI5Element = (object) => {
  return "isUI5Element" in object;
};
var UI5Element_default = UI5Element;

// node_modules/@ui5/webcomponents-base/dist/decorators/property.js
var property = (propData) => {
  return (target, propertyKey) => {
    const ctor = target.constructor;
    if (!Object.prototype.hasOwnProperty.call(ctor, "metadata")) {
      ctor.metadata = {};
    }
    const metadata = ctor.metadata;
    if (!metadata.properties) {
      metadata.properties = {};
    }
    const propsMetadata = metadata.properties;
    if (!propsMetadata[propertyKey]) {
      propsMetadata[propertyKey] = propData ?? {};
    }
  };
};
var property_default = property;

// node_modules/@ui5/webcomponents-base/dist/decorators/customElement.js
var customElement = (tagNameOrComponentSettings = {}) => {
  return (target) => {
    if (!Object.prototype.hasOwnProperty.call(target, "metadata")) {
      target.metadata = {};
    }
    if (typeof tagNameOrComponentSettings === "string") {
      target.metadata.tag = tagNameOrComponentSettings;
      return;
    }
    const { tag, languageAware, themeAware, fastNavigation, formAssociated, shadowRootOptions } = tagNameOrComponentSettings;
    target.metadata.tag = tag;
    if (languageAware) {
      target.metadata.languageAware = languageAware;
    }
    if (themeAware) {
      target.metadata.themeAware = themeAware;
    }
    if (fastNavigation) {
      target.metadata.fastNavigation = fastNavigation;
    }
    if (formAssociated) {
      target.metadata.formAssociated = formAssociated;
    }
    if (shadowRootOptions) {
      target.metadata.shadowRootOptions = shadowRootOptions;
    }
    ["renderer", "template", "styles", "dependencies"].forEach((customElementEntity) => {
      const customElementEntityValue = tagNameOrComponentSettings[customElementEntity];
      customElementEntityValue && Object.defineProperty(target, customElementEntity, {
        get: () => tagNameOrComponentSettings[customElementEntity]
      });
    });
  };
};
var customElement_default = customElement;

export {
  getCustomElementsScopingSuffix,
  getEffectiveScopingSuffixForTag,
  getScopedVarName,
  addCustomCSS,
  arraysAreEqual_default,
  executeTemplate_default,
  submitForm,
  resetForm,
  instanceOfUI5Element,
  UI5Element_default,
  property_default,
  customElement_default
};
//# sourceMappingURL=chunk-V2NLQCH3.js.map
