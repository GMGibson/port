import React from 'react'
import Logo from './react-logo.svg'
import GSAP from './gsap-logo.svg'
import Stylus from './stylus-logo.svg'

const Cloneflix = () => {
  return (
      <div className="card">
        <div className="card-content">
          <h1>Quick Tube</h1>
          <div className="card-right-content">
            <ul className="skill-list">
              <li className="skill"><img className="skill-logo" src={Logo} alt=""></img></li>
              <li className="skill"><img className="skill-logo" src={Stylus} alt=""></img></li>
              <li className="skill"><img className="skill-logo" src={GSAP} alt=""></img></li>
              <li className="card-right-button"><a href="https://afternoon-ocean-11074.herokuapp.com/" target="_blank">Visit</a></li>
            </ul>
            <div className="card-right-details"><p>This web application is built to be functionally similar to Youtube.
               It is built using the React js framework and utilizes the youtube api to fetch videos based on basic or preconfigured search terms. The goal was
               to build a video application which returns different results on the same search term depending on which field was submitted.
            </p></div>
            <div className="thumbs">
              <div className="thumb5"></div>
              <div className="thumb6"></div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Cloneflix
