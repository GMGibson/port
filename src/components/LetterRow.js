import React, { Component } from 'react';
import Letter from './Letter';
import LetterSpec from './LetterSpec'
import _ from 'lodash';
import randomstring from 'randomstring';


class LetterRow extends Component {
  render() {
    return (
      <div className="LetterRow" id={this.props.row}>
        <Letter needed={randomstring.generate({length:6,charset:'alphabetic'})} time={_.random(.3,1, true)}/>
        <Letter needed={randomstring.generate({length:6,charset:'alphabetic'})} time={_.random(.6,1.2, true)}/>
        <Letter needed={randomstring.generate({length:6,charset:'alphabetic'})} time={_.random(.5,1.5, true)}/>
        <LetterSpec needed={randomstring.generate({length:6,charset:'alphabetic'})} time={_.random(.25,.5, true)} ltr={this.props.ltr} row={this.props.row} uds={this.props.uds}/>
        <Letter needed={randomstring.generate({length:6,charset:'alphabetic'})} time={_.random(.5,1.4, true)}/>
        <Letter needed={randomstring.generate({length:6,charset:'alphabetic'})} time={_.random(.6,1.2, true)}/>
        <Letter needed={randomstring.generate({length:6,charset:'alphabetic'})} time={_.random(.3,1.6, true)}/>
      </div>
    )
  }
}

export default LetterRow
