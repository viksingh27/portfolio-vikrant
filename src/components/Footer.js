import React from "react";
import "./Footer.css";

const Footer = () => {
  const goToLinkedIn = () => {
    window.open(" https://www.linkedin.com/in/vikrant-singh-80882a15a/");
  };
  return (
    <div className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Reach Us</h3>
          <p>Email: singhvikrant19951227@gmail.com</p>
          <p style={{ cursor: "pointer" }} onClick={goToLinkedIn}>
            LinkedIn: https://www.linkedin.com/in/vikrant-singh-80882a15a/
          </p>
          <p>Location: Mumbai, India</p>
          <p>Address: Marol Bahvani Nagar East, India</p>
          <p>Pin Code: 400059</p>
        </div>
        <div className="footer-section">
          <h3>Hobby</h3>
          <p>Playing virtual games</p>
          <p>Playing football</p>
          <p>Coding</p>
          <p>Travelling</p>
        </div>
        <div className="footer-section" id="achievements">
          <h3>Achievements</h3>
          <div className="achievement">
            <p>
              Secured 2nd place in the CodeSlam 2019 competition organized by
              Aptech , as part of a team of five, serving as the
              Front-end Developer.
            </p>
          </div>
          <div className="achievement">
            <p>
              Achieved 3rd place in a hackathon organized by IortaTechnologies,
              participating as a Front-end Developer among 15 competing teams.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Vikrant. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
