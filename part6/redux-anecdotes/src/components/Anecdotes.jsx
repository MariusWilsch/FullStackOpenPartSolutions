import { useSelector, useDispatch } from 'react-redux';

export const Anecdotes = () => {
	const anecdotes = useSelector(state => state);
	const castVote = useDispatch();

	const vote = id => console.log('vote', id);

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map(anecdote => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => castVote()}>vote</button>
					</div>
				</div>
			))}
		</div>
	);
};
