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
      <ul className="security-list">
        <li>Conformidade com a LGPD.</li>
        <li>Certificação SSL para segurança de comunicação.</li>
        <li>Criptografia de ponta a ponta dos dados.</li>
        <li>Auditorias periódicas de segurança.</li>
      </ul>
    </section>
  );
}

export default DataSecuritySection;
