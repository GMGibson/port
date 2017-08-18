import React, { Component } from 'react';
import Header from './Header';
import ShowCase from './ShowCase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();


class App extends Component {

  componentDidMount() {    
    window.TweenMax.from('.main',4,{opacity: 0})
  }
  render() {
    return (
      <MuiThemeProvider>
      <div className="main">        
        <Header />        
        <ShowCase contents={this.props.children}/>        
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
