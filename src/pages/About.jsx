import React from "react";

function About({ show }) {
  return (
    <>
      {!show && (
        <>
          <div>About</div>
        </>
      )}
    </>
  );
}

export default About;
