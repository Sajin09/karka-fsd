import React, { useEffect } from 'react';
import './Skills.css';
import pro1 from '../../asserts/file1.JPG';
import pro2 from '../../asserts/File2.JPG';
import pro3 from '../../asserts/file3.JPG';
import pro4 from '../../asserts/file4.JPG';
import pro5 from '../../asserts/file5.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <hr />
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h1 className='hh2'>Project Details</h1>
      </div>
      <div className='car'>
        <div className="flip-card" data-aos="flip-left">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={pro1} alt="Landing Page" />
              <h1>Landing Page</h1>
            </div>
            <div className="flip-card-back">
              <h1>Landing Page Project</h1>
              <b>Description:</b>
              <p className='rrr mt-1'>Created a responsive landing page using HTML, CSS, and Bootstrap with a modern design and interactive features.</p>
              <button>GitHub Repository: <a href="https://github.com/Sajin09/karka-fsd/tree/728f050a66e611f114b3ecea05abf3182f896b15/HTML/COLORIB" target='_blank' rel='noopener noreferrer'>Github-link</a></button>
            </div>
          </div>
        </div>
        <div className="flip-card" data-aos="flip-right">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={pro2} alt="Landing Page" />
              <h1>Landing Page</h1>
            </div>
            <div className="flip-card-back">
              <h1>Landing Page Project</h1>
              <b>Description:</b>
              <p className='rrr mt-1'>Created a responsive landing page using HTML, CSS, and Bootstrap with a modern design, interactive features, and various UI elements.</p>
              <button>GitHub Repository: <a href="https://github.com/Sajin09/karka-fsd/tree/728f050a66e611f114b3ecea05abf3182f896b15/Pursue/PAP7/project" target='_blank' rel='noopener noreferrer'>Github-link</a></button>
            </div>
          </div>
        </div>
      </div>
      <div className='car'>
        <div className="flip-card" data-aos="flip-left">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={pro5} alt="Crud Operation" />
              <h1>Crud Operation</h1>
            </div>
            <div className="flip-card-back">
              <h1>Crud Operation</h1>
              <b>Description:</b>
              <p className='rrr mt-1'>This project is a full-stack CRUD application with React on the front-end and Node.js with Express.js on the back-end, using MongoDB and Mongoose for data management. React components handle user interactions, and Axios manages HTTP requests. The Express server defines CRUD routes, with Mongoose handling database operations and updating the UI based on server responses.</p>
              <button>GitHub Repository: <a href="https://github.com/Sajin09/weboney-ui.git" target='_blank' rel='noopener noreferrer'>Github-UI</a></button>
              <button>GitHub Repository: <a href="https://github.com/Sajin09/weboney-api.git" target='_blank' rel='noopener noreferrer'>Github-API</a></button>
            </div>
          </div>
        </div>
        <div className="flip-card" data-aos="flip-right">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={pro4} alt="Swiggy Clone" />
              <h1>Swiggy Clone</h1>
            </div>
            <div className="flip-card-back">
              <h1>Swiggy Clone</h1>
              <b>Description:</b>
              <p className='rrr mt-1'>
                Built Swiggy clone with React.js (frontend), Node.js
                (backend), MongoDB. Included user auth, restaurant
                listings, menus, carts, orders.
                Ensured seamless integration of frontend and
                backend components, focusing on scalability,
                performance optimization, and responsive design
                principles for an efficient food delivery platform.
              </p>
              <button>GitHub Repository: <a href="https://github.com/Sajin09/karka-fsd/tree/0f0ec11803dd94c2970e0282af0366a61512279b/Swiggy" target='_blank' rel='noopener noreferrer'>Github-link</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;
