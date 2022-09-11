import React from "react";
import "./style.css";
const About = () => {
  return (
    <>
      <div className="container py-5 inner-about">
        <div className="row">
          <div className="col-md-6 py-5 ">
            <h1>About our shop</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
            <button className="px-5 text-dark rounded bg-warning border-0 py-4">
              Order Now
            </button>
          </div>
          <div className="col-md-6">
            <img src={process.env.PUBLIC_URL+"about-img.png"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
