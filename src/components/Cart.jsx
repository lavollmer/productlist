import React from "react";
import emptyCart from "../assets/illustration-empty-cart.svg";
import CartCard from "./CartCard";

const Cart = ({ products, setQuantity, removeItem }) => {
  const totalQuantity = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  const totalPrice = products.reduce((acc, product) => {
    const priceWithoutDollarSign = product.price.replace('$', '');
    const parsedPrice = parseFloat(priceWithoutDollarSign);
    if (isNaN(parsedPrice)) {
      console.error(`Invalid price for product ${product.title}: ${product.price}`);
      return acc;
    }
    return acc + parsedPrice * product.quantity;
  }, 0).toFixed(2);

  return (
    <div className="bg-white rounded-lg p-10">
      <div className="flex flex-row space-x-1">
        <h1 className="font-redhat text-red font-bold text-xl">Your Cart</h1>
        <h1 className="font-redhat text-red font-bold text-xl">
          ({totalQuantity})
        </h1>
      </div>
      {totalQuantity === 0 ? (
        <div>
          <img src={emptyCart} alt="Empty Cart" className="w-40 h-40" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="flex flex-col pt-10 ">
          <div>
          {products.map((product) => (
              <CartCard
                key={product.id}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                setQuantity={(quantity) => setQuantity(product.id, quantity)}
                removeItem={() => removeItem(product.id)}
              />
            ))}
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-rose-300 text-md font-bold">Order Total</p>
            <p className="font-bold text-black text-lg">{totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
