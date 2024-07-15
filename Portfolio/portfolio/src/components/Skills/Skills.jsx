import React from 'react'
import './Skills.css'
import pro1 from '../../asserts/file1.JPG'
import pro2 from '../../asserts/File2.JPG'
import pro3 from '../../asserts/file3.JPG'

const Skills = () => {
  return (
    <>
      <hr />
      <h1>Project Details</h1>
      <div className='car'>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={pro1} alt="" />
              <h1>Landing Page</h1>

            </div>
            <div className="flip-card-back">
              <h1>Landing Page Project</h1>
              <b>Description:</b>
              <p className='rrr mt-1'>Created a responsive landing page using HTML, CSS, and Bootstrap with a modern design and interactive features.</p>
              <button>GitHub Repository: <a href="https://github.com/Sajin09/karka-fsd/tree/728f050a66e611f114b3ecea05abf3182f896b15/HTML/COLORIB" target='blank'>Github-link</a></button>

            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={pro2} alt="" />
              <h1>Landing Page</h1>

            </div>
            <div className="flip-card-back">
              <h1>Landing Page Project</h1>
              <b>Description:</b>
              <p className='rrr mt-1'>Created a responsive landing page using HTML, CSS, and Bootstrap with a modern design, interactive features, and various UI elements.</p>
              <button>GitHub Repository: <a href="https://github.com/Sajin09/karka-fsd/tree/728f050a66e611f114b3ecea05abf3182f896b15/Pursue/PAP7/project" target='blank'>Github-link</a></button>

            </div>
          </div>
        </div>
      </div>
      <div className='car'>
      <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={pro3} alt="" />
              <h1>Crud Operation</h1>

            </div>
            <div className="flip-card-back">
              <h1>Crud Operation</h1>
              <b>Description:</b>
              <p className='rrr mt-1'>Developed a CRUD (Create, Read, Update, Delete) operations project using HTML, CSS, jQuery, and JavaScript. This project allows users to dynamically add, edit, and delete data entries with a responsive and intuitive user interface.</p>
              <button>GitHub Repository: <a href="https://github.com/Sajin09/karka-fsd/tree/728f050a66e611f114b3ecea05abf3182f896b15/JQuery/CRUD%20operation" target='blank'>Github-link</a></button>

            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">FLIP CARD</p>
              <p>Hover Me</p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills