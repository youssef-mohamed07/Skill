import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShoppingCart, FaMobileAlt, FaChartBar, FaRocket, FaCog } from 'react-icons/fa';
const ProjectCard = ({ icon, title, description, image, index }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="h-48 bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-6xl">
      {icon}
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <motion.button 
        className="bg-purple-600 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    { icon: <FaCode />, title: "E-Commerce Platform", description: "A cutting-edge online shopping experience with advanced features and seamless integration." },
    { icon: <FaShoppingCart />, title: "Inventory Management System", description: "Efficient stock tracking and order fulfillment solution for growing businesses." },
    { icon: <FaMobileAlt />, title: "Mobile Shopping App", description: "User-friendly mobile application for on-the-go shopping and personalized recommendations." },
    { icon: <FaChartBar />, title: "Analytics Dashboard", description: "Comprehensive data visualization tool for informed decision-making and performance tracking." },
    { icon: <FaRocket />, title: "Marketplace Launcher", description: "All-in-one solution for quickly setting up and scaling online marketplaces." },
    { icon: <FaCog />, title: "Integration Services", description: "Seamless connection of various e-commerce tools and platforms for optimal performance." },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <section className="projects py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Innovative Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;