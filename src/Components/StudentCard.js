import React from "react";

const StudentCard = (props) => {
  console.log(props);
  const { name, startingCohort, currentBlock } = props;

  return (
    <li className="student-card">
      <h2>
        {name}
      </h2>
      <p>Starting Cohort: {startingCohort}</p>
      <p>Current Block: {currentBlock}</p>
    </li>
  );
};

export default StudentCard;
