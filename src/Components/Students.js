import React, { Component } from 'react';
import StudentCard from './StudentCard';
import Header from "./Header";
import Footer from "./Footer";

import Nav from './NavBar';
import StudentsFilter from './StudentsFilter'
import StudentStats from './StudentStats';
import { getStudents, patchStudentsProgress, deleteStudent } from '../api';
import AddNewStudent from './AddNewStudent';
/*
To add: 

a logic operator  && conditional render for the stats so not set to zero ?  
*/
class Students extends Component {
	state = {
		students: [],
		isLoading: true,
	};

	async componentDidMount() {
		let students = await getStudents('startingCohort');
		this.setState({ students, isLoading: false });
	}

	handleQuery = (graduated, block, cohort, sort_by, order) => {
		console.log(graduated, block, cohort, sort_by, order, "what handle query got")
	getStudents(graduated, block, cohort, sort_by, order).then((students)=> {
		console.log(students)
		this.setState({students})
	})
	
	};

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
			 <Header screen="- Students"/>
				<Nav />
				<AddNewStudent />
				<StudentStats props={students} />
				<StudentsFilter handleQuery={this.handleQuery}/>
				<ul>
					{students.map((student) => {
						return <StudentCard key={student['_id']} {...student} removeStudent={this.removeStudent} advanceStudent={this.advanceStudent}/>;
					})}
				</ul>
				<Footer />
			</div>
		);
	}
}

export default Students;
