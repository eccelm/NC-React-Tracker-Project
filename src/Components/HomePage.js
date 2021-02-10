import React from "react";
import { Link } from "@reach/router";
import Header from "./Header";
const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Header />
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
