import React from "react";

const Header = (props) => {
  return (
    <nav className="grey darken-3">
      <div className="nav-wrapper">
        <span className="brand-logo">React movies</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Stimul22/movie-app">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
