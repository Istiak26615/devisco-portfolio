import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Project = (props) => {
    AOS.init();
    const{id,name,projectType,image}=props.project
    return (
        
        <div data-aos="flip-left" className="m-5 col-md-9 project justify-content-center">
  
                <div className='d-flex'>
                    <img className="card-img" src={image} alt=""></img>
                    <div className="text-center details">
                <h3>{name}</h3>
                    <small>{projectType}</small><br/>
                    <Link to={`/projectDetails/${id}`} >
                    <button className="btn btn-primary ">View Details</button>
                </Link>
                </div>
                </div>
                
            </div>
           
    );
};

export default Project;