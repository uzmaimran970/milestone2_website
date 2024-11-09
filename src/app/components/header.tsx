"use client";

import React, { useState, useEffect } from 'react';

const AutoSlider = () => {
  const images = ['/img1.jpg', '/img5.jpg', '/img3.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]); // images.length ko dependencies mein add kiya gaya hai

  return (
    <div className="w-full overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-auto block"
      />
    </div>
  );
};

export default AutoSlider;
