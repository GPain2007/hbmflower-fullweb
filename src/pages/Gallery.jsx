import React from "react";

function Gallery({ show }) {
  return (
    <>
      {!show && (
        <>
          <div className="desktopView">Gallery</div>
          <div className="mobileView"> Mobile Gallery</div>
        </>
      )}
    </>
  );
}

export default Gallery;
