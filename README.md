# Carlos Mella — Portafolio 2026

**Diseño textil, indumentaria e interacción digital.** Archivo de cinco proyectos y presentación personal de Carlos Mella, estudiante de Diseño en la Universidad Diego Portales, mención Textil e Indumentaria.

**Web:** https://charlesdiner0.github.io/portafolio-2026/  
**Repositorio:** https://github.com/CharlesDiner0/portafolio-2026

## Contenido

| Proyecto | Área | Experiencia | Código |
|---|---|---|---|
| DOS REALIDADES (T03) | Visión computacional | [Abrir](https://charlesdiner0.github.io/dos-realidades/) | [GitHub](https://github.com/CharlesDiner0/dos-realidades) |
| PULSO 90 (T06) | Imagen y sonido | [Abrir](https://charlesdiner0.github.io/oir-la-luz/) | [GitHub](https://github.com/CharlesDiner0/oir-la-luz) |
| A 12 PASOS DE LA GLORIA (T07) | Interacción táctil y MQTT | [Abrir](https://charlesdiner0.github.io/tacto/exp.html) | [GitHub](https://github.com/CharlesDiner0/tacto) |
| SHIGOTO (2025) | Textil e indumentaria | Registro fotográfico en este sitio | — |
| 001 (2024) | Textil e indumentaria | Registro fotográfico en este sitio | — |

El sitio contiene una portada que rota entre los cinco proyectos, una página *Sobre mí*, filtros para distinguir interacción e indumentaria, vistas rápidas y cinco páginas de proyecto.

## Estructura del repositorio

```text
index.html                   # Inicio, portada rotativa y proyectos
about.html                   # Biografía, experiencia, intereses y fotos
style.css                    # Identidad editorial y estilos adaptativos
script.js                    # Filtros, vista rápida y cierre de modal
components/
  slide-up-reveal.js         # Entrada tipográfica
  hero-carousel.js          # Rotación, controles y pausa
proyectos/                  # Cinco páginas individuales
assets/                     # Capturas y fotografías reales
```

## Cómo funciona: HTML, CSS y JavaScript

**HTML:** cada proyecto tiene su propia página, y la portada ofrece enlaces semánticos que permiten entrar directamente. Ejemplo real de la landing:

```html
<a id="hero-project-link" href="proyectos/dos-realidades.html">DOS REALIDADES ↗</a>
```

**CSS:** se usan reglas responsivas para adaptar el diseño a móviles. Fragmento del estilo del carrusel:

```css
.hero-slide { opacity: 0; visibility: hidden; transition: opacity .75s ease, visibility .75s ease; }
.hero-slide.is-active { opacity: 1; visibility: visible; z-index: 1; }
```

**JavaScript:** los filtros leen `data-filter` de cada botón y `data-type` de cada tarjeta. En `script.js` se actualiza `hidden`:

```js
const filters = [...document.querySelectorAll('.filter')];
filters.forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.project-card').forEach(card => {
    card.hidden = btn.dataset.filter !== 'all' && btn.dataset.filter !== card.dataset.type;
  });
}));
```

**Carrusel:** `components/hero-carousel.js` actualiza las imágenes, el nombre, el enlace y el contador del proyecto. Ofrece anterior, siguiente y pausa. La rotación dura 6,5 segundos por diapositiva y se detiene cuando se solicita movimiento reducido.

**MQTT en T07:** el portafolio solo presenta el proyecto; la comunicación mediante MQTT sucede en la experiencia externa **A 12 PASOS DE LA GLORIA**. El teléfono envía gestos y orientación y el computador responde en la experiencia de tiro al arco. **Pendiente:** seleccionar y explicar un fragmento concreto del repositorio `tacto` sobre publicación/suscripción MQTT antes del examen. No atribuimos ese código al portafolio.

## Criterios de diseño y accesibilidad

- Dirección gráfica editorial: fondo claro, títulos negros de gran escala, acentos y estructura de grilla.
- Fotografías y capturas reales aportadas para cada trabajo.
- Se consideran móviles, etiquetas alternativas, controles accesibles y preferencia de movimiento reducido.
- Las páginas enlazan de vuelta al índice y, en los proyectos digitales, a las experiencias y sus repositorios.

## Componente externo y atribución

**Slide Up Reveal**: adaptación sin framework de la propuesta **Slide Up Reveal**, de `@satoriui`, publicada en **21st.dev** (licencia indicada: MIT). Se utiliza para revelar las dos líneas del título de la landing. Adaptación local en `components/slide-up-reveal.js`. Referencia: https://21st.dev/  
La portada rotativa en `components/hero-carousel.js` es un componente desarrollado para este portafolio y no corresponde a la biblioteca anterior.

Tipografías utilizadas: **Archivo Black**, **Inter** y **DM Mono** mediante Google Fonts. Las fotografías son materiales aportados para la presentación del portafolio; **verificar autoría y autorización de publicación cuando corresponda**.

### Uso de IA

Se utilizó asistencia de IA para la planificación visual, desarrollo y corrección de HTML/CSS/JavaScript y edición de textos del sitio. Se debe revisar este registro y precisar las herramientas y tareas efectivamente usadas antes de la entrega.

## Cómo probar o editar

El sitio es estático, sin compilación. Puede abrirse `index.html` directamente o ejecutarse un servidor local:

```bash
python -m http.server 8000
```

Después, visitar `http://localhost:8000/`. Al modificar estilos o imágenes, subir los archivos cambiados conservando la estructura de carpetas; GitHub Pages publica desde la rama `main` y la raíz `/`.

## Pendientes para la entrega final

- Incorporar los registros en video solicitados para las páginas de proyecto.
- Verificar que los enlaces y experiencias funcionen publicados.
- Revisar créditos de fotografías y colaboraciones.
- Completar el apartado de MQTT con evidencia de código del repositorio correspondiente.
- **Reflexión personal del semestre: debe redactarla Carlos Mella con sus propias palabras, sin IA**, según la pauta del examen. No se incluye una reflexión generada aquí.

**Estado:** versión de trabajo publicada, no entrega definitiva.
