import React from "react";
import "./founder.css";
import user1 from "../img/user1.png";
import AOS from "aos";
import "aos/dist/aos.css";

function FounderPage() {
  const serviceContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "10vh",
    padding: "20px",
  };

  const hrStyle = {
    width: "80%",
    margin: "20px 0px",
  };
  return (
    <div style={serviceContainerStyle}>
      <div data-aos="fade-up">
        <h1>Founder</h1>
      </div>
      <div style={hrStyle}>
        <hr />
      </div>

      <div className="profile-card">
        <div className="upc">
          <div className="gradiant"></div>
          <div className="profile-down">
            <img src={user1} alt="" />
            <div className="profile-title">Rashid</div>
            <div className="profile-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              accusamus rem eum, odio voluptatibus fugiat?
            </div>
            <div className="profile-button">
              <a href=" ">Contact me</a>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="upc">
          <div className="gradiant"></div>
          <div className="profile-down">
            <img src={user1} alt="" />
            <div className="profile-title">Rashid</div>
            <div className="profile-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              accusamus rem eum, odio voluptatibus fugiat?
            </div>
            <div className="profile-button">
              <a href=" ">Contact me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderPage;
