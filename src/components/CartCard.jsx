import React from "react";
import CloseIcon from "../assets/icon-remove-item.svg";

const CartCard = ({ title, price, quantity, setQuantity }) => {
  return (
    <div className="flex flex-col font-redhat bg-rose-50">
      <div className="flex flex-col justify-start bg-rose-50 pt-10">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-md">{title}</h1>
          <img src={CloseIcon} alt="Close Icon" className="h-4 w-4" />
        </div>
        <div className="flex flex-row space-x-2">
          <p className="text-red font-bold">{quantity}x</p>
          <p className="text-rose-300 text-md">{price}</p>
          <p className="text-red font-bold">{setQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
