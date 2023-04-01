import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import { ImageData } from "../components/Carousel/ImageData";
import IMG9 from "../images/profile2.jpg";

function Home({ show }) {
  return (
    <>
      {!show && (
        <>
          <div className="desktopView">
            <Header />

            <Carousel slides={ImageData} />
            <div className="about-second">
              <div className="word">
                <h1 className="about-title">Meet Harolyn Munford</h1>
                As a child I had a natural inclination toward art but I never
                really had a love for it. Fast forward about 20 years and just
                for fun I take a free floral arrangement class and my life is
                forever changed. The joy and happiness that I got from creating
                a simple arrangement was such an eye opening experience. It made
                me realize that I could do this for a living and bring what I
                was feeling to others. That's how HBM Flower City was born. With
                the concept that life could be just a bit more beauiful, just by
                adding flowers.
              </div>
              <div className="third">
                <LazyLoadImage
                  src={IMG9}
                  alt="flower image"
                  height={800}
                  width={600}
                />
              </div>
            </div>
            <Footer />
          </div>
          <div className="tabletView">
            <Header />
            <Carousel slides={ImageData} />
            <div className="about-second">
              <div className="word">
                <h1 className="about-title">Meet Harolyn Munford</h1>
                As a child I had a natural inclination toward art but I never
                really had a love for it. Fast forward about 20 years and just
                for fun I take a free floral arrangement class and my life is
                forever changed. The joy and happiness that I got from creating
                a simple arrangement was such an eye opening experience. It made
                me realize that I could do this for a living and bring what I
                was feeling to others. That's how HBM Flower City was born. With
                the concept that life could be just a bit more beauiful, just by
                adding flowers.
              </div>
              <div className="third">
                <LazyLoadImage
                  src={IMG9}
                  alt="flower image"
                  height={400}
                  width={300}
                />
              </div>
            </div>
            <Footer />
          </div>
          <div className="mobileView">
            <Header />
            <Carousel slides={ImageData} />
            <div className="about-second">
              <div className="word">
                <h1 className="about-title">Meet Harolyn Munford</h1>
                As a child I had a natural inclination toward art but I never
                really had a love for it. Fast forward about 20 years and just
                for fun I take a free floral arrangement class and my life is
                forever changed. The joy and happiness that I got from creating
                a simple arrangement was such an eye opening experience. It made
                me realize that I could do this for a living and bring what I
                was feeling to others. That's how HBM Flower City was born. With
                the concept that life could be just a bit more beauiful, just by
                adding flowers.
              </div>
              <div className="third">
                <LazyLoadImage
                  src={IMG9}
                  alt="flower image"
                  height={300}
                  width={175}
                />
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
