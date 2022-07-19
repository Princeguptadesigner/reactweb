import React, { useState } from "react";
import ContactImg from "../src/images/contact.png";
import ContactLImg from "../src/images/contact_left.png";  

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
    subject: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`
    );
  };

  return (
    <>
      <div className="reactweb_section" id="contact">
        <div className="reactweb_contact">
          <div className="container">
            <div className="reactweb_main_title" data-align="center">
              <span>Contact Me</span>
              <h3>I Want To Hear From You</h3>
              <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
            </div>
            <div className="contact_inner">
              <div className="left wow">
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <svg className="icon-location orangeText" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 160C174.3 160 160 174.3 160 192C160 209.7 174.3 224 192 224C209.7 224 224 209.7 224 192C224 174.3 209.7 160 192 160zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 48C112.5 48 48 112.5 48 192C48 204.4 52.49 223.6 63.3 249.2C73.78 274 88.66 301.4 105.8 329.1C134.2 375.3 167.2 419.1 192 451.7C216.8 419.1 249.8 375.3 278.2 329.1C295.3 301.4 310.2 274 320.7 249.2C331.5 223.6 336 204.4 336 192C336 112.5 271.5 48 192 48V48z"/></svg>
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>New Delhi</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <svg className="icon-mail-1 greenText" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128C512 92.65 483.3 64 448 64zM64 112h384c8.822 0 16 7.178 16 16v22.16l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47 .0156L48 150.2V128C48 119.2 55.18 112 64 112zM448 400H64c-8.822 0-16-7.178-16-16V212.7l136.1 113.4C204.3 342.8 229.8 352 256 352s51.75-9.188 71.97-25.98L464 212.7V384C464 392.8 456.8 400 448 400z"/></svg>
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span><a href="#">princegupta.designer@gmail.com</a></span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <svg className="icon-phone purpleText" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480.3 320.3L382.1 278.2c-21.41-9.281-46.64-3.109-61.2 14.95l-27.44 33.5c-44.78-25.75-82.29-63.25-108-107.1l33.55-27.48c17.91-14.62 24.09-39.7 15.02-61.05L191.7 31.53c-10.16-23.2-35.34-35.86-59.87-30.19l-91.25 21.06C16.7 27.86 0 48.83 0 73.39c0 241.9 196.7 438.6 438.6 438.6c24.56 0 45.53-16.69 50.1-40.53l21.06-91.34C516.4 355.5 503.6 330.3 480.3 320.3zM463.9 369.3l-21.09 91.41c-.4687 1.1-2.109 3.281-4.219 3.281c-215.4 0-390.6-175.2-390.6-390.6c0-2.094 1.297-3.734 3.344-4.203l91.34-21.08c.3125-.0781 .6406-.1094 .9531-.1094c1.734 0 3.359 1.047 4.047 2.609l42.14 98.33c.75 1.766 .25 3.828-1.25 5.062L139.8 193.1c-8.625 7.062-11.25 19.14-6.344 29.14c33.01 67.23 88.26 122.5 155.5 155.5c9.1 4.906 22.09 2.281 29.16-6.344l40.01-48.87c1.109-1.406 3.187-1.938 4.922-1.125l98.26 42.09C463.2 365.2 464.3 367.3 463.9 369.3z"/></svg>
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>+91 8800724933</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="right wow">
                <div className="fields">
                  <form onSubmit={formSubmit} className="contact_form" id="contact_form">
                    <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                    <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                    <div className="input_list">
                      <ul>
                        <li>
                          <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            onChange={InputEvent}
                            value={data.fullname}
                          />
                        </li>
                        <li>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="Your Email"
                          />
                        </li>
                        <li>
                          <input
                            id="phone"
                            type="number"
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="Your Phone"
                          />
                        </li>
                        <li>
                          <input
                            id="subject"
                            type="text"
                            name="subject"
                            value={data.subject}
                            onChange={InputEvent}
                            placeholder="Subject"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="message_area">
                      <textarea
                        id="message"
                        rows="3"
                        name="msg"
                        value={data.msg}
                        onChange={InputEvent}
                        placeholder="Write your message here"
                      ></textarea>
                    </div>
                    <div className="reactweb_button">
                      <button id="send_message" className="submit_button" type="submit">
                        <span>Submit Now</span>
                      </button>
                      {/* <a id="send_message" href="" type="submit"><span>Submit Now</span></a> */}
                    </div>
                  </form>
                </div>
              </div>
              <div className="brush_2 wow"><img src={ContactImg} alt="" /></div>
            </div>
          </div>
          <div className="brush_1 wow"><img src={ContactLImg} alt="" /></div>
        </div>
      </div>
    </>
  );
}

export default Contact;