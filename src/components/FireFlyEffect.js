import React from 'react';
import './FireFlyEffect.css';

const Firefly = () => {
  return (
    <div className="firefly-container">
      {[...Array(500)].map((_, index) => {
        const style = {
          '--x': Math.random(),
          '--y': Math.random(),
          '--duration': `${Math.random() * 90 + 90}s`, // Random duration between 40s to 80s
          '--delay': `${Math.random() * -90}s` // Random negative delay up to -40s
        };
        return <div key={index} className="firefly" style={style}></div>;
      })}
    </div>
  );
};

export default Firefly;