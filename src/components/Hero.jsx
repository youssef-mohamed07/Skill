import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DarkModeContext } from '../DarkModeContext';
import { FaRocket, FaChartLine, FaShoppingCart } from 'react-icons/fa';

const Hero = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section className={`relative overflow-hidden py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-100 to-indigo-100 text-gray-900'}`}>
      <div className="absolute inset-0 z-0 opacity-10 bg-hero-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              E-Commerce Innovation Hub
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
            Revolutionizing online retail through cutting-edge academic projects
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FeatureCard 
            icon={<FaRocket />}
            title="Innovative Solutions"
            description="Pushing the boundaries of e-commerce technology"
            isDarkMode={isDarkMode}
          />
          <FeatureCard 
            icon={<FaChartLine />}
            title="Data-Driven Insights"
            description="Leveraging analytics for smarter business decisions"
            isDarkMode={isDarkMode}
          />
          <FeatureCard 
            icon={<FaShoppingCart />}
            title="Seamless Experience"
            description="Creating frictionless shopping journeys"
            isDarkMode={isDarkMode}
          />
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:shadow-lg">
            Explore Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, isDarkMode }) => (
  <motion.div 
    className={`flex flex-col items-center p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl max-w-sm`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className={`text-3xl mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className={`text-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
  </motion.div>
);

export default Hero;