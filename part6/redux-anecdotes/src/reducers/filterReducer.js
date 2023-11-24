const ActionTypes = {
	UPDATE_FILTER: 'UPDATE_FILTER',
	// CLEAR_FILTER: 'CLEAR_FILTER'
};

export const filterReducer = (state = ActionTypes.ALL) => {
	switch (action.type) {
		case ActionTypes.UPDATE_FILTER:
			return action.payload;
		default:
			return state;
	}
};
