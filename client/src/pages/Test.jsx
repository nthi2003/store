import React, { useState } from 'react';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">

      <button
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 group"
        onClick={toggleDropdown}
      >
        <span>Menu</span>
        
      </button>

      <div
        className={`absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Option 1
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Option 2
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Option 3
        </a>
      </div>

    </div>
  );
};

export default Test;
