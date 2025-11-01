import React from 'react'
import './Projects.css';

import themePattern from '../../assets/theme_pattern.svg';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={themePattern} alt="theme image" />
      </div>

      <div className="projects-container">
        <div className="project-one">
          <div className="project-header">
            <strong>Travel with Arnav</strong>
            <strong>AI-Powered Travel Itinerary Planner</strong>
          </div>
          <p className="project-summary">
            Travel with Arnav is an AI-powered web app that helps you plan your entire vacation itinerary 
            based on your preferences — from destinations and activities to food recommendations and cultural insights. 
            It acts as your personal travel companion, making trip planning intelligent, interactive, and effortless.
          </p>

          <ul>
            <li>
              Built using <strong>React</strong>, <strong>TypeScript</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS </strong> 
              with <strong>Framer Motion</strong> for smooth animations and a responsive UI.
            </li>
            <li>
              Integrated <strong>Google Gemini AI</strong> to generate personalized travel itineraries based on 
              destination, duration, budget, and user preferences.
            </li>
            <li>
              Utilized <strong>Supabase</strong> for database and authentication with <strong>React Router DOM</strong>, 
              <strong>React Markdown</strong>, and <strong>Lucide React</strong>; working on more features for future enhancements.
            </li>
          </ul>

          <div className="project-links">
            <a 
              href="https://github.com/arnavrout/travel-with-arnav" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
            <a 
              href="https://travel-with-arnav.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Project
            </a>
          </div>
        </div>


        <div className="project-one">
          <div className="project-header">
            <strong>Medi-Connect</strong>
            <strong>Healthcare Platform</strong>
          </div>
          <p className="project-summary">
            Medi-Connect is a healthcare platform that connects patients and doctors for both online and 
            offline consultations. It offers easy appointment booking, real-time updates, and a simple interface, 
            making healthcare access faster and more convenient for patients anytime, anywhere.
          </p>

          <ul>
            <li>
              Designed and developed the frontend using <strong>TypeScript</strong>, <strong>React.js</strong>, and <strong>Tailwind CSS</strong> 
              for a clean and responsive UI.
            </li>
            <li>
              Implemented appointment booking, patient-doctor communication, and real-time updates to 
              improve healthcare accessibility.
            </li>
            <li>
              Currently working on backend and database development to support scalability and reliability.
            </li>
          </ul>

          <div className="project-links">
            <a 
              href="https://github.com/arnavrout/medi-connect" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
            <a 
              href="https://medi-connect-neon.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
