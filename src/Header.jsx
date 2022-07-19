import React, {useEffect, useState } from 'react';
import Navbar from "./Navbar";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className={scroll ? "reactweb_header animate" : " reactweb_header bg-black"}>
      <div className="container"> 
        <div className="inner">
          <div className="logo">
            <a href="#">Prince Kumar Gupta</a>
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;