import React from "react";
import "./HomeSection.css";
import HeadIllustrator from "../../../assets/image (1).png";
import blob1 from "../../../assets/Dual_blob.png";
import blob2 from "../../../assets/Dual_blob (4).png";
import blob3 from "../../../assets/Dual_blob (3).png";
import blob4 from "../../../assets/Dual_blob (2).png";
import blob5 from "../../../assets/Dual_blob (1).png";
// import blob1 from "../../../assets/Dual_blob.png"

const HomeSection = ({ id }) => {
  return (
    <section id={id} className="section">
      <div className="home-page">
        <div className="text-container">
          <h1 className="main-text">I'm a Frontend Developer</h1>
          <p className="sub-text">
            I am a dedicated Front-End Developer with 3 years of experience and
            proficiency in front-end frameworks, databases, and back-end
            development. I bring a proactive attitude, strong work ethic, and
            effective communication skills.
          </p>
        </div>
        <div className="image-container">
          <img src={blob1} className="bottom-image" alt="Bottom Image" />
          {/* <img
            src={HeadIllustrator}
            className="top-image"
            alt="Illustrator Head"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
