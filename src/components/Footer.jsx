import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import { DarkModeContext } from '../DarkModeContext';

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const socialLinks = [
    { icon: FaFacebookF, url: '#' },
    { icon: FaTwitter, url: '#' },
    { icon: FaInstagram, url: '#' },
    { icon: FaLinkedinIn, url: '#' },
  ];

  return (
    <footer className={`bg-blue-600 dark:bg-gray-800 text-white py-8 transition-all duration-500 ease-in-out`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Jeddah</h3>
            <p className="mb-4">Innovative solutions for a digital world</p>
            <p className="mb-4">P.O. Box 111968, Muscat</p>
            <p className="mb-4">Phone: 96611253</p>
            <p className="mb-4">Email: 123aa90101077aa@gmail.com</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-xl hover:text-gray-300 transition duration-300"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={`px-4 py-2 rounded-full focus:outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
              />
              <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p>
            &copy; {new Date().getFullYear()} Jeddah. All rights reserved. 
            <br />
            Made with <FaHeart className="inline-block text-red-500" /> by Our Amazing Team
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
