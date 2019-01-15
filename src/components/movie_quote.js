import React, {Component} from 'react';
import auth from '../hoc/auth';

class MovieQuote extends Component{
  render(){
    return(
      <div className="center">
        <h1>Movie Quote</h1>
        <h5>I used to fuck guys like you in prison.</h5>
      </div>
    )
  }
}

export default auth(MovieQuote);