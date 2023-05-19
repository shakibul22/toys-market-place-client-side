import React, { useState } from 'react';


const Category = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      name: 'Math Toys',
      toys: [
        {
          picture: 'math-toy-1.jpg',
          name: 'Math Toy 1',
          price: '$19.99',
          rating: 4.5,
          details: '...',
        },
        {
          picture: 'math-toy-2.jpg',
          name: 'Math Toy 2',
          price: '$14.99',
          rating: 4.2,
          details: '...',
        },
      ],
    },
    {
      name: 'Language Toys',
      toys: [
        // Language toy objects go here
      ],
    },
    {
      name: 'Engineering Toys',
      toys: [
        // Engineering toy objects go here
      ],
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 mr-2 font-medium ${
              activeTab === index ? 'bg-gray-300' : 'bg-gray-200'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div>
        {categories[activeTab].toys.map((toy, index) => (
          <div key={index} className="flex items-center mb-4">
            <img
              src={toy.picture}
              alt={toy.name}
              className="w-16 h-16 mr-4 rounded"
            />
            <div>
              <h3 className="text-lg font-medium">{toy.name}</h3>
              <p className="text-gray-600">{toy.price}</p>
              <p className="text-gray-600">Rating: {toy.rating}</p>
              <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
