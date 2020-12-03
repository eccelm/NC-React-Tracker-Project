import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div>
      <Link to="/students">
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
