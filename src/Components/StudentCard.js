import React from "react";

const StudentCard = (props) => {
  //console.log(props);
  const { name, startingCohort, currentBlock } = props;

  return (
    <li className="student-card" style={{width: `175px`, border: `2px solid`, listStyleType: `none`}}>
      <h2>
        {name}
      </h2>
      <p>Starting Cohort: {startingCohort}</p>
      <p>Current Block: {currentBlock}</p>
    </li>
  );
};

export default StudentCard;
