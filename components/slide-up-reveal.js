/**
 * Slide Up Reveal — adaptación para HTML/CSS/JavaScript sin framework.
 * Referencia: @satoriui, «Slide Up Reveal», 21st.dev (licencia MIT).
 * https://21st.dev/@satoriui/slide-up-reveal (ficha canónica documentada abajo)
 * https://docs.21st.dev/@satoriui/components/slide-up-reveal
 * Adaptación y código original del portafolio, no copia del componente React.
 * Revela cada línea mediante una máscara con retardo escalonado.
 */
(() => {
  'use strict';
  const heading = document.querySelector('[data-slide-reveal]');
  if (!heading || !('animate' in Element.prototype)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lines = [...heading.querySelectorAll(':scope > span')];
  if (!lines.length) return;

  // La animación se prepara solo cuando JavaScript y Web Animations están disponibles.
  // Si JavaScript está desactivado, el texto original permanece visible.
  for (const [index, line] of lines.entries()) {
    const mask = document.createElement('span');
    mask.className = 'slide-reveal-mask';
    line.parentNode.insertBefore(mask, line);
    mask.appendChild(line);
    line.classList.add('slide-reveal-line');

    const animation = line.animate([
      { transform: 'translate3d(0, 112%, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 }
    ], {
      duration: 880,
      delay: 130 + index * 170,
      easing: 'cubic-bezier(.22, 1, .36, 1)',
      fill: 'both'
    });
    animation.finished.then(() => {
      // Mantener el aspecto final sin dejar capas animadas activas.
      line.style.transform = 'none';
      line.style.opacity = '1';
      animation.cancel();
    }).catch(() => {});
  }
})();
