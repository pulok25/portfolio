// src/components/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  // State variables to hold the form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Your target email address
  const recipientEmail = 'akibzamanpulok@gmail.com';

  /**
   * Handles the form submission.
   * Constructs a mailto: link with pre-filled subject and body.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    // Encode the subject and body to handle special characters correctly in the URL
    const subject = encodeURIComponent(`Message from your Portfolio - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Construct the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open the mailto link in a new tab/window
    // Using window.location.href will open it in the current tab
    window.open(mailtoLink, '_blank');

    // Optionally, clear the form after opening the email client
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">CONTACT</h2>
      <p className="text-xl text-center text-yellow-600 font-semibold mb-8">
        Feel free to contact me!
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Contact Information */}
        <div className="md:w-1/2 space-y-6 text-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" />
            </svg>
            <span className="font-semibold">Email:</span> {recipientEmail}
          </p>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
            <span className="font-semibold">Phone:</span> +88018689863
          </p>
          <p className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold">Address:</span> 440 Shahinbag, Tejgaon , Dhaka -1215
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Me a Message</h3>
          {/* Attach handleSubmit to the form's onSubmit event */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={name} // Controlled component: bind value to state
                onChange={(e) => setName(e.target.value)} // Update state on change
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={email} // Controlled component
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                value={message} // Controlled component
                onChange={(e) => setMessage(e.target.value)} // Update state on change
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>
            <button
              type="submit" // Ensure type is submit to trigger form onSubmit
              className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;