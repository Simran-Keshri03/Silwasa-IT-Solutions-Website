import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AISolutionsShowcase from './components/AISolutionsShowcase';
import Services from './components/Services';
import Industries from './components/Industries';
import TechStack from './components/TechStack';
import About from './components/About';
import TrustSocialProof from './components/TrustSocialProof';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="silwasa-app" style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#FFFFFF' }}>
      <Header />
      <main>
        <Hero />
        <AISolutionsShowcase />
        <Services />
        <Industries />
        <TechStack />
        <About />
        <TrustSocialProof />
        <Process />
        <Portfolio />
        <CaseStudies />
        <Pricing />
        <Blog />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
