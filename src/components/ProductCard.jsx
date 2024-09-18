import React from "react";
import AddToCart from "../assets/icon-add-to-cart.svg";
import IncreaseIcon from "../assets/icon-increment-quantity.svg";
import DecreaseIcon from "../assets/icon-decrement-quantity.svg";

const ProductCard = ({
  title,
  price,
  category,
  picture,
  pictureDesc,
  quantity,
  setQuantity,
}) => {
  //if clicks the add to cart button for the first time --> always increases quantity by one
  const handleQuantity = () => {
    setQuantity(quantity + 1);
  };

  //if clicks the increase button --> increases quantity by one
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  //if clicks the decrease button --> decreases quantity by one
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="relative flex flex-col font-redhat bg-rose-50">
      {/* if quantity is above 0 then display the below otherwise display the other section with add to cart */}
      {quantity > 0 ? (
        <div className="relative">
          <img
            src={picture}
            alt={pictureDesc}
            className="rounded-lg h-50 w-60 border-2 border-red"
          />
          {/* add to cart icons with plus and minus */}
          <div className="flex flex-col justify-center items-center">
            <div className="absolute z-50 flex flex-row items-center justify-center py-2 px-6 space-x-2 bg-red rounded-full text-white">
              <button onClick={handleDecrease} className="px-2">
                <img src={DecreaseIcon} alt="Decrease Quantity" />
              </button>
              <p className="font-bold">{quantity}</p>
              <button onClick={handleIncrease} className="px-2">
                <img src={IncreaseIcon} alt="Increase Quantity" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={picture}
            alt={pictureDesc}
            className="rounded-lg h-50 w-60"
          />
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={handleQuantity}
              className="absolute z-50 flex flex-row items-center justify-center py-2 px-6 space-x-2 bg-white rounded-full border border-rose-400"
            >
              <img src={AddToCart} alt="Add to Cart" />
              <p className="font-bold text-rose-500">Add to Cart</p>
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-start bg-rose-50 pt-10">
        <p className="text-sm text-rose-500">{category}</p>
        <h1 className="font-bold text-md">{title}</h1>
        <p className="text-red font-bold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
