var AppDispatcher, CurrencyStoreConstants;

AppDispatcher = require('../dispatcher/AppDispatcher');
CurrencyStoreConstants = require('../constants').CurrencyStoreConstants;
module.exports = {

	change: function(crit) {
		AppDispatcher.dispatch({
			actionType: CurrencyStoreConstants.ActionTypes.CHANGE,
			data: crit
		});
	},
	get: function() {
		AppDispatcher.dispatch({
			actionType: CurrencyStoreConstants.ActionTypes.GET,
		});
	},
	error: function() {
		AppDispatcher.dispatch({
			actionType: CurrencyStoreConstants.ActionTypes.ERROR,
		});

	}
};