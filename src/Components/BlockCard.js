import React from "react";

/*
CSS comments
- lecture notes on removing the bullet points
- could refactor const props into the () args
*/
const BlockCard = (props) => {
  console.log("inside the Block card");
  console.log(props);
  const { _id, number, name, slug, __v } = props;

  return (
    <li className="block-card">
      <h2>{name}</h2>
    </li>
  );
};

export default BlockCard;
