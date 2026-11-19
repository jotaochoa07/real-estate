# SmartHunter Real Estate Premium
Build a reusable premium real-estate presentation system, beginning with Girardot Casa A; branch: `feature/smart-hunter-real-estate` (to be initialized); delivery: single reviewable slice; test runner: Node.js built-in `node --test` plus visual browser checks.
Engram mirror: pending until the `real-estate` project is backed; forecast: one editorial property page and reusable presentation foundation, roughly 500–800 authored lines excluding generated files.

## Specs

### S1 — Distinctive editorial art direction
- Authorized scope: create the first complete Girardot property presentation with photographic-led, section-specific editorial composition; no stock imagery may substitute for property photography.
- User wording: “No confundas modularidad con una interfaz genérica. Cada sección debe tener dirección artística propia y estar compuesta con intención editorial. La fotografía debe dominar la experiencia. No utilices imágenes de stock como sustituto de las fotografías reales del inmueble.”
- Acceptance: each section has a deliberate visual composition; real property images are used only after the user selects/provides them; pending image slots are clearly identified in previews and never presented as final photography.
- Checks: inspect desktop and mobile screenshots for visual hierarchy, composition, typography, consistency, spacing, and conversion quality.

### S2 — Reusable architecture without visual sameness
- Authorized scope: separate property content/configuration from design; share appropriate components and design tokens while allowing Residential Luxury and Investment & Hospitality to use distinct narrative compositions.
- User wording: “Construir un sistema modular y configurable, no dos páginas independientes.” / “Los arquetipos pueden compartir componentes y lenguaje visual, pero no tienen que compartir exactamente la misma composición narrativa.”
- Acceptance: Casa A content is not embedded as generic layout copy; the implementation supports property-specific data and future archetypes without making every section look like the same template.
- Checks: Node tests validate the Casa A data contract and required facts; structural readback confirms content and presentation are separated.

### S3 — Verified Casa A facts only
- Authorized scope: present only confirmed Casa A facts: 800 m² without attributing it to lot or construction area; 5 bedrooms; 5 bathrooms plus service bathroom; capacity 12; private pool; BBQ; Condominio San Marcos Poblado; announced price COP $580 million negotiable.
- User wording: “No inventar información faltante.” Latest correction: “La casa tiene 800 metros cuadrados, para que ajustes. Precio: 580M”
- Acceptance: no unsupported construction-area, rental-income, distance, amenity, availability, contact, or investment claims; unknown values are omitted or remain pending configuration.
- Checks: automated data assertions and rendered-page text inspection.

### S9 — Two distinct Girardot video roles
- Authorized scope: configure a shared Girardot video titled “10 razones para mirar esta propiedad de otra manera.” and a separate video exclusively about Casa 1; keep their YouTube IDs independently configurable.
- User wording: “Habrán entonces 2 videos en la landing para que organicemos cómo lo pondremos. El que hice anteriormente de 10 razones para comprar esas casas. Y el otro que es exclusivamente sobre esta casa 1.”
- Acceptance: Casa 1 renders both supplied YouTube videos in a deliberate order; the shared video configuration can be reused by the other property page.
- Checks: automated config assertions and rendered-page inspection confirm both supplied videos are embedded.

### S10 — Supplied Casa 1 selling points
- Authorized scope: present the property as an “a puerta cerrada” sale with the listed furnishings and equipment; mention its independent bifamiliar apartment and the possibility of living there or evaluating Airbnb rental, private condominium security, two kitchens, five bedrooms and five bathrooms plus service, economical property tax, private pool, nearby commercial areas, and built-in masonry furniture. Describe rental only as potential; never promise occupancy, profitability, or income.
- User wording: “A Puerta cerrada: incluye todo: muebles, camas, ventiladores, electrodomésticos, neveras, lavadora, decoración, etc.” / “Apartamento independiente (bifamiliar) o oportunidad de vivir y arrendar en Arbnb.” / “Seguridad privada en el condominio” / “2 Cocinas” / “5 habitaciones / 5 baños” / “Predial económico” / “Piscina Privada” / “Zonas comerciales cerca” / “Muebles en mampostería”
- Acceptance: supplied commercial facts are included without adding unconfirmed distances, rents, revenue, inventory guarantees beyond the stated inclusions, or condominium services.
- Checks: data assertions and rendered-page text inspection.

