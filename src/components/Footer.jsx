import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import { DarkModeContext } from '../DarkModeContext';

const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaLinkedinIn />, url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-gray-900 dark:to-purple-900 text-white py-4 shadow-lg transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">Your Company</h3>
            <p className="mb-4">Innovative solutions for a digital world</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className={`text-xl ${isDarkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'} transition-colors duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }}>
                  <a href="#" className={`hover:underline ${isDarkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={`px-4 py-2 rounded-full focus:outline-none ${isDarkMode ? 'bg-gray-800 focus:bg-gray-700' : 'bg-white focus:bg-gray-100'}`}
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved. 
            <br />
            Made with <FaHeart className="inline-block text-red-500 animate-pulse" /> by Our Amazing Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;