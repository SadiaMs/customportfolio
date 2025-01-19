import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Logo Section */}
      <div className="logo">
        <Image src="/dp.png" alt="Sadia Logo" width={500} height={500} />
      </div>

      {/* Image Slider Section */}
      <div className="slider">
       
       
        
        {/* Add more slides as needed */}
      </div>

      {/* Content Section */}
      <div className="content">
        <h1>Welcome to Sadia Flower Shop</h1>
        <p>If you like my work, please contact me.</p>
      </div>
    </div>
  );
};

export default Hero;
