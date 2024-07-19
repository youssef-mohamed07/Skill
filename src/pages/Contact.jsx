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
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            <span className="block">Get in Touch</span>
            <span className="block text-indigo-600 dark:text-indigo-400">We'd love to hear from you</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Have a question or want to work together?
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  Send Message
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-indigo-600 dark:text-indigo-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">contact@abdelazizgroup.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-indigo-600 dark:text-indigo-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">123 E-commerce St, Shopsville, Shopland</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Follow Us</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <FaTwitter className="text-indigo-600 dark:text-indigo-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">@abdelazizgroup</span>
                </div>
                <div className="flex items-center">
                  <FaFacebookF className="text-indigo-600 dark:text-indigo-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">/abdelazizgroup</span>
                </div>
                <div className="flex items-center">
                  <FaLinkedinIn className="text-indigo-600 dark:text-indigo-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">/company/abdelazizgroup</span>
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
