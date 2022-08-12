import React from 'react';
// import x from '../../assets/cpp.png'
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    projectUrl,
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={projectUrl} className='project-external-link' target="_blank">
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                <a href={projectUrl} className='project-yt-link' target="_blank">
                    Project Link!
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
