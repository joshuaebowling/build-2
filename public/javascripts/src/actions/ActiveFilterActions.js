var AppDispatcher, FilterConstants;

AppDispatcher = require('../dispatcher/AppDispatcher');
FilterConstants = require('../constants/FilterConstants');
module.exports = {

	addFilter: function(filter) {
		AppDispatcher.dispatch({
			actionType: FilterConstants.ActionTypes.ADD_FILTER,
			data: filter
		});
	},
	getFilters: function() {
		AppDispatcher.dispatch({
			actionType: FilterConstants.GET_FILTERS,
			data: filter,
		});
	},
	clearFilters: function() {
		AppDispatcher.dispatch({
			actionType: FilterConstants.CLEAR_FILTERS,
			data: filter,
		});

	}

};