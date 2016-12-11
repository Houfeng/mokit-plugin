const factory = function (thunk) {
  function Plugin(opts) {
    return typeof Plugin.entity === 'function' ?
      new Plugin.entity(opts) : Plugin.entity;
  }
  Plugin.install = function (mokit) {
    factory.mokit = mokit;
    this.entity = thunk();
    this.entity.install(mokit);
  };
  if (typeof mokit !== 'undefined') {
    mokit.use(Plugin);
  }
  return Plugin;
};

module.exports = factory;