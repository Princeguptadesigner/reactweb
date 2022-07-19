import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import ServiceImg6 from "../src/images/service6.png";
import ServiceImg1 from "../src/images/service1.png";

const Services = () => {
  return (
    <>
      <div className="reactweb_section" id="service">
        <div className="reactweb_services">
          <div className="container">
            <div className="reactweb_main_title" data-align="center">
              <span>Services</span>
              <h3>What I Do for Clients</h3>
              <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
            </div>
            <div className="service_list">
              <ul>
                {Sdata.map((val, ind) => {
                  return <Card key={ind} svgurl={val.svgurl}  imgurl={val.imgurl} title={val.title} pricetext={val.pricetext} price={val.price} desc={val.desc} />;
                })}
              </ul>
            </div>
          </div>
          <div className="brush_1 wow"><img src={ServiceImg6} alt="" /></div>
          <div className="brush_2 wow"><img src={ServiceImg1} alt="" /></div>
        </div>
      </div>
    </>
  );
}

export default Services;