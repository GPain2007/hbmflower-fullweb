import React from "react";
import Footer from "../components/Footer/Footer";
import { Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import IMG9 from "../images/profile2.jpg";
import LogoAbout from "../images/IMG_9940.jpg";
import IMG10 from "../images/IMG_9958.jpg";
import IMG11 from "../images/IMG_9997.jpg";
import Carousel from "../components/Carousel/Carousel";
import { ImageData } from "../components/Carousel/ImageData";

function About({ show }) {
  return (
    <>
      {!show && (
        <>
          <div className="desktopView">
            <Carousel slides={ImageData} />

            <div className="fourth">
              <Row>
                <Col md={{ offset: 1, span: 3 }} className="firstpic">
                  <img
                    src={IMG10}
                    alt="Pic 7"
                    height={575}
                    width={400}
                    style={{ marginBottom: "10px", paddingRight: "15px" }}
                  />
                </Col>
                <Col md={{ span: 3 }}>
                  <img src={IMG11} alt="Pic 6" height={315} width={360} />
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
                      See My Gallery
                    </a>
                    <br />
                    <a
                      href="/contact"
                      style={{
                        textDecoration: "none",
                        color: "goldenrod",
                        fontFamily: "GlacialIndifferenceRegular",
                        fontSize: "20px",
                      }}
                    >
                      Get a Consultation
                    </a>
                  </div>

                  <div
                    style={{ paddingTop: "20px", paddingRight: "1rem" }}
                    className="d-flex justify-content-end"
                  ></div>
                </Col>

                <Col className="secondpic" md={{ span: 3 }}>
                  <img src={LogoAbout} alt="Pic 10" height={575} width={400} />
                </Col>
              </Row>
            </div>
            <Footer />
          </div>
          <div className="mobileView">
            <div className="about-home"></div>
            <div className="about-second">
              <div className="word">
                <h1 className="about-title">Meet Harolyn Munford</h1>
                As a child I had a natural inclination
                <br /> toward art butI never really had a love for it. <br />{" "}
                live in the Fast forward about 20 years and just for fun <br />
                I take a free floral arrangement class <br /> and my life is
                forever changed.
                <br />
                The joy and happiness that I got from creating
                <br />
                a simple arrangement was such an eye opening experience. <br />
                It made me realize that I could do this for a living and bring
                this same
              </div>
              <div className="third">
                <LazyLoadImage
                  src={IMG9}
                  alt="flower image"
                  height={100}
                  width={100}
                />
              </div>
            </div>
            <div className="fourth">
              <Row>
                <Col md={{ offset: 2 }} className="firstpic">
                  <img
                    src={IMG10}
                    alt="Pic 7"
                    height={105}
                    width={155}
                    style={{ marginBottom: "10px" }}
                  />
                  <img src={LogoAbout} alt="Pic 10" height={150} width={155} />
                  <div
                    style={{ paddingTop: "20px", paddingRight: "2rem" }}
                    className="d-flex justify-content-end"
                  ></div>
                </Col>
                <Col className="secondpic">
                  <img src={IMG11} alt="Pic 6" height={185} width={150} />
                  <div style={{ paddingTop: "0px" }}>
                    <a
                      href="/about"
                      style={{
                        textDecoration: "none",
                        color: "goldenrod",

                        fontFamily: "GlacialIndifferenceRegular",
                        fontSize: "18px",
                      }}
                    >
                      See My Gallery
                    </a>
                    <br />
                    <a
                      href="/contact"
                      style={{
                        textDecoration: "none",
                        color: "goldenrod",
                        fontFamily: "GlacialIndifferenceRegular",
                        fontSize: "18px",
                      }}
                    >
                      Get a Consultation
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

export default About;
