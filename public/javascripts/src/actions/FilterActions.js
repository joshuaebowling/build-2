var AppDispatcher, FilterConstants;

AppDispatcher = require('../dispatcher/AppDispatcher');
FilterConstants = require('../constants/FilterConstants');
module.exports = {

	addFilter: function(filters) {
		AppDispatcher.dispatch({
			actionType: FilterConstants.ActionTypes.ADD_FILTERS,
			data: filters
		});
	},
	getFilters: function() {
		AppDispatcher.dispatch({
			actionType: FilterConstants.GET_FILTERS,
			data: null,
		});
	}

};