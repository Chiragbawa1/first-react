import React from 'react';
import "./style.css";



export const Offer = () => {
  return (
    <>
    <div className="container-fluid offer">
        <div className="row">
            <div className="col-md-6 bg-warning py-5 d-flex align-items-center justify-content-center">
            <img src={process.env.PUBLIC_URL+"about-img.png"} alt="" />

            </div>
            <div className="col-md-6 bg-warning text-white py-5 px-5 d-flex align-items-center justify-content-center flex-column">
                <h1>BOOK
OUR
SPECIAL
OFFER</h1>
<button className='bg-danger px-5 py-3 text-white border border-0'>Order Now</button>
            </div>
        </div>
    </div>
    </>
  )
}
export default Offer;
