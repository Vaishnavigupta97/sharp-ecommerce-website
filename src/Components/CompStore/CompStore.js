import { useContext, useState } from "react";
import CompHeader from "../CommonComp/CompHeader";
import CompProducts from "./CompProducts";
import ShowSideCart from "./ShowSideCart";
import Context from "../../Store/Context";
import Compnavbar from "../CommonComp/Compnavbar";
import classes from "./CompStore.module.css";

const CompStore = () => {
  // const { sideCartVisibleClick, allPurchaseCart } = useContext(Context);
  const { sideCartVisible, sideCartVisibleClick, allPurchaseCart } = useContext(Context);
  const [productList, setProductList] = useState([]);

  const storeProducts = (addData) => {
    setProductList((prev) => {
      return [...prev, addData];
    })
    console.log(setProductList);
  }
  return (
    <>
      <div className={classes.storeNavParent}>
        <div className={classes.compNavBar}>
        <Compnavbar />
        </div>
        <div className={classes.navButtonParent}>
          <button onClick={sideCartVisibleClick}>cart</button>
          <span>{allPurchaseCart}</span>
        </div>
      </div>

      <CompHeader />
      <div className={classes.compStoreParent} >
        <div className="components">
          <CompProducts storeProduct={storeProducts} />
        </div>
        {sideCartVisible && <ShowSideCart list={productList} />}
      </div>
    </>
  );
}

export default CompStore;