import React from "react";
import GreenIcon from "../assets/icon-order-confirmed.svg";
import ConfirmationCard from "./ConfirmationCard";

const Confirmation = ({ isOpen, products }) => {
  if (!isOpen) return null;

  // Calculate the total price of all items
  const totalPrice = products
    .reduce((acc, product) => {
      const priceWithoutDollarSign = product.price.replace("$", "");
      const parsedPrice = parseFloat(priceWithoutDollarSign);
      if (isNaN(parsedPrice)) {
        console.error(
          `Invalid price for product ${product.title}: ${product.price}`
        );
        return acc;
      }
      return acc + parsedPrice * product.quantity;
    }, 0)
    .toFixed(2);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col bg-white rounded-lg md:p-10 p-4 space-y-10 md:w-1/2 w-3/4 max-2-xl ">
        <div className="flex flex-col space-y-4">
          <img src={GreenIcon} alt="green checkmark" className="h-10 w-10" />
          <div>
            <h1 className="font-redhat text-black font-bold text-2xl md:text-4xl">
              Order Confirmed
            </h1>
            <h2 className="font-redhat text-rose-300 text-sm">
              We hope you enjoy your food!
            </h2>
          </div>
        </div>
        <div className="bg-rose-50">
          <div>
            {products.map((product, index) => (
              <ConfirmationCard
                key={`${product.id}-${index}`}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                setQuantity={(quantity) => setQuantity(product.id, quantity)}
                total={totalPrice}
              />
            ))}
          </div>
          <div className="flex flex-row justify-between items-center p-6">
            <p className="font-bold text-md text-rose-300">Order Price:</p>
            <p className="font-bold text-black text-xl">${totalPrice}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <button
            className="bg-red flex flex-row items-center justify-center w-full font-bold text-rose-50 py-4 rounded-full hover:bg-black focus:bg-black focus:outline-none"
            onClick={() => window.location.reload()}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
