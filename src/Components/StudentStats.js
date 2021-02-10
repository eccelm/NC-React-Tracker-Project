import React from "react";
// props.props
const StudentStats = (props) => {
  return (
    <div className="student-stats" style={{border: `2px solid red`}}>
      <h2>STUDENT STATS</h2>
      <p>
       CURRENT STUDENTS:{" "}
        {currentStudents(props.props)}
      </p>
      <p>
       FUNDEMENTALS:{" "}
        {blockTotals(props.props).fundementals}
      </p>
      <p>
        BACKEND:{" "}
        {blockTotals(props.props).backend}
      </p>
      <p>
        FRONTEND{" "}
        {blockTotals(props.props).frontend}
      </p>
      <p>
        PROJECT:{" "}
        {blockTotals(props.props).project}
      </p>
    </div>
  );
};


function currentStudents(array) {
  let currentStudentsTotal = 0;
  for (let student of array) {
    // console.log(student["currentBlock"]);
    if (student["currentBlock"] !== "grad") {
      currentStudentsTotal++;
    }
  }
  return currentStudentsTotal;
}

function blockTotals(studentsArray) {
  let blocks = { fundementals: 0, backend: 0, frontend: 0, project: 0, grads: 0 };

  for (let student of studentsArray) {
    console.log(student.currentBlock)
    if (student["currentBlock"] === "fun") {
      blocks.fundementals++;
    } else if (student["currentBlock"] === "be") {
      blocks.backend++;
    } else if (student["currentBlock"] === "fe") {
      blocks.frontend++;
    } else if (student["currentBlock"] === "proj") {
      blocks.project++;
    } else {
      blocks.grads++;
    }
  }
  return blocks;
}

export default StudentStats;
