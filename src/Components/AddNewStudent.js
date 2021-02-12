import React, { Component } from 'react';
import { postNewStudent } from '../api';

class AddNewStudent extends Component {
	state = {
		name: '',
		startingCohort: '',
	};
	handleChange = (key, value) => {
		//console.log('value:', value, 'key:', key);
		this.setState({ [key]: value });
		//console.log('NewStu:', this.state);
	};
	handleSubmit = (event) => {
		event.preventDefault();
		postNewStudent(this.state);
	};
	render() {

		return (
			<>
				<form id='new-student-form' onSubmit={this.handleSubmit}>
					<fieldset>
						<legend>Add a New Student</legend>
						<label htmlFor='student-name'>
							Student Name:
							<input
								type='text'
								name='name'
								id='student-name'
								onChange={(event) => {
									this.handleChange('name', event.target.value);
								}}
								required
							/>
						</label>
						<label htmlFor='startingCohort'>
							Starting Cohort:
							<input
								type='text'
								name='startingCohort'
								id='startingCohort'
								onChange={(event) => {
									this.handleChange('startingCohort', event.target.value);
								}}
								required
							/>
						</label>
						<input type='submit' value='Add Student' />
						<input type='reset' disabled />
					</fieldset>
				</form>
			</>
		);
	}
}

export default AddNewStudent;
