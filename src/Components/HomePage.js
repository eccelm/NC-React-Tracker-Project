import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <h1>Welcome to Northcoders Student Tracker</h1>
      <Link to="/students">
        <button className="homepage-button">Students</button>
      </Link>
      <Link to="/blocks">
        <button className="homepage-button">Blocks</button>
      </Link>
    </div>
  );
};

export default HomePage;
