import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Movies } from "../components/Movies/Movies";
import { Search } from "../components/Search";
import { getMovies } from "../redux-store/moviesReducer";

const Main = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies("all"));
  }, [dispatch]);

  return (
    <main className="container content">
      <Search />
      <Movies />
    </main>
  );
};

export { Main };
