var _, _items, AppDispatcher, data, TradeStore, actionTypes, pubsub;

_ = require('underscore');

AppDispatcher = require('../dispatcher/AppDispatcher');
actionTypes = {
	'create': function(props) {
		TradeStore.items.push(props);
	},
	'read': function() {
		return _items;
	},
	'update': function() {},
	'delete': function() {},
	'error': function() {}
};

_items = require('../data/groceries');
pubsub = require('../pubsub/pubsub');

TradeStore = _.extend(pubsub, {items: _items});

TradeStore.dispatchCallback = function(payload) {
	var todo;

	todo = actionTypes[payload.actionType];
	if(!_.isFunction(todo)) todo = actionTypes.error;
	todo();
}; 

TradeStore.dispatchToken = AppDispatcher.register(TradeStore.dispatchCallback);


module.exports = TradeStore;