import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-8 bg-gray-50 dark:bg-gray-900"
    >

      
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
