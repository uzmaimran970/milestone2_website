import React from 'react';

const CtaSection = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto my-8 px-4">
      <div className="w-full h-24 sm:h-32 lg:h-40 overflow-hidden rounded-lg shadow-lg">
        <img
          src="/Cta.jpg"
          alt="Call to Action"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CtaSection;
