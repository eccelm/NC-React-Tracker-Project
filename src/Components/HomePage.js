import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Northcoders Student Tracker</h1>
      <Link to="/students">
        <button>Students</button>
      </Link>
      <Link to="/blocks">
        <button>Blocks</button>
      </Link>
    </div>
  );
};

export default HomePage;
