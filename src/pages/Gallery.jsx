import React from "react";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

function Gallery({ show }) {
  return (
    <>
      {!show && (
        <>
          <div className="desktopView" style={{ marginTop: "20px" }}>
            <Container fluid className="waitingDes">
              <Row>
                <Col style={{ paddingLeft: "35px" }}>
                  Gallery of work in the process
                </Col>
              </Row>
            </Container>
          </div>
          <div className="mobileView" style={{ marginTop: "20px" }}>
            <Container className="waitingMob">
              <Row>
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
