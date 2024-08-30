import React from "react";
import ProductCard from "../components/ProductCard";

const Product = ({ products, setQuantity }) => {
  return (
    <div className="flex flex-col pt-10 ">
      <div className="flex md:flex-row flex-col md:space-x-10 md:pb-6">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            category={product.category}
            picture={product.picture}
            pictureDesc={product.pictureDesc}
            quantity={product.quantity} // Pass quantity prop
            setQuantity={(quantity) => setQuantity(product.id, quantity)}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
