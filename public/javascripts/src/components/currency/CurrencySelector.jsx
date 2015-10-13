var _, MaterialUI, React, 
	DropDownMenu,
	AppDispatcher, pubsub, CurrencyStore, CurrencyStoreActions, CurrencyStoreConstants, _currencies;

React = require('react');
MaterialUI = require('material-ui');
_ = require('underscore');
DropDownMenu = MaterialUI.DropDownMenu;

AppDispatcher = require('../../dispatcher/AppDispatcher');
CurrencyStoreActions = require('../../actions/CurrencyStoreActions');
CurrencyStoreConstants = require('../../constants/CurrencyStoreConstants').ActionTypes;
pubsub = require('../../pubsub').currencyStorePubSub;
_currencies = [
	{
	payload:'0',
	label:"test"
	},
	{
	payload:'1',
	label:"test 1"
	},
	{
	payload:'2',
	label:"test 2"
	},
];
module.exports = React.createClass({
	subscriptions: {},
	getInitialState: function() {
		var self;
		// they say you don't need the in react, this hasn't been my experience so far.
		self = this;
		var onData = function(payload, context) {
			self.setState({currencies: payload.data});
			_currencies = payload.data;
		};
		self.subscriptions[CurrencyStoreConstants.GET] = pubsub[CurrencyStoreConstants.GET](onData);
		CurrencyStoreActions.get();
		return {currencies: []};
	},
	changeCurrency: function(e, selectedIndex, item) {
		CurrencyStoreActions.change(item);
	},
	render: function() {
		return <DropDownMenu menuItems={_currencies} displayMember="label" valueMember="label" onChange={this.changeCurrency} />
	}
});