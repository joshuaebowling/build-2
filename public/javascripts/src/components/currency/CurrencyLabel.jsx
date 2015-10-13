var _, MaterialUI, React, 
	AppDispatcher, pubsub, CurrencyStore, CurrencyStoreActions, CurrencyStoreConstants, _currency;

React = require('react');
MaterialUI = require('material-ui');
_ = require('underscore');

AppDispatcher = require('../../dispatcher/AppDispatcher');
CurrencyStoreActions = require('../../actions/CurrencyStoreActions');
CurrencyStoreConstants = require('../../constants/CurrencyStoreConstants').ActionTypes;
pubsub = require('../../pubsub').currencyStorePubSub;
module.exports = React.createClass({
	subscriptions: {},
	changeCurrency: function(payload) {
		console.log('changeCurrency', payload.data);
		this.setState({currency: payload.data});
	},
	getInitialState: function() {
		var self;
		// they say you don't need the in react, this hasn't been my experience so far.
		self = this;
//		_.bind(self, 'changeCurrency');
		console.log(CurrencyStoreActions, CurrencyStoreConstants);
		self.subscriptions[CurrencyStoreConstants.CHANGE] = pubsub[CurrencyStoreConstants.CHANGE](self.changeCurrency);
		return {currency: _currency};
	},
	currency: _currency,	
	render: function() {
		return <span>{this.state.currency}</span>
	}
});