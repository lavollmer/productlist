import React from "react";
import GreenIcon from "../assets/icon-order-confirmed.svg";
import ConfirmationCard from "./ConfirmationCard";

const Confirmation = ({ isOpen, onClose, products, confirmOrder }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col bg-white rounded-lg p-10 space-y-10 w-1/2 max-2-xl">
        <div className="flex flex-col space-y-4">
          <img src={GreenIcon} alt="green checkmark" className="h-10 w-10" />
          <div>
            <h1 className="font-redhat text-black font-bold text-4xl">
              Order Confirmed
            </h1>
            <h2 className="font-redhat text-rose-300 text-sm">
              We hope you enjoy your food!
            </h2>
          </div>
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
        <div className="flex flex-row items-center justify-center">
          <button
            className="flex flex-row items-center justify-center py-4 px-16 rounded-full bg-red"
            onClick={onClose}
          >
            <p className="font-bold text-rose-50">Start New Order</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
