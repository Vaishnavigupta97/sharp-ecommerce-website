import classes from "./CompNavbar.module.css";
// import Context from "../../Store/Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Store/auth-context";

const Compnavbar = () => {
    // const { sideCartVisibleClick, allPurchaseCart } = useContext(Context);
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <>
            <header>
                <nav>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                        {/* <a href='/home'>Home</a> */}
                        <NavLink to='/compStore'>Store</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        {/* {!isLoggedIn && ( */}
                        <NavLink to='/contact'>Contact us</NavLink>
                        {/* // )} */}
                        <NavLink to='/newstorecomp'>NewStoreComp</NavLink>
                        <NavLink to='/productpage'>product page</NavLink>
                        {/* <NavLink to='/productdetail'>product page</NavLink> */}

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