import React from "react";
import { Link } from "@reach/router";

const StudentCard = (props) => {
  //console.log(props, "func should be here");
  // need id from props for delete and patch props.removeStudent, props.graduateStudent
  const { _id, name, startingCohort, currentBlock, removeStudent, advanceStudent } = props;

  return (
    <>   
    <li className="student-card" style={{ border: `2px solid`, listStyleType: `none`}}>
      <button id="delete-student-btn" onClick={()=> {removeStudent(_id)}}>X</button>
      <h2>
        {name}
      </h2>
      <p>{_id}</p>
      <p>Starting Cohort: {startingCohort}</p>
      <p>Current Block: {currentBlock}</p>

      {
      (currentBlock !== "grad") ? <>
      <button id="patch-student-btn" onClick={()=> {
        advanceStudent(_id, true)
      }}>Next Block</button>
          <button id="patch-student-btn" onClick={()=> {
        advanceStudent(_id, false)
      }}>Repeat Block</button> </>: null
      }
     
           <Link to="/">
        <button disabled>See more details??</button>
      </Link>
    </li>
    </>
  );
};

export default StudentCard;
