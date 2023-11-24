import { useSelector, useDispatch } from "react-redux";
import { toggleImportanceOf } from "../reducers";

const filter = (notes, filter) => {
	if (filter === "ALL") return notes;
	return filter === "IMPORTANT"
		? notes.filter(note => note.important)
		: notes.filter(note => !note.important);
};

export const Note = ({ note, handleClick }) => {
	return (
		<li onClick={handleClick}>
			{note.content} <strong>{note.important ? "important" : ""}</strong>
		</li>
	);
};

export const ListNotes = () => {
	const dispatch = useDispatch();
	const notes = useSelector(state => filter(state.notes, state.filter));

	return (
		<div>
			{notes.map(note => (
				<Note
					key={note.id}
					note={note}
					handleClick={() => dispatch(toggleImportanceOf(note.id))}
				/>
			))}
		</div>
	);
};
