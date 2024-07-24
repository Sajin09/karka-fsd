import React, { useEffect } from 'react';
import './Education.css';
import board from '../../asserts/board.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='row m-0'>
      <div data-aos="zoom-in">
        <div className='education row'>
          <hr className='hr' />
          <legend className='legend'>Educational Details</legend>

          <div className="edu col-lg-6 col-md-5 col-sm-12 col-12" data-aos="fade-right">
            <h1>EDUCATION</h1>
            <p>
              Education is the most powerful weapon <br />
              you can use to change the world.
            </p>
          </div>
          <div className="edu1 col-lg-6 col-md-7 col-sm-12 col-12" data-aos="fade-left">
            <section>
              <h1>2016 - 2020</h1>
              <h3><b>Bachelor of Engineering (BE)</b></h3>
              <p>
                Electronics and Communication Engineering. <br />
                St. Xavier’s Catholic College of Engineering,
                Chunkankadai. <br />
                CGPA - 7.2 <br />
                Year of passing - 2020
              </p>
            </section>
            <section>
              <h1>2015 - 2016</h1>
              <h3><b>Higher Secondary School Certificate (HSC)</b></h3>
              <p>
                S.M.R.V. Higher Secondary School, Vadasery. <br />
                Percentage – 70 % <br />
                Year of passing - 2016
              </p>
            </section>
            <section>
              <h1>2013 - 2014</h1>
              <h3><b>Secondary School Leaving Certificate (SSLC)</b></h3>
              <p>
                S.M.R.V. Higher Secondary School, Vadasery. <br />
                Percentage – 82.8 % <br />
                Year of passing - 2014
              </p>
            </section>
          </div>
          <div className='images' data-aos="fade-up">
            <img src={board} alt="board" />
          </div>
          <hr className='hr' />
        </div>
      </div>
    </div>
  );
}

export default Education;
