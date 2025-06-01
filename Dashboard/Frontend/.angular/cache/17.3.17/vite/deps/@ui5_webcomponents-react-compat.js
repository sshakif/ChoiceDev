import "./chunk-IVAQFGOG.js";
import "./chunk-KDV7EHOB.js";
import "./chunk-TGQAUUBJ.js";
import "./chunk-O2VY56RA.js";
import "./chunk-EDCOZZ4Q.js";
import "./chunk-EKDSRZUC.js";
import "./chunk-MLGAL3PK.js";
import "./chunk-HTTIRSAN.js";
import {
  Button,
  Device_exports,
  PLEASE_WAIT,
  Popover,
  SHOW_MORE,
  ToggleButton,
  clsx,
  debounce,
  flattenFragments,
  getUi5TagWithSuffix,
  require_jsx_runtime,
  stopPropagation,
  useCanRenderPortal,
  useI18nBundle,
  useIsomorphicLayoutEffect,
  useStylesheet,
  useSyncRef,
  withWebComponent
} from "./chunk-VVZAIYJG.js";
import {
  require_react_dom
} from "./chunk-VH4AQR4N.js";
import {
  require_react
} from "./chunk-XUO2ZGPG.js";
import "./chunk-FVMHNLYZ.js";
import "./chunk-JGKP4HKE.js";
import "./chunk-OWBV4IDF.js";
import "./chunk-3DP4YXBR.js";
import "./chunk-RGAWRHPW.js";
import "./chunk-66SXCUXY.js";
import "./chunk-VKNVQBRE.js";
import "./chunk-NWCGTTJG.js";
import "./chunk-RQMM3LCQ.js";
import "./chunk-BMT74OZF.js";
import "./chunk-OK6GZDE6.js";
import "./chunk-I4O6ASPS.js";
import "./chunk-RYF5F2A6.js";
import "./chunk-I5ARTSR5.js";
import "./chunk-ETWKRVNO.js";
import "./chunk-NKNWETHW.js";
import "./chunk-D2ZEM7VW.js";
import "./chunk-6JP3GOO6.js";
import "./chunk-VC54E4Y2.js";
import "./chunk-TS24KFZD.js";
import "./chunk-PK5WCAQQ.js";
import "./chunk-IQ2LZ5CS.js";
import "./chunk-L3KJOGNW.js";
import "./chunk-KQDSW2NM.js";
import "./chunk-4XPYAZBG.js";
import "./chunk-G4NX2KR4.js";
import "./chunk-NJBEKUUC.js";
import "./chunk-VS25K46M.js";
import "./chunk-GNDKGQ3S.js";
import {
  overflow_default
} from "./chunk-GJIVVNB4.js";
import "./chunk-3W4QXVOX.js";
import "./chunk-IZADXD4H.js";
import "./chunk-I7BNWLV7.js";
import "./chunk-W4KLC5M5.js";
import "./chunk-A6RKWSET.js";
import "./chunk-KAQ4T4QR.js";
import "./chunk-7AZT6HQV.js";
import "./chunk-BYHFJD2T.js";
import {
  PopoverPlacement_default
} from "./chunk-63IT5AAH.js";
import {
  ButtonDesign_default
} from "./chunk-THWQMO7Z.js";
import "./chunk-MJMWB5QN.js";
import "./chunk-CDCWNX5W.js";
import {
  PopupAccessibleRole_default
} from "./chunk-B3EHYJGE.js";
import "./chunk-V3KTO444.js";
import "./chunk-3NVTNN76.js";
import "./chunk-OMRI665N.js";
import "./chunk-HWWW4G3G.js";
import "./chunk-U6TJ47RH.js";
import "./chunk-DSDXH633.js";
import "./chunk-XGRVZEVU.js";
import "./chunk-P5SJUC57.js";
import "./chunk-ECUZOJV2.js";
import "./chunk-G46EOBNK.js";
import "./chunk-DMMFI3C7.js";
import "./chunk-5HFBG63G.js";
import "./chunk-XOBH4D6P.js";
import "./chunk-22ISB74T.js";
import "./chunk-BLZL5MKZ.js";
import "./chunk-XYCO3572.js";
import "./chunk-V2NLQCH3.js";
import "./chunk-FE3LTLOF.js";
import "./chunk-D5EWR56T.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-react-compat/dist/components/Loader/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react-compat/dist/enums/LoaderType.js
var LoaderType;
(function(LoaderType2) {
  LoaderType2["Determinate"] = "Determinate";
  LoaderType2["Indeterminate"] = "Indeterminate";
})(LoaderType || (LoaderType = {}));