### S11 — Correct property location and price framing
- Authorized scope: identify Casa 1 as located in San Marcos Poblado, Ricaurte, Cundinamarca, not Girardot; show the previous COP $750 million crossed out in red followed by the current COP $580 million in a prominent Hero and final CTA; keep the current price negotiable and state possible swaps are subject to evaluation.
- User wording: “El condominio se llama San Marcos Poblado, en Ricaurte, Cundinamarca (No Girardot)” / “Precio: Antes $750M Hoy, precio de Remate: $580M negociables.” / “Posibles permutas a evaluar”
- Acceptance: public page and Casa 1 metadata use Ricaurte, Cundinamarca; current and previous price labels are clear; swaps are described as possibilities to evaluate, not a guarantee.
- Checks: tests assert location and offer values; inspect rendered title, metadata, and price copy.

### S12 — Prominent direct WhatsApp contact
- Authorized scope: show the supplied WhatsApp contact number prominently in Casa 1's landing and link to a contextual conversation.
- User wording: “Viasible y grande mi contacto a Whatsapp: 301 1360508. Usar logo de Whatsapp visible”
- Acceptance: the visible contact displays `301 136 0508`, uses a recognizable WhatsApp mark, and its link opens a contextual message for Casa 1.
- Checks: automated data/URL assertions and browser inspection of the contact CTA.

### S13 — Clear Casa 1 hero and featured video sequence
- Authorized scope: use the current user-approved Hero title “Casa campestre, para vivir y rentar” and subtitle “Dos espacios: Casa principal + apartamento independiente”; keep the Casa 1 video in a dedicated prominent block immediately after the Hero and the shared video later.
- User wording: “El título del Hero no dice nada” / “El video Casa 1 debe estar en el Hero más destacado.” / “O en un bloque dedicado después del Hero” / “Casa campestre, para vivir y rentar” / “Dos espacios: Casa principal + apartamento independiente”
- Acceptance: the Hero uses the supplied title/subtitle and removes redundant visible location/brand eyebrow copy; video sequence remains unchanged.
- Checks: inspect Hero and featured video in desktop/mobile browser views.

### S14 — Commercially clear and definitive Casa 1 editorial copy
- Authorized scope: update the Casa 1 section copy exactly as supplied, preserve the current visual direction and media, avoid unsupported claims or area attribution, remove plural references to multiple houses from this individual landing, and make the $750M crossed-out price in red followed by the current $580M price prominent in the Hero and final CTA.
- User wording: “Una propiedad. Dos posibilidades.” / “Una casa para disfrutar. Un espacio para rentar.” / “$580.000.000 negociables.” / “No prometer rentabilidad ni ingresos.” / “No atribuir los 800 m² a área construida o terreno sin confirmación.” / “Corregir cualquier referencia plural a varias casas dentro de la landing individual.”
- Acceptance: supplied copy is applied to the matching sections; area remains “800 m²” with no land/construction attribution; no promise of rent income; the Hero and final CTA show `ANTES $750.000.000` in clearly legible red strikethrough and a much larger `HOY $580.000.000`; no plural “casas” copy remains on Casa 1.
- Checks: test exact Casa 1 copy and price configuration; run tests, typecheck, production build, and inspect desktop/mobile composition.

### S15 — Casa 1 refinements: balanced features and verified map
- Authorized scope: refine only Casa 1's existing Hero, feature-list presentation, and location section; make the feature list two balanced columns on desktop and one readable column on mobile with a white background, subtle separators, and discreet icons; add a responsive Google Maps embed and directions link using the exact user-supplied map URL/coordinates.
- User wording: “No cambiar fotografías ni rutas de medios.” / “No modificar Casa 2.” / “No modificar datos comerciales.” / “No alterar componentes compartidos que puedan afectar Casa 2.” / “Antes de implementar: Verificar la ubicación exacta del condominio.” / “No inventar coordenadas ni utilizar un pin aproximado de Ricaurte.”
- Acceptance: Casa 2 rendering/data and Casa 1 media/offer data remain unchanged; no redundant visible Hero location/category labels remain; the location map uses the supplied pin and the verified condominium address, adapts to desktop/mobile, and links to directions for the same supplied coordinates.
- Checks: tests assert Casa 2 data remains unchanged, exact map URL, price values and copy; inspect responsive screenshots and run tests, typecheck, and production build.

