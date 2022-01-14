import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    AOS.init();
    
    return (
        
        <div>

            <div className="container">
        <div className="m-5 row d-flex justify-content-between align-items-center">
            <div className="col-md-6 about">
                <img data-aos="fade-right" className=" about-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJheYFfrIxjHmf75uvqVJvrPm3i-Iau-rnPA&usqp=CAU" alt="" />
            </div>
            <div data-aos="fade-left" className="col-md-5 about-description text-white bg-dark">
                  <h2 className='text-center'>About Us</h2><br/>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                  
            </div>
        </div>
        </div>
        </div>
    );
};

export default About;