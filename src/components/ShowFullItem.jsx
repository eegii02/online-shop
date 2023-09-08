import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/75">
        <div className='w-[500px] relative bg-white p-[30px] rounded-xl'>
          <img
            src={this.props.item.img}
            alt=""
            className="w-full h-[360px] object-cover rounded-t-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => this.props.showFull(this.props.item)}
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-[#333]">
              {this.props.item.title}
            </h2>
            <p className="my-4 ">{this.props.item.desc}</p>
            <strong className="text-[#5fa36a] text-lg">
              {this.props.item.price} ₮
            </strong>
          </div>
          <div
            className="absolute bg-red-600 right-5 bottom-14 w-[35px] h-[35px] flex justify-center items-center text-white rounded-full cursor-pointer font-semibold transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem
