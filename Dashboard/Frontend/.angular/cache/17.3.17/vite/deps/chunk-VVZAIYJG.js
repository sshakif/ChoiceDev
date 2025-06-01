import {
  require_react_dom
} from "./chunk-VH4AQR4N.js";
import {
  require_react
} from "./chunk-XUO2ZGPG.js";
import {
  AvatarSize_default,
  IllustrationMessageType_default,
  TableOverflowMode_default,
  TableSelectionMode_default,
  WrappingType_default,
  favorite_default,
  filter_default,
  pushpin_off_default,
  pushpin_on_default,
  registerIllustration,
  sys_help_2_default,
  unfavorite_default
} from "./chunk-FVMHNLYZ.js";
import {
  slim_arrow_down_default,
  slim_arrow_up_default
} from "./chunk-66SXCUXY.js";
import {
  slim_arrow_left_default
} from "./chunk-OK6GZDE6.js";
import {
  TitleLevel_default
} from "./chunk-6JP3GOO6.js";
import {
  error_default,
  information_default,
  sys_enter_2_default
} from "./chunk-TS24KFZD.js";
import {
  navigation_down_arrow_default,
  navigation_right_arrow_default
} from "./chunk-PK5WCAQQ.js";
import {
  circle_task_2_default
} from "./chunk-L3KJOGNW.js";
import {
  search_default
} from "./chunk-4XPYAZBG.js";
import {
  IM_SUBTITLE_UNABLETOLOAD,
  IM_TITLE_UNABLETOLOAD
} from "./chunk-G4NX2KR4.js";
import {
  ListItemType_default,
  ListSelectionMode_default,
  ListSeparator_default
} from "./chunk-NJBEKUUC.js";
import {
  overflow_default
} from "./chunk-GJIVVNB4.js";
import {
  slim_arrow_right_default
} from "./chunk-A6RKWSET.js";
import {
  decline_default
} from "./chunk-BYHFJD2T.js";
import {
  PopoverHorizontalAlign_default,
  PopoverPlacement_default
} from "./chunk-63IT5AAH.js";
import {
  ButtonDesign_default
} from "./chunk-THWQMO7Z.js";
import {
  alert_default
} from "./chunk-CDCWNX5W.js";
import {
  MediaRange_default,
  PopupAccessibleRole_default
} from "./chunk-B3EHYJGE.js";
import {
  ValueState_default
} from "./chunk-OMRI665N.js";
import {
  ARIA_LABEL_EMPTY_CELL,
  VALUE_STATE_ERROR,
  VALUE_STATE_INFORMATION,
  VALUE_STATE_SUCCESS,
  VALUE_STATE_WARNING
} from "./chunk-U6TJ47RH.js";
import {
  IconMode_default
} from "./chunk-P5SJUC57.js";
import {
  isAndroid,
  isChrome,
  isCombi,
  isDesktop,
  isFirefox,
  isIOS,
  isMac,
  isPhone,
  isSafari,
  isTablet,
  supportsTouch
} from "./chunk-ECUZOJV2.js";
import {
  ICON_COLLAPSE_GROUP,
  ICON_DOWN,
  ICON_EXPAND_GROUP,
  ICON_GROUP_2,
  ICON_SORT_ASCENDING,
  ICON_SORT_DESCENDING,
  ICON_UP
} from "./chunk-5HFBG63G.js";
import {
  registerIcon
} from "./chunk-XOBH4D6P.js";
import {
  attachLanguageChange,
  detachLanguageChange,
  getI18nBundle,
  i18nBundle_default
} from "./chunk-22ISB74T.js";
import {
  addCustomCSS,
  getCustomElementsScopingSuffix,
  getEffectiveScopingSuffixForTag,
  getScopedVarName
} from "./chunk-V2NLQCH3.js";
import {
  attachBoot,
  attachThemeLoaded,
  detachThemeLoaded,
  getTheme
} from "./chunk-FE3LTLOF.js";
import {
  EventProvider_default,
  createOrUpdateStyle,
  init_EventProvider,
  init_ManagedStyles,
  removeStyle
} from "./chunk-D5EWR56T.js";
import {
  __async,
  __commonJS,
  __export,
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-OQOTISLC.js";

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React3 = require_react();
        var ReactSharedInternals = React3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState31 = React3.useState, useEffect41 = React3.useEffect, useLayoutEffect3 = React3.useLayoutEffect, useDebugValue = React3.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore4(subscribe4, getSnapshot4, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React3.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot4();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot4();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState31({
            inst: {
              value,
              getSnapshot: getSnapshot4
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect3(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot4;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe4, value, getSnapshot4]);
          useEffect41(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe4(handleStoreChange);
          }, [subscribe4]);
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe4, getSnapshot4, getServerSnapshot) {
          return getSnapshot4();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore4;
        var useSyncExternalStore$2 = React3.useSyncExternalStore !== void 0 ? React3.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React3 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name24, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name24;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name24 = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name24 ? describeBuiltInComponentFrame(name24) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement14(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name24 = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name24) {
                return "\n\nCheck the render method of `" + name24 + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement14(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement14(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement14(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name24 = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name24, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-table/dist/react-table.development.js
var require_react_table_development = __commonJS({
  "node_modules/react-table/dist/react-table.development.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = global || self, factory(global.ReactTable = {}, global.React));
    })(exports, function(exports2, React3) {
      "use strict";
      React3 = React3 && Object.prototype.hasOwnProperty.call(React3, "default") ? React3["default"] : React3;
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self2 = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self2, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      var renderErr = "Renderer Error ☝️";
      var actions3 = {
        init: "init"
      };
      var defaultRenderer = function defaultRenderer2(_ref) {
        var _ref$value = _ref.value, value = _ref$value === void 0 ? "" : _ref$value;
        return value;
      };
      var emptyRenderer = function emptyRenderer2() {
        return React3.createElement(React3.Fragment, null, " ");
      };
      var defaultColumn = {
        Cell: defaultRenderer,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function mergeProps() {
        for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
          propList[_key] = arguments[_key];
        }
        return propList.reduce(function(props, next) {
          var style = next.style, className = next.className, rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);
          props = _extends({}, props, {}, rest);
          if (style) {
            props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
          }
          if (className) {
            props.className = props.className ? props.className + " " + className : className;
          }
          if (props.className === "") {
            delete props.className;
          }
          return props;
        }, {});
      }
      function handlePropGetter(prevProps, userProps, meta) {
        if (typeof userProps === "function") {
          return handlePropGetter({}, userProps(prevProps, meta));
        }
        if (Array.isArray(userProps)) {
          return mergeProps.apply(void 0, [prevProps].concat(userProps));
        }
        return mergeProps(prevProps, userProps);
      }
      var makePropGetter = function makePropGetter2(hooks, meta) {
        if (meta === void 0) {
          meta = {};
        }
        return function(userProps) {
          if (userProps === void 0) {
            userProps = {};
          }
          return [].concat(hooks, [userProps]).reduce(function(prev, next) {
            return handlePropGetter(prev, next, _extends({}, meta, {
              userProps
            }));
          }, {});
        };
      };
      var reduceHooks = function reduceHooks2(hooks, initial, meta, allowUndefined) {
        if (meta === void 0) {
          meta = {};
        }
        return hooks.reduce(function(prev, next) {
          var nextValue = next(prev, meta);
          {
            if (!allowUndefined && typeof nextValue === "undefined") {
              console.info(next);
              throw new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
            }
          }
          return nextValue;
        }, initial);
      };
      var loopHooks = function loopHooks2(hooks, context, meta) {
        if (meta === void 0) {
          meta = {};
        }
        return hooks.forEach(function(hook) {
          var nextValue = hook(context, meta);
          {
            if (typeof nextValue !== "undefined") {
              console.info(hook, nextValue);
              throw new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
            }
          }
        });
      };
      function ensurePluginOrder(plugins, befores, pluginName2, afters) {
        if (afters) {
          throw new Error('Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ' + pluginName2 + ")");
        }
        var pluginIndex = plugins.findIndex(function(plugin) {
          return plugin.pluginName === pluginName2;
        });
        if (pluginIndex === -1) {
          {
            throw new Error('The plugin "' + pluginName2 + `" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ` + pluginName2 + ".pluginName = '" + pluginName2 + "'\n");
          }
        }
        befores.forEach(function(before) {
          var beforeIndex = plugins.findIndex(function(plugin) {
            return plugin.pluginName === before;
          });
          if (beforeIndex > -1 && beforeIndex > pluginIndex) {
            {
              throw new Error("React Table: The " + pluginName2 + " plugin hook must be placed after the " + before + " plugin hook!");
            }
          }
        });
      }
      function functionalUpdate(updater, old) {
        return typeof updater === "function" ? updater(old) : updater;
      }
      function useGetLatest(obj) {
        var ref = React3.useRef();
        ref.current = obj;
        return React3.useCallback(function() {
          return ref.current;
        }, []);
      }
      var safeUseLayoutEffect = typeof document !== "undefined" ? React3.useLayoutEffect : React3.useEffect;
      function useMountedLayoutEffect(fn, deps) {
        var mountedRef = React3.useRef(false);
        safeUseLayoutEffect(function() {
          if (mountedRef.current) {
            fn();
          }
          mountedRef.current = true;
        }, deps);
      }
      function useAsyncDebounce(defaultFn, defaultWait) {
        if (defaultWait === void 0) {
          defaultWait = 0;
        }
        var debounceRef = React3.useRef({});
        var getDefaultFn = useGetLatest(defaultFn);
        var getDefaultWait = useGetLatest(defaultWait);
        return React3.useCallback(
          function() {
            var _ref2 = _asyncToGenerator(
              regeneratorRuntime.mark(function _callee2() {
                var _len2, args, _key2, _args2 = arguments;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                          args[_key2] = _args2[_key2];
                        }
                        if (!debounceRef.current.promise) {
                          debounceRef.current.promise = new Promise(function(resolve, reject) {
                            debounceRef.current.resolve = resolve;
                            debounceRef.current.reject = reject;
                          });
                        }
                        if (debounceRef.current.timeout) {
                          clearTimeout(debounceRef.current.timeout);
                        }
                        debounceRef.current.timeout = setTimeout(
                          _asyncToGenerator(
                            regeneratorRuntime.mark(function _callee() {
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      delete debounceRef.current.timeout;
                                      _context.prev = 1;
                                      _context.t0 = debounceRef.current;
                                      _context.next = 5;
                                      return getDefaultFn().apply(void 0, args);
                                    case 5:
                                      _context.t1 = _context.sent;
                                      _context.t0.resolve.call(_context.t0, _context.t1);
                                      _context.next = 12;
                                      break;
                                    case 9:
                                      _context.prev = 9;
                                      _context.t2 = _context["catch"](1);
                                      debounceRef.current.reject(_context.t2);
                                    case 12:
                                      _context.prev = 12;
                                      delete debounceRef.current.promise;
                                      return _context.finish(12);
                                    case 15:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee, null, [[1, 9, 12, 15]]);
                            })
                          ),
                          getDefaultWait()
                        );
                        return _context2.abrupt("return", debounceRef.current.promise);
                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })
            );
            return function() {
              return _ref2.apply(this, arguments);
            };
          }(),
          [getDefaultFn, getDefaultWait]
        );
      }
      function makeRenderer2(instance, column, meta) {
        if (meta === void 0) {
          meta = {};
        }
        return function(type, userProps) {
          if (userProps === void 0) {
            userProps = {};
          }
          var Comp = typeof type === "string" ? column[type] : type;
          if (typeof Comp === "undefined") {
            console.info(column);
            throw new Error(renderErr);
          }
          return flexRender(Comp, _extends({}, instance, {
            column
          }, meta, {}, userProps));
        };
      }
      function flexRender(Comp, props) {
        return isReactComponent(Comp) ? React3.createElement(Comp, props) : Comp;
      }
      function isReactComponent(component) {
        return isClassComponent(component) || typeof component === "function" || isExoticComponent(component);
      }
      function isClassComponent(component) {
        return typeof component === "function" && function() {
          var proto = Object.getPrototypeOf(component);
          return proto.prototype && proto.prototype.isReactComponent;
        }();
      }
      function isExoticComponent(component) {
        return typeof component === "object" && typeof component.$$typeof === "symbol" && ["react.memo", "react.forward_ref"].includes(component.$$typeof.description);
      }
      function linkColumnStructure(columns6, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columns6.map(function(column) {
          column = _extends({}, column, {
            parent,
            depth
          });
          assignColumnAccessor(column);
          if (column.columns) {
            column.columns = linkColumnStructure(column.columns, column, depth + 1);
          }
          return column;
        });
      }
      function flattenColumns(columns6) {
        return flattenBy(columns6, "columns");
      }
      function assignColumnAccessor(column) {
        var id = column.id, accessor = column.accessor, Header4 = column.Header;
        if (typeof accessor === "string") {
          id = id || accessor;
          var accessorPath = accessor.split(".");
          accessor = function accessor2(row) {
            return getBy2(row, accessorPath);
          };
        }
        if (!id && typeof Header4 === "string" && Header4) {
          id = Header4;
        }
        if (!id && column.columns) {
          console.error(column);
          throw new Error('A column ID (or unique "Header" value) is required!');
        }
        if (!id) {
          console.error(column);
          throw new Error("A column ID (or string accessor) is required!");
        }
        Object.assign(column, {
          id,
          accessor
        });
        return column;
      }
      function decorateColumn(column, userDefaultColumn) {
        if (!userDefaultColumn) {
          throw new Error();
        }
        Object.assign(column, _extends({
          // Make sure there is a fallback header, just in case
          Header: emptyRenderer,
          Footer: emptyRenderer
        }, defaultColumn, {}, userDefaultColumn, {}, column));
        Object.assign(column, {
          originalWidth: column.width
        });
        return column;
      }
      function makeHeaderGroups(allColumns2, defaultColumn2, additionalHeaderProperties) {
        if (additionalHeaderProperties === void 0) {
          additionalHeaderProperties = function additionalHeaderProperties2() {
            return {};
          };
        }
        var headerGroups = [];
        var scanColumns = allColumns2;
        var uid = 0;
        var getUID = function getUID2() {
          return uid++;
        };
        var _loop = function _loop2() {
          var headerGroup = {
            headers: []
          };
          var parentColumns = [];
          var hasParents = scanColumns.some(function(d) {
            return d.parent;
          });
          scanColumns.forEach(function(column) {
            var latestParentColumn = [].concat(parentColumns).reverse()[0];
            var newParent;
            if (hasParents) {
              if (column.parent) {
                newParent = _extends({}, column.parent, {
                  originalId: column.parent.id,
                  id: column.parent.id + "_" + getUID(),
                  headers: [column]
                }, additionalHeaderProperties(column));
              } else {
                var originalId = column.id + "_placeholder";
                newParent = decorateColumn(_extends({
                  originalId,
                  id: column.id + "_placeholder_" + getUID(),
                  placeholderOf: column,
                  headers: [column]
                }, additionalHeaderProperties(column)), defaultColumn2);
              }
              if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
                latestParentColumn.headers.push(column);
              } else {
                parentColumns.push(newParent);
              }
            }
            headerGroup.headers.push(column);
          });
          headerGroups.push(headerGroup);
          scanColumns = parentColumns;
        };
        while (scanColumns.length) {
          _loop();
        }
        return headerGroups.reverse();
      }
      var pathObjCache2 = /* @__PURE__ */ new Map();
      function getBy2(obj, path, def) {
        if (!path) {
          return obj;
        }
        var cacheKey = typeof path === "function" ? path : JSON.stringify(path);
        var pathObj = pathObjCache2.get(cacheKey) || function() {
          var pathObj2 = makePathArray2(path);
          pathObjCache2.set(cacheKey, pathObj2);
          return pathObj2;
        }();
        var val;
        try {
          val = pathObj.reduce(function(cursor, pathPart) {
            return cursor[pathPart];
          }, obj);
        } catch (e) {
        }
        return typeof val !== "undefined" ? val : def;
      }
      function getFirstDefined() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        for (var i = 0; i < args.length; i += 1) {
          if (typeof args[i] !== "undefined") {
            return args[i];
          }
        }
      }
      function isFunction(a) {
        if (typeof a === "function") {
          return a;
        }
      }
      function flattenBy(arr, key) {
        var flat = [];
        var recurse = function recurse2(arr2) {
          arr2.forEach(function(d) {
            if (!d[key]) {
              flat.push(d);
            } else {
              recurse2(d[key]);
            }
          });
        };
        recurse(arr);
        return flat;
      }
      function expandRows(rows, _ref) {
        var manualExpandedKey = _ref.manualExpandedKey, expanded = _ref.expanded, _ref$expandSubRows = _ref.expandSubRows, expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
        var expandedRows = [];
        var handleRow = function handleRow2(row, addToExpandedRows) {
          if (addToExpandedRows === void 0) {
            addToExpandedRows = true;
          }
          row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
          row.canExpand = row.subRows && !!row.subRows.length;
          if (addToExpandedRows) {
            expandedRows.push(row);
          }
          if (row.subRows && row.subRows.length && row.isExpanded) {
            row.subRows.forEach(function(row2) {
              return handleRow2(row2, expandSubRows);
            });
          }
        };
        rows.forEach(function(row) {
          return handleRow(row);
        });
        return expandedRows;
      }
      function getFilterMethod(filter, userFilterTypes, filterTypes2) {
        return isFunction(filter) || userFilterTypes[filter] || filterTypes2[filter] || filterTypes2.text;
      }
      function shouldAutoRemoveFilter(autoRemove, value, column) {
        return autoRemove ? autoRemove(value, column) : typeof value === "undefined";
      }
      function unpreparedAccessWarning() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var passiveSupported = null;
      function passiveEventSupported() {
        if (typeof passiveSupported === "boolean") return passiveSupported;
        var supported = false;
        try {
          var options = {
            get passive() {
              supported = true;
              return false;
            }
          };
          window.addEventListener("test", null, options);
          window.removeEventListener("test", null, options);
        } catch (err) {
          supported = false;
        }
        passiveSupported = supported;
        return passiveSupported;
      }
      var reOpenBracket2 = /\[/g;
      var reCloseBracket2 = /\]/g;
      function makePathArray2(obj) {
        return flattenDeep2(obj).map(function(d) {
          return String(d).replace(".", "_");
        }).join(".").replace(reOpenBracket2, ".").replace(reCloseBracket2, "").split(".");
      }
      function flattenDeep2(arr, newArr) {
        if (newArr === void 0) {
          newArr = [];
        }
        if (!Array.isArray(arr)) {
          newArr.push(arr);
        } else {
          for (var i = 0; i < arr.length; i += 1) {
            flattenDeep2(arr[i], newArr);
          }
        }
        return newArr;
      }
      var defaultGetTableProps = function defaultGetTableProps2(props) {
        return _extends({
          role: "table"
        }, props);
      };
      var defaultGetTableBodyProps = function defaultGetTableBodyProps2(props) {
        return _extends({
          role: "rowgroup"
        }, props);
      };
      var defaultGetHeaderProps = function defaultGetHeaderProps2(props, _ref) {
        var column = _ref.column;
        return _extends({
          key: "header_" + column.id,
          colSpan: column.totalVisibleHeaderCount,
          role: "columnheader"
        }, props);
      };
      var defaultGetFooterProps = function defaultGetFooterProps2(props, _ref2) {
        var column = _ref2.column;
        return _extends({
          key: "footer_" + column.id,
          colSpan: column.totalVisibleHeaderCount
        }, props);
      };
      var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps2(props, _ref3) {
        var index = _ref3.index;
        return _extends({
          key: "headerGroup_" + index,
          role: "row"
        }, props);
      };
      var defaultGetFooterGroupProps = function defaultGetFooterGroupProps2(props, _ref4) {
        var index = _ref4.index;
        return _extends({
          key: "footerGroup_" + index
        }, props);
      };
      var defaultGetRowProps = function defaultGetRowProps2(props, _ref5) {
        var row = _ref5.row;
        return _extends({
          key: "row_" + row.id,
          role: "row"
        }, props);
      };
      var defaultGetCellProps = function defaultGetCellProps2(props, _ref6) {
        var cell = _ref6.cell;
        return _extends({
          key: "cell_" + cell.row.id + "_" + cell.column.id,
          role: "cell"
        }, props);
      };
      function makeDefaultPluginHooks() {
        return {
          useOptions: [],
          stateReducers: [],
          useControlledState: [],
          columns: [],
          columnsDeps: [],
          allColumns: [],
          allColumnsDeps: [],
          accessValue: [],
          materializedColumns: [],
          materializedColumnsDeps: [],
          useInstanceAfterData: [],
          visibleColumns: [],
          visibleColumnsDeps: [],
          headerGroups: [],
          headerGroupsDeps: [],
          useInstanceBeforeDimensions: [],
          useInstance: [],
          prepareRow: [],
          getTableProps: [defaultGetTableProps],
          getTableBodyProps: [defaultGetTableBodyProps],
          getHeaderGroupProps: [defaultGetHeaderGroupProps],
          getFooterGroupProps: [defaultGetFooterGroupProps],
          getHeaderProps: [defaultGetHeaderProps],
          getFooterProps: [defaultGetFooterProps],
          getRowProps: [defaultGetRowProps],
          getCellProps: [defaultGetCellProps],
          useFinalInstance: []
        };
      }
      actions3.resetHiddenColumns = "resetHiddenColumns";
      actions3.toggleHideColumn = "toggleHideColumn";
      actions3.setHiddenColumns = "setHiddenColumns";
      actions3.toggleHideAllColumns = "toggleHideAllColumns";
      var useColumnVisibility = function useColumnVisibility2(hooks) {
        hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
        hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
        hooks.stateReducers.push(reducer);
        hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
        hooks.headerGroupsDeps.push(function(deps, _ref) {
          var instance = _ref.instance;
          return [].concat(deps, [instance.state.hiddenColumns]);
        });
        hooks.useInstance.push(useInstance);
      };
      useColumnVisibility.pluginName = "useColumnVisibility";
      var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps2(props, _ref2) {
        var column = _ref2.column;
        return [props, {
          onChange: function onChange(e) {
            column.toggleHidden(!e.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: column.isVisible,
          title: "Toggle Column Visible"
        }];
      };
      var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps2(props, _ref3) {
        var instance = _ref3.instance;
        return [props, {
          onChange: function onChange(e) {
            instance.toggleHideAllColumns(!e.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
          title: "Toggle All Columns Hidden",
          indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
        }];
      };
      function reducer(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            hiddenColumns: []
          }, state);
        }
        if (action.type === actions3.resetHiddenColumns) {
          return _extends({}, state, {
            hiddenColumns: instance.initialState.hiddenColumns || []
          });
        }
        if (action.type === actions3.toggleHideColumn) {
          var should = typeof action.value !== "undefined" ? action.value : !state.hiddenColumns.includes(action.columnId);
          var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function(d) {
            return d !== action.columnId;
          });
          return _extends({}, state, {
            hiddenColumns
          });
        }
        if (action.type === actions3.setHiddenColumns) {
          return _extends({}, state, {
            hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
          });
        }
        if (action.type === actions3.toggleHideAllColumns) {
          var shouldAll = typeof action.value !== "undefined" ? action.value : !state.hiddenColumns.length;
          return _extends({}, state, {
            hiddenColumns: shouldAll ? instance.allColumns.map(function(d) {
              return d.id;
            }) : []
          });
        }
      }
      function useInstanceBeforeDimensions(instance) {
        var headers = instance.headers, hiddenColumns = instance.state.hiddenColumns;
        var isMountedRef = React3.useRef(false);
        if (!isMountedRef.current) ;
        var handleColumn = function handleColumn2(column, parentVisible) {
          column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
          var totalVisibleHeaderCount2 = 0;
          if (column.headers && column.headers.length) {
            column.headers.forEach(function(subColumn) {
              return totalVisibleHeaderCount2 += handleColumn2(subColumn, column.isVisible);
            });
          } else {
            totalVisibleHeaderCount2 = column.isVisible ? 1 : 0;
          }
          column.totalVisibleHeaderCount = totalVisibleHeaderCount2;
          return totalVisibleHeaderCount2;
        };
        var totalVisibleHeaderCount = 0;
        headers.forEach(function(subHeader) {
          return totalVisibleHeaderCount += handleColumn(subHeader, true);
        });
      }
      function useInstance(instance) {
        var columns6 = instance.columns, flatHeaders = instance.flatHeaders, dispatch = instance.dispatch, allColumns2 = instance.allColumns, getHooks = instance.getHooks, hiddenColumns = instance.state.hiddenColumns, _instance$autoResetHi = instance.autoResetHiddenColumns, autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
        var getInstance = useGetLatest(instance);
        var allColumnsHidden = allColumns2.length === hiddenColumns.length;
        var toggleHideColumn = React3.useCallback(function(columnId, value) {
          return dispatch({
            type: actions3.toggleHideColumn,
            columnId,
            value
          });
        }, [dispatch]);
        var setHiddenColumns = React3.useCallback(function(value) {
          return dispatch({
            type: actions3.setHiddenColumns,
            value
          });
        }, [dispatch]);
        var toggleHideAllColumns = React3.useCallback(function(value) {
          return dispatch({
            type: actions3.toggleHideAllColumns,
            value
          });
        }, [dispatch]);
        var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
          instance: getInstance()
        });
        flatHeaders.forEach(function(column) {
          column.toggleHidden = function(value) {
            dispatch({
              type: actions3.toggleHideColumn,
              columnId: column.id,
              value
            });
          };
          column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
            instance: getInstance(),
            column
          });
        });
        var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
        useMountedLayoutEffect(function() {
          if (getAutoResetHiddenColumns()) {
            dispatch({
              type: actions3.resetHiddenColumns
            });
          }
        }, [dispatch, columns6]);
        Object.assign(instance, {
          allColumnsHidden,
          toggleHideColumn,
          setHiddenColumns,
          toggleHideAllColumns,
          getToggleHideAllColumnsProps
        });
      }
      var defaultInitialState = {};
      var defaultColumnInstance = {};
      var defaultReducer = function defaultReducer2(state, action, prevState) {
        return state;
      };
      var defaultGetSubRows = function defaultGetSubRows2(row, index) {
        return row.subRows || [];
      };
      var defaultGetRowId = function defaultGetRowId2(row, index, parent) {
        return "" + (parent ? [parent.id, index].join(".") : index);
      };
      var defaultUseControlledState = function defaultUseControlledState2(d) {
        return d;
      };
      function applyDefaults(props) {
        var _props$initialState = props.initialState, initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState, _props$defaultColumn = props.defaultColumn, defaultColumn2 = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn, _props$getSubRows = props.getSubRows, getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows, _props$getRowId = props.getRowId, getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId, _props$stateReducer = props.stateReducer, stateReducer2 = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer, _props$useControlledS = props.useControlledState, useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS, rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return _extends({}, rest, {
          initialState,
          defaultColumn: defaultColumn2,
          getSubRows,
          getRowId,
          stateReducer: stateReducer2,
          useControlledState
        });
      }
      var useTable2 = function useTable3(props) {
        for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          plugins[_key - 1] = arguments[_key];
        }
        props = applyDefaults(props);
        plugins = [useColumnVisibility].concat(plugins);
        var instanceRef = React3.useRef({});
        var getInstance = useGetLatest(instanceRef.current);
        Object.assign(getInstance(), _extends({}, props, {
          plugins,
          hooks: makeDefaultPluginHooks()
        }));
        plugins.filter(Boolean).forEach(function(plugin) {
          plugin(getInstance().hooks);
        });
        var getHooks = useGetLatest(getInstance().hooks);
        getInstance().getHooks = getHooks;
        delete getInstance().hooks;
        Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));
        var _getInstance = getInstance(), data = _getInstance.data, userColumns = _getInstance.columns, initialState = _getInstance.initialState, defaultColumn2 = _getInstance.defaultColumn, getSubRows = _getInstance.getSubRows, getRowId = _getInstance.getRowId, stateReducer2 = _getInstance.stateReducer, useControlledState = _getInstance.useControlledState;
        var getStateReducer = useGetLatest(stateReducer2);
        var reducer2 = React3.useCallback(function(state2, action) {
          if (!action.type) {
            console.info({
              action
            });
            throw new Error("Unknown Action 👆");
          }
          return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function(s, handler) {
            return handler(s, action, state2, getInstance()) || s;
          }, state2);
        }, [getHooks, getStateReducer, getInstance]);
        var _React$useReducer = React3.useReducer(reducer2, void 0, function() {
          return reducer2(initialState, {
            type: actions3.init
          });
        }), reducerState = _React$useReducer[0], dispatch = _React$useReducer[1];
        var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
          instance: getInstance()
        });
        Object.assign(getInstance(), {
          state,
          dispatch
        });
        var columns6 = React3.useMemo(function() {
          return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
            instance: getInstance()
          }));
        }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
          instance: getInstance()
        })));
        getInstance().columns = columns6;
        var allColumns2 = React3.useMemo(function() {
          return reduceHooks(getHooks().allColumns, flattenColumns(columns6), {
            instance: getInstance()
          }).map(assignColumnAccessor);
        }, [columns6, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
          instance: getInstance()
        })));
        getInstance().allColumns = allColumns2;
        var _React$useMemo = React3.useMemo(function() {
          var rows2 = [];
          var flatRows2 = [];
          var rowsById2 = {};
          var allColumnsQueue = [].concat(allColumns2);
          while (allColumnsQueue.length) {
            var column = allColumnsQueue.shift();
            accessRowsForColumn({
              data,
              rows: rows2,
              flatRows: flatRows2,
              rowsById: rowsById2,
              column,
              getRowId,
              getSubRows,
              accessValueHooks: getHooks().accessValue,
              getInstance
            });
          }
          return [rows2, flatRows2, rowsById2];
        }, [allColumns2, data, getRowId, getSubRows, getHooks, getInstance]), rows = _React$useMemo[0], flatRows = _React$useMemo[1], rowsById = _React$useMemo[2];
        Object.assign(getInstance(), {
          rows,
          initialRows: [].concat(rows),
          flatRows,
          rowsById
          // materializedColumns,
        });
        loopHooks(getHooks().useInstanceAfterData, getInstance());
        var visibleColumns5 = React3.useMemo(function() {
          return reduceHooks(getHooks().visibleColumns, allColumns2, {
            instance: getInstance()
          }).map(function(d) {
            return decorateColumn(d, defaultColumn2);
          });
        }, [getHooks, allColumns2, getInstance, defaultColumn2].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
          instance: getInstance()
        })));
        allColumns2 = React3.useMemo(function() {
          var columns7 = [].concat(visibleColumns5);
          allColumns2.forEach(function(column) {
            if (!columns7.find(function(d) {
              return d.id === column.id;
            })) {
              columns7.push(column);
            }
          });
          return columns7;
        }, [allColumns2, visibleColumns5]);
        getInstance().allColumns = allColumns2;
        {
          var duplicateColumns = allColumns2.filter(function(column, i) {
            return allColumns2.findIndex(function(d) {
              return d.id === column.id;
            }) !== i;
          });
          if (duplicateColumns.length) {
            console.info(allColumns2);
            throw new Error('Duplicate columns were found with ids: "' + duplicateColumns.map(function(d) {
              return d.id;
            }).join(", ") + '" in the columns array above');
          }
        }
        var headerGroups = React3.useMemo(function() {
          return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns5, defaultColumn2), getInstance());
        }, [getHooks, visibleColumns5, defaultColumn2, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
          instance: getInstance()
        })));
        getInstance().headerGroups = headerGroups;
        var headers = React3.useMemo(function() {
          return headerGroups.length ? headerGroups[0].headers : [];
        }, [headerGroups]);
        getInstance().headers = headers;
        getInstance().flatHeaders = headerGroups.reduce(function(all, headerGroup) {
          return [].concat(all, headerGroup.headers);
        }, []);
        loopHooks(getHooks().useInstanceBeforeDimensions, getInstance());
        var visibleColumnsDep = visibleColumns5.filter(function(d) {
          return d.isVisible;
        }).map(function(d) {
          return d.id;
        }).sort().join("_");
        visibleColumns5 = React3.useMemo(
          function() {
            return visibleColumns5.filter(function(d) {
              return d.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [visibleColumns5, visibleColumnsDep]
        );
        getInstance().visibleColumns = visibleColumns5;
        var _calculateHeaderWidth = calculateHeaderWidths(headers), totalColumnsMinWidth = _calculateHeaderWidth[0], totalColumnsWidth = _calculateHeaderWidth[1], totalColumnsMaxWidth = _calculateHeaderWidth[2];
        getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
        getInstance().totalColumnsWidth = totalColumnsWidth;
        getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
        loopHooks(getHooks().useInstance, getInstance());
        [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function(column) {
          column.render = makeRenderer2(getInstance(), column);
          column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
            instance: getInstance(),
            column
          });
          column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
            instance: getInstance(),
            column
          });
        });
        getInstance().headerGroups = React3.useMemo(function() {
          return headerGroups.filter(function(headerGroup, i) {
            headerGroup.headers = headerGroup.headers.filter(function(column) {
              var recurse = function recurse2(headers2) {
                return headers2.filter(function(column2) {
                  if (column2.headers) {
                    return recurse2(column2.headers);
                  }
                  return column2.isVisible;
                }).length;
              };
              if (column.headers) {
                return recurse(column.headers);
              }
              return column.isVisible;
            });
            if (headerGroup.headers.length) {
              headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
                instance: getInstance(),
                headerGroup,
                index: i
              });
              headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
                instance: getInstance(),
                headerGroup,
                index: i
              });
              return true;
            }
            return false;
          });
        }, [headerGroups, getInstance, getHooks]);
        getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse();
        getInstance().prepareRow = React3.useCallback(function(row) {
          row.getRowProps = makePropGetter(getHooks().getRowProps, {
            instance: getInstance(),
            row
          });
          row.allCells = allColumns2.map(function(column) {
            var value = row.values[column.id];
            var cell = {
              column,
              row,
              value
            };
            cell.getCellProps = makePropGetter(getHooks().getCellProps, {
              instance: getInstance(),
              cell
            });
            cell.render = makeRenderer2(getInstance(), column, {
              row,
              cell,
              value
            });
            return cell;
          });
          row.cells = visibleColumns5.map(function(column) {
            return row.allCells.find(function(cell) {
              return cell.column.id === column.id;
            });
          });
          loopHooks(getHooks().prepareRow, row, {
            instance: getInstance()
          });
        }, [getHooks, getInstance, allColumns2, visibleColumns5]);
        getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
          instance: getInstance()
        });
        getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
          instance: getInstance()
        });
        loopHooks(getHooks().useFinalInstance, getInstance());
        return getInstance();
      };
      function calculateHeaderWidths(headers, left) {
        if (left === void 0) {
          left = 0;
        }
        var sumTotalMinWidth = 0;
        var sumTotalWidth = 0;
        var sumTotalMaxWidth = 0;
        var sumTotalFlexWidth = 0;
        headers.forEach(function(header) {
          var subHeaders = header.headers;
          header.totalLeft = left;
          if (subHeaders && subHeaders.length) {
            var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left), totalMinWidth = _calculateHeaderWidth2[0], totalWidth = _calculateHeaderWidth2[1], totalMaxWidth = _calculateHeaderWidth2[2], totalFlexWidth = _calculateHeaderWidth2[3];
            header.totalMinWidth = totalMinWidth;
            header.totalWidth = totalWidth;
            header.totalMaxWidth = totalMaxWidth;
            header.totalFlexWidth = totalFlexWidth;
          } else {
            header.totalMinWidth = header.minWidth;
            header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
            header.totalMaxWidth = header.maxWidth;
            header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
          }
          if (header.isVisible) {
            left += header.totalWidth;
            sumTotalMinWidth += header.totalMinWidth;
            sumTotalWidth += header.totalWidth;
            sumTotalMaxWidth += header.totalMaxWidth;
            sumTotalFlexWidth += header.totalFlexWidth;
          }
        });
        return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
      }
      function accessRowsForColumn(_ref) {
        var data = _ref.data, rows = _ref.rows, flatRows = _ref.flatRows, rowsById = _ref.rowsById, column = _ref.column, getRowId = _ref.getRowId, getSubRows = _ref.getSubRows, accessValueHooks = _ref.accessValueHooks, getInstance = _ref.getInstance;
        var accessRow = function accessRow2(originalRow, rowIndex, depth, parent, parentRows) {
          if (depth === void 0) {
            depth = 0;
          }
          var original = originalRow;
          var id = getRowId(originalRow, rowIndex, parent);
          var row = rowsById[id];
          if (!row) {
            row = {
              id,
              original,
              index: rowIndex,
              depth,
              cells: [{}]
              // This is a dummy cell
            };
            row.cells.map = unpreparedAccessWarning;
            row.cells.filter = unpreparedAccessWarning;
            row.cells.forEach = unpreparedAccessWarning;
            row.cells[0].getCellProps = unpreparedAccessWarning;
            row.values = {};
            parentRows.push(row);
            flatRows.push(row);
            rowsById[id] = row;
            row.originalSubRows = getSubRows(originalRow, rowIndex);
            if (row.originalSubRows) {
              var subRows = [];
              row.originalSubRows.forEach(function(d, i) {
                return accessRow2(d, i, depth + 1, row, subRows);
              });
              row.subRows = subRows;
            }
          } else if (row.subRows) {
            row.originalSubRows.forEach(function(d, i) {
              return accessRow2(d, i, depth + 1, row);
            });
          }
          if (column.accessor) {
            row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
          }
          row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
            row,
            column,
            instance: getInstance()
          }, true);
        };
        data.forEach(function(originalRow, rowIndex) {
          return accessRow(originalRow, rowIndex, 0, void 0, rows);
        });
      }
      actions3.resetExpanded = "resetExpanded";
      actions3.toggleRowExpanded = "toggleRowExpanded";
      actions3.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var useExpanded2 = function useExpanded3(hooks) {
        hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
        hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
        hooks.stateReducers.push(reducer$1);
        hooks.useInstance.push(useInstance$1);
        hooks.prepareRow.push(prepareRow);
      };
      useExpanded2.pluginName = "useExpanded";
      var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps2(props, _ref) {
        var instance = _ref.instance;
        return [props, {
          onClick: function onClick(e) {
            instance.toggleAllRowsExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle All Rows Expanded"
        }];
      };
      var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps2(props, _ref2) {
        var row = _ref2.row;
        return [props, {
          onClick: function onClick() {
            row.toggleRowExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle Row Expanded"
        }];
      };
      function reducer$1(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            expanded: {}
          }, state);
        }
        if (action.type === actions3.resetExpanded) {
          return _extends({}, state, {
            expanded: instance.initialState.expanded || {}
          });
        }
        if (action.type === actions3.toggleAllRowsExpanded) {
          var value = action.value;
          var rowsById = instance.rowsById;
          var isAllRowsExpanded = Object.keys(rowsById).length === Object.keys(state.expanded).length;
          var expandAll = typeof value !== "undefined" ? value : !isAllRowsExpanded;
          if (expandAll) {
            var expanded = {};
            Object.keys(rowsById).forEach(function(rowId) {
              expanded[rowId] = true;
            });
            return _extends({}, state, {
              expanded
            });
          }
          return _extends({}, state, {
            expanded: {}
          });
        }
        if (action.type === actions3.toggleRowExpanded) {
          var id = action.id, setExpanded = action.value;
          var exists = state.expanded[id];
          var shouldExist = typeof setExpanded !== "undefined" ? setExpanded : !exists;
          if (!exists && shouldExist) {
            var _extends2;
            return _extends({}, state, {
              expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
            });
          } else if (exists && !shouldExist) {
            var _state$expanded = state.expanded, _ = _state$expanded[id], rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));
            return _extends({}, state, {
              expanded: rest
            });
          } else {
            return state;
          }
        }
      }
      function useInstance$1(instance) {
        var data = instance.data, rows = instance.rows, rowsById = instance.rowsById, _instance$manualExpan = instance.manualExpandedKey, manualExpandedKey = _instance$manualExpan === void 0 ? "expanded" : _instance$manualExpan, _instance$paginateExp = instance.paginateExpandedRows, paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp, _instance$expandSubRo = instance.expandSubRows, expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo, _instance$autoResetEx = instance.autoResetExpanded, autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx, getHooks = instance.getHooks, plugins = instance.plugins, expanded = instance.state.expanded, dispatch = instance.dispatch;
        ensurePluginOrder(plugins, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var getAutoResetExpanded = useGetLatest(autoResetExpanded);
        var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);
        if (isAllRowsExpanded) {
          if (Object.keys(rowsById).some(function(id) {
            return !expanded[id];
          })) {
            isAllRowsExpanded = false;
          }
        }
        useMountedLayoutEffect(function() {
          if (getAutoResetExpanded()) {
            dispatch({
              type: actions3.resetExpanded
            });
          }
        }, [dispatch, data]);
        var toggleRowExpanded = React3.useCallback(function(id, value) {
          dispatch({
            type: actions3.toggleRowExpanded,
            id,
            value
          });
        }, [dispatch]);
        var toggleAllRowsExpanded = React3.useCallback(function(value) {
          return dispatch({
            type: actions3.toggleAllRowsExpanded,
            value
          });
        }, [dispatch]);
        var expandedRows = React3.useMemo(function() {
          if (paginateExpandedRows) {
            return expandRows(rows, {
              manualExpandedKey,
              expanded,
              expandSubRows
            });
          }
          return rows;
        }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
        var expandedDepth = React3.useMemo(function() {
          return findExpandedDepth(expanded);
        }, [expanded]);
        var getInstance = useGetLatest(instance);
        var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
          instance: getInstance()
        });
        Object.assign(instance, {
          preExpandedRows: rows,
          expandedRows,
          rows: expandedRows,
          expandedDepth,
          isAllRowsExpanded,
          toggleRowExpanded,
          toggleAllRowsExpanded,
          getToggleAllRowsExpandedProps
        });
      }
      function prepareRow(row, _ref3) {
        var getHooks = _ref3.instance.getHooks, instance = _ref3.instance;
        row.toggleRowExpanded = function(set2) {
          return instance.toggleRowExpanded(row.id, set2);
        };
        row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
          instance,
          row
        });
      }
      function findExpandedDepth(expanded) {
        var maxDepth = 0;
        Object.keys(expanded).forEach(function(id) {
          var splitId = id.split(".");
          maxDepth = Math.max(maxDepth, splitId.length);
        });
        return maxDepth;
      }
      var text = function text2(rows, ids, filterValue2) {
        rows = rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return String(rowValue).toLowerCase().includes(String(filterValue2).toLowerCase());
          });
        });
        return rows;
      };
      text.autoRemove = function(val) {
        return !val;
      };
      var exactText = function exactText2(rows, ids, filterValue2) {
        return rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return rowValue !== void 0 ? String(rowValue).toLowerCase() === String(filterValue2).toLowerCase() : true;
          });
        });
      };
      exactText.autoRemove = function(val) {
        return !val;
      };
      var exactTextCase = function exactTextCase2(rows, ids, filterValue2) {
        return rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return rowValue !== void 0 ? String(rowValue) === String(filterValue2) : true;
          });
        });
      };
      exactTextCase.autoRemove = function(val) {
        return !val;
      };
      var includes = function includes2(rows, ids, filterValue2) {
        return rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return rowValue.includes(filterValue2);
          });
        });
      };
      includes.autoRemove = function(val) {
        return !val || !val.length;
      };
      var includesAll = function includesAll2(rows, ids, filterValue2) {
        return rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return rowValue && rowValue.length && filterValue2.every(function(val) {
              return rowValue.includes(val);
            });
          });
        });
      };
      includesAll.autoRemove = function(val) {
        return !val || !val.length;
      };
      var includesSome = function includesSome2(rows, ids, filterValue2) {
        return rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return rowValue && rowValue.length && filterValue2.some(function(val) {
              return rowValue.includes(val);
            });
          });
        });
      };
      includesSome.autoRemove = function(val) {
        return !val || !val.length;
      };
      var includesValue = function includesValue2(rows, ids, filterValue2) {
        return rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return filterValue2.includes(rowValue);
          });
        });
      };
      includesValue.autoRemove = function(val) {
        return !val || !val.length;
      };
      var exact = function exact2(rows, ids, filterValue2) {
        return rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return rowValue === filterValue2;
          });
        });
      };
      exact.autoRemove = function(val) {
        return typeof val === "undefined";
      };
      var equals = function equals2(rows, ids, filterValue2) {
        return rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return rowValue == filterValue2;
          });
        });
      };
      equals.autoRemove = function(val) {
        return val == null;
      };
      var between = function between2(rows, ids, filterValue2) {
        var _ref = filterValue2 || [], min2 = _ref[0], max2 = _ref[1];
        min2 = typeof min2 === "number" ? min2 : -Infinity;
        max2 = typeof max2 === "number" ? max2 : Infinity;
        if (min2 > max2) {
          var temp = min2;
          min2 = max2;
          max2 = temp;
        }
        return rows.filter(function(row) {
          return ids.some(function(id) {
            var rowValue = row.values[id];
            return rowValue >= min2 && rowValue <= max2;
          });
        });
      };
      between.autoRemove = function(val) {
        return !val || typeof val[0] !== "number" && typeof val[1] !== "number";
      };
      var filterTypes = Object.freeze({
        __proto__: null,
        text,
        exactText,
        exactTextCase,
        includes,
        includesAll,
        includesSome,
        includesValue,
        exact,
        equals,
        between
      });
      actions3.resetFilters = "resetFilters";
      actions3.setFilter = "setFilter";
      actions3.setAllFilters = "setAllFilters";
      var useFilters2 = function useFilters3(hooks) {
        hooks.stateReducers.push(reducer$2);
        hooks.useInstance.push(useInstance$2);
      };
      useFilters2.pluginName = "useFilters";
      function reducer$2(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            filters: []
          }, state);
        }
        if (action.type === actions3.resetFilters) {
          return _extends({}, state, {
            filters: instance.initialState.filters || []
          });
        }
        if (action.type === actions3.setFilter) {
          var columnId = action.columnId, filterValue2 = action.filterValue;
          var allColumns2 = instance.allColumns, userFilterTypes = instance.filterTypes;
          var column = allColumns2.find(function(d) {
            return d.id === columnId;
          });
          if (!column) {
            throw new Error("React-Table: Could not find a column with id: " + columnId);
          }
          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
          var previousfilter = state.filters.find(function(d) {
            return d.id === columnId;
          });
          var newFilter = functionalUpdate(filterValue2, previousfilter && previousfilter.value);
          if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
            return _extends({}, state, {
              filters: state.filters.filter(function(d) {
                return d.id !== columnId;
              })
            });
          }
          if (previousfilter) {
            return _extends({}, state, {
              filters: state.filters.map(function(d) {
                if (d.id === columnId) {
                  return {
                    id: columnId,
                    value: newFilter
                  };
                }
                return d;
              })
            });
          }
          return _extends({}, state, {
            filters: [].concat(state.filters, [{
              id: columnId,
              value: newFilter
            }])
          });
        }
        if (action.type === actions3.setAllFilters) {
          var filters = action.filters;
          var _allColumns = instance.allColumns, _userFilterTypes = instance.filterTypes;
          return _extends({}, state, {
            // Filter out undefined values
            filters: functionalUpdate(filters, state.filters).filter(function(filter) {
              var column2 = _allColumns.find(function(d) {
                return d.id === filter.id;
              });
              var filterMethod2 = getFilterMethod(column2.filter, _userFilterTypes || {}, filterTypes);
              if (shouldAutoRemoveFilter(filterMethod2.autoRemove, filter.value, column2)) {
                return false;
              }
              return true;
            })
          });
        }
      }
      function useInstance$2(instance) {
        var data = instance.data, rows = instance.rows, flatRows = instance.flatRows, rowsById = instance.rowsById, allColumns2 = instance.allColumns, userFilterTypes = instance.filterTypes, manualFilters = instance.manualFilters, _instance$defaultCanF = instance.defaultCanFilter, defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF, disableFilters = instance.disableFilters, filters = instance.state.filters, dispatch = instance.dispatch, _instance$autoResetFi = instance.autoResetFilters, autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
        var setFilter = React3.useCallback(function(columnId, filterValue2) {
          dispatch({
            type: actions3.setFilter,
            columnId,
            filterValue: filterValue2
          });
        }, [dispatch]);
        var setAllFilters = React3.useCallback(function(filters2) {
          dispatch({
            type: actions3.setAllFilters,
            filters: filters2
          });
        }, [dispatch]);
        allColumns2.forEach(function(column) {
          var id = column.id, accessor = column.accessor, columnDefaultCanFilter = column.defaultCanFilter, columnDisableFilters = column.disableFilters;
          column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : void 0, disableFilters === true ? false : void 0, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false);
          column.setFilter = function(val) {
            return setFilter(column.id, val);
          };
          var found = filters.find(function(d) {
            return d.id === id;
          });
          column.filterValue = found && found.value;
        });
        var _React$useMemo = React3.useMemo(function() {
          if (manualFilters || !filters.length) {
            return [rows, flatRows, rowsById];
          }
          var filteredFlatRows2 = [];
          var filteredRowsById2 = {};
          var filterRows = function filterRows2(rows2, depth) {
            if (depth === void 0) {
              depth = 0;
            }
            var filteredRows2 = rows2;
            filteredRows2 = filters.reduce(function(filteredSoFar, _ref) {
              var columnId = _ref.id, filterValue2 = _ref.value;
              var column = allColumns2.find(function(d) {
                return d.id === columnId;
              });
              if (!column) {
                return filteredSoFar;
              }
              if (depth === 0) {
                column.preFilteredRows = filteredSoFar;
              }
              var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
              if (!filterMethod) {
                console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
                return filteredSoFar;
              }
              column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue2);
              return column.filteredRows;
            }, rows2);
            filteredRows2.forEach(function(row) {
              filteredFlatRows2.push(row);
              filteredRowsById2[row.id] = row;
              if (!row.subRows) {
                return;
              }
              row.subRows = row.subRows && row.subRows.length > 0 ? filterRows2(row.subRows, depth + 1) : row.subRows;
            });
            return filteredRows2;
          };
          return [filterRows(rows), filteredFlatRows2, filteredRowsById2];
        }, [manualFilters, filters, rows, flatRows, rowsById, allColumns2, userFilterTypes]), filteredRows = _React$useMemo[0], filteredFlatRows = _React$useMemo[1], filteredRowsById = _React$useMemo[2];
        React3.useMemo(function() {
          var nonFilteredColumns = allColumns2.filter(function(column) {
            return !filters.find(function(d) {
              return d.id === column.id;
            });
          });
          nonFilteredColumns.forEach(function(column) {
            column.preFilteredRows = filteredRows;
            column.filteredRows = filteredRows;
          });
        }, [filteredRows, filters, allColumns2]);
        var getAutoResetFilters = useGetLatest(autoResetFilters);
        useMountedLayoutEffect(function() {
          if (getAutoResetFilters()) {
            dispatch({
              type: actions3.resetFilters
            });
          }
        }, [dispatch, manualFilters ? null : data]);
        Object.assign(instance, {
          preFilteredRows: rows,
          preFilteredFlatRows: flatRows,
          preFilteredRowsById: rowsById,
          filteredRows,
          filteredFlatRows,
          filteredRowsById,
          rows: filteredRows,
          flatRows: filteredFlatRows,
          rowsById: filteredRowsById,
          setFilter,
          setAllFilters
        });
      }
      actions3.resetGlobalFilter = "resetGlobalFilter";
      actions3.setGlobalFilter = "setGlobalFilter";
      var useGlobalFilter2 = function useGlobalFilter3(hooks) {
        hooks.stateReducers.push(reducer$3);
        hooks.useInstance.push(useInstance$3);
      };
      useGlobalFilter2.pluginName = "useGlobalFilter";
      function reducer$3(state, action, previousState, instance) {
        if (action.type === actions3.resetGlobalFilter) {
          return _extends({}, state, {
            globalFilter: instance.initialState.globalFilter || void 0
          });
        }
        if (action.type === actions3.setGlobalFilter) {
          var filterValue2 = action.filterValue;
          var userFilterTypes = instance.userFilterTypes;
          var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
          var newFilter = functionalUpdate(filterValue2, state.globalFilter);
          if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
            var globalFilter = state.globalFilter, stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);
            return stateWithoutGlobalFilter;
          }
          return _extends({}, state, {
            globalFilter: newFilter
          });
        }
      }
      function useInstance$3(instance) {
        var data = instance.data, rows = instance.rows, flatRows = instance.flatRows, rowsById = instance.rowsById, allColumns2 = instance.allColumns, userFilterTypes = instance.filterTypes, globalFilter = instance.globalFilter, manualGlobalFilter = instance.manualGlobalFilter, globalFilterValue = instance.state.globalFilter, dispatch = instance.dispatch, _instance$autoResetGl = instance.autoResetGlobalFilter, autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl, disableGlobalFilter = instance.disableGlobalFilter;
        var setGlobalFilter = React3.useCallback(function(filterValue2) {
          dispatch({
            type: actions3.setGlobalFilter,
            filterValue: filterValue2
          });
        }, [dispatch]);
        var _React$useMemo = React3.useMemo(function() {
          if (manualGlobalFilter || typeof globalFilterValue === "undefined") {
            return [rows, flatRows, rowsById];
          }
          var filteredFlatRows = [];
          var filteredRowsById = {};
          var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);
          if (!filterMethod) {
            console.warn("Could not find a valid 'globalFilter' option.");
            return rows;
          }
          allColumns2.forEach(function(column) {
            var columnDisableGlobalFilter = column.disableGlobalFilter;
            column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : void 0, disableGlobalFilter === true ? false : void 0, true);
          });
          var filterableColumns = allColumns2.filter(function(c) {
            return c.canFilter === true;
          });
          var filterRows = function filterRows2(filteredRows) {
            filteredRows = filterMethod(filteredRows, filterableColumns.map(function(d) {
              return d.id;
            }), globalFilterValue);
            filteredRows.forEach(function(row) {
              filteredFlatRows.push(row);
              filteredRowsById[row.id] = row;
              row.subRows = row.subRows && row.subRows.length ? filterRows2(row.subRows) : row.subRows;
            });
            return filteredRows;
          };
          return [filterRows(rows), filteredFlatRows, filteredRowsById];
        }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns2, rows, flatRows, rowsById, disableGlobalFilter]), globalFilteredRows = _React$useMemo[0], globalFilteredFlatRows = _React$useMemo[1], globalFilteredRowsById = _React$useMemo[2];
        var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
        useMountedLayoutEffect(function() {
          if (getAutoResetGlobalFilter()) {
            dispatch({
              type: actions3.resetGlobalFilter
            });
          }
        }, [dispatch, manualGlobalFilter ? null : data]);
        Object.assign(instance, {
          preGlobalFilteredRows: rows,
          preGlobalFilteredFlatRows: flatRows,
          preGlobalFilteredRowsById: rowsById,
          globalFilteredRows,
          globalFilteredFlatRows,
          globalFilteredRowsById,
          rows: globalFilteredRows,
          flatRows: globalFilteredFlatRows,
          rowsById: globalFilteredRowsById,
          setGlobalFilter,
          disableGlobalFilter
        });
      }
      function sum(values, aggregatedValues) {
        return aggregatedValues.reduce(function(sum2, next) {
          return sum2 + (typeof next === "number" ? next : 0);
        }, 0);
      }
      function min(values) {
        var min2 = values[0] || 0;
        values.forEach(function(value) {
          if (typeof value === "number") {
            min2 = Math.min(min2, value);
          }
        });
        return min2;
      }
      function max(values) {
        var max2 = values[0] || 0;
        values.forEach(function(value) {
          if (typeof value === "number") {
            max2 = Math.max(max2, value);
          }
        });
        return max2;
      }
      function minMax(values) {
        var min2 = values[0] || 0;
        var max2 = values[0] || 0;
        values.forEach(function(value) {
          if (typeof value === "number") {
            min2 = Math.min(min2, value);
            max2 = Math.max(max2, value);
          }
        });
        return min2 + ".." + max2;
      }
      function average(values) {
        return sum(null, values) / values.length;
      }
      function median(values) {
        if (!values.length) {
          return null;
        }
        var mid = Math.floor(values.length / 2);
        var nums = [].concat(values).sort(function(a, b) {
          return a - b;
        });
        return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
      }
      function unique(values) {
        return Array.from(new Set(values).values());
      }
      function uniqueCount(values) {
        return new Set(values).size;
      }
      function count(values) {
        return values.length;
      }
      var aggregations = Object.freeze({
        __proto__: null,
        sum,
        min,
        max,
        minMax,
        average,
        median,
        unique,
        uniqueCount,
        count
      });
      var emptyArray = [];
      var emptyObject = {};
      actions3.resetGroupBy = "resetGroupBy";
      actions3.setGroupBy = "setGroupBy";
      actions3.toggleGroupBy = "toggleGroupBy";
      var useGroupBy2 = function useGroupBy3(hooks) {
        hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
        hooks.stateReducers.push(reducer$4);
        hooks.visibleColumnsDeps.push(function(deps, _ref) {
          var instance = _ref.instance;
          return [].concat(deps, [instance.state.groupBy]);
        });
        hooks.visibleColumns.push(visibleColumns4);
        hooks.useInstance.push(useInstance$4);
        hooks.prepareRow.push(prepareRow$1);
      };
      useGroupBy2.pluginName = "useGroupBy";
      var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps2(props, _ref2) {
        var header = _ref2.header;
        return [props, {
          onClick: header.canGroupBy ? function(e) {
            e.persist();
            header.toggleGroupBy();
          } : void 0,
          style: {
            cursor: header.canGroupBy ? "pointer" : void 0
          },
          title: "Toggle GroupBy"
        }];
      };
      function reducer$4(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            groupBy: []
          }, state);
        }
        if (action.type === actions3.resetGroupBy) {
          return _extends({}, state, {
            groupBy: instance.initialState.groupBy || []
          });
        }
        if (action.type === actions3.setGroupBy) {
          var value = action.value;
          return _extends({}, state, {
            groupBy: value
          });
        }
        if (action.type === actions3.toggleGroupBy) {
          var columnId = action.columnId, setGroupBy = action.value;
          var resolvedGroupBy = typeof setGroupBy !== "undefined" ? setGroupBy : !state.groupBy.includes(columnId);
          if (resolvedGroupBy) {
            return _extends({}, state, {
              groupBy: [].concat(state.groupBy, [columnId])
            });
          }
          return _extends({}, state, {
            groupBy: state.groupBy.filter(function(d) {
              return d !== columnId;
            })
          });
        }
      }
      function visibleColumns4(columns6, _ref3) {
        var groupBy = _ref3.instance.state.groupBy;
        var groupByColumns = groupBy.map(function(g) {
          return columns6.find(function(col) {
            return col.id === g;
          });
        }).filter(Boolean);
        var nonGroupByColumns = columns6.filter(function(col) {
          return !groupBy.includes(col.id);
        });
        columns6 = [].concat(groupByColumns, nonGroupByColumns);
        columns6.forEach(function(column) {
          column.isGrouped = groupBy.includes(column.id);
          column.groupedIndex = groupBy.indexOf(column.id);
        });
        return columns6;
      }
      var defaultUserAggregations = {};
      function useInstance$4(instance) {
        var data = instance.data, rows = instance.rows, flatRows = instance.flatRows, rowsById = instance.rowsById, allColumns2 = instance.allColumns, flatHeaders = instance.flatHeaders, _instance$groupByFn = instance.groupByFn, groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn, manualGroupBy = instance.manualGroupBy, _instance$aggregation = instance.aggregations, userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation, plugins = instance.plugins, groupBy = instance.state.groupBy, dispatch = instance.dispatch, _instance$autoResetGr = instance.autoResetGroupBy, autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr, disableGroupBy = instance.disableGroupBy, defaultCanGroupBy = instance.defaultCanGroupBy, getHooks = instance.getHooks;
        ensurePluginOrder(plugins, ["useColumnOrder", "useFilters"], "useGroupBy");
        var getInstance = useGetLatest(instance);
        allColumns2.forEach(function(column) {
          var accessor = column.accessor, defaultColumnGroupBy = column.defaultGroupBy, columnDisableGroupBy = column.disableGroupBy;
          column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : void 0, disableGroupBy === true ? false : void 0, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);
          if (column.canGroupBy) {
            column.toggleGroupBy = function() {
              return instance.toggleGroupBy(column.id);
            };
          }
          column.Aggregated = column.Aggregated || column.Cell;
        });
        var toggleGroupBy = React3.useCallback(function(columnId, value) {
          dispatch({
            type: actions3.toggleGroupBy,
            columnId,
            value
          });
        }, [dispatch]);
        var setGroupBy = React3.useCallback(function(value) {
          dispatch({
            type: actions3.setGroupBy,
            value
          });
        }, [dispatch]);
        flatHeaders.forEach(function(header) {
          header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
            instance: getInstance(),
            header
          });
        });
        var _React$useMemo = React3.useMemo(function() {
          if (manualGroupBy || !groupBy.length) {
            return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
          }
          var existingGroupBy = groupBy.filter(function(g) {
            return allColumns2.find(function(col) {
              return col.id === g;
            });
          });
          var aggregateRowsToValues = function aggregateRowsToValues2(leafRows, groupedRows3, depth) {
            var values = {};
            allColumns2.forEach(function(column) {
              if (existingGroupBy.includes(column.id)) {
                values[column.id] = groupedRows3[0] ? groupedRows3[0].values[column.id] : null;
                return;
              }
              var aggregateFn = typeof column.aggregate === "function" ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];
              if (aggregateFn) {
                var groupedValues = groupedRows3.map(function(row) {
                  return row.values[column.id];
                });
                var leafValues = leafRows.map(function(row) {
                  var columnValue = row.values[column.id];
                  if (!depth && column.aggregateValue) {
                    var aggregateValueFn = typeof column.aggregateValue === "function" ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];
                    if (!aggregateValueFn) {
                      console.info({
                        column
                      });
                      throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    }
                    columnValue = aggregateValueFn(columnValue, row, column);
                  }
                  return columnValue;
                });
                values[column.id] = aggregateFn(leafValues, groupedValues);
              } else if (column.aggregate) {
                console.info({
                  column
                });
                throw new Error("React Table: Invalid column.aggregate option for column listed above");
              } else {
                values[column.id] = null;
              }
            });
            return values;
          };
          var groupedFlatRows2 = [];
          var groupedRowsById2 = {};
          var onlyGroupedFlatRows2 = [];
          var onlyGroupedRowsById2 = {};
          var nonGroupedFlatRows2 = [];
          var nonGroupedRowsById2 = {};
          var groupUpRecursively = function groupUpRecursively2(rows2, depth, parentId) {
            if (depth === void 0) {
              depth = 0;
            }
            if (depth === existingGroupBy.length) {
              return rows2.map(function(row) {
                return _extends({}, row, {
                  depth
                });
              });
            }
            var columnId = existingGroupBy[depth];
            var rowGroupsMap = groupByFn(rows2, columnId);
            var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function(_ref4, index) {
              var groupByVal = _ref4[0], groupedRows3 = _ref4[1];
              var id = columnId + ":" + groupByVal;
              id = parentId ? parentId + ">" + id : id;
              var subRows = groupUpRecursively2(groupedRows3, depth + 1, id);
              var leafRows = depth ? flattenBy(groupedRows3, "leafRows") : groupedRows3;
              var values = aggregateRowsToValues(leafRows, groupedRows3, depth);
              var row = {
                id,
                isGrouped: true,
                groupByID: columnId,
                groupByVal,
                values,
                subRows,
                leafRows,
                depth,
                index
              };
              subRows.forEach(function(subRow) {
                groupedFlatRows2.push(subRow);
                groupedRowsById2[subRow.id] = subRow;
                if (subRow.isGrouped) {
                  onlyGroupedFlatRows2.push(subRow);
                  onlyGroupedRowsById2[subRow.id] = subRow;
                } else {
                  nonGroupedFlatRows2.push(subRow);
                  nonGroupedRowsById2[subRow.id] = subRow;
                }
              });
              return row;
            });
            return aggregatedGroupedRows;
          };
          var groupedRows2 = groupUpRecursively(rows);
          groupedRows2.forEach(function(subRow) {
            groupedFlatRows2.push(subRow);
            groupedRowsById2[subRow.id] = subRow;
            if (subRow.isGrouped) {
              onlyGroupedFlatRows2.push(subRow);
              onlyGroupedRowsById2[subRow.id] = subRow;
            } else {
              nonGroupedFlatRows2.push(subRow);
              nonGroupedRowsById2[subRow.id] = subRow;
            }
          });
          return [groupedRows2, groupedFlatRows2, groupedRowsById2, onlyGroupedFlatRows2, onlyGroupedRowsById2, nonGroupedFlatRows2, nonGroupedRowsById2];
        }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns2, userAggregations, groupByFn]), groupedRows = _React$useMemo[0], groupedFlatRows = _React$useMemo[1], groupedRowsById = _React$useMemo[2], onlyGroupedFlatRows = _React$useMemo[3], onlyGroupedRowsById = _React$useMemo[4], nonGroupedFlatRows = _React$useMemo[5], nonGroupedRowsById = _React$useMemo[6];
        var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
        useMountedLayoutEffect(function() {
          if (getAutoResetGroupBy()) {
            dispatch({
              type: actions3.resetGroupBy
            });
          }
        }, [dispatch, manualGroupBy ? null : data]);
        Object.assign(instance, {
          preGroupedRows: rows,
          preGroupedFlatRow: flatRows,
          preGroupedRowsById: rowsById,
          groupedRows,
          groupedFlatRows,
          groupedRowsById,
          onlyGroupedFlatRows,
          onlyGroupedRowsById,
          nonGroupedFlatRows,
          nonGroupedRowsById,
          rows: groupedRows,
          flatRows: groupedFlatRows,
          rowsById: groupedRowsById,
          toggleGroupBy,
          setGroupBy
        });
      }
      function prepareRow$1(row) {
        row.allCells.forEach(function(cell) {
          var _row$subRows;
          cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID;
          cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped;
          cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
        });
      }
      function defaultGroupByFn(rows, columnId) {
        return rows.reduce(function(prev, row, i) {
          var resKey = "" + row.values[columnId];
          prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
          prev[resKey].push(row);
          return prev;
        }, {});
      }
      var reSplitAlphaNumeric = /([0-9]+)/gm;
      var alphanumeric = function alphanumeric2(rowA, rowB, columnId) {
        var _getRowValuesByColumn = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn[0], b = _getRowValuesByColumn[1];
        a = toString(a);
        b = toString(b);
        a = a.split(reSplitAlphaNumeric).filter(Boolean);
        b = b.split(reSplitAlphaNumeric).filter(Boolean);
        while (a.length && b.length) {
          var aa = a.shift();
          var bb = b.shift();
          var an = parseInt(aa, 10);
          var bn = parseInt(bb, 10);
          var combo = [an, bn].sort();
          if (isNaN(combo[0])) {
            if (aa > bb) {
              return 1;
            }
            if (bb > aa) {
              return -1;
            }
            continue;
          }
          if (isNaN(combo[1])) {
            return isNaN(an) ? -1 : 1;
          }
          if (an > bn) {
            return 1;
          }
          if (bn > an) {
            return -1;
          }
        }
        return a.length - b.length;
      };
      function datetime(rowA, rowB, columnId) {
        var _getRowValuesByColumn2 = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn2[0], b = _getRowValuesByColumn2[1];
        a = a.getTime();
        b = b.getTime();
        return compareBasic(a, b);
      }
      function basic(rowA, rowB, columnId) {
        var _getRowValuesByColumn3 = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn3[0], b = _getRowValuesByColumn3[1];
        return compareBasic(a, b);
      }
      function string(rowA, rowB, columnId) {
        var _getRowValuesByColumn4 = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn4[0], b = _getRowValuesByColumn4[1];
        a = a.split("").filter(Boolean);
        b = b.split("").filter(Boolean);
        while (a.length && b.length) {
          var aa = a.shift();
          var bb = b.shift();
          var alower = aa.toLowerCase();
          var blower = bb.toLowerCase();
          if (alower > blower) {
            return 1;
          }
          if (blower > alower) {
            return -1;
          }
          if (aa > bb) {
            return 1;
          }
          if (bb > aa) {
            return -1;
          }
          continue;
        }
        return a.length - b.length;
      }
      function number(rowA, rowB, columnId) {
        var _getRowValuesByColumn5 = getRowValuesByColumnID(rowA, rowB, columnId), a = _getRowValuesByColumn5[0], b = _getRowValuesByColumn5[1];
        var replaceNonNumeric = /[^0-9.]/gi;
        a = Number(String(a).replace(replaceNonNumeric, ""));
        b = Number(String(b).replace(replaceNonNumeric, ""));
        return compareBasic(a, b);
      }
      function compareBasic(a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
      }
      function getRowValuesByColumnID(row1, row2, columnId) {
        return [row1.values[columnId], row2.values[columnId]];
      }
      function toString(a) {
        if (typeof a === "number") {
          if (isNaN(a) || a === Infinity || a === -Infinity) {
            return "";
          }
          return String(a);
        }
        if (typeof a === "string") {
          return a;
        }
        return "";
      }
      var sortTypes = Object.freeze({
        __proto__: null,
        alphanumeric,
        datetime,
        basic,
        string,
        number
      });
      actions3.resetSortBy = "resetSortBy";
      actions3.setSortBy = "setSortBy";
      actions3.toggleSortBy = "toggleSortBy";
      actions3.clearSortBy = "clearSortBy";
      defaultColumn.sortType = "alphanumeric";
      defaultColumn.sortDescFirst = false;
      var useSortBy2 = function useSortBy3(hooks) {
        hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
        hooks.stateReducers.push(reducer$5);
        hooks.useInstance.push(useInstance$5);
      };
      useSortBy2.pluginName = "useSortBy";
      var defaultGetSortByToggleProps = function defaultGetSortByToggleProps2(props, _ref) {
        var instance = _ref.instance, column = _ref.column;
        var _instance$isMultiSort = instance.isMultiSortEvent, isMultiSortEvent = _instance$isMultiSort === void 0 ? function(e) {
          return e.shiftKey;
        } : _instance$isMultiSort;
        return [props, {
          onClick: column.canSort ? function(e) {
            e.persist();
            column.toggleSortBy(void 0, !instance.disableMultiSort && isMultiSortEvent(e));
          } : void 0,
          style: {
            cursor: column.canSort ? "pointer" : void 0
          },
          title: column.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function reducer$5(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            sortBy: []
          }, state);
        }
        if (action.type === actions3.resetSortBy) {
          return _extends({}, state, {
            sortBy: instance.initialState.sortBy || []
          });
        }
        if (action.type === actions3.clearSortBy) {
          var sortBy = state.sortBy;
          var newSortBy = sortBy.filter(function(d) {
            return d.id !== action.columnId;
          });
          return _extends({}, state, {
            sortBy: newSortBy
          });
        }
        if (action.type === actions3.setSortBy) {
          var _sortBy = action.sortBy;
          return _extends({}, state, {
            sortBy: _sortBy
          });
        }
        if (action.type === actions3.toggleSortBy) {
          var columnId = action.columnId, desc = action.desc, multi = action.multi;
          var allColumns2 = instance.allColumns, disableMultiSort = instance.disableMultiSort, disableSortRemove = instance.disableSortRemove, disableMultiRemove = instance.disableMultiRemove, _instance$maxMultiSor = instance.maxMultiSortColCount, maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
          var _sortBy2 = state.sortBy;
          var column = allColumns2.find(function(d) {
            return d.id === columnId;
          });
          var sortDescFirst = column.sortDescFirst;
          var existingSortBy = _sortBy2.find(function(d) {
            return d.id === columnId;
          });
          var existingIndex = _sortBy2.findIndex(function(d) {
            return d.id === columnId;
          });
          var hasDescDefined = typeof desc !== "undefined" && desc !== null;
          var _newSortBy = [];
          var sortAction;
          if (!disableMultiSort && multi) {
            if (existingSortBy) {
              sortAction = "toggle";
            } else {
              sortAction = "add";
            }
          } else {
            if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) {
              sortAction = "replace";
            } else if (existingSortBy) {
              sortAction = "toggle";
            } else {
              sortAction = "replace";
            }
          }
          if (sortAction === "toggle" && // Must be toggling
          !disableSortRemove && // If disableSortRemove, disable in general
          !hasDescDefined && // Must not be setting desc
          (multi ? !disableMultiRemove : true) && // If multi, don't allow if disableMultiRemove
          (existingSortBy && // Finally, detect if it should indeed be removed
          existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
            sortAction = "remove";
          }
          if (sortAction === "replace") {
            _newSortBy = [{
              id: columnId,
              desc: hasDescDefined ? desc : sortDescFirst
            }];
          } else if (sortAction === "add") {
            _newSortBy = [].concat(_sortBy2, [{
              id: columnId,
              desc: hasDescDefined ? desc : sortDescFirst
            }]);
            _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
          } else if (sortAction === "toggle") {
            _newSortBy = _sortBy2.map(function(d) {
              if (d.id === columnId) {
                return _extends({}, d, {
                  desc: hasDescDefined ? desc : !existingSortBy.desc
                });
              }
              return d;
            });
          } else if (sortAction === "remove") {
            _newSortBy = _sortBy2.filter(function(d) {
              return d.id !== columnId;
            });
          }
          return _extends({}, state, {
            sortBy: _newSortBy
          });
        }
      }
      function useInstance$5(instance) {
        var data = instance.data, rows = instance.rows, flatRows = instance.flatRows, allColumns2 = instance.allColumns, _instance$orderByFn = instance.orderByFn, orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn, userSortTypes = instance.sortTypes, manualSortBy = instance.manualSortBy, defaultCanSort = instance.defaultCanSort, disableSortBy = instance.disableSortBy, flatHeaders = instance.flatHeaders, sortBy = instance.state.sortBy, dispatch = instance.dispatch, plugins = instance.plugins, getHooks = instance.getHooks, _instance$autoResetSo = instance.autoResetSortBy, autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
        ensurePluginOrder(plugins, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var setSortBy = React3.useCallback(function(sortBy2) {
          dispatch({
            type: actions3.setSortBy,
            sortBy: sortBy2
          });
        }, [dispatch]);
        var toggleSortBy = React3.useCallback(function(columnId, desc, multi) {
          dispatch({
            type: actions3.toggleSortBy,
            columnId,
            desc,
            multi
          });
        }, [dispatch]);
        var getInstance = useGetLatest(instance);
        flatHeaders.forEach(function(column) {
          var accessor = column.accessor, defaultColumnCanSort = column.canSort, columnDisableSortBy = column.disableSortBy, id = column.id;
          var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : void 0, disableSortBy === true ? false : void 0, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
          column.canSort = canSort;
          if (column.canSort) {
            column.toggleSortBy = function(desc, multi) {
              return toggleSortBy(column.id, desc, multi);
            };
            column.clearSortBy = function() {
              dispatch({
                type: actions3.clearSortBy,
                columnId: column.id
              });
            };
          }
          column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
            instance: getInstance(),
            column
          });
          var columnSort = sortBy.find(function(d) {
            return d.id === id;
          });
          column.isSorted = !!columnSort;
          column.sortedIndex = sortBy.findIndex(function(d) {
            return d.id === id;
          });
          column.isSortedDesc = column.isSorted ? columnSort.desc : void 0;
        });
        var _React$useMemo = React3.useMemo(function() {
          if (manualSortBy || !sortBy.length) {
            return [rows, flatRows];
          }
          var sortedFlatRows2 = [];
          var availableSortBy = sortBy.filter(function(sort) {
            return allColumns2.find(function(col) {
              return col.id === sort.id;
            });
          });
          var sortData = function sortData2(rows2) {
            var sortedData = orderByFn(
              rows2,
              availableSortBy.map(function(sort) {
                var column = allColumns2.find(function(d) {
                  return d.id === sort.id;
                });
                if (!column) {
                  throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
                }
                var sortType = column.sortType;
                var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];
                if (!sortMethod) {
                  throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
                }
                return function(a, b) {
                  return sortMethod(a, b, sort.id, sort.desc);
                };
              }),
              // Map the directions
              availableSortBy.map(function(sort) {
                var column = allColumns2.find(function(d) {
                  return d.id === sort.id;
                });
                if (column && column.sortInverted) {
                  return sort.desc;
                }
                return !sort.desc;
              })
            );
            sortedData.forEach(function(row) {
              sortedFlatRows2.push(row);
              if (!row.subRows || row.subRows.length === 0) {
                return;
              }
              row.subRows = sortData2(row.subRows);
            });
            return sortedData;
          };
          return [sortData(rows), sortedFlatRows2];
        }, [manualSortBy, sortBy, rows, flatRows, allColumns2, orderByFn, userSortTypes]), sortedRows = _React$useMemo[0], sortedFlatRows = _React$useMemo[1];
        var getAutoResetSortBy = useGetLatest(autoResetSortBy);
        useMountedLayoutEffect(function() {
          if (getAutoResetSortBy()) {
            dispatch({
              type: actions3.resetSortBy
            });
          }
        }, [manualSortBy ? null : data]);
        Object.assign(instance, {
          preSortedRows: rows,
          preSortedFlatRows: flatRows,
          sortedRows,
          sortedFlatRows,
          rows: sortedRows,
          flatRows: sortedFlatRows,
          setSortBy,
          toggleSortBy
        });
      }
      function defaultOrderByFn(arr, funcs, dirs) {
        return [].concat(arr).sort(function(rowA, rowB) {
          for (var i = 0; i < funcs.length; i += 1) {
            var sortFn = funcs[i];
            var desc = dirs[i] === false || dirs[i] === "desc";
            var sortInt = sortFn(rowA, rowB);
            if (sortInt !== 0) {
              return desc ? -sortInt : sortInt;
            }
          }
          return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
        });
      }
      var pluginName = "usePagination";
      actions3.resetPage = "resetPage";
      actions3.gotoPage = "gotoPage";
      actions3.setPageSize = "setPageSize";
      var usePagination = function usePagination2(hooks) {
        hooks.stateReducers.push(reducer$6);
        hooks.useInstance.push(useInstance$6);
      };
      usePagination.pluginName = pluginName;
      function reducer$6(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            pageSize: 10,
            pageIndex: 0
          }, state);
        }
        if (action.type === actions3.resetPage) {
          return _extends({}, state, {
            pageIndex: instance.initialState.pageIndex || 0
          });
        }
        if (action.type === actions3.gotoPage) {
          var pageCount = instance.pageCount, page = instance.page;
          var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
          var canNavigate = false;
          if (newPageIndex > state.pageIndex) {
            canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
          } else if (newPageIndex < state.pageIndex) {
            canNavigate = newPageIndex > -1;
          }
          if (!canNavigate) {
            return state;
          }
          return _extends({}, state, {
            pageIndex: newPageIndex
          });
        }
        if (action.type === actions3.setPageSize) {
          var pageSize = action.pageSize;
          var topRowIndex = state.pageSize * state.pageIndex;
          var pageIndex = Math.floor(topRowIndex / pageSize);
          return _extends({}, state, {
            pageIndex,
            pageSize
          });
        }
      }
      function useInstance$6(instance) {
        var rows = instance.rows, _instance$autoResetPa = instance.autoResetPage, autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa, _instance$manualExpan = instance.manualExpandedKey, manualExpandedKey = _instance$manualExpan === void 0 ? "expanded" : _instance$manualExpan, plugins = instance.plugins, userPageCount = instance.pageCount, _instance$paginateExp = instance.paginateExpandedRows, paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp, _instance$expandSubRo = instance.expandSubRows, expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo, _instance$state = instance.state, pageSize = _instance$state.pageSize, pageIndex = _instance$state.pageIndex, expanded = _instance$state.expanded, globalFilter = _instance$state.globalFilter, filters = _instance$state.filters, groupBy = _instance$state.groupBy, sortBy = _instance$state.sortBy, dispatch = instance.dispatch, data = instance.data, manualPagination = instance.manualPagination;
        ensurePluginOrder(plugins, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var getAutoResetPage = useGetLatest(autoResetPage);
        useMountedLayoutEffect(function() {
          if (getAutoResetPage()) {
            dispatch({
              type: actions3.resetPage
            });
          }
        }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
        var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
        var pageOptions = React3.useMemo(function() {
          return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function(d, i) {
            return i;
          }) : [];
        }, [pageCount]);
        var page = React3.useMemo(function() {
          var page2;
          if (manualPagination) {
            page2 = rows;
          } else {
            var pageStart = pageSize * pageIndex;
            var pageEnd = pageStart + pageSize;
            page2 = rows.slice(pageStart, pageEnd);
          }
          if (paginateExpandedRows) {
            return page2;
          }
          return expandRows(page2, {
            manualExpandedKey,
            expanded,
            expandSubRows
          });
        }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
        var canPreviousPage = pageIndex > 0;
        var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
        var gotoPage = React3.useCallback(function(pageIndex2) {
          dispatch({
            type: actions3.gotoPage,
            pageIndex: pageIndex2
          });
        }, [dispatch]);
        var previousPage = React3.useCallback(function() {
          return gotoPage(function(old) {
            return old - 1;
          });
        }, [gotoPage]);
        var nextPage = React3.useCallback(function() {
          return gotoPage(function(old) {
            return old + 1;
          });
        }, [gotoPage]);
        var setPageSize = React3.useCallback(function(pageSize2) {
          dispatch({
            type: actions3.setPageSize,
            pageSize: pageSize2
          });
        }, [dispatch]);
        Object.assign(instance, {
          pageOptions,
          pageCount,
          page,
          canPreviousPage,
          canNextPage,
          gotoPage,
          previousPage,
          nextPage,
          setPageSize
        });
      }
      actions3.resetPivot = "resetPivot";
      actions3.togglePivot = "togglePivot";
      var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns2(hooks) {
        hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
        hooks.stateReducers.push(reducer$7);
        hooks.useInstanceAfterData.push(useInstanceAfterData);
        hooks.allColumns.push(allColumns);
        hooks.accessValue.push(accessValue);
        hooks.materializedColumns.push(materializedColumns);
        hooks.materializedColumnsDeps.push(materializedColumnsDeps);
        hooks.visibleColumns.push(visibleColumns$1);
        hooks.visibleColumnsDeps.push(visibleColumnsDeps4);
        hooks.useInstance.push(useInstance$7);
        hooks.prepareRow.push(prepareRow$2);
      };
      _UNSTABLE_usePivotColumns.pluginName = "usePivotColumns";
      var defaultPivotColumns = [];
      var defaultGetPivotToggleProps = function defaultGetPivotToggleProps2(props, _ref) {
        var header = _ref.header;
        return [props, {
          onClick: header.canPivot ? function(e) {
            e.persist();
            header.togglePivot();
          } : void 0,
          style: {
            cursor: header.canPivot ? "pointer" : void 0
          },
          title: "Toggle Pivot"
        }];
      };
      function reducer$7(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            pivotColumns: defaultPivotColumns
          }, state);
        }
        if (action.type === actions3.resetPivot) {
          return _extends({}, state, {
            pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
          });
        }
        if (action.type === actions3.togglePivot) {
          var columnId = action.columnId, setPivot = action.value;
          var resolvedPivot = typeof setPivot !== "undefined" ? setPivot : !state.pivotColumns.includes(columnId);
          if (resolvedPivot) {
            return _extends({}, state, {
              pivotColumns: [].concat(state.pivotColumns, [columnId])
            });
          }
          return _extends({}, state, {
            pivotColumns: state.pivotColumns.filter(function(d) {
              return d !== columnId;
            })
          });
        }
      }
      function useInstanceAfterData(instance) {
        instance.allColumns.forEach(function(column) {
          column.isPivotSource = instance.state.pivotColumns.includes(column.id);
        });
      }
      function allColumns(columns6, _ref2) {
        var instance = _ref2.instance;
        columns6.forEach(function(column) {
          column.isPivotSource = instance.state.pivotColumns.includes(column.id);
          column.uniqueValues = /* @__PURE__ */ new Set();
        });
        return columns6;
      }
      function accessValue(value, _ref3) {
        var column = _ref3.column;
        if (column.uniqueValues && typeof value !== "undefined") {
          column.uniqueValues.add(value);
        }
        return value;
      }
      function materializedColumns(materialized, _ref4) {
        var instance = _ref4.instance;
        var allColumns2 = instance.allColumns, state = instance.state;
        if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
          return materialized;
        }
        var pivotColumns = state.pivotColumns.map(function(id) {
          return allColumns2.find(function(d) {
            return d.id === id;
          });
        }).filter(Boolean);
        var sourceColumns = allColumns2.filter(function(d) {
          return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
        });
        var buildPivotColumns = function buildPivotColumns2(depth, parent, pivotFilters) {
          if (depth === void 0) {
            depth = 0;
          }
          if (pivotFilters === void 0) {
            pivotFilters = [];
          }
          var pivotColumn = pivotColumns[depth];
          if (!pivotColumn) {
            return sourceColumns.map(function(sourceColumn) {
              return _extends({}, sourceColumn, {
                canPivot: false,
                isPivoted: true,
                parent,
                depth,
                id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
                accessor: function accessor(originalRow, i, row) {
                  if (pivotFilters.every(function(filter) {
                    return filter(row);
                  })) {
                    return row.values[sourceColumn.id];
                  }
                }
              });
            });
          }
          var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
          return uniqueValues.map(function(uniqueValue) {
            var columnGroup = _extends({}, pivotColumn, {
              Header: pivotColumn.PivotHeader || typeof pivotColumn.header === "string" ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
              isPivotGroup: true,
              parent,
              depth,
              id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
              pivotValue: uniqueValue
            });
            columnGroup.columns = buildPivotColumns2(depth + 1, columnGroup, [].concat(pivotFilters, [function(row) {
              return row.values[pivotColumn.id] === uniqueValue;
            }]));
            return columnGroup;
          });
        };
        var newMaterialized = flattenColumns(buildPivotColumns());
        return [].concat(materialized, newMaterialized);
      }
      function materializedColumnsDeps(deps, _ref5) {
        var _ref5$instance$state = _ref5.instance.state, pivotColumns = _ref5$instance$state.pivotColumns, groupBy = _ref5$instance$state.groupBy;
        return [].concat(deps, [pivotColumns, groupBy]);
      }
      function visibleColumns$1(visibleColumns5, _ref6) {
        var state = _ref6.instance.state;
        visibleColumns5 = visibleColumns5.filter(function(d) {
          return !d.isPivotSource;
        });
        if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
          visibleColumns5 = visibleColumns5.filter(function(column) {
            return column.isGrouped || column.isPivoted;
          });
        }
        return visibleColumns5;
      }
      function visibleColumnsDeps4(deps, _ref7) {
        var instance = _ref7.instance;
        return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
      }
      function useInstance$7(instance) {
        var columns6 = instance.columns, allColumns2 = instance.allColumns, flatHeaders = instance.flatHeaders, getHooks = instance.getHooks, plugins = instance.plugins, dispatch = instance.dispatch, _instance$autoResetPi = instance.autoResetPivot, autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi, manaulPivot = instance.manaulPivot, disablePivot = instance.disablePivot, defaultCanPivot = instance.defaultCanPivot;
        ensurePluginOrder(plugins, ["useGroupBy"], "usePivotColumns");
        var getInstance = useGetLatest(instance);
        allColumns2.forEach(function(column) {
          var accessor = column.accessor, defaultColumnPivot = column.defaultPivot, columnDisablePivot = column.disablePivot;
          column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : void 0, disablePivot === true ? false : void 0, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);
          if (column.canPivot) {
            column.togglePivot = function() {
              return instance.togglePivot(column.id);
            };
          }
          column.Aggregated = column.Aggregated || column.Cell;
        });
        var togglePivot = function togglePivot2(columnId, value) {
          dispatch({
            type: actions3.togglePivot,
            columnId,
            value
          });
        };
        flatHeaders.forEach(function(header) {
          header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
            instance: getInstance(),
            header
          });
        });
        var getAutoResetPivot = useGetLatest(autoResetPivot);
        useMountedLayoutEffect(function() {
          if (getAutoResetPivot()) {
            dispatch({
              type: actions3.resetPivot
            });
          }
        }, [dispatch, manaulPivot ? null : columns6]);
        Object.assign(instance, {
          togglePivot
        });
      }
      function prepareRow$2(row) {
        row.allCells.forEach(function(cell) {
          cell.isPivoted = cell.column.isPivoted;
        });
      }
      var pluginName$1 = "useRowSelect";
      actions3.resetSelectedRows = "resetSelectedRows";
      actions3.toggleAllRowsSelected = "toggleAllRowsSelected";
      actions3.toggleRowSelected = "toggleRowSelected";
      actions3.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var useRowSelect2 = function useRowSelect3(hooks) {
        hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
        hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
        hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
        hooks.stateReducers.push(reducer$8);
        hooks.useInstance.push(useInstance$8);
        hooks.prepareRow.push(prepareRow$3);
      };
      useRowSelect2.pluginName = pluginName$1;
      var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps2(props, _ref) {
        var instance = _ref.instance, row = _ref.row;
        var _instance$manualRowSe = instance.manualRowSelectedKey, manualRowSelectedKey = _instance$manualRowSe === void 0 ? "isSelected" : _instance$manualRowSe;
        var checked = false;
        if (row.original && row.original[manualRowSelectedKey]) {
          checked = true;
        } else {
          checked = row.isSelected;
        }
        return [props, {
          onChange: function onChange(e) {
            row.toggleRowSelected(e.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked,
          title: "Toggle Row Selected",
          indeterminate: row.isSomeSelected
        }];
      };
      var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps2(props, _ref2) {
        var instance = _ref2.instance;
        return [props, {
          onChange: function onChange(e) {
            instance.toggleAllRowsSelected(e.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: instance.isAllRowsSelected,
          title: "Toggle All Rows Selected",
          indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
        }];
      };
      var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps2(props, _ref3) {
        var instance = _ref3.instance;
        return [props, {
          onChange: function onChange(e) {
            instance.toggleAllPageRowsSelected(e.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: instance.isAllPageRowsSelected,
          title: "Toggle All Current Page Rows Selected",
          indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function(_ref4) {
            var id = _ref4.id;
            return instance.state.selectedRowIds[id];
          }))
        }];
      };
      function reducer$8(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            selectedRowIds: {}
          }, state);
        }
        if (action.type === actions3.resetSelectedRows) {
          return _extends({}, state, {
            selectedRowIds: instance.initialState.selectedRowIds || {}
          });
        }
        if (action.type === actions3.toggleAllRowsSelected) {
          var setSelected = action.value;
          var isAllRowsSelected = instance.isAllRowsSelected, rowsById = instance.rowsById, _instance$nonGroupedR = instance.nonGroupedRowsById, nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
          var selectAll = typeof setSelected !== "undefined" ? setSelected : !isAllRowsSelected;
          var selectedRowIds = Object.assign({}, state.selectedRowIds);
          if (selectAll) {
            Object.keys(nonGroupedRowsById).forEach(function(rowId) {
              selectedRowIds[rowId] = true;
            });
          } else {
            Object.keys(nonGroupedRowsById).forEach(function(rowId) {
              delete selectedRowIds[rowId];
            });
          }
          return _extends({}, state, {
            selectedRowIds
          });
        }
        if (action.type === actions3.toggleRowSelected) {
          var id = action.id, _setSelected = action.value;
          var _rowsById = instance.rowsById, _instance$selectSubRo = instance.selectSubRows, selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo, getSubRows = instance.getSubRows;
          var isSelected = state.selectedRowIds[id];
          var shouldExist = typeof _setSelected !== "undefined" ? _setSelected : !isSelected;
          if (isSelected === shouldExist) {
            return state;
          }
          var newSelectedRowIds = _extends({}, state.selectedRowIds);
          var handleRowById = function handleRowById2(id2) {
            var row = _rowsById[id2];
            if (row) {
              if (!row.isGrouped) {
                if (shouldExist) {
                  newSelectedRowIds[id2] = true;
                } else {
                  delete newSelectedRowIds[id2];
                }
              }
              if (selectSubRows && getSubRows(row)) {
                return getSubRows(row).forEach(function(row2) {
                  return handleRowById2(row2.id);
                });
              }
            }
          };
          handleRowById(id);
          return _extends({}, state, {
            selectedRowIds: newSelectedRowIds
          });
        }
        if (action.type === actions3.toggleAllPageRowsSelected) {
          var _setSelected2 = action.value;
          var page = instance.page, _rowsById2 = instance.rowsById, _instance$selectSubRo2 = instance.selectSubRows, _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2, isAllPageRowsSelected = instance.isAllPageRowsSelected, _getSubRows = instance.getSubRows;
          var _selectAll = typeof _setSelected2 !== "undefined" ? _setSelected2 : !isAllPageRowsSelected;
          var _newSelectedRowIds = _extends({}, state.selectedRowIds);
          var _handleRowById = function _handleRowById2(id2) {
            var row = _rowsById2[id2];
            if (!row.isGrouped) {
              if (_selectAll) {
                _newSelectedRowIds[id2] = true;
              } else {
                delete _newSelectedRowIds[id2];
              }
            }
            if (_selectSubRows && _getSubRows(row)) {
              return _getSubRows(row).forEach(function(row2) {
                return _handleRowById2(row2.id);
              });
            }
          };
          page.forEach(function(row) {
            return _handleRowById(row.id);
          });
          return _extends({}, state, {
            selectedRowIds: _newSelectedRowIds
          });
        }
        return state;
      }
      function useInstance$8(instance) {
        var data = instance.data, rows = instance.rows, getHooks = instance.getHooks, plugins = instance.plugins, rowsById = instance.rowsById, _instance$nonGroupedR2 = instance.nonGroupedRowsById, nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2, _instance$autoResetSe = instance.autoResetSelectedRows, autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe, selectedRowIds = instance.state.selectedRowIds, _instance$selectSubRo3 = instance.selectSubRows, selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3, dispatch = instance.dispatch, page = instance.page, getSubRows = instance.getSubRows;
        ensurePluginOrder(plugins, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var selectedFlatRows = React3.useMemo(function() {
          var selectedFlatRows2 = [];
          rows.forEach(function(row) {
            var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
            row.isSelected = !!isSelected;
            row.isSomeSelected = isSelected === null;
            if (isSelected) {
              selectedFlatRows2.push(row);
            }
          });
          return selectedFlatRows2;
        }, [rows, selectSubRows, selectedRowIds, getSubRows]);
        var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
        var isAllPageRowsSelected = isAllRowsSelected;
        if (isAllRowsSelected) {
          if (Object.keys(nonGroupedRowsById).some(function(id) {
            return !selectedRowIds[id];
          })) {
            isAllRowsSelected = false;
          }
        }
        if (!isAllRowsSelected) {
          if (page && page.length && page.some(function(_ref5) {
            var id = _ref5.id;
            return !selectedRowIds[id];
          })) {
            isAllPageRowsSelected = false;
          }
        }
        var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
        useMountedLayoutEffect(function() {
          if (getAutoResetSelectedRows()) {
            dispatch({
              type: actions3.resetSelectedRows
            });
          }
        }, [dispatch, data]);
        var toggleAllRowsSelected = React3.useCallback(function(value) {
          return dispatch({
            type: actions3.toggleAllRowsSelected,
            value
          });
        }, [dispatch]);
        var toggleAllPageRowsSelected = React3.useCallback(function(value) {
          return dispatch({
            type: actions3.toggleAllPageRowsSelected,
            value
          });
        }, [dispatch]);
        var toggleRowSelected = React3.useCallback(function(id, value) {
          return dispatch({
            type: actions3.toggleRowSelected,
            id,
            value
          });
        }, [dispatch]);
        var getInstance = useGetLatest(instance);
        var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
          instance: getInstance()
        });
        var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
          instance: getInstance()
        });
        Object.assign(instance, {
          selectedFlatRows,
          isAllRowsSelected,
          isAllPageRowsSelected,
          toggleRowSelected,
          toggleAllRowsSelected,
          getToggleAllRowsSelectedProps,
          getToggleAllPageRowsSelectedProps,
          toggleAllPageRowsSelected
        });
      }
      function prepareRow$3(row, _ref6) {
        var instance = _ref6.instance;
        row.toggleRowSelected = function(set2) {
          return instance.toggleRowSelected(row.id, set2);
        };
        row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
          instance,
          row
        });
      }
      function getRowIsSelected(row, selectedRowIds, getSubRows) {
        if (selectedRowIds[row.id]) {
          return true;
        }
        var subRows = getSubRows(row);
        if (subRows && subRows.length) {
          var allChildrenSelected = true;
          var someSelected = false;
          subRows.forEach(function(subRow) {
            if (someSelected && !allChildrenSelected) {
              return;
            }
            if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
              someSelected = true;
            } else {
              allChildrenSelected = false;
            }
          });
          return allChildrenSelected ? true : someSelected ? null : false;
        }
        return false;
      }
      var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor2(row) {
        return {};
      };
      var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor2(cell) {
        return {};
      };
      actions3.setRowState = "setRowState";
      actions3.setCellState = "setCellState";
      actions3.resetRowState = "resetRowState";
      var useRowState = function useRowState2(hooks) {
        hooks.stateReducers.push(reducer$9);
        hooks.useInstance.push(useInstance$9);
        hooks.prepareRow.push(prepareRow$4);
      };
      useRowState.pluginName = "useRowState";
      function reducer$9(state, action, previousState, instance) {
        var _instance$initialRowS = instance.initialRowStateAccessor, initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS, _instance$initialCell = instance.initialCellStateAccessor, initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell, rowsById = instance.rowsById;
        if (action.type === actions3.init) {
          return _extends({
            rowState: {}
          }, state);
        }
        if (action.type === actions3.resetRowState) {
          return _extends({}, state, {
            rowState: instance.initialState.rowState || {}
          });
        }
        if (action.type === actions3.setRowState) {
          var _extends2;
          var rowId = action.rowId, value = action.value;
          var oldRowState = typeof state.rowState[rowId] !== "undefined" ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
          return _extends({}, state, {
            rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
          });
        }
        if (action.type === actions3.setCellState) {
          var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;
          var _rowId = action.rowId, columnId = action.columnId, _value = action.value;
          var _oldRowState = typeof state.rowState[_rowId] !== "undefined" ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);
          var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== "undefined" ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function(cell) {
            return cell.column.id === columnId;
          }));
          return _extends({}, state, {
            rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
              cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
            }), _extends4))
          });
        }
      }
      function useInstance$9(instance) {
        var _instance$autoResetRo = instance.autoResetRowState, autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo, data = instance.data, dispatch = instance.dispatch;
        var setRowState = React3.useCallback(function(rowId, value) {
          return dispatch({
            type: actions3.setRowState,
            rowId,
            value
          });
        }, [dispatch]);
        var setCellState = React3.useCallback(function(rowId, columnId, value) {
          return dispatch({
            type: actions3.setCellState,
            rowId,
            columnId,
            value
          });
        }, [dispatch]);
        var getAutoResetRowState = useGetLatest(autoResetRowState);
        useMountedLayoutEffect(function() {
          if (getAutoResetRowState()) {
            dispatch({
              type: actions3.resetRowState
            });
          }
        }, [data]);
        Object.assign(instance, {
          setRowState,
          setCellState
        });
      }
      function prepareRow$4(row, _ref) {
        var instance = _ref.instance;
        var _instance$initialRowS2 = instance.initialRowStateAccessor, initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2, _instance$initialCell2 = instance.initialCellStateAccessor, initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2, rowState = instance.state.rowState;
        if (row) {
          row.state = typeof rowState[row.id] !== "undefined" ? rowState[row.id] : initialRowStateAccessor(row);
          row.setState = function(updater) {
            return instance.setRowState(row.id, updater);
          };
          row.cells.forEach(function(cell) {
            if (!row.state.cellState) {
              row.state.cellState = {};
            }
            cell.state = typeof row.state.cellState[cell.column.id] !== "undefined" ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);
            cell.setState = function(updater) {
              return instance.setCellState(row.id, cell.column.id, updater);
            };
          });
        }
      }
      actions3.resetColumnOrder = "resetColumnOrder";
      actions3.setColumnOrder = "setColumnOrder";
      var useColumnOrder2 = function useColumnOrder3(hooks) {
        hooks.stateReducers.push(reducer$a);
        hooks.visibleColumnsDeps.push(function(deps, _ref) {
          var instance = _ref.instance;
          return [].concat(deps, [instance.state.columnOrder]);
        });
        hooks.visibleColumns.push(visibleColumns$2);
        hooks.useInstance.push(useInstance$a);
      };
      useColumnOrder2.pluginName = "useColumnOrder";
      function reducer$a(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            columnOrder: []
          }, state);
        }
        if (action.type === actions3.resetColumnOrder) {
          return _extends({}, state, {
            columnOrder: instance.initialState.columnOrder || []
          });
        }
        if (action.type === actions3.setColumnOrder) {
          return _extends({}, state, {
            columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
          });
        }
      }
      function visibleColumns$2(columns6, _ref2) {
        var columnOrder = _ref2.instance.state.columnOrder;
        if (!columnOrder || !columnOrder.length) {
          return columns6;
        }
        var columnOrderCopy = [].concat(columnOrder);
        var columnsCopy = [].concat(columns6);
        var columnsInOrder = [];
        var _loop = function _loop2() {
          var targetColumnId = columnOrderCopy.shift();
          var foundIndex = columnsCopy.findIndex(function(d) {
            return d.id === targetColumnId;
          });
          if (foundIndex > -1) {
            columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
          }
        };
        while (columnsCopy.length && columnOrderCopy.length) {
          _loop();
        }
        return [].concat(columnsInOrder, columnsCopy);
      }
      function useInstance$a(instance) {
        var dispatch = instance.dispatch;
        instance.setColumnOrder = React3.useCallback(function(columnOrder) {
          return dispatch({
            type: actions3.setColumnOrder,
            columnOrder
          });
        }, [dispatch]);
      }
      defaultColumn.canResize = true;
      actions3.columnStartResizing = "columnStartResizing";
      actions3.columnResizing = "columnResizing";
      actions3.columnDoneResizing = "columnDoneResizing";
      actions3.resetResize = "resetResize";
      var useResizeColumns2 = function useResizeColumns3(hooks) {
        hooks.getResizerProps = [defaultGetResizerProps];
        hooks.getHeaderProps.push({
          style: {
            position: "relative"
          }
        });
        hooks.stateReducers.push(reducer$b);
        hooks.useInstance.push(useInstance$b);
        hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
      };
      var defaultGetResizerProps = function defaultGetResizerProps2(props, _ref) {
        var instance = _ref.instance, header = _ref.header;
        var dispatch = instance.dispatch;
        var onResizeStart = function onResizeStart2(e, header2) {
          var isTouchEvent2 = false;
          if (e.type === "touchstart") {
            if (e.touches && e.touches.length > 1) {
              return;
            }
            isTouchEvent2 = true;
          }
          var headersToResize = getLeafHeaders2(header2);
          var headerIdWidths = headersToResize.map(function(d) {
            return [d.id, d.totalWidth];
          });
          var clientX = isTouchEvent2 ? Math.round(e.touches[0].clientX) : e.clientX;
          var raf;
          var mostRecentClientX;
          var dispatchEnd = function dispatchEnd2() {
            window.cancelAnimationFrame(raf);
            raf = null;
            dispatch({
              type: actions3.columnDoneResizing
            });
          };
          var dispatchMove = function dispatchMove2() {
            window.cancelAnimationFrame(raf);
            raf = null;
            dispatch({
              type: actions3.columnResizing,
              clientX: mostRecentClientX
            });
          };
          var scheduleDispatchMoveOnNextAnimationFrame = function scheduleDispatchMoveOnNextAnimationFrame2(clientXPos) {
            mostRecentClientX = clientXPos;
            if (!raf) {
              raf = window.requestAnimationFrame(dispatchMove);
            }
          };
          var handlersAndEvents = {
            mouse: {
              moveEvent: "mousemove",
              moveHandler: function moveHandler(e2) {
                return scheduleDispatchMoveOnNextAnimationFrame(e2.clientX);
              },
              upEvent: "mouseup",
              upHandler: function upHandler(e2) {
                document.removeEventListener("mousemove", handlersAndEvents.mouse.moveHandler);
                document.removeEventListener("mouseup", handlersAndEvents.mouse.upHandler);
                dispatchEnd();
              }
            },
            touch: {
              moveEvent: "touchmove",
              moveHandler: function moveHandler(e2) {
                if (e2.cancelable) {
                  e2.preventDefault();
                  e2.stopPropagation();
                }
                scheduleDispatchMoveOnNextAnimationFrame(e2.touches[0].clientX);
                return false;
              },
              upEvent: "touchend",
              upHandler: function upHandler(e2) {
                document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
                document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
                dispatchEnd();
              }
            }
          };
          var events = isTouchEvent2 ? handlersAndEvents.touch : handlersAndEvents.mouse;
          var passiveIfSupported = passiveEventSupported() ? {
            passive: false
          } : false;
          document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
          document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
          dispatch({
            type: actions3.columnStartResizing,
            columnId: header2.id,
            columnWidth: header2.totalWidth,
            headerIdWidths,
            clientX
          });
        };
        return [props, {
          onMouseDown: function onMouseDown(e) {
            return e.persist() || onResizeStart(e, header);
          },
          onTouchStart: function onTouchStart(e) {
            return e.persist() || onResizeStart(e, header);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: false,
          role: "separator"
        }];
      };
      useResizeColumns2.pluginName = "useResizeColumns";
      function reducer$b(state, action) {
        if (action.type === actions3.init) {
          return _extends({
            columnResizing: {
              columnWidths: {}
            }
          }, state);
        }
        if (action.type === actions3.resetResize) {
          return _extends({}, state, {
            columnResizing: {
              columnWidths: {}
            }
          });
        }
        if (action.type === actions3.columnStartResizing) {
          var clientX = action.clientX, columnId = action.columnId, columnWidth = action.columnWidth, headerIdWidths = action.headerIdWidths;
          return _extends({}, state, {
            columnResizing: _extends({}, state.columnResizing, {
              startX: clientX,
              headerIdWidths,
              columnWidth,
              isResizingColumn: columnId
            })
          });
        }
        if (action.type === actions3.columnResizing) {
          var _clientX = action.clientX;
          var _state$columnResizing = state.columnResizing, startX = _state$columnResizing.startX, _columnWidth = _state$columnResizing.columnWidth, _state$columnResizing2 = _state$columnResizing.headerIdWidths, _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;
          var deltaX = _clientX - startX;
          var percentageDeltaX = deltaX / _columnWidth;
          var newColumnWidths = {};
          _headerIdWidths.forEach(function(_ref2) {
            var headerId = _ref2[0], headerWidth = _ref2[1];
            newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
          });
          return _extends({}, state, {
            columnResizing: _extends({}, state.columnResizing, {
              columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
            })
          });
        }
        if (action.type === actions3.columnDoneResizing) {
          return _extends({}, state, {
            columnResizing: _extends({}, state.columnResizing, {
              startX: null,
              isResizingColumn: null
            })
          });
        }
      }
      var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions2(instance) {
        var flatHeaders = instance.flatHeaders, disableResizing = instance.disableResizing, getHooks = instance.getHooks, columnResizing = instance.state.columnResizing;
        var getInstance = useGetLatest(instance);
        flatHeaders.forEach(function(header) {
          var canResize = getFirstDefined(header.disableResizing === true ? false : void 0, disableResizing === true ? false : void 0, true);
          header.canResize = canResize;
          header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
          header.isResizing = columnResizing.isResizingColumn === header.id;
          if (canResize) {
            header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
              instance: getInstance(),
              header
            });
          }
        });
      };
      function useInstance$b(instance) {
        var plugins = instance.plugins, dispatch = instance.dispatch, _instance$autoResetRe = instance.autoResetResize, autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe, columns6 = instance.columns;
        ensurePluginOrder(plugins, ["useAbsoluteLayout"], "useResizeColumns");
        var getAutoResetResize = useGetLatest(autoResetResize);
        useMountedLayoutEffect(function() {
          if (getAutoResetResize()) {
            dispatch({
              type: actions3.resetResize
            });
          }
        }, [columns6]);
        var resetResizing = React3.useCallback(function() {
          return dispatch({
            type: actions3.resetResize
          });
        }, [dispatch]);
        Object.assign(instance, {
          resetResizing
        });
      }
      function getLeafHeaders2(header) {
        var leafHeaders = [];
        var recurseHeader = function recurseHeader2(header2) {
          if (header2.columns && header2.columns.length) {
            header2.columns.map(recurseHeader2);
          }
          leafHeaders.push(header2);
        };
        recurseHeader(header);
        return leafHeaders;
      }
      var cellStyles = {
        position: "absolute",
        top: 0
      };
      var useAbsoluteLayout = function useAbsoluteLayout2(hooks) {
        hooks.getTableBodyProps.push(getRowStyles);
        hooks.getRowProps.push(getRowStyles);
        hooks.getHeaderGroupProps.push(getRowStyles);
        hooks.getFooterGroupProps.push(getRowStyles);
        hooks.getHeaderProps.push(function(props, _ref) {
          var column = _ref.column;
          return [props, {
            style: _extends({}, cellStyles, {
              left: column.totalLeft + "px",
              width: column.totalWidth + "px"
            })
          }];
        });
        hooks.getCellProps.push(function(props, _ref2) {
          var cell = _ref2.cell;
          return [props, {
            style: _extends({}, cellStyles, {
              left: cell.column.totalLeft + "px",
              width: cell.column.totalWidth + "px"
            })
          }];
        });
        hooks.getFooterProps.push(function(props, _ref3) {
          var column = _ref3.column;
          return [props, {
            style: _extends({}, cellStyles, {
              left: column.totalLeft + "px",
              width: column.totalWidth + "px"
            })
          }];
        });
      };
      useAbsoluteLayout.pluginName = "useAbsoluteLayout";
      var getRowStyles = function getRowStyles2(props, _ref4) {
        var instance = _ref4.instance;
        return [props, {
          style: {
            position: "relative",
            width: instance.totalColumnsWidth + "px"
          }
        }];
      };
      var cellStyles$1 = {
        display: "inline-block",
        boxSizing: "border-box"
      };
      var getRowStyles$1 = function getRowStyles2(props, _ref) {
        var instance = _ref.instance;
        return [props, {
          style: {
            display: "flex",
            width: instance.totalColumnsWidth + "px"
          }
        }];
      };
      var useBlockLayout = function useBlockLayout2(hooks) {
        hooks.getRowProps.push(getRowStyles$1);
        hooks.getHeaderGroupProps.push(getRowStyles$1);
        hooks.getFooterGroupProps.push(getRowStyles$1);
        hooks.getHeaderProps.push(function(props, _ref2) {
          var column = _ref2.column;
          return [props, {
            style: _extends({}, cellStyles$1, {
              width: column.totalWidth + "px"
            })
          }];
        });
        hooks.getCellProps.push(function(props, _ref3) {
          var cell = _ref3.cell;
          return [props, {
            style: _extends({}, cellStyles$1, {
              width: cell.column.totalWidth + "px"
            })
          }];
        });
        hooks.getFooterProps.push(function(props, _ref4) {
          var column = _ref4.column;
          return [props, {
            style: _extends({}, cellStyles$1, {
              width: column.totalWidth + "px"
            })
          }];
        });
      };
      useBlockLayout.pluginName = "useBlockLayout";
      function useFlexLayout(hooks) {
        hooks.getTableProps.push(getTableProps);
        hooks.getRowProps.push(getRowStyles$2);
        hooks.getHeaderGroupProps.push(getRowStyles$2);
        hooks.getFooterGroupProps.push(getRowStyles$2);
        hooks.getHeaderProps.push(getHeaderProps3);
        hooks.getCellProps.push(getCellProps3);
        hooks.getFooterProps.push(getFooterProps);
      }
      useFlexLayout.pluginName = "useFlexLayout";
      var getTableProps = function getTableProps2(props, _ref) {
        var instance = _ref.instance;
        return [props, {
          style: {
            minWidth: instance.totalColumnsMinWidth + "px"
          }
        }];
      };
      var getRowStyles$2 = function getRowStyles2(props, _ref2) {
        var instance = _ref2.instance;
        return [props, {
          style: {
            display: "flex",
            flex: "1 0 auto",
            minWidth: instance.totalColumnsMinWidth + "px"
          }
        }];
      };
      var getHeaderProps3 = function getHeaderProps4(props, _ref3) {
        var column = _ref3.column;
        return [props, {
          style: {
            boxSizing: "border-box",
            flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : void 0,
            minWidth: column.totalMinWidth + "px",
            width: column.totalWidth + "px"
          }
        }];
      };
      var getCellProps3 = function getCellProps4(props, _ref4) {
        var cell = _ref4.cell;
        return [props, {
          style: {
            boxSizing: "border-box",
            flex: cell.column.totalFlexWidth + " 0 auto",
            minWidth: cell.column.totalMinWidth + "px",
            width: cell.column.totalWidth + "px"
          }
        }];
      };
      var getFooterProps = function getFooterProps2(props, _ref5) {
        var column = _ref5.column;
        return [props, {
          style: {
            boxSizing: "border-box",
            flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : void 0,
            minWidth: column.totalMinWidth + "px",
            width: column.totalWidth + "px"
          }
        }];
      };
      actions3.columnStartResizing = "columnStartResizing";
      actions3.columnResizing = "columnResizing";
      actions3.columnDoneResizing = "columnDoneResizing";
      actions3.resetResize = "resetResize";
      function useGridLayout(hooks) {
        hooks.stateReducers.push(reducer$c);
        hooks.getTableProps.push(getTableProps$1);
        hooks.getHeaderProps.push(getHeaderProps$1);
        hooks.getRowProps.push(getRowProps3);
      }
      useGridLayout.pluginName = "useGridLayout";
      var getTableProps$1 = function getTableProps2(props, _ref) {
        var instance = _ref.instance;
        var gridTemplateColumns = instance.visibleColumns.map(function(column) {
          var _instance$state$colum;
          if (instance.state.gridLayout.columnWidths[column.id]) return instance.state.gridLayout.columnWidths[column.id] + "px";
          if ((_instance$state$colum = instance.state.columnResizing) == null ? void 0 : _instance$state$colum.isResizingColumn) return instance.state.gridLayout.startWidths[column.id] + "px";
          if (typeof column.width === "number") return column.width + "px";
          return column.width;
        });
        return [props, {
          style: {
            display: "grid",
            gridTemplateColumns: gridTemplateColumns.join(" ")
          }
        }];
      };
      var getHeaderProps$1 = function getHeaderProps4(props, _ref2) {
        var column = _ref2.column;
        return [props, {
          id: "header-cell-" + column.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + column.totalVisibleHeaderCount
          }
        }];
      };
      var getRowProps3 = function getRowProps4(props, _ref3) {
        var row = _ref3.row;
        if (row.isExpanded) {
          return [props, {
            style: {
              gridColumn: "1 / " + (row.cells.length + 1)
            }
          }];
        }
        return [props, {}];
      };
      function reducer$c(state, action, previousState, instance) {
        if (action.type === actions3.init) {
          return _extends({
            gridLayout: {
              columnWidths: {}
            }
          }, state);
        }
        if (action.type === actions3.resetResize) {
          return _extends({}, state, {
            gridLayout: {
              columnWidths: {}
            }
          });
        }
        if (action.type === actions3.columnStartResizing) {
          var columnId = action.columnId, headerIdWidths = action.headerIdWidths;
          var columnWidth = getElementWidth(columnId);
          if (columnWidth !== void 0) {
            var startWidths = instance.visibleColumns.reduce(function(acc, column) {
              var _extends2;
              return _extends({}, acc, (_extends2 = {}, _extends2[column.id] = getElementWidth(column.id), _extends2));
            }, {});
            var minWidths = instance.visibleColumns.reduce(function(acc, column) {
              var _extends3;
              return _extends({}, acc, (_extends3 = {}, _extends3[column.id] = column.minWidth, _extends3));
            }, {});
            var maxWidths = instance.visibleColumns.reduce(function(acc, column) {
              var _extends4;
              return _extends({}, acc, (_extends4 = {}, _extends4[column.id] = column.maxWidth, _extends4));
            }, {});
            var headerIdGridWidths = headerIdWidths.map(function(_ref4) {
              var headerId = _ref4[0];
              return [headerId, getElementWidth(headerId)];
            });
            return _extends({}, state, {
              gridLayout: _extends({}, state.gridLayout, {
                startWidths,
                minWidths,
                maxWidths,
                headerIdGridWidths,
                columnWidth
              })
            });
          } else {
            return state;
          }
        }
        if (action.type === actions3.columnResizing) {
          var clientX = action.clientX;
          var startX = state.columnResizing.startX;
          var _state$gridLayout = state.gridLayout, _columnWidth = _state$gridLayout.columnWidth, _minWidths = _state$gridLayout.minWidths, _maxWidths = _state$gridLayout.maxWidths, _state$gridLayout$hea = _state$gridLayout.headerIdGridWidths, _headerIdGridWidths = _state$gridLayout$hea === void 0 ? [] : _state$gridLayout$hea;
          var deltaX = clientX - startX;
          var percentageDeltaX = deltaX / _columnWidth;
          var newColumnWidths = {};
          _headerIdGridWidths.forEach(function(_ref5) {
            var headerId = _ref5[0], headerWidth = _ref5[1];
            newColumnWidths[headerId] = Math.min(Math.max(_minWidths[headerId], headerWidth + headerWidth * percentageDeltaX), _maxWidths[headerId]);
          });
          return _extends({}, state, {
            gridLayout: _extends({}, state.gridLayout, {
              columnWidths: _extends({}, state.gridLayout.columnWidths, {}, newColumnWidths)
            })
          });
        }
        if (action.type === actions3.columnDoneResizing) {
          return _extends({}, state, {
            gridLayout: _extends({}, state.gridLayout, {
              startWidths: {},
              minWidths: {},
              maxWidths: {}
            })
          });
        }
      }
      function getElementWidth(columnId) {
        var _document$getElementB;
        var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;
        if (width !== void 0) {
          return width;
        }
      }
      exports2._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
      exports2.actions = actions3;
      exports2.defaultColumn = defaultColumn;
      exports2.defaultGroupByFn = defaultGroupByFn;
      exports2.defaultOrderByFn = defaultOrderByFn;
      exports2.defaultRenderer = defaultRenderer;
      exports2.emptyRenderer = emptyRenderer;
      exports2.ensurePluginOrder = ensurePluginOrder;
      exports2.flexRender = flexRender;
      exports2.functionalUpdate = functionalUpdate;
      exports2.loopHooks = loopHooks;
      exports2.makePropGetter = makePropGetter;
      exports2.makeRenderer = makeRenderer2;
      exports2.reduceHooks = reduceHooks;
      exports2.safeUseLayoutEffect = safeUseLayoutEffect;
      exports2.useAbsoluteLayout = useAbsoluteLayout;
      exports2.useAsyncDebounce = useAsyncDebounce;
      exports2.useBlockLayout = useBlockLayout;
      exports2.useColumnOrder = useColumnOrder2;
      exports2.useExpanded = useExpanded2;
      exports2.useFilters = useFilters2;
      exports2.useFlexLayout = useFlexLayout;
      exports2.useGetLatest = useGetLatest;
      exports2.useGlobalFilter = useGlobalFilter2;
      exports2.useGridLayout = useGridLayout;
      exports2.useGroupBy = useGroupBy2;
      exports2.useMountedLayoutEffect = useMountedLayoutEffect;
      exports2.usePagination = usePagination;
      exports2.useResizeColumns = useResizeColumns2;
      exports2.useRowSelect = useRowSelect2;
      exports2.useRowState = useRowState;
      exports2.useSortBy = useSortBy2;
      exports2.useTable = useTable2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/react-table/index.js
var require_react_table = __commonJS({
  "node_modules/react-table/index.js"(exports, module) {
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_table_development();
    }
  }
});

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/pluginHooks/AnalyticalTableHooks.js
var AnalyticalTableHooks_exports = {};
__export(AnalyticalTableHooks_exports, {
  useAnnounceEmptyCells: () => useAnnounceEmptyCells,
  useIndeterminateRowSelection: () => useIndeterminateRowSelection,
  useManualRowSelect: () => useManualRowSelect,
  useOnColumnResize: () => useOnColumnResize,
  useOrderedMultiSort: () => useOrderedMultiSort,
  useRowDisableSelection: () => useRowDisableSelection
});

// node_modules/@ui5/webcomponents-react-base/dist/Device/index.js
var Device_exports = {};
__export(Device_exports, {
  attachMediaHandler: () => attachMediaHandler,
  attachOrientationChangeHandler: () => attachOrientationChangeHandler,
  attachResizeHandler: () => attachResizeHandler,
  detachMediaHandler: () => detachMediaHandler,
  detachOrientationChangeHandler: () => detachOrientationChangeHandler,
  detachResizeHandler: () => detachResizeHandler,
  getCurrentRange: () => getCurrentRange,
  getOrientation: () => getOrientation,
  isAndroid: () => isAndroid,
  isChrome: () => isChrome,
  isCombi: () => isCombi,
  isDesktop: () => isDesktop,
  isFirefox: () => isFirefox,
  isIOS: () => isIOS,
  isMac: () => isMac,
  isPhone: () => isPhone,
  isSafari: () => isSafari,
  isTablet: () => isTablet,
  supportsTouch: () => supportsTouch
});

// node_modules/@ui5/webcomponents-react-base/dist/Device/EventProvider.js
init_EventProvider();
var MediaEventProvider = new EventProvider_default();
var OrientationEventProvider = new EventProvider_default();
var ResizeEventProvider = new EventProvider_default();

// node_modules/@ui5/webcomponents-react-base/dist/Device/Media.js
var DEFAULT_RANGE_SET = MediaRange_default.RANGESETS.RANGE_4STEPS;
var RANGE_DEFINITIONS = {
  S: [0, 599],
  M: [600, 1023],
  L: [1024, 1439],
  XL: [1440, -1]
};
var newRangeToLegacyRangeMap = {
  S: "Phone",
  M: "Tablet",
  L: "Desktop",
  XL: "LargeDesktop"
};
function getQuery(from, to) {
  let q = "all";
  if (from > 0) {
    q = `${q} and (min-width:${from}px)`;
  }
  if (to > 0) {
    q = `${q} and (max-width:${to}px)`;
  }
  return q;
}
function resolveRangeInfo(name24) {
  const params = {
    from: RANGE_DEFINITIONS[name24][0],
    name: newRangeToLegacyRangeMap[name24],
    unit: "px"
  };
  if (RANGE_DEFINITIONS[name24][1] > 0) {
    params.to = RANGE_DEFINITIONS[name24][1];
  }
  return params;
}
var mediaQueries = null;
function initMediaQueries() {
  if (typeof document !== "undefined") {
    mediaQueries = {
      S: window.matchMedia(getQuery(...RANGE_DEFINITIONS.S)),
      M: window.matchMedia(getQuery(...RANGE_DEFINITIONS.M)),
      L: window.matchMedia(getQuery(...RANGE_DEFINITIONS.L)),
      XL: window.matchMedia(getQuery(...RANGE_DEFINITIONS.XL))
    };
    for (const mediaQueriesKey in mediaQueries) {
      const handler = (event) => {
        if (event.matches) {
          const params = resolveRangeInfo(mediaQueriesKey);
          MediaEventProvider.fireEvent(`media`, params);
        }
      };
      mediaQueries[mediaQueriesKey].addEventListener("change", handler);
    }
  }
}
var getCurrentRange = (width) => {
  if (typeof window === "undefined") {
    return {
      from: 1024,
      to: 1439,
      name: "Desktop",
      unit: "px"
    };
  }
  return resolveRangeInfo(MediaRange_default.getCurrentRange(DEFAULT_RANGE_SET, isNaN(width) ? void 0 : width));
};
var attachMediaHandler = (func) => {
  if (mediaQueries === null) {
    initMediaQueries();
  }
  MediaEventProvider.attachEvent(`media`, func);
};
var detachMediaHandler = (func) => {
  MediaEventProvider.detachEvent(`media`, func);
};

// node_modules/@ui5/webcomponents-react-base/dist/Device/index.js
var isSSR = () => typeof window === "undefined";
var getActualWindowSize = () => {
  if (isSSR()) {
    return [0, 0];
  }
  return [window.innerWidth, window.innerHeight];
};
var iResizeTimeout;
var bOrientationChange = false;
var bResize = false;
var iOrientationTimeout;
var iClearFlagTimeout;
var [iWindowWidthOld, iWindowHeightOld] = getActualWindowSize();
var rInputTagRegex = /INPUT|TEXTAREA|SELECT/;
var internalWindowSize = {
  height: 0,
  width: 0
};
var internalOrientation = {
  landscape: false,
  portrait: false
};
var isLandscape = () => {
  return !!window.matchMedia("(orientation: landscape)").matches;
};
var setResizeInfo = () => {
  internalWindowSize.width = getActualWindowSize()[0];
  internalWindowSize.height = getActualWindowSize()[1];
};
var setOrientationInfo = () => {
  internalOrientation.landscape = isLandscape();
  internalOrientation.portrait = !internalOrientation.landscape;
};
var clearFlags = () => {
  bOrientationChange = false;
  bResize = false;
  iClearFlagTimeout = null;
};
var eventListenersInitialized = false;
var initEventListeners = () => {
  if (supportsTouch()) {
    window.addEventListener("resize", handleMobileOrientationResizeChange, false);
    window.addEventListener("orientationchange", handleMobileOrientationResizeChange, false);
  } else {
    window.addEventListener("resize", handleResizeEvent, false);
  }
  setResizeInfo();
  setOrientationInfo();
  eventListenersInitialized = true;
};
var handleOrientationChange = () => {
  setOrientationInfo();
  OrientationEventProvider.fireEvent("orientation", {
    landscape: internalOrientation.landscape,
    portrait: internalOrientation.portrait
  });
};
var handleMobileTimeout = () => {
  if (bResize && bOrientationChange) {
    handleOrientationChange();
    handleResizeChange();
    bOrientationChange = false;
    bResize = false;
    if (iClearFlagTimeout) {
      window.clearTimeout(iClearFlagTimeout);
      iClearFlagTimeout = null;
    }
  }
  iOrientationTimeout = null;
};
var handleMobileOrientationResizeChange = (evt) => {
  if (evt.type === "resize") {
    if (rInputTagRegex.test(document.activeElement?.tagName) && !bOrientationChange) {
      return;
    }
    const [iWindowWidthNew, iWindowHeightNew] = getActualWindowSize();
    if (iWindowHeightNew === iWindowHeightOld && iWindowWidthNew === iWindowWidthOld) {
      return;
    }
    bResize = true;
    if (iWindowHeightOld !== iWindowHeightNew && iWindowWidthOld === iWindowWidthNew) {
      handleResizeChange();
    } else {
      iWindowWidthOld = iWindowWidthNew;
    }
    iWindowHeightOld = iWindowHeightNew;
    if (iClearFlagTimeout) {
      window.clearTimeout(iClearFlagTimeout);
      iClearFlagTimeout = null;
    }
    iClearFlagTimeout = window.setTimeout(clearFlags, 1200);
  } else if (evt.type === "orientationchange") {
    bOrientationChange = true;
  }
  if (iOrientationTimeout) {
    clearTimeout(iOrientationTimeout);
    iOrientationTimeout = null;
  }
  iOrientationTimeout = window.setTimeout(handleMobileTimeout, 50);
};
var handleResizeChange = () => {
  setResizeInfo();
  ResizeEventProvider.fireEvent("resize", {
    height: internalWindowSize.height,
    width: internalWindowSize.width
  });
};
var handleResizeTimeout = () => {
  handleResizeChange();
  iResizeTimeout = null;
};
var handleResizeEvent = () => {
  const wasL = internalOrientation.landscape;
  const isL = isLandscape();
  if (wasL !== isL) {
    handleOrientationChange();
  }
  if (!iResizeTimeout) {
    iResizeTimeout = window.setTimeout(handleResizeTimeout, 150);
  }
};
var attachResizeHandler = (fnFunction) => {
  if (!eventListenersInitialized) {
    initEventListeners();
  }
  ResizeEventProvider.attachEvent("resize", fnFunction);
};
var detachResizeHandler = (fnFunction) => {
  ResizeEventProvider.detachEvent("resize", fnFunction);
};
var getOrientation = () => {
  return internalOrientation;
};
var attachOrientationChangeHandler = (fnFunction) => {
  if (!eventListenersInitialized) {
    initEventListeners();
  }
  OrientationEventProvider.attachEvent("orientation", fnFunction);
};
var detachOrientationChangeHandler = (fnFunction) => {
  OrientationEventProvider.detachEvent("orientation", fnFunction);
};

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useCurrentTheme.js
var import_react = __toESM(require_react(), 1);
function useCurrentTheme() {
  const [theme, setLocalTheme] = (0, import_react.useState)(getTheme());
  (0, import_react.useEffect)(() => {
    const onThemeSwitch = (newTheme) => {
      setLocalTheme(newTheme);
    };
    attachThemeLoaded(onThemeSwitch);
    return () => {
      detachThemeLoaded(onThemeSwitch);
    };
  }, []);
  return theme;
}

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useI18nBundle.js
var import_react2 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);

// node_modules/@ui5/webcomponents-react-base/dist/stores/I18nStore.js
var STORE_SYMBOL_LISTENERS = Symbol.for("@ui5/webcomponents-react/I18nStore/Listeners");
var STORE_SYMBOL = Symbol.for("@ui5/webcomponents-react/I18nStore");
var initialStore = {};
function getListeners() {
  globalThis[STORE_SYMBOL_LISTENERS] ??= [];
  return globalThis[STORE_SYMBOL_LISTENERS];
}
function emitChange() {
  for (const listener of getListeners()) {
    listener();
  }
}
function getSnapshot() {
  globalThis[STORE_SYMBOL] ??= initialStore;
  return globalThis[STORE_SYMBOL];
}
function subscribe(listener) {
  const listeners = getListeners();
  globalThis[STORE_SYMBOL_LISTENERS] = [...listeners, listener];
  return () => {
    globalThis[STORE_SYMBOL_LISTENERS] = listeners.filter((l) => l !== listener);
  };
}
var I18nStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot: () => {
    return initialStore;
  },
  loadBundle: (bundleName) => {
    const bundles = getSnapshot();
    if (!bundles.hasOwnProperty(bundleName)) {
      void getI18nBundle(bundleName).then((bundle) => {
        globalThis[STORE_SYMBOL] = __spreadProps(__spreadValues({}, globalThis[STORE_SYMBOL]), {
          [bundleName]: bundle
        });
        emitChange();
      });
    }
  },
  handleLanguageChange: () => __async(void 0, null, function* () {
    const bundles = getSnapshot();
    const newBundles = yield Promise.all(Object.keys(bundles).map((bundleName) => getI18nBundle(bundleName)));
    globalThis[STORE_SYMBOL] = newBundles.reduce((acc, bundle) => __spreadProps(__spreadValues({}, acc), {
      [bundle.packageName]: bundle
    }), {});
    emitChange();
  })
};

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useI18nBundle.js
var defaultBundle = new i18nBundle_default("defaultBundle");
var useI18nBundle = (bundleName) => {
  const bundles = (0, import_shim.useSyncExternalStore)(I18nStore.subscribe, I18nStore.getSnapshot, I18nStore.getServerSnapshot);
  (0, import_react2.useEffect)(() => {
    I18nStore.loadBundle(bundleName);
  }, [bundleName]);
  return bundles[bundleName] ?? defaultBundle;
};

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useIsomorphicId.js
var React = __toESM(require_react(), 1);
function getRandomId() {
  if ("randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}
var canUseUseId = "useId" in React;
function useIsomorphicId() {
  if (canUseUseId) {
    return Reflect.get(React, "useId")();
  }
  const localId = React.useRef(getRandomId());
  return localId.current;
}

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useIsomorphicLayoutEffect.js
var import_react3 = __toESM(require_react(), 1);
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react3.useLayoutEffect : import_react3.useEffect;

// node_modules/@ui5/webcomponents-base/dist/locale/directionChange.js
init_EventProvider();
var eventProvider = new EventProvider_default();
var DIR_CHANGE = "directionChange";
var attachDirectionChange = (listener) => {
  eventProvider.attachEvent(DIR_CHANGE, listener);
};
var detachDirectionChange = (listener) => {
  eventProvider.detachEvent(DIR_CHANGE, listener);
};

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useIsRTL.js
var import_react4 = __toESM(require_react(), 1);
var useIsRTL = (elementRef) => {
  const [isRTL, setRTL] = (0, import_react4.useState)(false);
  const isMounted = (0, import_react4.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    setRTL(elementRef.current?.matches(":dir(rtl)") ?? false);
    const handleDirectionChange = () => {
      if (isMounted.current) {
        setRTL(elementRef.current?.matches(":dir(rtl)") ?? false);
      }
    };
    attachDirectionChange(handleDirectionChange);
    return () => {
      isMounted.current = false;
      detachDirectionChange(handleDirectionChange);
    };
  }, []);
  return isRTL;
};

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useStylesheet.js
init_ManagedStyles();
var import_shim2 = __toESM(require_shim(), 1);

// node_modules/@ui5/webcomponents-react-base/dist/stores/StyleStore.js
var STORE_SYMBOL_LISTENERS2 = Symbol.for("@ui5/webcomponents-react/StyleStore/Listeners");
var STORE_SYMBOL2 = Symbol.for("@ui5/webcomponents-react/StyleStore");
var initialStore2 = {
  staticCssInjected: false,
  componentsMap: /* @__PURE__ */ new Map()
};
function getListeners2() {
  globalThis[STORE_SYMBOL_LISTENERS2] ??= [];
  return globalThis[STORE_SYMBOL_LISTENERS2];
}
function emitChange2() {
  for (const listener of getListeners2()) {
    listener();
  }
}
function getSnapshot2() {
  globalThis[STORE_SYMBOL2] ??= initialStore2;
  return globalThis[STORE_SYMBOL2];
}
function subscribe2(listener) {
  const listeners = getListeners2();
  globalThis[STORE_SYMBOL_LISTENERS2] = [...listeners, listener];
  return () => {
    globalThis[STORE_SYMBOL_LISTENERS2] = listeners.filter((l) => l !== listener);
  };
}
var StyleStore = {
  subscribe: subscribe2,
  getSnapshot: getSnapshot2,
  getServerSnapshot: () => {
    return initialStore2;
  },
  setStaticCssInjected: (staticCssInjected) => {
    const curr = getSnapshot2();
    globalThis[STORE_SYMBOL2] = __spreadProps(__spreadValues({}, curr), {
      staticCssInjected
    });
    emitChange2();
  },
  mountComponent: (componentName) => {
    const { componentsMap } = getSnapshot2();
    if (componentsMap.has(componentName)) {
      componentsMap.set(componentName, componentsMap.get(componentName) + 1);
    } else {
      componentsMap.set(componentName, 1);
    }
    emitChange2();
  },
  unmountComponent: (componentName) => {
    const { componentsMap } = getSnapshot2();
    if (componentsMap.has(componentName)) {
      componentsMap.set(componentName, componentsMap.get(componentName) - 1);
    }
    emitChange2();
  }
};

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useStylesheet.js
function useStylesheet(styles2, componentName) {
  const { staticCssInjected, componentsMap } = (0, import_shim2.useSyncExternalStore)(StyleStore.subscribe, StyleStore.getSnapshot, StyleStore.getServerSnapshot);
  useIsomorphicLayoutEffect(() => {
    const shouldInject = !staticCssInjected;
    if (shouldInject) {
      createOrUpdateStyle(styles2, "data-ui5wcr-component", componentName);
      StyleStore.mountComponent(componentName);
    }
    return () => {
      if (shouldInject) {
        StyleStore.unmountComponent(componentName);
        const numberOfMountedComponents = componentsMap.get(componentName);
        if (numberOfMountedComponents <= 0) {
          removeStyle("data-ui5wcr-component", componentName);
        }
      }
    };
  }, [styles2, staticCssInjected]);
}

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useSyncRef.js
var import_react5 = __toESM(require_react(), 1);
function useSyncRef(ref) {
  const localRef = (0, import_react5.useRef)(null);
  const componentRef = (0, import_react5.useCallback)((node) => {
    if (ref) {
      if (typeof ref === "function") {
        ref(node);
      }
      if ({}.hasOwnProperty.call(ref, "current")) {
        ref.current = node;
      }
    }
    localRef.current = node;
  }, [ref]);
  return [componentRef, localRef];
}

// node_modules/@ui5/webcomponents-react-base/dist/hooks/useViewportRange.js
var import_react6 = __toESM(require_react(), 1);
var useViewportRange = () => {
  const [currentRange, setCurrentRange] = (0, import_react6.useState)(getCurrentRange()?.name);
  (0, import_react6.useEffect)(() => {
    let isMounted = true;
    const handler = ({ name: range }) => {
      if (isMounted === true) {
        setCurrentRange(range);
      }
    };
    attachMediaHandler(handler);
    return () => {
      isMounted = false;
      detachMediaHandler(handler);
    };
  }, [setCurrentRange]);
  return currentRange;
};

// node_modules/@ui5/webcomponents-react-base/dist/styling/ThemingParameters.js
var ThemingParameters = {
  sapBrandColor: "var(--sapBrandColor)",
  sapHighlightColor: "var(--sapHighlightColor)",
  sapBaseColor: "var(--sapBaseColor)",
  sapShellColor: "var(--sapShellColor)",
  sapBackgroundColor: "var(--sapBackgroundColor)",
  sapFontFamily: "var(--sapFontFamily)",
  sapFontSize: "var(--sapFontSize)",
  sapTextColor: "var(--sapTextColor)",
  sapLinkColor: "var(--sapLinkColor)",
  sapCompanyLogo: "var(--sapCompanyLogo)",
  sapBackgroundImage: "var(--sapBackgroundImage)",
  sapBackgroundImageOpacity: "var(--sapBackgroundImageOpacity)",
  sapBackgroundImageRepeat: "var(--sapBackgroundImageRepeat)",
  sapSelectedColor: "var(--sapSelectedColor)",
  sapHoverColor: "var(--sapHoverColor)",
  sapActiveColor: "var(--sapActiveColor)",
  sapHighlightTextColor: "var(--sapHighlightTextColor)",
  sapTitleColor: "var(--sapTitleColor)",
  sapNegativeColor: "var(--sapNegativeColor)",
  sapCriticalColor: "var(--sapCriticalColor)",
  sapPositiveColor: "var(--sapPositiveColor)",
  sapInformativeColor: "var(--sapInformativeColor)",
  sapNeutralColor: "var(--sapNeutralColor)",
  sapNegativeElementColor: "var(--sapNegativeElementColor)",
  sapCriticalElementColor: "var(--sapCriticalElementColor)",
  sapPositiveElementColor: "var(--sapPositiveElementColor)",
  sapInformativeElementColor: "var(--sapInformativeElementColor)",
  sapNeutralElementColor: "var(--sapNeutralElementColor)",
  sapNegativeTextColor: "var(--sapNegativeTextColor)",
  sapCriticalTextColor: "var(--sapCriticalTextColor)",
  sapPositiveTextColor: "var(--sapPositiveTextColor)",
  sapInformativeTextColor: "var(--sapInformativeTextColor)",
  sapNeutralTextColor: "var(--sapNeutralTextColor)",
  sapErrorColor: "var(--sapErrorColor)",
  sapWarningColor: "var(--sapWarningColor)",
  sapSuccessColor: "var(--sapSuccessColor)",
  sapInformationColor: "var(--sapInformationColor)",
  sapErrorBackground: "var(--sapErrorBackground)",
  sapWarningBackground: "var(--sapWarningBackground)",
  sapSuccessBackground: "var(--sapSuccessBackground)",
  sapInformationBackground: "var(--sapInformationBackground)",
  sapNeutralBackground: "var(--sapNeutralBackground)",
  sapErrorBorderColor: "var(--sapErrorBorderColor)",
  sapWarningBorderColor: "var(--sapWarningBorderColor)",
  sapSuccessBorderColor: "var(--sapSuccessBorderColor)",
  sapInformationBorderColor: "var(--sapInformationBorderColor)",
  sapNeutralBorderColor: "var(--sapNeutralBorderColor)",
  sapElement_LineHeight: "var(--sapElement_LineHeight)",
  sapElement_Height: "var(--sapElement_Height)",
  sapElement_BorderWidth: "var(--sapElement_BorderWidth)",
  sapElement_BorderCornerRadius: "var(--sapElement_BorderCornerRadius)",
  sapElement_Compact_LineHeight: "var(--sapElement_Compact_LineHeight)",
  sapElement_Compact_Height: "var(--sapElement_Compact_Height)",
  sapElement_Condensed_LineHeight: "var(--sapElement_Condensed_LineHeight)",
  sapElement_Condensed_Height: "var(--sapElement_Condensed_Height)",
  sapContent_LineHeight: "var(--sapContent_LineHeight)",
  sapContent_IconHeight: "var(--sapContent_IconHeight)",
  sapContent_IconColor: "var(--sapContent_IconColor)",
  sapContent_ContrastIconColor: "var(--sapContent_ContrastIconColor)",
  sapContent_NonInteractiveIconColor: "var(--sapContent_NonInteractiveIconColor)",
  sapContent_MarkerIconColor: "var(--sapContent_MarkerIconColor)",
  sapContent_MarkerTextColor: "var(--sapContent_MarkerTextColor)",
  sapContent_MeasureIndicatorColor: "var(--sapContent_MeasureIndicatorColor)",
  sapContent_Selected_MeasureIndicatorColor: "var(--sapContent_Selected_MeasureIndicatorColor)",
  sapContent_Placeholderloading_Background: "var(--sapContent_Placeholderloading_Background)",
  sapContent_Placeholderloading_Gradient: "var(--sapContent_Placeholderloading_Gradient)",
  sapContent_ImagePlaceholderBackground: "var(--sapContent_ImagePlaceholderBackground)",
  sapContent_ImagePlaceholderForegroundColor: "var(--sapContent_ImagePlaceholderForegroundColor)",
  sapContent_RatedColor: "var(--sapContent_RatedColor)",
  sapContent_UnratedColor: "var(--sapContent_UnratedColor)",
  sapContent_BusyColor: "var(--sapContent_BusyColor)",
  sapContent_FocusColor: "var(--sapContent_FocusColor)",
  sapContent_FocusStyle: "var(--sapContent_FocusStyle)",
  sapContent_FocusWidth: "var(--sapContent_FocusWidth)",
  sapContent_ContrastFocusColor: "var(--sapContent_ContrastFocusColor)",
  sapContent_ShadowColor: "var(--sapContent_ShadowColor)",
  sapContent_ContrastShadowColor: "var(--sapContent_ContrastShadowColor)",
  sapContent_Shadow0: "var(--sapContent_Shadow0)",
  sapContent_Shadow1: "var(--sapContent_Shadow1)",
  sapContent_Shadow2: "var(--sapContent_Shadow2)",
  sapContent_Shadow3: "var(--sapContent_Shadow3)",
  sapContent_TextShadow: "var(--sapContent_TextShadow)",
  sapContent_ContrastTextShadow: "var(--sapContent_ContrastTextShadow)",
  sapContent_HeaderShadow: "var(--sapContent_HeaderShadow)",
  sapContent_Interaction_Shadow: "var(--sapContent_Interaction_Shadow)",
  sapContent_Selected_Shadow: "var(--sapContent_Selected_Shadow)",
  sapContent_Negative_Shadow: "var(--sapContent_Negative_Shadow)",
  sapContent_Critical_Shadow: "var(--sapContent_Critical_Shadow)",
  sapContent_Positive_Shadow: "var(--sapContent_Positive_Shadow)",
  sapContent_Informative_Shadow: "var(--sapContent_Informative_Shadow)",
  sapContent_Neutral_Shadow: "var(--sapContent_Neutral_Shadow)",
  sapContent_SearchHighlightColor: "var(--sapContent_SearchHighlightColor)",
  sapContent_HelpColor: "var(--sapContent_HelpColor)",
  sapContent_LabelColor: "var(--sapContent_LabelColor)",
  sapContent_MonospaceFontFamily: "var(--sapContent_MonospaceFontFamily)",
  sapContent_MonospaceBoldFontFamily: "var(--sapContent_MonospaceBoldFontFamily)",
  sapContent_IconFontFamily: "var(--sapContent_IconFontFamily)",
  sapContent_DisabledTextColor: "var(--sapContent_DisabledTextColor)",
  sapContent_DisabledOpacity: "var(--sapContent_DisabledOpacity)",
  sapContent_ContrastTextThreshold: "var(--sapContent_ContrastTextThreshold)",
  sapContent_ContrastTextColor: "var(--sapContent_ContrastTextColor)",
  sapContent_ForegroundColor: "var(--sapContent_ForegroundColor)",
  sapContent_ForegroundBorderColor: "var(--sapContent_ForegroundBorderColor)",
  sapContent_ForegroundTextColor: "var(--sapContent_ForegroundTextColor)",
  sapContent_BadgeBackground: "var(--sapContent_BadgeBackground)",
  sapContent_BadgeTextColor: "var(--sapContent_BadgeTextColor)",
  sapContent_DragAndDropActiveColor: "var(--sapContent_DragAndDropActiveColor)",
  sapContent_Selected_TextColor: "var(--sapContent_Selected_TextColor)",
  sapContent_Selected_Background: "var(--sapContent_Selected_Background)",
  sapContent_Selected_Hover_Background: "var(--sapContent_Selected_Hover_Background)",
  sapContent_Selected_ForegroundColor: "var(--sapContent_Selected_ForegroundColor)",
  sapContent_ForcedColorAdjust: "var(--sapContent_ForcedColorAdjust)",
  sapContent_Illustrative_Color1: "var(--sapContent_Illustrative_Color1)",
  sapContent_Illustrative_Color2: "var(--sapContent_Illustrative_Color2)",
  sapContent_Illustrative_Color3: "var(--sapContent_Illustrative_Color3)",
  sapContent_Illustrative_Color4: "var(--sapContent_Illustrative_Color4)",
  sapContent_Illustrative_Color5: "var(--sapContent_Illustrative_Color5)",
  sapContent_Illustrative_Color6: "var(--sapContent_Illustrative_Color6)",
  sapContent_Illustrative_Color7: "var(--sapContent_Illustrative_Color7)",
  sapContent_Illustrative_Color8: "var(--sapContent_Illustrative_Color8)",
  sapContent_Illustrative_Color9: "var(--sapContent_Illustrative_Color9)",
  sapContent_Illustrative_Color10: "var(--sapContent_Illustrative_Color10)",
  sapContent_Illustrative_Color11: "var(--sapContent_Illustrative_Color11)",
  sapContent_Illustrative_Color12: "var(--sapContent_Illustrative_Color12)",
  sapContent_Illustrative_Color13: "var(--sapContent_Illustrative_Color13)",
  sapContent_Illustrative_Color14: "var(--sapContent_Illustrative_Color14)",
  sapContent_Illustrative_Color15: "var(--sapContent_Illustrative_Color15)",
  sapContent_Illustrative_Color16: "var(--sapContent_Illustrative_Color16)",
  sapContent_Illustrative_Color17: "var(--sapContent_Illustrative_Color17)",
  sapContent_Illustrative_Color18: "var(--sapContent_Illustrative_Color18)",
  sapContent_Illustrative_Color19: "var(--sapContent_Illustrative_Color19)",
  sapContent_Illustrative_Color20: "var(--sapContent_Illustrative_Color20)",
  sapFontLightFamily: "var(--sapFontLightFamily)",
  sapFontBoldFamily: "var(--sapFontBoldFamily)",
  sapFontSemiboldFamily: "var(--sapFontSemiboldFamily)",
  sapFontSemiboldDuplexFamily: "var(--sapFontSemiboldDuplexFamily)",
  sapFontBlackFamily: "var(--sapFontBlackFamily)",
  sapFontHeaderFamily: "var(--sapFontHeaderFamily)",
  sapFontSmallSize: "var(--sapFontSmallSize)",
  sapFontLargeSize: "var(--sapFontLargeSize)",
  sapFontHeader1Size: "var(--sapFontHeader1Size)",
  sapFontHeader2Size: "var(--sapFontHeader2Size)",
  sapFontHeader3Size: "var(--sapFontHeader3Size)",
  sapFontHeader4Size: "var(--sapFontHeader4Size)",
  sapFontHeader5Size: "var(--sapFontHeader5Size)",
  sapFontHeader6Size: "var(--sapFontHeader6Size)",
  sapLink_TextDecoration: "var(--sapLink_TextDecoration)",
  sapLink_Hover_Color: "var(--sapLink_Hover_Color)",
  sapLink_Hover_TextDecoration: "var(--sapLink_Hover_TextDecoration)",
  sapLink_Active_Color: "var(--sapLink_Active_Color)",
  sapLink_Active_TextDecoration: "var(--sapLink_Active_TextDecoration)",
  sapLink_Visited_Color: "var(--sapLink_Visited_Color)",
  sapLink_InvertedColor: "var(--sapLink_InvertedColor)",
  sapLink_SubtleColor: "var(--sapLink_SubtleColor)",
  sapShell_Background: "var(--sapShell_Background)",
  sapShell_BackgroundImage: "var(--sapShell_BackgroundImage)",
  sapShell_BackgroundImageOpacity: "var(--sapShell_BackgroundImageOpacity)",
  sapShell_BackgroundImageRepeat: "var(--sapShell_BackgroundImageRepeat)",
  sapShell_BorderColor: "var(--sapShell_BorderColor)",
  sapShell_TextColor: "var(--sapShell_TextColor)",
  sapShell_InteractiveBackground: "var(--sapShell_InteractiveBackground)",
  sapShell_InteractiveTextColor: "var(--sapShell_InteractiveTextColor)",
  sapShell_InteractiveBorderColor: "var(--sapShell_InteractiveBorderColor)",
  sapShell_GroupTitleTextColor: "var(--sapShell_GroupTitleTextColor)",
  sapShell_GroupTitleTextShadow: "var(--sapShell_GroupTitleTextShadow)",
  sapShell_Hover_Background: "var(--sapShell_Hover_Background)",
  sapShell_Active_Background: "var(--sapShell_Active_Background)",
  sapShell_Active_TextColor: "var(--sapShell_Active_TextColor)",
  sapShell_Selected_Background: "var(--sapShell_Selected_Background)",
  sapShell_Selected_TextColor: "var(--sapShell_Selected_TextColor)",
  sapShell_Selected_Hover_Background: "var(--sapShell_Selected_Hover_Background)",
  sapShell_Favicon: "var(--sapShell_Favicon)",
  sapShell_Navigation_Background: "var(--sapShell_Navigation_Background)",
  sapShell_Navigation_Hover_Background: "var(--sapShell_Navigation_Hover_Background)",
  sapShell_Navigation_SelectedColor: "var(--sapShell_Navigation_SelectedColor)",
  sapShell_Navigation_Selected_TextColor: "var(--sapShell_Navigation_Selected_TextColor)",
  sapShell_Navigation_TextColor: "var(--sapShell_Navigation_TextColor)",
  sapShell_Navigation_Active_TextColor: "var(--sapShell_Navigation_Active_TextColor)",
  sapShell_Navigation_Active_Background: "var(--sapShell_Navigation_Active_Background)",
  sapShell_Shadow: "var(--sapShell_Shadow)",
  sapShell_NegativeColor: "var(--sapShell_NegativeColor)",
  sapShell_CriticalColor: "var(--sapShell_CriticalColor)",
  sapShell_PositiveColor: "var(--sapShell_PositiveColor)",
  sapShell_InformativeColor: "var(--sapShell_InformativeColor)",
  sapShell_NeutralColor: "var(--sapShell_NeutralColor)",
  sapShell_Assistant_ForegroundColor: "var(--sapShell_Assistant_ForegroundColor)",
  sapShell_Category_1_Background: "var(--sapShell_Category_1_Background)",
  sapShell_Category_1_BorderColor: "var(--sapShell_Category_1_BorderColor)",
  sapShell_Category_1_TextColor: "var(--sapShell_Category_1_TextColor)",
  sapShell_Category_1_TextShadow: "var(--sapShell_Category_1_TextShadow)",
  sapShell_Category_2_Background: "var(--sapShell_Category_2_Background)",
  sapShell_Category_2_BorderColor: "var(--sapShell_Category_2_BorderColor)",
  sapShell_Category_2_TextColor: "var(--sapShell_Category_2_TextColor)",
  sapShell_Category_2_TextShadow: "var(--sapShell_Category_2_TextShadow)",
  sapShell_Category_3_Background: "var(--sapShell_Category_3_Background)",
  sapShell_Category_3_BorderColor: "var(--sapShell_Category_3_BorderColor)",
  sapShell_Category_3_TextColor: "var(--sapShell_Category_3_TextColor)",
  sapShell_Category_3_TextShadow: "var(--sapShell_Category_3_TextShadow)",
  sapShell_Category_4_Background: "var(--sapShell_Category_4_Background)",
  sapShell_Category_4_BorderColor: "var(--sapShell_Category_4_BorderColor)",
  sapShell_Category_4_TextColor: "var(--sapShell_Category_4_TextColor)",
  sapShell_Category_4_TextShadow: "var(--sapShell_Category_4_TextShadow)",
  sapShell_Category_5_Background: "var(--sapShell_Category_5_Background)",
  sapShell_Category_5_BorderColor: "var(--sapShell_Category_5_BorderColor)",
  sapShell_Category_5_TextColor: "var(--sapShell_Category_5_TextColor)",
  sapShell_Category_5_TextShadow: "var(--sapShell_Category_5_TextShadow)",
  sapShell_Category_6_Background: "var(--sapShell_Category_6_Background)",
  sapShell_Category_6_BorderColor: "var(--sapShell_Category_6_BorderColor)",
  sapShell_Category_6_TextColor: "var(--sapShell_Category_6_TextColor)",
  sapShell_Category_6_TextShadow: "var(--sapShell_Category_6_TextShadow)",
  sapShell_Category_7_Background: "var(--sapShell_Category_7_Background)",
  sapShell_Category_7_BorderColor: "var(--sapShell_Category_7_BorderColor)",
  sapShell_Category_7_TextColor: "var(--sapShell_Category_7_TextColor)",
  sapShell_Category_7_TextShadow: "var(--sapShell_Category_7_TextShadow)",
  sapShell_Category_8_Background: "var(--sapShell_Category_8_Background)",
  sapShell_Category_8_BorderColor: "var(--sapShell_Category_8_BorderColor)",
  sapShell_Category_8_TextColor: "var(--sapShell_Category_8_TextColor)",
  sapShell_Category_8_TextShadow: "var(--sapShell_Category_8_TextShadow)",
  sapShell_Category_9_Background: "var(--sapShell_Category_9_Background)",
  sapShell_Category_9_BorderColor: "var(--sapShell_Category_9_BorderColor)",
  sapShell_Category_9_TextColor: "var(--sapShell_Category_9_TextColor)",
  sapShell_Category_9_TextShadow: "var(--sapShell_Category_9_TextShadow)",
  sapShell_Category_10_Background: "var(--sapShell_Category_10_Background)",
  sapShell_Category_10_BorderColor: "var(--sapShell_Category_10_BorderColor)",
  sapShell_Category_10_TextColor: "var(--sapShell_Category_10_TextColor)",
  sapShell_Category_10_TextShadow: "var(--sapShell_Category_10_TextShadow)",
  sapShell_Category_11_Background: "var(--sapShell_Category_11_Background)",
  sapShell_Category_11_BorderColor: "var(--sapShell_Category_11_BorderColor)",
  sapShell_Category_11_TextColor: "var(--sapShell_Category_11_TextColor)",
  sapShell_Category_11_TextShadow: "var(--sapShell_Category_11_TextShadow)",
  sapShell_Category_12_Background: "var(--sapShell_Category_12_Background)",
  sapShell_Category_12_BorderColor: "var(--sapShell_Category_12_BorderColor)",
  sapShell_Category_12_TextColor: "var(--sapShell_Category_12_TextColor)",
  sapShell_Category_12_TextShadow: "var(--sapShell_Category_12_TextShadow)",
  sapShell_Category_13_Background: "var(--sapShell_Category_13_Background)",
  sapShell_Category_13_BorderColor: "var(--sapShell_Category_13_BorderColor)",
  sapShell_Category_13_TextColor: "var(--sapShell_Category_13_TextColor)",
  sapShell_Category_13_TextShadow: "var(--sapShell_Category_13_TextShadow)",
  sapShell_Category_14_Background: "var(--sapShell_Category_14_Background)",
  sapShell_Category_14_BorderColor: "var(--sapShell_Category_14_BorderColor)",
  sapShell_Category_14_TextColor: "var(--sapShell_Category_14_TextColor)",
  sapShell_Category_14_TextShadow: "var(--sapShell_Category_14_TextShadow)",
  sapShell_Category_15_Background: "var(--sapShell_Category_15_Background)",
  sapShell_Category_15_BorderColor: "var(--sapShell_Category_15_BorderColor)",
  sapShell_Category_15_TextColor: "var(--sapShell_Category_15_TextColor)",
  sapShell_Category_15_TextShadow: "var(--sapShell_Category_15_TextShadow)",
  sapShell_Category_16_Background: "var(--sapShell_Category_16_Background)",
  sapShell_Category_16_BorderColor: "var(--sapShell_Category_16_BorderColor)",
  sapShell_Category_16_TextColor: "var(--sapShell_Category_16_TextColor)",
  sapShell_Category_16_TextShadow: "var(--sapShell_Category_16_TextShadow)",
  sapAssistant_Color1: "var(--sapAssistant_Color1)",
  sapAssistant_Color2: "var(--sapAssistant_Color2)",
  sapAssistant_BackgroundGradient: "var(--sapAssistant_BackgroundGradient)",
  sapAssistant_Background: "var(--sapAssistant_Background)",
  sapAssistant_BorderColor: "var(--sapAssistant_BorderColor)",
  sapAssistant_TextColor: "var(--sapAssistant_TextColor)",
  sapAssistant_Hover_Background: "var(--sapAssistant_Hover_Background)",
  sapAssistant_Hover_BorderColor: "var(--sapAssistant_Hover_BorderColor)",
  sapAssistant_Hover_TextColor: "var(--sapAssistant_Hover_TextColor)",
  sapAssistant_Active_Background: "var(--sapAssistant_Active_Background)",
  sapAssistant_Active_BorderColor: "var(--sapAssistant_Active_BorderColor)",
  sapAssistant_Active_TextColor: "var(--sapAssistant_Active_TextColor)",
  sapAssistant_Question_Background: "var(--sapAssistant_Question_Background)",
  sapAssistant_Question_BorderColor: "var(--sapAssistant_Question_BorderColor)",
  sapAssistant_Question_TextColor: "var(--sapAssistant_Question_TextColor)",
  sapAssistant_Answer_Background: "var(--sapAssistant_Answer_Background)",
  sapAssistant_Answer_BorderColor: "var(--sapAssistant_Answer_BorderColor)",
  sapAssistant_Answer_TextColor: "var(--sapAssistant_Answer_TextColor)",
  sapAvatar_1_Background: "var(--sapAvatar_1_Background)",
  sapAvatar_1_BorderColor: "var(--sapAvatar_1_BorderColor)",
  sapAvatar_1_TextColor: "var(--sapAvatar_1_TextColor)",
  sapAvatar_2_Background: "var(--sapAvatar_2_Background)",
  sapAvatar_2_BorderColor: "var(--sapAvatar_2_BorderColor)",
  sapAvatar_2_TextColor: "var(--sapAvatar_2_TextColor)",
  sapAvatar_3_Background: "var(--sapAvatar_3_Background)",
  sapAvatar_3_BorderColor: "var(--sapAvatar_3_BorderColor)",
  sapAvatar_3_TextColor: "var(--sapAvatar_3_TextColor)",
  sapAvatar_4_Background: "var(--sapAvatar_4_Background)",
  sapAvatar_4_BorderColor: "var(--sapAvatar_4_BorderColor)",
  sapAvatar_4_TextColor: "var(--sapAvatar_4_TextColor)",
  sapAvatar_5_Background: "var(--sapAvatar_5_Background)",
  sapAvatar_5_BorderColor: "var(--sapAvatar_5_BorderColor)",
  sapAvatar_5_TextColor: "var(--sapAvatar_5_TextColor)",
  sapAvatar_6_Background: "var(--sapAvatar_6_Background)",
  sapAvatar_6_BorderColor: "var(--sapAvatar_6_BorderColor)",
  sapAvatar_6_TextColor: "var(--sapAvatar_6_TextColor)",
  sapAvatar_7_Background: "var(--sapAvatar_7_Background)",
  sapAvatar_7_BorderColor: "var(--sapAvatar_7_BorderColor)",
  sapAvatar_7_TextColor: "var(--sapAvatar_7_TextColor)",
  sapAvatar_8_Background: "var(--sapAvatar_8_Background)",
  sapAvatar_8_BorderColor: "var(--sapAvatar_8_BorderColor)",
  sapAvatar_8_TextColor: "var(--sapAvatar_8_TextColor)",
  sapAvatar_9_Background: "var(--sapAvatar_9_Background)",
  sapAvatar_9_BorderColor: "var(--sapAvatar_9_BorderColor)",
  sapAvatar_9_TextColor: "var(--sapAvatar_9_TextColor)",
  sapAvatar_10_Background: "var(--sapAvatar_10_Background)",
  sapAvatar_10_BorderColor: "var(--sapAvatar_10_BorderColor)",
  sapAvatar_10_TextColor: "var(--sapAvatar_10_TextColor)",
  sapButton_Background: "var(--sapButton_Background)",
  sapButton_BorderColor: "var(--sapButton_BorderColor)",
  sapButton_BorderWidth: "var(--sapButton_BorderWidth)",
  sapButton_BorderCornerRadius: "var(--sapButton_BorderCornerRadius)",
  sapButton_TextColor: "var(--sapButton_TextColor)",
  sapButton_Hover_Background: "var(--sapButton_Hover_Background)",
  sapButton_Hover_BorderColor: "var(--sapButton_Hover_BorderColor)",
  sapButton_Hover_TextColor: "var(--sapButton_Hover_TextColor)",
  sapButton_IconColor: "var(--sapButton_IconColor)",
  sapButton_Active_Background: "var(--sapButton_Active_Background)",
  sapButton_Active_BorderColor: "var(--sapButton_Active_BorderColor)",
  sapButton_Active_TextColor: "var(--sapButton_Active_TextColor)",
  sapButton_Emphasized_Background: "var(--sapButton_Emphasized_Background)",
  sapButton_Emphasized_BorderColor: "var(--sapButton_Emphasized_BorderColor)",
  sapButton_Emphasized_TextColor: "var(--sapButton_Emphasized_TextColor)",
  sapButton_Emphasized_Hover_Background: "var(--sapButton_Emphasized_Hover_Background)",
  sapButton_Emphasized_Hover_BorderColor: "var(--sapButton_Emphasized_Hover_BorderColor)",
  sapButton_Emphasized_Hover_TextColor: "var(--sapButton_Emphasized_Hover_TextColor)",
  sapButton_Emphasized_Active_Background: "var(--sapButton_Emphasized_Active_Background)",
  sapButton_Emphasized_Active_BorderColor: "var(--sapButton_Emphasized_Active_BorderColor)",
  sapButton_Emphasized_Active_TextColor: "var(--sapButton_Emphasized_Active_TextColor)",
  sapButton_Emphasized_TextShadow: "var(--sapButton_Emphasized_TextShadow)",
  sapButton_Emphasized_FontWeight: "var(--sapButton_Emphasized_FontWeight)",
  sapButton_Reject_Background: "var(--sapButton_Reject_Background)",
  sapButton_Reject_BorderColor: "var(--sapButton_Reject_BorderColor)",
  sapButton_Reject_TextColor: "var(--sapButton_Reject_TextColor)",
  sapButton_Reject_Hover_Background: "var(--sapButton_Reject_Hover_Background)",
  sapButton_Reject_Hover_BorderColor: "var(--sapButton_Reject_Hover_BorderColor)",
  sapButton_Reject_Hover_TextColor: "var(--sapButton_Reject_Hover_TextColor)",
  sapButton_Reject_Active_Background: "var(--sapButton_Reject_Active_Background)",
  sapButton_Reject_Active_BorderColor: "var(--sapButton_Reject_Active_BorderColor)",
  sapButton_Reject_Active_TextColor: "var(--sapButton_Reject_Active_TextColor)",
  sapButton_Reject_Selected_Background: "var(--sapButton_Reject_Selected_Background)",
  sapButton_Reject_Selected_BorderColor: "var(--sapButton_Reject_Selected_BorderColor)",
  sapButton_Reject_Selected_TextColor: "var(--sapButton_Reject_Selected_TextColor)",
  sapButton_Reject_Selected_Hover_Background: "var(--sapButton_Reject_Selected_Hover_Background)",
  sapButton_Reject_Selected_Hover_BorderColor: "var(--sapButton_Reject_Selected_Hover_BorderColor)",
  sapButton_Accept_Background: "var(--sapButton_Accept_Background)",
  sapButton_Accept_BorderColor: "var(--sapButton_Accept_BorderColor)",
  sapButton_Accept_TextColor: "var(--sapButton_Accept_TextColor)",
  sapButton_Accept_Hover_Background: "var(--sapButton_Accept_Hover_Background)",
  sapButton_Accept_Hover_BorderColor: "var(--sapButton_Accept_Hover_BorderColor)",
  sapButton_Accept_Hover_TextColor: "var(--sapButton_Accept_Hover_TextColor)",
  sapButton_Accept_Active_Background: "var(--sapButton_Accept_Active_Background)",
  sapButton_Accept_Active_BorderColor: "var(--sapButton_Accept_Active_BorderColor)",
  sapButton_Accept_Active_TextColor: "var(--sapButton_Accept_Active_TextColor)",
  sapButton_Accept_Selected_Background: "var(--sapButton_Accept_Selected_Background)",
  sapButton_Accept_Selected_BorderColor: "var(--sapButton_Accept_Selected_BorderColor)",
  sapButton_Accept_Selected_TextColor: "var(--sapButton_Accept_Selected_TextColor)",
  sapButton_Accept_Selected_Hover_Background: "var(--sapButton_Accept_Selected_Hover_Background)",
  sapButton_Accept_Selected_Hover_BorderColor: "var(--sapButton_Accept_Selected_Hover_BorderColor)",
  sapButton_Lite_Background: "var(--sapButton_Lite_Background)",
  sapButton_Lite_BorderColor: "var(--sapButton_Lite_BorderColor)",
  sapButton_Lite_TextColor: "var(--sapButton_Lite_TextColor)",
  sapButton_Lite_Hover_Background: "var(--sapButton_Lite_Hover_Background)",
  sapButton_Lite_Hover_BorderColor: "var(--sapButton_Lite_Hover_BorderColor)",
  sapButton_Lite_Hover_TextColor: "var(--sapButton_Lite_Hover_TextColor)",
  sapButton_Lite_Active_Background: "var(--sapButton_Lite_Active_Background)",
  sapButton_Lite_Active_BorderColor: "var(--sapButton_Lite_Active_BorderColor)",
  sapButton_Selected_Background: "var(--sapButton_Selected_Background)",
  sapButton_Selected_BorderColor: "var(--sapButton_Selected_BorderColor)",
  sapButton_Selected_TextColor: "var(--sapButton_Selected_TextColor)",
  sapButton_Selected_Hover_Background: "var(--sapButton_Selected_Hover_Background)",
  sapButton_Selected_Hover_BorderColor: "var(--sapButton_Selected_Hover_BorderColor)",
  sapButton_Attention_Background: "var(--sapButton_Attention_Background)",
  sapButton_Attention_BorderColor: "var(--sapButton_Attention_BorderColor)",
  sapButton_Attention_TextColor: "var(--sapButton_Attention_TextColor)",
  sapButton_Attention_Hover_Background: "var(--sapButton_Attention_Hover_Background)",
  sapButton_Attention_Hover_BorderColor: "var(--sapButton_Attention_Hover_BorderColor)",
  sapButton_Attention_Hover_TextColor: "var(--sapButton_Attention_Hover_TextColor)",
  sapButton_Attention_Active_Background: "var(--sapButton_Attention_Active_Background)",
  sapButton_Attention_Active_BorderColor: "var(--sapButton_Attention_Active_BorderColor)",
  sapButton_Attention_Active_TextColor: "var(--sapButton_Attention_Active_TextColor)",
  sapButton_Attention_Selected_Background: "var(--sapButton_Attention_Selected_Background)",
  sapButton_Attention_Selected_BorderColor: "var(--sapButton_Attention_Selected_BorderColor)",
  sapButton_Attention_Selected_TextColor: "var(--sapButton_Attention_Selected_TextColor)",
  sapButton_Attention_Selected_Hover_Background: "var(--sapButton_Attention_Selected_Hover_Background)",
  sapButton_Attention_Selected_Hover_BorderColor: "var(--sapButton_Attention_Selected_Hover_BorderColor)",
  sapButton_Negative_Background: "var(--sapButton_Negative_Background)",
  sapButton_Negative_BorderColor: "var(--sapButton_Negative_BorderColor)",
  sapButton_Negative_TextColor: "var(--sapButton_Negative_TextColor)",
  sapButton_Negative_Hover_Background: "var(--sapButton_Negative_Hover_Background)",
  sapButton_Negative_Hover_BorderColor: "var(--sapButton_Negative_Hover_BorderColor)",
  sapButton_Negative_Hover_TextColor: "var(--sapButton_Negative_Hover_TextColor)",
  sapButton_Negative_Active_Background: "var(--sapButton_Negative_Active_Background)",
  sapButton_Negative_Active_BorderColor: "var(--sapButton_Negative_Active_BorderColor)",
  sapButton_Negative_Active_TextColor: "var(--sapButton_Negative_Active_TextColor)",
  sapButton_Critical_Background: "var(--sapButton_Critical_Background)",
  sapButton_Critical_BorderColor: "var(--sapButton_Critical_BorderColor)",
  sapButton_Critical_TextColor: "var(--sapButton_Critical_TextColor)",
  sapButton_Critical_Hover_Background: "var(--sapButton_Critical_Hover_Background)",
  sapButton_Critical_Hover_BorderColor: "var(--sapButton_Critical_Hover_BorderColor)",
  sapButton_Critical_Hover_TextColor: "var(--sapButton_Critical_Hover_TextColor)",
  sapButton_Critical_Active_Background: "var(--sapButton_Critical_Active_Background)",
  sapButton_Critical_Active_BorderColor: "var(--sapButton_Critical_Active_BorderColor)",
  sapButton_Critical_Active_TextColor: "var(--sapButton_Critical_Active_TextColor)",
  sapButton_Success_Background: "var(--sapButton_Success_Background)",
  sapButton_Success_BorderColor: "var(--sapButton_Success_BorderColor)",
  sapButton_Success_TextColor: "var(--sapButton_Success_TextColor)",
  sapButton_Success_Hover_Background: "var(--sapButton_Success_Hover_Background)",
  sapButton_Success_Hover_BorderColor: "var(--sapButton_Success_Hover_BorderColor)",
  sapButton_Success_Hover_TextColor: "var(--sapButton_Success_Hover_TextColor)",
  sapButton_Success_Active_Background: "var(--sapButton_Success_Active_Background)",
  sapButton_Success_Active_BorderColor: "var(--sapButton_Success_Active_BorderColor)",
  sapButton_Success_Active_TextColor: "var(--sapButton_Success_Active_TextColor)",
  sapButton_Information_Background: "var(--sapButton_Information_Background)",
  sapButton_Information_BorderColor: "var(--sapButton_Information_BorderColor)",
  sapButton_Information_TextColor: "var(--sapButton_Information_TextColor)",
  sapButton_Information_Hover_Background: "var(--sapButton_Information_Hover_Background)",
  sapButton_Information_Hover_BorderColor: "var(--sapButton_Information_Hover_BorderColor)",
  sapButton_Information_Hover_TextColor: "var(--sapButton_Information_Hover_TextColor)",
  sapButton_Information_Active_Background: "var(--sapButton_Information_Active_Background)",
  sapButton_Information_Active_BorderColor: "var(--sapButton_Information_Active_BorderColor)",
  sapButton_Information_Active_TextColor: "var(--sapButton_Information_Active_TextColor)",
  sapButton_Neutral_Background: "var(--sapButton_Neutral_Background)",
  sapButton_Neutral_BorderColor: "var(--sapButton_Neutral_BorderColor)",
  sapButton_Neutral_TextColor: "var(--sapButton_Neutral_TextColor)",
  sapButton_Neutral_Hover_Background: "var(--sapButton_Neutral_Hover_Background)",
  sapButton_Neutral_Hover_BorderColor: "var(--sapButton_Neutral_Hover_BorderColor)",
  sapButton_Neutral_Hover_TextColor: "var(--sapButton_Neutral_Hover_TextColor)",
  sapButton_Neutral_Active_Background: "var(--sapButton_Neutral_Active_Background)",
  sapButton_Neutral_Active_BorderColor: "var(--sapButton_Neutral_Active_BorderColor)",
  sapButton_Neutral_Active_TextColor: "var(--sapButton_Neutral_Active_TextColor)",
  sapButton_Track_Background: "var(--sapButton_Track_Background)",
  sapButton_Track_BorderColor: "var(--sapButton_Track_BorderColor)",
  sapButton_Track_TextColor: "var(--sapButton_Track_TextColor)",
  sapButton_Track_Hover_Background: "var(--sapButton_Track_Hover_Background)",
  sapButton_Track_Hover_BorderColor: "var(--sapButton_Track_Hover_BorderColor)",
  sapButton_Track_Selected_Background: "var(--sapButton_Track_Selected_Background)",
  sapButton_Track_Selected_BorderColor: "var(--sapButton_Track_Selected_BorderColor)",
  sapButton_Track_Selected_TextColor: "var(--sapButton_Track_Selected_TextColor)",
  sapButton_Track_Selected_Hover_Background: "var(--sapButton_Track_Selected_Hover_Background)",
  sapButton_Track_Selected_Hover_BorderColor: "var(--sapButton_Track_Selected_Hover_BorderColor)",
  sapButton_Handle_Background: "var(--sapButton_Handle_Background)",
  sapButton_Handle_BorderColor: "var(--sapButton_Handle_BorderColor)",
  sapButton_Handle_TextColor: "var(--sapButton_Handle_TextColor)",
  sapButton_Handle_Hover_Background: "var(--sapButton_Handle_Hover_Background)",
  sapButton_Handle_Hover_BorderColor: "var(--sapButton_Handle_Hover_BorderColor)",
  sapButton_Handle_Selected_Background: "var(--sapButton_Handle_Selected_Background)",
  sapButton_Handle_Selected_BorderColor: "var(--sapButton_Handle_Selected_BorderColor)",
  sapButton_Handle_Selected_TextColor: "var(--sapButton_Handle_Selected_TextColor)",
  sapButton_Handle_Selected_Hover_Background: "var(--sapButton_Handle_Selected_Hover_Background)",
  sapButton_Handle_Selected_Hover_BorderColor: "var(--sapButton_Handle_Selected_Hover_BorderColor)",
  sapButton_Track_Negative_Background: "var(--sapButton_Track_Negative_Background)",
  sapButton_Track_Negative_BorderColor: "var(--sapButton_Track_Negative_BorderColor)",
  sapButton_Track_Negative_TextColor: "var(--sapButton_Track_Negative_TextColor)",
  sapButton_Track_Negative_Hover_Background: "var(--sapButton_Track_Negative_Hover_Background)",
  sapButton_Track_Negative_Hover_BorderColor: "var(--sapButton_Track_Negative_Hover_BorderColor)",
  sapButton_Handle_Negative_Background: "var(--sapButton_Handle_Negative_Background)",
  sapButton_Handle_Negative_BorderColor: "var(--sapButton_Handle_Negative_BorderColor)",
  sapButton_Handle_Negative_TextColor: "var(--sapButton_Handle_Negative_TextColor)",
  sapButton_Handle_Negative_Hover_Background: "var(--sapButton_Handle_Negative_Hover_Background)",
  sapButton_Handle_Negative_Hover_BorderColor: "var(--sapButton_Handle_Negative_Hover_BorderColor)",
  sapButton_Track_Positive_Background: "var(--sapButton_Track_Positive_Background)",
  sapButton_Track_Positive_BorderColor: "var(--sapButton_Track_Positive_BorderColor)",
  sapButton_Track_Positive_TextColor: "var(--sapButton_Track_Positive_TextColor)",
  sapButton_Track_Positive_Hover_Background: "var(--sapButton_Track_Positive_Hover_Background)",
  sapButton_Track_Positive_Hover_BorderColor: "var(--sapButton_Track_Positive_Hover_BorderColor)",
  sapButton_Handle_Positive_Background: "var(--sapButton_Handle_Positive_Background)",
  sapButton_Handle_Positive_BorderColor: "var(--sapButton_Handle_Positive_BorderColor)",
  sapButton_Handle_Positive_TextColor: "var(--sapButton_Handle_Positive_TextColor)",
  sapButton_Handle_Positive_Hover_Background: "var(--sapButton_Handle_Positive_Hover_Background)",
  sapButton_Handle_Positive_Hover_BorderColor: "var(--sapButton_Handle_Positive_Hover_BorderColor)",
  sapButton_TokenBackground: "var(--sapButton_TokenBackground)",
  sapButton_TokenBorderColor: "var(--sapButton_TokenBorderColor)",
  sapField_Background: "var(--sapField_Background)",
  sapField_BackgroundStyle: "var(--sapField_BackgroundStyle)",
  sapField_TextColor: "var(--sapField_TextColor)",
  sapField_PlaceholderTextColor: "var(--sapField_PlaceholderTextColor)",
  sapField_BorderColor: "var(--sapField_BorderColor)",
  sapField_HelpBackground: "var(--sapField_HelpBackground)",
  sapField_BorderWidth: "var(--sapField_BorderWidth)",
  sapField_BorderStyle: "var(--sapField_BorderStyle)",
  sapField_BorderCornerRadius: "var(--sapField_BorderCornerRadius)",
  sapField_Shadow: "var(--sapField_Shadow)",
  sapField_Hover_Background: "var(--sapField_Hover_Background)",
  sapField_Hover_BackgroundStyle: "var(--sapField_Hover_BackgroundStyle)",
  sapField_Hover_BorderColor: "var(--sapField_Hover_BorderColor)",
  sapField_Hover_HelpBackground: "var(--sapField_Hover_HelpBackground)",
  sapField_Hover_Shadow: "var(--sapField_Hover_Shadow)",
  sapField_Hover_InvalidShadow: "var(--sapField_Hover_InvalidShadow)",
  sapField_Hover_WarningShadow: "var(--sapField_Hover_WarningShadow)",
  sapField_Hover_SuccessShadow: "var(--sapField_Hover_SuccessShadow)",
  sapField_Hover_InformationShadow: "var(--sapField_Hover_InformationShadow)",
  sapField_Active_BorderColor: "var(--sapField_Active_BorderColor)",
  sapField_Focus_Background: "var(--sapField_Focus_Background)",
  sapField_Focus_BorderColor: "var(--sapField_Focus_BorderColor)",
  sapField_Focus_HelpBackground: "var(--sapField_Focus_HelpBackground)",
  sapField_ReadOnly_Background: "var(--sapField_ReadOnly_Background)",
  sapField_ReadOnly_BackgroundStyle: "var(--sapField_ReadOnly_BackgroundStyle)",
  sapField_ReadOnly_BorderColor: "var(--sapField_ReadOnly_BorderColor)",
  sapField_ReadOnly_BorderStyle: "var(--sapField_ReadOnly_BorderStyle)",
  sapField_ReadOnly_HelpBackground: "var(--sapField_ReadOnly_HelpBackground)",
  sapField_RequiredColor: "var(--sapField_RequiredColor)",
  sapField_InvalidColor: "var(--sapField_InvalidColor)",
  sapField_InvalidBackground: "var(--sapField_InvalidBackground)",
  sapField_InvalidBackgroundStyle: "var(--sapField_InvalidBackgroundStyle)",
  sapField_InvalidBorderWidth: "var(--sapField_InvalidBorderWidth)",
  sapField_InvalidBorderStyle: "var(--sapField_InvalidBorderStyle)",
  sapField_InvalidShadow: "var(--sapField_InvalidShadow)",
  sapField_WarningColor: "var(--sapField_WarningColor)",
  sapField_WarningBackground: "var(--sapField_WarningBackground)",
  sapField_WarningBackgroundStyle: "var(--sapField_WarningBackgroundStyle)",
  sapField_WarningBorderWidth: "var(--sapField_WarningBorderWidth)",
  sapField_WarningBorderStyle: "var(--sapField_WarningBorderStyle)",
  sapField_WarningShadow: "var(--sapField_WarningShadow)",
  sapField_SuccessColor: "var(--sapField_SuccessColor)",
  sapField_SuccessBackground: "var(--sapField_SuccessBackground)",
  sapField_SuccessBackgroundStyle: "var(--sapField_SuccessBackgroundStyle)",
  sapField_SuccessBorderWidth: "var(--sapField_SuccessBorderWidth)",
  sapField_SuccessBorderStyle: "var(--sapField_SuccessBorderStyle)",
  sapField_SuccessShadow: "var(--sapField_SuccessShadow)",
  sapField_InformationColor: "var(--sapField_InformationColor)",
  sapField_InformationBackground: "var(--sapField_InformationBackground)",
  sapField_InformationBackgroundStyle: "var(--sapField_InformationBackgroundStyle)",
  sapField_InformationBorderWidth: "var(--sapField_InformationBorderWidth)",
  sapField_InformationBorderStyle: "var(--sapField_InformationBorderStyle)",
  sapField_InformationShadow: "var(--sapField_InformationShadow)",
  sapGroup_TitleBackground: "var(--sapGroup_TitleBackground)",
  sapGroup_TitleBorderColor: "var(--sapGroup_TitleBorderColor)",
  sapGroup_TitleTextColor: "var(--sapGroup_TitleTextColor)",
  sapGroup_Title_FontSize: "var(--sapGroup_Title_FontSize)",
  sapGroup_ContentBackground: "var(--sapGroup_ContentBackground)",
  sapGroup_ContentBorderColor: "var(--sapGroup_ContentBorderColor)",
  sapGroup_BorderWidth: "var(--sapGroup_BorderWidth)",
  sapGroup_BorderCornerRadius: "var(--sapGroup_BorderCornerRadius)",
  sapGroup_FooterBackground: "var(--sapGroup_FooterBackground)",
  sapToolbar_Background: "var(--sapToolbar_Background)",
  sapToolbar_SeparatorColor: "var(--sapToolbar_SeparatorColor)",
  sapList_HeaderBackground: "var(--sapList_HeaderBackground)",
  sapList_HeaderBorderColor: "var(--sapList_HeaderBorderColor)",
  sapList_HeaderTextColor: "var(--sapList_HeaderTextColor)",
  sapList_BorderColor: "var(--sapList_BorderColor)",
  sapList_BorderWidth: "var(--sapList_BorderWidth)",
  sapList_TextColor: "var(--sapList_TextColor)",
  sapList_Active_TextColor: "var(--sapList_Active_TextColor)",
  sapList_Active_Background: "var(--sapList_Active_Background)",
  sapList_SelectionBackgroundColor: "var(--sapList_SelectionBackgroundColor)",
  sapList_SelectionBorderColor: "var(--sapList_SelectionBorderColor)",
  sapList_Hover_SelectionBackground: "var(--sapList_Hover_SelectionBackground)",
  sapList_Background: "var(--sapList_Background)",
  sapList_Hover_Background: "var(--sapList_Hover_Background)",
  sapList_AlternatingBackground: "var(--sapList_AlternatingBackground)",
  sapList_GroupHeaderBackground: "var(--sapList_GroupHeaderBackground)",
  sapList_GroupHeaderBorderColor: "var(--sapList_GroupHeaderBorderColor)",
  sapList_GroupHeaderTextColor: "var(--sapList_GroupHeaderTextColor)",
  sapList_TableGroupHeaderBackground: "var(--sapList_TableGroupHeaderBackground)",
  sapList_TableGroupHeaderBorderColor: "var(--sapList_TableGroupHeaderBorderColor)",
  sapList_TableGroupHeaderTextColor: "var(--sapList_TableGroupHeaderTextColor)",
  sapList_FooterBackground: "var(--sapList_FooterBackground)",
  sapList_FooterTextColor: "var(--sapList_FooterTextColor)",
  sapList_TableFooterBorder: "var(--sapList_TableFooterBorder)",
  sapList_TableFixedBorderColor: "var(--sapList_TableFixedBorderColor)",
  sapMessage_ErrorBorderColor: "var(--sapMessage_ErrorBorderColor)",
  sapMessage_WarningBorderColor: "var(--sapMessage_WarningBorderColor)",
  sapMessage_SuccessBorderColor: "var(--sapMessage_SuccessBorderColor)",
  sapMessage_InformationBorderColor: "var(--sapMessage_InformationBorderColor)",
  sapPopover_BorderCornerRadius: "var(--sapPopover_BorderCornerRadius)",
  sapProgress_Background: "var(--sapProgress_Background)",
  sapProgress_BorderColor: "var(--sapProgress_BorderColor)",
  sapProgress_TextColor: "var(--sapProgress_TextColor)",
  sapProgress_FontSize: "var(--sapProgress_FontSize)",
  sapProgress_NegativeBackground: "var(--sapProgress_NegativeBackground)",
  sapProgress_NegativeBorderColor: "var(--sapProgress_NegativeBorderColor)",
  sapProgress_NegativeTextColor: "var(--sapProgress_NegativeTextColor)",
  sapProgress_CriticalBackground: "var(--sapProgress_CriticalBackground)",
  sapProgress_CriticalBorderColor: "var(--sapProgress_CriticalBorderColor)",
  sapProgress_CriticalTextColor: "var(--sapProgress_CriticalTextColor)",
  sapProgress_PositiveBackground: "var(--sapProgress_PositiveBackground)",
  sapProgress_PositiveBorderColor: "var(--sapProgress_PositiveBorderColor)",
  sapProgress_PositiveTextColor: "var(--sapProgress_PositiveTextColor)",
  sapProgress_InformationBackground: "var(--sapProgress_InformationBackground)",
  sapProgress_InformationBorderColor: "var(--sapProgress_InformationBorderColor)",
  sapProgress_InformationTextColor: "var(--sapProgress_InformationTextColor)",
  sapProgress_Value_Background: "var(--sapProgress_Value_Background)",
  sapProgress_Value_BorderColor: "var(--sapProgress_Value_BorderColor)",
  sapProgress_Value_TextColor: "var(--sapProgress_Value_TextColor)",
  sapProgress_Value_NegativeBackground: "var(--sapProgress_Value_NegativeBackground)",
  sapProgress_Value_NegativeBorderColor: "var(--sapProgress_Value_NegativeBorderColor)",
  sapProgress_Value_NegativeTextColor: "var(--sapProgress_Value_NegativeTextColor)",
  sapProgress_Value_CriticalBackground: "var(--sapProgress_Value_CriticalBackground)",
  sapProgress_Value_CriticalBorderColor: "var(--sapProgress_Value_CriticalBorderColor)",
  sapProgress_Value_CriticalTextColor: "var(--sapProgress_Value_CriticalTextColor)",
  sapProgress_Value_PositiveBackground: "var(--sapProgress_Value_PositiveBackground)",
  sapProgress_Value_PositiveBorderColor: "var(--sapProgress_Value_PositiveBorderColor)",
  sapProgress_Value_PositiveTextColor: "var(--sapProgress_Value_PositiveTextColor)",
  sapProgress_Value_InformationBackground: "var(--sapProgress_Value_InformationBackground)",
  sapProgress_Value_InformationBorderColor: "var(--sapProgress_Value_InformationBorderColor)",
  sapProgress_Value_InformationTextColor: "var(--sapProgress_Value_InformationTextColor)",
  sapScrollBar_FaceColor: "var(--sapScrollBar_FaceColor)",
  sapScrollBar_TrackColor: "var(--sapScrollBar_TrackColor)",
  sapScrollBar_BorderColor: "var(--sapScrollBar_BorderColor)",
  sapScrollBar_SymbolColor: "var(--sapScrollBar_SymbolColor)",
  sapScrollBar_Dimension: "var(--sapScrollBar_Dimension)",
  sapScrollBar_Hover_FaceColor: "var(--sapScrollBar_Hover_FaceColor)",
  sapSlider_Background: "var(--sapSlider_Background)",
  sapSlider_BorderColor: "var(--sapSlider_BorderColor)",
  sapSlider_Selected_Background: "var(--sapSlider_Selected_Background)",
  sapSlider_Selected_BorderColor: "var(--sapSlider_Selected_BorderColor)",
  sapSlider_HandleBackground: "var(--sapSlider_HandleBackground)",
  sapSlider_HandleBorderColor: "var(--sapSlider_HandleBorderColor)",
  sapSlider_RangeHandleBackground: "var(--sapSlider_RangeHandleBackground)",
  sapSlider_Hover_HandleBackground: "var(--sapSlider_Hover_HandleBackground)",
  sapSlider_Hover_HandleBorderColor: "var(--sapSlider_Hover_HandleBorderColor)",
  sapSlider_Hover_RangeHandleBackground: "var(--sapSlider_Hover_RangeHandleBackground)",
  sapSlider_Active_HandleBackground: "var(--sapSlider_Active_HandleBackground)",
  sapSlider_Active_HandleBorderColor: "var(--sapSlider_Active_HandleBorderColor)",
  sapSlider_Active_RangeHandleBackground: "var(--sapSlider_Active_RangeHandleBackground)",
  sapPageHeader_Background: "var(--sapPageHeader_Background)",
  sapPageHeader_BorderColor: "var(--sapPageHeader_BorderColor)",
  sapPageHeader_TextColor: "var(--sapPageHeader_TextColor)",
  sapPageFooter_Background: "var(--sapPageFooter_Background)",
  sapPageFooter_BorderColor: "var(--sapPageFooter_BorderColor)",
  sapPageFooter_TextColor: "var(--sapPageFooter_TextColor)",
  sapInfobar_Background: "var(--sapInfobar_Background)",
  sapInfobar_Hover_Background: "var(--sapInfobar_Hover_Background)",
  sapInfobar_Active_Background: "var(--sapInfobar_Active_Background)",
  sapInfobar_NonInteractive_Background: "var(--sapInfobar_NonInteractive_Background)",
  sapInfobar_TextColor: "var(--sapInfobar_TextColor)",
  sapObjectHeader_Background: "var(--sapObjectHeader_Background)",
  sapObjectHeader_Hover_Background: "var(--sapObjectHeader_Hover_Background)",
  sapObjectHeader_BorderColor: "var(--sapObjectHeader_BorderColor)",
  sapObjectHeader_Title_TextColor: "var(--sapObjectHeader_Title_TextColor)",
  sapObjectHeader_Title_FontSize: "var(--sapObjectHeader_Title_FontSize)",
  sapObjectHeader_Title_SnappedFontSize: "var(--sapObjectHeader_Title_SnappedFontSize)",
  sapObjectHeader_Title_FontFamily: "var(--sapObjectHeader_Title_FontFamily)",
  sapObjectHeader_Subtitle_TextColor: "var(--sapObjectHeader_Subtitle_TextColor)",
  sapBlockLayer_Background: "var(--sapBlockLayer_Background)",
  sapTile_Background: "var(--sapTile_Background)",
  sapTile_Hover_Background: "var(--sapTile_Hover_Background)",
  sapTile_Active_Background: "var(--sapTile_Active_Background)",
  sapTile_BorderColor: "var(--sapTile_BorderColor)",
  sapTile_BorderCornerRadius: "var(--sapTile_BorderCornerRadius)",
  sapTile_TitleTextColor: "var(--sapTile_TitleTextColor)",
  sapTile_TextColor: "var(--sapTile_TextColor)",
  sapTile_IconColor: "var(--sapTile_IconColor)",
  sapTile_SeparatorColor: "var(--sapTile_SeparatorColor)",
  sapTile_Interactive_BorderColor: "var(--sapTile_Interactive_BorderColor)",
  sapTile_OverlayBackground: "var(--sapTile_OverlayBackground)",
  sapTile_OverlayForegroundColor: "var(--sapTile_OverlayForegroundColor)",
  sapAccentColor1: "var(--sapAccentColor1)",
  sapAccentColor2: "var(--sapAccentColor2)",
  sapAccentColor3: "var(--sapAccentColor3)",
  sapAccentColor4: "var(--sapAccentColor4)",
  sapAccentColor5: "var(--sapAccentColor5)",
  sapAccentColor6: "var(--sapAccentColor6)",
  sapAccentColor7: "var(--sapAccentColor7)",
  sapAccentColor8: "var(--sapAccentColor8)",
  sapAccentColor9: "var(--sapAccentColor9)",
  sapAccentColor10: "var(--sapAccentColor10)",
  sapAccentBackgroundColor1: "var(--sapAccentBackgroundColor1)",
  sapAccentBackgroundColor2: "var(--sapAccentBackgroundColor2)",
  sapAccentBackgroundColor3: "var(--sapAccentBackgroundColor3)",
  sapAccentBackgroundColor4: "var(--sapAccentBackgroundColor4)",
  sapAccentBackgroundColor5: "var(--sapAccentBackgroundColor5)",
  sapAccentBackgroundColor6: "var(--sapAccentBackgroundColor6)",
  sapAccentBackgroundColor7: "var(--sapAccentBackgroundColor7)",
  sapAccentBackgroundColor8: "var(--sapAccentBackgroundColor8)",
  sapAccentBackgroundColor9: "var(--sapAccentBackgroundColor9)",
  sapAccentBackgroundColor10: "var(--sapAccentBackgroundColor10)",
  sapIndicationColor_1: "var(--sapIndicationColor_1)",
  sapIndicationColor_1_Background: "var(--sapIndicationColor_1_Background)",
  sapIndicationColor_1_BorderColor: "var(--sapIndicationColor_1_BorderColor)",
  sapIndicationColor_1_TextColor: "var(--sapIndicationColor_1_TextColor)",
  sapIndicationColor_1_Hover_Background: "var(--sapIndicationColor_1_Hover_Background)",
  sapIndicationColor_1_Active_Background: "var(--sapIndicationColor_1_Active_Background)",
  sapIndicationColor_1_Active_BorderColor: "var(--sapIndicationColor_1_Active_BorderColor)",
  sapIndicationColor_1_Active_TextColor: "var(--sapIndicationColor_1_Active_TextColor)",
  sapIndicationColor_1_Selected_Background: "var(--sapIndicationColor_1_Selected_Background)",
  sapIndicationColor_1_Selected_BorderColor: "var(--sapIndicationColor_1_Selected_BorderColor)",
  sapIndicationColor_1_Selected_TextColor: "var(--sapIndicationColor_1_Selected_TextColor)",
  sapIndicationColor_1b: "var(--sapIndicationColor_1b)",
  sapIndicationColor_1b_BorderColor: "var(--sapIndicationColor_1b_BorderColor)",
  sapIndicationColor_1b_Hover_Background: "var(--sapIndicationColor_1b_Hover_Background)",
  sapIndicationColor_2: "var(--sapIndicationColor_2)",
  sapIndicationColor_2_Background: "var(--sapIndicationColor_2_Background)",
  sapIndicationColor_2_BorderColor: "var(--sapIndicationColor_2_BorderColor)",
  sapIndicationColor_2_TextColor: "var(--sapIndicationColor_2_TextColor)",
  sapIndicationColor_2_Hover_Background: "var(--sapIndicationColor_2_Hover_Background)",
  sapIndicationColor_2_Active_Background: "var(--sapIndicationColor_2_Active_Background)",
  sapIndicationColor_2_Active_BorderColor: "var(--sapIndicationColor_2_Active_BorderColor)",
  sapIndicationColor_2_Active_TextColor: "var(--sapIndicationColor_2_Active_TextColor)",
  sapIndicationColor_2_Selected_Background: "var(--sapIndicationColor_2_Selected_Background)",
  sapIndicationColor_2_Selected_BorderColor: "var(--sapIndicationColor_2_Selected_BorderColor)",
  sapIndicationColor_2_Selected_TextColor: "var(--sapIndicationColor_2_Selected_TextColor)",
  sapIndicationColor_2b: "var(--sapIndicationColor_2b)",
  sapIndicationColor_2b_BorderColor: "var(--sapIndicationColor_2b_BorderColor)",
  sapIndicationColor_2b_Hover_Background: "var(--sapIndicationColor_2b_Hover_Background)",
  sapIndicationColor_3: "var(--sapIndicationColor_3)",
  sapIndicationColor_3_Background: "var(--sapIndicationColor_3_Background)",
  sapIndicationColor_3_BorderColor: "var(--sapIndicationColor_3_BorderColor)",
  sapIndicationColor_3_TextColor: "var(--sapIndicationColor_3_TextColor)",
  sapIndicationColor_3_Hover_Background: "var(--sapIndicationColor_3_Hover_Background)",
  sapIndicationColor_3_Active_Background: "var(--sapIndicationColor_3_Active_Background)",
  sapIndicationColor_3_Active_BorderColor: "var(--sapIndicationColor_3_Active_BorderColor)",
  sapIndicationColor_3_Active_TextColor: "var(--sapIndicationColor_3_Active_TextColor)",
  sapIndicationColor_3_Selected_Background: "var(--sapIndicationColor_3_Selected_Background)",
  sapIndicationColor_3_Selected_BorderColor: "var(--sapIndicationColor_3_Selected_BorderColor)",
  sapIndicationColor_3_Selected_TextColor: "var(--sapIndicationColor_3_Selected_TextColor)",
  sapIndicationColor_3b: "var(--sapIndicationColor_3b)",
  sapIndicationColor_3b_BorderColor: "var(--sapIndicationColor_3b_BorderColor)",
  sapIndicationColor_3b_Hover_Background: "var(--sapIndicationColor_3b_Hover_Background)",
  sapIndicationColor_4: "var(--sapIndicationColor_4)",
  sapIndicationColor_4_Background: "var(--sapIndicationColor_4_Background)",
  sapIndicationColor_4_BorderColor: "var(--sapIndicationColor_4_BorderColor)",
  sapIndicationColor_4_TextColor: "var(--sapIndicationColor_4_TextColor)",
  sapIndicationColor_4_Hover_Background: "var(--sapIndicationColor_4_Hover_Background)",
  sapIndicationColor_4_Active_Background: "var(--sapIndicationColor_4_Active_Background)",
  sapIndicationColor_4_Active_BorderColor: "var(--sapIndicationColor_4_Active_BorderColor)",
  sapIndicationColor_4_Active_TextColor: "var(--sapIndicationColor_4_Active_TextColor)",
  sapIndicationColor_4_Selected_Background: "var(--sapIndicationColor_4_Selected_Background)",
  sapIndicationColor_4_Selected_BorderColor: "var(--sapIndicationColor_4_Selected_BorderColor)",
  sapIndicationColor_4_Selected_TextColor: "var(--sapIndicationColor_4_Selected_TextColor)",
  sapIndicationColor_4b: "var(--sapIndicationColor_4b)",
  sapIndicationColor_4b_BorderColor: "var(--sapIndicationColor_4b_BorderColor)",
  sapIndicationColor_4b_Hover_Background: "var(--sapIndicationColor_4b_Hover_Background)",
  sapIndicationColor_5: "var(--sapIndicationColor_5)",
  sapIndicationColor_5_Background: "var(--sapIndicationColor_5_Background)",
  sapIndicationColor_5_BorderColor: "var(--sapIndicationColor_5_BorderColor)",
  sapIndicationColor_5_TextColor: "var(--sapIndicationColor_5_TextColor)",
  sapIndicationColor_5_Hover_Background: "var(--sapIndicationColor_5_Hover_Background)",
  sapIndicationColor_5_Active_Background: "var(--sapIndicationColor_5_Active_Background)",
  sapIndicationColor_5_Active_BorderColor: "var(--sapIndicationColor_5_Active_BorderColor)",
  sapIndicationColor_5_Active_TextColor: "var(--sapIndicationColor_5_Active_TextColor)",
  sapIndicationColor_5_Selected_Background: "var(--sapIndicationColor_5_Selected_Background)",
  sapIndicationColor_5_Selected_BorderColor: "var(--sapIndicationColor_5_Selected_BorderColor)",
  sapIndicationColor_5_Selected_TextColor: "var(--sapIndicationColor_5_Selected_TextColor)",
  sapIndicationColor_5b: "var(--sapIndicationColor_5b)",
  sapIndicationColor_5b_BorderColor: "var(--sapIndicationColor_5b_BorderColor)",
  sapIndicationColor_5b_Hover_Background: "var(--sapIndicationColor_5b_Hover_Background)",
  sapIndicationColor_6: "var(--sapIndicationColor_6)",
  sapIndicationColor_6_Background: "var(--sapIndicationColor_6_Background)",
  sapIndicationColor_6_BorderColor: "var(--sapIndicationColor_6_BorderColor)",
  sapIndicationColor_6_TextColor: "var(--sapIndicationColor_6_TextColor)",
  sapIndicationColor_6_Hover_Background: "var(--sapIndicationColor_6_Hover_Background)",
  sapIndicationColor_6_Active_Background: "var(--sapIndicationColor_6_Active_Background)",
  sapIndicationColor_6_Active_BorderColor: "var(--sapIndicationColor_6_Active_BorderColor)",
  sapIndicationColor_6_Active_TextColor: "var(--sapIndicationColor_6_Active_TextColor)",
  sapIndicationColor_6_Selected_Background: "var(--sapIndicationColor_6_Selected_Background)",
  sapIndicationColor_6_Selected_BorderColor: "var(--sapIndicationColor_6_Selected_BorderColor)",
  sapIndicationColor_6_Selected_TextColor: "var(--sapIndicationColor_6_Selected_TextColor)",
  sapIndicationColor_6b: "var(--sapIndicationColor_6b)",
  sapIndicationColor_6b_BorderColor: "var(--sapIndicationColor_6b_BorderColor)",
  sapIndicationColor_6b_Hover_Background: "var(--sapIndicationColor_6b_Hover_Background)",
  sapIndicationColor_7: "var(--sapIndicationColor_7)",
  sapIndicationColor_7_Background: "var(--sapIndicationColor_7_Background)",
  sapIndicationColor_7_BorderColor: "var(--sapIndicationColor_7_BorderColor)",
  sapIndicationColor_7_TextColor: "var(--sapIndicationColor_7_TextColor)",
  sapIndicationColor_7_Hover_Background: "var(--sapIndicationColor_7_Hover_Background)",
  sapIndicationColor_7_Active_Background: "var(--sapIndicationColor_7_Active_Background)",
  sapIndicationColor_7_Active_BorderColor: "var(--sapIndicationColor_7_Active_BorderColor)",
  sapIndicationColor_7_Active_TextColor: "var(--sapIndicationColor_7_Active_TextColor)",
  sapIndicationColor_7_Selected_Background: "var(--sapIndicationColor_7_Selected_Background)",
  sapIndicationColor_7_Selected_BorderColor: "var(--sapIndicationColor_7_Selected_BorderColor)",
  sapIndicationColor_7_Selected_TextColor: "var(--sapIndicationColor_7_Selected_TextColor)",
  sapIndicationColor_7b: "var(--sapIndicationColor_7b)",
  sapIndicationColor_7b_BorderColor: "var(--sapIndicationColor_7b_BorderColor)",
  sapIndicationColor_7b_Hover_Background: "var(--sapIndicationColor_7b_Hover_Background)",
  sapIndicationColor_8: "var(--sapIndicationColor_8)",
  sapIndicationColor_8_Background: "var(--sapIndicationColor_8_Background)",
  sapIndicationColor_8_BorderColor: "var(--sapIndicationColor_8_BorderColor)",
  sapIndicationColor_8_TextColor: "var(--sapIndicationColor_8_TextColor)",
  sapIndicationColor_8_Hover_Background: "var(--sapIndicationColor_8_Hover_Background)",
  sapIndicationColor_8_Active_Background: "var(--sapIndicationColor_8_Active_Background)",
  sapIndicationColor_8_Active_BorderColor: "var(--sapIndicationColor_8_Active_BorderColor)",
  sapIndicationColor_8_Active_TextColor: "var(--sapIndicationColor_8_Active_TextColor)",
  sapIndicationColor_8_Selected_Background: "var(--sapIndicationColor_8_Selected_Background)",
  sapIndicationColor_8_Selected_BorderColor: "var(--sapIndicationColor_8_Selected_BorderColor)",
  sapIndicationColor_8_Selected_TextColor: "var(--sapIndicationColor_8_Selected_TextColor)",
  sapIndicationColor_8b: "var(--sapIndicationColor_8b)",
  sapIndicationColor_8b_BorderColor: "var(--sapIndicationColor_8b_BorderColor)",
  sapIndicationColor_8b_Hover_Background: "var(--sapIndicationColor_8b_Hover_Background)",
  sapIndicationColor_9: "var(--sapIndicationColor_9)",
  sapIndicationColor_9_Background: "var(--sapIndicationColor_9_Background)",
  sapIndicationColor_9_BorderColor: "var(--sapIndicationColor_9_BorderColor)",
  sapIndicationColor_9_TextColor: "var(--sapIndicationColor_9_TextColor)",
  sapIndicationColor_9_Hover_Background: "var(--sapIndicationColor_9_Hover_Background)",
  sapIndicationColor_9_Active_Background: "var(--sapIndicationColor_9_Active_Background)",
  sapIndicationColor_9_Active_BorderColor: "var(--sapIndicationColor_9_Active_BorderColor)",
  sapIndicationColor_9_Active_TextColor: "var(--sapIndicationColor_9_Active_TextColor)",
  sapIndicationColor_9_Selected_Background: "var(--sapIndicationColor_9_Selected_Background)",
  sapIndicationColor_9_Selected_BorderColor: "var(--sapIndicationColor_9_Selected_BorderColor)",
  sapIndicationColor_9_Selected_TextColor: "var(--sapIndicationColor_9_Selected_TextColor)",
  sapIndicationColor_9b: "var(--sapIndicationColor_9b)",
  sapIndicationColor_9b_BorderColor: "var(--sapIndicationColor_9b_BorderColor)",
  sapIndicationColor_9b_Hover_Background: "var(--sapIndicationColor_9b_Hover_Background)",
  sapIndicationColor_10: "var(--sapIndicationColor_10)",
  sapIndicationColor_10_Background: "var(--sapIndicationColor_10_Background)",
  sapIndicationColor_10_BorderColor: "var(--sapIndicationColor_10_BorderColor)",
  sapIndicationColor_10_TextColor: "var(--sapIndicationColor_10_TextColor)",
  sapIndicationColor_10_Hover_Background: "var(--sapIndicationColor_10_Hover_Background)",
  sapIndicationColor_10_Active_Background: "var(--sapIndicationColor_10_Active_Background)",
  sapIndicationColor_10_Active_BorderColor: "var(--sapIndicationColor_10_Active_BorderColor)",
  sapIndicationColor_10_Active_TextColor: "var(--sapIndicationColor_10_Active_TextColor)",
  sapIndicationColor_10_Selected_Background: "var(--sapIndicationColor_10_Selected_Background)",
  sapIndicationColor_10_Selected_BorderColor: "var(--sapIndicationColor_10_Selected_BorderColor)",
  sapIndicationColor_10_Selected_TextColor: "var(--sapIndicationColor_10_Selected_TextColor)",
  sapIndicationColor_10b: "var(--sapIndicationColor_10b)",
  sapIndicationColor_10b_BorderColor: "var(--sapIndicationColor_10b_BorderColor)",
  sapIndicationColor_10b_Hover_Background: "var(--sapIndicationColor_10b_Hover_Background)",
  sapLegend_WorkingBackground: "var(--sapLegend_WorkingBackground)",
  sapLegend_NonWorkingBackground: "var(--sapLegend_NonWorkingBackground)",
  sapLegend_CurrentDateTime: "var(--sapLegend_CurrentDateTime)",
  sapLegendColor1: "var(--sapLegendColor1)",
  sapLegendColor2: "var(--sapLegendColor2)",
  sapLegendColor3: "var(--sapLegendColor3)",
  sapLegendColor4: "var(--sapLegendColor4)",
  sapLegendColor5: "var(--sapLegendColor5)",
  sapLegendColor6: "var(--sapLegendColor6)",
  sapLegendColor7: "var(--sapLegendColor7)",
  sapLegendColor8: "var(--sapLegendColor8)",
  sapLegendColor9: "var(--sapLegendColor9)",
  sapLegendColor10: "var(--sapLegendColor10)",
  sapLegendColor11: "var(--sapLegendColor11)",
  sapLegendColor12: "var(--sapLegendColor12)",
  sapLegendColor13: "var(--sapLegendColor13)",
  sapLegendColor14: "var(--sapLegendColor14)",
  sapLegendColor15: "var(--sapLegendColor15)",
  sapLegendColor16: "var(--sapLegendColor16)",
  sapLegendColor17: "var(--sapLegendColor17)",
  sapLegendColor18: "var(--sapLegendColor18)",
  sapLegendColor19: "var(--sapLegendColor19)",
  sapLegendColor20: "var(--sapLegendColor20)",
  sapLegendBackgroundColor1: "var(--sapLegendBackgroundColor1)",
  sapLegendBackgroundColor2: "var(--sapLegendBackgroundColor2)",
  sapLegendBackgroundColor3: "var(--sapLegendBackgroundColor3)",
  sapLegendBackgroundColor4: "var(--sapLegendBackgroundColor4)",
  sapLegendBackgroundColor5: "var(--sapLegendBackgroundColor5)",
  sapLegendBackgroundColor6: "var(--sapLegendBackgroundColor6)",
  sapLegendBackgroundColor7: "var(--sapLegendBackgroundColor7)",
  sapLegendBackgroundColor8: "var(--sapLegendBackgroundColor8)",
  sapLegendBackgroundColor9: "var(--sapLegendBackgroundColor9)",
  sapLegendBackgroundColor10: "var(--sapLegendBackgroundColor10)",
  sapLegendBackgroundColor11: "var(--sapLegendBackgroundColor11)",
  sapLegendBackgroundColor12: "var(--sapLegendBackgroundColor12)",
  sapLegendBackgroundColor13: "var(--sapLegendBackgroundColor13)",
  sapLegendBackgroundColor14: "var(--sapLegendBackgroundColor14)",
  sapLegendBackgroundColor15: "var(--sapLegendBackgroundColor15)",
  sapLegendBackgroundColor16: "var(--sapLegendBackgroundColor16)",
  sapLegendBackgroundColor17: "var(--sapLegendBackgroundColor17)",
  sapLegendBackgroundColor18: "var(--sapLegendBackgroundColor18)",
  sapLegendBackgroundColor19: "var(--sapLegendBackgroundColor19)",
  sapLegendBackgroundColor20: "var(--sapLegendBackgroundColor20)",
  sapChart_OrderedColor_1: "var(--sapChart_OrderedColor_1)",
  sapChart_OrderedColor_2: "var(--sapChart_OrderedColor_2)",
  sapChart_OrderedColor_3: "var(--sapChart_OrderedColor_3)",
  sapChart_OrderedColor_4: "var(--sapChart_OrderedColor_4)",
  sapChart_OrderedColor_5: "var(--sapChart_OrderedColor_5)",
  sapChart_OrderedColor_6: "var(--sapChart_OrderedColor_6)",
  sapChart_OrderedColor_7: "var(--sapChart_OrderedColor_7)",
  sapChart_OrderedColor_8: "var(--sapChart_OrderedColor_8)",
  sapChart_OrderedColor_9: "var(--sapChart_OrderedColor_9)",
  sapChart_OrderedColor_10: "var(--sapChart_OrderedColor_10)",
  sapChart_OrderedColor_11: "var(--sapChart_OrderedColor_11)",
  sapChart_Bad: "var(--sapChart_Bad)",
  sapChart_Critical: "var(--sapChart_Critical)",
  sapChart_Good: "var(--sapChart_Good)",
  sapChart_Neutral: "var(--sapChart_Neutral)",
  sapChart_Sequence_1: "var(--sapChart_Sequence_1)",
  sapChart_Sequence_2: "var(--sapChart_Sequence_2)",
  sapChart_Sequence_3: "var(--sapChart_Sequence_3)",
  sapChart_Sequence_4: "var(--sapChart_Sequence_4)",
  sapChart_Sequence_5: "var(--sapChart_Sequence_5)",
  sapChart_Sequence_6: "var(--sapChart_Sequence_6)",
  sapChart_Sequence_7: "var(--sapChart_Sequence_7)",
  sapChart_Sequence_8: "var(--sapChart_Sequence_8)",
  sapChart_Sequence_9: "var(--sapChart_Sequence_9)",
  sapChart_Sequence_10: "var(--sapChart_Sequence_10)",
  sapChart_Sequence_11: "var(--sapChart_Sequence_11)",
  sapChart_Sequence_Neutral: "var(--sapChart_Sequence_Neutral)",
  "sapFontUrl_SAP-icons_ttf": "var(--sapFontUrl_SAP-icons_ttf)",
  "sapFontUrl_SAP-icons_woff": "var(--sapFontUrl_SAP-icons_woff)",
  "sapFontUrl_SAP-icons_woff2": "var(--sapFontUrl_SAP-icons_woff2)",
  "sapFontUrl_SAP-icons-TNT_ttf": "var(--sapFontUrl_SAP-icons-TNT_ttf)",
  "sapFontUrl_SAP-icons-TNT_woff": "var(--sapFontUrl_SAP-icons-TNT_woff)",
  "sapFontUrl_SAP-icons-TNT_woff2": "var(--sapFontUrl_SAP-icons-TNT_woff2)",
  "sapFontUrl_SAP-icons-Business-Suite_ttf": "var(--sapFontUrl_SAP-icons-Business-Suite_ttf)",
  "sapFontUrl_SAP-icons-Business-Suite_woff": "var(--sapFontUrl_SAP-icons-Business-Suite_woff)",
  "sapFontUrl_SAP-icons-Business-Suite_woff2": "var(--sapFontUrl_SAP-icons-Business-Suite_woff2)",
  sapFontUrl_72_Regular_woff2: "var(--sapFontUrl_72_Regular_woff2)",
  sapFontUrl_72_Regular_woff: "var(--sapFontUrl_72_Regular_woff)",
  sapFontUrl_72_Regular_full_woff2: "var(--sapFontUrl_72_Regular_full_woff2)",
  sapFontUrl_72_Regular_full_woff: "var(--sapFontUrl_72_Regular_full_woff)",
  sapFontUrl_72_Bold_woff2: "var(--sapFontUrl_72_Bold_woff2)",
  sapFontUrl_72_Bold_woff: "var(--sapFontUrl_72_Bold_woff)",
  sapFontUrl_72_Bold_full_woff2: "var(--sapFontUrl_72_Bold_full_woff2)",
  sapFontUrl_72_Bold_full_woff: "var(--sapFontUrl_72_Bold_full_woff)",
  sapFontUrl_72_Semibold_woff2: "var(--sapFontUrl_72_Semibold_woff2)",
  sapFontUrl_72_Semibold_woff: "var(--sapFontUrl_72_Semibold_woff)",
  sapFontUrl_72_Semibold_full_woff2: "var(--sapFontUrl_72_Semibold_full_woff2)",
  sapFontUrl_72_Semibold_full_woff: "var(--sapFontUrl_72_Semibold_full_woff)",
  sapFontUrl_72_SemiboldDuplex_woff2: "var(--sapFontUrl_72_SemiboldDuplex_woff2)",
  sapFontUrl_72_SemiboldDuplex_woff: "var(--sapFontUrl_72_SemiboldDuplex_woff)",
  sapFontUrl_72_SemiboldDuplex_full_woff2: "var(--sapFontUrl_72_SemiboldDuplex_full_woff2)",
  sapFontUrl_72_SemiboldDuplex_full_woff: "var(--sapFontUrl_72_SemiboldDuplex_full_woff)",
  sapFontUrl_72_Light_woff2: "var(--sapFontUrl_72_Light_woff2)",
  sapFontUrl_72_Light_woff: "var(--sapFontUrl_72_Light_woff)",
  sapFontUrl_72_Light_full_woff2: "var(--sapFontUrl_72_Light_full_woff2)",
  sapFontUrl_72_Light_full_woff: "var(--sapFontUrl_72_Light_full_woff)",
  sapFontUrl_72_Black_woff2: "var(--sapFontUrl_72_Black_woff2)",
  sapFontUrl_72_Black_woff: "var(--sapFontUrl_72_Black_woff)",
  sapFontUrl_72_Black_full_woff2: "var(--sapFontUrl_72_Black_full_woff2)",
  sapFontUrl_72_Black_full_woff: "var(--sapFontUrl_72_Black_full_woff)",
  sapFontUrl_72_BoldItalic_woff2: "var(--sapFontUrl_72_BoldItalic_woff2)",
  sapFontUrl_72_BoldItalic_woff: "var(--sapFontUrl_72_BoldItalic_woff)",
  sapFontUrl_72_BoldItalic_full_woff2: "var(--sapFontUrl_72_BoldItalic_full_woff2)",
  sapFontUrl_72_BoldItalic_full_woff: "var(--sapFontUrl_72_BoldItalic_full_woff)",
  sapFontUrl_72_Condensed_woff2: "var(--sapFontUrl_72_Condensed_woff2)",
  sapFontUrl_72_Condensed_woff: "var(--sapFontUrl_72_Condensed_woff)",
  sapFontUrl_72_Condensed_full_woff2: "var(--sapFontUrl_72_Condensed_full_woff2)",
  sapFontUrl_72_Condensed_full_woff: "var(--sapFontUrl_72_Condensed_full_woff)",
  sapFontUrl_72_CondensedBold_woff2: "var(--sapFontUrl_72_CondensedBold_woff2)",
  sapFontUrl_72_CondensedBold_woff: "var(--sapFontUrl_72_CondensedBold_woff)",
  sapFontUrl_72_CondensedBold_full_woff2: "var(--sapFontUrl_72_CondensedBold_full_woff2)",
  sapFontUrl_72_CondensedBold_full_woff: "var(--sapFontUrl_72_CondensedBold_full_woff)",
  sapFontUrl_72_Italic_woff2: "var(--sapFontUrl_72_Italic_woff2)",
  sapFontUrl_72_Italic_woff: "var(--sapFontUrl_72_Italic_woff)",
  sapFontUrl_72_Italic_full_woff2: "var(--sapFontUrl_72_Italic_full_woff2)",
  sapFontUrl_72_Italic_full_woff: "var(--sapFontUrl_72_Italic_full_woff)",
  sapFontUrl_72Mono_Regular_woff2: "var(--sapFontUrl_72Mono_Regular_woff2)",
  sapFontUrl_72Mono_Regular_woff: "var(--sapFontUrl_72Mono_Regular_woff)",
  sapFontUrl_72Mono_Regular_full_woff2: "var(--sapFontUrl_72Mono_Regular_full_woff2)",
  sapFontUrl_72Mono_Regular_full_woff: "var(--sapFontUrl_72Mono_Regular_full_woff)",
  sapFontUrl_72Mono_Bold_woff2: "var(--sapFontUrl_72Mono_Bold_woff2)",
  sapFontUrl_72Mono_Bold_woff: "var(--sapFontUrl_72Mono_Bold_woff)",
  sapFontUrl_72Mono_Bold_full_woff2: "var(--sapFontUrl_72Mono_Bold_full_woff2)",
  sapFontUrl_72Mono_Bold_full_woff: "var(--sapFontUrl_72Mono_Bold_full_woff)"
};

// node_modules/@ui5/webcomponents-react-base/dist/styling/CssSizeVariables.js
var CssSizeVariablesNames;
(function(CssSizeVariablesNames2) {
  CssSizeVariablesNames2["ui5WcrBarHeight"] = "--_ui5wcr-BarHeight";
  CssSizeVariablesNames2["ui5WcrButtonTopBottomPadding"] = "--_ui5wcr-ButtonTopBottomPadding";
  CssSizeVariablesNames2["ui5WcrAnalyticalTableExpandButtonHeight"] = "--_ui5wcr-AnalyticalTableExpandButtonHeight";
  CssSizeVariablesNames2["ui5WcrAnalyticalTableExpandIconHeight"] = "--_ui5wcr-AnalyticalTableExpandIconHeight";
  CssSizeVariablesNames2["ui5WcrAnalyticalTableExpandIndicatorWidth"] = "--_ui5wcr-AnalyticalTableExpandIndicatorWidth";
  CssSizeVariablesNames2["ui5WcrAnalyticalTableRowHeight"] = "--_ui5wcr-AnalyticalTableRowHeight";
  CssSizeVariablesNames2["ui5WcrAnalyticalTableHeaderRowHeight"] = "--_ui5wcr-AnalyticalTableHeaderRowHeight";
  CssSizeVariablesNames2["ui5WcrAnalyticalTableTreePaddingLevel1"] = "--_ui5wcr-AnalyticalTableTreePaddingLevel1";
  CssSizeVariablesNames2["ui5WcrAnalyticalTableTreePaddingLevel2"] = "--_ui5wcr-AnalyticalTableTreePaddingLevel2";
  CssSizeVariablesNames2["ui5WcrAnalyticalTableTreePaddingLevel3"] = "--_ui5wcr-AnalyticalTableTreePaddingLevel3";
  CssSizeVariablesNames2["ui5WcrCheckBoxWidthHeight"] = "--_ui5wcr-CheckBoxWidthHeight";
  CssSizeVariablesNames2["ui5WcrAnalyticalTableSelectionColumnWidth"] = "--_ui5wcr-AnalyticalTableSelectionColumnWidth";
  CssSizeVariablesNames2["ui5WcrToolbarHeight"] = "--_ui5wcr-ToolbarHeight";
  CssSizeVariablesNames2["ui5WcrToolbarPopoverContentPadding"] = "--_ui5wcr-ToolbarPopoverContentPadding";
  CssSizeVariablesNames2["ui5WcrToolbarSeparatorHeight"] = "--_ui5wcr-ToolbarSeparatorHeight";
  CssSizeVariablesNames2["ui5WcrFormGroupTitleHeight"] = "--_ui5wcr-FormGroupTitleHeight";
  CssSizeVariablesNames2["ui5WcrMessageViewListItemHeightSingle"] = "--_ui5wcr-MessageViewListItemHeightSingle";
  CssSizeVariablesNames2["ui5WcrMessageViewListItemHeightByLine"] = "--_ui5wcr-MessageViewListItemHeightByLine";
  CssSizeVariablesNames2["ui5WcrMessageItemTitleFontSize"] = "--_ui5wcr-MessageItemTitleFontSize";
  CssSizeVariablesNames2["ui5WcrDialogHeaderHeight"] = "--_ui5wcr-DialogHeaderHeight";
  CssSizeVariablesNames2["ui5WcrDialogSubHeaderHeight"] = "--_ui5wcr-DialogSubHeaderHeight";
  CssSizeVariablesNames2["ui5WcrElementHeight"] = "--_ui5wcr-ElementHeight";
})(CssSizeVariablesNames || (CssSizeVariablesNames = {}));
var CssSizeVariables = new Proxy(CssSizeVariablesNames, {
  get: (target, prop) => `var(${target[prop]})`
});
var CozySizes = {
  [CssSizeVariablesNames.ui5WcrBarHeight]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrButtonTopBottomPadding]: `0.25rem 0`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandButtonHeight]: `2.25rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandIconHeight]: "1rem",
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandIndicatorWidth]: "1.875rem",
  [CssSizeVariablesNames.ui5WcrAnalyticalTableRowHeight]: `44px`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableHeaderRowHeight]: `44px`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel1]: `1rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel2]: `1.5rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel3]: `2rem`,
  [CssSizeVariablesNames.ui5WcrCheckBoxWidthHeight]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableSelectionColumnWidth]: `44px`,
  [CssSizeVariablesNames.ui5WcrToolbarHeight]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrToolbarPopoverContentPadding]: `0.25rem 0.5rem`,
  [CssSizeVariablesNames.ui5WcrToolbarSeparatorHeight]: `2rem`,
  [CssSizeVariablesNames.ui5WcrFormGroupTitleHeight]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrMessageViewListItemHeightSingle]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrMessageViewListItemHeightByLine]: `3.325rem`,
  [CssSizeVariablesNames.ui5WcrMessageItemTitleFontSize]: ThemingParameters.sapFontHeader5Size,
  [CssSizeVariablesNames.ui5WcrDialogHeaderHeight]: "2.75rem",
  [CssSizeVariablesNames.ui5WcrDialogSubHeaderHeight]: "3rem",
  [CssSizeVariablesNames.ui5WcrElementHeight]: ThemingParameters.sapElement_Height
};
var CompactSizes = {
  [CssSizeVariablesNames.ui5WcrBarHeight]: `2.5rem`,
  [CssSizeVariablesNames.ui5WcrButtonTopBottomPadding]: `0.1875rem 0`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandButtonHeight]: `1.5rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandIconHeight]: "0.75rem",
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandIndicatorWidth]: "1.625rem",
  [CssSizeVariablesNames.ui5WcrAnalyticalTableRowHeight]: `32px`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableHeaderRowHeight]: `32px`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel1]: `1.5rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel2]: `2.25rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel3]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrCheckBoxWidthHeight]: `2rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableSelectionColumnWidth]: `32px`,
  [CssSizeVariablesNames.ui5WcrToolbarHeight]: `2rem`,
  [CssSizeVariablesNames.ui5WcrToolbarPopoverContentPadding]: `0.1875rem 0.375rem`,
  [CssSizeVariablesNames.ui5WcrToolbarSeparatorHeight]: `1.5rem`,
  [CssSizeVariablesNames.ui5WcrFormGroupTitleHeight]: `2rem`,
  [CssSizeVariablesNames.ui5WcrMessageViewListItemHeightSingle]: `2rem`,
  [CssSizeVariablesNames.ui5WcrMessageViewListItemHeightByLine]: `3.25rem`,
  [CssSizeVariablesNames.ui5WcrMessageItemTitleFontSize]: ThemingParameters.sapFontHeader6Size,
  [CssSizeVariablesNames.ui5WcrDialogHeaderHeight]: "2.5rem",
  [CssSizeVariablesNames.ui5WcrDialogSubHeaderHeight]: "2.25rem",
  [CssSizeVariablesNames.ui5WcrElementHeight]: ThemingParameters.sapElement_Compact_Height
};

// node_modules/@ui5/webcomponents-react-base/dist/utils/debounce.js
var now = Date.now || (() => (/* @__PURE__ */ new Date()).getTime());
var debounce = (func, wait) => {
  let timeout;
  let previous;
  let args;
  let result;
  let context;
  const later = () => {
    const passed = now() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout)
        args = context = null;
    }
  };
  const debounced = function(..._args) {
    context = this;
    args = _args;
    previous = now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = args = context = null;
  };
  return debounced;
};

// node_modules/@ui5/webcomponents-react-base/dist/utils/throttle.js
var now2 = Date.now || (() => (/* @__PURE__ */ new Date()).getTime());

// node_modules/@ui5/webcomponents-react-base/dist/utils/index.js
var enrichEventWithDetails = (event, payload) => {
  const syntheticEventCast = event;
  if (typeof syntheticEventCast.persist === "function") {
    syntheticEventCast.persist();
  }
  const shouldCreateNewDetails = event.detail === null || event.detail === void 0 || typeof event.detail !== "object";
  const nativeDetail = typeof event.detail === "number" ? event.detail : null;
  Object.defineProperty(event, "detail", {
    value: shouldCreateNewDetails ? {} : event.detail,
    writable: true,
    configurable: true
  });
  if (nativeDetail) {
    Object.assign(event.detail, { nativeDetail });
  }
  Object.assign(event.detail, payload);
  return event;
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/pluginHooks/useAnnounceEmptyCells.js
var import_react7 = __toESM(require_react(), 1);
var useAnnounceEmptyCells = (hooks) => {
  const i18nBundleWc = useI18nBundle("@ui5/webcomponents");
  const emptyCellLabel = i18nBundleWc.getText(ARIA_LABEL_EMPTY_CELL);
  const setCellProps3 = (0, import_react7.useCallback)((cellProps, {
    cell: {
      value
    }
  }) => {
    if (typeof value !== "number" && !value) {
      return [cellProps, {
        "aria-label": `${cellProps["aria-label"]} ${emptyCellLabel}`
      }];
    }
    return cellProps;
  }, [emptyCellLabel]);
  hooks.getCellProps.push(setCellProps3);
};
useAnnounceEmptyCells.pluginName = "useAnnounceEmptyCells";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/pluginHooks/useIndeterminateRowSelection.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/enums/AnalyticalTableScaleWidthMode.js
var AnalyticalTableScaleWidthMode = function(AnalyticalTableScaleWidthMode2) {
  AnalyticalTableScaleWidthMode2["Default"] = "Default";
  AnalyticalTableScaleWidthMode2["Smart"] = "Smart";
  AnalyticalTableScaleWidthMode2["Grow"] = "Grow";
  return AnalyticalTableScaleWidthMode2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/AnalyticalTableScrollMode.js
var AnalyticalTableScrollMode = function(AnalyticalTableScrollMode2) {
  AnalyticalTableScrollMode2["auto"] = "auto";
  AnalyticalTableScrollMode2["center"] = "center";
  AnalyticalTableScrollMode2["end"] = "end";
  AnalyticalTableScrollMode2["start"] = "start";
  return AnalyticalTableScrollMode2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/AnalyticalTableSelectionBehavior.js
var AnalyticalTableSelectionBehavior = function(AnalyticalTableSelectionBehavior2) {
  AnalyticalTableSelectionBehavior2["Row"] = "Row";
  AnalyticalTableSelectionBehavior2["RowOnly"] = "RowOnly";
  AnalyticalTableSelectionBehavior2["RowSelector"] = "RowSelector";
  return AnalyticalTableSelectionBehavior2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/AnalyticalTableSelectionMode.js
var AnalyticalTableSelectionMode = function(AnalyticalTableSelectionMode2) {
  AnalyticalTableSelectionMode2["None"] = "None";
  AnalyticalTableSelectionMode2["Single"] = "Single";
  AnalyticalTableSelectionMode2["Multiple"] = "Multiple";
  return AnalyticalTableSelectionMode2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/AnalyticalTableSubComponentsBehavior.js
var AnalyticalTableSubComponentsBehavior = function(AnalyticalTableSubComponentsBehavior2) {
  AnalyticalTableSubComponentsBehavior2["Expandable"] = "Expandable";
  AnalyticalTableSubComponentsBehavior2["Visible"] = "Visible";
  AnalyticalTableSubComponentsBehavior2["IncludeHeight"] = "IncludeHeight";
  AnalyticalTableSubComponentsBehavior2["IncludeHeightExpandable"] = "IncludeHeightExpandable";
  return AnalyticalTableSubComponentsBehavior2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/AnalyticalTableVisibleRowCountMode.js
var AnalyticalTableVisibleRowCountMode = function(AnalyticalTableVisibleRowCountMode2) {
  AnalyticalTableVisibleRowCountMode2["Fixed"] = "Fixed";
  AnalyticalTableVisibleRowCountMode2["Auto"] = "Auto";
  AnalyticalTableVisibleRowCountMode2["AutoWithEmptyRows"] = "AutoWithEmptyRows";
  AnalyticalTableVisibleRowCountMode2["Interactive"] = "Interactive";
  return AnalyticalTableVisibleRowCountMode2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/ContentDensity.js
var ContentDensity = function(ContentDensity2) {
  ContentDensity2["Cozy"] = "Cozy";
  ContentDensity2["Compact"] = "Compact";
  return ContentDensity2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/DeviationIndicator.js
var DeviationIndicator = function(DeviationIndicator2) {
  DeviationIndicator2["Down"] = "Down";
  DeviationIndicator2["Up"] = "Up";
  DeviationIndicator2["None"] = "None";
  return DeviationIndicator2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/FlexBoxAlignItems.js
var FlexBoxAlignItems = function(FlexBoxAlignItems2) {
  FlexBoxAlignItems2["Start"] = "Start";
  FlexBoxAlignItems2["Center"] = "Center";
  FlexBoxAlignItems2["End"] = "End";
  FlexBoxAlignItems2["Baseline"] = "Baseline";
  FlexBoxAlignItems2["Stretch"] = "Stretch";
  return FlexBoxAlignItems2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/FlexBoxDirection.js
var FlexBoxDirection = function(FlexBoxDirection2) {
  FlexBoxDirection2["Column"] = "Column";
  FlexBoxDirection2["ColumnReverse"] = "ColumnReverse";
  FlexBoxDirection2["Row"] = "Row";
  FlexBoxDirection2["RowReverse"] = "RowReverse";
  return FlexBoxDirection2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/FlexBoxJustifyContent.js
var FlexBoxJustifyContent = function(FlexBoxJustifyContent2) {
  FlexBoxJustifyContent2["Start"] = "Start";
  FlexBoxJustifyContent2["Center"] = "Center";
  FlexBoxJustifyContent2["End"] = "End";
  FlexBoxJustifyContent2["SpaceAround"] = "SpaceAround";
  FlexBoxJustifyContent2["SpaceBetween"] = "SpaceBetween";
  return FlexBoxJustifyContent2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/FlexBoxWrap.js
var FlexBoxWrap = function(FlexBoxWrap2) {
  FlexBoxWrap2["NoWrap"] = "NoWrap";
  FlexBoxWrap2["Wrap"] = "Wrap";
  FlexBoxWrap2["WrapReverse"] = "WrapReverse";
  return FlexBoxWrap2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/GridPosition.js
var GridPosition = function(GridPosition2) {
  GridPosition2["Left"] = "Left";
  GridPosition2["Center"] = "Center";
  GridPosition2["Right"] = "Right";
  return GridPosition2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/IndicationColor.js
var IndicationColor = function(IndicationColor2) {
  IndicationColor2["Indication01"] = "Indication01";
  IndicationColor2["Indication02"] = "Indication02";
  IndicationColor2["Indication03"] = "Indication03";
  IndicationColor2["Indication04"] = "Indication04";
  IndicationColor2["Indication05"] = "Indication05";
  IndicationColor2["Indication06"] = "Indication06";
  IndicationColor2["Indication07"] = "Indication07";
  IndicationColor2["Indication08"] = "Indication08";
  return IndicationColor2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/MessageBoxAction.js
var MessageBoxAction = function(MessageBoxAction2) {
  MessageBoxAction2["Abort"] = "Abort";
  MessageBoxAction2["Cancel"] = "Cancel";
  MessageBoxAction2["Close"] = "Close";
  MessageBoxAction2["Delete"] = "Delete";
  MessageBoxAction2["Ignore"] = "Ignore";
  MessageBoxAction2["No"] = "No";
  MessageBoxAction2["OK"] = "OK";
  MessageBoxAction2["Retry"] = "Retry";
  MessageBoxAction2["Yes"] = "Yes";
  return MessageBoxAction2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/MessageBoxType.js
var MessageBoxType = function(MessageBoxType2) {
  MessageBoxType2["Confirm"] = "Confirm";
  MessageBoxType2["Error"] = "Error";
  MessageBoxType2["Information"] = "Information";
  MessageBoxType2["Success"] = "Success";
  MessageBoxType2["Warning"] = "Warning";
  return MessageBoxType2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/ObjectPageMode.js
var ObjectPageMode = function(ObjectPageMode2) {
  ObjectPageMode2["Default"] = "Default";
  ObjectPageMode2["IconTabBar"] = "IconTabBar";
  return ObjectPageMode2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/Size.js
var Size = function(Size2) {
  Size2["Small"] = "Small";
  Size2["Medium"] = "Medium";
  Size2["Large"] = "Large";
  return Size2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/TextAlign.js
var TextAlign = function(TextAlign2) {
  TextAlign2["Begin"] = "Begin";
  TextAlign2["End"] = "End";
  TextAlign2["Left"] = "Left";
  TextAlign2["Right"] = "Right";
  TextAlign2["Center"] = "Center";
  TextAlign2["Initial"] = "Initial";
  return TextAlign2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/Theme.js
var Theme = function(Theme2) {
  Theme2["sap_fiori_3"] = "sap_fiori_3";
  Theme2["sap_fiori_3_dark"] = "sap_fiori_3_dark";
  Theme2["sap_fiori_3_hcb"] = "sap_fiori_3_hcb";
  Theme2["sap_fiori_3_hcw"] = "sap_fiori_3_hcw";
  Theme2["sap_horizon"] = "sap_horizon";
  Theme2["sap_horizon_dark"] = "sap_horizon_dark";
  Theme2["sap_horizon_hcb"] = "sap_horizon_hcb";
  Theme2["sap_horizon_hcw"] = "sap_horizon_hcw";
  return Theme2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/ValueColor.js
var ValueColor = function(ValueColor2) {
  ValueColor2["Critical"] = "Critical";
  ValueColor2["Error"] = "Error";
  ValueColor2["Good"] = "Good";
  ValueColor2["Neutral"] = "Neutral";
  ValueColor2["None"] = "None";
  return ValueColor2;
}({});

// node_modules/@ui5/webcomponents-react/dist/enums/VerticalAlign.js
var VerticalAlign = function(VerticalAlign2) {
  VerticalAlign2["Bottom"] = "Bottom";
  VerticalAlign2["Inherit"] = "Inherit";
  VerticalAlign2["Middle"] = "Middle";
  VerticalAlign2["Top"] = "Top";
  return VerticalAlign2;
}({});

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/pluginHooks/useIndeterminateRowSelection.js
var getParentRow = (id, rowsById) => {
  let lastDotIndex = id.lastIndexOf(".");
  if (lastDotIndex === -1) {
    lastDotIndex = Infinity;
  }
  const parentRowId = id.slice(0, lastDotIndex);
  return [rowsById[parentRowId], lastDotIndex];
};
var getIndeterminateRowIds = (id) => {
  const indeterminateRowsById = {};
  const lastDotIndex = id.lastIndexOf(".");
  indeterminateRowsById[id] = true;
  if (lastDotIndex !== -1) {
    Object.assign(indeterminateRowsById, getIndeterminateRowIds(id.slice(0, lastDotIndex)));
  }
  return indeterminateRowsById;
};
var getIndeterminate = (rows, rowsById, state) => {
  const indeterminateRowsById = {};
  let usedParentIndex = "";
  const getIndeterminateRecursive = (subRows, rowIdScope = null) => {
    for (const row of subRows) {
      if (row.subRows.length > 0) {
        getIndeterminateRecursive(row.subRows, row.id);
      } else if (rowIdScope !== null && usedParentIndex !== rowIdScope) {
        usedParentIndex = rowIdScope;
        const checkIndeterminate = (rowId) => {
          const [parentRow, dotIndex] = getParentRow(rowId, rowsById);
          const selectedRows = parentRow.subRows.filter((item) => state.selectedRowIds[item.id]);
          const areAllSelected = parentRow.subRows.length === selectedRows.length;
          const isOneSelected = selectedRows.length > 0;
          if (isOneSelected && !areAllSelected) {
            const parentRowId = parentRow.id;
            Object.assign(indeterminateRowsById, getIndeterminateRowIds(parentRowId));
            return;
          }
          if (dotIndex !== Infinity) {
            checkIndeterminate(parentRow.id);
          }
          return;
        };
        checkIndeterminate(row.id);
      }
    }
  };
  getIndeterminateRecursive(rows);
  return indeterminateRowsById;
};
var useIndeterminateRowSelection = (onIndeterminateChange) => {
  const toggleRowProps = (rowProps, {
    row,
    instance
  }) => {
    let indeterminate;
    if (instance.isAllRowsSelected) {
      indeterminate = false;
    } else {
      indeterminate = instance?.state?.indeterminateRows?.[row.id] ?? false;
    }
    if (rowProps.checked && !instance.state.selectedRowIds[row.id]) {
      row.toggleRowSelected(true);
    }
    return [rowProps, {
      indeterminate,
      checked: indeterminate ? true : rowProps.checked
    }];
  };
  const stateReducer2 = (newState, action, prevState, instance) => {
    const {
      rowsById,
      state,
      rows
    } = instance;
    if (action.type === "INDETERMINATE_ROW_IDS") {
      if (action.payload === "reset") {
        return __spreadProps(__spreadValues({}, newState), {
          indeterminateRows: {}
        });
      }
      const indeterminateRowsById = getIndeterminate(rows, rowsById, state);
      return __spreadProps(__spreadValues({}, newState), {
        indeterminateRows: indeterminateRowsById
      });
    }
  };
  const useInstanceAfterData = (instance) => {
    const {
      data,
      dispatch,
      rowsById,
      state: {
        selectedRowIds,
        indeterminateRows
      },
      webComponentsReactProperties: {
        selectionMode,
        selectionBehavior,
        isTreeTable
      }
    } = instance;
    (0, import_react8.useEffect)(() => {
      if (isTreeTable && selectionMode === AnalyticalTableSelectionMode.Multiple && selectionBehavior !== AnalyticalTableSelectionBehavior.RowOnly && Object.keys(selectedRowIds).length && Object.keys(rowsById).length !== Object.keys(selectedRowIds).length) {
        dispatch({
          type: "INDETERMINATE_ROW_IDS"
        });
      } else if (typeof indeterminateRows === "object" && Object.keys(indeterminateRows).length) {
        dispatch({
          type: "INDETERMINATE_ROW_IDS",
          payload: "reset"
        });
      }
    }, [data, selectedRowIds, isTreeTable, selectionMode, selectionBehavior]);
    (0, import_react8.useEffect)(() => {
      if (typeof onIndeterminateChange === "function" && indeterminateRows) {
        onIndeterminateChange({
          indeterminateRowsById: indeterminateRows,
          tableInstance: instance
        });
      }
    }, [indeterminateRows]);
  };
  const useIndeterminate = (hooks) => {
    hooks.getToggleRowSelectedProps.push(toggleRowProps);
    hooks.stateReducers.push(stateReducer2);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
  };
  useIndeterminate.pluginName = "useIndeterminate";
  return useIndeterminate;
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/pluginHooks/useManualRowSelect.js
var import_react9 = __toESM(require_react(), 1);
var useManualRowSelect = (manualRowSelectedKey = "isSelected") => {
  const instanceAfterData = ({
    flatRows,
    toggleRowSelected
  }) => {
    (0, import_react9.useEffect)(() => {
      flatRows.forEach(({
        id,
        original
      }) => {
        if (manualRowSelectedKey in original) {
          toggleRowSelected(id, original.isSelected);
        }
      });
    }, [flatRows, manualRowSelectedKey]);
  };
  const manualRowSelect = (hooks) => {
    hooks.useInstanceAfterData.push(instanceAfterData);
  };
  manualRowSelect.pluginName = "useManualRowSelect";
  return manualRowSelect;
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/pluginHooks/useOnColumnResize.js
var import_react10 = __toESM(require_react(), 1);
var useOnColumnResize = (callback, options) => {
  const debouncedEvent = debounce(callback, options?.wait ?? 100);
  const useInstance = (instance) => {
    const {
      state,
      columns: columns6
    } = instance;
    const {
      columnResizing
    } = state;
    const {
      isResizingColumn,
      columnWidths
    } = columnResizing;
    const prevHeaderIsResizing = (0, import_react10.useRef)(void 0);
    (0, import_react10.useEffect)(() => {
      if (isResizingColumn && options?.liveUpdate) {
        const currentHeader = columns6.find((item) => item.id === isResizingColumn);
        debouncedEvent({
          columnWidth: columnWidths[isResizingColumn],
          header: currentHeader
        });
      }
    }, [columnResizing, options?.liveUpdate, columns6]);
    (0, import_react10.useEffect)(() => {
      if (options?.liveUpdate) {
        return () => debouncedEvent.cancel();
      }
    }, [options?.liveUpdate]);
    (0, import_react10.useEffect)(() => {
      if (!options?.liveUpdate) {
        const currentHeader = columns6.find((item) => item.id === prevHeaderIsResizing.current);
        if (isResizingColumn) {
          prevHeaderIsResizing.current = isResizingColumn;
        }
        if (!isResizingColumn && prevHeaderIsResizing.current) {
          callback({
            columnWidth: columnWidths[prevHeaderIsResizing.current],
            header: currentHeader
          });
        }
      }
    }, [columnResizing, options?.liveUpdate, columns6]);
  };
  const useOnColumnResizeHooks = (hooks) => {
    hooks.useFinalInstance.push(useInstance);
  };
  useOnColumnResizeHooks.pluginName = "useOnColumnResize";
  return useOnColumnResizeHooks;
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/pluginHooks/useOrderedMultiSort.js
var useOrderedMultiSort = (orderedIds) => {
  const useOrderedMultiSortPlugin = (hooks) => {
    hooks.stateReducers.push((newState, action) => {
      if (action.type === "toggleSortBy") {
        if (newState.sortBy.length <= 1) {
          return newState;
        } else {
          const clonedSortBy = [...newState.sortBy];
          const updatedSortBy = orderedIds.flatMap((sortedId) => {
            const sortedItemIndex = clonedSortBy.findIndex((item) => item.id === sortedId);
            if (sortedItemIndex !== -1) {
              const sortedEntry = clonedSortBy[sortedItemIndex];
              clonedSortBy.splice(sortedItemIndex, 1);
              return [sortedEntry];
            }
            return [];
          });
          return __spreadProps(__spreadValues({}, newState), {
            sortBy: [...updatedSortBy, ...clonedSortBy]
          });
        }
      }
      return newState;
    });
  };
  useOrderedMultiSortPlugin.pluginName = "useOrderedMultiSort";
  return useOrderedMultiSortPlugin;
};

// node_modules/@ui5/webcomponents-react/dist/internal/withWebComponent.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/internal/utils.js
var import_react11 = __toESM(require_react());
function flattenFragments(children, depth = 1) {
  const flatChildren = [];
  const removeFragments = (element, level = 0, key = []) => {
    if (!element) {
      return;
    }
    if (Array.isArray(element)) {
      import_react11.Children.toArray(element).forEach((child, index) => {
        removeFragments(child, level + 1, [...key, index]);
      });
      return;
    }
    if (element.type === import_react11.Fragment && level <= depth) {
      import_react11.Children.toArray(element.props?.children).forEach((item, index) => {
        removeFragments(item, level + 1, [...key, index]);
      });
    } else if (typeof element === "string" || typeof element === "number") {
      flatChildren.push(element);
    } else {
      flatChildren.push((0, import_react11.cloneElement)(element, {
        key: key.join(".")
      }));
    }
  };
  removeFragments(children);
  return flatChildren;
}
var capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);
var camelToKebabCase = (s) => s.replace(/([A-Z])/g, (a, b) => `-${b.toLowerCase()}`);
var kebabToCamelCase = (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
function getUi5TagWithSuffix(baseTagName) {
  const tagNameSuffix = getEffectiveScopingSuffixForTag(baseTagName);
  return tagNameSuffix ? `${baseTagName}-${tagNameSuffix}` : baseTagName;
}
function trimAndRemoveSpaces(value) {
  return value.trim().replace(/\s\s+/g, " ");
}
var cssVarVersionInfoPrefix = getScopedVarName("--_ui5_").replace("--_ui5_", "");
function getTagNameWithoutScopingSuffix(tagName) {
  const tagNameSuffix = getCustomElementsScopingSuffix();
  return tagNameSuffix ? tagName.replace(`-${tagNameSuffix.toUpperCase()}`, "") : tagName;
}

// node_modules/@ui5/webcomponents-react/dist/internal/withWebComponent.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var createEventPropName = (eventName) => `on${capitalizeFirstLetter(kebabToCamelCase(eventName))}`;
var isPrimitiveAttribute = (value) => {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
};
var definedWebComponents = /* @__PURE__ */ new Set([]);
var withWebComponent = (tagName, regularProperties, booleanProperties, slotProperties, eventProperties, loader) => {
  return (0, import_react12.forwardRef)((props, wcRef) => {
    const _a = props, {
      className,
      children,
      waitForDefine
    } = _a, rest = __objRest(_a, [
      "className",
      "children",
      "waitForDefine"
    ]);
    const [componentRef, ref] = useSyncRef(wcRef);
    const tagNameSuffix = getEffectiveScopingSuffixForTag(tagName);
    const Component = tagNameSuffix ? `${tagName}-${tagNameSuffix}` : tagName;
    const [isDefined, setIsDefined] = (0, import_react12.useState)(definedWebComponents.has(Component));
    const regularProps = regularProperties.reduce((acc, name24) => {
      if (rest.hasOwnProperty(name24) && isPrimitiveAttribute(rest[name24])) {
        return __spreadProps(__spreadValues({}, acc), {
          [camelToKebabCase(name24)]: rest[name24]
        });
      }
      return acc;
    }, {});
    const booleanProps = booleanProperties.reduce((acc, name24) => {
      if (rest[name24] === true || rest[name24] === "true") {
        return __spreadProps(__spreadValues({}, acc), {
          [camelToKebabCase(name24)]: true
        });
      }
      return acc;
    }, {});
    const slots = slotProperties.reduce((acc, name24) => {
      const slotValue = rest[name24];
      if (!slotValue) {
        return acc;
      }
      if (rest[name24]?.$$typeof === Symbol.for("react.portal")) {
        console.warn("ReactPortal is not supported for slot props.");
        return acc;
      }
      const slottedChildren = [];
      let index = 0;
      const removeFragments = (element) => {
        if (!(0, import_react12.isValidElement)(element)) return;
        if (element.type === import_react12.Fragment) {
          const elementChildren = element.props?.children;
          if (Array.isArray(elementChildren)) {
            elementChildren.forEach((item) => {
              if (Array.isArray(item)) {
                item.forEach(removeFragments);
              } else {
                removeFragments(item);
              }
            });
          } else {
            removeFragments(elementChildren);
          }
        } else {
          slottedChildren.push((0, import_react12.cloneElement)(element, {
            key: element.key ?? `${name24}-${index}`,
            slot: name24
          }));
          index++;
        }
      };
      if (Array.isArray(slotValue)) {
        slotValue.forEach((item) => {
          removeFragments(item);
        });
      } else {
        removeFragments(slotValue);
      }
      return [...acc, ...slottedChildren];
    }, []);
    useIsomorphicLayoutEffect(() => {
      const localRef = ref.current;
      const eventRegistry = {};
      if (!waitForDefine || isDefined) {
        eventProperties.forEach((eventName) => {
          const eventHandler = rest[createEventPropName(eventName)];
          if (typeof eventHandler === "function") {
            eventRegistry[eventName] = eventHandler;
            localRef?.addEventListener(eventName, eventRegistry[eventName]);
          }
        });
        return () => {
          for (const eventName in eventRegistry) {
            localRef?.removeEventListener(eventName, eventRegistry[eventName]);
          }
        };
      }
    }, [...eventProperties.map((eventName) => rest[createEventPropName(eventName)]), isDefined, waitForDefine]);
    const nonWebComponentRelatedProps = Object.entries(rest).filter(([key]) => !regularProperties.includes(key)).filter(([key]) => !slotProperties.includes(key)).filter(([key]) => !booleanProperties.includes(key)).filter(([key]) => !eventProperties.map((eventName) => createEventPropName(eventName)).includes(key)).reduce((acc, [key, val]) => {
      if (!key.startsWith("aria-") && !key.startsWith("data-") && val === false) {
        return acc;
      }
      acc[key] = val;
      return acc;
    }, {});
    (0, import_react12.useEffect)(() => {
      if (waitForDefine && !isDefined) {
        customElements.whenDefined(Component).then(() => {
          setIsDefined(true);
          definedWebComponents.add(Component);
        });
      }
    }, [Component, waitForDefine, isDefined]);
    const propsToApply = regularProperties.map((prop) => ({
      name: prop,
      value: props[prop]
    }));
    (0, import_react12.useEffect)(() => {
      void customElements.whenDefined(Component).then(() => {
        for (const prop of propsToApply) {
          if (prop.value != null && !isPrimitiveAttribute(prop.value)) {
            if (ref.current) {
              ref.current[prop.name] = prop.value;
            }
          }
        }
      });
    }, [Component, ...propsToApply]);
    if (waitForDefine && !isDefined) {
      return null;
    }
    return (0, import_jsx_runtime.jsxs)(Component, __spreadProps(__spreadValues(__spreadValues(__spreadValues({
      ref: componentRef
    }, booleanProps), regularProps), nonWebComponentRelatedProps), {
      class: className,
      suppressHydrationWarning: true,
      children: [slots, children]
    }));
  });
};

// node_modules/@ui5/webcomponents-react/dist/webComponents/CheckBox/index.js
var CheckBox = withWebComponent("ui5-checkbox", ["accessibleName", "accessibleNameRef", "name", "text", "valueState", "wrappingType"], ["checked", "disabled", "displayOnly", "indeterminate", "readonly", "required"], [], ["change"]);
CheckBox.displayName = "CheckBox";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/util/index.js
var reOpenBracket = /\[/g;
var reCloseBracket = /]/g;
function makePathArray(obj) {
  return flattenDeep(obj).map((d) => String(d).replace(".", "_")).join(".").replace(reOpenBracket, ".").replace(reCloseBracket, "").split(".");
}
function flattenDeep(arr, newArr = []) {
  if (!Array.isArray(arr)) {
    newArr.push(arr);
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}
var pathObjCache = /* @__PURE__ */ new Map();
function getBy(obj, path, def) {
  if (!path) {
    return obj;
  }
  const cacheKey = typeof path === "function" ? path : JSON.stringify(path);
  const pathObj = pathObjCache.get(cacheKey) || (() => {
    const pathObj2 = makePathArray(path);
    pathObjCache.set(cacheKey, pathObj2);
    return pathObj2;
  })();
  let val;
  try {
    val = pathObj.reduce((cursor, pathPart) => {
      return cursor[pathPart];
    }, obj);
  } catch (e) {
  }
  return typeof val !== "undefined" ? val : def;
}
var tagNamesWhichShouldNotSelectARow = /* @__PURE__ */ new Set(["UI5-AVATAR", "UI5-BUTTON", "UI5-CALENDAR", "UI5-CHECKBOX", "UI5-COLOR-PICKER", "UI5-COMBOBOX", "UI5-DATE-PICKER", "UI5-DATERANGE-PICKER", "UI5-DATETIME-PICKER", "UI5-DURATION-PICKER", "UI5-FILE-UPLOADER", "UI5-ICON", "UI5-INPUT", "UI5-LINK", "UI5-MULTI-COMBOBOX", "UI5-MULTI-INPUT", "UI5-RADIO-BUTTON", "UI5-RANGE-SLIDER", "UI5-RATING-INDICATOR", "UI5-SEGMENTED-BUTTON", "UI5-SELECT", "UI5-SLIDER", "UI5-STEP-INPUT", "UI5-SWITCH", "UI5-TEXT-AREA", "UI5-TIME-PICKER", "UI5-TOGGLE-BUTTON", "UI5-UPLOAD-COLLECTION"]);
var resolveCellAlignment = (column) => {
  const style = {};
  switch (column.hAlign) {
    case TextAlign.Begin:
      style.justifyContent = "flex-start";
      style.textAlign = "start";
      break;
    case TextAlign.Center:
      style.justifyContent = "center";
      style.textAlign = "center";
      break;
    case TextAlign.End:
      style.justifyContent = "flex-end";
      style.textAlign = "end";
      break;
    case TextAlign.Left:
      style.justifyContent = "left";
      style.textAlign = "left";
      break;
    case TextAlign.Right:
      style.justifyContent = "right";
      style.textAlign = "right";
      break;
    case TextAlign.Initial:
      style.justifyContent = "initial";
      style.textAlign = "initial";
      break;
  }
  switch (column.vAlign) {
    case VerticalAlign.Bottom:
      style.alignItems = "flex-end";
      break;
    case VerticalAlign.Middle:
      style.alignItems = "center";
      break;
    case VerticalAlign.Top:
      style.alignItems = "flex-start";
      break;
  }
  return style;
};
function getRowHeight(rowHeight, tableRef) {
  if (rowHeight) {
    return rowHeight;
  }
  if (typeof document !== "undefined") {
    return parseInt(getComputedStyle(tableRef.current ?? document.body).getPropertyValue("--_ui5wcr-AnalyticalTableRowHeight") || "44");
  }
  return 44;
}
function getSubRowsByString(subRowsKey, row) {
  if (!subRowsKey.includes(".")) {
    return row.subRows || row[subRowsKey];
  } else {
    return subRowsKey.split(".").reduce((acc, cur) => acc?.[cur], row);
  }
}
function getLeafHeaders(header) {
  const leafHeaders = [];
  const recurseHeader = (header2) => {
    if (header2.columns && header2.columns.length) {
      header2.columns.map(recurseHeader);
    }
    leafHeaders.push(header2);
  };
  recurseHeader(header);
  return leafHeaders;
}

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/pluginHooks/useRowDisableSelection.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var customCheckBoxStyling = {
  verticalAlign: "middle"
};
var headerProps = (props, {
  instance: {
    webComponentsReactProperties: {
      selectionMode
    }
  }
}) => {
  if (props.key === "header___ui5wcr__internal_selection_column" && selectionMode === AnalyticalTableSelectionMode.Multiple) {
    const style = __spreadProps(__spreadValues({}, props.style), {
      cursor: "auto"
    });
    return [props, {
      onClick: void 0,
      onKeyDown: void 0,
      title: void 0,
      style
    }];
  }
  return props;
};
var columns = (columns6) => {
  return columns6.map((column) => {
    if (column.id === "__ui5wcr__internal_selection_column") {
      return __spreadProps(__spreadValues({}, column), {
        Cell: (instance) => {
          const {
            webComponentsReactProperties,
            row
          } = instance;
          if (row.disableSelect === true) {
            if (row.isGrouped && webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.Single) {
              return null;
            }
            if (webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.Single) {
              return (0, import_jsx_runtime2.jsx)("div", {
                onClick: void 0,
                "data-name": "internal_selection_column"
              });
            }
            return (0, import_jsx_runtime2.jsx)(CheckBox, __spreadProps(__spreadValues({}, row.getToggleRowSelectedProps()), {
              disabled: true,
              style: customCheckBoxStyling,
              "data-name": "internal_selection_column",
              tabIndex: -1
            }));
          }
          return column.Cell(instance);
        },
        Header: () => null
      });
    }
    return column;
  });
};
var useRowDisableSelection = (disableRowSelection) => {
  const disableRowAccessor = typeof disableRowSelection === "function" ? disableRowSelection : (d) => getBy(d.original, disableRowSelection, void 0);
  const getRowProps3 = (rowProps, {
    row,
    instance
  }) => {
    const {
      webComponentsReactProperties
    } = instance;
    if (disableRowAccessor(row) === true) {
      row.disableSelect = true;
      const handleClick = (e) => {
        if (typeof webComponentsReactProperties.onRowClick === "function") {
          webComponentsReactProperties.onRowClick(enrichEventWithDetails(e, {
            row
          }));
        }
      };
      const onKeyDown = (e) => {
        if (e.code === "Enter" || e.code === "Space") {
          e.preventDefault();
          if (e.code === "Enter" && typeof webComponentsReactProperties.onRowClick === "function") {
            webComponentsReactProperties.onRowClick(enrichEventWithDetails(e, {
              row
            }));
          }
        }
      };
      const onKeyUp = (e) => {
        if (e.code === "Space") {
          e.preventDefault();
          if (typeof webComponentsReactProperties.onRowClick === "function") {
            webComponentsReactProperties.onRowClick(enrichEventWithDetails(e, {
              row
            }));
          }
        }
      };
      return __spreadProps(__spreadValues({}, rowProps), {
        onClick: handleClick,
        onKeyDown,
        onKeyUp,
        className: webComponentsReactProperties.classes.tr
      });
    }
    return rowProps;
  };
  const columnDeps2 = (deps) => {
    return [...deps, disableRowSelection];
  };
  const cellProps = (cellProps2, {
    cell: {
      row,
      column
    },
    instance
  }) => {
    const {
      selectionMode,
      selectionBehavior
    } = instance.webComponentsReactProperties;
    if (disableRowAccessor(row) === true && selectionMode !== AnalyticalTableSelectionMode.None && (selectionBehavior !== AnalyticalTableSelectionBehavior.RowSelector || column.id === "__ui5wcr__internal_selection_column")) {
      const _a = cellProps2, {
        "aria-label": _0
      } = _a, updatedCellProps = __objRest(_a, [
        "aria-label"
      ]);
      if (column.id === "__ui5wcr__internal_selection_column") {
        const style = __spreadProps(__spreadValues({}, cellProps2.style), {
          cursor: "auto"
        });
        return __spreadProps(__spreadValues({}, updatedCellProps), {
          "aria-disabled": true,
          style
        });
      }
      const _b = updatedCellProps, {
        "aria-selected": _1
      } = _b, updatedCellProsWithOutSelected = __objRest(_b, [
        "aria-selected"
      ]);
      return updatedCellProsWithOutSelected;
    }
    return cellProps2;
  };
  const toggleRowSelectedProps = (rowProps, {
    row
  }) => {
    if (disableRowAccessor(row) === true) {
      const _a = rowProps, {
        title: _0
      } = _a, updatedRowProps = __objRest(_a, [
        "title"
      ]);
      return updatedRowProps;
    }
    return rowProps;
  };
  const useDisableSelectionRow = (hooks) => {
    hooks.getHeaderProps.push(headerProps);
    hooks.getRowProps.push(getRowProps3);
    hooks.columns.push(columns);
    hooks.columnsDeps.push(columnDeps2);
    hooks.getCellProps.push(cellProps);
    hooks.getToggleRowSelectedProps.push(toggleRowSelectedProps);
  };
  useDisableSelectionRow.pluginName = "useRowDisableSelection";
  return useDisableSelectionRow;
};

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/@ui5/webcomponents-react/dist/components/ActionSheet/index.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/i18n/i18n-defaults.js
var ABORT = {
  key: "ABORT",
  defaultText: "Abort"
};
var CANCEL = {
  key: "CANCEL",
  defaultText: "Cancel"
};
var CLOSE = {
  key: "CLOSE",
  defaultText: "Close"
};
var DELETE = {
  key: "DELETE",
  defaultText: "Delete"
};
var IGNORE = {
  key: "IGNORE",
  defaultText: "Ignore"
};
var NO = {
  key: "NO",
  defaultText: "No"
};
var OK = {
  key: "OK",
  defaultText: "OK"
};
var RETRY = {
  key: "RETRY",
  defaultText: "Retry"
};
var YES = {
  key: "YES",
  defaultText: "Yes"
};
var CLEAR_SORTING = {
  key: "CLEAR_SORTING",
  defaultText: "Clear Sorting"
};
var SORT_ASCENDING = {
  key: "SORT_ASCENDING",
  defaultText: "Sort Ascending"
};
var SORT_DESCENDING = {
  key: "SORT_DESCENDING",
  defaultText: "Sort Descending"
};
var GROUP = {
  key: "GROUP",
  defaultText: "Group"
};
var GROUPED = {
  key: "GROUPED",
  defaultText: "Grouped"
};
var UNGROUP = {
  key: "UNGROUP",
  defaultText: "Ungroup"
};
var DRAG_TO_RESIZE = {
  key: "DRAG_TO_RESIZE",
  defaultText: "Drag to resize"
};
var PLEASE_WAIT = {
  key: "PLEASE_WAIT",
  defaultText: "Please wait"
};
var CONFIRMATION = {
  key: "CONFIRMATION",
  defaultText: "Confirmation"
};
var ERROR = {
  key: "ERROR",
  defaultText: "Error"
};
var INFORMATION = {
  key: "INFORMATION",
  defaultText: "Information"
};
var SUCCESS = {
  key: "SUCCESS",
  defaultText: "Success"
};
var WARNING = {
  key: "WARNING",
  defaultText: "Warning"
};
var SHOW_LESS = {
  key: "SHOW_LESS",
  defaultText: "Show less"
};
var SHOW_MORE = {
  key: "SHOW_MORE",
  defaultText: "Show more"
};
var SHOW_FILTER_BAR = {
  key: "SHOW_FILTER_BAR",
  defaultText: "Show Filter Bar"
};
var HIDE_FILTER_BAR = {
  key: "HIDE_FILTER_BAR",
  defaultText: "Hide Filter Bar"
};
var CLEAR = {
  key: "CLEAR",
  defaultText: "Clear"
};
var RESTORE = {
  key: "RESTORE",
  defaultText: "Restore"
};
var FILTERS = {
  key: "FILTERS",
  defaultText: "Filters"
};
var ADAPT_FILTERS = {
  key: "ADAPT_FILTERS",
  defaultText: "Adapt Filters"
};
var GO = {
  key: "GO",
  defaultText: "Go"
};
var SAVE = {
  key: "SAVE",
  defaultText: "Save"
};
var BASIC = {
  key: "BASIC",
  defaultText: "Basic"
};
var SEARCH_FOR_FILTERS = {
  key: "SEARCH_FOR_FILTERS",
  defaultText: "Search for filters"
};
var FIELDS_BY_ATTRIBUTE = {
  key: "FIELDS_BY_ATTRIBUTE",
  defaultText: "Show Filters by Attribute"
};
var VISIBLE = {
  key: "VISIBLE",
  defaultText: "Visible"
};
var ACTIVE = {
  key: "ACTIVE",
  defaultText: "Active"
};
var VISIBLE_AND_ACTIVE = {
  key: "VISIBLE_AND_ACTIVE",
  defaultText: "Visible and Active"
};
var MANDATORY = {
  key: "MANDATORY",
  defaultText: "Mandatory"
};
var LIST_VIEW = {
  key: "LIST_VIEW",
  defaultText: "List View"
};
var GROUP_VIEW = {
  key: "GROUP_VIEW",
  defaultText: "Group View"
};
var SHOW_VALUES = {
  key: "SHOW_VALUES",
  defaultText: "Show Values"
};
var HIDE_VALUES = {
  key: "HIDE_VALUES",
  defaultText: "Hide Values"
};
var FILTER = {
  key: "FILTER",
  defaultText: "Filter"
};
var FILTER_IS_ACTIVE = {
  key: "FILTER_IS_ACTIVE",
  defaultText: "Filter is active"
};
var COLLAPSE_HEADER = {
  key: "COLLAPSE_HEADER",
  defaultText: "Collapse Header"
};
var EXPAND_HEADER = {
  key: "EXPAND_HEADER",
  defaultText: "Expand Header"
};
var PIN_HEADER = {
  key: "PIN_HEADER",
  defaultText: "Pin Header"
};
var UNPIN_HEADER = {
  key: "UNPIN_HEADER",
  defaultText: "Unpin Header"
};
var AVAILABLE_ACTIONS = {
  key: "AVAILABLE_ACTIONS",
  defaultText: "Available Actions"
};
var X_OF_Y = {
  key: "X_OF_Y",
  defaultText: "Item {0} of {1}"
};
var MY_VIEWS = {
  key: "MY_VIEWS",
  defaultText: "My Views"
};
var SAVE_VIEW = {
  key: "SAVE_VIEW",
  defaultText: "Save View"
};
var MANAGE_VIEWS = {
  key: "MANAGE_VIEWS",
  defaultText: "Manage Views"
};
var VIEW = {
  key: "VIEW",
  defaultText: "View"
};
var VARIANT_MANAGEMENT_ERROR_DUPLICATE = {
  key: "VARIANT_MANAGEMENT_ERROR_DUPLICATE",
  defaultText: "The view name already exists. Please enter a different name."
};
var SPECIFY_VIEW_NAME = {
  key: "SPECIFY_VIEW_NAME",
  defaultText: "Please specify a view name"
};
var SET_AS_DEFAULT = {
  key: "SET_AS_DEFAULT",
  defaultText: "Set as Default"
};
var PUBLIC = {
  key: "PUBLIC",
  defaultText: "Public"
};
var APPLY_AUTOMATICALLY = {
  key: "APPLY_AUTOMATICALLY",
  defaultText: "Apply Automatically"
};
var SHARING = {
  key: "SHARING",
  defaultText: "Sharing"
};
var DEFAULT = {
  key: "DEFAULT",
  defaultText: "Default"
};
var CREATED_BY = {
  key: "CREATED_BY",
  defaultText: "Created By"
};
var MANAGE = {
  key: "MANAGE",
  defaultText: "Manage"
};
var PRIVATE = {
  key: "PRIVATE",
  defaultText: "Private"
};
var MARK_AS_STANDARD = {
  key: "MARK_AS_STANDARD",
  defaultText: "Use as standard view"
};
var MARK_AS_FAVORITE = {
  key: "MARK_AS_FAVORITE",
  defaultText: "Mark as favorite view"
};
var DELETE_VIEW = {
  key: "DELETE_VIEW",
  defaultText: "Delete view"
};
var SELECT_VIEW = {
  key: "SELECT_VIEW",
  defaultText: "Select view"
};
var SEARCH_VARIANT = {
  key: "SEARCH_VARIANT",
  defaultText: "Search variant"
};
var ALL = {
  key: "ALL",
  defaultText: "All"
};
var SEARCH = {
  key: "SEARCH",
  defaultText: "Search"
};
var SAVE_AS = {
  key: "SAVE_AS",
  defaultText: "Save As"
};
var RESET = {
  key: "RESET",
  defaultText: "Reset"
};
var SELECTED_AS_FAVORITE = {
  key: "SELECTED_AS_FAVORITE",
  defaultText: "Selected as Favorite"
};
var UNSELECTED_AS_FAVORITE = {
  key: "UNSELECTED_AS_FAVORITE",
  defaultText: "Unselected as Favorite"
};
var SELECT = {
  key: "SELECT",
  defaultText: "Select"
};
var SELECTED = {
  key: "SELECTED",
  defaultText: "Selected"
};
var PRESS_ARROW_KEYS_TO_MOVE = {
  key: "PRESS_ARROW_KEYS_TO_MOVE",
  defaultText: "Press ARROW keys to move"
};
var LIST_NO_DATA = {
  key: "LIST_NO_DATA",
  defaultText: "No data"
};
var EXPAND_NODE = {
  key: "EXPAND_NODE",
  defaultText: "Expand Node"
};
var COLLAPSE_NODE = {
  key: "COLLAPSE_NODE",
  defaultText: "Collapse Node"
};
var EXPAND_PRESS_SPACE = {
  key: "EXPAND_PRESS_SPACE",
  defaultText: "To expand the row, press the spacebar"
};
var COLLAPSE_PRESS_SPACE = {
  key: "COLLAPSE_PRESS_SPACE",
  defaultText: "To collapse the row, press the spacebar"
};
var SELECT_PRESS_SPACE = {
  key: "SELECT_PRESS_SPACE",
  defaultText: "To select the row, press the spacebar"
};
var UNSELECT_PRESS_SPACE = {
  key: "UNSELECT_PRESS_SPACE",
  defaultText: "To deselect the row, press the spacebar"
};
var INVALID_TABLE = {
  key: "INVALID_TABLE",
  defaultText: "Invalid Table"
};
var FILTERED = {
  key: "FILTERED",
  defaultText: "Filtered"
};
var ARIA_DESC_CARD_HEADER = {
  key: "ARIA_DESC_CARD_HEADER",
  defaultText: "Card Header"
};
var SEMANTIC_COLOR_CRITICAL = {
  key: "SEMANTIC_COLOR_CRITICAL",
  defaultText: "Warning"
};
var SEMANTIC_COLOR_GOOD = {
  key: "SEMANTIC_COLOR_GOOD",
  defaultText: "Good"
};
var SEMANTIC_COLOR_NEUTRAL = {
  key: "SEMANTIC_COLOR_NEUTRAL",
  defaultText: "Neutral"
};
var SEMANTIC_COLOR_ERROR = {
  key: "SEMANTIC_COLOR_ERROR",
  defaultText: "Critical"
};
var NUMERICCONTENT_DEVIATION_UP = {
  key: "NUMERICCONTENT_DEVIATION_UP",
  defaultText: "Ascending"
};
var NUMERICCONTENT_DEVIATION_DOWN = {
  key: "NUMERICCONTENT_DEVIATION_DOWN",
  defaultText: "Descending"
};
var ARIA_OBJ_STATUS_DESC = {
  key: "ARIA_OBJ_STATUS_DESC",
  defaultText: "Object Status Button"
};
var ARIA_OBJ_STATUS_DESC_INACTIVE = {
  key: "ARIA_OBJ_STATUS_DESC_INACTIVE",
  defaultText: "Object Status"
};
var INDICATION_COLOR = {
  key: "INDICATION_COLOR",
  defaultText: "Indication Color"
};
var EMPTY_VALUE = {
  key: "EMPTY_VALUE",
  defaultText: "Empty Value"
};
var SELECT_ALL = {
  key: "SELECT_ALL",
  defaultText: "Select All"
};
var DESELECT_ALL = {
  key: "DESELECT_ALL",
  defaultText: "Deselect All"
};
var SHOW_FULL_TEXT = {
  key: "SHOW_FULL_TEXT",
  defaultText: "Show the full text"
};
var CLOSE_POPOVER = {
  key: "CLOSE_POPOVER",
  defaultText: "Close the popover"
};
var FILTER_DIALOG_RESET_WARNING = {
  key: "FILTER_DIALOG_RESET_WARNING",
  defaultText: "You are about to reset all the changes you made to your view settings and revert to the selected view."
};
var MOVE_TO_TOP = {
  key: "MOVE_TO_TOP",
  defaultText: "Move to Top{0}"
};
var MOVE_UP = {
  key: "MOVE_UP",
  defaultText: "Move Up{0}"
};
var MOVE_DOWN = {
  key: "MOVE_DOWN",
  defaultText: "Move Down{0}"
};
var MOVE_TO_BOTTOM = {
  key: "MOVE_TO_BOTTOM",
  defaultText: "Move to Bottom{0}"
};
var FILTER_DIALOG_REORDER_FILTERS = {
  key: "FILTER_DIALOG_REORDER_FILTERS",
  defaultText: "Press {0} and up or down key to move."
};
var DOWN_ARROW = {
  key: "DOWN_ARROW",
  defaultText: "Down Arrow"
};
var UP_ARROW = {
  key: "UP_ARROW",
  defaultText: "Up Arrow"
};
var NO_DATA_FILTERED = {
  key: "NO_DATA_FILTERED",
  defaultText: "No data found. Try adjusting the filter settings."
};

// node_modules/@ui5/webcomponents-react/dist/internal/addCustomCSSWithScoping.js
var addCustomCSSWithScoping = (baseTagName, customCSS) => {
  attachBoot(() => {
    const finalTag = getUi5TagWithSuffix(baseTagName);
    void addCustomCSS(finalTag, customCSS);
  });
};

// node_modules/@ui5/webcomponents-react/dist/themes/CustomVariables.js
var CustomVariables = function(CustomVariables2) {
  CustomVariables2["ActionSheetBoxShadow"] = "--_ui5wcr_ActionSheet_BoxShadow";
  CustomVariables2["ActionSheetHeaderBoxShadow"] = "--_ui5wcr_ActionSheet_HeaderBoxShadow";
  CustomVariables2["ActionSheetMobileHeaderBackground"] = "--_ui5wcr_ActionSheet_MobileHeaderBackground";
  CustomVariables2["ActionSheetMobileHeaderBorderRadius"] = "--_ui5wcr_ActionSheet_MobileHeaderBorderRadius";
  CustomVariables2["ActionSheetMobileHeaderBoxShadow"] = "--_ui5wcr_ActionSheet_MobileHeaderBoxShadow";
  CustomVariables2["ActionSheetMobileHeaderTextColor"] = "--_ui5wcr_ActionSheet_MobileHeaderTextColor";
  CustomVariables2["ActionSheetTopBorderRadius"] = "--_ui5wcr_ActionSheet_TopBorderRadius";
  CustomVariables2["AnalyticalTableHeaderActiveTextColor"] = "--_ui5wcr-AnalyticalTable-HeaderActiveTextColor";
  CustomVariables2["AnalyticalTableHeaderBorderWidth"] = "--_ui5wcr-AnalyticalTable-HeaderBorderWidth";
  CustomVariables2["AnalyticalTableHeaderFontFamily"] = "--_ui5wcr-AnalyticalTable-HeaderFontFamily";
  CustomVariables2["AnalyticalTableOuterBorderBlock"] = "--_ui5wcr-AnalyticalTable-OuterBorderBlock";
  CustomVariables2["AnalyticalTableOuterBorderInline"] = "--_ui5wcr-AnalyticalTable-OuterBorderInline";
  CustomVariables2["AnalyticalTableOuterCellBorder"] = "--_ui5wcr-AnalyticalTable-OuterCellBorder";
  CustomVariables2["FormHeaderBorderWidth"] = "--_ui5wcr_Form_HeaderBorderWidth";
  CustomVariables2["ObjectPageSectionBorderTop"] = "--_ui5wcr_ObjectPage_SectionBorderTop";
  CustomVariables2["ObjectPageSectionTitleFontFamily"] = "--_ui5wcr_ObjectPage_SectionTitleFontFamily";
  CustomVariables2["ObjectPageSectionTitleHeight"] = "--_ui5wcr_ObjectPage_SectionTitleHeight";
  CustomVariables2["ObjectPageSectionTitleLineHeight"] = "--_ui5wcr_ObjectPage_SectionTitleLineHeight";
  CustomVariables2["ObjectPageSectionTitleTextDecoration"] = "--_ui5wcr_ObjectPage_SectionTitleTextDecoration";
  CustomVariables2["ObjectPageSubSectionBackgroundColor"] = "--_ui5wcr_ObjectPage_SubSectionBackgroundColor";
  CustomVariables2["ObjectPageSubSectionBorderRadius"] = "--_ui5wcr_ObjectPage_SubSectionBorderRadius";
  CustomVariables2["ObjectPageSubSectionPaddingBlockStart"] = "--_ui5wcr_ObjectPage_PaddingBlockStart";
  CustomVariables2["SplitterBarBorderFix"] = "--_ui5wcr_Splitter_BarBorderHighContrastFix";
  CustomVariables2["SplitterBarBorderFocus"] = "--_ui5wcr_Splitter_BarBorderFocus";
  CustomVariables2["SplitterBarBorderStyle"] = "--_ui5wcr_Splitter_BarBorderStyle";
  CustomVariables2["SplitterBarOutline"] = "--_ui5wcr_Splitter_BarOutline";
  CustomVariables2["SplitterContentBorderColor"] = "--_ui5wcr_Splitter_ContentBorderColor";
  CustomVariables2["SplitterIconColor"] = "--_ui5wcr_Splitter_IconColor";
  CustomVariables2["ToolbarFocusOutline"] = "--_ui5wcr_Toolbar_FocusOutline";
  CustomVariables2["ToolbarFocusShadow"] = "--_ui5wcr_Toolbar_FocusShadow";
  CustomVariables2["ScrollbarBorder"] = "--_ui5wcr_Scrollbar_Border";
  CustomVariables2["ScrollbarBorderRadius"] = "--_ui5wcr_Scrollbar_BorderRadius";
  return CustomVariables2;
}({});
var CustomThemingParameters = new Proxy(CustomVariables, {
  get: (target, prop) => `var(${target[prop]})`
});

// node_modules/@ui5/webcomponents-react/dist/webComponents/Avatar/index.js
var Avatar = withWebComponent("ui5-avatar", ["accessibilityAttributes", "accessibleName", "colorScheme", "fallbackIcon", "icon", "initials", "shape", "size"], ["disabled", "interactive"], ["badge"], []);
Avatar.displayName = "Avatar";

// node_modules/@ui5/webcomponents-react/dist/webComponents/AvatarGroup/index.js
var AvatarGroup = withWebComponent("ui5-avatar-group", ["accessibilityAttributes", "type"], [], ["overflowButton"], ["click", "overflow"]);
AvatarGroup.displayName = "AvatarGroup";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Bar/index.js
var Bar = withWebComponent("ui5-bar", ["design"], [], ["endContent", "startContent"], []);
Bar.displayName = "Bar";

// node_modules/@ui5/webcomponents-react/dist/webComponents/BarcodeScannerDialog/index.js
var BarcodeScannerDialog = withWebComponent("ui5-barcode-scanner-dialog", [], ["open"], [], ["close", "scan-error", "scan-success"]);
BarcodeScannerDialog.displayName = "BarcodeScannerDialog";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Breadcrumbs/index.js
var Breadcrumbs = withWebComponent("ui5-breadcrumbs", ["design", "separators"], [], [], ["item-click"]);
Breadcrumbs.displayName = "Breadcrumbs";

// node_modules/@ui5/webcomponents-react/dist/webComponents/BreadcrumbsItem/index.js
var BreadcrumbsItem = withWebComponent("ui5-breadcrumbs-item", ["accessibleName", "href", "target"], [], [], []);
BreadcrumbsItem.displayName = "BreadcrumbsItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/BusyIndicator/index.js
var BusyIndicator = withWebComponent("ui5-busy-indicator", ["delay", "size", "text", "textPlacement"], ["active"], [], []);
BusyIndicator.displayName = "BusyIndicator";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Button/index.js
var Button = withWebComponent("ui5-button", ["accessibilityAttributes", "accessibleName", "accessibleNameRef", "accessibleRole", "design", "endIcon", "icon", "tooltip", "type"], ["disabled", "submits"], [], ["click"]);
Button.displayName = "Button";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Calendar/index.js
var Calendar = withWebComponent("ui5-calendar", ["formatPattern", "maxDate", "minDate", "primaryCalendarType", "secondaryCalendarType", "selectionMode"], ["hideWeekNumbers"], ["calendarLegend", "specialDates"], ["selection-change"]);
Calendar.displayName = "Calendar";

// node_modules/@ui5/webcomponents-react/dist/webComponents/CalendarDate/index.js
var CalendarDate = withWebComponent("ui5-date", ["value"], [], [], []);
CalendarDate.displayName = "CalendarDate";

// node_modules/@ui5/webcomponents-react/dist/webComponents/CalendarLegend/index.js
var CalendarLegend = withWebComponent("ui5-calendar-legend", [], ["hideNonWorkingDay", "hideSelectedDay", "hideToday", "hideWorkingDay"], [], []);
CalendarLegend.displayName = "CalendarLegend";

// node_modules/@ui5/webcomponents-react/dist/webComponents/CalendarLegendItem/index.js
var CalendarLegendItem = withWebComponent("ui5-calendar-legend-item", ["text", "type"], [], [], []);
CalendarLegendItem.displayName = "CalendarLegendItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Card/index.js
var Card = withWebComponent("ui5-card", ["accessibleName", "accessibleNameRef"], [], ["header"], []);
Card.displayName = "Card";

// node_modules/@ui5/webcomponents-react/dist/webComponents/CardHeader/index.js
var CardHeader = withWebComponent("ui5-card-header", ["additionalText", "subtitleText", "titleText"], ["interactive"], ["action", "avatar"], ["click"]);
CardHeader.displayName = "CardHeader";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Carousel/index.js
var Carousel = withWebComponent("ui5-carousel", ["accessibleName", "accessibleNameRef", "arrowsPlacement", "backgroundDesign", "itemsPerPage", "pageIndicatorBackgroundDesign", "pageIndicatorBorderDesign", "pageIndicatorType"], ["cyclic", "hideNavigationArrows", "hidePageIndicator"], [], ["navigate"]);
Carousel.displayName = "Carousel";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ColorPalette/index.js
var ColorPalette = withWebComponent("ui5-color-palette", [], [], [], ["item-click"]);
ColorPalette.displayName = "ColorPalette";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ColorPaletteItem/index.js
var ColorPaletteItem = withWebComponent("ui5-color-palette-item", ["value"], ["selected"], [], []);
ColorPaletteItem.displayName = "ColorPaletteItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ColorPalettePopover/index.js
var ColorPalettePopover = withWebComponent("ui5-color-palette-popover", ["defaultColor", "opener"], ["open", "showDefaultColor", "showMoreColors", "showRecentColors"], [], ["close", "item-click"]);
ColorPalettePopover.displayName = "ColorPalettePopover";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ColorPicker/index.js
var ColorPicker = withWebComponent("ui5-color-picker", ["name", "value"], [], [], ["change"]);
ColorPicker.displayName = "ColorPicker";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ComboBox/index.js
var ComboBox = withWebComponent("ui5-combobox", ["accessibleName", "accessibleNameRef", "filter", "name", "placeholder", "value", "valueState"], ["disabled", "loading", "noTypeahead", "readonly", "required", "showClearIcon"], ["icon", "valueStateMessage"], ["change", "input", "selection-change"]);
ComboBox.displayName = "ComboBox";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ComboBoxItem/index.js
var ComboBoxItem = withWebComponent("ui5-cb-item", ["additionalText", "text"], [], [], []);
ComboBoxItem.displayName = "ComboBoxItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/DatePicker/index.js
var DatePicker = withWebComponent("ui5-date-picker", ["accessibleName", "accessibleNameRef", "formatPattern", "maxDate", "minDate", "name", "placeholder", "primaryCalendarType", "secondaryCalendarType", "value", "valueState"], ["disabled", "hideWeekNumbers", "open", "readonly", "required"], ["valueStateMessage"], ["change", "input", "value-state-change"]);
DatePicker.displayName = "DatePicker";

// node_modules/@ui5/webcomponents-react/dist/webComponents/DateRangePicker/index.js
var DateRangePicker = withWebComponent("ui5-daterange-picker", ["accessibleName", "accessibleNameRef", "delimiter", "formatPattern", "maxDate", "minDate", "name", "placeholder", "primaryCalendarType", "secondaryCalendarType", "value", "valueState"], ["disabled", "hideWeekNumbers", "open", "readonly", "required"], ["valueStateMessage"], ["change", "input", "value-state-change"]);
DateRangePicker.displayName = "DateRangePicker";

// node_modules/@ui5/webcomponents-react/dist/webComponents/DateTimePicker/index.js
var DateTimePicker = withWebComponent("ui5-datetime-picker", ["accessibleName", "accessibleNameRef", "formatPattern", "maxDate", "minDate", "name", "placeholder", "primaryCalendarType", "secondaryCalendarType", "value", "valueState"], ["disabled", "hideWeekNumbers", "open", "readonly", "required"], ["valueStateMessage"], ["change", "input", "value-state-change"]);
DateTimePicker.displayName = "DateTimePicker";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Dialog/index.js
var Dialog = withWebComponent("ui5-dialog", ["accessibleName", "accessibleNameRef", "accessibleRole", "headerText", "initialFocus", "state"], ["draggable", "open", "preventFocusRestore", "preventInitialFocus", "resizable", "stretch"], ["footer", "header"], ["before-close", "before-open", "close", "open"]);
Dialog.displayName = "Dialog";

// node_modules/@ui5/webcomponents-react/dist/webComponents/DynamicPage/index.js
var DynamicPage = withWebComponent("ui5-dynamic-page", [], ["headerPinned", "headerSnapped", "hidePinButton", "showFooter"], ["footerArea", "headerArea", "titleArea"], ["pin-button-toggle", "title-toggle"]);
DynamicPage.displayName = "DynamicPage";

// node_modules/@ui5/webcomponents-react/dist/webComponents/DynamicPageHeader/index.js
var DynamicPageHeader = withWebComponent("ui5-dynamic-page-header", [], [], [], []);
DynamicPageHeader.displayName = "DynamicPageHeader";

// node_modules/@ui5/webcomponents-react/dist/webComponents/DynamicPageTitle/index.js
var DynamicPageTitle = withWebComponent("ui5-dynamic-page-title", [], [], ["actionsBar", "breadcrumbs", "heading", "navigationBar", "snappedHeading", "snappedSubheading", "subheading"], []);
DynamicPageTitle.displayName = "DynamicPageTitle";

// node_modules/@ui5/webcomponents-react/dist/webComponents/DynamicSideContent/index.js
var DynamicSideContent = withWebComponent("ui5-dynamic-side-content", ["sideContentFallDown", "sideContentPosition", "sideContentVisibility"], ["equalSplit", "hideMainContent", "hideSideContent"], ["sideContent"], ["layout-change"]);
DynamicSideContent.displayName = "DynamicSideContent";

// node_modules/@ui5/webcomponents-react/dist/webComponents/FileUploader/index.js
var FileUploader = withWebComponent("ui5-file-uploader", ["accept", "name", "placeholder", "value", "valueState"], ["disabled", "hideInput", "multiple"], ["valueStateMessage"], ["change"]);
FileUploader.displayName = "FileUploader";

// node_modules/@ui5/webcomponents-react/dist/webComponents/FilterItem/index.js
var FilterItem = withWebComponent("ui5-filter-item", ["additionalText", "text"], [], ["values"], []);
FilterItem.displayName = "FilterItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/FilterItemOption/index.js
var FilterItemOption = withWebComponent("ui5-filter-item-option", ["text"], ["selected"], [], []);
FilterItemOption.displayName = "FilterItemOption";

// node_modules/@ui5/webcomponents-react/dist/webComponents/FlexibleColumnLayout/index.js
var FlexibleColumnLayout = withWebComponent("ui5-flexible-column-layout", ["accessibilityAttributes", "layout"], ["disableResizing"], ["endColumn", "midColumn", "startColumn"], ["layout-change"]);
FlexibleColumnLayout.displayName = "FlexibleColumnLayout";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Form/index.js
var Form = withWebComponent("ui5-form", ["headerText", "itemSpacing", "labelSpan", "layout"], [], ["header"], []);
Form.displayName = "Form";

// node_modules/@ui5/webcomponents-react/dist/webComponents/FormGroup/index.js
var FormGroup = withWebComponent("ui5-form-group", ["columnSpan", "headerText"], [], [], []);
FormGroup.displayName = "FormGroup";

// node_modules/@ui5/webcomponents-react/dist/webComponents/FormItem/index.js
var FormItem = withWebComponent("ui5-form-item", ["columnSpan"], [], ["labelContent"], []);
FormItem.displayName = "FormItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Icon/index.js
var Icon = withWebComponent("ui5-icon", ["accessibleName", "design", "mode", "name"], ["showTooltip"], [], []);
Icon.displayName = "Icon";

// node_modules/@ui5/webcomponents-react/dist/webComponents/IllustratedMessage/index.js
var IllustratedMessage = withWebComponent("ui5-illustrated-message", ["accessibleNameRef", "design", "name", "subtitleText", "titleText"], [], ["subtitle", "title"], []);
IllustratedMessage.displayName = "IllustratedMessage";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Input/index.js
var Input = withWebComponent("ui5-input", ["accessibleName", "accessibleNameRef", "maxlength", "name", "placeholder", "type", "value", "valueState"], ["disabled", "noTypeahead", "open", "readonly", "required", "showClearIcon", "showSuggestions"], ["icon", "valueStateMessage"], ["change", "close", "input", "open", "selection-change"]);
Input.displayName = "Input";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Label/index.js
var Label = withWebComponent("ui5-label", ["for", "wrappingType"], ["required", "showColon"], [], []);
Label.displayName = "Label";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Link/index.js
var Link = withWebComponent("ui5-link", ["accessibilityAttributes", "accessibleName", "accessibleNameRef", "accessibleRole", "design", "endIcon", "href", "icon", "target", "tooltip", "wrappingType"], ["disabled"], [], ["click"]);
Link.displayName = "Link";

// node_modules/@ui5/webcomponents-react/dist/webComponents/List/index.js
var List = withWebComponent("ui5-list", ["accessibleName", "accessibleNameRef", "accessibleRole", "footerText", "growing", "growingButtonText", "headerText", "loadingDelay", "noDataText", "selectionMode", "separators"], ["indent", "loading"], ["header"], ["item-click", "item-close", "item-delete", "item-toggle", "load-more", "move-over", "move", "selection-change"]);
List.displayName = "List";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ListItemCustom/index.js
var ListItemCustom = withWebComponent("ui5-li-custom", ["accessibilityAttributes", "accessibleName", "highlight", "tooltip", "type"], ["movable", "navigated", "selected"], ["deleteButton"], ["detail-click"]);
ListItemCustom.displayName = "ListItemCustom";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ListItemGroup/index.js
var ListItemGroup = withWebComponent("ui5-li-group", ["headerAccessibleName", "headerText"], [], ["header"], []);
ListItemGroup.displayName = "ListItemGroup";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ListItemStandard/index.js
var ListItemStandard = withWebComponent("ui5-li", ["accessibilityAttributes", "accessibleName", "additionalText", "additionalTextState", "description", "highlight", "icon", "tooltip", "type"], ["iconEnd", "movable", "navigated", "selected"], ["deleteButton", "image"], ["detail-click"]);
ListItemStandard.displayName = "ListItemStandard";

// node_modules/@ui5/webcomponents-react/dist/webComponents/MediaGallery/index.js
var MediaGallery = withWebComponent("ui5-media-gallery", ["layout", "menuHorizontalAlign", "menuVerticalAlign"], ["interactiveDisplayArea", "showAllThumbnails"], [], ["display-area-click", "overflow-click", "selection-change"]);
MediaGallery.displayName = "MediaGallery";

// node_modules/@ui5/webcomponents-react/dist/webComponents/MediaGalleryItem/index.js
var MediaGalleryItem = withWebComponent("ui5-media-gallery-item", ["layout"], ["disabled", "selected"], ["thumbnail"], []);
MediaGalleryItem.displayName = "MediaGalleryItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Menu/index.js
var Menu = withWebComponent("ui5-menu", ["headerText", "loadingDelay", "opener"], ["loading", "open"], [], ["before-close", "before-open", "close", "item-click", "open"]);
Menu.displayName = "Menu";

// node_modules/@ui5/webcomponents-react/dist/webComponents/MenuItem/index.js
var MenuItem = withWebComponent("ui5-menu-item", ["accessibilityAttributes", "accessibleName", "additionalText", "highlight", "icon", "loadingDelay", "text", "tooltip", "type"], ["disabled", "loading", "navigated", "selected"], ["deleteButton", "endContent"], ["detail-click"]);
MenuItem.displayName = "MenuItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/MenuSeparator/index.js
var MenuSeparator = withWebComponent("ui5-menu-separator", [], [], [], []);
MenuSeparator.displayName = "MenuSeparator";

// node_modules/@ui5/webcomponents-react/dist/webComponents/MessageStrip/index.js
var MessageStrip = withWebComponent("ui5-message-strip", ["colorScheme", "design"], ["hideCloseButton", "hideIcon"], ["icon"], ["close"]);
MessageStrip.displayName = "MessageStrip";

// node_modules/@ui5/webcomponents-react/dist/webComponents/MultiComboBox/index.js
var MultiComboBox = withWebComponent("ui5-multi-combobox", ["accessibleName", "accessibleNameRef", "filter", "name", "placeholder", "value", "valueState"], ["disabled", "noTypeahead", "noValidation", "readonly", "required", "showClearIcon", "showSelectAll"], ["icon", "valueStateMessage"], ["change", "close", "input", "open", "selection-change"]);
MultiComboBox.displayName = "MultiComboBox";

// node_modules/@ui5/webcomponents-react/dist/webComponents/MultiComboBoxItem/index.js
var MultiComboBoxItem = withWebComponent("ui5-mcb-item", ["additionalText", "text"], ["selected"], [], []);
MultiComboBoxItem.displayName = "MultiComboBoxItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/MultiComboBoxItemGroup/index.js
var MultiComboBoxItemGroup = withWebComponent("ui5-mcb-item-group", ["headerText"], [], [], []);
MultiComboBoxItemGroup.displayName = "MultiComboBoxItemGroup";

// node_modules/@ui5/webcomponents-react/dist/webComponents/MultiInput/index.js
var MultiInput = withWebComponent("ui5-multi-input", ["accessibleName", "accessibleNameRef", "maxlength", "name", "placeholder", "type", "value", "valueState"], ["disabled", "noTypeahead", "open", "readonly", "required", "showClearIcon", "showSuggestions", "showValueHelpIcon"], ["icon", "tokens", "valueStateMessage"], ["change", "close", "input", "open", "selection-change", "token-delete", "value-help-trigger"]);
MultiInput.displayName = "MultiInput";

// node_modules/@ui5/webcomponents-react/dist/webComponents/NotificationListGroupItem/index.js
var NotificationListGroupItem = withWebComponent("ui5-li-notification-group", ["loadingDelay", "titleText"], ["collapsed", "loading", "read"], [], ["toggle"]);
NotificationListGroupItem.displayName = "NotificationListGroupItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/NotificationListItem/index.js
var NotificationListItem = withWebComponent("ui5-li-notification", ["importance", "loadingDelay", "state", "titleText", "wrappingType"], ["loading", "read", "showClose"], ["avatar", "footnotes", "menu"], ["close"]);
NotificationListItem.displayName = "NotificationListItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Option/index.js
var Option = withWebComponent("ui5-option", ["additionalText", "icon", "tooltip", "value"], ["selected"], [], []);
Option.displayName = "Option";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Page/index.js
var Page = withWebComponent("ui5-page", ["backgroundDesign"], ["fixedFooter", "hideFooter", "noScrolling"], ["footer", "header"], []);
Page.displayName = "Page";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Panel/index.js
var Panel = withWebComponent("ui5-panel", ["accessibleName", "accessibleRole", "headerLevel", "headerText"], ["collapsed", "fixed", "noAnimation", "stickyHeader"], ["header"], ["toggle"]);
Panel.displayName = "Panel";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Popover/index.js
var Popover = withWebComponent("ui5-popover", ["accessibleName", "accessibleNameRef", "accessibleRole", "headerText", "horizontalAlign", "initialFocus", "opener", "placement", "verticalAlign"], ["allowTargetOverlap", "hideArrow", "modal", "open", "preventFocusRestore", "preventInitialFocus"], ["footer", "header"], ["before-close", "before-open", "close", "open"]);
Popover.displayName = "Popover";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ProductSwitch/index.js
var ProductSwitch = withWebComponent("ui5-product-switch", [], [], [], []);
ProductSwitch.displayName = "ProductSwitch";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ProductSwitchItem/index.js
var ProductSwitchItem = withWebComponent("ui5-product-switch-item", ["icon", "subtitleText", "target", "targetSrc", "titleText"], [], [], ["click"]);
ProductSwitchItem.displayName = "ProductSwitchItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ProgressIndicator/index.js
var ProgressIndicator = withWebComponent("ui5-progress-indicator", ["accessibleName", "displayValue", "value", "valueState"], ["hideValue"], [], []);
ProgressIndicator.displayName = "ProgressIndicator";

// node_modules/@ui5/webcomponents-react/dist/webComponents/RadioButton/index.js
var RadioButton = withWebComponent("ui5-radio-button", ["accessibleName", "accessibleNameRef", "name", "text", "value", "valueState", "wrappingType"], ["checked", "disabled", "readonly", "required"], [], ["change"]);
RadioButton.displayName = "RadioButton";

// node_modules/@ui5/webcomponents-react/dist/webComponents/RangeSlider/index.js
var RangeSlider = withWebComponent("ui5-range-slider", ["accessibleName", "endValue", "labelInterval", "max", "min", "name", "startValue", "step"], ["disabled", "showTickmarks", "showTooltip"], [], ["change", "input"]);
RangeSlider.displayName = "RangeSlider";

// node_modules/@ui5/webcomponents-react/dist/webComponents/RatingIndicator/index.js
var RatingIndicator = withWebComponent("ui5-rating-indicator", ["accessibleName", "accessibleNameRef", "max", "tooltip", "value"], ["disabled", "readonly", "required"], [], ["change"]);
RatingIndicator.displayName = "RatingIndicator";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ResponsivePopover/index.js
var ResponsivePopover = withWebComponent("ui5-responsive-popover", ["accessibleName", "accessibleNameRef", "accessibleRole", "headerText", "horizontalAlign", "initialFocus", "opener", "placement", "verticalAlign"], ["allowTargetOverlap", "hideArrow", "modal", "open", "preventFocusRestore", "preventInitialFocus"], ["footer", "header"], ["before-close", "before-open", "close", "open"]);
ResponsivePopover.displayName = "ResponsivePopover";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SegmentedButton/index.js
var SegmentedButton = withWebComponent("ui5-segmented-button", ["accessibleName", "selectionMode"], [], [], ["selection-change"]);
SegmentedButton.displayName = "SegmentedButton";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SegmentedButtonItem/index.js
var SegmentedButtonItem = withWebComponent("ui5-segmented-button-item", ["accessibleName", "accessibleNameRef", "icon", "tooltip"], ["disabled", "selected"], [], []);
SegmentedButtonItem.displayName = "SegmentedButtonItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Select/index.js
var Select = withWebComponent("ui5-select", ["accessibleName", "accessibleNameRef", "name", "value", "valueState"], ["disabled", "readonly", "required"], ["label", "valueStateMessage"], ["change", "close", "live-change", "open"]);
Select.displayName = "Select";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ShellBar/index.js
var ShellBar = withWebComponent("ui5-shellbar", ["accessibilityAttributes", "notificationsCount", "primaryTitle", "secondaryTitle"], ["showNotifications", "showProductSwitch", "showSearchField"], ["assistant", "logo", "menuItems", "profile", "searchField", "startButton"], ["logo-click", "menu-item-click", "notifications-click", "product-switch-click", "profile-click", "search-button-click"]);
ShellBar.displayName = "ShellBar";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ShellBarItem/index.js
var ShellBarItem = withWebComponent("ui5-shellbar-item", ["count", "icon", "text"], [], [], ["click"]);
ShellBarItem.displayName = "ShellBarItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SideNavigation/index.js
var SideNavigation = withWebComponent("ui5-side-navigation", [], ["collapsed"], ["fixedItems", "header"], ["selection-change"]);
SideNavigation.displayName = "SideNavigation";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SideNavigationGroup/index.js
var SideNavigationGroup = withWebComponent("ui5-side-navigation-group", ["text", "tooltip"], ["disabled", "expanded"], [], []);
SideNavigationGroup.displayName = "SideNavigationGroup";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SideNavigationItem/index.js
var SideNavigationItem = withWebComponent("ui5-side-navigation-item", ["href", "icon", "target", "text", "tooltip"], ["disabled", "expanded", "selected"], [], ["click"]);
SideNavigationItem.displayName = "SideNavigationItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SideNavigationSubItem/index.js
var SideNavigationSubItem = withWebComponent("ui5-side-navigation-sub-item", ["href", "icon", "target", "text", "tooltip"], ["disabled", "selected"], [], ["click"]);
SideNavigationSubItem.displayName = "SideNavigationSubItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Slider/index.js
var Slider = withWebComponent("ui5-slider", ["accessibleName", "labelInterval", "max", "min", "name", "step", "value"], ["disabled", "showTickmarks", "showTooltip"], [], ["change", "input"]);
Slider.displayName = "Slider";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SortItem/index.js
var SortItem = withWebComponent("ui5-sort-item", ["text"], ["selected"], [], []);
SortItem.displayName = "SortItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SpecialCalendarDate/index.js
var SpecialCalendarDate = withWebComponent("ui5-special-date", ["type", "value"], [], [], []);
SpecialCalendarDate.displayName = "SpecialCalendarDate";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SplitButton/index.js
var SplitButton = withWebComponent("ui5-split-button", ["accessibleName", "design", "icon"], ["activeArrowButton", "disabled"], [], ["arrow-click", "click"]);
SplitButton.displayName = "SplitButton";

// node_modules/@ui5/webcomponents-react/dist/webComponents/StepInput/index.js
var StepInput = withWebComponent("ui5-step-input", ["accessibleName", "accessibleNameRef", "max", "min", "name", "placeholder", "step", "value", "valuePrecision", "valueState"], ["disabled", "readonly", "required"], ["valueStateMessage"], ["change", "value-state-change"]);
StepInput.displayName = "StepInput";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SuggestionItem/index.js
var SuggestionItem = withWebComponent("ui5-suggestion-item", ["additionalText", "text"], [], [], []);
SuggestionItem.displayName = "SuggestionItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SuggestionItemCustom/index.js
var SuggestionItemCustom = withWebComponent("ui5-suggestion-item-custom", ["text"], [], [], []);
SuggestionItemCustom.displayName = "SuggestionItemCustom";

// node_modules/@ui5/webcomponents-react/dist/webComponents/SuggestionItemGroup/index.js
var SuggestionItemGroup = withWebComponent("ui5-suggestion-item-group", ["headerAccessibleName", "headerText"], [], ["header"], []);
SuggestionItemGroup.displayName = "SuggestionItemGroup";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Switch/index.js
var Switch = withWebComponent("ui5-switch", ["accessibleName", "accessibleNameRef", "design", "name", "textOff", "textOn", "tooltip"], ["checked", "disabled", "required"], [], ["change"]);
Switch.displayName = "Switch";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Tab/index.js
var Tab = withWebComponent("ui5-tab", ["additionalText", "design", "icon", "text"], ["disabled", "selected"], ["items"], []);
Tab.displayName = "Tab";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TabContainer/index.js
var TabContainer = withWebComponent("ui5-tabcontainer", ["contentBackgroundDesign", "headerBackgroundDesign", "overflowMode", "tabLayout"], ["collapsed"], ["overflowButton", "startOverflowButton"], ["move-over", "move", "tab-select"]);
TabContainer.displayName = "TabContainer";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TabSeparator/index.js
var TabSeparator = withWebComponent("ui5-tab-separator", [], [], [], []);
TabSeparator.displayName = "TabSeparator";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Tag/index.js
var Tag = withWebComponent("ui5-tag", ["colorScheme", "design", "size", "wrappingType"], ["hideStateIcon", "interactive"], ["icon"], ["click"]);
Tag.displayName = "Tag";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Table/index.js
var Table = withWebComponent("ui5-table", ["accessibleName", "accessibleNameRef", "loadingDelay", "noDataText", "overflowMode"], ["loading"], ["features", "headerRow", "nodata"], ["row-click"]);
Table.displayName = "Table";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TableCell/index.js
var TableCell = withWebComponent("ui5-table-cell", [], [], [], []);
TableCell.displayName = "TableCell";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TableGrowing/index.js
var TableGrowing = withWebComponent("ui5-table-growing", ["growingSubText", "growingText", "type"], [], [], ["load-more"]);
TableGrowing.displayName = "TableGrowing";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TableHeaderCell/index.js
var TableHeaderCell = withWebComponent("ui5-table-header-cell", ["importance", "maxWidth", "minWidth", "width"], [], [], []);
TableHeaderCell.displayName = "TableHeaderCell";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TableHeaderRow/index.js
var TableHeaderRow = withWebComponent("ui5-table-header-row", [], ["sticky"], [], []);
TableHeaderRow.displayName = "TableHeaderRow";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TableRow/index.js
var TableRow = withWebComponent("ui5-table-row", ["rowKey"], ["interactive", "navigated"], [], []);
TableRow.displayName = "TableRow";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TableSelection/index.js
var TableSelection = withWebComponent("ui5-table-selection", ["mode", "selected"], [], [], ["change"]);
TableSelection.displayName = "TableSelection";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TextArea/index.js
var TextArea = withWebComponent("ui5-textarea", ["accessibleName", "accessibleNameRef", "growingMaxRows", "maxlength", "name", "placeholder", "rows", "value", "valueState"], ["disabled", "growing", "readonly", "required", "showExceededText"], ["valueStateMessage"], ["change", "input", "scroll", "select"]);
TextArea.displayName = "TextArea";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TimePicker/index.js
var TimePicker = withWebComponent("ui5-time-picker", ["formatPattern", "name", "placeholder", "value", "valueState"], ["disabled", "open", "readonly"], ["valueStateMessage"], ["change", "close", "input", "open"]);
TimePicker.displayName = "TimePicker";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Timeline/index.js
var Timeline = withWebComponent("ui5-timeline", ["accessibleName", "layout"], [], [], []);
Timeline.displayName = "Timeline";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TimelineItem/index.js
var TimelineItem = withWebComponent("ui5-timeline-item", ["icon", "name", "subtitleText", "titleText"], ["nameClickable"], [], ["name-click"]);
TimelineItem.displayName = "TimelineItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Title/index.js
var Title = withWebComponent("ui5-title", ["level", "wrappingType"], [], [], []);
Title.displayName = "Title";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Toast/index.js
var Toast = withWebComponent("ui5-toast", ["duration", "placement"], ["open"], [], ["close"]);
Toast.displayName = "Toast";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ToggleButton/index.js
var ToggleButton = withWebComponent("ui5-toggle-button", ["accessibilityAttributes", "accessibleName", "accessibleNameRef", "accessibleRole", "design", "endIcon", "icon", "tooltip", "type"], ["disabled", "pressed", "submits"], [], ["click"]);
ToggleButton.displayName = "ToggleButton";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Token/index.js
var Token = withWebComponent("ui5-token", ["text"], ["selected"], ["closeIcon"], []);
Token.displayName = "Token";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Tokenizer/index.js
var Tokenizer = withWebComponent("ui5-tokenizer", ["accessibleName", "accessibleNameRef"], ["disabled", "readonly"], [], ["selection-change", "token-delete"]);
Tokenizer.displayName = "Tokenizer";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ToolbarButton/index.js
var ToolbarButton = withWebComponent("ui5-toolbar-button", ["accessibilityAttributes", "accessibleName", "accessibleNameRef", "design", "endIcon", "icon", "overflowPriority", "text", "tooltip", "width"], ["disabled", "preventOverflowClosing"], [], ["click"]);
ToolbarButton.displayName = "ToolbarButton";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ToolbarSelect/index.js
var ToolbarSelect = withWebComponent("ui5-toolbar-select", ["accessibleName", "accessibleNameRef", "overflowPriority", "valueState", "width"], ["disabled", "preventOverflowClosing"], [], ["change", "close", "open"]);
ToolbarSelect.displayName = "ToolbarSelect";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ToolbarSelectOption/index.js
var ToolbarSelectOption = withWebComponent("ui5-toolbar-select-option", [], ["selected"], [], []);
ToolbarSelectOption.displayName = "ToolbarSelectOption";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ToolbarSeparator/index.js
var ToolbarSeparator = withWebComponent("ui5-toolbar-separator", ["overflowPriority"], ["preventOverflowClosing"], [], []);
ToolbarSeparator.displayName = "ToolbarSeparator";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ToolbarSpacer/index.js
var ToolbarSpacer = withWebComponent("ui5-toolbar-spacer", ["overflowPriority", "width"], ["preventOverflowClosing"], [], []);
ToolbarSpacer.displayName = "ToolbarSpacer";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Toolbar/index.js
var Toolbar = withWebComponent("ui5-toolbar", ["accessibleName", "accessibleNameRef", "alignContent", "design"], [], [], []);
Toolbar.displayName = "Toolbar";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Text/index.js
var Text = withWebComponent("ui5-text", ["maxLines"], [], [], []);
Text.displayName = "Text";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Tree/index.js
var Tree = withWebComponent("ui5-tree", ["accessibleName", "accessibleNameRef", "footerText", "headerText", "noDataText", "selectionMode"], [], ["header"], ["item-click", "item-delete", "item-mouseout", "item-mouseover", "item-toggle", "selection-change"]);
Tree.displayName = "Tree";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TreeItem/index.js
var TreeItem = withWebComponent("ui5-tree-item", ["accessibilityAttributes", "accessibleName", "additionalText", "additionalTextState", "highlight", "icon", "text", "tooltip", "type"], ["expanded", "hasChildren", "indeterminate", "movable", "navigated", "selected"], ["deleteButton"], ["detail-click"]);
TreeItem.displayName = "TreeItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/TreeItemCustom/index.js
var TreeItemCustom = withWebComponent("ui5-tree-item-custom", ["accessibilityAttributes", "accessibleName", "additionalTextState", "highlight", "icon", "tooltip", "type"], ["expanded", "hasChildren", "hideSelectionElement", "indeterminate", "movable", "navigated", "selected"], ["content", "deleteButton"], ["detail-click"]);
TreeItemCustom.displayName = "TreeItemCustom";

// node_modules/@ui5/webcomponents-react/dist/webComponents/UploadCollection/index.js
var UploadCollection = withWebComponent("ui5-upload-collection", ["accessibleName", "noDataDescription", "noDataText", "selectionMode"], ["hideDragOverlay"], ["header"], ["drop", "item-delete", "selection-change"]);
UploadCollection.displayName = "UploadCollection";

// node_modules/@ui5/webcomponents-react/dist/webComponents/UploadCollectionItem/index.js
var UploadCollectionItem = withWebComponent("ui5-upload-collection-item", ["accessibilityAttributes", "file", "fileName", "highlight", "progress", "tooltip", "type", "uploadState"], ["disableDeleteButton", "fileNameClickable", "hideDeleteButton", "hideRetryButton", "hideTerminateButton", "navigated", "selected"], ["deleteButton", "thumbnail"], ["detail-click", "file-name-click", "rename", "retry", "terminate"]);
UploadCollectionItem.displayName = "UploadCollectionItem";

// node_modules/@ui5/webcomponents-react/dist/webComponents/ViewSettingsDialog/index.js
var ViewSettingsDialog = withWebComponent("ui5-view-settings-dialog", [], ["open", "sortDescending"], ["filterItems", "sortItems"], ["before-open", "cancel", "close", "confirm", "open"]);
ViewSettingsDialog.displayName = "ViewSettingsDialog";

// node_modules/@ui5/webcomponents-react/dist/webComponents/Wizard/index.js
var Wizard = withWebComponent("ui5-wizard", ["contentLayout"], [], [], ["step-change"]);
Wizard.displayName = "Wizard";

// node_modules/@ui5/webcomponents-react/dist/webComponents/WizardStep/index.js
var WizardStep = withWebComponent("ui5-wizard-step", ["icon", "subtitleText", "titleText"], ["branching", "disabled", "selected"], [], []);
WizardStep.displayName = "WizardStep";

// node_modules/@ui5/webcomponents-react/dist/components/ActionSheet/ActionSheet.module.css.js
var styleData = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ActionSheet.module.css",
  content: ".ActionSheet_actionSheet_189eg_1::part(content){padding:.1875rem .375rem}.ActionSheet_actionSheet_189eg_1 [ui5-button]{display:block;margin:var(--_ui5wcr-ButtonTopBottomPadding)}.ActionSheet_actionSheet_189eg_1 [ui5-button]:not([data-cancel-btn])::part(button){justify-content:flex-start}.ActionSheet_actionSheet_189eg_1::part(header){background:#0000;box-shadow:var(--_ui5wcr_ActionSheet_HeaderBoxShadow)}.ActionSheet_actionSheetMobile_189eg_20::part(content){padding:0!important}.ActionSheet_contentMobile_189eg_25{background-color:var(--sapGroup_ContentBackground);border-top-left-radius:var(--_ui5wcr_ActionSheet_TopBorderRadius);border-top-right-radius:var(--_ui5wcr_ActionSheet_TopBorderRadius);box-shadow:var(--_ui5wcr_ActionSheet_BoxShadow);box-sizing:border-box;max-height:82vh;overflow:auto;padding:.25rem .5rem}.ActionSheet_contentMobile_189eg_25>*{margin:.25rem 0}"
};
var classNames = {
  "actionSheet": "ActionSheet_actionSheet_189eg_1",
  "actionSheetMobile": "ActionSheet_actionSheetMobile_189eg_20",
  "contentMobile": "ActionSheet_contentMobile_189eg_25"
};

// node_modules/@ui5/webcomponents-react/dist/components/ActionSheet/index.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
if (isPhone()) {
  addCustomCSSWithScoping("ui5-responsive-popover", `
  :host([data-actionsheet]) [ui5-button] {
    display: none;
  }
  :host([data-actionsheet]) [ui5-dialog] {
    top: auto !important;
    bottom: 0;
    height: auto;
    border-radius: ${CustomThemingParameters.ActionSheetMobileHeaderBorderRadius};
    background-color: ${CustomThemingParameters.ActionSheetMobileHeaderBackground};
    box-shadow: ${CustomThemingParameters.ActionSheetMobileHeaderBoxShadow};
    box-sizing: border-box;
    min-height: unset;
  }
  :host([data-actionsheet]) [ui5-title] {
    color: ${CustomThemingParameters.ActionSheetMobileHeaderTextColor} !important;
    text-shadow: none;
    text-align: start !important;
  }
  `);
}
function ActionSheetButton(props) {
  const _a = props, {
    index,
    totalLength
  } = _a, buttonProps = __objRest(_a, [
    "index",
    "totalLength"
  ]);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  return (0, import_jsx_runtime3.jsx)(
    Button,
    __spreadProps(__spreadValues({
      accessibleName: `${buttonProps.children} ${i18nBundle.getText(X_OF_Y, index + 1, totalLength)}`
    }, buttonProps), {
      design: ButtonDesign_default.Transparent,
      "data-action-btn-index": index
    })
  );
}
var ActionSheet = (0, import_react13.forwardRef)((props, ref) => {
  const _a = props, {
    accessibilityAttributes,
    children,
    className,
    header,
    headerText,
    hideCancelButton,
    onOpen,
    open
  } = _a, rest = __objRest(_a, [
    "accessibilityAttributes",
    "children",
    "className",
    "header",
    "headerText",
    "hideCancelButton",
    "onOpen",
    "open"
  ]);
  useStylesheet(styleData, ActionSheet.displayName);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const actionBtnsRef = (0, import_react13.useRef)(null);
  const [focusedItem, setFocusedItem] = (0, import_react13.useReducer)((_, action) => {
    return parseInt(action.target.dataset.actionBtnIndex);
  }, 0);
  const childrenToRender = flattenFragments(children);
  const childrenArrayLength = childrenToRender.length;
  const childrenLength = isPhone() && !hideCancelButton ? childrenArrayLength + 1 : childrenArrayLength;
  const [internalOpen, setInternalOpen] = (0, import_react13.useState)(void 0);
  (0, import_react13.useEffect)(() => {
    const tagName = getUi5TagWithSuffix("ui5-responsive-popover");
    void customElements.whenDefined(tagName).then(() => {
      setInternalOpen(open);
    });
  }, [open]);
  const handleCancelBtnClick = () => {
    setInternalOpen(false);
  };
  const renderActionSheetButton = (element, index, childrenArray) => {
    return (0, import_jsx_runtime3.jsx)(ActionSheetButton, __spreadProps(__spreadValues({
      index,
      totalLength: childrenArray.length,
      tabIndex: focusedItem === index ? 0 : -1
    }, element.props), {
      onClick: (e) => {
        setInternalOpen(false);
        if (typeof element.props?.onClick === "function") {
          element.props?.onClick(e);
        }
      },
      onFocus: (e) => {
        if (typeof element.props?.onFocus === "function") {
          element.props?.onFocus(e);
        }
        setFocusedItem(e);
      }
    }), index);
  };
  const handleAfterOpen = (e) => {
    if (isPhone()) {
      actionBtnsRef.current.querySelector(`[data-action-btn-index="${focusedItem}"]`).focus();
    }
    if (typeof onOpen === "function") {
      onOpen(e);
    }
  };
  const handleKeyDown = (e) => {
    const currentIndex = parseInt(e.target.dataset.actionBtnIndex);
    const isRtl = actionBtnsRef.current?.matches(":dir(rtl)");
    switch (e.key) {
      case "ArrowDown":
      case (isRtl ? "ArrowLeft" : "ArrowRight"):
        if (currentIndex + 1 < childrenLength) {
          e.preventDefault();
          actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentIndex + 1}"]`).focus();
        }
        break;
      case "ArrowUp":
      case (isRtl ? "ArrowRight" : "ArrowLeft"):
        if (currentIndex > 0) {
          e.preventDefault();
          actionBtnsRef.current.querySelector(`[data-action-btn-index="${currentIndex - 1}"]`).focus();
        }
        break;
      case "PageUp":
        e.preventDefault();
        actionBtnsRef.current.querySelector(`[data-action-btn-index="${Math.max(currentIndex - 5, 0)}"]`).focus();
        break;
      case "PageDown":
        e.preventDefault();
        actionBtnsRef.current.querySelector(`[data-action-btn-index="${Math.min(currentIndex + 5, childrenLength - 1)}"]`).focus();
        break;
      case "Home":
        e.preventDefault();
        actionBtnsRef.current.querySelector(`[data-action-btn-index="0"]`).focus();
        break;
      case "End":
        e.preventDefault();
        actionBtnsRef.current.querySelector(`[data-action-btn-index="${childrenLength - 1}"]`).focus();
        break;
    }
  };
  const displayHeader = isPhone();
  return (0, import_jsx_runtime3.jsx)(ResponsivePopover, __spreadProps(__spreadValues({
    open: internalOpen,
    headerText: displayHeader ? headerText : void 0,
    header: displayHeader ? header : void 0,
    accessibleName: i18nBundle.getText(AVAILABLE_ACTIONS)
  }, rest), {
    onOpen: handleAfterOpen,
    ref,
    className: clsx(classNames.actionSheet, isPhone() && classNames.actionSheetMobile, className),
    "data-actionsheet": true,
    children: (0, import_jsx_runtime3.jsxs)("div", {
      className: isPhone() ? classNames.contentMobile : void 0,
      "data-component-name": "ActionSheetMobileContent",
      role: accessibilityAttributes?.actionSheetMobileContent?.role ?? "application",
      onKeyDown: handleKeyDown,
      ref: actionBtnsRef,
      children: [childrenToRender.map(renderActionSheetButton), isPhone() && !hideCancelButton && (0, import_jsx_runtime3.jsx)(Button, {
        design: ButtonDesign_default.Negative,
        onClick: handleCancelBtnClick,
        tabIndex: focusedItem === childrenLength - 1 ? 0 : -1,
        "data-action-btn-index": childrenLength - 1,
        "data-cancel-btn": true,
        onFocus: setFocusedItem,
        children: i18nBundle.getText(CANCEL)
      })]
    })
  }));
});
ActionSheet.displayName = "ActionSheet";

// node_modules/@ui5/webcomponents-icons/dist/v4/down.js
var name = "down";
var pathData = "M0 32h512L256 480zm64 32l192 352L448 64H64z";
var ltr = false;
var accData = ICON_DOWN;
var collection = "SAP-icons-v4";
var packageName = "@ui5/webcomponents-icons";
registerIcon(name, { pathData, ltr, accData, collection, packageName });

// node_modules/@ui5/webcomponents-icons/dist/v5/down.js
var name2 = "down";
var pathData2 = "M256 480q-15 0-22-13L4 70q-4-5-4-12 0-11 7.5-18.5T26 32h460q11 0 18.5 7.5T512 58q0 6-3 12L278 467q-6 13-22 13zM70 83l186 320L442 83H70z";
var ltr2 = false;
var accData2 = ICON_DOWN;
var collection2 = "SAP-icons-v5";
var packageName2 = "@ui5/webcomponents-icons";
registerIcon(name2, { pathData: pathData2, ltr: ltr2, accData: accData2, collection: collection2, packageName: packageName2 });

// node_modules/@ui5/webcomponents-icons/dist/down.js
var down_default = "down";

// node_modules/@ui5/webcomponents-icons/dist/v4/up.js
var name3 = "up";
var pathData3 = "M256 32l256 448H0zm0 64L64 448h384z";
var ltr3 = false;
var accData3 = ICON_UP;
var collection3 = "SAP-icons-v4";
var packageName3 = "@ui5/webcomponents-icons";
registerIcon(name3, { pathData: pathData3, ltr: ltr3, accData: accData3, collection: collection3, packageName: packageName3 });

// node_modules/@ui5/webcomponents-icons/dist/v5/up.js
var name4 = "up";
var pathData4 = "M256 32q16 0 22 13l231 396q3 6 3 13 0 11-7.5 18.5T486 480H26q-11 0-18.5-7.5T0 454q0-8 4-13L234 45q7-13 22-13zm186 397L256 109 70 429h372z";
var ltr4 = false;
var accData4 = ICON_UP;
var collection4 = "SAP-icons-v5";
var packageName4 = "@ui5/webcomponents-icons";
registerIcon(name4, { pathData: pathData4, ltr: ltr4, accData: accData4, collection: collection4, packageName: packageName4 });

// node_modules/@ui5/webcomponents-icons/dist/up.js
var up_default = "up";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalCardHeader/index.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalCardHeader/AnalyticalCardHeader.module.css.js
var styleData2 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "AnalyticalCardHeader.module.css",
  content: '.AnalyticalCardHeader_cardHeader_164dx_1{background-color:var(--sapTile_Background);padding:1rem;position:relative}.AnalyticalCardHeader_cardHeader_164dx_1:focus:before{border:var(--_ui5wcr_card_header_focus_border);border-radius:var(--_ui5wcr_card_header_focus_radius) var(--_ui5wcr_card_header_focus_radius) var(--_ui5wcr_card_header_focus_bottom_radius) var(--_ui5wcr_card_header_focus_bottom_radius);content:"";inset:var(--_ui5wcr_card_header_focus_offset);outline:none;pointer-events:none;position:absolute}.AnalyticalCardHeader_cardHeader_164dx_1:focus-visible{outline:none}.AnalyticalCardHeader_cardHeaderClickable_164dx_22{cursor:pointer}.AnalyticalCardHeader_headerTitles_164dx_26{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;min-width:0;width:100%}.AnalyticalCardHeader_headerFirstLine_164dx_35{display:flex;justify-content:space-between;width:100%}.AnalyticalCardHeader_headerSecondLine_164dx_41{align-items:flex-end;color:var(--sapTile_TextColor);display:flex;flex-grow:1;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;min-height:1rem;position:relative;white-space:normal;word-wrap:break-word;margin:.5rem 0 0;overflow:hidden;text-align:start;text-overflow:ellipsis;width:100%;-webkit-line-clamp:2;-webkit-box-orient:vertical}.AnalyticalCardHeader_headerText_164dx_62{color:var(--sapTile_TitleTextColor);font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontHeader6Size);font-weight:var(--sapFontHeaderWeight);overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical;white-space:normal;word-wrap:break-word;text-align:start;text-overflow:ellipsis}.AnalyticalCardHeader_status_164dx_76{color:var(--sapTile_TextColor);font-size:var(--sapFontSmallSize);line-height:normal;margin-block-start:.125rem;margin-inline-start:1rem;text-align:end}.AnalyticalCardHeader_unitOfMeasurement_164dx_85{border-inline-start:1px solid var(--sapTile_TextColor);margin-inline-start:.25rem;padding-inline-start:.25rem}.AnalyticalCardHeader_kpiContent_164dx_91{align-items:flex-start;display:flex;margin-block-start:.25rem}.AnalyticalCardHeader_mainIndicator_164dx_97{color:var(--sapNeutralTextColor);display:inline-flex;font-family:var(--sapFontFamily);font-size:2.25rem;font-weight:400;justify-content:flex-start;position:relative;text-align:end;text-overflow:ellipsis;white-space:nowrap}.AnalyticalCardHeader_value_164dx_110{font-family:var(--sapFontLightFamily);height:2.875rem;padding-block-start:.125rem}.AnalyticalCardHeader_indicatorAndUnit_164dx_116{display:grid;height:2.125rem;padding-block:.5rem .375rem;padding-inline-start:.375rem;text-align:center;text-overflow:ellipsis}.AnalyticalCardHeader_indicator_164dx_116{color:currentColor;grid-column:1;grid-row:1;height:var(--sapFontSmallSize);width:var(--sapFontSmallSize)}.AnalyticalCardHeader_unit_164dx_85{font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);grid-column:1;grid-row:1;margin-top:.9375rem}.AnalyticalCardHeader_indicatorGap_164dx_141{flex:1 0 1rem;max-width:3rem}.AnalyticalCardHeader_sideIndicators_164dx_146{display:flex;min-width:0;padding:.5rem 0}.AnalyticalCardHeader_sideIndicators_164dx_146>*{margin-inline-end:1rem}.AnalyticalCardHeader_sideIndicators_164dx_146:last-child{margin-inline-end:0}.AnalyticalCardHeader_description_164dx_160{color:var(--sapTile_TextColor);display:-webkit-box;font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);font-weight:400;line-height:14px;margin-block-start:.25rem;max-height:14px;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:normal;width:100%;-webkit-line-clamp:1;-webkit-box-orient:vertical}.AnalyticalCardHeader_good_164dx_178{color:var(--sapPositiveTextColor)}.AnalyticalCardHeader_error_164dx_182{color:var(--sapNegativeTextColor)}.AnalyticalCardHeader_critical_164dx_186{color:var(--sapCriticalTextColor)}.AnalyticalCardHeader_neutral_164dx_190{color:var(--sapNeutralTextColor)}'
};
var classNames2 = {
  "cardHeader": "AnalyticalCardHeader_cardHeader_164dx_1",
  "cardHeaderClickable": "AnalyticalCardHeader_cardHeaderClickable_164dx_22",
  "headerTitles": "AnalyticalCardHeader_headerTitles_164dx_26",
  "headerFirstLine": "AnalyticalCardHeader_headerFirstLine_164dx_35",
  "headerSecondLine": "AnalyticalCardHeader_headerSecondLine_164dx_41",
  "headerText": "AnalyticalCardHeader_headerText_164dx_62",
  "status": "AnalyticalCardHeader_status_164dx_76",
  "unitOfMeasurement": "AnalyticalCardHeader_unitOfMeasurement_164dx_85",
  "kpiContent": "AnalyticalCardHeader_kpiContent_164dx_91",
  "mainIndicator": "AnalyticalCardHeader_mainIndicator_164dx_97",
  "value": "AnalyticalCardHeader_value_164dx_110",
  "indicatorAndUnit": "AnalyticalCardHeader_indicatorAndUnit_164dx_116",
  "indicator": "AnalyticalCardHeader_indicator_164dx_116",
  "unit": "AnalyticalCardHeader_unit_164dx_85",
  "indicatorGap": "AnalyticalCardHeader_indicatorGap_164dx_141",
  "sideIndicators": "AnalyticalCardHeader_sideIndicators_164dx_146",
  "description": "AnalyticalCardHeader_description_164dx_160",
  "good": "AnalyticalCardHeader_good_164dx_178",
  "error": "AnalyticalCardHeader_error_164dx_182",
  "critical": "AnalyticalCardHeader_critical_164dx_186",
  "neutral": "AnalyticalCardHeader_neutral_164dx_190"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalCardHeader/index.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var semanticColorMap = /* @__PURE__ */ new Map([[ValueColor.Neutral, SEMANTIC_COLOR_NEUTRAL], [ValueColor.Good, SEMANTIC_COLOR_GOOD], [ValueColor.Critical, SEMANTIC_COLOR_CRITICAL], [ValueColor.Error, SEMANTIC_COLOR_ERROR]]);
var deviationMap = /* @__PURE__ */ new Map([[DeviationIndicator.Up, NUMERICCONTENT_DEVIATION_UP], [DeviationIndicator.Down, NUMERICCONTENT_DEVIATION_DOWN]]);
var AnalyticalCardHeader = (0, import_react14.forwardRef)((props, ref) => {
  const _a = props, {
    titleText,
    subtitleText,
    value,
    scale,
    state = ValueColor.None,
    onClick,
    className,
    description,
    status,
    unitOfMeasurement,
    trend = DeviationIndicator.None,
    style,
    children,
    id
  } = _a, rest = __objRest(_a, [
    "titleText",
    "subtitleText",
    "value",
    "scale",
    "state",
    "onClick",
    "className",
    "description",
    "status",
    "unitOfMeasurement",
    "trend",
    "style",
    "children",
    "id"
  ]);
  useStylesheet(styleData2, AnalyticalCardHeader.displayName);
  const headerClasses = clsx(classNames2.cardHeader, onClick && classNames2.cardHeaderClickable, className);
  const valueAndUnitClasses = clsx(classNames2.mainIndicator, state === ValueColor.Good && classNames2.good, state === ValueColor.Error && classNames2.error, state === ValueColor.Critical && classNames2.critical, state === ValueColor.Neutral && classNames2.neutral);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const uniqueHeaderId = useIsomorphicId();
  const headerId = id ?? uniqueHeaderId;
  const sideIndicators = flattenFragments(children);
  const sideIndicatorIds = sideIndicators.map((child, idx) => {
    return child.props?.id ?? `${headerId}-indicator${idx}`;
  });
  let kpiAriaLabel = `${value ?? ""}${scale ?? ""}
`;
  if (trend && trend !== DeviationIndicator.None) {
    kpiAriaLabel += i18nBundle.getText(deviationMap.get(trend) ?? "");
    kpiAriaLabel += "\n";
  }
  if (state && state !== ValueColor.None) {
    kpiAriaLabel += i18nBundle.getText(semanticColorMap.get(state) ?? "");
  }
  let cardLabelledBy = `${headerId}-title`;
  if (subtitleText) {
    cardLabelledBy += ` ${headerId}-subtitle`;
  }
  if (unitOfMeasurement) {
    cardLabelledBy += ` ${headerId}-unitOfMeasurement`;
  }
  cardLabelledBy += ` ${headerId}-mainIndicator`;
  for (const sideIndicatorId of sideIndicatorIds) {
    cardLabelledBy += ` ${sideIndicatorId}`;
  }
  if (description) {
    cardLabelledBy += ` ${headerId}-description`;
  }
  return (0, import_jsx_runtime4.jsx)("div", __spreadProps(__spreadValues({
    ref,
    className: headerClasses,
    style,
    id: headerId,
    "data-sap-ui-fastnavgroup": "true",
    tabIndex: 0,
    role: "heading",
    "aria-roledescription": i18nBundle.getText(ARIA_DESC_CARD_HEADER),
    "aria-labelledby": cardLabelledBy
  }, rest), {
    onClick,
    slot: "header",
    children: (0, import_jsx_runtime4.jsxs)("div", {
      children: [(0, import_jsx_runtime4.jsxs)("div", {
        className: classNames2.headerTitles,
        children: [(0, import_jsx_runtime4.jsxs)("div", {
          className: classNames2.headerFirstLine,
          children: [(0, import_jsx_runtime4.jsx)("span", {
            role: "heading",
            "aria-level": 3,
            className: classNames2.headerText,
            id: `${headerId}-title`,
            children: titleText
          }), status && (0, import_jsx_runtime4.jsx)("span", {
            className: classNames2.status,
            children: status
          })]
        }), (subtitleText || unitOfMeasurement) && (0, import_jsx_runtime4.jsxs)("div", {
          className: classNames2.headerSecondLine,
          children: [(0, import_jsx_runtime4.jsx)("span", {
            id: `${headerId}-subtitle`,
            children: subtitleText
          }), unitOfMeasurement && (0, import_jsx_runtime4.jsx)("span", {
            id: `${headerId}-unitOfMeasurement`,
            className: classNames2.unitOfMeasurement,
            children: unitOfMeasurement
          })]
        })]
      }), (0, import_jsx_runtime4.jsxs)("div", {
        className: classNames2.kpiContent,
        children: [(0, import_jsx_runtime4.jsxs)("div", {
          className: valueAndUnitClasses,
          id: `${headerId}-mainIndicator`,
          "aria-label": kpiAriaLabel,
          role: "img",
          children: [(0, import_jsx_runtime4.jsx)("span", {
            className: classNames2.value,
            children: value
          }), (0, import_jsx_runtime4.jsxs)("div", {
            className: classNames2.indicatorAndUnit,
            children: [trend !== DeviationIndicator.None && (0, import_jsx_runtime4.jsx)(Icon, {
              className: clsx(classNames2.indicator),
              name: trend === DeviationIndicator.Up ? up_default : down_default
            }), (0, import_jsx_runtime4.jsx)("div", {
              className: classNames2.unit,
              children: scale
            })]
          })]
        }), (0, import_jsx_runtime4.jsx)("div", {
          className: classNames2.indicatorGap
        }), (0, import_jsx_runtime4.jsx)("div", {
          className: classNames2.sideIndicators,
          children: sideIndicators.map((sideIndicator, index) => {
            return (0, import_react14.cloneElement)(sideIndicator, {
              id: sideIndicator.props.id ?? `${headerId}-indicator${index}`
            });
          })
        })]
      }), description && (0, import_jsx_runtime4.jsx)("span", {
        id: `${headerId}-description`,
        className: classNames2.description,
        children: description
      })]
    })
  }));
});
AnalyticalCardHeader.displayName = "AnalyticalCardHeader";

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a, b) => Math.abs(a - b) < 1;
var debounce2 = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var defaultKeyExtractor = (index) => index;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce2(
    targetWindow,
    () => {
      cb(offset, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    offset = element[instance.options.horizontal ? "scrollLeft" : "scrollTop"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
var elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            this._measureElement(entry.target, entry);
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.disconnect();
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = __spreadValues({
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true
      }, opts2);
    };
    this.notify = (force, sync) => {
      var _a, _b;
      const { startIndex, endIndex } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      };
      const range = this.calculateRange();
      if (force || startIndex !== (range == null ? void 0 : range.startIndex) || endIndex !== (range == null ? void 0 : range.endIndex)) {
        (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
      }
    };
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.scrollElement = null;
      this.targetWindow = null;
      this.observer.disconnect();
      this.elementsCache.clear();
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.notify(false, false);
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.notify(false, false);
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            const prevIsScrolling = this.isScrolling;
            this.isScrolling = isScrolling;
            this.notify(prevIsScrolling !== isScrolling, isScrolling);
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m = index - 1; m >= 0; m--) {
        const measurement = measurements[m];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        var _a;
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min);
        for (let i = min; i < count; i++) {
          let measureElement22 = (_a = this.measurementsCache[i]) == null ? void 0 : _a.measureElement;
          if (!measureElement22) {
            measureElement22 = (node) => {
              const key2 = getItemKey(i);
              const prevNode = this.elementsCache.get(key2);
              if (!node) {
                if (prevNode) {
                  this.observer.unobserve(prevNode);
                  this.elementsCache.delete(key2);
                }
                return;
              }
              if (prevNode !== node) {
                if (prevNode) {
                  this.observer.unobserve(prevNode);
                }
                this.observer.observe(node);
                this.elementsCache.set(key2, node);
              }
              if (node.isConnected) {
                this.resizeItem(
                  i,
                  this.options.measureElement(node, void 0, this)
                );
              }
            };
          }
          const key = getItemKey(i);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
          measurements[i] = {
            index: i,
            start,
            size,
            end,
            key,
            lane,
            measureElement: measureElement22
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count
        });
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const i = this.indexFromElement(node);
      const item = this.getMeasurements()[i];
      if (!item || !node.isConnected) {
        this.elementsCache.forEach((cached, key) => {
          if (cached === node) {
            this.observer.unobserve(node);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      const prevNode = this.elementsCache.get(item.key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(item.key, node);
      }
      this.resizeItem(i, this.options.measureElement(node, entry, this));
    };
    this.resizeItem = (index, size) => {
      const item = this.getMeasurements()[index];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(true, false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i = indexes[k];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getVirtualItems",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (toOffset <= scrollOffset) {
          align = "start";
        } else if (toOffset >= scrollOffset + size) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size;
      } else if (align === "center") {
        toOffset = toOffset - size / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - size;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const item = this.getMeasurements()[index];
      if (!item) {
        return void 0;
      }
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
        this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const offsetAndAlign = this.getOffsetForIndex(index, initialAlign);
      if (!offsetAndAlign) return;
      const [offset, align] = offsetAndAlign;
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
        this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.elementsCache.has(
            this.options.getItemKey(index)
          );
          if (elementInDOM) {
            const [latestOffset] = notUndefined(
              this.getOffsetForIndex(index, align)
            );
            if (!approxEqual(latestOffset, this.getScrollOffset())) {
              this.scrollToIndex(index, { align, behavior });
            }
          } else {
            this.scrollToIndex(index, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m) => m.end)
        );
      }
      return end - this.options.scrollMargin + this.options.paddingEnd;
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      var _a, _b;
      this.itemSizeCache = /* @__PURE__ */ new Map();
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, false);
    };
    this.setOptions(opts);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  const startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect2 = typeof document !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
function useVirtualizerBase(options) {
  const rerender = React2.useReducer(() => ({}), {})[1];
  const resolvedOptions = __spreadProps(__spreadValues({}, options), {
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        (0, import_react_dom.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  });
  const [instance] = React2.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  React2.useEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect2(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase(__spreadValues({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll
  }, options));
}

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/index.js
var import_react30 = __toESM(require_react(), 1);
var import_react_table4 = __toESM(require_react_table(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/FlexBox/index.js
var import_react15 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/FlexBox/FlexBox.module.css.js
var styleData3 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "FlexBox.module.css",
  content: ".FlexBox_flexBox_11fgm_1{display:flex}.FlexBox_flexBox_11fgm_1:where(.FlexBox_fitContainer_11fgm_4){height:100%;width:100%}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentStart_11fgm_11){justify-content:flex-start}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentEnd_11fgm_15){justify-content:flex-end}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentCenter_11fgm_19){justify-content:center}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentSpaceAround_11fgm_23){justify-content:space-around}.FlexBox_flexBox_11fgm_1:where(.FlexBox_justifyContentSpaceBetween_11fgm_27){justify-content:space-between}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsStart_11fgm_33){align-items:flex-start}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsEnd_11fgm_37){align-items:flex-end}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsCenter_11fgm_41){align-items:center}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsStretch_11fgm_45){align-items:stretch}.FlexBox_flexBox_11fgm_1:where(.FlexBox_alignItemsBaseline_11fgm_49){align-items:baseline}.FlexBox_flexBoxDisplayInline_11fgm_54{display:inline-flex}.FlexBox_flexBoxDirectionColumn_11fgm_58{flex-direction:column}.FlexBox_flexBoxDirectionColumnReverse_11fgm_62{flex-direction:column-reverse}.FlexBox_flexBoxDirectionRow_11fgm_66{flex-direction:row}.FlexBox_flexBoxDirectionRowReverse_11fgm_70{flex-direction:row-reverse}.FlexBox_flexWrapNoWrap_11fgm_74{flex-wrap:nowrap}.FlexBox_flexWrapWrap_11fgm_78{flex-wrap:wrap}.FlexBox_flexWrapWrapReverse_11fgm_82{flex-wrap:wrap-reverse}"
};
var classNames3 = {
  "flexBox": "FlexBox_flexBox_11fgm_1",
  "fitContainer": "FlexBox_fitContainer_11fgm_4",
  "justifyContentStart": "FlexBox_justifyContentStart_11fgm_11",
  "justifyContentEnd": "FlexBox_justifyContentEnd_11fgm_15",
  "justifyContentCenter": "FlexBox_justifyContentCenter_11fgm_19",
  "justifyContentSpaceAround": "FlexBox_justifyContentSpaceAround_11fgm_23",
  "justifyContentSpaceBetween": "FlexBox_justifyContentSpaceBetween_11fgm_27",
  "alignItemsStart": "FlexBox_alignItemsStart_11fgm_33",
  "alignItemsEnd": "FlexBox_alignItemsEnd_11fgm_37",
  "alignItemsCenter": "FlexBox_alignItemsCenter_11fgm_41",
  "alignItemsStretch": "FlexBox_alignItemsStretch_11fgm_45",
  "alignItemsBaseline": "FlexBox_alignItemsBaseline_11fgm_49",
  "flexBoxDisplayInline": "FlexBox_flexBoxDisplayInline_11fgm_54",
  "flexBoxDirectionColumn": "FlexBox_flexBoxDirectionColumn_11fgm_58",
  "flexBoxDirectionColumnReverse": "FlexBox_flexBoxDirectionColumnReverse_11fgm_62",
  "flexBoxDirectionRow": "FlexBox_flexBoxDirectionRow_11fgm_66",
  "flexBoxDirectionRowReverse": "FlexBox_flexBoxDirectionRowReverse_11fgm_70",
  "flexWrapNoWrap": "FlexBox_flexWrapNoWrap_11fgm_74",
  "flexWrapWrap": "FlexBox_flexWrapWrap_11fgm_78",
  "flexWrapWrapReverse": "FlexBox_flexWrapWrapReverse_11fgm_82"
};

// node_modules/@ui5/webcomponents-react/dist/components/FlexBox/index.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var FlexBox = (0, import_react15.forwardRef)((props, ref) => {
  const _a = props, {
    children,
    justifyContent = FlexBoxJustifyContent.Start,
    direction = FlexBoxDirection.Row,
    alignItems = FlexBoxAlignItems.Stretch,
    displayInline,
    wrap = FlexBoxWrap.NoWrap,
    className,
    fitContainer,
    as = "div"
  } = _a, rest = __objRest(_a, [
    "children",
    "justifyContent",
    "direction",
    "alignItems",
    "displayInline",
    "wrap",
    "className",
    "fitContainer",
    "as"
  ]);
  useStylesheet(styleData3, FlexBox.displayName);
  const flexBoxClasses = clsx(classNames3.flexBox, classNames3[`flexBoxDirection${direction}`], classNames3[`justifyContent${justifyContent}`], classNames3[`alignItems${alignItems}`], classNames3[`flexWrap${wrap}`], displayInline && classNames3.flexBoxDisplayInline, fitContainer && classNames3.fitContainer, className);
  const CustomTag = as;
  return (0, import_jsx_runtime5.jsx)(CustomTag, __spreadProps(__spreadValues({
    ref,
    className: flexBoxClasses
  }, rest), {
    children
  }));
});
FlexBox.displayName = "FlexBox";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/AnalyticalTable.module.css.js
var styleData4 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "AnalyticalTable.module.css",
  content: '.AnalyticalTable_baseCellFocus_n66fk_1:focus{outline:none}.AnalyticalTable_baseCellFocus_n66fk_1:not([data-empty-row-cell]):focus:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);content:"";inset-block:1px;inset-inline:1px;pointer-events:none;position:absolute}.AnalyticalTable_table_n66fk_15{background-color:var(--sapList_Background);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;height:100%;max-width:100%;min-height:3rem;overflow-x:auto;overflow-y:hidden;position:relative;width:100%}.AnalyticalTable_table_n66fk_15:after{background:var(--sapList_TableFooterBorder);content:"";height:1px;inset-block-end:0;inset-inline-start:0;position:absolute;width:100%}.AnalyticalTable_tableContainerWithScrollBar_n66fk_40{position:relative}.AnalyticalTable_overlay_n66fk_44{background:var(--sapGroup_ContentBackground);bottom:0;left:0;opacity:.8;position:absolute;right:0;top:0;z-index:1}.AnalyticalTable_overlay_n66fk_44:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(var(--sapContent_FocusWidth)*-1)}.AnalyticalTable_tableHeaderRow_n66fk_60{height:var(--_ui5wcr-AnalyticalTableHeaderRowHeight)}.AnalyticalTable_tableHeaderRow_n66fk_60 div:first-child .AnalyticalTable_th_n66fk_63{border-inline-start:1px solid var(--sapList_BorderColor)}.AnalyticalTable_hasNavigationIndicator_n66fk_68 .AnalyticalTable_tableHeaderRow_n66fk_60 :nth-last-child(2) .AnalyticalTable_th_n66fk_63{border-inline-end:none}.AnalyticalTable_hasNavigationIndicator_n66fk_68 .AnalyticalTable_tr_n66fk_73 :nth-last-child(2){border-inline-end:none}.AnalyticalTable_tableHeaderBackgroundElement_n66fk_78{background-color:var(--sapList_HeaderBackground);border-block-end:var(--_ui5wcr-AnalyticalTable-HeaderBorderWidth) solid var(--sapList_HeaderBorderColor);border-block-start:var(--_ui5wcr-AnalyticalTable-OuterBorderBlock);box-sizing:border-box;height:var(--_ui5wcr-AnalyticalTableHeaderRowHeight);inset-inline:0;position:absolute}.AnalyticalTable_tableBodyBackgroundElement_n66fk_88{border-block-end:1px solid var(--sapList_TableFooterBorder);box-sizing:border-box;inset-block-end:0;inset-inline:0;position:absolute}.AnalyticalTable_th_n66fk_63{background-color:var(--sapList_HeaderBackground);border-block-end:var(--_ui5wcr-AnalyticalTable-HeaderBorderWidth) solid var(--sapList_HeaderBorderColor);border-block-start:var(--_ui5wcr-AnalyticalTable-OuterBorderBlock);border-inline-end:1px solid var(--sapList_BorderColor);box-sizing:border-box;color:var(--sapList_HeaderTextColor);height:var(--_ui5wcr-AnalyticalTableHeaderRowHeight);padding-inline:.5rem;text-align:start}.AnalyticalTable_th_n66fk_63:hover{background-color:var(--sapList_Hover_Background);color:var(--_ui5wcr-AnalyticalTable-HeaderActiveTextColor)}.AnalyticalTable_th_n66fk_63:active{background-color:var(--sapList_Active_Background);color:var(--_ui5wcr-AnalyticalTable-HeaderActiveTextColor)}.AnalyticalTable_th_n66fk_63[data-column-id=__ui5wcr__internal_highlight_column]{border-inline-end:1px solid #0000}.AnalyticalTable_th_n66fk_63:last-child [data-resizer]{transform:translateX(0)}.AnalyticalTable_th_n66fk_63[data-column-id=__ui5wcr__internal_selection_column]:focus{border-inline-start:1px solid #0000}.AnalyticalTable_tbody_n66fk_134{box-sizing:border-box;overflow-x:hidden;overflow-y:auto;position:relative;scrollbar-width:none;-ms-overflow-style:none}.AnalyticalTable_tbody_n66fk_134::-webkit-scrollbar{display:none!important;height:0!important;width:0!important}.AnalyticalTable_alternateRowColor_n66fk_149{background-color:var(--sapList_AlternatingBackground)}.AnalyticalTable_tr_n66fk_73{border-block-end:1px solid var(--sapList_BorderColor);box-sizing:border-box;color:var(--sapList_TextColor);display:flex;inset-block-start:0;inset-inline-start:0;margin-bottom:-1px;position:absolute;width:100%}.AnalyticalTable_tr_n66fk_73:hover:not([data-empty-row]){background-color:var(--sapList_Hover_Background)}.AnalyticalTable_tr_n66fk_73[data-is-selected]{background-color:var(--sapList_SelectionBackgroundColor);border-block-end:1px solid var(--sapList_SelectionBorderColor)}.AnalyticalTable_tr_n66fk_73[data-is-selected]:hover{background-color:var(--sapList_Hover_SelectionBackground)}.AnalyticalTable_trActive_n66fk_179{cursor:pointer}.AnalyticalTable_tableGroupHeader_n66fk_183.AnalyticalTable_tr_n66fk_73{background-color:var(--sapList_TableGroupHeaderBackground);border-color:var(--sapList_TableGroupHeaderBorderColor);color:var(--sapList_TextColor);font-family:var(--_ui5wcr-AnalyticalTable-HeaderFontFamily)}.AnalyticalTable_tableGroupHeader_n66fk_183.AnalyticalTable_tr_n66fk_73 .AnalyticalTable_tableCell_n66fk_189{border-inline-end:1px solid #0000}.AnalyticalTable_tableText_n66fk_194{box-sizing:border-box;display:inline-block;font-size:var(--sapFontSize);font-weight:400;max-width:100%;overflow:hidden;word-wrap:normal;text-overflow:ellipsis;white-space:nowrap}.AnalyticalTable_tableCell_n66fk_189{align-items:center;border-inline-end:1px solid var(--sapList_BorderColor);box-sizing:border-box;display:inline-flex;height:100%;overflow:hidden;padding:0 .5rem;position:relative;text-overflow:ellipsis;white-space:nowrap}.AnalyticalTable_tableCell_n66fk_189:first-child{border-inline-start:var(--_ui5wcr-AnalyticalTable-OuterCellBorder)}.AnalyticalTable_tableCell_n66fk_189:last-child{border-inline-end:var(--_ui5wcr-AnalyticalTable-OuterCellBorder)}.AnalyticalTable_tableCell_n66fk_189[aria-selected=true]:not([data-empty-row-cell]):focus:after{inset-block-end:2px}.AnalyticalTable_showVerticalEndBorder_n66fk_233 .AnalyticalTable_tableCell_n66fk_189{border-inline-end:1px solid var(--sapList_BorderColor)}.AnalyticalTable_noDataContainer_n66fk_237{align-items:center;background-color:var(--sapList_Background);border-block-end:1px solid var(--sapList_BorderColor);box-sizing:border-box;color:var(--sapList_TextColor);display:flex;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;height:100%;justify-content:center;width:100%}.AnalyticalTable_navigation_n66fk_252{background-color:var(--sapList_SelectionBorderColor)}.AnalyticalTable_positive_n66fk_256{background-color:var(--sapSuccessColor)}.AnalyticalTable_negative_n66fk_260{background-color:var(--sapErrorColor)}.AnalyticalTable_critical_n66fk_264{background-color:var(--sapWarningColor)}.AnalyticalTable_information_n66fk_268{background-color:var(--sapInformationColor)}.AnalyticalTable_indication01_n66fk_272{background:var(--sapIndicationColor_1)}.AnalyticalTable_indication02_n66fk_276{background:var(--sapIndicationColor_2)}.AnalyticalTable_indication03_n66fk_280{background:var(--sapIndicationColor_3)}.AnalyticalTable_indication04_n66fk_284{background:var(--sapIndicationColor_4)}.AnalyticalTable_indication05_n66fk_288{background:var(--sapIndicationColor_5)}.AnalyticalTable_indication06_n66fk_292{background:var(--sapIndicationColor_6)}.AnalyticalTable_indication07_n66fk_296{background:var(--sapIndicationColor_7)}.AnalyticalTable_indication08_n66fk_300{background:var(--sapIndicationColor_8)}.AnalyticalTable_hiddenSmartColMeasure_n66fk_304{height:0;position:fixed;visibility:hidden;white-space:nowrap}.AnalyticalTable_hiddenSmartColMeasureHeader_n66fk_311{font-family:var(--_ui5wcr-AnalyticalTable-HeaderFontFamily)}.AnalyticalTable_hiddenA11yText_n66fk_315{display:none}.AnalyticalTable_checkBox_n66fk_319::part(root){display:flex;height:unset;justify-content:center;min-height:unset;min-width:unset;padding:0;width:unset}'
};
var classNames4 = {
  "baseCellFocus": "AnalyticalTable_baseCellFocus_n66fk_1",
  "table": "AnalyticalTable_table_n66fk_15",
  "tableContainerWithScrollBar": "AnalyticalTable_tableContainerWithScrollBar_n66fk_40",
  "overlay": "AnalyticalTable_overlay_n66fk_44",
  "tableHeaderRow": "AnalyticalTable_tableHeaderRow_n66fk_60",
  "th": "AnalyticalTable_th_n66fk_63 AnalyticalTable_baseCellFocus_n66fk_1",
  "hasNavigationIndicator": "AnalyticalTable_hasNavigationIndicator_n66fk_68",
  "tr": "AnalyticalTable_tr_n66fk_73",
  "tableHeaderBackgroundElement": "AnalyticalTable_tableHeaderBackgroundElement_n66fk_78",
  "tableBodyBackgroundElement": "AnalyticalTable_tableBodyBackgroundElement_n66fk_88",
  "tbody": "AnalyticalTable_tbody_n66fk_134",
  "alternateRowColor": "AnalyticalTable_alternateRowColor_n66fk_149",
  "trActive": "AnalyticalTable_trActive_n66fk_179",
  "tableGroupHeader": "AnalyticalTable_tableGroupHeader_n66fk_183",
  "tableCell": "AnalyticalTable_tableCell_n66fk_189 AnalyticalTable_baseCellFocus_n66fk_1",
  "tableText": "AnalyticalTable_tableText_n66fk_194",
  "showVerticalEndBorder": "AnalyticalTable_showVerticalEndBorder_n66fk_233",
  "noDataContainer": "AnalyticalTable_noDataContainer_n66fk_237",
  "navigation": "AnalyticalTable_navigation_n66fk_252",
  "positive": "AnalyticalTable_positive_n66fk_256",
  "negative": "AnalyticalTable_negative_n66fk_260",
  "critical": "AnalyticalTable_critical_n66fk_264",
  "information": "AnalyticalTable_information_n66fk_268",
  "indication01": "AnalyticalTable_indication01_n66fk_272",
  "indication02": "AnalyticalTable_indication02_n66fk_276",
  "indication03": "AnalyticalTable_indication03_n66fk_280",
  "indication04": "AnalyticalTable_indication04_n66fk_284",
  "indication05": "AnalyticalTable_indication05_n66fk_288",
  "indication06": "AnalyticalTable_indication06_n66fk_292",
  "indication07": "AnalyticalTable_indication07_n66fk_296",
  "indication08": "AnalyticalTable_indication08_n66fk_300",
  "hiddenSmartColMeasure": "AnalyticalTable_hiddenSmartColMeasure_n66fk_304",
  "hiddenSmartColMeasureHeader": "AnalyticalTable_hiddenSmartColMeasureHeader_n66fk_311",
  "hiddenA11yText": "AnalyticalTable_hiddenA11yText_n66fk_315",
  "checkBox": "AnalyticalTable_checkBox_n66fk_319"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/ColumnHeader/ColumnHeaderContainer.js
var import_react18 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/ColumnHeader/Resizer.module.css.js
var styleData5 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "Resizer.module.css",
  content: ".Resizer_resizer_1toqu_1{cursor:col-resize;display:inline-block;height:100%;inset-block-end:0;inset-block-start:0;position:absolute;width:3px;z-index:1}.Resizer_resizer_1toqu_1:active,.Resizer_resizer_1toqu_1:hover{background-color:var(--sapContent_DragAndDropActiveColor)}"
};
var classNames5 = {
  "resizer": "Resizer_resizer_1toqu_1"
};

// node_modules/@ui5/webcomponents-icons/dist/v4/group-2.js
var name5 = "group-2";
var pathData5 = "M415 64h64q14 0 23 9t9 23v320q0 13-9 22.5t-23 9.5h-64v-32h64V96h-64V64zM-1 416V96q0-14 9.5-23T31 64h64v32H31v320h64v32H31q-13 0-22.5-9.5T-1 416zm144-96h224q16 0 16 16 0 6-4.5 11t-11.5 5H143q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm0-96h224q16 0 16 16 0 6-4.5 11t-11.5 5H143q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5zm-16-80q0-7 5-11.5t11-4.5h224q16 0 16 16 0 6-4.5 11t-11.5 5H143q-6 0-11-5t-5-11z";
var ltr5 = false;
var accData5 = ICON_GROUP_2;
var collection5 = "SAP-icons-v4";
var packageName5 = "@ui5/webcomponents-icons";
registerIcon(name5, { pathData: pathData5, ltr: ltr5, accData: accData5, collection: collection5, packageName: packageName5 });

// node_modules/@ui5/webcomponents-icons/dist/v5/group-2.js
var name6 = "group-2";
var pathData6 = "M454 480h-44q-11 0-18.5-7.5T384 454t7.5-18 18.5-7h44q7 0 7-7V90q0-7-7-7h-44q-11 0-18.5-7T384 58t7.5-18.5T410 32h44q24 0 41 17t17 41v332q0 24-17 41t-41 17zm-352 0H58q-24 0-41-17T0 422V90q0-24 17-41t41-17h44q11 0 18.5 7.5T128 58t-7.5 18-18.5 7H58q-7 0-7 7v332q0 7 7 7h44q11 0 18.5 7t7.5 18-7.5 18.5T102 480zm256-301H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 128h204q11 0 18.5 7.5T384 154t-7.5 18-18.5 7zm0 96H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 224h204q11 0 18.5 7.5T384 250t-7.5 18-18.5 7zm-96 96H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 320h108q11 0 18.5 7.5T288 346t-7.5 18-18.5 7z";
var ltr6 = false;
var accData6 = ICON_GROUP_2;
var collection6 = "SAP-icons-v5";
var packageName6 = "@ui5/webcomponents-icons";
registerIcon(name6, { pathData: pathData6, ltr: ltr6, accData: accData6, collection: collection6, packageName: packageName6 });

// node_modules/@ui5/webcomponents-icons/dist/group-2.js
var group_2_default = "group-2";

// node_modules/@ui5/webcomponents-icons/dist/v4/sort-ascending.js
var name7 = "sort-ascending";
var pathData7 = "M82 288h351l15 32H65zm-48 96h446l15 32H17zm366-160H113l16-32h255zm-47-96H161l17-32h158z";
var ltr7 = false;
var accData7 = ICON_SORT_ASCENDING;
var collection7 = "SAP-icons-v4";
var packageName7 = "@ui5/webcomponents-icons";
registerIcon(name7, { pathData: pathData7, ltr: ltr7, accData: accData7, collection: collection7, packageName: packageName7 });

// node_modules/@ui5/webcomponents-icons/dist/v5/sort-ascending.js
var name8 = "sort-ascending";
var pathData8 = "M358 147H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 96h204q11 0 18.5 7.5T384 122t-7.5 18-18.5 7zm64 128H90q-11 0-18.5-7T64 250t7.5-18.5T90 224h332q11 0 18.5 7.5T448 250t-7.5 18-18.5 7zm64 128H26q-11 0-18.5-7T0 378t7.5-18.5T26 352h460q11 0 18.5 7.5T512 378t-7.5 18-18.5 7z";
var ltr8 = false;
var accData8 = ICON_SORT_ASCENDING;
var collection8 = "SAP-icons-v5";
var packageName8 = "@ui5/webcomponents-icons";
registerIcon(name8, { pathData: pathData8, ltr: ltr8, accData: accData8, collection: collection8, packageName: packageName8 });

// node_modules/@ui5/webcomponents-icons/dist/sort-ascending.js
var sort_ascending_default = "sort-ascending";

// node_modules/@ui5/webcomponents-icons/dist/v4/sort-descending.js
var name9 = "sort-descending";
var pathData9 = "M17 96h478l-15 32H34zm431 96l-15 32H82l-17-32h383zm-335 96h287l-16 32H129zm48 96h192l-16 32H177z";
var ltr9 = false;
var accData9 = ICON_SORT_DESCENDING;
var collection9 = "SAP-icons-v4";
var packageName9 = "@ui5/webcomponents-icons";
registerIcon(name9, { pathData: pathData9, ltr: ltr9, accData: accData9, collection: collection9, packageName: packageName9 });

// node_modules/@ui5/webcomponents-icons/dist/v5/sort-descending.js
var name10 = "sort-descending";
var pathData10 = "M486 96q11 0 18.5 7.5T512 122t-7.5 18-18.5 7H26q-11 0-18.5-7T0 122t7.5-18.5T26 96h460zm-64 128q11 0 18.5 7.5T448 250t-7.5 18-18.5 7H90q-11 0-18.5-7T64 250t7.5-18.5T90 224h332zm-64 128q11 0 18.5 7.5T384 378t-7.5 18-18.5 7H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 352h204z";
var ltr10 = false;
var accData10 = ICON_SORT_DESCENDING;
var collection10 = "SAP-icons-v5";
var packageName10 = "@ui5/webcomponents-icons";
registerIcon(name10, { pathData: pathData10, ltr: ltr10, accData: accData10, collection: collection10, packageName: packageName10 });

// node_modules/@ui5/webcomponents-icons/dist/sort-descending.js
var sort_descending_default = "sort-descending";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/ColumnHeader/index.js
var import_react17 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/ColumnHeader/ColumnHeader.module.css.js
var styleData6 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ColumnHeader.module.css",
  content: ".ColumnHeader_thContainer_1aj9t_1:first-child>[role=columnheader]{border-inline-start:var(--_ui5wcr-AnalyticalTable-OuterCellBorder)}.ColumnHeader_thContainer_1aj9t_1:last-child>[role=columnheader]{border-inline-end:var(--_ui5wcr-AnalyticalTable-OuterCellBorder)}.ColumnHeader_verticalEndBorder_1aj9t_11:last-child>[role=columnheader]{border-inline-end:1px solid var(--sapList_BorderColor)}.ColumnHeader_header_1aj9t_15{align-items:center;box-sizing:border-box;color:inherit;display:flex;font-family:var(--_ui5wcr-AnalyticalTable-HeaderFontFamily);font-size:var(--sapFontSize);font-weight:400;height:100%;max-width:100%;overflow-x:hidden;overflow-y:hidden;position:relative;text-align:start;text-overflow:ellipsis;white-space:nowrap;width:100%}.ColumnHeader_header_1aj9t_15>span{overflow-x:hidden;overflow-y:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.ColumnHeader_text_1aj9t_42{color:inherit;cursor:inherit;font-family:inherit;text-align:start;width:100%}.ColumnHeader_iconContainer_1aj9t_50{color:var(--sapContent_IconColor);display:flex;inset-inline-end:.5rem;position:absolute}.ColumnHeader_iconContainer_1aj9t_50>[ui5-icon]:not(:first-child){margin-inline-start:.125rem}.ColumnHeader_selectAllCheckBoxContainer_1aj9t_61{display:flex;justify-content:center}"
};
var classNames6 = {
  "thContainer": "ColumnHeader_thContainer_1aj9t_1",
  "verticalEndBorder": "ColumnHeader_verticalEndBorder_1aj9t_11",
  "header": "ColumnHeader_header_1aj9t_15",
  "text": "ColumnHeader_text_1aj9t_42",
  "iconContainer": "ColumnHeader_iconContainer_1aj9t_50",
  "selectAllCheckBoxContainer": "ColumnHeader_selectAllCheckBoxContainer_1aj9t_61"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/ColumnHeader/ColumnHeaderModal.js
var import_react16 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/internal/stopPropagation.js
var stopPropagation = (e) => {
  e.stopPropagation();
  e.stopImmediatePropagation?.();
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/ColumnHeader/ColumnHeaderModal.module.css.js
var styleData7 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ColumnHeaderModal.module.css",
  content: ".ColumnHeaderModal_popover_1u9v4_1{font-weight:400}.ColumnHeaderModal_popover_1u9v4_1::part(content){padding:0}.ColumnHeaderModal_filterIcon_1u9v4_9{color:var(--sapContent_NonInteractiveIconColor);min-height:1rem;min-width:1rem;padding-inline-end:.5rem}"
};
var classNames7 = {
  "popover": "ColumnHeaderModal_popover_1u9v4_1",
  "filterIcon": "ColumnHeaderModal_filterIcon_1u9v4_9"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/ColumnHeader/ColumnHeaderModal.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var ColumnHeaderModal = (props) => {
  const {
    column,
    onSort,
    onGroupBy,
    open,
    setPopoverOpen,
    isRtl,
    openerRef
  } = props;
  useStylesheet(styleData7, ColumnHeaderModal.displayName);
  const showFilter = column.canFilter;
  const showGroup = column.canGroupBy;
  const showSort = column.canSort;
  const ref = (0, import_react16.useRef)(null);
  const listRef = (0, import_react16.useRef)(null);
  const {
    Filter
  } = column;
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const clearSortingText = i18nBundle.getText(CLEAR_SORTING);
  const sortAscendingText = i18nBundle.getText(SORT_ASCENDING);
  const sortDescendingText = i18nBundle.getText(SORT_DESCENDING);
  const groupText = i18nBundle.getText(GROUP);
  const ungroupText = i18nBundle.getText(UNGROUP);
  const handleSort = (e) => {
    const sortType = e.detail.item.getAttribute("data-sort");
    switch (sortType) {
      case "asc":
        column.toggleSortBy(false, !!column.enableMultiSort);
        if (typeof onSort === "function") {
          onSort(enrichEventWithDetails(e, {
            column,
            sortDirection: sortType
          }));
        }
        break;
      case "desc":
        column.toggleSortBy(true, !!column.enableMultiSort);
        if (typeof onSort === "function") {
          onSort(enrichEventWithDetails(e, {
            column,
            sortDirection: sortType
          }));
        }
        break;
      case "clear":
        column.clearSortBy();
        if (typeof onSort === "function") {
          onSort(enrichEventWithDetails(e, {
            column,
            sortDirection: sortType
          }));
        }
        break;
      case "group":
        const willGroup = !column.isGrouped;
        column.toggleGroupBy(willGroup);
        if (typeof onGroupBy === "function") {
          onGroupBy(enrichEventWithDetails(e, {
            column,
            isGrouped: willGroup
          }));
        }
        break;
    }
    setPopoverOpen(false);
  };
  const isSortedAscending = column.isSorted && column.isSortedDesc === false;
  const isSortedDescending = column.isSorted && column.isSortedDesc === true;
  const onAfterClose = (e) => {
    stopPropagation(e);
    setPopoverOpen(false);
  };
  const onAfterOpen = () => {
    listRef.current?.children?.[0]?.focus();
  };
  const horizontalAlign = (() => {
    switch (column.hAlign) {
      case TextAlign.Begin:
        return isRtl ? PopoverHorizontalAlign_default.End : PopoverHorizontalAlign_default.Start;
      case TextAlign.End:
        return isRtl ? PopoverHorizontalAlign_default.Start : PopoverHorizontalAlign_default.End;
      case TextAlign.Left:
        return PopoverHorizontalAlign_default.Start;
      case TextAlign.Right:
        return PopoverHorizontalAlign_default.End;
      case TextAlign.Center:
        return PopoverHorizontalAlign_default.Center;
      default:
        return isRtl ? PopoverHorizontalAlign_default.End : PopoverHorizontalAlign_default.Start;
    }
  })();
  const handleCustomLiKeyDown = (e) => {
    if (e.key === "Enter") {
      setPopoverOpen(false);
    }
  };
  const handleListKeyDown = (e) => {
    if (e.key !== "Escape") {
      stopPropagation(e);
    }
  };
  (0, import_react16.useEffect)(() => {
    if (open && ref.current && openerRef.current) {
      void customElements.whenDefined(getUi5TagWithSuffix("ui5-popover")).then(() => {
        ref.current.opener = openerRef.current;
      });
    }
  }, [open]);
  return (0, import_jsx_runtime6.jsx)(Popover, {
    open,
    hideArrow: true,
    horizontalAlign,
    placement: PopoverPlacement_default.Bottom,
    ref,
    className: classNames7.popover,
    onClick: stopPropagation,
    onClose: onAfterClose,
    onOpen: onAfterOpen,
    "data-component-name": "ATHeaderPopover",
    children: (0, import_jsx_runtime6.jsxs)(List, {
      onItemClick: handleSort,
      ref: listRef,
      onKeyDown: handleListKeyDown,
      "data-component-name": "ATHeaderPopoverList",
      children: [isSortedAscending && (0, import_jsx_runtime6.jsx)(ListItemStandard, {
        type: ListItemType_default.Active,
        icon: decline_default,
        "data-sort": "clear",
        children: clearSortingText
      }), showSort && !isSortedAscending && (0, import_jsx_runtime6.jsx)(ListItemStandard, {
        type: ListItemType_default.Active,
        icon: sort_ascending_default,
        "data-sort": "asc",
        children: sortAscendingText
      }), showSort && !isSortedDescending && (0, import_jsx_runtime6.jsx)(ListItemStandard, {
        type: ListItemType_default.Active,
        icon: sort_descending_default,
        "data-sort": "desc",
        children: sortDescendingText
      }), isSortedDescending && (0, import_jsx_runtime6.jsx)(ListItemStandard, {
        type: ListItemType_default.Active,
        icon: decline_default,
        "data-sort": "clear",
        children: clearSortingText
      }), showFilter && //todo maybe need to enhance Input selection after ui5-webcomponents issue has been fixed (undefined is displayed as val)
      (0, import_jsx_runtime6.jsx)(ListItemCustom, {
        type: ListItemType_default.Inactive,
        onKeyDown: handleCustomLiKeyDown,
        children: (0, import_jsx_runtime6.jsxs)(FlexBox, {
          alignItems: FlexBoxAlignItems.Center,
          children: [(0, import_jsx_runtime6.jsx)(Icon, {
            name: filter_default,
            className: classNames7.filterIcon,
            "aria-hidden": true
          }), (0, import_jsx_runtime6.jsx)(Filter, {
            column,
            popoverRef: ref
          })]
        })
      }), showGroup && (0, import_jsx_runtime6.jsx)(ListItemStandard, {
        type: ListItemType_default.Active,
        icon: group_2_default,
        "data-sort": "group",
        children: column.isGrouped ? ungroupText : groupText
      })]
    })
  });
};
ColumnHeaderModal.displayName = "ColumnHeaderModal";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/ColumnHeader/index.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var ColumnHeader = (props) => {
  useStylesheet(styleData6, ColumnHeader.displayName);
  const {
    id,
    children,
    column,
    columnId,
    className,
    style,
    onSort,
    onGroupBy,
    onDragEnter,
    onDragOver,
    onDragStart,
    onDrop,
    onDragEnd,
    headerTooltip,
    isDraggable,
    dragOver,
    role,
    virtualColumn,
    columnVirtualizer,
    isRtl,
    visibleColumnIndex,
    onClick,
    onKeyDown,
    isFiltered,
    title: title2,
    "aria-label": ariaLabel,
    "aria-sort": ariaSort,
    showVerticalEndBorder
  } = props;
  const columnIndex = virtualColumn.index;
  const [popoverOpen, setPopoverOpen] = (0, import_react17.useState)(false);
  const columnHeaderRef = (0, import_react17.useRef)(null);
  const childIsString = typeof children === "string";
  const tooltip = (() => {
    if (headerTooltip) {
      return headerTooltip;
    }
    if (childIsString) {
      return children;
    }
    return null;
  })();
  const textStyle = (() => {
    let margin = 0;
    const style2 = {};
    if (column.hAlign) {
      style2.textAlign = column.hAlign.toLowerCase();
    }
    if (column.isSorted) margin++;
    if (column.isGrouped) margin++;
    if (isFiltered) margin++;
    if (margin === 0) {
      return style2;
    }
    if (margin > 0) {
      margin += 0.625;
    }
    style2.marginInlineEnd = `${margin}rem`;
    return style2;
  })();
  const hasPopover = column.canGroupBy || column.canSort || column.canFilter;
  const handleHeaderCellClick = (e) => {
    onClick?.(e);
    if (hasPopover) {
      setPopoverOpen(true);
    }
  };
  const directionStyles = isRtl ? {
    right: 0,
    transform: `translateX(-${virtualColumn.start}px)`
  } : {
    left: 0,
    transform: `translateX(${virtualColumn.start}px)`
  };
  const handleHeaderCellKeyDown = (e) => {
    onKeyDown?.(e);
    if (hasPopover && e.code === "Enter") {
      setPopoverOpen(true);
    }
    if (e.code === "Space") {
      e.preventDefault();
    }
  };
  const handleHeaderCellKeyUp = (e) => {
    if (hasPopover && e.code === "Space" && !e.target.hasAttribute("ui5-li")) {
      setPopoverOpen(true);
    }
  };
  if (!column) return null;
  return (0, import_jsx_runtime7.jsx)("div", {
    ref: columnHeaderRef,
    className: clsx(classNames6.thContainer, showVerticalEndBorder && classNames6.verticalEndBorder),
    style: __spreadValues({
      position: "absolute",
      insetBlockStart: 0,
      width: `${virtualColumn.size}px`
    }, directionStyles),
    children: (0, import_jsx_runtime7.jsxs)("div", {
      ref: columnVirtualizer.measureElement,
      "data-visible-column-index": visibleColumnIndex,
      "data-visible-row-index": 0,
      "data-row-index": 0,
      "data-column-index": columnIndex,
      tabIndex: -1,
      id,
      className,
      style: __spreadProps(__spreadValues({}, style), {
        borderInlineStart: dragOver ? `3px solid ${ThemingParameters.sapSelectedColor}` : void 0
      }),
      "aria-haspopup": hasPopover ? "menu" : void 0,
      role,
      draggable: isDraggable,
      onDragEnter,
      onDragOver,
      onDragStart,
      onDrop,
      onDragEnd,
      "data-column-id": columnId,
      onClick: handleHeaderCellClick,
      onKeyDown: handleHeaderCellKeyDown,
      onKeyUp: handleHeaderCellKeyUp,
      "aria-label": ariaLabel,
      "aria-sort": ariaSort,
      title: title2,
      children: [(0, import_jsx_runtime7.jsxs)("div", {
        className: clsx(classNames6.header, columnId === "__ui5wcr__internal_selection_column" && classNames6.selectAllCheckBoxContainer),
        "data-h-align": column.hAlign,
        "data-component-name": `AnalyticalTableHeaderContentContainer-${columnId}`,
        children: [childIsString ? (0, import_jsx_runtime7.jsx)(Text, {
          title: tooltip,
          maxLines: 1,
          style: textStyle,
          className: classNames6.text,
          "data-component-name": `AnalyticalTableHeaderTextContentContainer-${columnId}`,
          children
        }) : (0, import_jsx_runtime7.jsx)("span", {
          title: tooltip,
          style: textStyle,
          className: classNames6.text,
          "data-component-name": `AnalyticalTableHeaderContentContainer-${columnId}`,
          children
        }), (0, import_jsx_runtime7.jsxs)("div", {
          className: classNames6.iconContainer,
          "data-component-name": `AnalyticalTableHeaderIconsContainer-${columnId}`,
          children: [isFiltered && (0, import_jsx_runtime7.jsx)(Icon, {
            name: filter_default,
            "aria-hidden": true
          }), column.isSorted && (0, import_jsx_runtime7.jsx)(Icon, {
            name: column.isSortedDesc ? sort_descending_default : sort_ascending_default,
            "aria-hidden": true
          }), column.isGrouped && (0, import_jsx_runtime7.jsx)(Icon, {
            name: group_2_default,
            "aria-hidden": true
          })]
        })]
      }), hasPopover && popoverOpen && (0, import_jsx_runtime7.jsx)(ColumnHeaderModal, {
        isRtl,
        column,
        onSort,
        onGroupBy,
        openerRef: columnHeaderRef,
        open: popoverOpen,
        setPopoverOpen
      })]
    })
  });
};
ColumnHeader.displayName = "ColumnHeader";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/ColumnHeader/ColumnHeaderContainer.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var ColumnHeaderContainer = (0, import_react18.forwardRef)((props, ref) => {
  const {
    headerProps: headerProps3,
    headerGroup,
    onSort,
    onGroupByChanged,
    resizeInfo,
    isRtl,
    columnVirtualizer,
    uniqueId,
    showVerticalEndBorder
  } = props;
  useStylesheet(styleData5, "Resizer");
  const _a = headerProps3, {
    key
  } = _a, reactTableHeaderProps = __objRest(_a, [
    "key"
  ]);
  return (0, import_jsx_runtime8.jsx)("div", __spreadProps(__spreadValues({}, reactTableHeaderProps), {
    style: {
      width: `${columnVirtualizer.getTotalSize()}px`
    },
    ref,
    "data-component-name": "AnalyticalTableHeaderRow",
    children: columnVirtualizer.getVirtualItems().map((virtualColumn, index) => {
      const column = headerGroup.headers[virtualColumn.index];
      if (!column) {
        return null;
      }
      const isLastColumn = !column.disableResizing && virtualColumn.index + 1 === headerGroup.headers.length;
      const resizerDirectionStyle = isRtl ? {
        right: `${column.totalFlexWidth + column.totalLeft - (isLastColumn ? 3 : 0)}px`,
        transform: "translateX(50%)"
      } : {
        left: `${column.totalFlexWidth + column.totalLeft - (isLastColumn ? 3 : 0)}px`,
        transform: "translateX(-50%)"
      };
      const _a2 = column.getHeaderProps(), {
        key: key2
      } = _a2, rest = __objRest(_a2, [
        "key"
      ]);
      return (0, import_jsx_runtime8.jsxs)(import_react18.Fragment, {
        children: [column.canResize && column.getResizerProps && (0, import_jsx_runtime8.jsx)("div", __spreadProps(__spreadValues({}, column.getResizerProps()), {
          "data-resizer": true,
          "data-component-name": "AnalyticalTableResizer",
          className: classNames5.resizer,
          style: resizerDirectionStyle
        })), (0, import_jsx_runtime8.jsx)(ColumnHeader, __spreadProps(__spreadValues({}, rest), {
          showVerticalEndBorder,
          id: `${uniqueId}${rest?.id ?? ""}`,
          columnId: rest.id,
          visibleColumnIndex: index,
          onSort,
          onGroupBy: onGroupByChanged,
          headerTooltip: column.headerTooltip,
          isDraggable: !column.disableDragAndDrop && !resizeInfo.isResizingColumn,
          virtualColumn,
          columnVirtualizer,
          isRtl,
          children: column.render("Header")
        }))]
      }, key2);
    })
  }), key);
});
ColumnHeaderContainer.displayName = "ColumnHeaderContainer";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/FilterComponent/index.js
var import_react19 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var DefaultFilterComponent = ({
  column
}) => {
  const handleChange = (0, import_react19.useCallback)((e) => {
    column.setFilter(e.target.value || void 0);
  }, [column.setFilter]);
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") {
      stopPropagation(e);
    }
  };
  return (0, import_jsx_runtime9.jsx)(Input, {
    onInput: handleChange,
    value: column.filterValue ?? "",
    showClearIcon: true,
    onKeyDown: handleKeyDown
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/Column/Cell.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var Cell = ({
  cell: {
    value = "",
    isGrouped
  },
  column,
  row,
  webComponentsReactProperties
}) => {
  let cellContent = `${value ?? ""}`;
  if (isGrouped) {
    cellContent += ` (${row.subRows.length})`;
  }
  return (0, import_jsx_runtime10.jsx)("span", {
    title: cellContent,
    className: webComponentsReactProperties.classes.tableText,
    "data-column-id-cell-text": column.id,
    children: cellContent
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/Column/Expandable.module.css.js
var styleData8 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "Expandable.module.css",
  content: ".Expandable_container_n3fi0_1{flex-shrink:0;height:var(--_ui5wcr-AnalyticalTableExpandButtonHeight);margin-inline-end:.125rem}.Expandable_icon_n3fi0_7{align-items:center;color:var(--sapContent_IconColor);display:flex;height:100%;width:100%}.Expandable_icon_n3fi0_7::part(root){height:var(--_ui5wcr-AnalyticalTableExpandIconHeight);padding:.375rem;width:var(--_ui5wcr-AnalyticalTableExpandIconHeight)}.Expandable_button_n3fi0_20{color:var(--sapTextColor);font-size:.75rem;height:100%}.Expandable_nonExpandableCellSpacer_n3fi0_26{flex-shrink:0;width:var(--_ui5wcr-AnalyticalTableExpandIndicatorWidth)}.Expandable_withExpandableButton_n3fi0_31{margin-inline-end:.5rem}"
};
var classNames8 = {
  "container": "Expandable_container_n3fi0_1",
  "icon": "Expandable_icon_n3fi0_7",
  "button": "Expandable_button_n3fi0_20",
  "nonExpandableCellSpacer": "Expandable_nonExpandableCellSpacer_n3fi0_26",
  "withExpandableButton": "Expandable_withExpandableButton_n3fi0_31"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/Column/Expandable.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var getPadding = (level) => {
  switch (level) {
    case 0:
      return "0px";
    case 1:
      return CssSizeVariables.ui5WcrAnalyticalTableTreePaddingLevel1;
    case 2:
      return CssSizeVariables.ui5WcrAnalyticalTableTreePaddingLevel2;
    case 3:
      return CssSizeVariables.ui5WcrAnalyticalTableTreePaddingLevel3;
    default:
      return `calc(${CssSizeVariables.ui5WcrAnalyticalTableTreePaddingLevel3} + ${level - 3}rem * 0.5)`;
  }
};
var Expandable = (props) => {
  const {
    cell,
    row,
    column,
    visibleColumns: columns6,
    webComponentsReactProperties
  } = props;
  const {
    renderRowSubComponent,
    alwaysShowSubComponent,
    translatableTexts
  } = webComponentsReactProperties;
  const currentTheme = useCurrentTheme();
  useStylesheet(styleData8, Expandable.displayName);
  const shouldRenderButton = currentTheme === "sap_horizon" || currentTheme === "sap_horizon_dark";
  const tableColumns = columns6.filter(({
    id
  }) => id !== "__ui5wcr__internal_selection_column" && id !== "__ui5wcr__internal_highlight_column" && id !== "__ui5wcr__internal_navigation_column");
  const columnIndex = tableColumns.findIndex((col) => col.id === column.id);
  const paddingLeft = getPadding(row.depth);
  const rowProps = row.getToggleRowExpandedProps();
  const subComponentExpandable = typeof renderRowSubComponent === "function" && !!renderRowSubComponent(row) && !alwaysShowSubComponent;
  return (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, {
    children: [columnIndex === 0 && // todo rowProps should be applied to the whole row, not just the cell. We should consider refactoring this.
    (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, {
      children: row.canExpand || subComponentExpandable ? (0, import_jsx_runtime11.jsx)("span", {
        title: row.isExpanded ? translatableTexts.collapseNodeA11yText : translatableTexts.expandNodeA11yText,
        style: __spreadProps(__spreadValues({}, rowProps.style), {
          paddingInlineStart: paddingLeft
        }),
        className: classNames8.container,
        "aria-expanded": row.isExpanded,
        "aria-label": row.isExpanded ? translatableTexts.collapseA11yText : translatableTexts.expandA11yText,
        children: shouldRenderButton ? (0, import_jsx_runtime11.jsx)(Button, {
          tabIndex: -1,
          icon: row.isExpanded ? navigation_down_arrow_default : navigation_right_arrow_default,
          design: ButtonDesign_default.Transparent,
          onClick: rowProps.onClick,
          className: classNames8.button
        }) : (0, import_jsx_runtime11.jsx)(Icon, {
          tabIndex: -1,
          onClick: rowProps.onClick,
          mode: IconMode_default.Interactive,
          name: row.isExpanded ? navigation_down_arrow_default : navigation_right_arrow_default,
          "data-component-name": "AnalyticalTableExpandIcon",
          className: classNames8.icon
        })
      }) : (0, import_jsx_runtime11.jsx)("span", {
        style: {
          paddingInlineStart: paddingLeft
        },
        "data-component-name": "AnalyticalTableNonExpandableCellSpacer",
        className: clsx(classNames8.nonExpandableCellSpacer, shouldRenderButton && classNames8.withExpandableButton)
      })
    }), cell.render("Cell")]
  });
};
Expandable.displayName = "Expandable";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/Column/Grouped.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var tableGroupExpandCollapseIcon = {
  color: "var(--sapContent_IconColor)",
  height: "0.75rem",
  width: "0.75rem",
  padding: "0.625rem",
  display: "block"
};
var Grouped = (props) => {
  const {
    cell,
    row,
    webComponentsReactProperties
  } = props;
  const {
    translatableTexts
  } = webComponentsReactProperties;
  const style = {};
  if (cell.column.hAlign && (cell.column.hAlign !== TextAlign.Left || cell.column.hAlign !== TextAlign.Begin)) {
    style.marginRight = "auto";
  }
  return (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
    children: [(0, import_jsx_runtime12.jsx)("span", __spreadProps(__spreadValues({}, row.getToggleRowExpandedProps({
      style,
      column: cell.column
    })), {
      title: row.isExpanded ? translatableTexts.collapseNodeA11yText : translatableTexts.expandNodeA11yText,
      children: (0, import_jsx_runtime12.jsx)(Icon, {
        name: row.isExpanded ? navigation_down_arrow_default : navigation_right_arrow_default,
        style: tableGroupExpandCollapseIcon
      })
    })), cell.render("Cell")]
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/Column/PopIn.js
var import_react_table = __toESM(require_react_table(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/Column/PopIn.module.css.js
var styleData9 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "PopIn.module.css",
  content: ".PopIn_container_1ydnd_1{width:100%}.PopIn_defaultCell_1ydnd_5{font-family:var(--sapFontBoldFamily)}.PopIn_defaultCell_1ydnd_5 *{font-family:var(--sapFontBoldFamily)}.PopIn_header_1ydnd_12{height:16px}"
};
var classNames9 = {
  "container": "PopIn_container_1ydnd_1",
  "defaultCell": "PopIn_defaultCell_1ydnd_5",
  "header": "PopIn_header_1ydnd_12"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/Column/PopIn.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var PopIn = (instance) => {
  const {
    state,
    contentToRender,
    cell,
    row,
    internalRowHeight
  } = instance;
  useStylesheet(styleData9, PopIn.displayName);
  return (0, import_jsx_runtime13.jsxs)(FlexBox, {
    direction: FlexBoxDirection.Column,
    className: classNames9.container,
    children: [(0, import_jsx_runtime13.jsx)(FlexBox, {
      alignItems: contentToRender !== "Grouped" && contentToRender !== "Expandable" ? FlexBoxAlignItems.Start : FlexBoxAlignItems.Center,
      wrap: FlexBoxWrap.NoWrap,
      className: classNames9.defaultCell,
      style: {
        height: internalRowHeight
      },
      children: cell.render(contentToRender)
    }), contentToRender !== "Grouped" && state.popInColumns?.map((item) => {
      const popInInstanceProps = row.allCells.find((cell2) => cell2.column.id === item.id);
      const renderHeader = () => {
        if (item.column.PopInHeader) {
          return typeof item.column.PopInHeader === "function" ? item.column.PopInHeader(__spreadValues(__spreadValues({}, instance), popInInstanceProps)) : item.column.PopInHeader;
        }
        return typeof item.column.Header === "function" ? (0, import_react_table.makeRenderer)(__spreadValues(__spreadValues({}, instance), popInInstanceProps), item.column)(item.column.Header) : item.column.Header;
      };
      const renderCell = () => {
        if (item.column?.Cell) {
          const cell2 = item.column.Cell;
          if (typeof cell2 === "string") {
            return (0, import_jsx_runtime13.jsx)(Text, {
              maxLines: 1,
              title: cell2,
              children: cell2
            });
          }
          return (0, import_react_table.makeRenderer)(__spreadProps(__spreadValues(__spreadValues({}, instance), popInInstanceProps), {
            isPopIn: true
          }), item.column)(item.column.Cell);
        }
        return popInInstanceProps?.value ? (0, import_jsx_runtime13.jsx)(Text, {
          maxLines: 1,
          title: popInInstanceProps.value,
          children: popInInstanceProps.value
        }) : null;
      };
      return (0, import_jsx_runtime13.jsxs)(FlexBox, {
        direction: FlexBoxDirection.Column,
        children: [item.column?.Header && (0, import_jsx_runtime13.jsxs)("div", {
          className: classNames9.header,
          children: [renderHeader(), ":"]
        }), (0, import_jsx_runtime13.jsx)("div", {
          style: {
            height: internalRowHeight
          },
          children: popInInstanceProps && renderCell()
        })]
      }, item.id);
    })]
  });
};
PopIn.displayName = "PopIn";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/Column/RepeatedValue.js
var RepeatedValue = () => null;

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/Column/index.js
var DEFAULT_COLUMN_WIDTH = 60;
var DefaultColumn = {
  Filter: DefaultFilterComponent,
  minWidth: DEFAULT_COLUMN_WIDTH,
  vAlign: VerticalAlign.Middle,
  Grouped,
  Cell,
  Expandable,
  RepeatedValue,
  PopIn
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/LoadingComponent/TablePlaceholder.module.css.js
var styleData10 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "TablePlaceholder.module.css",
  content: "@keyframes TablePlaceholder_placeholderShimmer_162vo_1{0%{background-position-x:100%}to{background-position-x:0}}.TablePlaceholder_animation_162vo_10{animation-duration:2s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:TablePlaceholder_placeholderShimmer_162vo_1;animation-timing-function:linear;background-image:var(--sapContent_Placeholderloading_Gradient);background-repeat:no-repeat;background-size:1000px 104px}.TablePlaceholder_row_162vo_21{align-items:center;display:flex;height:var(--_ui5wcr-AnalyticalTableRowHeight)}.TablePlaceholder_cellContainer_162vo_27{box-sizing:border-box;display:flex;padding-inline:.25rem}.TablePlaceholder_cell_162vo_27{border-radius:var(--sapElement_BorderCornerRadius);height:var(--sapFontSize);width:60%}"
};
var classNames10 = {
  "animation": "TablePlaceholder_animation_162vo_10",
  "placeholderShimmer": "TablePlaceholder_placeholderShimmer_162vo_1",
  "row": "TablePlaceholder_row_162vo_21",
  "cellContainer": "TablePlaceholder_cellContainer_162vo_27",
  "cell": "TablePlaceholder_cell_162vo_27"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/LoadingComponent/TablePlaceholder.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var getArrayOfLength = (len) => Array.from(Array(len).keys());
var TablePlaceholder = (props) => {
  const {
    columns: columns6,
    rows = 5,
    style
  } = props;
  useStylesheet(styleData10, TablePlaceholder.displayName);
  return (0, import_jsx_runtime14.jsx)("div", {
    style: __spreadValues({
      backgroundColor: ThemingParameters.sapList_Background,
      width: "100%"
    }, style),
    "data-component-name": "AnalyticalTableLoadingPlaceholder",
    children: getArrayOfLength(rows).map((_, index) => {
      return (0, import_jsx_runtime14.jsx)("div", {
        className: classNames10.row,
        children: columns6.map((col) => {
          return (0, import_jsx_runtime14.jsx)("div", {
            className: classNames10.cellContainer,
            style: __spreadValues({
              width: col.totalWidth
            }, resolveCellAlignment(col)),
            children: (0, import_jsx_runtime14.jsx)("div", {
              className: clsx(classNames10.cell, classNames10.animation)
            })
          }, `row${index}-${col.id}`);
        })
      }, `row-${index}`);
    })
  });
};
TablePlaceholder.displayName = "TablePlaceholder";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/defaults/NoDataComponent/index.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var DefaultNoDataComponent = ({
  noDataText,
  className,
  style
}) => {
  return (0, import_jsx_runtime15.jsx)("div", {
    className,
    style,
    children: noDataText
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useA11y.js
var setCellProps = (cellProps, {
  cell,
  instance
}) => {
  const {
    column,
    row,
    value
  } = cell;
  const columnIndex = instance.visibleColumns.findIndex(({
    id
  }) => id === column.id);
  const {
    alwaysShowSubComponent,
    renderRowSubComponent,
    translatableTexts,
    selectionMode,
    selectionBehavior
  } = instance.webComponentsReactProperties;
  const updatedCellProps = {
    "aria-colindex": columnIndex + 1,
    role: "gridcell"
  };
  const RowSubComponent2 = typeof renderRowSubComponent === "function" ? renderRowSubComponent(row) : void 0;
  const rowIsExpandable = row.canExpand || RowSubComponent2 && !alwaysShowSubComponent;
  const userCols = instance.visibleColumns.filter(({
    id
  }) => id !== "__ui5wcr__internal_selection_column" && id !== "__ui5wcr__internal_highlight_column" && id !== "__ui5wcr__internal_navigation_column");
  const isFirstUserCol = userCols[0]?.id === column.id || userCols[0]?.accessor === column.accessor;
  updatedCellProps["data-is-first-column"] = isFirstUserCol;
  updatedCellProps["aria-label"] = column.headerLabel || (typeof column.Header === "string" ? column.Header : "");
  updatedCellProps["aria-label"] &&= `${updatedCellProps["aria-label"]} `;
  updatedCellProps["aria-label"] += value || value === 0 ? `${value} ` : "";
  if (isFirstUserCol && rowIsExpandable || row.isGrouped && row.canExpand) {
    updatedCellProps.onKeyDown = row.getToggleRowExpandedProps?.()?.onKeyDown;
    let ariaLabel = "";
    if (row.isGrouped) {
      ariaLabel += translatableTexts.groupedA11yText + ",";
    }
    if (row.isExpanded) {
      updatedCellProps["aria-expanded"] = "true";
      ariaLabel += ` ${translatableTexts.collapseA11yText}`;
    } else {
      updatedCellProps["aria-expanded"] = "false";
      ariaLabel += ` ${translatableTexts.expandA11yText}`;
    }
    updatedCellProps["aria-label"] += ariaLabel;
  } else if (selectionMode !== AnalyticalTableSelectionMode.None && selectionBehavior !== AnalyticalTableSelectionBehavior.RowSelector && !row.isGrouped || column.id === "__ui5wcr__internal_selection_column") {
    if (row.isSelected) {
      updatedCellProps["aria-selected"] = "true";
      updatedCellProps["aria-label"] += ` ${translatableTexts.unselectA11yText}`;
    } else {
      updatedCellProps["aria-selected"] = "false";
      updatedCellProps["aria-label"] += ` ${translatableTexts.selectA11yText}`;
    }
  }
  const {
    cellLabel
  } = cell.column;
  if (typeof cellLabel === "function") {
    cell.cellLabel = updatedCellProps["aria-label"];
    updatedCellProps["aria-label"] = cellLabel({
      cell,
      instance
    });
  }
  return [cellProps, updatedCellProps];
};
var setHeaderProps = (headerProps3, {
  column,
  instance
}) => {
  const {
    translatableTexts
  } = instance.webComponentsReactProperties;
  if (!column) {
    return headerProps3;
  }
  const isFiltered = column?.filterValue && column?.filterValue.length > 0;
  const updatedProps = {};
  updatedProps["aria-label"] = column.headerLabel ??= "";
  if (updatedProps["aria-label"]) {
    updatedProps["aria-label"] += " ";
  }
  if (column.isSorted) {
    updatedProps["aria-sort"] = column.isSortedDesc ? "descending" : "ascending";
  }
  if (isFiltered) {
    updatedProps["aria-label"] += translatableTexts.filteredA11yText;
  }
  if (column.isGrouped) {
    if (updatedProps["aria-label"]) {
      updatedProps["aria-label"] += ` ${translatableTexts.groupedA11yText}`;
    } else {
      updatedProps["aria-label"] += translatableTexts.groupedA11yText;
    }
  }
  return [headerProps3, __spreadValues({
    isFiltered
  }, updatedProps)];
};
var useA11y = (hooks) => {
  hooks.getCellProps.push(setCellProps);
  hooks.getHeaderProps.push(setHeaderProps);
};
useA11y.pluginName = "useA11y";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useDynamicColumnWidths.js
var import_react20 = __toESM(require_react(), 1);
var ROW_SAMPLE_SIZE = 20;
var MAX_WIDTH = 700;
var CELL_PADDING_PX = 18;
function findLongestString(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return str1 || str2 || void 0;
  }
  return str1.length > str2.length ? str1 : str2;
}
function getContentPxAvg(rowSample, columnIdOrAccessor, uniqueId) {
  return rowSample.reduce((acc, item) => {
    const dataPoint = item.values?.[columnIdOrAccessor];
    let val = 0;
    if (dataPoint) {
      val = stringToPx(dataPoint, uniqueId) + CELL_PADDING_PX;
    }
    return acc + val;
  }, 0) / (rowSample.length || 1);
}
function stringToPx(dataPoint, id, isHeader = false) {
  const elementId = isHeader ? "scaleModeHelperHeader" : "scaleModeHelper";
  const ruler = document.getElementById(`${elementId}-${id}`);
  if (ruler) {
    ruler.textContent = `${dataPoint}`;
    return ruler.scrollWidth;
  }
  return 0;
}
var columnsDeps = (deps, {
  instance: {
    state,
    webComponentsReactProperties,
    visibleColumns: visibleColumns4,
    data,
    rows,
    columns: columns6
  }
}) => {
  const isLoadingPlaceholder = !data?.length && webComponentsReactProperties.loading;
  const hasRows = rows?.length > 0;
  const colsEqual = (0, import_react20.useMemo)(() => {
    return visibleColumns4?.filter((col) => col.id !== "__ui5wcr__internal_selection_column" && col.id !== "__ui5wcr__internal_highlight_column" && col.id !== "__ui5wcr__internal_navigation_column").every((visCol) => {
      const id = visCol.id ?? visCol.accessor;
      return columns6.some((item) => {
        return item.accessor === id || item.id === id;
      });
    });
  }, [visibleColumns4, columns6]);
  return [...deps, hasRows, colsEqual, visibleColumns4?.length, !state.tableColResized && state.tableClientWidth, state.hiddenColumns.length, webComponentsReactProperties.scaleWidthMode, isLoadingPlaceholder];
};
var smartColumns = (columns6, instance, hiddenColumns) => {
  const {
    rows,
    state,
    webComponentsReactProperties
  } = instance;
  const rowSample = rows.slice(0, ROW_SAMPLE_SIZE);
  const {
    tableClientWidth: totalWidth
  } = state;
  const visibleColumns4 = columns6.filter((column) => (column.isVisible ?? true) && !hiddenColumns.includes(column.id ?? column.accessor));
  const columnMeta = visibleColumns4.reduce((metadata, column) => {
    const columnIdOrAccessor = column.id ?? column.accessor;
    if (column.id === "__ui5wcr__internal_selection_column" || column.id === "__ui5wcr__internal_highlight_column" || column.id === "__ui5wcr__internal_navigation_column") {
      metadata[columnIdOrAccessor] = {
        headerPx: column.width || column.minWidth || 60,
        contentPxAvg: 0
      };
      return metadata;
    }
    let headerPx, contentPxAvg;
    if (column.scaleWidthModeOptions?.cellString) {
      contentPxAvg = stringToPx(column.scaleWidthModeOptions.cellString, webComponentsReactProperties.uniqueId) + CELL_PADDING_PX;
    } else {
      contentPxAvg = getContentPxAvg(rowSample, columnIdOrAccessor, webComponentsReactProperties.uniqueId);
    }
    if (column.scaleWidthModeOptions?.headerString) {
      headerPx = Math.max(stringToPx(column.scaleWidthModeOptions.headerString, webComponentsReactProperties.uniqueId, true) + CELL_PADDING_PX, 60);
    } else {
      headerPx = typeof column.Header === "string" ? Math.max(stringToPx(column.Header, webComponentsReactProperties.uniqueId, true) + CELL_PADDING_PX, 60) : 60;
    }
    metadata[columnIdOrAccessor] = {
      headerPx,
      contentPxAvg
    };
    return metadata;
  }, {});
  let totalContentPxAvgPrio1 = 0;
  let totalNumberColPrio2 = 0;
  const reservedWidth = visibleColumns4.reduce((acc, column) => {
    const columnIdOrAccessor = column.id ?? column.accessor;
    const {
      contentPxAvg,
      headerPx
    } = columnMeta[columnIdOrAccessor];
    if (contentPxAvg > headerPx) {
      if (!column.minWidth && !column.width) {
        totalContentPxAvgPrio1 += columnMeta[columnIdOrAccessor].contentPxAvg;
        totalNumberColPrio2++;
        return acc;
      } else {
        return acc + Math.max(column.minWidth || 0, column.width || 0);
      }
    } else {
      if (!column.minWidth && !column.width) {
        totalNumberColPrio2++;
      }
      const max = Math.max(column.minWidth || 0, column.width || 0, headerPx);
      columnMeta[columnIdOrAccessor].headerDefinesWidth = true;
      return acc + max;
    }
  }, 0);
  const availableWidthPrio1 = totalWidth - reservedWidth;
  let availableWidthPrio2 = availableWidthPrio1;
  const visibleColumnsAdaptedPrio1 = visibleColumns4.map((column) => {
    const columnIdOrAccessor = column.id ?? column.accessor;
    const meta = columnMeta[columnIdOrAccessor];
    if (meta && !column.minWidth && !column.width && !meta.headerDefinesWidth) {
      let targetWidth;
      const {
        contentPxAvg,
        headerPx
      } = meta;
      if (availableWidthPrio1 > 0) {
        const factor = contentPxAvg / totalContentPxAvgPrio1;
        targetWidth = Math.max(Math.min(availableWidthPrio1 * factor, contentPxAvg), headerPx);
        availableWidthPrio2 -= targetWidth;
      }
      return __spreadProps(__spreadValues({}, column), {
        nextWidth: targetWidth || headerPx
      });
    }
    return column;
  });
  return visibleColumnsAdaptedPrio1.map((column) => {
    const columnIdOrAccessor = column.id ?? column.accessor;
    const meta = columnMeta[columnIdOrAccessor];
    const {
      headerPx
    } = meta;
    if (meta && !column.minWidth && !column.width) {
      let targetWidth = column.nextWidth || headerPx;
      if (availableWidthPrio2 > 0) {
        targetWidth = targetWidth + availableWidthPrio2 * (1 / totalNumberColPrio2);
      }
      return __spreadProps(__spreadValues({}, column), {
        width: targetWidth
      });
    } else {
      return __spreadProps(__spreadValues({}, column), {
        width: Math.max(column.width || 0, 60, headerPx)
      });
    }
  });
};
var columns2 = (columns6, {
  instance
}) => {
  if (!instance.state || !instance.rows) {
    return columns6;
  }
  const {
    rows,
    state
  } = instance;
  const {
    hiddenColumns,
    tableClientWidth: totalWidth
  } = state;
  const {
    scaleWidthMode,
    loading,
    uniqueId
  } = instance.webComponentsReactProperties;
  if (columns6.length === 0 || !totalWidth || !AnalyticalTableScaleWidthMode[scaleWidthMode]) {
    return columns6;
  }
  const visibleColumns4 = instance.visibleColumns.map((visCol) => {
    const column = columns6.find((col) => {
      return col.id === visCol.id || col.accessor !== void 0 && visCol.id !== void 0 && col.accessor === visCol.id;
    });
    if (column) {
      return column;
    }
    return column ?? false;
  }).filter(Boolean);
  if (scaleWidthMode === AnalyticalTableScaleWidthMode.Smart) {
    return smartColumns(columns6, instance, hiddenColumns);
  }
  const calculateDefaultTableWidth = () => {
    const columnsWithWidthProperties = visibleColumns4.filter((column) => column.width ?? column.minWidth ?? column.maxWidth ?? false).map((column) => ({
      accessor: column.id ?? column.accessor,
      minWidth: column.minWidth,
      width: column.width,
      maxWidth: column.maxWidth
    }));
    let availableWidth2 = totalWidth;
    let defaultColumnsCount = visibleColumns4.length;
    const columnsWithFixedWidth = columnsWithWidthProperties.map((column) => {
      const {
        width,
        minWidth,
        maxWidth,
        accessor
      } = column;
      if (width) {
        const acceptedWidth = accessor !== "__ui5wcr__internal_highlight_column" && accessor !== "__ui5wcr__internal_selection_column" && accessor !== "__ui5wcr__internal_navigation_column" && width < 60 ? 60 : width;
        availableWidth2 -= acceptedWidth;
        defaultColumnsCount--;
        return acceptedWidth;
      }
      const columnsWithMaxWidth = columnsWithWidthProperties.filter((item) => item.maxWidth);
      const aggregatedColumnsMaxWidth = columnsWithMaxWidth.reduce((acc, cur) => acc + cur.maxWidth, 0);
      const aggregatedColumnsMinWidth = columnsWithWidthProperties.filter((item) => item.minWidth && !item.maxWidth).reduce((acc, cur) => acc + cur.minWidth, 0);
      if (minWidth > availableWidth2 / defaultColumnsCount) {
        if (availableWidth2 - aggregatedColumnsMaxWidth > aggregatedColumnsMinWidth + (visibleColumns4.length - columnsWithWidthProperties.length) * 60) {
          if (minWidth > (availableWidth2 - aggregatedColumnsMaxWidth) / columnsWithMaxWidth.length) {
            availableWidth2 -= minWidth;
            defaultColumnsCount--;
            return minWidth;
          }
          return false;
        }
        availableWidth2 -= minWidth;
        defaultColumnsCount--;
        return minWidth;
      }
      if (maxWidth < availableWidth2 / defaultColumnsCount) {
        availableWidth2 -= maxWidth;
        defaultColumnsCount--;
        return maxWidth;
      }
      return false;
    }).filter(Boolean);
    const fixedWidth = columnsWithFixedWidth.reduce((acc, val) => acc + val, 0);
    if (visibleColumns4.length > 0 && totalWidth > 0) {
      if (visibleColumns4.length === columnsWithFixedWidth.length) {
        return fixedWidth / visibleColumns4.length;
      }
      if (totalWidth >= fixedWidth + defaultColumnsCount * DEFAULT_COLUMN_WIDTH) {
        return (totalWidth - fixedWidth) / defaultColumnsCount;
      }
    }
    return DEFAULT_COLUMN_WIDTH;
  };
  const hasData = instance.data.length > 0;
  if (scaleWidthMode === AnalyticalTableScaleWidthMode.Default || !hasData && loading) {
    const defaultWidth = calculateDefaultTableWidth();
    return columns6.map((column) => __spreadProps(__spreadValues({}, column), {
      width: column.width ?? defaultWidth
    }));
  }
  const rowSample = rows.slice(0, ROW_SAMPLE_SIZE);
  const columnMeta = visibleColumns4.reduce((acc, column) => {
    const columnIdOrAccessor = column.id ?? column.accessor;
    if (column.id === "__ui5wcr__internal_selection_column" || column.id === "__ui5wcr__internal_highlight_column" || column.id === "__ui5wcr__internal_navigation_column") {
      acc[columnIdOrAccessor] = {
        minHeaderWidth: column.width,
        fullWidth: column.width
      };
      return acc;
    }
    const smartWidth = findLongestString(column.scaleWidthModeOptions?.headerString, column.scaleWidthModeOptions?.cellString);
    if (smartWidth) {
      const width = Math.max(stringToPx(smartWidth, uniqueId) + CELL_PADDING_PX, 60);
      acc[columnIdOrAccessor] = {
        minHeaderWidth: width,
        fullWidth: width
      };
      return acc;
    }
    const minHeaderWidth = typeof column.Header === "string" ? stringToPx(column.Header, uniqueId, true) + CELL_PADDING_PX : DEFAULT_COLUMN_WIDTH;
    acc[columnIdOrAccessor] = {
      minHeaderWidth,
      fullWidth: Math.max(minHeaderWidth, getContentPxAvg(rowSample, columnIdOrAccessor, uniqueId))
    };
    return acc;
  }, {});
  let reservedWidth = visibleColumns4.reduce((acc, column) => {
    const {
      minHeaderWidth,
      fullWidth
    } = columnMeta[column.id ?? column.accessor];
    return acc + Math.max(column.minWidth || 0, column.width || 0, minHeaderWidth || 0, fullWidth) || 0;
  }, 0);
  let availableWidth = totalWidth - reservedWidth;
  if (availableWidth > 0) {
    let notReservedCount = 0;
    reservedWidth = visibleColumns4.reduce((acc, column) => {
      const reserved = Math.max(column.minWidth || 0, column.width || 0) || 0;
      if (!reserved) {
        notReservedCount++;
      }
      return acc + reserved;
    }, 0);
    availableWidth = totalWidth - reservedWidth;
    return columns6.map((column) => {
      const isColumnVisible = (column.isVisible ?? true) && !hiddenColumns.includes(column.id ?? column.accessor);
      const meta = columnMeta[column.id ?? column.accessor];
      if (isColumnVisible && meta) {
        const {
          minHeaderWidth
        } = meta;
        const targetWidth = availableWidth / notReservedCount;
        return __spreadProps(__spreadValues({}, column), {
          width: column.width ?? targetWidth,
          minWidth: column.minWidth ?? minHeaderWidth
        });
      }
      return column;
    });
  }
  return columns6.map((column) => {
    const isColumnVisible = (column.isVisible ?? true) && !hiddenColumns.includes(column.id ?? column.accessor);
    const meta = columnMeta[column.id ?? column.accessor];
    if (isColumnVisible && meta) {
      const {
        fullWidth
      } = meta;
      return __spreadProps(__spreadValues({}, column), {
        width: column.width ?? fullWidth,
        maxWidth: column.maxWidth ?? MAX_WIDTH
      });
    }
    return column;
  });
};
var useDynamicColumnWidths = (hooks) => {
  hooks.columns.push(columns2);
  hooks.columnsDeps.push(columnsDeps);
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useAutoResize.js
function setResizerProps(props, {
  instance,
  header
}) {
  const {
    dispatch,
    virtualRowsRange,
    rows,
    webComponentsReactProperties
  } = instance;
  const {
    onAutoResize,
    tableRef,
    isTreeTable
  } = webComponentsReactProperties;
  const {
    autoResizable,
    id: accessor
  } = header;
  if (!document || !tableRef.current || !autoResizable || !rows.length || !virtualRowsRange) {
    return props;
  }
  return __spreadProps(__spreadValues({}, props), {
    onDoubleClick: (e) => {
      let largest = getMeasureMax(accessor, virtualRowsRange, tableRef.current, isTreeTable);
      if (largest === -1) {
        return;
      }
      largest = largest > DEFAULT_COLUMN_WIDTH ? largest : DEFAULT_COLUMN_WIDTH;
      if (typeof onAutoResize === "function") {
        onAutoResize(enrichEventWithDetails(e, {
          columnId: accessor,
          width: largest
        }));
      }
      if (e.defaultPrevented) {
        return;
      }
      dispatch({
        type: "AUTO_RESIZE",
        payload: {
          [accessor]: largest
        }
      });
    }
  });
}
function calculateContentWidth(cell) {
  let contentWidth = 0;
  Array.from(cell.children).forEach((child) => {
    contentWidth += child.scrollWidth;
  });
  return contentWidth;
}
function getMeasureMax(accessor, virtualRowsRange, tableNode, isTreeTable) {
  let maxWidth = 0;
  let cellWithMaxWidthContent = null;
  function recursiveFindMaxWidth(row, accessor2, remainingRows) {
    if (!row || remainingRows === 0) {
      return;
    }
    const cellNode = row.querySelector(`[data-column-id-cell="${accessor2}"]`);
    const cellTextElement = cellNode?.querySelector(`[data-column-id-cell-text="${accessor2}"]`);
    if (cellTextElement) {
      if (isTreeTable && cellNode?.dataset.isFirstColumn) {
        const cellWidth = calculateContentWidth(cellNode);
        if (maxWidth < cellWidth) {
          maxWidth = cellWidth;
          cellWithMaxWidthContent = false;
        }
      } else {
        const currWidth = cellTextElement.scrollWidth;
        if (maxWidth < currWidth) {
          maxWidth = currWidth;
          cellWithMaxWidthContent = cellNode;
        }
      }
    }
    if (cellWithMaxWidthContent === null) {
      cellWithMaxWidthContent = cellNode;
    }
    recursiveFindMaxWidth(row.nextElementSibling, accessor2, remainingRows - 1);
  }
  const firstRow = tableNode.querySelector(`[data-virtual-row-index="${virtualRowsRange.startIndex}"]`);
  recursiveFindMaxWidth(firstRow, accessor, virtualRowsRange.endIndex - virtualRowsRange.startIndex);
  if (cellWithMaxWidthContent === false) {
    return Math.ceil(
      maxWidth + CELL_PADDING_PX + 2
      /* account for rounding error and border */
    );
  }
  if (!cellWithMaxWidthContent) {
    return -1;
  }
  return Math.ceil(
    calculateContentWidth(cellWithMaxWidthContent) + CELL_PADDING_PX + 2
    /* account for rounding error and border */
  );
}
var setCellProps2 = (props, {
  cell: {
    column: {
      id
    }
  }
}) => {
  return [props, {
    ["data-column-id-cell"]: id
  }];
};
var useAutoResize = (hooks) => {
  hooks.getResizerProps.push(setResizerProps);
  hooks.getCellProps.push(setCellProps2);
};
useAutoResize.pluginName = "useAutoResize";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useDragAndDrop.js
var getColumnId = (column) => {
  return typeof column.accessor === "string" ? column.accessor : column.id;
};
function getHeaderProps(props, {
  instance: {
    dispatch,
    state,
    columns: columns6,
    setColumnOrder,
    webComponentsReactProperties
  }
}) {
  const {
    columnOrder,
    columnResizing,
    isRtl,
    dndColumn
  } = state;
  const {
    onColumnsReorder
  } = webComponentsReactProperties;
  const handleDragStart = (e) => {
    if (columnResizing.isResizingColumn || !e.target.draggable) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData("text", e.currentTarget.dataset.columnId);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragEnter = (e) => {
    dispatch({
      type: "COLUMN_DND_START",
      payload: e.currentTarget.dataset.columnId
    });
  };
  const handleOnDragEnd = () => {
    dispatch({
      type: "COLUMN_DND_END"
    });
  };
  const handleOnDrop = (e) => {
    dispatch({
      type: "COLUMN_DND_END"
    });
    const droppedColId = e.currentTarget.dataset.columnId;
    const draggedColId = e.dataTransfer.getData("text");
    if (droppedColId === draggedColId) return;
    const internalColumnOrder = columnOrder.length > 0 ? columnOrder : columns6.map((col) => getColumnId(col));
    const droppedColIdx = internalColumnOrder.findIndex((col) => col === droppedColId);
    const draggedColIdx = internalColumnOrder.findIndex((col) => col === draggedColId);
    const tempCols = [...internalColumnOrder];
    const targetIndex = droppedColIdx > draggedColIdx ? isRtl ? droppedColIdx : droppedColIdx - 1 : droppedColIdx;
    tempCols.splice(targetIndex, 0, tempCols.splice(draggedColIdx, 1)[0]);
    setColumnOrder(tempCols);
    if (typeof onColumnsReorder === "function") {
      const columnsNewOrder = tempCols.map((tempColId) => columns6.find((col) => getColumnId(col) === tempColId));
      onColumnsReorder(enrichEventWithDetails(e, {
        columnsNewOrder,
        column: columns6[draggedColIdx]
      }));
    }
  };
  return [props, {
    onDragStart: handleDragStart,
    onDragEnter: handleDragEnter,
    onDragOver: handleDragOver,
    onDragEnd: handleOnDragEnd,
    onDrop: handleOnDrop,
    dragOver: dndColumn === props.id
  }];
}
function useColumnDragAndDrop(hooks) {
  hooks.getHeaderProps.push(getHeaderProps);
}

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useKeyboardNavigation.js
var import_react21 = __toESM(require_react(), 1);
var import_react_table2 = __toESM(require_react_table(), 1);
var CELL_DATA_ATTRIBUTES = ["visibleColumnIndex", "columnIndex", "rowIndex", "visibleRowIndex"];
var getFirstVisibleCell = (target, currentlyFocusedCell, noData) => {
  if (target.dataset.componentName === "AnalyticalTableContainer" && target.querySelector('[data-component-name="AnalyticalTableBodyScrollableContainer"]')) {
    const rowElements = target.querySelector('[data-component-name="AnalyticalTableBodyScrollableContainer"]').children;
    const middleRowCell = target.querySelector(`div[data-visible-column-index="0"][data-visible-row-index="${Math.round(rowElements.length / 2)}"]`);
    middleRowCell?.focus({
      preventScroll: true
    });
  } else {
    const firstVisibleCell = noData ? target.querySelector(`div[data-visible-column-index="0"][data-visible-row-index="0"]`) : target.querySelector(`div[data-visible-column-index="0"][data-visible-row-index="1"]`);
    if (firstVisibleCell) {
      firstVisibleCell.tabIndex = 0;
      firstVisibleCell.focus();
      currentlyFocusedCell.current = firstVisibleCell;
    }
  }
};
function recursiveSubComponentElementSearch(element) {
  if (!element.parentElement) {
    return null;
  }
  if (element?.parentElement.dataset.subcomponent) {
    return element.parentElement;
  }
  return recursiveSubComponentElementSearch(element.parentElement);
}
var findParentCell = (target) => {
  if (target === void 0 || target === null) return;
  if (target.dataset.rowIndex !== void 0 && target.dataset.columnIndex !== void 0 || target.dataset.rowIndexSub !== void 0 && target.dataset.columnIndexSub !== void 0) {
    return target;
  } else {
    return findParentCell(target.parentElement);
  }
};
var setFocus = (currentlyFocusedCell, nextElement) => {
  currentlyFocusedCell.current.tabIndex = -1;
  if (nextElement) {
    nextElement.tabIndex = 0;
    nextElement.focus();
    currentlyFocusedCell.current = nextElement;
  }
};
var navigateFromActiveSubCompItem = (currentlyFocusedCell, e) => {
  setFocus(currentlyFocusedCell, recursiveSubComponentElementSearch(e.target));
};
var useGetTableProps = (tableProps, {
  instance: {
    webComponentsReactProperties,
    data,
    columns: columns6,
    state
  }
}) => {
  const {
    showOverlay,
    tableRef
  } = webComponentsReactProperties;
  const currentlyFocusedCell = (0, import_react21.useRef)(null);
  const noData = data.length === 0;
  (0, import_react21.useEffect)(() => {
    if (showOverlay && currentlyFocusedCell.current) {
      currentlyFocusedCell.current.tabIndex = -1;
      currentlyFocusedCell.current = null;
    }
  }, [showOverlay]);
  const onTableBlur = (e) => {
    if (e.target.tagName === "UI5-LI" || e.target.tagName === "UI5-LI-CUSTOM") {
      currentlyFocusedCell.current = null;
    }
  };
  (0, import_react21.useEffect)(() => {
    if (!showOverlay && data && columns6 && currentlyFocusedCell.current && tableRef.current && tableRef.current.tabIndex !== 0 && !tableRef.current.contains(currentlyFocusedCell.current)) {
      currentlyFocusedCell.current = null;
      tableRef.current.tabIndex = 0;
    }
  }, [data, columns6, showOverlay]);
  const onTableFocus = (0, import_react21.useCallback)((e) => {
    const {
      dataset
    } = e.target;
    if (dataset.emptyRowCell === "true" || dataset.hasOwnProperty("subcomponentActiveElement") || // todo: with the new popover API of ui5wc this might not be necessary anymore
    dataset.componentName === "ATHeaderPopoverList" || dataset.componentName === "ATHeaderPopover") {
      return;
    }
    if (e.target.dataset.subcomponent) {
      e.target.tabIndex = 0;
      e.target.focus();
      currentlyFocusedCell.current = e.target;
      return;
    }
    const isFirstCellAvailable = e.target.querySelector('div[data-column-index="0"][data-row-index="1"]');
    if (e.target.dataset.componentName === "AnalyticalTableContainer") {
      e.target.tabIndex = -1;
      if (currentlyFocusedCell.current) {
        const {
          dataset: dataset2
        } = currentlyFocusedCell.current;
        const rowIndex = parseInt(dataset2.rowIndex ?? dataset2.rowIndexSub, 10);
        const columnIndex = parseInt(dataset2.columnIndex ?? dataset2.columnIndexSub, 10);
        if (e.target.querySelector(`div[data-column-index="${columnIndex}"][data-row-index="${rowIndex}"]`) || e.target.querySelector(`div[data-column-index-sub="${columnIndex}"][data-row-index-sub="${rowIndex}"]`)) {
          currentlyFocusedCell.current.tabIndex = 0;
          currentlyFocusedCell.current.focus({
            preventScroll: true
          });
        } else {
          getFirstVisibleCell(e.target, currentlyFocusedCell, noData);
        }
      } else if (isFirstCellAvailable) {
        const firstCell = e.target.querySelector('div[data-column-index]:not([data-column-id^="__ui5wcr__internal"][data-row-index="0"])');
        firstCell.tabIndex = 0;
        firstCell.focus({
          preventScroll: true
        });
        currentlyFocusedCell.current = firstCell;
      } else {
        getFirstVisibleCell(e.target, currentlyFocusedCell, noData);
      }
    } else {
      const tableCell = findParentCell(e.target);
      if (tableCell) {
        currentlyFocusedCell.current = tableCell;
      } else {
        getFirstVisibleCell(tableRef.current, currentlyFocusedCell, noData);
      }
    }
  }, [currentlyFocusedCell.current, tableRef.current, noData]);
  const onKeyboardNavigation = (0, import_react21.useCallback)((e) => {
    const {
      isRtl
    } = state;
    const isActiveItemInSubComponent = e.target.dataset.hasOwnProperty("subcomponentActiveElement");
    if (!currentlyFocusedCell.current && CELL_DATA_ATTRIBUTES.every((item) => Object.keys(e.target.dataset).includes(item))) {
      currentlyFocusedCell.current = e.target;
    }
    if (currentlyFocusedCell.current) {
      const columnIndex = parseInt(currentlyFocusedCell.current.dataset.columnIndex ?? "0", 10);
      const rowIndex = parseInt(currentlyFocusedCell.current.dataset.rowIndex ?? currentlyFocusedCell.current.dataset.subcomponentRowIndex, 10);
      switch (e.key) {
        case "End": {
          e.preventDefault();
          const visibleColumns4 = tableRef.current.querySelector(`div[data-component-name="AnalyticalTableHeaderRow"]`).children;
          const lastVisibleColumn = Array.from(visibleColumns4).slice(0).reduceRight((_, cur, index, arr) => {
            const columnIndex2 = parseInt(cur.children?.[0]?.dataset.columnIndex, 10);
            if (!isNaN(columnIndex2)) {
              arr.length = 0;
              return columnIndex2;
            }
            return 0;
          }, 0);
          const newElement = tableRef.current.querySelector(`div[data-visible-column-index="${lastVisibleColumn}"][data-row-index="${rowIndex}"]`);
          setFocus(currentlyFocusedCell, newElement);
          break;
        }
        case "Home": {
          e.preventDefault();
          const newElement = tableRef.current.querySelector(`div[data-visible-column-index="0"][data-row-index="${rowIndex}"]`);
          setFocus(currentlyFocusedCell, newElement);
          break;
        }
        case "PageDown": {
          e.preventDefault();
          if (currentlyFocusedCell.current.dataset.rowIndex === "0") {
            const newElement = tableRef.current.querySelector(`div[data-column-index="${columnIndex}"][data-row-index="${rowIndex + 1}"]`);
            setFocus(currentlyFocusedCell, newElement);
          } else {
            const lastVisibleRow = tableRef.current.querySelector(`div[data-component-name="AnalyticalTableBody"]`)?.children?.[0].children.length;
            const newElement = tableRef.current.querySelector(`div[data-column-index="${columnIndex}"][data-visible-row-index="${lastVisibleRow}"]`);
            setFocus(currentlyFocusedCell, newElement);
          }
          break;
        }
        case "PageUp": {
          e.preventDefault();
          if (currentlyFocusedCell.current.dataset.rowIndex <= "1") {
            const newElement = tableRef.current.querySelector(`div[data-column-index="${columnIndex}"][data-row-index="0"]`);
            setFocus(currentlyFocusedCell, newElement);
          } else {
            const newElement = tableRef.current.querySelector(`div[data-column-index="${columnIndex}"][data-visible-row-index="1"]`);
            setFocus(currentlyFocusedCell, newElement);
          }
          break;
        }
        case "ArrowRight": {
          e.preventDefault();
          if (isActiveItemInSubComponent) {
            navigateFromActiveSubCompItem(currentlyFocusedCell, e);
            return;
          }
          const newElement = tableRef.current.querySelector(`div[data-column-index="${columnIndex + (isRtl ? -1 : 1)}"][data-row-index="${rowIndex}"]`);
          if (newElement) {
            setFocus(currentlyFocusedCell, newElement);
            newElement.scrollIntoView({
              block: "nearest"
            });
          }
          break;
        }
        case "ArrowLeft": {
          e.preventDefault();
          if (isActiveItemInSubComponent) {
            navigateFromActiveSubCompItem(currentlyFocusedCell, e);
            return;
          }
          const newElement = tableRef.current.querySelector(`div[data-column-index="${columnIndex - (isRtl ? -1 : 1)}"][data-row-index="${rowIndex}"]`);
          if (newElement) {
            setFocus(currentlyFocusedCell, newElement);
            newElement.scrollIntoView({
              block: "nearest"
            });
          }
          break;
        }
        case "ArrowDown": {
          e.preventDefault();
          if (isActiveItemInSubComponent) {
            navigateFromActiveSubCompItem(currentlyFocusedCell, e);
            return;
          }
          const parent = currentlyFocusedCell.current.parentElement;
          const firstChildOfParent = parent?.children?.[0];
          const hasSubcomponent = firstChildOfParent?.dataset?.subcomponent;
          const newElement = tableRef.current.querySelector(`div[data-column-index="${columnIndex}"][data-row-index="${rowIndex + 1}"]`);
          if (hasSubcomponent && !currentlyFocusedCell.current?.dataset?.subcomponent) {
            currentlyFocusedCell.current.tabIndex = -1;
            firstChildOfParent.tabIndex = 0;
            firstChildOfParent.dataset.rowIndexSub = `${rowIndex}`;
            firstChildOfParent.dataset.columnIndexSub = `${columnIndex}`;
            firstChildOfParent.focus();
            currentlyFocusedCell.current = firstChildOfParent;
          } else if (newElement) {
            setFocus(currentlyFocusedCell, newElement);
          }
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          if (isActiveItemInSubComponent) {
            navigateFromActiveSubCompItem(currentlyFocusedCell, e);
            return;
          }
          let prevRowIndex = rowIndex - 1;
          const isSubComponent = e.target.dataset.subcomponent;
          if (isSubComponent) {
            prevRowIndex++;
          }
          const previousRowCell = tableRef.current.querySelector(`div[data-column-index="${columnIndex}"][data-row-index="${prevRowIndex}"]`);
          const firstChildPrevRow = previousRowCell?.parentElement.children[0];
          const hasSubcomponent = firstChildPrevRow?.dataset?.subcomponent;
          if (hasSubcomponent && !isSubComponent) {
            currentlyFocusedCell.current.tabIndex = -1;
            firstChildPrevRow.dataset.rowIndexSub = `${rowIndex - 1}`;
            firstChildPrevRow.dataset.columnIndexSub = `${columnIndex}`;
            firstChildPrevRow.tabIndex = 0;
            firstChildPrevRow.focus();
            currentlyFocusedCell.current = firstChildPrevRow;
          } else if (previousRowCell) {
            setFocus(currentlyFocusedCell, previousRowCell);
          }
          break;
        }
      }
    }
  }, [currentlyFocusedCell.current, tableRef.current, state?.isRtl]);
  if (showOverlay) {
    return tableProps;
  }
  return [tableProps, {
    onFocus: onTableFocus,
    onKeyDown: onKeyboardNavigation,
    onBlur: onTableBlur
  }];
};
function getPayload(e, column) {
  e.preventDefault();
  e.stopPropagation();
  const clientX = e.target.getBoundingClientRect().x + e.target.getBoundingClientRect().width;
  const columnId = column.id;
  const columnWidth = column.totalWidth;
  const headersToResize = getLeafHeaders(column);
  const headerIdWidths = headersToResize.map((d) => [d.id, d.totalWidth]);
  return {
    clientX,
    columnId,
    columnWidth,
    headerIdWidths
  };
}
var setHeaderProps2 = (headerProps3, {
  instance: {
    dispatch
  },
  column
}) => {
  const handleKeyDown = (e) => {
    if (e.nativeEvent.shiftKey) {
      if (e.key === "ArrowRight") {
        const payload = getPayload(e, column);
        dispatch(__spreadValues({
          type: import_react_table2.actions.columnStartResizing
        }, payload));
        dispatch({
          type: import_react_table2.actions.columnResizing,
          clientX: payload.clientX + 16
        });
        dispatch({
          type: import_react_table2.actions.columnDoneResizing
        });
        return;
      }
      if (e.key === "ArrowLeft") {
        const payload = getPayload(e, column);
        dispatch(__spreadValues({
          type: import_react_table2.actions.columnStartResizing
        }, payload));
        dispatch({
          type: import_react_table2.actions.columnResizing,
          clientX: payload.clientX - 16
        });
        dispatch({
          type: import_react_table2.actions.columnDoneResizing
        });
        return;
      }
    }
  };
  return [headerProps3, {
    onKeyDown: handleKeyDown
  }];
};
var useKeyboardNavigation = (hooks) => {
  hooks.getTableProps.push(useGetTableProps);
  hooks.getHeaderProps.push(setHeaderProps2);
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/usePopIn.js
var popInVisibleColumnsDeps = (deps, {
  instance: {
    state
  }
}) => [...deps, state.tableClientWidth];
var popInVisibleColumns = (cols, {
  instance
}) => {
  const {
    state,
    dispatch
  } = instance;
  const tableClientWidth = state.isScrollable ? state?.tableClientWidth + 13 : state?.tableClientWidth;
  const popInColumns = cols.filter((item) => item.responsivePopIn && tableClientWidth < item.responsiveMinWidth).map((item) => ({
    id: item.id ?? item.accessor,
    column: item
  }));
  dispatch({
    type: "SET_POPIN_COLUMNS",
    payload: popInColumns
  });
  return cols.filter((col) => !popInColumns.some((item) => item.id === (col.id ?? col.accessor)) && (col.hasOwnProperty("responsiveMinWidth") ? !tableClientWidth || tableClientWidth >= col.responsiveMinWidth : true));
};
var usePopIn = (hooks) => {
  hooks.visibleColumns.push(popInVisibleColumns);
  hooks.visibleColumnsDeps.push(popInVisibleColumnsDeps);
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useResizeColumnsConfig.js
var useGetResizerProps = (props) => {
  return __spreadProps(__spreadValues({}, props), {
    onMouseDown: (e) => {
      e.preventDefault();
      props.onMouseDown(e);
    }
  });
};
var useResizeColumnsConfig = (hooks) => {
  hooks.getResizerProps.push(useGetResizerProps);
};
useResizeColumnsConfig.pluginName = "useResizeColumnsConfig";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useRowHighlight.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var baseStyles = {
  width: "100%",
  height: "100%"
};
var HighlightColors = __spreadProps(__spreadValues(__spreadValues({}, ValueState_default), IndicationColor), {
  None: void 0
});
var Header = () => (0, import_jsx_runtime16.jsx)("div", {
  style: {
    width: "6px"
  }
});
var Cell2 = (instance) => {
  const {
    cell,
    webComponentsReactProperties
  } = instance;
  const styleClass = HighlightColors[cell?.value] ? webComponentsReactProperties.classes[HighlightColors[cell.value].toLowerCase()] : void 0;
  return (0, import_jsx_runtime16.jsx)("div", {
    style: baseStyles,
    className: styleClass,
    "data-component-name": "AnalyticalTableHighlightCell"
  });
};
var columnsDeps2 = (deps, {
  instance: {
    webComponentsReactProperties
  }
}) => {
  return [...deps, webComponentsReactProperties.withRowHighlight, webComponentsReactProperties.highlightField];
};
var visibleColumnsDeps = (deps, {
  instance
}) => [...deps, instance.webComponentsReactProperties.withRowHighlight];
var visibleColumns = (currentVisibleColumns, {
  instance: {
    webComponentsReactProperties
  }
}) => {
  if (!webComponentsReactProperties.withRowHighlight) {
    return currentVisibleColumns.filter(({
      id
    }) => id !== "__ui5wcr__internal_highlight_column");
  }
  const highlightColumn = currentVisibleColumns.find(({
    id
  }) => id === "__ui5wcr__internal_highlight_column");
  return [highlightColumn, ...currentVisibleColumns.filter(({
    id
  }) => id !== "__ui5wcr__internal_highlight_column")];
};
var columns3 = (currentColumns, {
  instance
}) => {
  const {
    withRowHighlight,
    highlightField
  } = instance.webComponentsReactProperties;
  if (!withRowHighlight) {
    return currentColumns;
  }
  return [{
    id: "__ui5wcr__internal_highlight_column",
    accessor: highlightField,
    disableFilters: true,
    disableSortBy: true,
    disableGroupBy: true,
    disableResizing: true,
    disableDragAndDrop: true,
    width: 6,
    minWidth: 6,
    maxWidth: 6,
    Header,
    Cell: Cell2
  }, ...currentColumns];
};
var useRowHighlight = (hooks) => {
  hooks.columns.push(columns3);
  hooks.columnsDeps.push(columnsDeps2);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};
useRowHighlight.pluginName = "useRowHighlight";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useRowNavigationIndicator.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var baseStyles2 = {
  width: "100%",
  height: "100%"
};
var Header2 = () => (0, import_jsx_runtime17.jsx)("div", {
  style: {
    width: "6px"
  }
});
var Cell3 = (instance) => {
  const {
    isNavigatedCell,
    webComponentsReactProperties
  } = instance;
  if (isNavigatedCell) {
    return (0, import_jsx_runtime17.jsx)("div", {
      style: baseStyles2,
      className: webComponentsReactProperties.classes.navigation,
      "data-component-name": "AnalyticalTableNavigatedCell"
    });
  }
  return (0, import_jsx_runtime17.jsx)("div", {
    style: baseStyles2
  });
};
var columnsDeps3 = (deps, {
  instance: {
    webComponentsReactProperties
  }
}) => {
  return [...deps, webComponentsReactProperties.withNavigationHighlight];
};
var visibleColumnsDeps2 = (deps, {
  instance
}) => [...deps, instance.webComponentsReactProperties.withNavigationHighlight];
var visibleColumns2 = (currentVisibleColumns, {
  instance: {
    webComponentsReactProperties
  }
}) => {
  if (!webComponentsReactProperties.withNavigationHighlight) {
    return currentVisibleColumns.filter(({
      id
    }) => id !== "__ui5wcr__internal_navigation_column");
  }
  const highlightColumn = currentVisibleColumns.find(({
    id
  }) => id === "__ui5wcr__internal_navigation_column");
  return [...currentVisibleColumns.filter(({
    id
  }) => id !== "__ui5wcr__internal_navigation_column"), highlightColumn];
};
var columns4 = (currentColumns, {
  instance
}) => {
  const {
    withNavigationHighlight
  } = instance.webComponentsReactProperties;
  if (!withNavigationHighlight) {
    return currentColumns;
  }
  return [...currentColumns, {
    id: "__ui5wcr__internal_navigation_column",
    disableFilters: true,
    disableSortBy: true,
    disableGroupBy: true,
    disableResizing: true,
    disableDragAndDrop: true,
    width: 6,
    minWidth: 6,
    maxWidth: 6,
    Header: Header2,
    Cell: Cell3
  }];
};
var useRowNavigationIndicators = (hooks) => {
  hooks.columns.push(columns4);
  hooks.columnsDeps.push(columnsDeps3);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps2);
  hooks.visibleColumns.push(visibleColumns2);
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useRowSelectionColumn.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var customCheckBoxStyling2 = {
  verticalAlign: "middle",
  pointerEvents: "none"
};
var Header3 = (instance) => {
  const {
    getToggleAllRowsSelectedProps,
    webComponentsReactProperties: {
      selectionMode
    }
  } = instance;
  if (selectionMode === AnalyticalTableSelectionMode.Single) {
    return null;
  }
  const checkBoxProps = getToggleAllRowsSelectedProps();
  return (0, import_jsx_runtime18.jsx)(CheckBox, __spreadProps(__spreadValues({}, checkBoxProps), {
    style: customCheckBoxStyling2,
    tabIndex: -1,
    onChange: void 0,
    checked: checkBoxProps.indeterminate ? true : checkBoxProps.checked
  }));
};
var Cell4 = ({
  row,
  webComponentsReactProperties: {
    selectionMode
  }
}) => {
  if (selectionMode === AnalyticalTableSelectionMode.Single || row.isGrouped) {
    return null;
  }
  return (0, import_jsx_runtime18.jsx)(CheckBox, __spreadProps(__spreadValues({}, row.getToggleRowSelectedProps()), {
    tabIndex: -1,
    style: customCheckBoxStyling2,
    "data-name": "internal_selection_column"
  }));
};
function getNextSelectedRowIds(rowsById) {
  return Object.keys(rowsById).reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
  }, {});
}
var headerProps2 = (props, {
  instance
}) => {
  const {
    flatRows,
    webComponentsReactProperties: {
      onRowSelect,
      selectionMode,
      translatableTexts: {
        selectAllText,
        deselectAllText
      }
    },
    toggleAllRowsSelected,
    isAllRowsSelected,
    rowsById,
    dispatch,
    state: {
      filters,
      globalFilter
    }
  } = instance;
  const style = __spreadProps(__spreadValues({}, props.style), {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center"
  });
  if (props.key === "header___ui5wcr__internal_selection_column" && selectionMode === AnalyticalTableSelectionMode.Multiple) {
    const onClick = (e) => {
      toggleAllRowsSelected(!isAllRowsSelected);
      const isFiltered = filters?.length > 0 || !!globalFilter;
      if (typeof onRowSelect === "function") {
        if (isFiltered) {
          dispatch({
            type: "SELECT_ROW_CB",
            payload: {
              event: e,
              row: void 0,
              selectAll: true,
              fired: true
            }
          });
        } else {
          onRowSelect(
            // cannot use instance.selectedFlatRows here as it only returns all rows on the first level
            enrichEventWithDetails(e, {
              allRowsSelected: !isAllRowsSelected,
              selectedFlatRows: !isAllRowsSelected ? flatRows : [],
              selectedRowIds: !isAllRowsSelected ? getNextSelectedRowIds(rowsById) : {}
            })
          );
        }
      }
    };
    const onKeyDown = (e) => {
      if (e.code === "Enter" || e.code === "Space") {
        e.preventDefault();
        if (e.code === "Enter") {
          onClick(e);
        }
      }
    };
    const onKeyUp = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        onClick(e);
      }
    };
    return [props, {
      onClick,
      onKeyDown,
      onKeyUp,
      style,
      title: isAllRowsSelected ? deselectAllText : selectAllText
    }];
  }
  return props;
};
var columnDeps = (deps, {
  instance: {
    webComponentsReactProperties
  }
}) => {
  return [...deps, webComponentsReactProperties.selectionMode, webComponentsReactProperties.selectionBehavior];
};
var visibleColumnsDeps3 = (deps, {
  instance
}) => [...deps, instance.webComponentsReactProperties.selectionMode, instance.webComponentsReactProperties.selectionBehavior];
var visibleColumns3 = (currentVisibleColumns, {
  instance: {
    webComponentsReactProperties
  }
}) => {
  if (webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.None || webComponentsReactProperties.selectionBehavior === AnalyticalTableSelectionBehavior.RowOnly) {
    return currentVisibleColumns;
  }
  const selectionColumn = currentVisibleColumns.find(({
    id
  }) => id === "__ui5wcr__internal_selection_column");
  return [selectionColumn, ...currentVisibleColumns.filter(({
    id
  }) => id !== "__ui5wcr__internal_selection_column")];
};
var columns5 = (currentColumns, {
  instance
}) => {
  const {
    webComponentsReactProperties
  } = instance;
  const {
    selectionMode,
    selectionBehavior,
    tableRef
  } = webComponentsReactProperties;
  if (selectionMode === AnalyticalTableSelectionMode.None || selectionBehavior === AnalyticalTableSelectionBehavior.RowOnly) {
    return currentColumns;
  }
  const tableSelectionColumnWidth = tableRef.current && parseInt(getComputedStyle(tableRef.current).getPropertyValue(CssSizeVariablesNames.ui5WcrAnalyticalTableSelectionColumnWidth), 10);
  const selectionColumnWidth = !isNaN(tableSelectionColumnWidth) ? tableSelectionColumnWidth : 47;
  return [{
    id: "__ui5wcr__internal_selection_column",
    disableFilters: true,
    disableSortBy: true,
    disableGroupBy: true,
    disableResizing: true,
    disableDragAndDrop: true,
    width: selectionColumnWidth,
    minWidth: selectionColumnWidth,
    maxWidth: selectionColumnWidth,
    Header: Header3,
    Cell: Cell4
  }, ...currentColumns];
};
var getCellProps = (props, {
  cell
}) => {
  if (cell.column.id === "__ui5wcr__internal_selection_column") {
    const style = __spreadProps(__spreadValues({}, props.style), {
      cursor: "pointer",
      justifyContent: "center"
    });
    return [props, {
      style
    }];
  }
  return props;
};
var setToggleAllRowsSelectedProps = (props, {
  instance: {
    webComponentsReactProperties
  }
}) => {
  const {
    classes
  } = webComponentsReactProperties;
  return [props, {
    className: classes.checkBox,
    title: void 0
  }];
};
var setToggleRowSelectedProps = (props, {
  instance: {
    webComponentsReactProperties
  }
}) => {
  const {
    classes
  } = webComponentsReactProperties;
  return [props, {
    className: classes.checkBox,
    title: void 0
  }];
};
var useRowSelectionColumn = (hooks) => {
  hooks.getCellProps.push(getCellProps);
  hooks.getHeaderProps.push(headerProps2);
  hooks.getToggleRowSelectedProps.push(setToggleRowSelectedProps);
  hooks.getToggleAllRowsSelectedProps.push(setToggleAllRowsSelectedProps);
  hooks.columns.push(columns5);
  hooks.columnsDeps.push(columnDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps3);
  hooks.visibleColumns.push(visibleColumns3);
};
useRowSelectionColumn.pluginName = "useRowSelectionColumn";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useSelectionChangeCallback.js
var import_react22 = __toESM(require_react(), 1);
var useSelectionChangeCallback = (hooks) => {
  hooks.useControlledState.push((state, {
    instance
  }) => {
    const {
      selectedRowPayload,
      selectedRowIds,
      filters,
      globalFilter
    } = state;
    const {
      rowsById,
      preFilteredRowsById,
      webComponentsReactProperties,
      dispatch
    } = instance;
    const isFiltered = filters?.length > 0 || !!globalFilter;
    (0, import_react22.useEffect)(() => {
      if (selectedRowPayload?.fired) {
        const {
          event: e,
          row: selRow,
          selectAll
        } = selectedRowPayload;
        const row = rowsById[selRow?.id];
        if (row || selectAll) {
          const payload = {
            row,
            isSelected: row?.isSelected,
            selectedFlatRows: row?.isSelected ? [row] : [],
            allRowsSelected: false,
            selectedRowIds
          };
          if (webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.Multiple) {
            const tempRowsById = isFiltered ? preFilteredRowsById : rowsById;
            const selectedRowIdsArrayMapped = Object.keys(selectedRowIds).reduce((acc, key) => {
              if (selectedRowIds[key]) {
                acc.push(tempRowsById[key]);
              }
              return acc;
            }, []);
            payload.selectedFlatRows = selectedRowIdsArrayMapped;
            if (selectedRowIdsArrayMapped.length === Object.keys(tempRowsById).length) {
              payload.allRowsSelected = true;
            }
            if (selectAll) {
              dispatch({
                type: "SELECT_ROW_CB",
                payload: {
                  event: e,
                  row,
                  selectAll: false,
                  fired: false
                }
              });
              webComponentsReactProperties?.onRowSelect(enrichEventWithDetails(e, {
                selectedFlatRows: payload.selectedFlatRows,
                allRowsSelected: payload.allRowsSelected,
                selectedRowIds: payload.selectedRowIds
              }));
              return;
            }
          }
          dispatch({
            type: "SELECT_ROW_CB",
            payload: {
              event: e,
              row,
              fired: false
            }
          });
          webComponentsReactProperties?.onRowSelect(enrichEventWithDetails(e, payload));
        }
      }
    }, [selectedRowPayload?.fired, rowsById, webComponentsReactProperties.selectionMode, selectedRowIds, isFiltered]);
    return state;
  });
};
useSelectionChangeCallback.pluginName = "useSelectionChangeCallback";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useSingleRowStateSelection.js
var getRowProps = (rowProps, {
  row,
  instance
}) => {
  const {
    webComponentsReactProperties,
    toggleRowSelected,
    selectedFlatRows,
    dispatch
  } = instance;
  const handleRowSelect = (e) => {
    const isSelectionCell = e.target.dataset.selectionCell === "true";
    if (e.target?.dataset?.name !== "internal_selection_column" && !(e.markerAllowTableRowSelection === true || e.nativeEvent?.markerAllowTableRowSelection === true) && webComponentsReactProperties.tagNamesWhichShouldNotSelectARow.has(getTagNameWithoutScopingSuffix(e.target.tagName))) {
      return;
    }
    if (row.isGrouped) {
      return;
    }
    const {
      selectionBehavior,
      selectionMode,
      onRowSelect,
      onRowClick
    } = webComponentsReactProperties;
    if (typeof onRowClick === "function" && e.target?.dataset?.name !== "internal_selection_column") {
      onRowClick(enrichEventWithDetails(e, {
        row
      }));
    }
    if (selectionMode === AnalyticalTableSelectionMode.None) {
      return;
    }
    if (selectionBehavior === AnalyticalTableSelectionBehavior.RowSelector && !isSelectionCell) {
      return;
    }
    if (selectionMode === AnalyticalTableSelectionMode.Single) {
      for (const selectedRow of selectedFlatRows) {
        if (selectedRow.id !== row.id) {
          toggleRowSelected(selectedRow.id, false);
        }
      }
    }
    toggleRowSelected(row.id);
    if (typeof onRowSelect === "function") {
      dispatch({
        type: "SELECT_ROW_CB",
        payload: {
          event: e,
          row,
          fired: true
        }
      });
    }
  };
  const handleKeyDown = (e) => {
    if ((!e.target.hasAttribute("aria-expanded") || e.shiftKey && e.code === "Space") && e.code === "Enter") {
      if (!webComponentsReactProperties.tagNamesWhichShouldNotSelectARow.has(getTagNameWithoutScopingSuffix(e.target.tagName))) {
        e.preventDefault();
      }
      handleRowSelect(e);
    }
    if (e.code === "Space") {
      e.preventDefault();
    }
  };
  const handleKeyUp = (e) => {
    if (!e.target.hasAttribute("aria-expanded") && !e.shiftKey && e.code === "Space") {
      if (!webComponentsReactProperties.tagNamesWhichShouldNotSelectARow.has(getTagNameWithoutScopingSuffix(e.target.tagName))) {
        e.preventDefault();
      }
      handleRowSelect(e);
    }
  };
  return [rowProps, {
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleRowSelect
  }];
};
var useSingleRowStateSelection = (hooks) => {
  hooks.getRowProps.push(getRowProps);
};
useSingleRowStateSelection.pluginName = "useSingleRowStateSelection";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useStyling.js
var getHeaderGroupProps = (headerGroupProps, {
  instance
}) => {
  const {
    classes
  } = instance.webComponentsReactProperties;
  return [headerGroupProps, {
    className: classes.tableHeaderRow
  }];
};
var getHeaderProps2 = (columnProps, {
  instance,
  column
}) => {
  const hasPopover = column.canGroupBy || column.canSort || column.canFilter;
  const {
    classes
  } = instance.webComponentsReactProperties;
  const style = {
    width: column.totalWidth
  };
  if (column.id === "__ui5wcr__internal_highlight_column" || column.id === "__ui5wcr__internal_selection_column" || column.id === "__ui5wcr__internal_navigation_column") {
    style.padding = 0;
  }
  if (hasPopover) {
    style.cursor = "pointer";
  }
  return [columnProps, {
    className: classes.th,
    column,
    style,
    id: column.id
  }];
};
var ROW_SELECTION_ATTRIBUTE = "data-is-selected";
var getRowProps2 = (rowProps, {
  instance,
  row,
  userProps
}) => {
  const {
    webComponentsReactProperties
  } = instance;
  const {
    classes,
    selectionBehavior,
    selectionMode,
    alternateRowColor,
    subRowsKey
  } = webComponentsReactProperties;
  let className = classes.tr;
  const rowCanBeSelected = [AnalyticalTableSelectionMode.Single, AnalyticalTableSelectionMode.Multiple].includes(selectionMode);
  if (row.isGrouped || instance.manualGroupBy && row.cells.some((item) => item.column.isGrouped) && getSubRowsByString(subRowsKey, row.original) != null) {
    className += ` ${classes.tableGroupHeader}`;
  }
  if (alternateRowColor && userProps["aria-rowindex"] % 2 !== 1) {
    className += ` ${classes.alternateRowColor}`;
  }
  const newRowProps = {
    className,
    role: "row"
  };
  if (rowCanBeSelected) {
    if (AnalyticalTableSelectionBehavior.RowSelector !== selectionBehavior) {
      newRowProps.className += ` ${classes.trActive}`;
    }
    if (row.isSelected) {
      newRowProps[ROW_SELECTION_ATTRIBUTE] = "";
    }
  }
  return [rowProps, newRowProps];
};
var getCellProps2 = (cellProps, {
  cell: {
    column
  },
  instance
}) => {
  const {
    classes
  } = instance.webComponentsReactProperties;
  const style = __spreadValues({
    width: `${column.totalWidth}px`
  }, resolveCellAlignment(column));
  let className = classes.tableCell;
  if (column.className) {
    className += ` ${column.className}`;
  }
  if (column.id === "__ui5wcr__internal_highlight_column" || column.id === "__ui5wcr__internal_selection_column" || column.id === "__ui5wcr__internal_navigation_column") {
    style.padding = 0;
  }
  return [cellProps, {
    className,
    style,
    tabIndex: -1
  }];
};
var useStyling = (hooks) => {
  hooks.getHeaderGroupProps.push(getHeaderGroupProps);
  hooks.getHeaderProps.push(getHeaderProps2);
  hooks.getRowProps.push(getRowProps2);
  hooks.getCellProps.push(getCellProps2);
};
useStyling.pluginName = "useStyling";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useTableScrollHandles.js
var import_react23 = __toESM(require_react(), 1);
var useTableScrollHandles = (ref, dispatch) => {
  let analyticalTableRef = (0, import_react23.useRef)(null);
  if (ref) {
    analyticalTableRef = ref;
  }
  const scrollToRef = (0, import_react23.useRef)({});
  (0, import_react23.useEffect)(() => {
    if (analyticalTableRef.current) {
      Object.assign(analyticalTableRef.current, {
        scrollTo: (offset, align) => {
          if (typeof scrollToRef.current?.scrollToOffset === "function") {
            scrollToRef.current.scrollToOffset(offset, {
              align
            });
          } else {
            dispatch({
              type: "TRIGGER_PROG_SCROLL",
              payload: {
                direction: "vertical",
                type: "offset",
                args: [offset, {
                  align
                }]
              }
            });
          }
        },
        scrollToItem: (index, align) => {
          if (typeof scrollToRef.current?.scrollToIndex === "function") {
            scrollToRef.current.scrollToIndex(index, {
              align
            });
          } else {
            dispatch({
              type: "TRIGGER_PROG_SCROLL",
              payload: {
                direction: "vertical",
                type: "item",
                args: [index, {
                  align
                }]
              }
            });
          }
        },
        horizontalScrollTo: (offset, align) => {
          if (typeof scrollToRef.current?.horizontalScrollToOffset === "function") {
            scrollToRef.current.horizontalScrollToOffset(offset, {
              align
            });
          } else {
            dispatch({
              type: "TRIGGER_PROG_SCROLL",
              payload: {
                direction: "horizontal",
                type: "offset",
                args: [offset, {
                  align
                }]
              }
            });
          }
        },
        horizontalScrollToItem: (index, align) => {
          if (typeof scrollToRef.current?.horizontalScrollToIndex === "function") {
            scrollToRef.current.horizontalScrollToIndex(index, {
              align
            });
          } else {
            dispatch({
              type: "TRIGGER_PROG_SCROLL",
              payload: {
                direction: "horizontal",
                type: "item",
                args: [index, {
                  align
                }]
              }
            });
          }
        }
      });
    }
  }, []);
  return [analyticalTableRef, scrollToRef];
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useToggleRowExpand.js
var getToggleRowExpandedProps = (rowProps, {
  row,
  instance,
  userProps
}) => {
  const {
    manualGroupBy
  } = instance;
  const {
    onRowExpandChange,
    isTreeTable,
    renderRowSubComponent,
    alwaysShowSubComponent
  } = instance.webComponentsReactProperties;
  const onClick = (e, noPropagation = true) => {
    if (noPropagation) {
      e.stopPropagation();
    }
    let column = null;
    if (!isTreeTable && (!renderRowSubComponent || renderRowSubComponent && alwaysShowSubComponent)) {
      if (!manualGroupBy) {
        column = row.cells.find((cell) => cell.column.id === row.groupByID)?.column;
      } else {
        column = userProps.column;
      }
    }
    if (typeof onRowExpandChange === "function") {
      onRowExpandChange(enrichEventWithDetails(e, {
        row,
        column
      }));
    }
    row.toggleRowExpanded();
  };
  const onKeyDown = (e) => {
    if (e.code === "F4") {
      e.preventDefault();
      onClick(e, false);
    } else if (!e.shiftKey && e.code === "Space" || e.key === "Enter") {
      if (e.target.hasAttribute("ui5-icon") || e.target.hasAttribute("ui5-button")) {
        return;
      }
      e.preventDefault();
      onClick(e, false);
    }
  };
  const _a = rowProps, {
    title: _0
  } = _a, toggleRowPropsWithoutTitle = __objRest(_a, [
    "title"
  ]);
  return [toggleRowPropsWithoutTitle, {
    onClick,
    onKeyDown
  }];
};
var useToggleRowExpand = (hooks) => {
  hooks.getToggleRowExpandedProps.push(getToggleRowExpandedProps);
};
useToggleRowExpand.pluginName = "useToggleRowExpand";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/hooks/useVisibleColumnsWidth.js
var getVisibleColumnsWidth = (instance) => {
  const visibleColumnsWidth = instance.visibleColumns.map((item) => item.totalWidth);
  Object.assign(instance, {
    visibleColumnsWidth
  });
};
var useVisibleColumnsWidth = (hooks) => {
  hooks.useInstance.push(getVisibleColumnsWidth);
};
useVisibleColumnsWidth.pluginName = "useVisibleColumnsWidth";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/scrollbars/VerticalScrollbar.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/scrollbars/VerticalScrollbar.module.css.js
var styleData11 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "VerticalScrollbar.module.css",
  content: ".VerticalScrollbar_headerSection_1xpzy_1{background-color:var(--sapList_HeaderBackground);border-block-end:var(--_ui5wcr-AnalyticalTable-HeaderBorderWidth) solid var(--sapList_HeaderBorderColor);border-block-start:var(--_ui5wcr-AnalyticalTable-OuterBorderBlock);border-inline-end:var(--_ui5wcr-AnalyticalTable-OuterBorderInline);border-inline-start:1px solid var(--sapList_BorderColor);box-sizing:border-box;margin-inline-start:-1px;width:calc(var(--sapScrollBar_Dimension) + 2px)}.VerticalScrollbar_scrollbar_1xpzy_11{border-block-end:1px solid var(--sapList_TableFooterBorder);border-inline-end:var(--_ui5wcr-AnalyticalTable-OuterBorderInline);border-inline-start:1px solid var(--sapList_BorderColor);box-sizing:border-box;margin-inline-start:-1px;overflow-y:auto}.VerticalScrollbar_bottomSection_1xpzy_20{background-color:var(--sapList_FooterBackground);border-inline-end:var(--_ui5wcr-AnalyticalTable-OuterBorderInline);box-sizing:border-box;flex-grow:1}"
};
var classNames11 = {
  "headerSection": "VerticalScrollbar_headerSection_1xpzy_1",
  "scrollbar": "VerticalScrollbar_scrollbar_1xpzy_11",
  "bottomSection": "VerticalScrollbar_bottomSection_1xpzy_20"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/scrollbars/VerticalScrollbar.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var VerticalScrollbar = (0, import_react24.forwardRef)((props, ref) => {
  const {
    internalRowHeight,
    tableRef,
    handleVerticalScrollBarScroll,
    tableBodyHeight,
    scrollContainerRef,
    nativeScrollbar,
    parentRef
  } = props;
  const [componentRef, containerRef] = useSyncRef(ref);
  const scrollElementRef = (0, import_react24.useRef)(null);
  useStylesheet(styleData11, VerticalScrollbar.displayName);
  const hasHorizontalScrollbar = tableRef?.current?.offsetWidth !== tableRef?.current?.scrollWidth;
  (0, import_react24.useEffect)(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (containerRef.current && parentRef.current && entry.target.getBoundingClientRect().height > 0) {
        containerRef.current.scrollTop = parentRef.current.scrollTop;
      }
    });
    if (scrollElementRef.current) {
      observer.observe(scrollElementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  const horizontalScrollbarSectionStyles = clsx(hasHorizontalScrollbar && classNames11.bottomSection);
  return (0, import_jsx_runtime19.jsxs)(FlexBox, {
    direction: FlexBoxDirection.Column,
    style: {
      position: "relative"
    },
    "data-component-name": "AnalyticalTableVerticalScrollbarContainer",
    children: [(0, import_jsx_runtime19.jsx)("div", {
      style: {
        height: `${internalRowHeight}px`
      },
      className: classNames11.headerSection
    }), (0, import_jsx_runtime19.jsx)("div", {
      ref: componentRef,
      style: {
        height: tableRef.current ? `${tableBodyHeight}px` : "0"
      },
      onScroll: handleVerticalScrollBarScroll,
      className: clsx(classNames11.scrollbar, nativeScrollbar && "ui5-content-native-scrollbars"),
      "data-component-name": "AnalyticalTableVerticalScrollbar",
      children: (0, import_jsx_runtime19.jsx)("div", {
        ref: scrollElementRef,
        style: {
          height: `${scrollContainerRef.current?.scrollHeight}px`,
          width: "1px",
          backgroundColor: ThemingParameters.sapList_Background
        }
      })
    }), (0, import_jsx_runtime19.jsx)("div", {
      className: horizontalScrollbarSectionStyles
    })]
  });
});
VerticalScrollbar.displayName = "VerticalScrollbar";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/TableBody/VirtualTableBody.js
var import_react26 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/TableBody/EmptyRow.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var EmptyRow = ({
  virtualRow,
  className,
  children
}) => {
  return (0, import_jsx_runtime20.jsx)("div", {
    "data-empty-row": "true",
    className,
    style: {
      height: `${virtualRow.size}px`,
      transform: `translateY(${virtualRow.start}px)`,
      boxSizing: "border-box"
    },
    children
  }, `empty_row_${virtualRow.index}`);
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/TableBody/RowSubComponent.js
var import_react25 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/TableBody/RowSubComponent.module.css.js
var styleData12 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "RowSubComponent.module.css",
  content: ".RowSubComponent_subcomponent_1cs9q_1{position:absolute;width:100%}.RowSubComponent_subcomponent_1cs9q_1:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(var(--sapContent_FocusWidth)*-1)}"
};
var classNames12 = {
  "subcomponent": "RowSubComponent_subcomponent_1cs9q_1"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/TableBody/RowSubComponent.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var RowSubComponent = (props) => {
  const {
    subComponentsHeight,
    virtualRow,
    dispatch,
    row,
    rowHeight,
    children,
    rows,
    alwaysShowSubComponent,
    rowIndex
  } = props;
  const subComponentRef = (0, import_react25.useRef)(null);
  useStylesheet(styleData12, RowSubComponent.displayName);
  (0, import_react25.useEffect)(() => {
    const subComponentHeightObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target.getBoundingClientRect();
        if (target) {
          const borderBoxSize = Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0] : entry.borderBoxSize;
          const subCompHeight = borderBoxSize?.blockSize ?? target.height;
          if (subComponentsHeight?.[virtualRow.index]?.subComponentHeight !== subCompHeight && subCompHeight !== 0) {
            if (alwaysShowSubComponent && subComponentsHeight && Object.keys(subComponentsHeight).length === 10) {
              const objGroupedByHeight = Object.values(subComponentsHeight).reduce((acc, cur) => {
                const count = acc?.[cur.subComponentHeight];
                if (typeof count === "number") {
                  return __spreadProps(__spreadValues({}, acc), {
                    [cur.subComponentHeight]: count + 1
                  });
                }
                return __spreadProps(__spreadValues({}, acc), {
                  [cur.subComponentHeight]: 1
                });
              }, {});
              const mostUsedHeight = Object.keys(objGroupedByHeight).reduce((a, b) => objGroupedByHeight[a] > objGroupedByHeight[b] ? a : b);
              const estimatedHeights = rows.reduce((acc, cur, index) => {
                acc[index] = {
                  subComponentHeight: parseInt(mostUsedHeight),
                  rowId: cur.id
                };
                return acc;
              }, {});
              dispatch({
                type: "SUB_COMPONENTS_HEIGHT",
                payload: __spreadValues(__spreadValues({}, estimatedHeights), subComponentsHeight)
              });
            } else {
              dispatch({
                type: "SUB_COMPONENTS_HEIGHT",
                payload: __spreadProps(__spreadValues({}, subComponentsHeight), {
                  [virtualRow.index]: {
                    subComponentHeight: subCompHeight,
                    rowId: row.id
                  }
                })
              });
            }
          }
          if (subComponentsHeight?.[virtualRow.index]?.rowId != null && subComponentsHeight?.[virtualRow.index]?.rowId !== row.id) {
            dispatch({
              type: "SUB_COMPONENTS_HEIGHT",
              payload: __spreadProps(__spreadValues({}, subComponentsHeight), {
                [virtualRow.index]: {
                  subComponentHeight: subCompHeight,
                  rowId: row.id
                }
              })
            });
          }
        }
      });
    });
    if (subComponentRef.current?.firstChild) {
      subComponentHeightObserver.observe(subComponentRef.current?.firstChild);
    }
    return () => {
      subComponentHeightObserver.disconnect();
    };
  }, [subComponentRef.current?.firstChild, subComponentsHeight, row.id, subComponentsHeight?.[virtualRow.index]?.subComponentHeight, virtualRow.index]);
  return (0, import_jsx_runtime21.jsx)("div", {
    ref: subComponentRef,
    "data-subcomponent": true,
    "data-subcomponent-row-index": rowIndex,
    tabIndex: -1,
    style: {
      boxSizing: "border-box",
      transform: `translateY(${rowHeight}px)`
    },
    className: classNames12.subcomponent,
    children
  });
};
RowSubComponent.displayName = "RowSubComponent";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/TableBody/VirtualTableBody.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var VirtualTableBody = (props) => {
  const {
    alternateRowColor,
    classes,
    prepareRow,
    rows,
    scrollToRef,
    isTreeTable,
    internalRowHeight,
    visibleColumns: visibleColumns4,
    renderRowSubComponent,
    popInRowHeight,
    markNavigatedRow,
    isRtl,
    alwaysShowSubComponent,
    dispatch,
    subComponentsHeight,
    columnVirtualizer,
    manualGroupBy,
    subRowsKey,
    scrollContainerRef,
    subComponentsBehavior,
    triggerScroll,
    rowVirtualizer
  } = props;
  const rowHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;
  const lastNonEmptyRow = (0, import_react26.useRef)(null);
  scrollToRef.current = __spreadProps(__spreadValues({}, scrollToRef.current), {
    scrollToOffset: rowVirtualizer.scrollToOffset,
    scrollToIndex: rowVirtualizer.scrollToIndex
  });
  (0, import_react26.useEffect)(() => {
    if (triggerScroll && triggerScroll.direction === "vertical") {
      if (triggerScroll.type === "offset") {
        rowVirtualizer.scrollToOffset(...triggerScroll.args);
      } else {
        rowVirtualizer.scrollToIndex(...triggerScroll.args);
      }
    }
  }, [triggerScroll]);
  const popInColumn = (0, import_react26.useMemo)(() => visibleColumns4.filter((item) => item.id !== "__ui5wcr__internal_highlight_column" && item.id !== "__ui5wcr__internal_selection_column" && item.id !== "__ui5wcr__internal_navigation_column")[0], [visibleColumns4]);
  return (0, import_jsx_runtime22.jsx)("div", {
    ref: scrollContainerRef,
    "data-component-name": "AnalyticalTableBodyScrollableContainer",
    style: {
      position: "relative",
      height: `${rowVirtualizer.getTotalSize()}px`,
      width: `${columnVirtualizer.getTotalSize()}px`
    },
    children: rowVirtualizer.getVirtualItems().map((virtualRow, visibleRowIndex) => {
      const row = rows[virtualRow.index];
      const rowIndexWithHeader = virtualRow.index + 1;
      if (!row || row.groupByVal === "undefined") {
        const alternate = alternateRowColor && virtualRow.index % 2 !== 0;
        if (!lastNonEmptyRow.current?.cells) {
          return (0, import_jsx_runtime22.jsx)(EmptyRow, {
            virtualRow,
            className: clsx(classes.tr, alternate && classes.alternateRowColor)
          }, `empty_row_${virtualRow.index}`);
        }
        const cells = lastNonEmptyRow.current.cells;
        return (0, import_jsx_runtime22.jsx)(EmptyRow, {
          virtualRow,
          className: clsx(classes.tr, alternate && classes.alternateRowColor),
          children: columnVirtualizer.getVirtualItems().map((item) => {
            const cell = cells[item.index];
            const cellProps = cell.getCellProps();
            const _a2 = cellProps, {
              "aria-colindex": _0,
              "aria-selected": _1,
              "aria-label": _2,
              tabIndex: _3
            } = _a2, emptyRowCellProps = __objRest(_a2, [
              "aria-colindex",
              "aria-selected",
              "aria-label",
              "tabIndex"
            ]);
            return (0, import_react26.createElement)("div", __spreadProps(__spreadValues({}, emptyRowCellProps), {
              key: `${visibleRowIndex}-${emptyRowCellProps.key}`,
              "data-empty-row-cell": "true",
              tabIndex: -1,
              "aria-hidden": true,
              style: __spreadProps(__spreadValues({}, emptyRowCellProps.style), {
                cursor: "unset",
                width: item.size
              })
            }));
          })
        }, `empty_row_${virtualRow.index}`);
      } else {
        lastNonEmptyRow.current = row;
      }
      prepareRow(row);
      const _a = row.getRowProps({
        "aria-rowindex": virtualRow.index + 1,
        "data-virtual-row-index": virtualRow.index
      }), {
        key
      } = _a, rowProps = __objRest(_a, [
        "key"
      ]);
      const isNavigatedCell = typeof markNavigatedRow === "function" ? markNavigatedRow(row) : false;
      const RowSubComponent2 = typeof renderRowSubComponent === "function" ? renderRowSubComponent(row) : void 0;
      if ((!RowSubComponent2 || subComponentsBehavior === AnalyticalTableSubComponentsBehavior.IncludeHeightExpandable && !row.isExpanded) && subComponentsHeight && subComponentsHeight?.[virtualRow.index]?.subComponentHeight) {
        dispatch({
          type: "SUB_COMPONENTS_HEIGHT",
          payload: __spreadProps(__spreadValues({}, subComponentsHeight), {
            [virtualRow.index]: {
              subComponentHeight: 0,
              rowId: row.id
            }
          })
        });
      }
      let updatedHeight = rowHeight;
      if (renderRowSubComponent && (rows[virtualRow.index]?.isExpanded || alwaysShowSubComponent) && subComponentsHeight?.[virtualRow.index]?.rowId === rows[virtualRow.index]?.id) {
        updatedHeight += subComponentsHeight?.[virtualRow.index]?.subComponentHeight ?? 0;
      }
      const measureRef = isTreeTable && renderRowSubComponent && (row.isExpanded || alwaysShowSubComponent) ? (node) => {
        rowVirtualizer.measureElement(node);
      } : rowVirtualizer.measureElement;
      return (
        // eslint-disable-next-line react/jsx-key
        (0, import_jsx_runtime22.jsxs)("div", __spreadProps(__spreadValues({}, rowProps), {
          ref: measureRef,
          style: __spreadProps(__spreadValues({}, rowProps.style ?? {}), {
            transform: `translateY(${virtualRow.start}px)`,
            position: "absolute",
            boxSizing: "border-box",
            height: `${updatedHeight}px`
          }),
          children: [RowSubComponent2 && (row.isExpanded || alwaysShowSubComponent) && (0, import_jsx_runtime22.jsx)(RowSubComponent, {
            subComponentsHeight,
            virtualRow,
            dispatch,
            row,
            rowHeight,
            rows,
            alwaysShowSubComponent,
            rowIndex: visibleRowIndex + 1,
            children: RowSubComponent2
          }), columnVirtualizer.getVirtualItems().map((virtualColumn, visibleColumnIndex) => {
            const cell = row.cells[virtualColumn.index];
            const directionStyles = isRtl ? {
              transform: `translateX(-${virtualColumn.start}px)`,
              insertInlineStart: 0
            } : {
              transform: `translateX(${virtualColumn.start}px)`,
              insertInlineStart: 0
            };
            if (!cell) {
              return null;
            }
            const _a2 = cell.getCellProps(), {
              key: key2
            } = _a2, cellProps = __objRest(_a2, [
              "key"
            ]);
            const allCellProps = __spreadProps(__spreadValues({}, cellProps), {
              ["data-visible-column-index"]: visibleColumnIndex,
              ["data-column-index"]: virtualColumn.index,
              ["data-visible-row-index"]: visibleRowIndex + 1,
              ["data-row-index"]: rowIndexWithHeader,
              style: __spreadValues(__spreadProps(__spreadValues({}, cellProps.style), {
                position: "absolute",
                width: `${virtualColumn.size}px`,
                top: 0,
                height: `${rowHeight}px`
              }), directionStyles)
            });
            let contentToRender;
            if (cell.column.id === "__ui5wcr__internal_highlight_column" || cell.column.id === "__ui5wcr__internal_selection_column" || cell.column.id === "__ui5wcr__internal_navigation_column") {
              contentToRender = "Cell";
            } else if (isTreeTable || !alwaysShowSubComponent && RowSubComponent2) {
              contentToRender = "Expandable";
            } else if (cell.isGrouped || manualGroupBy && cell.column.isGrouped && getSubRowsByString(subRowsKey, row.original) != null && cell.value !== void 0) {
              contentToRender = "Grouped";
            } else if (cell.isAggregated) {
              contentToRender = "Aggregated";
            } else if (cell.isPlaceholder) {
              contentToRender = "RepeatedValue";
            } else {
              contentToRender = "Cell";
            }
            return (
              // eslint-disable-next-line react/jsx-key
              (0, import_jsx_runtime22.jsx)("div", __spreadProps(__spreadValues({}, allCellProps), {
                "data-selection-cell": cell.column.id === "__ui5wcr__internal_selection_column",
                children: popInRowHeight !== internalRowHeight && popInColumn.id === cell.column.id ? cell.render("PopIn", {
                  contentToRender,
                  internalRowHeight
                }) : cell.render(contentToRender, isNavigatedCell === true ? {
                  isNavigatedCell
                } : {})
              }), key2)
            );
          })]
        }), key)
      );
    })
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/TableBody/VirtualTableBodyContainer.js
var import_react27 = __toESM(require_react(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var VirtualTableBodyContainer = (props) => {
  const {
    tableBodyHeight,
    totalColumnsWidth,
    children,
    parentRef,
    classes,
    infiniteScroll,
    infiniteScrollThreshold,
    onLoadMore,
    rows,
    internalRowHeight,
    handleExternalScroll,
    visibleRows,
    popInRowHeight,
    rowCollapsedFlag,
    dispatch
  } = props;
  const [isMounted, setIsMounted] = (0, import_react27.useState)(false);
  (0, import_react27.useEffect)(() => {
    if (parentRef.current) {
      setIsMounted(true);
    }
  }, [parentRef.current]);
  const dataLength = rows.length;
  const lastScrollTop = (0, import_react27.useRef)(0);
  const firedInfiniteLoadEvents = (0, import_react27.useRef)(/* @__PURE__ */ new Set());
  const prevDataLength = (0, import_react27.useRef)(dataLength);
  (0, import_react27.useEffect)(() => {
    if (prevDataLength.current > dataLength) {
      if (rowCollapsedFlag) {
        dispatch({
          type: "ROW_COLLAPSED_FLAG",
          payload: false
        });
      } else {
        firedInfiniteLoadEvents.current.clear();
        parentRef.current.scrollTop = 0;
        lastScrollTop.current = 0;
      }
    }
    prevDataLength.current = dataLength;
  }, [dataLength, rowCollapsedFlag]);
  const onScroll = (0, import_react27.useCallback)((event) => {
    handleExternalScroll(enrichEventWithDetails(event, {
      rows,
      rowElements: event.target.children[0].children
    }));
    const scrollOffset = event.target.scrollTop;
    const isScrollingDown = lastScrollTop.current < scrollOffset;
    if (isScrollingDown && infiniteScroll) {
      lastScrollTop.current = scrollOffset;
      const currentLastRow = Math.floor(scrollOffset / popInRowHeight) + (popInRowHeight === internalRowHeight ? visibleRows : Math.floor(tableBodyHeight / popInRowHeight));
      if (rows.length - currentLastRow < infiniteScrollThreshold) {
        if (!firedInfiniteLoadEvents.current.has(rows.length)) {
          onLoadMore(event);
        }
        firedInfiniteLoadEvents.current.add(rows.length);
      }
    }
  }, [infiniteScroll, infiniteScrollThreshold, onLoadMore, rows, internalRowHeight, firedInfiniteLoadEvents, lastScrollTop, handleExternalScroll, popInRowHeight, tableBodyHeight]);
  return (0, import_jsx_runtime23.jsx)("div", {
    className: classes.tbody,
    ref: parentRef,
    onScroll,
    style: {
      position: "relative",
      overflowY: "auto",
      height: `${tableBodyHeight}px`,
      width: `${totalColumnsWidth}px`
    },
    "data-component-name": "AnalyticalTableBody",
    children: isMounted && children
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/tableReducer/stateReducer.js
var import_react_table3 = __toESM(require_react_table(), 1);
var stateReducer = (state, action, _prevState, instance) => {
  const {
    payload
  } = action;
  if (state.isRtl && action.type === import_react_table3.actions.columnResizing) {
    const {
      clientX
    } = action;
    const {
      startX,
      columnWidth,
      headerIdWidths
    } = state.columnResizing;
    const deltaX = startX - clientX;
    const percentageDeltaX = deltaX / columnWidth;
    const newColumnWidths = {};
    headerIdWidths.forEach(([headerId, headerWidth]) => {
      newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
    });
    return __spreadProps(__spreadValues({}, state), {
      columnResizing: __spreadProps(__spreadValues({}, state.columnResizing), {
        columnWidths: __spreadValues(__spreadValues({}, state.columnResizing.columnWidths), newColumnWidths)
      })
    });
  }
  switch (action.type) {
    case "toggleRowExpanded":
      if (!state.expanded[action.id]) {
        instance.dispatch({
          type: "ROW_COLLAPSED_FLAG",
          payload: true
        });
      }
      return state;
    case "TABLE_RESIZE":
      return __spreadProps(__spreadValues({}, state), {
        tableClientWidth: payload.tableClientWidth
      });
    case "VISIBLE_ROWS":
      return __spreadProps(__spreadValues({}, state), {
        visibleRows: payload.visibleRows
      });
    case "TABLE_SCROLLING_ENABLED":
      return __spreadProps(__spreadValues({}, state), {
        isScrollable: payload.isScrollable
      });
    case "SET_SELECTED_ROW_IDS":
      return __spreadProps(__spreadValues({}, state), {
        selectedRowIds: payload.selectedRowIds
      });
    case "SET_POPIN_COLUMNS":
      return __spreadProps(__spreadValues({}, state), {
        popInColumns: payload
      });
    case "INTERACTIVE_ROWS_HAVE_POPIN":
      return __spreadProps(__spreadValues({}, state), {
        interactiveRowsHavePopIn: payload
      });
    case "IS_RTL":
      return __spreadProps(__spreadValues({}, state), {
        isRtl: payload.isRtl
      });
    case "SUB_COMPONENTS_HEIGHT":
      return __spreadProps(__spreadValues({}, state), {
        subComponentsHeight: payload
      });
    case "TABLE_COL_RESIZED":
      return __spreadProps(__spreadValues({}, state), {
        tableColResized: payload
      });
    case "SELECT_ROW_CB":
      return __spreadProps(__spreadValues({}, state), {
        selectedRowPayload: payload
      });
    case "ROW_COLLAPSED_FLAG":
      return __spreadProps(__spreadValues({}, state), {
        rowCollapsed: payload
      });
    case "COLUMN_DND_START":
      return __spreadProps(__spreadValues({}, state), {
        dndColumn: payload
      });
    case "COLUMN_DND_END":
      return __spreadProps(__spreadValues({}, state), {
        dndColumn: ""
      });
    case "TRIGGER_PROG_SCROLL":
      return __spreadProps(__spreadValues({}, state), {
        triggerScroll: payload
      });
    case "AUTO_RESIZE":
      return __spreadProps(__spreadValues({}, state), {
        columnResizing: __spreadProps(__spreadValues({}, state.columnResizing), {
          columnWidths: __spreadValues(__spreadValues({}, state.columnResizing.columnWidths), payload)
        })
      });
    default:
      return state;
  }
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/TitleBar/index.js
var import_react28 = __toESM(require_react(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var styles = {
  minHeight: "1.5rem",
  display: "flex",
  alignItems: "center"
};
var TitleBar = (0, import_react28.forwardRef)((props, ref) => {
  const {
    children,
    titleBarId
  } = props;
  return (0, import_jsx_runtime24.jsxs)("div", {
    style: styles,
    ref,
    id: titleBarId,
    children: [typeof children === "string" && (0, import_jsx_runtime24.jsx)(Title, {
      children
    }), (0, import_react28.isValidElement)(children) && children]
  });
});
TitleBar.displayName = "TitleBar";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/VerticalResizer.js
var import_react29 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/VerticalResizer.module.css.js
var styleData13 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "VerticalResizer.module.css",
  content: '.VerticalResizer_container_dd6x7_1{box-sizing:border-box;cursor:row-resize;height:5px;overflow:hidden;position:relative;text-align:center}.VerticalResizer_container_dd6x7_1:hover{background-color:var(--sapContent_DragAndDropActiveColor);color:var(--sapHighlightTextColor)}.VerticalResizer_container_dd6x7_1:before{content:"⦁⦁⦁⦁";font-family:var(--sapFontFamily);font-size:10px;inset-block-start:0;line-height:5px;pointer-events:none;position:absolute}.VerticalResizer_resizer_dd6x7_25{background-color:var(--sapContent_DragAndDropActiveColor);height:5px;opacity:.5;position:absolute}'
};
var classNames13 = {
  "container": "VerticalResizer_container_dd6x7_1",
  "resizer": "VerticalResizer_resizer_dd6x7_25"
};

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/VerticalResizer.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var isTouchEvent = (e, touchEvent) => {
  if (e.type === touchEvent) {
    return !(e.touches && e.touches.length > 1);
  }
  return false;
};
var VerticalResizer = (props) => {
  const {
    analyticalTableRef,
    dispatch,
    extensionsHeight,
    internalRowHeight,
    hasPopInColumns,
    popInRowHeight,
    rowsLength,
    visibleRows,
    handleOnLoadMore
  } = props;
  useStylesheet(styleData13, VerticalResizer.displayName);
  const startY = (0, import_react29.useRef)(null);
  const verticalResizerRef = (0, import_react29.useRef)(null);
  const [resizerPosition, setResizerPosition] = (0, import_react29.useState)(void 0);
  const [isDragging, setIsDragging] = (0, import_react29.useState)(false);
  const [mountTouchEvents, setMountTouchEvents] = (0, import_react29.useState)(false);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const handleResizeStart = (0, import_react29.useCallback)((e) => {
    e.preventDefault();
    const touchEvent = isTouchEvent(e, "touchstart");
    startY.current = touchEvent ? Math.round(e.touches[0].pageY) : e.pageY;
    setMountTouchEvents(touchEvent);
    setIsDragging(true);
  }, [startY.current, setIsDragging]);
  const handleMove = (0, import_react29.useCallback)((e) => {
    setResizerPosition((prev) => __spreadProps(__spreadValues({}, prev), {
      top: isTouchEvent(e, "touchmove") ? Math.round(e.touches[0].pageY) : e.pageY
    }));
  }, [setResizerPosition]);
  const handleResizeEnd = (0, import_react29.useCallback)((e) => {
    setIsDragging(false);
    const rowCount = Math.floor((analyticalTableRef.current.clientHeight + (isTouchEvent(e, "touchend") ? Math.round(e.changedTouches[0].pageY) : e.pageY) - startY.current - extensionsHeight - 5) / popInRowHeight);
    if (hasPopInColumns) {
      dispatch({
        type: "INTERACTIVE_ROWS_HAVE_POPIN",
        payload: true
      });
    }
    dispatch({
      type: "VISIBLE_ROWS",
      payload: {
        visibleRows: rowCount
      }
    });
  }, [analyticalTableRef.current?.clientHeight, startY.current, extensionsHeight, internalRowHeight, dispatch]);
  (0, import_react29.useEffect)(() => {
    const removeEventListeners = () => {
      if (mountTouchEvents) {
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("touchend", handleResizeEnd);
      } else {
        document.removeEventListener("mouseup", handleResizeEnd);
        document.removeEventListener("mousemove", handleMove);
      }
    };
    if (isDragging) {
      if (mountTouchEvents) {
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("touchend", handleResizeEnd);
      } else {
        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", handleResizeEnd);
      }
    } else {
      removeEventListeners();
    }
    return () => {
      removeEventListeners();
    };
  }, [isDragging]);
  (0, import_react29.useEffect)(() => {
    const resizerPosTop = verticalResizerRef.current?.getBoundingClientRect()?.top + window.scrollY;
    const resizerPosLeft = verticalResizerRef.current?.getBoundingClientRect()?.left + window.scrollX;
    const resizerPosWidth = verticalResizerRef.current?.getBoundingClientRect()?.width;
    if (!isDragging && resizerPosTop > 0) {
      setResizerPosition({
        left: resizerPosLeft,
        top: resizerPosTop,
        width: resizerPosWidth
      });
    }
  }, [verticalResizerRef.current?.getBoundingClientRect()?.top, isDragging]);
  (0, import_react29.useEffect)(() => {
    return () => {
      dispatch({
        type: "WITH_POPIN",
        payload: false
      });
    };
  }, []);
  const isInitial = (0, import_react29.useRef)(true);
  (0, import_react29.useEffect)(() => {
    if (!isInitial.current && rowsLength <= visibleRows) {
      handleOnLoadMore({
        type: "tableGrow"
      });
    }
    isInitial.current = false;
  }, [rowsLength, visibleRows]);
  return (0, import_jsx_runtime25.jsx)("div", {
    className: classNames13.container,
    ref: verticalResizerRef,
    onMouseDown: handleResizeStart,
    onTouchStart: handleResizeStart,
    role: "separator",
    title: i18nBundle.getText(DRAG_TO_RESIZE),
    children: resizerPosition && isDragging && (0, import_jsx_runtime25.jsx)("div", {
      className: classNames13.resizer,
      style: {
        top: resizerPosition.top,
        left: resizerPosition.left,
        width: resizerPosition.width
      }
    })
  });
};
VerticalResizer.displayName = "VerticalResizer";

// node_modules/@ui5/webcomponents-react/dist/components/AnalyticalTable/index.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var sortTypesFallback = {
  undefined: () => void 0
};
var measureElement2 = (el) => {
  return el.offsetHeight;
};
addCustomCSSWithScoping("ui5-busy-indicator", `
:host([data-component-name="AnalyticalTableBusyIndicator"]) .ui5-busy-indicator-root {
  display: initial;
}
:host([data-component-name="AnalyticalTableBusyIndicator"]) .ui5-busy-indicator-busy-area:focus {
border-radius: 0;
}
`);
var AnalyticalTable = (0, import_react30.forwardRef)((props, ref) => {
  const _a = props, {
    alternateRowColor,
    adjustTableHeightOnPopIn,
    className,
    columnOrder,
    columns: columns6,
    data: rawData,
    extension,
    filterable,
    globalFilterValue,
    groupBy,
    groupable,
    header,
    headerRowHeight,
    highlightField = "status",
    infiniteScroll,
    infiniteScrollThreshold = 20,
    isTreeTable,
    loading,
    loadingDelay,
    markNavigatedRow,
    minRows = 5,
    noDataText,
    overscanCount,
    overscanCountHorizontal = 5,
    retainColumnWidth,
    reactTableOptions,
    renderRowSubComponent,
    rowHeight,
    scaleWidthMode = AnalyticalTableScaleWidthMode.Default,
    scaleXFactor,
    selectedRowIds,
    selectionBehavior = AnalyticalTableSelectionBehavior.Row,
    selectionMode = AnalyticalTableSelectionMode.None,
    showOverlay,
    sortable,
    style,
    subComponentsBehavior = AnalyticalTableSubComponentsBehavior.Expandable,
    subRowsKey = "subRows",
    tableHooks = [],
    tableInstance,
    visibleRowCountMode = AnalyticalTableVisibleRowCountMode.Fixed,
    visibleRows = 15,
    withNavigationHighlight,
    withRowHighlight,
    onColumnsReorder,
    onGroup,
    onLoadMore,
    onRowClick,
    onRowExpandChange,
    onRowSelect,
    onSort,
    onTableScroll,
    onAutoResize,
    NoDataComponent = DefaultNoDataComponent,
    additionalEmptyRowsCount = 0
  } = _a, rest = __objRest(_a, [
    "alternateRowColor",
    "adjustTableHeightOnPopIn",
    "className",
    "columnOrder",
    "columns",
    "data",
    "extension",
    "filterable",
    "globalFilterValue",
    "groupBy",
    "groupable",
    "header",
    "headerRowHeight",
    "highlightField",
    "infiniteScroll",
    "infiniteScrollThreshold",
    "isTreeTable",
    "loading",
    "loadingDelay",
    "markNavigatedRow",
    "minRows",
    "noDataText",
    "overscanCount",
    "overscanCountHorizontal",
    "retainColumnWidth",
    "reactTableOptions",
    "renderRowSubComponent",
    "rowHeight",
    "scaleWidthMode",
    "scaleXFactor",
    "selectedRowIds",
    "selectionBehavior",
    "selectionMode",
    "showOverlay",
    "sortable",
    "style",
    "subComponentsBehavior",
    "subRowsKey",
    "tableHooks",
    "tableInstance",
    "visibleRowCountMode",
    "visibleRows",
    "withNavigationHighlight",
    "withRowHighlight",
    "onColumnsReorder",
    "onGroup",
    "onLoadMore",
    "onRowClick",
    "onRowExpandChange",
    "onRowSelect",
    "onSort",
    "onTableScroll",
    "onAutoResize",
    "NoDataComponent",
    "additionalEmptyRowsCount"
  ]);
  useStylesheet(styleData4, AnalyticalTable.displayName);
  const alwaysShowSubComponent = subComponentsBehavior === AnalyticalTableSubComponentsBehavior.Visible || subComponentsBehavior === AnalyticalTableSubComponentsBehavior.IncludeHeight;
  const uniqueId = useIsomorphicId();
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const titleBarId = (0, import_react30.useRef)(`titlebar-${uniqueId}`).current;
  const invalidTableTextId = (0, import_react30.useRef)(`invalidTableText-${uniqueId}`).current;
  const tableRef = (0, import_react30.useRef)(null);
  const parentRef = (0, import_react30.useRef)(null);
  const verticalScrollBarRef = (0, import_react30.useRef)(null);
  const getSubRows = (0, import_react30.useCallback)((row) => getSubRowsByString(subRowsKey, row) || [], [subRowsKey]);
  const invalidTableA11yText = i18nBundle.getText(INVALID_TABLE);
  const tableInstanceRef = (0, import_react30.useRef)(null);
  const scrollContainerRef = (0, import_react30.useRef)(null);
  tableInstanceRef.current = (0, import_react_table4.useTable)(__spreadValues({
    columns: columns6,
    data: rawData,
    defaultColumn: DefaultColumn,
    getSubRows,
    stateReducer,
    disableFilters: !filterable,
    disableSortBy: !sortable,
    disableGroupBy: isTreeTable || !alwaysShowSubComponent && renderRowSubComponent ? true : !groupable,
    selectSubRows: false,
    sortTypes: sortTypesFallback,
    webComponentsReactProperties: {
      translatableTexts: {
        selectAllText: i18nBundle.getText(SELECT_ALL),
        deselectAllText: i18nBundle.getText(DESELECT_ALL),
        expandA11yText: i18nBundle.getText(EXPAND_PRESS_SPACE),
        collapseA11yText: i18nBundle.getText(COLLAPSE_PRESS_SPACE),
        selectA11yText: i18nBundle.getText(SELECT_PRESS_SPACE),
        unselectA11yText: i18nBundle.getText(UNSELECT_PRESS_SPACE),
        expandNodeA11yText: i18nBundle.getText(EXPAND_NODE),
        collapseNodeA11yText: i18nBundle.getText(COLLAPSE_NODE),
        filteredA11yText: i18nBundle.getText(FILTERED),
        groupedA11yText: i18nBundle.getText(GROUPED)
      },
      tagNamesWhichShouldNotSelectARow,
      tableRef,
      selectionMode,
      selectionBehavior,
      classes: classNames4,
      onAutoResize,
      onRowSelect,
      onRowClick,
      onRowExpandChange,
      isTreeTable,
      alternateRowColor,
      scaleWidthMode,
      loading,
      withRowHighlight,
      highlightField,
      withNavigationHighlight,
      markNavigatedRow,
      renderRowSubComponent,
      alwaysShowSubComponent,
      showOverlay,
      uniqueId,
      subRowsKey,
      onColumnsReorder
    }
  }, reactTableOptions), import_react_table4.useFilters, import_react_table4.useGlobalFilter, import_react_table4.useColumnOrder, import_react_table4.useGroupBy, import_react_table4.useSortBy, import_react_table4.useExpanded, import_react_table4.useRowSelect, import_react_table4.useResizeColumns, useResizeColumnsConfig, useRowSelectionColumn, useAutoResize, useSingleRowStateSelection, useSelectionChangeCallback, useRowHighlight, useRowNavigationIndicators, useDynamicColumnWidths, useStyling, useToggleRowExpand, useA11y, usePopIn, useVisibleColumnsWidth, useKeyboardNavigation, useColumnDragAndDrop, ...tableHooks);
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
    dispatch,
    totalColumnsWidth,
    visibleColumns: visibleColumns4,
    visibleColumnsWidth,
    setGroupBy,
    setGlobalFilter
  } = tableInstanceRef.current;
  const tableState = tableInstanceRef.current.state;
  const {
    triggerScroll
  } = tableState;
  const noDataTextI18n = i18nBundle.getText(LIST_NO_DATA);
  const noDataTextFiltered = i18nBundle.getText(NO_DATA_FILTERED);
  const noDataTextLocal = noDataText ?? (tableState.filters?.length > 0 || tableState.globalFilter ? noDataTextFiltered : noDataTextI18n);
  const [componentRef, updatedRef] = useSyncRef(ref);
  const isRtl = useIsRTL(updatedRef);
  const columnVirtualizer = useVirtualizer({
    count: visibleColumnsWidth.length,
    getScrollElement: () => tableRef.current,
    estimateSize: (0, import_react30.useCallback)((index) => visibleColumnsWidth[index], [visibleColumnsWidth]),
    horizontal: true,
    overscan: isRtl ? Infinity : overscanCountHorizontal,
    indexAttribute: "data-column-index",
    // necessary as otherwise values are rounded which leads to wrong total width calculation leading to unnecessary scrollbar
    measureElement: !scaleXFactor || scaleXFactor === 1 ? (el) => el.getBoundingClientRect().width : void 0
  });
  const [analyticalTableRef, scrollToRef] = useTableScrollHandles(updatedRef, dispatch);
  if (parentRef.current) {
    scrollToRef.current = __spreadProps(__spreadValues({}, scrollToRef.current), {
      horizontalScrollToOffset: columnVirtualizer.scrollToOffset,
      horizontalScrollToIndex: columnVirtualizer.scrollToIndex
    });
  }
  (0, import_react30.useEffect)(() => {
    if (triggerScroll && triggerScroll.direction === "horizontal") {
      if (triggerScroll.type === "offset") {
        columnVirtualizer.scrollToOffset(...triggerScroll.args);
      } else {
        columnVirtualizer.scrollToIndex(...triggerScroll.args);
      }
    }
  }, [triggerScroll]);
  const includeSubCompRowHeight = !!renderRowSubComponent && (subComponentsBehavior === AnalyticalTableSubComponentsBehavior.IncludeHeight || subComponentsBehavior === AnalyticalTableSubComponentsBehavior.IncludeHeightExpandable) && !!tableState.subComponentsHeight && !!Object.keys(tableState.subComponentsHeight);
  if (tableInstance && {}.hasOwnProperty.call(tableInstance, "current")) {
    tableInstance.current = tableInstanceRef.current;
  }
  if (typeof tableInstance === "function") {
    tableInstance(tableInstanceRef.current);
  }
  const titleBarRef = (0, import_react30.useRef)(null);
  const extensionRef = (0, import_react30.useRef)(null);
  const headerRef = (0, import_react30.useRef)(null);
  const extensionsHeight = (titleBarRef.current?.offsetHeight ?? 0) + (extensionRef.current?.offsetHeight ?? 0) + (headerRef.current?.offsetHeight ?? 0);
  const internalRowHeight = getRowHeight(rowHeight, tableRef);
  const internalHeaderRowHeight = headerRowHeight ?? internalRowHeight;
  const popInRowHeight = tableState?.popInColumns?.length > 0 ? internalRowHeight + tableState.popInColumns.length * (internalRowHeight + 16) : internalRowHeight;
  const internalVisibleRowCount = tableState.visibleRows ?? visibleRows;
  const updateTableClientWidth = (0, import_react30.useCallback)(() => {
    if (tableRef.current) {
      dispatch({
        type: "TABLE_RESIZE",
        payload: {
          tableClientWidth: !scaleXFactor || scaleXFactor === 1 ? tableRef.current.getBoundingClientRect().width : tableRef.current.clientWidth
        }
      });
    }
  }, [tableRef.current, scaleXFactor]);
  const updateRowsCount = (0, import_react30.useCallback)(() => {
    if ((visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Auto || visibleRowCountMode === AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows) && analyticalTableRef.current?.parentElement) {
      const parentElement = analyticalTableRef.current?.parentElement;
      const tableYPosition = parentElement && getComputedStyle(parentElement).position === "relative" && analyticalTableRef.current?.offsetTop ? analyticalTableRef.current?.offsetTop : 0;
      const parentHeight = parentElement?.getBoundingClientRect().height;
      const tableHeight = parentHeight ? parentHeight - tableYPosition : 0;
      const bodyHeight = tableHeight - extensionsHeight;
      let subCompsRowCount = 0;
      if (includeSubCompRowHeight) {
        let localBodyHeight = 0;
        let i = 0;
        while (localBodyHeight < bodyHeight) {
          if (tableState.subComponentsHeight[i]) {
            localBodyHeight += tableState.subComponentsHeight[i].subComponentHeight + popInRowHeight;
          } else if (rows[i]) {
            localBodyHeight += popInRowHeight;
          } else {
            break;
          }
          if (localBodyHeight >= bodyHeight) {
            break;
          }
          subCompsRowCount++;
          i++;
        }
        dispatch({
          type: "VISIBLE_ROWS",
          payload: {
            visibleRows: Math.max(1, subCompsRowCount)
          }
        });
      } else {
        const rowCount = Math.max(1, Math.floor(bodyHeight / popInRowHeight));
        dispatch({
          type: "VISIBLE_ROWS",
          payload: {
            visibleRows: rowCount
          }
        });
      }
    }
  }, [analyticalTableRef.current?.parentElement?.getBoundingClientRect().height, analyticalTableRef.current?.getBoundingClientRect().y, extensionsHeight, popInRowHeight, visibleRowCountMode, includeSubCompRowHeight, tableState.subComponentsHeight]);
  (0, import_react30.useEffect)(() => {
    setGlobalFilter(globalFilterValue);
  }, [globalFilterValue, setGlobalFilter]);
  (0, import_react30.useEffect)(() => {
    const debouncedWidthObserverFn = debounce(updateTableClientWidth, 60);
    const tableWidthObserver = new ResizeObserver(debouncedWidthObserverFn);
    tableWidthObserver.observe(tableRef.current);
    const debouncedHeightObserverFn = debounce(updateRowsCount, 60);
    const parentHeightObserver = new ResizeObserver(debouncedHeightObserverFn);
    if (analyticalTableRef.current?.parentElement) {
      parentHeightObserver.observe(analyticalTableRef.current?.parentElement);
    }
    return () => {
      debouncedHeightObserverFn.cancel();
      debouncedWidthObserverFn.cancel();
      tableWidthObserver.disconnect();
      parentHeightObserver.disconnect();
    };
  }, [updateTableClientWidth, updateRowsCount]);
  useIsomorphicLayoutEffect(() => {
    dispatch({
      type: "IS_RTL",
      payload: {
        isRtl
      }
    });
  }, [isRtl]);
  useIsomorphicLayoutEffect(() => {
    updateTableClientWidth();
  }, [updateTableClientWidth]);
  useIsomorphicLayoutEffect(() => {
    updateRowsCount();
  }, [updateRowsCount]);
  (0, import_react30.useEffect)(() => {
    if (tableState.visibleRows !== void 0 && visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Fixed) {
      dispatch({
        type: "VISIBLE_ROWS",
        payload: {
          visibleRows: void 0
        }
      });
    }
  }, [visibleRowCountMode, tableState.visibleRows]);
  (0, import_react30.useEffect)(() => {
    if (groupBy) {
      setGroupBy(groupBy);
    }
  }, [groupBy, setGroupBy]);
  (0, import_react30.useEffect)(() => {
    if (selectedRowIds) {
      dispatch({
        type: "SET_SELECTED_ROW_IDS",
        payload: {
          selectedRowIds
        }
      });
    }
  }, [selectedRowIds]);
  (0, import_react30.useEffect)(() => {
    if (tableState?.interactiveRowsHavePopIn && (!tableState?.popInColumns || tableState?.popInColumns?.length === 0)) {
      dispatch({
        type: "WITH_POPIN",
        payload: false
      });
    }
  }, [tableState?.interactiveRowsHavePopIn, tableState?.popInColumns?.length]);
  const tableBodyHeight = (0, import_react30.useMemo)(() => {
    if (typeof tableState.bodyHeight === "number") {
      return tableState.bodyHeight;
    }
    let rowNum;
    if (visibleRowCountMode === AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows) {
      rowNum = internalVisibleRowCount;
    } else {
      rowNum = rows.length < internalVisibleRowCount ? Math.max(rows.length, minRows) : internalVisibleRowCount;
    }
    const rowHeight2 = visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Auto || visibleRowCountMode === AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows || tableState.interactiveRowsHavePopIn || adjustTableHeightOnPopIn ? popInRowHeight : internalRowHeight;
    if (includeSubCompRowHeight) {
      let initialBodyHeightWithSubComps = 0;
      for (let i = 0; i < rowNum; i++) {
        if (tableState.subComponentsHeight[i]) {
          initialBodyHeightWithSubComps += tableState.subComponentsHeight[i].subComponentHeight + rowHeight2;
        } else if (rows[i]) {
          initialBodyHeightWithSubComps += rowHeight2;
        }
      }
      return initialBodyHeightWithSubComps;
    }
    return rowHeight2 * rowNum;
  }, [internalRowHeight, rows.length, internalVisibleRowCount, minRows, popInRowHeight, visibleRowCountMode, tableState.interactiveRowsHavePopIn, adjustTableHeightOnPopIn, includeSubCompRowHeight, tableState.subComponentsHeight, tableState.bodyHeight]);
  (0, import_react30.useEffect)(() => {
    const visibleRowCount = rows.length < internalVisibleRowCount ? Math.max(rows.length, minRows) : internalVisibleRowCount;
    if (popInRowHeight !== internalRowHeight) {
      dispatch({
        type: "TABLE_SCROLLING_ENABLED",
        payload: {
          isScrollable: visibleRowCount * popInRowHeight > tableBodyHeight || rows.length > visibleRowCount
        }
      });
    } else {
      dispatch({
        type: "TABLE_SCROLLING_ENABLED",
        payload: {
          isScrollable: rows.length > visibleRowCount
        }
      });
    }
  }, [rows.length, minRows, internalVisibleRowCount, popInRowHeight, tableBodyHeight]);
  const noDataStyles = {
    height: `${tableBodyHeight}px`,
    width: totalColumnsWidth ? `${totalColumnsWidth}px` : "100%"
  };
  const onGroupByChanged = (0, import_react30.useCallback)((e) => {
    const {
      column,
      isGrouped
    } = e.detail;
    let groupedColumns;
    if (isGrouped) {
      groupedColumns = [...tableState.groupBy, column.id];
    } else {
      groupedColumns = tableState.groupBy.filter((group) => group !== column.id);
    }
    setGroupBy(groupedColumns);
    if (typeof onGroup === "function") {
      onGroup(enrichEventWithDetails(e, {
        column,
        groupedColumns
      }));
    }
  }, [tableState.groupBy, onGroup, setGroupBy]);
  (0, import_react30.useEffect)(() => {
    if (columnOrder?.length > 0) {
      setColumnOrder(columnOrder);
    }
  }, [columnOrder]);
  const inlineStyle = (0, import_react30.useMemo)(() => {
    const tableStyles = {
      maxWidth: "100%",
      overflowX: "auto",
      display: "flex",
      flexDirection: "column"
    };
    if (!!rowHeight) {
      tableStyles["--_ui5wcr-AnalyticalTableRowHeight"] = `${rowHeight}px`;
      tableStyles["--_ui5wcr-AnalyticalTableHeaderRowHeight"] = `${rowHeight}px`;
    }
    if (!!headerRowHeight) {
      tableStyles["--_ui5wcr-AnalyticalTableHeaderRowHeight"] = `${headerRowHeight}px`;
    }
    if (tableState.tableClientWidth > 0) {
      return __spreadValues(__spreadValues({}, tableStyles), style);
    }
    return __spreadProps(__spreadValues(__spreadValues({}, tableStyles), style), {
      visibility: "hidden"
    });
  }, [tableState.tableClientWidth, style, rowHeight, headerRowHeight]);
  (0, import_react30.useEffect)(() => {
    if (retainColumnWidth && tableState.columnResizing?.isResizingColumn && tableState.tableColResized == null) {
      dispatch({
        type: "TABLE_COL_RESIZED",
        payload: true
      });
    }
    if (tableState.tableColResized && !retainColumnWidth) {
      dispatch({
        type: "TABLE_COL_RESIZED",
        payload: void 0
      });
    }
  }, [tableState.columnResizing, retainColumnWidth, tableState.tableColResized]);
  const handleBodyScroll = (e) => {
    if (typeof onTableScroll === "function") {
      onTableScroll(e);
    }
    const targetScrollTop = e.currentTarget.scrollTop;
    if (verticalScrollBarRef.current) {
      const vertScrollbarScrollElement = verticalScrollBarRef.current.firstElementChild;
      if (vertScrollbarScrollElement.offsetHeight !== scrollContainerRef.current?.offsetHeight) {
        vertScrollbarScrollElement.style.height = `${scrollContainerRef.current.offsetHeight}px`;
      }
      if (verticalScrollBarRef.current.scrollTop !== targetScrollTop) {
        if (!e.currentTarget.isExternalVerticalScroll) {
          verticalScrollBarRef.current.scrollTop = targetScrollTop;
          verticalScrollBarRef.current.isExternalVerticalScroll = true;
        }
        e.currentTarget.isExternalVerticalScroll = false;
      }
    }
  };
  const handleVerticalScrollBarScroll = (0, import_react30.useCallback)((e) => {
    if (parentRef.current && !e.currentTarget.isExternalVerticalScroll) {
      parentRef.current.scrollTop = e.currentTarget.scrollTop;
      parentRef.current.isExternalVerticalScroll = true;
    }
    e.currentTarget.isExternalVerticalScroll = false;
  }, []);
  (0, import_react30.useEffect)(() => {
    columnVirtualizer.measure();
  }, [columnVirtualizer, tableState.columnOrder, tableState.columnResizing?.isResizingColumn, columns6]);
  const totalSize = columnVirtualizer.getTotalSize();
  const showVerticalEndBorder = tableState.tableClientWidth > totalSize;
  const tableClasses = clsx(classNames4.table, withNavigationHighlight && classNames4.hasNavigationIndicator, showVerticalEndBorder && classNames4.showVerticalEndBorder, className?.includes("ui5-content-native-scrollbars") && "ui5-content-native-scrollbars");
  const handleOnLoadMore = (e) => {
    const rootNodes = rows.filter((row) => row.depth === 0);
    onLoadMore(enrichEventWithDetails(e, {
      rowCount: rootNodes.length,
      totalRowCount: rows.length
    }));
  };
  const overscan = overscanCount ? overscanCount : Math.floor(visibleRows / 2);
  const rHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;
  const itemCount = Math.max(minRows, rows.length, visibleRowCountMode === AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows ? internalVisibleRowCount : 0) + (!tableState.isScrollable ? additionalEmptyRowsCount : 0);
  const rowVirtualizer = useVirtualizer({
    count: itemCount,
    getScrollElement: () => parentRef.current,
    estimateSize: (0, import_react30.useCallback)((index) => {
      if (renderRowSubComponent && (rows[index]?.isExpanded || alwaysShowSubComponent) && tableState.subComponentsHeight?.[index]?.rowId === rows[index]?.id) {
        return rHeight + (tableState.subComponentsHeight?.[index]?.subComponentHeight ?? 0);
      }
      return rHeight;
    }, [rHeight, rows, renderRowSubComponent, alwaysShowSubComponent, tableState.subComponentsHeight]),
    overscan,
    measureElement: measureElement2,
    indexAttribute: "data-virtual-row-index"
  });
  tableInstanceRef.current.virtualRowsRange = rowVirtualizer.range;
  return (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, {
    children: [(0, import_jsx_runtime26.jsxs)("div", __spreadProps(__spreadValues({
      className,
      style: inlineStyle,
      ref: componentRef
    }, rest), {
      children: [header && (0, import_jsx_runtime26.jsx)(TitleBar, {
        ref: titleBarRef,
        titleBarId,
        children: header
      }), extension && (0, import_jsx_runtime26.jsx)("div", {
        ref: extensionRef,
        children: extension
      }), (0, import_jsx_runtime26.jsxs)(BusyIndicator, {
        active: loading,
        delay: loadingDelay,
        "data-component-name": "AnalyticalTableBusyIndicator",
        children: [(0, import_jsx_runtime26.jsxs)(FlexBox, {
          className: classNames4.tableContainerWithScrollBar,
          "data-component-name": "AnalyticalTableContainerWithScrollbar",
          children: [showOverlay && (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, {
            children: [(0, import_jsx_runtime26.jsx)("span", {
              id: invalidTableTextId,
              className: classNames4.hiddenA11yText,
              "aria-hidden": true,
              children: invalidTableA11yText
            }), (0, import_jsx_runtime26.jsx)("div", {
              tabIndex: 0,
              "aria-labelledby": `${titleBarId} ${invalidTableTextId}`,
              role: "region",
              "data-component-name": "AnalyticalTableOverlay",
              className: classNames4.overlay
            })]
          }), (0, import_jsx_runtime26.jsxs)("div", __spreadProps(__spreadValues({
            "aria-labelledby": titleBarId
          }, getTableProps()), {
            tabIndex: showOverlay ? -1 : 0,
            role: "grid",
            "aria-rowcount": rows.length,
            "aria-colcount": visibleColumns4.length,
            "data-per-page": internalVisibleRowCount,
            "data-component-name": "AnalyticalTableContainer",
            ref: tableRef,
            className: tableClasses,
            children: [(0, import_jsx_runtime26.jsx)("div", {
              className: classNames4.tableHeaderBackgroundElement
            }), (0, import_jsx_runtime26.jsx)("div", {
              className: classNames4.tableBodyBackgroundElement
            }), headerGroups.map((headerGroup) => {
              let headerProps3 = {};
              if (headerGroup.getHeaderGroupProps) {
                headerProps3 = headerGroup.getHeaderGroupProps();
              }
              return tableRef.current && (0, import_jsx_runtime26.jsx)(ColumnHeaderContainer, {
                ref: headerRef,
                resizeInfo: tableState.columnResizing,
                headerProps: headerProps3,
                headerGroup,
                onSort,
                onGroupByChanged,
                isRtl,
                columnVirtualizer,
                uniqueId,
                showVerticalEndBorder
              }, headerProps3.key);
            }), loading && rows?.length === 0 && (0, import_jsx_runtime26.jsx)(TablePlaceholder, {
              columns: visibleColumns4,
              rows: minRows,
              style: noDataStyles
            }), !loading && rows?.length === 0 && (0, import_jsx_runtime26.jsx)(NoDataComponent, {
              noDataText: noDataTextLocal,
              className: classNames4.noDataContainer,
              style: noDataStyles
            }), rows?.length > 0 && tableRef.current && (0, import_jsx_runtime26.jsx)(VirtualTableBodyContainer, {
              rowCollapsedFlag: tableState.rowCollapsed,
              dispatch,
              tableBodyHeight,
              totalColumnsWidth: columnVirtualizer.getTotalSize(),
              parentRef,
              classes: classNames4,
              infiniteScroll,
              infiniteScrollThreshold,
              onLoadMore: handleOnLoadMore,
              internalRowHeight,
              popInRowHeight,
              rows,
              handleExternalScroll: handleBodyScroll,
              visibleRows: internalVisibleRowCount,
              children: (0, import_jsx_runtime26.jsx)(VirtualTableBody, {
                scrollContainerRef,
                classes: classNames4,
                prepareRow,
                rows,
                scrollToRef,
                isTreeTable,
                internalRowHeight,
                popInRowHeight,
                alternateRowColor,
                visibleColumns: visibleColumns4,
                renderRowSubComponent,
                alwaysShowSubComponent,
                markNavigatedRow,
                isRtl,
                subComponentsHeight: tableState.subComponentsHeight,
                dispatch,
                columnVirtualizer,
                manualGroupBy: reactTableOptions?.manualGroupBy,
                subRowsKey,
                subComponentsBehavior,
                triggerScroll: tableState.triggerScroll,
                rowVirtualizer
              })
            })]
          })), (additionalEmptyRowsCount || tableState.isScrollable === void 0 || tableState.isScrollable) && (0, import_jsx_runtime26.jsx)(VerticalScrollbar, {
            tableBodyHeight,
            internalRowHeight: internalHeaderRowHeight,
            tableRef,
            handleVerticalScrollBarScroll,
            ref: verticalScrollBarRef,
            scrollContainerRef,
            parentRef,
            nativeScrollbar: className?.includes("ui5-content-native-scrollbars")
          })]
        }), visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Interactive && (0, import_jsx_runtime26.jsx)(VerticalResizer, {
          popInRowHeight,
          hasPopInColumns: tableState?.popInColumns?.length > 0,
          analyticalTableRef,
          dispatch,
          extensionsHeight,
          internalRowHeight,
          rowsLength: rows.length,
          visibleRows: internalVisibleRowCount,
          handleOnLoadMore
        })]
      })]
    })), (0, import_jsx_runtime26.jsx)(Text, {
      "aria-hidden": "true",
      id: `scaleModeHelper-${uniqueId}`,
      className: classNames4.hiddenSmartColMeasure,
      "data-component-name": "AnalyticalTableScaleModeHelper",
      children: ""
    }), (0, import_jsx_runtime26.jsx)(Text, {
      "aria-hidden": "true",
      id: `scaleModeHelperHeader-${uniqueId}`,
      className: clsx(classNames4.hiddenSmartColMeasure, classNames4.hiddenSmartColMeasureHeader),
      "data-component-name": "AnalyticalTableScaleModeHelperHeader",
      children: ""
    })]
  });
});
AnalyticalTable.displayName = "AnalyticalTable";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageHeader/index.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageHeader/ObjectPageHeader.module.css.js
var styleData14 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ObjectPageHeader.module.css",
  content: ".ObjectPageHeader_header_19ofl_1{background-color:var(--sapObjectHeader_Background);display:var(--_ui5wcr_ObjectPage_header_display);overflow:hidden;padding-block-end:1rem;padding-block-start:1rem;position:sticky;z-index:1}"
};
var classNames14 = {
  "header": "ObjectPageHeader_header_19ofl_1"
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageHeader/index.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var ObjectPageHeader = (0, import_react31.forwardRef)((props, ref) => {
  const _a = props, {
    children,
    headerPinned,
    topHeaderHeight,
    className,
    style
  } = _a, rest = __objRest(_a, [
    "children",
    "headerPinned",
    "topHeaderHeight",
    "className",
    "style"
  ]);
  const headerStyles = (0, import_react31.useMemo)(() => {
    if (headerPinned) {
      return __spreadProps(__spreadValues({}, style), {
        top: `${topHeaderHeight}px`,
        zIndex: 1
      });
    }
    return style;
  }, [headerPinned, topHeaderHeight, style]);
  useStylesheet(styleData14, ObjectPageHeader.displayName);
  return (0, import_jsx_runtime27.jsx)("div", __spreadProps(__spreadValues({
    ref
  }, rest), {
    className: clsx(classNames14.header, className),
    "data-component-name": "ObjectPageHeader",
    style: headerStyles,
    children
  }));
});
ObjectPageHeader.displayName = "ObjectPageHeader";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageTitle/index.js
var import_react37 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/Toolbar/index.js
var import_react35 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/Toolbar/OverflowPopover.js
var import_react34 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);

// node_modules/@ui5/webcomponents-react/dist/internal/OverflowPopoverContext.js
var import_react32 = __toESM(require_react(), 1);
var SYMBOL = Symbol.for("@ui5/webcomponents-react/OverflowPopoverContext");
var OverflowPopoverContext = (0, import_react32.createContext)({
  inPopover: false
});
function getOverflowPopoverContext() {
  globalThis[SYMBOL] ??= OverflowPopoverContext;
  return globalThis[SYMBOL];
}

// node_modules/@ui5/webcomponents-react/dist/internal/ssr.js
var import_react33 = __toESM(require_react());
function useCanRenderPortal() {
  const [allowed, setAllowed] = (0, import_react33.useState)(false);
  (0, import_react33.useEffect)(() => {
    setAllowed(true);
  }, []);
  return allowed;
}

// node_modules/@ui5/webcomponents-react/dist/components/Toolbar/OverflowPopover.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var isPhone2 = Device_exports.isPhone();
var OverflowPopover = (props) => {
  const {
    lastVisibleIndex,
    classes,
    children,
    portalContainer,
    overflowContentRef,
    numberOfAlwaysVisibleItems,
    showMoreText,
    overflowButton,
    overflowPopoverRef,
    setIsMounted,
    a11yConfig
  } = props;
  const [pressed, setPressed] = (0, import_react34.useState)(false);
  const toggleBtnRef = (0, import_react34.useRef)(null);
  const [componentRef, popoverRef] = useSyncRef(overflowPopoverRef);
  (0, import_react34.useEffect)(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);
  const handleToggleButtonClick = (e) => {
    e.stopPropagation();
    setPressed((prev) => {
      if (!prev) {
        if (popoverRef.current) {
          popoverRef.current.opener = e.target;
        }
        return true;
      }
      return false;
    });
  };
  const handleBeforeOpen = () => {
    if (toggleBtnRef.current) {
      toggleBtnRef.current.accessibilityAttributes = {
        expanded: true,
        hasPopup: "menu"
      };
    }
  };
  const handleAfterOpen = () => {
    setPressed(true);
  };
  const handleClose = (e) => {
    if (toggleBtnRef.current) {
      toggleBtnRef.current.accessibilityAttributes = {
        expanded: false,
        hasPopup: "menu"
      };
    }
    stopPropagation(e);
    setPressed(false);
  };
  (0, import_react34.useEffect)(() => {
    const tagName = getUi5TagWithSuffix("ui5-toggle-button");
    void customElements.whenDefined(tagName).then(() => {
      if (toggleBtnRef.current) {
        toggleBtnRef.current.accessibilityAttributes = {
          expanded: pressed,
          hasPopup: "menu"
        };
      }
    });
  }, []);
  const clonedOverflowButtonClick = (e) => {
    if (typeof overflowButton?.props?.onClick === "function") {
      overflowButton.props.onClick(e);
    }
    if (!e.defaultPrevented) {
      handleToggleButtonClick(e);
    }
  };
  const canRenderPortal = useCanRenderPortal();
  const accessibleRole = (() => {
    if (a11yConfig?.overflowPopover?.contentRole) {
      return PopupAccessibleRole_default.None;
    }
    return a11yConfig?.overflowPopover?.role;
  })();
  const OverflowPopoverContextProvider = getOverflowPopoverContext().Provider;
  return (0, import_jsx_runtime28.jsxs)(OverflowPopoverContextProvider, {
    value: {
      inPopover: true
    },
    children: [overflowButton ? (0, import_react34.cloneElement)(overflowButton, {
      onClick: clonedOverflowButtonClick
    }) : (0, import_jsx_runtime28.jsx)(ToggleButton, {
      ref: toggleBtnRef,
      design: ButtonDesign_default.Transparent,
      icon: overflow_default,
      onClick: handleToggleButtonClick,
      pressed,
      accessibleName: showMoreText,
      tooltip: showMoreText,
      "data-component-name": "ToolbarOverflowButton"
    }), canRenderPortal && (0, import_react_dom2.createPortal)((0, import_jsx_runtime28.jsx)(Popover, {
      "data-component-name": "ToolbarOverflowPopover",
      className: clsx(classes.popover, isPhone2 && classes.popoverPhone),
      placement: PopoverPlacement_default.Bottom,
      ref: componentRef,
      open: pressed,
      onClose: handleClose,
      onBeforeOpen: handleBeforeOpen,
      onOpen: handleAfterOpen,
      hideArrow: true,
      accessibleRole,
      children: (0, import_jsx_runtime28.jsx)("div", {
        className: classes.popoverContent,
        ref: overflowContentRef,
        role: a11yConfig?.overflowPopover?.contentRole,
        "data-component-name": "ToolbarOverflowPopoverContent",
        children: children.map((item, index) => {
          if (index > lastVisibleIndex && index > numberOfAlwaysVisibleItems - 1) {
            if (item?.props?.id) {
              return (0, import_react34.cloneElement)(item, {
                id: `${item.props.id}-overflow`
              });
            }
            if (item.type?.displayName === "ToolbarSeparator") {
              return (0, import_react34.cloneElement)(item, {
                style: {
                  height: "0.0625rem",
                  margin: "0.375rem 0.1875rem",
                  width: "100%"
                }
              });
            }
            return item;
          }
          return null;
        })
      })
    }), portalContainer ?? document.body)]
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/Toolbar/Toolbar.module.css.js
var styleData15 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "Toolbar.module.css",
  content: ".Toolbar_outerContainer_1dqv0_1{align-items:center;border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);box-sizing:border-box;display:flex;height:var(--_ui5wcr-ToolbarHeight);justify-content:space-between;max-width:100%;overflow:hidden;position:relative;width:100%}.Toolbar_hasOverflow_1dqv0_14 .Toolbar_toolbar_1dqv0_15{max-width:calc(100% - 44px)}.Toolbar_clear_1dqv0_20{border-block-end:none}.Toolbar_active_1dqv0_24{cursor:pointer}.Toolbar_active_1dqv0_24:hover{background-color:var(--sapList_Hover_Background)}.Toolbar_active_1dqv0_24:focus{box-shadow:var(--_ui5wcr_Toolbar_FocusShadow);outline:var(--_ui5wcr_Toolbar_FocusOutline);outline-offset:-.1875rem}.Toolbar_active_1dqv0_24:active{background-color:var(--sapActiveColor)}.Toolbar_info_1dqv0_42{background-color:var(--sapInfobar_NonInteractive_Background);color:var(--sapList_TextColor);height:2rem}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24{background-color:var(--sapInfobar_Background);color:var(--sapInfobar_TextColor);outline-color:var(--sapContent_ContrastFocusColor)}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24:hover{background-color:var(--sapInfobar_Hover_Background)}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24:active{background-color:var(--sapInfobar_Active_Background)}.Toolbar_solid_1dqv0_62{background-color:var(--sapToolbar_Background)}.Toolbar_transparent_1dqv0_66{background-color:initial}.Toolbar_toolbar_1dqv0_15{align-items:center;display:flex;max-width:100%;width:100%}.Toolbar_toolbar_1dqv0_15>:first-child:not(.spacer){margin-inline:.5rem .25rem}.Toolbar_toolbar_1dqv0_15>:last-child:not(.spacer){margin-inline:.25rem .5rem}.Toolbar_toolbar_1dqv0_15>:not(:first-child):not(:last-child):not(.spacer){margin-inline:.25rem}.Toolbar_overflowButtonContainer_1dqv0_89{display:flex;margin-inline:0 .5rem}.Toolbar_popover_1dqv0_94[ui5-popover]::part(content){padding:0}.Toolbar_popoverPhone_1dqv0_100{inset-inline-start:5px!important;max-width:calc(100% - 10px);width:calc(100% - 10px)}.Toolbar_popoverContent_1dqv0_106{display:flex;flex-direction:column;padding:var(--_ui5wcr-ToolbarPopoverContentPadding)}.Toolbar_popoverContent_1dqv0_106>[ui5-button],.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button]{margin-block:.25rem}.Toolbar_popoverContent_1dqv0_106>[ui5-button]::part(button),.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button]::part(button){justify-content:flex-start}.Toolbar_popoverContent_1dqv0_106>[ui5-button][icon-only]::part(button),.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button][icon-only]::part(button){padding:revert}.Toolbar_popoverContent_1dqv0_106:last-child{margin-block-end:0}.Toolbar_popoverContent_1dqv0_106:first-child{margin-block-start:0}.Toolbar_childContainer_1dqv0_135{display:flex}"
};
var classNames15 = {
  "outerContainer": "Toolbar_outerContainer_1dqv0_1",
  "hasOverflow": "Toolbar_hasOverflow_1dqv0_14",
  "toolbar": "Toolbar_toolbar_1dqv0_15",
  "clear": "Toolbar_clear_1dqv0_20",
  "active": "Toolbar_active_1dqv0_24",
  "info": "Toolbar_info_1dqv0_42",
  "solid": "Toolbar_solid_1dqv0_62",
  "transparent": "Toolbar_transparent_1dqv0_66",
  "overflowButtonContainer": "Toolbar_overflowButtonContainer_1dqv0_89",
  "popover": "Toolbar_popover_1dqv0_94",
  "popoverPhone": "Toolbar_popoverPhone_1dqv0_100",
  "popoverContent": "Toolbar_popoverContent_1dqv0_106",
  "childContainer": "Toolbar_childContainer_1dqv0_135"
};

// node_modules/@ui5/webcomponents-react/dist/components/Toolbar/index.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
function getSpacerWidths(ref) {
  if (!ref) {
    return 0;
  }
  let spacerWidths = 0;
  if (ref.dataset.componentName === "ToolbarSpacer") {
    spacerWidths += ref.offsetWidth;
  }
  return spacerWidths + getSpacerWidths(ref.previousElementSibling);
}
var OVERFLOW_BUTTON_WIDTH = 36 + 8 + 8;
var Toolbar2 = (0, import_react35.forwardRef)((props, ref) => {
  const _a = props, {
    children,
    toolbarStyle = "Standard",
    design = "Auto",
    active = false,
    style,
    className,
    onClick,
    slot,
    as = "div",
    portalContainer,
    numberOfAlwaysVisibleItems = 0,
    onOverflowChange,
    overflowPopoverRef,
    overflowButton,
    a11yConfig
  } = _a, rest = __objRest(_a, [
    "children",
    "toolbarStyle",
    "design",
    "active",
    "style",
    "className",
    "onClick",
    "slot",
    "as",
    "portalContainer",
    "numberOfAlwaysVisibleItems",
    "onOverflowChange",
    "overflowPopoverRef",
    "overflowButton",
    "a11yConfig"
  ]);
  useStylesheet(styleData15, Toolbar2.displayName);
  const [componentRef, outerContainer] = useSyncRef(ref);
  const controlMetaData = (0, import_react35.useRef)([]);
  const [lastVisibleIndex, setLastVisibleIndex] = (0, import_react35.useState)(null);
  const [isPopoverMounted, setIsPopoverMounted] = (0, import_react35.useState)(false);
  const contentRef = (0, import_react35.useRef)(null);
  const overflowContentRef = (0, import_react35.useRef)(null);
  const overflowBtnRef = (0, import_react35.useRef)(null);
  const [minWidth, setMinWidth] = (0, import_react35.useState)("0");
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const showMoreText = i18nBundle.getText(SHOW_MORE);
  const toolbarClasses = clsx(classNames15.outerContainer, toolbarStyle === "Clear" && classNames15.clear, active && classNames15.active, design === "Solid" && classNames15.solid, design === "Transparent" && classNames15.transparent, design === "Info" && classNames15.info, className);
  const flatChildren = (0, import_react35.useMemo)(() => {
    return flattenFragments(children, 10);
  }, [children]);
  const childrenWithRef = (0, import_react35.useMemo)(() => {
    controlMetaData.current = [];
    return flatChildren.map((item, index) => {
      const itemRef = (0, import_react35.createRef)();
      const isSpacer = item?.type?.displayName === "ToolbarSpacer";
      controlMetaData.current.push({
        ref: itemRef,
        isSpacer
      });
      if (isSpacer) {
        return item;
      }
      return (0, import_jsx_runtime29.jsx)("div", {
        ref: itemRef,
        className: classNames15.childContainer,
        "data-component-name": "ToolbarChildContainer",
        children: item
      }, index);
    });
  }, [flatChildren, controlMetaData, classNames15.childContainer]);
  const overflowNeeded = (lastVisibleIndex || lastVisibleIndex === 0) && import_react35.Children.count(childrenWithRef) !== lastVisibleIndex + 1 && numberOfAlwaysVisibleItems < import_react35.Children.count(flatChildren);
  (0, import_react35.useEffect)(() => {
    let lastElementResizeObserver;
    const lastElement = contentRef.current.children[numberOfAlwaysVisibleItems - 1];
    const debouncedObserverFn = debounce(() => {
      const spacerWidth = getSpacerWidths(lastElement);
      const isRtl = outerContainer.current?.matches(":dir(rtl)");
      if (isRtl) {
        setMinWidth(`${lastElement.offsetParent.offsetWidth - lastElement.offsetLeft + OVERFLOW_BUTTON_WIDTH - spacerWidth}px`);
      } else {
        setMinWidth(`${lastElement.offsetLeft + lastElement.getBoundingClientRect().width + OVERFLOW_BUTTON_WIDTH - spacerWidth}px`);
      }
    }, 200);
    if (numberOfAlwaysVisibleItems && overflowNeeded && lastElement) {
      lastElementResizeObserver = new ResizeObserver(debouncedObserverFn);
      lastElementResizeObserver.observe(contentRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      lastElementResizeObserver?.disconnect();
    };
  }, [numberOfAlwaysVisibleItems, overflowNeeded]);
  const requestAnimationFrameRef = (0, import_react35.useRef)(void 0);
  const calculateVisibleItems = (0, import_react35.useCallback)(() => {
    requestAnimationFrameRef.current = requestAnimationFrame(() => {
      if (!outerContainer.current) return;
      const availableWidth = outerContainer.current.getBoundingClientRect().width;
      let consumedWidth = 0;
      let lastIndex = null;
      if (availableWidth - OVERFLOW_BUTTON_WIDTH <= 0) {
        lastIndex = -1;
      } else {
        let prevItemsAreSpacer = true;
        controlMetaData.current.forEach((item, index) => {
          const currentMeta = controlMetaData.current[index];
          if (currentMeta && currentMeta.ref && currentMeta.ref.current) {
            let nextWidth = currentMeta.ref.current.getBoundingClientRect().width;
            nextWidth += index === 0 || index === controlMetaData.current.length - 1 ? 4 : 8;
            if (index === controlMetaData.current.length - 1) {
              if (consumedWidth + nextWidth <= availableWidth - 8) {
                lastIndex = index;
              } else if (index === 0 || prevItemsAreSpacer) {
                lastIndex = index - 1;
              }
            } else {
              if (consumedWidth + nextWidth <= availableWidth - OVERFLOW_BUTTON_WIDTH) {
                lastIndex = index;
              }
              if (consumedWidth < availableWidth - OVERFLOW_BUTTON_WIDTH && consumedWidth + nextWidth >= availableWidth - OVERFLOW_BUTTON_WIDTH) {
                lastIndex = index - 1;
              }
            }
            if (prevItemsAreSpacer && !item.isSpacer) {
              prevItemsAreSpacer = false;
            }
            consumedWidth += nextWidth;
          }
        });
      }
      setLastVisibleIndex(lastIndex);
    });
  }, [overflowNeeded]);
  (0, import_react35.useEffect)(() => {
    const observer = new ResizeObserver(calculateVisibleItems);
    if (outerContainer.current) {
      observer.observe(outerContainer.current);
    }
    return () => {
      cancelAnimationFrame(requestAnimationFrameRef.current);
      observer.disconnect();
    };
  }, [calculateVisibleItems]);
  (0, import_react35.useEffect)(() => {
    if (import_react35.Children.count(children) > 0) {
      calculateVisibleItems();
    }
  }, [children]);
  useIsomorphicLayoutEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);
  const handleToolbarClick = (e) => {
    if (active && typeof onClick === "function") {
      const isSpaceEnterDown = e.type === "keydown" && (e.code === "Enter" || e.code === "Space");
      if (isSpaceEnterDown && e.target !== e.currentTarget) {
        return;
      }
      if (e.type === "click" || isSpaceEnterDown) {
        if (isSpaceEnterDown) {
          e.preventDefault();
        }
        onClick(e);
      }
    }
  };
  const prevChildren = (0, import_react35.useRef)(flatChildren);
  const debouncedOverflowChange = (0, import_react35.useRef)(void 0);
  (0, import_react35.useEffect)(() => {
    if (typeof onOverflowChange === "function") {
      debouncedOverflowChange.current = debounce(onOverflowChange, 60);
    }
  }, [onOverflowChange]);
  (0, import_react35.useEffect)(() => {
    const haveChildrenChanged = prevChildren.current.length !== flatChildren.length;
    if ((lastVisibleIndex !== null || haveChildrenChanged) && typeof debouncedOverflowChange.current === "function") {
      prevChildren.current = flatChildren;
      const toolbarChildren = contentRef.current?.children;
      let toolbarElements = [];
      let overflowElements;
      if (isPopoverMounted) {
        overflowElements = overflowContentRef.current?.children;
      }
      if (toolbarChildren?.length > 0) {
        toolbarElements = Array.from(toolbarChildren).filter((item, index) => index <= lastVisibleIndex);
      }
      debouncedOverflowChange.current({
        toolbarElements,
        overflowElements,
        target: outerContainer.current
      });
    }
    return () => {
      if (debouncedOverflowChange.current) {
        debouncedOverflowChange.current.cancel();
      }
    };
  }, [lastVisibleIndex, flatChildren.length, isPopoverMounted]);
  const CustomTag = as;
  const styleWithMinWidth = minWidth !== "0" ? __spreadValues({
    minWidth
  }, style) : style;
  return (0, import_jsx_runtime29.jsxs)(CustomTag, __spreadProps(__spreadValues({
    style: styleWithMinWidth,
    className: clsx(toolbarClasses, overflowNeeded && classNames15.hasOverflow),
    ref: componentRef,
    slot,
    onClick: handleToolbarClick,
    onKeyDown: handleToolbarClick,
    tabIndex: active ? 0 : void 0,
    role: active ? "button" : void 0,
    "data-sap-ui-fastnavgroup": "true"
  }, rest), {
    children: [(0, import_jsx_runtime29.jsxs)("div", {
      className: classNames15.toolbar,
      "data-component-name": "ToolbarContent",
      ref: contentRef,
      children: [overflowNeeded && import_react35.Children.map(childrenWithRef, (item, index) => {
        if (index >= lastVisibleIndex + 1 && index > numberOfAlwaysVisibleItems - 1) {
          return (0, import_react35.cloneElement)(item, {
            style: {
              visibility: "hidden",
              position: "absolute",
              pointerEvents: "none"
            }
          });
        }
        return item;
      }), !overflowNeeded && childrenWithRef]
    }), overflowNeeded && (0, import_jsx_runtime29.jsx)("div", {
      ref: overflowBtnRef,
      className: classNames15.overflowButtonContainer,
      "data-component-name": "ToolbarOverflowButtonContainer",
      children: (0, import_jsx_runtime29.jsx)(OverflowPopover, {
        overflowPopoverRef,
        lastVisibleIndex,
        classes: classNames15,
        portalContainer,
        overflowContentRef,
        numberOfAlwaysVisibleItems,
        showMoreText,
        overflowButton,
        setIsMounted: setIsPopoverMounted,
        a11yConfig,
        children: flatChildren
      })
    })]
  }));
});
Toolbar2.displayName = "Toolbar";

// node_modules/@ui5/webcomponents-react/dist/components/ToolbarSeparator/index.js
var import_react36 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/ToolbarSeparator/ToolbarSeparator.module.css.js
var styleData16 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ToolbarSeparator.module.css",
  content: ".ToolbarSeparator_separator_1lvhp_1{background:var(--sapToolbar_SeparatorColor);height:var(--_ui5wcr-ToolbarSeparatorHeight);width:.0625rem}"
};
var classNames16 = {
  "separator": "ToolbarSeparator_separator_1lvhp_1"
};

// node_modules/@ui5/webcomponents-react/dist/components/ToolbarSeparator/index.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var ToolbarSeparator2 = (0, import_react36.forwardRef)((props, ref) => {
  const _a = props, {
    style,
    className
  } = _a, rest = __objRest(_a, [
    "style",
    "className"
  ]);
  useStylesheet(styleData16, ToolbarSeparator2.displayName);
  const separatorClasses = clsx(classNames16.separator, className);
  return (0, import_jsx_runtime30.jsx)("div", __spreadValues({
    ref,
    style,
    className: separatorClasses,
    role: "separator"
  }, rest));
});
ToolbarSeparator2.displayName = "ToolbarSeparator";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageTitle/ActionsSpacer.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var ActionsSpacer = ({
  onClick,
  noHover
}) => {
  return (0, import_jsx_runtime31.jsx)("span", {
    style: {
      flexGrow: 1,
      height: "100%",
      cursor: noHover ? "auto" : "pointer"
    },
    className: "spacer",
    onClick,
    "data-component-name": "ToolbarSpacer"
  });
};
ActionsSpacer.displayName = "ToolbarSpacer";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageTitle/ObjectPageTitle.module.css.js
var styleData17 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ObjectPageTitle.module.css",
  content: ".ObjectPageTitle_container_7yth3_1{background-color:var(--sapObjectHeader_Background);cursor:pointer;display:flex;flex:1 1 100%;flex-direction:column;inset-block-start:0;justify-content:space-between;min-height:3rem;padding-block-end:.5rem;padding-block-start:.5rem;position:sticky;z-index:2}.ObjectPageTitle_container_7yth3_1[data-not-clickable=true]{cursor:unset}.ObjectPageTitle_container_7yth3_1[data-not-clickable=true]:hover{background-color:var(--sapObjectHeader_Background)}.ObjectPageTitle_container_7yth3_1:hover{background-color:var(--sapObjectHeader_Hover_Background)}.ObjectPageTitle_phone_7yth3_28{--_ui5wcr_ObjectPage_title_fontsize:var(--sapObjectHeader_Title_SnappedFontSize)}.ObjectPageTitle_breadcrumbs_7yth3_32{min-width:50%;padding:.5rem 0 .25rem 0}.ObjectPageTitle_breadcrumbs_7yth3_32:only-child{width:100%}.ObjectPageTitle_titleMainSection_7yth3_41{align-items:baseline;flex:1 1 100%;overflow-x:hidden}.ObjectPageTitle_middleSection_7yth3_47{flex-grow:1;overflow-x:hidden;width:100%}.ObjectPageTitle_title_7yth3_41{color:var(--sapObjectHeader_Title_TextColor);font-family:var(--sapObjectHeader_Title_FontFamily);font-size:var(--_ui5wcr_ObjectPage_title_fontsize);hyphens:auto;min-width:3rem;overflow-wrap:break-word;overflow-x:hidden;padding-block-start:.3125rem}.ObjectPageTitle_title_7yth3_41>*{color:var(--sapObjectHeader_Title_TextColor);font-family:var(--sapObjectHeader_Title_FontFamily);font-size:var(--_ui5wcr_ObjectPage_title_fontsize);hyphens:auto;overflow-wrap:break-word}@container (min-width: 600px) and (max-width: 1023px){.ObjectPageTitle_title_7yth3_41{padding-block-start:.6875rem}}.ObjectPageTitle_subTitle_7yth3_78{color:var(--sapObjectHeader_Subtitle_TextColor);font-size:var(--sapFontSize);hyphens:auto;overflow-wrap:break-word;padding-inline-start:.5rem}.ObjectPageTitle_subTitle_7yth3_78>*{color:var(--sapObjectHeader_Subtitle_TextColor);font-size:var(--sapFontSize);hyphens:auto;overflow-wrap:break-word}.ObjectPageTitle_subTitleBottom_7yth3_93{margin-block-start:.25rem;padding-inline-start:0}.ObjectPageTitle_content_7yth3_98{display:flex;flex-shrink:1.6;padding-inline-start:.5rem}.ObjectPageTitle_toolbar_7yth3_104{cursor:auto;flex:1 1.6 100%}.ObjectPageTitle_toolbar_7yth3_104:hover{background-color:inherit}.ObjectPageTitle_toolbar_7yth3_104>:first-child{height:100%}.ObjectPageTitle_toolbar_7yth3_104>[data-component-name=ToolbarContent]:first-child:last-child>[data-component-name=ToolbarChildContainer]:last-child{margin-inline-end:0}.ObjectPageTitle_toolbar_7yth3_104 [data-component-name=ToolbarOverflowButtonContainer]{margin-inline-end:0}"
};
var classNames17 = {
  "container": "ObjectPageTitle_container_7yth3_1",
  "phone": "ObjectPageTitle_phone_7yth3_28",
  "breadcrumbs": "ObjectPageTitle_breadcrumbs_7yth3_32",
  "titleMainSection": "ObjectPageTitle_titleMainSection_7yth3_41",
  "middleSection": "ObjectPageTitle_middleSection_7yth3_47",
  "title": "ObjectPageTitle_title_7yth3_41",
  "subTitle": "ObjectPageTitle_subTitle_7yth3_78",
  "subTitleBottom": "ObjectPageTitle_subTitleBottom_7yth3_93",
  "content": "ObjectPageTitle_content_7yth3_98",
  "toolbar": "ObjectPageTitle_toolbar_7yth3_104"
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageTitle/index.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var enhanceActionsWithClick = (actions3, ref) => flattenFragments(actions3, Infinity).map((action) => {
  if ((0, import_react37.isValidElement)(action)) {
    return (0, import_react37.cloneElement)(action, {
      onClick: (e) => {
        if (typeof action.props?.onClick === "function") {
          action.props.onClick(e);
        }
        if (ref.current?.isOpen() && !e.defaultPrevented) {
          ref.current.close();
        }
      }
    });
  }
});
var ObjectPageTitle = (0, import_react37.forwardRef)((props, ref) => {
  const _a = props, {
    actions: actions3,
    breadcrumbs,
    children,
    header,
    subHeader,
    navigationActions,
    className,
    style,
    onToggleHeaderContentVisibility,
    actionsToolbarProps,
    navigationActionsToolbarProps,
    expandedContent,
    snappedContent
  } = _a, rest = __objRest(_a, [
    "actions",
    "breadcrumbs",
    "children",
    "header",
    "subHeader",
    "navigationActions",
    "className",
    "style",
    "onToggleHeaderContentVisibility",
    "actionsToolbarProps",
    "navigationActionsToolbarProps",
    "expandedContent",
    "snappedContent"
  ]);
  useStylesheet(styleData17, ObjectPageTitle.displayName);
  const [componentRef, dynamicPageTitleRef] = useSyncRef(ref);
  const [showNavigationInTopArea, setShowNavigationInTopArea] = (0, import_react37.useState)(void 0);
  const isMounted = (0, import_react37.useRef)(false);
  const [isPhone4, setIsPhone] = (0, import_react37.useState)(Device_exports.getCurrentRange(dynamicPageTitleRef.current?.getBoundingClientRect().width)?.name === "Phone");
  const containerClasses = clsx(classNames17.container, isPhone4 && classNames17.phone, className);
  const [actionsOverflowRef, syncedActionsOverflowRef] = useSyncRef(actionsToolbarProps?.overflowPopoverRef ?? null);
  const [navActionsOverflowRef, syncedNavActionsOverflowRef] = useSyncRef(navigationActionsToolbarProps?.overflowPopoverRef ?? null);
  (0, import_react37.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);
  const _b = rest, {
    onClick: _0
  } = _b, propsWithoutOmitted = __objRest(_b, [
    "onClick"
  ]);
  const onHeaderClick = (0, import_react37.useCallback)((e) => {
    if (typeof props?.onClick === "function") {
      props.onClick(e);
    }
    if (typeof onToggleHeaderContentVisibility === "function" && !props?.["data-not-clickable"]) {
      onToggleHeaderContentVisibility(e);
    }
  }, [props?.onClick, onToggleHeaderContentVisibility, props?.["data-not-clickable"]]);
  (0, import_react37.useEffect)(() => {
    const debouncedObserverFn = debounce(([titleContainer]) => {
      const borderBoxSize = Array.isArray(titleContainer.borderBoxSize) ? titleContainer.borderBoxSize[0] : titleContainer.borderBoxSize;
      const titleContainerWidth = borderBoxSize?.inlineSize ?? titleContainer.target.getBoundingClientRect().width;
      setIsPhone(Device_exports.getCurrentRange(titleContainerWidth)?.name === "Phone");
      if (titleContainerWidth < 1280 && !showNavigationInTopArea === true && isMounted.current) {
        setShowNavigationInTopArea(true);
      } else if (titleContainerWidth >= 1280 && !showNavigationInTopArea === false && isMounted.current) {
        setShowNavigationInTopArea(false);
      }
    }, 150);
    const observer = new ResizeObserver(debouncedObserverFn);
    if (dynamicPageTitleRef.current) {
      observer.observe(dynamicPageTitleRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      observer.disconnect();
    };
  }, [dynamicPageTitleRef.current, showNavigationInTopArea, isMounted]);
  const handleActionsToolbarClick = (e) => {
    stopPropagation(e);
    if (typeof actionsToolbarProps?.onClick === "function") {
      actionsToolbarProps.onClick(e);
    }
  };
  const handleNavigationActionsToolbarClick = (e) => {
    stopPropagation(e);
    if (typeof navigationActionsToolbarProps?.onClick === "function") {
      navigationActionsToolbarProps.onClick(e);
    }
  };
  return (0, import_jsx_runtime32.jsxs)(FlexBox, __spreadProps(__spreadValues({
    className: containerClasses,
    style,
    ref: componentRef,
    "data-component-name": "ObjectPageTitle",
    onClick: onHeaderClick
  }, propsWithoutOmitted), {
    children: [(breadcrumbs || navigationActions && showNavigationInTopArea) && (0, import_jsx_runtime32.jsxs)(FlexBox, {
      justifyContent: FlexBoxJustifyContent.SpaceBetween,
      "data-component-name": "ObjectPageTitleBreadcrumbs",
      children: [breadcrumbs && (0, import_jsx_runtime32.jsx)("div", {
        className: classNames17.breadcrumbs,
        onClick: stopPropagation,
        children: breadcrumbs
      }), navigationActions && showNavigationInTopArea && (0, import_jsx_runtime32.jsxs)(Toolbar2, __spreadProps(__spreadValues({
        tabIndex: void 0,
        role: void 0
      }, navigationActionsToolbarProps), {
        overflowButton: navigationActionsToolbarProps?.overflowButton,
        className: clsx(classNames17.toolbar, navigationActionsToolbarProps?.className),
        onClick: handleNavigationActionsToolbarClick,
        "data-component-name": "ObjectPageTitleNavActions",
        onOverflowChange: navigationActionsToolbarProps?.onOverflowChange,
        overflowPopoverRef: navActionsOverflowRef,
        design: "Auto",
        toolbarStyle: "Clear",
        active: true,
        children: [(0, import_jsx_runtime32.jsx)(ActionsSpacer, {
          onClick: onHeaderClick,
          noHover: props?.["data-not-clickable"]
        }), enhanceActionsWithClick(navigationActions, syncedNavActionsOverflowRef)]
      }))]
    }), (0, import_jsx_runtime32.jsxs)(FlexBox, {
      alignItems: FlexBoxAlignItems.Center,
      className: classNames17.middleSection,
      "data-component-name": "ObjectPageTitleMiddleSection",
      children: [(0, import_jsx_runtime32.jsxs)(FlexBox, {
        className: classNames17.titleMainSection,
        children: [header && (0, import_jsx_runtime32.jsx)("div", {
          className: classNames17.title,
          "data-component-name": "ObjectPageTitleHeader",
          children: header
        }), children && (0, import_jsx_runtime32.jsx)("div", {
          className: classNames17.content,
          "data-component-name": "ObjectPageTitleContent",
          children
        })]
      }), (actions3 || !showNavigationInTopArea && navigationActions) && (0, import_jsx_runtime32.jsxs)(Toolbar2, __spreadProps(__spreadValues({
        tabIndex: void 0,
        role: void 0
      }, actionsToolbarProps), {
        overflowButton: actionsToolbarProps?.overflowButton,
        design: "Auto",
        toolbarStyle: "Clear",
        active: true,
        className: clsx(classNames17.toolbar, actionsToolbarProps?.className),
        onClick: handleActionsToolbarClick,
        "data-component-name": "ObjectPageTitleActions",
        onOverflowChange: actionsToolbarProps?.onOverflowChange,
        overflowPopoverRef: actionsOverflowRef,
        children: [(0, import_jsx_runtime32.jsx)(ActionsSpacer, {
          onClick: onHeaderClick,
          noHover: props?.["data-not-clickable"]
        }), enhanceActionsWithClick(actions3, syncedActionsOverflowRef), !showNavigationInTopArea && import_react37.Children.count(actions3) > 0 && import_react37.Children.count(navigationActions) > 0 && (0, import_jsx_runtime32.jsx)(ToolbarSeparator2, {}), !showNavigationInTopArea && enhanceActionsWithClick(navigationActions, syncedActionsOverflowRef)]
      }))]
    }), subHeader && (0, import_jsx_runtime32.jsx)(FlexBox, {
      children: (0, import_jsx_runtime32.jsx)("div", {
        className: clsx(classNames17.subTitle, classNames17.subTitleBottom),
        "data-component-name": "ObjectPageTitleSubHeader",
        children: subHeader
      })
    }), props?.["data-header-content-visible"] ? expandedContent : props["data-is-snapped-rendered-outside"] ? void 0 : snappedContent]
  }));
});
ObjectPageTitle.displayName = "ObjectPageTitle";

// node_modules/@ui5/webcomponents/dist/types/LinkAccessibleRole.js
var LinkAccessibleRole;
(function(LinkAccessibleRole2) {
  LinkAccessibleRole2["Link"] = "Link";
  LinkAccessibleRole2["Button"] = "Button";
})(LinkAccessibleRole || (LinkAccessibleRole = {}));
var LinkAccessibleRole_default = LinkAccessibleRole;

// node_modules/@ui5/webcomponents-react/dist/components/ExpandableText/index.js
var import_react38 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/ExpandableText/ExpandableText.module.css.js
var styleData18 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ExpandableText.module.css",
  content: ".ExpandableText_expandableText_4vuo0_1{box-sizing:border-box;color:var(--sapTextColor);display:inline-block;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;white-space:pre-line;word-wrap:break-word;max-width:100%}.ExpandableText_text_4vuo0_13{display:inline}.ExpandableText_renderWhitespace_4vuo0_17{white-space:pre-wrap}.ExpandableText_ellipsis_4vuo0_21{word-spacing:.125rem}.ExpandableText_popover_4vuo0_25{max-width:30rem}.ExpandableText_popover_4vuo0_25::part(content){padding:1rem}"
};
var classNames18 = {
  "expandableText": "ExpandableText_expandableText_4vuo0_1",
  "text": "ExpandableText_text_4vuo0_13",
  "renderWhitespace": "ExpandableText_renderWhitespace_4vuo0_17",
  "ellipsis": "ExpandableText_ellipsis_4vuo0_21",
  "popover": "ExpandableText_popover_4vuo0_25"
};

// node_modules/@ui5/webcomponents-react/dist/components/ExpandableText/index.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var ExpandableText = (0, import_react38.forwardRef)((props, ref) => {
  const _a = props, {
    children,
    showOverflowInPopover,
    maxCharacters = 100,
    renderWhitespace,
    className
  } = _a, rest = __objRest(_a, [
    "children",
    "showOverflowInPopover",
    "maxCharacters",
    "renderWhitespace",
    "className"
  ]);
  useStylesheet(styleData18, ExpandableText.displayName);
  const [collapsed, setCollapsed] = (0, import_react38.useState)(true);
  const [popoverOpen, setPopoverOpen] = (0, import_react38.useState)(false);
  const uniqueId = useIsomorphicId();
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const trimmedChildren = renderWhitespace ? children : children?.replace(/\s+/g, " ").trim();
  const isOverflow = trimmedChildren?.length >= maxCharacters;
  const strippedChildren = isOverflow && (collapsed || showOverflowInPopover) ? trimmedChildren?.slice(0, maxCharacters) : children;
  const handleClick = () => {
    if (showOverflowInPopover) {
      setPopoverOpen((prev) => !prev);
    }
    setCollapsed((prev) => !prev);
  };
  const closePopover = () => {
    setCollapsed(true);
    setPopoverOpen(false);
  };
  return (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, {
    children: [(0, import_jsx_runtime33.jsxs)("span", __spreadProps(__spreadValues({
      className: clsx(classNames18.expandableText, className)
    }, rest), {
      ref,
      children: [(0, import_jsx_runtime33.jsx)(Text, {
        className: clsx(classNames18.text, renderWhitespace && classNames18.renderWhitespace),
        children: strippedChildren
      }), isOverflow && (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, {
        children: [(0, import_jsx_runtime33.jsx)("span", {
          className: classNames18.ellipsis,
          children: showOverflowInPopover || collapsed ? "… " : " "
        }), (0, import_jsx_runtime33.jsx)(Link, {
          accessibleName: showOverflowInPopover ? collapsed ? i18nBundle.getText(SHOW_FULL_TEXT) : i18nBundle.getText(CLOSE_POPOVER) : void 0,
          accessibleRole: LinkAccessibleRole_default.Button,
          accessibilityAttributes: showOverflowInPopover ? {
            hasPopup: "dialog"
          } : {
            expanded: !collapsed
          },
          onClick: handleClick,
          id: `${uniqueId}-link`,
          children: collapsed ? i18nBundle.getText(SHOW_MORE) : i18nBundle.getText(SHOW_LESS)
        })]
      })]
    })), showOverflowInPopover && popoverOpen && (0, import_jsx_runtime33.jsx)(ResponsivePopover, {
      opener: `${uniqueId}-link`,
      open: true,
      onClose: closePopover,
      className: classNames18.popover,
      children: (0, import_jsx_runtime33.jsx)(Text, {
        className: clsx(classNames18.text, renderWhitespace && classNames18.renderWhitespace),
        children
      })
    })]
  });
});
ExpandableText.displayName = "ExpandableText";

// node_modules/@ui5/webcomponents-react/dist/components/FilterBar/index.js
var import_react45 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents/dist/types/BusyIndicatorSize.js
var BusyIndicatorSize;
(function(BusyIndicatorSize2) {
  BusyIndicatorSize2["S"] = "S";
  BusyIndicatorSize2["M"] = "M";
  BusyIndicatorSize2["L"] = "L";
})(BusyIndicatorSize || (BusyIndicatorSize = {}));
var BusyIndicatorSize_default = BusyIndicatorSize;

// node_modules/@ui5/webcomponents-icons/dist/v4/collapse-group.js
var name11 = "collapse-group";
var pathData11 = "M267.5 120q-12-11-23 0l-159 157q-10 10-23 10t-22-10q-10-9-10-22t10-23l193-191q9-9 22.5-9t22.5 9l192 192q10 10 10 23t-10 23q-9 9-22.5 9t-22.5-9zm0 193q-12-11-23 0l-159 157q-10 10-23 10t-22-10q-10-9-10-22t10-23l193-191q9-9 22.5-9t22.5 9l192 192q10 10 10 23t-10 23q-9 9-22.5 9t-22.5-9z";
var ltr11 = false;
var accData11 = ICON_COLLAPSE_GROUP;
var collection11 = "SAP-icons-v4";
var packageName11 = "@ui5/webcomponents-icons";
registerIcon(name11, { pathData: pathData11, ltr: ltr11, accData: accData11, collection: collection11, packageName: packageName11 });

// node_modules/@ui5/webcomponents-icons/dist/v5/collapse-group.js
var name12 = "collapse-group";
var pathData12 = "M390 256q-10 0-18-8L256 127 140 248q-8 8-18 8-11 0-18.5-7.5T96 230q0-10 7-17L238 72q6-8 18-8 11 0 19 8l134 141q7 7 7 17 0 11-7.5 18.5T390 256zm0 192q-10 0-18-8L256 319 140 440q-8 8-18 8-11 0-18.5-7.5T96 422q0-10 7-17l135-141q6-8 18-8 11 0 19 8l134 141q7 7 7 17 0 11-7.5 18.5T390 448z";
var ltr12 = false;
var accData12 = ICON_COLLAPSE_GROUP;
var collection12 = "SAP-icons-v5";
var packageName12 = "@ui5/webcomponents-icons";
registerIcon(name12, { pathData: pathData12, ltr: ltr12, accData: accData12, collection: collection12, packageName: packageName12 });

// node_modules/@ui5/webcomponents-icons/dist/collapse-group.js
var collapse_group_default = "collapse-group";

// node_modules/@ui5/webcomponents-icons/dist/v4/expand-group.js
var name13 = "expand-group";
var pathData13 = "M425.5 234q9-9 22.5-9t22.5 9q10 10 10 23t-10 23l-192 192q-9 9-22.5 9t-22.5-9l-193-191q-10-10-10-23t10-22q9-10 22-10t23 10l159 157q11 11 23 0zm0-193q9-9 22.5-9t22.5 9q10 10 10 23t-10 23l-192 192q-9 9-22.5 9t-22.5-9L40.5 88q-10-10-10-23t10-22q9-10 22-10t23 10l159 157q5 5 11.5 5t11.5-5z";
var ltr13 = false;
var accData13 = ICON_EXPAND_GROUP;
var collection13 = "SAP-icons-v4";
var packageName13 = "@ui5/webcomponents-icons";
registerIcon(name13, { pathData: pathData13, ltr: ltr13, accData: accData13, collection: collection13, packageName: packageName13 });

// node_modules/@ui5/webcomponents-icons/dist/v5/expand-group.js
var name14 = "expand-group";
var pathData14 = "M390 64q11 0 18.5 7.5T416 90q0 10-7 17L275 248q-8 8-19 8-12 0-18-8L103 107q-7-7-7-17 0-11 7.5-18.5T122 64q10 0 18 8l116 121L372 72q8-8 18-8zm0 192q11 0 18.5 7.5T416 282q0 10-7 17L275 440q-8 8-19 8-12 0-18-8L103 299q-7-7-7-17 0-11 7.5-18.5T122 256q10 0 18 8l116 121 116-121q8-8 18-8z";
var ltr14 = false;
var accData14 = ICON_EXPAND_GROUP;
var collection14 = "SAP-icons-v5";
var packageName14 = "@ui5/webcomponents-icons";
registerIcon(name14, { pathData: pathData14, ltr: ltr14, accData: accData14, collection: collection14, packageName: packageName14 });

// node_modules/@ui5/webcomponents-icons/dist/expand-group.js
var expand_group_default = "expand-group";

// node_modules/@ui5/webcomponents-icons/dist/v4/navigation-up-arrow.js
var name15 = "navigation-up-arrow";
var pathData15 = "M86.5 380q-9 9-22.5 9t-22.5-9q-10-10-10-23t10-23l193-197q4-2 5-3 2-1 2.5-1.5t2.5-1.5q6-2 11-2 2 0 3 .5t2 .5q4 0 6 1t3.5 2 3.5 2q1 1 1.5 1t1.5 1 2 1l192 196q10 10 10 23t-10 23q-9 9-22.5 9t-22.5-9l-154-155q-16-10-32 0z";
var ltr15 = false;
var collection15 = "SAP-icons-v4";
var packageName15 = "@ui5/webcomponents-icons";
registerIcon(name15, { pathData: pathData15, ltr: ltr15, collection: collection15, packageName: packageName15 });

// node_modules/@ui5/webcomponents-icons/dist/v5/navigation-up-arrow.js
var name16 = "navigation-up-arrow";
var pathData16 = "M416 326q0 11-7.5 18.5T390 352q-10 0-18-8L256 223 140 344q-8 8-18 8-11 0-18.5-7.5T96 326q0-10 7-17l135-141q6-8 18-8 11 0 19 8l134 141q7 7 7 17z";
var ltr16 = false;
var collection16 = "SAP-icons-v5";
var packageName16 = "@ui5/webcomponents-icons";
registerIcon(name16, { pathData: pathData16, ltr: ltr16, collection: collection16, packageName: packageName16 });

// node_modules/@ui5/webcomponents-icons/dist/navigation-up-arrow.js
var navigation_up_arrow_default = "navigation-up-arrow";

// node_modules/@ui5/webcomponents-react/dist/components/FilterGroupItem/index.js
var import_react40 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/internal/FilterBarDialogContext.js
var import_react39 = __toESM(require_react(), 1);
var FilterBarDialogContext = (0, import_react39.createContext)({});

// node_modules/@ui5/webcomponents-react/dist/components/FilterGroupItem/FilterGroupItem.module.css.js
var styleData19 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "FilterGroupItem.module.css",
  content: ".FilterGroupItem_filterItem_1b288_1{flex-basis:var(--_ui5wcr_filter_group_item_flex_basis);flex-grow:1;flex-shrink:0;margin-block-end:1rem;margin-inline-end:1rem;max-width:calc(var(--_ui5wcr_filter_group_item_flex_basis))}.FilterGroupItem_filterItem_1b288_1[data-with-toolbar=false]{max-width:calc(var(--_ui5wcr_filter_group_item_flex_basis)*2)}.FilterGroupItem_innerFilterItemContainer_1b288_14{display:flex;flex-direction:column;justify-content:flex-start}.FilterGroupItem_innerFilterItemContainer_1b288_14>:last-child{width:100%}.FilterGroupItem_loadingContainer_1b288_24{display:flex;height:1.625rem;justify-content:center;width:100%}.FilterGroupItem_dialogTableRow_1b288_31{--_ui5wcr-ActiveIconDisplayVariable:inline-block}.FilterGroupItem_dialogTableRow_1b288_31 *{cursor:pointer}.FilterGroupItem_dialogCellLabel_1b288_39{color:var(--sapTextColor);margin-block-end:.25rem}.FilterGroupItem_dialogActiveCell_1b288_44{text-align:center;width:25%}.FilterGroupItem_dialogActiveIcon_1b288_49{color:var(--sapNeutralColor);display:var(--_ui5wcr-ActiveIconDisplayVariable);flex-grow:1;transform:scale(-50%)}.FilterGroupItem_labelContainer_1b288_56 :not(:first-child){width:100%}.FilterGroupItem_withReorderBtns_1b288_62{--_ui5wcr-ReorderBtnsDisplay:none}.FilterGroupItem_withReorderBtns_1b288_62[selected]::part(row):active,.FilterGroupItem_withReorderBtns_1b288_62[selected]::part(row):focus{--_ui5wcr-ActiveIconDisplayVariable:none;--_ui5wcr-ReorderBtnsDisplay:flex;background-color:var(--sapList_SelectionBackgroundColor);border-block-end:1px solid var(--sapList_SelectionBorderColor)}.FilterGroupItem_withReorderHoverBtns_1b288_74[selected]:hover{--_ui5wcr-ReorderBtnsDisplay:flex;--_ui5wcr-ActiveIconDisplayVariable:none}.FilterGroupItem_reorderBtnsContainer_1b288_81{display:var(--_ui5wcr-ReorderBtnsDisplay)}.FilterGroupItem_pseudoInvisibleText_1b288_85{font-size:0;left:0;position:absolute;top:0;user-select:none}"
};
var classNames19 = {
  "filterItem": "FilterGroupItem_filterItem_1b288_1",
  "innerFilterItemContainer": "FilterGroupItem_innerFilterItemContainer_1b288_14",
  "loadingContainer": "FilterGroupItem_loadingContainer_1b288_24",
  "dialogTableRow": "FilterGroupItem_dialogTableRow_1b288_31",
  "dialogCellLabel": "FilterGroupItem_dialogCellLabel_1b288_39",
  "dialogActiveCell": "FilterGroupItem_dialogActiveCell_1b288_44",
  "dialogActiveIcon": "FilterGroupItem_dialogActiveIcon_1b288_49",
  "labelContainer": "FilterGroupItem_labelContainer_1b288_56",
  "withReorderBtns": "FilterGroupItem_withReorderBtns_1b288_62",
  "withReorderHoverBtns": "FilterGroupItem_withReorderHoverBtns_1b288_74",
  "reorderBtnsContainer": "FilterGroupItem_reorderBtnsContainer_1b288_81",
  "pseudoInvisibleText": "FilterGroupItem_pseudoInvisibleText_1b288_85"
};

// node_modules/@ui5/webcomponents-react/dist/components/FilterGroupItem/index.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
addCustomCSSWithScoping("ui5-table-row", `
/* hide navigated cell */
:host([data-component-name="FilterBarDialogTableRow"]) .ui5-table-row-navigated {
 display:none;
}
`);
var isMac2 = isMac();
var FilterGroupItem = (0, import_react40.forwardRef)((props, ref) => {
  useStylesheet(styleData19, FilterGroupItem.displayName);
  const _a = props, {
    groupName = "default",
    considerGroupName,
    label = "",
    labelTooltip,
    required,
    hidden,
    hiddenInFilterBar,
    children,
    loading,
    className,
    slot,
    active,
    orderId
  } = _a, rest = __objRest(_a, [
    "groupName",
    "considerGroupName",
    "label",
    "labelTooltip",
    "required",
    "hidden",
    "hiddenInFilterBar",
    "children",
    "loading",
    "className",
    "slot",
    "active",
    "orderId"
  ]);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const tableRowRef = (0, import_react40.useRef)(null);
  const reactKey = props["data-react-key"];
  const index = props["data-index"];
  const isomporphicReorderKey = isMac2 ? "CMD" : "CTRL";
  const {
    isFilterInDialog,
    isListView,
    onReorder,
    withValues,
    enableReordering,
    showBtnsOnHover,
    setShowBtnsOnHover,
    handleFocusFallback,
    currentReorderedItemOrderId
  } = (0, import_react40.useContext)(FilterBarDialogContext);
  const inFB = !isFilterInDialog;
  const withReordering = enableReordering && !withValues && isListView;
  const [itemPosition, setItemPosition] = (0, import_react40.useState)(void 0);
  const handleFocus = (e) => {
    setShowBtnsOnHover(false);
    if (e.currentTarget.nextSibling === null) {
      setItemPosition("last");
    } else if (index === 0) {
      setItemPosition("first");
    } else {
      setItemPosition(void 0);
    }
  };
  (0, import_react40.useEffect)(() => {
    if (index === 0) {
      setItemPosition("first");
    }
  }, [index]);
  const handleReorder = (e) => {
    setItemPosition(void 0);
    onReorder({
      index,
      direction: e.currentTarget.dataset.reorder,
      target: tableRowRef.current,
      orderId
    });
  };
  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      const directionMap = {
        Home: "top",
        End: "bottom",
        ArrowUp: "up",
        ArrowDown: "down"
      };
      const direction = directionMap[e.key];
      if (direction) {
        setItemPosition(void 0);
        onReorder({
          index,
          direction,
          target: e.currentTarget,
          orderId
        });
      }
    }
  };
  (0, import_react40.useEffect)(() => {
    if (withReordering && tableRowRef.current && currentReorderedItemOrderId === orderId && typeof index === "number") {
      handleFocusFallback();
    }
  }, [withReordering, currentReorderedItemOrderId, orderId, index]);
  if (!required && (hidden || inFB && hiddenInFilterBar)) return null;
  if (!inFB) {
    return (
      //todo: disable selection for required fields when it's possible, or the table is fully controllable (https://github.com/SAP/ui5-webcomponents/issues/5662)
      (0, import_jsx_runtime34.jsxs)(TableRow, {
        ref: tableRowRef,
        "data-text": label,
        "data-react-key": reactKey,
        "data-required": required,
        "data-component-name": "FilterBarDialogTableRow",
        className: clsx(classNames19.dialogTableRow, withReordering && classNames19.withReorderBtns, withReordering && showBtnsOnHover && classNames19.withReorderHoverBtns),
        onFocus: withReordering ? handleFocus : void 0,
        onKeyDown: withReordering ? handleKeyDown : void 0,
        "data-order-id": orderId,
        "aria-live": withReordering ? "polite" : void 0,
        "aria-label": withReordering ? i18nBundle.getText(FILTER_DIALOG_REORDER_FILTERS, isomporphicReorderKey) : void 0,
        children: [(0, import_jsx_runtime34.jsx)(TableCell, {
          "data-component-name": "FilterBarDialogTableCellFilter",
          children: (0, import_jsx_runtime34.jsxs)(FlexBox, {
            direction: FlexBoxDirection.Column,
            className: clsx(classNames19.labelContainer),
            children: [(0, import_jsx_runtime34.jsx)(Label, {
              className: classNames19.dialogCellLabel,
              title: labelTooltip ?? label,
              required,
              showColon: !!label && withValues,
              children: label
            }), withValues && children]
          })
        }), !withValues && (0, import_jsx_runtime34.jsxs)(TableCell, {
          className: classNames19.dialogActiveCell,
          "data-component-name": "FilterBarDialogTableCellActive",
          children: [isListView && withReordering && (0, import_jsx_runtime34.jsxs)(FlexBox, {
            fitContainer: true,
            justifyContent: FlexBoxJustifyContent.Center,
            alignItems: FlexBoxAlignItems.Center,
            className: classNames19.reorderBtnsContainer,
            "data-component-name": "FilterBarDialogTableCellReorderBtns",
            children: [(0, import_jsx_runtime34.jsx)(Button, {
              onClick: handleReorder,
              design: ButtonDesign_default.Transparent,
              icon: collapse_group_default,
              "data-reorder": "top",
              disabled: itemPosition === "first",
              tooltip: `${i18nBundle.getText(MOVE_TO_TOP, ` (${isomporphicReorderKey}+Home)`)})`,
              "data-component-name": "FilterBarDialogReorderBtnTop"
            }), (0, import_jsx_runtime34.jsx)(Button, {
              onClick: handleReorder,
              design: ButtonDesign_default.Transparent,
              icon: navigation_up_arrow_default,
              "data-reorder": "up",
              disabled: itemPosition === "first",
              tooltip: `${i18nBundle.getText(MOVE_UP, ` (${isomporphicReorderKey}+${i18nBundle.getText(UP_ARROW)})`)}`,
              "data-component-name": "FilterBarDialogReorderBtnUp"
            }), (0, import_jsx_runtime34.jsx)(Button, {
              onClick: handleReorder,
              design: ButtonDesign_default.Transparent,
              icon: navigation_down_arrow_default,
              "data-reorder": "down",
              disabled: itemPosition === "last",
              tooltip: `${i18nBundle.getText(MOVE_DOWN, ` (${isomporphicReorderKey}+${i18nBundle.getText(DOWN_ARROW)})`)}`,
              "data-component-name": "FilterBarDialogReorderBtnDown"
            }), (0, import_jsx_runtime34.jsx)(Button, {
              onClick: handleReorder,
              design: ButtonDesign_default.Transparent,
              icon: expand_group_default,
              "data-reorder": "bottom",
              disabled: itemPosition === "last",
              tooltip: `${i18nBundle.getText(MOVE_TO_BOTTOM, ` (${isomporphicReorderKey}+End`)})`,
              "data-component-name": "FilterBarDialogReorderBtnBottom"
            })]
          }), active && (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, {
            children: [(0, import_jsx_runtime34.jsx)(Icon, {
              name: circle_task_2_default,
              className: classNames19.dialogActiveIcon,
              "aria-hidden": true
            }), (0, import_jsx_runtime34.jsx)("span", {
              className: classNames19.pseudoInvisibleText,
              children: i18nBundle.getText(FILTER_IS_ACTIVE)
            })]
          })]
        })]
      }, reactKey)
    );
  }
  const labelWithGroupName = considerGroupName && groupName !== "default" ? `${label} (${groupName})` : label;
  return (0, import_jsx_runtime34.jsx)("div", __spreadProps(__spreadValues({
    ref,
    slot
  }, rest), {
    "data-order-id": orderId,
    className: clsx(classNames19.filterItem, className),
    children: (0, import_jsx_runtime34.jsxs)("div", {
      className: classNames19.innerFilterItemContainer,
      children: [(0, import_jsx_runtime34.jsx)(FlexBox, {
        children: (0, import_jsx_runtime34.jsx)(Label, {
          title: labelTooltip ?? label,
          required,
          showColon: !!label,
          children: labelWithGroupName
        })
      }), loading ? (0, import_jsx_runtime34.jsx)(BusyIndicator, {
        className: classNames19.loadingContainer,
        active: true,
        size: BusyIndicatorSize_default.S
      }) : children]
    })
  }));
});
FilterGroupItem.displayName = "FilterGroupItem";

// node_modules/@ui5/webcomponents-react/dist/components/ToolbarSpacer/index.js
var import_react41 = __toESM(require_react(), 1);
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var ToolbarSpacer2 = (0, import_react41.forwardRef)((props, ref) => {
  return (0, import_jsx_runtime35.jsx)("span", __spreadProps(__spreadValues({
    ref,
    style: {
      flexGrow: 1
    },
    className: "spacer"
  }, props), {
    "data-component-name": "ToolbarSpacer"
  }));
});
ToolbarSpacer2.displayName = "ToolbarSpacer";

// node_modules/@ui5/webcomponents-react/dist/components/FilterBar/FilterBar.module.css.js
var styleData20 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "FilterBar.module.css",
  content: ".FilterBar_outerContainer_ghrd0_1{background:var(--sapObjectHeader_Background)}.FilterBar_outerContainerWithToolbar_ghrd0_5{box-shadow:var(--sapContent_HeaderShadow);padding-block:.5rem 1px;padding-inline:2rem}.FilterBar_filterBarHeader_ghrd0_11{align-items:center;background:var(--sapObjectHeader_Background);box-shadow:none;display:flex;flex-wrap:wrap;min-height:3rem;padding-block-end:.5rem}.FilterBar_filterBarHeader_ghrd0_11 [data-component-name=ToolbarContent]>:first-child{margin-inline-start:0}.FilterBar_filterArea_ghrd0_25{align-items:center;background:var(--sapObjectHeader_Background);display:flex;flex-wrap:wrap;margin-block-end:1rem;padding-block-start:1rem;transition:max-height .2s ease-out,opacity .2s ease-in}.FilterBar_filterAreaClosed_ghrd0_37{margin:0;max-height:0;opacity:0;overflow-y:auto;padding:0}.FilterBar_filterAreaOpen_ghrd0_45{opacity:1}.FilterBar_showFiltersBtn_ghrd0_49{min-width:108px}.FilterBar_filterBarButtons_ghrd0_53{align-items:center;display:flex;inset-inline:auto 0;margin-block-end:1rem;margin-inline-end:1rem;position:absolute}.FilterBar_filterBarButtons_ghrd0_53>:not(:first-child){margin-inline-start:.25rem}.FilterBar_filterBarButtons_ghrd0_53>:not(:last-child){margin-inline-end:.25rem}.FilterBar_searchContainer_ghrd0_70>[ui5-input]{width:100%}.FilterBar_spacer_ghrd0_76{flex-basis:calc(var(--_ui5wcr_filter_group_item_flex_basis));flex-grow:1;flex-shrink:0;height:0;margin-block-start:0;margin-inline-end:1rem;max-width:calc(var(--_ui5wcr_filter_group_item_flex_basis)*2)}.FilterBar_lastSpacer_ghrd0_86{flex-basis:calc(var(--_ui5wcr_filter_group_item_flex_basis));flex-grow:1;flex-shrink:0;height:var(--_ui5wcr-ElementHeight);margin-inline-end:1rem;max-width:calc(var(--_ui5wcr_filter_group_item_flex_basis)*2)}"
};
var classNames20 = {
  "outerContainer": "FilterBar_outerContainer_ghrd0_1",
  "outerContainerWithToolbar": "FilterBar_outerContainerWithToolbar_ghrd0_5",
  "filterBarHeader": "FilterBar_filterBarHeader_ghrd0_11",
  "filterArea": "FilterBar_filterArea_ghrd0_25",
  "filterAreaClosed": "FilterBar_filterAreaClosed_ghrd0_37",
  "filterAreaOpen": "FilterBar_filterAreaOpen_ghrd0_45",
  "showFiltersBtn": "FilterBar_showFiltersBtn_ghrd0_49",
  "filterBarButtons": "FilterBar_filterBarButtons_ghrd0_53",
  "searchContainer": "FilterBar_searchContainer_ghrd0_70",
  "spacer": "FilterBar_spacer_ghrd0_76",
  "lastSpacer": "FilterBar_lastSpacer_ghrd0_86"
};

// node_modules/@ui5/webcomponents/dist/types/BarDesign.js
var BarDesign;
(function(BarDesign2) {
  BarDesign2["Header"] = "Header";
  BarDesign2["Subheader"] = "Subheader";
  BarDesign2["Footer"] = "Footer";
  BarDesign2["FloatingFooter"] = "FloatingFooter";
})(BarDesign || (BarDesign = {}));
var BarDesign_default = BarDesign;

// node_modules/@ui5/webcomponents-icons/dist/v4/list.js
var name17 = "list";
var pathData17 = "M79.5 64q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm0 96q-16 0-16 16t16 16 16-16-16-16zm96-352q-16 0-16-16t16-16h257q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257zm257 64q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257zm0 96q6 0 11 4.5t5 11.5-5 11.5-11 4.5h-257q-16 0-16-16t16-16h257z";
var ltr17 = false;
var collection17 = "SAP-icons-v4";
var packageName17 = "@ui5/webcomponents-icons";
registerIcon(name17, { pathData: pathData17, ltr: ltr17, collection: collection17, packageName: packageName17 });

// node_modules/@ui5/webcomponents-icons/dist/v5/list.js
var name18 = "list";
var pathData18 = "M454 83H186q-11 0-18.5-7T160 58t7.5-18.5T186 32h268q11 0 18.5 7.5T480 58t-7.5 18-18.5 7zM64 32q13 0 22.5 9.5T96 64t-9.5 22.5T64 96t-22.5-9.5T32 64t9.5-22.5T64 32zm0 128q13 0 22.5 9.5T96 192t-9.5 22.5T64 224t-22.5-9.5T32 192t9.5-22.5T64 160zm390 51H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 160h268q11 0 18.5 7.5T480 186t-7.5 18-18.5 7zm0 128H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 288h268q11 0 18.5 7.5T480 314t-7.5 18-18.5 7zM64 288q13 0 22.5 9.5T96 320t-9.5 22.5T64 352t-22.5-9.5T32 320t9.5-22.5T64 288zm390 179H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 416h268q11 0 18.5 7.5T480 442t-7.5 18-18.5 7zM64 416q13 0 22.5 9.5T96 448t-9.5 22.5T64 480t-22.5-9.5T32 448t9.5-22.5T64 416z";
var ltr18 = false;
var collection18 = "SAP-icons-v5";
var packageName18 = "@ui5/webcomponents-icons";
registerIcon(name18, { pathData: pathData18, ltr: ltr18, collection: collection18, packageName: packageName18 });

// node_modules/@ui5/webcomponents-icons/dist/list.js
var list_default = "list";

// node_modules/@ui5/webcomponents-react/dist/components/FilterBar/FilterDialog.js
var import_react44 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/MessageBox/index.js
var import_react42 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/MessageBox/MessageBox.module.css.js
var styleData21 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "MessageBox.module.css",
  content: ".MessageBox_messageBox_13pdm_1[data-type=Confirm]::part(header){box-shadow:inset 0 -.0625rem var(--sapNeutralBorderColor),var(--sapContent_HeaderShadow)}.MessageBox_messageBox_13pdm_1[data-type=Confirm] .MessageBox_header_13pdm_8{--sapContent_NonInteractiveIconColor:var(--sapNeutralElementColor)}.MessageBox_header_13pdm_8{align-items:center;border-bottom:1px solid var(--messageBoxBorderColor);box-sizing:border-box;color:var(--sapContent_LabelColor);display:flex;font-size:1rem;height:var(--_ui5wcr-BarHeight);text-align:center;width:100%}.MessageBox_header_13pdm_8 [ui5-icon]:first-child{height:1rem;width:1rem}.MessageBox_header_13pdm_8 [ui5-title]{font-size:1rem}.MessageBox_spacer_13pdm_34{width:.5rem}.MessageBox_confirmIcon_13pdm_38{color:var(--sapNeutralColor)}.MessageBox_footer_13pdm_42{align-items:center;display:flex;height:var(--_ui5wcr-BarHeight);justify-content:flex-end;width:100%}.MessageBox_footer_13pdm_42>*{margin:0 .25rem}.MessageBox_footer_13pdm_42>[ui5-button]{display:flex;min-width:4rem}"
};
var classNames21 = {
  "messageBox": "MessageBox_messageBox_13pdm_1",
  "header": "MessageBox_header_13pdm_8",
  "spacer": "MessageBox_spacer_13pdm_34",
  "confirmIcon": "MessageBox_confirmIcon_13pdm_38",
  "footer": "MessageBox_footer_13pdm_42"
};

// node_modules/@ui5/webcomponents-react/dist/components/MessageBox/index.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var getIcon = (icon, type, classes) => {
  if ((0, import_react42.isValidElement)(icon)) return icon;
  switch (type) {
    case MessageBoxType.Confirm:
      return (0, import_jsx_runtime36.jsx)(Icon, {
        name: sys_help_2_default,
        mode: IconMode_default.Decorative,
        className: classes.confirmIcon
      });
    default:
      return null;
  }
};
var convertMessageBoxTypeToState = (type) => {
  switch (type) {
    case MessageBoxType.Information:
      return ValueState_default.Information;
    case MessageBoxType.Success:
      return ValueState_default.Positive;
    case MessageBoxType.Warning:
      return ValueState_default.Critical;
    case MessageBoxType.Error:
      return ValueState_default.Negative;
    default:
      return ValueState_default.None;
  }
};
var getActions = (actions3, type) => {
  if (actions3 && actions3.length > 0) {
    return actions3;
  }
  if (type === MessageBoxType.Confirm) {
    return [MessageBoxAction.OK, MessageBoxAction.Cancel];
  }
  if (type === MessageBoxType.Error) {
    return [MessageBoxAction.Close];
  }
  return [MessageBoxAction.OK];
};
var MessageBox = (0, import_react42.forwardRef)((props, ref) => {
  const _a = props, {
    open,
    type = MessageBoxType.Confirm,
    children,
    className,
    titleText,
    icon,
    actions: actions3 = [],
    emphasizedAction = MessageBoxAction.OK,
    onClose,
    initialFocus
  } = _a, rest = __objRest(_a, [
    "open",
    "type",
    "children",
    "className",
    "titleText",
    "icon",
    "actions",
    "emphasizedAction",
    "onClose",
    "initialFocus"
  ]);
  useStylesheet(styleData21, MessageBox.displayName);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const actionTranslations = {
    [MessageBoxAction.Abort]: i18nBundle.getText(ABORT),
    [MessageBoxAction.Cancel]: i18nBundle.getText(CANCEL),
    [MessageBoxAction.Close]: i18nBundle.getText(CLOSE),
    [MessageBoxAction.Delete]: i18nBundle.getText(DELETE),
    [MessageBoxAction.Ignore]: i18nBundle.getText(IGNORE),
    [MessageBoxAction.No]: i18nBundle.getText(NO),
    [MessageBoxAction.OK]: i18nBundle.getText(OK),
    [MessageBoxAction.Retry]: i18nBundle.getText(RETRY),
    [MessageBoxAction.Yes]: i18nBundle.getText(YES)
  };
  const titleToRender = () => {
    if (titleText) {
      return titleText;
    }
    switch (type) {
      case MessageBoxType.Confirm:
        return i18nBundle.getText(CONFIRMATION);
      case MessageBoxType.Error:
        return i18nBundle.getText(ERROR);
      case MessageBoxType.Information:
        return i18nBundle.getText(INFORMATION);
      case MessageBoxType.Success:
        return i18nBundle.getText(SUCCESS);
      case MessageBoxType.Warning:
        return i18nBundle.getText(WARNING);
      default:
        return null;
    }
  };
  const handleDialogClose = (e) => {
    if (typeof props.onBeforeClose === "function") {
      props.onBeforeClose(e);
    }
    if (e.detail.escPressed) {
      onClose(void 0, e.detail.escPressed);
    }
  };
  const handleOnClose = (e) => {
    const {
      action
    } = e.currentTarget.dataset;
    onClose(action);
  };
  const messageBoxId = useIsomorphicId();
  const internalActions = getActions(actions3, type);
  const getInitialFocus = () => {
    const actionToFocus = internalActions.find((action) => action === initialFocus);
    if (typeof actionToFocus === "string") {
      return `${messageBoxId}-action-${actionToFocus}`;
    }
    return initialFocus;
  };
  const _b = rest, {
    footer: _0,
    headerText: _1,
    onClose: _2,
    onBeforeClose: _3
  } = _b, restWithoutOmitted = __objRest(_b, [
    "footer",
    "headerText",
    "onClose",
    "onBeforeClose"
  ]);
  const iconToRender = getIcon(icon, type, classNames21);
  const needsCustomHeader = !props.header && !!iconToRender;
  return (0, import_jsx_runtime36.jsxs)(Dialog, __spreadProps(__spreadValues({
    open,
    ref,
    className: clsx(classNames21.messageBox, className),
    onBeforeClose: handleDialogClose,
    accessibleNameRef: needsCustomHeader ? `${messageBoxId}-title ${messageBoxId}-text` : void 0,
    accessibleRole: PopupAccessibleRole_default.AlertDialog
  }, restWithoutOmitted), {
    headerText: titleToRender(),
    state: convertMessageBoxTypeToState(type),
    initialFocus: getInitialFocus(),
    "data-type": type,
    children: [needsCustomHeader && (0, import_jsx_runtime36.jsxs)("div", {
      slot: "header",
      className: classNames21.header,
      children: [iconToRender, iconToRender && (0, import_jsx_runtime36.jsx)("span", {
        className: classNames21.spacer
      }), (0, import_jsx_runtime36.jsx)(Title, {
        id: `${messageBoxId}-title`,
        level: TitleLevel_default.H1,
        children: titleToRender()
      })]
    }), (0, import_jsx_runtime36.jsx)(Text, {
      id: `${messageBoxId}-text`,
      children
    }), (0, import_jsx_runtime36.jsx)("div", {
      slot: "footer",
      className: classNames21.footer,
      children: internalActions.map((action, index) => {
        if (typeof action !== "string" && (0, import_react42.isValidElement)(action)) {
          return (0, import_react42.cloneElement)(action, {
            onClick: action?.props?.onClick ? (e) => {
              action?.props?.onClick(e);
              handleOnClose(e);
            } : handleOnClose,
            "data-action": action?.props?.["data-action"] ?? `${index}: custom action`
          });
        }
        if (typeof action === "string") {
          return (0, import_jsx_runtime36.jsx)(Button, {
            id: `${messageBoxId}-action-${action}`,
            design: emphasizedAction === action ? ButtonDesign_default.Emphasized : ButtonDesign_default.Transparent,
            onClick: handleOnClose,
            "data-action": action,
            children: actionTranslations[action] ?? action
          }, `${action}-${index}`);
        }
        return null;
      })
    })]
  }));
});
MessageBox.displayName = "MessageBox";

// node_modules/@ui5/webcomponents-react/dist/components/FilterBar/FilterBarDialog.module.css.js
var styleData22 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "FilterBarDialog.module.css",
  content: ".FilterBarDialog_tHactive_1cgmr_1{width:25%}.FilterBarDialog_tHactive_1cgmr_1::part(column){text-align:center}.FilterBarDialog_groupedTableHeader_1cgmr_9{display:none}.FilterBarDialog_tableInGroup_1cgmr_13 [ui5-table-row]:last-child{border-bottom:none}.FilterBarDialog_groupPanel_1cgmr_17::part(content){padding:0}.FilterBarDialog_searchInputContainer_1cgmr_23{height:var(--_ui5wcr-ToolbarHeight);padding-bottom:.25rem}.FilterBarDialog_searchInput_1cgmr_23{width:100%}.FilterBarDialog_dialogComponent_1cgmr_32{height:55rem;width:40rem}.FilterBarDialog_dialogComponent_1cgmr_32::part(content),.FilterBarDialog_dialogComponent_1cgmr_32::part(footer),.FilterBarDialog_dialogComponent_1cgmr_32::part(header){padding:0}.FilterBarDialog_dialogComponent_1cgmr_32[data-is-phone=true]{border-radius:0;height:100%;inset-block-start:0;inset-inline-start:0;max-height:100%;max-width:100%;width:100%}.FilterBarDialog_header_1cgmr_53{padding-block:.25rem 0;padding-inline:1rem;width:100%}.FilterBarDialog_header_1cgmr_53 *{margin-block:.25rem;margin-inline:0}.FilterBarDialog_header_1cgmr_53 [ui5-input]{width:100%}.FilterBarDialog_subheaderContainer_1cgmr_68{box-shadow:var(--sapContent_HeaderShadow);padding-block:0;padding-inline:1rem}.FilterBarDialog_subheader_1cgmr_68{padding-block-end:.25rem}.FilterBarDialog_subheader_1cgmr_68 [data-component-name=ToolbarContent]>:last-child{margin:0}.FilterBarDialog_subheader_1cgmr_68 [data-component-name=ToolbarContent]>:first-child{margin-inline:0 .25rem}.FilterBarDialog_footer_1cgmr_86 :not(:last-child){margin-inline-end:.25rem}"
};
var classNames22 = {
  "tHactive": "FilterBarDialog_tHactive_1cgmr_1",
  "groupedTableHeader": "FilterBarDialog_groupedTableHeader_1cgmr_9",
  "tableInGroup": "FilterBarDialog_tableInGroup_1cgmr_13",
  "groupPanel": "FilterBarDialog_groupPanel_1cgmr_17",
  "searchInputContainer": "FilterBarDialog_searchInputContainer_1cgmr_23",
  "searchInput": "FilterBarDialog_searchInput_1cgmr_23",
  "dialogComponent": "FilterBarDialog_dialogComponent_1cgmr_32",
  "header": "FilterBarDialog_header_1cgmr_53",
  "subheaderContainer": "FilterBarDialog_subheaderContainer_1cgmr_68",
  "subheader": "FilterBarDialog_subheader_1cgmr_68",
  "footer": "FilterBarDialog_footer_1cgmr_86"
};

// node_modules/@ui5/webcomponents-react/dist/components/FilterBar/utils.js
var import_react43 = __toESM(require_react(), 1);
var inputTagNames = /* @__PURE__ */ new Set(["UI5-COMBOBOX", "UI5-DATE-PICKER", "UI5-DATERANGE-PICKER", "UI5-DATETIME-PICKER", "UI5-DURATION-PICKER", "UI5-INPUT", "UI5-MULTI-INPUT", "UI5-RATING-INDICATOR", "UI5-STEP-INPUT", "UI5-TIME-PICKER"]);
var filterValue = (ref, child) => {
  const tagName = ref.tagName;
  const tagNameWithoutSuffix = getTagNameWithoutScopingSuffix(tagName);
  let filterItemProps = {};
  if (inputTagNames.has(tagNameWithoutSuffix)) {
    filterItemProps = {
      value: ref.value ?? ""
    };
  }
  if (tagNameWithoutSuffix === "UI5-SELECT" || tagNameWithoutSuffix === "UI5-MULTI-COMBOBOX") {
    const filterChildren = child.props.children.props.children;
    let options = void 0;
    if (filterChildren) {
      const selectedIndices = Array.from(ref.children).map((item, index) => item.selected ? index : false).filter((el) => el !== false);
      const selectedIndicesSet = new Set(selectedIndices);
      const filterChildrenArr = Array.isArray(filterChildren) ? filterChildren : [filterChildren];
      options = filterChildrenArr.map((item, index) => {
        if (selectedIndicesSet.has(index)) {
          return (0, import_react43.cloneElement)(item, {
            selected: true
          });
        }
        return (0, import_react43.cloneElement)(item, {
          selected: false
        });
      });
    }
    filterItemProps = {
      children: options
    };
  }
  if (tagNameWithoutSuffix === "UI5-SWITCH" || tagNameWithoutSuffix === "UI5-CHECKBOX") {
    filterItemProps = {
      checked: ref.checked
    };
  }
  return filterItemProps;
};
var renderSearchWithValue = (renderSearchElement, searchValue, defaultProps = {}) => {
  const props = __spreadValues(__spreadValues({}, defaultProps), renderSearchElement?.props);
  return (0, import_react43.cloneElement)(renderSearchElement, __spreadProps(__spreadValues({}, props), {
    "data-component-name": "FilterBarSearch",
    value: searchValue ?? renderSearchElement?.props?.value
  }));
};
var syncRef = (ref, node) => {
  if (ref) {
    if (typeof ref === "function") {
      ref(node);
    } else if (ref.hasOwnProperty("current")) {
      ref.current = node;
    }
  }
};

// node_modules/@ui5/webcomponents-react/dist/components/FilterBar/FilterDialog.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
addCustomCSSWithScoping("ui5-table", `
:host([data-component-name="FilterBarDialogTable"][data-is-grouped]) #nodata-row {
  display: none;
}
`);
addCustomCSSWithScoping("ui5-table-header-row", `
:host([data-component-name="FilterBarDialogTableHeaderRow"]) :first-child {
  visibility: hidden;
}
`);
var getActiveFilters = (activeFilterAttribute, filter) => {
  switch (activeFilterAttribute) {
    case "all":
      return true;
    case "visible":
      return filter.props?.hiddenInFilterBar !== true;
    case "active":
      return filter.props?.active;
    case "visibleAndActive":
      return filter.props?.hiddenInFilterBar !== true && filter.props?.active;
    case "mandatory":
      return filter.props?.required;
    default:
      return true;
  }
};
var compareObjects = (firstObj, secondObj) => Object.keys(firstObj).find((first) => Object.keys(secondObj).every((second) => firstObj[second] !== secondObj[first]));
var FilterDialog = (props) => {
  const {
    filterBarRefs,
    open,
    handleDialogClose,
    children,
    showRestoreButton,
    handleRestoreFilters,
    handleDialogSave,
    handleSelectionChange,
    handleDialogSearch,
    handleDialogCancel,
    onAfterFiltersDialogOpen,
    portalContainer,
    dialogRef,
    enableReordering,
    isPhone: isPhone4
  } = props;
  useStylesheet(styleData22, "FilterBarDialog");
  const uniqueId = useIsomorphicId();
  const [searchString, setSearchString] = (0, import_react44.useState)("");
  const [toggledFilters, setToggledFilters] = (0, import_react44.useState)({});
  const dialogRefs = (0, import_react44.useRef)({});
  const dialogSearchRef = (0, import_react44.useRef)(null);
  const [showValues, toggleValues] = (0, import_react44.useReducer)((prev) => !prev, false);
  const [messageBoxOpen, setMessageBoxOpen] = (0, import_react44.useState)(false);
  const [forceRequired, setForceRequired] = (0, import_react44.useState)();
  const [showBtnsOnHover, setShowBtnsOnHover] = (0, import_react44.useState)(true);
  const [isListView, setIsListView] = (0, import_react44.useState)(true);
  const [filteredAttribute, setFilteredAttribute] = (0, import_react44.useState)("all");
  const [currentReorderedItem, setCurrentReorderedItem] = (0, import_react44.useState)({});
  const tableRef = (0, import_react44.useRef)(null);
  const okBtnRef = (0, import_react44.useRef)(null);
  const handleReorder = (e) => {
    setCurrentReorderedItem(e);
  };
  const prevOderId = (0, import_react44.useRef)(void 0);
  const handleFocusFallback = () => {
    const orderId = currentReorderedItem?.target?.dataset.orderId;
    if (orderId && tableRef.current && orderId !== prevOderId.current) {
      setTimeout(() => {
        const itemNav = tableRef.current._itemNavigation;
        itemNav._getItems = () => Array.from(tableRef.current.querySelectorAll("[ui5-table-row]"));
        itemNav.setCurrentItem(tableRef.current.querySelector(`[data-order-id="${orderId}"]`));
      });
      prevOderId.current = orderId;
    }
  };
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const basicText = i18nBundle.getText(BASIC);
  const cancelText = i18nBundle.getText(CANCEL);
  const okText = i18nBundle.getText(OK);
  const searchForFiltersText = i18nBundle.getText(SEARCH_FOR_FILTERS);
  const filtersTitle = i18nBundle.getText(FILTERS);
  const resetText = i18nBundle.getText(RESET);
  const allText = i18nBundle.getText(ALL);
  const activeText = i18nBundle.getText(ACTIVE);
  const visibleText = i18nBundle.getText(VISIBLE);
  const visibleAndActiveText = i18nBundle.getText(VISIBLE_AND_ACTIVE);
  const mandatoryText = i18nBundle.getText(MANDATORY);
  const listViewText = i18nBundle.getText(LIST_VIEW);
  const groupViewText = i18nBundle.getText(GROUP_VIEW);
  const showValuesText = i18nBundle.getText(SHOW_VALUES);
  const hideValuesText = i18nBundle.getText(HIDE_VALUES);
  const filterText = i18nBundle.getText(FILTER);
  const fieldsByAttributeText = i18nBundle.getText(FIELDS_BY_ATTRIBUTE);
  const visibleChildren = () => children.filter((item) => {
    return !!item?.props && !item?.props?.hidden;
  });
  const [orderedChildren, setOrderedChildren] = (0, import_react44.useState)([]);
  (0, import_react44.useEffect)(() => {
    if (children.length) {
      setOrderedChildren(visibleChildren());
    }
  }, [children]);
  const renderChildren = () => {
    const searchStringLower = searchString.toLowerCase();
    const filteredChildren = searchStringLower.length > 0 || filteredAttribute !== "all" ? orderedChildren.filter((item) => (searchStringLower === "" || item.props.label?.toLowerCase().includes(searchStringLower)) && getActiveFilters(filteredAttribute, item)) : orderedChildren;
    return filteredChildren.map((child, index) => {
      const filterBarItemRef = filterBarRefs.current[child.key];
      let isSelected = child.props.hiddenInFilterBar !== true || child.props.required || child.type.displayName !== "FilterGroupItem";
      if (toggledFilters.hasOwnProperty(child.key)) {
        isSelected = toggledFilters[child.key];
      }
      const filterItemProps = filterBarItemRef ? filterValue(filterBarItemRef, child) : {};
      return (0, import_react44.cloneElement)(child, {
        "data-selected": isSelected,
        "data-react-key": child.key,
        "data-index": index,
        children: __spreadProps(__spreadValues({}, child.props.children), {
          props: __spreadValues(__spreadValues({}, child.props.children.props || {}), filterItemProps),
          ref: (node) => {
            if (node) {
              dialogRefs.current[child.key] = node;
              syncRef(child.props.children.ref, node);
            }
          }
        })
      });
    });
  };
  const handleSearch = (e) => {
    if (typeof handleDialogSearch === "function") {
      handleDialogSearch(enrichEventWithDetails(e, {
        value: e.target.value,
        element: e.target
      }));
    }
    setSearchString(e.target.value);
  };
  const handleSave = (e) => {
    const orderedChildrenIds = enableReordering ? orderedChildren.map((child) => child.props.orderId) : [];
    handleDialogSave(e, dialogRefs.current, toggledFilters, orderedChildrenIds);
  };
  const handleClose = (e) => {
    setToggledFilters({});
    stopPropagation(e);
    if (typeof handleDialogCancel === "function") {
      handleDialogCancel(e);
    }
    handleDialogClose(e);
  };
  const handleCancel = (e) => {
    if (handleDialogCancel) {
      handleDialogCancel(e);
    }
    handleDialogClose(e);
  };
  const handleRestore = () => {
    setMessageBoxOpen(true);
  };
  const handleViewChange = (e) => {
    const selectedItem = e.detail.selectedItems.at(0);
    setIsListView(selectedItem.dataset.id === "list");
  };
  const handleMessageBoxClose = (e) => {
    if (e.detail.action === "OK") {
      setToggledFilters({});
      setOrderedChildren(visibleChildren());
      handleRestoreFilters(e, "dialog", {
        filters: Array.from(dialogRef.current.querySelectorAll("ui5-table-row"))
      });
    }
    setMessageBoxOpen(false);
    okBtnRef.current.focus();
  };
  const [updatedIndex, setUpdatedIndex] = (0, import_react44.useState)(void 0);
  (0, import_react44.useEffect)(() => {
    if (currentReorderedItem?.index != null) {
      setOrderedChildren((prev) => {
        const {
          index,
          direction
        } = currentReorderedItem;
        switch (direction) {
          case "up":
            if (index > 0) {
              setUpdatedIndex(index - 1);
              const temp = prev[index];
              prev[index] = prev[index - 1];
              prev[index - 1] = temp;
            }
            break;
          case "down":
            if (index < prev.length - 1) {
              setUpdatedIndex(index + 1);
              const temp = prev[index];
              prev[index] = prev[index + 1];
              prev[index + 1] = temp;
            }
            break;
          case "top":
            if (index > 0) {
              setUpdatedIndex(0);
              const item = prev.splice(index, 1)[0];
              prev.unshift(item);
            }
            break;
          case "bottom":
            if (index < prev.length - 1) {
              setUpdatedIndex(prev.length - 1);
              const item = prev.splice(index, 1)[0];
              prev.push(item);
            }
            break;
        }
        return [...prev];
      });
      void currentReorderedItem.target.focus();
    }
  }, [currentReorderedItem]);
  (0, import_react44.useEffect)(() => {
    if (updatedIndex != null) {
      prevOderId.current = void 0;
    }
  }, [updatedIndex]);
  const handleAttributeFilterChange = (e) => {
    setFilteredAttribute(e.detail.selectedOption.dataset.id);
  };
  const handleCheckBoxChange = (e) => {
    if (e.target.hasAttribute("ui5-table")) {
      e.preventDefault();
      const prevRowsByKey = e.detail.previouslySelectedRows.reduce((acc, prevSelRow) => __spreadProps(__spreadValues({}, acc), {
        [prevSelRow.dataset.reactKey]: prevSelRow
      }), {});
      const rowsByKey = e.detail.selectedRows.reduce((acc, selRow) => __spreadProps(__spreadValues({}, acc), {
        [selRow.dataset.reactKey]: selRow
      }), {});
      const changedRowKey = e.detail.previouslySelectedRows > e.detail.selectedRows ? compareObjects(prevRowsByKey, rowsByKey) : compareObjects(rowsByKey, prevRowsByKey);
      const element = rowsByKey[changedRowKey] || prevRowsByKey[changedRowKey];
      if (element.dataset?.required === "true") {
        setForceRequired(element);
        return;
      }
      if (typeof handleSelectionChange === "function") {
        handleSelectionChange(enrichEventWithDetails(e, {
          element,
          checked: element.selected
        }));
      }
      setToggledFilters((prev) => {
        return __spreadProps(__spreadValues({}, prev), {
          [changedRowKey]: element.selected
        });
      });
    }
  };
  (0, import_react44.useEffect)(() => {
    if (forceRequired) {
      forceRequired.setAttribute("selected", "true");
      setForceRequired(void 0);
    }
  }, [forceRequired]);
  const canRenderPortal = useCanRenderPortal();
  if (!canRenderPortal) {
    return null;
  }
  const renderGroups = () => {
    const groups = {};
    import_react44.Children.forEach(renderChildren(), (child) => {
      const childGroups = child.props.groupName ?? "default";
      if (groups[childGroups]) {
        groups[childGroups].push(child);
      } else {
        groups[childGroups] = [child];
      }
    });
    const filterGroups = Object.keys(groups).sort((x, y) => x === "default" ? -1 : y === "role" ? 1 : 0).map((item, index) => {
      const selectedRows = groups[item].map((child) => child.props["data-react-key"]).join(" ");
      return (0, import_jsx_runtime37.jsx)(Panel, {
        headerText: item === "default" ? basicText : item,
        className: classNames22.groupPanel,
        children: (0, import_jsx_runtime37.jsx)(Table, {
          className: classNames22.tableInGroup,
          "data-component-name": "FilterBarDialogPanelTable",
          features: (0, import_jsx_runtime37.jsx)(TableSelection, {
            mode: TableSelectionMode_default.Multiple,
            selected: selectedRows,
            onChange: handleCheckBoxChange
          }),
          headerRow: (0, import_jsx_runtime37.jsxs)(TableHeaderRow, {
            className: classNames22.groupedTableHeader,
            children: [(0, import_jsx_runtime37.jsx)(TableHeaderCell, {
              children: filterText
            }), !showValues && (0, import_jsx_runtime37.jsx)(TableHeaderCell, {
              className: classNames22.tHactive,
              children: activeText
            })]
          }),
          children: groups[item]
        })
      }, `${item === "default" ? basicText : item}${index}`);
    });
    return filterGroups;
  };
  const currentReorderedItemOrderId = currentReorderedItem?.orderId;
  return (0, import_jsx_runtime37.jsxs)(FilterBarDialogContext.Provider, {
    value: {
      isFilterInDialog: true,
      enableReordering,
      onReorder: handleReorder,
      isListView,
      withValues: showValues,
      handleFocusFallback,
      showBtnsOnHover,
      setShowBtnsOnHover,
      currentReorderedItemOrderId
    },
    children: [(0, import_react_dom3.createPortal)((0, import_jsx_runtime37.jsxs)(Dialog, {
      open,
      ref: dialogRef,
      "data-component-name": "FilterBarDialog",
      "data-is-phone": isPhone4,
      onClose: handleClose,
      onOpen: onAfterFiltersDialogOpen,
      resizable: true,
      draggable: true,
      className: classNames22.dialogComponent,
      preventFocusRestore: true,
      initialFocus: `${uniqueId}-fb-dialog-search`,
      header: (0, import_jsx_runtime37.jsx)(Bar, {
        design: BarDesign_default.Header,
        startContent: (0, import_jsx_runtime37.jsx)(Title, {
          level: TitleLevel_default.H4,
          title: filtersTitle,
          children: filtersTitle
        }),
        endContent: showRestoreButton && (0, import_jsx_runtime37.jsx)(Button, {
          design: ButtonDesign_default.Transparent,
          onClick: handleRestore,
          children: resetText
        })
      }),
      footer: (0, import_jsx_runtime37.jsx)(Bar, {
        design: BarDesign_default.Footer,
        endContent: (0, import_jsx_runtime37.jsxs)(FlexBox, {
          justifyContent: FlexBoxJustifyContent.End,
          className: classNames22.footer,
          children: [(0, import_jsx_runtime37.jsx)(Button, {
            ref: okBtnRef,
            onClick: handleSave,
            "data-component-name": "FilterBarDialogSaveBtn",
            design: ButtonDesign_default.Emphasized,
            children: okText
          }), (0, import_jsx_runtime37.jsx)(Button, {
            design: ButtonDesign_default.Transparent,
            onClick: handleCancel,
            "data-component-name": "FilterBarDialogCancelBtn",
            children: cancelText
          })]
        })
      }),
      children: [(0, import_jsx_runtime37.jsxs)(FlexBox, {
        direction: FlexBoxDirection.Column,
        className: classNames22.subheaderContainer,
        children: [(0, import_jsx_runtime37.jsxs)(Toolbar2, {
          className: classNames22.subheader,
          toolbarStyle: "Clear",
          children: [(0, import_jsx_runtime37.jsxs)(Select, {
            onChange: handleAttributeFilterChange,
            title: fieldsByAttributeText,
            accessibleName: fieldsByAttributeText,
            children: [(0, import_jsx_runtime37.jsx)(Option, {
              selected: filteredAttribute === "all",
              "data-id": "all",
              children: allText
            }), (0, import_jsx_runtime37.jsx)(Option, {
              selected: filteredAttribute === "visible",
              "data-id": "visible",
              children: visibleText
            }), (0, import_jsx_runtime37.jsx)(Option, {
              selected: filteredAttribute === "active",
              "data-id": "active",
              children: activeText
            }), (0, import_jsx_runtime37.jsx)(Option, {
              selected: filteredAttribute === "visibleAndActive",
              "data-id": "visibleAndActive",
              children: visibleAndActiveText
            }), (0, import_jsx_runtime37.jsx)(Option, {
              selected: filteredAttribute === "mandatory",
              "data-id": "mandatory",
              children: mandatoryText
            })]
          }), (0, import_jsx_runtime37.jsx)(ToolbarSpacer2, {}), (0, import_jsx_runtime37.jsx)(Button, {
            design: ButtonDesign_default.Transparent,
            onClick: toggleValues,
            "aria-live": "polite",
            children: showValues ? hideValuesText : showValuesText
          }), (0, import_jsx_runtime37.jsxs)(SegmentedButton, {
            onSelectionChange: handleViewChange,
            children: [(0, import_jsx_runtime37.jsx)(SegmentedButtonItem, {
              icon: list_default,
              "data-id": "list",
              selected: isListView,
              accessibleName: listViewText
            }), (0, import_jsx_runtime37.jsx)(SegmentedButtonItem, {
              icon: group_2_default,
              "data-id": "group",
              selected: !isListView,
              accessibleName: groupViewText
            })]
          })]
        }), (0, import_jsx_runtime37.jsx)(FlexBox, {
          className: classNames22.searchInputContainer,
          children: (0, import_jsx_runtime37.jsx)(Input, {
            id: `${uniqueId}-fb-dialog-search`,
            noTypeahead: true,
            placeholder: searchForFiltersText,
            onInput: handleSearch,
            showClearIcon: true,
            icon: (0, import_jsx_runtime37.jsx)(Icon, {
              name: search_default
            }),
            ref: dialogSearchRef,
            className: classNames22.searchInput,
            "data-component-name": "FilterBarDialogSearchInput"
          })
        })]
      }), (0, import_jsx_runtime37.jsx)(Table, {
        ref: tableRef,
        "data-component-name": "FilterBarDialogTable",
        "data-is-grouped": !isListView,
        nodata: !isListView ? (0, import_jsx_runtime37.jsx)("span", {}) : void 0,
        tabIndex: !isListView ? -1 : void 0,
        features: (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, {
          children: (0, import_jsx_runtime37.jsx)(TableSelection, {
            mode: TableSelectionMode_default.Multiple,
            onChange: handleCheckBoxChange
          })
        }),
        headerRow: (0, import_jsx_runtime37.jsxs)(TableHeaderRow, {
          "data-component-name": "FilterBarDialogTableHeaderRow",
          children: [(0, import_jsx_runtime37.jsx)(TableHeaderCell, {
            children: filterText
          }), !showValues && (0, import_jsx_runtime37.jsx)(TableHeaderCell, {
            className: classNames22.tHactive,
            children: activeText
          })]
        }),
        children: isListView && renderChildren()
      }), !isListView && renderGroups()]
    }), portalContainer ?? document.body), showRestoreButton && messageBoxOpen && (0, import_react_dom3.createPortal)((0, import_jsx_runtime37.jsx)(MessageBox, {
      open: true,
      type: MessageBoxType.Warning,
      actions: [MessageBoxAction.OK, MessageBoxAction.Cancel],
      onClose: handleMessageBoxClose,
      "data-component-name": "FilterBarDialogResetMessageBox",
      children: i18nBundle.getText(FILTER_DIALOG_RESET_WARNING)
    }), portalContainer ?? document.body)]
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/FilterBar/index.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var isPhone3 = Device_exports.isPhone();
var isTablet2 = Device_exports.isTablet();
var isDesktop2 = Device_exports.isDesktop();
var resizeObserverEntryWidth = (entry) => {
  if (entry.borderBoxSize) {
    return Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0]?.inlineSize : entry.borderBoxSize?.inlineSize;
  }
  return entry.target.getBoundingClientRect().width;
};
var FilterBar = (0, import_react45.forwardRef)((props, ref) => {
  const _a = props, {
    hideToolbar,
    filterBarCollapsed,
    considerGroupName,
    filterContainerWidth = "13.125rem",
    activeFiltersCount,
    showClearOnFB,
    showGoOnFB,
    hideFilterConfiguration,
    showRestoreOnFB,
    showResetButton,
    hideToggleFiltersButton,
    enableReordering,
    style,
    className,
    slot,
    search,
    header,
    as = "div",
    portalContainer,
    onToggleFilters,
    onFiltersDialogOpen,
    onAfterFiltersDialogOpen,
    onFiltersDialogCancel,
    onFiltersDialogClose,
    onFiltersDialogSave,
    onClear,
    onFiltersDialogSelectionChange,
    onFiltersDialogSearch,
    onGo,
    onRestore
  } = _a, rest = __objRest(_a, [
    "hideToolbar",
    "filterBarCollapsed",
    "considerGroupName",
    "filterContainerWidth",
    "activeFiltersCount",
    "showClearOnFB",
    "showGoOnFB",
    "hideFilterConfiguration",
    "showRestoreOnFB",
    "showResetButton",
    "hideToggleFiltersButton",
    "enableReordering",
    "style",
    "className",
    "slot",
    "search",
    "header",
    "as",
    "portalContainer",
    "onToggleFilters",
    "onFiltersDialogOpen",
    "onAfterFiltersDialogOpen",
    "onFiltersDialogCancel",
    "onFiltersDialogClose",
    "onFiltersDialogSave",
    "onClear",
    "onFiltersDialogSelectionChange",
    "onFiltersDialogSearch",
    "onGo",
    "onRestore"
  ]);
  const children = props.children;
  const initiallyShowFilters = (() => {
    if (!hideToolbar) {
      if (filterBarCollapsed !== void 0) {
        return filterBarCollapsed;
      }
      return !(isTablet2 && !isDesktop2);
    }
    return true;
  })();
  const [showFilters, setShowFilters] = (0, import_react45.useState)(initiallyShowFilters);
  const [mountFilters, setMountFilters] = (0, import_react45.useState)(true);
  const [dialogOpen, setDialogOpen] = (0, import_react45.useState)(false);
  const [searchValue, setSearchValue] = (0, import_react45.useState)(void 0);
  const [dialogRefs, setDialogRefs] = (0, import_react45.useState)({});
  const [toggledFilters, setToggledFilters] = (0, import_react45.useState)({});
  const searchRef = (0, import_react45.useRef)(null);
  const filterRefs = (0, import_react45.useRef)({});
  const dialogRef = (0, import_react45.useRef)(null);
  const prevVisibleInFilterBarProps = (0, import_react45.useRef)({});
  const prevSearchInputPropsValueRef = (0, import_react45.useRef)(void 0);
  const filterBarButtonsRef = (0, import_react45.useRef)(null);
  const filterAreaRef = (0, import_react45.useRef)(null);
  const filterBtnRef = (0, import_react45.useRef)(null);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const clearText = i18nBundle.getText(CLEAR);
  const restoreText = i18nBundle.getText(RESTORE);
  const showFilterBarText = i18nBundle.getText(SHOW_FILTER_BAR);
  const hideFilterBarText = i18nBundle.getText(HIDE_FILTER_BAR);
  const goText = i18nBundle.getText(GO);
  const searchText = i18nBundle.getText(SEARCH);
  const filtersText = !hideToolbar ? i18nBundle.getText(FILTERS) : i18nBundle.getText(ADAPT_FILTERS);
  (0, import_react45.useEffect)(() => {
    import_react45.Children.toArray(children).forEach((item) => {
      if ((0, import_react45.isValidElement)(item)) {
        const key = item.key;
        setToggledFilters((prev) => {
          if (!item.props.hasOwnProperty("hiddenInFilterBar") && prev?.[key] === void 0) {
            return __spreadProps(__spreadValues({}, prev), {
              [key]: true
            });
          }
          if (item.props.hasOwnProperty("hiddenInFilterBar")) {
            return __spreadProps(__spreadValues({}, prev), {
              [key]: item.props.hiddenInFilterBar !== true
            });
          }
          return prev;
        });
      }
    });
  }, [children, setToggledFilters]);
  (0, import_react45.useEffect)(() => {
    if (filterBarCollapsed !== void 0) {
      setShowFilters(!hideToolbar ? !filterBarCollapsed : true);
    }
  }, [setShowFilters, hideToolbar, filterBarCollapsed]);
  useStylesheet(styleData20, FilterBar.displayName);
  const filterAreaClasses = clsx(classNames20.filterArea, showFilters && (!isPhone3 || isPhone3 && hideToolbar) ? classNames20.filterAreaOpen : classNames20.filterAreaClosed);
  const getFilterElements = () => {
    const search2 = searchRef.current?.querySelector(`[data-component-name="FilterBarSearch"]`);
    return {
      filters: filterRefs?.current ? Object.values(filterRefs.current).filter(Boolean) : [],
      search: search2
    };
  };
  const handleToggle = (e) => {
    if (typeof onToggleFilters === "function") {
      onToggleFilters(enrichEventWithDetails(e, __spreadValues({
        visible: !showFilters
      }, getFilterElements())));
    }
    setShowFilters(!showFilters);
  };
  const [executeGo, setExecuteGo] = (0, import_react45.useState)(false);
  const handleDialogSave = (e, newRefs, updatedToggledFilters, orderIds) => {
    setDialogRefs(newRefs);
    const details = __spreadProps(__spreadValues({
      elements: newRefs,
      toggledElements: __spreadValues(__spreadValues({}, toggledFilters), updatedToggledFilters)
    }, getFilterElements()), {
      orderIds
    });
    setToggledFilters((old) => __spreadValues(__spreadValues({}, old), updatedToggledFilters));
    if (onFiltersDialogSave) {
      onFiltersDialogSave(enrichEventWithDetails(e, details));
    }
    handleDialogClose(e);
  };
  const handleDialogOpen = (e) => {
    if (typeof onFiltersDialogOpen === "function") {
      onFiltersDialogOpen(e);
    }
    if (e.defaultPrevented) {
      setDialogOpen(false);
    } else {
      setDialogOpen(true);
    }
  };
  const handleDialogClose = (e) => {
    if (onFiltersDialogClose) {
      onFiltersDialogClose(e);
    }
    setDialogOpen(false);
    void filterBtnRef.current?.focus();
  };
  const handleGoOnFb = (e) => {
    if (typeof onGo === "function") {
      onGo(enrichEventWithDetails(e, __spreadValues({
        elements: filterRefs.current
      }, getFilterElements())));
    }
  };
  const safeChildren = () => {
    if (Object.keys(toggledFilters).length > 0) {
      return import_react45.Children.toArray(children).map((child) => {
        if ((0, import_react45.isValidElement)(child)) {
          const key = child.key;
          if (toggledFilters?.[key] !== void 0) {
            return (0, import_react45.cloneElement)(child, {
              hiddenInFilterBar: !toggledFilters[key]
            });
          }
        }
        return child;
      });
    }
    return import_react45.Children.toArray(children);
  };
  const prevChildren = (0, import_react45.useRef)({});
  const renderChildren = () => {
    const childProps = {
      considerGroupName,
      ["data-with-toolbar"]: !hideToolbar
    };
    return safeChildren().filter((item) => {
      if (!(0, import_react45.isValidElement)(item)) {
        return false;
      }
      return (typeof item.props.hidden === "undefined" || item?.props?.hidden !== true) && item.props?.hiddenInFilterBar !== true;
    }).map((child) => {
      var _a2;
      const key = child.key;
      if (filterContainerWidth) {
        childProps.style = __spreadValues({
          width: filterContainerWidth
        }, child.props.style);
      }
      if (hideFilterConfiguration) {
        return (0, import_react45.cloneElement)(child, __spreadValues({}, childProps));
      }
      prevVisibleInFilterBarProps.current[key] = child.props.hiddenInFilterBar !== true;
      let filterItemProps = {};
      if (Object.keys(dialogRefs).length > 0) {
        const dialogItemRef = dialogRefs[key];
        if (dialogItemRef) {
          filterItemProps = filterValue(dialogItemRef, child);
        }
      }
      if (!child.props.children) {
        return (0, import_react45.cloneElement)(child, __spreadValues({}, childProps));
      }
      const filter = child.props.children;
      if (prevChildren.current?.[key] && //Input
      (filter?.props?.value !== prevChildren.current?.[key]?.value || //Checkbox
      filter?.props?.checked !== prevChildren.current?.[key]?.checked || //Selectable
      Array.isArray(filter?.props?.children) && filter?.props?.children?.map((item) => item.props.selected).join(",") !== prevChildren?.current?.[key]?.children?.map((item) => item.props.selected).join(","))) {
        const _b = dialogRefs, {
          [_a2 = child.key]: _omit
        } = _b, rest2 = __objRest(_b, [
          __restKey(_a2)
        ]);
        setDialogRefs(rest2);
      }
      prevChildren.current[key] = filter.props;
      return (0, import_react45.cloneElement)(child, __spreadProps(__spreadValues({}, childProps), {
        children: __spreadProps(__spreadValues({}, filter), {
          props: __spreadValues(__spreadValues({}, filter.props), filterItemProps),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore: todo check React19 support
          ref: (node) => {
            filterRefs.current[key] = node;
            if (!dialogOpen) syncRef(filter.ref, node);
          }
        })
      }));
    });
  };
  const handleRestoreFilters = (e, source, filterElements) => {
    if (source === "filterBar" && showGoOnFB) {
      setMountFilters(false);
    }
    if (onRestore) {
      onRestore(enrichEventWithDetails(e, __spreadValues({
        source
      }, filterElements)));
    }
  };
  (0, import_react45.useEffect)(() => {
    if (!mountFilters) {
      setMountFilters(true);
    }
  }, [mountFilters]);
  const handleFBRestore = (e) => {
    handleRestoreFilters(e, "filterBar", getFilterElements());
  };
  const handleClear = (e) => {
    if (typeof onClear === "function") {
      onClear(enrichEventWithDetails(e, getFilterElements()));
    }
  };
  const cssClasses = clsx(classNames20.outerContainer, className, !hideToolbar && classNames20.outerContainerWithToolbar);
  (0, import_react45.useEffect)(() => {
    prevSearchInputPropsValueRef.current = search?.props?.value;
  }, [search?.props?.value]);
  const prevSearchInputPropsValue = prevSearchInputPropsValueRef.current;
  (0, import_react45.useEffect)(() => {
    if (prevSearchInputPropsValue !== search?.props?.value) {
      setSearchValue(search?.props?.value);
    }
  }, [prevSearchInputPropsValue, search?.props?.value]);
  const ToolbarButtons = (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, {
    children: [showGoOnFB && (0, import_jsx_runtime38.jsx)(Button, {
      onClick: handleGoOnFb,
      design: ButtonDesign_default.Emphasized,
      children: goText
    }), !hideToggleFiltersButton && !hideToolbar && !isPhone3 && (0, import_jsx_runtime38.jsx)(Button, {
      onClick: handleToggle,
      design: ButtonDesign_default.Transparent,
      className: classNames20.showFiltersBtn,
      "aria-live": "polite",
      children: showFilters ? hideFilterBarText : showFilterBarText
    }), showClearOnFB && (0, import_jsx_runtime38.jsx)(Button, {
      onClick: handleClear,
      design: ButtonDesign_default.Transparent,
      children: clearText
    }), showRestoreOnFB && (0, import_jsx_runtime38.jsx)(Button, {
      onClick: handleFBRestore,
      design: ButtonDesign_default.Transparent,
      children: restoreText
    }), !hideFilterConfiguration && (0, import_jsx_runtime38.jsx)(Button, {
      onClick: handleDialogOpen,
      "aria-haspopup": "dialog",
      design: ButtonDesign_default.Transparent,
      ref: filterBtnRef,
      children: `${filtersText}${activeFiltersCount && parseInt(activeFiltersCount, 10) > 0 ? ` (${activeFiltersCount})` : ""}`
    })]
  });
  const hasButtons = ToolbarButtons.props.children.some(Boolean);
  const [filterBarButtonsWidth, setFilterBarButtonsWidth] = (0, import_react45.useState)(void 0);
  const [filterAreaWidth, setFilterAreaWidth] = (0, import_react45.useState)(void 0);
  const [firstChildWidth, setFirstChildWidth] = (0, import_react45.useState)(void 0);
  (0, import_react45.useEffect)(() => {
    const debouncedObserverFn = debounce(([area]) => {
      const firstChild = area.target?.children?.[0];
      if (firstChild && firstChild.offsetWidth !== firstChildWidth) {
        setFirstChildWidth(
          firstChild.offsetWidth + 16
          /*margin*/
        );
      }
    }, 100);
    const filterAreaObserver = new ResizeObserver(debouncedObserverFn);
    if (hideToolbar && filterAreaRef.current) {
      filterAreaObserver.observe(filterAreaRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      filterAreaObserver.disconnect();
    };
  }, [filterAreaRef.current, hideToolbar]);
  (0, import_react45.useEffect)(() => {
    const debouncedObserverFn = debounce(([area]) => {
      const filterWidth = resizeObserverEntryWidth(area);
      if (filterWidth !== filterBarButtonsWidth) {
        setFilterAreaWidth(filterWidth);
      }
    }, 100);
    const filterAreaObserver = new ResizeObserver(debouncedObserverFn);
    if (hideToolbar && filterAreaRef.current) {
      filterAreaObserver.observe(filterAreaRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      filterAreaObserver.disconnect();
    };
  }, [filterAreaWidth, filterAreaRef.current, hideToolbar]);
  (0, import_react45.useEffect)(() => {
    const debouncedObserverFn = debounce(([buttons]) => {
      const buttonsWidth = resizeObserverEntryWidth(buttons);
      if (buttonsWidth !== filterBarButtonsWidth) {
        setFilterBarButtonsWidth(buttonsWidth);
      }
    }, 100);
    const filterBarButtonsObserver = new ResizeObserver(debouncedObserverFn);
    if (hideToolbar && filterBarButtonsRef.current) {
      filterBarButtonsObserver.observe(filterBarButtonsRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      filterBarButtonsObserver.disconnect();
    };
  }, [filterBarButtonsRef.current, hideToolbar, filterBarButtonsWidth]);
  const calculatedChildren = renderChildren();
  (0, import_react45.useEffect)(() => {
    if (executeGo) {
      setExecuteGo((prevEvent) => {
        onGo(prevEvent);
        return false;
      });
    }
  }, [executeGo]);
  const renderSpacers = () => {
    if (firstChildWidth && filterAreaWidth && filterBarButtonsWidth) {
      const spacers = [];
      const filterItemsWidth = calculatedChildren.length * firstChildWidth;
      if (filterAreaWidth - filterBarButtonsWidth > filterItemsWidth) {
        return null;
      }
      const usedSpaceLastRow = filterItemsWidth % filterAreaWidth;
      const emptySpaceLastRow = filterAreaWidth - usedSpaceLastRow;
      const numberOfSpacers = Math.floor((emptySpaceLastRow - filterBarButtonsWidth) / firstChildWidth) - 1;
      for (let i = 0; i < numberOfSpacers; i++) {
        spacers.push((0, import_jsx_runtime38.jsx)("div", {
          className: classNames20.spacer
        }, `filter-spacer-${i}`));
      }
      return spacers;
    }
    return null;
  };
  const CustomTag = as;
  return (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, {
    children: [dialogOpen && !hideFilterConfiguration && (0, import_jsx_runtime38.jsx)(FilterDialog, {
      filterBarRefs: filterRefs,
      open: dialogOpen,
      handleDialogClose,
      handleRestoreFilters,
      handleSearchValueChange: setSearchValue,
      showRestoreButton: showResetButton,
      handleSelectionChange: onFiltersDialogSelectionChange,
      handleDialogSave,
      handleDialogSearch: onFiltersDialogSearch,
      handleDialogCancel: onFiltersDialogCancel,
      onAfterFiltersDialogOpen,
      portalContainer,
      dialogRef,
      enableReordering,
      isPhone: isPhone3,
      children: safeChildren()
    }), (0, import_jsx_runtime38.jsxs)(CustomTag, __spreadProps(__spreadValues({
      ref,
      className: cssClasses,
      style: __spreadValues({
        ["--_ui5wcr_filter_group_item_flex_basis"]: filterContainerWidth
      }, style),
      slot
    }, rest), {
      children: [!hideToolbar && (0, import_jsx_runtime38.jsxs)(Toolbar2, {
        className: classNames20.filterBarHeader,
        toolbarStyle: "Clear",
        children: [header, hasButtons && (0, import_jsx_runtime38.jsx)(ToolbarSpacer2, {}), ToolbarButtons]
      }), mountFilters && (0, import_jsx_runtime38.jsxs)("div", {
        className: filterAreaClasses,
        style: {
          position: "relative"
        },
        ref: filterAreaRef,
        "data-component-name": "FilterBarFilterArea",
        children: [search && (0, import_jsx_runtime38.jsx)(FilterGroupItem, {
          "data-with-toolbar": !hideToolbar,
          children: (0, import_jsx_runtime38.jsx)("div", {
            ref: searchRef,
            className: classNames20.searchContainer,
            children: renderSearchWithValue(search, searchValue, {
              placeholder: searchText,
              icon: (0, import_jsx_runtime38.jsx)(Icon, {
                name: search_default
              }),
              noTypeahead: true,
              showClearIcon: true
            })
          })
        }), calculatedChildren, hideToolbar && (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, {
          children: [renderSpacers(), (0, import_jsx_runtime38.jsx)("div", {
            style: {
              width: filterBarButtonsWidth ? `${filterBarButtonsWidth}px` : "120px",
              minWidth: filterBarButtonsWidth ? `${filterBarButtonsWidth}px` : "120px"
            },
            className: classNames20.lastSpacer,
            children: (0, import_jsx_runtime38.jsx)("div", {
              className: classNames20.filterBarButtons,
              ref: filterBarButtonsRef,
              children: ToolbarButtons
            })
          })]
        })]
      })]
    }))]
  });
});
FilterBar.displayName = "FilterBar";

// node_modules/@ui5/webcomponents-react/dist/components/Grid/index.js
var import_react46 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/Grid/Grid.module.css.js
var styleData23 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "Grid.module.css",
  content: ".Grid_grid_1g3dq_1{display:grid;grid-template-columns:repeat(12,1fr)}.Grid_gridSpan1_1g3dq_6{grid-column:span 1}.Grid_gridSpan2_1g3dq_10{grid-column:span 2}.Grid_gridSpan3_1g3dq_14{grid-column:span 3}.Grid_gridSpan4_1g3dq_18{grid-column:span 4}.Grid_gridSpan5_1g3dq_22{grid-column:span 5}.Grid_gridSpan6_1g3dq_26{grid-column:span 6}.Grid_gridSpan7_1g3dq_30{grid-column:span 7}.Grid_gridSpan8_1g3dq_34{grid-column:span 8}.Grid_gridSpan9_1g3dq_38{grid-column:span 9}.Grid_gridSpan10_1g3dq_42{grid-column:span 10}.Grid_gridSpan11_1g3dq_46{grid-column:span 11}.Grid_gridSpan12_1g3dq_50{grid-column:span 12}.Grid_positionCenter_1g3dq_54{margin-inline:auto}.Grid_positionRight_1g3dq_58{margin-inline:auto 0}"
};
var classNames23 = {
  "grid": "Grid_grid_1g3dq_1",
  "gridSpan1": "Grid_gridSpan1_1g3dq_6",
  "gridSpan2": "Grid_gridSpan2_1g3dq_10",
  "gridSpan3": "Grid_gridSpan3_1g3dq_14",
  "gridSpan4": "Grid_gridSpan4_1g3dq_18",
  "gridSpan5": "Grid_gridSpan5_1g3dq_22",
  "gridSpan6": "Grid_gridSpan6_1g3dq_26",
  "gridSpan7": "Grid_gridSpan7_1g3dq_30",
  "gridSpan8": "Grid_gridSpan8_1g3dq_34",
  "gridSpan9": "Grid_gridSpan9_1g3dq_38",
  "gridSpan10": "Grid_gridSpan10_1g3dq_42",
  "gridSpan11": "Grid_gridSpan11_1g3dq_46",
  "gridSpan12": "Grid_gridSpan12_1g3dq_50",
  "positionCenter": "Grid_positionCenter_1g3dq_54",
  "positionRight": "Grid_positionRight_1g3dq_58"
};

// node_modules/@ui5/webcomponents-react/dist/components/Grid/index.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var INDENT_PATTERN = /^([X][L](?<LargeDesktop>[0-9]|1[0-2]))? ?([L](?<Desktop>[0-9]|1[0-2]))? ?([M](?<Tablet>[0-9]|1[0-2]))? ?([S](?<Phone>[0-9]|1[0-2]))?$/i;
var SPAN_PATTERN = /^([X][L](?<LargeDesktop>[1-9]|1[0-2]))? ?([L](?<Desktop>[1-9]|1[0-2]))? ?([M](?<Tablet>[1-9]|1[0-2]))? ?([S](?<Phone>[1-9]|1[0-2]))?$/i;
var DefaultSpanMap = /* @__PURE__ */ new Map();
DefaultSpanMap.set("Phone", 1);
DefaultSpanMap.set("Tablet", 2);
DefaultSpanMap.set("Desktop", 4);
DefaultSpanMap.set("LargeDesktop", 4);
var DefaultIndentMap = /* @__PURE__ */ new Map();
DefaultIndentMap.set("Phone", 0);
DefaultIndentMap.set("Tablet", 0);
DefaultIndentMap.set("Desktop", 0);
DefaultIndentMap.set("LargeDesktop", 0);
var getSpanFromString = (span, currentRange) => {
  const spanConfig = SPAN_PATTERN.exec(span);
  return Number(spanConfig?.groups[currentRange] ?? DefaultSpanMap.get(currentRange));
};
var getIndentFromString = (indent, currentRange) => {
  const indentConfig = INDENT_PATTERN.exec(indent);
  return Number(indentConfig?.groups[currentRange] ?? DefaultIndentMap.get(currentRange));
};
var Grid = (0, import_react46.forwardRef)((props, ref) => {
  const _a = props, {
    position,
    children,
    hSpacing = "1rem",
    vSpacing = "1rem",
    style,
    className,
    slot,
    defaultIndent = "XL0 L0 M0 S0",
    defaultSpan = "XL3 L3 M6 S12"
  } = _a, rest = __objRest(_a, [
    "position",
    "children",
    "hSpacing",
    "vSpacing",
    "style",
    "className",
    "slot",
    "defaultIndent",
    "defaultSpan"
  ]);
  useStylesheet(styleData23, Grid.displayName);
  const currentRange = useViewportRange();
  const gridClasses = clsx(classNames23.grid, GridPosition.Center === position && classNames23.positionCenter, GridPosition.Right === position && classNames23.positionRight, className);
  return (0, import_jsx_runtime39.jsx)("div", __spreadProps(__spreadValues({
    ref,
    className: gridClasses,
    style: __spreadValues({
      rowGap: vSpacing,
      columnGap: hSpacing
    }, style),
    slot
  }, rest), {
    children: flattenFragments(children, Infinity).map((child) => {
      if (!(0, import_react46.isValidElement)(child)) {
        return null;
      }
      const childSpan = getSpanFromString(child.props["data-layout-span"] ?? defaultSpan, currentRange);
      const childClass = classNames23[`gridSpan${childSpan}`];
      const childrenWithGridLayout = [(0, import_jsx_runtime39.jsx)("div", {
        className: childClass,
        children: child
      }, child.key)];
      const indentSpan = getIndentFromString(child.props["data-layout-indent"] ?? defaultIndent, currentRange);
      if (indentSpan && indentSpan > 0) {
        childrenWithGridLayout.unshift((0, import_jsx_runtime39.jsx)("span", {
          className: classNames23[`gridSpan${indentSpan}`],
          "data-component-name": "GridIndentSpacer",
          "aria-hidden": "true"
        }, `${child.key}-indent`));
      }
      return childrenWithGridLayout;
    })
  }));
});
Grid.displayName = "Grid";

// node_modules/@ui5/webcomponents-react/dist/components/MessageView/index.js
var import_react48 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/internal/MessageViewContext.js
var import_react47 = __toESM(require_react(), 1);
var MessageViewContext = (0, import_react47.createContext)({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectMessage: (_message) => {
  }
});

// node_modules/@ui5/webcomponents-react/dist/components/MessageView/MessageView.module.css.js
var styleData24 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "MessageView.module.css",
  content: ".MessageView_container_1be3f_1{display:flex;height:100%;overflow-x:hidden;overflow-y:auto;width:100%}.MessageView_container_1be3f_1>*{flex-shrink:0;transition:transform .2s ease-in-out;width:100%}.MessageView_showDetails_1be3f_15>*{transform:translateX(-100%)}.MessageView_button_1be3f_21[data-key=Negative]:not([pressed]){color:var(--sapNegativeElementColor)}.MessageView_button_1be3f_21[data-key=Critical]:not([pressed]){color:var(--sapCriticalElementColor)}.MessageView_button_1be3f_21[data-key=Positive]:not([pressed]){color:var(--sapPositiveElementColor)}.MessageView_button_1be3f_21[data-key=Information]:not([pressed]){color:var(--sapInformativeElementColor)}.MessageView_details_1be3f_39{padding:1rem}.MessageView_detailsIcon_1be3f_43{flex-shrink:0;margin:0 1rem 0 .5rem}.MessageView_detailsIcon_1be3f_43[data-type=Negative]{color:var(--sapNegativeElementColor)}.MessageView_detailsIcon_1be3f_43[data-type=Critical]{color:var(--sapCriticalElementColor)}.MessageView_detailsIcon_1be3f_43[data-type=Positive]{color:var(--sapPositiveElementColor)}.MessageView_detailsIcon_1be3f_43[data-type=Information],.MessageView_detailsIcon_1be3f_43[data-type=None]{color:var(--sapInformativeElementColor)}.MessageView_detailsTextContainer_1be3f_65{overflow:hidden}.MessageView_detailsTitle_1be3f_69{margin-block-end:1rem}.MessageView_detailsText_1be3f_65{color:var(--sapTextColor);font-family:var(--sapFontFamily);font-size:var(--sapFontSize);line-height:1.4;margin-block-end:1rem}.MessageView_messagesContainer_1be3f_81{height:100%}.MessageView_detailsContainer_1be3f_85{height:100%}"
};
var classNames24 = {
  "container": "MessageView_container_1be3f_1",
  "showDetails": "MessageView_showDetails_1be3f_15",
  "button": "MessageView_button_1be3f_21",
  "details": "MessageView_details_1be3f_39",
  "detailsIcon": "MessageView_detailsIcon_1be3f_43",
  "detailsTextContainer": "MessageView_detailsTextContainer_1be3f_65",
  "detailsTitle": "MessageView_detailsTitle_1be3f_69",
  "detailsText": "MessageView_detailsText_1be3f_65",
  "messagesContainer": "MessageView_messagesContainer_1be3f_81",
  "detailsContainer": "MessageView_detailsContainer_1be3f_85"
};

// node_modules/@ui5/webcomponents-react/dist/components/MessageView/utils.js
var getIconNameForType = (type) => {
  switch (type) {
    case ValueState_default.Negative:
    case "Negative":
      return error_default;
    case ValueState_default.Positive:
    case "Positive":
      return sys_enter_2_default;
    case ValueState_default.Critical:
    case "Critical":
      return alert_default;
    default:
      return information_default;
  }
};

// node_modules/@ui5/webcomponents-react/dist/components/MessageView/index.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var resolveMessageTypes = (children) => {
  return (children ?? []).map((message) => message?.props?.type).reduce((acc, type) => {
    const finalType = type === ValueState_default.None ? ValueState_default.Information : type;
    if (acc.hasOwnProperty(finalType)) {
      acc[finalType]++;
    }
    return acc;
  }, {
    [ValueState_default.Negative]: 0,
    [ValueState_default.Critical]: 0,
    [ValueState_default.Positive]: 0,
    [ValueState_default.Information]: 0
  });
};
var resolveMessageGroups = (children) => {
  const groups = (children ?? []).reduce((acc, val) => {
    const groupName = val?.props?.groupName ?? "";
    if (acc.hasOwnProperty(groupName)) {
      acc[groupName].push(val);
    } else {
      acc[groupName] = [val];
    }
    return acc;
  }, {});
  return Object.entries(groups).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
};
var MessageView = (0, import_react48.forwardRef)((props, ref) => {
  const _a = props, {
    children,
    groupItems,
    showDetailsPageHeader,
    className,
    onItemSelect
  } = _a, rest = __objRest(_a, [
    "children",
    "groupItems",
    "showDetailsPageHeader",
    "className",
    "onItemSelect"
  ]);
  useStylesheet(styleData24, MessageView.displayName);
  const [componentRef, internalRef] = useSyncRef(ref);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const [listFilter, setListFilter] = (0, import_react48.useState)("All");
  const [selectedMessage, setSelectedMessage] = (0, import_react48.useState)(null);
  const childrenArray = import_react48.Children.toArray(children);
  const messageTypes = resolveMessageTypes(childrenArray);
  const filledTypes = Object.values(messageTypes).filter((count) => count > 0).length;
  const filteredChildren = listFilter === "All" ? childrenArray : childrenArray.filter((message) => {
    if (!(0, import_react48.isValidElement)(message)) {
      return false;
    }
    const castMessage = message;
    if (listFilter === ValueState_default.Information) {
      return castMessage?.props?.type === ValueState_default.Information || castMessage?.props?.type === ValueState_default.None;
    }
    return castMessage?.props?.type === listFilter;
  });
  const groupedMessages = resolveMessageGroups(filteredChildren);
  const navigateBack = (0, import_react48.useCallback)(() => {
    setSelectedMessage(null);
  }, [setSelectedMessage]);
  (0, import_react48.useEffect)(() => {
    if (internalRef.current) {
      internalRef.current.navigateBack = navigateBack;
    }
  }, [internalRef.current, navigateBack]);
  const handleListFilterChange = (e) => {
    setListFilter(e.detail.selectedItems.at(0).dataset.key);
  };
  const outerClasses = clsx(classNames24.container, className, selectedMessage && classNames24.showDetails);
  return (0, import_jsx_runtime40.jsx)("div", __spreadProps(__spreadValues({
    ref: componentRef
  }, rest), {
    className: outerClasses,
    children: (0, import_jsx_runtime40.jsxs)(MessageViewContext.Provider, {
      value: {
        selectMessage: setSelectedMessage
      },
      children: [(0, import_jsx_runtime40.jsx)("div", {
        style: {
          visibility: selectedMessage ? "hidden" : "visible"
        },
        className: classNames24.messagesContainer,
        children: !selectedMessage && (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, {
          children: [filledTypes > 1 && (0, import_jsx_runtime40.jsx)(Bar, {
            startContent: (0, import_jsx_runtime40.jsxs)(SegmentedButton, {
              onSelectionChange: handleListFilterChange,
              children: [(0, import_jsx_runtime40.jsx)(SegmentedButtonItem, {
                "data-key": "All",
                selected: listFilter === "All",
                children: i18nBundle.getText(ALL)
              }), Object.entries(messageTypes).map(([valueState, count]) => {
                if (count === 0) {
                  return null;
                }
                return (0, import_jsx_runtime40.jsx)(SegmentedButtonItem, {
                  "data-key": valueState,
                  selected: listFilter === valueState,
                  icon: getIconNameForType(valueState),
                  className: classNames24.button,
                  children: count
                }, valueState);
              })]
            })
          }), (0, import_jsx_runtime40.jsx)(List, {
            onItemClick: onItemSelect,
            noDataText: i18nBundle.getText(LIST_NO_DATA),
            separators: ListSeparator_default.Inner,
            children: groupItems ? groupedMessages.map(([groupName, items]) => {
              if (!groupName) {
                return items;
              }
              return (0, import_jsx_runtime40.jsx)(import_react48.Fragment, {
                children: groupName && (0, import_jsx_runtime40.jsx)(ListItemGroup, {
                  headerText: groupName,
                  children: items
                })
              }, groupName);
            }) : filteredChildren
          })]
        })
      }), (0, import_jsx_runtime40.jsx)("div", {
        className: classNames24.detailsContainer,
        children: childrenArray.length > 0 ? (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, {
          children: [showDetailsPageHeader && selectedMessage && (0, import_jsx_runtime40.jsx)(Bar, {
            startContent: (0, import_jsx_runtime40.jsx)(Button, {
              design: ButtonDesign_default.Transparent,
              icon: slim_arrow_left_default,
              onClick: navigateBack
            })
          }), selectedMessage && (0, import_jsx_runtime40.jsxs)(FlexBox, {
            className: classNames24.details,
            children: [(0, import_jsx_runtime40.jsx)(Icon, {
              "data-type": selectedMessage.type ?? ValueState_default.Negative,
              name: getIconNameForType(selectedMessage.type),
              className: classNames24.detailsIcon
            }), (0, import_jsx_runtime40.jsxs)(FlexBox, {
              direction: FlexBoxDirection.Column,
              className: classNames24.detailsTextContainer,
              children: [(0, import_jsx_runtime40.jsx)(Title, {
                level: TitleLevel_default.H5,
                className: classNames24.detailsTitle,
                wrappingType: WrappingType_default.Normal,
                children: selectedMessage.titleText
              }), (0, import_jsx_runtime40.jsx)("div", {
                className: classNames24.detailsText,
                children: selectedMessage.children
              })]
            })]
          })]
        }) : null
      })]
    })
  }));
});
MessageView.displayName = "MessageView";

// node_modules/@ui5/webcomponents-react/dist/components/MessageView/MessageItem.js
var import_react49 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/MessageView/MessageItem.module.css.js
var styleData25 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "MessageItem.module.css",
  content: ".MessageItem_listItem_9l301_1{height:var(--_ui5wcr-MessageViewListItemHeightSingle)}.MessageItem_message_9l301_5{box-sizing:border-box;max-width:100%;overflow:hidden;padding:.25rem 0;padding-inline-end:1rem;width:100%}.MessageItem_withSubtitle_9l301_14{height:var(--_ui5wcr-MessageViewListItemHeightByLine)}.MessageItem_withChildren_9l301_18{padding-inline-end:0}.MessageItem_iconContainer_9l301_22{align-items:center;display:flex;height:2.25rem;justify-content:center;min-width:3rem;width:3rem}.MessageItem_icon_9l301_22{height:1rem;width:1rem}.MessageItem_title_9l301_36{color:var(--sapGroup_TitleTextColor);flex:1 1 auto;font-family:var(--sapFontHeaderFamily);font-size:var(--_ui5wcr-MessageItemTitleFontSize);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.MessageItem_title_9l301_36+.MessageItem_subtitle_9l301_46{cursor:inherit;margin-block-start:.25rem}.MessageItem_counter_9l301_52{color:var(--sapContent_MarkerTextColor);flex:none;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);padding-inline-start:1rem}.MessageItem_navigation_9l301_60{flex-shrink:0;height:.875rem;padding:0 .9375rem;width:.875rem}.MessageItem_typeNegative_9l301_67 .MessageItem_icon_9l301_22{color:var(--sapNegativeElementColor)}.MessageItem_typePositive_9l301_73 .MessageItem_icon_9l301_22{color:var(--sapPositiveElementColor)}.MessageItem_typeCritical_9l301_79 .MessageItem_icon_9l301_22{color:var(--sapCriticalElementColor)}.MessageItem_typeInformation_9l301_85 .MessageItem_icon_9l301_22,.MessageItem_typeNone_9l301_86 .MessageItem_icon_9l301_22{color:var(--sapInformativeElementColor)}"
};
var classNames25 = {
  "listItem": "MessageItem_listItem_9l301_1",
  "message": "MessageItem_message_9l301_5",
  "withSubtitle": "MessageItem_withSubtitle_9l301_14",
  "withChildren": "MessageItem_withChildren_9l301_18",
  "iconContainer": "MessageItem_iconContainer_9l301_22",
  "icon": "MessageItem_icon_9l301_22",
  "title": "MessageItem_title_9l301_36",
  "subtitle": "MessageItem_subtitle_9l301_46",
  "counter": "MessageItem_counter_9l301_52",
  "navigation": "MessageItem_navigation_9l301_60",
  "typeNegative": "MessageItem_typeNegative_9l301_67",
  "typePositive": "MessageItem_typePositive_9l301_73",
  "typeCritical": "MessageItem_typeCritical_9l301_79",
  "typeInformation": "MessageItem_typeInformation_9l301_85",
  "typeNone": "MessageItem_typeNone_9l301_86"
};

// node_modules/@ui5/webcomponents-react/dist/components/MessageView/MessageItem.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var MessageItem = (0, import_react49.forwardRef)((props, ref) => {
  const _a = props, {
    titleText,
    subtitleText,
    counter,
    type = ValueState_default.Negative,
    children,
    className
  } = _a, rest = __objRest(_a, [
    "titleText",
    "subtitleText",
    "counter",
    "type",
    "children",
    "className"
  ]);
  const [isTitleTextOverflowing, setIsTitleTextIsOverflowing] = (0, import_react49.useState)(false);
  const titleTextRef = (0, import_react49.useRef)(null);
  const hasDetails = !!(children || isTitleTextOverflowing);
  useStylesheet(styleData25, MessageItem.displayName);
  const {
    selectMessage
  } = (0, import_react49.useContext)(MessageViewContext);
  const listItemClasses = clsx(classNames25.listItem, Reflect.get(classNames25, `type${type}`), className, subtitleText && classNames25.withSubtitle);
  const messageClasses = clsx(classNames25.message, hasDetails && classNames25.withChildren);
  const handleListItemClick = (e) => {
    if (hasDetails) {
      selectMessage(props);
      if (typeof rest.onClick === "function") {
        rest.onClick(e);
      }
    }
  };
  const handleKeyDown = (e) => {
    if (typeof rest.onKeyDown === "function") {
      rest.onKeyDown(e);
    }
    if (e.code === "Enter") {
      handleListItemClick(e);
    }
  };
  const hasChildren = import_react49.Children.count(children);
  (0, import_react49.useEffect)(() => {
    const titleTextObserver = new ResizeObserver(([titleTextSpan]) => {
      if (titleTextSpan.target.scrollWidth > titleTextSpan.target.clientWidth) {
        setIsTitleTextIsOverflowing(true);
      } else {
        setIsTitleTextIsOverflowing(false);
      }
    });
    if (!hasChildren && titleTextRef.current) {
      titleTextObserver.observe(titleTextRef.current);
    }
    return () => {
      titleTextObserver.disconnect();
    };
  }, [hasChildren]);
  return (0, import_jsx_runtime41.jsx)(ListItemCustom, __spreadProps(__spreadValues({
    onClick: handleListItemClick,
    onKeyDown: handleKeyDown,
    "data-title": titleText,
    "data-type": type,
    type: hasDetails ? ListItemType_default.Active : ListItemType_default.Inactive
  }, rest), {
    className: listItemClasses,
    ref,
    children: (0, import_jsx_runtime41.jsxs)(FlexBox, {
      alignItems: FlexBoxAlignItems.Center,
      className: messageClasses,
      children: [(0, import_jsx_runtime41.jsx)("div", {
        className: classNames25.iconContainer,
        children: (0, import_jsx_runtime41.jsx)(Icon, {
          name: getIconNameForType(type),
          className: classNames25.icon
        })
      }), (0, import_jsx_runtime41.jsxs)(FlexBox, {
        direction: FlexBoxDirection.Column,
        style: {
          flex: "auto",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        },
        children: [titleText && (0, import_jsx_runtime41.jsx)("span", {
          className: classNames25.title,
          ref: titleTextRef,
          children: titleText
        }), titleText && subtitleText && (0, import_jsx_runtime41.jsx)(Label, {
          className: classNames25.subtitle,
          children: subtitleText
        })]
      }), counter != null && (0, import_jsx_runtime41.jsx)("span", {
        className: classNames25.counter,
        children: counter
      }), hasDetails && (0, import_jsx_runtime41.jsx)(Icon, {
        className: classNames25.navigation,
        name: slim_arrow_right_default
      })]
    })
  }));
});
MessageItem.displayName = "MessageItem";

// node_modules/@ui5/webcomponents-react/dist/components/MessageViewButton/index.js
var import_react50 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/MessageViewButton/MessageViewButton.module.css.js
var styleData26 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "MessageViewButton.module.css",
  content: ".MessageViewButton_btn_1y8oi_1{background:var(--sapButton_Information_Background);border-color:var(--sapButton_Information_BorderColor);color:var(--sapButton_Information_TextColor);text-shadow:var(--sapContent_TextShadow)}.MessageViewButton_btn_1y8oi_1::part(button):after{border-color:var(--sapContent_FocusColor)}.MessageViewButton_btn_1y8oi_1:hover{background:var(--sapButton_Information_Hover_Background);border-color:var(--sapButton_Information_Hover_BorderColor);color:var(--sapButton_Information_Hover_TextColor)}.MessageViewButton_btn_1y8oi_1:active{background:var(--sapButton_Information_Active_Background);border-color:var(--sapButton_Information_Active_BorderColor);color:var(--sapButton_Information_Active_TextColor)}.MessageViewButton_btn_1y8oi_1:active::part(button):after{border-color:var(--sapContent_FocusColor)}.MessageViewButton_btn_1y8oi_1[data-type=Negative]{background:var(--sapButton_Negative_Background);border-color:var(--sapButton_Negative_BorderColor);color:var(--sapButton_Negative_TextColor);text-shadow:var(--sapContent_ContrastTextShadow)}.MessageViewButton_btn_1y8oi_1[data-type=Negative]::part(button):after{border-color:var(--sapContent_ContrastFocusColor)}.MessageViewButton_btn_1y8oi_1[data-type=Negative]:hover{background:var(--sapButton_Negative_Hover_Background);border-color:var(--sapButton_Negative_Hover_BorderColor);color:var(--sapButton_Negative_Hover_TextColor)}.MessageViewButton_btn_1y8oi_1[data-type=Negative]:active{background:var(--sapButton_Negative_Active_Background);border-color:var(--sapButton_Negative_Active_BorderColor);color:var(--sapButton_Negative_Active_TextColor)}.MessageViewButton_btn_1y8oi_1[data-type=Negative]:active::part(button):after{border-color:var(--sapContent_FocusColor)}.MessageViewButton_btn_1y8oi_1[data-type=Critical]{background:var(--sapButton_Critical_Background);border-color:var(--sapButton_Critical_BorderColor);color:var(--sapButton_Critical_TextColor);text-shadow:var(--sapContent_ContrastTextShadow)}.MessageViewButton_btn_1y8oi_1[data-type=Critical]::part(button):after{border-color:var(--sapContent_ContrastFocusColor)}.MessageViewButton_btn_1y8oi_1[data-type=Critical]:hover{background:var(--sapButton_Critical_Hover_Background);border-color:var(--sapButton_Critical_Hover_BorderColor);color:var(--sapButton_Critical_Hover_TextColor)}.MessageViewButton_btn_1y8oi_1[data-type=Critical]:active{background:var(--sapButton_Critical_Active_Background);border-color:var(--sapButton_Critical_Active_BorderColor);color:var(--sapButton_Critical_Active_TextColor)}.MessageViewButton_btn_1y8oi_1[data-type=Critical]:active::part(button):after{border-color:var(--sapContent_FocusColor)}.MessageViewButton_btn_1y8oi_1[data-type=Positive]{background:var(--sapButton_Success_Background);border-color:var(--sapButton_Success_BorderColor);color:var(--sapButton_Success_TextColor);text-shadow:var(--sapContent_ContrastTextShadow)}.MessageViewButton_btn_1y8oi_1[data-type=Positive]::part(button):after{border-color:var(--sapContent_ContrastFocusColor)}.MessageViewButton_btn_1y8oi_1[data-type=Positive]:hover{background:var(--sapButton_Success_Hover_Background);border-color:var(--sapButton_Success_Hover_BorderColor);color:var(--sapButton_Success_Hover_TextColor)}.MessageViewButton_btn_1y8oi_1[data-type=Positive]:active{background:var(--sapButton_Success_Active_Background);border-color:var(--sapButton_Success_Active_BorderColor);color:var(--sapButton_Success_Active_TextColor)}.MessageViewButton_btn_1y8oi_1[data-type=Positive]:active::part(button):after{border-color:var(--sapContent_FocusColor)}"
};
var classNames26 = {
  "btn": "MessageViewButton_btn_1y8oi_1"
};

// node_modules/@ui5/webcomponents-react/dist/components/MessageViewButton/index.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var getIcon2 = (type) => {
  switch (type) {
    case ValueState_default.Negative:
      return error_default;
    case ValueState_default.Positive:
      return sys_enter_2_default;
    case ValueState_default.Critical:
      return alert_default;
    default:
      return information_default;
  }
};
var MessageViewButton = (0, import_react50.forwardRef)((props, ref) => {
  const _a = props, {
    type = ValueState_default.Negative,
    counter,
    className
  } = _a, rest = __objRest(_a, [
    "type",
    "counter",
    "className"
  ]);
  useStylesheet(styleData26, MessageViewButton.displayName);
  const classes = clsx(classNames26.btn, className);
  const icon = getIcon2(type);
  return (0, import_jsx_runtime42.jsx)(Button, __spreadProps(__spreadValues({
    ref,
    className: classes,
    icon
  }, rest), {
    "data-type": type,
    children: counter > 1 && counter
  }));
});
MessageViewButton.displayName = "MessageViewButton";

// node_modules/@ui5/webcomponents-react/dist/components/Modals/index.js
var import_react51 = __toESM(require_react(), 1);
var import_react_dom4 = __toESM(require_react_dom(), 1);
var import_shim3 = __toESM(require_shim(), 1);

// node_modules/@ui5/webcomponents-react/dist/internal/getRandomId.js
var getRandomId2 = () => {
  if ("randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
};

// node_modules/@ui5/webcomponents-react/dist/internal/ModalStore.js
var STORE_SYMBOL_LISTENERS3 = Symbol.for("@ui5/webcomponents-react/Modals/Listeners");
var STORE_SYMBOL3 = Symbol.for("@ui5/webcomponents-react/Modals");
var initialStore3 = [];
function getListeners3() {
  globalThis[STORE_SYMBOL_LISTENERS3] ??= [];
  return globalThis[STORE_SYMBOL_LISTENERS3];
}
function emitChange3() {
  for (const listener of getListeners3()) {
    listener();
  }
}
function getSnapshot3() {
  globalThis[STORE_SYMBOL3] ??= initialStore3;
  return globalThis[STORE_SYMBOL3];
}
function subscribe3(listener) {
  const listeners = getListeners3();
  globalThis[STORE_SYMBOL_LISTENERS3] = [...listeners, listener];
  return () => {
    globalThis[STORE_SYMBOL_LISTENERS3] = listeners.filter((l) => l !== listener);
  };
}
var ModalStore = {
  subscribe: subscribe3,
  getSnapshot: getSnapshot3,
  getServerSnapshot: () => {
    return initialStore3;
  },
  addModal(config) {
    globalThis[STORE_SYMBOL3] = [...getSnapshot3(), config];
    emitChange3();
  },
  removeModal(id) {
    globalThis[STORE_SYMBOL3] = getSnapshot3().filter((modal) => modal.id !== id);
    emitChange3();
  }
};

// node_modules/@ui5/webcomponents-react/dist/components/Modals/index.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
function showDialogFn(props, container) {
  const id = getRandomId2();
  const ref = (0, import_react51.createRef)();
  ModalStore.addModal({
    Component: Dialog,
    props: __spreadProps(__spreadValues({}, props), {
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === "function") {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    }),
    ref,
    container,
    id
  });
  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}
function showPopoverFn(props, container) {
  const id = getRandomId2();
  const ref = (0, import_react51.createRef)();
  ModalStore.addModal({
    Component: Popover,
    props: __spreadProps(__spreadValues({}, props), {
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === "function") {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    }),
    ref,
    container,
    id
  });
  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}
function showResponsivePopoverFn(props, container) {
  const id = getRandomId2();
  const ref = (0, import_react51.createRef)();
  ModalStore.addModal({
    Component: ResponsivePopover,
    props: __spreadProps(__spreadValues({}, props), {
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === "function") {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    }),
    ref,
    container,
    id
  });
  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}
function showMenuFn(props, container) {
  const id = getRandomId2();
  const ref = (0, import_react51.createRef)();
  ModalStore.addModal({
    Component: Menu,
    props: __spreadProps(__spreadValues({}, props), {
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === "function") {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    }),
    ref,
    container,
    id
  });
  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}
function showMessageBoxFn(props, container) {
  const id = getRandomId2();
  const ref = (0, import_react51.createRef)();
  ModalStore.addModal({
    // @ts-expect-error: props type safety is covered by the `props` property
    Component: MessageBox,
    props: __spreadProps(__spreadValues({}, props), {
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === "function") {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    }),
    ref,
    container,
    id
  });
  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}
function showToastFn(props, container) {
  const ref = (0, import_react51.createRef)();
  const id = getRandomId2();
  ModalStore.addModal({
    Component: Toast,
    props: __spreadProps(__spreadValues({}, props), {
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === "function") {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    }),
    ref,
    container,
    id
  });
  return {
    ref
  };
}
function Modals() {
  const modals = (0, import_shim3.useSyncExternalStore)(ModalStore.subscribe, ModalStore.getSnapshot, ModalStore.getServerSnapshot);
  return (0, import_jsx_runtime43.jsx)(import_jsx_runtime43.Fragment, {
    children: modals.map((modal) => {
      if (modal?.Component) {
        return (0, import_react_dom4.createPortal)(
          // @ts-expect-error: ref is supported by all supported modals
          (0, import_react51.createElement)(modal.Component, __spreadProps(__spreadValues({}, modal.props), {
            ref: modal.ref,
            key: modal.id,
            "data-id": modal.id
          })),
          modal.container ?? document.body
        );
      }
    })
  });
}
Modals.displayName = "Modals";
Modals.showDialog = showDialogFn;
Modals.showPopover = showPopoverFn;
Modals.showResponsivePopover = showResponsivePopoverFn;
Modals.showMenu = showMenuFn;
Modals.showMessageBox = showMessageBoxFn;
Modals.showToast = showToastFn;

// node_modules/@ui5/webcomponents-react/dist/components/NumericSideIndicator/index.js
var import_react52 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/NumericSideIndicator/NumericSideIndicator.module.css.js
var styleData27 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "NumericSideIndicator.module.css",
  content: ".NumericSideIndicator_numericSideIndicator_jbesg_1{align-items:flex-end;color:var(--sapTile_TextColor);display:flex;flex-direction:column;font-family:var(--sapFontFamily);font-size:var(--sapFontSmallSize);min-width:0;position:relative}.NumericSideIndicator_title_jbesg_12{max-width:100%;overflow:hidden;padding-bottom:.25rem;text-align:end;text-overflow:ellipsis}.NumericSideIndicator_value_jbesg_20{color:inherit;font-size:inherit;white-space:pre-line;word-wrap:break-word;word-break:break-word}.NumericSideIndicator_stateGood_jbesg_28{color:var(--sapPositiveTextColor)}.NumericSideIndicator_stateError_jbesg_32{color:var(--sapNegativeTextColor)}.NumericSideIndicator_stateCritical_jbesg_36{color:var(--sapCriticalTextColor)}.NumericSideIndicator_stateNeutral_jbesg_40{color:var(--sapNeutralTextColor)}"
};
var classNames27 = {
  "numericSideIndicator": "NumericSideIndicator_numericSideIndicator_jbesg_1",
  "title": "NumericSideIndicator_title_jbesg_12",
  "value": "NumericSideIndicator_value_jbesg_20",
  "stateGood": "NumericSideIndicator_stateGood_jbesg_28",
  "stateError": "NumericSideIndicator_stateError_jbesg_32",
  "stateCritical": "NumericSideIndicator_stateCritical_jbesg_36",
  "stateNeutral": "NumericSideIndicator_stateNeutral_jbesg_40"
};

// node_modules/@ui5/webcomponents-react/dist/components/NumericSideIndicator/index.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var NumericSideIndicator = (0, import_react52.forwardRef)((props, ref) => {
  const _a = props, {
    number,
    state = ValueColor.None,
    titleText,
    unit,
    className
  } = _a, rest = __objRest(_a, [
    "number",
    "state",
    "titleText",
    "unit",
    "className"
  ]);
  useStylesheet(styleData27, NumericSideIndicator.displayName);
  return (0, import_jsx_runtime44.jsxs)("div", __spreadProps(__spreadValues({
    ref,
    className: clsx(classNames27.numericSideIndicator, className)
  }, rest), {
    children: [(0, import_jsx_runtime44.jsx)("span", {
      className: classNames27.title,
      children: titleText
    }), (0, import_jsx_runtime44.jsxs)(Text, {
      className: clsx(classNames27.value, classNames27[`state${state}`]),
      children: [number, unit]
    })]
  }));
});
NumericSideIndicator.displayName = "NumericSideIndicator";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPage/index.js
var import_react58 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/internal/safeGetChildrenArray.js
var import_react53 = __toESM(require_react(), 1);
var safeGetChildrenArray = (children) => {
  const childArray = [];
  import_react53.Children.forEach(children, (child) => {
    if ((0, import_react53.isValidElement)(child)) {
      childArray.push(child);
    }
  });
  return childArray;
};

// node_modules/@ui5/webcomponents-react/dist/internal/useObserveHeights.js
var import_react54 = __toESM(require_react(), 1);
var useObserveHeights = (pageRef, topHeaderRef, headerContentRef, anchorBarRef, [headerCollapsed, setHeaderCollapsed], {
  noHeader,
  fixedHeader = false,
  scrollTimeout = {
    current: 0
  },
  preserveHeaderStateOnScroll
}) => {
  const [topHeaderHeight, setTopHeaderHeight] = (0, import_react54.useState)(0);
  const [headerContentHeight, setHeaderContentHeight] = (0, import_react54.useState)(0);
  const [isIntersecting, setIsIntersecting] = (0, import_react54.useState)(true);
  const prevScrollTop = (0, import_react54.useRef)(0);
  const onScroll = (0, import_react54.useCallback)((e) => {
    const scrollDown = prevScrollTop.current <= e.target.scrollTop;
    prevScrollTop.current = e.target.scrollTop;
    if (scrollTimeout.current >= performance.now()) {
      return;
    }
    if (scrollDown && e.target.scrollTop >= headerContentHeight && !headerCollapsed) {
      setIsIntersecting(false);
      setHeaderCollapsed(true);
    } else if (!scrollDown && e.target.scrollTop <= topHeaderHeight + Math.max(0, headerContentHeight - topHeaderHeight) && headerCollapsed) {
      setIsIntersecting(true);
      setHeaderCollapsed(false);
    }
  }, [headerContentHeight, topHeaderHeight, headerCollapsed]);
  (0, import_react54.useEffect)(() => {
    if (headerContentRef.current && headerCollapsed !== void 0) {
      setHeaderContentHeight(headerContentRef.current.getBoundingClientRect().height);
    }
  }, [headerCollapsed]);
  (0, import_react54.useEffect)(() => {
    const page = pageRef.current;
    if (!fixedHeader && !preserveHeaderStateOnScroll) {
      page.addEventListener("scroll", onScroll);
    }
    return () => {
      page.removeEventListener("scroll", onScroll);
    };
  }, [onScroll, fixedHeader, preserveHeaderStateOnScroll]);
  (0, import_react54.useEffect)(() => {
    const headerContentResizeObserver = new ResizeObserver(([header]) => {
      const borderBoxSize = Array.isArray(header.borderBoxSize) ? header.borderBoxSize[0] : header.borderBoxSize;
      setTopHeaderHeight(borderBoxSize?.blockSize ?? header.target.getBoundingClientRect().height);
    });
    if (topHeaderRef?.current) {
      headerContentResizeObserver.observe(topHeaderRef.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, []);
  (0, import_react54.useEffect)(() => {
    const headerContentResizeObserver = new ResizeObserver(([headerContent]) => {
      if (isIntersecting) {
        const borderBoxSize = Array.isArray(headerContent.borderBoxSize) ? headerContent.borderBoxSize[0] : headerContent.borderBoxSize;
        setHeaderContentHeight(borderBoxSize?.blockSize ?? headerContent.target.getBoundingClientRect().height);
      }
    });
    if (headerContentRef?.current) {
      headerContentResizeObserver.observe(headerContentRef.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, [isIntersecting]);
  const anchorBarHeight = anchorBarRef?.current?.offsetHeight ?? 33;
  const totalHeaderHeight = (noHeader ? 0 : topHeaderHeight + headerContentHeight) + anchorBarHeight;
  return {
    topHeaderHeight,
    headerContentHeight,
    anchorBarHeight,
    totalHeaderHeight,
    headerCollapsed
  };
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageAnchorBar/index.js
var import_react55 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageAnchorBar/ObjectPageAnchorBar.module.css.js
var styleData28 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ObjectPageAnchorBar.module.css",
  content: '.ObjectPageAnchorBar_container_1n61l_1{inset-inline-start:50%;position:absolute}.ObjectPageAnchorBar_container_1n61l_1:after,.ObjectPageAnchorBar_container_1n61l_1:before{content:"";height:.0625rem;inset-block-start:50%;position:absolute;width:4rem}.ObjectPageAnchorBar_container_1n61l_1:before{background-image:linear-gradient(to left,var(--sapObjectHeader_BorderColor),#0000);inset-inline-end:100%}.ObjectPageAnchorBar_container_1n61l_1:after{background-image:linear-gradient(to right,var(--sapObjectHeader_BorderColor),#0000);inset-inline-start:100%}.ObjectPageAnchorBar_anchorBarActionButton_1n61l_25{--_ui5wcr_anchor-btn-center:calc((1.5rem - var(--sapButton_BorderWidth))/2);inset-block-start:calc(var(--_ui5wcr_anchor-btn-center)*-1);inset-inline-start:calc(50% - var(--_ui5wcr_anchor-btn-center));position:absolute;z-index:3}.ObjectPageAnchorBar_anchorBarActionButton_1n61l_25:not([pressed]){background-color:var(--sapObjectHeader_Background)}.ObjectPageAnchorBar_anchorBarActionButtonExpandable_1n61l_37+.ObjectPageAnchorBar_anchorBarActionButtonPinnable_1n61l_38{inset-inline-start:calc(50% - var(--_ui5wcr_anchor-btn-center) + 1rem)}.ObjectPageAnchorBar_anchorBarActionPinnableAndExpandable_1n61l_43.ObjectPageAnchorBar_anchorBarActionButtonExpandable_1n61l_37{inset-inline-start:calc(50% - var(--_ui5wcr_anchor-btn-center) - 1rem)}'
};
var classNames28 = {
  "container": "ObjectPageAnchorBar_container_1n61l_1",
  "anchorBarActionButton": "ObjectPageAnchorBar_anchorBarActionButton_1n61l_25",
  "anchorBarActionButtonExpandable": "ObjectPageAnchorBar_anchorBarActionButtonExpandable_1n61l_37",
  "anchorBarActionButtonPinnable": "ObjectPageAnchorBar_anchorBarActionButtonPinnable_1n61l_38",
  "anchorBarActionPinnableAndExpandable": "ObjectPageAnchorBar_anchorBarActionPinnableAndExpandable_1n61l_43"
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageAnchorBar/index.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var _buttonBaseMinWidth = `${cssVarVersionInfoPrefix}button_base_min_width`;
var _buttonBaseHeight = `${cssVarVersionInfoPrefix}button_base_height`;
var anchorButtonVariables = {
  [_buttonBaseMinWidth]: "1.5rem",
  [_buttonBaseHeight]: "1.5rem"
};
var ObjectPageAnchorBar = (0, import_react55.forwardRef)((props, ref) => {
  const {
    headerContentVisible,
    hidePinButton,
    headerPinned,
    style,
    accessibilityAttributes,
    setHeaderPinned,
    onPinnedStateChange,
    onToggleHeaderContentVisibility,
    onHoverToggleButton
  } = props;
  useStylesheet(styleData28, ObjectPageAnchorBar.displayName);
  const showHideHeaderBtnRef = (0, import_react55.useRef)(null);
  const shouldRenderHeaderPinnableButton = !hidePinButton && headerContentVisible;
  const showBothActions = shouldRenderHeaderPinnableButton;
  const onPinHeader = (0, import_react55.useCallback)((e) => {
    setHeaderPinned(e.target.pressed);
  }, [setHeaderPinned]);
  const isInitial = (0, import_react55.useRef)(true);
  (0, import_react55.useEffect)(() => {
    if (!isInitial.current && typeof onPinnedStateChange === "function") {
      onPinnedStateChange(headerPinned);
    }
    if (isInitial.current) {
      isInitial.current = false;
    }
  }, [headerPinned]);
  (0, import_react55.useEffect)(() => {
    const tagName = getUi5TagWithSuffix("ui5-button");
    const showHideHeaderBtn = showHideHeaderBtnRef.current;
    customElements.whenDefined(tagName).then(() => {
      if (showHideHeaderBtn) {
        showHideHeaderBtn.accessibilityAttributes = {
          expanded: !!headerContentVisible
        };
      }
    });
  }, [!!headerContentVisible]);
  const onToggleHeaderButtonClick = (e) => {
    onToggleHeaderContentVisibility(enrichEventWithDetails(e, {
      visible: !headerContentVisible
    }));
  };
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  return (0, import_jsx_runtime45.jsxs)("section", {
    "data-component-name": "ObjectPageAnchorBar",
    style,
    role: accessibilityAttributes?.objectPageAnchorBar?.role,
    className: !hidePinButton ? classNames28.container : null,
    ref,
    children: [(0, import_jsx_runtime45.jsx)(Button, {
      ref: showHideHeaderBtnRef,
      icon: !headerContentVisible ? slim_arrow_down_default : slim_arrow_up_default,
      "data-ui5wcr-dynamic-page-header-action": "",
      className: clsx(classNames28.anchorBarActionButton, classNames28.anchorBarActionButtonExpandable, showBothActions && classNames28.anchorBarActionPinnableAndExpandable),
      style: anchorButtonVariables,
      onClick: onToggleHeaderButtonClick,
      onMouseOver: onHoverToggleButton,
      onMouseLeave: onHoverToggleButton,
      tooltip: i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER),
      accessibleName: i18nBundle.getText(!headerContentVisible ? EXPAND_HEADER : COLLAPSE_HEADER),
      "data-component-name": "ObjectPageAnchorBarExpandBtn"
    }), shouldRenderHeaderPinnableButton && (0, import_jsx_runtime45.jsx)(ToggleButton, {
      icon: headerPinned ? pushpin_on_default : pushpin_off_default,
      "data-ui5wcr-dynamic-page-header-action": "",
      className: clsx(classNames28.anchorBarActionButton, classNames28.anchorBarActionButtonPinnable),
      style: anchorButtonVariables,
      pressed: headerPinned,
      onClick: onPinHeader,
      tooltip: i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER),
      accessibleName: i18nBundle.getText(headerPinned ? UNPIN_HEADER : PIN_HEADER),
      "data-component-name": "ObjectPageAnchorBarPinBtn"
    })]
  });
});
ObjectPageAnchorBar.displayName = "ObjectPageAnchorBar";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPage/CollapsedAvatar.js
var import_react56 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPage/CollapsedAvatar.module.css.js
var styleData29 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "CollapsedAvatar.module.css",
  content: ".CollapsedAvatar_base_589hq_1{align-self:center;opacity:0;padding-inline-end:1rem}.CollapsedAvatar_hidden_589hq_7{opacity:0}.CollapsedAvatar_visible_589hq_11{opacity:1;transition:opacity .5s}.CollapsedAvatar_imageContainer_589hq_16{display:inline-block;max-height:3rem;max-width:3rem;vertical-align:middle;width:3rem}.CollapsedAvatar_image_589hq_16{height:100%;width:100%}"
};
var classNames29 = {
  "base": "CollapsedAvatar_base_589hq_1",
  "hidden": "CollapsedAvatar_hidden_589hq_7",
  "visible": "CollapsedAvatar_visible_589hq_11",
  "imageContainer": "CollapsedAvatar_imageContainer_589hq_16",
  "image": "CollapsedAvatar_image_589hq_16"
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPage/CollapsedAvatar.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var CollapsedAvatar = (props) => {
  const {
    image,
    imageShapeCircle,
    style
  } = props;
  useStylesheet(styleData29, CollapsedAvatar.displayName);
  const [isMounted, setIsMounted] = (0, import_react56.useState)(false);
  const domRef = (0, import_react56.useRef)(null);
  const avatarContent = (0, import_react56.useMemo)(() => {
    if (!image) return null;
    if (typeof image === "string") {
      return (0, import_jsx_runtime46.jsx)("span", {
        className: classNames29.imageContainer,
        style: {
          borderRadius: imageShapeCircle ? "50%" : 0,
          overflow: "hidden"
        },
        children: (0, import_jsx_runtime46.jsx)("img", {
          className: classNames29.image,
          src: image,
          alt: "Object Page Image"
        })
      });
    } else {
      return (0, import_react56.cloneElement)(image, {
        size: AvatarSize_default.S,
        className: image.props?.className ? `${classNames29.imageContainer} ${image.props?.className}` : classNames29.imageContainer
      });
    }
  }, [image, imageShapeCircle]);
  (0, import_react56.useEffect)(() => {
    setIsMounted(true);
  }, []);
  const containerClasses = clsx(classNames29.base, isMounted ? classNames29.visible : classNames29.hidden);
  return (0, import_jsx_runtime46.jsx)("div", {
    ref: domRef,
    className: containerClasses,
    style,
    "data-component-name": "ObjectPageCollapsedAvatar",
    children: avatarContent
  });
};
CollapsedAvatar.displayName = "CollapsedAvatar";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPage/ObjectPage.module.css.js
var styleData30 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ObjectPage.module.css",
  content: ".ObjectPage_objectPage_l8vg7_1{container:objectPage/inline-size;--_ui5wcr_ObjectPage_header_display:block;--_ui5wcr_ObjectPage_title_fontsize:var(--sapObjectHeader_Title_FontSize);background-color:var(--sapBackgroundColor);box-sizing:border-box;display:flex;flex-direction:column;font-family:var(--sapFontFamily);height:100%;max-height:100vh;overflow-x:hidden;overflow-y:auto;position:relative;scroll-behavior:smooth;white-space:normal;width:100%}.ObjectPage_objectPage_l8vg7_1 section[id*=ObjectPageSection-]>div[role=heading]{display:none}.ObjectPage_objectPage_l8vg7_1 section[id*=ObjectPageSection-]~section[id*=ObjectPageSection-]>div[role=heading]{display:block}.ObjectPage_iconTabBarMode_l8vg7_31 section[data-component-name=ObjectPageSection]>div[role=heading]{display:none}.ObjectPage_header_l8vg7_36{--_ui5wcr_ObjectPage_header_display:block;background-color:var(--sapObjectHeader_Background);box-sizing:border-box;cursor:pointer;display:grid;inset-block-start:0;position:sticky;z-index:2}.ObjectPage_header_l8vg7_36 [data-component-name=ObjectPageTitle]{grid-column:2;padding-inline:0}.ObjectPage_headerCollapsed_l8vg7_52{--_ui5wcr_ObjectPage_header_display:none;--_ui5wcr_ObjectPage_title_fontsize:var(--sapObjectHeader_Title_SnappedFontSize)}.ObjectPage_headerContainer_l8vg7_57{background-color:var(--sapObjectHeader_Background);display:grid;grid-auto-columns:min-content calc(100% - 7rem);margin-block-end:.25rem}.ObjectPage_headerContainer_l8vg7_57 [data-component-name=ObjectPageHeaderContent]{grid-column:2}.ObjectPage_headerHoverStyles_l8vg7_68[data-not-clickable=true]{cursor:unset}.ObjectPage_headerHoverStyles_l8vg7_68[data-not-clickable=false]{background-color:var(--sapObjectHeader_Hover_Background)}.ObjectPage_headerHoverStyles_l8vg7_68[data-not-clickable=false] [data-component-name=ObjectPageTitle]{background-color:var(--sapObjectHeader_Hover_Background)}.ObjectPage_headerImage_l8vg7_82{display:inline-block;margin-inline-end:2rem;max-height:5rem;max-width:5rem;min-width:5rem}.ObjectPage_image_l8vg7_90{height:100%;width:100%}.ObjectPage_anchorBar_l8vg7_95{position:sticky;z-index:2}.ObjectPage_tabContainer_l8vg7_100{position:sticky;z-index:1}.ObjectPage_tabContainerComponent_l8vg7_105::part(content){display:none}.ObjectPage_tabContainerComponent_l8vg7_105::part(tabstrip){box-shadow:inset 0 -.0625rem var(--sapPageHeader_BorderColor),0 .125rem .25rem 0 #00000014;padding:0;padding-inline:var(--_ui5wcr_ObjectPage_tab_bar_inline_padding)}.ObjectPage_content_l8vg7_119{flex-grow:1;position:relative}@container (max-width: 599px){.ObjectPage_content_l8vg7_119,.ObjectPage_headerContainer_l8vg7_57,.ObjectPage_header_l8vg7_36{padding-inline:1rem}.ObjectPage_tabContainer_l8vg7_100{--_ui5wcr_ObjectPage_tab_bar_inline_padding:0}}@container (min-width: 600px) and (max-width: 1439px){.ObjectPage_content_l8vg7_119,.ObjectPage_headerContainer_l8vg7_57,.ObjectPage_header_l8vg7_36{padding-inline:2rem}.ObjectPage_tabContainer_l8vg7_100{--_ui5wcr_ObjectPage_tab_bar_inline_padding:1rem}}@container (min-width: 1440px){.ObjectPage_content_l8vg7_119,.ObjectPage_headerContainer_l8vg7_57,.ObjectPage_header_l8vg7_36{padding-inline:3rem}.ObjectPage_tabContainer_l8vg7_100{--_ui5wcr_ObjectPage_tab_bar_inline_padding:2rem}}.ObjectPage_footer_l8vg7_160{inset-block-end:.5rem;margin:0 .5rem;position:sticky}.ObjectPage_footerSpacer_l8vg7_166{flex-shrink:0;height:1rem}.ObjectPage_subSectionPopover_l8vg7_171::part(content){padding:0}.ObjectPage_snappedContent_l8vg7_175{grid-column:1/span 2}"
};
var classNames30 = {
  "objectPage": "ObjectPage_objectPage_l8vg7_1",
  "iconTabBarMode": "ObjectPage_iconTabBarMode_l8vg7_31",
  "header": "ObjectPage_header_l8vg7_36",
  "headerCollapsed": "ObjectPage_headerCollapsed_l8vg7_52",
  "headerContainer": "ObjectPage_headerContainer_l8vg7_57",
  "headerHoverStyles": "ObjectPage_headerHoverStyles_l8vg7_68",
  "headerImage": "ObjectPage_headerImage_l8vg7_82",
  "image": "ObjectPage_image_l8vg7_90",
  "anchorBar": "ObjectPage_anchorBar_l8vg7_95",
  "tabContainer": "ObjectPage_tabContainer_l8vg7_100",
  "tabContainerComponent": "ObjectPage_tabContainerComponent_l8vg7_105",
  "content": "ObjectPage_content_l8vg7_119",
  "footer": "ObjectPage_footer_l8vg7_160",
  "footerSpacer": "ObjectPage_footerSpacer_l8vg7_166",
  "subSectionPopover": "ObjectPage_subSectionPopover_l8vg7_171",
  "snappedContent": "ObjectPage_snappedContent_l8vg7_175"
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPage/ObjectPageUtils.js
var import_react57 = __toESM(require_react(), 1);
var getSectionById = (sections, id) => {
  return safeGetChildrenArray(sections).find((objectPageSection) => {
    return (0, import_react57.isValidElement)(objectPageSection) && objectPageSection.props?.id === id;
  });
};
var extractSectionIdFromHtmlId = (id) => {
  if (!id) return null;
  return id.replace(/^ObjectPageSection-/, "");
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPage/index.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
addCustomCSSWithScoping(
  "ui5-tabcontainer",
  // todo: the additional text span adds 3px to the container - needs to be investigated why
  `
  :host([data-component-name="ObjectPageTabContainer"]) [id$="additionalText"] {
    display: none;
  }
  `
);
var ObjectPageCssVariables = {
  headerDisplay: "--_ui5wcr_ObjectPage_header_display",
  titleFontSize: "--_ui5wcr_ObjectPage_title_fontsize"
};
var TAB_CONTAINER_HEADER_HEIGHT = 48;
var ObjectPage = (0, import_react58.forwardRef)((props, ref) => {
  const _a = props, {
    headerTitle,
    image,
    footer,
    mode = ObjectPageMode.Default,
    imageShapeCircle,
    className,
    style,
    slot,
    children,
    selectedSectionId,
    headerPinned: headerPinnedProp,
    headerContent,
    hidePinButton,
    preserveHeaderStateOnClick,
    accessibilityAttributes,
    placeholder,
    onSelectedSectionChange,
    onToggleHeaderContent,
    onPinnedStateChange,
    onBeforeNavigate
  } = _a, rest = __objRest(_a, [
    "headerTitle",
    "image",
    "footer",
    "mode",
    "imageShapeCircle",
    "className",
    "style",
    "slot",
    "children",
    "selectedSectionId",
    "headerPinned",
    "headerContent",
    "hidePinButton",
    "preserveHeaderStateOnClick",
    "accessibilityAttributes",
    "placeholder",
    "onSelectedSectionChange",
    "onToggleHeaderContent",
    "onPinnedStateChange",
    "onBeforeNavigate"
  ]);
  useStylesheet(styleData30, ObjectPage.displayName);
  const firstSectionId = safeGetChildrenArray(children)[0]?.props?.id;
  const [internalSelectedSectionId, setInternalSelectedSectionId] = (0, import_react58.useState)(selectedSectionId ?? firstSectionId);
  const [selectedSubSectionId, setSelectedSubSectionId] = (0, import_react58.useState)(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = (0, import_react58.useState)(headerPinnedProp);
  const isProgrammaticallyScrolled = (0, import_react58.useRef)(false);
  const prevSelectedSectionId = (0, import_react58.useRef)(void 0);
  const [componentRef, objectPageRef] = useSyncRef(ref);
  const topHeaderRef = (0, import_react58.useRef)(null);
  const scrollEvent = (0, import_react58.useRef)(void 0);
  const prevTopHeaderHeight = (0, import_react58.useRef)(0);
  const [componentRefHeaderContent, headerContentRef] = useSyncRef(headerContent?.ref);
  const anchorBarRef = (0, import_react58.useRef)(null);
  const objectPageContentRef = (0, import_react58.useRef)(null);
  const selectionScrollTimeout = (0, import_react58.useRef)(null);
  const [isAfterScroll, setIsAfterScroll] = (0, import_react58.useState)(false);
  const isToggledRef = (0, import_react58.useRef)(false);
  const [headerCollapsedInternal, setHeaderCollapsedInternal] = (0, import_react58.useState)(void 0);
  const [scrolledHeaderExpanded, setScrolledHeaderExpanded] = (0, import_react58.useState)(false);
  const scrollTimeout = (0, import_react58.useRef)(0);
  const [sectionSpacer, setSectionSpacer] = (0, import_react58.useState)(0);
  const [currentTabModeSection, setCurrentTabModeSection] = (0, import_react58.useState)(null);
  const sections = mode === ObjectPageMode.IconTabBar ? currentTabModeSection : children;
  (0, import_react58.useEffect)(() => {
    const currentSection = mode === ObjectPageMode.IconTabBar ? getSectionById(children, internalSelectedSectionId) : null;
    setCurrentTabModeSection(currentSection);
  }, [mode, children, internalSelectedSectionId]);
  const prevInternalSelectedSectionId = (0, import_react58.useRef)(internalSelectedSectionId);
  const fireOnSelectedChangedEvent = (targetEvent, index, id, section) => {
    if (typeof onSelectedSectionChange === "function" && prevInternalSelectedSectionId.current !== id) {
      onSelectedSectionChange(enrichEventWithDetails(targetEvent, {
        selectedSectionIndex: parseInt(index, 10),
        selectedSectionId: id,
        section
      }));
      prevInternalSelectedSectionId.current = id;
    }
  };
  const debouncedOnSectionChange = (0, import_react58.useRef)(debounce(fireOnSelectedChangedEvent, 500)).current;
  (0, import_react58.useEffect)(() => {
    return () => {
      debouncedOnSectionChange.cancel();
      clearTimeout(selectionScrollTimeout.current);
    };
  }, []);
  const {
    topHeaderHeight,
    headerContentHeight,
    anchorBarHeight,
    totalHeaderHeight,
    headerCollapsed
  } = useObserveHeights(objectPageRef, topHeaderRef, headerContentRef, anchorBarRef, [headerCollapsedInternal, setHeaderCollapsedInternal], {
    noHeader: !headerTitle && !headerContent,
    fixedHeader: headerPinned,
    scrollTimeout
  });
  (0, import_react58.useEffect)(() => {
    if (typeof onToggleHeaderContent === "function" && isToggledRef.current) {
      onToggleHeaderContent(headerCollapsed !== true);
    }
  }, [headerCollapsed]);
  const avatar = (0, import_react58.useMemo)(() => {
    if (!image) {
      return null;
    }
    if (typeof image === "string") {
      return (0, import_jsx_runtime47.jsx)("span", {
        className: classNames30.headerImage,
        style: {
          borderRadius: imageShapeCircle ? "50%" : 0,
          overflow: "hidden"
        },
        children: (0, import_jsx_runtime47.jsx)("img", {
          src: image,
          className: classNames30.image,
          alt: "Company Logo"
        })
      });
    } else {
      return (0, import_react58.cloneElement)(image, {
        size: AvatarSize_default.L,
        className: clsx(classNames30.headerImage, image.props?.className)
      });
    }
  }, [image, classNames30.headerImage, classNames30.image, imageShapeCircle]);
  const scrollToSectionById = (id, isSubSection = false) => {
    const section = objectPageRef.current?.querySelector(`#${isSubSection ? "ObjectPageSubSection" : "ObjectPageSection"}-${CSS.escape(id)}`);
    scrollTimeout.current = performance.now() + 500;
    if (section) {
      const safeTopHeaderHeight = topHeaderHeight || prevTopHeaderHeight.current;
      section.style.scrollMarginBlockStart = safeTopHeaderHeight + anchorBarHeight + TAB_CONTAINER_HEADER_HEIGHT + (headerPinned ? headerContentHeight : 0) + "px";
      section.focus();
      section.scrollIntoView({
        behavior: "smooth"
      });
      section.style.scrollMarginBlockStart = "0px";
    }
  };
  const scrollToSection = (sectionId) => {
    if (!sectionId) {
      return;
    }
    if (firstSectionId === sectionId) {
      objectPageRef.current?.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      scrollToSectionById(sectionId);
    }
    isProgrammaticallyScrolled.current = false;
  };
  const programmaticallySetSection = () => {
    const currentId = selectedSectionId ?? firstSectionId;
    if (currentId !== prevSelectedSectionId.current) {
      debouncedOnSectionChange.cancel();
      isProgrammaticallyScrolled.current = true;
      setInternalSelectedSectionId(currentId);
      prevSelectedSectionId.current = currentId;
      const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
      const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection) => {
        return (0, import_react58.isValidElement)(objectPageSection) && objectPageSection.props?.id === currentId;
      });
      fireOnSelectedChangedEvent({}, currentIndex, currentId, sectionNodes[0]);
    }
  };
  const [timeStamp, setTimeStamp] = (0, import_react58.useState)(0);
  const requestAnimationFrameRef = (0, import_react58.useRef)(void 0);
  (0, import_react58.useEffect)(() => {
    if (selectedSectionId) {
      if (mode === ObjectPageMode.Default) {
        if (timeStamp < 750 && timeStamp !== void 0) {
          requestAnimationFrameRef.current = requestAnimationFrame((internalTimestamp) => {
            setTimeStamp(internalTimestamp);
          });
        } else {
          setTimeStamp(void 0);
          programmaticallySetSection();
        }
      } else {
        programmaticallySetSection();
      }
    }
    return () => {
      cancelAnimationFrame(requestAnimationFrameRef.current);
    };
  }, [timeStamp, selectedSectionId, firstSectionId, debouncedOnSectionChange]);
  const handleOnSectionSelected = (targetEvent, newSelectionSectionId, index, section) => {
    isProgrammaticallyScrolled.current = true;
    debouncedOnSectionChange.cancel();
    setInternalSelectedSectionId((prevSelectedSection) => {
      if (prevSelectedSection === newSelectionSectionId) {
        scrollToSection(newSelectionSectionId);
      }
      return newSelectionSectionId;
    });
    scrollEvent.current = targetEvent;
    fireOnSelectedChangedEvent(targetEvent, index, newSelectionSectionId, section);
  };
  (0, import_react58.useEffect)(() => {
    if (mode === ObjectPageMode.Default && isProgrammaticallyScrolled.current === true && !selectedSubSectionId) {
      scrollToSection(internalSelectedSectionId);
    }
  }, [internalSelectedSectionId, mode, isProgrammaticallyScrolled, scrollToSection, selectedSubSectionId]);
  (0, import_react58.useEffect)(() => {
    if (selectedSubSectionId && isProgrammaticallyScrolled.current === true && sectionSpacer) {
      scrollToSectionById(selectedSubSectionId, true);
      isProgrammaticallyScrolled.current = false;
    }
  }, [selectedSubSectionId, isProgrammaticallyScrolled.current, sectionSpacer]);
  (0, import_react58.useEffect)(() => {
    if (headerPinnedProp !== void 0) {
      setHeaderPinned(headerPinnedProp);
    }
    if (headerPinnedProp) {
      onToggleHeaderContentVisibility({
        detail: {
          visible: true
        }
      });
    }
  }, [headerPinnedProp]);
  const prevHeaderPinned = (0, import_react58.useRef)(headerPinned);
  (0, import_react58.useEffect)(() => {
    if (prevHeaderPinned.current && !headerPinned && objectPageRef.current.scrollTop > topHeaderHeight) {
      onToggleHeaderContentVisibility({
        detail: {
          visible: false
        }
      });
      prevHeaderPinned.current = false;
    }
    if (!prevHeaderPinned.current && headerPinned) {
      prevHeaderPinned.current = true;
    }
  }, [headerPinned, topHeaderHeight]);
  (0, import_react58.useEffect)(() => {
    setSelectedSubSectionId(props.selectedSubSectionId);
    if (props.selectedSubSectionId) {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        let sectionId;
        safeGetChildrenArray(children).forEach((section) => {
          if ((0, import_react58.isValidElement)(section) && section.props && section.props.children) {
            safeGetChildrenArray(section.props.children).forEach((subSection) => {
              if ((0, import_react58.isValidElement)(subSection) && subSection.props && subSection.props.id === props.selectedSubSectionId) {
                sectionId = section.props?.id;
              }
            });
          }
        });
        if (sectionId) {
          setInternalSelectedSectionId(sectionId);
        }
      }
    }
  }, [props.selectedSubSectionId, children, mode]);
  const tabContainerContainerRef = (0, import_react58.useRef)(null);
  (0, import_react58.useEffect)(() => {
    const objectPage = objectPageRef.current;
    const sectionNodes = objectPage.querySelectorAll('[id^="ObjectPageSection"]');
    const lastSectionNode = sectionNodes[sectionNodes.length - 1];
    const tabContainerContainer = tabContainerContainerRef.current;
    const observer = new ResizeObserver(([sectionElement]) => {
      const subSections = lastSectionNode.querySelectorAll('[id^="ObjectPageSubSection"]');
      const lastSubSection = subSections[subSections.length - 1];
      const lastSubSectionOrSection = lastSubSection ?? sectionElement.target;
      if (currentTabModeSection && !lastSubSection || sectionNodes.length === 1 && !lastSubSection) {
        setSectionSpacer(0);
      } else if (!!tabContainerContainer) {
        setSectionSpacer(objectPage.getBoundingClientRect().bottom - tabContainerContainer.getBoundingClientRect().bottom - lastSubSectionOrSection.getBoundingClientRect().height - TAB_CONTAINER_HEADER_HEIGHT);
      }
    });
    if (objectPage && lastSectionNode) {
      observer.observe(lastSectionNode, {
        box: "border-box"
      });
    }
    return () => {
      observer.disconnect();
    };
  }, [headerCollapsed, topHeaderHeight, headerContentHeight, currentTabModeSection, children]);
  const onToggleHeaderContentVisibility = (0, import_react58.useCallback)((e) => {
    isToggledRef.current = true;
    scrollTimeout.current = performance.now() + 500;
    if (!e.detail.visible) {
      setHeaderCollapsedInternal(true);
      objectPageRef.current?.classList.add(classNames30.headerCollapsed);
    } else {
      setHeaderCollapsedInternal(false);
      setScrolledHeaderExpanded(true);
      objectPageRef.current?.classList.remove(classNames30.headerCollapsed);
    }
  }, []);
  const handleOnSubSectionSelected = (0, import_react58.useCallback)((e) => {
    isProgrammaticallyScrolled.current = true;
    if (mode === ObjectPageMode.IconTabBar) {
      const sectionId = e.detail.sectionId;
      setInternalSelectedSectionId(sectionId);
      const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
      const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection) => {
        return (0, import_react58.isValidElement)(objectPageSection) && objectPageSection.props?.id === sectionId;
      });
      debouncedOnSectionChange(e, currentIndex, sectionId, sectionNodes[currentIndex]);
    }
    const subSectionId = e.detail.subSectionId;
    scrollTimeout.current = performance.now() + 200;
    setSelectedSubSectionId(subSectionId);
  }, [mode, setInternalSelectedSectionId, setSelectedSubSectionId, isProgrammaticallyScrolled, children]);
  const objectPageClasses = clsx(classNames30.objectPage, className, mode === ObjectPageMode.IconTabBar && classNames30.iconTabBarMode);
  const _b = rest, {
    onScroll: _0,
    selectedSubSectionId: _1
  } = _b, propsWithoutOmitted = __objRest(_b, [
    "onScroll",
    "selectedSubSectionId"
  ]);
  (0, import_react58.useEffect)(() => {
    const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
    const objectPageHeight = objectPageRef.current?.clientHeight ?? 1e3;
    const marginBottom = objectPageHeight - totalHeaderHeight - /*TabContainer*/
    TAB_CONTAINER_HEADER_HEIGHT;
    const rootMargin = `-${totalHeaderHeight}px 0px -${marginBottom < 0 ? 0 : marginBottom}px 0px`;
    const observer = new IntersectionObserver(([section]) => {
      if (section.isIntersecting && isProgrammaticallyScrolled.current === false) {
        if (objectPageRef.current.getBoundingClientRect().top + totalHeaderHeight + TAB_CONTAINER_HEADER_HEIGHT <= section.target.getBoundingClientRect().bottom) {
          const currentId = extractSectionIdFromHtmlId(section.target.id);
          setInternalSelectedSectionId(currentId);
          const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection) => {
            return (0, import_react58.isValidElement)(objectPageSection) && objectPageSection.props?.id === currentId;
          });
          debouncedOnSectionChange(scrollEvent.current, currentIndex, currentId, section.target);
        }
      }
    }, {
      root: objectPageRef.current,
      rootMargin,
      threshold: [0]
    });
    sectionNodes.forEach((el) => {
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
  }, [children, totalHeaderHeight, setInternalSelectedSectionId, isProgrammaticallyScrolled]);
  (0, import_react58.useEffect)(() => {
    const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
    if (isAfterScroll) {
      let currentSection = sectionNodes[sectionNodes.length - 1];
      let currentIndex;
      for (let i = 0; i <= sectionNodes.length - 1; i++) {
        const sectionNode = sectionNodes[i];
        if (objectPageRef.current.getBoundingClientRect().top + totalHeaderHeight + TAB_CONTAINER_HEADER_HEIGHT <= sectionNode.getBoundingClientRect().bottom) {
          currentSection = sectionNode;
          currentIndex = i;
          break;
        }
      }
      const currentSectionId = extractSectionIdFromHtmlId(currentSection?.id);
      if (currentSectionId !== internalSelectedSectionId) {
        setInternalSelectedSectionId(currentSectionId);
        debouncedOnSectionChange(scrollEvent.current, currentIndex ?? sectionNodes.length - 1, currentSectionId, currentSection);
      }
      setIsAfterScroll(false);
    }
  }, [isAfterScroll]);
  const onTitleClick = (e) => {
    e.stopPropagation();
    if (!preserveHeaderStateOnClick) onToggleHeaderContentVisibility(enrichEventWithDetails(e, {
      visible: headerCollapsed
    }));
  };
  const snappedHeaderInObjPage = headerTitle && headerTitle.props.snappedContent && headerCollapsed === true && !!image;
  const isInitial = (0, import_react58.useRef)(true);
  (0, import_react58.useEffect)(() => {
    if (!isInitial.current) {
      scrollTimeout.current = performance.now() + 200;
    } else {
      isInitial.current = false;
    }
  }, [snappedHeaderInObjPage]);
  const renderHeaderContentSection = (0, import_react58.useCallback)(() => {
    if (headerContent?.props) {
      return (0, import_react58.cloneElement)(headerContent, __spreadProps(__spreadValues({}, headerContent.props), {
        topHeaderHeight,
        style: headerCollapsed === true ? {
          position: "absolute",
          visibility: "hidden",
          flexShrink: 0
        } : __spreadProps(__spreadValues({}, headerContent.props.style), {
          flexShrink: 0
        }),
        headerPinned: headerPinned || scrolledHeaderExpanded,
        //@ts-expect-error: todo remove me when forwardref has been replaced
        ref: componentRefHeaderContent,
        children: (0, import_jsx_runtime47.jsxs)("div", {
          className: classNames30.headerContainer,
          "data-component-name": "ObjectPageHeaderContainer",
          children: [avatar, headerContent.props.children && (0, import_jsx_runtime47.jsx)("div", {
            "data-component-name": "ObjectPageHeaderContent",
            children: headerContent.props.children
          })]
        })
      }));
    }
  }, [headerContent, topHeaderHeight, headerPinned, scrolledHeaderExpanded, avatar, headerContentRef]);
  const onTabItemSelect = (event) => {
    if (typeof onBeforeNavigate === "function") {
      const selectedTabDataset = event.detail.tab.dataset;
      const sectionIndex = parseInt(selectedTabDataset.index, 10);
      const sectionId2 = selectedTabDataset.parentId ?? selectedTabDataset.sectionId;
      const subSectionId = selectedTabDataset.hasOwnProperty("isSubTab") ? selectedTabDataset.sectionId : void 0;
      onBeforeNavigate(enrichEventWithDetails(event, {
        sectionIndex,
        sectionId: sectionId2,
        subSectionId
      }));
      if (event.defaultPrevented) {
        return;
      }
    }
    event.preventDefault();
    const {
      sectionId,
      index,
      isSubTab,
      parentId
    } = event.detail.tab.dataset;
    if (isSubTab !== void 0) {
      handleOnSubSectionSelected(enrichEventWithDetails(event, {
        sectionId: parentId,
        subSectionId: sectionId
      }));
    } else {
      const section = safeGetChildrenArray(children).find((el) => {
        return el.props.id == sectionId;
      });
      handleOnSectionSelected(event, section?.props?.id, index, section);
    }
  };
  const prevScrollTop = (0, import_react58.useRef)(void 0);
  const onObjectPageScroll = (0, import_react58.useCallback)((e) => {
    if (!isToggledRef.current) {
      isToggledRef.current = true;
    }
    if (scrollTimeout.current >= performance.now()) {
      return;
    }
    scrollEvent.current = e;
    if (typeof props.onScroll === "function") {
      props.onScroll(e);
    }
    if (selectedSubSectionId) {
      setSelectedSubSectionId(void 0);
    }
    if (selectionScrollTimeout.current) {
      clearTimeout(selectionScrollTimeout.current);
    }
    selectionScrollTimeout.current = setTimeout(() => {
      setIsAfterScroll(true);
    }, 100);
    if (!headerPinned || e.target.scrollTop === 0) {
      objectPageRef.current?.classList.remove(classNames30.headerCollapsed);
    }
    if (scrolledHeaderExpanded && e.target.scrollTop !== prevScrollTop.current) {
      if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
        return;
      }
      prevScrollTop.current = e.target.scrollTop;
      if (!headerPinned) {
        setHeaderCollapsedInternal(true);
      }
      setScrolledHeaderExpanded(false);
    }
  }, [topHeaderHeight, headerPinned, props.onScroll, scrolledHeaderExpanded, selectedSubSectionId]);
  const onHoverToggleButton = (0, import_react58.useCallback)((e) => {
    if (e?.type === "mouseover") {
      topHeaderRef.current?.classList.add(classNames30.headerHoverStyles);
    } else {
      topHeaderRef.current?.classList.remove(classNames30.headerHoverStyles);
    }
  }, [classNames30.headerHoverStyles]);
  const objectPageStyles = __spreadValues({}, style);
  if (headerCollapsed === true && headerContent) {
    objectPageStyles[ObjectPageCssVariables.titleFontSize] = ThemingParameters.sapObjectHeader_Title_SnappedFontSize;
  }
  return (0, import_jsx_runtime47.jsxs)("div", __spreadProps(__spreadValues({
    "data-component-name": "ObjectPage",
    slot,
    className: objectPageClasses,
    style: objectPageStyles,
    ref: componentRef,
    onScroll: onObjectPageScroll
  }, propsWithoutOmitted), {
    children: [(0, import_jsx_runtime47.jsxs)("header", {
      onMouseOver: onHoverToggleButton,
      onMouseLeave: onHoverToggleButton,
      "data-component-name": "ObjectPageTopHeader",
      ref: topHeaderRef,
      role: accessibilityAttributes?.objectPageTopHeader?.role,
      "data-not-clickable": !!preserveHeaderStateOnClick,
      "aria-roledescription": accessibilityAttributes?.objectPageTopHeader?.ariaRoledescription ?? "Object Page header",
      className: classNames30.header,
      onClick: onTitleClick,
      style: {
        gridAutoColumns: `min-content ${headerTitle && image && headerCollapsed === true ? `calc(100% - 3rem - 1rem)` : "100%"}`
      },
      children: [headerTitle && image && headerCollapsed === true && (0, import_jsx_runtime47.jsx)(CollapsedAvatar, {
        image,
        imageShapeCircle
      }), headerTitle && (0, import_react58.cloneElement)(headerTitle, {
        className: clsx(headerTitle?.props?.className),
        onToggleHeaderContentVisibility: onTitleClick,
        "data-not-clickable": !!preserveHeaderStateOnClick,
        "data-header-content-visible": headerContent && headerCollapsed !== true,
        "data-is-snapped-rendered-outside": snappedHeaderInObjPage
      }), snappedHeaderInObjPage && (0, import_jsx_runtime47.jsx)("div", {
        className: classNames30.snappedContent,
        "data-component-name": "ATwithImageSnappedContentContainer",
        children: headerTitle.props.snappedContent
      })]
    }), renderHeaderContentSection(), headerContent && headerTitle && (0, import_jsx_runtime47.jsx)("div", {
      "data-component-name": "ObjectPageAnchorBar",
      ref: anchorBarRef,
      className: classNames30.anchorBar,
      style: {
        top: scrolledHeaderExpanded || headerPinned ? `${topHeaderHeight + (headerCollapsed === true ? 0 : headerContentHeight)}px` : `${topHeaderHeight + 5}px`
      },
      children: (0, import_jsx_runtime47.jsx)(ObjectPageAnchorBar, {
        headerContentVisible: headerContent && headerCollapsed !== true,
        hidePinButton: !!hidePinButton,
        headerPinned,
        accessibilityAttributes,
        onToggleHeaderContentVisibility,
        setHeaderPinned,
        onHoverToggleButton,
        onPinnedStateChange
      })
    }), !placeholder && (0, import_jsx_runtime47.jsx)("div", {
      ref: tabContainerContainerRef,
      className: classNames30.tabContainer,
      "data-component-name": "ObjectPageTabContainer",
      style: {
        top: headerPinned || scrolledHeaderExpanded ? `${topHeaderHeight + (headerCollapsed === true ? 0 : headerContentHeight)}px` : `${topHeaderHeight}px`
      },
      children: (0, import_jsx_runtime47.jsx)(TabContainer, {
        collapsed: true,
        onTabSelect: onTabItemSelect,
        "data-component-name": "ObjectPageTabContainer",
        className: classNames30.tabContainerComponent,
        children: safeGetChildrenArray(children).map((section, index) => {
          if (!(0, import_react58.isValidElement)(section) || !section.props) return null;
          const subTabs = safeGetChildrenArray(section.props.children).filter((subSection) => (
            // @ts-expect-error: if the `ObjectPageSubSection` component is passed as children, the `displayName` is available. Otherwise, the default children should be rendered w/o additional logic.
            (0, import_react58.isValidElement)(subSection) && subSection?.type?.displayName === "ObjectPageSubSection"
          ));
          return (0, import_jsx_runtime47.jsx)(Tab, {
            "data-index": index,
            "data-section-id": section.props.id,
            text: section.props.titleText,
            selected: internalSelectedSectionId === section.props?.id || void 0,
            items: subTabs.map((item) => {
              if (!(0, import_react58.isValidElement)(item)) {
                return null;
              }
              return (0, import_jsx_runtime47.jsx)(Tab, {
                "data-parent-id": section.props.id,
                "data-is-sub-tab": true,
                "data-section-id": item.props.id,
                text: item.props.titleText,
                selected: item.props.id === selectedSubSectionId || void 0,
                "data-index": index,
                children: (0, import_jsx_runtime47.jsx)("span", {
                  style: {
                    display: "none"
                  }
                })
              }, item.props.id);
            }),
            children: (0, import_jsx_runtime47.jsx)("span", {
              style: {
                display: "none"
              }
            })
          }, `Anchor-${section.props?.id}`);
        })
      })
    }), (0, import_jsx_runtime47.jsxs)("div", {
      "data-component-name": "ObjectPageContent",
      className: classNames30.content,
      ref: objectPageContentRef,
      children: [(0, import_jsx_runtime47.jsx)("div", {
        style: {
          height: headerCollapsed ? `${headerContentHeight}px` : 0
        },
        "aria-hidden": true
      }), placeholder ? placeholder : sections, (0, import_jsx_runtime47.jsx)("div", {
        style: {
          height: `${sectionSpacer}px`
        },
        "aria-hidden": true
      })]
    }), footer && mode === ObjectPageMode.IconTabBar && !sectionSpacer && (0, import_jsx_runtime47.jsx)("div", {
      className: classNames30.footerSpacer,
      "data-component-name": "ObjectPageFooterSpacer",
      "aria-hidden": true
    }), footer && (0, import_jsx_runtime47.jsx)("footer", {
      className: classNames30.footer,
      "data-component-name": "ObjectPageFooter",
      children: footer
    })]
  }));
});
ObjectPage.displayName = "ObjectPage";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageSection/index.js
var import_react59 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageSection/ObjectPageSection.module.css.js
var styleData31 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ObjectPageSection.module.css",
  content: ".ObjectPageSection_section_16m7y_1 [data-component-name=ObjectPageSubSection]:not(:first-child){padding-block-start:.5rem}.ObjectPageSection_headerContainer_16m7y_5{color:var(--sapGroup_TitleTextColor);font-family:var(--sapFontFamily);padding-block:.5rem}.ObjectPageSection_titleContainer_16m7y_11{border-block-start:var(--_ui5wcr_ObjectPage_SectionBorderTop);box-sizing:border-box;height:2.25rem}.ObjectPageSection_title_16m7y_11{color:var(--sapGroup_TitleTextColor);display:inline-block;font-family:var(--_ui5wcr_ObjectPage_SectionTitleFontFamily);font-size:var(--sapFontHeader4Size);height:var(--_ui5wcr_ObjectPage_SectionTitleHeight);line-height:var(--_ui5wcr_ObjectPage_SectionTitleLineHeight);max-width:100%;overflow:hidden;text-decoration:var(--_ui5wcr_ObjectPage_SectionTitleTextDecoration);text-overflow:ellipsis;white-space:nowrap}.ObjectPageSection_uppercase_16m7y_31{text-transform:uppercase}.ObjectPageSection_wrap_16m7y_35 .ObjectPageSection_titleContainer_16m7y_11{height:unset}.ObjectPageSection_wrap_16m7y_35 .ObjectPageSection_title_16m7y_11{height:unset;line-height:normal;white-space:normal}.ObjectPageSection_sectionContent_16m7y_46{height:100%;white-space:normal}.ObjectPageSection_sectionContentInner_16m7y_51{box-sizing:border-box;font-family:var(--sapFontFamily);height:100%;padding-block:.5rem}"
};
var classNames31 = {
  "section": "ObjectPageSection_section_16m7y_1",
  "headerContainer": "ObjectPageSection_headerContainer_16m7y_5",
  "titleContainer": "ObjectPageSection_titleContainer_16m7y_11",
  "title": "ObjectPageSection_title_16m7y_11",
  "uppercase": "ObjectPageSection_uppercase_16m7y_31",
  "wrap": "ObjectPageSection_wrap_16m7y_35",
  "sectionContent": "ObjectPageSection_sectionContent_16m7y_46",
  "sectionContentInner": "ObjectPageSection_sectionContentInner_16m7y_51"
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageSection/index.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var ObjectPageSection = (0, import_react59.forwardRef)((props, ref) => {
  const _a = props, {
    titleText,
    id,
    children,
    titleTextUppercase,
    className,
    style,
    hideTitleText,
    titleTextLevel = "H3",
    wrapTitleText,
    header
  } = _a, rest = __objRest(_a, [
    "titleText",
    "id",
    "children",
    "titleTextUppercase",
    "className",
    "style",
    "hideTitleText",
    "titleTextLevel",
    "wrapTitleText",
    "header"
  ]);
  useStylesheet(styleData31, ObjectPageSection.displayName);
  const htmlId = `ObjectPageSection-${id}`;
  const titleClasses = clsx(classNames31.title, titleTextUppercase && classNames31.uppercase);
  return (0, import_jsx_runtime48.jsxs)("section", __spreadProps(__spreadValues({
    ref,
    role: "region",
    className: clsx(classNames31.section, wrapTitleText && classNames31.wrap, className),
    style
  }, rest), {
    id: htmlId,
    "data-component-name": "ObjectPageSection",
    children: [!!header && (0, import_jsx_runtime48.jsx)("div", {
      className: classNames31.headerContainer,
      children: header
    }), !hideTitleText && (0, import_jsx_runtime48.jsx)("div", {
      role: "heading",
      "aria-level": parseInt(titleTextLevel.slice(1)),
      className: classNames31.titleContainer,
      "data-component-name": "ObjectPageSectionTitleText",
      children: (0, import_jsx_runtime48.jsx)("div", {
        className: titleClasses,
        children: titleText
      })
    }), (0, import_jsx_runtime48.jsx)("div", {
      className: classNames31.sectionContent,
      children: (0, import_jsx_runtime48.jsx)("div", {
        className: classNames31.sectionContentInner,
        "data-component-name": "ObjectPageSectionContent",
        children
      })
    })]
  }));
});
ObjectPageSection.displayName = "ObjectPageSection";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageSubSection/index.js
var import_react60 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageSubSection/ObjectPageSubSection.module.css.js
var styleData32 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ObjectPageSubSection.module.css",
  content: ".ObjectPageSubSection_objectPageSubSection_1usej_1:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(var(--sapContent_FocusWidth)*-1)}.ObjectPageSubSection_headerContainer_1usej_6{margin-block-end:.5rem}.ObjectPageSubSection_headerContainer_1usej_6>:first-child{margin-inline:0 .25rem}.ObjectPageSubSection_headerContainer_1usej_6>:last-child:not(:first-child){margin-inline:.25rem 0}.ObjectPageSubSection_headerContainer_1usej_6>:not(:first-child):not(:last-child){margin-inline:.25rem}.ObjectPageSubSection_subSectionTitle_1usej_20{color:var(--sapGroup_TitleTextColor);flex-grow:1;font-size:var(--sapFontHeader5Size)}.ObjectPageSubSection_subSectionContent_1usej_26{background-color:var(--_ui5wcr_ObjectPage_SubSectionBackgroundColor);border-radius:var(--_ui5wcr_ObjectPage_SubSectionBorderRadius);padding-block:1rem;padding-inline:.5rem}.ObjectPageSubSection_spacer_1usej_33{flex-grow:1}.ObjectPageSubSection_uppercase_1usej_37{text-transform:uppercase}"
};
var classNames32 = {
  "objectPageSubSection": "ObjectPageSubSection_objectPageSubSection_1usej_1",
  "headerContainer": "ObjectPageSubSection_headerContainer_1usej_6",
  "subSectionTitle": "ObjectPageSubSection_subSectionTitle_1usej_20",
  "subSectionContent": "ObjectPageSubSection_subSectionContent_1usej_26",
  "spacer": "ObjectPageSubSection_spacer_1usej_33",
  "uppercase": "ObjectPageSubSection_uppercase_1usej_37"
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectPageSubSection/index.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var ObjectPageSubSection = (0, import_react60.forwardRef)((props, ref) => {
  const _a = props, {
    children,
    id,
    titleText,
    className,
    style,
    actions: actions3,
    hideTitleText,
    titleTextLevel = "H4",
    titleTextUppercase
  } = _a, rest = __objRest(_a, [
    "children",
    "id",
    "titleText",
    "className",
    "style",
    "actions",
    "hideTitleText",
    "titleTextLevel",
    "titleTextUppercase"
  ]);
  const htmlId = `ObjectPageSubSection-${id}`;
  useStylesheet(styleData32, ObjectPageSubSection.displayName);
  const subSectionClassName = clsx(classNames32.objectPageSubSection, className);
  return (0, import_jsx_runtime49.jsxs)("div", __spreadProps(__spreadValues({
    ref,
    role: "region",
    style,
    tabIndex: -1
  }, rest), {
    className: subSectionClassName,
    id: htmlId,
    "data-component-name": "ObjectPageSubSection",
    children: [(0, import_jsx_runtime49.jsxs)(FlexBox, {
      direction: FlexBoxDirection.Row,
      justifyContent: FlexBoxJustifyContent.SpaceBetween,
      alignItems: FlexBoxAlignItems.Center,
      className: classNames32.headerContainer,
      "data-component-name": "ObjectPageSubSectionHeaderContainer",
      children: [!hideTitleText ? (0, import_jsx_runtime49.jsx)("div", {
        role: "heading",
        "aria-level": parseInt(titleTextLevel.slice(1)),
        className: clsx(classNames32.subSectionTitle, titleTextUppercase && classNames32.uppercase),
        "data-component-name": "ObjectPageSubSectionTitleText",
        children: titleText
      }) : (0, import_jsx_runtime49.jsx)("span", {
        "aria-hidden": "true",
        className: classNames32.spacer
      }), actions3 && actions3]
    }), (0, import_jsx_runtime49.jsx)("div", {
      className: classNames32.subSectionContent,
      "data-component-name": "ObjectPageSubSectionContent",
      children
    })]
  }));
});
ObjectPageSubSection.displayName = "ObjectPageSubSection";

// node_modules/@ui5/webcomponents-react/dist/components/ObjectStatus/index.js
var import_react61 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/ObjectStatus/ObjectStatus.module.css.js
var styleData33 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ObjectStatus.module.css",
  content: ".ObjectStatus_normalizeCSS_tj16k_1{all:unset}.ObjectStatus_objectStatus_tj16k_5{display:inline-block;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;position:relative;text-shadow:var(--sapContent_TextShadow);vertical-align:top;width:fit-content}.ObjectStatus_icon_tj16k_16{display:inline-block;height:1rem;line-height:1rem;padding-inline-end:.25rem;text-align:center;text-shadow:var(--sapContent_TextShadow);vertical-align:top;width:1rem}.ObjectStatus_icon_tj16k_16[data-icon-only=true]{padding-inline-end:0}.ObjectStatus_text_tj16k_31{display:inline-block;height:inherit;line-height:1rem;vertical-align:top}.ObjectStatus_emptyIndicator_tj16k_38{color:var(--sapTextColor);line-height:normal}.ObjectStatus_pseudoInvisibleText_tj16k_43{font-size:0;left:0;position:absolute;top:0;user-select:none}.ObjectStatus_positive_tj16k_51{color:var(--sapPositiveTextColor)}.ObjectStatus_positive_tj16k_51 [ui5-icon]{color:var(--sapPositiveElementColor)}.ObjectStatus_critical_tj16k_59{color:var(--sapCriticalTextColor)}.ObjectStatus_critical_tj16k_59 [ui5-icon]{color:var(--sapCriticalElementColor)}.ObjectStatus_negative_tj16k_67{color:var(--sapNegativeTextColor)}.ObjectStatus_negative_tj16k_67 [ui5-icon]{color:var(--sapNegativeElementColor)}.ObjectStatus_information_tj16k_75{color:var(--sapInformativeTextColor)}.ObjectStatus_information_tj16k_75 [ui5-icon]{color:var(--sapInformativeElementColor)}.ObjectStatus_none_tj16k_83{color:var(--sapNeutralTextColor)}.ObjectStatus_none_tj16k_83 [ui5-icon]{color:var(--sapNeutralElementColor)}.ObjectStatus_indication01_tj16k_91{color:var(--sapIndicationColor_1)}.ObjectStatus_indication01_tj16k_91 [ui5-icon]{color:var(--sapIndicationColor_1)}.ObjectStatus_indication02_tj16k_99{color:var(--sapIndicationColor_2)}.ObjectStatus_indication02_tj16k_99 [ui5-icon]{color:var(--sapIndicationColor_2)}.ObjectStatus_indication03_tj16k_107{color:var(--sapIndicationColor_3)}.ObjectStatus_indication03_tj16k_107 [ui5-icon]{color:var(--sapIndicationColor_3)}.ObjectStatus_indication04_tj16k_115{color:var(--sapIndicationColor_4)}.ObjectStatus_indication04_tj16k_115 [ui5-icon]{color:var(--sapIndicationColor_4)}.ObjectStatus_indication05_tj16k_123{color:var(--sapIndicationColor_5)}.ObjectStatus_indication05_tj16k_123 [ui5-icon]{color:var(--sapIndicationColor_5)}.ObjectStatus_indication06_tj16k_131{color:var(--sapIndicationColor_6)}.ObjectStatus_indication06_tj16k_131 [ui5-icon]{color:var(--sapIndicationColor_6)}.ObjectStatus_indication07_tj16k_139{color:var(--sapIndicationColor_7)}.ObjectStatus_indication07_tj16k_139 [ui5-icon]{color:var(--sapIndicationColor_7)}.ObjectStatus_indication08_tj16k_147{color:var(--sapIndicationColor_8)}.ObjectStatus_indication08_tj16k_147 [ui5-icon]{color:var(--sapIndicationColor_8)}.ObjectStatus_large_tj16k_155{font-family:var(--sapFontLightFamily);font-size:1.5rem}.ObjectStatus_large_tj16k_155 .ObjectStatus_icon_tj16k_16,.ObjectStatus_large_tj16k_155 [ui5-icon]{height:1.5rem;width:1.5rem}.ObjectStatus_large_tj16k_155 .ObjectStatus_icon_tj16k_16{vertical-align:middle}.ObjectStatus_large_tj16k_155 .ObjectStatus_text_tj16k_31{line-height:normal;vertical-align:middle}.ObjectStatus_large_tj16k_155.ObjectStatus_inverted_tj16k_174{font-family:var(--sapFontSemiboldDuplexFamily);font-size:1.25rem;padding:.125rem .25rem}.ObjectStatus_large_tj16k_155.ObjectStatus_inverted_tj16k_174 .ObjectStatus_icon_tj16k_16,.ObjectStatus_large_tj16k_155.ObjectStatus_inverted_tj16k_174 [ui5-icon]{height:1.25rem;width:1.25rem}.ObjectStatus_large_tj16k_155.ObjectStatus_inverted_tj16k_174[data-icon-only=true]{height:auto;min-width:1.75rem;padding:0 .25rem}.ObjectStatus_large_tj16k_155.ObjectStatus_inverted_tj16k_174 [data-icon-only=true]{height:1.5rem;width:1.5rem}.ObjectStatus_large_tj16k_155.ObjectStatus_inverted_tj16k_174 [data-icon-only=true] [ui5-icon]{height:1.5rem;width:1.5rem}.ObjectStatus_active_tj16k_203{cursor:pointer}.ObjectStatus_active_tj16k_203:not(.ObjectStatus_inverted_tj16k_174) .ObjectStatus_text_tj16k_31{text-decoration:underline}.ObjectStatus_active_tj16k_203:not(.ObjectStatus_inverted_tj16k_174):active .ObjectStatus_text_tj16k_31,.ObjectStatus_active_tj16k_203:not(.ObjectStatus_inverted_tj16k_174):hover .ObjectStatus_text_tj16k_31{text-decoration:none}.ObjectStatus_active_tj16k_203:not(.ObjectStatus_inverted_tj16k_174):focus{background:var(--sapContent_FocusColor);border-radius:.125rem;color:var(--sapContent_ContrastTextColor);outline:.125rem var(--sapContent_FocusColor);text-shadow:none}.ObjectStatus_active_tj16k_203:not(.ObjectStatus_inverted_tj16k_174):focus [ui5-icon]{color:var(--sapContent_ContrastTextColor)}.ObjectStatus_inverted_tj16k_174{border-radius:var(--sapButton_BorderCornerRadius);font-family:var(--sapFontBoldFamily);font-size:var(--sapFontSmallSize);height:auto;min-height:1rem;min-width:1.375rem;padding:.1875rem .25rem}.ObjectStatus_inverted_tj16k_174 .ObjectStatus_icon_tj16k_16{vertical-align:text-bottom}.ObjectStatus_inverted_tj16k_174 .ObjectStatus_icon_tj16k_16:not([data-icon-only=true]),.ObjectStatus_inverted_tj16k_174 [ui5-icon]{height:var(--sapFontSmallSize);width:var(--sapFontSmallSize)}.ObjectStatus_inverted_tj16k_174[data-icon-only=true]{align-items:center;display:flex;height:1rem;justify-content:center;padding:.1875rem .313rem;width:1rem}.ObjectStatus_inverted_tj16k_174[data-icon-only=true] [ui5-icon]{height:1rem;width:1rem}.ObjectStatus_inverted_tj16k_174.ObjectStatus_active_tj16k_203:focus{outline:var(--sapContent_FocusColor) var(--sapContent_FocusStyle) var(--sapContent_FocusWidth)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_negative_tj16k_67){text-shadow:var(--sapContent_ContrastTextShadow);--_ui5wcr-ObjectStatus-inverted-vs-text-color:var(--sapButton_Negative_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-background-color:var(--sapButton_Negative_Background);--_ui5wcr-ObjectStatus-inverted-vs-border-color:var(--sapButton_Negative_BorderColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-text-color:var(--sapButton_Negative_Hover_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-background-color:var(--sapButton_Negative_Hover_Background);--_ui5wcr-ObjectStatus-inverted-vs-hover-border-color:var(--sapButton_Negative_Hover_BorderColor);--_ui5wcr-ObjectStatus-inverted-vs-active-text-color:var(--sapButton_Reject_Selected_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-active-background-color:var(--sapButton_Negative_Active_Background);--_ui5wcr-ObjectStatus-inverted-vs-active-border-color:var(--sapButton_Negative_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_critical_tj16k_59){text-shadow:var(--sapContent_ContrastTextShadow);--_ui5wcr-ObjectStatus-inverted-vs-text-color:var(--sapButton_Critical_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-background-color:var(--sapButton_Critical_Background);--_ui5wcr-ObjectStatus-inverted-vs-border-color:var(--sapButton_Critical_BorderColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-text-color:var(--sapButton_Critical_Hover_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-background-color:var(--sapButton_Critical_Hover_Background);--_ui5wcr-ObjectStatus-inverted-vs-hover-border-color:var(--sapButton_Critical_Hover_BorderColor);--_ui5wcr-ObjectStatus-inverted-vs-active-text-color:var(--sapButton_Attention_Selected_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-active-background-color:var(--sapButton_Critical_Active_Background);--_ui5wcr-ObjectStatus-inverted-vs-active-border-color:var(--sapButton_Critical_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_positive_tj16k_51){text-shadow:var(--sapContent_ContrastTextShadow);--_ui5wcr-ObjectStatus-inverted-vs-text-color:var(--sapButton_Success_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-background-color:var(--sapButton_Success_Background);--_ui5wcr-ObjectStatus-inverted-vs-border-color:var(--sapButton_Success_BorderColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-text-color:var(--sapButton_Success_Hover_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-background-color:var(--sapButton_Success_Hover_Background);--_ui5wcr-ObjectStatus-inverted-vs-hover-border-color:var(--sapButton_Success_Hover_BorderColor);--_ui5wcr-ObjectStatus-inverted-vs-active-text-color:var(--sapButton_Accept_Selected_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-active-background-color:var(--sapButton_Success_Active_Background);--_ui5wcr-ObjectStatus-inverted-vs-active-border-color:var(--sapButton_Success_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_information_tj16k_75){text-shadow:var(--sapContent_TextShadow);--_ui5wcr-ObjectStatus-inverted-vs-text-color:var(--sapButton_Information_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-background-color:var(--sapButton_Information_Background);--_ui5wcr-ObjectStatus-inverted-vs-border-color:var(--sapButton_Information_BorderColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-text-color:var(--sapButton_Information_Hover_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-background-color:var(--sapButton_Information_Hover_Background);--_ui5wcr-ObjectStatus-inverted-vs-hover-border-color:var(--sapButton_Information_Hover_BorderColor);--_ui5wcr-ObjectStatus-inverted-vs-active-text-color:var(--sapButton_Selected_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-active-background-color:var(--sapButton_Information_Active_Background);--_ui5wcr-ObjectStatus-inverted-vs-active-border-color:var(--sapButton_Information_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_none_tj16k_83){text-shadow:var(--sapContent_TextShadow);--_ui5wcr-ObjectStatus-inverted-vs-text-color:var(--sapTextColor);--_ui5wcr-ObjectStatus-inverted-vs-background-color:var(--sapNeutralBackground);--_ui5wcr-ObjectStatus-inverted-vs-border-color:var(--sapNeutralBorderColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-text-color:var(--sapButton_Neutral_Hover_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-hover-background-color:var(--sapButton_Neutral_Hover_Background);--_ui5wcr-ObjectStatus-inverted-vs-hover-border-color:var(--sapButton_Neutral_Hover_BorderColor);--_ui5wcr-ObjectStatus-inverted-vs-active-text-color:var(--sapButton_Active_TextColor);--_ui5wcr-ObjectStatus-inverted-vs-active-background-color:var(--sapButton_Neutral_Active_Background);--_ui5wcr-ObjectStatus-inverted-vs-active-border-color:var(--sapButton_Neutral_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_negative_tj16k_67,.ObjectStatus_critical_tj16k_59,.ObjectStatus_positive_tj16k_51,.ObjectStatus_information_tj16k_75,.ObjectStatus_none_tj16k_83){background:var(--_ui5wcr-ObjectStatus-inverted-vs-background-color);border:.0625rem solid var(--_ui5wcr-ObjectStatus-inverted-vs-border-color);color:var(--_ui5wcr-ObjectStatus-inverted-vs-text-color)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_negative_tj16k_67,.ObjectStatus_critical_tj16k_59,.ObjectStatus_positive_tj16k_51,.ObjectStatus_information_tj16k_75,.ObjectStatus_none_tj16k_83) [ui5-icon]{color:var(--_ui5wcr-ObjectStatus-inverted-vs-text-color)}.ObjectStatus_objectStatus_tj16k_5.ObjectStatus_active_tj16k_203:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_negative_tj16k_67,.ObjectStatus_critical_tj16k_59,.ObjectStatus_positive_tj16k_51,.ObjectStatus_information_tj16k_75,.ObjectStatus_none_tj16k_83):hover{background:var(--_ui5wcr-ObjectStatus-inverted-vs-hover-background-color);border:.0625rem solid var(--_ui5wcr-ObjectStatus-inverted-vs-hover-border-color);color:var(--_ui5wcr-ObjectStatus-inverted-vs-hover-text-color)}.ObjectStatus_objectStatus_tj16k_5.ObjectStatus_active_tj16k_203:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_negative_tj16k_67,.ObjectStatus_critical_tj16k_59,.ObjectStatus_positive_tj16k_51,.ObjectStatus_information_tj16k_75,.ObjectStatus_none_tj16k_83):hover [ui5-icon]{color:var(--_ui5wcr-ObjectStatus-inverted-vs-hover-text-color)}.ObjectStatus_objectStatus_tj16k_5.ObjectStatus_active_tj16k_203:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_negative_tj16k_67,.ObjectStatus_critical_tj16k_59,.ObjectStatus_positive_tj16k_51,.ObjectStatus_information_tj16k_75,.ObjectStatus_none_tj16k_83):active{background:var(--_ui5wcr-ObjectStatus-inverted-vs-active-background-color);border:.0625rem solid var(--_ui5wcr-ObjectStatus-inverted-vs-active-border-color);color:var(--_ui5wcr-ObjectStatus-inverted-vs-active-text-color);text-shadow:var(--sapContent_TextShadow)}.ObjectStatus_objectStatus_tj16k_5.ObjectStatus_active_tj16k_203:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_negative_tj16k_67,.ObjectStatus_critical_tj16k_59,.ObjectStatus_positive_tj16k_51,.ObjectStatus_information_tj16k_75,.ObjectStatus_none_tj16k_83):active [ui5-icon]{color:var(--_ui5wcr-ObjectStatus-inverted-vs-active-text-color)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_indication01_tj16k_91){--_ui5wcr-ObjectStatus-inverted-indication-text-color:var(--sapIndicationColor_1_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-background-color:var(--sapIndicationColor_1_Background);--_ui5wcr-ObjectStatus-inverted-indication-border-color:var(--sapIndicationColor_1_BorderColor);--_ui5wcr-ObjectStatus-inverted-indication-hover-background-color:var(--sapIndicationColor_1_Hover_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-text-color:var(--sapIndicationColor_1_Active_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-active-background-color:var(--sapIndicationColor_1_Active_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-border-color:var(--sapIndicationColor_1_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_indication02_tj16k_99){--_ui5wcr-ObjectStatus-inverted-indication-text-color:var(--sapIndicationColor_2_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-background-color:var(--sapIndicationColor_2_Background);--_ui5wcr-ObjectStatus-inverted-indication-border-color:var(--sapIndicationColor_2_BorderColor);--_ui5wcr-ObjectStatus-inverted-indication-hover-background-color:var(--sapIndicationColor_2_Hover_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-text-color:var(--sapIndicationColor_2_Active_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-active-background-color:var(--sapIndicationColor_2_Active_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-border-color:var(--sapIndicationColor_2_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_indication03_tj16k_107){--_ui5wcr-ObjectStatus-inverted-indication-text-color:var(--sapIndicationColor_3_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-background-color:var(--sapIndicationColor_3_Background);--_ui5wcr-ObjectStatus-inverted-indication-border-color:var(--sapIndicationColor_3_BorderColor);--_ui5wcr-ObjectStatus-inverted-indication-hover-background-color:var(--sapIndicationColor_3_Hover_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-text-color:var(--sapIndicationColor_3_Active_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-active-background-color:var(--sapIndicationColor_3_Active_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-border-color:var(--sapIndicationColor_3_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_indication04_tj16k_115){--_ui5wcr-ObjectStatus-inverted-indication-text-color:var(--sapIndicationColor_4_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-background-color:var(--sapIndicationColor_4_Background);--_ui5wcr-ObjectStatus-inverted-indication-border-color:var(--sapIndicationColor_4_BorderColor);--_ui5wcr-ObjectStatus-inverted-indication-hover-background-color:var(--sapIndicationColor_4_Hover_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-text-color:var(--sapIndicationColor_4_Active_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-active-background-color:var(--sapIndicationColor_4_Active_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-border-color:var(--sapIndicationColor_4_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_indication05_tj16k_123){--_ui5wcr-ObjectStatus-inverted-indication-text-color:var(--sapIndicationColor_5_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-background-color:var(--sapIndicationColor_5_Background);--_ui5wcr-ObjectStatus-inverted-indication-border-color:var(--sapIndicationColor_5_BorderColor);--_ui5wcr-ObjectStatus-inverted-indication-hover-background-color:var(--sapIndicationColor_5_Hover_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-text-color:var(--sapIndicationColor_5_Active_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-active-background-color:var(--sapIndicationColor_5_Active_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-border-color:var(--sapIndicationColor_5_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_indication06_tj16k_131){--_ui5wcr-ObjectStatus-inverted-indication-text-color:var(--sapIndicationColor_6_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-background-color:var(--sapIndicationColor_6_Background);--_ui5wcr-ObjectStatus-inverted-indication-border-color:var(--sapIndicationColor_6_BorderColor);--_ui5wcr-ObjectStatus-inverted-indication-hover-background-color:var(--sapIndicationColor_6_Hover_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-text-color:var(--sapIndicationColor_6_Active_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-active-background-color:var(--sapIndicationColor_6_Active_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-border-color:var(--sapIndicationColor_6_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_indication07_tj16k_139){--_ui5wcr-ObjectStatus-inverted-indication-text-color:var(--sapIndicationColor_7_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-background-color:var(--sapIndicationColor_7_Background);--_ui5wcr-ObjectStatus-inverted-indication-border-color:var(--sapIndicationColor_7_BorderColor);--_ui5wcr-ObjectStatus-inverted-indication-hover-background-color:var(--sapIndicationColor_7_Hover_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-text-color:var(--sapIndicationColor_7_Active_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-active-background-color:var(--sapIndicationColor_7_Active_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-border-color:var(--sapIndicationColor_7_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174.ObjectStatus_indication08_tj16k_147){--_ui5wcr-ObjectStatus-inverted-indication-text-color:var(--sapIndicationColor_8_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-background-color:var(--sapIndicationColor_8_Background);--_ui5wcr-ObjectStatus-inverted-indication-border-color:var(--sapIndicationColor_8_BorderColor);--_ui5wcr-ObjectStatus-inverted-indication-hover-background-color:var(--sapIndicationColor_8_Hover_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-text-color:var(--sapIndicationColor_8_Active_TextColor);--_ui5wcr-ObjectStatus-inverted-indication-active-background-color:var(--sapIndicationColor_8_Active_Background);--_ui5wcr-ObjectStatus-inverted-indication-active-border-color:var(--sapIndicationColor_8_Active_BorderColor)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_indication01_tj16k_91,.ObjectStatus_indication02_tj16k_99,.ObjectStatus_indication03_tj16k_107,.ObjectStatus_indication04_tj16k_115,.ObjectStatus_indication05_tj16k_123,.ObjectStatus_indication06_tj16k_131,.ObjectStatus_indication07_tj16k_139,.ObjectStatus_indication08_tj16k_147){background-color:var(--_ui5wcr-ObjectStatus-inverted-indication-background-color);border:.0625rem solid var(--_ui5wcr-ObjectStatus-inverted-indication-border-color);color:var(--_ui5wcr-ObjectStatus-inverted-indication-text-color);text-shadow:var(--sapContent_ContrastTextShadow)}.ObjectStatus_objectStatus_tj16k_5:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_indication01_tj16k_91,.ObjectStatus_indication02_tj16k_99,.ObjectStatus_indication03_tj16k_107,.ObjectStatus_indication04_tj16k_115,.ObjectStatus_indication05_tj16k_123,.ObjectStatus_indication06_tj16k_131,.ObjectStatus_indication07_tj16k_139,.ObjectStatus_indication08_tj16k_147) [ui5-icon]{color:var(--_ui5wcr-ObjectStatus-inverted-indication-text-color)}.ObjectStatus_objectStatus_tj16k_5.ObjectStatus_active_tj16k_203:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_indication01_tj16k_91,.ObjectStatus_indication02_tj16k_99,.ObjectStatus_indication03_tj16k_107,.ObjectStatus_indication04_tj16k_115,.ObjectStatus_indication05_tj16k_123,.ObjectStatus_indication06_tj16k_131,.ObjectStatus_indication07_tj16k_139,.ObjectStatus_indication08_tj16k_147):hover{background:var(--_ui5wcr-ObjectStatus-inverted-indication-hover-background-color)}.ObjectStatus_objectStatus_tj16k_5.ObjectStatus_active_tj16k_203:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_indication01_tj16k_91,.ObjectStatus_indication02_tj16k_99,.ObjectStatus_indication03_tj16k_107,.ObjectStatus_indication04_tj16k_115,.ObjectStatus_indication05_tj16k_123,.ObjectStatus_indication06_tj16k_131,.ObjectStatus_indication07_tj16k_139,.ObjectStatus_indication08_tj16k_147):active{background:var(--_ui5wcr-ObjectStatus-inverted-indication-active-background-color);border:.0625rem solid var(--_ui5wcr-ObjectStatus-inverted-indication-active-border-color);color:var(--_ui5wcr-ObjectStatus-inverted-indication-active-text-color);text-shadow:var(--sapContent_TextShadow)}.ObjectStatus_objectStatus_tj16k_5.ObjectStatus_active_tj16k_203:is(.ObjectStatus_inverted_tj16k_174):is(.ObjectStatus_indication01_tj16k_91,.ObjectStatus_indication02_tj16k_99,.ObjectStatus_indication03_tj16k_107,.ObjectStatus_indication04_tj16k_115,.ObjectStatus_indication05_tj16k_123,.ObjectStatus_indication06_tj16k_131,.ObjectStatus_indication07_tj16k_139,.ObjectStatus_indication08_tj16k_147):active [ui5-icon]{color:var(--_ui5wcr-ObjectStatus-inverted-indication-active-text-color)}"
};
var classNames33 = {
  "normalizeCSS": "ObjectStatus_normalizeCSS_tj16k_1",
  "objectStatus": "ObjectStatus_objectStatus_tj16k_5",
  "icon": "ObjectStatus_icon_tj16k_16",
  "text": "ObjectStatus_text_tj16k_31",
  "emptyIndicator": "ObjectStatus_emptyIndicator_tj16k_38",
  "pseudoInvisibleText": "ObjectStatus_pseudoInvisibleText_tj16k_43",
  "positive": "ObjectStatus_positive_tj16k_51",
  "critical": "ObjectStatus_critical_tj16k_59",
  "negative": "ObjectStatus_negative_tj16k_67",
  "information": "ObjectStatus_information_tj16k_75",
  "none": "ObjectStatus_none_tj16k_83",
  "indication01": "ObjectStatus_indication01_tj16k_91",
  "indication02": "ObjectStatus_indication02_tj16k_99",
  "indication03": "ObjectStatus_indication03_tj16k_107",
  "indication04": "ObjectStatus_indication04_tj16k_115",
  "indication05": "ObjectStatus_indication05_tj16k_123",
  "indication06": "ObjectStatus_indication06_tj16k_131",
  "indication07": "ObjectStatus_indication07_tj16k_139",
  "indication08": "ObjectStatus_indication08_tj16k_147",
  "large": "ObjectStatus_large_tj16k_155",
  "inverted": "ObjectStatus_inverted_tj16k_174",
  "active": "ObjectStatus_active_tj16k_203"
};

// node_modules/@ui5/webcomponents-react/dist/components/ObjectStatus/index.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var getStateSpecifics = (state, showDefaultIcon, userIcon, stateAnnouncementText, i18nTexts) => {
  const {
    indicationColorText,
    errorStateText,
    warningStateText,
    informationStateText,
    successStateText
  } = i18nTexts;
  let icon = userIcon;
  const renderDefaultIcon = showDefaultIcon && !icon;
  let invisibleText = stateAnnouncementText;
  if (!invisibleText && state.startsWith("Indication")) {
    invisibleText = `${indicationColorText} ${state.substring(state.indexOf("0") + 1)}`;
  }
  if (!invisibleText || renderDefaultIcon) {
    switch (state) {
      case ValueState_default.Negative:
        if (renderDefaultIcon) {
          icon = (0, import_jsx_runtime50.jsx)(Icon, {
            name: error_default,
            "data-component-name": "ObjectStatusDefaultIcon",
            "aria-hidden": true
          });
        }
        if (!invisibleText) {
          invisibleText = errorStateText;
        }
        break;
      case ValueState_default.Positive:
        if (renderDefaultIcon) {
          icon = (0, import_jsx_runtime50.jsx)(Icon, {
            name: sys_enter_2_default,
            "data-component-name": "ObjectStatusDefaultIcon",
            "aria-hidden": true
          });
        }
        if (!invisibleText) {
          invisibleText = successStateText;
        }
        break;
      case ValueState_default.Critical:
        if (renderDefaultIcon) {
          icon = (0, import_jsx_runtime50.jsx)(Icon, {
            name: alert_default,
            "data-component-name": "ObjectStatusDefaultIcon",
            "aria-hidden": true
          });
        }
        if (!invisibleText) {
          invisibleText = warningStateText;
        }
        break;
      case ValueState_default.Information:
        if (renderDefaultIcon) {
          icon = (0, import_jsx_runtime50.jsx)(Icon, {
            name: information_default,
            "data-component-name": "ObjectStatusDefaultIcon",
            "aria-hidden": true
          });
        }
        if (!invisibleText) {
          invisibleText = informationStateText;
        }
        break;
    }
  }
  return [icon, invisibleText];
};
var ObjectStatus = (0, import_react61.forwardRef)((props, ref) => {
  const _a = props, {
    state = ValueState_default.None,
    showDefaultIcon,
    children,
    icon,
    className,
    style,
    interactive,
    inverted,
    onClick,
    emptyIndicator,
    stateAnnouncementText,
    large
  } = _a, rest = __objRest(_a, [
    "state",
    "showDefaultIcon",
    "children",
    "icon",
    "className",
    "style",
    "interactive",
    "inverted",
    "onClick",
    "emptyIndicator",
    "stateAnnouncementText",
    "large"
  ]);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const i18nBundleWc = useI18nBundle("@ui5/webcomponents");
  useStylesheet(styleData33, ObjectStatus.displayName);
  const indicationColorText = i18nBundle.getText(INDICATION_COLOR);
  const errorStateText = i18nBundleWc.getText(VALUE_STATE_ERROR);
  const warningStateText = i18nBundleWc.getText(VALUE_STATE_WARNING);
  const informationStateText = i18nBundleWc.getText(VALUE_STATE_INFORMATION);
  const successStateText = i18nBundleWc.getText(VALUE_STATE_SUCCESS);
  const [iconToRender, invisibleText] = getStateSpecifics(state, showDefaultIcon, icon, stateAnnouncementText, {
    indicationColorText,
    errorStateText,
    warningStateText,
    informationStateText,
    successStateText
  });
  const showEmptyIndicator = emptyIndicator && !children;
  const computedChildren = showEmptyIndicator ? (0, import_jsx_runtime50.jsx)("span", {
    "aria-hidden": showEmptyIndicator,
    "data-component-name": "ObjectStatusEmptyIndicator",
    className: classNames33.emptyIndicator,
    children: "–"
  }) : children;
  const objStatusClasses = clsx(classNames33.normalizeCSS, classNames33.objectStatus, classNames33[`${state}`.toLowerCase()], interactive && classNames33.active, inverted && !showEmptyIndicator && classNames33.inverted, large && classNames33.large, className);
  const TagName = interactive ? "button" : "div";
  return (0, import_jsx_runtime50.jsxs)(
    TagName,
    __spreadProps(__spreadValues({
      ref,
      className: objStatusClasses,
      style,
      onClick: interactive ? onClick : void 0,
      tabIndex: interactive ? 0 : void 0,
      "data-icon-only": !children,
      role: interactive ? "button" : "group"
    }, rest), {
      children: [(0, import_jsx_runtime50.jsx)("span", {
        className: classNames33.pseudoInvisibleText,
        "data-component-name": "ObjectStatusInvisibleDescriptionContainer",
        children: interactive ? i18nBundle.getText(ARIA_OBJ_STATUS_DESC) : i18nBundle.getText(ARIA_OBJ_STATUS_DESC_INACTIVE)
      }), iconToRender && (0, import_jsx_runtime50.jsx)("span", {
        className: classNames33.icon,
        "data-icon-only": !children,
        "data-component-name": "ObjectStatusIconContainer",
        children: iconToRender
      }), computedChildren && (0, import_jsx_runtime50.jsxs)("span", {
        className: classNames33.text,
        "data-component-name": "ObjectStatusTextContainer",
        children: [computedChildren, showEmptyIndicator && (0, import_jsx_runtime50.jsx)("span", {
          className: classNames33.pseudoInvisibleText,
          "data-component-name": "ObjectStatusInvisibleEmptyTextContainer",
          children: i18nBundle.getText(EMPTY_VALUE)
        })]
      }), !!invisibleText && (computedChildren || iconToRender) && (0, import_jsx_runtime50.jsx)("span", {
        className: classNames33.pseudoInvisibleText,
        "data-component-name": "ObjectStatusInvisibleTextContainer",
        children: invisibleText
      })]
    })
  );
});
ObjectStatus.displayName = "ObjectStatus";

// node_modules/@ui5/webcomponents-react/dist/components/ResponsiveGridLayout/index.js
var import_react62 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/ResponsiveGridLayout/ResponsiveGridLayout.module.css.js
var styleData34 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ResponsiveGridLayout.module.css",
  content: ".ResponsiveGridLayout_container_lhhv3_1{display:grid}@media (max-width:599px){.ResponsiveGridLayout_container_lhhv3_1{grid-template-columns:repeat(var(--_ui5wcr-rgl-columns-s),minmax(0,1fr))}.ResponsiveGridLayout_container_lhhv3_1>*{grid-column:span var(--_ui5wcr-rgl-column-span-s)}}@media (min-width:600px) and (max-width:1023px){.ResponsiveGridLayout_container_lhhv3_1{grid-template-columns:repeat(var(--_ui5wcr-rgl-columns-m),minmax(0,1fr))}.ResponsiveGridLayout_container_lhhv3_1>*{grid-column:span var(--_ui5wcr-rgl-column-span-m)}}@media (min-width:1024px) and (max-width:1439px){.ResponsiveGridLayout_container_lhhv3_1{grid-template-columns:repeat(var(--_ui5wcr-rgl-columns-l),minmax(0,1fr))}.ResponsiveGridLayout_container_lhhv3_1>*{grid-column:span var(--_ui5wcr-rgl-column-span-l)}}@media (min-width:1440px){.ResponsiveGridLayout_container_lhhv3_1{grid-template-columns:repeat(var(--_ui5wcr-rgl-columns-xl),minmax(0,1fr))}.ResponsiveGridLayout_container_lhhv3_1>*{grid-column:span var(--_ui5wcr-rgl-column-span-xl)}}"
};
var classNames34 = {
  "container": "ResponsiveGridLayout_container_lhhv3_1"
};

// node_modules/@ui5/webcomponents-react/dist/components/ResponsiveGridLayout/index.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var ResponsiveGridLayout = (0, import_react62.forwardRef)((props, ref) => {
  const _a = props, {
    children,
    columnGap = "0.5rem",
    rowGap = "0.5rem",
    columnsS = 4,
    columnsM = 8,
    columnsL = 12,
    columnsXL = 16,
    columnSpanS = 1,
    columnSpanM = 1,
    columnSpanL = 1,
    columnSpanXL = 1,
    style,
    className
  } = _a, rest = __objRest(_a, [
    "children",
    "columnGap",
    "rowGap",
    "columnsS",
    "columnsM",
    "columnsL",
    "columnsXL",
    "columnSpanS",
    "columnSpanM",
    "columnSpanL",
    "columnSpanXL",
    "style",
    "className"
  ]);
  useStylesheet(styleData34, ResponsiveGridLayout.displayName);
  const finalClassNames = clsx(classNames34.container, className);
  return (0, import_jsx_runtime51.jsx)("div", __spreadProps(__spreadValues({
    ref,
    className: finalClassNames,
    style: __spreadValues({
      rowGap,
      columnGap,
      "--_ui5wcr-rgl-columns-s": columnsS,
      "--_ui5wcr-rgl-columns-m": columnsM,
      "--_ui5wcr-rgl-columns-l": columnsL,
      "--_ui5wcr-rgl-columns-xl": columnsXL,
      "--_ui5wcr-rgl-column-span-s": columnSpanS,
      "--_ui5wcr-rgl-column-span-m": columnSpanM,
      "--_ui5wcr-rgl-column-span-l": columnSpanL,
      "--_ui5wcr-rgl-column-span-xl": columnSpanXL
    }, style)
  }, rest), {
    children
  }));
});
ResponsiveGridLayout.displayName = "ResponsiveGridLayout";

// node_modules/@ui5/webcomponents-react/dist/components/SelectDialog/index.js
var import_react63 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/SelectDialog/SelectDialog.module.css.js
var styleData35 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "SelectDialog.module.css",
  content: '.SelectDialog_dialog_2jobq_1::part(header){flex-direction:column;margin-block-end:0;padding-block-end:.25rem}.SelectDialog_dialog_2jobq_1::part(content){padding:0}.SelectDialog_headerContent_2jobq_13{align-items:center;display:grid;grid-template-areas:"titleStart titleCenter cancel" "input input input";grid-template-columns:fit-content(100px) minmax(0,1fr) fit-content(100px);grid-template-rows:var(--_ui5wcr-DialogHeaderHeight) var(--_ui5wcr-DialogSubHeaderHeight);width:100%}.SelectDialog_title_2jobq_24{font-family:var(--sapFontHeaderFamily);font-size:var(--sapFontLargeSize);grid-column-end:titleCenter;grid-column-start:titleStart;max-width:100%;overflow:hidden;text-overflow:ellipsis}.SelectDialog_titleCenterAlign_2jobq_34{grid-area:titleCenter;justify-self:center}.SelectDialog_hiddenClearBtn_2jobq_39{grid-area:titleStart;visibility:hidden}.SelectDialog_clearBtn_2jobq_44{grid-area:cancel;justify-self:end}.SelectDialog_input_2jobq_49{grid-area:input;width:100%}.SelectDialog_footer_2jobq_54{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;width:100%}.SelectDialog_footer_2jobq_54>*{margin-inline-start:.5rem}.SelectDialog_inputIcon_2jobq_66{color:var(--sapContent_IconColor);cursor:pointer}.SelectDialog_infoBar_2jobq_71{padding:0 .5rem;position:sticky;top:0;z-index:1}'
};
var classNames35 = {
  "dialog": "SelectDialog_dialog_2jobq_1",
  "headerContent": "SelectDialog_headerContent_2jobq_13",
  "title": "SelectDialog_title_2jobq_24",
  "titleCenterAlign": "SelectDialog_titleCenterAlign_2jobq_34",
  "hiddenClearBtn": "SelectDialog_hiddenClearBtn_2jobq_39",
  "clearBtn": "SelectDialog_clearBtn_2jobq_44",
  "input": "SelectDialog_input_2jobq_49",
  "footer": "SelectDialog_footer_2jobq_54",
  "inputIcon": "SelectDialog_inputIcon_2jobq_66",
  "infoBar": "SelectDialog_infoBar_2jobq_71"
};

// node_modules/@ui5/webcomponents-react/dist/components/SelectDialog/index.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var SelectDialog = (0, import_react63.forwardRef)((props, ref) => {
  const _a = props, {
    open,
    children,
    className,
    confirmButtonText,
    confirmButtonProps,
    growing,
    headerText,
    headerTextAlignCenter,
    listProps = {},
    selectionMode = ListSelectionMode_default.Single,
    numberOfSelectedItems,
    rememberSelections,
    showClearButton,
    onClose,
    onClear,
    onConfirm,
    onLoadMore,
    onSearch,
    onSearchInput,
    onSearchReset,
    onBeforeOpen,
    onBeforeClose,
    onOpen,
    onCancel
  } = _a, rest = __objRest(_a, [
    "open",
    "children",
    "className",
    "confirmButtonText",
    "confirmButtonProps",
    "growing",
    "headerText",
    "headerTextAlignCenter",
    "listProps",
    "selectionMode",
    "numberOfSelectedItems",
    "rememberSelections",
    "showClearButton",
    "onClose",
    "onClear",
    "onConfirm",
    "onLoadMore",
    "onSearch",
    "onSearchInput",
    "onSearchReset",
    "onBeforeOpen",
    "onBeforeClose",
    "onOpen",
    "onCancel"
  ]);
  useStylesheet(styleData35, SelectDialog.displayName);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const [searchValue, setSearchValue] = (0, import_react63.useState)("");
  const [selectedItems, setSelectedItems] = (0, import_react63.useState)([]);
  const [listComponentRef, listRef] = useSyncRef(listProps.ref);
  const [internalOpen, setInternalOpen] = (0, import_react63.useState)(open);
  (0, import_react63.useEffect)(() => {
    setInternalOpen(open);
  }, [open]);
  const handleBeforeOpen = (e) => {
    const localSelectedItems = listRef.current?.getSelectedItems() ?? [];
    if (typeof onBeforeOpen === "function") {
      onBeforeOpen(e);
    }
    if (selectionMode === ListSelectionMode_default.Multiple && listRef.current?.hasData) {
      setSelectedItems(localSelectedItems);
    }
  };
  const handleAfterOpen = (e) => {
    if (typeof onOpen === "function") {
      onOpen(e);
    }
    listRef.current?.focusFirstItem();
  };
  const handleSearchInput = (e) => {
    if (typeof onSearchInput === "function") {
      onSearchInput(enrichEventWithDetails(e, {
        value: e.target.value
      }));
    }
    setSearchValue(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    if (typeof onSearch === "function") {
      if (e.type === "keyup" && e.code === "Enter") {
        onSearch(enrichEventWithDetails(e, {
          value: e.target.value
        }));
      }
      if (e.type === "click") {
        onSearch(enrichEventWithDetails(e, {
          value: searchValue
        }));
      }
    }
  };
  const handleResetSearch = (e) => {
    if (typeof onSearchReset === "function") {
      onSearchReset(enrichEventWithDetails(e, {
        prevValue: searchValue
      }));
    }
    setSearchValue("");
  };
  const handleSelectionChange = (e) => {
    if (typeof listProps?.onSelectionChange === "function") {
      listProps.onSelectionChange(e);
    }
    if (selectionMode === ListSelectionMode_default.Multiple) {
      setSelectedItems(e.detail.selectedItems);
    } else {
      if (typeof onConfirm === "function") {
        onConfirm(e);
      }
      setInternalOpen(false);
    }
  };
  const handleClose = (e) => {
    setInternalOpen(false);
    if (typeof onCancel === "function") {
      onCancel(e);
    }
  };
  const handleClear = (e) => {
    if (typeof onClear === "function") {
      onClear(enrichEventWithDetails(e, {
        prevSelectedItems: selectedItems
      }));
    }
    setSelectedItems([]);
    listRef.current?.deselectSelectedItems();
  };
  const handleConfirm = (e) => {
    if (typeof onConfirm === "function") {
      onConfirm(enrichEventWithDetails(e, {
        selectedItems
      }));
    }
    setInternalOpen(false);
  };
  const handleAfterClose = (e) => {
    setInternalOpen(false);
    if (typeof onClose === "function") {
      onClose(e);
    }
    if (typeof onSearchReset === "function") {
      onSearchReset(enrichEventWithDetails(e, {
        prevValue: searchValue
      }));
    }
    setSearchValue("");
    if (!rememberSelections) {
      listRef.current?.deselectSelectedItems();
    }
  };
  const handleBeforeClose = (e) => {
    if (typeof onBeforeClose === "function") {
      onBeforeClose(e);
    }
    if (typeof onCancel === "function" && e.detail.escPressed) {
      onCancel(e);
    }
  };
  return (0, import_jsx_runtime52.jsxs)(Dialog, __spreadProps(__spreadValues({}, rest), {
    open: internalOpen,
    "data-component-name": "SelectDialog",
    ref,
    className: clsx(classNames35.dialog, className),
    onClose: handleAfterClose,
    onBeforeOpen: handleBeforeOpen,
    onOpen: handleAfterOpen,
    onBeforeClose: handleBeforeClose,
    children: [(0, import_jsx_runtime52.jsxs)("div", {
      className: classNames35.headerContent,
      slot: "header",
      children: [showClearButton && headerTextAlignCenter && (0, import_jsx_runtime52.jsx)(Button, {
        onClick: handleClear,
        design: ButtonDesign_default.Transparent,
        className: classNames35.hiddenClearBtn,
        tabIndex: -1,
        "aria-hidden": "true",
        children: i18nBundle.getText(CLEAR)
      }), (0, import_jsx_runtime52.jsx)(Title, {
        className: clsx(classNames35.title, headerTextAlignCenter && classNames35.titleCenterAlign),
        children: headerText
      }), showClearButton && (0, import_jsx_runtime52.jsx)(Button, {
        onClick: handleClear,
        design: ButtonDesign_default.Transparent,
        className: classNames35.clearBtn,
        children: i18nBundle.getText(CLEAR)
      }), (0, import_jsx_runtime52.jsx)(Input, {
        className: classNames35.input,
        accessibleName: i18nBundle.getText(SEARCH),
        value: searchValue,
        placeholder: i18nBundle.getText(SEARCH),
        onInput: handleSearchInput,
        onKeyUp: handleSearchSubmit,
        icon: (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, {
          children: [searchValue && (0, import_jsx_runtime52.jsx)(Icon, {
            accessibleName: i18nBundle.getText(RESET),
            title: i18nBundle.getText(RESET),
            name: decline_default,
            mode: IconMode_default.Interactive,
            onClick: handleResetSearch,
            className: classNames35.inputIcon
          }), (0, import_jsx_runtime52.jsx)(Icon, {
            mode: IconMode_default.Interactive,
            name: search_default,
            className: classNames35.inputIcon,
            onClick: handleSearchSubmit,
            accessibleName: i18nBundle.getText(SEARCH),
            title: i18nBundle.getText(SEARCH)
          })]
        })
      })]
    }), selectionMode === ListSelectionMode_default.Multiple && (!!selectedItems.length || numberOfSelectedItems > 0) && (0, import_jsx_runtime52.jsx)(Toolbar2, {
      design: "Info",
      className: classNames35.infoBar,
      children: (0, import_jsx_runtime52.jsx)(Text, {
        children: `${i18nBundle.getText(SELECTED)}: ${numberOfSelectedItems ?? selectedItems.length}`
      })
    }), (0, import_jsx_runtime52.jsx)(List, __spreadProps(__spreadValues({}, listProps), {
      ref: listComponentRef,
      growing,
      onLoadMore,
      selectionMode,
      onSelectionChange: handleSelectionChange,
      children
    })), (0, import_jsx_runtime52.jsxs)("div", {
      slot: "footer",
      className: classNames35.footer,
      children: [selectionMode === ListSelectionMode_default.Multiple && (0, import_jsx_runtime52.jsx)(Button, __spreadProps(__spreadValues({}, confirmButtonProps), {
        onClick: handleConfirm,
        design: ButtonDesign_default.Emphasized,
        children: confirmButtonText ?? i18nBundle.getText(SELECT)
      })), (0, import_jsx_runtime52.jsx)(Button, {
        onClick: handleClose,
        design: ButtonDesign_default.Transparent,
        children: i18nBundle.getText(CANCEL)
      })]
    })]
  }));
});
SelectDialog.displayName = "SelectDialog";

// node_modules/@ui5/webcomponents-react/dist/components/SplitterElement/index.js
var import_react65 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/internal/SplitterLayoutContext.js
var import_react64 = __toESM(require_react(), 1);
var SplitterLayoutContext = (0, import_react64.createContext)({
  vertical: true,
  reset: false
});

// node_modules/@ui5/webcomponents-react/dist/components/SplitterElement/SplitterElement.module.css.js
var styleData36 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "SplitterElement.module.css",
  content: ".SplitterElement_splitterElement_5jt3n_1{display:flex;min-height:0;min-width:0;overflow:hidden;position:relative;will-change:flex-basis}"
};
var classNames36 = {
  "splitterElement": "SplitterElement_splitterElement_5jt3n_1"
};

// node_modules/@ui5/webcomponents-react/dist/components/SplitterElement/index.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var SplitterElement = (0, import_react65.forwardRef)((props, ref) => {
  const _a = props, {
    children,
    style,
    className,
    minSize = 0,
    size = "auto",
    resizable: _0
  } = _a, rest = __objRest(_a, [
    "children",
    "style",
    "className",
    "minSize",
    "size",
    "resizable"
  ]);
  const [componentRef, splitterElementRef] = useSyncRef(ref);
  const {
    vertical,
    reset
  } = (0, import_react65.useContext)(SplitterLayoutContext);
  const safariStyles = Device_exports.isSafari() ? {
    width: "min-content",
    flex: "1 1 auto"
  } : {};
  const defaultFlexStyles = size !== "auto" ? {
    flex: `0 1 ${size}`
  } : __spreadValues({
    flex: "1 0 min-content"
  }, safariStyles);
  const [flexStyles, setFlexStyles] = (0, import_react65.useState)(defaultFlexStyles);
  const [flexBasisApplied, setFlexBasisApplied] = (0, import_react65.useState)(false);
  useStylesheet(styleData36, SplitterElement.displayName);
  (0, import_react65.useEffect)(() => {
    const elementObserver = new ResizeObserver(([element]) => {
      if (element.target.getBoundingClientRect().width !== 0 && !flexBasisApplied) {
        const resetSafariStyles = Device_exports.isSafari() ? {
          width: "unset"
        } : {};
        setFlexStyles(__spreadValues({
          flex: `0 0 ${element.target.getBoundingClientRect()[vertical ? "height" : "width"]}px`
        }, resetSafariStyles));
        setFlexBasisApplied(true);
      }
    });
    if (size === "auto" && splitterElementRef.current) {
      elementObserver.observe(splitterElementRef.current);
    } else {
      setFlexStyles({
        flex: `0 1 ${size}`
      });
    }
    return () => {
      elementObserver.disconnect();
    };
  }, [size, flexBasisApplied, vertical]);
  useIsomorphicLayoutEffect(() => {
    if (reset) {
      setFlexStyles(void 0);
      setFlexBasisApplied(false);
    }
  }, [reset, size]);
  useIsomorphicLayoutEffect(() => {
    if (flexStyles === void 0) {
      setFlexStyles(defaultFlexStyles);
    }
  }, [flexStyles]);
  return (0, import_jsx_runtime53.jsx)("div", __spreadProps(__spreadValues({
    ref: componentRef,
    className: clsx(classNames36.splitterElement, className),
    style: __spreadValues(__spreadValues({
      minHeight: vertical && minSize ? `${minSize}px` : void 0,
      minWidth: !vertical && minSize ? `${minSize}px` : void 0
    }, flexStyles), style)
  }, rest), {
    "data-min-size": minSize,
    children
  }));
});
SplitterElement.displayName = "SplitterElement";

// node_modules/@ui5/webcomponents-react/dist/components/SplitterLayout/index.js
var import_react68 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/SplitterLayout/SplitterLayout.module.css.js
var styleData37 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "SplitterLayout.module.css",
  content: ".SplitterLayout_splitterLayout_6n3m3_1{--_ui5wcr-SplitterSize:1rem;display:flex;overflow:hidden;position:relative}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]{flex-direction:row;width:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=horizontal]>*{height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]{flex-direction:column;height:100%}.SplitterLayout_splitterLayout_6n3m3_1[data-splitter-orientation=vertical]>*{width:100%}"
};
var classNames37 = {
  "splitterLayout": "SplitterLayout_splitterLayout_6n3m3_1"
};

// node_modules/@ui5/webcomponents-react/dist/components/SplitterLayout/useConcatSplitterElements.js
var import_react67 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-icons/dist/v4/horizontal-grip.js
var name19 = "horizontal-grip";
var pathData19 = "M96 224v64H32v-64h64zm256 0v64h-64v-64h64zm-192 0h64v64h-64v-64zm320 0v64h-64v-64h64z";
var ltr19 = false;
var collection19 = "SAP-icons-v4";
var packageName19 = "@ui5/webcomponents-icons";
registerIcon(name19, { pathData: pathData19, ltr: ltr19, collection: collection19, packageName: packageName19 });

// node_modules/@ui5/webcomponents-icons/dist/v5/horizontal-grip.js
var name20 = "horizontal-grip";
var pathData20 = "M96 176q0 20-14 34t-34 14-34-14-14-34 14-34 34-14 34 14 14 34zm42 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zM0 336q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34zm140 0q0-20 14-34t34-14 34 14.5 14 33.5-14 33.5-34 14.5-34-14-14-34zm138 0q0-20 14-34t34-14 34 14 14 34-14 34-34 14-34-14-14-34z";
var ltr20 = false;
var collection20 = "SAP-icons-v5";
var packageName20 = "@ui5/webcomponents-icons";
registerIcon(name20, { pathData: pathData20, ltr: ltr20, collection: collection20, packageName: packageName20 });

// node_modules/@ui5/webcomponents-icons/dist/horizontal-grip.js
var horizontal_grip_default = "horizontal-grip";

// node_modules/@ui5/webcomponents-icons/dist/v4/vertical-grip.js
var name21 = "vertical-grip";
var pathData21 = "M224 480v-64h64v64h-64zm0-384V32h64v64h-64zm0 128v-64h64v64h-64zm0 128v-64h64v64h-64z";
var ltr21 = false;
var collection21 = "SAP-icons-v4";
var packageName21 = "@ui5/webcomponents-icons";
registerIcon(name21, { pathData: pathData21, ltr: ltr21, collection: collection21, packageName: packageName21 });

// node_modules/@ui5/webcomponents-icons/dist/v5/vertical-grip.js
var name22 = "vertical-grip";
var pathData22 = "M176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 96q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm-160 42q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM176 278q20 0 34 14t14 34q0 19-14.5 33.5T176 374t-33.5-14.5T128 326q0-20 14-34t34-14zm160 0q20 0 34 14t14 34q0 19-14.5 33.5T336 374t-33.5-14.5T288 326q0-20 14-34t34-14zM176 416q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm160 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z";
var ltr22 = false;
var collection22 = "SAP-icons-v5";
var packageName22 = "@ui5/webcomponents-icons";
registerIcon(name22, { pathData: pathData22, ltr: ltr22, collection: collection22, packageName: packageName22 });

// node_modules/@ui5/webcomponents-icons/dist/vertical-grip.js
var vertical_grip_default = "vertical-grip";

// node_modules/@ui5/webcomponents-react/dist/components/Splitter/index.js
var import_react66 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/Splitter/Splitter.module.css.js
var styleData38 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "Splitter.module.css",
  content: ".Splitter_splitter_1e52h_1{align-items:center;background-color:var(--sapShell_Background);box-sizing:border-box;display:flex;justify-content:center;position:relative;touch-action:none;will-change:flex}.Splitter_splitter_1e52h_1[data-splitter-vertical]{cursor:col-resize}.Splitter_splitter_1e52h_1[data-splitter-vertical]:focus{outline:var(--_ui5wcr_Splitter_BarOutline);outline-offset:-.2rem}.Splitter_splitter_1e52h_1[data-splitter-vertical] .Splitter_icon_1e52h_17{z-index:1}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]{border-inline:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:column;height:100%;min-width:var(--_ui5wcr-SplitterSize);width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderHighContrastFix);border-inline:var(--_ui5wcr_Splitter_BarBorderFocus)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-size:.0625rem 100%;height:4rem;width:var(--_ui5wcr-SplitterSize)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to top,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_icon_1e52h_17{padding:.5rem 0}.Splitter_splitter_1e52h_1[data-splitter-vertical=horizontal] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to bottom,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]{border-block:var(--_ui5wcr_Splitter_BarBorderStyle);flex-direction:row;height:var(--_ui5wcr-SplitterSize);min-height:var(--_ui5wcr-SplitterSize);width:100%}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical]:focus{border-block:var(--_ui5wcr_Splitter_BarBorderFocus);border-inline:var(--_ui5wcr_Splitter_BarBorderHighContrastFix)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-size:100% .0625rem;height:var(--_ui5wcr-SplitterSize);width:5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32{background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineBefore_1e52h_32:dir(rtl){background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_icon_1e52h_17{padding:0 .5rem}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33{background-image:linear-gradient(to right,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1[data-splitter-vertical=vertical] .Splitter_lineAfter_1e52h_33:dir(rtl){background-image:linear-gradient(to left,var(--_ui5wcr_Splitter_ContentBorderColor),#0000)}.Splitter_splitter_1e52h_1:hover .Splitter_lineAfter_1e52h_33,.Splitter_splitter_1e52h_1:hover .Splitter_lineBefore_1e52h_32{flex-grow:1;transition:all .1s ease-in}.Splitter_gripButton_1e52h_91{height:1.625rem;min-width:1.5rem!important;z-index:1}.Splitter_gripButton_1e52h_91:active{z-index:2}.Splitter_icon_1e52h_17{box-sizing:initial;color:var(--_ui5wcr_Splitter_IconColor)}.Splitter_lineAfter_1e52h_33,.Splitter_lineBefore_1e52h_32{background-position:50%;background-repeat:no-repeat}"
};
var classNames38 = {
  "splitter": "Splitter_splitter_1e52h_1",
  "icon": "Splitter_icon_1e52h_17",
  "lineBefore": "Splitter_lineBefore_1e52h_32",
  "lineAfter": "Splitter_lineAfter_1e52h_33",
  "gripButton": "Splitter_gripButton_1e52h_91"
};

// node_modules/@ui5/webcomponents-react/dist/components/Splitter/index.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var verticalPositionInfo = {
  start: "top",
  startUppercase: "Top",
  end: "bottom",
  position: "Y",
  positionRect: "y",
  size: "height",
  min: "minHeight",
  offset: "offsetY"
};
var horizontalPositionInfo = {
  start: "left",
  startUppercase: "Left",
  end: "right",
  position: "X",
  positionRect: "x",
  size: "width",
  min: "minWidth",
  offset: "offsetX"
};
var Splitter = (0, import_react66.forwardRef)((props, ref) => {
  const {
    vertical
  } = props;
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const [componentRef, localRef] = useSyncRef(ref);
  const isRtl = useIsRTL(localRef);
  const start = (0, import_react66.useRef)(null);
  useStylesheet(styleData38, Splitter.displayName);
  const previousSiblingSize = (0, import_react66.useRef)(null);
  const nextSiblingSize = (0, import_react66.useRef)(null);
  const previousElementEnd = (0, import_react66.useRef)(null);
  const nextElementStart = (0, import_react66.useRef)(null);
  const resizerClickOffset = (0, import_react66.useRef)(0);
  const positionKeys = vertical ? verticalPositionInfo : horizontalPositionInfo;
  const [isDragging, setIsDragging] = (0, import_react66.useState)(false);
  const [isSiblings, setIsSiblings] = (0, import_react66.useState)(["previousSibling", "nextSibling"]);
  const handleSplitterMove = (e) => {
    const offset = resizerClickOffset.current;
    const previousSibling = localRef.current[isSiblings[0]];
    const nextSibling = localRef.current[isSiblings[1]];
    const currentPosition = isDragging === "touch" ? e.touches[0][`client${positionKeys.position}`] : e[`client${positionKeys.position}`];
    const sizeDiv = currentPosition - start.current;
    const splitterWidth = localRef.current.getBoundingClientRect()[positionKeys.size];
    const moveLeft = sizeDiv < 0;
    const move = () => {
      previousSibling.style.flex = `0 0 ${previousSiblingSize.current + sizeDiv}px`;
      if (nextSibling.nextSibling && previousSiblingSize.current + sizeDiv > 0) {
        nextSibling.style.flex = `0 0 ${nextSiblingSize.current - sizeDiv}px`;
      }
    };
    if (previousSiblingSize.current + sizeDiv > 0 && currentPosition + (splitterWidth - offset) <= nextElementStart.current) {
      if (parseInt(previousSibling.dataset.minSize, 10) <= previousSiblingSize.current + sizeDiv && moveLeft) {
        move();
      }
      if (nextSiblingSize.current - sizeDiv >= parseInt(nextSibling.dataset.minSize, 10) && !moveLeft) {
        move();
      }
    }
    if (!nextSibling[isSiblings[1]] && !isRtl) {
      nextSibling.style.flex = "1 0 0px";
    }
  };
  const handleFallback = (e, touchEvent) => {
    if (!localRef.current) {
      return;
    }
    const prevSibling = localRef.current[isSiblings[0]];
    const nextSibling = localRef.current[isSiblings[1]];
    const prevSiblingRect = localRef.current[isSiblings[0]].getBoundingClientRect();
    const nextSiblingRect = localRef.current[isSiblings[1]].getBoundingClientRect();
    const currentPos = touchEvent ? Math.round(e.changedTouches[0][`client${positionKeys.position}`]) : e[`client${positionKeys.position}`];
    if (!localRef.current.contains(e.target) && currentPos - localRef.current[`offset${positionKeys.startUppercase}`] + 1 < 0) {
      prevSibling.style.flex = "0 0 0px";
      if (prevSibling.style?.[positionKeys.min]) {
        nextSibling.style.flex = `0 0 ${nextSiblingRect?.[positionKeys.size] + (prevSiblingRect?.[positionKeys.size] - prevSibling.style?.[positionKeys.min].replace("px", ""))}px`;
      } else {
        nextSibling.style.flex = `0 0 ${nextSiblingRect?.[positionKeys.size] + prevSiblingRect?.[positionKeys.size]}px`;
      }
    }
    if (nextElementStart.current < currentPos) {
      nextSibling.style.flex = "0 0 0px";
      if (nextSibling.style?.[positionKeys.min]) {
        prevSibling.style.flex = `0 0 ${prevSiblingRect?.[positionKeys.size] + (nextSiblingRect?.[positionKeys.size] - nextSibling.style?.[positionKeys.min].replace("px", ""))}px`;
      } else {
        prevSibling.style.flex = `0 0 ${prevSiblingRect?.[positionKeys.size] + nextSiblingRect?.[positionKeys.size]}px`;
      }
    }
  };
  const handleMoveSplitterStart = (e) => {
    if (e.type === "pointerdown" && e.pointerType !== "touch") {
      return;
    }
    e.currentTarget.focus();
    e.preventDefault();
    setIsDragging(e.pointerType ?? "mouse");
    resizerClickOffset.current = e.nativeEvent[positionKeys.offset];
    previousElementEnd.current = localRef.current[isSiblings[0]].getBoundingClientRect()?.[positionKeys.end];
    if (localRef.current[isSiblings[1]][isSiblings[1]]) {
      nextElementStart.current = localRef.current[isSiblings[1]][isSiblings[1]].getBoundingClientRect()?.[positionKeys.start];
    } else {
      nextElementStart.current = localRef.current.parentElement.getBoundingClientRect()[positionKeys.end];
    }
    previousSiblingSize.current = localRef.current[isSiblings[0]].getBoundingClientRect()?.[positionKeys.size];
    nextSiblingSize.current = localRef.current[isSiblings[1]].getBoundingClientRect()?.[positionKeys.size];
    start.current = e[`client${positionKeys.position}`];
  };
  const onHandleKeyDown = (e) => {
    const keyEventProperties = e.code ?? e.key;
    if (keyEventProperties === "ArrowRight" || keyEventProperties === "ArrowLeft" || keyEventProperties === "ArrowUp" || keyEventProperties === "ArrowDown") {
      e.preventDefault();
      let firstSibling = localRef.current[isSiblings[0]];
      let secondSibling = localRef.current[isSiblings[1]];
      if (keyEventProperties === "ArrowLeft" || keyEventProperties === "ArrowUp") {
        secondSibling = localRef.current[isSiblings[0]];
        firstSibling = localRef.current[isSiblings[1]];
      }
      const remainingSize = secondSibling.style[positionKeys.min] ? secondSibling.getBoundingClientRect()?.[positionKeys.size] - Number(secondSibling.style[positionKeys.min].replace("px", "")) : secondSibling.getBoundingClientRect()?.[positionKeys.size];
      if (document.activeElement === localRef.current) {
        const tickSize = remainingSize >= 20 ? 20 : remainingSize;
        const firstSiblingSize = firstSibling.getBoundingClientRect()?.[positionKeys.size];
        const secondSiblingSize = secondSibling.getBoundingClientRect()?.[positionKeys.size];
        secondSibling.style.flex = `0 0 ${secondSiblingSize - tickSize}px`;
        firstSibling.style.flex = `0 0 ${firstSiblingSize + tickSize}px`;
      }
    }
  };
  const end = (e) => {
    handleFallback(e, isDragging === "touch");
    setIsDragging(false);
  };
  (0, import_react66.useEffect)(() => {
    const removeEventListeners = () => {
      if (isDragging === "touch") {
        document.removeEventListener("touchmove", handleSplitterMove);
        document.removeEventListener("touchend", end);
      } else {
        document.removeEventListener("mouseup", end);
        document.removeEventListener("mousemove", handleSplitterMove);
      }
    };
    if (isDragging) {
      if (isDragging === "touch") {
        document.addEventListener("touchmove", handleSplitterMove);
        document.addEventListener("touchend", end);
      } else {
        document.addEventListener("mousemove", handleSplitterMove);
        document.addEventListener("mouseup", end);
      }
    } else {
      removeEventListeners();
    }
    return () => {
      removeEventListeners();
    };
  }, [isDragging]);
  (0, import_react66.useEffect)(() => {
    setIsSiblings(isRtl && !vertical ? ["nextSibling", "previousSibling"] : ["previousSibling", "nextSibling"]);
  }, [isRtl, vertical]);
  const currentTheme = useCurrentTheme();
  const isHighContrast = currentTheme === "sap_fiori_3_hcb" || currentTheme === "sap_fiori_3_hcw" || currentTheme === "sap_horizon_hcb" || currentTheme === "sap_horizon_hcw";
  return (0, import_jsx_runtime54.jsxs)("div", {
    className: classNames38.splitter,
    tabIndex: 0,
    onKeyDown: onHandleKeyDown,
    onPointerDown: handleMoveSplitterStart,
    onMouseDown: handleMoveSplitterStart,
    ref: componentRef,
    role: "separator",
    "data-splitter-vertical": vertical ? "vertical" : "horizontal",
    title: i18nBundle.getText(PRESS_ARROW_KEYS_TO_MOVE),
    "aria-orientation": vertical ? "vertical" : "horizontal",
    "aria-label": i18nBundle.getText(PRESS_ARROW_KEYS_TO_MOVE),
    children: [(0, import_jsx_runtime54.jsx)("div", {
      className: classNames38.lineBefore
    }), isHighContrast ? (0, import_jsx_runtime54.jsx)(Button, {
      className: classNames38.gripButton,
      tabIndex: -1,
      icon: vertical ? horizontal_grip_default : vertical_grip_default,
      design: ButtonDesign_default.Transparent,
      "data-component-name": "SplitterLayoutSplitterGrip"
    }) : (0, import_jsx_runtime54.jsx)(Icon, {
      className: classNames38.icon,
      name: vertical ? horizontal_grip_default : vertical_grip_default,
      "data-component-name": "SplitterLayoutSplitterGrip"
    }), (0, import_jsx_runtime54.jsx)("div", {
      className: classNames38.lineAfter
    })]
  });
});
Splitter.displayName = "Splitter";

// node_modules/@ui5/webcomponents-react/dist/components/SplitterLayout/useConcatSplitterElements.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var useConcatSplitterElements = (concatSplitterElements) => {
  return (0, import_react67.useMemo)(() => {
    if ((0, import_react67.isValidElement)(concatSplitterElements?.children)) {
      return concatSplitterElements?.children;
    }
    const childrenArray = import_react67.Children.toArray(concatSplitterElements?.children).filter(import_react67.isValidElement);
    let splitterCount = 0;
    const indicesWithSplitter = [];
    childrenArray.forEach((child, index) => {
      const splitterElementChild = childrenArray[index + splitterCount];
      const splitterElementChildMinSize = splitterElementChild.props.hasOwnProperty("minSize") ? splitterElementChild.props.minSize : 0;
      if (childrenArray.length - splitterCount - 1 > index && (splitterElementChild.props.resizable || splitterElementChild.props.resizable === void 0) && splitterElementChildMinSize !== void 0) {
        childrenArray.splice(index + splitterCount + 1, 0, (0, import_jsx_runtime55.jsx)(Splitter, {
          height: concatSplitterElements?.height,
          width: concatSplitterElements?.width,
          vertical: concatSplitterElements?.vertical
        }, `splitter${index}`));
        indicesWithSplitter.push(index + 1 + splitterCount - 1);
        ++splitterCount;
      } else if (index > 0 && splitterElementChild?.props.resizable === false) {
        const indexOfSplitter = childrenArray.findIndex((element) => element === splitterElementChild) - 1;
        if (childrenArray[indexOfSplitter].props.minSize === void 0) {
          childrenArray.splice(indexOfSplitter, 1);
        }
        indicesWithSplitter.pop();
        --splitterCount;
      }
    });
    indicesWithSplitter.forEach((index) => {
      const size = childrenArray[index]?.props?.size;
      if (size && size !== "auto") {
        childrenArray[index] = (0, import_react67.cloneElement)(childrenArray[index], {
          size: `calc(${size} - var(--_ui5wcr-SplitterSize))`
        });
      }
    });
    return childrenArray;
  }, [concatSplitterElements]);
};

// node_modules/@ui5/webcomponents-react/dist/components/SplitterLayout/index.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var SplitterLayout = (0, import_react68.forwardRef)((props, ref) => {
  const _a = props, {
    vertical,
    children,
    title: title2,
    style,
    className,
    options
  } = _a, rest = __objRest(_a, [
    "vertical",
    "children",
    "title",
    "style",
    "className",
    "options"
  ]);
  const [componentRef, sLRef] = useSyncRef(ref);
  const [reset, setReset] = (0, import_react68.useState)(void 0);
  const prevSize = (0, import_react68.useRef)({
    width: void 0,
    height: void 0
  });
  const initialChildren = (0, import_react68.useRef)(true);
  const initialCustomDep = (0, import_react68.useRef)(true);
  const layoutElements = useConcatSplitterElements({
    children: children ?? [],
    width: style?.width,
    height: style?.height,
    vertical
  });
  useStylesheet(styleData37, SplitterLayout.displayName);
  (0, import_react68.useEffect)(() => {
    if (!initialChildren.current && options?.resetOnChildrenChange) {
      setReset(true);
    }
    initialChildren.current = false;
  }, [children, options?.resetOnChildrenChange]);
  (0, import_react68.useEffect)(() => {
    if (!initialCustomDep.current) {
      setReset(true);
    }
    initialCustomDep.current = false;
  }, options?.resetOnCustomDepsChange ?? []);
  (0, import_react68.useEffect)(() => {
    if (options?.resetOnSizeChange) {
      const layoutObserver = new ResizeObserver(debounce(([container]) => {
        const containerRect = container.target.getBoundingClientRect();
        if (!vertical && containerRect.width !== prevSize.current.width) {
          prevSize.current.width = containerRect.width;
          setReset(true);
        } else if (vertical && containerRect.height !== prevSize.current.height) {
          prevSize.current.height = containerRect.height;
          setReset(true);
        }
      }, 60));
      layoutObserver.observe(sLRef.current);
      return () => {
        layoutObserver.disconnect();
      };
    }
  }, [vertical, options?.resetOnSizeChange]);
  (0, import_react68.useEffect)(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);
  return (0, import_jsx_runtime56.jsx)(SplitterLayoutContext.Provider, {
    value: {
      vertical,
      reset
    },
    children: (0, import_jsx_runtime56.jsx)("div", __spreadProps(__spreadValues({
      style: __spreadValues({
        flexDirection: vertical ? "column" : "row"
      }, style),
      title: title2
    }, rest), {
      className: clsx(classNames37.splitterLayout, className),
      ref: componentRef,
      "data-splitter-vertical": vertical,
      children: layoutElements
    }))
  });
});
SplitterLayout.displayName = "SplitterLayout";

// node_modules/@ui5/webcomponents-react/dist/components/ThemeProvider/ThemeProvider.css.js
var styleData39 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ThemeProvider.css",
  content: ":root{--_ui5wcr-AnalyticalTableExpandButtonHeight:2.25rem;--_ui5wcr-AnalyticalTableExpandIconHeight:1rem;--_ui5wcr-AnalyticalTableExpandIndicatorWidth:1.875rem;--_ui5wcr-AnalyticalTableHeaderRowHeight:44px;--_ui5wcr-AnalyticalTableRowHeight:44px;--_ui5wcr-AnalyticalTableSelectionColumnWidth:44px;--_ui5wcr-AnalyticalTableTreePaddingLevel1:1rem;--_ui5wcr-AnalyticalTableTreePaddingLevel2:1.5rem;--_ui5wcr-AnalyticalTableTreePaddingLevel3:2rem;--_ui5wcr-BarHeight:2.75rem;--_ui5wcr-ButtonTopBottomPadding:0.25rem 0;--_ui5wcr-CheckBoxWidthHeight:2.75rem;--_ui5wcr-DialogHeaderHeight:2.75rem;--_ui5wcr-DialogSubHeaderHeight:3rem;--_ui5wcr-ElementHeight:var(--sapElement_Height);--_ui5wcr-FormGroupTitleHeight:2.75rem;--_ui5wcr-MessageItemTitleFontSize:var(--sapFontHeader5Size);--_ui5wcr-MessageViewListItemHeightByLine:3.325rem;--_ui5wcr-MessageViewListItemHeightSingle:2.75rem;--_ui5wcr-SplitterSize:1rem;--_ui5wcr-ToolbarHeight:2.75rem;--_ui5wcr-ToolbarPopoverContentPadding:0.25rem 0.5rem;--_ui5wcr-ToolbarSeparatorHeight:2rem}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5wcr-AnalyticalTableExpandButtonHeight:1.5rem;--_ui5wcr-AnalyticalTableExpandIconHeight:0.75rem;--_ui5wcr-AnalyticalTableExpandIndicatorWidth:1.625rem;--_ui5wcr-AnalyticalTableHeaderRowHeight:32px;--_ui5wcr-AnalyticalTableRowHeight:32px;--_ui5wcr-AnalyticalTableSelectionColumnWidth:32px;--_ui5wcr-AnalyticalTableTreePaddingLevel1:1.5rem;--_ui5wcr-AnalyticalTableTreePaddingLevel2:2.25rem;--_ui5wcr-AnalyticalTableTreePaddingLevel3:2.75rem;--_ui5wcr-BarHeight:2.5rem;--_ui5wcr-ButtonTopBottomPadding:0.1875rem 0;--_ui5wcr-CheckBoxWidthHeight:2rem;--_ui5wcr-DialogHeaderHeight:2.5rem;--_ui5wcr-DialogSubHeaderHeight:2.25rem;--_ui5wcr-ElementHeight:var(--sapElement_Compact_Height);--_ui5wcr-FormGroupTitleHeight:2rem;--_ui5wcr-MessageItemTitleFontSize:var(--sapFontHeader6Size);--_ui5wcr-MessageViewListItemHeightByLine:3.25rem;--_ui5wcr-MessageViewListItemHeightSingle:2rem;--_ui5wcr-ToolbarHeight:2rem;--_ui5wcr-ToolbarPopoverContentPadding:0.1875rem 0.375rem;--_ui5wcr-ToolbarSeparatorHeight:1.5rem}:root{--_ui5wcr_Scrollbar_Border:none;--_ui5wcr_Splitter_IconColor:var(--sapButton_Lite_TextColor);--_ui5wcr_Splitter_BarOutline:none;--_ui5wcr_Toolbar_FocusShadow:none;--_ui5wcr_Toolbar_FocusOutline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);--_ui5wcr_Scrollbar_BorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderFocus:var(--sapContent_FocusWidth) solid var(--sapContent_FocusColor);--_ui5wcr_Splitter_BarBorderStyle:none;--_ui5wcr_ActionSheet_HeaderBoxShadow:none;--_ui5wcr_ObjectPage_SectionBorderTop:0.0625rem solid var(--sapGroup_TitleBorderColor);--_ui5wcr_Splitter_ContentBorderColor:var(--sapHighlightColor);--_ui5wcr_ObjectPage_PaddingBlockStart:2rem;--_ui5wcr_ObjectPage_SectionTitleHeight:2.25rem;--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid var(--sapList_BorderColor);--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontFamily);--_ui5wcr-AnalyticalTable-OuterBorderBlock:1px solid var(--sapList_BorderColor);--_ui5wcr-AnalyticalTable-HeaderBorderWidth:0.0625rem;--_ui5wcr-AnalyticalTable-OuterBorderInline:1px solid var(--sapList_BorderColor);--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:none;--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapContent_ContrastTextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontFamily);--_ui5wcr_ObjectPage_SectionTitleLineHeight:2.25rem;--_ui5wcr_ObjectPage_SubSectionBorderRadius:0;--_ui5wcr_Splitter_BarBorderHighContrastFix:var(--sapContent_FocusWidth) solid var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_MobileHeaderBackground:#0000;--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:0;--_ui5wcr_ObjectPage_SubSectionBackgroundColor:#0000;--_ui5wcr-AnalyticalTable-HeaderActiveTextColor:var(--sapList_HeaderTextColor);--_ui5wcr_ObjectPage_SectionTitleTextDecoration:none;--_ui5wcr_Form_HeaderBorderWidth:var(--sapList_BorderWidth)}[data-sap-theme=sap_belize]{--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Scrollbar_BorderRadius:0;--_ui5wcr_Splitter_BarBorderFocus:.0625rem dotted var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:.0625rem dotted var(--sapContent_FocusColor)}[data-sap-theme=sap_belize_hcb]{--_ui5wcr_Scrollbar_Border:0.0625rem solid #999;--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Scrollbar_BorderRadius:0;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius)}[data-sap-theme=sap_belize_hcw]{--_ui5wcr_Scrollbar_Border:0.0625rem solid #585858;--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Scrollbar_BorderRadius:0;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius)}[data-sap-theme=sap_fiori_3]{--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:.0625rem dotted var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:.0625rem dotted var(--sapContent_FocusColor)}[data-sap-theme=sap_fiori_3_dark]{--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:.0625rem dotted var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:.0625rem dotted var(--sapContent_FocusColor)}[data-sap-theme=sap_fiori_3_hcb]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}[data-sap-theme=sap_fiori_3_hcw]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}[data-sap-theme=sap_horizon]{--_ui5wcr_Toolbar_FocusShadow:inset 0 0 0 0.125rem var(--sapContent_FocusColor);--_ui5wcr_Toolbar_FocusOutline:none;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_ObjectPage_PaddingBlockStart:0.5rem;--_ui5wcr_ObjectPage_SectionTitleHeight:2.75rem;--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-OuterBorderBlock:none;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SectionTitleLineHeight:4rem;--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground)}[data-sap-theme=sap_horizon_dark]{--_ui5wcr_Toolbar_FocusShadow:inset 0 0 0 0.125rem var(--sapContent_FocusColor);--_ui5wcr_Toolbar_FocusOutline:none;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_ObjectPage_PaddingBlockStart:0.5rem;--_ui5wcr_ObjectPage_SectionTitleHeight:2.75rem;--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-OuterBorderBlock:none;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SectionTitleLineHeight:4rem;--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground)}[data-sap-theme=sap_horizon_hcb]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-HeaderBorderWidth:0.188rem;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground);--_ui5wcr-AnalyticalTable-HeaderActiveTextColor:var(--sapContent_ContrastTextColor);--_ui5wcr_ObjectPage_SectionTitleTextDecoration:underline var(--sapList_SelectionBorderColor);--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}[data-sap-theme=sap_horizon_hcw]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-HeaderBorderWidth:0.188rem;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground);--_ui5wcr-AnalyticalTable-HeaderActiveTextColor:var(--sapContent_ContrastTextColor);--_ui5wcr_ObjectPage_SectionTitleTextDecoration:underline var(--sapList_SelectionBorderColor);--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor);-webkit-border-start:var(--_ui5wcr_Scrollbar_Border)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-thumb{background-color:var(--sapScrollBar_FaceColor);border-radius:var(--_ui5wcr_Scrollbar_BorderRadius)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-thumb:hover{background-color:var(--sapScrollBar_Hover_FaceColor)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-thumb:horizontal{height:var(--sapScrollBar_Dimension)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-thumb:vertical{width:var(--sapScrollBar_Dimension)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-corner{background-color:var(--sapScrollBar_TrackColor)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar:horizontal{height:var(--sapScrollBar_Dimension)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar:vertical{width:var(--sapScrollBar_Dimension)}"
};

// node_modules/@ui5/webcomponents-react/dist/components/ThemeProvider/index.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
function ThemeProviderStyles() {
  const uniqueId = useIsomorphicId();
  useStylesheet(styleData39, `${ThemeProvider.displayName}-${uniqueId}`);
  useStylesheet(ui5WcVariablesStyleData, `${ThemeProvider.displayName}-css-vars-${uniqueId}`);
  return null;
}
var InternalUI5WCVVarNames = {
  "--_ui5wcr_card_header_focus_offset": `var(${getScopedVarName("--_ui5_card_header_focus_offset")})`,
  "--_ui5wcr_card_header_focus_border": `var(${getScopedVarName("--_ui5_card_header_focus_border")})`,
  "--_ui5wcr_card_header_focus_radius": `var(${getScopedVarName("--_ui5_card_header_focus_radius")})`,
  "--_ui5wcr_card_header_focus_bottom_radius": `var(${getScopedVarName("--_ui5_card_header_focus_bottom_radius")})`,
  "--_ui5wcr_popup_header_font_family": `var(${getScopedVarName("--_ui5_popup_header_font_family")})`,
  "--_ui5wcr_popup_default_header_height": `var(${getScopedVarName("--_ui5_popup_default_header_height")})`
};
var ui5WcVariablesStyleData = {
  content: `:root {${Object.entries(InternalUI5WCVVarNames).map(([key, value]) => {
    return `${key}: ${value};`;
  }).join(" ")}}`,
  packageName: "@ui5/webcomponents-react",
  fileName: "ThemeProvider"
};
var ThemeProvider = (props) => {
  const {
    children,
    staticCssInjected = false
  } = props;
  useIsomorphicLayoutEffect(() => {
    document.documentElement.setAttribute("data-sap-theme", getTheme());
    const handler = (newTheme) => {
      document.documentElement.setAttribute("data-sap-theme", newTheme);
    };
    attachThemeLoaded(handler);
    return () => {
      detachThemeLoaded(handler);
    };
  }, []);
  useIsomorphicLayoutEffect(() => {
    StyleStore.setStaticCssInjected(staticCssInjected);
  }, [staticCssInjected]);
  useIsomorphicLayoutEffect(() => {
    attachLanguageChange(I18nStore.handleLanguageChange);
    return () => {
      detachLanguageChange(I18nStore.handleLanguageChange);
    };
  }, []);
  return (0, import_jsx_runtime57.jsxs)(import_jsx_runtime57.Fragment, {
    children: [(0, import_jsx_runtime57.jsx)(ThemeProviderStyles, {}), children]
  });
};
ThemeProvider.displayName = "ThemeProvider";

// node_modules/@ui5/webcomponents-fiori/dist/illustrations/sapIllus-Dialog-UnableToLoad.js
var sapIllus_Dialog_UnableToLoad_default = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160" height="160" viewBox="0 0 160 160" id="sapIllus-Dialog-UnableToLoad">
    <ellipse class="sapIllus_BackgroundColor" cx="80" cy="147" rx="37" ry="6"/>
    <path class="sapIllus_ObjectFillColor" d="M80.5,34.1171A45.3829,45.3829,0,1,0,125.8828,79.5,45.4338,45.4338,0,0,0,80.5,34.1171ZM80.5,114A34.5,34.5,0,1,1,115,79.5,34.5,34.5,0,0,1,80.5,114Z"/>
    <circle class="sapIllus_Layering1" cx="80.5" cy="79.5" r="34.5"/>
    <path class="sapIllus_StrokeDetailColor" d="M80.5,33A46.5,46.5,0,1,0,127,79.5,46.5524,46.5524,0,0,0,80.5,33Zm0,91.8829A45.3829,45.3829,0,1,1,125.8828,79.5,45.4343,45.4343,0,0,1,80.5,124.8829Z"/>
    <path class="sapIllus_PatternHighlight" d="M80.5,45a34.5006,34.5006,0,0,0-22.4263,60.7175l44.1372-53.031A34.3563,34.3563,0,0,0,80.5,45Z"/>
      <path class="sapIllus_Layering1" d="M60.9985,24.7178a1.0014,1.0014,0,0,1-1.0014-1.0009l-.003-7.7149A1.0017,1.0017,0,0,1,60.9956,15h0a1.0014,1.0014,0,0,1,1.0015,1.001L62,23.7159a1.0016,1.0016,0,0,1-1.0015,1.0019Z"/>
      <path class="sapIllus_Layering1" d="M32.6348,44.3431a1.0019,1.0019,0,0,1-.3418-.0606L25.0518,41.65a1,1,0,0,1,.6835-1.88l7.2413,2.6323a1.0005,1.0005,0,0,1-.3418,1.9405Z"/>
      <path class="sapIllus_Layering1" d="M44.5342,31.52a1,1,0,0,1-.82-.4263L36.9121,21.39a1,1,0,0,1,1.6387-1.1474l6.8017,9.7041a1,1,0,0,1-.8183,1.5737Z"/>
    <path class="sapIllus_ObjectFillColor" d="M84.7346,79.5l9.9067-9.9067a1.1849,1.1849,0,0,0,0-1.6758l-2.5588-2.5588a1.1849,1.1849,0,0,0-1.6758,0L80.5,75.2654l-9.9067-9.9067a1.1849,1.1849,0,0,0-1.6758,0l-2.5588,2.5588a1.1849,1.1849,0,0,0,0,1.6758L76.2654,79.5l-9.9067,9.9067a1.1849,1.1849,0,0,0,0,1.6758l2.5588,2.5588a1.1849,1.1849,0,0,0,1.6758,0L80.5,83.7346l9.9067,9.9067a1.1849,1.1849,0,0,0,1.6758,0l2.5588-2.5588a1.1849,1.1849,0,0,0,0-1.6758Z"/>
</svg>
`;

// node_modules/@ui5/webcomponents-fiori/dist/illustrations/sapIllus-Scene-UnableToLoad.js
var sapIllus_Scene_UnableToLoad_default = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="320" height="240" viewBox="0 0 320 240" id="sapIllus-Scene-UnableToLoad">
    <path class="sapIllus_BackgroundColor" d="M300.0626,58.9336,190.7032,42.5048a4.9315,4.9315,0,0,0-5.6094,4.1441l-3.1711,21.1085V58.76H137.6374l-2.12-12.2179a4.9315,4.9315,0,0,0-5.702-4.016L20.87,61.4265a5.0915,5.0915,0,0,0-4.2535,5.7L39.8215,199.5946a4.9442,4.9442,0,0,0,5.7168,4.0265L154.2577,184.76h13.6a4.8879,4.8879,0,0,0,1.4188.4639l109.3465,16.4269a4.9316,4.9316,0,0,0,5.61-4.1442L304.2068,64.543A4.9316,4.9316,0,0,0,300.0626,58.9336Z"/>
    <path class="sapIllus_Layering1" d="M239.4991,111.3377l-6.542-.9827a.4868.4868,0,0,0-.5539.4092l-2.7608,18.3766,7.5054,1.1275,2.7608-18.3766A.4872.4872,0,0,0,239.4991,111.3377Z"/>
    <path class="sapIllus_AccentColor" d="M259.3224,106.8766l-6.542-.9829a.487.487,0,0,0-.554.4093L248.33,132.24l7.5054,1.1275,3.8965-25.9371A.487.487,0,0,0,259.3224,106.8766Z"/>
    <path class="sapIllus_BrandColorSecondary" d="M280.4464,91.7325l-6.5421-.9828a.487.487,0,0,0-.554.4092l-6.5984,43.9228,7.5053,1.1276,6.5985-43.9229A.487.487,0,0,0,280.4464,91.7325Z"/>
    <path class="sapIllus_Layering1" d="M283.5028,138.0983a.5593.5593,0,0,1-.0752-.0054L196.3231,125.007a.5.5,0,0,1-.42-.5689l8.4824-56.46a.5.5,0,1,1,.9883.1484l-8.4082,55.9658,86.61,13.0113a.5.5,0,0,1-.0732.9946Z"/>
    <path class="sapIllus_Layering2" d="M220.13,117.2578h9.4008a.6368.6368,0,0,1,.6368.6368v65.6522a.6367.6367,0,0,1-.6367.6367H220.13a.6368.6368,0,0,1-.6368-.6368V117.8946a.6368.6368,0,0,1,.6368-.6368Z" transform="translate(42.3814 350.6652) rotate(-81.4564)"/>
    <path class="sapIllus_Layering2" d="M266.768,149.3689h9.4009a.6367.6367,0,0,1,.6367.6367v15.4427a.6368.6368,0,0,1-.6368.6368h-9.4009a.6367.6367,0,0,1-.6367-.6367V150.0057a.6368.6368,0,0,1,.6368-.6368Z" transform="translate(75.1617 402.7506) rotate(-81.4564)"/>
    <rect class="sapIllus_Layering2" x="84.4317" y="126.0045" width="57.3026" height="8.4891" rx="0.4016" transform="translate(-20.3543 20.9464) rotate(-9.7133)"/>
    <rect class="sapIllus_Layering2" x="87.2012" y="142.1844" width="57.3026" height="8.4891" rx="0.4016" transform="translate(-23.0444 21.6456) rotate(-9.7133)"/>
    <rect class="sapIllus_Layering2" x="76.5112" y="80.1348" width="57.3026" height="8.4891" rx="0.4016" transform="translate(-12.7288 18.9525) rotate(-9.7133)"/>
    <rect class="sapIllus_Layering2" x="79.2807" y="96.3147" width="57.3026" height="8.4891" rx="0.4016" transform="translate(-15.4189 19.6517) rotate(-9.7133)"/>
    <rect class="sapIllus_Layering2" x="39.4189" y="89.8533" width="21.5605" height="8.4891" rx="0.4016" transform="translate(-15.1562 9.8184) rotate(-9.7132)"/>
    <rect class="sapIllus_Layering2" x="42.1885" y="106.0332" width="21.5605" height="8.4891" rx="0.4016" transform="translate(-17.8464 10.5176) rotate(-9.7132)"/>
    <path class="sapIllus_PatternShadow" d="M127.973,39.2952l71.0214.83c.5314,0,36.5451,29.7241,36.5451,29.7241a1.9462,1.9462,0,0,1,.5373,1.3426l-.0089,107.758a5.4846,5.4846,0,0,1-.0784.9738,7.9433,7.9433,0,0,1-1.6314,3.5878l-.0284.0348a5.8887,5.8887,0,0,1-4.57,2.0808l-107.3309.06a6.9006,6.9006,0,0,0-.7655.049,5.0685,5.0685,0,0,1-5.7387-6.0058,5.914,5.914,0,0,0,.0663-.944L115.963,51.1683Z"/>
    <path class="sapIllus_ObjectFillColor" d="M222.4069,176.1651H105.8575a2.4365,2.4365,0,0,1-2.4365-2.4365V31.7062a2.4365,2.4365,0,0,1,2.4365-2.4365h81.53a3,3,0,0,1,1.9007.679l35.0594,28.7144a1.3528,1.3528,0,0,1,.4957,1.0467V173.7286A2.4364,2.4364,0,0,1,222.4069,176.1651Z"/>
    <path class="sapIllus_Layering2" d="M189.27,29.9338a1.8625,1.8625,0,0,0-2.6358.2289,2.3009,2.3009,0,0,0-.4859,1.4179V58.8491a2.5308,2.5308,0,0,0,2.5308,2.5309h33.8533l.0382,0a1.8687,1.8687,0,0,0,1.0368-3.3228Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M224.6289,58.2476l-.3533-.2893,0,0L189.4209,29.4117a2.1467,2.1467,0,0,0-.25-.1464c-.037-.022-.0733-.0443-.1109-.0648a2.1862,2.1862,0,0,0-.3718-.17,3.4918,3.4918,0,0,0-1.3-.261H105.9535a3.0327,3.0327,0,0,0-3.0326,3.0326v141.83a3.1173,3.1173,0,0,0,3.0326,3.13H221.8914a3.1172,3.1172,0,0,0,3.0326-3.13V59.7573C224.924,59.1724,224.9505,58.5117,224.6289,58.2476ZM188.7879,60.88a1.9066,1.9066,0,0,1-1.9066-1.9066V31.5806a1.8091,1.8091,0,0,1,.7959-1.5c.1709-.1167.1412-.1738.3482-.1738a1.1756,1.1756,0,0,1,.3.0531,2.5049,2.5049,0,0,1,.6459.3751L223.4745,59.09a1.23,1.23,0,0,1,.4433.8759.9012.9012,0,0,1-.4066.7919l-13.79.1226Zm33.1035,114.8825H105.9535a2.1179,2.1179,0,0,1-2.0326-2.13V31.8022a2.0326,2.0326,0,0,1,2.0326-2.0326h80.44a.0915.0915,0,0,1,.0719.1493,2.7926,2.7926,0,0,0-.5532,1.6617V58.9733a2.9066,2.9066,0,0,0,2.9066,2.9066h0l.0214.0024,35.0824,7.9961s.0017.1278.0017.1727V173.6325A2.1179,2.1179,0,0,1,221.8914,175.7624Z"/>
    <path class="sapIllus_BrandColorSecondary" d="M191.9342,122.0753a1.2634,1.2634,0,0,0-.667-.709l-5.5528-2.45a1.2321,1.2321,0,0,0-1.61.6035,21.4467,21.4467,0,1,1-11.0664-29.0195l-4.9971,5.4082a.9762.9762,0,0,0-.17,1.0737.9941.9941,0,0,0,.9267.5669l16.9346-.67a1.1992,1.1992,0,0,0,1.1485-1.2422l-.6661-16.9351a.9778.9778,0,0,0-1.6953-.625l-5.4267,5.8716a29.96,29.96,0,1,0-14.3233,56.2788h.003a29.9989,29.9989,0,0,0,27.124-17.19A1.2323,1.2323,0,0,0,191.9342,122.0753Z"/>
    <ellipse class="sapIllus_Layering2" cx="163.4227" cy="212.7599" rx="60.5" ry="6"/>
    <path class="sapIllus_Layering1" d="M58.83,132.3347A13.3971,13.3971,0,1,0,74.7245,143.25a.2378.2378,0,0,0-.276-.1924l-12.8634,2.3891a.0754.0754,0,0,1-.0879-.06l-2.389-12.863A.2378.2378,0,0,0,58.83,132.3347Z"/>
    <path class="sapIllus_AccentColor" d="M61.7265,129.9707,63.9328,141.85a.2352.2352,0,0,0,.2742.1883l11.88-2.2064a.1476.1476,0,0,0,.1167-.1723,12.465,12.465,0,0,0-14.3579-9.86A.1477.1477,0,0,0,61.7265,129.9707Z"/>
</svg>
`;

// node_modules/@ui5/webcomponents-fiori/dist/illustrations/sapIllus-Spot-UnableToLoad.js
var sapIllus_Spot_UnableToLoad_default = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128" viewBox="0 0 128 128" id="sapIllus-Spot-UnableToLoad">
    <circle class="sapIllus_ObjectFillColor" cx="63.767" cy="65.2108" r="40.5032"/>
      <path class="sapIllus_Layering1" d="M46.84,16.3352a.999.999,0,0,1-.9981-.9624L45.59,8.6408a1.0005,1.0005,0,0,1,.9619-1.0371,1.017,1.017,0,0,1,1.0361.9619l.252,6.732a1.0006,1.0006,0,0,1-.9619,1.0371Z"/>
      <path class="sapIllus_Layering1" d="M22.1078,35.071a.9864.9864,0,0,1-.3066-.0488l-6.4121-2.0654a1,1,0,1,1,.6133-1.9034l6.4121,2.0655a1,1,0,0,1-.3067,1.9521Z"/>
      <path class="sapIllus_Layering1" d="M33.019,23.77a.9981.9981,0,0,1-.7979-.396l-6.2568-8.26a1,1,0,0,1,1.5937-1.208l6.2569,8.26a1,1,0,0,1-.7959,1.604Z"/>
    <circle class="sapIllus_Layering1" cx="63.7534" cy="65.102" r="30.5"/>
    <path class="sapIllus_PatternHighlight" d="M81.5385,40.4286a30.4973,30.4973,0,0,0-43.164,41.6781Z"/>
    <path class="sapIllus_StrokeDetailColor" d="M63.767,106.7112a41.5,41.5,0,1,1,41.5-41.5A41.5474,41.5474,0,0,1,63.767,106.7112Zm0-82.0036A40.5033,40.5033,0,1,0,104.27,65.2107,40.5487,40.5487,0,0,0,63.767,24.7076Z"/>
    <path class="sapIllus_ObjectFillColor" d="M67.867,65.9654l9.5671-9.5672a1.1849,1.1849,0,0,0,0-1.6758l-2.425-2.425a1.1849,1.1849,0,0,0-1.6758,0l-9.5671,9.5671L54.199,52.2974a1.1849,1.1849,0,0,0-1.6758,0l-2.425,2.425a1.1849,1.1849,0,0,0,0,1.6758l9.5671,9.5672-9.5671,9.5671a1.1849,1.1849,0,0,0,0,1.6758l2.425,2.425a1.1849,1.1849,0,0,0,1.6758,0l9.5672-9.5671,9.5671,9.5671a1.1849,1.1849,0,0,0,1.6758,0l2.425-2.425a1.1849,1.1849,0,0,0,0-1.6758Z"/>
</svg>
`;

// node_modules/@ui5/webcomponents-fiori/dist/illustrations/UnableToLoad.js
var name23 = "UnableToLoad";
var set = "fiori";
var collection23 = "V4";
var title = IM_TITLE_UNABLETOLOAD;
var subtitle = IM_SUBTITLE_UNABLETOLOAD;
registerIllustration(name23, {
  dialogSvg: sapIllus_Dialog_UnableToLoad_default,
  sceneSvg: sapIllus_Scene_UnableToLoad_default,
  spotSvg: sapIllus_Spot_UnableToLoad_default,
  dotSvg: sapIllus_Spot_UnableToLoad_default,
  title,
  subtitle,
  set,
  collection: collection23
});

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/index.js
var import_react73 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/internal/VariantManagementContext.js
var import_react69 = __toESM(require_react(), 1);
var VariantManagementContext = (0, import_react69.createContext)({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectVariantItem: (_selectedVariant) => {
  }
});

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/ManageViewsDialog.js
var import_react71 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/ManageViewsDialog.module.css.js
var styleData40 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "ManageViewsDialog.module.css",
  content: ".ManageViewsDialog_manageViewsDialog_3s6rx_1{width:100%}.ManageViewsDialog_manageViewsDialog_3s6rx_1::part(content),.ManageViewsDialog_manageViewsDialog_3s6rx_1::part(header){padding:0}.ManageViewsDialog_manageViewsDialog_3s6rx_1::part(footer){border-block-start:none;padding:0}@media (min-width:1024px){.ManageViewsDialog_manageViewsDialog_3s6rx_1{width:70vw}}.ManageViewsDialog_headerText_3s6rx_21{align-self:start;display:inline-block;font-family:var(--_ui5wcr_popup_header_font_family);font-size:1rem;line-height:var(--_ui5wcr_popup_default_header_height);margin:0;max-height:var(--_ui5wcr_popup_default_header_height);max-width:100%;min-height:var(--_ui5wcr_popup_default_header_height);overflow:hidden;padding-inline-start:1rem;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ManageViewsDialog_search_3s6rx_38{margin-block-end:.5rem;width:calc(100% - 2rem)}.ManageViewsDialog_inputIcon_3s6rx_43{color:var(--sapContent_IconColor);cursor:pointer}"
};
var classNames39 = {
  "manageViewsDialog": "ManageViewsDialog_manageViewsDialog_3s6rx_1",
  "headerText": "ManageViewsDialog_headerText_3s6rx_21",
  "search": "ManageViewsDialog_search_3s6rx_38",
  "inputIcon": "ManageViewsDialog_inputIcon_3s6rx_43"
};

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/ManageViewsTableRows.js
var import_react70 = __toESM(require_react(), 1);
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var ManageViewsTableRows = (props) => {
  const {
    variantNames,
    changedVariantNames,
    setChangedVariantNames,
    handleRowChange,
    handleDelete,
    defaultView,
    setDefaultView,
    showShare,
    showApplyAutomatically,
    showSetAsDefault,
    showCreatedBy,
    labelReadOnly,
    favorite,
    children,
    global,
    isDefault,
    applyAutomatically,
    applyAutomaticallyText,
    author,
    setInvalidVariants,
    hideDelete,
    showOnlyFavorites
  } = props;
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const errorTextAlreadyExists = i18nBundle.getText(VARIANT_MANAGEMENT_ERROR_DUPLICATE);
  const errorTextEmpty = i18nBundle.getText(SPECIFY_VIEW_NAME);
  const publicText = i18nBundle.getText(PUBLIC);
  const privateText = i18nBundle.getText(PRIVATE);
  const a11yFavoriteText = i18nBundle.getText(MARK_AS_FAVORITE);
  const a11yStandardText = i18nBundle.getText(MARK_AS_STANDARD);
  const a11yDeleteText = i18nBundle.getText(DELETE_VIEW);
  const a11yApplyAutomaticallyText = i18nBundle.getText(APPLY_AUTOMATICALLY);
  const favoriteIconTitleText = i18nBundle.getText(SELECTED_AS_FAVORITE);
  const unfavoriteIconTitleText = i18nBundle.getText(UNSELECTED_AS_FAVORITE);
  const inputPlaceHolder = i18nBundle.getText(VIEW);
  const [internalFavorite, setFavorite] = (0, import_react70.useReducer)((prev) => {
    return !prev;
  }, !!favorite);
  const iconName = internalFavorite ? favorite_default : unfavorite_default;
  const inputRef = (0, import_react70.useRef)(void 0);
  const [variantNameInvalid, setVariantNameInvalid] = (0, import_react70.useState)(false);
  const onFavoriteClick = (e) => {
    setFavorite();
    handleRowChange(e, {
      currentVariant: children,
      favorite: !internalFavorite
    });
  };
  const handleVariantInput = (e) => {
    if (typeof props.manageViewsInputProps?.onInput === "function") {
      props.manageViewsInputProps?.onInput(e);
    }
    const trimmedValue = trimAndRemoveSpaces(e.target.value);
    if (children !== trimmedValue && (variantNames.includes(trimmedValue) || Array.from(changedVariantNames.values()).includes(trimmedValue))) {
      setVariantNameInvalid(errorTextAlreadyExists);
      setInvalidVariants((prev) => __spreadProps(__spreadValues({}, prev), {
        [`${children}`]: inputRef.current
      }));
      handleRowChange(e, {
        currentVariant: children,
        children: trimmedValue
      });
    } else if (trimmedValue.length === 0) {
      setVariantNameInvalid(errorTextEmpty);
      setInvalidVariants((prev) => __spreadProps(__spreadValues({}, prev), {
        [children]: inputRef.current
      }));
      handleRowChange(e, {
        currentVariant: children,
        children: trimmedValue
      });
    } else if (e.isInvalid) {
      setInvalidVariants((prev) => __spreadProps(__spreadValues({}, prev), {
        [`${children}`]: inputRef.current
      }));
    } else {
      setVariantNameInvalid(false);
      setInvalidVariants((prev) => {
        const invalidRows = __spreadValues({}, prev);
        if (prev.hasOwnProperty(children)) {
          delete invalidRows[children];
        }
        return invalidRows;
      });
      handleRowChange(e, {
        currentVariant: children,
        children: trimmedValue
      });
    }
  };
  const handleVariantChange = (e) => {
    if (typeof props.manageViewsInputProps?.onChange === "function") {
      props.manageViewsInputProps?.onChange(e);
    }
    const trimmedValue = trimAndRemoveSpaces(e.target.value);
    setChangedVariantNames((prev) => {
      const currentChangedVariants = new Map(prev);
      currentChangedVariants.set(children, trimmedValue);
      return currentChangedVariants;
    });
  };
  const handleDefaultChange = () => {
    setDefaultView(children);
  };
  const handleApplyAutomaticallyChange = (e) => {
    handleRowChange(e, {
      currentVariant: children,
      applyAutomatically: e.target.checked
    });
  };
  const renderView = () => {
    if (labelReadOnly) {
      return (0, import_jsx_runtime58.jsx)(Text, {
        style: {
          fontFamily: isDefault ? ThemingParameters.sapFontBoldFamily : ThemingParameters.sapFontFamily
        },
        children
      });
    }
    return (0, import_jsx_runtime58.jsx)(Input, __spreadProps(__spreadValues({
      placeholder: inputPlaceHolder,
      ref: inputRef
    }, props.manageViewsInputProps), {
      valueStateMessage: props.manageViewsInputProps?.valueStateMessage ?? (0, import_jsx_runtime58.jsx)("div", {
        children: variantNameInvalid
      }),
      valueState: props.manageViewsInputProps?.valueState ?? (!variantNameInvalid ? ValueState_default.None : ValueState_default.Negative),
      value: children,
      onInput: handleVariantInput,
      onChange: handleVariantChange
    }));
  };
  return (0, import_jsx_runtime58.jsxs)(TableRow, {
    "data-id": children,
    children: [showOnlyFavorites && (0, import_jsx_runtime58.jsx)(TableCell, {
      children: isDefault ? (0, import_jsx_runtime58.jsx)(Icon, {
        name: favorite_default,
        style: {
          color: ThemingParameters.sapContent_NonInteractiveIconColor
        }
      }) : (0, import_jsx_runtime58.jsx)(Icon, {
        accessibleName: a11yFavoriteText,
        title: iconName === favorite_default ? favoriteIconTitleText : unfavoriteIconTitleText,
        name: iconName,
        mode: IconMode_default.Interactive,
        style: {
          color: ThemingParameters.sapContent_MarkerIconColor,
          cursor: "pointer"
        },
        onClick: onFavoriteClick
      })
    }), (0, import_jsx_runtime58.jsx)(TableCell, {
      children: renderView()
    }), showShare && (0, import_jsx_runtime58.jsx)(TableCell, {
      children: global ? publicText : privateText
    }), showSetAsDefault && (0, import_jsx_runtime58.jsx)(TableCell, {
      children: (0, import_jsx_runtime58.jsx)(RadioButton, {
        accessibleName: a11yStandardText,
        checked: defaultView !== void 0 ? defaultView === children : isDefault,
        onChange: handleDefaultChange
      })
    }), showApplyAutomatically && (0, import_jsx_runtime58.jsx)(TableCell, {
      children: (0, import_jsx_runtime58.jsx)(CheckBox, {
        accessibleName: a11yApplyAutomaticallyText,
        checked: applyAutomatically,
        onChange: handleApplyAutomaticallyChange,
        text: applyAutomaticallyText
      })
    }), showCreatedBy && (0, import_jsx_runtime58.jsx)(TableCell, {
      children: (0, import_jsx_runtime58.jsx)(Text, {
        children: author
      })
    }), (0, import_jsx_runtime58.jsx)(TableCell, {
      children: !(hideDelete ?? global) && (0, import_jsx_runtime58.jsx)(Button, {
        tooltip: a11yDeleteText,
        accessibleName: a11yDeleteText,
        icon: decline_default,
        design: ButtonDesign_default.Transparent,
        onClick: handleDelete,
        "data-children": children
      })
    })]
  }, `${children}`);
};

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/ManageViewsDialog.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var ManageViewsDialog = (props) => {
  const {
    children,
    onAfterClose,
    handleSaveManageViews,
    showShare,
    showApplyAutomatically,
    showSetAsDefault,
    showCreatedBy,
    variantNames,
    showOnlyFavorites,
    onManageViewsCancel
  } = props;
  const uniqueId = useIsomorphicId();
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);
  const viewHeaderText = i18nBundle.getText(VIEW);
  const sharingHeaderText = i18nBundle.getText(SHARING);
  const defaultHeaderText = i18nBundle.getText(DEFAULT);
  const applyAutomaticallyHeaderText = i18nBundle.getText(APPLY_AUTOMATICALLY);
  const createdByHeaderText = i18nBundle.getText(CREATED_BY);
  const manageViewsText = i18nBundle.getText(MANAGE_VIEWS);
  const searchText = i18nBundle.getText(SEARCH);
  const [changedVariantNames, setChangedVariantNames] = (0, import_react71.useState)(/* @__PURE__ */ new Map());
  const [invalidVariants, setInvalidVariants] = (0, import_react71.useState)({});
  const [hasApplyAutomaticallyText, setHasApplyAutomaticallyText] = (0, import_react71.useState)(false);
  useStylesheet(styleData40, "ManageViewsDialog");
  const headerRow = (0, import_jsx_runtime59.jsxs)(TableHeaderRow, {
    sticky: true,
    children: [showOnlyFavorites && (0, import_jsx_runtime59.jsx)(TableHeaderCell, {}, "favorite-variant-item"), (0, import_jsx_runtime59.jsx)(TableHeaderCell, {
      importance: 10,
      "min-width": "18rem",
      children: viewHeaderText
    }), showShare && (0, import_jsx_runtime59.jsx)(TableHeaderCell, {
      minWidth: "7.5rem",
      maxWidth: "8rem",
      children: sharingHeaderText
    }), showSetAsDefault && (0, import_jsx_runtime59.jsx)(TableHeaderCell, {
      minWidth: "8rem",
      maxWidth: "8rem",
      children: defaultHeaderText
    }), TableHeaderCell && (0, import_jsx_runtime59.jsx)(TableHeaderCell, {
      minWidth: hasApplyAutomaticallyText ? "25rem" : "5rem",
      children: applyAutomaticallyHeaderText
    }), showCreatedBy && (0, import_jsx_runtime59.jsx)(TableHeaderCell, {
      minWidth: "10rem",
      children: createdByHeaderText
    }), (0, import_jsx_runtime59.jsx)(TableHeaderCell, {
      importance: 9,
      width: "3rem"
    }, "delete-variant-item")]
  });
  const [childrenProps, setChildrenProps] = (0, import_react71.useState)(import_react71.Children.map(children, (child) => {
    if (!(0, import_react71.isValidElement)(child)) {
      return {};
    }
    return child.props;
  }));
  (0, import_react71.useEffect)(() => {
    let _hasApplyAutomaticallyText = false;
    setChildrenProps(import_react71.Children.map(children, (child) => {
      if (!(0, import_react71.isValidElement)(child)) {
        return {};
      }
      if (child.props?.applyAutomaticallyText) {
        _hasApplyAutomaticallyText = true;
      }
      return child.props;
    }));
    setHasApplyAutomaticallyText(_hasApplyAutomaticallyText);
  }, [children]);
  const [filteredProps, setFilteredProps] = (0, import_react71.useState)(childrenProps);
  (0, import_react71.useEffect)(() => {
    setFilteredProps(childrenProps);
  }, [childrenProps]);
  const [defaultView, setDefaultView] = (0, import_react71.useState)();
  const changedTableRows = (0, import_react71.useRef)({});
  const handleTableRowChange = (e, payload) => {
    if (payload) {
      changedTableRows.current[payload.currentVariant] = __spreadValues(__spreadValues({}, changedTableRows.current[payload.currentVariant] ?? {}), payload);
    }
  };
  const deletedTableRows = (0, import_react71.useRef)(/* @__PURE__ */ new Set([]));
  const handleDelete = (e) => {
    deletedTableRows.current.add(e.target.dataset.children);
    setChildrenProps((prev) => prev.filter((item) => item.children !== e.target.dataset.children).map((item) => {
      if (changedTableRows.current.hasOwnProperty(item.children)) {
        return __spreadValues(__spreadValues({}, item), changedTableRows.current[item.children]);
      }
      return item;
    }));
  };
  const handleSave = (e) => {
    if (Object.keys(invalidVariants).length === 0) {
      handleSaveManageViews(e, {
        updatedRows: changedTableRows.current,
        defaultView,
        deletedRows: deletedTableRows.current
      });
    } else {
      Object.values(invalidVariants)[0].focus();
    }
  };
  const handleClose = (e) => {
    if (e.detail.escPressed) {
      handleCancel(e);
    } else {
      onAfterClose(e);
    }
  };
  const handleCancel = (e) => {
    if (typeof onManageViewsCancel === "function") {
      onManageViewsCancel(enrichEventWithDetails(e, {
        invalidVariants
      }));
    }
    setInvalidVariants((prev) => {
      Object.values(prev).forEach((item) => {
        item.isInvalid = false;
      });
      return {};
    });
    onAfterClose(e);
  };
  const handleSearchInput = (e) => {
    const lowerCaseVal = e.target.value.toLowerCase();
    setFilteredProps(childrenProps.filter((item) => item.children?.toLowerCase()?.includes(lowerCaseVal) || item.author?.toLowerCase()?.includes(lowerCaseVal)));
  };
  return (0, import_jsx_runtime59.jsx)(Dialog, {
    open: true,
    className: classNames39.manageViewsDialog,
    "data-component-name": "VariantManagementManageViewsDialog",
    onClose: onAfterClose,
    onBeforeClose: handleClose,
    headerText: manageViewsText,
    initialFocus: `search-${uniqueId}`,
    header: (0, import_jsx_runtime59.jsxs)(FlexBox, {
      direction: FlexBoxDirection.Column,
      style: {
        width: "100%"
      },
      alignItems: FlexBoxAlignItems.Center,
      children: [(0, import_jsx_runtime59.jsx)("h2", {
        className: classNames39.headerText,
        children: manageViewsText
      }), (0, import_jsx_runtime59.jsx)(Input, {
        id: `search-${uniqueId}`,
        className: classNames39.search,
        placeholder: searchText,
        showClearIcon: true,
        icon: (0, import_jsx_runtime59.jsx)(Icon, {
          name: search_default,
          className: classNames39.inputIcon
        }),
        onInput: handleSearchInput
      })]
    }),
    resizable: true,
    footer: (0, import_jsx_runtime59.jsx)(Bar, {
      design: BarDesign_default.Footer,
      endContent: (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, {
        children: [(0, import_jsx_runtime59.jsx)(Button, {
          design: ButtonDesign_default.Emphasized,
          onClick: handleSave,
          children: saveText
        }), (0, import_jsx_runtime59.jsx)(Button, {
          design: ButtonDesign_default.Transparent,
          onClick: handleCancel,
          children: cancelText
        })]
      })
    }),
    children: (0, import_jsx_runtime59.jsx)(Table, {
      headerRow,
      role: "table",
      overflowMode: TableOverflowMode_default.Popin,
      children: filteredProps.map((itemProps) => {
        return (0, import_react71.createElement)(ManageViewsTableRows, __spreadProps(__spreadValues({}, itemProps), {
          setInvalidVariants,
          setChangedVariantNames,
          changedVariantNames,
          variantNames,
          handleRowChange: handleTableRowChange,
          handleDelete,
          defaultView,
          setDefaultView,
          showShare,
          showApplyAutomatically,
          showSetAsDefault,
          showCreatedBy,
          key: itemProps?.children,
          showOnlyFavorites
        }));
      })
    })
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/SaveViewDialog.js
var import_react72 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/SaveViewDialog.module.css.js
var styleData41 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "SaveViewDialog.module.css",
  content: ".SaveViewDialog_dialog_1vfct_1::part(footer){border-block-start:none;padding:0}.SaveViewDialog_input_1vfct_8{margin-block:.1875rem;width:100%}.SaveViewDialog_checkBoxesContainer_1vfct_13{padding-inline:.5rem}"
};
var classNames40 = {
  "dialog": "SaveViewDialog_dialog_1vfct_1",
  "input": "SaveViewDialog_input_1vfct_8",
  "checkBoxesContainer": "SaveViewDialog_checkBoxesContainer_1vfct_13"
};

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/SaveViewDialog.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var SaveViewDialog = (props) => {
  const {
    onAfterClose,
    handleSave,
    selectedVariant,
    showShare,
    showApplyAutomatically,
    showSetAsDefault,
    variantNames,
    saveViewInputProps,
    onSaveViewCancel
  } = props;
  const saveViewDialogRef = (0, import_react72.useRef)(null);
  const inputRef = (0, import_react72.useRef)(void 0);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  useStylesheet(styleData41, "SaveViewDialog");
  const uniqueId = useIsomorphicId();
  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);
  const headingText = i18nBundle.getText(SAVE_VIEW);
  const defaultCbLabel = i18nBundle.getText(SET_AS_DEFAULT);
  const publicCbLabel = i18nBundle.getText(PUBLIC);
  const applyAutomaticallyCbLabel = i18nBundle.getText(APPLY_AUTOMATICALLY);
  const inputLabelText = i18nBundle.getText(VIEW);
  const errorTextAlreadyExists = i18nBundle.getText(VARIANT_MANAGEMENT_ERROR_DUPLICATE);
  const errorTextEmpty = i18nBundle.getText(SPECIFY_VIEW_NAME);
  const [isDefault, setDefault] = (0, import_react72.useState)(selectedVariant.isDefault);
  const [isPublic, setPublic] = (0, import_react72.useState)(selectedVariant.global);
  const [applyAutomatically, setApplyAutomatically] = (0, import_react72.useState)(selectedVariant.applyAutomatically);
  const [variantName, setVariantName] = (0, import_react72.useState)(selectedVariant.children);
  const [variantNameInvalid, setVariantNameInvalid] = (0, import_react72.useState)(false);
  const [isInvalid, setIsInvalid] = (0, import_react72.useState)(false);
  const handleInputChange = (e) => {
    if (typeof saveViewInputProps?.onInput === "function") {
      saveViewInputProps.onInput(e);
    }
    const trimmedValue = trimAndRemoveSpaces(e.target.value);
    setVariantName(trimmedValue);
    if (variantNames.includes(trimmedValue)) {
      setVariantNameInvalid(errorTextAlreadyExists);
    } else if (trimmedValue.length === 0) {
      setVariantNameInvalid(errorTextEmpty);
    } else if (e.isInvalid) {
      setIsInvalid(true);
    } else {
      setVariantNameInvalid(false);
      setIsInvalid(false);
    }
  };
  const onSave = (e) => {
    if (variantNames.includes(variantName)) {
      setVariantNameInvalid(errorTextAlreadyExists);
      inputRef.current?.focus();
    } else if (variantName.length === 0) {
      setVariantNameInvalid(errorTextEmpty);
      inputRef.current?.focus();
    } else if (isInvalid) {
      inputRef.current?.focus();
    } else {
      setVariantNameInvalid(false);
      handleSave(e, __spreadProps(__spreadValues({}, selectedVariant), {
        children: variantName,
        isDefault,
        global: isPublic,
        applyAutomatically
      }));
    }
  };
  const handleClose = (e) => {
    if (e.detail.escPressed) {
      handleCancel(e);
    } else {
      onAfterClose(e);
    }
  };
  const handleCancel = (e) => {
    if (typeof onSaveViewCancel === "function") {
      onSaveViewCancel(enrichEventWithDetails(e, __spreadProps(__spreadValues({}, selectedVariant), {
        children: variantName,
        isDefault,
        global: isPublic,
        applyAutomatically,
        isInvalid
      })));
    }
    setIsInvalid(false);
    inputRef.current.isInvalid = false;
    saveViewDialogRef.current.open = false;
  };
  const handleChangeDefault = (e) => {
    setDefault(e.target.checked);
  };
  const handleChangePublic = (e) => {
    setPublic(e.target.checked);
  };
  const handleChangeApplyAutomatically = (e) => {
    setApplyAutomatically(e.target.checked);
  };
  return (0, import_jsx_runtime60.jsx)(Dialog, {
    open: true,
    className: classNames40.dialog,
    ref: saveViewDialogRef,
    headerText: headingText,
    onClose: onAfterClose,
    onBeforeClose: handleClose,
    initialFocus: `view-${uniqueId}`,
    footer: (0, import_jsx_runtime60.jsx)(Bar, {
      design: BarDesign_default.Footer,
      endContent: (0, import_jsx_runtime60.jsxs)(import_jsx_runtime60.Fragment, {
        children: [(0, import_jsx_runtime60.jsx)(Button, {
          design: ButtonDesign_default.Emphasized,
          onClick: onSave,
          children: saveText
        }), (0, import_jsx_runtime60.jsx)(Button, {
          design: ButtonDesign_default.Transparent,
          onClick: handleCancel,
          children: cancelText
        })]
      })
    }),
    children: (0, import_jsx_runtime60.jsxs)(FlexBox, {
      direction: FlexBoxDirection.Column,
      alignItems: FlexBoxAlignItems.Start,
      children: [(0, import_jsx_runtime60.jsx)(Label, {
        for: `view-${uniqueId}`,
        showColon: true,
        children: inputLabelText
      }), (0, import_jsx_runtime60.jsx)(Input, __spreadProps(__spreadValues({
        accessibleName: inputLabelText,
        ref: inputRef
      }, saveViewInputProps), {
        valueState: saveViewInputProps?.valueState ?? (!variantNameInvalid ? "None" : "Negative"),
        valueStateMessage: saveViewInputProps?.valueStateMessage ?? (0, import_jsx_runtime60.jsx)("div", {
          children: variantNameInvalid
        }),
        className: clsx(classNames40.input, saveViewInputProps?.className),
        id: `view-${uniqueId}`,
        value: variantName,
        onInput: handleInputChange
      })), (0, import_jsx_runtime60.jsxs)(FlexBox, {
        alignItems: FlexBoxAlignItems.Start,
        direction: FlexBoxDirection.Column,
        className: classNames40.checkBoxesContainer,
        children: [showSetAsDefault && (0, import_jsx_runtime60.jsx)(CheckBox, {
          onChange: handleChangeDefault,
          text: defaultCbLabel,
          checked: isDefault
        }), showShare && (0, import_jsx_runtime60.jsx)(CheckBox, {
          onChange: handleChangePublic,
          text: publicCbLabel,
          checked: isPublic
        }), showApplyAutomatically && (0, import_jsx_runtime60.jsx)(CheckBox, {
          onChange: handleChangeApplyAutomatically,
          text: applyAutomaticallyCbLabel,
          checked: applyAutomatically
        })]
      })]
    })
  });
};

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/VariantManagement.module.css.js
var styleData42 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "VariantManagement.module.css",
  content: ".VariantManagement_container_1dm4r_1{align-items:center;display:flex;text-align:center}.VariantManagement_title_1dm4r_7{color:var(--sapLinkColor);cursor:pointer;text-shadow:none}.VariantManagement_title_1dm4r_7:hover{color:var(--sapLink_Hover_Color)}.VariantManagement_title_1dm4r_7:active{color:var(--sapLink_Active_Color)}.VariantManagement_disabled_1dm4r_21 .VariantManagement_title_1dm4r_7{color:var(--sapGroup_TitleTextColor);cursor:default}.VariantManagement_disabled_1dm4r_21 .VariantManagement_title_1dm4r_7:hover{color:var(--sapGroup_TitleTextColor)}.VariantManagement_dirtyState_1dm4r_32{color:var(--sapGroup_TitleTextColor);flex-grow:1;font-family:var(--sapFontBoldFamily);font-size:var(--sapFontSize);padding-inline:.125rem}.VariantManagement_dirtyStateText_1dm4r_40{font-size:var(--sapFontSmallSize);font-weight:400}.VariantManagement_navDownBtn_1dm4r_45{margin-inline-start:.125rem}.VariantManagement_footer_1dm4r_49>:last-child{margin-inline-end:0}.VariantManagement_inputIcon_1dm4r_55{color:var(--sapContent_IconColor);cursor:pointer}.VariantManagement_searchInputContainer_1dm4r_60{padding:.25rem 1rem}.VariantManagement_searchInput_1dm4r_60{width:100%}.VariantManagement_popover_1dm4r_68{min-width:25rem}.VariantManagement_popover_1dm4r_68::part(content){padding:0}.VariantManagement_popover_1dm4r_68::part(footer){border-block-start:none;padding:0}"
};
var classNames41 = {
  "container": "VariantManagement_container_1dm4r_1",
  "title": "VariantManagement_title_1dm4r_7",
  "disabled": "VariantManagement_disabled_1dm4r_21",
  "dirtyState": "VariantManagement_dirtyState_1dm4r_32",
  "dirtyStateText": "VariantManagement_dirtyStateText_1dm4r_40",
  "navDownBtn": "VariantManagement_navDownBtn_1dm4r_45",
  "footer": "VariantManagement_footer_1dm4r_49",
  "inputIcon": "VariantManagement_inputIcon_1dm4r_55",
  "searchInputContainer": "VariantManagement_searchInputContainer_1dm4r_60",
  "searchInput": "VariantManagement_searchInput_1dm4r_60",
  "popover": "VariantManagement_popover_1dm4r_68"
};

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/index.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var VariantManagement = (0, import_react73.forwardRef)((props, ref) => {
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const _a = props, {
    titleText = i18nBundle.getText(MY_VIEWS),
    className,
    style,
    placement = PopoverPlacement_default.Bottom,
    level = TitleLevel_default.H4,
    onSelect,
    closeOnItemSelect,
    disabled,
    onSaveAs,
    onSaveManageViews,
    showOnlyFavorites,
    inErrorState,
    hideShare,
    children,
    hideManageVariants,
    hideApplyAutomatically,
    hideSetAsDefault,
    hideCreatedBy,
    hideSaveAs,
    dirtyStateText = "*",
    dirtyState,
    onSave,
    onManageViewsCancel,
    onSaveViewCancel
  } = _a, rest = __objRest(_a, [
    "titleText",
    "className",
    "style",
    "placement",
    "level",
    "onSelect",
    "closeOnItemSelect",
    "disabled",
    "onSaveAs",
    "onSaveManageViews",
    "showOnlyFavorites",
    "inErrorState",
    "hideShare",
    "children",
    "hideManageVariants",
    "hideApplyAutomatically",
    "hideSetAsDefault",
    "hideCreatedBy",
    "hideSaveAs",
    "dirtyStateText",
    "dirtyState",
    "onSave",
    "onManageViewsCancel",
    "onSaveViewCancel"
  ]);
  useStylesheet(styleData42, VariantManagement.displayName);
  const popoverRef = (0, import_react73.useRef)(null);
  const [safeChildren, setSafeChildren] = (0, import_react73.useState)(import_react73.Children.toArray(children));
  (0, import_react73.useEffect)(() => {
    setSafeChildren(import_react73.Children.toArray(children));
  }, [children]);
  const [popoverOpen, setPopoverOpen] = (0, import_react73.useState)(false);
  const [manageViewsDialogOpen, setManageViewsDialogOpen] = (0, import_react73.useState)(false);
  const [saveAsDialogOpen, setSaveAsDialogOpen] = (0, import_react73.useState)(false);
  const [selectedVariant, setSelectedVariant] = (0, import_react73.useState)(() => {
    const currentSelectedVariant = safeChildren.find((item) => (0, import_react73.isValidElement)(item) && item.props.selected);
    if (currentSelectedVariant) {
      return __spreadProps(__spreadValues({}, currentSelectedVariant.props), {
        variantItem: currentSelectedVariant.ref
      });
    }
  });
  const [selectedSaveViewInputProps, setSelectedSaveViewInputProps] = (0, import_react73.useState)(selectedVariant?.saveViewInputProps ?? {});
  const handleClose = () => {
    setPopoverOpen(false);
  };
  const handleManageClick = () => {
    setManageViewsDialogOpen(true);
    handleClose();
  };
  const handleManageClose = () => {
    setManageViewsDialogOpen(false);
  };
  const handleOpenSaveAsDialog = () => {
    setSaveAsDialogOpen(true);
    handleClose();
  };
  const handleSaveAsClose = () => {
    setSaveAsDialogOpen(false);
  };
  const handleSave = (e) => {
    if (typeof onSave === "function") {
      onSave(enrichEventWithDetails(e, selectedVariant));
    }
  };
  const handleSaveView = (e, selectedVariant2) => {
    if (typeof onSaveAs === "function") {
      onSaveAs(enrichEventWithDetails(e, selectedVariant2));
    }
    setSelectedVariant(selectedVariant2);
    if (!e.defaultPrevented) {
      handleSaveAsClose();
    }
  };
  const handleSaveManageViews = (e, payload) => {
    const {
      defaultView,
      updatedRows,
      deletedRows
    } = payload;
    const callbackProperties = {
      deletedVariants: [],
      prevVariants: [],
      updatedVariants: [],
      variants: []
    };
    setSafeChildren((prev) => import_react73.Children.toArray(prev.map((child) => {
      if (!(0, import_react73.isValidElement)(child)) {
        return false;
      }
      const castChild = child;
      let updatedProps = {};
      const currentVariant = popoverRef.current.querySelector(`ui5-li[data-children="${castChild.props.children}"]`);
      callbackProperties.prevVariants.push(castChild.props);
      if (defaultView) {
        if (defaultView === castChild.props.children) {
          updatedProps.isDefault = true;
        } else if (castChild.props.isDefault) {
          updatedProps.isDefault = false;
        }
      }
      if (Object.keys(updatedRows).includes(castChild.props.children)) {
        const _a2 = updatedRows[castChild.props.children], {
          currentVariant: _0
        } = _a2, rest2 = __objRest(_a2, [
          "currentVariant"
        ]);
        updatedProps = __spreadValues(__spreadValues({}, updatedProps), rest2);
      }
      if (deletedRows.has(castChild.props.children)) {
        callbackProperties.deletedVariants.push(castChild.props);
        return false;
      }
      if (Object.keys(updatedProps).length > 0) {
        callbackProperties.updatedVariants.push(__spreadProps(__spreadValues(__spreadValues({}, castChild.props), updatedProps), {
          variantItem: currentVariant,
          prevVariant: __spreadValues({}, castChild.props)
        }));
      }
      callbackProperties.variants.push(__spreadProps(__spreadValues(__spreadValues({}, castChild.props), updatedProps), {
        variantItem: currentVariant
      }));
      return (0, import_react73.cloneElement)(castChild, updatedProps);
    })));
    if (typeof onSaveManageViews === "function") {
      onSaveManageViews(enrichEventWithDetails(e, callbackProperties));
    }
    if (!e.defaultPrevented) {
      handleManageClose();
    }
  };
  const handleOpenVariantManagement = (0, import_react73.useCallback)((e) => {
    popoverRef.current.opener = e.target;
    setPopoverOpen(true);
  }, [popoverRef]);
  const handleCloseVariantManagement = (e) => {
    stopPropagation(e);
    setPopoverOpen(false);
  };
  const searchText = i18nBundle.getText(SEARCH);
  const saveAsText = i18nBundle.getText(SAVE_AS);
  const manageText = i18nBundle.getText(MANAGE);
  const saveText = i18nBundle.getText(SAVE);
  const a11ySearchText = i18nBundle.getText(SEARCH_VARIANT);
  const selectViewText = i18nBundle.getText(SELECT_VIEW);
  const variantManagementClasses = clsx(classNames41.container, disabled && classNames41.disabled, className);
  const dirtyStateClasses = clsx(classNames41.dirtyState, dirtyStateText !== "*" && classNames41.dirtyStateText);
  const selectVariantEventRef = (0, import_react73.useRef)(void 0);
  (0, import_react73.useEffect)(() => {
    if (selectVariantEventRef.current) {
      if (typeof onSelect === "function") {
        onSelect(enrichEventWithDetails(selectVariantEventRef.current, {
          selectedVariant
        }));
        selectVariantEventRef.current = void 0;
      }
    }
  }, [selectedVariant, onSelect]);
  (0, import_react73.useEffect)(() => {
    const selectedChild = safeChildren.find((item) => (0, import_react73.isValidElement)(item) && item.props.children === selectedVariant?.children);
    setSelectedSaveViewInputProps(selectedChild?.props.saveViewInputProps ?? {});
  }, [selectedVariant, safeChildren]);
  const handleVariantItemSelect = (e) => {
    setSelectedVariant(__spreadProps(__spreadValues({}, e.detail.selectedItems[0].dataset), {
      variantItem: e.detail.selectedItems[0]
    }));
    selectVariantEventRef.current = e;
    if (closeOnItemSelect) {
      handleClose();
    }
  };
  const variantNames = safeChildren.map((item) => (0, import_react73.isValidElement)(item) && typeof item.props?.children === "string" ? item.props.children : "");
  const [favoriteChildren, setFavoriteChildren] = (0, import_react73.useState)(void 0);
  (0, import_react73.useEffect)(() => {
    if (showOnlyFavorites) {
      setFavoriteChildren(safeChildren.filter((child) => {
        return (0, import_react73.isValidElement)(child) && (child.props.favorite || child.props.isDefault);
      }));
    }
    if (!showOnlyFavorites && favoriteChildren?.length > 0) {
      setFavoriteChildren(void 0);
    }
  }, [showOnlyFavorites, safeChildren]);
  const safeChildrenWithFavorites = favoriteChildren ?? safeChildren;
  const showInput = safeChildrenWithFavorites.length > 10;
  const [filteredChildren, setFilteredChildren] = (0, import_react73.useState)(void 0);
  const [searchValue, setSearchValue] = (0, import_react73.useState)("");
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
    setFilteredChildren(safeChildrenWithFavorites.filter((child) => typeof child?.props?.children === "string" && child.props.children.toLowerCase().includes(e.target.value.toLowerCase())));
  };
  (0, import_react73.useEffect)(() => {
    if (filteredChildren) {
      setFilteredChildren(safeChildrenWithFavorites.filter((child) => typeof child?.props?.children === "string" && child.props.children.toLowerCase().includes(searchValue)));
    }
  }, [safeChildrenWithFavorites]);
  const showSaveBtn = dirtyState && !selectedVariant?.hasOwnProperty("readOnly");
  return (0, import_jsx_runtime61.jsx)("div", __spreadProps(__spreadValues({
    className: variantManagementClasses,
    style
  }, rest), {
    ref,
    children: (0, import_jsx_runtime61.jsxs)(VariantManagementContext.Provider, {
      value: {
        selectVariantItem: setSelectedVariant
      },
      children: [(0, import_jsx_runtime61.jsxs)(FlexBox, {
        onClick: disabled ? void 0 : handleOpenVariantManagement,
        children: [(0, import_jsx_runtime61.jsx)(Title, {
          level,
          className: classNames41.title,
          children: selectedVariant?.children
        }), dirtyState && (0, import_jsx_runtime61.jsx)("div", {
          className: dirtyStateClasses,
          children: dirtyStateText
        })]
      }), (0, import_jsx_runtime61.jsx)(Button, {
        className: clsx(classNames41.navDownBtn, "ui5-content-density-compact"),
        tooltip: selectViewText,
        accessibleName: selectViewText,
        onClick: disabled ? void 0 : handleOpenVariantManagement,
        design: ButtonDesign_default.Transparent,
        icon: navigation_down_arrow_default,
        disabled
      }), (0, import_jsx_runtime61.jsx)(ResponsivePopover, {
        open: popoverOpen,
        className: classNames41.popover,
        ref: popoverRef,
        headerText: titleText,
        placement,
        footer: (showSaveBtn || !hideSaveAs || !hideManageVariants) && (0, import_jsx_runtime61.jsx)(Bar, {
          design: BarDesign_default.Footer,
          className: classNames41.footer,
          endContent: (0, import_jsx_runtime61.jsxs)(import_jsx_runtime61.Fragment, {
            children: [!inErrorState && showSaveBtn && (0, import_jsx_runtime61.jsx)(Button, {
              onClick: handleSave,
              design: ButtonDesign_default.Emphasized,
              children: saveText
            }), !inErrorState && !hideSaveAs && (0, import_jsx_runtime61.jsx)(Button, {
              onClick: handleOpenSaveAsDialog,
              design: showSaveBtn ? ButtonDesign_default.Transparent : ButtonDesign_default.Emphasized,
              disabled: !selectedVariant || Object.keys(selectedVariant).length === 0,
              children: saveAsText
            }), !inErrorState && !hideManageVariants && (0, import_jsx_runtime61.jsx)(Button, {
              onClick: handleManageClick,
              design: showSaveBtn || !hideSaveAs ? ButtonDesign_default.Transparent : ButtonDesign_default.Emphasized,
              children: manageText
            })]
          })
        }),
        onClose: handleCloseVariantManagement,
        children: inErrorState ? (0, import_jsx_runtime61.jsx)(IllustratedMessage, {
          name: IllustrationMessageType_default.UnableToLoad
        }) : (0, import_jsx_runtime61.jsx)(List, {
          onSelectionChange: handleVariantItemSelect,
          selectionMode: ListSelectionMode_default.Single,
          header: showInput ? (0, import_jsx_runtime61.jsx)("div", {
            className: classNames41.searchInputContainer,
            tabIndex: -1,
            children: (0, import_jsx_runtime61.jsx)(Input, {
              className: classNames41.searchInput,
              accessibleName: a11ySearchText,
              value: searchValue,
              placeholder: searchText,
              onInput: handleSearchInput,
              showClearIcon: true,
              icon: (0, import_jsx_runtime61.jsx)(Icon, {
                name: search_default,
                className: classNames41.inputIcon
              })
            })
          }) : void 0,
          children: filteredChildren ?? safeChildrenWithFavorites
        })
      }), manageViewsDialogOpen && (0, import_jsx_runtime61.jsx)(ManageViewsDialog, {
        onAfterClose: handleManageClose,
        onManageViewsCancel,
        handleSaveManageViews,
        showShare: !hideShare,
        showApplyAutomatically: !hideApplyAutomatically,
        showCreatedBy: !hideCreatedBy,
        showSetAsDefault: !hideSetAsDefault,
        variantNames,
        showOnlyFavorites,
        children: safeChildren
      }), saveAsDialogOpen && (0, import_jsx_runtime61.jsx)(SaveViewDialog, {
        onSaveViewCancel,
        saveViewInputProps: selectedSaveViewInputProps,
        showShare: !hideShare,
        showApplyAutomatically: !hideApplyAutomatically,
        showSetAsDefault: !hideSetAsDefault,
        onAfterClose: handleSaveAsClose,
        handleSave: handleSaveView,
        selectedVariant,
        variantNames
      })]
    })
  }));
});
VariantManagement.displayName = "VariantManagement";

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/VariantItem.js
var import_react74 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/VariantItem.module.css.js
var styleData43 = {
  packageName: "@ui5/webcomponents-react",
  fileName: "VariantItem.module.css",
  content: ".VariantItem_variantItem_1kzuh_1::part(title){text-align:start}"
};
var classNames42 = {
  "variantItem": "VariantItem_variantItem_1kzuh_1"
};

// node_modules/@ui5/webcomponents-react/dist/components/VariantManagement/VariantItem.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var VariantItem = (0, import_react74.forwardRef)((props, ref) => {
  const {
    isDefault,
    author,
    favorite,
    global,
    labelReadOnly,
    applyAutomatically,
    applyAutomaticallyText,
    readOnly,
    selected,
    children,
    hideDelete
  } = props;
  useStylesheet(styleData43, VariantItem.displayName);
  const {
    selectVariantItem
  } = (0, import_react74.useContext)(VariantManagementContext);
  const [componentRef, consolidatedRef] = useSyncRef(ref);
  (0, import_react74.useEffect)(() => {
    if (selected) {
      selectVariantItem(__spreadProps(__spreadValues({}, props), {
        variantItem: consolidatedRef.current
      }));
    }
  }, [selected]);
  const _a = props, {
    manageViewsInputProps: _0,
    saveViewInputProps: _1
  } = _a, rest = __objRest(_a, [
    "manageViewsInputProps",
    "saveViewInputProps"
  ]);
  return (0, import_jsx_runtime62.jsx)(ListItemStandard, __spreadProps(__spreadValues({}, rest), {
    ref: componentRef,
    className: clsx(classNames42.variantItem),
    "data-is-default": isDefault,
    "data-author": author,
    "data-favorite": favorite,
    "data-global": global,
    "data-label-read-only": labelReadOnly,
    "data-apply-automatically": applyAutomatically,
    "data-apply-automatically-text": applyAutomaticallyText,
    "data-read-only": readOnly,
    "data-children": children,
    "data-hide-delete": hideDelete
  }));
});
VariantItem.displayName = "VariantItem";

export {
  Device_exports,
  useI18nBundle,
  useIsomorphicLayoutEffect,
  useStylesheet,
  useSyncRef,
  debounce,
  AnalyticalTableScaleWidthMode,
  AnalyticalTableScrollMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableSubComponentsBehavior,
  AnalyticalTableVisibleRowCountMode,
  ContentDensity,
  DeviationIndicator,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  GridPosition,
  IndicationColor,
  MessageBoxAction,
  MessageBoxType,
  ObjectPageMode,
  Size,
  TextAlign,
  Theme,
  ValueColor,
  VerticalAlign,
  flattenFragments,
  getUi5TagWithSuffix,
  require_jsx_runtime,
  withWebComponent,
  CheckBox,
  AnalyticalTableHooks_exports,
  clsx,
  PLEASE_WAIT,
  SHOW_MORE,
  Avatar,
  AvatarGroup,
  Bar,
  BarcodeScannerDialog,
  Breadcrumbs,
  BreadcrumbsItem,
  BusyIndicator,
  Button,
  Calendar,
  CalendarDate,
  CalendarLegend,
  CalendarLegendItem,
  Card,
  CardHeader,
  Carousel,
  ColorPalette,
  ColorPaletteItem,
  ColorPalettePopover,
  ColorPicker,
  ComboBox,
  ComboBoxItem,
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  Dialog,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  DynamicSideContent,
  FileUploader,
  FilterItem,
  FilterItemOption,
  FlexibleColumnLayout,
  Form,
  FormGroup,
  FormItem,
  Icon,
  IllustratedMessage,
  Input,
  Label,
  Link,
  List,
  ListItemCustom,
  ListItemGroup,
  ListItemStandard,
  MediaGallery,
  MediaGalleryItem,
  Menu,
  MenuItem,
  MenuSeparator,
  MessageStrip,
  MultiComboBox,
  MultiComboBoxItem,
  MultiComboBoxItemGroup,
  MultiInput,
  NotificationListGroupItem,
  NotificationListItem,
  Option,
  Page,
  Panel,
  Popover,
  ProductSwitch,
  ProductSwitchItem,
  ProgressIndicator,
  RadioButton,
  RangeSlider,
  RatingIndicator,
  ResponsivePopover,
  SegmentedButton,
  SegmentedButtonItem,
  Select,
  ShellBar,
  ShellBarItem,
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
  SideNavigationSubItem,
  Slider,
  SortItem,
  SpecialCalendarDate,
  SplitButton,
  StepInput,
  SuggestionItem,
  SuggestionItemCustom,
  SuggestionItemGroup,
  Switch,
  Tab,
  TabContainer,
  TabSeparator,
  Tag,
  Table,
  TableCell,
  TableGrowing,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  TableSelection,
  TextArea,
  TimePicker,
  Timeline,
  TimelineItem,
  Title,
  Toast,
  ToggleButton,
  Token,
  Tokenizer,
  ToolbarButton,
  ToolbarSelect,
  ToolbarSelectOption,
  ToolbarSeparator,
  ToolbarSpacer,
  Toolbar,
  Text,
  Tree,
  TreeItem,
  TreeItemCustom,
  UploadCollection,
  UploadCollectionItem,
  ViewSettingsDialog,
  Wizard,
  WizardStep,
  ActionSheet,
  AnalyticalCardHeader,
  FlexBox,
  stopPropagation,
  TablePlaceholder,
  AnalyticalTable,
  ObjectPageHeader,
  useCanRenderPortal,
  ObjectPageTitle,
  ExpandableText,
  FilterGroupItem,
  MessageBox,
  FilterBar,
  Grid,
  resolveMessageTypes,
  resolveMessageGroups,
  MessageView,
  MessageItem,
  MessageViewButton,
  Modals,
  NumericSideIndicator,
  ObjectPage,
  ObjectPageSection,
  ObjectPageSubSection,
  ObjectStatus,
  ResponsiveGridLayout,
  SelectDialog,
  SplitterElement,
  SplitterLayout,
  ThemeProvider,
  VariantManagement,
  VariantItem
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-VVZAIYJG.js.map
