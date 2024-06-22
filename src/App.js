// import { useEffect } from 'react';
import "./App.css";
import Firefly from "./components/FireFlyEffect";
import Navbar from "./components/Navbar";
// import Footer from './components/Footer';
// import CustomCursor from './components/CustomCursor';
import AnimatedCursor from "react-animated-cursor";
import NeumorphismDiv from "./components/StyleComponents/Neomorphism";
function App() {
  return (
    <div className="App">
      {/* <CustomCursor/> */}

      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        // trailingSpeed={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
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
      <Firefly />
      {/* <Navbar/> */}
      <div className="main-content">
        <NeumorphismDiv />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
