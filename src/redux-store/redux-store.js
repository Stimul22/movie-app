import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { moviesReducer } from "./moviesReducer";
import thunkMiddleWare from "redux-thunk";

const reducers = combineReducers({
  moviesInfo: moviesReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
