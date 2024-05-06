// import { useContext } from "react";
import CompHeader from "./Components/CompHeader";
import CompProducts from "./Components/CompProducts";
import Compnavbar from "./Components/Compnavbar";
import ShowSideCart from "./Components/ShowSideCart";
// import { allcontexts } from "./Store/ContextProvider";

function App() {
  // const [sideCartVisible] = useContext(allcontexts);
  return (
    <>
      <Compnavbar />
      <div className="d-flex">
        <div>
          <CompHeader />
          <CompProducts />
        </div>
        <ShowSideCart />
        {/* {sideCartVisible && <ShowSideCart />} */}
      </div>

    </>
  );
}

export default App;
