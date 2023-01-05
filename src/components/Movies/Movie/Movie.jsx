import React from "react";

const Movie = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img
          class="activator"
          src={Poster != "N/A" ? Poster : "https://via.placeholder.com/150"}
        />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year} <span className="right">{Type}</span>
        </p>
      </div>
    </div>
  );
};

export { Movie };
