import React, { Component } from 'react';

class MovieList extends Component{
 isPrivate = this.props.match.params.type === "private";
  
  render(){
    console.log('is private', this.isPrivate)
    return (
      <div>
        <h1 className="center">
        <div className="grey-text">
          <small>{this.isPrivate && 'Private '}</small>        
        </div>
          Movie List
        </h1>
      </div>
    )
  }
}

export default MovieList