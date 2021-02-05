import React, { Component } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import NavBar from "./NavBar";
import StudentStats from "./StudentStats";

class Students extends Component {
  state = {
    students: [],
    isLoading: true,
  };

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

  render() {
    const { isLoading, students } = this.state;

    if (isLoading) {
      return <h2>Loading list of students ...</h2>;
    }
    return (
      <div>
        <NavBar />
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

  /*
  **List of Students Page**

- As an admin, I want to clearly see how many students are on the course so that I can plan accordingly.

function: count how many students in state array where 

- As an admin, I want to be able to view a list of the students currently on the course.
- As an admin, I want to see which block each student is in so that I know where they are in the course.

**Things to filter by - check API methods:**

- As an admin, I want to see a list of graduates so I can feel good about my job.
- As an admin, I want to be able to see a list of students from a specific block block.
- As an admin, I want to see which cohort a student began the course on so that I can see how starting cohorts diverge.


  get count per block
  trial for one block e.g. frontend
  once the state is set, go through array of objs looking for currentBlock
  */
  /*
  Find in notes why the ... spread from the state need passing down in order for the props to not be empty? is this linked to the key and what it does?
*/