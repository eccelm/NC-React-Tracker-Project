import React, { Component } from "react";
import axios from "axios";
import BlockCard from "./BlockCard";
import Nav from "../src/Components/NavBar";

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
        <Nav />
        <p>
          - As an admin, I want to clearly see how many students are on each
          block so that I can plan accordingly, and on the course overall
        </p>
        <ul>
          {blocks.map((block) => {
            return <BlockCard key={block["_id"]} {...block} />;
          })}
        </ul>
        <p>Hello Blocks Page</p>
      </div>
    );
  }
}

export default Blocks;
