import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBuilding,
  FaHotel,
  FaCar,
  FaMotorcycle,
  FaHandHoldingUsd,
  FaCogs,
  FaHammer,
  FaWarehouse,
  FaShip,
  FaPlane,
  FaStore,
  FaRegHandshake
} from 'react-icons/fa';

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
    { icon: <FaBuilding />, title: "Real Estate", description: "Offering premium properties for residential, commercial, and industrial use, tailored to your needs." },
    { icon: <FaHotel />, title: "Tourism", description: "Providing exceptional travel experiences with top-notch hospitality services across various destinations." },
    { icon: <FaCar />, title: "Car Sales", description: "Delivering a wide range of high-quality vehicles with excellent customer service and competitive pricing." },
    { icon: <FaMotorcycle />, title: "Scooter Sales", description: "Offering a variety of scooters to meet your mobility needs, combining style, efficiency, and affordability." },
    { icon: <FaHandHoldingUsd />, title: "Financial Services", description: "Providing financial solutions including loans, investment advice, and wealth management." },
    { icon: <FaCogs />, title: "Custom Solutions", description: "Tailoring services and products to meet specific client needs across various sectors for optimal performance." },
    { icon: <FaHammer />, title: "Construction", description: "Expert construction services for residential and commercial projects, ensuring quality and durability." },
    { icon: <FaWarehouse />, title: "Logistics", description: "Efficient logistics and warehousing solutions to streamline your supply chain and distribution needs." },
    { icon: <FaShip />, title: "Maritime Services", description: "Comprehensive maritime services including shipping, chartering, and marine consultancy." },
    { icon: <FaPlane />, title: "Aviation Services", description: "Offering a range of aviation services including air charter, cargo handling, and aviation consultancy." },
    { icon: <FaStore />, title: "Retail", description: "Operating retail stores offering a variety of products to meet your everyday needs." },
    { icon: <FaRegHandshake />, title: "Consultancy", description: "Providing expert consultancy services across various industries to help you achieve your business goals." },
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
          Comprehensive Services for Every Industry
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
