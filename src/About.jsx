import React from "react";
import AboutImg from "../src/images/about.jpg";
import AboutImg1 from "../src/images/about1.jpg";

const About = () => {
  return (
    <>
      <div className="reactweb_section" id="about">
        <div className="reactweb_about">
          <div className="container">
            <div className="wrapper">
              <div className="left">
                <div className="image">
                  <img src={AboutImg} alt="" />
                  <div className="numbers year">
                    <div className="wrapper">
                      <h3><span className="reactweb_counter">18</span></h3>
                      <span className="name">Years of<br />Success</span>
                    </div>
                  </div>
                  <div className="numbers project">
                    <div className="wrapper">
                      <h3><span className="reactweb_counter">9</span>K</h3>
                      <span className="name">Total<br />Projects</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="title wow">
                  <span>I'm a Designer</span>
                  <h3>I Can Design Anything You Want</h3>
                </div>
                <div className="text wow">
                  <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                </div>
                <div className="reactweb_button wow">
                  <a className="anchor" href="#contact"><span>Hire Me</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="brush_1 wow">
            <img src="img/brushes/about/1.png" alt="" />
          </div>
          <div className="brush_2 wow">
            <img src="img/brushes/about/2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="reactweb_section">
        <div className="reactweb_skills">
          <div className="container">
            <div className="wrapper">
              <div className="left">
                <div className="reactweb_main_title wow" data-align="left">
                  <span>Design is Life</span>
                  <h3>I Develop Skills Regularly to Keep Me Update</h3>
                  <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
                </div>
                <div className="dodo_progress wow">
                  <div className="progress_inner" data-value="85" data-color="#f75023">
                    <span>
                      <span className="label opened">Illustrator</span>
                      <span className="number" style={{ right: "15%"}}>85%</span>
                    </span>
                    <div className="background">
                      <div className="bar open">
                        <div className="bar_in" style={{ width: '85%', backgroundColor: 'rgb(247, 80, 35)' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="95" data-color="#1cbe59">
                    <span>
                      <span className="label opened">Photoshop</span>
                      <span className="number" style={{ right: '5%' }}>95%</span>
                    </span>
                    <div className="background">
                      <div className="bar open">
                        <div className="bar_in" style={{ width: '95%', backgroundColor: 'rgb(28, 190, 89)' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="75" data-color="#8067f0">
                    <span>
                      <span className="label opened">Figma</span>
                      <span className="number" style={{ right1: '25%'}}>75%</span>
                    </span>
                    <div className="background">
                      <div className="bar open">
                        <div className="bar_in" style={{ width: '75%', backgroundColor: 'rgb(128, 103, 240)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={AboutImg1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>



   </>
 ) 
}

export default About;