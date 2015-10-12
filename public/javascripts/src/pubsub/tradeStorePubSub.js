var _, pubsub, TradeStoreConstants, subscriptions, _subscriptions;

_ = require('underscore');

pubsub = require('./pubsub');
TradeStoreConstants = require('../constants/index').TradeStoreConstants;

subscriptions = {};
_.each(TradeStoreConstants.ActionTypes, function(value, label) {
	subscriptions[value] = function(todo) {
		return pubsub.subscribe(value, todo);
	};
});
module.exports = subscriptions;