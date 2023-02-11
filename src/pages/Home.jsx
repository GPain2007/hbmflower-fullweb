import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import IMG1 from "../images/IMG_7698.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Logo from "../images/logo.png";
import IMG6 from "../images/IMG_7902.jpg";
import IMG7 from "../images/IMG_7965.jpg";
import Footer from "../components/Footer/Footer";

function Home({ show }) {
  return (
    <>
      {!show && (
        <>
          <div className="desktopView">
            <div className="home"></div>
            <div className="second">
              <LazyLoadImage
                src={IMG1}
                alt="flower image"
                height={600}
                width={600}
              />
              <div className="third">
                <img
                  src={Logo}
                  alt="Logo"
                  height={110}
                  width={100}
                  style={{ marginLeft: "200px" }}
                />
                <div className="word">
                  "When Life gives you lemons, make lemonade.
                  <br /> When life gives you flowers, make wedding decorations"
                </div>
              </div>
            </div>
            <div className="fourth">
              <Row>
                <Col md={{ offset: 2 }} className="firstpic">
                  <img src={IMG7} alt="Pic 7" height={525} width={555} />
                  <div
                    style={{ paddingTop: "20px", paddingRight: "2rem" }}
                    className="d-flex justify-content-end"
                  >
                    <a
                      href="/contact"
                      style={{
                        textDecoration: "none",
                        color: "goldenrod",
                        fontFamily: "GlacialIndifferenceRegular",
                        fontSize: "20px",
                      }}
                    >
                      Get a Free Quote Today!
                    </a>
                  </div>
                </Col>
                <Col className="secondpic">
                  <img src={IMG6} alt="Pic 6" height={315} width={350} />
                  <div style={{ paddingTop: "20px", paddingLeft: "2rem" }}>
                    <a
                      href="/about"
                      style={{
                        textDecoration: "none",
                        color: "goldenrod",
                        paddingBottom: "20px",
                        fontFamily: "GlacialIndifferenceRegular",
                        fontSize: "20px",
                      }}
                    >
                      See My Work
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
            <Footer />
          </div>
          <div className="mobileView">
            <div className="home"></div>
            <div className="second">
              <LazyLoadImage
                src={IMG1}
                alt="flower image"
                height={200}
                width={175}
              />
              <div className="third">
                <img
                  src={Logo}
                  alt="Logo"
                  height={110}
                  width={100}
                  style={{ marginLeft: "30px" }}
                />
                <div className="word">
                  "When Life gives you lemons, make lemonade.
                  <br /> When life gives you flowers, make wedding decorations"
                </div>
              </div>
            </div>
            <div className="fourth">
              <Row>
                <Col md={{ offset: 2 }} className="firstpic">
                  <img src={IMG7} alt="Pic 7" height={125} width={155} />
                  <div
                    style={{ paddingTop: "20px", paddingRight: "2rem" }}
                    className="d-flex justify-content-end"
                  >
                    <a
                      href="/contact"
                      style={{
                        textDecoration: "none",
                        color: "goldenrod",
                        fontFamily: "GlacialIndifferenceRegular",
                        fontSize: "18px",
                      }}
                    >
                      Get a Free Quote Today!
                    </a>
                  </div>
                </Col>
                <Col className="secondpic">
                  <img src={IMG6} alt="Pic 6" height={175} width={180} />
                  <div style={{ paddingTop: "20px", paddingLeft: "2rem" }}>
                    <a
                      href="/about"
                      style={{
                        textDecoration: "none",
                        color: "goldenrod",
                        paddingBottom: "20px",
                        fontFamily: "GlacialIndifferenceRegular",
                        fontSize: "18px",
                      }}
                    >
                      See My Work
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
