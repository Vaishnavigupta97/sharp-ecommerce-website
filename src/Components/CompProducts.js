import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import Context from "../Store/Context";

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]


const CompProducts = (props) => {
    const {sideCartVisibleClick, setAllPurchaseCart, allPurchaseCart} = useContext(Context);
    const addAtSideCard = (product) => {
        const productObj = {
            title : product.title,
            proImg : product.imageUrl,
            price : product.price
        }
        setAllPurchaseCart(allPurchaseCart+1);
        props.storeProduct(productObj);
        console.log(productObj);
    }
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center" style={{ gap: "15%" }}>
                {productsArr.map((product, index) => (
                        <Card className="w-40 my-5" key={index}>
                            <Card.Body className="border-none">
                                <Card.Title className="text-center">{product.title}</Card.Title>
                                <Card.Img variant="top" src={product.imageUrl} />
                                <div className="container-fluid d-flex align-items-center justify-content-between">
                                    <Card.Text className="fs-4">{product.price}</Card.Text>
                                    <Button variant="primary"
                                    onClick={() =>addAtSideCard(product)}
                                    >Go somewhere</Button>
                                </div>
                            </Card.Body>
                        </Card>
                ))}
            </div>
            <div className="m-auto" style={{width: "10%"}}>
                <Button className="w-100 btn btn-secondary border-none fw-bolder fs-6" onClick={sideCartVisibleClick}>
                    See the Cart</Button>
            </div>
        </>
    )
}

export default CompProducts;