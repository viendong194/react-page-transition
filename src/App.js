import React, { Component } from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import { TransitionGroup,CSSTransition } from 'react-transition-group'
// import TransitionGroup from "react-transition-group/TransitionGroup";
// import PageTransition from 'react-router-page-transition';
import DrawLine from './drawLine'
import './index.css';
import Routes from './Route/routes';

class App extends Component {
  componentDidMount(){
    // new DrawLine();
  }
  render() {
    return (
      <div className="App">
        {/* <div className="canvas-container"> */}
        <div className="TopBar">
          <Link to={{pathname:"/",state:false}}>Home</Link>
          <Link to={{pathname:"/second",state:true}}>Second</Link>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
