import React from "react";

const Processcard = (props) => {
  return (
    <>
      <li className="wow">
        <div className="list_inner">
          <div className="icon">
            <span>
              <img className="brush" src={props.imgurl} alt="" />
              <img className="svg replaced-svg" src={props.svgbg} alt="" />
            </span>
          </div>
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <div className="text">
            <p>{props.desc}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Processcard;