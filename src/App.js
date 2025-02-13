import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import InfoSections from './components/InfoSection/InfoSections';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import DataSecuritySection from './components/DataSecuritySection/DataSecuritySection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <section id="sobre">
          <HeroSection />
        </section>
        <section id="beneficios">
          <InfoSections />
        </section>
        <section id="solucoes">
          <SolutionsSection />
        </section>
        <section id="contato">
          <ContactSection />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
