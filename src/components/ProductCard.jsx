import React from "react";
import AddToCart from "../assets/icon-add-to-cart.svg";
import IncreaseIcon from "../assets/icon-increment-quantity.svg";
import DecreaseIcon from "../assets/icon-decrement-quantity.svg";
import CartIcon from "../assets/illustration-empty-cart.svg";
import BaklavaDesktop from "../assets/image-baklava-desktop.jpg";

const ProductCard = () => {
  return (
    <div>
      <div>
        <img src={BaklavaDesktop} alt="Baklava Desktop" />
      </div>
    </div>
  );
};

export default ProductCard;
