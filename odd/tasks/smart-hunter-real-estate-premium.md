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
- Authorized scope: present only confirmed Casa A facts: 1,000 m²; 5 bedrooms; 5 bathrooms plus service bathroom; capacity 12; private pool; BBQ; Condominio San Marcos Poblado; announced price COP $580 million negotiable.
- User wording: “No inventar información faltante.”
- Acceptance: no unsupported construction-area, rental-income, distance, amenity, availability, contact, or investment claims; unknown values are omitted or remain pending configuration.
- Checks: automated data assertions and rendered-page text inspection.

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
- T2 — Build the Casa A editorial page and reusable data/component foundation; linked S1–S5; route inline; status pending; commit: pending.
- T3 — Run functional/accessibility/responsive checks and capture desktop/mobile screenshots; linked S3–S6; route inline; status pending; commit: pending.
- T4 — Present visual evaluation and stop before Casa B; linked S6–S7; route inline; status pending; commit: pending.

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
