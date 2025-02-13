import React, { useState, useEffect, useRef } from "react";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { getDynamicClipPath } from "./InfoSectionsLogic";
import "./InfoSections.css";

function InfoSections() {
  const blocksRef = useRef([]);
  const [scrollY, setScrollY] = useState(0);
  const [blockPositions, setBlockPositions] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (blocksRef.current.length > 0) {
      setBlockPositions(
        blocksRef.current.map((block) => block.offsetTop)
      );
    }
  }, []);

  return (
    <section className="info-sections container">
      {[
        {
          title: "O Pesquisa Ativa é para você que...",
          content: (
            <ul>
              <li>Está inseguro na tomada de decisões estratégicas.</li>
              <li>Precisa identificar oportunidades de mercado.</li>
              <li>Busca uma visão mais clara sobre seus concorrentes.</li>
            </ul>
          ),
        },
        {
          title: "Como faturar mais com o Pesquisa Ativa?",
          content: (
            <p>
              Com insights estratégicos, você pode desenvolver produtos mais lucrativos, antecipar tendências e superar a concorrência.
            </p>
          ),
        },
        {
          title: "Como economizar com o Pesquisa Ativa?",
          content: (
            <p>
              Evite investimentos desnecessários em produtos ou serviços que não possuem potencial, economizando tempo e recursos.
            </p>
          ),
        },
        {
          title: "5 razões para você conhecer melhor o Pesquisa Ativa!",
          content: (
            <ul>
              <li>Explorar oportunidades de mercado.</li>
              <li>Tomar decisões baseadas em dados.</li>
              <li>Aumentar a competitividade da sua empresa.</li>
              <li>Maximizar lucros com estratégias eficientes.</li>
              <li>Obter uma visão completa sobre o mercado.</li>
            </ul>
          ),
        },
      ].map((item, index) => (
        <div
          key={index}
          ref={(el) => (blocksRef.current[index] = el)}
          className="info-block diagonal-block"
          style={{ clipPath: getDynamicClipPath(scrollY, blockPositions[index]) }}
        >
          <h2>{item.title}</h2>
          {item.content}
        </div>
      ))}
    </section>
  );
}

export default InfoSections;
