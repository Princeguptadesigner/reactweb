import React from "react";
import Processcard from "./Processcard";
import Sdataprocess from './Sdataprocess';

const Process = () => {
  return (
    <>
      <div className="reactweb_section" id="process">
        <div className="reactweb_process">
          <div className="container">
            <div className="list">
              <ul>
                {Sdataprocess.map((val, ind) => {
                  return <Processcard key={ind} imgurl={val.imgurl} svgbg={val.svgbg} title={val.title} desc={val.desc} />  
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;