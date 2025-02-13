export function getDynamicClipPath(scrollY, blockTop) {
  if (!blockTop) return "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"; // Mantém fechado se não carregou

  const triggerPoint = blockTop - window.innerHeight / 1.5; // Ativa quando o bloco está 2/3 visível
  if (scrollY < triggerPoint) {
    return "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"; // Mantém fechado
  }

  const progress = Math.min((scrollY - triggerPoint) / 250, 1); // Progressão suave
  return `polygon(0 ${100 - progress * 100}%, 100% 0, 100% ${progress * 100}%, 0% 100%)`;
}
