import React, { Component } from 'react';

class Contact extends Component {    
  componentDidMount() {
    window.TweenMax.from("#left-box", .75, {opacity: 0, y: '2000', x: '2000'})    
  }

  render() {
    return (
      <div id="contact-page">
        <div id="left-box" ref="left">
          <div id="name-tag">
            <p id="tag"><span id="name">grant</span> gibson</p>
            <p id="title">developer | designer</p>            
            <span> <a href="#">dev@ggdesign.io</a> </span>                  
            <ul>
              <li className="socialLrg soc2"><a href="https://www.linkedin.com/in/ggdev" className="fa fa-linkedin" id="gh" target="_blank"></a></li>              
            </ul>
          </div>
        </div>        
      </div>
    )
  }
}

export default Contact
