// node_modules/@ui5/webcomponents-base/dist/MarkedEvents.js
var markedEvents = /* @__PURE__ */ new WeakMap();
var markEvent = (event, value) => {
  markedEvents.set(event, value);
};
var getEventMark = (event) => {
  return markedEvents.get(event);
};

export {
  markEvent,
  getEventMark
};
//# sourceMappingURL=chunk-MJMWB5QN.js.map
