import React, { useEffect, useState } from "react";
import "./App.css";
import Firefly from "./components/FireFlyEffect";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import HomeSection from "./components/Containers/Sections/HomeSection";
import CareerSection from "./components/Containers/Sections/CareerSection";
import SkillsSection from "./components/Containers/Sections/SkillsSection";
import ResumeSection from "./components/Containers/Sections/ResumeSection";
import ProjectSection from "./components/Containers/Sections/ProjectSection";
import Footer from "./components/Footer";

function App() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth >= 768); // Show cursor for screens wider than 768px
    };

    window.addEventListener("resize", handleResize);

    // Check initial screen width
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      {showCursor && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
            zIndex: 10000,
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
            zIndex: 10000,
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
              options: {
                innerSize: 12,
                outerSize: 12,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
      )}
      <Firefly />
      <Navbar />
      <HomeSection id="home" />
      <CareerSection id="career" />
      <SkillsSection id="skills" />
      <ProjectSection id="projects" />
      <ResumeSection id="resume" />
      <Footer />
    </div>
  );
}

export default App;
