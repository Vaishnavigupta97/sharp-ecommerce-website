import {useParams} from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    console.log(params.productid);
    return(
        <>
        <h1>this is product detailssssssssssssssssss</h1>
        <p>{params.productid}</p>
        </>
    )
}

export default ProductDetail;