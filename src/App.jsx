import "./App.css";
import Cart from "../src/components/Cart";
import Product from "./components/Product";
import Confirmation from "../src/components/Confirmation";

function App() {
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
            <Product />
          </div>
        </div>
        <div className="pt-10">
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
