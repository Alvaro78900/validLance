# ValidLance · versión independiente (standalone)

Aplicación web 100 % autónoma: **tres archivos estáticos** (más una imagen para compartir), sin servidor, sin cuentas y sin depender de Claude ni de ningún otro servicio externo.

```
ValidLance_App/
├── index.html   ← la página (estructura y carga de los otros dos)
├── styles.css   ← todos los estilos (tema oscuro «celestial-profesional», móvil, accesibilidad)
├── app.js       ← toda la lógica (Centro de control, Panel, Valida, Compite, Lanza, Genera y el mentor Astro)
├── og.jpg       ← imagen que aparece al compartir el enlace (WhatsApp, LinkedIn, X…)
├── manifest.webmanifest, sw.js, icon-*.png, apple-touch-icon.png ← para instalarla como app y abrirla sin conexión
└── README.md
```

**Actualizar la versión publicada en GitHub Pages (repositorio `validLance`):** en el repositorio pulsa *Add file → Upload files*, arrastra todos los archivos de esta carpeta menos el README (sustituyen a los anteriores) y pulsa *Commit changes*. Cada versión lleva su huella en el nombre (`app.js?v=…`), así que ningún móvil mezcla la versión vieja con la nueva.

**Novedades (31 oct 2026):** más rápida (archivos minificados: app.js −22 %, primera pantalla en la mitad de tiempo, análisis e intro más ágiles). **Niveles y logros**: 14 insignias por cosas reales de tu proyecto, puntos (XP), 6 niveles (Soñador → Fundador), racha de días y celebración con confeti granate y dorado. **Buscador rápido** (Ctrl + K o «/») para saltar a cualquier apartado o acción. Luz que sigue al ratón e inclinación 3D en las tarjetas, borde vivo en lo recomendado, números que cuentan, indicador deslizante y vibración corta en la barra del móvil.

**Novedades (30 oct 2026, 2.ª entrega):** **Astro en modo autónomo**: botón «Modo autónomo» en el Centro (o dile a Astro «hazlo tú»). Trabaja en bucle (observa → decide → hace → comprueba): entiende tu idea, analiza mercado y competencia, busca competidores reales, compara tu precio con sus precios publicados, crea tu landing, prepara la prueba de demanda y resume el Go / No-Go. Se para y te pregunta lo que solo tú sabes, y deja para ti publicar y elegir la forma legal; se puede pausar, minimizar o parar. Además: Centro con **mapa-constelación** de tu proyecto y tarjetas con mini gráficos (radar de rivales, precio, landing, embudo, trámites y progreso), Lanza con tres tarjetas visuales para comparar autónomo, comunidad de bienes y SL, estados vacíos ilustrados, insignia de cada apartado en la cabecera y cielo estrellado en la bienvenida.

**Novedades (30 oct 2026):** competidores reales verificados en 22 nichos con web, precio publicado y fuente; búsquedas reales para cualquier otra idea; presupuesto del perfil o del texto (también 0 €); nombre corto del proyecto; entrada más rápida (y directa al volver); Astro sin ventanas encima en el móvil; barra en el orden de la ruta; botones de 44 px; copia de seguridad (menú de la cuenta → Guardar / Recuperar copia); se instala como app. En 1–2 minutos se ve en https://alvaro78900.github.io/validLance/ (si no, recarga con Ctrl + F5).

## Flujo de pantallas

1. **Inicio** → 2. **Elegir modelo de negocio** (SaaS, E-commerce, Trading, Servicios, Infoproductos u Otro) → 3. **Centro de control** → 4. el módulo que elijas.

El **Centro de control** (Hub de funciones) reúne en tarjetas todos los módulos: Análisis de competencia, Estrategia de precios y target, Generador de landings, Validación de demanda, Trámites y lanzamiento, y Panel Go / No-Go. Un toque en una tarjeta abre esa sección al momento. Astro te da la bienvenida y te sugiere por cuál empezar según lo que le cuentes y lo que ya hayas hecho. Puedes volver cuando quieras desde el menú lateral (o «Centro» en el móvil) o pulsando el logo.
Todo empieza en blanco: ninguna tarjeta trae datos de ejemplo.

## Aspecto: negro profundo y granate

