import React, { Component } from "react";
import axios from "axios";
import BlockCard from "./BlockCard";

class Blocks extends Component {
  state = {
    blocks: [],
    isLoading: true,
  };

  // isLoading
  componentDidMount() {
    console.log("mounted");
    this.fetchBlocks().then((blocks) => {
      this.setState({ blocks, isLoading: false });
      console.log(this.state, "hopefully I've updated");
    });
  }

  fetchBlocks = () => {
    return axios
      .get("https://nc-student-tracker.herokuapp.com/api/blocks")
      .then((response) => {
        console.log(response);
        return response.data.blocks;
      });
  };
  /*
  Find in notes why the ... spread from the state need passing down in order for the props to not be empty? is this linked to the key and what it does?
*/
  render() {
    const { isLoading, blocks } = this.state;
    if (isLoading) {
      return <h2>Loading blocks ...</h2>;
    }
    return (
      <div>
        <p>Hello Blocks Page</p>
        <ul>
          {blocks.map((block) => {
            return <BlockCard key={block["_id"]} {...block} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Blocks;