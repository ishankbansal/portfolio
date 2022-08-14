import React from 'react';
import './Skills.css';
import cpp from '../../assets/cpp.png'

const SkillCard = ({ skillName, skillUrl }) => {
    return (
        <div className='skill'>
            <img src={skillName === "C++" ? cpp : skillUrl} alt='skill' />
            <p>{skillName}</p>
        </div>
    );
};

export default SkillCard;