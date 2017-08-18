import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import ProjectList from './components/ProjectList';
import AboutMe from './components/AboutMe';
import Selection from './components/Selection';
import Splash from './components/Splash';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';


import './css/style.css';

const Root = () => {
  return (
    <Router history={browserHistory}>    
      <Route path="/" component={Splash} />  
      <Route component={App}>        
        <Route path="/welcome" component={Welcome} />
        <Route path="/projects" component={ProjectList}>
          <Route path="/projects/:id" component={Selection} />
        </Route>
        <Route path="/about" component={AboutMe} />        
        <Route path="*" component={NotFound} />
      </Route>      
    </Router>
  )
}





render(<Root />, document.getElementById('root'));
