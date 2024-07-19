import React from 'react';
import { motion } from 'framer-motion';
import { FaOilCan, FaNetworkWired, FaLightbulb, FaClock, FaBuilding, FaUsersCog, FaChalkboardTeacher, FaTruck } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-4xl mb-4 text-purple-600 dark:text-purple-400">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

function About() {
  const features = [
    { icon: <FaOilCan />, title: "Oil and Gas Extraction", description: "Leading the industry with innovative oil and gas extraction methods." },
    { icon: <FaNetworkWired />, title: "Communications and IT", description: "Providing cutting-edge technology solutions." },
    { icon: <FaLightbulb />, title: "Creative Solutions", description: "Thinking outside the box to solve complex challenges." },
    { icon: <FaClock />, title: "Timely Delivery", description: "Committed to delivering projects on time, every time." },
    { icon: <FaBuilding />, title: "Commercial Centers", description: "Developing and managing modern commercial centers." },
    { icon: <FaUsersCog />, title: "Administrative Services", description: "Offering top-notch administrative and personal services." },
    { icon: <FaChalkboardTeacher />, title: "Education", description: "Empowering the future through quality education services." },
    { icon: <FaTruck />, title: "Logistics Services", description: "Providing efficient and reliable logistics solutions." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-600 dark:from-gray-900 dark:to-purple-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Our Company
        </motion.h1>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At Abdelaziz Abbas Morsy Trading SPC, we're committed to pushing the boundaries of our diverse sectors, from oil and gas extraction to communications, education, and logistics. Our mission is to drive innovation and provide exceptional services across all our business areas, ensuring the utmost satisfaction and success for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="#contact" 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded-full inline-block transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
