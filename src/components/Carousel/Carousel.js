import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { ImageData } from "./ImageData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// import localIMG from "../../images/IMG_7677.jpg";

// const images = [
//   localIMG,
//   "https://picsum.photos/401/300",
//   "https://picsum.photos/402/300",
//   "https://picsum.photos/403/300",
//   "https://picsum.photos/404/300",
// ];

const Carousel = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const mod = (n, m) => {
    let result = n % m;
    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrentImage((currentImage + 1) % ImageData.length);
    }, 5000);
  }, [currentImage]);

  //Old slide InFo
  // const length = slides.length;
  // const nextSlide = () => {
  //   setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  // };

  // const prevSlide = () => {
  //   setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  // };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <section className="carousel">
      {/* <FaArrowAltCircleLeft className="left-arrow" />
      <FaArrowAltCircleRight className="right-arrow" /> */}
      {ImageData.map((slide, index) => {
        // return (
        //   <div
        //     className={index === currentImage ? "slide active" : "slide"}
        //     key={index}
        //   >
        //     {index === currentImage && (
        //       <img src={slide.src} alt={slide.alt} className="image" />
        //     )}
        //   </div>
        // );
        const indexLeft = mod(currentImage - 1, ImageData.length);
        const indexRight = mod(currentImage + 1, ImageData.length);
        let className = "";

        if (index === currentImage) {
          className = "image image--active";
        } else if (index === indexRight) {
          className = "image image--right";
        } else if (index === indexLeft) {
          className = " image image--left";
        } else {
          className = "image";
        }

        return (
          <div style={{ height: "1000px" }}>
            <img
              src={slide.src}
              alt={slide.alt}
              className={className}
              key={slide.id}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
