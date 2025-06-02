import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import profileImg from '../assets/images/profile.png'

function SidebarNav() {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-yellow-500 text-white p-6 flex flex-col items-center shadow-lg z-50">
      <div className="mb-8">
        <img src={profileImg} alt="Profile" className="rounded-full border-4 border-white" />
        <h2 className="text-xl font-bold mt-4 text-center">Md Akib Zaman Pulok</h2>
        <p className="text-sm text-center">Front End Web Developer | Content Writer | Prompt Engineer</p>
      </div>
      <nav className="flex flex-col space-y-4 w-full">
        {/* Use Link components */}
        <Link to="/#home" className="py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 text-center font-semibold">HOME</Link>
        <Link to="/#about" className="py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 text-center font-semibold">ABOUT ME</Link>
        <Link to="/#resume" className="py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 text-center font-semibold">RESUME</Link>
        <Link to="/#portfolio" className="py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 text-center font-semibold">PORTFOLIO</Link>
        <Link to="/#testimonials" className="py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 text-center font-semibold">TESTIMONIALS</Link>
        <Link to="/#contact" className="py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 text-center font-semibold">CONTACT</Link>
      </nav>
      {/* Social Media icons or other elements can go here */}
    </div>
  );
}

export default SidebarNav;