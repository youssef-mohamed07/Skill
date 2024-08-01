import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DarkModeContext } from '../DarkModeContext';

const Hero = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section className={`relative overflow-hidden h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className={`absolute inset-0 z-0 bg-cover bg-center ${isDarkMode ? 'bg-gray-800' : 'bg-hero-pattern'}`} style={{ backgroundImage: "url('1.avif')" }}></div>
      <div className="absolute inset-0 z-0 opacity-50 bg-black"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              Buy and Sell Used Furniture & Appliances
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 dark:text-gray-300 max-w-3xl mx-auto">
            Offering the best deals on used furniture and appliances in Jeddah. Quality items at competitive prices.
          </p>
        </motion.div>
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105">
            Discover Our Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
