import React, {Component} from 'react';
import { Link } from 'react-router';
import Contact from './Contact';
import { findDOMNode } from 'react-dom';
import { browserHistory } from 'react-router';

class Header extends Component {
  constructor (props) {
    super(props)
    this.toggleForm = this.toggleForm.bind(this)
    this.closeContact = this.closeContact.bind(this)
    this.openContact = this.openContact.bind(this)
    this.navigateHome = this.navigateHome.bind(this)
    this.loadHome = this.loadHome.bind(this)
  }
  state = {
    contactForm: false
  }
  toggleForm() {
    this.setState({contactForm: false})
  }
  openContact() {
    this.state.contactForm ? this.closeContact() :
    this.setState({contactForm: !this.state.contactForm})
  }
  closeContact() {
    let tl = new window.TimelineLite()
    this.state.contactForm ?
    tl.to("#left-box", 1, {opacity: 0, x: '-2000'})
      .to("#right-box-container", 1, {opacity: 0, x: '2000'},'-=1')
      .add( this.toggleForm, tl.duration()/3): null
  }
  loadHome() {
    browserHistory.push('/welcome')
    window.TweenMax.to('.showcase', 1, {opacity: 1})
  }
  navigateHome() {
    let tl = new window.TimelineLite()
    this.closeContact()
    tl.to('.showcase', 1, {opacity: 0, onComplete: this.loadHome})
  }

  componentDidMount() {
    const locate = findDOMNode
    const header = locate(this.refs.header)

    window.TweenMax.from(header, 2, {x: '1000', opacity: 0})
    window.TweenMax.from('.logo2', 2, {x: '-1000', opacity: 0})
  }

  render() {
    return (
    <div className="container">
      <div className="navigation">
        <div className="label">
          <Link className="logo2" onClick={this.navigateHome}>gg</Link>
        </div>
        <ul className="link-list"  ref="header">
          <li className="item item1"><Link to="/projects" onClick={this.closeContact}>Projects</Link></li>
          <li className="item item2"><Link to="/about" onClick={this.closeContact}>About Me</Link></li>
          <li className="item item3"><a href="#" onClick={this.openContact}>Contact</a></li>
        </ul>
      </div>
      {this.state.contactForm ? (
        <div>
          <Contact ref="ctact"/>
        </div>
      ) :
      null}
    </div>
    )
  }
}

export default Header
