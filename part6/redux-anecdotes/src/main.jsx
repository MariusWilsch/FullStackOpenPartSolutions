import ReactDOM from 'react-dom/client';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { anecdoteReducer, filterReducer } from './reducers';

const store = createStore(
	combineReducers({ anecdotes: anecdoteReducer, filter: filterReducer }),
);

console.log('State: ', store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>,
);
