import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>HBM FLower City</h1>
        </Col>
        <Col>Contact Us</Col>
      </Row>
      <Row>
        Using florals to bring Joy, Excitement and, Love into the world.
      </Row>
    </Container>
  );
}
export default Header;
