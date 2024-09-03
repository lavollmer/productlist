import React from "react";
import CloseIcon from "../assets/icon-remove-item.svg";

const CartCard = ({ title, price, quantity, setQuantity }) => {
  const handleClick = () => {
    setQuantity(0);
  };

  return (
    <div className="flex flex-col font-redhat bg-white p-2">
      <div className="flex flex-col justify-start bg-white">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-md">{title}</h1>
          <button onClick={handleClick} className="flex items-center justify-center h-4 w-4 rounded-full border border-rose-300">
            <img src={CloseIcon} alt="Close Icon" className="h-2 w-2" />
          </button>
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
