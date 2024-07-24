import React, { useEffect } from 'react';
import './Tools.css';
import img1 from '../../asserts/vscode.png';
import img2 from '../../asserts/postman.png';
import img3 from '../../asserts/compass.png';
import img4 from '../../asserts/github.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tools = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div className='row m-0 m-auto'>
        <h1 className='hh1'>Tools We Use</h1>
        <div data-aos="fade-down-right"></div>
        <div className='body'>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-down-right">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://yt3.googleusercontent.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj"
                  className="cover-image"
                  alt="VS Code"
                />
              </div>
              <img
                src={img1}
                className="character"
                alt="VS Code PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-down-right">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://img-b.udemycdn.com/course/750x422/5596742_65a7_6.jpg"
                  className="cover-image"
                  alt="Postman"
                />
              </div>
              <img
                src={img2}
                className="character"
                alt="Postman PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-down-left">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fnl5odr3413k5dddlz1dd.png"
                  className="cover-image"
                  alt="Compass"
                />
              </div>
              <img
                src={img3}
                className="character"
                alt="Compass PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-down-left">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"
                  className="cover-image"
                  alt="GitHub"
                />
              </div>
              <img
                src={img4}
                className="character"
                alt="GitHub PNG"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools;
