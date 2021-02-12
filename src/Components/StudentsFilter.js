import React, { Component } from 'react';

class StudentsFilter extends Component {

	state = { graduated: '', block: '', cohort: '', sort_by: '', order: 'asc' };
	// graduated
	// block
	// cohort --> drop-down with only available options?
	// sort_by drop-down
handleSubmit = (event) => {
   event.preventDefault();
   console.log("this is the state of the object when submitted", this.state)
   const {graduated, block, cohort, sort_by, order} = this.state;
		console.log(graduated, block, cohort, sort_by, order)
   

   
  // alert(`submitted`)
}

	handleFilters = (event) => {
		//console.log(event.target.value, '<<<value');
		//console.log(event.target.name, '<<<name');
      const {name, value} = event.target;
	this.setState({[name]: value })
   //console.log(this.state, "this is when the handle filter runs")
	};
	render() {
		return (
			<>
            <form id="students-filter-form" onSubmit={this.handleSubmit}>
               <fieldset>
                  <legend>Choose your filters, then press the 'filter results' button to apply your preferences</legend>
				<label htmlFor='graduated'>Student Status:</label>
				<select id='grad-filter' name='graduated' onClick={this.handleFilters}>
					<option value=''>All</option>
					<option value='false'>Current Students</option>
					<option value='true'>Graduates</option>
				</select>

            <label htmlFor='block'>Filter by Block:</label>
				<select id='block-filter' name='block' onClick={this.handleFilters}>
            <option value=''>All Blocks</option>
					<option value='fun'>Fundementals</option>
					<option value='be'>Back-End</option>
					<option value='fe'>Front-End</option>
					<option value='proj'>Project</option>
				</select>

				<label htmlFor='cohort'>Starting Cohort:</label>
				<input type='number' name='cohort' id='' onBlur={this.handleFilters} />

	
				<label htmlFor='sort_by'>Sort By:</label>
				<select id='sort_by-filter' name='sort_by' onClick={this.handleFilters}>
					<option value=''>None</option>
					<option value='name'>Name</option>
					<option value='startingCohort'>Starting Cohort</option>
				</select>

				<label htmlFor='order'>Order:</label>
		
				<label htmlFor='order'>
					DESC
					<input type='radio' name='order' value='desc' onChange={this.handleFilters} />
				</label>

            <label htmlFor='order'>
					ASC
					<input type='radio' name='order' value='asc' onChange={this.handleFilters} defaultChecked/>
				</label>
            <input type="submit" value="set filters"/>
            <input type="reset" value="Remove filters" onClick={()=>{
this.setState( { graduated: '', block: '', cohort: '', sort_by: '', order: 'asc' })
console.log(this.state)
            }}/>
            </fieldset>
            </form>
			</>
		);
	}
}

export default StudentsFilter;
