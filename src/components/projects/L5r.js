import React from 'react'
import Logo from './react-logo.svg'

const fiveRings = () => {
  return (
      <div className="card">
          <h1>l5r-decks.com</h1>
          <div className="card-right-content">
            <ul className="skill-list">
              <li className="skill"><img className="skill-logo" src={Logo} alt=""></img></li>              
              <li className="skill"><img className="skill-logo" src={Logo} alt=""></img></li>
              <li className="skill"><img className="skill-logo" src={Logo} alt=""></img></li>
              <li className="card-right-button"><a href="http://l5r-decks.com" target="_blank">Visit</a></li>
            </ul>
            <p>
              This is a community site built for the Legend of the Five Rings LCG. It was built on the wordpress cms,
              with all custom graphics and images edited in photoshop.
            </p>
            <div className="thumbs">
              {/* <div className="thumb3"></div>
              <div className="thumb4"></div> */}
            </div>
          </div>
      </div>
  )
}
export default fiveRings