- La interfaz es **oscura por defecto** (negro profundo con acentos en granate #800020). El modo claro del móvil o del navegador **ya no la cambia**.
- La **elección de modelo** y el **Centro de control** van **siempre en oscuro**; en esas dos pantallas no se muestra el botón del tema.
- El modo claro es opcional: se activa a mano con el botón del tema dentro de un módulo (Compite, Genera…) y solo afecta a los módulos. Se recuerda al recargar.
- **Astro** da la bienvenida como **busto con traje** (el mismo del panel: traje oscuro con estrellas y bordados dorados, camisa blanca, corbata granate y el rostro de constelaciones que asoma por arriba), **sin cuerpo entero y sin caminata**. Se materializa en el **centro exacto** de la pantalla (las constelaciones se ensamblan entre polvo de estrellas), inclina la cabeza con cortesía, dice la frase «¡Bienvenido a ValidLance, donde te ayudaremos a que tu proyecto se haga realidad!» y sale volando hacia su rincón. **La app no se abre sola:** la pantalla espera a que pulses «Comenzar» y entonces se disuelve en una lluvia de estrellas que abre el panel principal. Se puede saltar con un toque, Enter o Esc. Con *movimiento reducido* aparece quieto, sin animación. Ajustes en `app.js` (busca `const CFG =`): `autoContinue: 0` (valor por defecto) espera siempre al botón «Comenzar»; con un número en milisegundos (por ejemplo `650`) el panel se abriría solo pasado ese tiempo; `appear` es lo que tarda en materializarse (ms); `fullBody: true` activa una versión experimental de cuerpo entero (cuerpo celeste de polvo de estrellas, sin traje) que entra andando, con `walkMin`/`walkMax` para la duración de la entrada y `GAIT` para la zancada.

## Cómo abrirla

**En el ordenador:** haz doble clic en `index.html`. Se abre en tu navegador (Chrome, Edge, Firefox o Safari) y funciona sin conexión.
Mantén los tres archivos **en la misma carpeta**.

**En el móvil:** súbela a cualquier hosting (abajo) y abre el enlace en Safari/Chrome. Desde ahí puedes añadirla a la pantalla de inicio.
> Visores de archivos (la vista previa de iOS, Archivos, adjuntos de chat o correo) **no ejecutan JavaScript**: solo enseñan la página sin vida. Hace falta un navegador real o un hosting.

## Cómo publicarla (gratis)

| Plataforma | Pasos |
|---|---|
| **Netlify** | Entra en app.netlify.com/drop y arrastra la carpeta `ValidLance_standalone`. |
| **GitHub Pages** | Sube los 3 archivos a un repositorio → Settings → Pages → rama `main`, carpeta `/ (root)`. |
| **Cloudflare Pages / Vercel / Firebase Hosting** | Despliega la carpeta como sitio estático (sin comando de build; directorio de salida = la carpeta). |
| **Cualquier hosting o servidor propio** | Copia los 3 archivos al directorio público. |
| **Prueba local con servidor** | `python3 -m http.server 8000` dentro de la carpeta → http://localhost:8000 |

No necesita configuración, variables de entorno, claves ni proceso de compilación.

## Qué NO lleva (y por qué es independiente)

- Sin inicio de sesión ni autenticación de ningún tipo (Premium y la Comunidad funcionan como **vista previa local, sin cobro**, hasta que conectes tus propios servicios; ver «Planes Freemium / Premium y Comunidad»).
- Sin scripts, SDK, APIs ni envoltorios de Claude ni de ningún otro servicio.
- Sin CDN, sin fuentes web externas (usa la tipografía del sistema), sin analítica, sin cookies.
- **Cero peticiones de red** al cargar y al usar la app (verificado en navegador, abierta como archivo local y desde un servidor web).
- Los datos del usuario se guardan **solo en el navegador** (`localStorage`); no se envían a ningún sitio.
- El mentor **Astro** funciona con reglas y con los motores de análisis incluidos en `app.js`: no usa IA externa.
- **Excepción opcional y apagada por defecto:** *IA con tu proyecto (RAG)*, ver más abajo. Mientras no la actives, la app no hace ninguna petición de red.

## Detalles a tener en cuenta

- **Datos en el navegador:** si borras los datos del sitio o cambias de navegador/dispositivo, el proyecto empieza de cero. Cada dominio (o `file://`) tiene su propio almacenamiento.
- **Botón «Prototipo»:** es opcional. Al pulsarlo sin enlace se abre un cuadro para pegar la URL de *tu propio* prototipo.
- **Formularios opcionales:** si quieres recoger correos de la landing generada, tú mismo pones tu endpoint (por ejemplo Formspree). Hasta que lo configures, no se envía nada.
- **Enlaces de fuentes:** los textos de «Mercado» citan medios y organismos con enlaces normales a esas webs; solo se abren si el usuario hace clic.
- Las cifras son **estimaciones orientativas y simuladas**; no constituyen asesoramiento legal ni financiero.
- Funciona en navegadores actuales. Con JavaScript desactivado se muestra un aviso en lugar de la app.

## IA con tu proyecto (RAG, opcional)

Astro puede responder a lo que escribes en el chat con **tu proyecto real** y la guía de ValidLance usando un servidor propio con LlamaIndex (carpeta `ValidLance_RAG_backend`, con su README).

- Menú de tu cuenta → **IA con tu proyecto (RAG)** → dirección del servidor → *Probar conexión* → consentimiento → *Guardar y activar*.
- Solo el **texto escrito a mano** en el chat libre viaja al servidor (con tu idea, modelo, progreso, resumen del análisis y notas opcionales). Botones, sugerencias, navegación y cálculos con tus cifras siguen en el navegador.
- **Ninguna clave se escribe en la app**: la clave del modelo de IA vive solo en el servidor (`.env`).
- Si el servidor falla, tarda más de 20 s o no tiene IA configurada, Astro responde con sus reglas locales.
- «Desactivar…» y «Empezar de cero» borran tus notas (también en el servidor) y retiran el consentimiento.
- Un servidor en `localhost` solo sirve en el mismo equipo; para usarlo desde el móvil necesita estar publicado con **https** y la web de la app debe figurar en `ALLOWED_ORIGINS`.
- Ficheros que lo implementan (ya incluidos en `app.js` / `styles.css`): `rag.js`, `rag.css` y los cambios de `agent.js`.

## Planes Freemium / Premium y Comunidad & Validación

- **Gratuito (0 €):** todo el flujo de validación (Compite, Genera, Valida, Lanza, panel Go / No-Go) y Astro. No se bloquea nunca.
- **Premium (9 €/mes o 79 €/año, con IVA; editable):** red de 5 agentes especializados (Lyra · SaaS, Vega · e-commerce, Sirio · servicios, Orión · trading y finanzas, Andrómeda · formación) y la vista **Comunidad & Validación** (muro de proyectos con tu landing, feedback de tu sector, buscador con filtros y contactos con la visibilidad que elijas).
- **Dónde se ve:** banda «Comunidad & Validación» y franja de agentes en el Centro de control, sección «Premium» del menú lateral, entrada «Plan» en el menú de cuenta y respuestas de Astro (precios, agentes, comunidad).
- **Sin servidor (por defecto):** «Probar Premium en vista previa» activa el plan **solo en tu navegador y sin cobro**, marcado como tal. La comunidad es una **vista previa local**: no hay usuarios ni proyectos de ejemplo; el muro solo mostrará lo que llegue de tu servidor.
- **Cambiar precios y enlaces de pago** (en la consola o en tu propio script, tras cargar `app.js`):
  ```js
  LV.premium.config({ prices: { month: 9, year: 79 }, checkout: { month: 'https://…', year: 'https://…' }, portal: 'https://…' });
  ```
  Un enlace de pago por sí solo abre la página del proveedor en otra pestaña, pero la app no puede saber si se pagó: sirve para una preventa. Para activar Premium automáticamente hace falta un servidor de cuentas.
- **Conectar tus servicios** (todo asíncrono, ver la estrategia de monetización para el diseño completo):
  ```js
  LV.premium.setProvider({ status: async () => ({ tier: 'premium' /* o 'free' */ }), checkout: async (cycle) => ({ url: 'https://…' }), portal: async () => ({ url: 'https://…' }) });
  LV.community.setProvider({ list, people, publish, unpublish, feedback: { list, add }, profile: { get, save, remove }, contacts: { list, request, respond, cancel }, report });
  ```
- **Seguridad:** la app **nunca recibe datos de tarjeta** (el pago ocurre en la página del proveedor). El bloqueo de la interfaz es comodidad, no seguridad: el servidor debe decidir el plan tras verificar el pago (webhook con firma) y comprobar Premium en cada llamada de comunidad. Las landings de otras personas se muestran en un marco aislado (sin scripts, sin formularios y sin recursos externos) y conviene limpiarlas también en el servidor.
- **Agentes con IA (RAG):** si conectas el servidor RAG, cada agente aporta su guía como documento de la consulta (hasta 4 documentos); el servidor no necesita cambios.
- Ficheros que lo implementan (ya incluidos en `app.js` / `styles.css`): `premium.js`, `specialists.js`, `community.js`, `premium.css`, `community.css` y los cambios de `hub.js`, `core.js`, `agent.js`, `rag.js` y la estructura de `index.html`.

## Tono y estilo de Astro y de los informes

- **Voz:** profesional en los datos y directa en la forma, pensada para emprendedores jóvenes (Gen Z y millennials) que leen en el móvil.
- **Estructura:** conclusión en la primera línea, frases cortas, 2–4 viñetas y un único «Siguiente paso».
- **Jerga:** los términos técnicos (TAM, CAC, margen…) se explican en pocas palabras.
- **Rigor:** las cifras no cambian y siguen marcadas como publicadas o estimadas. El aviso de que no es asesoramiento legal ni financiero se mantiene, más corto.
- **Dónde se aplica:** respuestas de Astro, resúmenes, Competencia, Precios, Riesgos, plan de acción, informe exportado, bienvenidas, Centro de control y Panel.
- Guía completa para mantener el estilo: `GUIA_DE_VOZ.md`.

### Análisis compacto y correcciones

- **Informe de Compite más corto:** las tarjetas se abren de una en una (acordeón; «Abrir todo» sigue disponible), las cifras van en una línea y la Estrategia se divide en pestañas. En el móvil, las fichas van en 2 columnas.
- **Resumen de Astro:** 2 mensajes en lugar de 3, con una línea por cifra, lo que te frena, 2 acciones y un único siguiente paso.
- **Corrección de la pantalla en blanco:** la burbuja de presentación de Astro heredaba el estilo de las miniaturas de la portada (caja blanca de 260 px recortada). Ahora usa su propia clase y, con el informe abierto, es corta y se esconde sola.
- **Corrección de «está en el análisis» pero no aparece:** al llevar un borrador a Compite se abre el cuadro de la idea, y Astro solo dice «Pulsa Analizar» cuando el botón y el texto ya están a la vista. Si ya había una idea escrita, pregunta antes de sustituirla.
- **Mensajes vacíos:** el chat descarta cualquier mensaje sin texto y muestra un aviso útil en su lugar, para que nunca quede un globo en blanco.

## Astro como consultor con datos de mercado

Astro compara tu idea con las cifras de su sector y propone qué mover. Todo funciona **sin conexión** y sin enviar nada.

- **Qué puedes preguntarle:** «¿Cómo está mi sector?», «¿Cómo voy frente al mercado?», «¿Qué tendencias hay?», «¿Qué hacen los que triunfan?», «¿Por qué fracasan?», «¿Qué métricas debo seguir?», «Hazme un diagnóstico estratégico» y «¿Son datos en tiempo real?».
- **Cómo responde:** conclusión primero, 2–4 viñetas, cifra con ≈, fuente y año entre paréntesis, y un solo siguiente paso (≈ 100–120 palabras). El diagnóstico estratégico añade «Qué haría yo» (máximo 3 palancas) y un «Evita».
- **Proactividad:** el resumen del informe añade «Frente al mercado» si una cifra tuya se aleja de lo habitual, y las respuestas de precio, captación, costes y landing llevan un «Dato del sector».
- **Segmentos:** distingue venta a empresas (B2B) y a personas (B2C) leyendo tu idea, y usa las cifras que corresponden (embudo B2B, ciclo de venta…).
- **Qué sector cubre:** software y apps (SaaS), e-commerce, servicios y freelance, infoproductos, trading y finanzas, creadores, economía colaborativa, negocio local y proyecto personal; más cifras generales de supervivencia de empresas.
- **Honestidad sobre «tiempo real»:** la app es estática y no tiene un flujo de datos en vivo. Las cifras son **referencias recogidas en oct. 2026**, cada una con su fuente y fecha, y Astro lo dice así. Las fuentes secundarias van marcadas «contrástala». Botón **Ver fuentes** con enlaces (se abren solo si haces clic).
- **Tus cifras:** se llaman «estimaciones de tu análisis», no resultados medidos. Con tu informe hecho, Astro marca cada una como **Bien / Ajusta / Frena** frente a la referencia.
- **Datos propios o en vivo (opcional, para quien programe):**
  ```js
  LV.intel.setProvider(async (modelo, segmento) => ({   // modelo: 'saas', 'shop', 'serv'… · segmento: 'b2b' | 'b2c' | ''
    asOf: '2026-10-24',                                    // fecha de tus cifras
    key: [{ t: 'Conversión media ≈ 3,4 % de las visitas.', s: 'mifuente' }],
    trends: [{ t: 'Sube el pago por uso.', s: 'mifuente' }],
    sources: { mifuente: { tag: 'Mi fuente 2026', n: 'Nombre del informe', d: '24/10/2026', u: 'https://…', c: 2 } },
  }));
  LV.intel.refresh('shop');   // vuelve a pedir las cifras de un modelo
  ```
  Lo que devuelva tu función sale primero y se marca con su fecha; si falla o no devuelve cifras, se siguen usando las de referencia.
- **Con la IA del servidor (RAG):** además de tu idea y tu análisis, viajan las referencias de tu sector (hasta 8 líneas con fuente) y el segmento; el servidor trae 8 documentos de mercado nuevos y un prompt de consultor que compara y cita la fuente.
- Ficheros que lo implementan (ya incluidos en `app.js` / `styles.css`): `market_intel.js` y los cambios de `agent.js`, `agent_explain.js` y `rag.js`.

## Astro te conoce: perfil, hoja de ruta y coach

La primera vez, Astro te hace **5 preguntas** (nombre, situación, objetivo, tiempo y presupuesto) y con ellas prepara una **hoja de ruta paso a paso** que cabe en tu semana. Se puede saltar y se cambia cuando quieras desde el menú del usuario → **Mi perfil y ruta**.

- **Privado:** el perfil se guarda **solo en tu navegador**. «Borrar mi perfil» (en esa misma pantalla) lo elimina junto con la ruta. Nada se envía a ningún sitio salvo que actives la IA del servidor y la aceptes.
- **Te llama por tu nombre** con naturalidad (no en cada frase) y adapta cada respuesta a tu tiempo, tu dinero y tu situación («En tu caso…»).
- **Tu ruta** aparece en el Centro de control («Tu ruta»): lo que toca esta semana, bloques de tiempo que te encajan, avisos (por ejemplo, «no dejes el empleo hasta tener clientes») y la ruta completa por fases. Los pasos que la app puede comprobar se marcan solos; el resto, con una casilla.
- **Habla con Astro de tu plan:** «¿Qué toca hoy?», «Tengo 30 minutos», «Ahora tengo 12 horas a la semana», «Ya hablé con 10 personas», «Voy a hacer el logo primero», «Quiero dejar mi trabajo», «Estoy atascado», «Mi ruta es demasiado larga», «¿Qué sabes de mí?». Astro reajusta la ruta, debate tus ideas con datos y siempre termina en un siguiente paso; la decisión es tuya. Orientación general: no es asesoramiento legal ni financiero.
- **Con la IA del servidor (RAG):** además viajan tu perfil y tu ruta (campos limitados), pero **solo si aceptas el texto nuevo** del cuadro «IA con tu proyecto» (si ya la tenías activada, vuelve a abrirlo, marca la casilla y guarda; hasta entonces no se envían). El prompt manda adaptar la respuesta a ti. Despliega de nuevo `server.py` y `knowledge_data.py` para activarlo (la app sigue funcionando igual sin ello).
- Archivos implicados (ya dentro de `app.js` / `styles.css`): `roadmap.js`, `onboard.js`, `routeui.js`, `coach.js` y los cambios de `agent.js`, `hub.js`, `model.js` y `splash.js`. Guía de tono completa: `GUIA_DE_VOZ.md` (sección 9).

## Personalizar

- Colores y temas: variables CSS al principio de `styles.css` (paleta negro/granate; `--garnet: #800020`; tema claro opcional para los módulos). El bloque «Interfaz oscura unificada» del final fija el granate en la elección de modelo y en el Centro de control.
- Nombre del mentor: constante `NAME` dentro de `app.js` (busca `const NAME = 'Astro'`; aparece en dos módulos, cámbiala en ambos).
- Para conectar un backend de IA propio usa **IA con tu proyecto (RAG)** (arriba). El gancho de programación `LV.agent.setProvider` sigue disponible y por defecto está vacío.
