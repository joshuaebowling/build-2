var React = require('react'),
App = require('./src/components/AppRoot.jsx'),
$ = require('jquery'),
	MyTrades;
MyTrades = {};
React.render(
	<App name="John"/>,
	$('#example')[0]
);
