import React, { Component } from 'react';
import StudentCard from './StudentCard';
import Nav from './NavBar';
import StudentStats from './StudentStats';
import { fetchStudents, patchStudentsProgress, deleteStudent } from '../api';
import AddNewStudent from './AddNewStudent';

class Students extends Component {
	state = {
		students: [],
		isLoading: false,
	};
/*
pass down patch/ delete to student function
*/
	async componentDidMount() {
		let students = await fetchStudents();
		this.setState({ students, isLoading: false });
	}
	advanceStudent = async (studentId, progress) => {
		let progressedStudent = await patchStudentsProgress(studentId, progress)
		console.log("Progressed student", progressedStudent)
	}
	removeStudent = (studentId) => {
		deleteStudent(studentId).then((res) => {
			console.log("the response", res)
		})
	}
	render() {
		const { isLoading, students } = this.state;

		if (isLoading) {
			return <h2>Loading list of students ...</h2>;
		}
		return (
			<div>
				<Nav />
				<AddNewStudent />
				<StudentStats props={students} />
				<ul>
					{students.map((student) => {
						return <StudentCard key={student['_id']} {...student} removeStudent={this.removeStudent} advanceStudent={this.advanceStudent}/>;
					})}
				</ul>
			</div>
		);
	}
}

export default Students;
