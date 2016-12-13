import React from 'react'
import Logo from './react-logo.svg'
import GSAP from './gsap-logo.svg'
import Stylus from './stylus-logo.svg'

const Chaos = () => {
  return (
      <div className="card">
          <h1>Chaos Bag Application</h1>
          <div className="card-right-content">
            <ul className="skill-list">
              <li className="skill"><img className="skill-logo" src={Logo} alt=""></img></li>
              <li className="skill"><img className="skill-logo" src={Stylus} alt=""></img></li>
              <li className="skill"><img className="skill-logo" src={GSAP} alt=""></img></li>
              <li className="card-right-button"><a href="https://chaos-bag.herokuapp.com/" target="_blank">Visit</a></li>
            </ul>
            <p>This application is built to be compatible with the Fantasy Flight Card Game, Arkham Horror: LCG.
            The purpose was to automate some of the tedium and book-keeping involved in playing this game where it mandated you draw consistantly out of a bag
            of tokens to get the outcome of challenges. I built this application using React in order to port over to IOS/Android devices in the future utilizing React Native.
            </p>
            <div className="thumbs">
              <div className="thumb3"></div>
              <div className="thumb4"></div>
            </div>
          </div>
      </div>
  )
}
export default Chaos
