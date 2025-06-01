// node_modules/@ui5/webcomponents-base/dist/Keys.js
var KeyCodes = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CONTROL: 17,
  ALT: 18,
  BREAK: 19,
  CAPS_LOCK: 20,
  ESCAPE: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  PRINT: 44,
  INSERT: 45,
  DELETE: 46,
  DIGIT_0: 48,
  DIGIT_1: 49,
  DIGIT_2: 50,
  DIGIT_3: 51,
  DIGIT_4: 52,
  DIGIT_5: 53,
  DIGIT_6: 54,
  DIGIT_7: 55,
  DIGIT_8: 56,
  DIGIT_9: 57,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  WINDOWS: 91,
  CONTEXT_MENU: 93,
  TURN_OFF: 94,
  SLEEP: 95,
  NUMPAD_0: 96,
  NUMPAD_1: 97,
  NUMPAD_2: 98,
  NUMPAD_3: 99,
  NUMPAD_4: 100,
  NUMPAD_5: 101,
  NUMPAD_6: 102,
  NUMPAD_7: 103,
  NUMPAD_8: 104,
  NUMPAD_9: 105,
  NUMPAD_ASTERISK: 106,
  NUMPAD_PLUS: 107,
  NUMPAD_MINUS: 109,
  NUMPAD_COMMA: 110,
  NUMPAD_SLASH: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUM_LOCK: 144,
  SCROLL_LOCK: 145,
  COLON: 186,
  PLUS: 187,
  COMMA: 188,
  SLASH: 189,
  DOT: 190,
  PIPE: 191,
  SEMICOLON: 192,
  MINUS: 219,
  GREAT_ACCENT: 220,
  EQUALS: 221,
  SINGLE_QUOTE: 222,
  BACKSLASH: 226
};
var isEnter = (event) => (event.key ? event.key === "Enter" : event.keyCode === KeyCodes.ENTER) && !hasModifierKeys(event);
var isEnterShift = (event) => (event.key ? event.key === "Enter" : event.keyCode === KeyCodes.ENTER) && checkModifierKeys(event, false, false, true);
var isSpace = (event) => (event.key ? event.key === "Spacebar" || event.key === " " : event.keyCode === KeyCodes.SPACE) && !hasModifierKeys(event);
var isSpaceShift = (event) => (event.key ? event.key === "Spacebar" || event.key === " " : event.keyCode === KeyCodes.SPACE) && checkModifierKeys(event, false, false, true);
var isSpaceCtrl = (event) => (event.key ? event.key === "Spacebar" || event.key === " " : event.keyCode === KeyCodes.SPACE) && checkModifierKeys(event, true, false, false);
var isLeft = (event) => (event.key ? event.key === "ArrowLeft" || event.key === "Left" : event.keyCode === KeyCodes.ARROW_LEFT) && !hasModifierKeys(event);
var isRight = (event) => (event.key ? event.key === "ArrowRight" || event.key === "Right" : event.keyCode === KeyCodes.ARROW_RIGHT) && !hasModifierKeys(event);
var isUp = (event) => (event.key ? event.key === "ArrowUp" || event.key === "Up" : event.keyCode === KeyCodes.ARROW_UP) && !hasModifierKeys(event);
var isDown = (event) => (event.key ? event.key === "ArrowDown" || event.key === "Down" : event.keyCode === KeyCodes.ARROW_DOWN) && !hasModifierKeys(event);
var isLeftCtrl = (event) => (event.key ? event.key === "ArrowLeft" || event.key === "Left" : event.keyCode === KeyCodes.ARROW_LEFT) && checkModifierKeys(event, true, false, false);
var isRightCtrl = (event) => (event.key ? event.key === "ArrowRight" || event.key === "Right" : event.keyCode === KeyCodes.ARROW_RIGHT) && checkModifierKeys(event, true, false, false);
var isUpCtrl = (event) => (event.key ? event.key === "ArrowUp" || event.key === "Up" : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, true, false, false);
var isDownCtrl = (event) => (event.key ? event.key === "ArrowDown" || event.key === "Down" : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, true, false, false);
var isUpShift = (event) => (event.key ? event.key === "ArrowUp" || event.key === "Up" : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, false, false, true);
var isDownShift = (event) => (event.key ? event.key === "ArrowDown" || event.key === "Down" : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, false, false, true);
var isUpAlt = (event) => (event.key ? event.key === "ArrowUp" || event.key === "Up" : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, false, true, false);
var isDownAlt = (event) => (event.key ? event.key === "ArrowDown" || event.key === "Down" : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, false, true, false);
var isLeftShift = (event) => (event.key ? event.key === "ArrowLeft" || event.key === "Left" : event.keyCode === KeyCodes.ARROW_LEFT) && checkModifierKeys(event, false, false, true);
var isRightShift = (event) => (event.key ? event.key === "ArrowRight" || event.key === "Right" : event.keyCode === KeyCodes.ARROW_RIGHT) && checkModifierKeys(event, false, false, true);
var isLeftShiftCtrl = (event) => (event.key ? event.key === "ArrowLeft" || event.key === "Left" : event.keyCode === KeyCodes.ARROW_LEFT) && checkModifierKeys(event, true, false, true);
var isRightShiftCtrl = (event) => (event.key ? event.key === "ArrowRight" || event.key === "Right" : event.keyCode === KeyCodes.ARROW_RIGHT) && checkModifierKeys(event, true, false, true);
var isUpShiftCtrl = (event) => (event.key ? event.key === "ArrowUp" || event.key === "Up" : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, true, false, true);
var isDownShiftCtrl = (event) => (event.key ? event.key === "ArrowDown" || event.key === "Down" : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, true, false, true);
var isHome = (event) => (event.key ? event.key === "Home" : event.keyCode === KeyCodes.HOME) && !hasModifierKeys(event);
var isEnd = (event) => (event.key ? event.key === "End" : event.keyCode === KeyCodes.END) && !hasModifierKeys(event);
var isHomeCtrl = (event) => (event.key ? event.key === "Home" : event.keyCode === KeyCodes.HOME) && checkModifierKeys(event, true, false, false);
var isHomeShift = (event) => (event.key ? event.key === "Home" : event.keyCode === KeyCodes.HOME) && checkModifierKeys(event, false, false, true);
var isEndCtrl = (event) => (event.key ? event.key === "End" : event.keyCode === KeyCodes.END) && checkModifierKeys(event, true, false, false);
var isEndShift = (event) => (event.key ? event.key === "End" : event.keyCode === KeyCodes.END) && checkModifierKeys(event, false, false, true);
var isEscape = (event) => (event.key ? event.key === "Escape" || event.key === "Esc" : event.keyCode === KeyCodes.ESCAPE) && !hasModifierKeys(event);
var isTabNext = (event) => (event.key ? event.key === "Tab" : event.keyCode === KeyCodes.TAB) && !hasModifierKeys(event);
var isTabPrevious = (event) => (event.key ? event.key === "Tab" : event.keyCode === KeyCodes.TAB) && checkModifierKeys(
  event,
  /* Ctrl */
  false,
  /* Alt */
  false,
  /* Shift */
  true
);
var isBackSpace = (event) => (event.key ? event.key === "Backspace" : event.keyCode === KeyCodes.BACKSPACE) && !hasModifierKeys(event);
var isDelete = (event) => (event.key ? event.key === "Delete" : event.keyCode === KeyCodes.DELETE) && !hasModifierKeys(event);
var isDeleteShift = (event) => (event.key ? event.key === "Delete" : event.keyCode === KeyCodes.DELETE) && checkModifierKeys(event, false, false, true);
var isInsertShift = (event) => (event.key ? event.key === "Insert" : event.keyCode === KeyCodes.DELETE) && checkModifierKeys(event, false, false, true);
var isInsertCtrl = (event) => (event.key ? event.key === "Insert" : event.keyCode === KeyCodes.DELETE) && checkModifierKeys(event, true, false, false);
var isPageUp = (event) => (event.key ? event.key === "PageUp" : event.keyCode === KeyCodes.PAGE_UP) && !hasModifierKeys(event);
var isPageDown = (event) => (event.key ? event.key === "PageDown" : event.keyCode === KeyCodes.PAGE_DOWN) && !hasModifierKeys(event);
var isPageUpShift = (event) => (event.key ? event.key === "PageUp" : event.keyCode === KeyCodes.PAGE_UP) && checkModifierKeys(event, false, false, true);
var isPageUpAlt = (event) => (event.key ? event.key === "PageUp" : event.keyCode === KeyCodes.PAGE_UP) && checkModifierKeys(event, false, true, false);
var isPageDownShift = (event) => (event.key ? event.key === "PageDown" : event.keyCode === KeyCodes.PAGE_DOWN) && checkModifierKeys(event, false, false, true);
var isPageDownAlt = (event) => (event.key ? event.key === "PageDown" : event.keyCode === KeyCodes.PAGE_DOWN) && checkModifierKeys(event, false, true, false);
var isPageUpShiftCtrl = (event) => (event.key ? event.key === "PageUp" : event.keyCode === KeyCodes.PAGE_UP) && checkModifierKeys(event, true, false, true);
var isPageDownShiftCtrl = (event) => (event.key ? event.key === "PageDown" : event.keyCode === KeyCodes.PAGE_DOWN) && checkModifierKeys(event, true, false, true);
var isPlus = (event) => (event.key ? event.key === "+" : event.keyCode === KeyCodes.PLUS) || event.keyCode === KeyCodes.NUMPAD_PLUS && !hasModifierKeys(event);
var isMinus = (event) => (event.key ? event.key === "-" : event.keyCode === KeyCodes.MINUS) || event.keyCode === KeyCodes.NUMPAD_MINUS && !hasModifierKeys(event);
var isShow = (event) => {
  if (event.key) {
    return isF4(event) || isShowByArrows(event);
  }
  return event.keyCode === KeyCodes.F4 && !hasModifierKeys(event) || event.keyCode === KeyCodes.ARROW_DOWN && checkModifierKeys(
    event,
    /* Ctrl */
    false,
    /* Alt */
    true,
    /* Shift */
    false
  );
};
var isF2 = (event) => {
  return event.key === "F2" && !hasModifierKeys(event);
};
var isF4 = (event) => {
  return event.key === "F4" && !hasModifierKeys(event);
};
var isF4Shift = (event) => (event.key ? event.key === "F4" : event.keyCode === KeyCodes.F4) && checkModifierKeys(event, false, false, true);
var isF10Shift = (event) => (event.key ? event.key === "F10" : event.keyCode === KeyCodes.F10) && checkModifierKeys(event, false, false, true);
var isF6Next = (event) => (event.key ? event.key === "F6" : event.keyCode === KeyCodes.F6) && checkModifierKeys(event, false, false, false) || (event.key ? event.key === "ArrowDown" || event.key === "Down" : event.keyCode === KeyCodes.ARROW_DOWN) && checkModifierKeys(event, true, true, false);
var isF6Previous = (event) => (event.key ? event.key === "F6" : event.keyCode === KeyCodes.F6) && checkModifierKeys(event, false, false, true) || (event.key ? event.key === "ArrowUp" || event.key === "Up" : event.keyCode === KeyCodes.ARROW_UP) && checkModifierKeys(event, true, true, false);
var isF7 = (event) => (event.key ? event.key === "F7" : event.keyCode === KeyCodes.F7) && !hasModifierKeys(event);
var isShowByArrows = (event) => {
  return (event.key === "ArrowDown" || event.key === "Down" || (event.key === "ArrowUp" || event.key === "Up")) && checkModifierKeys(
    event,
    /* Ctrl */
    false,
    /* Alt */
    true,
    /* Shift */
    false
  );
};
var isShift = (event) => event.key === "Shift" || event.keyCode === KeyCodes.SHIFT;
var isCtrlA = (event) => (event.key === "A" || event.key === "a" || event.which === KeyCodes.A) && checkModifierKeys(event, true, false, false);
var isKeyA = (event) => (event.key === "A" || event.key === "a" || event.which === KeyCodes.A) && checkModifierKeys(event, false, false, false);
var isKeyP = (event) => (event.key === "P" || event.key === "p" || event.which === KeyCodes.P) && checkModifierKeys(event, false, false, false);
var hasModifierKeys = (event) => event.shiftKey || event.altKey || getCtrlKey(event);
var getCtrlKey = (event) => !!(event.metaKey || event.ctrlKey);
var checkModifierKeys = (event, bCtrlKey, bAltKey, bShiftKey) => event.shiftKey === bShiftKey && event.altKey === bAltKey && getCtrlKey(event) === bCtrlKey;
var isNumber = (event) => (event.key ? "0123456789".indexOf(event.key) !== -1 : event.keyCode >= KeyCodes.DIGIT_0 && event.keyCode <= KeyCodes.DIGIT_9) && checkModifierKeys(event, false, false, false);
var isColon = (event) => (event.key ? event.key === ":" : event.keyCode === KeyCodes.COLON) && checkModifierKeys(event, false, false, true);

