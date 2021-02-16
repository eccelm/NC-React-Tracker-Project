import React from 'react';
// props.props
const StudentStats = (props) => {
	return (
		<div className='studentstats-wrapper'>
			<div className='studentstats'>
				<h2 className='studentstats__header'>STUDENT STATS</h2>
				<div className='studentstats__totals'>
					<div className='studentstats__totalcontainer'>
						<p>CURRENT STUDENTS: </p>{' '}
						<p className='studentstats__number'>
							{currentStudents(props.students)}
						</p>
					</div>
					<div className='studentstats__totalcontainer'>
						<p>GRADS:</p>{' '}
						<p className='studentstats__number'>
							{blockTotals(props.students).grads}
						</p>
					</div>

					<div className='studentstats__totalcontainer'>
						<p>FUNDEMENTALS:</p>{' '}
						<p className='studentstats__number'>
							{blockTotals(props.students).fundementals}
						</p>
					</div>
					<div className='studentstats__totalcontainer'>
						<p>BACKEND:</p>{' '}
						<p className='studentstats__number'>
							{blockTotals(props.students).backend}
						</p>
					</div>
					<div className='studentstats__totalcontainer'>
						<p>FRONTEND:</p>{' '}
						<p className='studentstats__number'>
							{blockTotals(props.students).frontend}
						</p>
					</div>
					<div className='studentstats__totalcontainer'>
						<p>PROJECT:</p>{' '}
						<p className='studentstats__number'>
							{blockTotals(props.students).project}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

function currentStudents(array) {
	let currentStudentsTotal = 0;
	for (let student of array) {
		if (student['currentBlock'] !== 'grad') {
			currentStudentsTotal++;
		}
	}
	return currentStudentsTotal;
}

function blockTotals(studentsArray) {
	let blocks = {
		fundementals: 0,
		backend: 0,
		frontend: 0,
		project: 0,
		grads: 0,
	};

	for (let student of studentsArray) {
		//console.log(student.currentBlock)
		if (student['currentBlock'] === 'fun') {
			blocks.fundementals++;
		} else if (student['currentBlock'] === 'be') {
			blocks.backend++;
		} else if (student['currentBlock'] === 'fe') {
			blocks.frontend++;
		} else if (student['currentBlock'] === 'proj') {
			blocks.project++;
		} else {
			blocks.grads++;
		}
	}
	return blocks;
}

export default StudentStats;
