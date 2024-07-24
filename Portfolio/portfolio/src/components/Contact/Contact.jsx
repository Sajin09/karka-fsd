import React, { useEffect } from 'react';
import './Contact.css';
import { FaPhoneVolume, FaMapLocationDot, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <hr className='hr' />
      <h1 className='heading'>Contact</h1>
      <div className='footer'>
        <div className="end1" data-aos="fade-down-right">
          <div className='icon-container'><FaPhoneVolume className='icon' /></div>          
          <h2>Phone & Mobile</h2>
          <p><a href="tel:+919585123409"><b>+91 95851 23409</b></a></p>
        </div>
        <div className="end1" data-aos="fade-down-right">
          <div className='icon-container'><IoIosMail className='icon' /></div>          
          <h2>Email</h2>
          <p><a href="mailto:sajin0904@gmail.com">sajin0904@gmail.com</a></p>
        </div>
        <div className="end1" data-aos="fade-down-right">
          <div className='icon-container'><FaMapLocationDot className='icon' /></div>
          <h2>Location</h2>
          <p><b>Nagercoil</b></p>
        </div>
        <div className="end1" data-aos="fade-down-right">
          <div className='icon-container'><FaLinkedinIn className='icon' /></div>          
          <h2>LinkedIn</h2>
          <p><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><b>Sajin R</b></a></p>
        </div>
        <div className="end1" data-aos="fade-down-right">
          <div className='icon-container'><FaGithub className='icon' /></div>
          <h2>GitHub</h2>
          <p><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><b>Sajin_09</b></a></p>
        </div>
      </div>
      <hr className='hr' />
    </>
  );
};

export default Contact;
