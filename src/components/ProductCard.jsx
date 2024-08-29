import React from "react";
import AddToCart from "../assets/icon-add-to-cart.svg";
import IncreaseIcon from "../assets/icon-increment-quantity.svg";
import DecreaseIcon from "../assets/icon-decrement-quantity.svg";
import CartIcon from "../assets/illustration-empty-cart.svg";

const ProductCard = ({ title, price, category, picture, pictureDesc }) => {
  return (
    <div className="font-redhat bg-rose-50">
      <div>
        <img src={picture} alt={pictureDesc} className="rounded-lg" />
        <div className="flex flex-row items-center justify-center py-2 px-4 space-x-2 text-red bg-white rounded-full">
          <img src={AddToCart} alt="Add to Cart" />
          <button className="font-bold">Add to Cart</button>
        </div>
      </div>
      <div className="flex flex-col justify-start bg-rose-50">
        <p className="text-md">{category}</p>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-red font-bold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
