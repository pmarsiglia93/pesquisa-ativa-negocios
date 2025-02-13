import React from 'react';
import './SolutionsSection.css';

function SolutionsSection() {
  const solutions = [
    {
      title: 'Pesquisa de Aceitação',
      description: 'Entenda como o mercado percebe seus produtos ou serviços.',
    },
    {
      title: 'Pesquisa de Público Alvo',
      description: 'Identifique o perfil ideal de consumidores para suas ofertas.',
    },
    {
      title: 'Pesquisa de Marketing',
      description: 'Descubra as melhores estratégias para aumentar a visibilidade da sua marca.',
    },
    {
      title: 'Pesquisa de Satisfação',
      description: 'Avalie a experiência dos seus clientes e melhore continuamente.',
    },
  ];

  return (
    <section className="solutions-section container">
      <h2>Nossas Soluções de Pesquisa</h2>
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card">
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <div className='div-solution-button'>
            <button className="solution-button">Falar com Consultor</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SolutionsSection;
