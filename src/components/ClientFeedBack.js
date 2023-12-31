import React from "react";
import "./clientFeedBack.css";
import IMG from "../img/user1.png";
// Import Swiper React components
//import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const data = [
  {
    avatar: IMG,
    name: "Avinash Pareek",
    review:
      "Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to us, he will guide you to the right direction.",
  },
  {
    avatar: IMG,
    name: "vishal",
    review:
      "Overall very pleased with Morales and Gustavo and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work.",
  },
  {
    avatar: IMG,
    name: "Omprakash ",
    review:
      "Web Designer Express did a great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. Their proven experience and excellence is the reason why our company would recommend Web Designer Express to anyone who is looking to create a customized website.",
  },
  {
    avatar: IMG,
    name: "Yuvraj",
    review:
      "My company just wanted to say that we were very impressed with the quality of the website, the price we paid compared to other web design company was extremely low. I love the finished product you provided us. I highly recommend you as a top website designer. Thank you, PS. Gus you are the best!!!",
  },
];

function ClientFeedBack() {
  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "10vh",
    padding: "20px",
  };

  const hrStyle = {
    width: "100%",
    margin: "20px 0px",
  };

  return (
    <div className="feedBackContainer">
      <div style={serviceContainerStyle}>
        <div data-aos="fade-up">
          <h1>Client FeedBack</h1>
        </div>
        <div style={hrStyle}>
          <hr />
        </div>
      </div>

      <section id="feedback" data-aos="fade-left">
        <Swiper
          className=" feedback__container mySwiper"
          navigation={true}
          modules={[Navigation]}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="feed">
                <div className="client__avatar">
                  <img src={avatar} alt="user" width="83px"></img>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

export default ClientFeedBack;
