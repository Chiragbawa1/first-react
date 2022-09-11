import React from "react";
import "./style.css";

const Images = (props) => {
  return (
    <>
      <div className="container-fluid pt-5 d-flex align-items-center justify-content-center">
        <div className="row">
            <h1 className="text-center">{props.Image}</h1>
          <div className="col-md-4">
            <img src={props.first} className="py-5" />
          </div>
          <div className="col-md-4">
          <img src={props.second} className="py-5" />

          </div>
          <div className="col-md-4">
          <img src={props.third} className="py-5" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
