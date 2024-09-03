import React from "react";
import GreenIcon from "../assets/icon-order-confirmed.svg";

const Confirmation = () => {
  return (
    <div className="flex flex-col">
      <img src={GreenIcon} alt="green checkmark" className="h-10 w-10" />
      <h1 className="font-redhat text-black font-bold text-4xl">
        Order Confirmed
      </h1>
      <h2 className="font-redhat text-gray text-lg">
        We hope you enjoy your food!
      </h2>
      <div>
        <button className="bg-red flex flex-row items-center justify-center py-2 px-4 rounded-full">
          <p className="font-bold text-rose-50 bg-red">Start New Order</p>
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
