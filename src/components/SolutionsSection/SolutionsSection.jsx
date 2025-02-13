import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SolutionsSection.css";

function SolutionsSection() {
  const solutions = [
    {
      title: "Pesquisa de Aceitação",
      description: "Entenda como o mercado percebe seus produtos ou serviços.",
    },
    {
      title: "Pesquisa de Público Alvo",
      description: "Identifique o perfil ideal de consumidores para suas ofertas.",
    },
    {
      title: "Pesquisa de Marketing",
      description: "Descubra as melhores estratégias para aumentar a visibilidade da sua marca.",
    },
    {
      title: "Pesquisa de Satisfação",
      description: "Avalie a experiência dos seus clientes e melhore continuamente.",
    },
  ];

  return (
    <section className="solutions-bg">
      <div className="solutions-section container">
        <h2>Nossas Soluções de Pesquisa</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20} 
          slidesPerView={1} 
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 15, navigation: false, autoplay: false },
            768: { slidesPerView: 2, spaceBetween: 20, navigation: false, autoplay: false },
            1024: { slidesPerView: 2, spaceBetween: 30, navigation: true, autoplay: { delay: 3000 } },
            1280: { slidesPerView: 3, spaceBetween: 40, navigation: true, autoplay: { delay: 3000 } },
          }}
          className="solutions-slider"
        >
          {solutions.map((solution, index) => (
            <SwiperSlide key={index} className="solution-card">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="div-solution-button">
                <button className="solution-button">Falar com Consultor</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SolutionsSection;
