'use strict';

let _ = require('lodash');
let ModuleInitializer = require('../../tools/ModuleInitializer');
let conventions = require('../conventions');

class ProjectionInitializer extends ModuleInitializer {

  constructor(database, buses, options) {
    super(options);
    this._database = database;
    this._buses = buses;
  }

  createModule(module) {
    let initializedModule = new (require(module))(this._database);
    _.forEach(this.matchingKeys(initializedModule, conventions.eventHandlerRegex), handlerKey => {
      let event = _.camelCase(handlerKey.replace(conventions.eventHandlerRegex, '$1'));
      this._buses.event.register(event, _.bind(initializedModule[handlerKey], initializedModule));
    });
    return initializedModule;
  }

  moduleSuffix() {
    return 'Projection';
  }

  buildModuleMap() {
    return true;
  }
}

module.exports = ProjectionInitializer;

