import React from "react";

export default class Item extends React.Component {
  render() {
    return (
      <div className="mb-[50px] bg-[#f5f5f5] overflow-hidden relative rounded-t-xl">
        <img
          src={this.props.item.img}
          alt=""
          className="w-full h-[200px] object-cover rounded-t-xl hover:scale-110 transition-all duration-300 cursor-pointer"
          onClick={() => this.props.showFull(this.props.item)}
        />
        <div className="p-4">
          <h2 className="font-bold text-[#333] text-xl">
            {this.props.item.title}
          </h2>
          <p className="my-4">{this.props.item.desc}</p>
          <strong className="text-[#5fa36a] text-lg">
            {this.props.item.price} ₮
          </strong>
        </div>
        <div
          className="absolute bg-red-600 right-5 bottom-5 w-[35px] h-[35px] flex justify-center items-center text-white rounded-full cursor-pointer font-semibold transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}
