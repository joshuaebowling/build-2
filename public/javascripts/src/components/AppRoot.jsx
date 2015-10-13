var App, CurrencySelector, injectTapEventPlugin, Notifier, React, TradeTable; 
injectTapEventPlugin = require("react-tap-event-plugin")();
React = require('react');
TradeTable = require('./TradeTable.jsx');
CurrencySelector = require('./currency/CurrencySelector.jsx');
Notifier = require('react-bs-notifier');
App = React.createClass({
	render: function() {
		return <div>
		<section>
			<TradeTable></TradeTable>
		</section>
		<section>
			<CurrencySelector></CurrencySelector>
		</section>
		</div>
	}
});

module.exports = App;
