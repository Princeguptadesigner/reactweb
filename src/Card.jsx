import React from "react";


const Card = (props) => {
  return (
    <>
      <li className="wow">
        <div className="list_inner">
          <span className="icon">
            <img className="svg replaced-svg" src={props.svgurl} alt="" />
            <img className="back" src={props.imgurl} alt="" />
          </span>
          <div className="title">
            <h3>{props.title}</h3>
            <span className="price">{props.pricetext} <span>{props.price}</span></span>
          </div>
          <div className="text">
            <p>{props.desc}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;