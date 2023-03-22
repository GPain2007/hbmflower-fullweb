// import React from "react";
// import { Col, Container } from "react-bootstrap";
// import Row from "react-bootstrap/Row";

// function Gallery({ show }) {
//   return (
//     <>
//       {/* <div className="desktopView" style={{ marginTop: "20px" }}>
//         <Container fluid className="waitingDes">
//           <Row>
//             <Col style={{ paddingLeft: "35px" }}>
//               Gallery of work in the process
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <div className="mobileView" style={{ marginTop: "20px" }}>
//         <Container className="waitingMob">
//           <Row>
//             <Col style={{ paddingLeft: "50px" }}>
//               Gallery of work in the process
//             </Col>
//           </Row>
//         </Container>
//       </div> */}

//     </>
//   );
// }

// export default Gallery;

import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { ImageData } from "../components/Carousel/ImageData";

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = ImageData;

  const handleImageClick = (image) => {
    setSelectedImage(image.src);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container fluid>
      <Row>
        {images.map((image) => (
          <Col sm={6} md={4} lg={3} key={image.id}>
            <Card className="my-2">
              <Card.Img
                variant="top"
                src={image.src}
                alt={image.alt}
                onClick={() => handleImageClick(image)}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="Selected" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Gallery;
