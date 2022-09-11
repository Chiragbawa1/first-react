import React, { useState, useEffect } from "react";
import "./style.css";

const Gallery = (props) => {
  const [title, uptitle] = useState(0);
  const [title1, uptitle1] = useState(0);
  const [title3,uptitle3]=useState(0);
  useEffect(() => {
    console.log("Hii");
  });
  
  const work=()=>{
    uptitle3(title3+1)
  }
  const not=()=>{
    uptitle3(title3-1)
  }

  const incre = () => {
    uptitle(title + 1);
  };
  const decre = () => {
    if(title>0)
    {
    uptitle(title - 1);
    }
    else{
      uptitle(0);
    }
  };
  const Yes = () => {
    uptitle1(title1 + 1);
  };
  const No = () => {
    uptitle1(title1 - 1);
  };

  return (
    <>
      <div className="container inner-gallery">
        <div className="row">
          <div className="col-md-3 ">
            <div className="borders  border border-3 d-flex align-items-center flex-column justify-content-center">
              {/* <img src={process.env.PUBLIC_URL + "k.png"} /> */}
              <img src={props.image1}></img>
              <h2 onClick={incre}>+</h2>
              <input type="text" value={title} className="text-center" />
              <h2 onClick={decre}>-</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="borders border border-3 d-flex  flex-column align-items-center justify-content-center">
              {/* <img src={process.env.PUBLIC_URL + "k.png"} /> */}
              <img src={props.image2}></img>

              <h2 onClick={Yes}>+</h2>
              <input type="text" value={title1} className="text-center" />
              <h2 onClick={No}>-</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="borders border border-3 d-flex flex-column align-items-center justify-content-center">
              {/* <img src={process.env.PUBLIC_URL + "k.png"} /> */}
              <img src={props.image3}></img>

              <h2 onClick={work}>+</h2>
              <input type="text" value={title3} className="text-center" />
              <h2 onClick={not}>-</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="borders border border-3 d-flex align-items-center justify-content-center">
              {/* <img src={process.env.PUBLIC_URL + "k.png"} /> */}
              <img src={props.image4}></img>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
