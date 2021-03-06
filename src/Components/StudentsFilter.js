import React, { Component } from 'react';

class StudentsFilter extends Component {
	state = {
		graduated: '',
		block: '',
		cohort: '',
		sort_by: 'startingCohort',
		order: '',
	};

	componentDidUpdate(prevProps, prevState) {
		const { handleQuery } = this.props;
		const { graduated, block, cohort, sort_by, order } = this.state;

		if (prevState !== this.state) {
			// console.log(
			// 	'conditional logic was activated, passing:',
			// 	graduated,
			// 	block,
			// 	cohort,
			// 	sort_by,
			// 	order
			// );
			handleQuery(graduated, block, cohort, sort_by, order);
		}
	}

	handleFilters = (event) => {
		//console.log(event.target.value, '<<<value');
		//console.log(event.target.name, '<<<name');
		const { name, value } = event.target;
		if (this.state[name] !== value) {
			this.setState({ [name]: value });
		}
		//console.log(this.state, "this is when the handle filter runs")
	};

	render() {

		return (
			<div className='filterform-wrapper'>
				<form className='filter-form' id='students-filter-form'>
					<fieldset className='filter-form__fieldset'>
						<legend>
							Your filters will be automatically applied. To remove all filters
							click 'reset filters'
						</legend>
						<div className='filter-form__group'>
							<label className='filter-form__label' htmlFor='graduated'>
								Student Status: {' '}
							</label>
							<select
								className='filter-form__select'
								id='graduated'
								name='graduated'
								onClick={this.handleFilters}>
								<option value=''>All</option>
								<option value='false'>Current Students</option>
								<option value='true'>Graduates</option>
							</select>
						</div>{' '}
						<div className='filter-form__group'>
							<label className='filter-form__label' htmlFor='block'>
								Filter by Block: {' '}
							</label>
							<select
								className='filter-form__select'
								id='block'
								name='block'
								onClick={this.handleFilters}>
								<option value=''>All Blocks</option>
								<option value='fun'>Fundementals</option>
								<option value='be'>Back-End</option>
								<option value='fe'>Front-End</option>
								<option value='proj'>Project</option>
							</select>
						</div>{' '}
						<div className='filter-form__group'>
							<label className='filter-form__label' htmlFor='cohort'>
								Starting Cohort: {' '}
							</label>
							<input
								className='filter-form__input'
								type='number'
								name='cohort'
								id='cohort'
								onChange={this.handleFilters}
							/>
						</div>{' '}
						<div className='filter-form__group'>
							<label htmlFor='sort_by' className='filter-form__label'>
								Sort By:{' '}
							</label>
							<select
								className='filter-form__select'
								id='sort_by'
								name='sort_by'
								onClick={this.handleFilters}>
								<option value='startingCohort'>Starting Cohort</option>
								<option value='name'>Name</option>
							</select>
						</div>
						<div className='filter-form__group'>
							<label htmlFor='order' className='filter-form__label'>
								Order:
							</label>

							<label htmlFor='order' className='filter-form__label'>
								DESC
								<input
									type='radio'
									name='order'
									id='order'
									value='desc'
									onClick={this.handleFilters}
								/>
							</label>

							<label htmlFor='order' className='filter-form__label'>
								ASC
								<input
									className='filter-form__radio'
									type='radio'
									name='order'
									id='order'
									value='asc'
									onClick={this.handleFilters}
								/>
							</label>
						</div>
						<input
							className='filter-form__reset'
							type='reset'
							value='Reset Filters'
							onClick={() => {
								this.setState({
									graduated: '',
									block: '',
									cohort: '',
									sort_by: 'startingCohort',
									order: '',
								});
							}}
						/>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default StudentsFilter;
