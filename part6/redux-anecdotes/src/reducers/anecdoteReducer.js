const anecdotesAtStart = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const ActionTypes = {
	INCREMENT_VOTE: 'INC_VOTE',
	CREATE_NEW_ANECDOTE: 'CREATE_NEW',
};

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = anecdote => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0,
	};
};

// Action creator
export const incVote = id => {
	return {
		type: ActionTypes.INCREMENT_VOTE,
		payload: id,
	};
};

// Action creator
export const createNew = content => {
	return {
		type: ActionTypes.CREATE_NEW_ANECDOTE,
		payload: { content, id: getId(), votes: 0 },
	};
};

const initialState = anecdotesAtStart.map(asObject);

export const anecdoteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.INCREMENT_VOTE:
			return state.map(anecdote =>
				anecdote.id === action.payload
					? { ...anecdote, votes: anecdote.votes + 1 }
					: anecdote,
			);
		case ActionTypes.CREATE_NEW_ANECDOTE:
			return [...state, action.payload];
		default:
			return state;
	}
};
