import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import Sajin1 from '../images/Sajin1.png'

const Section = () => {

  const name = ['Front-end Developer', 'Web Developer', 'React Developer']
  return (
    <div className='background row m-0 p-0'>
      <body>
        <div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </body>
      <div className='col-lg-7'>
        <div className='flex1 mx-3'>
          <p>Hi, I am</p>
          <p>Sajin R</p>
          <div className='d-flex aaa'>
            <div>I am a</div>
            <span className='mx-2'>
              <TypewriterComponent
                options={{
                  strings: name,
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                  wrapperClassName: 'TextGradient'
                }}
              >

              </TypewriterComponent>
            </span>
          </div>
        </div>
      </div>
      <div className='image col-lg-5'>
        <img src={Sajin1}></img>
      </div>

    </div>
  )
}

export default Section
