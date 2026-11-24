# CARLOS MELLA — PORTAFOLIO 2026

Portafolio de diseño textil, indumentaria e interacción digital. **Versión de trabajo V5**, no es una entrega terminada.

## Ejecutar
Abrir `index.html` en navegador. Para probar rutas locales: `py -m http.server 8000` y visitar `http://localhost:8000/`.

## Estructura
- `index.html`: landing, índice filtrable y vistas rápidas.
- `about.html`: presentación, experiencia, intereses, contacto y dos fotografías personales.
- `proyectos/`: cinco subpáginas independientes.
- `assets/`: fotografías de indumentaria, capturas reales de T03/T06/T07 y dos fotografías personales.
- `style.css` y `script.js`: diseño y navegación.
- `components/slide-up-reveal.js`: transición tipográfica de entrada, adaptación sin framework con Web Animations API.

## Pendientes obligatorios
1. Las capturas originales de DOS REALIDADES y PULSO 90 están incorporadas en `assets/` y enlazadas en índice y subpáginas.
2. Las dos fotografías personales ya están incorporadas al About me. Confirmar créditos y autorización para publicación pública.
3. Añadir videos a las cinco subpáginas (o confirmar instrucciones específicas del profesor para proyectos físicos).
4. **Incorporado:** componente de revelación tipográfica adaptado de 21st.dev. Probar visualmente en móvil y mantener crédito en la entrega.
5. Experiencia en Kemaria Dolorez incorporada (patronaje, corte, confección); confirmar créditos fotográficos, colaboraciones y cualquier dato biográfico adicional.
6. Documentar conceptos HTML, CSS, JS, MQTT con fragmentos del código real usado; documentar los proyectos y tecnologías.
7. **La reflexión del semestre la debe redactar el estudiante sin IA, como exige la pauta.** Este archivo no la suplanta.
8. Comprobar accesibilidad, enlaces y visualización móvil, y publicar en un repositorio propio de GitHub Pages.

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


## Cambios de la V2 y recursos pendientes

- Se reorganizó el índice: DOS REALIDADES es una tarjeta editorial horizontal, PULSO 90 y A 12 PASOS DE LA GLORIA comparten una segunda fila, y los dos proyectos textiles ocupan una tercera. Al filtrar no quedan huecos.
- `assets/dos-realidades.svg` y `assets/pulso-90.svg` son **representaciones gráficas provisionales originales**, NO capturas. Reemplazarlas por las capturas originales proporcionadas por el autor antes de la entrega. Se pueden utilizar los nombres `dos-realidades.png` y `pulso-90.png` y actualizar las rutas en las páginas.
- Videos de los proyectos pendientes; fotografías personales incorporadas en V4.
- V5: componente adaptado de una fuente autorizada ya integrado y acreditado.
- La reflexión personal del semestre debe escribirla el estudiante, sin IA.

## Cambios V3
- Fotografías auténticas de DOS REALIDADES y PULSO 90 incorporadas a `assets/`, reemplazando gráficos provisionales.
- Tarjeta destacada de DOS REALIDADES reorganizada para dar espacio completo al título y evitar que quede comprimido.

## Cambios V4
- Página `about.html` reorganizada en cuatro bloques: identidad, formación y experiencia, intereses personales, contacto.
- Fotos personales `assets/carlos-japon.jpg` y `assets/carlos-estadio.jpg` integradas con descripciones alternativas y créditos visuales editoriales.
- Contenido basado en el texto revisado por Carlos Mella, incluyendo historia familiar, territorio, viajes, música urbana, fútbol y Universidad de Chile.
- Trabajo en Kemaria Dolorez presentado con funciones específicas: patronaje, corte y confección; dirección de diseño atribuida al diseñador principal.
- Anclajes de navegación ajustados para la barra fija.

**Nota:** las reflexiones de cierre del semestre deben redactarse exclusivamente por el estudiante. Este prototipo no las genera.


## V5 — Componente externo acreditado

**Slide Up Reveal** de **@satoriui**, publicado en **21st.dev**. Licencia indicada para el componente original: **MIT**.

- Fuente y autor: https://docs.21st.dev/@satoriui/components/slide-up-reveal
- Idea del componente: revelar texto por líneas o caracteres deslizándolos hacia arriba, con entrada escalonada.
- **Adaptación del portafolio:** `components/slide-up-reveal.js` implementa esa interacción en JavaScript nativo y Web Animations API, sin React ni dependencias adicionales. El HTML original sigue legible cuando JavaScript está desactivado y la animación se omite si la persona prefiere movimiento reducido. No se distribuye el código React original.
- Aplicación: título principal «CARLOS MELLA» de la landing, dos líneas y retraso progresivo.
- Licencia del original: MIT, según ficha de 21st.dev. Se atribuyen fuente y creador; la implementación de esta adaptación fue desarrollada específicamente para el portafolio.

**Pendientes sin cambios:** ajustar contenidos si el autor lo desea; videos de las cinco subpáginas, créditos y permisos de fotografías, limpieza de repositorios, publicación y reflexión personal escrita por el estudiante sin IA.
