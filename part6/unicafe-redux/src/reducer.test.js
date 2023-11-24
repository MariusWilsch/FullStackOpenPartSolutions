import deepFreeze from 'deep-freeze';
import counterReducer from './reducer';

// Helper function
const feedbackTypes = [
	{ type: 'GOOD', expected: { good: 1, ok: 0, bad: 0 } },
	{ type: 'OK', expected: { good: 0, ok: 1, bad: 0 } },
	{ type: 'BAD', expected: { good: 0, ok: 0, bad: 1 } },
];

describe('unicafe reducer', () => {
	const initialState = {
		good: 0,
		ok: 0,
		bad: 0,
	};

	beforeEach(() => {
		deepFreeze(initialState);
	});

	test('should return a proper initial state when called with undefined state', () => {
		const state = {};
		const action = {
			type: 'DO_NOTHING',
		};

		const newState = counterReducer(undefined, action);
		expect(newState).toEqual(initialState);
	});

	/* The code is iterating over an array of feedback types and for each type, it is running a test. */
	feedbackTypes.forEach(({ type, expected }) => {
		test(`${type} is incremented`, () => {
			const action = { type };

			const newState = counterReducer(initialState, action);
			expect(newState).toEqual(expected);
		});
	});

	// test('good is incremented', () => {
	// 	const action = {
	// 		type: 'GOOD',
	// 	};
	// 	const state = initialState;

	// 	deepFreeze(state);
	// 	const newState = counterReducer(state, action);
	// 	expect(newState).toEqual({
	// 		good: 1,
	// 		ok: 0,
	// 		bad: 0,
	// 	});
	// });

	// test('ok is incremented', () => {
	// 	const action = {
	// 		type: 'OK',
	// 	};
	// 	const state = initialState;

	// 	deepFreeze(state);
	// 	const newState = counterReducer(state, action);
	// 	expect(newState).toEqual({
	// 		good: 0,
	// 		ok: 1,
	// 		bad: 0,
	// 	});
	// });

	// test('BAD is incremented', () => {
	// 	const action = {
	// 		type: 'BAD',
	// 	};
	// 	const state = initialState;

	// 	deepFreeze(state);
	// 	const newState = counterReducer(state, action);
	// 	expect(newState).toEqual({
	// 		good: 0,
	// 		ok: 0,
	// 		bad: 1,
	// 	});
	// });

	test('ZERO is resets state', () => {
		const action = { type: 'ZERO' };
		const state = {
			good: 5,
			ok: 4,
			bad: 3,
		};
		deepFreeze(state);
		const newState = counterReducer(state, action);
		expect(newState).toEqual(initialState);
	});
});
