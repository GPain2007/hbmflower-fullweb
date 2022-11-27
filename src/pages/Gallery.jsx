import React from "react";

function Gallery({ show }) {
  return (
    <>
      {!show && (
        <>
          <div>Gallery</div>
        </>
      )}
    </>
  );
}

export default Gallery;
