import { AnecdoteForm, AnecdoteList } from './components';
import { useSelector } from 'react-redux';

const selectState = state => state;

const App = () => {
	// Print the state to the console
	console.log(useSelector(selectState));

	return (
		<div>
			<AnecdoteList />
			<AnecdoteForm />
		</div>
	);
};

export default App;