### S16 — Canonical Casa 1 URL
- Authorized scope: use `/casa-ricaurte-1` as Casa 1's canonical public path on `https://realestate.smarthunter.co`, redirect the previous Casa 1 URL and the root route to it, and leave Casa 2's route and data unchanged.
- User wording: “Ya enlacé el dominio en Coolify, será realestate.smarthunter.co pero entonces necesitamos que el slug quede - Casa 1: `/casa-ricaurte-1` Después puedes desplegar y guarda versión final en github”
- Acceptance: Casa 1 content configuration uses `casa-ricaurte-1` as its slug; canonical metadata and home route use the requested domain/path; the previous Casa 1 path redirects to the canonical route; Casa 2 remains at its existing route.
- Checks: unit tests assert the canonical route and redirects; tests, typecheck, and production build generate the canonical Casa 1 route while preserving Casa 2.

### S4 — Conversion and technical foundations
- Authorized scope: prepare property-contextual WhatsApp, viewing-request and information-request flows, per-property SEO/Open Graph, and conversion-event hooks without fabricating contact endpoints or analytics credentials.
- User wording: “WhatsApp con mensajes contextualizados por propiedad.” / “Agendamiento de visitas.” / “Solicitud de información.” / “Eventos de analítica para medir conversiones.” / “SEO y metadatos individuales por inmueble.” / “Open Graph para compartir cada propiedad.”
- Acceptance: no placeholder credential, phone number, or endpoint is shipped as functional; unavailable integrations are explicitly configurable and safely inert until real values exist.
- Checks: unit tests for generated contact URLs/messages when configured; browser interaction checks for all enabled CTAs and form states.

### S5 — Responsive, accessible, performance-conscious page
- Authorized scope: implement responsive desktop/mobile behavior, semantic structure, visible keyboard focus, reduced-motion support, progressive media loading, and avoid unnecessary dependencies.
- User wording: “Excelente experiencia móvil y desktop.” / “Responsive real.” / “Imágenes optimizadas y carga progresiva.” / “Accesibilidad.” / “Buen rendimiento.” / “Sin dependencias innecesarias.”
- Acceptance: no horizontal overflow at target widths; reduced-motion preference disables nonessential effects; images use appropriate dimensions/loading strategy; primary actions remain keyboard accessible.
- Checks: browser screenshots at desktop and mobile, responsive visual inspection, keyboard/focus pass, reduced-motion pass, and applicable Node tests.

### S6 — Visual review gate before declaring Casa A complete
- Authorized scope: capture and present desktop and mobile screenshots before considering the first implementation complete.
- User wording: “Antes de dar por terminada la primera implementación, presenta capturas de desktop y móvil. Evalúa jerarquía visual, composición, tipografía, consistencia, espacios y calidad de conversión.”
- Acceptance: screenshots are actually rendered from the implementation at desktop and mobile sizes and reviewed against every named criterion; unresolved media/integration gaps are reported honestly.
- Checks: human visual inspection of the screenshots and documented pass/pending findings.

### S7 — Do not start Casa B before Casa A approval
- Authorized scope: build Casa A as the first visual reference; stop before configuring or implementing the second property.
- User wording: “No avances a la segunda propiedad hasta que la primera alcance el estándar visual aprobado.”
- Acceptance: Casa B is not built until the user approves Casa A after seeing desktop/mobile captures.
- Checks: inspect the candidate scope; no Casa B page/configuration is included in this slice.

### S8 — Preserve approved scope and avoid unnecessary approval interruptions
- Authorized scope: proceed through ordinary implementation, local checks, and visual iteration within the approved Casa A direction without asking for authorization at each step; pause only for a genuine missing decision, required consent, or external credential/remote action.
- User wording: “Aprobada. Necesito es que me sorprendas y no estar pidiendo autorización para cada cosa.”
- Acceptance: continue independently within the stated scope; do not ask for asset selection before local structural work is useful, but never fabricate or publish missing assets/contact details.
- Checks: report concrete blockers only and distinguish them from normal execution steps.

