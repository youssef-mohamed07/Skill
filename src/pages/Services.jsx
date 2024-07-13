import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaLightbulb, FaCog, FaUsers, FaShieldAlt } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, index }) => (
  <motion.div 
    className="p-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-center mb-4">
      <div className="text-4xl text-purple-600 dark:text-purple-400 mr-4">{icon}</div>
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    { icon: <FaRocket />, title: "Innovative Solutions", description: "Cutting-edge e-commerce technologies to propel your business forward." },
    { icon: <FaChartLine />, title: "Data Analytics", description: "Comprehensive data analysis to drive informed business decisions." },
    { icon: <FaLightbulb />, title: "Strategic Consulting", description: "Expert advice to optimize your e-commerce strategy and performance." },
    { icon: <FaCog />, title: "Custom Development", description: "Tailored e-commerce solutions designed to meet your unique needs." },
    { icon: <FaUsers />, title: "User Experience Design", description: "Creating intuitive and engaging shopping experiences for your customers." },
    { icon: <FaShieldAlt />, title: "Security & Compliance", description: "Robust security measures to protect your business and customers." },
  ];

  return (
    <section className="services py-16 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-gray-900 dark:to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;