import { anecdoteReducer } from './anecdoteReducer';
import { incVote, createNew } from './anecdoteReducer';
import deepFreeze from 'deep-freeze';

describe('anecdoteReducer', () => {
	const initialState = [
		{
			content: 'If it hurts, do it more often',
			id: '471',
			votes: 0,
		},
		{
			content: 'Adding manpower to a late software project makes it later!',
			id: '472',
			votes: 0,
		},
	];

	beforeEach(() => deepFreeze(initialState));

	test('Increments votes', () => {
		const newState = anecdoteReducer(initialState, incVote(initialState[0].id));
		expect(newState[0]).toMatchObject({
			...initialState[0],
			votes: 1,
		});
	});

	test('Adds new anecdote', () => {
		const newState = anecdoteReducer(
			initialState,
			createNew('This is a new anecdote'),
		);
		expect(newState).toHaveLength(initialState.length + 1);
		expect(newState).toContainEqual(
			expect.objectContaining({
				content: 'This is a new anecdote',
				votes: 0,
			}),
		);
	});
});
