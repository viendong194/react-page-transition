import React, { Component } from 'react';
import {Link,Route,Switch} from 'react-router-dom';
// import TransitionGroup from "react-transition-group/TransitionGroup";
import PageTransition from 'react-router-page-transition';

import './index.css';
import Home from './pages/home';
import Second from './pages/second';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/second">Second</Link>
        </div>
        <PageTransition timeout={500}>
          <Switch location={this.props.location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/second" component={Second} />
          </Switch>
        </PageTransition>
      </div>
    );
  }
}

export default App;
