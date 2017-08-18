import React, { Component } from 'react'
import Skillbar from './Skillbar'


class Selection extends Component {      
  componentWillMount() {        
    if (this.props.location.pathname === '/projects/portfolio') {      
      this.setState({current: this.Data.portfolio})      
  } 
    else if (this.props.location.pathname === '/projects/cloneflix') {
    this.setState({current: this.Data.quicktube})
  } 
    else if (this.props.location.pathname === '/projects/chaos') {
    this.setState({current: this.Data.chaos})
  }
    else if (this.props.location.pathname === '/projects/fiverings') {
    this.setState({current: this.Data.l5r})
  }
    else if (this.props.location.pathname === '/projects/bar') {
    this.setState({current: this.Data.layout})
  }   
  }
  componentDidMount() {
    let tl = new window.TimelineLite();
    tl.from('.selection', 1.5, {opacity: 0})      
  }    
  state = {
    current : {}
  }
  Data  = {
    portfolio : {
      name: 'ggdesign.io',
      desc: 'My personal portfolio is a Single Page Application built using React, React Router, Stylus and the GreenSock Animation Platform',
      skills: ['/react-logo.svg','/stylus-logo.svg', '/gsap-logo.svg'],
      image: '/thumbs/portThumb.jpg'
    },
    l5r : {
      name: 'L5R-Decks.com',
      desc: 'A wordpress based website built for the community of the upcoming game Legend of the Five Rings: LCG. Featuring galleries, blog posts and future upcoming custom plugins and widgets. Customized graphics in Photoshop and Affinity Designer',
      skills: ['/wordpress-logo.svg', '/react-logo.svg', '/ps-logo.svg'],
      image: '/thumbs/l5rThumb.jpg'
    },
    layout : {
      name: 'Wordpress Custom Layouts',
      desc: 'An example website layout built using the Divi 3.0 theme and customized for a restaurant or bar. Single page scrolling help facilitate a fast and responsive design',
      skills: ['/wordpress-logo.svg','/ps-logo.svg'],
      image: '/thumbs/tavernThumb.jpg'
    },
    quicktube : {
      name: 'Quicktube',
      desc: 'This web application is built to be functionally similar to Youtube. It is built using the React js framework and utilizes the youtube api to fetch videos based on basic or preconfigured search terms. The goal was to build a video application which returns different results on the same search term depending on which field was submitted.',
      skills: ['/react-logo.svg','/stylus-logo.svg','/gsap-logo.svg'],
      image: '/thumbs/qtThumbtwo.jpg'
    },
    chaos : {
      name: 'Arkham Game Assistant',
      desc: 'This application is built to be compatible with the Fantasy Flight Card Game, Arkham Horror: LCG. The purpose was to automate some of the tedium and book-keeping involved in the game. I built this application using React in order to port over to IOS/Android devices in the future utilizing React Native.',      
      skills: ['/react-logo.svg','/stylus-logo.svg','/gsap-logo.svg'],
      image: '/thumbs/arkhamThumb.jpg'
    }
  }  
  
 

  render() {    
    return (      
      <div className="selection">
        <div className="sel-left">    
          <div className="sel-left-content">
            <h3>{this.state.current.name}</h3>
            <p>{this.state.current.desc}</p>
          </div>
          <Skillbar skills={this.state.current.skills} />
          <div id="backbtn-container">        
            <img src="/arrow-left.svg" height="60%" onClick={this.props.toggleView} role="presentation"/>
          </div>
        </div>     
        <div className="sel-right">
          <img src={this.state.current.image} role="presentation"/>
        </div>
      </div>     
    )
  }
}

export default Selection
