import classes from "./ShowSideCart.module.css";

const ShowSideCart = () => {
    return (
        <>
            <div className={classes.sideparent}>
                <div className={classes.removeCart}>
                <button>X</button>
                </div>
                <h1 className={classes.heading}>CART</h1>
                <div className={classes.cartDescription}>
                    <p>ITEM</p>
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                </div>

                <div>
                    <p>Total</p>
                    <p>$0.00</p>
                </div>
                <div>
                    <button>Purchase</button>
                </div>
            </div>
        </>
    )
}

export default ShowSideCart;