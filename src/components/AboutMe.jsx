// src/components/AboutMe.jsx
import React from 'react';
import AboutImg from '../assets/images/AboutImg.jpg'
import WebImage from '../assets/images/globe.svg'
import ContentImg from '../assets/images/content-writing.png'
import PromptImg from '../assets/images/language.png'


function AboutMe() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">ABOUT ME</h2>
      <p className="text-xl text-center text-yellow-600 font-semibold mb-8">
        I'm Akib Zaman Pulok, Front-End Web Developer | Content Writer | Prompt Engineer 
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Profile Image and Description */}
        <div className="md:w-1/3 flex justify-center">
          {/* Placeholder for profile image */}
          <img
            src={AboutImg}
            alt="Benjamin Smith"
            className="rounded-full border-4 border-yellow-500 shadow-md"
          />
        </div>

        {/* Right Column: Description Text */}
        <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
           Md Akib Zaman Pulok is a skilled professional adept in front-end web development, content writing, and prompt engineering. He possesses a strong command of modern web technologies including Python, JavaScript, React, Vite, and Tailwind CSS, enabling him to craft responsive, high-performance user interfaces and dynamic web applications.
          </p>
          <p>
            As an experienced content writer, Md Akib Zaman Pulok specializes in creating compelling, SEO-optimized digital content that engages target audiences and aligns with strategic marketing goals. His expertise encompasses content strategy, copywriting, and editing, ensuring clarity, impact, and effective communication.

            In the evolving field of artificial intelligence, Md Akib Zaman Pulok leverages his skills as a prompt engineer to design and refine inputs for AI models, optimizing their output for accuracy and relevance. This includes a foundational understanding of Natural Language Processing (NLP) principles and the effective utilization of Large Language Models (LLMs).

            Combining technical proficiency in front-end development with creative expertise in content creation and a forward-thinking approach to prompt engineering, Md Akib Zaman Pulok offers a versatile and valuable skill set for innovative digital projects.
          </p>
        </div>
      </div>

      {/* What I Do? Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">What I Do?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Service 1: Web Design */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            {/* Using a simple SVG icon placeholder for now */}
            <img src={WebImage} alt="Web Development Icon" className='mx-auto h-12 w-12 mb-4' />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Develop Website </h4>
            <p className="text-gray-600 text-sm">Create Websites and Fix The Bugs of Existing Website</p>
          </div>

          {/* Service 2: UI/UX Design */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <img src={ContentImg} alt="content Image" className='mx-auto h-12 w-12 mb-4' />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Content Writing</h4>
            <p className="text-gray-600 text-sm">100% SEO Optimized Content for Blogs, Contents, Posts</p>
          </div>

          {/* Service 3: Photography */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <img src={PromptImg} alt="prompt Image" className='mx-auto h-12 w-12 mb-4' />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Prompt Engineering</h4>
            <p className="text-gray-600 text-sm">Generate ideas into reality using AI</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {/* Stat 1: Years Experience */}
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200">
          <p className="text-4xl font-bold text-yellow-700">5+</p>
          <p className="text-sm text-gray-600">YEARS EXPERIENCE</p>
        </div>
        {/* Stat 2: Happy Clients */}
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200">
          <p className="text-4xl font-bold text-yellow-700">50+</p>
          <p className="text-sm text-gray-600">HAPPY CLIENTS</p>
        </div>
        {/* Stat 3: Projects Done */}
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200">
          <p className="text-4xl font-bold text-yellow-700">20+</p>
          <p className="text-sm text-gray-600">PROJECTS DONE</p>
        </div>
        {/* Stat 4: Followers */}
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200">
          <p className="text-4xl font-bold text-yellow-700">15K</p>
          <p className="text-sm text-gray-600">FOLLOWERS</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;