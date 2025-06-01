const isInstanceOfTable = (obj) => {
    return "isTable" in obj && !!obj.isTable;
};
const isSelectionCheckbox = (e) => {
    return e.composedPath().some((el) => el.hasAttribute?.("ui5-table-selection-component"));
};
const isHeaderSelector = (e) => {
    return isSelectionCheckbox(e) && e.composedPath().some((el) => el instanceof HTMLElement && el.hasAttribute("ui5-table-header-row"));
};
const findRowInPath = (composedPath) => {
    return composedPath.find((el) => el instanceof HTMLElement && el.hasAttribute("ui5-table-row"));
};
const isFeature = (element, identifier) => {
    return element.identifier === identifier;
};
export { isInstanceOfTable, isSelectionCheckbox, isHeaderSelector, findRowInPath, isFeature, };
//# sourceMappingURL=TableUtils.js.map