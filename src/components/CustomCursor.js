// import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    useEffect(() => {
      const cursor = document.querySelector('.custom-cursor');
      const cursorDot = document.querySelector('.custom-cursor-dot');
      let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;
  
      const moveCursor = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };
  
      const updateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.2; // Increase this value for more responsiveness
        cursorY += (mouseY - cursorY) * 0.2;
  
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        cursorDot.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
  
        requestAnimationFrame(updateCursor);
      };
  
      window.addEventListener('mousemove', moveCursor);
      requestAnimationFrame(updateCursor);
  
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }, []);
  
    return (
      <div className="custom-cursor">
        <div className="custom-cursor-dot"></div>
      </div>
    );
  };
  
  export default CustomCursor;