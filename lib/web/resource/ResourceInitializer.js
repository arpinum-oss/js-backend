'use strict';

var util = require('util');
var ModuleInitializer = require('../../tools/ModuleInitializer');

function ResourceInitializer(commandBus, options) {
  ModuleInitializer.call(this, options);
  var self = this;
  self.createModule = createModule;
  self.moduleSuffix = moduleSuffix;

  function createModule(module) {
    return new (require(module))(commandBus);
  }

  function moduleSuffix() {
    return 'Resource';
  }
}

util.inherits(ResourceInitializer, ModuleInitializer);

module.exports = ResourceInitializer;