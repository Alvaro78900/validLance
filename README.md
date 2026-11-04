# ValidLance · versión independiente (standalone)

Aplicación web 100 % autónoma: **tres archivos estáticos** (más una imagen para compartir), sin servidor, sin cuentas y sin depender de Claude ni de ningún otro servicio externo.

```
ValidLance_App/
├── index.html   ← la página (estructura y carga de los otros dos)
├── styles.css   ← todos los estilos (tema oscuro «celestial-profesional», móvil, accesibilidad)
├── app.js       ← toda la lógica (Centro de control, Panel, Valida, Compite, Lanza, Genera, el mentor Astro y Orión 2.0)
├── og.jpg       ← imagen que aparece al compartir el enlace (WhatsApp, LinkedIn, X…)
├── manifest.webmanifest, sw.js, icon-*.png, apple-touch-icon.png ← para instalarla como app y abrirla sin conexión
├── .github/workflows/datos-mercado.yml + scripts/datos-mercado.mjs ← datos reales de mercado cada día (ver «Datos reales»)
└── README.md
```

**Actualizar la versión publicada en GitHub Pages (repositorio `validLance`):** en el repositorio pulsa *Add file → Upload files*, arrastra todos los archivos de esta carpeta menos el README (sustituyen a los anteriores) y pulsa *Commit changes*. Cada versión lleva su huella en el nombre (`app.js?v=…`), así que ningún móvil mezcla la versión vieja con la nueva.

**Novedades (3 nov 2026, 2.ª entrega) · Orión lee los mercados y te arma tu plan:** nueva **Mesa de Orión** (botón del gráfico en su galaxia y los módulos que orbitan a su alrededor) con cinco pestañas. **Mercados:** horarios de Tokio, Londres, Europa, Nueva York, forex y cripto **en tu hora** (qué está abierto ahora y la franja de más volumen), **clima del mercado** y un **radar** de 11 mercados (S&P 500, Nasdaq 100, Euro Stoxx 50, bolsa española, emergentes, bonos, oro, petróleo, bitcoin, ethereum y euro/dólar) con tendencia, impulso, volatilidad, distancia a máximos, mini gráfico y fuente y fecha de cada dato. Pide «lee el mercado del S&P 500» (o cualquier símbolo de EE. UU.) y Orión hace su **lectura técnica** (medias, RSI, volatilidad, soportes y resistencias, qué vigilar) y te dice **qué encaja ahora con tu plan**: seguir aportando, escalonar, rebalancear, reducir el tamaño o el tipo de estrategia; nunca «compra X». Datos reales: bolsas con tu clave gratuita de **Alpha Vantage** (25 consultas al día, se guardan), precio de hoy y noticias en inglés con **Finnhub**, y sin clave **CoinGecko** (cripto), **BCE** (euro/dólar) y **GDELT** (prensa económica en español). Sin datos, lo dice; el **modo práctica** usa series simuladas y marcadas. **Noticias:** titulares reales de las últimas horas por mercado (EE. UU., Europa, España, Asia, divisas, materias primas, cripto, empresas), agrupados por tema e impacto, con **cómo suele afectar** cada tema. Nunca se inventan. **Planes:** 9 tipos de inversión (indexada, jubilación, objetivo con fecha, dividendos, crecimiento, conservador, inmobiliario, cripto y núcleo-satélite), cada uno con encaje con tu perfil y plazo, reparto, vehículos genéricos, fases, números, riesgos y fiscalidad general. **Trading:** test de 8 preguntas que ordena scalping, intradía, swing, posicional y sistemático mensual según tu tiempo, tu horario, tu capital, tu carácter y tu experiencia, con los mercados que encajan con tus horas. **Psico:** análisis de psicotrading de 12 preguntas que da reglas a medida, tu semana en bloques con los horarios reales de los mercados, un programa de 4 semanas y métricas, y un **diario de operaciones** que analiza tus patrones (con o sin plan, emoción alta, después de perder). Todo se guarda solo en tu navegador. En la vista previa de Claude las conexiones externas no están permitidas: los datos reales funcionan en la app publicada.

