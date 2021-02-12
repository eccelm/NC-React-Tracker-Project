import React from "react";

const StudentCard = (props) => {
  //console.log(props, "func should be here");
  // need id from props for delete and patch props.removeStudent, props.graduateStudent
  const { _id, name, startingCohort, currentBlock, removeStudent } = props;

  return (
    <li className="student-card" style={{ border: `2px solid`, listStyleType: `none`, display:`flex`}}>
      <button id="delete-student-btn" onClick={()=> {removeStudent(_id)}}>X</button>
      <h2>
        {name}
      </h2>
      <p>{_id}</p>
      <p>Starting Cohort: {startingCohort}</p>
      <p>Current Block: {currentBlock}</p>
      <button id="patch-student-btn">Next Block</button>
    </li>
  );
};

export default StudentCard;
