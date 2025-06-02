// src/components/Resume.jsx
import React from 'react';
import ResumePDF from '../assets/Files/AkibResume.pdf'

function Resume() {
  // Dummy data for Education. In a real app, this would come from your database.
  const education = [
    {
      id: 1,
      degree: 'Bachelors of Science And Engineering',
      institution: 'Independent University Bangladesh',
      years: '2022 - Currently Studying',
      description: 'Department Of Computer Science And Engineering',
    },
    {
      id: 2,
      degree: 'Higher Secondary School Certificate',
      institution: 'Milestone School And College',
      years: '2018 - 2020',
      description: 'Majored in Science',
    },
    {
      id: 3,
      degree: 'Secondary School Certificate',
      institution: 'Civil Aviation School And College',
      years: '2016 - 2018',
      description: 'Majored in Science',
    },
  ];

  // Dummy data for Experience. In a real app, this would come from your database.
  const experience = [
    {
      id: 1,
      position: 'Front-End Web Developer',
      company: 'Alpha Tech IT Farm',
      years: '2022 - Present',
      
    },
    {
      id: 2,
      position: 'Content Writer',
      company: 'Robi Sports',
      years: '2021 - 2022',
      
    },
    
  ];

  /**
   * Handles the download of the resume PDF.
   * Assumes 'resume.pdf' is located in the 'public' directory of your Vite project.
   */
  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    // Set the href to the path of your PDF file in the public directory
    link.href = {ResumePDF}; // Adjust this path if your PDF is in a subfolder of public
    // Set the download attribute to specify the filename when downloaded
    link.download = 'AkibZaman_Resume.pdf'; // Suggested filename for the downloaded file
    // Append the link to the body (required for Firefox)
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">RESUME</h2>
      <p className="text-xl text-center text-yellow-600 font-semibold mb-8">
        More About My Qualifications
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Education Section */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education
          </h3>
          <div className="space-y-8">
            {education.map(item => (
              <div key={item.id} className="border-l-4 border-yellow-500 pl-4 py-2 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div> {/* Timeline dot */}
                <h4 className="text-xl font-semibold text-gray-800">{item.degree}</h4>
                <p className="text-yellow-600 text-sm font-medium">{item.institution} | {item.years}</p>
                <p className="text-gray-700 mt-2 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.55 23.55 0 0112 15c-1.684 0-3.305-.27-4.816-.745M21 4.878V4.25a2 2 0 00-2-2H5a2 2 0 00-2 2v.628m18 0c.548.172 1.085.373 1.605.683a3.001 3.001 0 010 5.634 23.55 23.55 0 01-1.605.683m0 0V2.525A23.549 23.549 0 0012 9c-1.684 0-3.305-.27-4.816-.745M21 4.878V4.25a2 2 0 00-2-2H5a2 2 0 00-2 2v.628m18 0c.548.172 1.085.373 1.605.683a3.001 3.001 0 010 5.634 23.55 23.55 0 01-1.605.683m0 0V2.525A23.549 23.549 0 0012 9c-1.684 0-3.305-.27-4.816-.745M21 4.878V4.25a2 2 0 00-2-2H5a2 2 0 00-2 2v.628m18 0c.548.172 1.085.373 1.605.683a3.001 3.001 0 010 5.634 23.55 23.55 0 01-1.605.683M12 3v18" />
            </svg>
            Experience
          </h3>
          <div className="space-y-8">
            {experience.map(item => (
              <div key={item.id} className="border-l-4 border-yellow-500 pl-4 py-2 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div> {/* Timeline dot */}
                <h4 className="text-xl font-semibold text-gray-800">{item.position}</h4>
                <p className="text-yellow-600 text-sm font-medium">{item.company} | {item.years}</p>
                <p className="text-gray-700 mt-2 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-12 text-center">
        <button
          onClick={handleDownloadResume}
          className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105 shadow-lg"
        >
          Download Resume (PDF)
        </button>
      </div>
    </div>
  );
}

export default Resume;
