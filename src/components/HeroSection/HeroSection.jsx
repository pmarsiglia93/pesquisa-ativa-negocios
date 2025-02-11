import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/pesquisa_ativa.webp';

function HeroSection() {
  return (
    <main className="introducao-bg">
      <div className="introducao container">
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">Descubra por que o Pesquisa Ativa está revolucionando o mundo dos negócios!</h1>
            <p className="hero-description">
              Nossa metodologia inovadora oferece resultados rápidos e assertivos, ajudando empresas a tomar decisões estratégicas com confiança.
            </p>
            <button className="hero-button">Quero agendar uma consultoria</button>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Pesquisa Ativa" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
