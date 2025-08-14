import React from 'react'
import './Contact.css'

import themePattern from '../../assets/theme_pattern.svg';

import emailIcon from '../../assets/mail_icon.svg';
import callIcon from '../../assets/call_icon.svg';
import locationIcon from '../../assets/location_icon.svg';


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "578aa4b1-d6be-4863-9c72-653a4d0d8a2a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={themePattern} alt="theme image" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm always open to exciting opportunities where I can take on new challenges, contribute my skills, and deliver meaningful solutions. Let’s collaborate and create something impactful together</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={emailIcon} alt="email icon" /> <p>arnav10rout@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={callIcon} alt="call icon" /> <p>+91 8368398111</p>
                </div>
                <div className="contact-detail">
                    <img src={locationIcon} alt="location icon" /> <p>New Delhi, India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter Your Email" name="email" />
            <label htmlFor="">Write Your Message</label>
            <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
