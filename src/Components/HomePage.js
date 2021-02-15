import React from "react";
import { Link } from "@reach/router";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Header screen="Home"/>
      <div className="hompage-contents">
      <h1>Welcome to the Northcoders Student Tracker</h1>
      <Link to="/students">
        <button className="homepage-button">Go to dashboard</button>
      </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
