// import Compnavbar from "./Components/CommonComp/Compnavbar";
import { Route } from "react-router-dom";
import Contactus from "./Components/ContactUs/Contactus";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NewStoreComp from "./Components/Stored/NewStoreComp";
import CompStore from "./Components/CompStore/CompStore";


function App() {
  return (
    <>
   <Route path="/home"><Home /></Route>
   <Route path="/compStore"><CompStore /></Route>
   <Route path="/about"><About /></Route>
   <Route path="/contact"><Contactus /></Route>
   <Route path="/newstorecomp"><NewStoreComp /></Route>
    </>
  );
}

export default App;
