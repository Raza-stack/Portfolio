import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Linkedin, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    // { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    // { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarClass = scrolled
    ? 'bg-white shadow-md text-slate-800'
    : 'bg-white text-black';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-colors duration-300 ${navbarClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a href="#home" className="flex items-center space-x-2 text-3xl ">
              <span className='font-pacifico'>Build with Raza</span>
            </a>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="font-medium hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Social Icons with Animation */}
            <div className="flex items-center space-x-4 ml-8">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group p-2 rounded-full transition-colors duration-300 bg-transparent hover:bg-[#333]"
              >
                <Github className="text-current group-hover:text-white" size={20} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group p-2 rounded-full transition-colors duration-300 bg-transparent hover:bg-[#0077B5]"
              >
                <Linkedin className="text-current group-hover:text-white" size={20} />
              </motion.a>

              <motion.a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group p-2 rounded-full transition-colors duration-300 bg-transparent hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600"
              >
                <Instagram className="text-current group-hover:text-white" size={20} />
              </motion.a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100 hover:bg-opacity-20 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-slate-900 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-white font-medium hover:bg-slate-800"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}

            {/* Social Icons in Mobile View */}
            <div className="flex items-center space-x-4 px-3 pt-4 pb-3">
              {[['github', 'https://github.com/yourusername', <Github size={20} />],
              ['linkedin', 'https://linkedin.com/in/yourusername', <Linkedin size={20} />],
              ['instagram', 'https://instagram.com/yourusername', <Instagram size={20} />]
              ].map(([type, url, Icon], i) => (
                <motion.a
                  key={type}
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group p-2 rounded-full transition-colors duration-300 bg-transparent ${type === 'github' ? 'hover:bg-[#333]' :
                      type === 'linkedin' ? 'hover:bg-[#0077B5]' :
                        'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600'
                    }`}
                >
                  <span className="text-white">{Icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