// node_modules/@ui5/webcomponents-base/dist/Device.js
var isSSR = typeof document === "undefined";
var internals = {
  get userAgent() {
    if (isSSR) {
      return "";
    }
    return navigator.userAgent;
  },
  get touch() {
    if (isSSR) {
      return false;
    }
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  },
  get chrome() {
    if (isSSR) {
      return false;
    }
    return /(Chrome|CriOS)/.test(internals.userAgent);
  },
  get firefox() {
    if (isSSR) {
      return false;
    }
    return /Firefox/.test(internals.userAgent);
  },
  get safari() {
    if (isSSR) {
      return false;
    }
    return !internals.chrome && /(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(internals.userAgent);
  },
  get webkit() {
    if (isSSR) {
      return false;
    }
    return /webkit/.test(internals.userAgent);
  },
  get windows() {
    if (isSSR) {
      return false;
    }
    return navigator.platform.indexOf("Win") !== -1;
  },
  get macOS() {
    if (isSSR) {
      return false;
    }
    return !!navigator.userAgent.match(/Macintosh|Mac OS X/i);
  },
  get iOS() {
    if (isSSR) {
      return false;
    }
    return !!navigator.platform.match(/iPhone|iPad|iPod/) || !!(internals.userAgent.match(/Mac/) && "ontouchend" in document);
  },
  get android() {
    if (isSSR) {
      return false;
    }
    return !internals.windows && /Android/.test(internals.userAgent);
  },
  get androidPhone() {
    if (isSSR) {
      return false;
    }
    return internals.android && /(?=android)(?=.*mobile)/i.test(internals.userAgent);
  },
  get ipad() {
    if (isSSR) {
      return false;
    }
    return /ipad/i.test(internals.userAgent) || /Macintosh/i.test(internals.userAgent) && "ontouchend" in document;
  }
};
var windowsVersion;
var webkitVersion;
var tablet;
var isWindows8OrAbove = () => {
  if (isSSR) {
    return false;
  }
  if (!internals.windows) {
    return false;
  }
  if (windowsVersion === void 0) {
    const matches = internals.userAgent.match(/Windows NT (\d+).(\d)/);
    windowsVersion = matches ? parseFloat(matches[1]) : 0;
  }
  return windowsVersion >= 8;
};
var isWebkit537OrAbove = () => {
  if (isSSR) {
    return false;
  }
  if (!internals.webkit) {
    return false;
  }
  if (webkitVersion === void 0) {
    const matches = internals.userAgent.match(/(webkit)[ /]([\w.]+)/);
    webkitVersion = matches ? parseFloat(matches[1]) : 0;
  }
  return webkitVersion >= 537.1;
};
var detectTablet = () => {
  if (isSSR) {
    return false;
  }
  if (tablet !== void 0) {
    return;
  }
  if (internals.ipad) {
    tablet = true;
    return;
  }
  if (internals.touch) {
    if (isWindows8OrAbove()) {
      tablet = true;
      return;
    }
    if (internals.chrome && internals.android) {
      tablet = !/Mobile Safari\/[.0-9]+/.test(internals.userAgent);
      return;
    }
    let densityFactor = window.devicePixelRatio ? window.devicePixelRatio : 1;
    if (internals.android && isWebkit537OrAbove()) {
      densityFactor = 1;
    }
    tablet = Math.min(window.screen.width / densityFactor, window.screen.height / densityFactor) >= 600;
    return;
  }
  tablet = internals.userAgent.indexOf("Touch") !== -1 || internals.android && !internals.androidPhone;
};
var supportsTouch = () => internals.touch;
var isSafari = () => internals.safari;
var isChrome = () => internals.chrome;
var isFirefox = () => internals.firefox;
var isTablet = () => {
  detectTablet();
  return (internals.touch || isWindows8OrAbove()) && tablet;
};
var isPhone = () => {
  detectTablet();
  return internals.touch && !tablet;
};
var isDesktop = () => {
  if (isSSR) {
    return false;
  }
  return !isTablet() && !isPhone() || isWindows8OrAbove();
};
var isCombi = () => {
  return isTablet() && isDesktop();
};
var isIOS = () => {
  return internals.iOS;
};
var isMac = () => {
  return internals.macOS;
};
var isAndroid = () => {
  return internals.android || internals.androidPhone;
};

export {
  isEnter,
  isEnterShift,
  isSpace,
  isSpaceShift,
  isSpaceCtrl,
  isLeft,
  isRight,
  isUp,
  isDown,
  isLeftCtrl,
  isRightCtrl,
  isUpCtrl,
  isDownCtrl,
  isUpShift,
  isDownShift,
  isUpAlt,
  isDownAlt,
  isLeftShift,
  isRightShift,
  isLeftShiftCtrl,
  isRightShiftCtrl,
  isUpShiftCtrl,
  isDownShiftCtrl,
  isHome,
  isEnd,
  isHomeCtrl,
  isHomeShift,
  isEndCtrl,
  isEndShift,
  isEscape,
  isTabNext,
  isTabPrevious,
  isBackSpace,
  isDelete,
  isDeleteShift,
  isInsertShift,
  isInsertCtrl,
  isPageUp,
  isPageDown,
  isPageUpShift,
  isPageUpAlt,
  isPageDownShift,
  isPageDownAlt,
  isPageUpShiftCtrl,
  isPageDownShiftCtrl,
  isPlus,
  isMinus,
  isShow,
  isF2,
  isF4,
  isF4Shift,
  isF10Shift,
  isF6Next,
  isF6Previous,
  isF7,
  isShift,
  isCtrlA,
  isKeyA,
  isKeyP,
  isNumber,
  isColon,
  supportsTouch,
  isSafari,
  isChrome,
  isFirefox,
  isTablet,
  isPhone,
  isDesktop,
  isCombi,
  isIOS,
  isMac,
  isAndroid
};
//# sourceMappingURL=chunk-ECUZOJV2.js.map
