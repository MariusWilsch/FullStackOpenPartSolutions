import React from 'react';
import { store, ActionTypes } from './main';

const App = () => {
	const dispatchAction = type => () => {
		console.log('dispatching action', type);
		store.dispatch({ type });
	};

	return (
		<div>
			<button onClick={dispatchAction(ActionTypes.GOOD)}>good</button>
			<button onClick={dispatchAction(ActionTypes.OK)}>ok</button>
			<button onClick={dispatchAction(ActionTypes.BAD)}>bad</button>
			<button onClick={dispatchAction(ActionTypes.ZERO)}>reset stats</button>
			<div>good {store.getState().good}</div>
			<div>ok {store.getState().ok}</div>
			<div>bad {store.getState().bad}</div>
		</div>
	);
};

export default App;
