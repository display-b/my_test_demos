var assert = require('assert');
var doSomething = require('../js/action.js');

describe('TestAction', function() {
  describe('#doSomething()', function() {
    it('1 + 2 should be 3', function() {
      assert.equal(doSomething( 1 , 2 ), 4);
    });
  });
});