import React from 'react';
import './InfoSections.css';

function InfoSections() {
  return (
    <section className="info-sections">
      <div className="info-block">
        <h2>O Pesquisa Ativa é para você que...</h2>
        <ul>
          <li>Está inseguro na tomada de decisões estratégicas.</li>
          <li>Precisa identificar oportunidades de mercado.</li>
          <li>Busca uma visão mais clara sobre seus concorrentes.</li>
        </ul>
      </div>

      <div className="info-block">
        <h2>Como faturar mais com o Pesquisa Ativa?</h2>
        <p>
          Com insights estratégicos, você pode desenvolver produtos mais lucrativos, antecipar tendências e superar a concorrência.
        </p>
      </div>

      <div className="info-block">
        <h2>Como economizar com o Pesquisa Ativa?</h2>
        <p>
          Evite investimentos desnecessários em produtos ou serviços que não possuem potencial, economizando tempo e recursos.
        </p>
      </div>

      <div className="info-block">
        <h2>5 razões para você conhecer melhor o Pesquisa Ativa!</h2>
        <ul>
          <li>Explorar oportunidades de mercado.</li>
          <li>Tomar decisões baseadas em dados.</li>
          <li>Aumentar a competitividade da sua empresa.</li>
          <li>Maximizar lucros com estratégias eficientes.</li>
          <li>Obter uma visão completa sobre o mercado.</li>
        </ul>
      </div>
    </section>
  );
}

export default InfoSections;
