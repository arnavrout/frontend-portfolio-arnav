import React from 'react'
import './Footer.css'

import footerLogo from '../../assets/arnav-logo.png'
import userIcon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img className='arnav-logo' src={footerLogo} alt="footer logo" />
            <p>I am a software developer with over 3 years of experience specialized in frontend</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={userIcon} alt="user icon" />
                <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Arnav Rout. All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
