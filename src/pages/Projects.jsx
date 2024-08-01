import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaClock, FaStar, FaCouch, FaPaintBrush, FaLightbulb, FaLeaf, FaHome } from 'react-icons/fa';

const FeatureCard = ({ icon, title }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 p-4 text-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-4xl text-orange-500 mb-2">{icon}</div>
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
  </motion.div>
);

const BlogCard = ({ icon, title, excerpt, index }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="h-48 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-6xl">
      {icon}
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
      <motion.button
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        اقرأ المزيد
      </motion.button>
    </div>
  </motion.div>
);

const BedroomGalleryAndBlogs = () => {
  const features = [
    { icon: <FaBed />, title: "أفضل سعر" },
    { icon: <FaClock />, title: "سرعة التنفيذ" },
    { icon: <FaStar />, title: "خبرة سنوات" },
    { icon: <FaCouch />, title: "شراء كافة الموديلات" },
  ];

  const blogs = [
    { icon: <FaPaintBrush />, title: "أحدث صيحات تصميم غرف النوم", excerpt: "اكتشف أحدث الاتجاهات في تصميم غرف النوم لعام 2024" },
    { icon: <FaLightbulb />, title: "أفكار إضاءة مبتكرة", excerpt: "كيفية استخدام الإضاءة لخلق أجواء مريحة في غرفة نومك" },
    { icon: <FaLeaf />, title: "غرف نوم صديقة للبيئة", excerpt: "نصائح لإنشاء غرفة نوم مستدامة وصحية" },
    { icon: <FaHome />, title: "تنظيم غرفة النوم", excerpt: "حلول ذكية لتخزين الأغراض وتنظيم مساحة غرفة النوم" },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen" dir="rtl">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            غرف النوم الفاخرة
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="10.jpg" alt="غرفة نوم فاخرة" className="w-full h-auto" />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">تصميم عصري وأنيق</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">استمتع بأجواء فاخرة مع غرفة نومنا المصممة بعناية. تجمع بين الأناقة والراحة لتوفر لك تجربة نوم لا مثيل لها.</p>
              <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                اطلب الآن
              </motion.button>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            مدونتنا
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} index={index} />
            ))}
          </div>

          <motion.p
            className="text-center text-orange-500 mt-8 font-bold text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            شراء الأثاث المستعمل و الأجهزة الكهربائية بجميع أنواعها في جدة
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default BedroomGalleryAndBlogs;