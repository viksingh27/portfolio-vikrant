import React from "react";
import "./HomeSection.css";
import man from "../../../assets/man.png";
import blob1 from "../../../assets/Dual_blob.png";

const HomeSection = ({ id }) => {
  return (
    <section id={id} className="section">
      <div className="home-page">
        <div className="text-container">
          <h1 className="main-text">I'm a Frontend Developer</h1>
          <h2 className="main-sub-text">Vikrant Singh Chauhan</h2>
          <p className="sub-text">
            I am a dedicated Front-End Developer with 3 years of experience and
            proficiency in front-end frameworks, databases, and back-end
            development. I bring a proactive attitude, strong work ethic, and
            effective communication skills.
          </p>
        </div>
        <div className="image-container">
          <img src={blob1} className="bottom-image" alt="Bottom Image" />
          <img src={man} className="top-image" alt="Illustrator Head" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
