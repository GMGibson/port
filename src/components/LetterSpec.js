import React, { Component } from 'react';
import _ from 'lodash';



class Letter extends Component {
  constructor(props){
    super(props)

    this.updateLtr = this.updateLtr.bind(this)
    this.pulseNew = this.pulseNew.bind(this)
    this.checkValue = this.checkValue.bind(this)

  }
  state = {
    letter: '',
    array: ['G','r','a','n','t','i','b','s','o','g','N']
  }


  updateLtr() {
    let tl = new window.TimelineMax()
    tl.to('.'+this.props.needed,this.props.time,{opacity: 1})
      .to('.'+this.props.needed,this.props.time,{opacity: 0},'+=.2')
      .add(this.checkValue)
      }

  pulseNew(){
    let selection = _.sample(this.state.array)    
    this.setState({letter:selection})
    this.setState({array: this.state.array.filter(function(el) {
      return (el !== selection)
      })})
    }

  checkValue(){
    if(this.state.letter === this.props.ltr){
      window.TweenMax.to('.'+this.props.ltr, 1, {opacity: 1})
      window.TweenMax.to('#'+this.props.row, 1.2,{opacity:0})
    } else {
      this.pulseNew()
    }
  }

  componentDidMount(){
    this.pulseNew()
  }
  componentDidUpdate(){
    this.updateLtr()
  }

  render() {
    return (
      <div className={this.props.needed}>
      {this.state.letter}
      </div>
    )
  }
}

export default Letter
