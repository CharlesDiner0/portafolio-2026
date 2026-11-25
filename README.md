# CARLOS MELLA — PORTAFOLIO 2026

Portafolio de diseño textil, indumentaria e interacción digital. **Versión de trabajo V6**, no es una entrega terminada.

## Ejecutar
Abrir `index.html` en navegador. Para probar rutas locales: `py -m http.server 8000` y visitar `http://localhost:8000/`.

## Estructura
- `index.html`: landing, índice filtrable y vistas rápidas.
- `about.html`: presentación, experiencia, intereses, contacto y dos fotografías personales.
- `proyectos/`: cinco subpáginas independientes.
- `assets/`: fotografías de indumentaria, capturas reales de T03/T06/T07 y dos fotografías personales.
- `style.css` y `script.js`: diseño y navegación.
- `components/slide-up-reveal.js`: transición tipográfica de entrada, adaptación sin framework con Web Animations API.
- `components/hero-carousel.js`: portada rotativa de los cinco proyectos (6500 ms, navegación y pausa manual, movimiento reducido).

## Pendientes obligatorios
1. Las capturas originales de DOS REALIDADES y PULSO 90 están incorporadas en `assets/` y enlazadas en índice y subpáginas.
2. Las dos fotografías personales ya están incorporadas al About me. Confirmar créditos y autorización para publicación pública.
3. Añadir videos a las cinco subpáginas (o confirmar instrucciones específicas del profesor para proyectos físicos).
4. **Incorporado:** componente de revelación tipográfica adaptado de 21st.dev. Probar visualmente en móvil y mantener crédito en la entrega.
5. Experiencia en Kemaria Dolorez incorporada (patronaje, corte, confección); confirmar créditos fotográficos, colaboraciones y cualquier dato biográfico adicional.
6. Documentar conceptos HTML, CSS, JS, MQTT con fragmentos del código real usado; documentar los proyectos y tecnologías.
7. **La reflexión del semestre la debe redactar el estudiante sin IA, como exige la pauta.** Este archivo no la suplanta.
8. Publicado en GitHub Pages: https://charlesdiner0.github.io/portafolio-2026/ . Seguir verificando enlaces, accesibilidad y visualización móvil.

## Proyectos
- Dos Realidades: https://charlesdiner0.github.io/dos-realidades/
- Pulso 90: https://charlesdiner0.github.io/oir-la-luz/
- A 12 pasos de la gloria: https://charlesdiner0.github.io/tacto/exp.html
- SHIGOTO: indumentaria, 2025.
- 001: indumentaria, 2024.

## Créditos
- Proyecto de portafolio: Carlos Mella.
- Fotografías de indumentaria proporcionadas por el estudiante; **confirmar autoría y permiso de publicación de todas las fotografías**.
- Tipografías: Archivo Black, Inter y DM Mono vía Google Fonts; verificar y documentar sus licencias OFL en la versión definitiva.
- Herramientas de interacción de cada proyecto: atribuidas en sus respectivos repositorios.
- Asistencia de IA: usada para construir esta primera maqueta de estructura y código. Documentar su uso concreto en la entrega final.



## Cambio V6 — portada dinámica

La portada deja de mostrar de forma fija «A 12 PASOS DE LA GLORIA». Ahora rota entre los cinco proyectos, comenzando por DOS REALIDADES, con capturas/fotografías proporcionadas por el autor. Incluye controles anterior, siguiente y pausa; la rotación automática se desactiva si el sistema solicita movimiento reducido. No se agregó ninguna dependencia externa nueva.

**Actualizar la web publicada:** subir `index.html`, `style.css`, `README.md` y el archivo nuevo `components/hero-carousel.js` al repositorio, preservando las rutas.
