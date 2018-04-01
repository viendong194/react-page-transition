import React, { Component } from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import { TransitionGroup,CSSTransition } from 'react-transition-group'
// import TransitionGroup from "react-transition-group/TransitionGroup";
// import PageTransition from 'react-router-page-transition';

import './index.css';
import Routes from './Route/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/second">Second</Link>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
