// require('should');
// var doSomething = require('action');


describe('TestAction', function() {
  describe('#doSomething()', function() {
    it('1 + 2 should be 3', function() {
    	doSomething( 1 , 2 ).should.be.equal(3)
    });
  });
});