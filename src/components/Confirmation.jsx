import React from "react";
import GreenIcon from "../assets/icon-order-confirmed.svg";

const Confirmation = ({ isOpen, onClose, products }) => {
  if (!isOpen) return null;

  return (
    <div className="flex flex-col">
      <div>
        <img src={GreenIcon} alt="green checkmark" className="h-10 w-10" />
        <h1 className="font-redhat text-black font-bold text-4xl">
          Order Confirmed
        </h1>
        <h2 className="font-redhat text-gray text-lg">
          We hope you enjoy your food!
        </h2>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            {product.quantity}x {product.title} - {product.price}
          </li>
        ))}
      </ul>
      <div>
        <button className="bg-red flex flex-row items-center justify-center py-2 px-4 rounded-full" onClick={onClose}>
          <p className="font-bold text-rose-50 bg-red">Start New Order</p>
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
