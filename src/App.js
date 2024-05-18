

import { useContext, useState } from "react";
import CompHeader from "./Components/CompHeader";
import CompProducts from "./Components/CompProducts";
import Compnavbar from "./Components/Compnavbar";
import ShowSideCart from "./Components/ShowSideCart";
import Context from "./Store/Context";
import "./App.css"; 
// import About from './Components/About/About';
import StoreForm from "./Components/Stored/StoreForm";



function App() {
  const {sideCartVisible} = useContext(Context);
  const [productList, setProductList] = useState([]);
  // const [addFormObj, setAddFormObj] = useState([]);

  const storeProducts = (addData) => {
    setProductList((prev) => {
      return [...prev, addData];
    })
  }
  // const addFormData = (data) => {
  //   setAddFormObj((prevdata) => {
  //     return [...prevdata, data];
  //   })
  // }
  return (
    <>
      <Compnavbar className="navBar"/>
      <div className="d-flex">
        <div className="components">
          <CompHeader />
          {/* <StoreForm addFormData={addFormData}/> */}
          <CompProducts storeProduct= {storeProducts} />
        </div>
        {sideCartVisible && <ShowSideCart list= {productList}/>}
      </div>
    </>
  );
}

export default App;
