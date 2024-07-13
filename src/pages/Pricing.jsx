import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar, FaCrown } from 'react-icons/fa';

const PriceCard = ({ title, price, features, icon, isPopular, index }) => (
  <motion.div 
    className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl ${isPopular ? 'border-4 border-yellow-400' : ''}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {isPopular && (
      <div className="bg-yellow-400 text-gray-800 text-center py-1 font-bold">
        Most Popular
      </div>
    )}
    <div className="p-6">
      <div className="text-4xl text-center mb-4 text-purple-600 dark:text-purple-400">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">{title}</h3>
      <p className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">{price}</p>
      <ul className="mb-6">
        {features.map((feature, i) => (
          <motion.li 
            key={i}
            className="flex items-center mb-2 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <FaCheckCircle className="text-green-500 mr-2" />
            {feature}
          </motion.li>
        ))}
      </ul>
      <motion.button 
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Choose Plan
      </motion.button>
    </div>
  </motion.div>
);

const Prices = () => {
  const pricingPlans = [
    {
      title: "Basic Package",
      price: "$99.99/mo",
      features: [
        "5 Projects",
        "Basic Analytics",
        "24/7 Support",
        "1GB Storage"
      ],
      icon: <FaStar />,
      isPopular: false
    },
    {
      title: "Standard Package",
      price: "$199.99/mo",
      features: [
        "15 Projects",
        "Advanced Analytics",
        "Priority Support",
        "10GB Storage",
        "Custom Domain"
      ],
      icon: <FaCrown />,
      isPopular: true
    },
    {
      title: "Premium Package",
      price: "$299.99/mo",
      features: [
        "Unlimited Projects",
        "Full Analytics Suite",
        "Dedicated Support",
        "100GB Storage",
        "Custom Domain",
        "API Access"
      ],
      icon: <FaCrown />,
      isPopular: false
    }
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PriceCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;