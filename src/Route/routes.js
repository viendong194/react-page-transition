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
<<<<<<< HEAD
            <CSSTransition 
                  key={this.props.location.pathname}
                  timeout={300}
                  classNames={this.props.location.state?"fade_prev":"fade"}>
              <Switch location={this.props.location}>
=======
                <CSSTransition 
                    key={this.props.location.key}
                    timeout={300}
                    classNames='fade'>
                <Switch location={this.props.location}>
>>>>>>> c67268ea692b2588d79ef588fc294e87be239c08
                <Route exact path="/" component={Home} />
                <Route exact path="/second" component={Second} />
                </Switch>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}
export default withRouter(Routes)