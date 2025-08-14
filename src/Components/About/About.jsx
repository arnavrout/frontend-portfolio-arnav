import React from 'react'
import './About.css';
import themePattern from '../../assets/theme_pattern.svg';
import profileImage from '../../assets/about-portfolio-image.jpg';

const About = () => {
  return (
      <div id='about' className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={themePattern} alt="About Theme" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profileImage} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Software Developer with 3+ years of experience building scalable, responsive web applications using React.js, Redux, and JavaScript. I specialize in translating complex business requirements into clean, maintainable, and testable code.</p>
                    <p>I thrive in agile environments, collaborating with teams to deliver high-quality products on time. I offer strong front-end skills, attention to detail, and a commitment to creating efficient, user-friendly solutions.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width: "90%"}}/>
                    </div>
                     <div className="about-skill">
                        <p>JavaScript</p><hr style={{width: "80%"}}/>
                    </div>
                     <div className="about-skill">
                        <p>React JS</p><hr style={{width: "80%"}}/>
                    </div>
                     <div className="about-skill">
                        <p>TypeScript</p><hr style={{width: "60%"}}/>
                    </div>
                     <div className="about-skill">
                        <p>Angular</p><hr style={{width: "70%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>03+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>20+</h1>
                <p>MAJOR TECHNICAL SKILLS</p>
            </div>
            <hr />
             <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
      </div>
  )
}

export default About
