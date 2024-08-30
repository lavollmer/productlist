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

const Product = ({ products, setQuantity }) => {
  return (
    <div className="flex flex-col pt-10 ">
      {/* <div className="flex md:flex-row flex-col md:space-x-10 md:pb-6">
        <ProductCard
          title="Waffle with Berries"
          price="$6.50"
          category="Waffle"
          picture={WaffleDesktop}
          pictureDesc="A waffle with berries"
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ProductCard
          title="Vanilla Bean Crème Brûlée"
          price="$7.00"
          category="Crème Brûlée"
          picture={CremeDesktop}
          pictureDesc="A Crème Brûlée"
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ProductCard
          title="Macaron Mix of Five"
          price="$4.00"
          category="Macaron"
          picture={MacaronDesktop}
          pictureDesc="A Macaron Mix of Five"
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      <div className="flex md:flex-row flex-col md:space-x-10  md:pb-6">
        <ProductCard
          title="Classic Tiramisu"
          price="$5.50"
          category="Tiramisu"
          picture={TiramisuDesktop}
          pictureDesc="A Classic Tiramisu"
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ProductCard
          title="Pistachio Baklava"
          price="$4.00"
          category="Baklava"
          picture={BaklavaDesktop}
          pictureDesc="A pistachio baklava"
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ProductCard
          title="Lemon Meringue Pie"
          price="$4.00"
          category="Pie"
          picture={PieDesktop}
          pictureDesc="A  Lemon Meringue Pie"
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      <div className="flex md:flex-row flex-col md:space-x-10  md:pb-6">
        <ProductCard
          title="Red Velvet Cake"
          price="$4.00"
          category="Cake"
          picture={CakeDesktop}
          pictureDesc="A red velvet cake"
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ProductCard
          title="Salted Caramel Brownie"
          price="$4.50"
          category="Brownie"
          picture={BrownieDesktop}
          pictureDesc="A Brownie"
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ProductCard
          title="Vanilla Panna Cotta"
          price="$4.00"
          category="Panna Cotta"
          picture={PannaDesktop}
          pictureDesc="A Vanilla Panna Cotta"
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div> */}
      <div className="flex md:flex-row flex-col md:space-x-10 md:pb-6">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            category={product.category}
            picture={product.picture}
            pictureDesc={product.pictureDesc}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