## Tasks
- T1 — Establish a local baseline and a runnable minimal page/test harness; linked S1–S8; route inline; status pending; commit: pending.
- T2 — Build the Casa A editorial page and reusable data/component foundation; linked S1–S5, S9–S15; route inline; status pending; commit: pending.
- T3 — Run functional/accessibility/responsive checks and capture desktop/mobile screenshots; linked S3–S6; route inline; status pending; commit: pending.
- T4 — Present visual evaluation and stop before Casa B; linked S6–S7; route inline; status pending; commit: pending.
- T5 — Set Casa 1's canonical public URL and preserve its legacy redirect; linked S16; route inline; status local implementation and checks complete, publish/deploy pending remote-session authorization; commit: pending.

## Log

### L1 — Original user request
“# Proyecto: SmartHunter Real Estate Premium

## Objetivo

Acá necesito que invoques a agente Dali como experto en front-end

Rediseñar la landing actual de las casas de Girardot y convertirla en el primer caso de un sistema reutilizable de presentación comercial para propiedades y activos inmobiliarios premium.

Referencia actual:
https://invest.smarthunter.co/casa-girardot-ma-page

Nada que ver con lo que quiero, solo rescatar la información. Quiero un Hero descrestador y cinematográfico. Tipografía grande en el Hero. Motion graphics, máscaras.

Para cada casa tengo fotos y videos que después te compartiré y seleccionaré, pero están acá C:\Workspace\Clients\Casas_Girardot\Fotos_y_Videos

Referencia futura de otro arquetipo que adaptaré seguramente a nuestra nueva template de real-estate:
https://invest.smarthunter.co/teaser-amarte-esp

## Visión creativa

Crear una experiencia de real estate premium, inspirada en firmas boutique inmobiliarias, revistas de arquitectura y plataformas internacionales de propiedades de lujo.

No debe parecer una plantilla inmobiliaria convencional ni una landing de marketing genérica.

Dirección visual:
- Editorial Luxury.
- Minimalismo arquitectónico.
- Fotografía protagonista.
- Tipografía sofisticada.
- Composiciones asimétricas.
- Paleta marfil, arena, carbón y blanco cálido.
- Microinteracciones sutiles.
- Excelente experiencia móvil y desktop.

## Arquitectura del producto

Construir un sistema modular y configurable, no dos páginas independientes.

Separar:
1. Design system: tipografías, colores, espaciado, componentes y animaciones.
2. Componentes compartidos: hero, galería, ficha técnica, ubicación, CTA, formularios y navegación.
3. Configuración de propiedades: contenido, imágenes, videos, precio, características y argumentos comerciales.
4. Arquetipos de presentación:
   - Residential Luxury: casas, villas, apartamentos y propiedades vacacionales.
   - Investment & Hospitality: hoteles, edificios y activos comerciales.

Los arquetipos pueden compartir componentes y lenguaje visual, pero no tienen que compartir exactamente la misma composición narrativa.

## Primera implementación: Girardot

Crear dos páginas individuales utilizando el mismo sistema.

Casa A:
- 1.000 m².
- 5 habitaciones.
- 5 baños más baño de servicio.
- Capacidad para 12 personas.
- Piscina privada.
- BBQ.
- Condominio San Marcos Poblado.
- Precio anunciado: $580 millones negociables.

Casa B:
- 750 m² de terreno.
- Mayor área construida.
- Distribución bifamiliar.
- Apartamento privado independiente.

No inventar información faltante. Mantener los datos configurables.

## Experiencia de usuario

Estructura propuesta:
1. Hero cinematográfico con fotografía dominante.
2. Presentación editorial de la propiedad.
3. Indicadores principales.
4. Galería fotográfica inmersiva.
5. Video o recorrido audiovisual.
6. Arquitectura y distribución.
7. Experiencia de uso y lifestyle.
8. Ubicación y entorno.
9. Argumento de inversión o renta, cuando aplique.
10. Precio y CTA comercial.
11. Footer minimalista.

## Conversión

- WhatsApp con mensajes contextualizados por propiedad.
- Agendamiento de visitas.
- Solicitud de información.
- Eventos de analítica para medir conversiones.
- SEO y metadatos individuales por inmueble.
- Open Graph para compartir cada propiedad.

## Requisitos técnicos

Primero auditar el repositorio y la implementación existente.

Identificar stack, arquitectura, componentes reutilizables, integraciones y mecanismo de despliegue.

Reutilizar lo que tenga sentido, sin conservar decisiones visuales deficientes por simple comodidad.

Priorizar:
- Código limpio y mantenible.
- Componentes modulares.
- Configuración de propiedades independiente del diseño.
- Responsive real.
- Imágenes optimizadas y carga progresiva.
- Accesibilidad.
- Buen rendimiento.
- Sin dependencias innecesarias.

