var should = require('should');
var React = require('react');
var TestUtils = require('react/addons').addons.TestUtils;
var jsdom = require('mocha-jsdom');

// Replace BigComplicatedComponent.js with a stub component.
global.reactModulesToStub = [
  'UserName'
];


describe('UserName components tests', function() {
	jsdom();
	before(function(done) {
		var UserName = require('../../javascripts/src/components/user/UserName.jsx');
		// A super simple DOM ready for React to render into
		// Store this DOM and the window in global scope ready for React to access
		 var renderedComponent = TestUtils.renderIntoDocument(
      		<UserName firstName="josh" lastName="bowling"/>
	    );
		 done();
	});

	it('should be a component', function() {
		var UserName = require('../../javascripts/src/components/user/UserName.jsx');
		 var renderedComponent = TestUtils.renderIntoDocument(
      		<UserName firstName="josh" lastName="bowling"/>
	    );
		var found = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'h1');
		
	});
});