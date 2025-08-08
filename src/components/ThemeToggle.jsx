import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-2 rounded-xl transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
      style={{
        outline: 'none',
        border: 'none',
        boxShadow: 'none',
        WebkitTapHighlightColor: 'transparent'
      }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDarkMode ? 180 : 0,
          scale: isDarkMode ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative w-5 h-5"
      >
        {isDarkMode ? (
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={20} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={20} />
          </motion.div>
        )}
      </motion.div>
      
      {/* Animated background */}
      <motion.div
        className={`absolute inset-0 rounded-xl ${
          isDarkMode
            ? 'bg-gradient-to-r from-blue-600 to-purple-600'
            : 'bg-gradient-to-r from-yellow-400 to-orange-400'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isDarkMode ? 0.1 : 0.1 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: -1 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
