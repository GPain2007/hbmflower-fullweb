import React, { useState } from "react";

import { Container, Button } from "react-bootstrap";
import Header from "../components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact-Form/ContactForm";

function Contact() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Header />
      <Carousel />
      <Container fluid className="contact_page text-center">
        <ContactForm show={modalShow} onHide={() => setModalShow(false)} />
        <Button
          className="contact_button"
          size="lg"
          onClick={() => setModalShow(true)}
        >
          Press for Wedding and Floral Inquiry
        </Button>
        <Footer />
      </Container>
    </>
  );
}

export default Contact;
