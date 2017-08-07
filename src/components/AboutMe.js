import React, { Component } from 'react';

class AboutMe extends Component {
  componentDidMount() {
    window.TweenMax.from('.aboutTitle', 1, {x:-100}).delay(.25)
    window.TweenMax.from('.aboutTitle', 1, {opacity: 0}).delay(.55)
    window.TweenMax.from('.aboutDe', 1, {x:100}).delay(1)
    window.TweenMax.from('.aboutDe', 1, {opacity: 0}).delay(1.1)
    window.TweenMax.from('.dets', 1, {y: -100}).delay(1)
    window.TweenMax.from('.dets', 1, {opacity: 0}).delay(1.1)
    window.TweenMax.from('.about2',1, {opacity: 0}).delay(1.2)
    window.TweenMax.from('.about3',1, {opacity: 0}).delay(1.3)
    window.TweenMax.from('.about3',1, {opacity: 0}).delay(1)
    window.TweenMax.from('.section4',2.25,{opacity: 1})
    }
  render() {
    const spanColor = {
      color: '#DD2321'
    }
    return (
      <div className="aboutContainer">
        <ul className="aboutList">
          <li className="pane about1">
            <section id="section1">
              <p className="dets">I am a developer <span style={spanColor}>&</span> designer based out of
              Murrells Inlet, SC.</p>
            </section>
            <section id="section3" className="sections">
              <h4 className="aboutTitle">Develop</h4>
              <ul className="aboutDe">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript (ES6)</li>
                <li>React</li>
                <li>JQuery</li>                
                <li>Stylus</li>
                <li>Sass</li>
                <li>Wordpress</li>
              </ul>
            </section>
            <section id="section2" className="sections">
              <h4 className="aboutTitle">Design</h4>
              <ul className="aboutDe">
                <li>GreenSock</li>                
                <li>AutoCAD</li>
                <li>ArcGIS</li>                
                <li>Adobe Photoshop + Illustrator</li>
              </ul>
            </section>            
          </li>
          <li className="pane about3">
            <div className="section4"></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default AboutMe
