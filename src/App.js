// import Compnavbar from "./Components/CommonComp/Compnavbar";
import { Route, Switch } from "react-router-dom";
import Contactus from "./Components/ContactUs/Contactus";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NewStoreComp from "./Components/Stored/NewStoreComp";
import CompStore from "./Components/CompStore/CompStore";
import Productpage from "./Components/Product/ProductPage";
import ProductDetail from "./Components/Product/ProductDetail";


function App() {
  return (
    <>
      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/compStore"><CompStore /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contactus /></Route>
        <Route path="/newstorecomp"><NewStoreComp /></Route>
        <Route path="/productpage" exact><Productpage /> </Route>
        <Route path="/productpage/:productid"><ProductDetail /> </Route>
      </Switch>

    </>
  );
}

export default App;
