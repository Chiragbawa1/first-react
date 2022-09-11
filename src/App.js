import React from "react";
import "./style.css";
import Nav from "./Nav";
import Banner from "./Banner";
import About from "./About";
import Gallery from "./gallery";
import Images from "./Images";
import Footer from "./Footer";
import Main from "./Main-footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Nav />
      <Banner banner={"Velkommen til"} ban={"Istanbul Grill House"} />
      <About heading={"OM ISTANBUL GRILL HOUSE"} />
      <Gallery
        text={0}
        image1={process.env.PUBLIC_URL + "k.png"}
        image2={process.env.PUBLIC_URL + "k.png"}
        image3={process.env.PUBLIC_URL + "k.png"}
        image4={process.env.PUBLIC_URL + "k.png"}
      />
      <Images
        Image={"GALLERI"}
        first={process.env.PUBLIC_URL + "GALLERY5.jpg"}
        second={process.env.PUBLIC_URL + "GALLERY5.jpg"}
        third={process.env.PUBLIC_URL + "GALLERY5.jpg"}
      />
      <Footer />
      <Main
        mains={
          "@2022 Istanbulgrill house Alie rettigheter forebeholdes Design og utvikiling:omdata.world"
        }
      />

      {/* <Routes>
      <Route path="/" element={<Nav />} />
      <Route path="About" element={<About />} />
      <Route path="gallery" element={<Gallery  />} />
    </Routes> */}
    </>
  );
};
export default App;
