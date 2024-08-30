import React from "react";
import ProductCard from "../components/ProductCard";
import BaklavaDesktop from "../assets/image-baklava-desktop.jpg";
import WaffleDesktop from "../assets/image-waffle-desktop.jpg";
import CremeDesktop from "../assets/image-creme-brulee-desktop.jpg";
import MacaronDesktop from "../assets/image-macaron-desktop.jpg";
import TiramisuDesktop from "../assets/image-tiramisu-desktop.jpg";
import PieDesktop from "../assets/image-meringue-desktop.jpg";
import CakeDesktop from "../assets/image-cake-desktop.jpg";
import PannaDesktop from "../assets/image-panna-cotta-desktop.jpg";
import BrownieDesktop from "../assets/image-brownie-desktop.jpg";

const Product = () => {
  return (
    <div className="flex flex-col pt-10">
      <div className="flex md:flex-row flex-col md:space-x-10">
        <ProductCard
          title="Waffle with Berries"
          price="$6.50"
          category="Waffle"
          picture={WaffleDesktop}
          pictureDesc="A waffle with berries"
        />
        <ProductCard
          title="Vanilla Bean Crème Brûlée"
          price="$7.00"
          category="Crème Brûlée"
          picture={CremeDesktop}
          pictureDesc="A Crème Brûlée"
        />
        <ProductCard
          title="Macaron Mix of Five"
          price="$4.00"
          category="Macaron"
          picture={MacaronDesktop}
          pictureDesc="A Macaron Mix of Five"
        />
      </div>
      <div className="flex md:flex-row flex-col md:space-x-10">
        <ProductCard
          title="Classic Tiramisu"
          price="$5.50"
          category="Tiramisu"
          picture={TiramisuDesktop}
          pictureDesc="A Classic Tiramisu"
        />
        <ProductCard
          title="Pistachio Baklava"
          price="$4.00"
          category="Baklava"
          picture={BaklavaDesktop}
          pictureDesc="A pistachio baklava"
        />
        <ProductCard
          title="Lemon Meringue Pie"
          price="$4.00"
          category="Pie"
          picture={PieDesktop}
          pictureDesc="A  Lemon Meringue Pie"
        />
      </div>
      <div className="flex md:flex-row flex-col md:space-x-10">
        <ProductCard
          title="Red Velvet Cake"
          price="$4.00"
          category="Cake"
          picture={CakeDesktop}
          pictureDesc="A red velvet cake"
        />
        <ProductCard
          title="Salted Caramel Brownie"
          price="$4.50"
          category="Brownie"
          picture={BrownieDesktop}
          pictureDesc="A Brownie"
        />
        <ProductCard
          title="Vanilla Panna Cotta"
          price="$4.00"
          category="Panna Cotta"
          picture={PannaDesktop}
          pictureDesc="A Vanilla Panna Cotta"
        />
      </div>
    </div>
  );
};

export default Product;
