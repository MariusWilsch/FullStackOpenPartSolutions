const ActionTypes = {
	EMPTY: '',
	UPDATE_FILTER: 'UPDATE_FILTER',
	// CLEAR_FILTER: 'CLEAR_FILTER'
};

// Action Filter
export const updateValue = value => {
	return {
		type: ActionTypes.UPDATE_FILTER,
		payload: value.toLowerCase(),
	};
};

// export const clearFilter = () => {
// 	return {
// 		type: ActionTypes.EMPTY,
// 	};
// };

export const filterReducer = (state = ActionTypes.EMPTY, action) => {
	switch (action.type) {
		case ActionTypes.UPDATE_FILTER:
			return action.payload;
		default:
			return state;
	}
};
