import React, { useState } from 'react'
import "./style.css";


const Footer = () => {
   
  return (
    <>
    <div className="container-fluid footer text-white py-5 px-5">
        <div className="row">
            <div className="col-md-3">
                <ul className='list-unstyled'>
                    <li className='fs-3'>Adresse</li>
                    <li>Brogata 10 1608</li>
                    <li>Fredrikstad
</li>
                </ul>
            </div>
            <div className="col-md-3">
                <ul className='list-unstyled'>
                    <li className='fs-3'>Åpningstider</li>
                    <li>All dager :13:00 - 22:00</li>
                    <button   className='px-5 mt-2 py-3' >Bestill Na</button>
                </ul>
            </div>
            <div className="col-md-3">
                <ul className='list-unstyled'>
                <li className='fs-3'>Kontakt oss</li>
                <li>+47 925 45 009</li>
                <li> Instanbul Grill House</li>
                </ul>
            </div>
            <div className="col-md-3">
            <ul className='list-unstyled'>
                <li className='fs-3'>Bedriftsinfo
</li>
                <li>Privacy</li>
                <li>Terms and conditions</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;