import React, { Component } from 'react';
import Header from './Header';
import ShowCase from './ShowCase';



class App extends Component {

  componentDidMount() {
    window.TweenMax.from('.main',4,{opacity: 0})
  }
  render() {
    return (
      <div className="main">
        <Header />
        <ShowCase contents={this.props.children}/>
      </div>
    );
  }
}

export default App;
