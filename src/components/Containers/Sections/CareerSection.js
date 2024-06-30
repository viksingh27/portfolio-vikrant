import React from "react";
import { Timeline } from "antd";
import "./CareerSection.css";
import NeumorphismDiv from "../../StyleComponents/Neomorphism";

const CareerSection = ({ id }) => {
  return (
    <section id={id} className="career-section">
      <h1 className="career-heading">
        Professional / Acadmic <br /> Career
      </h1>
      <Timeline
        className="career-timeline "
        mode="alternate"
        items={[
          {
            label: (
              <div className="career-education">
                <h5 className="carrer-education-class">Graduation</h5>
              </div>
            ),
            children: (
              <NeumorphismDiv
                style={{ height: "180px", width: "125%" }}
                collage="Shri Shankaracharya Mahavidyalaya"
                degree={"Bachelor Of Commerce (B.Com)"}
                yearPassing={"June 2018"}
                percentage={"CGPA :- 6.0 Percentage :- 55%"}
                label={"Graduation"}
              />
            ),
          },
          {
            label: (
              <div className="career-internship">
                <h5 className="carrer-internship-class">Training</h5>
              </div>
            ),
            children: (
              <NeumorphismDiv
                style={{ height: "350px", width: "135%" }}
                coaching="Aptech Mumbai"
                degree={"Aptech Certified Web Development"}
                yearPassing={"February 2020"}
                certificate={
                  "https://www.onlinevarsity.com/sites/default/files/certificates/courses/CR1002447200221080008200181"
                }
                hint={"VIKR271295"}
                label={"Training"}
              />
            ),
          },
          {
            label: (
              <div className="career-education">
                <h5 className="carrer-education-class">Internship</h5>
              </div>
            ),
            children: (
              <NeumorphismDiv
                style={{ height: "240px", width: "125%" }}
                institute="Edureka"
                degree={"MERN Stack Web Development"}
                certificate={"https://www.edureka.co/verify"}
                hint={"KN9U9NXZN (Certificate ID)"}
                completionDate={"Feb 2022"}
                label={"Internship"}
              />
            ),
          },
          {
            label: (
              <div className="career-internship">
                <h5 className="carrer-internship-class">Work Experience</h5>
              </div>
            ),
            children: (
              <NeumorphismDiv
                style={{ height: "320px", width: "135%" }}
                company="Accenture"
                position={"Position :- Content Review Practitioner"}
                jobRoleFirst={
                  "Content Evaluation :- Review and analyze user-generated content for adherence to policies and guidelines."
                }
                jobRoleSecond={
                  "Decision Making :- Make decisions regarding the approval, modification, or removal of content."
                }
                jobRolethird={
                  "Policy Implementation :- Apply content policies consistently across various content types and platforms."
                }
                fromTo={"Feb 2020 - Aug 2022"}
                label={"Work Experience"}
              />
            ),
          },
          {
            label: (
              <div className="career-education">
                <h5 className="carrer-education-class">Internship</h5>
              </div>
            ),
            children: (
              <NeumorphismDiv
                style={{ height: "240px", width: "125%" }}
                institute="Edureka"
                degree={"MERN Stack Web Development"}
                certificate={"https://www.edureka.co/verify"}
                hint={"KN9U9NXZN (Certificate ID)"}
                completionDate={"Feb 2022"}
                label={"Internship"}
              />
            ),
          },
        ]}
      />
    </section>
  );
};

export default CareerSection;

{
  /* <Timeline.Item color="rgba(255, 180, 0, 0.8)">
<div className="timeline-content">
  <h3>Time Span 1</h3>
  <p>Details about time span 1.</p>
</div>
</Timeline.Item>
<Timeline.Item color="rgba(255, 180, 0, 0.8)">
<div className="timeline-content">
  <h3>Time Span 2</h3>
  <p>Details about time span 2.</p>
</div>
</Timeline.Item>
<Timeline.Item color="rgba(255, 180, 0, 0.8)">
<div className="timeline-content">
  <h3>Time Span 3</h3>
  <p>Details about time span 3.</p>
</div>
</Timeline.Item>
<Timeline.Item color="rgba(255, 180, 0, 0.8)">
<div className="timeline-content">
  <h3>Time Span 4</h3>
  <p>Details about time span 4.</p>
</div>
</Timeline.Item> */
}
