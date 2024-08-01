import React from 'react';
import { motion } from 'framer-motion';
import { FaCouch, FaHome, FaSnowflake, FaUtensils, FaBed, FaSink } from 'react-icons/fa';const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-4xl mb-4 text-orange-600 dark:text-orange-400">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

function About() {
  const features = [
    { icon: <FaCouch />, title: "أثاث أيكيا", description: "شراء أثاث أيكيا المستعمل بأفضل سعر" },
    { icon: <FaHome />, title: "أثاث الفلل والقصور", description: "شراء أثاث الفلل والقصور و جميع الأثاثات الراقية و الفخمة" },
    { icon: <FaSnowflake />, title: "جميع أنواع المكيفات", description: "نقوم بشراء المكيفات المستعملة بجميع أنواعها" },
    { icon: <FaUtensils />, title: "معدات المطاعم والمقاهي", description: "شراء أثاث و معدات المطاعم و المقاهي" },
    { icon: <FaBed />, title: "الأثاث الفندقي", description: "شراء أثاث الفنادق والشقق الفندقية" },
    { icon: <FaSink />, title: "أثاث المطابخ", description: "شراء أثاث المطابخ المستعمل و جميع الأجهزة الكهربائية" },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-600 to-red-600 dark:from-gray-900 dark:to-orange-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          عن شركتنا
        </motion.h1>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">مهمتنا</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            نحن في شركتنا ملتزمون بتقديم أفضل خدمات شراء الأثاث المستعمل في جدة. نسعى جاهدين لتوفير حلول مريحة وفعالة لعملائنا، مع ضمان أعلى مستويات الجودة والخدمة في جميع معاملاتنا.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            اتصل بنا
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;