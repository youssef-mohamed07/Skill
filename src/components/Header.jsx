import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSun, FaMoon, FaTools, FaProjectDiagram, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { DarkModeContext } from '../DarkModeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const navItems = [
    { name: 'الرئيسية', icon: FaHome, link: '/' },
    { name: 'الخدمات', icon: FaTools, link: '/services' },
    { name: 'المشاريع', icon: FaProjectDiagram, link: '/projects' },
    { name: 'من نحن', icon: FaInfoCircle, link: '/about' },
    { name: 'اتصل بنا', icon: FaEnvelope, link: '/contact' },
  ];

  return (
    <header className="bg-orange-700 dark:bg-gray-800 text-white py-4 shadow-lg transition-all duration-500 ease-in-out" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold tracking-tight hover:text-gray-300 transition duration-300">
            أثاث جدة
          </Link>
          
            <nav className="hidden lg:flex items-center justify-center flex-grow">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="flex items-center hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 mx-2"
                >
                  <item.icon className="mx-2" />
                  {item.name}
                </Link>
              ))}
           </nav>

          <div className="hidden lg:flex items-center space-x-reverse space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 hover:bg-gray-600 dark:hover:bg-gray-300 transition duration-300"
            >
              {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>

            <Link to="/signup" className="px-4 py-2 text-sm text-orange-600 duration-150 bg-orange-50 rounded-lg hover:bg-orange-100 active:bg-orange-200">
             التسجيل 
             <FaUserPlus className="inline mr-2" />
            </Link>

            <Link
              to="/login"
              className="px-4 py-2 text-sm text-orange-600 duration-150 bg-orange-50 rounded-lg hover:bg-orange-100 active:bg-orange-200"
            >
              تسجيل الدخول
              <FaSignInAlt className="inline mr-2" />
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md hover:bg-gray-700 transition duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    <item.icon className="ml-2" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-base font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  تسجيل الدخول
                  <FaSignInAlt className="ml-2" />
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-base font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  التسجيل
                  <FaUserPlus className="ml-2" />
                </Link>
              </li>
              <li>
                <button 
                  onClick={toggleDarkMode} 
                  className="flex items-center w-full bg-gray-700 dark:bg-gray-200 text-orange-400 dark:text-gray-800 hover:bg-gray-600 dark:hover:bg-gray-300 px-4 py-2 rounded-md text-base font-medium transition duration-300"
                >
                  {isDarkMode ? 'الوضع الفاتح' : 'الوضع الداكن'}
                  {isDarkMode ? <FaSun className="ml-2" /> : <FaMoon className="ml-2" />}
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