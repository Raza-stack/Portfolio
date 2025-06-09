import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            About <span className="text-blue-500">Raza</span>
          </h2>
          <p className="text-blue-500 max-w-xl mx-auto text-lg">
            Crafting impactful web experiences that drive results and build trust.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
              Meet Raza — Your Partner in Digital Growth
            </h3>
            <p className="text-slate-600 mb-5 leading-relaxed">
              I'm Raza, a dedicated web developer and founder of this digital agency. With a deep passion for technology and design, I help brands turn ideas into powerful digital platforms.
            </p>
            <p className="text-slate-600 mb-5 leading-relaxed">
              My mission is simple: deliver visually stunning, high-performing websites that not only look great but also convert. From clean UI/UX to seamless responsiveness, every detail is crafted with precision and purpose.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you're launching your first business site or revamping an existing one, I’ll tailor a solution to fit your unique goals. Let's collaborate and create something extraordinary.
            </p>
            <motion.a
              href="#services"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Services
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

