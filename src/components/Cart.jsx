import React from "react";
import emptyCart from "../assets/illustration-empty-cart.svg";

const Cart = ({quantity}) => {
  return (
    <div className="bg-white rounded-lg p-10">
      <div className="flex flex-row space-x-1">
        <h1 className="font-redhat text-red font-bold text-xl">Your Cart</h1>
        <h1 className="font-redhat text-red font-bold text-xl">({quantity})</h1>
      </div>
      <div>
        <img src={emptyCart} alt="Empty Cart" className="w-40 h-40" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  );
};

export default Cart;
