import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  linkLive: string;
  linkCase: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Nail Artist Portfolio',
    category: 'Nail Artist',
    image: 'https://www.jesvenues.com/images/services/nailart.jpg', // replace with actual image path
    description: 'Beautiful showcase of nail designs with gallery, booking info, and contact form.',
    linkLive: 'https://nail-artist.vercel.app/',
    linkCase: '#',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    title: 'Tattoo Artist Portfolio',
    category: 'Tattoo Artist',
    image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGF0dG9vJTIwYXJ0aXN0fGVufDB8fDB8fHww',
    description: 'Dynamic tattoo artist site featuring portfolio galleries, consultations, and booking.',
    linkLive: 'https://tatto-artist.vercel.app/',
    linkCase: '#',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Skincare E-commerce',
    category: 'E-commerce',
    image: 'https://www.lifevisioncosmetics.com/public/Blogs/ws4wCRq7UampHQOtCrtWqNzW7eRPTn3YvtlJ1231.jpg',
    description: 'Online skincare shop with product pages, cart, payment integration & clean UI.',
    linkLive: 'https://skin-whitening.vercel.app/',
    linkCase: '#',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
  },
  {
    id: 4,
    title: 'Interior Designer Website',
    category: 'Interior Design',
    image: 'https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg',
    description: 'Stylish interior design site with portfolio, services, and enquiry form.',
    linkLive: 'https://interior-designer-website.vercel.app/',
    linkCase: '#',
    technologies: ['React', 'Tailwind CSS', 'React Router'],
  },
  {
    id: 5,
    title: 'Makeup Artist Portfolio',
    category: 'Makeup Artist',
    image: 'https://media-api.xogrp.com/images/7256fa18-0a4e-4691-8f51-3bc669ebc83f~rs_768.h',
    description: 'Glamorous makeup artist portfolio showcasing services, reviews & contact.',
    linkLive: 'https://makeup-artist-xi.vercel.app/',
    linkCase: '#',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
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

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-slate-50 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Explore tailored websites for creative professionals—nail artists, tattoo artists, designers & more.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map(proj => (
            <motion.div
              key={proj.id}
              className="group relative rounded-lg overflow-hidden shadow-lg bg-white"
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(proj.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Image */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500 rounded-full mb-1">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-bold">{proj.title}</h3>
                </div>
              </div>

              {/* Content */}
              <motion.div 
                className="p-6"
                animate={{ opacity: hoveredId === proj.id ? 1 : 0.9 }}
              >
                <p className="text-slate-600 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.technologies.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-slate-100 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={proj.linkLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-800"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Site
                  </a>
                  <a 
                    href={proj.linkCase}
                    className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    <Code size={16} className="mr-1" /> Case Study
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Want a custom site like this? Let’s talk!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