No modificar ni desplegar producción sin autorización.

## Criterio de aceptación

El resultado debe sentirse como una presentación de una propiedad de alto valor, no como un formulario comercial disfrazado de página web.

Primero desarrollar una página completa de Girardot como referencia visual. Validar diseño, responsive y conversión. Después configurar la segunda casa con el mismo sistema.

Dejar preparada la arquitectura para desarrollar posteriormente el arquetipo Investment & Hospitality para Hotel Amarte.

Antes de implementar, presentar diagnóstico del repositorio, propuesta de arquitectura y dirección visual.”

### L2 — Repository and persistence decisions
The user designated `https://github.com/jotaochoa07/real-estate` as the repository for code/version backups and asked to use Engram, but explicitly said not to force memory into another project. The remote repository is empty on `main`; the local workspace is empty. Engram did not back `real-estate` yet, so its mirror remains pending.

### L3 — Approved art direction and execution constraints
The user approved the direction to begin Casa A and asked the agent to proceed without seeking approval for routine steps. Each section needs distinct intentional editorial art direction; photography must dominate, and stock images are not acceptable substitutes for real property images. Before calling Casa A complete, present desktop and mobile screenshots and evaluate hierarchy, composition, typography, consistency, spacing, and conversion quality. Do not advance to Casa B until Casa A is visually approved. Register project architecture, decisions, and checkpoints in Engram only when `real-estate` is backed.

### L4 — Confirmed Casa A area and two video roles (2026-11-18)
“Habrán entonces 2 videos en la landing para que organicemos cómo lo pondremos. El que hice anteriormente de 10 razones para comprar esas casas. Y el otro que es exclusivamente sobre esta casa 1.

La casa tiene 800 metros cuadrados, para que ajustes. Precio: 580M”

### L5 — Supplied YouTube links, Casa 1 details, corrected location, price and swaps (2026-11-18)
“Enlace de video Casa 1: https://youtu.be/kvjobT6w3mA

Enlace video 10 razones: https://youtu.be/rJWKPUV2EqI

Importante que en la Landing se mencione:
- A Puerta cerrada: incluye todo: muebles, camas, ventiladores, electrodomésticos, neveras, lavadora, decoración, etc.
- Apartamento independiente (bifamiliar) o oportunidad de vivir y arrendar en Arbnb.
- Seguridad privada en el condominio
- 2 Cocinas
- 5 habitaciones / 5 baños
- Predial económico
- Piscina Privada
- Zonas comerciales cerca
- Muebles en mampostería
- El condominio se llama San Marcos Poblado, en Ricaurte, Cundinamarca (No Girardot)

Precio: Antes $750M Hoy, precio de Remate: $580M negociables.

Posibles permutas a evaluar”

### L6 — Visible WhatsApp contact (2026-11-18)
“Viasible y grande mi contacto a Whatsapp: 301 1360508. Usar logo de Whatsapp visible”

### L7 — Hero headline and Casa 1 video placement (2026-11-18)
“El título del Hero no dice nada”

“El video Casa 1 debe estar en el Hero más destacado.”

“O en un bloque dedicado después del Hero”

### L8 — Local visual and build verification (2026-11-18)
Updated the Hero headline to “Vive la casa. Evalúa el apartamento.” and placed the Casa 1 video immediately after the Hero; the shared 10-reasons video remains separate later. Browser inspection at desktop and mobile widths confirmed the hero uses the real pool/property photo, the WhatsApp number is visible in the header, and the gallery shows actual Casa 1 photos. `npm test` passed 4/4, `npm run typecheck` passed, `npm run build` passed and prerendered both Casa routes. Build still warns that `metadataBase` is unset; defer choosing a canonical public host until one is supplied. Visual review: strong photo-led hierarchy and distinctive serif headline; mobile composition remains legible with CTAs visible; keyboard focus and reduced-motion checks are still pending.

### L9 — Definitive editorial copy and stronger commercial price treatment (2026-11-18)
“Importante que el precio esté más comercial, está demasiado exclusivo y escondido. Mostrarse más que pasó de 750 tachado en rojo a 580M. No importa si se repite en el Hero y abajo.

Corrige estos textos:

# Real Estate — Revisión editorial Casa 1

