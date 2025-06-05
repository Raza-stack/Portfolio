import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/6956894/pexels-photo-6956894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A fully responsive e-commerce platform with advanced product filtering and secure checkout integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Healthcare Portal',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/3845332/pexels-photo-3845332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'An intuitive healthcare portal for patients to schedule appointments and access medical records securely.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Real Estate Platform',
      category: 'Web Application',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A modern real estate platform with interactive property maps and advanced search filters.',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Google Maps API']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-600">
            Take a look at some of our recent projects where we've helped clients achieve their digital goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-lg overflow-hidden shadow-lg h-full bg-white"
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-cyan-500 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              
              <motion.div 
                className="p-6"
                initial={{ height: "auto" }}
                animate={{ height: hoveredId === project.id ? "auto" : "auto" }}
              >
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-800"
                  >
                    <span className="mr-1">View Project</span>
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    <span className="mr-1">Case Study</span>
                    <Code size={16} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-slate-800 text-white font-medium rounded-md hover:bg-slate-700 transition-colors"
          >
            Ready to Start Your Project?
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;