import React, { Component } from 'react';
import _ from 'lodash';

class Welcome extends Component {  
  componentDidMount(){
    window.TweenMax.from('.intro',3,{opacity: 0, ease: 'easeIn'}).delay(1)
    window.TweenMax.from('.dev',2,{opacity: 0, ease: 'easeIn'}).delay(.5)
    window.TweenMax.from('.amper',3,{opacity: 0, ease: 'easeIn'}).delay(2)
  }
  render() {
    return (
      <div>
      <div className="final"></div>
      <div className="welcome">
        <div className="show-left">
          <p className="intro">Web + App + Ui</p>
          <p className="dev">Design <span className="amper">&</span>
          <br/>Development</p>
        </div>
      </div>
      </div>
    )
  }
}

export default Welcome
