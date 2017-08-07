import React, { Component } from 'react';

class ShowCase extends Component {
  render() {
    let load = this.props.contents
    return (
      <div className="showcase">        
        {load}        
      </div>
    )
  }
}

export default ShowCase
