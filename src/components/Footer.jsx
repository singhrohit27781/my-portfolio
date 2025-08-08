import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/singhrohit27781',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/rohit-kumar-singh-83a699379/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    }
   
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-300 max-w-md">
              Passionate developer creating innovative solutions and beautiful user experiences. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full bg-gray-800 text-gray-300 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-300 text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Portfolio. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>and React</span>
            </div>
            
            <div className="text-gray-300 text-sm">
              <span>Designed & Built by </span>
              <span className="text-white font-medium">Rohit Kumar Singh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
