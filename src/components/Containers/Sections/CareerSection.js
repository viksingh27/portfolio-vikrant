import React from "react";
import { Timeline } from "antd";
import "./CareerSection.css";
import NeumorphismDiv from "../../StyleComponents/Neomorphism";

const CareerSection = ({ id }) => {
  return (
    <section id={id} className="career-section">
      <h1 className="career-heading">Career</h1>
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
                style={{ height: "100px", width: "100px" }}
                collage="shri shankaracharya mahavidyalaya"
                degree={"Bachelor Of Comerce"}
                yearPassing={"2018"}
                label={"Graduation"}
              />
            ),
          },
          {
            label: "2015-09-01 09:12:11",
            children: (
              <div className="timeline-content">
                <h3>Time Span 2</h3>
                <p>Solve initial network problems</p>
              </div>
            ),
          },
          // {
          //   children: (
          //     <div className="timeline-content">
          //       <h3>Time Span 3</h3>
          //       <p>Technical testing</p>
          //     </div>
          //   ),
          // },
          // {
          //   label: "2015-09-01 09:12:11",
          //   children: (
          //     <div className="timeline-content">
          //       <h3>Time Span 4</h3>
          //       <p>Network problems being solved</p>
          //     </div>
          //   ),
          // },
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
