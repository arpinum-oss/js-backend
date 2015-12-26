'use strict';

module.exports = {
  BaseCommand: require('./lib/command/BaseCommand'),
  CommandBus: require('./lib/command/CommandBus'),

  ConflictingEntityError: require('./lib/domain/errors/ConflictingEntityError'),
  EntityNotFoundError: require('./lib/domain/errors/EntityNotFoundError'),
  BaseRepository: require('./lib/domain/repository/BaseRepository'),

  FakeApplication: require('./lib/test/FakeApplication'),
  FakeResponse: require('./lib/test/FakeResponse'),
  MemoryRepository: require('./lib/test/MemoryRepository'),

  FunctionalError: require('./lib/utils/errors/FunctionalError'),
  TechnicalError: require('./lib/utils/errors/TechnicalError'),
  LoggerFactory: require('./lib/utils/LoggerFactory'),

  ClientError: require('./lib/web/errors/ClientError'),
  ConflictingResourceError: require('./lib/web/errors/ConflictingResourceError'),
  ResourceNotFoundError: require('./lib/web/errors/ResourceNotFoundError'),
  ServerError: require('./lib/web/errors/ServerError'),
  UnauthorizedError: require('./lib/web/errors/UnauthorizedError'),
  WebError: require('./lib/web/errors/WebError'),

  UnhandledErrorMiddleware: require('./lib/web/middlewares/UnhandledErrorMiddleware'),
  BodyValidator: require('./lib/web/validation/BodyValidator')
};
