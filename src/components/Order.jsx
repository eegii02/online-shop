import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className="flex items-center w-full px-4 pt-2 mb-2 space-x-6 h-fit">
        <img
          src={this.props.item.img}
          alt=""
          className="w-[70px] h-[70px] object-cover"
        />
        <div className="flex items-center justify-between flex-1">
          <div>
            <h2 className="font-bold text-[#333] text-xl ">
              {this.props.item.title}
            </h2>
            <strong className="text-[#7979797]">
              {this.props.item.price} ₮
            </strong>
          </div>

          <FaTrash className="text-xl text-red-600 cursor-pointer" onClick={() => this.props.dltOrder(this.props.item.id)}/>
        </div>
      </div>
    );
  }
}

export default Order;
