import React, { Component } from 'react';

class Welcome extends Component {  
  componentDidMount(){
    window.TweenMax.from('.intro',3,{opacity: 0, ease: 'easeIn'}).delay(1)
    window.TweenMax.from('.dev',2,{opacity: 0, ease: 'easeIn'}).delay(.5)
    window.TweenMax.from('.amper',3,{opacity: 0, ease: 'easeIn'}).delay(2)
  }
  render() {
    return (         
      <div>
        <div className="welcome-text">
          <p className="intro">Web + App + Ui</p>
          <p className="dev">Design <span className="amper">&</span>
          <br/>Development</p>
        </div>
      </div>      
    )
  }
}

export default Welcome
