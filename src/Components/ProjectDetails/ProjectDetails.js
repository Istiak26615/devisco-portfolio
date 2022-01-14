import React from 'react';
import { useParams } from 'react-router';
import projectsData from '../../Data/Data';
import './ProjectDetails.css'

const ProjectDetails = () => {
    let { id } = useParams();
    const projects=projectsData.find(pj=>pj.id===id)
    
    return (
        <div className="text-center container details text-white">
            <h1>{projects.name}</h1>
            <h4>List</h4><br/>
            {projects.products1}<br/>
            {projects.products2}<br/>
            {projects.products3}<br/>
            {projects.products4}<br/>

        </div>
    );
};

export default ProjectDetails;