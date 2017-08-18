import React from 'react';
import { Link } from 'react-router';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { findDOMNode } from 'react-dom';
import { browserHistory } from 'react-router';


export default class Header extends React.Component {  
  constructor(props) {
    super(props);

    this.navigateHome = this.navigateHome.bind(this);

    this.state = {
      open: false,
    }
  }  
  handleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  loadHome() {
    browserHistory.push('/welcome')
    window.TweenMax.to('.showcase', 1, {opacity: 1})
  }

  navigateHome() {
    let tl = new window.TimelineLite()    
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
    <div className="header-container">
      <div className="navigation">
        <div className="label">          
          <Link className="logo2" onClick={this.navigateHome}>gg</Link>
        </div>
        <ul className="link-list" ref="header">
          <li className="item item1"><Link to="/projects">Projects</Link></li>
          <li className="item item2"><Link to="/about">About Me</Link></li>
          <li className="item item3"><a href="#" onTouchTap={this.handleTouchTap}>Contact</a>
          <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}>
            <Menu>
              <MenuItem primaryText="Grant Gibson" />
              <MenuItem primaryText={<div><i className="fa fa-github"></i><a href="https://github.com/GMGibson" className="ghub">Github</a></div>}/>
              <MenuItem primaryText="dev@ggdesign.io" />          
              <MenuItem primaryText="Murrells Inlet, SC" />
            </Menu>
          </Popover>
        </li>        
        </ul>                
      </div>      
    </div>    
    )
  }
}


