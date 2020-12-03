import React from "react";
import { Link } from "@reach/router";
/*
Ignore navbar for now figure out when doing other buttons 

*/
const Nav = () => {
  return (
    <div className="nav-div">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/students">
        <button>Students</button>
      </Link>
      <Link to="/blocks">
        <button>Blocks</button>
      </Link>
    </div>
  );
};

export default Nav;
