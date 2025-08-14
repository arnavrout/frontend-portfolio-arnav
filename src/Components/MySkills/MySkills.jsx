import React from 'react'
import './MySkills.css'

import themePattern from '../../assets/theme_pattern.svg';
import mySkillsData from '../../assets/mySkills_data'
import arrowIcon from '../../assets/arrow_icon.svg';

const MySkills = () => {
  return (
    <div id='skills' className='mySkills'>
      <div className="mySkills-title">
        <h1>Technical Skills</h1>
        <img src={themePattern} alt="theme image" />
      </div>
      <div className="mySkills-container">
        {mySkillsData.map((skills, index) => {
            return (
                <img key={index} src={skills.w_img} alt=''/>
            )
        })}
      </div>
    </div>
  )
}

export default MySkills
