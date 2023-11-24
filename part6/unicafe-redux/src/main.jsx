import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import reducer from './reducer';
import App from './App';

export const store = createStore(reducer);

export const ActionTypes = {
	GOOD: 'GOOD',
	OK: 'OK',
	BAD: 'BAD',
	ZERO: 'ZERO',
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
	root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
