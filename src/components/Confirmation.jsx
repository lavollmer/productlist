import React from "react";

const Confirmation = () => {
  return (
    <div>
      <div>
        <h1 className="font-redhat text-black font-bold text-4xl">
          Order Confirmed
        </h1>
        <h2>We hope you enjoy your food!</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleQuantity}
          className="absolute z-50 flex flex-row items-center justify-center py-2 px-6 space-x-2 bg-white rounded-full border border-rose-400"
        >
          <p className="font-bold text-rose-500">Start New Order</p>
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
