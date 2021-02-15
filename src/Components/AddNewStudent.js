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
			<div id="studentform-wrapper">
				<form className="studentform" id='new-student-form' onSubmit={this.handleSubmit}>
					<fieldset>
						<legend  className="studentform__legend">Add a New Student</legend>
						<div className="studentform__group">
						<label htmlFor='student-name' className="studentform__label">
							Student Name:
							<input
								type='text'
								className="studentform__input"
								name='name'
								id='student-name'
								onChange={(event) => {
									this.handleChange('name', event.target.value);
								}}
								required
							/>
						</label>
						</div>
						<div className="studentform__group">
						<label htmlFor='starting-cohort'  className="studentform__label">
							Starting Cohort:
							<input
								type='text'
								className="studentform__input"
								name='startingCohort'
								id='starting-cohort'
								onChange={(event) => {
									this.handleChange('startingCohort', event.target.value);
								}}
								required
							/>
						</label>
						</div>
						<input type='submit' value='Add Student'  className="studentform__button"/>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default AddNewStudent;
