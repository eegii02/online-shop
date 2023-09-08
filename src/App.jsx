import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Цагаан сандал",
          img: "/imgs/chair.jpg",
          desc: "Lorem ipsum dolor sit amet.",
          category: "chairs",
          price: "45.879",
        },
        {
          id: 2,
          title: "Улаан ширээ",
          img: "/imgs/table.jpg",
          desc: "Lorem ipsum dolor sit amet.",
          category: "tables",
          price: "89.996",
        },
        {
          id: 3,
          title: "Диван",
          img: "/imgs/sofa.jpg",
          desc: "Lorem ipsum dolor sit amet.",
          category: "sofas",
          price: "650.499",
        },
        {
          id: 4,
          title: "Ламп",
          img: "/imgs/lamp.jpg",
          desc: "Lorem ipsum dolor sit amet.",
          category: "lamps",
          price: "3.499",
        },
        {
          id: 5,
          title: "Цагаан ширээ",
          img: "/imgs/wtable.jpg",
          desc: "Lorem ipsum dolor sit amet.",
          category: "tables",
          price: "299.799",
        },
      ],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
    };
    this.showFull = this.showFull.bind(this);
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="max-w-[1200px] h-fit mx-auto my-[50px] w-[90%]">
        <Header orders={this.state.orders} dltOrder={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          showFull={this.showFull}
        />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} showFull={this.showFull} onAdd={this.addToOrder}/>}
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }

  chooseCategory(category) {
    this.setState({
      currentItems: this.state.items.filter((el) =>
        category === "all" ? this.state.items : el.category === category
      ),
    });
  }

  showFull(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }
}

export default App;
