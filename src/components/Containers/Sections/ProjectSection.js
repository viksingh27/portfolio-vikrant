import React, { useState, useEffect, useRef } from "react";
import "./ProjectSection.css";
import { Carousel, Button } from "antd";
import reactWithoutColorIcon from "../../../assets/react-without-color.png";
import reactWithColorIcon from "../../../assets/react-with-color.png";
import jsWithColorIcon from "../../../assets/js-color.png";
import jsWithoutColorIcon from "../../../assets/js-without-color.png";
import vueWithColorIcon from "../../../assets/vue-with-color.png";
import vueWithoutColorIcon from "../../../assets/vue-without-color.png";
import htmlWithColorIcon from "../../../assets/html-with-color.png";
import htmlWithoutColorIcon from "../../../assets/html-without-color.png";
import gitWithColorIcon from "../../../assets/git-with-color.png";
import gitWithoutColorIcon from "../../../assets/git-without-color.png";
import materialIconWithColor from "../../../assets/mui-with-color.png";
import materialIconWithoutColorIcon from "../../../assets/mui-without-color.png";
import reduxWithColor from "../../../assets/redux-with-color.png";
import reduxWithoutColorIcon from "../../../assets/redux-without-color.png";
import cssWithColor from "../../../assets/css-with-color.png";
import cssWithoutColorIcon from "../../../assets/css-without-color.png";
import jsonWithColor from "../../../assets/json-with-color.png";
import jsonWithoutColorIcon from "../../../assets/json-wihtout-color.png";
import veutifyWithoutColor from "../../../assets/veutify-without-color.png";
import veutifyWithColor from "../../../assets/vuetify-with-color.png";

const projects = [
  {
    title: "Aviva India",
    description: "This is a brief description of Aviva India.",
    technologies: [
      {
        icon: materialIconWithoutColorIcon,
        hoverIcon: materialIconWithColor,
        name: "Material UI",
      },
      {
        icon: htmlWithoutColorIcon,
        hoverIcon: htmlWithColorIcon,
        name: "HTML5",
      },
      {
        icon: jsWithoutColorIcon,
        hoverIcon: jsWithColorIcon,
        name: "Javascipt",
      },
      {
        icon: reactWithoutColorIcon,
        hoverIcon: reactWithColorIcon,
        name: "React",
      },
      { icon: reduxWithoutColorIcon, hoverIcon: reduxWithColor, name: "Redux" },
    ],
    role: "Frontend Developer",
    organization: "Iorta Technologies",
    responsibilities:
      "Component Development in ReactJs , State Management , Virsion Control , Debugging , Performance Optimization",
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/username/project1",
  },
  {
    title: "Tata AIG",
    description: "This is a brief description of Tata AIG.",
    technologies: [
      {
        icon: htmlWithoutColorIcon,
        hoverIcon: htmlWithColorIcon,
        name: "HTML5",
      },
      { icon: cssWithoutColorIcon, hoverIcon: cssWithColor, name: "CSS3" },
      {
        icon: gitWithoutColorIcon,
        hoverIcon: gitWithColorIcon,
        name: "Version Control",
      },
      { icon: vueWithoutColorIcon, hoverIcon: vueWithColorIcon, name: "Vue" },
      {
        icon: veutifyWithoutColor,
        hoverIcon: veutifyWithColor,
        name: "Vuetify",
      },
    ],
    role: "Frontend Developer",
    organization: "Iorta Technologies",
    responsibilities:
      "Created responsive web designs and optimized performance.",
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/username/project2",
  },
  // Add more projects as needed
];

const ProjectSection = ({ id }) => {
  const carouselRef = useRef(null);
  const [deviceType, setDeviceType] = useState("desktop");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const startX = useRef(0);
  const startY = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const diffX = e.touches[0].clientX - startX.current;
      const diffY = e.touches[0].clientY - startY.current;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal movement detected, prevent default scrolling
        if (carouselRef.current && carouselRef.current.contains(e.target)) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

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
  //   const styleCss = deviceType === "desktop" ? contentStyle : "";

  const hoverHandler = (skillName) => {
    setHoveredSkill(skillName);
  };

  const leaveHandler = () => {
    setHoveredSkill(null);
  };

  return (
    <section id={id} className="project-section">
      <h1 className="project-heading">Projects</h1>
      <div ref={carouselRef} className="carousel-container">
        <Carousel arrows dotPosition="bottom" infinite={true} arrowSize="50">
          {projects.map((project, index) => (
            <div>
              <h3
                className={
                  deviceType == "mobile"
                    ? "contentStyleMobile"
                    : "" || deviceType === "tablet"
                    ? "contentStyleTbalet"
                    : "contentStyle"
                }
              >
                <div key={index} className="project-slide">
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="skill-item-project"
                        onMouseEnter={() => hoverHandler(tech.name)}
                        onMouseLeave={leaveHandler}
                      >
                        <div className="skill-icon-project">
                          <img
                            src={
                              hoveredSkill === tech.name
                                ? tech.hoverIcon
                                : tech.icon
                            }
                            alt={tech.name}
                          />
                          <p>{tech.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-description">{project.organization}</p>
                  <p className="project-roles">
                    <strong>Role:</strong> {project.role}
                  </p>
                  <p className="project-responsibilities">
                    <strong>Responsibilities:</strong>{" "}
                    {project.responsibilities}
                  </p>
                  {/* <div className="project-links">
                    <Button
                      type="primary"
                      href={project.liveUrl}
                      target="_blank"
                    >
                      View Live
                    </Button>
                    <Button href={project.githubUrl} target="_blank">
                      GitHub
                    </Button>
                  </div> */}
                </div>
              </h3>
            </div>
          ))}
          {/* <div>
            <h3
              className={
                deviceType == "mobile"
                  ? "contentStyleMobile"
                  : "" || deviceType === "tablet"
                  ? "contentStyleTbalet"
                  : "contentStyle"
              }
            >
              2
            </h3>
          </div>
          <div>
            <h3
              className={
                deviceType == "mobile"
                  ? "contentStyleMobile"
                  : "" || deviceType === "tablet"
                  ? "contentStyleTbalet"
                  : "contentStyle"
              }
            >
              3
            </h3>
          </div>
          <div>
            <h3
              className={
                deviceType == "mobile"
                  ? "contentStyleMobile"
                  : "" || deviceType === "tablet"
                  ? "contentStyleTbalet"
                  : "contentStyle"
              }
            >
              4
            </h3>
          </div> */}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectSection;
