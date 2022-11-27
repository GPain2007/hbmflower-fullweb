import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ show }) {
  return (
    <>
      {!show && (
        <>
          <div>Home</div>
        </>
      )}
    </>
  );
}

export default Home;
