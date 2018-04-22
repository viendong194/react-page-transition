import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Home extends Component {
  componentDidUpdate(){
    this.home = document.getElementById("home");
    this.home.style.opacity = this.props.isShow ? "1" : "0";
  }
  render() {
    
    return (
      <div className="page">
        <h1 id="home">Home</h1>
        <p>This is home page</p>
        <Link to="/second">Go to second</Link>
      </div>
    )
  }
}