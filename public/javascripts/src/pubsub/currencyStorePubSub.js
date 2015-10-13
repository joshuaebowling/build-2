var _, pubsub, CurrencyStoreConstants, subscriptions, _subscriptions;

_ = require('underscore');

pubsub = require('./pubsub');
CurrencyStoreConstants = require('../constants/index').CurrencyStoreConstants;

subscriptions = {};
_.each(CurrencyStoreConstants.ActionTypes, function(value, label) {
	subscriptions[value] = function(todo) {
		var result = pubsub.subscribe(value, todo);
		console.log('result', result);
		return result;
	};
});
module.exports = subscriptions;