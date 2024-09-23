import React from "react";

const ConfirmationCard = ({ title, price, quantity, total }) => {
  if (quantity <= 0) {
    return null;
  }

  console.log("Price:", price);
  console.log("Quantity:", quantity);

  // Remove dollar sign and ensure price is a valid number
  const priceWithoutDollarSign = price.replace('$', '');
  const parsedPrice = parseFloat(priceWithoutDollarSign);
  console.log("Parsed Price:", parsedPrice);

  const calculatedTotal = isNaN(parsedPrice) ? "Invalid price" : `$${(parsedPrice * quantity).toFixed(2)}`;
  console.log("Total:", calculatedTotal);


  return (
    <div className="flex flex-col font-redhat bg-rose-50 p-10">
      <div className="flex flex-col justify-start">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-md">{title}</h1>
        </div>
        <div className="flex flex-row space-x-4 text-sm">
          <p className="text-red font-bold">{quantity}x</p>
          <p className="text-rose-300">
            @ ${isNaN(parsedPrice) ? "Invalid price" : parsedPrice.toFixed(2)}
          </p>
          <p className="text-red font-bold">{calculatedTotal}</p>
        </div>
        <hr className="border-rose-100 my-5" />
      </div>
    </div>
  );
};

export default ConfirmationCard;
