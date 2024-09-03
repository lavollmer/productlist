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
      <div className="flex flex-col justify-center items-center ">
        <button className="absolute z-50 bg-red flex flex-row items-center justify-center py-2 px-6 space-x-2 rounded-full">
          <p className="font-bold text-rose-50 bg-red">Start New Order</p>
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
