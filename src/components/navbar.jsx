import React, { Component } from "react";

// Stateless Functional Component (sfc is the shortcut)

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Cart{" "}
        <span className="badge badge-pill secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
