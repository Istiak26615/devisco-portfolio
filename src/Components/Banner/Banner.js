import React from 'react';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Banner = () => {
    AOS.init();
    return (
      <div className="header-container ">
      <div className="">
        <div className="row d-flex header-img align-items-center justify-content-center">
          <div data-aos="fade-up" className="col-md-6">
            <div data-aos="fade-up">
            <h1 className="title p-3">
              Your Food <br /> Our Concern
            </h1>
            
            </div>
            
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
    

    
    );
};

export default Banner;