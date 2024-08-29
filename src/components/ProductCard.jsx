import React from "react";
import AddToCart from "../assets/icon-add-to-cart.svg";
import IncreaseIcon from "../assets/icon-increment-quantity.svg";
import DecreaseIcon from "../assets/icon-decrement-quantity.svg";
import CartIcon from "../assets/illustration-empty-cart.svg";

const ProductCard = ({ title, price, category, picture, pictureDesc }) => {
  return (
    <div className="flex flex-col font-redhat bg-rose-50">
      <div className="relative">
        <img src={picture} alt={pictureDesc} className="rounded-lg h-80 w-80" />
        <div className="flex flex-col justify-center items-center">
          <button className="absolute z-50 flex flex-row items-center justify-center py-3 px-6 space-x-2 bg-white rounded-full border border-rose-400">
            <img src={AddToCart} alt="Add to Cart" />
            <p className="font-bold text-rose-500">Add to Cart</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start bg-rose-50">
        <p className="text-md text-rose-500">{category}</p>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-red font-bold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
