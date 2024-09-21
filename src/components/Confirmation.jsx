import React from "react";
import GreenIcon from "../assets/icon-order-confirmed.svg";
import ConfirmationCard from "./ConfirmationCard";

const Confirmation = ({ isOpen, onClose, products, confirmOrder }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-10">
        <div>
          <img src={GreenIcon} alt="green checkmark" className="h-10 w-10" />
          <h1 className="font-redhat text-black font-bold text-4xl">
            Order Confirmed
          </h1>
          <h2 className="font-redhat text-gray text-lg">
            We hope you enjoy your food!
          </h2>
        </div>
        <div>
          {products.map((product, index) => (
              <ConfirmationCard
                key={`${product.id}-${index}`}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                setQuantity={(quantity) => setQuantity(product.id, quantity)}
                removeItem={() => removeItem(product.id)}
              />
            ))}
          </div>
        <div>
          <button className="bg-red flex flex-row items-center justify-center py-2 px-4 rounded-full" onClick={onClose}>
            <p className="font-bold text-rose-50 bg-red">Start New Order</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
