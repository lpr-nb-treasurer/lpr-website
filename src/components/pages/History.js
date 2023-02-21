import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default () => {
    return (
        <main>
            <Container fluid="xxl">
                <Row>
                    <Col>
                        <div className="text-center text-white">
                            <h1 className="display-1">
                                <strong>About Us</strong>
                            </h1>
                            <div className="button-wrapper">
                                Lambda Psi Rho is an Asian-interest, but not Asian-exclusive, organization at the University of Nevada, Reno. We continuously promote brotherhood and diversity, foster leadership, succeed academically, and serve the community.
                            </div>
                            <iframe width="617" height="422" src="https://www.youtube.com/embed/Ox1xyZEDMPc" title="Lambda Psi Rho Yardshow 2018" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};
