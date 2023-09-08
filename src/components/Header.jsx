import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Order from "./Order";

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return (
      <div>
        {props.orders.map((el) => (
          <Order key={el.id} item={el} dltOrder={props.dltOrder} />
        ))}
        <p className="w-full p-4 text-xl font-semibold">Нйит үнийн дүн {sum} ₮</p>
      </div>
    );
  }
  
  const showNothing = () => (
    <div className="p-4 text-xl font-bold">
      Бараа алга...
    </div>
  )
    
  
  return (
    <header className="relative">
      <div className="flex justify-between">
        <span className="font-semibold text-[25px]">Гэрийн тавилга</span>
        <ul className="flex space-x-8 text-xl cursor-pointer">
          <li className="transition-all duration-300 hover:opacity-50">
            Бидний тухай
          </li>
          <li className="transition-all duration-300 hover:opacity-50">
            Контакт
          </li>
          <li className="transition-all duration-300 hover:opacity-50">
            Холбогдох
          </li>
          <FaBasketShopping
            className={
              cartOpen ? "text-red-700 text-2xl hover:scale-110" : "text-2xl"
            }
            onClick={() => setCartOpen((cartOpen) => !cartOpen)}
          />
        </ul>
        {cartOpen && (
          <div className="absolute right-0 top-9 w-[450px] min-h-fit shadow-xl bg-white z-10">
            {props.orders.length > 0 ? showOrders(props) : showNothing()} 
          </div>
        )}
      </div>
      <div className=" my-[50px] w-full h-[700px] bg-no-repeat bg-cover mix-blend-multiply bg-[#bcbcbc] bg-center relative">
        <img
          src="/src/imgs/livingRoom.webp"
          alt=""
          className="object-cover w-full h-full brightness-50"
        />
        <h2 className="absolute top-[100px] left-[50px] text-4xl max-w-[280px] font-semibold text-white">
          Танд хэрэгтэй шилдэг тавилгууд
        </h2>
        <h2 className="absolute top-[250px] left-[50px] text-xl font-semibold text-white uppercase">
          Хамгийн хямд үнээр
        </h2>
      </div>
    </header>
  );
}
