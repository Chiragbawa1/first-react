import React, { useState, useEffect } from "react";
import "./style.css";

const Gallery = () => {
  const [Num, setnum] = useState(0);
  const [Num3, setnum3] = useState(0);
  const [Num2, setnum2] = useState(0);
  const [Num4, setnum4] = useState(0);

 useEffect(() => {
    document.title = `Chats(${Num})`;
    if (Num > 30) {
      setnum(0);
    }
  });

  /*--------------------------------*/
  /*--------------------------------*/
  /*--------------------------------*/
  console.log("hellos side");
  console.log("hellos sidessssssssssss");

  const Incre = () => {
    setnum(Num + 1);
  };
  const Decre = () => {
    if (Num > 0) {
      setnum(Num - 1);
    } else {
      setnum(0);
    }
  };
  /*--------------------------------*/
  /*--------------------------------*/
  /*--------------------------------*/
  const Incre3 = () => {
    setnum3(Num3 + 1);
  };
  const Decre3 = () => {
    if (Num3 > 0) {
      setnum3(Num3 - 1);
    } else {
      setnum3(0);
    }
  };

  const Incre2 = () => {
    setnum2(Num2 + 1);
  };
  const Decre2 = () => {
    if (Num2 > 0) {
      setnum2(Num2 - 1);
    } else {
      setnum3(0);
    }
  };
  const Incre4 = () => {
    setnum4(Num4 + 1);
  };
  const Decre4 = () => {
    if (Num4 > 0) {
      setnum4(Num4 - 1);
    } else {
      setnum4(0);
    }
  };
  return (
    <>
      <div className="container-fluid inner-gallery">
        <div className="row">
          <h1 className="text-white py-4 px-5">Our Glasses</h1>
          <div className="col-md-4 px-5 py-5  ">
            <div className="box py-5 text-center ">
              <img src={process.env.PUBLIC_URL + "g-8.png"} alt="" />
              <div className="items ">
                <h3>
                  <i
                    class="fa-solid fa-minus border border-2 border-dark"
                    onClick={Decre}
                  ></i>
                </h3>
                <input type="text" value={Num} className="text-center" />
                <h3>
                  <i
                    class="fa-solid fa-plus border border-2 border-dark my-1"
                    onClick={Incre}
                  ></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-5 py-5 ">
            <div className="box py-5 text-center">
              <img src={process.env.PUBLIC_URL + "g-2.png"} alt="" />
              <div className="items ">
                <h3>
                  <i
                    class="fa-solid fa-minus border border-2 border-dark"
                    onClick={Decre2}
                  ></i>
                </h3>
                <input type="text" value={Num2} className="text-center" />
                <h3>
                  <i
                    class="fa-solid fa-plus border border-2 border-dark my-1"
                    onClick={Incre2}
                  ></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-5  py-5">
            <div className="box py-5 text-center">
              <img src={process.env.PUBLIC_URL + "g-6.png"} alt="" />
              <div className="items ">
                <h3>
                  <i
                    class="fa-solid fa-minus border border-2 border-dark"
                    onClick={Decre4}
                  ></i>
                </h3>
                <input type="text" value={Num4} className="text-center" />
                <h3>
                  <i
                    class="fa-solid fa-plus border border-2 border-dark my-1"
                    onClick={Incre4}
                  ></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 px-5 py-5  ">
            <div className="box py-5 text-center">
              <img src={process.env.PUBLIC_URL + "g-2.png"} alt="" />
              <div className="items">
                <h3>
                  <i
                    class="fa-solid fa-minus border border-2 border-dark"
                    onClick={Decre3}
                  ></i>
                </h3>
                <input type="text" value={Num3} className="text-center" />
                <h3>
                  <i
                    class="fa-solid fa-plus border border-2 border-dark my-1"
                    onClick={Incre3}
                  ></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-5 py-5 ">
            <div className="box py-5 text-center">
              <img src={process.env.PUBLIC_URL + "g-6.png"} alt="" />
              <div className="items">
                <h3>
                  <i class="fa-solid fa-minus border border-2 border-dark"></i>
                </h3>
                <input type="text" />
                <h3>
                  <i
                    class="fa-solid fa-plus border border-2 border-dark my-1"
                    onClick={Incre}
                  ></i>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-5  py-5">
            <div className="box py-5 text-center">
              <img src={process.env.PUBLIC_URL + "g-7.png"} alt="" />
              <div className="items ">
                <h3>
                  <i class="fa-solid fa-minus border border-2 border-dark  "></i>
                </h3>
                <input type="text" />
                <h3>
                  <i
                    class="fa-solid fa-plus border border-2 border-dark my-1"
                    onClick={Incre}
                  ></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
