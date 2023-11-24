import { useSelector, useDispatch } from 'react-redux';
import { createNew } from '../reducers/anecdoteReducer';
import { sort } from 'fast-sort';

export const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const addAnecdote = event => {
		event.preventDefault();
		dispatch(createNew(event.target.anecdote.value));
		event.target.anecdote.value = '';
	};

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div>
					<input name="anecdote" />
				</div>
				<button type="submit">create</button>
			</form>
		</div>
	);
};
