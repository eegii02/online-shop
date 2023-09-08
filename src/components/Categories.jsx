import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { key: "all", name: "Бүх бараа" },
        { key: "chairs", name: "Cандал" },
        { key: "tables", name: "Ширээ" },
        { key: "sofas", name: "Буйдан" },
        { key: "lamps", name: "Гэрэл" },
      ],
    };
  }
  render() {
    return <div className="flex space-x-6 mb-7">{this.state.categories.map(el => <div key={el.key} className="px-6 py-2 bg-gray-100 border-[3px] border-transparent rounded-full hover:scale-110 hover:border-[silver] transition-all duration-300 text-xl font-semibold cursor-pointer" onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>)}
    </div>
  }
}

export default Categories;
