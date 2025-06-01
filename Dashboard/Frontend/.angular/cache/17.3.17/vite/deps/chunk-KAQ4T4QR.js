import {
  getActiveElement_default
} from "./chunk-V3KTO444.js";
import {
  isDown,
  isEnd,
  isHome,
  isLeft,
  isPageDown,
  isPageUp,
  isRight,
  isUp
} from "./chunk-ECUZOJV2.js";
import {
  instanceOfUI5Element
} from "./chunk-V2NLQCH3.js";
import {
  __spreadValues
} from "./chunk-OQOTISLC.js";

// node_modules/@ui5/webcomponents-base/dist/types/NavigationMode.js
var NavigationMode;
(function(NavigationMode2) {
  NavigationMode2["Auto"] = "Auto";
  NavigationMode2["Vertical"] = "Vertical";
  NavigationMode2["Horizontal"] = "Horizontal";
  NavigationMode2["Paging"] = "Paging";
})(NavigationMode || (NavigationMode = {}));
var NavigationMode_default = NavigationMode;

// node_modules/@ui5/webcomponents-base/dist/types/ItemNavigationBehavior.js
var ItemNavigationBehavior;
(function(ItemNavigationBehavior2) {
  ItemNavigationBehavior2["Static"] = "Static";
  ItemNavigationBehavior2["Cyclic"] = "Cyclic";
})(ItemNavigationBehavior || (ItemNavigationBehavior = {}));
var ItemNavigationBehavior_default = ItemNavigationBehavior;

// node_modules/@ui5/webcomponents-base/dist/delegate/ItemNavigation.js
var ItemNavigation = class {
  /**
   *
   * @param rootWebComponent the component to operate on (component that slots or contains within its shadow root the items the user navigates among)
   * @param {ItemNavigationOptions} options Object with configuration options:
   *  - currentIndex: the index of the item that will be initially selected (from which navigation will begin)
   *  - navigationMode (Auto|Horizontal|Vertical): whether the items are displayed horizontally (Horizontal), vertically (Vertical) or as a matrix (Auto) meaning the user can navigate in both directions (up/down and left/right)
   *  - rowSize: tells how many items per row there are when the items are not rendered as a flat list but rather as a matrix. Relevant for navigationMode=Auto
   * 	- skipItemsSize: tells how many items upon PAGE_UP and PAGE_DOWN should be skipped to applying the focus on the next item
   *  - behavior (Static|Cycling): tells what to do when trying to navigate beyond the first and last items
   *    Static means that nothing happens if the user tries to navigate beyond the first/last item.
   *    Cycling means that when the user navigates beyond the last item they go to the first and vice versa.
   *  - getItemsCallback: function that, when called, returns an array with all items the user can navigate among
   *  - affectedPropertiesNames: a list of metadata properties on the root component which, upon user navigation, will be reassigned by address thus causing the root component to invalidate
   */
  constructor(rootWebComponent, options) {
    if (!rootWebComponent.isUI5Element) {
      throw new Error("The root web component must be a UI5 Element instance");
    }
    this.rootWebComponent = rootWebComponent;
    this.rootWebComponent.addEventListener("keydown", this._onkeydown.bind(this));
    this._initBound = this._init.bind(this);
    this.rootWebComponent.attachComponentStateFinalized(this._initBound);
    if (typeof options.getItemsCallback !== "function") {
      throw new Error("getItemsCallback is required");
    }
    this._getItems = options.getItemsCallback;
    this._currentIndex = options.currentIndex || 0;
    this._rowSize = options.rowSize || 1;
    this._behavior = options.behavior || ItemNavigationBehavior_default.Static;
    this._navigationMode = options.navigationMode || NavigationMode_default.Auto;
    this._affectedPropertiesNames = options.affectedPropertiesNames || [];
    this._skipItemsSize = options.skipItemsSize || null;
  }
  /**
   * Call this method to set a new "current" (selected) item in the item navigation
   * Note: the item passed to this function must be one of the items, returned by the getItemsCallback function
   *
   * @public
   * @param current the new selected item
   */
  setCurrentItem(current) {
    const currentItemIndex = this._getItems().indexOf(current);
    if (currentItemIndex === -1) {
      console.warn(`The provided item is not managed by ItemNavigation`, current);
      return;
    }
    this._currentIndex = currentItemIndex;
    this._applyTabIndex();
  }
  /**
   * Call this method to dynamically change the row size
   *
   * @public
   * @param newRowSize
   */
  setRowSize(newRowSize) {
    this._rowSize = newRowSize;
  }
  _init() {
    this._getItems().forEach((item, idx) => {
      item.forcedTabIndex = idx === this._currentIndex ? "0" : "-1";
    });
  }
  _onkeydown(event) {
    if (!this._canNavigate()) {
      return;
    }
    const horizontalNavigationOn = this._navigationMode === NavigationMode_default.Horizontal || this._navigationMode === NavigationMode_default.Auto;
    const verticalNavigationOn = this._navigationMode === NavigationMode_default.Vertical || this._navigationMode === NavigationMode_default.Auto;
    const isRTL = this.rootWebComponent.effectiveDir === "rtl";
    if (isRTL && isLeft(event) && horizontalNavigationOn) {
      this._handleRight();
    } else if (isRTL && isRight(event) && horizontalNavigationOn) {
      this._handleLeft();
    } else if (isLeft(event) && horizontalNavigationOn) {
      this._handleLeft();
    } else if (isRight(event) && horizontalNavigationOn) {
      this._handleRight();
    } else if (isUp(event) && verticalNavigationOn) {
      this._handleUp();
    } else if (isDown(event) && verticalNavigationOn) {
      this._handleDown();
    } else if (isHome(event)) {
      this._handleHome();
    } else if (isEnd(event)) {
      this._handleEnd();
    } else if (isPageUp(event)) {
      this._handlePageUp();
    } else if (isPageDown(event)) {
      this._handlePageDown();
    } else {
      return;
    }
    event.preventDefault();
    this._applyTabIndex();
    this._focusCurrentItem();
  }
  _handleUp() {
    const itemsLength = this._getItems().length;
    if (this._currentIndex - this._rowSize >= 0) {
      this._currentIndex -= this._rowSize;
      return;
    }
    if (this._behavior === ItemNavigationBehavior_default.Cyclic) {
      const firstItemInThisColumnIndex = this._currentIndex % this._rowSize;
      const firstItemInPreviousColumnIndex = firstItemInThisColumnIndex === 0 ? this._rowSize - 1 : firstItemInThisColumnIndex - 1;
      const rows = Math.ceil(itemsLength / this._rowSize);
      let lastItemInPreviousColumnIndex = firstItemInPreviousColumnIndex + (rows - 1) * this._rowSize;
      if (lastItemInPreviousColumnIndex > itemsLength - 1) {
        lastItemInPreviousColumnIndex -= this._rowSize;
      }
      this._currentIndex = lastItemInPreviousColumnIndex;
    } else {
      this._currentIndex = 0;
    }
  }
  _handleDown() {
    const itemsLength = this._getItems().length;
    if (this._currentIndex + this._rowSize < itemsLength) {
      this._currentIndex += this._rowSize;
      return;
    }
    if (this._behavior === ItemNavigationBehavior_default.Cyclic) {
      const firstItemInThisColumnIndex = this._currentIndex % this._rowSize;
      const firstItemInNextColumnIndex = (firstItemInThisColumnIndex + 1) % this._rowSize;
      this._currentIndex = firstItemInNextColumnIndex;
    } else {
      this._currentIndex = itemsLength - 1;
    }
  }
  _handleLeft() {
    const itemsLength = this._getItems().length;
    if (this._currentIndex > 0) {
      this._currentIndex -= 1;
      return;
    }
    if (this._behavior === ItemNavigationBehavior_default.Cyclic) {
      this._currentIndex = itemsLength - 1;
    }
  }
  _handleRight() {
    const itemsLength = this._getItems().length;
    if (this._currentIndex < itemsLength - 1) {
      this._currentIndex += 1;
      return;
    }
    if (this._behavior === ItemNavigationBehavior_default.Cyclic) {
      this._currentIndex = 0;
    }
  }
  _handleHome() {
    const homeEndRange = this._rowSize > 1 ? this._rowSize : this._getItems().length;
    this._currentIndex -= this._currentIndex % homeEndRange;
  }
  _handleEnd() {
    const homeEndRange = this._rowSize > 1 ? this._rowSize : this._getItems().length;
    this._currentIndex += homeEndRange - 1 - this._currentIndex % homeEndRange;
  }
  _handlePageUp() {
    if (this._rowSize > 1) {
      return;
    }
    this._handlePageUpFlat();
  }
  _handlePageDown() {
    if (this._rowSize > 1) {
      return;
    }
    this._handlePageDownFlat();
  }
  /**
   * Handles PAGE_UP in a flat list-like structure, both vertically and horizontally.
   */
  _handlePageUpFlat() {
    if (this._skipItemsSize === null) {
      this._currentIndex -= this._currentIndex;
      return;
    }
    if (this._currentIndex + 1 > this._skipItemsSize) {
      this._currentIndex -= this._skipItemsSize;
    } else {
      this._currentIndex -= this._currentIndex;
    }
  }
  /**
   * Handles PAGE_DOWN in a flat list-like structure, both vertically and horizontally.
   */
  _handlePageDownFlat() {
    if (this._skipItemsSize === null) {
      this._currentIndex = this._getItems().length - 1;
      return;
    }
    const currentToEndRange = this._getItems().length - this._currentIndex - 1;
    if (currentToEndRange > this._skipItemsSize) {
      this._currentIndex += this._skipItemsSize;
    } else {
      this._currentIndex = this._getItems().length - 1;
    }
  }
  _applyTabIndex() {
    const items = this._getItems();
    for (let i = 0; i < items.length; i++) {
      items[i].forcedTabIndex = i === this._currentIndex ? "0" : "-1";
    }
    this._affectedPropertiesNames.forEach((propName) => {
      const prop = this.rootWebComponent[propName];
      this.rootWebComponent[propName] = Array.isArray(prop) ? [...prop] : __spreadValues({}, prop);
    });
  }
  _focusCurrentItem() {
    const currentItem = this._getCurrentItem();
    if (currentItem) {
      currentItem.focus();
    }
  }
  _canNavigate() {
    const currentItem = this._getCurrentItem();
    const activeElement = getActiveElement_default();
    return currentItem && currentItem === activeElement;
  }
  _getCurrentItem() {
    const items = this._getItems();
    if (!items.length) {
      return;
    }
    while (this._currentIndex >= items.length) {
      this._currentIndex -= this._rowSize;
    }
    if (this._currentIndex < 0) {
      this._currentIndex = 0;
    }
    const currentItem = items[this._currentIndex];
    if (!currentItem) {
      return;
    }
    if (instanceOfUI5Element(currentItem)) {
      return currentItem.getFocusDomRef();
    }
    const currentItemDOMRef = this.rootWebComponent.getDomRef();
    if (!currentItemDOMRef) {
      return;
    }
    if (currentItem.id) {
      return currentItemDOMRef.querySelector(`[id="${currentItem.id}"]`);
    }
  }
};
var ItemNavigation_default = ItemNavigation;

export {
  NavigationMode_default,
  ItemNavigationBehavior_default,
  ItemNavigation_default
};
//# sourceMappingURL=chunk-KAQ4T4QR.js.map
