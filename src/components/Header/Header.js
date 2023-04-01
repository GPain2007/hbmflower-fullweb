import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="desktopView">
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
      </div>
      <div className="tabletView">
        {" "}
        <Container fluid style={{ backgroundColor: "#fff7f4" }}>
          <Row>
            <Col
              className="headerRow"
              xs={{ span: 10 }}
              style={{
                paddingLeft: "137px",
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
              <button type="button" className="contactUs" href="./contact">
                Contact Us
              </button>
            </Col>
          </Row>
          <Row className="paragraphRow">
            Using florals to bring Joy, Excitement and, Love into the world.
          </Row>
        </Container>
      </div>
      <div className="mobileView">
        {" "}
        <Container fluid style={{ backgroundColor: "#fff7f4" }}>
          <Row>
            <Col
              className="headerRow"
              xs={{ span: 10 }}
              style={{
                paddingLeft: "67px",
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
              <button type="button" className="contactUs" href="./contact">
                Contact Us
              </button>
            </Col>
          </Row>
          <Row className="paragraphRow">
            Using florals to bring Joy, Excitement and, Love into the world.
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Header;
