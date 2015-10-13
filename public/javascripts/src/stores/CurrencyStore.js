var _, _currentCurrency, _items, ActionTypes, actionTypes, AppDispatcher, CurrencyStore, pubsub;

_ = require('underscore');

pubsub = require('../pubsub/index').pubsub;
AppDispatcher = require('../dispatcher/AppDispatcher');
ActionTypes = require('../constants/index').CurrencyStoreConstants.ActionTypes;

actionTypes = {};
actionTypes[ActionTypes.GET] = function(payload) {
	// do stuff here
	pubsub.publish(ActionTypes.GET, {
		data: _items,
		context: null
	});

};
actionTypes[ActionTypes.CHANGE] = function(payload) {
	_currentCurrency = _.where(_items, {label: payload.data.label})[0];
	pubsub.publish(ActionTypes.CHANGE, {
		data: _currentCurrency,
		context: _items
	});

};
actionTypes[ActionTypes.ERROR] = function() {
	pubsub.publish(ActionTypes.ERROR, {
		data: null,
		context: null
	});

};

_items = [
	{
		label:'$',
		exchangeRate:1000,
		id:0
	},
	{
		label:'BTC',
		exchangeRate:1,
		id:1
	},
	{
		label:'EURO',
		exchangeRate:900,
		id:2
	}
];

_currentCurrency = _items[1];

CurrencyStore = {items: _items, currentCurrency: _currentCurrency};

CurrencyStore.dispatchCallback = function(payload) {
	var todo;
	todo = actionTypes[payload.actionType];
	if(!_.isFunction(todo)) todo = actionTypes[ActionTypes.ERROR];
	todo(payload);

}; 

CurrencyStore.dispatchToken = AppDispatcher.register(CurrencyStore.dispatchCallback);

module.exports = CurrencyStore;