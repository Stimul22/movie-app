import React from "react";
import { useSelector } from "react-redux";
import { Preloader } from "../Preloader/Preloader";
import { Movie } from "./Movie/Movie";

const Movies = (props) => {
  const movies = useSelector((state) => state.moviesInfo.movies);
  const fetching = useSelector((state) => state.moviesInfo.fetching);

  return (
    <div className="movies">
      {fetching ? (
        <Preloader />
      ) : movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4 className="notFound">Not Found</h4>
      )}
    </div>
  );
};

export { Movies };
