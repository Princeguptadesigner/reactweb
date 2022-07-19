import React from "react";
import heroImg from "../src/images/herobg.jpg";
import PrinceImg from "../src/images/avatar.png";
import Process from "./Process";

const Herobanner = () => {
  return (
    <>
      <div className="reactweb_section" id="home">
        <div className="reactweb_hero">
          <div className="background" data-img-url="img/slider/1.jpg" style={{backgroundImage: `url(${heroImg})`}}></div>
          <div className="container">
            <div className="content">
              <div className="details">
                <div className="hello">
                  <h3 className="orangeText">Hello, I'm</h3>
                </div>
                <div className="name">
                  <h3>James Smith</h3>
                </div>
                <div className="job">
                  <p>A <span className="greenText">Creative Designer</span> From <span className="purpleText">New York</span></p>
                </div>
                <div className="text">
                  <p>I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
                </div>
                <div className="button">
                  <div className="reactweb_button">
                    <a className="anchor" href="#about"><span>About Me</span></a>
                  </div>
                </div>
              </div>
              <div className="avatar">
                <div className="image">
                  <img src={PrinceImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <Process/>

      

    </>
  );
}

export default Herobanner;
