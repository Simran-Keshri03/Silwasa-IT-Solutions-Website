import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="silwasa-app" style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#FFFFFF' }}>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Pricing />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