## Objetivo

Elevar la calidad del copy de la landing de Casa 1. Mantener la estética editorial, minimalista y premium, pero sustituir los textos genéricos por una narrativa comercial que comunique el diferencial de la propiedad.

## Concepto central

**Una propiedad. Dos posibilidades.**

La narrativa debe destacar:

- Casa principal para disfrute familiar.
- Apartamento independiente.
- Potencial de renta vacacional.
- Piscina y espacios sociales.
- Ubicación en Ricaurte, Condominio San Marcos Poblado.

## Copy definitivo por sección

### Hero

Título: Una casa para disfrutar. Un espacio para rentar.\
Subtítulo: Ricaurte · Condominio San Marcos Poblado\
Texto auxiliar: Dos espacios independientes. Una propiedad con más posibilidades.

### Video

Título: Hay lugares que se sienten como vacaciones.\
Descripción: Conoce la propiedad y descubre todo lo que puede ofrecerte.

### Presentación

Título: Dos espacios. Una misma propiedad.\
Texto: Una distribución que permite disfrutar la casa principal y aprovechar un apartamento independiente, con posibilidades de uso y renta por separado.

### Indicadores

800 m² (no atribuir a terreno o construcción hasta verificar).\
5 habitaciones.\
5+1 baños.\
Capacidad para 12 personas.

### Galería

Título: Cada espacio tiene algo que ofrecer.\
Texto: Piscina, zonas sociales, espacios interiores y rincones para disfrutar sin prisa.

### Video editorial

Título: 10 razones para mirar esta propiedad de otra manera.

### Diferencial

Título: Disfruta una parte. Aprovecha las dos.\
Texto: Una casa principal para disfrutar en familia y un apartamento independiente con potencial para generar ingresos mediante renta vacacional.\
Texto secundario: Una distribución que abre posibilidades: uso familiar, alojamiento de invitados o aprovechamiento comercial del espacio independiente.

### Ubicación

Título: Ricaurte. Tu espacio, lejos de la rutina.\
Texto: Condominio San Marcos Poblado. Un entorno residencial privado para disfrutar el clima y la tranquilidad de la zona.

### CTA final

Título: Hay propiedades que merecen conocerse en persona.\
Texto: Ven a descubrir sus espacios, su distribución y todas las posibilidades que ofrece.\
Precio: $580.000.000 negociables.\
Botón principal: QUIERO CONOCER LA PROPIEDAD.\
Botón secundario: CONSULTAR POR WHATSAPP.

## Restricciones de implementación

1. Mantener diseño, tipografía, paleta, composición y animaciones actuales.
2. No modificar fotografías ni rutas de medios.
3. No cambiar estructura de componentes ni arquitectura.
4. No inventar características adicionales.
5. No prometer rentabilidad ni ingresos.
6. No atribuir los 800 m² a área construida o terreno sin confirmación.
7. Revisar que los textos no rompan la composición responsive.
8. Corregir cualquier referencia plural a varias casas dentro de la landing individual.
9. Mantener el precio y contacto actuales, sujetos a verificación comercial.”

### L10 — Editorial implementation and verification (2026-11-18)
Applied the approved Casa 1 copy in its existing sections and retained the current media/configuration. The Hero now displays the previous $750M in red strikethrough beside a prominent $580M price; the final CTA repeats the full COP amount, negotiability, and existing contact. `npm test` passed 5/5, `npm run typecheck` passed, and `npm run build` passed; build continues to warn that `metadataBase` is unset because no canonical deployment host was supplied. Desktop and mobile browser inspections confirmed the price panel, hero headline, and Casa 1 video heading render. The local preview uses an existing dev server on port 3000; no deployment was performed.

### L11 — Second Casa 1 visual refinement round (2026-11-18)
“Vamos bien, pero arreglemos algunos detalles:

Vamos con una segunda ronda de refinamiento visual de Casa 1 en Real Estate.

El diseño general está aprobado. No rediseñar la landing ni modificar su arquitectura. Implementar únicamente estos ajustes:

Textos: Ricaurte. Condominio San Marcos Poblado. Smart Hunter. Residencial (Si son para SEO que queden ocultos, pero dañan la estética)

### 1. HERO

Reemplazar el titular actual por:

"Casa campestre, para vivir y rentar"

Subtítulo:\
"Dos espacios: Casa principal + apartamento independiente "

