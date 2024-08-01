import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

const ServiceCard = ({ imageSrc, title, description, index }) => (
  <motion.div
    className="p-8 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-102"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex flex-col items-center mb-6">
      <img src={imageSrc} alt={title} className="mb-4 rounded-md" />
      <h3 className="text-2xl font-bold text-center text-amber-700">{title}</h3>
    </div>
    <p className="text-gray-600 text-center text-lg mb-4">{description}</p>
    <div className="flex justify-center">
      <a href="tel:123456789" className="flex items-center bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition duration-300">
        <FaPhoneAlt className="mr-2" />
        اتصل الآن
      </a>
    </div>
  </motion.div>
);

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
    <section className="services py-24 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-indigo-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          شراء جميع أنواع الأثاث المستخدم بجده
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#contact" className="bg-amber-600 text-white font-bold text-xl py-4 px-10 rounded-full hover:bg-amber-700 transition duration-300">
            واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;