**Novedades (3 nov 2026) · Orión 2.0, nueva arquitectura interna:** Orión trabaja ahora como un agente completo, en cinco módulos. **1) Núcleo cognitivo:** un prompt maestro con su identidad y sus límites y cinco pasos de razonamiento (entender, descomponer, decidir herramientas, comprobar y responder), con bucle **ReAct** (pensamiento → acción → observación). **2) Memoria:** a corto plazo, un buffer con presupuesto de tokens (los últimos turnos completos y lo anterior resumido); a largo plazo, **RAG con base de datos vectorial local** (IndexedDB, embeddings propios de 384 dimensiones y búsqueda híbrida con MMR) para tus datos, conversaciones, notas y documentos que subas. Todo se queda en tu navegador. **3) Herramientas:** 17 funciones con **JSON Schema** (perfil, memoria, cotización, noticias, tamaño de posición, interés compuesto, plan de inversión, estrategia, esperanza, backtest, Monte Carlo, análisis de datos…), con permisos, límites y tiempo máximo, y un **sandbox** (Web Worker sin red, 2,5 s como máximo) para cálculos y código. **4) Orquestación y estado:** bucle explícito **Observar → Pensar → Actuar → Evaluar → Responder**; cada ejecución se guarda con sus puntos de control, se puede **reanudar** si se cortó y **auditar** (exportar en JSON). **5) Guardrails:** filtros de entrada (bloquea inyecciones de instrucciones y oculta tarjetas, IBAN, DNI y claves), de datos (lo recuperado entra delimitado y sin órdenes), de argumentos y de salida (sin órdenes de compra o venta, sin promesas, sin productos concretos y con el riesgo a la vista). Nuevo botón **«Cerebro de Orión»** en su galaxia con cuatro pestañas: Memoria, Auditoría, Seguridad y Laboratorio. Funciona con Claude (vista previa en Claude), con Gemini (tu clave; lo que escribes se envía a Google y en el plan gratuito puede usarse para mejorar sus productos), con la IA en tu dispositivo o, sin ninguno, con su motor propio.

**Novedades (2 nov 2026) · La galaxia de Orión:** al pulsar en Orión (en la constelación, en su ficha, desde Astro o con Ctrl + K) la app te lleva a **su propia sección**, porque la inversión y el trading van aparte de validar tu idea: un **fondo oscuro de espacio** con la **constelación real de Orión** (Betelgeuse, Bellatrix, el Cinturón, Rigel, la nebulosa M42 y el Lazo de Barnard) y sus vecinas. Orión **se materializa en holograma en el centro** y te recibe; su **chat individual queda abajo**. A su alrededor orbitan sus **módulos**: plan de inversión, estrategia de trading, gestión del riesgo, interés compuesto, mercado y psicotrading. Mientras conversas, el chat crece y Orión se hace pequeño arriba (tócalo para volver a verlo grande). «← ValidLance» o Esc te devuelven a la app. Orión ahora **estructura planes de inversión en 5 fases** con tus datos (colchón según tus gastos, deudas, reparto orientativo por tipo de activo según tu perfil y tu plazo, aportación automática, rebalanceo anual y escenarios hipotéticos) y **diseña estrategias de trading con reglas** (tendencia, ruptura, reversión o sistema mensual: contexto, entrada, stop, tamaño, salida, límites de seguridad, validación y diario), y **calcula la esperanza** de tu sistema y la racha de pérdidas que debes esperar. Nunca recomienda productos ni operaciones concretas.

