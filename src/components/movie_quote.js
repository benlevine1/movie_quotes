import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getMovieQuote } from '../actions';
import Axios from 'axios';

class MovieQuote extends Component{

  componentDidMount(){
    this.props.getMovieQuote();
  }
  render(){
    return(
      <div className="center">
        <h1>Movie Quote</h1>
        <h5>{this.props.quote}</h5>
        <div className="center">
          <button onClick={this.props.getMovieQuote} className="btn btn-large black">New Quote</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    quote: state.movie.quote
  }
}

export default connect(mapStateToProps, { getMovieQuote })(MovieQuote);