import React from "react";

const Movie = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={Poster != "N/A" ? Poster : "https://via.placeholder.com/150"}
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year} <span classNameName="right">{Type}</span>
        </p>
      </div>
    </div>
  );
};

export { Movie };
