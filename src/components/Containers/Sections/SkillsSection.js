import React, { useState } from "react";
import "./SkillsSection.css";
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

const skills = [
  { icon: reactWithoutColorIcon, hoverIcon: reactWithColorIcon, name: "React" },
  { icon: jsWithoutColorIcon, hoverIcon: jsWithColorIcon, name: "Javascipt" },
  { icon: vueWithoutColorIcon, hoverIcon: vueWithColorIcon, name: "Vue" },
  { icon: htmlWithoutColorIcon, hoverIcon: htmlWithColorIcon, name: "HTML5" },
  {
    icon: gitWithoutColorIcon,
    hoverIcon: gitWithColorIcon,
    name: "Version Control",
  },
  {
    icon: materialIconWithoutColorIcon,
    hoverIcon: materialIconWithColor,
    name: "Material UI",
  },
  { icon: reduxWithoutColorIcon, hoverIcon: reduxWithColor, name: "Redux" },
  { icon: cssWithoutColorIcon, hoverIcon: cssWithColor, name: "CSS3" },
  { icon: jsonWithoutColorIcon, hoverIcon: jsonWithColor, name: "JSON" },
  // Add more skills here...
];

const SkillsSection = ({ id }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const hoverHandler = (skillName) => {
    setHoveredSkill(skillName);
  };

  const leaveHandler = () => {
    setHoveredSkill(null);
  };

  return (
    <section id={id} className="skills-section">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-flex">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            onMouseEnter={() => hoverHandler(skill.name)}
            onMouseLeave={leaveHandler}
          >
            <div className="skill-icon">
              <img
                src={hoveredSkill === skill.name ? skill.hoverIcon : skill.icon}
                alt={skill.name}
              />
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
