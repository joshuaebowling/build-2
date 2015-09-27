var React = require('react'),
App = require('./App.jsx'),
$ = require('jquery'),
	MyTrades;
MyTrades = {};
React.render(
	<App name="John"/>,
	$('#example')[0]

);
