var should = require('chai').should(),
    generic = require('../index'),
    foo = generic.foo,
    hello = generic.hello;

describe('#foo', function() {
  it('converts & into &foo;', function() {
    foo('&').should.equal('&foo');
  });

  it('converts " into foo;', function() {
    foo('').should.equal('foo');
  });

  it('converts \' into foo;', function() {
    foo('\'').should.equal('\'foo');
  });
  
});
describe('#hello', function() {
	  it('converts & into &foo;', function() {
		  hello('&').should.equal('&hello');
	  });

	  it('converts " into foo;', function() {
		  hello('').should.equal('hello');
	  });

	  it('converts \' into foo;', function() {
		  hello('\'').should.equal('\'hello');
	  });
	  
});