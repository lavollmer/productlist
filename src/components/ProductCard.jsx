import React from "react";
import AddToCart from "../assets/icon-add-to-cart.svg";
import IncreaseIcon from "../assets/icon-increment-quantity.svg";
import DecreaseIcon from "../assets/icon-decrement-quantity.svg";
import CartIcon from "../assets/illustration-empty-cart.svg";


const ProductCard = ({ title, price, category, picture, pictureDesc }) => {
  return (
    <div>
      <div>
        <img src={picture} alt={pictureDesc} />
      </div>
      <div>
        <p>{category}</p>
        <h1>{title}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
