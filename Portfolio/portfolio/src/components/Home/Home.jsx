import React, { useEffect } from 'react';
import './Home.css';
import sajin from '../../asserts/Sajin.png';
import Typewriter from 'typewriter-effect';
import { IoIosCloudDownload } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Sajin.R - Full Stack DEV.pdf';
        link.download = 'Sajin_R_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='home row m-0' data-aos="fade-up-right">
            <div className='image col-lg-4 col-md-4 col-sm-12'>
                <img src={sajin} alt="Sajin" />
            </div>
            <div className='content col-lg-8 col-md-8 col-sm-12' data-aos="fade-up-left">
                <section>
                    <div className='row'>
                        <div className='col-lg-2'></div>
                        <div className='col-lg-10 namesection'>
                            <div className='hi'>Hi,</div>
                            <div className='name'>I'm Sajin R.</div>
                            <div className='typewriter-container'>
                                <Typewriter
                                    options={{
                                        strings: ['MERN STACK Developer', 'FULL STACK Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <div className='para'>
                                As a MERN stack developer, you build full-stack web applications using MongoDB, Express.js, React, and Node.js. You structure and style web pages with HTML, CSS, and Bootstrap, add interactivity with JavaScript, and create reusable components with React. Your back-end development skills in Node.js and Express.js, along with data management using MongoDB and Mongoose, enable you to develop efficient and scalable web applications from start to finish.
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <button className='about'>About Me</button>
                    <button className='about1' onClick={handleDownload}>
                        <IoIosCloudDownload />
                        <span style={{ marginLeft: "10px", fontSize: "20px" }}>Resume</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
