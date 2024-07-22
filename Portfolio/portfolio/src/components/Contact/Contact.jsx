import React from 'react';
import './Contact.css';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <hr className='hr' />
      <h1 className='heading'>
        Contact
      </h1>
      <div className='footer'>
        <div className="end1">
          <div className='icon-container'><FaPhoneVolume className='icon' /></div>          
          <h2>Phone & Mobile</h2>
          <p><a href="tel:+919585123409"><b>+91 95851 23409</b></a></p>
        </div>
        <div className="end1">
          <div className='icon-container'><IoIosMail className='icon' /></div>          
          <h2>Email</h2>
          <p><a href="mailto:sajin0904@gmail.com">sajin0904@gmail.com</a></p>
        </div>
        <div className="end1">
          <div className='icon-container'><FaMapLocationDot className='icon' /></div>
          <h2>Location</h2>
          <p><b>Nagercoil</b></p>
        </div>
        <div className="end1">
          <div className='icon-container'><FaLinkedinIn className='icon' /></div>          
          <h2>LinkedIn</h2>
          <p><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><b>linkedin.com/in/yourprofile</b></a></p>
        </div>
        <div className="end1">
          <div className='icon-container'><FaGithub className='icon' /></div>
          <h2>GitHub</h2>
          <p><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><b>github.com/yourprofile</b></a></p>
        </div>
      </div>
      <hr className='hr' />
    </>
  );
};

export default Contact;
