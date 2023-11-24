import { useSelector, useDispatch } from 'react-redux';
import { incVote } from '../reducers/anecdoteReducer';
import { createSelector } from 'reselect';
import { sort } from 'fast-sort';

// Basic selector to get anecdotes from the state
const selectAnecdotes = state => state;

// Memoized selector to get sorted anecdotes
const selectSortedAnecdotes = createSelector([selectAnecdotes], anecdotes =>
	sort(anecdotes).desc(anecdote => anecdote.votes),
);

export const AnecdoteList = () => {
	const anecdotes = useSelector(selectSortedAnecdotes);
	const dispatch = useDispatch();

	const handleClick = id => dispatch(incVote(id));

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map(anecdote => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button type="submit" onClick={() => handleClick(anecdote.id)}>
							vote
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
