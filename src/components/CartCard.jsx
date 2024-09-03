import React from "react";
import AddToCart from "../assets/icon-add-to-cart.svg";
import IncreaseIcon from "../assets/icon-increment-quantity.svg";
import DecreaseIcon from "../assets/icon-decrement-quantity.svg";

const CartCard = ({ title, price, quantity, setQuantity }) => {
  return (
    <div className="flex flex-col font-redhat bg-rose-50">
      <div className="flex flex-col justify-start bg-rose-50 pt-10">
      {quantity > 0 ? (
        <p className="text-red font-bold">{quantity}x</p>
      ):()
        <h1 className="font-bold text-md">{title}</h1>
        <p className="text-red font-bold">{price}</p>

        <p className="text-red font-bold">{setQuantity}</p>
      </div>
    </div>
  );
};

export default CartCard;
