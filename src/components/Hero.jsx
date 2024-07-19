import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DarkModeContext } from '../DarkModeContext';
import { FaRocket, FaChartLine, FaShoppingCart, FaLock, FaGlobe, FaCogs } from 'react-icons/fa';

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
              Global E-Commerce Innovation Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Revolutionizing online retail through cutting-edge technology, data-driven strategies, and seamless user experiences for enterprise-level solutions.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FeatureCard
            icon={<FaRocket />}
            title="Innovative Solutions"
            description="Pushing the boundaries of e-commerce technology with AI-powered recommendations and blockchain integration."
            isDarkMode={isDarkMode}
          />
          <FeatureCard
            icon={<FaChartLine />}
            title="Data-Driven Insights"
            description="Leveraging big data analytics and machine learning for smarter business decisions and predictive modeling."
            isDarkMode={isDarkMode}
          />
          <FeatureCard
            icon={<FaShoppingCart />}
            title="Seamless Experience"
            description="Creating frictionless shopping journeys with AR/VR product visualization and one-click checkout."
            isDarkMode={isDarkMode}
          />
          <FeatureCard
            icon={<FaLock />}
            title="Enterprise Security"
            description="Implementing state-of-the-art cybersecurity measures to protect sensitive customer and business data."
            isDarkMode={isDarkMode}
          />
          <FeatureCard
            icon={<FaGlobe />}
            title="Global Scalability"
            description="Building robust infrastructure capable of handling millions of transactions across multiple regions."
            isDarkMode={isDarkMode}
          />
          <FeatureCard
            icon={<FaCogs />}
            title="Custom Integration"
            description="Seamlessly integrating with existing enterprise systems and third-party services for maximum efficiency."
            isDarkMode={isDarkMode}
          />
        </motion.div>
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 hover:shadow-xl">
            Explore Our Enterprise Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, isDarkMode }) => (
  <motion.div
    className={`flex flex-col items-center p-8 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}
    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className={`text-5xl mb-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>{icon}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
  </motion.div>
);

export default Hero;