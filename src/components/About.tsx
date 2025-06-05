import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Building Digital Experiences That Deliver Results</h3>
            <p className="text-slate-600 mb-6">
              Welcome to our agency — your trusted partner in the digital world. I'm a passionate web developer and founder of this agency, and we specialize in creating modern, responsive, and high-converting websites that help businesses grow online.
            </p>
            <p className="text-slate-600 mb-6">
              Whether you're a startup looking for your first website or an established brand in need of a digital refresh, we tailor every project to your goals. Our focus is on clean design, strong performance, and user-friendly experiences that leave a lasting impression.
            </p>
            <p className="text-slate-600 mb-8">
              Let's work together to bring your vision to life and build a strong online presence that stands out from the competition.
            </p>
            <motion.a
              href="#services"
              className="inline-block px-6 py-3 bg-slate-800 text-white font-medium rounded-md hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
