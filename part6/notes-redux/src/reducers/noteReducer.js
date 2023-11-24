export const noteReducer = (state = [], action) => {
	switch (action.type) {
		case "NEW_NOTE":
			return [...state, action.payload];
		case "TOGGLE_IMPORTANCE":
			return state.map(note =>
				note.id !== action.payload.id
					? note
					: { ...note, important: !note.important }
			);
		default:
			return state;
	}
};

const generateID = () => Number((Math.random() * 1000000).toFixed(0));

export const createNote = content => {
	return {
		type: "NEW_NOTE",
		payload: { content, important: false, id: generateID() },
	};
};

export const toggleImportanceOf = id => {
	return {
		type: "TOGGLE_IMPORTANCE",
		payload: { id },
	};
};
