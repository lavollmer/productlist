import React from "react";
import BaklavaSmall from "../assets/image-baklava-thumbnail.jpg";
import BrownieSmall from "../assets/image-brownie-thumbnail.jpg";
import CakeSmall from "../assets/image-cake-thumbnail.jpg";
import CremeBruleeSmall from "../assets/image-creme-brulee-thumbnail.jpg";
import MacaronSmall from "../assets/image-macaron-thumbnail.jpg";
import MeringueSmall from "../assets/image-meringue-thumbnail.jpg";
import PannaCottaSmall from "../assets/image-panna-cotta-thumbnail.jpg";
import TiramisuSmall from "../assets/image-tiramisu-thumbnail.jpg";
import WaffleSmall from "../assets/image-waffle-thumbnail.jpg";

const ConfirmationCard = ({ title, price, quantity }) => {
  if (quantity <= 0) {
    return null;
  }

  // Remove dollar sign and ensure price is a valid number
  const priceWithoutDollarSign = price.replace("$", "");
  const parsedPrice = parseFloat(priceWithoutDollarSign);
  console.log("Parsed Price:", parsedPrice);

  const calculatedTotal = isNaN(parsedPrice)
    ? "Invalid price"
    : `$${(parsedPrice * quantity).toFixed(2)}`;
  console.log("Total:", calculatedTotal);

  // Mapping of product titles to thumbnail images
  const thumbnailMapping = {
    Baklava: BaklavaSmall,
    "Pistachio Baklava": BaklavaSmall,
    Brownie: BrownieSmall,
    Cake: CakeSmall,
    "Creme Brulee": CremeBruleeSmall,
    Macaron: MacaronSmall,
    Meringue: MeringueSmall,
    "Panna Cotta": PannaCottaSmall,
    Tiramisu: TiramisuSmall,
    Waffle: WaffleSmall,
  };

  // Function to normalize the title
  const normalizeTitle = (title) => {
    let normalizedTitle = title;
    normalizedTitle = normalizedTitle.replace("Pistachio ", "");
    normalizedTitle = normalizedTitle.replace(
      "Salted Caramel Brownie",
      "Brownie"
    );
    normalizedTitle = normalizedTitle.replace("Red Velvet Cake", "Cake");
    normalizedTitle = normalizedTitle.replace("Lemon Meringue Pie", "Meringue");
    normalizedTitle = normalizedTitle.replace("Classic Tiramisu", "Tiramisu");
    normalizedTitle = normalizedTitle.replace("Macaron Mix of Five", "Macaron");
    normalizedTitle = normalizedTitle.replace("Waffle with Berries", "Waffle");
    normalizedTitle = normalizedTitle.replace(
      "Vanilla Bean Crème Brûlée",
      "Creme Brulee"
    );
    normalizedTitle = normalizedTitle.replace(
      "Vanilla Panna Cotta",
      "Panna Cotta"
    );
    return normalizedTitle;
  };

  const normalizedTitle = normalizeTitle(title);
  const thumbnailImage = thumbnailMapping[normalizedTitle] || null;
  console.log("Thumbnail Image:", thumbnailImage);

  console.log("Price:", price);
  console.log("Quantity:", quantity);
  console.log("Title:", title);
  console.log("Thumbnail:", thumbnailMapping[title]);

  return (
    <div className="flex flex-row items-center font-redhat bg-rose-50 p-4">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center">
          {thumbnailImage && (
            <img src={thumbnailImage} alt={title} className="h-16 w-16" />
          )}
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="font-bold text-md">{title}</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center justify-between space-x-4 text-sm">
              <div className="flex flex-row space-x-4">
                <p className="text-red font-bold">{quantity}x</p>
                <p className="text-rose-300">
                  @ $
                  {isNaN(parsedPrice)
                    ? "Invalid price"
                    : parsedPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto">
          <p className="text-black font-bold">{calculatedTotal}</p>
        </div>
        <hr className="border-rose-100 my-5" />
      </div>
      
    </div>
  );
};

export default ConfirmationCard;
