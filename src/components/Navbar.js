import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("Scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://img.favpng.com/0/10/21/smiley-emoticon-square-favicon-clip-art-png-favpng-9BjHMWPDZwxmpRakXJHjRN4J2.jpg"
        alt="dropdown"
      />
    </div>
  );
}

export default Navbar;
