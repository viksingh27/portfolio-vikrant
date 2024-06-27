// NeumorphismDiv.js
import React from "react";
import "./Neomorphism.css";

const NeumorphismDiv = ({ props }) => {
  console.log("Style--->", props);

  // const handle
  return (
    <div
      className="neumorphism-div"
      // style={{ height: style.height, width: style.width }}
    >
      <div className="timeline-content">
        {/* <h3>{propsChildren?.}</h3> */}
        {/* <p>Create a services</p> */}
      </div>
    </div>
  );
};

export default NeumorphismDiv;
