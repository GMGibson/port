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
              <li className="card-right-button"><a href="http://curved-effect.surge.sh/" target="_blank">Visit</a></li>
            </ul>
            <div className="card-right-details"><p>This is an example layout site using modern design principles for a potential business.
            No frameworks or libraries were used. All effects and layouts were coded in raw CSS. This site uses flexbox for the majority of
          its components to aid in responsive design.</p></div>
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
