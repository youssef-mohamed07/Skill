import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DarkModeContext } from '../DarkModeContext';

const Hero = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section className={`relative overflow-hidden h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center ${isDarkMode ? 'bg-gray-800' : 'bg-hero-pattern'}`} 
        style={{ backgroundImage: "url('home_background.jpg')" }}
      ></div>
      <div className={`absolute inset-0 z-0 opacity-50 ${isDarkMode ? 'bg-gray-900' : 'bg-black'}`}></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-yellow-300 to-yellow-500' : 'from-orange-400 to-orange-500'}`}>
              مؤسسة الماسة لشراء وبيع الأثاث المستعمل بجدة
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
            نقدم أفضل العروض على الأثاث والأجهزة المستعملة في جدة. سلع ذات جودة بأسعار تنافسية.
          </p>
        </motion.div>
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105">
            اكتشف مجموعتنا
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
