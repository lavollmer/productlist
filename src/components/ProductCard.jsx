import React from "react";
import AddToCart from "../assets/icon-add-to-cart.svg";
import IncreaseIcon from "../assets/icon-increment-quantity.svg";
import DecreaseIcon from "../assets/icon-decrement-quantity.svg";
import CartIcon from "../assets/illustration-empty-cart.svg";

const ProductCard = ({ title, price, category, picture, pictureDesc }) => {
  return (
    <div className="flex flex-col font-redhat bg-rose-50">
      <div className="relative">
        <img src={picture} alt={pictureDesc} className="rounded-lg h-50 w-60" />
        <div className="flex flex-col justify-center items-center">
          <button className="absolute z-50 flex flex-row items-center justify-center py-2 px-6 space-x-2 bg-white rounded-full border border-rose-400">
            <img src={AddToCart} alt="Add to Cart" />
            <p className="font-bold text-rose-500">Add to Cart</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start bg-rose-50 pt-10">
        <p className="text-sm text-rose-500">{category}</p>
        <h1 className="font-bold text-md">{title}</h1>
        <p className="text-red font-bold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
