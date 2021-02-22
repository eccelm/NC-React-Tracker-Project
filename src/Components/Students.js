import React, { Component } from 'react';
import StudentCard from './StudentCard';
import Header from './Header';
import Footer from './Footer';
import StudentsFilter from './StudentsFilter';
import StudentStats from './StudentStats';
import { getStudents, patchStudentsProgress, deleteStudent } from '../api';
import AddNewStudent from './AddNewStudent';

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
		getStudents(graduated, block, cohort, sort_by, order).then((students) => {
			console.log(students);
			this.setState({ students });
		});
	};

	advanceStudent = async (studentId, progress) => {
		let progressedStudent = await patchStudentsProgress(studentId, progress);
		//console.log('Progressed student', progressedStudent);
	};
	removeStudent = (studentId) => {
		deleteStudent(studentId).then((res) => {
			console.log('the response', res);

const { students } = this.state;
console.log(students.length)
		const filteredStudents =students.filter(
			(student)=>{
		
				return student._id !== studentId;
			}
		
		)
		console.log(filteredStudents)
		this.setState({students: filteredStudents})
		});
	};
	render() {
		const { isLoading, students } = this.state;

		if (isLoading) {
			return <h1>Loading list of students ...</h1>;
		}
		return (
			<div id="studentspage-wrapper">
				<Header screen='Students' />
				<StudentStats students={students} />
				<AddNewStudent />
				<StudentsFilter handleQuery={this.handleQuery} />
				<h2>Students List:</h2>
				<ul id="students-list">
					{students.map((student) => {
						return (
							<StudentCard
								key={student['_id']}
								{...student}
								removeStudent={this.removeStudent}
								advanceStudent={this.advanceStudent}
							/>
						);
					})}
				</ul>
				<Footer />
			</div>
		);
	}
}

export default Students;
