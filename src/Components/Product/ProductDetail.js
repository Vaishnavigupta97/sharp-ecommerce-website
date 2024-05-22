import {useParams} from "react-router-dom";
import image1 from "../assets/black-tshirtInner.webp"
import image2 from "../assets/black-jeans.webp";
import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
    const params = useParams();
    console.log(params.productid);
    if((params.productid) == 1){
        return(
            <>
            <div className={classes.ProductDetailParent}>
            <img src={image1} />
            <p>this is blackInner t-shirt</p>
            </div>
            </>
        )
    }else{
        return(
            <>
            <div className={classes.ProductDetailParent}>
            <img src={image2} />
            <p>this is black jeans</p>
            </div>
            </>
        )
    }  
    return(
        <>
        
        
        <h1>this is product detailssssssssssssssssss</h1>
        <p>{params.productid}</p>
        </>
    )
}

export default ProductDetail;