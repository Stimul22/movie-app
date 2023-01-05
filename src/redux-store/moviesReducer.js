import axios from "axios";

const SET_MOVIES = "SET_MOVIES";
const IS_FETCHING = "IS_FETCHING";

const initialState = {
  movies: [],
  fetching: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
        fetching: false,
      };
    case IS_FETCHING:
      return {
        ...state,
        fetching: action.fetching,
      };
    default:
      return state;
  }
};

export const getMovies = (type, search) => {
  return async (dispatch) => {
    dispatch({
      type: IS_FETCHING,
      fetching: true,
    });
    const result = await axios.get(
      `http://www.omdbapi.com?apikey=6c327293&s=${search ?? "marvel"}${
        type !== "all" ? `&type=${type}` : ""
      }`
    );
    console.log(result);

    dispatch({
      type: SET_MOVIES,
      movies: result.data.Search ?? [],
    });
  };
};
