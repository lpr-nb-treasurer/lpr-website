import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap"

export default () => {
  return (
    <main>
      <Container fluid="xxl">
        <Row>
          <Col>
            <div className="text-center text-white">
              <h1 className="display-1">
                <strong>Lambda Psi Rho</strong>
              </h1>
              <p>
                <strong>Founding Chapter at The University of Nevada</strong>
              </p>
              <div className="button-wrapper">
                <Button>About Us</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
