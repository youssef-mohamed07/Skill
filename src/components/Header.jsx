import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaHome, FaTools, FaProjectDiagram, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUserPlus, FaDollarSign } from 'react-icons/fa';
import { DarkModeContext } from '../DarkModeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const navItems = [
    { name: 'Home', icon: FaHome, link: '/' },
    { name: 'Services', icon: FaTools, link: '/services' },
    { name: 'Projects', icon: FaProjectDiagram, link: '/projects' },
    { name: 'Pricing', icon: FaDollarSign, link: '/pricing' },
    { name: 'About', icon: FaInfoCircle, link: '/about' },
    { name: 'Contact', icon: FaEnvelope, link: '/contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-gray-900 dark:to-purple-900 text-white py-4 shadow-lg transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold tracking-tight hover:text-pink-300 transition duration-300 transform hover:scale-110">
            <span className="animate-pulse">Your</span> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">Logo</span>
          </Link>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md hover:bg-white hover:text-purple-600 transition duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="flex items-center hover:bg-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <item.icon className="mr-2" />
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 transform hover:scale-110 hover:shadow-lg animate-bounce"
            >
              <FaSignInAlt className="inline mr-2" />
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 transform hover:scale-110 hover:shadow-lg animate-pulse"
            >
              <FaUserPlus className="inline mr-2" />
              Sign Up
            </Link>
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 text-yellow-400 dark:text-gray-800 hover:bg-gray-600 dark:hover:bg-gray-300 transition duration-300 transform hover:scale-110 hover:rotate-12"
            >
              {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 animate-fadeIn">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="flex items-center hover:bg-white hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-base font-medium transition duration-300 animate-bounce"
                  onClick={() => setIsOpen(false)}
                >
                  <FaSignInAlt className="mr-2" />
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-base font-medium transition duration-300 animate-pulse"
                  onClick={() => setIsOpen(false)}
                >
                  <FaUserPlus className="mr-2" />
                  Sign Up
                </Link>
              </li>
              <li>
                <button 
                  onClick={toggleDarkMode} 
                  className="flex items-center w-full bg-gray-700 dark:bg-gray-200 text-yellow-400 dark:text-gray-800 hover:bg-gray-600 dark:hover:bg-gray-300 px-4 py-2 rounded-md text-base font-medium transition duration-300"
                >
                  {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;