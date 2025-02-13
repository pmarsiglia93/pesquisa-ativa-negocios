export function getDynamicClipPath(scrollY) {
    const triggerPoint = 150; // A animação começa no scrollY = 400
  
    if (scrollY < triggerPoint) {
      return "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"; // Mantém fechado
    }
  
    const progress = Math.min((scrollY - triggerPoint) / 400, 1); // Tornamos a progressão mais lenta
    return `polygon(0 ${100 - progress * 100}%, 100% 0, 100% ${progress * 100}%, 0% 100%)`;
  }
  