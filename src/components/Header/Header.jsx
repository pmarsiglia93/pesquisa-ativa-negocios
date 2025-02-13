import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react"; // Ícones para o menu burguer
import { motion } from "framer-motion"; // Biblioteca para animação
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-bg">
      <div className="header container">
        <div className="logo">Pesquisa Ativa</div>

        {/* Botão do Menu Burguer (Mobile e Tablet) */}
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop (permanece visível) */}
        <nav className="nav-menu">
          <Link to="/sobre">Sobre</Link>
          <Link to="/beneficios">Benefícios</Link>
          <Link to="/solucoes">Soluções</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        {/* Menu Mobile (Full Screen Overlay) */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: "-100%" }}
            className="mobile-menu"
          >
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              <X size={32} />
            </button>
            <nav className="mobile-nav">
              <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
              <Link to="/beneficios" onClick={() => setMenuOpen(false)}>Benefícios</Link>
              <Link to="/solucoes" onClick={() => setMenuOpen(false)}>Soluções</Link>
              <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;