**Novedades (1 nov 2026) · Entrada holográfica de Orión:** al pulsar su silueta, unas **miras de objetivo** se cierran sobre él, sale un **haz de datos** dorado hasta donde va a aparecer, se abre un **portal holográfico** (proyector con cono de luz y líneas de escaneo, anillos HUD girando y registro de arranque «ORN·01 › ENLACE ESTABLECIDO… SINCRONIZANDO MERCADO 100 % … ORIÓN EN LÍNEA»), cientos de **partículas se juntan** en su silueta mientras un **escáner lo revela** de abajo arriba (primero holograma dorado, luego en color, con un parpadeo de interferencia RGB) y termina con **destello y onda expansiva**. En el móvil se materializa en grande en el centro de la pantalla y luego se coloca encima de su chat. Al volver a la órbita, el efecto va al revés: se desintegra y regresa por el haz. Con movimiento reducido aparece sin efecto.

**Novedades (31 oct 2026, noche, 2.ª entrega) · Orión, agente de IA en bucle autónomo:** cada mensaje recorre el bucle completo y se ve pasar en su chat: **1) analiza** tu pregunta (qué pides de verdad, si es algo personal, tu emoción, el riesgo y los datos que cuentas de ti: capital, edad, plazo, deudas, colchón…, que guarda en su memoria, solo en tu navegador); **2) planea y usa herramientas** (tu perfil, su memoria, cotización, noticias, tamaño de posición, interés compuesto, riesgo/beneficio y su base de conocimiento); **3) redacta** un borrador para tu caso; **4) se revisa** antes de responder (¿contesta lo que pediste?, ¿está adaptado a ti?, ¿no da órdenes de compra o venta ni promete rentabilidades?, ¿no se inventa cifras?, ¿habla del riesgo?) y corrige si hace falta; y **5) responde**, con «Cómo lo he pensado» desplegable. **Funciona con LLM:** con Claude cuando la app se abre como vista previa en Claude (pide permiso la primera vez y usa tu cuenta de Claude), con Gemini (tu clave) o con la IA en tu dispositivo; sin ninguno, su motor propio sigue el mismo bucle. Al pulsar su silueta (en la órbita, en la lista o en su ficha) **aparece flotando en grande** junto a su chat, con bocadillo, y reacciona mientras escucha, piensa y habla. **Al pulsar a Astro en el centro** Orión vuelve volando a su órbita y te atiende Astro. Cada estrella en formación tiene **su color** (Lyra azul, Vega violeta, Sirio ámbar y Andrómeda verde) y la sección tiene de fondo un **espacio profundo lleno de constelaciones** que se mueven. «¿Qué sabes de mí?» y «Olvida mis datos» también funcionan.

**Novedades (31 oct 2026, última entrega) · Constelación de agentes y Orión con presencia propia:** en la sección **Agentes** (botón central de la barra de abajo) **Astro está en el centro**, con su avatar vivo de siempre, y a su alrededor giran los agentes especializados, uno por modelo de negocio, cada uno con su especialidad al lado. **Orión** ya está formado; **Lyra** (SaaS), **Vega** (e-commerce), **Sirio** (servicios) y **Andrómeda** (formación) brillan como **estrellas** porque aún se están formando. Nuevo diseño de Orión: robot con **casco negro** brillante (cresta, costuras, módulos laterales con luces granates, antena con estrella dorada), **visor holográfico vivo** con un gráfico de mercado que se forma en tiempo real (velas, media móvil dorada, último precio y barrido de escaneo) y **constelaciones y anillos HUD** girando alrededor. Al tocarlo, Orión **sale flotando** de la órbita, se queda en la esquina y abre su chat (hoja inferior en el móvil, con Orión asomado). Mientras está fuera ocupa el sitio flotante y Astro espera en el centro; con «Volver a la órbita» regresa volando. Escucha, piensa y habla (el visor y los anillos reaccionan), y es más listo: responde aunque estés a medias de sus 6 preguntas, explica «más fácil» o «con un ejemplo», calcula **interés compuesto** («simula: 100 € al mes, 10 años, 5 %») y **riesgo/beneficio** («entrada 50, stop 48, objetivo 56»), y sabe de cómo empezar, diversificación, brókers, impuestos, inflación y diario de trading. Con IA, piensa con su propio prompt y revisa cada respuesta.

