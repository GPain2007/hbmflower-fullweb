import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import IMG1 from "../../images/logo.png";
import IMG2 from "../../images/IMG_7701.jpg";
import IMG3 from "../../images/IMG_7748.jpg";
import IMG4 from "../../images/IMG_7821.jpg";
import IMG5 from "../../images/IMG_7830.jpg";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid style={{ background: "#fff7f4" }} className="footer">
      <Row className="picRow">
        <Col md={{ offset: 1 }}>
          {" "}
          <div className="image">
            <div className="imagewords">Let's Make it Together</div>
            <img
              src={IMG1}
              height={150}
              width={150}
              alt="Logo"
              className="logoImage"
            />
          </div>
        </Col>
        <Col>
          <img src={IMG2} alt="Pic 1" height={250} width={250} />
        </Col>
        <Col>
          <img src={IMG3} alt="Pic 2" height={250} width={250} />
        </Col>
        <Col>
          <img src={IMG4} alt="Pic 3" height={250} width={250} />
        </Col>
        <Col>
          <img src={IMG5} alt="Pic 4" height={250} width={250} />
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center" md={{ span: 10, offset: 1 }}>
          <a href="/about" className="about">
            About
          </a>
          <a
            href=" https://www.instagram.com/hbm_flowercity"
            className="instagram"
          >
            <BsInstagram size="20px" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <a href="/gallery" className="gallery">
            Gallery
          </a>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <a href="/contact" className="contact">
            Contact
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
