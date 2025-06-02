// src/components/Portfolio.jsx
import React, { useState } from 'react';

function Portfolio() {
  // State to manage the active filter category
  const [activeFilter, setActiveFilter] = useState('all');

  // Dummy data for portfolio items. In a real app, this would come from your database.
  // Each item has a category, image URL, and title.
  const portfolioItems = [
    { id: 1, category: 'graphic-design', imageUrl: 'https://placehold.co/400x300/e0e0e0/000000?text=Graphic+Design+1', title: 'Modern Logo Design' },
    { id: 2, category: 'web-design', imageUrl: 'https://placehold.co/400x300/d0d0d0/000000?text=Web+Design+1', title: 'E-commerce Website' },
    { id: 3, category: 'photography', imageUrl: 'https://placehold.co/400x300/c0c0c0/000000?text=Photography+1', title: 'Urban Landscape' },
    { id: 4, category: 'graphic-design', imageUrl: 'https://placehold.co/400x300/b0b0b0/000000?text=Graphic+Design+2', title: 'Brand Identity Kit' },
    { id: 5, category: 'web-design', imageUrl: 'https://placehold.co/400x300/a0a0a0/000000?text=Web+Design+2', title: 'Portfolio Redesign' },
    { id: 6, category: 'photography', imageUrl: 'https://placehold.co/400x300/909090/000000?text=Photography+2', title: 'Nature Shots' },
    { id: 7, category: 'graphic-design', imageUrl: 'https://placehold.co/400x300/808080/000000?text=Graphic+Design+3', title: 'Infographic Design' },
    { id: 8, category: 'web-design', imageUrl: 'https://placehold.co/400x300/707070/000000?text=Web+Design+3', title: 'Blog Platform' },
  ];

  // Filter the portfolio items based on the active filter
  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">PORTFOLIO</h2>
      <p className="text-xl text-center text-yellow-600 font-semibold mb-8">
        My Latest Works
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        <button
          onClick={() => setActiveFilter('all')}
          className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300
            ${activeFilter === 'all' ? 'bg-yellow-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          ALL
        </button>
        <button
          onClick={() => setActiveFilter('graphic-design')}
          className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300
            ${activeFilter === 'graphic-design' ? 'bg-yellow-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          GRAPHIC DESIGN
        </button>
        <button
          onClick={() => setActiveFilter('web-design')}
          className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300
            ${activeFilter === 'web-design' ? 'bg-yellow-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          WEB DESIGN
        </button>
        <button
          onClick={() => setActiveFilter('photography')}
          className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300
            ${activeFilter === 'photography' ? 'bg-yellow-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          PHOTOGRAPHY
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/e0e0e0/000000?text=Image+Error"; }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 capitalize">{item.category.replace('-', ' ')}</p>
            </div>
          </div>
        ))}
      </div>
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No projects found for this category.</p>
      )}
    </div>
  );
}

export default Portfolio;
