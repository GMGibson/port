import React, { Component } from 'react';
import LetterRow from './LetterRow';
import {browserHistory} from 'react-router';

class Splash extends Component {
  constructor() {
    super()
    this.navigate = this.navigate.bind(this)
    this.goToWelcome = this.goToWelcome.bind(this)
  }

  componentDidMount() {
    let tl = new window.TimelineLite()
      tl.from('.LetterRow',4,{opacity: 0})
        .from('.LeavePage',2,{opacity: 0},'-=1')
  }
  goToWelcome() {
    browserHistory.push('/welcome')
  }
  navigate() {
    setTimeout(this.goToWelcome, 2200);
    let timeline =  new window.TweenMax.to({}, 2, {
      onUpdateParams:["{self}"],
      onUpdate:function(tl){
        let tlp = (tl.progress()*100)>>0;
        window.TweenMax.set('.ultra',{'-webkit-filter':'blur(' + tlp + 'px' + ')','filter':'blur(' +tlp + 'px' + ')'});
      }
    })
  }

  render() {
    return (
      <div className="ultra">
        <div className="final">
          <div className="G">G</div>
          <div className="r">r</div>
          <div className="a">a</div>
          <div className="n">n</div>
          <div className="t">t</div>
          <div className="g">G</div>
          <div className="i">i</div>
          <div className="b">b</div>
          <div className="s">s</div>
          <div className="o">o</div>
          <div className="N">N</div>
        </div>
        <button className="LeavePage" onClick={this.navigate}>Enter</button>
        <div className="MidLetterRow">
            <LetterRow ltr="G" row="rowG"/>
            <LetterRow ltr="r" row="rowR"/>
            <LetterRow ltr="a" row="rowA"/>
            <LetterRow ltr="n" row="rown"/>
            <LetterRow ltr="t" row="rowT"/>
            <LetterRow ltr="g" row="rowg"/>
            <LetterRow ltr="i" row="rowI"/>
            <LetterRow ltr="b" row="rowB"/>
            <LetterRow ltr="s" row="rowS"/>
            <LetterRow ltr="o" row="rowO"/>
            <LetterRow ltr="N" row="rowN"/>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Splash
