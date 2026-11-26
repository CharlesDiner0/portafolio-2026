# Carlos Mella — Portafolio 2026

**Diseño textil, indumentaria e interacción digital.**

Portafolio personal de Carlos Mella, estudiante de Diseño en la Universidad Diego Portales, con mención en Textil e Indumentaria. Reúne tres ejercicios de interacción digital desarrollados durante el semestre y dos proyectos de indumentaria realizados fuera de este curso.

**[Ver portafolio publicado](https://charlesdiner0.github.io/portafolio-2026/)** · **[Ver repositorio](https://github.com/CharlesDiner0/portafolio-2026)**

## 1. Contenido y proyectos

| Proyecto | Área | Experiencia o registro | Repositorio |
| --- | --- | --- | --- |
| **DOS REALIDADES** — T03 | Visión computacional con MediaPipe y OpenCV | [Experiencia](https://charlesdiner0.github.io/dos-realidades/) | [Código](https://github.com/CharlesDiner0/dos-realidades) |
| **PULSO 90** — T06 | Interacción entre imagen y sonido | [Experiencia](https://charlesdiner0.github.io/oir-la-luz/) | [Código](https://github.com/CharlesDiner0/oir-la-luz) |
| **A 12 PASOS DE LA GLORIA** — T07 | Interacción táctil, MQTT y sonido | [Experiencia](https://charlesdiner0.github.io/tacto/exp.html) | [Código](https://github.com/CharlesDiner0/tacto) |
| **SHIGOTO** — 2025 | Diseño textil e indumentaria | [Registro en el portafolio](https://charlesdiner0.github.io/portafolio-2026/proyectos/shigoto.html) | No se presenta repositorio independiente |
| **001** — 2024 | Diseño textil e indumentaria | [Registro en el portafolio](https://charlesdiner0.github.io/portafolio-2026/proyectos/001.html) | No se presenta repositorio independiente |

En la página principal se puede recorrer una portada rotativa, filtrar los proyectos por área y abrir una vista rápida. Cada trabajo cuenta con su propia subpágina. En **Sobre mí** se presenta mi formación, experiencia de confección en Kemaria Dolorez, intereses personales y datos de contacto.

## 2. Sistema gráfico y decisiones de diseño

El sitio utiliza una dirección editorial: fondos de color crudo, grandes títulos negros, líneas divisorias y una grilla de proyectos. El violeta aparece como acento secundario. La intención es que las capturas de experiencias digitales y las fotografías de indumentaria tengan protagonismo, sin que el diseño de la interfaz compita con ellas.

La portada cambia entre los cinco trabajos, en vez de dar protagonismo permanente a uno solo. Los proyectos de interacción aparecen primero dentro del índice porque este portafolio también documenta los aprendizajes de un curso de diseño y programación.

Se utilizaron **Archivo Black**, **Inter** y **DM Mono** desde Google Fonts para distinguir títulos, lectura y detalles técnicos.

## 3. Organización de archivos

```text
portafolio-2026/
├── index.html                 # Inicio, portada y grilla de proyectos
├── about.html                 # Presentación, trayectoria e intereses
├── style.css                  # Diseño, grillas, adaptación a móvil
├── script.js                  # Filtros y vistas rápidas
├── README.md                  # Documentación del portafolio
├── components/
│   ├── slide-up-reveal.js     # Entrada animada del nombre
│   └── hero-carousel.js       # Portada rotativa
├── proyectos/                 # Cinco páginas de proyectos
│   ├── dos-realidades.html
│   ├── pulso-90.html
│   ├── 12-pasos.html
│   ├── shigoto.html
│   └── 001.html
└── assets/                    # Capturas y fotografías de los trabajos
```

El sitio es **estático**, construido con HTML, CSS y JavaScript, sin un proceso de compilación ni servidor de aplicación propio. Se publica mediante GitHub Pages.

## 4. Conceptos aplicados y fragmentos de código

### 4.1. HTML — estructura y enlaces

**HTML** organiza los contenidos de la página: encabezados, secciones, imágenes, botones y enlaces. En este portafolio permite que cada proyecto tenga una página independiente, accesible desde el índice y la portada.

Fragmento de `index.html`:

```html
<a id="hero-project-link" href="proyectos/dos-realidades.html">
  DOS REALIDADES ↗
</a>
```

Este enlace funciona como acceso directo al proyecto presentado en la portada; JavaScript actualiza después su texto y dirección cuando cambia la imagen.

### 4.2. CSS — identidad visual y adaptación

**CSS** define la apariencia del HTML: tipografías, color, jerarquía, espaciados y posición de los elementos. En `style.css` se utiliza para mantener una composición editorial y adaptarla a distintos anchos de pantalla.

Fragmento real de `style.css`:

```css
.hero-slide {
  opacity: 0;
  visibility: hidden;
  transition: opacity .75s ease, visibility .75s ease;
}
.hero-slide.is-active {
  opacity: 1;
  visibility: visible;
  z-index: 1;
}
```

Estas reglas mantienen ocultas las imágenes inactivas y hacen visible la que tiene la clase `is-active`, mediante una transición de opacidad. El archivo también contiene reglas `@media` para ajustar las columnas y tamaños de letra en dispositivos móviles.

### 4.3. JavaScript — comportamiento e interacción

**JavaScript** permite que la página responda a acciones de quien la visita. En el portafolio se usa para filtrar tarjetas, mostrar vistas rápidas, animar el nombre y controlar la portada rotativa.

Fragmento de `script.js` (filtro de proyectos):

```js
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  document.querySelectorAll('.project-card').forEach(c => {
    c.hidden = btn.dataset.filter !== 'all' &&
               btn.dataset.filter !== c.dataset.type;
  });
  if (grid) grid.dataset.view = btn.dataset.filter;
}));
```

Cada botón indica su categoría mediante `data-filter`; cada tarjeta identifica la suya con `data-type`. Al pulsar un filtro, JavaScript oculta las tarjetas que no corresponden y actualiza `aria-pressed` para indicar cuál está activo.

Otro ejemplo, esta vez de `components/hero-carousel.js`:

```js
function start() {
  stop();
  if (!paused && !document.hidden)
    timer = setInterval(() => show(current + 1), 6500);
}
```

Esta función avanza de proyecto cada **6,5 segundos**, siempre que no esté pausado y la pestaña se encuentre visible. El carrusel también permite retroceder, avanzar y pausar manualmente; respeta la preferencia del sistema de reducir movimiento.

### 4.4. MQTT — comunicación entre dispositivos en T07

**MQTT** es un protocolo de mensajería basado en *publicación y suscripción*. Un dispositivo envía datos a un tema (*topic*) mediante un **broker** y los clientes suscritos a ese tema reciben los mensajes. No se utiliza para mostrar las tarjetas del portafolio: aparece en el proyecto externo **A 12 PASOS DE LA GLORIA (T07)**, donde el teléfono actúa como control del remate y la experiencia se visualiza en el computador.

Fragmento real del emisor del teléfono en [`tacto/public/index.html`](https://github.com/CharlesDiner0/tacto/blob/main/public/index.html):

```js
const pub = (kind, obj, qos = 0, retain = false) =>
  client && client.connected &&
  client.publish(`${base}/${kind}`, JSON.stringify(obj), { qos, retain });
```

`client.publish` envía un objeto convertido a JSON al tema MQTT correspondiente. El prefijo `base` incorpora la sala y el identificador del dispositivo para mantener separadas las sesiones.

Fragmento real del receptor en [`tacto/public/tacto.js`](https://github.com/CharlesDiner0/tacto/blob/main/public/tacto.js):

```js
c.on('connect', () => {
  this.setEstado('conectado');
  c.subscribe(`tacto/${this.sala}/#`);
});
c.on('message', (t, p) => this._msg(t, p));
```

La experiencia se suscribe a los mensajes de su sala y procesa cada evento recibido. Esto hace posible controlar dirección, carga y disparo desde el teléfono. La conexión publicada utiliza MQTT sobre WebSocket seguro; su funcionamiento depende de un broker externo. La infraestructura de Tacto fue desarrollada originalmente por **Felipe Roa y Santiago Gaete**, y debe reconocerse como código de terceros.

### 4.5. GitHub y GitHub Pages — repositorio y publicación

**GitHub** almacena los archivos del sitio y su historial de cambios. **GitHub Pages** sirve esos archivos como una página pública. El portafolio se publica desde la rama `main`, usando la carpeta raíz (`/`). Para actualizarlo se sustituyen los archivos modificados y se confirma un *commit*; la dirección pública permanece igual.

## 5. Componente externo integrado

Se incorporó una **adaptación en JavaScript sin framework** del efecto **Slide Up Reveal**, atribuido a **@satoriui** en **21st.dev**, para animar la entrada de las dos líneas del nombre «CARLOS MELLA».

- **Referencia del componente:** https://docs.21st.dev/@satoriui/components/slide-up-reveal
- **Autor identificado en la referencia:** @satoriui.
- **Licencia indicada en la ficha utilizada:** MIT; confirmar que la versión concreta y los recursos reutilizados estén cubiertos por esa licencia.
- **Adaptación local:** `components/slide-up-reveal.js`, que usa Web Animations API y no incorpora el componente React original.
- **Accesibilidad:** si el usuario ha configurado `prefers-reduced-motion: reduce`, el texto se muestra sin la animación.

El carrusel `components/hero-carousel.js` es una implementación específica del portafolio, distinta del componente de 21st.dev.

## 6. Créditos y procedencia de recursos

| Recurso | Procedencia y atribución |
| --- | --- |
| **Fotografías de SHIGOTO y 001** | Realizadas por **@brial**, fotógrafo chileno (Instagram). Utilizadas en este portafolio **con autorización del fotógrafo**. La autorización corresponde a este uso y no implica que las imágenes tengan una licencia de libre reutilización. |
| **Fotografías personales de Japón y del estadio** | Fotografías tomadas por **Carlos Mella**. |
| **Sonidos de PULSO 90 (T06)** | Ocho muestras procedentes de **Freesound**, editadas para el proyecto. Los nombres de los autores, enlaces a las muestras y licencias **declaradas CC0 1.0** están documentados individualmente en el [README de PULSO 90](https://github.com/CharlesDiner0/oir-la-luz). La licencia de cada muestra debe contrastarse con su ficha original. |
| **Sonidos de A 12 PASOS DE LA GLORIA (T07)** | Ocho archivos WAV descritos en el [README de T07](https://github.com/CharlesDiner0/tacto) como **síntesis original realizada con Python/NumPy**, declarados bajo CC0 1.0. No se atribuyen a Freesound porque la documentación actual del proyecto no lo indica; esta procedencia corresponde a lo registrado allí. |
| **Archivo Black, Inter y DM Mono** | Tipografías utilizadas a través de Google Fonts. Consultar las fichas y condiciones de licencia correspondientes. |
| **Slide Up Reveal** | Propuesta de **@satoriui** en **21st.dev**, adaptada a JavaScript sin framework para este sitio. Licencia indicada en la referencia utilizada: MIT (verificar sus condiciones para la versión concreta). |
| **MediaPipe y OpenCV** | Herramientas utilizadas en DOS REALIDADES; consultar sus dependencias y créditos en el repositorio de ese proyecto. |
| **Tacto / MQTT** | Biblioteca e infraestructura de conexión basadas en [Tacto, de Felipe Roa y Santiago Gaete](https://github.com/fefeliperoar/tacto), según la documentación del proyecto T07. |

La autorización de @brial permite el uso indicado en este portafolio y no transfiere la autoría de sus fotografías. Los créditos de herramientas, muestras y recursos de terceros deben mantenerse también en los proyectos donde se utilizan.

**Verificaciones aún necesarias:** confirmar en Freesound las licencias de cada una de las ocho muestras citadas por PULSO 90; comprobar condiciones específicas de tipografías y componente; y revisar cualquier recurso adicional de terceros en los repositorios de los proyectos.

### Uso de inteligencia artificial

Se utilizó asistencia de ChatGPT para desarrollar y revisar la estructura del portafolio, generar y modificar HTML, CSS y JavaScript, incorporar la portada dinámica, solucionar problemas de publicación y ayudar a editar textos descriptivos. Los resultados fueron revisados mediante pruebas del sitio en computador y teléfono. La reflexión del apartado 8, redactada por el estudiante, también documenta su utilización de Antigravity, ChatGPT y Claude durante el semestre.

## 7. Cómo ejecutar y verificar el sitio

Puedes abrir `index.html` en un navegador, aunque para probarlo en un entorno local más parecido a su publicación conviene iniciar un servidor dentro de la carpeta del repositorio:

```bash
python -m http.server 8000
```

Después, abre `http://localhost:8000/`.

Para verificar la entrega: recorrer la landing, los filtros y las vistas rápidas; entrar a **Sobre mí**; abrir las cinco subpáginas; seguir los enlaces hacia los tres proyectos digitales y comprobar la visualización en un teléfono. Los registros audiovisuales de DOS REALIDADES y PULSO 90 se encuentran integrados; SHIGOTO y 001 presentan registros fotográficos. Queda por incorporar el video de T07 y confirmar si la pauta acepta registros fotográficos para proyectos de indumentaria.

## 8. Reflexión personal del semestre

En cuanto a reflexión sobre este semestre me gustaría partir agradeciendo al equipo docente, agradecerle de todo corazón al profesor Felipe y al ayudante Santiago, gracias por la disposición, por la entrega clase a clase y por la forma de en mí caso que no conocía nada de nada, introducirme a nuevos conocimientos de forma interactiva y amigable. No me gustaría decir que aprendí todo sobre HTML o sobre ese tipo de archivos pero el conocimiento que me llevo desde esta asignatura es inmenso, conocimiento que antes no tenía idea que me despertaba interés. Los únicos problemas que tuve creo que fueron más por el lado personal y de organización de tiempos, pese a todo logré entregar la mayoría de trabajos y siento que me desenvolví de buena manera en ellos. Mi forma de comprender el diseño cambió en 180°, no tenía idea de que el diseño podía llegar a comprender herramientas tan complejas como las que hemos desarrollado y que estas fuesen desarrolladas por nosotros mismos, los estudiantes. Me gustó mucho tomar las decisiones creativas y de contenido en todos los proyectos, agradezco mucho la libertad que nos entregaron los docentes y la retroalimentación que nos daban a estos, me gustaría mejorar un poco más el apartado gráfico de mis trabajos, me gustaría que todos siguieran una misma línea editorial. Las herramientas que más utilicé este semestre fueron GitHub que no la conocía más que de nombre y siento que fue abrir los ojos a un mundo nuevo, utilicé mucho la Inteligencia Artificial de Antigravity, ChatGPT y Claude, todas para programar los códigos o hacer las correcciones de estos, siento que uno de los mayores aprendizajes que me llevo es que es posible trabajar junto con la IA sin depender de ella, sino más bien aprovechando esta y usándola como una herramienta.


**Estado del sitio:** portafolio publicado; contenido y enlaces revisados por el autor. La reflexión personal y créditos fotográficos están incorporados; quedan las verificaciones indicadas.
