import React, { Component } from "react";
/*
will need to move to the level of the state it is changing? 
// the form onSubmit func will live in the parent (Students) ? 

Change to class comp
Change to name input for keys

func at level of the state it needs to change
*/
/*
Store the input in state
Read state

Post axios to API req 
Will return a new student obj
--
App hasn't updated view

- Options: POst to listen / conf message / display and redirect to individual page

Adding to the list 
*/

class CreateStudent extends Component {
  state = { name: "", startingCohort: "" };

  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, startingCohort } = this.state;
    const { postStudent } = this.props;
    console.log(this.props);

    postStudent({ name, startingCohort }).then((postedStudent) => {
      this.props.addStudent(postedStudent);
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>New Student:</p>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            onChange={(event) => this.handleChange(event.target.value, "name")}
          />
        </label>
        <label htmlFor="startingCohort">
          Starting Cohort:
          <input
            type="text"
            name="startingCohort"
            onChange={(event) =>
              this.handleChange(event.target.value, "startingCohort")
            }
          />
        </label>
        <button type="submit">Add new student</button>
      </form>
    );
  }
}

export default CreateStudent;