**Novedades (31 oct 2026, noche) · Orión, agente de trading e inversión (Premium):** robot con casco futurista y un gráfico vivo en el visor. Hace un **onboarding de 6 preguntas** (qué quieres hacer, experiencia, reacción ante una caída del 20 %, dinero que podrías perder, mercado y tiempo) y arma tu perfil (prudente, moderado o dinámico) para adaptar todo. Explica gestión del riesgo, psicotrading, ETFs y fondos indexados, acciones, tipos de mercado, estrategias y apalancamiento; **calcula tu tamaño de posición**; y **te frena y cuestiona** si hablas de meter todos tus ahorros, pedir un préstamo, apalancarte mucho o recuperar pérdidas. Cotizaciones y noticias reales con tu clave gratuita de Finnhub (sin clave, precios simulados y marcados; las noticias nunca se inventan). Con el cerebro de IA, piensa con su propio prompt maestro y **revisa cada respuesta** antes de enviarla. No dice qué comprar ni vender: en España eso es asesoramiento regulado por la CNMV.

**Novedades (31 oct 2026, noche) · Más ordenada y Astro con IA de verdad:** cada apartado (Compite, Genera, Lanza, Panel) empieza con una guía corta: **qué es**, **3 pasos** con su estado, **qué consigues** y un solo botón con el siguiente paso; se puede ocultar. El Centro va en orden: primero tus apartados (cada uno dice qué consigues) y después tu semana. Astro ya no salta con ventanas cuando la guía está a la vista. **Cerebro de Astro** (botón «IA» en su chat): «Básico» (reglas), «IA en tu dispositivo» (WebLLM: modelo de ≈ 1 GB que se descarga una vez y funciona en Chrome/Edge de ordenador, gratis, sin clave y sin enviar nada) o «IA con tu clave de Gemini» (más lista; lo que escribes se envía a Google). Con IA, Astro razona con los datos de tu proyecto y trabaja en **bucle con herramientas**: analiza tu idea, mira competidores reales, crea la landing, prepara la encuesta, abre apartados, anota tus resultados o lanza el modo autónomo, y te explica lo que ha visto. Si la IA falla o tarda, contesta con sus reglas. **Voz:** micrófono para hablarle y, si quieres, te contesta en voz alta mientras su avatar habla.

**Novedades (31 oct 2026, tarde) · Valida, laboratorio de validación:** eliges a quién captar (**clientes, freelancers o las dos partes** de un marketplace) y la landing y la encuesta se adaptan solas; en «las dos partes», la encuesta pregunta primero el papel y solo muestra las preguntas de cada uno. Cada pregunta dice **qué mide** (frecuencia del problema, alternativa, intención 0–10, disposición a pagar…), con tamaños Exprés / Estándar / Completa y un **simulador de móvil** para probarla. Para recibir respuestas **sin cuentas**, basta tu email (FormSubmit, gratis; se activa con el primer correo) o una dirección de Formspree/Tally, con botón de **envío de prueba**. Paso «Lanzar» con publicar en Netlify Drop y mensaje listo para WhatsApp. Cabecera con tus tres señales (registro, intención alta y pago) frente a la meta de tu modelo.

**Novedades (31 oct 2026):** más rápida (archivos minificados: app.js −22 %, primera pantalla en la mitad de tiempo, análisis e intro más ágiles). **Niveles y logros**: 14 insignias por cosas reales de tu proyecto, puntos (XP), 6 niveles (Soñador → Fundador), racha de días y celebración con confeti granate y dorado. **Buscador rápido** (Ctrl + K o «/») para saltar a cualquier apartado o acción. Luz que sigue al ratón e inclinación 3D en las tarjetas, borde vivo en lo recomendado, números que cuentan, indicador deslizante y vibración corta en la barra del móvil.

