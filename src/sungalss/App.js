import React from 'react';
import Banner from './banner';
import Nav from "./nav";
import About from"./about";
import Gallery from './gallery';
import Offer from "./Offer";
import Footer from './Footer';
import Mainfooter from './Mainfooter';

const App = () => {
  return (
    <>
<Nav/>
<Banner/>
<About/>
<Gallery/>
<Offer/>
<Footer/>
<Mainfooter/>
    </>
  )
}

export default App;