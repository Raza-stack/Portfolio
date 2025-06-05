import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'WebStack - Web Development Agency';
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;