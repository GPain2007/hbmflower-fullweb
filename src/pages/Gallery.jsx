import React from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Logo from "../images/logo.png";

function Gallery({ show }) {
  return (
    <>
      {!show && (
        <>
          <div className="desktopView">
            <img src={Logo} alt="Logo" height={110} width={100} />
            <div className="waitingDes">Gallery of work in the process</div>
          </div>
          <div className="mobileView">
            <Container className="waitingMob">
              <Row>
                <Col>
                  <img src={Logo} alt="Logo" height={310} width={300} />
                </Col>
                <Col style={{ paddingLeft: "50px" }}>
                  Gallery of work in the process
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
}

export default Gallery;
