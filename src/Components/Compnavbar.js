import { Container, Navbar, Row, Col, ButtonGroup, Button } from "react-bootstrap";
// import SideCart from "./ShowSideCart.js";

const Compnavbar = () => {
    // const runSideCart = () => {
    //     <SideCart />
    // }
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ color: "white" }}>
                <Container fluid>
                    <Row className="m-auto g-2">
                        <Col className="gx-5">HOME</Col>
                        <Col className="gx-5">STORE</Col>
                        <Col className="gx-5">ABOUT</Col>
                    </Row>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="outline-info">cart</Button>
                    </ButtonGroup>
                    <span>0</span>
                </Container>
            </Navbar>
        </>
    )
}

export default Compnavbar;