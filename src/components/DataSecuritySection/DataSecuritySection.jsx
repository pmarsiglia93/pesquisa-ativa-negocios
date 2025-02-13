import React from 'react';
import './DataSecuritySection.css';

function DataSecuritySection() {
  return (
    <section className="data-security-section">
      <h2>Segurança de Dados e Conformidade com a LGPD</h2>
      <p>
        Nossa plataforma está totalmente em conformidade com a Lei Geral de Proteção de Dados (LGPD), garantindo a segurança e privacidade das informações de nossos clientes. 
        Utilizamos certificações reconhecidas internacionalmente para proteger seus dados contra acessos não autorizados.
      </p>
      
      {/* Grid de segurança */}
      <div className="security-grid">
        <div className="security-item">Conformidade com a LGPD.</div>
        <div className="security-item">Certificação SSL para segurança de comunicação.</div>
        <div className="security-item">Criptografia de ponta a ponta dos dados.</div>
        <div className="security-item">Auditorias periódicas de segurança.</div>
      </div>
    </section>
  );
}

export default DataSecuritySection;
