import React, { useRef } from "react";
import IMG from "../../images/logo.png";
import "./Nav.css";
import { FaTimes, FaBars } from "react-icons/fa";

function Nav() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <a href="/" size="10px" className="logo">
          <img src={IMG} alt="Logo" className="logo" height={80} width={100} />
        </a>
        <nav ref={navRef}>
          <a href="/contact">Contact</a>

          <a href="/gallery">Gallery</a>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Nav;
