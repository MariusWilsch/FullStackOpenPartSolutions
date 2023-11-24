import { NewNote, ListNotes } from "./components";

const App = () => {
	return (
		<div>
			<h1>Notes</h1>
			<NewNote />
			<ListNotes />
		</div>
	);
};

export default App;
