import React, { useState, useCallback } from "react";
import { getMovies } from "../redux-store/moviesReducer";
import { useDispatch } from "react-redux";
import { useDebounce } from "../Hooks/useDebounce";

const Search = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(search);

  const handleClick = useCallback(() => {
    dispatch(getMovies(type, debouncedSearch));
  }, [type, debouncedSearch, dispatch]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    dispatch(getMovies(event.target.dataset.type, debouncedSearch));
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            id="email_inline"
            type="search"
            className="validate"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
          <div>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={handleFilter}
                checked={type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={handleFilter}
                checked={type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={handleFilter}
                checked={type === "series"}
              />
              <span>Series only</span>
            </label>
          </div>
          <button onClick={handleClick} className="btn btn-search">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export { Search };
