import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'
import ItemContainer from "../component/item_container"
export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_number : 2
    }
  }
  addItem = () =>{
    this.setState({item_number:this.state.item_number+1})
  }
  removeItem = () =>{
    this.setState({item_number:this.state.item_number-1})
  }
  render() {
    return (
      <div className="page">
        <h1>Second Page</h1>
        <p>This is second page</p>
        <Link to="/">Go to home</Link>
        <p className="page__addBtn"onClick={()=> this.addItem()}>Add Item</p>
        <ItemContainer item_number={this.state.item_number} remove={()=>this.removeItem()}/>
      </div>
    )
  }
}