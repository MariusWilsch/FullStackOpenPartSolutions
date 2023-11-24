import { NewNote, ListNotes, VisibilityFilter } from "./components";

const App = () => {
	return (
		<div>
			<h1>Notes</h1>
			<NewNote />
			<VisibilityFilter />
			<ListNotes />
		</div>
	);
};

export default App;
