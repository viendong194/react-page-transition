import React, { Component } from "react";
import { Link } from 'react-router-dom'
export default class Second extends Component {
  render() {
    return (
      <div className="page">
        <h1>Second Page</h1>
        <p>This is second page</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }
}