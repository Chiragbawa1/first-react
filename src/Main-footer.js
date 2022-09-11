import React from "react";
import "./style.css";

const Main = (props) => {
  return (
    <>
      <div className="container-fluid main-footer text-white">
        <div className="row">
          <p className="text-center">{props.mains}</p>
        </div>
      </div>
    </>
  );
};

export default Main;
