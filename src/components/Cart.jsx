import React from "react";
import emptyCart from "../assets/illustration-empty-cart.svg";
import CartCard from "./CartCard";

const Cart = ({ products, setQuantity, quantity }) => {
  return (
    <div className="bg-white rounded-lg p-10">
      <div className="flex flex-row space-x-1">
        <h1 className="font-redhat text-red font-bold text-xl">Your Cart</h1>
        <h1 className="font-redhat text-red font-bold text-xl">
          ({setQuantity})
        </h1>
      </div>
      <div>
        <img src={emptyCart} alt="Empty Cart" className="w-40 h-40" />
        <p>Your added items will appear here</p>
      </div>
      <div className="flex flex-col pt-10 ">
        <div>
          {products.map((product) => (
            <CartCard
              key={product.title}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              setQuantity={(quantity) => setQuantity(product.id, quantity)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
