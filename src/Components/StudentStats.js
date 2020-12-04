import React from "react";
// props.props
const StudentStats = (props) => {
  return (
    <div className="student-stats">
      <p>
        Number of students currently on the course:{" "}
        {currentStudents(props.props)}
      </p>
      <p>
        Number of students currently in the fundementals block:{" "}
        {blockTotals(props.props).fundementals}
      </p>
      <p>
        Number of students currently in the backend block:{" "}
        {blockTotals(props.props).backend}
      </p>
      <p>
        Number of students currently in the frontend phase:{" "}
        {blockTotals(props.props).frontend}
      </p>
      <p>
        Number of students currently in the projects phase:{" "}
        {blockTotals(props.props).project}
      </p>
    </div>
  );
};
// should these functions be elsewhere ??

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
  let blocks = { fundementals: 0, backend: 0, frontend: 0, project: 0 };

  for (let student of studentsArray) {
    if (student["currentBlock"] === "fun") {
      blocks.fundementals++;
    } else if (student["currentBlock"] === "be") {
      blocks.backend++;
    } else if (student["currentBlock"] === "fe") {
      blocks.frontend++;
    } else if (student["currentBlock"] === "proj") {
      blocks.project++;
    }
  }
  return blocks;
}

// must be a way to improve DRY?
// if logic and return an obj with blockkey: count to use?

// function funStudents(studentsArray) {
//   let funStudents = 0;
//   for (let student of studentsArray) {
//     if (student["currentBlock"] === "fun") {
//       funStudents++;
//     }
//   }
//   return funStudents;
// }

// function fendStudents(studentsArray) {
//   let fendStudents = 0;
//   for (let student of studentsArray) {
//     if (student["currentBlock"] === "fe") {
//       fendStudents++;
//     }
//   }
//   return fendStudents;
// }
// function beStudents(studentsArray) {
//   let bendStudents = 0;
//   for (let student of studentsArray) {
//     if (student["currentBlock"] === "be") {
//       bendStudents++;
//     }
//   }
//   return bendStudents;
// }

// function projStudents(studentsArray) {
//   let projStudents = 0;
//   for (let student of studentsArray) {
//     if (student["currentBlock"] === "proj") {
//       projStudents++;
//     }
//   }
//   return projStudents;
// }
export default StudentStats;
