import "./App.css";
import Cart from "../src/components/Cart";
import Product from "./components/Product";
import Confirmation from "../src/components/Confirmation";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Waffle with Berries",
      price: "$6.50",
      category: "Waffle",
      picture: WaffleDesktop,
      pictureDesc: "A waffle with berries",
    },
    {
      id: 2,
      title: "Vanilla Bean Crème Brûlée",
      price: "$7.00",
      category: "Crème Brûlée",
      picture: CremeDesktop,
      pictureDesc: "A Crème Brûlée",
    },
    {
      id: 3,
      title: "Macaron Mix of Five",
      price: "$4.00",
      category: "Macaron",
      picture: MacaronDesktop,
      pictureDesc: "A Macaron Mix of Five",
    },
    {
      id: 4,
      title: "Classic Tiramisu",
      price: "$5.50",
      category: "Tiramisu",
      picture: TiramisuDesktop,
      pictureDesc: "A Classic Tiramisu",
    },
    {
      id: 5,
      title: "Pistachio Baklava",
      price: "$4.00",
      category: "Baklava",
      picture: BaklavaDesktop,
      pictureDesc: "A pistachio baklava",
    },
    {
      id: 6,
      title: "Lemon Meringue Pie",
      price: "$4.00",
      category: "Pie",
      picture: PieDesktop,
      pictureDesc: "A  Lemon Meringue Pie",
    },
  ]);

  const setQuantity = (id, quantity) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  return (
    <>
      <div className="flex flex-row bg-rose-50 p-10 justify-evenly">
        <div className="flex flex-col">
          <div>
            <h1 className="font-redhat text-black font-bold text-4xl">
              Desserts
            </h1>
          </div>
          <div>
            <Product products={products} setQuantity={setQuantity} />
          </div>
        </div>
        <div className="pt-10">
          <div>
            <Cart products={products} />
          </div>
        </div>
        <div>
          <div>
            <Confirmation products={products} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
