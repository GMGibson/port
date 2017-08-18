import React from 'react'
import Logo from './react-logo.svg'

const theBar = () => {
  return (
      <div className="card">
          <h1>A Restaurant Site Example</h1>
          <div className="card-right-content">
            <ul className="skill-list">
              <li className="skill"><img className="skill-logo" src={Logo} alt=""></img></li>              
              <li className="skill"><img className="skill-logo" src={Logo} alt=""></img></li>
              <li className="skill"><img className="skill-logo" src={Logo} alt=""></img></li>
              <li className="card-right-button"><a href="#" target="_blank">Visit</a></li>
            </ul>
            <p>
              This is a demo site built on wordpress and customized via the Divi 3.0 theme.
            </p>
            <div className="thumbs">
              {/* <div className="thumb3"></div>
              <div className="thumb4"></div> */}
            </div>
          </div>
      </div>
  )
}
export default theBar