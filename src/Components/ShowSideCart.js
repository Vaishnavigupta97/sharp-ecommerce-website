import { useContext } from "react";
import classes from "./ShowSideCart.module.css";
import Context from "../Store/Context";

const ShowSideCart = (props) => {
    const { removeSetSideCard } = useContext(Context);
    let sum = 0;
    // let defineMap = new Map();
    // const removeCartItem = (event) => {
    //     event.delete();
    // }
    return (
        <>
            <div className={classes.sideparent}>
                <div className={classes.removeCart}>
                    <button onClick={removeSetSideCard}>X</button>
                </div>
                <h2 className={classes.heading}>CART</h2>
                <div className={classes.cartDescription}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ITEM</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.list.map((event, index) => {
                                    return <tr key={index} className={classes.tableRow}>
                                        <td>
                                            <div className={classes.tdCover}>
                                                <img src={event.proImg} />
                                                <div>{event.title}</div>
                                            </div>
                                        </td>
                                        <td>{event.price}</td>
                                        <td>
                                            <div className={classes.tdCover}>
                                                <p>1</p>
                                                <div>
                                                <button 
                                                // onClick={() =>removeCartItem(event)}
                                                >Remove</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <div className={classes.total}>
                        <p>Total</p>
                        {
                            props.list.map((event, index) => {
                                sum += event.price
                            })
                        }
                        <p>{sum}</p>

                    </div>

                </div>

                <div>

                </div>
                <div className={classes.purchase}>
                    <button>Purchase</button>
                </div>
            </div>
        </>
    )
}

export default ShowSideCart;