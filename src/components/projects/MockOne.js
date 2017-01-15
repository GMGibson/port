import React from 'react'

const MockSite = () => {
  return (
      <div className="card">
        <div className="card-content">
          <h1>Modern Site Layouts</h1>
          <div className="card-right-content">
            <ul className="skill-list">
              <li className="skill"><i href="#" className="fa fa-html5"></i></li>
              <li className="skill"><i href="#" className="fa fa-css3"></i></li>
              <li className="card-right-button"><a href="http://gg-layouts.surge.sh/" target="_blank">Visit</a></li>
            </ul>
            <div className="card-right-details"><p>This is a container site for housing layout designs and ideas for potential projects or client sites.
              I've  built it using a mixture of React components and basic html and css. I've utilized the bulma.io css library for nice flexbox based
              responsive designs.
            </p></div>
            <div className="thumbs">
              <div className="thumb7"></div>
              <div className="thumb8"></div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default MockSite
