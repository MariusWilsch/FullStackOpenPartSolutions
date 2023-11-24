import React from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from '../reducers';

export const VisibilityFilter = () => {
	const dispatch = useDispatch();

	const handleChange = ({ target }) => {
		// target.value === ''
		// 	? dispatch(showAll)
		// 	: dispatch(updateValue(target.value));
		return dispatch(updateValue(target.value));
	};

	return (
		<div>
			Filter:
			<input onChange={handleChange} />
		</div>
	);
};
