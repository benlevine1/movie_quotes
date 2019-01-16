import React, { Component } from 'react';


export default (WrappedComponent) => {
  class Logger extends Component{
    
    log(message){
      console.log(prefix, message)
    }

    render(){
      return <WrappedComponent {...this.props} log={this.log}/>
    }
  }
  return Logger;
}

