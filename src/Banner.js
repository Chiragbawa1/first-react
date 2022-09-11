import React from "react";
import "./style.css";

 const Banner = (props) => {
  return (
    <>
      <div className="container-fluid px-0 inner-banner d-flex align-items-center justify-content-center text-white text-center">
        <div className="row">
          <h2>{props.banner}</h2>
          <h1 className="text-warning">{props.ban}</h1>
          <div className="btn mt-4">
          <a href="" className="px-5 py-4  text-white border border-1 rounded">Bestill Her</a>
        </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
