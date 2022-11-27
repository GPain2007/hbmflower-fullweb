import React from "react";

function Contact({ show }) {
  return (
    <>
      {!show && (
        <>
          <div>Contact</div>
        </>
      )}
    </>
  );
}

export default Contact;
