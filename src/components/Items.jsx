import React, { Component } from "react";
import Item from "./Item";

export default class Items extends Component {
  render() {
    return (
      <main className="grid w-full grid-cols-4 gap-x-5">
        {this.props.items.map(el => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd} showFull={this.props.showFull}/>
        ))}
      </main>
    );
  }
}
