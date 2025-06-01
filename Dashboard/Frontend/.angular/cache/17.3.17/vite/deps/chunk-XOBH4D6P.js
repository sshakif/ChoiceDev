import {
  getI18nBundle
} from "./chunk-22ISB74T.js";
import {
  getTheme,
  isLegacyThemeFamily
} from "./chunk-FE3LTLOF.js";
import {
  getSharedResource_default,
  init_getSharedResource
} from "./chunk-D5EWR56T.js";
import {
  __async,
  __spreadValues
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/asset-registries/Icons.js
init_getSharedResource();

// node_modules/@ui5/webcomponents-base/dist/asset-registries/util/IconCollectionsAlias.js
var IconCollectionsAlias;
(function(IconCollectionsAlias2) {
  IconCollectionsAlias2["SAP-icons"] = "SAP-icons-v4";
  IconCollectionsAlias2["horizon"] = "SAP-icons-v5";
  IconCollectionsAlias2["SAP-icons-TNT"] = "tnt";
  IconCollectionsAlias2["BusinessSuiteInAppSymbols"] = "business-suite";
})(IconCollectionsAlias || (IconCollectionsAlias = {}));
var getIconCollectionByAlias = (collectionName) => {
  if (IconCollectionsAlias[collectionName]) {
    return IconCollectionsAlias[collectionName];
  }
  return collectionName;
};

// node_modules/@ui5/webcomponents-base/dist/asset-registries/util/IconCollectionsByTheme.js
var RegisteredIconCollection;
(function(RegisteredIconCollection2) {
  RegisteredIconCollection2["SAPIconsV4"] = "SAP-icons-v4";
  RegisteredIconCollection2["SAPIconsV5"] = "SAP-icons-v5";
  RegisteredIconCollection2["SAPIconsTNTV2"] = "tnt-v2";
  RegisteredIconCollection2["SAPIconsTNTV3"] = "tnt-v3";
  RegisteredIconCollection2["SAPBSIconsV1"] = "business-suite-v1";
  RegisteredIconCollection2["SAPBSIconsV2"] = "business-suite-v2";
})(RegisteredIconCollection || (RegisteredIconCollection = {}));
var iconCollections = /* @__PURE__ */ new Map();
iconCollections.set("SAP-icons", {
  "legacy": RegisteredIconCollection.SAPIconsV4,
  "sap_horizon": RegisteredIconCollection.SAPIconsV5
});
iconCollections.set("tnt", {
  "legacy": RegisteredIconCollection.SAPIconsTNTV2,
  "sap_horizon": RegisteredIconCollection.SAPIconsTNTV3
});
iconCollections.set("business-suite", {
  "legacy": RegisteredIconCollection.SAPBSIconsV1,
  "sap_horizon": RegisteredIconCollection.SAPBSIconsV2
});
var registerIconCollectionForTheme = (collectionName, themeCollectionMap) => {
  if (iconCollections.has(collectionName)) {
    iconCollections.set(collectionName, __spreadValues(__spreadValues({}, themeCollectionMap), iconCollections.get(collectionName)));
    return;
  }
  iconCollections.set(collectionName, themeCollectionMap);
};
var getIconCollectionForTheme = (collectionName) => {
  const themeFamily = isLegacyThemeFamily() ? "legacy" : "sap_horizon";
  return iconCollections.has(collectionName) ? iconCollections.get(collectionName)[themeFamily] : collectionName;
};

// node_modules/@ui5/webcomponents-base/dist/config/Icons.js
var IconCollectionConfiguration = /* @__PURE__ */ new Map();
var getDefaultIconCollection = (theme) => {
  return IconCollectionConfiguration.get(theme);
};

// node_modules/@ui5/webcomponents-base/dist/asset-registries/util/getIconCollectionByTheme.js
var getEffectiveIconCollection = (collectionName) => {
  const defaultIconCollection = getDefaultIconCollection(getTheme());
  if (!collectionName && defaultIconCollection) {
    return getIconCollectionByAlias(defaultIconCollection);
  }
  if (!collectionName) {
    return getIconCollectionForTheme("SAP-icons");
  }
  return getIconCollectionForTheme(collectionName);
};
var getIconCollectionByTheme_default = getEffectiveIconCollection;

// node_modules/@ui5/webcomponents-base/dist/asset-registries/Icons.js
var DEFAULT_THEME_FAMILY = "legacy";
var loaders = /* @__PURE__ */ new Map();
var registry = getSharedResource_default("SVGIcons.registry", /* @__PURE__ */ new Map());
var iconCollectionPromises = getSharedResource_default("SVGIcons.promises", /* @__PURE__ */ new Map());
var ICON_NOT_FOUND = "ICON_NOT_FOUND";
var registerIconLoader = (collectionName, loader) => {
  loaders.set(collectionName, loader);
};
var _loadIconCollectionOnce = (collectionName) => __async(void 0, null, function* () {
  if (!iconCollectionPromises.has(collectionName)) {
    if (!loaders.has(collectionName)) {
      throw new Error(`No loader registered for the ${collectionName} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);
    }
    const loadIcons = loaders.get(collectionName);
    iconCollectionPromises.set(collectionName, loadIcons(collectionName));
  }
  return iconCollectionPromises.get(collectionName);
});
var _fillRegistry = (bundleData) => {
  Object.keys(bundleData.data).forEach((iconName) => {
    const iconData = bundleData.data[iconName];
    registerIcon(iconName, {
      pathData: iconData.path || iconData.paths,
      ltr: iconData.ltr,
      accData: iconData.acc,
      collection: bundleData.collection,
      packageName: bundleData.packageName
    });
  });
};
var registerIcon = (name, iconData) => {
  const key = `${iconData.collection}/${name}`;
  registry.set(key, {
    pathData: iconData.pathData,
    ltr: iconData.ltr,
    accData: iconData.accData,
    packageName: iconData.packageName,
    customTemplate: iconData.customTemplate,
    viewBox: iconData.viewBox,
    collection: iconData.collection
  });
};
var processName = (name) => {
  if (name.startsWith("sap-icon://")) {
    name = name.replace("sap-icon://", "");
  }
  let collection;
  [name, collection] = name.split("/").reverse();
  name = name.replace("icon-", "");
  if (collection) {
    collection = getIconCollectionByAlias(collection);
  }
  return { name, collection };
};
var getIconDataSync = (iconName) => {
  const { name, collection } = processName(iconName);
  return getRegisteredIconData(collection, name);
};
var getIconData = (iconName) => __async(void 0, null, function* () {
  const { name, collection } = processName(iconName);
  let iconData = ICON_NOT_FOUND;
  try {
    iconData = yield _loadIconCollectionOnce(getIconCollectionByTheme_default(collection));
  } catch (error) {
    const e = error;
    console.error(e.message);
  }
  if (iconData === ICON_NOT_FOUND) {
    return iconData;
  }
  const registeredIconData = getRegisteredIconData(collection, name);
  if (registeredIconData) {
    return registeredIconData;
  }
  if (Array.isArray(iconData)) {
    iconData.forEach((data) => {
      _fillRegistry(data);
      registerIconCollectionForTheme(collection, { [data.themeFamily || DEFAULT_THEME_FAMILY]: data.collection });
    });
  } else {
    _fillRegistry(iconData);
  }
  return getRegisteredIconData(collection, name);
});
var getRegisteredIconData = (collection, name) => {
  const registryKey = `${getIconCollectionByTheme_default(collection)}/${name}`;
  return registry.get(registryKey);
};
var getIconAccessibleName = (name) => __async(void 0, null, function* () {
  if (!name) {
    return;
  }
  let iconData = getIconDataSync(name);
  if (!iconData) {
    iconData = yield getIconData(name);
  }
  if (iconData && iconData !== ICON_NOT_FOUND && iconData.accData) {
    const i18nBundle = yield getI18nBundle(iconData.packageName);
    return i18nBundle.getText(iconData.accData);
  }
});

export {
  registerIconLoader,
  registerIcon,
  getIconDataSync,
  getIconData,
  getIconAccessibleName
};
//# sourceMappingURL=chunk-XOBH4D6P.js.map
