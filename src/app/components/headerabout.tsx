"use client";

import React, { useState, useEffect } from 'react';

const AutoSlider = () => {
  const images = ['/home1.png', '/home4.jpg', '/home6.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-[100%]">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-[80px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover block mx-auto" // Adjust heights for different screens
        />
      </div>
    </div>
  );
};

export default AutoSlider;
