import { Link } from "react-router-dom";
import image1 from '../assets/black-tshirt.webp';
import image2 from '../assets/black-jeans.webp';
import classes from "./ProductPage.module.css";
import Compnavbar from "../CommonComp/Compnavbar";
import CompHeader from "../CommonComp/CompHeader";

// const data = [
//     {
//         id: 1,
//         image : image1,
//         title: "t-shirt",
//         color: "black"
//     },
//     {
//         id: 2,
//         image : image2,
//         title: "jeans",
//         color: "black"
//     }
// ]
const Productpage = () => {
    return (
        <>
        <Compnavbar />
        {/* <CompHeader /> */}
            <div className={classes.productPageParent}>
                {/* {
                    data.map((dataDetail) => (
                        <>
                        <Link to></Link>
                        <img src={dataDetail.image} />
                        <p>{dataDetail.title}</p>
                        <p>{dataDetail.color}</p>
                        </>
                    ))  
                } */}
                <ul>
                    <Link to='productpage/1' className={classes.productImgParent}><img src={image1} /></Link>
                    <Link to='productpage/2' className={classes.productImgParent}><img src={image2} /></Link>
                    <Link to='productpage/1' className={classes.productImgParent}><img src={image1} /></Link>
                    <Link to='productpage/2' className={classes.productImgParent}><img src={image2} /></Link>
                    <Link to='productpage/1' className={classes.productImgParent}><img src={image1} /></Link>
                    <Link to='productpage/2' className={classes.productImgParent}><img src={image2} /></Link>
                    <Link to='productpage/1' className={classes.productImgParent}><img src={image1} /></Link>
                    <Link to='productpage/2' className={classes.productImgParent}><img src={image2} /></Link>
                </ul>
            </div>
        </>
    )
}

export default Productpage;