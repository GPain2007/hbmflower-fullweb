import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Container fluid>
      <Row>
        <Col
          className="headerRow"
          md={{ span: 11 }}
          style={{
            paddingLeft: "145px",
            paddingTop: "20px",
            paddingBottom: "10px",
          }}
        >
          <h1>HBM FLower City</h1>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <button className="contactUs" href="./contact">
            Contact Us
          </button>
        </Col>
      </Row>
      <Row className="paragraphRow">
        Using florals to bring Joy, Excitement and, Love into the world.
      </Row>
    </Container>
  );
}
export default Header;
