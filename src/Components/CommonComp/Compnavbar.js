import classes from "./CompNavbar.module.css";
// import Context from "../../Store/Context";
// import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Compnavbar = () => {
    // const { sideCartVisibleClick, allPurchaseCart } = useContext(Context);
    return (
        <>
            <header>
                <nav>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                        {/* <a href='/home'>Home</a> */}
                        <NavLink to='/compStore'>Store</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/contact'>Contact us</NavLink>
                        <NavLink to='/newstorecomp'>NewStoreComp</NavLink>
                    </li>
                    {/* <div className={classes.navButtonParent}>
                        <button onClick={sideCartVisibleClick}>cart</button>
                        <span>{allPurchaseCart}</span>
                    </div> */}
                </nav>
            </header>

        </>
    )
}

export default Compnavbar;