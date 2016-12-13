import React, { Component } from 'react'
import Portfolio from './projects/Portfolio'
import Cloneflix from './projects/Cloneflix'
import Chaos from './projects/Chaos'
import MockSite from './projects/MockOne'




class Selection extends Component {
  componentDidMount() {
    let tl = new window.TimelineLite();
    tl.from('.wrapper-card', .5, {width: 0, opacity: 0})
      .from("#border-wrap", .50, {height: 0})
      .from(".wrapped-item",1, {opacity: 0}, "+=.25")
  }

  render() {
    let focusedItem;
    if (this.props.location.pathname === '/projects/portfolio') {
      focusedItem = (
        <Portfolio />
      )
    } else if (this.props.location.pathname === '/projects/cloneflix') {
      focusedItem = (
        <Cloneflix />
      )
    } else if (this.props.location.pathname === '/projects/chaos') {
      focusedItem = (
        <Chaos />
      )
    } else if (this.props.location.pathname === '/projects/layout') {
      focusedItem = (
        <MockSite />
      )
    }

    return (
     <div className="wrapper-card">
       <span id="border-wrap"></span>
       <div className="wrapped-item">{focusedItem}</div>
     </div>
    )
  }
}



export default Selection
