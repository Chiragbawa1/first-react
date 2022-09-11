import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
  <div className="container-fluid px-5">
    <a className="navbar-brand" href="#"><img src={process.env.PUBLIC_URL+"logo.png"}/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
        <li className="nav-item">
        <Link to="/om" className='nav-link active'>Om</Link>

        </li>
        <li className="nav-item">
        <Link to="/Galleri" className='nav-link active'>Galleri</Link>

        </li>
        <li className="nav-item">
        <Link to="/Meny" className='nav-link active'>Meny</Link>

        </li>
        <li className="nav-item">
        <Link to="/about" className='nav-link active'> About</Link>
        </li>

      
      
  
      </ul>
  
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav;