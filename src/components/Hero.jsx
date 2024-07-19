import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DarkModeContext } from '../DarkModeContext';

const Hero = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section className={`relative overflow-hidden py-32 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 text-gray-900'}`}>
      <div className="absolute inset-0 z-0 opacity-10 bg-hero-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
              Your Trusted Partner in Multiple Industries
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Providing comprehensive solutions across various sectors including real estate, tourism, automotive, and more, for enterprise-level efficiency and growth.
          </p>
        </motion.div>
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 hover:shadow-xl">
            Discover Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
