import React, { Component } from 'react';

class ShowCase extends Component {
  render() {
    let load = this.props.contents
    return (
      <div className="showcase">
        <div className="show-right" ref="showcase">
          {load}
        </div>
      </div>
    )
  }
}


export default ShowCase
