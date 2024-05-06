import { Card, Button } from "react-bootstrap";

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


const CompProducts = () => {
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center" style={{ gap: "15%" }}>
                {productsArr.map((product, index) => (
                    <>
                        <Card className="w-40 my-5">
                            <Card.Body className="border-none">
                                <Card.Title className="text-center">{product.title}</Card.Title>
                                <Card.Img variant="top" src={product.imageUrl} />
                                <div class="container-fluid d-flex align-items-center justify-content-between">
                                    <Card.Text className="fs-4">{product.price}</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </>
                ))}
            </div>
        </>
    )
}

export default CompProducts;