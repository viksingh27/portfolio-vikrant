// NeumorphismDiv.js
import React, { useState, useEffect } from "react";
import ShowMoreText from "react-show-more-text";
import "./Neomorphism.css";

const NeumorphismDiv = (props) => {
  // const { style } = props;
  // console.log("Style--->", props);
  // console.log("Style", style);
  const [deviceType, setDeviceType] = useState("desktop");
  // console.log("resize", deviceType);
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
  const styleCss =
    deviceType === "desktop"
      ? { height: props?.style?.height, width: props?.style?.width }
      : {};

  const handleCeritificate = () => {
    window.open(props?.certificate);
  };
  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  const handleNeuMophismDiv = () => {
    if (props?.label == "Graduation") {
      return (
        <>
          <div
            className={
              deviceType === "mobile"
                ? "mobileClass"
                : "" || deviceType === "tablet"
                ? "tabletClass"
                : "neumorphism-div"
            }
            style={styleCss}
          >
            <div
              className={
                deviceType === "mobile"
                  ? "time-line-content-mobile"
                  : "" || deviceType === "tablet"
                  ? "time-line-content-tablet"
                  : "time-line-content"
              }
            >
              <h3>{props?.degree}</h3>
              <p>College :- {props?.collage}</p>
              <p>Passing Year :- {props?.yearPassing}</p>
              <p>{props?.percentage}</p>
            </div>
          </div>
        </>
      );
    } else if (props?.label === "Training") {
      return (
        <>
          <div
            className={
              deviceType === "mobile"
                ? "mobileClassTraining"
                : "" || deviceType === "tablet"
                ? "tabletClassIntership"
                : "neumorphism-div-internship"
            }
            style={styleCss}
          >
            <div
              className={
                deviceType === "mobile"
                  ? "time-line-content-mobile"
                  : "" || deviceType === "tablet"
                  ? "time-line-content-tablet"
                  : "time-line-content"
              }
            >
              <h3>{props?.degree}</h3>
              <p>Institute :- {props?.coaching}</p>
              <p>Completion Date :- {props?.yearPassing}</p>
              <p>
                Certificte :-{" "}
                <ShowMoreText
                  lines={3}
                  more="Show more"
                  less="Show less"
                  className={
                    deviceType === "mobile"
                      ? "content-css-mobile"
                      : "" || deviceType === "tablet"
                      ? "content-css-tablet"
                      : "content-css"
                  }
                  anchorClass="show-more-less-clickable"
                  onClick={executeOnClick}
                  expanded={false}
                  width={
                    deviceType === "mobile"
                      ? 130
                      : "" || deviceType === "tablet"
                      ? 180
                      : 280
                  }
                  truncatedEndingComponent={"... "}
                >
                  <span
                    onClick={handleCeritificate}
                    className="certificate-text"
                  >
                    {props?.certificate}
                  </span>
                </ShowMoreText>
              </p>
              <p>Hint :- {props?.hint}</p>
            </div>
          </div>
        </>
      );
    } else if (props?.label === "Internship") {
      return (
        <>
          <div
            className={
              deviceType === "mobile"
                ? "mobileClass"
                : "" || deviceType === "tablet"
                ? "tabletClass"
                : "neumorphism-div"
            }
            style={styleCss}
          >
            <div
              className={
                deviceType === "mobile"
                  ? "time-line-content-mobile"
                  : "" || deviceType === "tablet"
                  ? "time-line-content-tablet"
                  : "time-line-content"
              }
            >
              <h3>{props?.degree}</h3>
              <p>Institute :- {props?.institute}</p>
              <p>Completion Date :- {props?.completionDate}</p>
              <p onClick={handleCeritificate}>
                Certificte :-{" "}
                <span className="certificate-text">
                  {"https://www.edureka.co/verify"}
                </span>
              </p>
              <p>Hint :- {props?.hint}</p>
            </div>
          </div>
        </>
      );
    } else if (props?.label === "Work Experience") {
      return (
        <>
          <div
            className={
              deviceType === "mobile"
                ? "mobileClassTraining"
                : "" || deviceType === "tablet"
                ? "tabletClassIntership"
                : "neumorphism-div-internship"
            }
            style={styleCss}
          >
            <div
              className={
                deviceType === "mobile"
                  ? "time-line-content-mobile"
                  : "" || deviceType === "tablet"
                  ? "time-line-content-tablet"
                  : "time-line-content"
              }
            >
              <h3>{props?.company}</h3>
              <p>{props?.jobRoleFirst}</p>
              <p>{props?.jobRoleSecond}</p>
              <p>{props?.jobRolethird}</p>
              <p>{props?.fromTo}</p>
            </div>
          </div>
        </>
      );
    } else if (props?.label === "Frontend Experience") {
      return (
        <>
          <div
            className={
              deviceType === "mobile"
                ? "mobileClass-frontend"
                : "" || deviceType === "tablet"
                ? "tabletClass"
                : "neumorphism-div"
            }
            style={styleCss}
          >
            <div
              className={
                deviceType === "mobile"
                  ? "time-line-content-mobile"
                  : "" || deviceType === "tablet"
                  ? "time-line-content-tablet"
                  : "time-line-content"
              }
            >
              <h3>{props?.designation}</h3>
              <p>Company :- {props?.company}</p>
              <div className="frontend-wrapper">
                <p>Roles & Responsibilities :- {props?.jobRoleone}</p>
              </div>

              <p>{props?.completionDate}</p>
            </div>
          </div>
        </>
      );
    }
  };
  return <>{handleNeuMophismDiv()}</>;
};

export default NeumorphismDiv;
