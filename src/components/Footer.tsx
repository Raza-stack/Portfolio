import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'E-commerce Website', href: '#services' },
        { name: 'Landing Page', href: '#services' },
        { name: 'Portfolio Website', href: '#services' },
        { name: 'Informational Website', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Site Map', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      href: 'https://www.linkedin.com/in/raza-ansari-frontend-developer/',
      label: 'LinkedIn',
    },
    {
      icon: <Instagram size={18} />,
      href: 'https://www.instagram.com/razzz_ans/?hl=en',
      label: 'Instagram',
    },
    {
      icon: <Github size={18} />,
      href: 'https://github.com/Raza-stack',
      label: 'GitHub',
    },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-6xl font-bold">Raza</span>
            </motion.div>
            <motion.p
              className="text-slate-400 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We help businesses thrive in the digital landscape through innovative web solutions that drive growth and engagement.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((social, index) => {
                const bgColor =
                  social.label === 'LinkedIn'
                    ? 'hover:bg-[#0077B5]'
                    : social.label === 'Instagram'
                    ? 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600'
                    : 'hover:bg-[#333]';

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group w-10 h-10 rounded-full flex items-center justify-center text-slate-300 bg-slate-800 transition-colors duration-300 ${bgColor}`}
                    aria-label={social.label}
                  >
                    <span className="group-hover:text-white transition">
                      {social.icon}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + columnIndex * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="relative border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-slate-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              &copy; {currentYear} Raza. All rights reserved.
            </motion.p>
            <motion.button
              onClick={scrollToTop}
              className="absolute right-0 -top-6 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

