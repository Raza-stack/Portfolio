import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Layout, UserCircle, Info, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <ShoppingCart size={24} />,
      title: 'E-commerce Websites',
      description: 'Sell your products online with secure, scalable, and user-friendly e-commerce platforms.',
      features: [
        'Product Management',
        'Payment Gateway Integration',
        'Custom Shopping Cart',
        'Mobile-Optimized Design',
      ],
    },
    {
      icon: <Layout size={24} />,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive campaign success.',
      features: [
        'Custom Layouts',
        'Call-to-Action Optimization',
        'Fast Loading Speed',
        'Integrated Analytics',
      ],
    },
    {
      icon: <UserCircle size={24} />,
      title: 'Portfolio Websites',
      description: 'Showcase your work, skills, and personality with a clean and professional portfolio site.',
      features: [
        'Project Gallery',
        'Personal Branding',
        'Interactive Elements',
        'SEO Ready',
      ],
    },
    {
      icon: <Info size={24} />,
      title: 'Informational Websites',
      description: 'Elegant and easy-to-navigate websites that clearly communicate your business or services.',
      features: [
        'Custom Pages (Home, About, Services)',
        'Contact Forms',
        'Content Management',
        'Responsive Design',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-600">
            We build powerful websites tailored to your goals — whether you're selling online, showcasing your work, or sharing your story.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 h-full"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                borderColor: '#22d3ee',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
