// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HeroSection() {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-2xl mx-auto">
      <p className="text-lg text-gray-600 mb-2">HI THERE!</p>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        I'M <span className="text-yellow-600">Md Akib Zaman</span> Pulok
      </h1>
      <p className="text-2xl md:text-3xl text-gray-700 mt-3 font-semibold">Front End Web Developer | Content Writer | Prompt Engineer</p>
      <p className="mt-6 text-gray-600 max-w-md mx-auto">
        an enthusiastic Front-End Web Developer, an accomplished Content Writer, and an innovative Engineer. Writing interesting, SEO-friendly content, creating strong AI prompts that improve user interaction, and creating quick, responsive websites with clean code are my areas of expertise. Using clever design and captivating digital experiences, I help brands and businesses expand online. I have a keen eye for detail and a passion for technology.
      </p>
      {/* Changed button to Link and added 'to' prop to link to the #about section */}
      <Link
        to="/#about" // Link to the 'about' section ID on the current page
        className="inline-block mt-8 bg-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105"
      >
        MORE ABOUT ME
      </Link>
    </div>
  );
}

export default HeroSection;
