import React from "react";
import ProductCard from "../components/ProductCard";

const Product = ({ products, setQuantity }) => {
  return (
    <div className="flex flex-col pt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
            category={product.category}
            picture={product.picture}
            pictureDesc={product.pictureDesc}
            quantity={product.quantity}
            setQuantity={(quantity) => setQuantity(product.id, quantity)}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
