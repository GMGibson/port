import React from 'react';

const Overlay = (props) => {
  return (
    <div id="overlay" onClick={props.toggleView}></div>
  )
}

export default Overlay
