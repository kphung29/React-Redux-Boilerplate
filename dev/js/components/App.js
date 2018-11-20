import React from 'react';
import MovieList from '../containers/movie-list';
import MovieDetail from '../containers/movie-detail';
require('../../scss/style.scss');


const App = () => (
  <div>
    <h2>Movie List</h2>
    <MovieList/>
    <hr/>
    <h2>Movie Details:</h2>
    <MovieDetail />
  </div>
);

export default App;