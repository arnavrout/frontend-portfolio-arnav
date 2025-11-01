import React from 'react'
import './Hero.css'
import profileImg from '../../assets/arnavdp-image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id='home' className='hero'>

      {/* Background animated text */}
      <motion.div 
        className="background-text"
        animate={{ opacity: [0.6, 0.4, 0.25] }}
  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
        AI Enthusiast
      </motion.div>

      {/* Profile Image without glow */}
      <img
        src={profileImg}
        alt="profile-image"
        className="hero-img"
      />

      <h1><span>I'm Arnav Rout,</span> software developer based in Noida</h1>
      <p>Hey there, this is Arnav. A software developer with 3+ years of experience specially into frontend</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Let's connect
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a 
            href="https://drive.google.com/file/d/1_jbuk5DlStwfolD0jFozxWqOrM14oxKH/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            My resume
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
