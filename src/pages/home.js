import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div className="page transition-item">
        <h1>Home</h1>
        <p>This is home page</p>
        <Link to="/second">Go to second</Link>
      </div>
    )
  }
}