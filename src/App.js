import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoSections from './components/InfoSections';
import SolutionsSection from './components/SolutionsSection';
import DataSecuritySection from './components/DataSecuritySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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
