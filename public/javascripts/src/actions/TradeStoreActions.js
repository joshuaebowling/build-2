var AppDispatcher, TradeStoreConstants;

AppDispatcher = require('../dispatcher/AppDispatcher');
TradeStoreConstants = require('../constants/TradeStoreConstants');
module.exports = {

	filterTrades: function(crit) {
		AppDispatcher.dispatch({
			actionType: GroceryTableConstants.ActionTypes.ADD_FILTER,
			data: crit
		});
	},
	getTrades: function() {
		AppDispatcher.dispatch({
			actionType: GroceryTableConstants.GET_ITEMS,
		});
	},
	error: function() {
		AppDispatcher.dispatch({
			actionType: GroceryTableConstants.ActionTypes.ERROR,
		});

	}
};