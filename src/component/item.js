import React, { Component } from "react";
export default class Item extends Component {
  render() {
    return (
      <li className="item" key={this.props.id} remove={this.props.remove}>
        <p>Item {this.props.id}</p>
        <p onClick={this.props.remove}>Delete</p>
      </li>
    )
  }
}