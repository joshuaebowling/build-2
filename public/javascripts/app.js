var React = require('react'),
AppRoot = require('./src/components/AppRoot.jsx'),
$ = require('jquery'),
	MyTrades;
MyTrades = {};
React.render(
	<AppRoot name="John"/>,
	$('#example')[0]
);