**Novedades (30 oct 2026, 2.ª entrega):** **Astro en modo autónomo**: botón «Modo autónomo» en el Centro (o dile a Astro «hazlo tú»). Trabaja en bucle (observa → decide → hace → comprueba): entiende tu idea, analiza mercado y competencia, busca competidores reales, compara tu precio con sus precios publicados, crea tu landing, prepara la prueba de demanda y resume el Go / No-Go. Se para y te pregunta lo que solo tú sabes, y deja para ti publicar y elegir la forma legal; se puede pausar, minimizar o parar. Además: Centro con **mapa-constelación** de tu proyecto y tarjetas con mini gráficos (radar de rivales, precio, landing, embudo, trámites y progreso), Lanza con tres tarjetas visuales para comparar autónomo, comunidad de bienes y SL, estados vacíos ilustrados, insignia de cada apartado en la cabecera y cielo estrellado en la bienvenida.

**Novedades (30 oct 2026):** competidores reales verificados en 22 nichos con web, precio publicado y fuente; búsquedas reales para cualquier otra idea; presupuesto del perfil o del texto (también 0 €); nombre corto del proyecto; entrada más rápida (y directa al volver); Astro sin ventanas encima en el móvil; barra en el orden de la ruta; botones de 44 px; copia de seguridad (menú de la cuenta → Guardar / Recuperar copia); se instala como app. En 1–2 minutos se ve en https://alvaro78900.github.io/validLance/ (si no, recarga con Ctrl + F5).

## Datos reales de mercado para Orión (paso a paso)

Cada día laborable, GitHub descarga los datos con **tus claves** (guardadas como secretos, nunca en el código) y publica `datos/mercado.json` junto a la app. Orión lo lee solo: nadie más tiene que crear claves.

**Archivos:** `.github/workflows/datos-mercado.yml` (cuándo se ejecuta) y `scripts/datos-mercado.mjs` (qué descarga). Súbelos al repositorio con esa misma ruta de carpetas.

1. **Claves gratuitas** (no piden tarjeta):
   - Alpha Vantage → alphavantage.co/support/#api-key (bolsas, oro, plata, bonos y petróleo). Obligatoria.
   - FRED → fredaccount.stlouisfed.org → «API Keys» (tipos de la Fed, bonos e inflación de EE. UU.). Recomendada.
   - Finnhub → finnhub.io/register (cierre del día y noticias en inglés). Opcional.
2. **Secretos del repositorio:** en GitHub, repositorio `validLance` → **Settings → Secrets and variables → Actions → New repository secret**. Crea `ALPHAVANTAGE_KEY`, `FRED_KEY` y `FINNHUB_KEY` (nombre exacto y la clave como valor).
3. **Primera ejecución:** pestaña **Actions** → «Datos de mercado para Orión» → **Run workflow**. Tarda unos 4 minutos (Alpha Vantage gratis va a 5 consultas por minuto). Al terminar aparece un commit «Datos de mercado …» con `datos/mercado.json`.
4. **Comprobar:** abre la app → Orión → Mesa (botón del gráfico) → Mercados: debe poner «datos del día ✓» y salir la sección **Economía**.
5. **Después, solo:** se actualiza cada día laborable hacia las 22:40 (tras el cierre de Nueva York) y a las 7:15. Si una fuente falla, se mantiene lo último bueno y el aviso queda en Actions.

Sin clave hacen falta: BCE (tipo de depósito e inflación de la zona euro y de España), CoinGecko, divisas del BCE y GDELT (prensa en español). El plan gratuito de Alpha Vantage es para uso personal y educativo: si la app pasa a tener clientes, revisa sus condiciones o usa un plan con licencia para mostrar datos a terceros.

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
