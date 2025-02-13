import React, { useState } from 'react';
import { Menu, X } from "lucide-react"; // Ícones do menu burguer
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

        {/* Menu Desktop */}
        <nav className="nav-menu">
          <a href="#sobre">Sobre</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#solucoes">Soluções</a>
          <a href="#contato">Contato</a>
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
              <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
              <a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a>
              <a href="#solucoes" onClick={() => setMenuOpen(false)}>Soluções</a>
              <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;
