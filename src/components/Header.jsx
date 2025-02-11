import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Pesquisa Ativa</div>
      <nav className="nav-menu">
        <Link to="/sobre">Sobre</Link>
        <Link to="/beneficios">Benefícios</Link>
        <Link to="/solucoes">Soluções</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
