import React, { Component } from 'react';
import {Link,Route,Switch,withRouter} from 'react-router-dom';
import { TransitionGroup,CSSTransition } from 'react-transition-group'        

import '../index.css';
import Home from '../pages/home';
import Second from '../pages/second';

class Routes extends Component {
    componentDidUpdate(){
        console.log(this.props.location);
    }
    render(){
        return(
            <TransitionGroup>
            <CSSTransition 
                  key={this.props.location.pathname}
                  timeout={300}
                  classNames={this.props.location.state?"fade_prev":"fade"}>
              <Switch location={this.props.location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/second" component={Second} />
              </Switch>
            </CSSTransition>  
          </TransitionGroup>  
        )
    }
}
export default withRouter(Routes)