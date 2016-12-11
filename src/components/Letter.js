import React, { Component } from 'react';
import _ from 'lodash';



class Letter extends Component {
  constructor(props){
    super(props)

    this.updateLtr = this.updateLtr.bind(this)
    this.pulseNew = this.pulseNew.bind(this)
  }
  state = {
    letter: ''
  }
  array = {
    alphabet:['a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z']
  }

  updateLtr() {
    let tl = new window.TimelineMax()
    tl.to('.'+this.props.needed,this.props.time,{opacity: 1})
    tl.to('.'+this.props.needed,this.props.time,{opacity: 0})
    tl.add(this.pulseNew)
      }

  pulseNew(){
    this.setState({letter: _.sample(this.array.alphabet)})
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
