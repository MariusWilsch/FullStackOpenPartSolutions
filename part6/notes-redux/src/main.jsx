import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import { noteReducer, filterReducer } from "./reducers";

const reducer = combineReducers({
	notes: noteReducer,
	filter: filterReducer,
});

export const store = createStore(reducer);

console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>
);