Mantener la fotografía actual, el estilo editorial y la composición premium. Ajustar saltos de línea y tamaños para que el titular tenga presencia sin ocupar excesivo espacio vertical.

### 2. PRECIO

El precio anterior de $750.000.000 está demasiado poco visible.

- Aumentar tamaño y contraste.
- Usar rojo claramente perceptible.
- Aplicar tachado visible.
- Mostrar "ANTES" como etiqueta.
- Mostrar "HOY" junto a $580.000.000 en tamaño mucho mayor.
- Mantener jerarquía visual entre precio anterior y actual.
- Revisar especialmente la legibilidad en móvil.

No cambiar los valores comerciales.

### 3. LISTADO DE CARACTERÍSTICAS

La lista actual debe pasar a dos columnas en desktop.

- Distribución equilibrada.
- Separadores sutiles.
- Iconografía discreta.
- Buena separación entre elementos.
- En móvil volver a una sola columna.
- Evitar textos excesivamente pequeños.
- Fondo Blanco para mejorar legibilidad.

### 4. GOOGLE MAPS (UBICACIÓN)

Agregar una sección de ubicación con Google Maps para Condominio San Marcos Poblado, Ricaurte, Cundinamarca.

\\<iframe src="https\\://www\\.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.6071208836556!2d-74.726651!3d4.2962432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f26f140bfb1bb%3A0xc2e420a5e5e60309!2sSan%20Marcos%20Poblado!5e0!3m2!1sen!2sco!4v1795035667879!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin">\\</iframe>

Antes de implementar:

- Verificar la ubicación exacta del condominio.
- No inventar coordenadas ni utilizar un pin aproximado de Ricaurte.
- Si existe una dirección o coordenada verificada en el repositorio, utilizarla.
- Si no existe, solicitar el enlace exacto de Google Maps antes de finalizar esta sección.

Incluir mapa responsive, título editorial y enlace para abrir indicaciones en Google Maps.

### RESTRICCIONES

- No cambiar fotografías ni rutas de medios.
- No modificar Casa 2.
- No modificar datos comerciales.
- No alterar componentes compartidos que puedan afectar Casa 2.
- Mantener la estética editorial existente.
- Revisar desktop y móvil.

### VALIDACIÓN

Ejecutar tests, typecheck y build.\
Generar nuevas capturas desktop y móvil.\
No desplegar hasta recibir aprobación.”

### L12 — Refinement verification (2026-11-18)
- Updated the Casa 1 hero, high-contrast before/after pricing, white two-column desktop amenity list with one-column mobile breakpoint, and exact Google Maps embed/address.
- Narrow-browser visual review exposed overlap between the hero actions and overlaid price card; increased Casa 1/mobile hero-copy clearance and added a regression assertion. Casa B configuration/media remain unchanged.
- `npm test`: passed (5/5); `npm run typecheck`: passed; `npm run build`: passed (both property routes prerendered); `git diff --check`: passed.
- Desktop, narrow viewport, feature-list and location captures were inspected in the browser. The map resolved to the exact San Marcos Poblado place card and supplied coordinate. No deployment performed.

### L13 — Canonical Casa 1 URL request (2026-11-18)
“Ya enlacé el dominio en Coolify, será realestate.smarthunter.co pero entonces necesitamos que el slug quede

- Casa 1: `/casa-ricaurte-1`

Después puedes desplegar y guarda versión final en github”

### L14 — Local route verification (2026-11-18)
- Changed the property record’s canonical slug to `casa-ricaurte-1`; updated Casa 1 visual gates to the new slug while leaving real photo asset paths intact.
- Added `https://realestate.smarthunter.co/casa-ricaurte-1` canonical/Open Graph metadata, made `/` redirect there, and preserved the prior `/casas/casa-a-girardot` route as a redirect; Casa 2 remains `/casas/casa-b-girardot`.
- Parent checks: `npm test` passed (6/6), `npm run typecheck` passed, `npm run build` passed and prerendered the canonical Casa 1 and Casa 2 routes; `git diff --check` passed.
- Independent route verifier found no S16 blocker; its tests/typecheck passed, but its scratch build could not run because the generated temp path contained `!` and Webpack rejected that path. Parent production build succeeded.
- Remote push/deployment are pending explicit authorization for the GitHub/Coolify credential sessions. No commit or remote action performed.
