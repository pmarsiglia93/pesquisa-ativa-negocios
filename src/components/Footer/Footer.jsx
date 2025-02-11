import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Pesquisa Ativa Negócios. Todos os direitos reservados.</p>
        <nav className="footer-nav">
          <a href="/politica-privacidade">Política de Privacidade</a>
          <a href="/termos-uso">Termos de Uso</a>
          <a href="/sobre-empresa">Sobre a Empresa</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
