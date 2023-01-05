import React from "react";

const Header = (props) => {
  return (
    <nav className="grey darken-3">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
