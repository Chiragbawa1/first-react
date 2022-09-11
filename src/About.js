import React from 'react';
import "./style.css";

const About = (props) => {
  return (
    <>
    <div className="container py-5 inner-about" id="about">
        <div className="row">
            <h1 className='text-center'>{props.heading}</h1>
            <div className="col-md-6 pt-5">
                <img src={process.env.PUBLIC_URL+"chef.png"}/>
            </div>
            <div className="col-md-6 d-flex  justify-content-center flex-column">
                <p>Chef Kemal har mer enn 40 år erfaring i bransjen. Han trenger ingen introduksjon, de fleste vet allerede hvem han er. Han har jobbet for mange kjente nasjonale og internasjonale restauranter. Hans spesialitet er Beyti Kebab, som er en kjent tyrkisk rett. Chef Kemal har nå ankommet Fredrikstad for å servere befolkningen smakfull mat fra det Tyrkiske kjøkken. Velkommen til oss.</p>
           <div className="btn1 mt-4">
          <a href="" className="px-5 py-4  text-white border border-1 rounded">Bestill Her</a>

           </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About;