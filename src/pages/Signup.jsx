import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaGoogle, FaFacebook, FaTwitter, FaSignInAlt } from 'react-icons/fa';
import { DarkModeContext } from '../DarkModeContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-r ${
      isDarkMode ? 'from-gray-900 to-gray-800' : 'from-gray-100 to-white'
    } text-${isDarkMode ? 'white' : 'gray-900'} rtl`}>
      <motion.div 
        className={`w-full max-w-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-2xl`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className={`text-4xl font-bold mb-6 text-center ${isDarkMode ? 'text-yellow-400' : 'text-purple-600'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className={`bg-clip-text text-transparent ${
            isDarkMode ? 'bg-gradient-to-r from-yellow-300 to-pink-400' : 'bg-gradient-to-r from-yellow-500 to-pink-600'
          }`}>
            انضم إلينا اليوم
          </span>
        </motion.h2>
        <form onSubmit={handleSubmit}>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <label className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              <FaUser className="inline mr-2" />
              الاسم
            </label>
            <input 
              type="text" 
              className={`w-full p-3 ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
              } border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </motion.div>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <label className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              <FaEnvelope className="inline mr-2" />
              البريد الإلكتروني
            </label>
            <input 
              type="email" 
              className={`w-full p-3 ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
              } border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <label className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              <FaLock className="inline mr-2" />
              كلمة المرور
            </label>
            <input 
              type="password" 
              className={`w-full p-3 ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
              } border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <label className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              <FaLock className="inline mr-2" />
              تأكيد كلمة المرور
            </label>
            <input 
              type="password" 
              className={`w-full p-3 ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
              } border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </motion.div>
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <label className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <input 
                type="checkbox" 
                className="mr-2"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
              />
              أوافق على الشروط والأحكام
            </label>
          </motion.div>
          <motion.button 
            type="submit" 
            className={`w-full p-3 rounded-md text-white ${isDarkMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600' : 'bg-gradient-to-r from-indigo-600 to-purple-600'} hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition transform hover:scale-105`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserPlus className="inline mr-2" />
            التسجيل
          </motion.button>
        </form>
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            أو سجل باستخدام
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button 
              className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGoogle className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button 
              className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button 
              className="p-2 bg-blue-400 rounded-full hover:bg-blue-500 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
        <motion.p 
          className={`mt-6 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          لديك حساب بالفعل؟ 
          <Link to="/login" className="ml-1 text-yellow-400 hover:underline">
            <FaSignInAlt className="inline mr-1" />
            تسجيل الدخول
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;
