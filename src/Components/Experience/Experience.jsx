import React from 'react'
import './Experience.css';

import themePattern from '../../assets/theme_pattern.svg';

const Experience = () => {
  return (
    <div id='experience' className='experiences'>
      <div className="experiences-title">
        <h1>My Experiences</h1>
        <img src={themePattern} alt="theme image" />
      </div>
      <div className="experiences-container">
      <div className="experience-one">
        <div className="experience-header">
          <strong>Software Engineer, TelSpiel Communications</strong>
          <strong>Nov 2023 - Present</strong>
        </div>
         <ul>
          <li>Built and deployed multiple projects from scratch using <strong>React.js</strong>, enabling faster feature rollouts and improving system scalability.</li>
          <li>Integrated backend APIs for the <strong>SMS platform</strong>, enhancing message delivery speed and reliability for thousands of daily transactions.</li>
          <li>Developed and maintained <strong>RCS platform modules</strong> in <strong>Angular</strong>, meeting custom client requirements and ensuring a seamless user experience.</li>
          <li>Collaborated with cross-functional teams in agile sprints, delivering high-impact features that strengthened client engagement and retention.</li>
          <li>Contributed to business growth by implementing features that improved operational efficiency and reduced turnaround time.</li>
        </ul>
      </div>

      <div className="experience-two">
        <div className="experience-header">
          <strong>Software Developer, Think Future Technologies</strong>
          <strong>Feb 2022 - Oct 2023</strong>
        </div>
        <ul>
          <li>Strengthened core skills in <strong>JavaScript</strong>, <strong>React.js</strong>, and <strong>Angular</strong>, transitioning from entry-level to production-ready development work.</li>
          <li>Created responsive, user-friendly interfaces using <strong>HTML5</strong>, <strong>CSS3</strong>, and modern JavaScript frameworks, improving usability across projects.</li>
          <li>Assisted in API integrations and converted design wireframes into high-quality, cross-browser-compatible applications.</li>
          <li>Supported the delivery of projects that streamlined company workflows, saving team hours and boosting productivity.</li>
          <li>Helped improve client satisfaction by contributing to polished, reliable features that aligned with business objectives.</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Experience
