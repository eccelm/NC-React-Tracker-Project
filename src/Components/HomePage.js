import React from "react";
import { Link } from "@reach/router";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Header />
      <h1>Welcome to Northcoders Student Tracker</h1>
      <Link to="/students">
        <button className="homepage-button">Go to dashboard</button>
      </Link>
      <Footer />
    </div>
  );
};

export default HomePage;
