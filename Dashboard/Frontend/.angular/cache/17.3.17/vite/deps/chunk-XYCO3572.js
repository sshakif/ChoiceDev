// node_modules/@ui5/webcomponents-base/dist/decorators/event.js
var event = (name, data = {}) => {
  return (target) => {
    if (!Object.prototype.hasOwnProperty.call(target, "metadata")) {
      target.metadata = {};
    }
    const metadata = target.metadata;
    if (!metadata.events) {
      metadata.events = {};
    }
    const eventsMetadata = metadata.events;
    if (!eventsMetadata[name]) {
      eventsMetadata[name] = data;
    }
  };
};
var event_default = event;

export {
  event_default
};
//# sourceMappingURL=chunk-XYCO3572.js.map
