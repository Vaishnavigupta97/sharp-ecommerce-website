import { useContext, useState } from "react";
import CompHeader from "./Components/CompHeader";
import CompProducts from "./Components/CompProducts";
import Compnavbar from "./Components/Compnavbar";
import ShowSideCart from "./Components/ShowSideCart";
import Context from "./Store/Context";
import "./App.css"; 

function App() {
  const {sideCartVisible} = useContext(Context);
  const [productList, setProductList] = useState([]);

  const storeProducts = (addData) => {
    setProductList((prev) => {
      return [...prev, addData];
    })
    console.log(productList);
  }
  return (
    <>
      <Compnavbar className="navBar"/>
      <div className="d-flex">
        <div className="components">
          <CompHeader />
          <CompProducts storeProduct= {storeProducts}/>
        </div>
        {sideCartVisible && <ShowSideCart list= {productList}/>}
      </div>
    </>
  );
}

export default App;
