import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex list-none">
        {pageNumbers.map(page => (
          <li key={page}>
            <button
              className={`py-2 px-4 mx-1 border border-gray-300 ${
                currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
