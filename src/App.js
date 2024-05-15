// import { createBrowserRouter, RouterProvider} from 'react-router-dom';


import { useContext, useState } from "react";
import CompHeader from "./Components/CompHeader";
import CompProducts from "./Components/CompProducts";
import Compnavbar from "./Components/Compnavbar";
import ShowSideCart from "./Components/ShowSideCart";
import Context from "./Store/Context";
import "./App.css"; 
import About from './Components/About/About';
import StoreForm from "./Components/Stored/StoreForm";


// const router = createBrowserRouter([
//   // {path: '/', element: <},
//   {path: '/about', element: <About /> }
// ]);


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
    {/* <RouterProvider router={router}/> */}
      <Compnavbar className="navBar"/>
      <div className="d-flex">
        <div className="components">
          <CompHeader />
          <StoreForm />
          <CompProducts storeProduct= {storeProducts}/>
        </div>
        {sideCartVisible && <ShowSideCart list= {productList}/>}
      </div>
    </>
  );
}

export default App;
