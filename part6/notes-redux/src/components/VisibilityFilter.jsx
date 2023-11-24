import React from "react";
import { useDispatch } from "react-redux";
import { filterChange } from "../reducers";

export const VisibilityFilter = () => {
	const filters = ["ALL", "IMPORTANT", "NONIMPORTANT"];
	const dispatch = useDispatch();

	return (
		<div>
			{filters.map(filter => (
				<div key={filter}>
					{filter.toLowerCase()}
					<input
						type="radio"
						name="filter"
						onChange={() => dispatch(filterChange(filter))}
					/>
				</div>
			))}
		</div>
	);
};
