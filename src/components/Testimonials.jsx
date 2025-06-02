// src/components/Testimonials.jsx
import React from 'react';

function Testimonials() {
  // Dummy data for testimonials. In a real app, this would come from your database.
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      title: 'CEO, Tech Solutions',
      quote: 'Benjamin is an incredibly talented graphic designer. His work transformed our brand identity, and he was a pleasure to work with from start to finish. Highly recommend!',
      rating: 5, // Out of 5 stars
      avatar: 'https://placehold.co/80x80/e0e0e0/000000?text=JD', // Placeholder for avatar
    },
    {
      id: 2,
      name: 'John Smith',
      title: 'Marketing Manager, Global Corp',
      quote: 'We hired Benjamin for our website redesign, and the results exceeded our expectations. His attention to detail and creative vision are truly remarkable. A true professional!',
      rating: 5,
      avatar: 'https://placehold.co/80x80/d0d0d0/000000?text=JS',
    },
    {
      id: 3,
      name: 'Emily White',
      title: 'Founder, Startup Hub',
      quote: 'As a photographer, Benjamin captured the essence of our event perfectly. The photos were stunning and delivered promptly. We will definitely work with him again.',
      rating: 4,
      avatar: 'https://placehold.co/80x80/c0c0c0/000000?text=EW',
    },
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.565-1.83-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.565-1.83-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return <div className="flex justify-center mb-2">{stars}</div>;
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">TESTIMONIALS</h2>
      <p className="text-xl text-center text-yellow-600 font-semibold mb-8">
        What My Clients Say
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full border-4 border-yellow-500 mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{testimonial.title}</p>
            {renderStars(testimonial.rating)}
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