// node_modules/@ui5/webcomponents-react-compat/dist/components/Loader/Loader.module.css.js
var styleData = { packageName: "@ui5/webcomponents-react-compat", fileName: "Loader.module.css", content: '.Loader_loader_qpbhk_1{height:.25rem;position:relative;width:100%}.Loader_loader_qpbhk_1:before{background-color:var(--sapContent_BusyColor);content:"";height:100%;left:0;opacity:.15;position:absolute;width:100%}.Loader_loader_qpbhk_1.Loader_loaderDeterminate_qpbhk_16{background:linear-gradient(to right,var(--sapContent_BusyColor),var(--sapContent_BusyColor)) repeat-y}.Loader_loader_qpbhk_1.Loader_loaderIndeterminate_qpbhk_20{animation:Loader_scroll_qpbhk_1 1.2s linear infinite;background-size:40%;background:linear-gradient(to right,#0000 0,var(--sapContent_BusyColor) calc(50% - 2rem),var(--sapContent_BusyColor) calc(50% + 2rem),#0000 100%) repeat-y}@keyframes Loader_scroll_qpbhk_1{0%{background-position:-100% 0}to{background-position:200% 0}}' };
var classNames = { "loader": "Loader_loader_qpbhk_1", "loaderDeterminate": "Loader_loaderDeterminate_qpbhk_16", "loaderIndeterminate": "Loader_loaderIndeterminate_qpbhk_20", "scroll": "Loader_scroll_qpbhk_1" };

