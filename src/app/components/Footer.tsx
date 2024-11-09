import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center sm:text-left">
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Cities</h3>
          <ul className="space-y-1">
            <li>Karachi</li>
            <li>Lahore</li>
            <li>Islamabad</li>
            <li>Rawalpindi</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-2">Popular Categories</h3>
          <ul className="space-y-1">
            <li>Pharma med</li>
            <li>homeopathics</li>
            <li>medical equipment</li>
            <li>baby nutritions</li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-1">
            <li>Email: dawaii@example.com</li>
            <li>Contact Number: +92-123-4567890</li>
          </ul>
        </div>
      </div>

      
      <div className="mt-6 text-center text-sm text-black">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
