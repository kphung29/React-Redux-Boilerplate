import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/index';

class MovieList extends Component {

  createListItems() {
    return this.props.movies.map(movie => {
      return (
        <li key={movie.id} onClick={() => this.props.selectMovie(movie)}>{movie.name}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
    return {
      movies: state.movies
    };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectMovie: selectMovie }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MovieList);