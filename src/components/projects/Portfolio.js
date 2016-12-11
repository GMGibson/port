import React from 'react'
import Logo from './react-logo.svg'
import GSAP from './gsap-logo.svg'
import Stylus from './stylus-logo.svg'

const Portfolio = () => {
  return (
      <div className="card">
        <div className="card-content">
          <h1>Personal Portfolio</h1>
          <div className="card-right-content">
            <ul className="skill-list">
              <li className="skill"><img className="skill-logo" src={Logo} alt=""></img></li>
              <li className="skill"><img className="skill-logo" src={Stylus} alt=""></img></li>
              <li className="skill"><img className="skill-logo" src={GSAP} alt=""></img></li>
              <li className="card-right-button"><a href="/">Visit</a></li>
            </ul>
            <div className="card-right-details">
              <p>My personal portfolio is built 100% in React and react-router. It is a single page application with dynamic content being rendered based on the current route and changes in state. All animations are done using the Greensock Animation Platform, GSAP.
            Webpack and Stylus were also configured for development purposes. 
              </p>
            </div>
            <div className="thumbs">
              <div className="thumb"></div>
              <div className="thumb2"></div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Portfolio
