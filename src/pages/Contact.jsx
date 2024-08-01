import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-gradient-to-b from-orange-600 to-red-600 dark:from-gray-900 dark:to-orange-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">اتصل بنا</span>
            <span className="block text-yellow-400">نحن نتطلع لسماع منك</span>
          </h2>
          <p className="mt-4 text-xl text-white">
            هل لديك سؤال أو ترغب في العمل معنا؟
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">معلومات الاتصال</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-yellow-400 ml-3" />
                  <span className="text-white">contact@abdelazizgroup.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-yellow-400 ml-3" />
                  <span className="text-white">(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-yellow-400 ml-3" />
                  <span className="text-white">123 شارع التجارة الإلكترونية، المدينة، المملكة</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">تابعنا</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <FaTwitter className="text-yellow-400 ml-3" />
                  <span className="text-white">@abdelazizgroup</span>
                </div>
                <div className="flex items-center">
                  <FaFacebookF className="text-yellow-400 ml-3" />
                  <span className="text-white">/abdelazizgroup</span>
                </div>
                <div className="flex items-center">
                  <FaLinkedinIn className="text-yellow-400 ml-3" />
                  <span className="text-white">/company/abdelazizgroup</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;