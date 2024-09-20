import React from "react";
import CloseIcon from "../assets/icon-remove-item.svg";

const CartCard = ({ title, price, quantity }) => {
  //component returns nothing if quantity is less than or equal to 0
  if (quantity <= 0) {
    return null;
  }

  console.log("Price:", price);
  console.log("Quantity:", quantity);

  // Remove dollar sign and ensure price is a valid number
  const priceWithoutDollarSign = price.replace('$', '');
  const parsedPrice = parseFloat(priceWithoutDollarSign);
  console.log("Parsed Price:", parsedPrice);

  const total = isNaN(parsedPrice) ? "Invalid price" : `$${(parsedPrice * quantity).toFixed(2)}`;
  console.log("Total:", total);

  return (
    <div className="flex flex-col font-redhat bg-white p-2">
      <div className="flex flex-col justify-start bg-white">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-md">{title}</h1>
          <button
            className="flex items-center justify-center h-4 w-4 rounded-full border border-rose-300"
          >
            <img src={CloseIcon} alt="Close Icon" className="h-2 w-2" />
          </button>
        </div>
        <div className="flex flex-row space-x-2">
          <p className="text-red font-bold">{quantity}x</p>
          <p className="text-rose-300 text-md">${isNaN(parsedPrice) ? "Invalid price" : parsedPrice.toFixed(2)}</p>
          <p className="text-red font-bold">{total}</p>
        </div>
        <hr className="border-rose-50 my-5" />
      </div>
    </div>
  );
};

export default CartCard;
