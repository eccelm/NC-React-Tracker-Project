import React, { Component } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import Nav from "./NavBar";

class Students extends Component {
  state = {
    students: [],
    isLoading: true,
  };

  // isLoading
  componentDidMount() {
    console.log("mounted");
    this.fetchStudentsList().then((students) => {
      this.setState({ students, isLoading: false });
    });
  }

  fetchStudentsList = () => {
    return axios
      .get("https://nc-student-tracker.herokuapp.com/api/students")
      .then((response) => {
        console.log(response);
        return response.data.students;
      });
  };
  /*
  Find in notes why the ... spread from the state need passing down in order for the props to not be empty? is this linked to the key and what it does?
*/
  render() {
    const { isLoading, students } = this.state;
    if (isLoading) {
      return <h2>Loading list of students ...</h2>;
    }
    return (
      <div>
        <Nav />
        <ul>
          {students.map((student) => {
            return <StudentCard key={student["_id"]} {...student} />;
          })}
        </ul>
        <p>Hello Students Page</p>
      </div>
    );
  }
}

export default Students;
