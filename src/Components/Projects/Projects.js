import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';


const Projects = () => {
    const[projects, setProjects]=useState([])
    useEffect(()=>{
        fetch('./skills.JSON')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <div className=" container projects justify-content-center">
            <h1 className="text-center text-white">Services</h1>
                  
        <div className="justify-content-center text-white">       
            {
                projects.map(project=><Project key={project.id} project={project}></Project>)
            }
        </div>
        </div>
    );
};

export default Projects;



