import { useSelector, useDispatch } from "react-redux";
import { toggleImportanceOf } from "../reducers";

export const Note = ({ note, handleClick }) => {
	return (
		<li onClick={handleClick}>
			{note.content} <strong>{note.important ? "important" : ""}</strong>
		</li>
	);
};

export const ListNotes = () => {
	const dispatch = useDispatch();
	const notes = useSelector(state => state);
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
