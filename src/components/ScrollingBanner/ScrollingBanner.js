import React, { useState, useEffect } from 'react';
import './ScrollingBanner.scss'; // Assurez-vous d'avoir un fichier CSS pour le style

const ScrollingBanner = ({ words }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
      const containerWidth = document.querySelector('.scrolling-banner').offsetWidth;
      const textContainer = document.querySelector('.text-container');
      const textWidth = textContainer.offsetWidth;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) =>{
        const newPosition = prevPosition -1;
        if (newPosition <= -textWidth){
          return 0;
        }
        return newPosition;
    });
  }, 10);
  return ()=> clearInterval(scrollInterval);
}, []);

  return (
    <div className="scrolling-banner">
      <div className="text-container" style={{ transform: `translateX(${scrollPosition}px)` }}>
        {words.map((word, index) => (
          <div className="text" key={index}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;