import React from "react";

/*
CSS comments
- lecture notes on removing the bullet points
- could refactor const props into the () args
*/
const BlockCard = (props) => {
  console.log("inside the Block card");
  console.log(props);
  const { name, slug } = props;
  //numbrer  id and v could also be used taken out to clear up console
  return (
    <li className="block-card">
      <h2>{name}</h2>
      <p>{slug}</p>
    </li>
  );
};

export default BlockCard;
