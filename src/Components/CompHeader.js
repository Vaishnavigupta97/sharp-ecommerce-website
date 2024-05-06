import { Container, Row, Col} from "react-bootstrap";

const CompHeader = () => {
    return (
        <>
            <Container fluid className="bg-secondary">
                <Row>
                    <Col className="color-light mt-3 mb-5 fs-1 text-center">The Generics</Col>
                </Row>
            </Container>
        </>
    )
}

export default CompHeader;