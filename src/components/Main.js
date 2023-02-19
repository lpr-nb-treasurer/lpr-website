import { Col, Container, Row, Button } from "react-bootstrap"
// import Header from './Header.js';

const Main = () => 
    <main>
        <Container fluid='xxl'>
            <Row fluid>
                <Col>
                    <div class="text-center text-white">
                        <h1 class="display-1"><strong>Lambda Psi Rho</strong></h1>
                        <p><strong>Founding Chapter at The University of Nevada</strong></p>
                        <div className="button-wrapper">
                            <Button>About Us</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </main>

export default Main