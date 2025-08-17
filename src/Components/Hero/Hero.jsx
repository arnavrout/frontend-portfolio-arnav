import React from 'react'

import './Hero.css'
import profileImg from '../../assets/arnavdp-image.png'

import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profileImg} alt="profile-image" />
      <h1><span>I'm Arnav Rout,</span> software developer based in Noida</h1>
      <p>Hey there, this is Arnav. A software develoepr with 3+ years of experience specially into frontend</p>

      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Let's connect </AnchorLink></div>
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
