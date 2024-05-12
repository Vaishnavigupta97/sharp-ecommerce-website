import { useContext } from "react";
import { Container, Navbar, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import Context from "../Store/Context";
import classes from "./CompNavbar.module.css";
import { useNavigate } from "react-router-dom";
// import SideCart from "./ShowSideCart.js";

const Compnavbar = () => {
    const { sideCartVisibleClick, allPurchaseCart } = useContext(Context);
    const navigate = useNavigate()
    const goStore = () => {
        navigate("/")
    }
    const goAbout = () => {
        navigate("/about")
    }
    const goHome = () => {
        navigate("/home")
    }

    return (
        <>
            <div className={classes.navParent}>
                <Navbar bg="dark" variant="dark" style={{ color: "white" }}>
                    <Container fluid>
                        <Row className="m-auto g-2">
                            <Col className="gx-5" onClick={goHome}>HOME</Col>
                            <Col className="gx-5" onClick={goStore}>STORE</Col>
                            <Col className="gx-5" onClick={goAbout}>ABOUT</Col>
                        </Row>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="outline-info" onClick={sideCartVisibleClick}>cart</Button>
                        </ButtonGroup>
                        <span>{allPurchaseCart}</span>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Compnavbar;