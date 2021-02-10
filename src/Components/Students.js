import React, { Component } from "react";
import StudentCard from "./StudentCard";
import Nav from "./NavBar";
import StudentStats from "./StudentStats";
import {fetchStudents} from "../api"

class Students extends Component {
  state = {
    students: [],
    isLoading: true,
  };

  async componentDidMount() {
   let students = await fetchStudents()
this.setState({ students, isLoading: false });
  }

  render() {
    const { isLoading, students } = this.state;

    if (isLoading) {
      return <h2>Loading list of students ...</h2>;
    }
    return (
      <div>
        <Nav />
        <StudentStats props={students} />
        <ul>
          {students.map((student) => {
            return <StudentCard key={student["_id"]} {...student} />;
          })}
        </ul>
        <p>Hello Students Page </p>
      </div>
    );
  }
}

export default Students;
