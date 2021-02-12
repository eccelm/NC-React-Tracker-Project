import React, { Component } from 'react';

class StudentsFilter extends Component {
	state = { graduated: '', block: '', cohort: '', sort_by: '', order: 'asc' };
	// graduated
	// block
	// cohort --> drop-down with only available options?
	// sort_by drop-down

	handleClick = (event) => {
		console.log(event.target.value);
	};
	render() {
		return (
			<div>
				<input type='number' name='cohort' id='' />
				<label htmlFor='block'>Filter by Block:</label>
				<select name='block'>
					<option value='fun'>Fundementals</option>
					<option value='be'>Back-End</option>
					<option value='fe'>Front-End</option>
					<option value='proj'>Project</option>
				</select>
				<label htmlFor='sort_by'>Sort By:</label>
				<select name='sort_by'>
					<option value='name'>Name</option>
					<option value='startingCohort'>Starting Cohort</option>
				</select>
				<label htmlFor='order'>Order:</label>
			</div>
		);
	}
}

export default StudentsFilter;
