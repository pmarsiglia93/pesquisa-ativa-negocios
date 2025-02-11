import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <HeroSection />
        <InfoSections />
        <SolutionsSection />
        <DataSecuritySection />
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
