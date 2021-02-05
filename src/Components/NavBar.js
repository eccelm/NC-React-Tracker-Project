import React from "react";
import { Link } from "@reach/router";
/*
Ignore navbar for now figure out when doing other buttons 

*/
const NavBar = () => {
  return (
    <div className="nav-div">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/students">
        <button>Students</button>
      </Link>
    </div>
  );
};

export default NavBar;
