import React from "react";
import BaklavaSmall from "../assets/image-baklava-thumbnail.jpg";
import BrownieSmall from "../assets/image-brownie-thumbnail.jpg";
import CakeSmall from "../assets/image-cake-thumbnail.jpg";
import CremeBruleeSmall from "../assets/image-creme-brulee-thumbnail.jpg";
import MacaronSmall from "../assets/image-macaron-thumbnail.jpg";
import MeringueSmall from "../assets/image-meringue-thumbnail.jpg";
import PannaCottaSmall from "../assets/image-panna-cotta-thumbnail.jpg";
import TiramisuSmall from "../assets/image-tiramisu-thumbnail.jpg";
import WaffleSmall from "../assets/image-waffle-thumbnail.jpg";

const ConfirmationCard = ({ title, price, quantity }) => {
  if (quantity <= 0) {
    return null;
  }

  console.log("Price:", price);
  console.log("Quantity:", quantity);

  // Remove dollar sign and ensure price is a valid number
  const priceWithoutDollarSign = price.replace("$", "");
  const parsedPrice = parseFloat(priceWithoutDollarSign);
  console.log("Parsed Price:", parsedPrice);

  const calculatedTotal = isNaN(parsedPrice)
    ? "Invalid price"
    : `$${(parsedPrice * quantity).toFixed(2)}`;
  console.log("Total:", calculatedTotal);

  return (
    <div className="flex flex-col font-redhat bg-rose-50 p-4">
      <div className="flex flex-col justify-start">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-md">{title}</h1>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center justify-between space-x-4 text-sm">
            <div className="flex flex-row space-x-4">
              <p className="text-red font-bold">{quantity}x</p>
              <p className="text-rose-300">
                @ $
                {isNaN(parsedPrice) ? "Invalid price" : parsedPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <div>
            <p className="text-black font-bold">{calculatedTotal}</p>
          </div>
        </div>
        <hr className="border-rose-100 my-5" />
      </div>
    </div>
  );
};

export default ConfirmationCard;
