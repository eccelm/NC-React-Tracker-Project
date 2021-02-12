import React, { Component } from 'react';

class StudentsFilter extends Component {

	state = { graduated: '', block: '', cohort: '', sort_by: 'startingCohort', order: '' };


  componentDidUpdate(prevProps, prevState) {
   //console.log(prevProps, "prevrops");
   console.log(prevState, "prevstate");
   console.log("this is the state of the object when submitted", this.state)
   console.log(prevState === this.state)
   const {handleQuery} = this.props;
   const {graduated, block, cohort, sort_by, order} = this.state;

   if (
     prevState !== this.state
   ) {
      
     console.log( "conditional logic was activated, passing:", graduated, block, cohort, sort_by, order)
    handleQuery(graduated, block, cohort, sort_by, order)
   }
 }

	handleFilters = (event) => {
		//console.log(event.target.value, '<<<value');
		//console.log(event.target.name, '<<<name');
      const {name, value} = event.target;
      console.log(name)
      if(this.state[name] !== value) {
	this.setState({[name]: value })
      }
   //console.log(this.state, "this is when the handle filter runs")
	};


	render() {
      //const {graduated, block, cohort, sort_by, order} = this.state;
		return (
			<>
            <form id="students-filter-form">
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
				<input type='number' name='cohort' id='' onChange={this.handleFilters} />

	
				<label htmlFor='sort_by'>Sort By:</label>
				<select id='sort_by-filter' name='sort_by' onClick={this.handleFilters}>
            <option value='startingCohort'>Starting Cohort</option>
               <option value='name'>Name</option>
				
				</select>

				<label htmlFor='order'>Order:</label>
		
				<label htmlFor='order'>
					DESC
					<input type='radio' name='order' value='desc' onClick={this.handleFilters} />
				</label>

            <label htmlFor='order'>
					ASC
					<input type='radio' name='order' value='asc' onClick={this.handleFilters}/>
				</label>
            <input type="reset" value="Remove filters" onClick={()=>{
this.setState( { graduated: '', block: '', cohort: '', sort_by: 'startingCohort', order: '' })

            }}/>
            </fieldset>
            </form>
			</>
		);
	}
}

export default StudentsFilter;
