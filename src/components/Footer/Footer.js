import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IMG1 from "../../images/logo.png";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="desktopView">
        <Container fluid style={{ background: "#fff7f4" }} className="footer">
          <Row>
            <Col>
              <div className="imageFooter">
                <div className="imagewords">Let's Create Together!</div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div className="footer-quote">
                  Want to work with HBM Flower City? <br /> Send us an email at{" "}
                  <a href="mailto:hbmflowercity@gmail.com">
                    hbmflowercity@gmail.com
                  </a>
                  <span> </span>about your floral needs or click the{" "}
                  <a href="/contact">inquire</a> link to tell us about your
                  event.
                </div>

                <a
                  href=" https://www.instagram.com/hbm_flowercity"
                  className="instagram"
                >
                  <BsInstagram size="40px" />
                </a>
                <div className="third">
                  <LazyLoadImage
                    src={IMG1}
                    alt="flower image"
                    height={200}
                    width={200}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="tabletView">
        <Container fluid style={{ background: "#fff7f4" }} className="footer">
          <Row>
            <Col>
              <div className="imageFooter">
                <div className="imagewords">Let's Create Together!</div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div className="word">
                  <div>Want to work with HBM Flower City?</div> Send us an email
                  at{" "}
                  <a
                    href="mailto:hbmflowercity@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "goldenrod",
                      cursor: "pointer",
                    }}
                  >
                    hbmflowercity@gmail.com
                  </a>{" "}
                  about your floral needs or click the{" "}
                  <a
                    href="/contact"
                    style={{
                      textDecoration: "none",
                      color: "goldenrod",
                      cursor: "pointer",
                    }}
                  >
                    inquire
                  </a>{" "}
                  link to tell us about your event.
                </div>

                <a
                  href=" https://www.instagram.com/hbm_flowercity"
                  className="instagram"
                >
                  <BsInstagram size="40px" />
                </a>
                <div className="third">
                  <LazyLoadImage
                    src={IMG1}
                    alt="flower image"
                    height={200}
                    width={200}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mobileView">
        <Container fluid style={{ background: "#fff7f4" }} className="footer">
          <Row>
            <Col>
              <div className="imageFooter">
                <div className="imagewords">Let's Create Together!</div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div className="word">
                  <div>Want to work with HBM Flower City?</div> Send us an email
                  at{" "}
                  <a
                    href="mailto:hbmflowercity@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "goldenrod",
                      cursor: "pointer",
                    }}
                  >
                    hbmflowercity@gmail.com
                  </a>{" "}
                  about your floral needs or click the{" "}
                  <a
                    href="/contact"
                    style={{
                      textDecoration: "none",
                      color: "goldenrod",
                      cursor: "pointer",
                    }}
                  >
                    inquire
                  </a>{" "}
                  link to tell us about your event.
                </div>

                <a
                  href=" https://www.instagram.com/hbm_flowercity"
                  className="instagram"
                >
                  <BsInstagram size="40px" />
                </a>
                <div className="third">
                  <LazyLoadImage
                    src={IMG1}
                    alt="flower image"
                    height={200}
                    width={200}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
