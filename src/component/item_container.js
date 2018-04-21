import React, { Component } from "react";
import { Transition } from 'react-transition-group'

import Item from "./item"
export default class ItemContainer extends Component {
  render() {
    let items = [];
    for(let i=0;i<this.props.item_number;i++){
      items.push(<Item id={i} key={i} remove={this.props.remove}/>);
    }
    return (
      <ul className="item_container" item_number={this.props.item_number}>
        {items}
      </ul>
    )
  }
}