// node_modules/@ui5/webcomponents-react-compat/dist/components/Loader/index.js
var Loader = (0, import_react.forwardRef)((props, ref) => {
  const _a = props, { className, type = LoaderType.Indeterminate, progress = "0px", slot, style, delay = 0 } = _a, rest = __objRest(_a, ["className", "type", "progress", "slot", "style", "delay"]);
  useStylesheet(styleData, Loader.displayName);
  const [isVisible, setIsVisible] = (0, import_react.useState)(delay === 0);
  const loaderClasses = clsx(classNames.loader, className, classNames[`loader${type}`]);
  const backgroundSize = type !== LoaderType.Determinate ? "40%" : progress;
  (0, import_react.useEffect)(() => {
    let timeout;
    if (delay > 0) {
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  if (!isVisible) {
    return null;
  }
  return (0, import_jsx_runtime.jsx)("div", __spreadValues({ ref, className: loaderClasses, "data-component-name": "Loader", "aria-busy": "true", role: "progressbar", title: i18nBundle.getText(PLEASE_WAIT), slot, style: __spreadProps(__spreadValues({}, style), {
    backgroundSize
  }) }, rest));
});
Loader.displayName = "Loader";

// node_modules/@ui5/webcomponents-react-compat/dist/components/OverflowToolbarButton/index.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react-compat/dist/internal/OverflowPopoverContext.js
var import_react2 = __toESM(require_react(), 1);
var SYMBOL = Symbol.for("@ui5/webcomponents-react/OverflowPopoverContext");
var OverflowPopoverContext = (0, import_react2.createContext)({ inPopover: false });
function getOverflowPopoverContext() {
  globalThis[SYMBOL] ??= OverflowPopoverContext;
  return globalThis[SYMBOL];
}
function useOverflowPopoverContext() {
  return (0, import_react2.useContext)(getOverflowPopoverContext());
}

// node_modules/@ui5/webcomponents-react-compat/dist/components/OverflowToolbarButton/index.js
var OverflowToolbarButton = (0, import_react3.forwardRef)((props, ref) => {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  const { inPopover } = useOverflowPopoverContext();
  return (0, import_jsx_runtime2.jsx)(Button, __spreadProps(__spreadValues({}, rest), { ref, children: inPopover ? children : "" }));
});
OverflowToolbarButton.displayName = "OverflowToolbarButton";

// node_modules/@ui5/webcomponents-react-compat/dist/components/OverflowToolbarToggleButton/index.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);
var OverflowToolbarToggleButton = (0, import_react4.forwardRef)((props, ref) => {
  const _a = props, { children } = _a, rest = __objRest(_a, ["children"]);
  const { inPopover } = useOverflowPopoverContext();
  return (0, import_jsx_runtime3.jsx)(ToggleButton, __spreadProps(__spreadValues({}, rest), { ref, children: inPopover ? children : "" }));
});
OverflowToolbarToggleButton.displayName = "OverflowToolbarToggleButton";

// node_modules/@ui5/webcomponents-react-compat/dist/components/Table/index.js
var Table = withWebComponent("ui5-table", [
  "accessibleName",
  "accessibleNameRef",
  "busyDelay",
  "growing",
  "growingButtonSubtext",
  "growingButtonText",
  "mode",
  "noDataText"
], ["busy", "hideNoData", "stickyColumnHeader"], ["columns"], ["load-more", "popin-change", "row-click", "selection-change"], () => import("./Table-QNL43CHY.js"));
Table.displayName = "Table";

// node_modules/@ui5/webcomponents-react-compat/dist/components/TableCell/index.js
var TableCell = withWebComponent("ui5-table-cell", [], [], [], [], () => import("./TableCell-BGUUCVFH.js"));
TableCell.displayName = "TableCell";

// node_modules/@ui5/webcomponents-react-compat/dist/components/TableColumn/index.js
var TableColumn = withWebComponent("ui5-table-column", ["minWidth", "popinDisplay", "popinText"], ["demandPopin"], [], [], () => import("./TableColumn-YY3HCEOS.js"));
TableColumn.displayName = "TableColumn";

// node_modules/@ui5/webcomponents-react-compat/dist/components/TableGroupRow/index.js
var TableGroupRow = withWebComponent("ui5-table-group-row", [], [], [], [], () => import("./TableGroupRow-RAG6YS75.js"));
TableGroupRow.displayName = "TableGroupRow";

// node_modules/@ui5/webcomponents-react-compat/dist/components/TableRow/index.js
var TableRow = withWebComponent("ui5-table-row", ["type"], ["navigated", "selected"], [], [], () => import("./TableRow-7MEJFRSS.js"));
TableRow.displayName = "TableRow";

// node_modules/@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react-compat/dist/enums/ToolbarDesign.js
var ToolbarDesign;
(function(ToolbarDesign2) {
  ToolbarDesign2["Auto"] = "Auto";
  ToolbarDesign2["Info"] = "Info";
  ToolbarDesign2["Solid"] = "Solid";
  ToolbarDesign2["Transparent"] = "Transparent";
})(ToolbarDesign || (ToolbarDesign = {}));

// node_modules/@ui5/webcomponents-react-compat/dist/enums/ToolbarStyle.js
var ToolbarStyle;
(function(ToolbarStyle2) {
  ToolbarStyle2["Clear"] = "Clear";
  ToolbarStyle2["Standard"] = "Standard";
})(ToolbarStyle || (ToolbarStyle = {}));

// node_modules/@ui5/webcomponents-react-compat/dist/components/Toolbar/OverflowPopover.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var isPhone = Device_exports.isPhone();
var OverflowPopover = (props) => {
  const { lastVisibleIndex, classes, children, portalContainer, overflowContentRef, numberOfAlwaysVisibleItems, showMoreText, overflowButton, overflowPopoverRef, setIsMounted, a11yConfig } = props;
  const [pressed, setPressed] = (0, import_react5.useState)(false);
  const toggleBtnRef = (0, import_react5.useRef)(null);
  const [componentRef, popoverRef] = useSyncRef(overflowPopoverRef);
  (0, import_react5.useEffect)(() => {
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
      toggleBtnRef.current.accessibilityAttributes = { expanded: true, hasPopup: "menu" };
    }
  };
  const handleAfterOpen = () => {
    setPressed(true);
  };
  const handleClose = (e) => {
    if (toggleBtnRef.current) {
      toggleBtnRef.current.accessibilityAttributes = { expanded: false, hasPopup: "menu" };
    }
    stopPropagation(e);
    setPressed(false);
  };
  (0, import_react5.useEffect)(() => {
    const tagName = getUi5TagWithSuffix("ui5-toggle-button");
    void customElements.whenDefined(tagName).then(() => {
      if (toggleBtnRef.current) {
        toggleBtnRef.current.accessibilityAttributes = { expanded: pressed, hasPopup: "menu" };
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
  return (0, import_jsx_runtime4.jsxs)(OverflowPopoverContextProvider, { value: { inPopover: true }, children: [overflowButton ? (0, import_react5.cloneElement)(overflowButton, { onClick: clonedOverflowButtonClick }) : (0, import_jsx_runtime4.jsx)(ToggleButton, { ref: toggleBtnRef, design: ButtonDesign_default.Transparent, icon: overflow_default, onClick: handleToggleButtonClick, pressed, accessibleName: showMoreText, tooltip: showMoreText, "data-component-name": "ToolbarOverflowButton" }), canRenderPortal && (0, import_react_dom.createPortal)((0, import_jsx_runtime4.jsx)(Popover, { "data-component-name": "ToolbarOverflowPopover", className: clsx(classes.popover, isPhone && classes.popoverPhone), placement: PopoverPlacement_default.Bottom, ref: componentRef, open: pressed, onClose: handleClose, onBeforeOpen: handleBeforeOpen, onOpen: handleAfterOpen, hideArrow: true, accessibleRole, children: (0, import_jsx_runtime4.jsx)("div", { className: classes.popoverContent, ref: overflowContentRef, role: a11yConfig?.overflowPopover?.contentRole, "data-component-name": "ToolbarOverflowPopoverContent", children: children.map((item, index) => {
    if (index > lastVisibleIndex && index > numberOfAlwaysVisibleItems - 1) {
      if (item?.props?.id) {
        return (0, import_react5.cloneElement)(item, { id: `${item.props.id}-overflow` });
      }
      if (item.type?.displayName === "ToolbarSeparator") {
        return (0, import_react5.cloneElement)(item, {
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
  }) }) }), portalContainer ?? document.body)] });
};

// node_modules/@ui5/webcomponents-react-compat/dist/components/Toolbar/Toolbar.module.css.js
var styleData2 = { packageName: "@ui5/webcomponents-react-compat", fileName: "Toolbar.module.css", content: ".Toolbar_outerContainer_1dqv0_1{align-items:center;border-block-end:.0625rem solid var(--sapGroup_TitleBorderColor);box-sizing:border-box;display:flex;height:var(--_ui5wcr-ToolbarHeight);justify-content:space-between;max-width:100%;overflow:hidden;position:relative;width:100%}.Toolbar_hasOverflow_1dqv0_14 .Toolbar_toolbar_1dqv0_15{max-width:calc(100% - 44px)}.Toolbar_clear_1dqv0_20{border-block-end:none}.Toolbar_active_1dqv0_24{cursor:pointer}.Toolbar_active_1dqv0_24:hover{background-color:var(--sapList_Hover_Background)}.Toolbar_active_1dqv0_24:focus{box-shadow:var(--_ui5wcr_Toolbar_FocusShadow);outline:var(--_ui5wcr_Toolbar_FocusOutline);outline-offset:-.1875rem}.Toolbar_active_1dqv0_24:active{background-color:var(--sapActiveColor)}.Toolbar_info_1dqv0_42{background-color:var(--sapInfobar_NonInteractive_Background);color:var(--sapList_TextColor);height:2rem}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24{background-color:var(--sapInfobar_Background);color:var(--sapInfobar_TextColor);outline-color:var(--sapContent_ContrastFocusColor)}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24:hover{background-color:var(--sapInfobar_Hover_Background)}.Toolbar_info_1dqv0_42.Toolbar_active_1dqv0_24:active{background-color:var(--sapInfobar_Active_Background)}.Toolbar_solid_1dqv0_62{background-color:var(--sapToolbar_Background)}.Toolbar_transparent_1dqv0_66{background-color:initial}.Toolbar_toolbar_1dqv0_15{align-items:center;display:flex;max-width:100%;width:100%}.Toolbar_toolbar_1dqv0_15>:first-child:not(.spacer){margin-inline:.5rem .25rem}.Toolbar_toolbar_1dqv0_15>:last-child:not(.spacer){margin-inline:.25rem .5rem}.Toolbar_toolbar_1dqv0_15>:not(:first-child):not(:last-child):not(.spacer){margin-inline:.25rem}.Toolbar_overflowButtonContainer_1dqv0_89{display:flex;margin-inline:0 .5rem}.Toolbar_popover_1dqv0_94[ui5-popover]::part(content){padding:0}.Toolbar_popoverPhone_1dqv0_100{inset-inline-start:5px!important;max-width:calc(100% - 10px);width:calc(100% - 10px)}.Toolbar_popoverContent_1dqv0_106{display:flex;flex-direction:column;padding:var(--_ui5wcr-ToolbarPopoverContentPadding)}.Toolbar_popoverContent_1dqv0_106>[ui5-button],.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button]{margin-block:.25rem}.Toolbar_popoverContent_1dqv0_106>[ui5-button]::part(button),.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button]::part(button){justify-content:flex-start}.Toolbar_popoverContent_1dqv0_106>[ui5-button][icon-only]::part(button),.Toolbar_popoverContent_1dqv0_106>[ui5-toggle-button][icon-only]::part(button){padding:revert}.Toolbar_popoverContent_1dqv0_106:last-child{margin-block-end:0}.Toolbar_popoverContent_1dqv0_106:first-child{margin-block-start:0}.Toolbar_childContainer_1dqv0_135{display:flex}" };
var classNames2 = { "outerContainer": "Toolbar_outerContainer_1dqv0_1", "hasOverflow": "Toolbar_hasOverflow_1dqv0_14", "toolbar": "Toolbar_toolbar_1dqv0_15", "clear": "Toolbar_clear_1dqv0_20", "active": "Toolbar_active_1dqv0_24", "info": "Toolbar_info_1dqv0_42", "solid": "Toolbar_solid_1dqv0_62", "transparent": "Toolbar_transparent_1dqv0_66", "overflowButtonContainer": "Toolbar_overflowButtonContainer_1dqv0_89", "popover": "Toolbar_popover_1dqv0_94", "popoverPhone": "Toolbar_popoverPhone_1dqv0_100", "popoverContent": "Toolbar_popoverContent_1dqv0_106", "childContainer": "Toolbar_childContainer_1dqv0_135" };

// node_modules/@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js
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
var Toolbar = (0, import_react6.forwardRef)((props, ref) => {
  const _a = props, { children, toolbarStyle = ToolbarStyle.Standard, design = ToolbarDesign.Auto, active = false, style, className, onClick, slot, as = "div", portalContainer, numberOfAlwaysVisibleItems = 0, onOverflowChange, overflowPopoverRef, overflowButton, a11yConfig } = _a, rest = __objRest(_a, ["children", "toolbarStyle", "design", "active", "style", "className", "onClick", "slot", "as", "portalContainer", "numberOfAlwaysVisibleItems", "onOverflowChange", "overflowPopoverRef", "overflowButton", "a11yConfig"]);
  useStylesheet(styleData2, Toolbar.displayName);
  const [componentRef, outerContainer] = useSyncRef(ref);
  const controlMetaData = (0, import_react6.useRef)([]);
  const [lastVisibleIndex, setLastVisibleIndex] = (0, import_react6.useState)(null);
  const [isPopoverMounted, setIsPopoverMounted] = (0, import_react6.useState)(false);
  const contentRef = (0, import_react6.useRef)(null);
  const overflowContentRef = (0, import_react6.useRef)(null);
  const overflowBtnRef = (0, import_react6.useRef)(null);
  const [minWidth, setMinWidth] = (0, import_react6.useState)("0");
  const i18nBundle = useI18nBundle("@ui5/webcomponents-react");
  const showMoreText = i18nBundle.getText(SHOW_MORE);
  const toolbarClasses = clsx(classNames2.outerContainer, toolbarStyle === ToolbarStyle.Clear && classNames2.clear, active && classNames2.active, design === ToolbarDesign.Solid && classNames2.solid, design === ToolbarDesign.Transparent && classNames2.transparent, design === ToolbarDesign.Info && classNames2.info, className);
  const flatChildren = (0, import_react6.useMemo)(() => {
    return flattenFragments(children, 10);
  }, [children]);
  const childrenWithRef = (0, import_react6.useMemo)(() => {
    controlMetaData.current = [];
    return flatChildren.map((item, index) => {
      const itemRef = (0, import_react6.createRef)();
      const isSpacer = item?.type?.displayName === "ToolbarSpacer";
      controlMetaData.current.push({
        ref: itemRef,
        isSpacer
      });
      if (isSpacer) {
        return item;
      }
      return (0, import_jsx_runtime5.jsx)("div", { ref: itemRef, className: classNames2.childContainer, "data-component-name": "ToolbarChildContainer", children: item }, index);
    });
  }, [flatChildren, controlMetaData, classNames2.childContainer]);
  const overflowNeeded = (lastVisibleIndex || lastVisibleIndex === 0) && import_react6.Children.count(childrenWithRef) !== lastVisibleIndex + 1 && numberOfAlwaysVisibleItems < import_react6.Children.count(flatChildren);
  (0, import_react6.useEffect)(() => {
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
  const requestAnimationFrameRef = (0, import_react6.useRef)(void 0);
  const calculateVisibleItems = (0, import_react6.useCallback)(() => {
    requestAnimationFrameRef.current = requestAnimationFrame(() => {
      if (!outerContainer.current)
        return;
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
  (0, import_react6.useEffect)(() => {
    const observer = new ResizeObserver(calculateVisibleItems);
    if (outerContainer.current) {
      observer.observe(outerContainer.current);
    }
    return () => {
      cancelAnimationFrame(requestAnimationFrameRef.current);
      observer.disconnect();
    };
  }, [calculateVisibleItems]);
  (0, import_react6.useEffect)(() => {
    if (import_react6.Children.count(children) > 0) {
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
  const prevChildren = (0, import_react6.useRef)(flatChildren);
  const debouncedOverflowChange = (0, import_react6.useRef)(void 0);
  (0, import_react6.useEffect)(() => {
    if (typeof onOverflowChange === "function") {
      debouncedOverflowChange.current = debounce(onOverflowChange, 60);
    }
  }, [onOverflowChange]);
  (0, import_react6.useEffect)(() => {
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
  const styleWithMinWidth = minWidth !== "0" ? __spreadValues({ minWidth }, style) : style;
  return (0, import_jsx_runtime5.jsxs)(CustomTag, __spreadProps(__spreadValues({ style: styleWithMinWidth, className: clsx(toolbarClasses, overflowNeeded && classNames2.hasOverflow), ref: componentRef, slot, onClick: handleToolbarClick, onKeyDown: handleToolbarClick, tabIndex: active ? 0 : void 0, role: active ? "button" : void 0, "data-sap-ui-fastnavgroup": "true" }, rest), { children: [(0, import_jsx_runtime5.jsxs)("div", { className: classNames2.toolbar, "data-component-name": "ToolbarContent", ref: contentRef, children: [overflowNeeded && import_react6.Children.map(childrenWithRef, (item, index) => {
    if (index >= lastVisibleIndex + 1 && index > numberOfAlwaysVisibleItems - 1) {
      return (0, import_react6.cloneElement)(item, {
        style: { visibility: "hidden", position: "absolute", pointerEvents: "none" }
      });
    }
    return item;
  }), !overflowNeeded && childrenWithRef] }), overflowNeeded && (0, import_jsx_runtime5.jsx)("div", { ref: overflowBtnRef, className: classNames2.overflowButtonContainer, "data-component-name": "ToolbarOverflowButtonContainer", children: (0, import_jsx_runtime5.jsx)(OverflowPopover, { overflowPopoverRef, lastVisibleIndex, classes: classNames2, portalContainer, overflowContentRef, numberOfAlwaysVisibleItems, showMoreText, overflowButton, setIsMounted: setIsPopoverMounted, a11yConfig, children: flatChildren }) })] }));
});
Toolbar.displayName = "Toolbar";

// node_modules/@ui5/webcomponents-react-compat/dist/components/ToolbarSeparator/index.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);

// node_modules/@ui5/webcomponents-react-compat/dist/components/ToolbarSeparator/ToolbarSeparator.module.css.js
var styleData3 = { packageName: "@ui5/webcomponents-react-compat", fileName: "ToolbarSeparator.module.css", content: ".ToolbarSeparator_separator_1lvhp_1{background:var(--sapToolbar_SeparatorColor);height:var(--_ui5wcr-ToolbarSeparatorHeight);width:.0625rem}" };
var classNames3 = { "separator": "ToolbarSeparator_separator_1lvhp_1" };

// node_modules/@ui5/webcomponents-react-compat/dist/components/ToolbarSeparator/index.js
var ToolbarSeparator = (0, import_react7.forwardRef)((props, ref) => {
  const _a = props, { style, className } = _a, rest = __objRest(_a, ["style", "className"]);
  useStylesheet(styleData3, ToolbarSeparator.displayName);
  const separatorClasses = clsx(classNames3.separator, className);
  return (0, import_jsx_runtime6.jsx)("div", __spreadValues({ ref, style, className: separatorClasses, role: "separator" }, rest));
});
ToolbarSeparator.displayName = "ToolbarSeparator";

// node_modules/@ui5/webcomponents-react-compat/dist/components/ToolbarSpacer/index.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react8 = __toESM(require_react(), 1);
var ToolbarSpacer = (0, import_react8.forwardRef)((props, ref) => {
  return (0, import_jsx_runtime7.jsx)("span", __spreadProps(__spreadValues({ ref, style: { flexGrow: 1 }, className: "spacer" }, props), { "data-component-name": "ToolbarSpacer" }));
});
ToolbarSpacer.displayName = "ToolbarSpacer";
export {
  Loader,
  LoaderType,
  OverflowToolbarButton,
  OverflowToolbarToggleButton,
  Table,
  TableCell,
  TableColumn,
  TableGroupRow,
  TableRow,
  Toolbar,
  ToolbarDesign,
  ToolbarSeparator,
  ToolbarSpacer,
  ToolbarStyle
};
//# sourceMappingURL=@ui5_webcomponents-react-compat.js.map
