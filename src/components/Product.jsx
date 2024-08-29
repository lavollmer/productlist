import React from "react";
import ProductCard from "../components/ProductCard";
import BaklavaDesktop from "../assets/image-baklava-desktop.jpg";

const Product = () => {
  return (
    <div>
      <ProductCard
        title="Pistachio Baklava"
        price="$4.00"
        category={Baklava}
        picture="BaklavaDesktop"
        pictureDesc="A pistachio baklava"
      />
    </div>
  );
};

export default Product;
