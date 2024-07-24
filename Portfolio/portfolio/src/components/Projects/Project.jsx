import React, { useEffect } from 'react';
import './Project.css'; // Assuming you have CSS in a separate file
import img1 from '../../asserts/html.png';
import img2 from '../../asserts/js.png';
import img3 from '../../asserts/css.png';
import img4 from '../../asserts/react.png';
import img5 from '../../asserts/bootstrap.png';
import img6 from '../../asserts/node.png';
import img7 from '../../asserts/express.png';
import img8 from '../../asserts/mongodb.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className='row m-0 m-auto'>
        <h1 className='hh1'>Technology I Learnt</h1>
        <div className='body'>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-up-right">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png"
                  className="cover-image"
                  alt="HTML"
                />
              </div>
              <img
                src={img1}
                className="character"
                alt="HTML PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-up-right">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhQ_Y_Zm5bPpdiOQKyOnasiTRO3LuA8zQjg&shttps://miro.medium.com/v2/resize:fit:828/format:webp/1*f2i47G95nVCx71KzM1iXlg.png"
                  className="cover-image"
                  alt="CSS"
                />
              </div>
              <img
                src={img3}
                className="character"
                alt="CSS PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-up-right">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"
                  className="cover-image"
                  alt="JavaScript"
                />
              </div>
              <img
                src={img2}
                className="character"
                alt="JavaScript PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-up-right">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://cdn.thenewstack.io/media/2022/05/600b72f9-react-1024x680.png"
                  className="cover-image"
                  alt="React"
                />
              </div>
              <img
                src={img4}
                className="character"
                alt="React PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-up-left">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/17101/course_17101_image.jpg"
                  className="cover-image"
                  alt="Bootstrap"
                />
              </div>
              <img
                src={img5}
                className="character"
                alt="Bootstrap PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-up-left">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://img-c.udemycdn.com/course/750x422/3591664_2f50_2.jpg"
                  className="cover-image"
                  alt="Node.js"
                />
              </div>
              <img
                src={img6}
                className="character"
                alt="Node.js PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-up-left">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://www.bytestechnolab.com/wp-content/uploads/2022/12/our-express-js-webapp-development.webp"
                  className="cover-image"
                  alt="Express.js"
                />
              </div>
              <img
                src={img7}
                className="character"
                alt="Express.js PNG"
              />
            </div>
          </div>
          <div className='col-lg-1 col-md-4 col-sm-6 col-12' data-aos="fade-up-left">
            <div className="card">
              <div className="wrapper">
                <img
                  src="https://newrelic.com/sites/default/files/2021-10/mongo_logo.jpg"
                  className="cover-image"
                  alt="MongoDB"
                />
              </div>
              <img
                src={img8}
                className="character"
                alt="MongoDB PNG"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
