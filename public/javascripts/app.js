var React = require('react'),
AppRoot = require('./src/components/AppRoot.jsx'),
$ = require('jquery'),
	MyTrades;
MyTrades = {};
React.render(
	<AppRoot lastName="John" firstName="Johnson"/>,
	$('#example')[0]
);
