import React from 'react';
import "./style.css";
const Banner = () => {
  return (
    <>
<div className="container-fluid  inner-banner d-flex align-items-center px-5 ">
    <div className="row px-5">
<h1 className='px-4'>Welcome to </h1>
<h1 className='px-4 text-white'>Glass Shop</h1>
<div className="btn1 px-4 mx-3 py-2 ">
<button className='px-5 text-dark rounded bg-warning border-0 py-4'>Order Now</button>
</div>
    </div>
</div>
    </>
  )
}

export default Banner;