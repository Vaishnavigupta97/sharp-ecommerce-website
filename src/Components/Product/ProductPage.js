import {Link} from "react-router-dom";

const Productpage = () => {
    return(
        <>
        <p>this is product page</p>
        <ul>
            <Link to='productpage/p1'> A book</Link>
        </ul>
        <ul>
            <Link to='productpage/p2'> A carpet</Link>
        </ul>
        <ul>
            <Link to='productpage/p3'> An online course</Link>
        </ul>
        </>
    )
}

export default Productpage;