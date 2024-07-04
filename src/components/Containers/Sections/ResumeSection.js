import React, { useState, useEffect } from "react";
import "./ResumeSection.css";
import { Image } from "antd";

const ResumeSection = ({ id }) => {
  const [deviceType, setDeviceType] = useState("desktop");
  console.log("resize", deviceType);
  useEffect(() => {
    const checkDeviceType = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setDeviceType("mobile");
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDeviceType();

    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);
  return (
    <section id={id} className="resume-section">
      <h1 className="resume-heading">Resume </h1>
      <div className="resume-wrapper">
        <div className="text-section-resume">
          <p>
            Utilize my expertise in front-end development, leveraging advanced
            techniques and best practices, to create highly responsive,
            user-friendly interfaces that enhance user engagement and
            experience.
          </p>
        </div>
        <div className="image-section-resume">
          <Image.PreviewGroup
            items={[
              "https://resume-vikrant.s3.ap-south-1.amazonaws.com/resume-vikrant-1.jpg",
              "https://resume-vikrant.s3.ap-south-1.amazonaws.com/resume-vikrant-2.jpg",
              "https://resume-vikrant.s3.ap-south-1.amazonaws.com/resume-vikrant-3.jpg",
            ]}
          >
            <Image
              width={
                deviceType == "mobile"
                  ? 200
                  : 0 || deviceType == "tablet"
                  ? 400
                  : 400
              }
              height={
                deviceType == "mobile"
                  ? 300
                  : 0 || deviceType == "tablet"
                  ? 500
                  : 500
              }
              src="https://resume-vikrant.s3.ap-south-1.amazonaws.com/resume-vikrant-blur.jpg"
              preview={{
                src: "https://resume-vikrant.s3.ap-south-1.amazonaws.com/resume-vikrant-1.jpg",
              }}
            />
          </Image.PreviewGroup>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
