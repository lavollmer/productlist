import "./App.css";
import Cart from "../src/components/Cart";
import Product from "./components/Product";
import Confirmation from "./components/Confirmation";
import { useState } from "react";
import BaklavaDesktop from "./assets/image-baklava-desktop.jpg";
import WaffleDesktop from "./assets/image-waffle-desktop.jpg";
import CremeDesktop from "./assets/image-creme-brulee-desktop.jpg";
import MacaronDesktop from "./assets/image-macaron-desktop.jpg";
import TiramisuDesktop from "./assets/image-tiramisu-desktop.jpg";
import PieDesktop from "./assets/image-meringue-desktop.jpg";
import CakeDesktop from "./assets/image-cake-desktop.jpg";
import PannaDesktop from "./assets/image-panna-cotta-desktop.jpg";
import BrownieDesktop from "./assets/image-brownie-desktop.jpg";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Waffle with Berries",
      price: "$6.50",
      category: "Waffle",
      picture: WaffleDesktop,
      pictureDesc: "A waffle with berries",
      quantity: 0,
    },
    {
      id: 2,
      title: "Vanilla Bean Crème Brûlée",
      price: "$7.00",
      category: "Crème Brûlée",
      picture: CremeDesktop,
      pictureDesc: "A Crème Brûlée",
      quantity: 0,
    },
    {
      id: 3,
      title: "Macaron Mix of Five",
      price: "$4.00",
      category: "Macaron",
      picture: MacaronDesktop,
      pictureDesc: "A Macaron Mix of Five",
      quantity: 0,
    },
    {
      id: 4,
      title: "Classic Tiramisu",
      price: "$5.50",
      category: "Tiramisu",
      picture: TiramisuDesktop,
      pictureDesc: "A Classic Tiramisu",
      quantity: 0,
    },
    {
      id: 5,
      title: "Pistachio Baklava",
      price: "$4.00",
      category: "Baklava",
      picture: BaklavaDesktop,
      pictureDesc: "A pistachio baklava",
      quantity: 0,
    },
    {
      id: 6,
      title: "Lemon Meringue Pie",
      price: "$4.00",
      category: "Pie",
      picture: PieDesktop,
      pictureDesc: "A  Lemon Meringue Pie",
      quantity: 0,
    },
    {
      id: 7,
      title: "Red Velvet Cake",
      price: "$4.00",
      category: "Cake",
      picture: CakeDesktop,
      pictureDesc: "A Cake",
      quantity: 0,
    },
    {
      id: 8,
      title: "Salted Caramel Brownie",
      price: "$4.50",
      category: "Brownie",
      picture: BrownieDesktop,
      pictureDesc: "A Salted Caramel Brownie",
      quantity: 0,
    },
    {
      id: 9,
      title: "Vanilla Panna Cotta",
      price: "$4.00",
      category: "Panna cotta",
      picture: PannaDesktop,
      pictureDesc: "A Vanilla Panna Cotta",
      quantity: 0,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const setQuantity = (id, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const removeItem = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: 0 } : product
      )
    );
  };

  const confirmOrder = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col bg-rose-50 p-4 md:p-10 md:space-x-20 w-full">
        <div className="flex flex-col p-10">
          <div>
            <h1 className="font-redhat text-black font-bold text-4xl">
              Desserts
            </h1>
          </div>
          <div>
            <Product products={products} setQuantity={setQuantity} />
          </div>
        </div>
        <div className="flex flex-col md:p-10">
          <div className="pt-10">
            <div>
              <Cart
                products={products}
                setQuantity={setQuantity}
                removeItem={removeItem}
                confirmOrder={confirmOrder}
              />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Confirmation isOpen={isModalOpen} onClose={closeModal} products={products} />}
    </>
  );
}

export default App;
