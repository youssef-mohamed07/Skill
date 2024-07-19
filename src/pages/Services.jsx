import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaLightbulb, FaCog, FaUsers, FaShieldAlt, FaGlobe, FaMobile, FaCloudUploadAlt } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, index }) => (
  <motion.div
    className="p-8 bg-white dark:bg-gray-800 shadow-2xl rounded-lg transition-all duration-300 hover:shadow-3xl hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-center mb-6">
      <div className="text-5xl text-purple-600 dark:text-purple-400 mr-4">{icon}</div>
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-lg">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    { icon: <FaRocket />, title: "Enterprise Innovation", description: "Cutting-edge e-commerce technologies and AI-driven solutions to propel your business into the future of retail." },
    { icon: <FaChartLine />, title: "Advanced Analytics", description: "Comprehensive big data analysis and machine learning algorithms to drive informed business decisions and predict market trends." },
    { icon: <FaLightbulb />, title: "Strategic Consulting", description: "Expert advice from industry leaders to optimize your global e-commerce strategy and maximize performance across markets." },
    { icon: <FaCog />, title: "Custom Development", description: "Tailored enterprise-level e-commerce solutions designed to meet the complex needs of large-scale operations." },
    { icon: <FaUsers />, title: "User Experience Design", description: "Creating intuitive, engaging, and personalized shopping experiences to delight customers and drive conversions." },
    { icon: <FaShieldAlt />, title: "Enterprise Security", description: "State-of-the-art security measures and compliance solutions to protect your business and customers on a global scale." },
    { icon: <FaGlobe />, title: "Global Expansion", description: "Comprehensive strategies and technologies for seamless international market entry and multi-currency, multi-language operations." },
    { icon: <FaMobile />, title: "Omnichannel Integration", description: "Unified commerce solutions that seamlessly connect online, mobile, and in-store experiences for a cohesive brand journey." },
    { icon: <FaCloudUploadAlt />, title: "Cloud Infrastructure", description: "Scalable, high-performance cloud solutions engineered to handle massive transaction volumes and peak demands." },
  ];

  return (
    <section className="services py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Enterprise E-Commerce Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#contact" className="bg-white text-indigo-600 font-bold text-xl py-4 px-10 rounded-full hover:bg-indigo-100 transition duration-300">
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;