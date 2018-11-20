import { combineReducers } from 'redux';
import MovieReducer from './reducer-movies';
import ActiveMovieReducer from './reducer-active-movie';

const allReducers = combineReducers({
  movies: MovieReducer,
  activeMovie: ActiveMovieReducer
});


export default allReducers;