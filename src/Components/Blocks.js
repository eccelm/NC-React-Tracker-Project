import React, { Component } from "react";
import axios from "axios";

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

  render() {
    const { isLoading, blocks } = this.state;
    if (isLoading) {
      return <h2>Loading blocks ...</h2>;
    }
    return <p>Hello Blocks Page</p>;
  }
}

export default Blocks;
