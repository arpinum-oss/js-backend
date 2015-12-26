'use strict';

require('chai').should();
var ServerError = require('./ServerError');

describe('A server error', function () {

  it('could be created with a message and code', function () {
    var error = new ServerError('my message', 501);

    error.message.should.equal('my message');
    error.code.should.equal(501);
  });

  it('should have a default message', function () {
    var error = new ServerError();

    error.message.should.equal('Server error');
  });

  it('should have 500 as default message', function () {
    var error = new ServerError('my message');

    error.code.should.equal(500);
  });
});
