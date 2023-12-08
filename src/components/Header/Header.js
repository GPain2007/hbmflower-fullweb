import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

function Header() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  const location = useLocation();

  useEffect(() => {
    // Reset button visibility when the route changes
    setIsButtonVisible(true);
  }, [location.pathname]);

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
              <a href="/">
                <h1>HBM Flower City</h1>
              </a>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              {isButtonVisible && (
                <button onClick={toggleButtonVisibility} className="contactUs">
                  <Link to="/contact" className="contactUs">
                    Contact Us
                  </Link>
                </button>
              )}
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
              <a href="/">
                <h1>HBM Flower City</h1>
              </a>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <button type="button" className="contactUs">
                <a href="/contact" className="contactUs">
                  Contact Us
                </a>
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
              xs={{ span: 9 }}
              style={{
                paddingLeft: "95px",
                paddingTop: "20px",
                paddingBottom: "10px",
              }}
            >
              <a href="/">
                <h1>HBM Flower City</h1>
              </a>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <button type="button" className="contactUs">
                <a href="/contact" className="contactUs">
                  Contact Us
                </a>
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
