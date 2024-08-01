import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

// ServiceCard Component
const ServiceCard = ({ imageSrc, title, description, index }) => (
  <motion.div
    className="p-6 md:p-8 bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex flex-col items-center mb-6">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-md" // Adjust height and ensure aspect ratio
      />
      <h3 className="text-xl md:text-2xl font-bold text-amber-500 dark:text-amber-400">{title}</h3>
    </div>
    <p className="text-gray-800 dark:text-gray-300 text-center text-base md:text-lg mb-4">{description}</p>
    <div className="flex justify-center">
      <a href="tel:123456789" className="flex items-center bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition duration-300 dark:bg-amber-600 dark:hover:bg-amber-700 text-sm md:text-base">
        <FaPhoneAlt className="mr-2" />
        اتصل الآن
      </a>
    </div>
  </motion.div>
);

// Services Component
const Services = () => {
  const services = [
    { imageSrc: '1.jpg', title: "جميع أنواع المكيفات", description: "نقوم بشراء المكيفات المستعملة بجميع أنواعها", index: 0 },
    { imageSrc: '2.jpg', title: "اثاث الفلل و القصور", description: "شراء اثاث الفلل و القصور و جميع الاثاث الفاخر و القديم", index: 1 },
    { imageSrc: '3.jpg', title: "اثاث ايكيا", description: "شراء اثاث ايكيا المستعمل بأفضل سعر", index: 2 },
    { imageSrc: '4.jpg', title: "معدات المطاعم و المقاهي", description: "شراء اثاث و معدات المطاعم و المقاهي", index: 3 },
    { imageSrc: '5.jpg', title: "الأثاث الفندقي", description: "شراء اثاث الفندقي و المفروش الفندقي", index: 4 },
    { imageSrc: '6.jpg', title: "اثاث المطابخ", description: "شراء اثاث المطابخ المستعمل و جميع الاجهزة الكهربائيه", index: 5 },
  ];

  return (
    <section className="services py-12 md:py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-amber-500 dark:text-amber-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          شراء جميع أنواع الأثاث المستخدم بجده
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <motion.div
          className="text-center mt-12 md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#contact" className="bg-amber-500 text-white font-bold text-lg md:text-xl py-3 md:py-4 px-6 md:px-10 rounded-full hover:bg-amber-600 transition duration-300 dark:bg-amber-600 dark:hover:bg-amber-700">
            واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
