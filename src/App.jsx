import React from 'react';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Partners from './components/Partners.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="site-root">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


