import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<header className="bg-blue-500 text-white p-5">
  <h1 className="text-4xl">Hero Within</h1>
  <h3 className="text-2xl">Discover Your Super Alter-Ego</h3>
      <nav className="flex justify-center mt-4">
        <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mx-4">
          Home
        </Link>
        <Link to="/quiz" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mx-4">
          Quiz
        </Link>
      </nav>
    </header>
  );
};

export default Header;