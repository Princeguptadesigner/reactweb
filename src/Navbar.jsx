import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="menu">
        <ul className="anchor_nav">
          <li className="current"><a href="#home">Home</a></li>
          <li className=""><a href="#about">About</a></li>
          {/* <li className=""><a href="#portfolio">Portfolio</a></li> */}
          <li className=""><a href="#service">Service</a></li>
          {/* <li className=""><a href="#blog">Blog</a></li> */}
          <li className=""><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;