import { useSelector, useDispatch } from 'react-redux';
import { incVote } from '../reducers/anecdoteReducer';
import { createSelector } from 'reselect';
import { sort } from 'fast-sort';
import { VisibilityFilter } from './VisibilityFilter';

const selectAnecdotes = state => state.anecdotes;
const selectFilter = state => state.filter;

// Memoized selector to get sorted anecdotes

const selectFilterAnecdotes = (anecdotes, filter) => {
	console.log(anecdotes);
	if (filter === '') return anecdotes;
	if (filter !== '')
		return anecdotes.filter(anecdote =>
			anecdote.content.toLowerCase().includes(filter),
		);
};

const selectSortedAnecdotes = createSelector([selectAnecdotes], anecdotes =>
	sort(anecdotes).desc(anecdote => anecdote.votes),
);

const selectFilteredSortedAnecdotes = createSelector(
	[selectSortedAnecdotes, selectFilter],
	(sortedAnecdotes, filter) => selectFilterAnecdotes(sortedAnecdotes, filter),
);

export const AnecdoteList = () => {
	const anecdotes = useSelector(selectFilteredSortedAnecdotes);
	const dispatch = useDispatch();

	const handleClick = id => dispatch(incVote(id));

	return (
		<div>
			<h2>Anecdotes</h2>
			<VisibilityFilter />
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
