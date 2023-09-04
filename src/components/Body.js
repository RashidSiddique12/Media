import React, { useEffect, useState } from "react";
import "./body.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

const BodyComponent = () => {
  const [toggleText, setToggleText] = useState("Think!");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToggleText((prevText) => (prevText === "Think!" ? "Want!" : "Think!"));
    }, 1500); // Toggle every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="body-container">
      <div className="left-content">
        <h1 className="mainhead">
          We Create <br />
          What you <span className="sty">{toggleText}</span>
        </h1>

        <div>
          <p className="learnmore">
            Elevate Your Digital Presence With <br />
            Exceptional Web Development Solutions <br />
            <div className="learnmore-q">Your Success, Our Expertise!</div>
            <br />
            <br />
            <button className="learn-more-btn">Know More &#9662;</button>
          </p>
        </div>

        <div className="quote" data-aos="fade-up">
          <p className="quotep">TRANSFORM YOUR ONLINE ASPIRATIONS </p>
          <p className="quotep">INTO REALITY WITH OUR UNRIVALED</p>
          {/* <hr /> */}
          <p className="quotep">WEB DEVELOPMENT PORWESS.</p>
          <p className="quotep">EXPERIENCE THE FUTURE OF WEB SOLUTIONS </p>
        </div>
      </div>

      <div className="review-section">
        <div className="reviewBody">
          <h2>Our History</h2>
          <div className="about__cards">
            <article className="about__card " id="one" data-aos="fade-up">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Months</small>
            </article>
            <article className="about__card" id="two" data-aos="fade-down">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>7+</small>
            </article>

            <article className="about__card " id="three" data-aos="fade-up">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>

              <small>10+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
