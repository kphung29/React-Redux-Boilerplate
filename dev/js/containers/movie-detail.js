import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {

  render() {
    if (!this.props.movie) {
      return (<h4>Select a user...</h4>);
    }
    return (
      <div>
        <img src={this.props.movie.thumbnail}/>
        <h2>Genre: {this.props.movie.genre}</h2>
        <h3>Year: {this.props.movie.year}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.activeMovie
  }
}

export default connect(mapStateToProps)(MovieDetail);
