var React, $, AppRoot, abc;

React = require('react');
$ = require('jquery');
// test es6 when bundling
var [a,b,c]  = [1,2,3];

console.log(a);

AppRoot = require('./src/components/AppRoot.jsx');
React.render(
	<AppRoot lastName="John" firstName="Johnson"/>,
	$('#example')[0]
);
