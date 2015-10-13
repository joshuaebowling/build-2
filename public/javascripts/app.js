var React, $, AppRoot, abc, stores;

React = require('react');
$ = require('jquery');
// test es6 when bundling
var [a,b,c]  = [1,2,3];
stores = require('./src/stores/');

AppRoot = require('./src/components/AppRoot.jsx');
React.render(
	<AppRoot/>,
	$('#example')[0]
);
