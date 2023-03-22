import React, { useState } from "react";
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
  const length = slides.length;
  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  // const nextImage = () => {
  //   const newIndex = (currentImage + 1) % images.length;
  //   setCurrentImage(newIndex);
  // };

  // const prevImage = () => {
  //   const newIndex = (currentImage + images.length - 1) % images.length;
  //   setCurrentImage(newIndex);
  // };

  // return (
  //   <div className="carousel">
  //     <img src={images[currentImage]} alt={`Image ${currentImage}`} />
  //     <button onClick={prevImage}>Prev</button>
  //     <button onClick={nextImage}>Next</button>
  //   </div>
  // );
  return (
    <section className="carousel">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {ImageData.map((slide, index) => {
        return (
          <div
            className={index === currentImage ? "slide active" : "slide"}
            key={index}
          >
            {index === currentImage && (
              <img src={slide.src} alt={slide.alt} className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
