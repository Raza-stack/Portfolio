import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Thompson',
      role: 'CEO, TechVision',
      content: 'WebStack transformed our digital presence completely. Their team not only delivered a stunning website but also provided valuable insights that helped us better connect with our audience. The ROI has been exceptional.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Marketing Director, GrowthFirst',
      content: 'Working with WebStack was a game-changer for our business. They understood our vision perfectly and executed it with precision. Our website traffic has increased by 150% since the launch!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      role: 'Founder, InnovateCorp',
      content: 'WebStack delivered beyond our expectations. Their attention to detail and commitment to quality is unmatched. The website they created has significantly improved our brand perception and customer engagement.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    next();
  };

  const handlePrev = () => {
    setDirection(-1);
    prev();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-slate-600">
            Hear what our clients have to say about their experience working with WebStack.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                  <div className="text-cyan-500 mb-6">
                    <Quote size={48} />
                  </div>
                  <p className="text-slate-700 text-lg md:text-xl italic mb-8">
                    "{testimonials[current].content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonials[current].name}</h4>
                      <p className="text-slate-600">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-white p-3 rounded-full shadow-lg text-slate-800 hover:text-cyan-500 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-white p-3 rounded-full shadow-lg text-slate-800 hover:text-cyan-500 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <motion.div 
          className="flex justify-center mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === current ? 'bg-cyan-500' : 'bg-slate-300'
              }`}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              variants={itemVariants}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;