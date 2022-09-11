import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-dark text-white py-5 d-flex justify-content-center align-items-center">
        <div className="row py-5">
            <div className="col-md-4 px-5">
                <h2>Subscribe Now</h2>
                <div className="input py-2">
                <input type="text" className='py-2'/>
                <button className='py-2 px-3'> Submit</button>
                </div>
            </div>
            <div className="col-md-4 px-5">
                <h2>Links</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.</p>
            </div>
            <div className="col-md-4 px-5">
                <h2>Contact us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.</p>

            </div>
        </div>
    </div>
    </>
  )
}
export default Footer;
