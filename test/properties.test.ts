import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { properties } from '../src/content/properties.ts';
import { createWhatsAppUrl, formatWhatsAppNumber } from '../src/lib/contact.ts';

test('Girardot property records keep unique slugs, identities, and media collections', () => {
  const casaA = properties['casa-ricaurte-1'];
  const casaB = properties['casa-ricaurte-2'];

  assert.notEqual(casaA.id, casaB.id);
  assert.notEqual(casaA.slug, casaB.slug);
  assert.notStrictEqual(casaA.media, casaB.media);
  assert.notStrictEqual(casaA.media.gallery, casaB.media.gallery);
  assert.notStrictEqual(casaA.editorial, casaB.editorial);
  assert.notDeepEqual(casaA.editorial.sections, casaB.editorial.sections);
});

test('Casa 1 uses the approved public URL and its former route redirects', () => {
  const casaOneRoute = readFileSync(join(process.cwd(), 'src/app/casa-ricaurte-1/page.tsx'), 'utf8');
  const legacyRoute = readFileSync(join(process.cwd(), 'src/app/casas/[slug]/page.tsx'), 'utf8');
  const homeRoute = readFileSync(join(process.cwd(), 'src/app/page.tsx'), 'utf8');
  const casaTwoRoute = readFileSync(join(process.cwd(), 'src/app/casa-ricaurte-2/page.tsx'), 'utf8');

  assert.ok(casaOneRoute.includes("getPropertyBySlug('casa-ricaurte-1')"));
  assert.ok(casaOneRoute.includes('https://realestate.smarthunter.co/casa-ricaurte-1'));
  assert.ok(legacyRoute.includes("redirect('/casa-ricaurte-1')"));
  assert.ok(legacyRoute.includes("redirect('/casa-ricaurte-2')"));
  assert.ok(casaTwoRoute.includes("getPropertyBySlug('casa-ricaurte-2')"));
  assert.ok(casaTwoRoute.includes('https://realestate.smarthunter.co/casa-ricaurte-2'));
  assert.ok(homeRoute.includes("redirect('/casa-ricaurte-1')"));
  assert.equal(properties['casa-ricaurte-1'].slug, 'casa-ricaurte-1');
  assert.equal(properties['casa-ricaurte-2'].slug, 'casa-ricaurte-2');
});

test('Casa A contains only the confirmed facts and announced price', () => {
  const casaA = properties['casa-ricaurte-1'];

  assert.deepEqual(casaA.facts.map(({ value }) => value), ['800 m²', '5', '5 + 1', '12 personas']);
  assert.equal(casaA.offer?.priceCop, 580_000_000);
  assert.equal(casaA.offer?.previousPriceCop, 750_000_000);
  assert.equal(casaA.offer?.negotiable, true);
  assert.equal(casaA.offer?.saleLabel, 'Precio de remate');
  assert.equal(casaA.offer?.swapNote, 'Posibles permutas a evaluar.');
  assert.equal(casaA.city, 'Ricaurte');
  assert.equal(casaA.department, 'Cundinamarca');
  assert.equal(casaA.seo.title.includes('Girardot'), false);
  assert.equal(casaA.contact.whatsappNumber, '573011360508');
});

test('Casa A keeps its approved editorial composition in its configuration', () => {
  const casaA = properties['casa-ricaurte-1'];
  const pageSource = readFileSync(join(process.cwd(), 'src/components/property/PropertyEditorialPage.tsx'), 'utf8');
  const styles = readFileSync(join(process.cwd(), 'src/app/globals.css'), 'utf8');

  assert.deepEqual(casaA.editorial.sections, ['hero', 'property-video', 'introduction', 'facts', 'gallery', 'shared-video', 'experience', 'location', 'offer']);
  assert.equal(casaA.editorial.hero.title.lines.map(({ text }) => text).join(' '), 'Casa campestre, para vivir y rentar');
  assert.equal(casaA.editorial.hero.eyebrow, 'Dos espacios: Casa principal + apartamento independiente');
  assert.equal(casaA.editorial.introduction.body, 'Una distribución que permite disfrutar la casa principal y aprovechar un apartamento independiente, con posibilidades de uso y renta por separado.');
  assert.equal(casaA.facts[0]?.value, '800 m²');
  assert.equal(casaA.media.videos.property?.title, 'Hay lugares que se sienten como vacaciones.');
  assert.equal(casaA.media.videos.shared?.title, '10 razones para comprar estas casas');

  for (const copy of [
    '10 razones para mirar esta propiedad de otra manera.',
    'Dos espacios. Una misma propiedad.',
    'Cada espacio tiene algo que ofrecer.',
    'Piscina, zonas sociales, espacios interiores y rincones para disfrutar sin prisa.',
    'Disfruta una parte. Aprovecha las dos.',
    'Una casa principal para disfrutar en familia y un apartamento independiente con potencial para generar ingresos mediante renta vacacional.',
    'Una distribución que abre posibilidades: uso familiar, alojamiento de invitados o aprovechamiento comercial del espacio independiente.',
    'Tu espacio, lejos de la rutina.',
    'Un entorno residencial privado para disfrutar el clima y la tranquilidad de la zona.',
    'Hay propiedades que merecen conocerse en persona.',
    'Ven a descubrir sus espacios, su distribución y todas las posibilidades que ofrece.',
    'QUIERO CONOCER LA PROPIEDAD',
    'CONSULTAR POR WHATSAPP',
    'ANTES',
    'HOY',
    'Km 4.5 vía Ricaurte–Agua de Dios, vereda Limoncitos, Ricaurte, Cundinamarca.',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.6071208836556!2d-74.726651!3d4.2962432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f26f140bfb1bb%3A0xc2e420a5e5e60309!2sSan%20Marcos%20Poblado!5e0!3m2!1sen!2sco!4v1795035667879!5m2!1sen!2sco',
    'destination=4.2962432%2C-74.726651',
    'hero__title--casa-one',
    'experience__copy--casa-one',
  ]) assert.ok(JSON.stringify(casaA.editorial).includes(copy), `Missing Casa 1 editorial copy or presentation value: ${copy}`);

  assert.equal(pageSource.includes('isCasaOne'), false);
  assert.equal(pageSource.includes('casaOneMap'), false);
  assert.equal(pageSource.includes("slug === 'casa-ricaurte-1'"), false);
  assert.match(styles, /\.hero__price\s*\{[^}]*\}/);
  assert.match(styles, /\.hero__copy\s*\{[^}]*margin-bottom:\s*13rem/);
  assert.match(styles, /\.amenity-list--casa-one\s*\{[^}]*grid-template-columns:\s*repeat\(2/);
  assert.match(styles, /\.location__map-frame\s*\{[^}]*aspect-ratio:/);
  assert.match(styles, /\.offer__price del[^{]*\{[^}]*color:\s*#?[a-f0-9]+/i);
});

test('Casa B has an independent editorial narrative and uses only its real photography', () => {
  const casaB = properties['casa-ricaurte-2'];

  assert.deepEqual(casaB.facts.map(({ value }) => value), ['700 m²', '7', '7', '2', '1', '4', 'Bifamiliar']);
  assert.ok(casaB.features.includes('7 habitaciones'));
  assert.ok(casaB.features.includes('7 baños'));
  assert.ok(casaB.editorial.narrativeBlocks?.['main-home']?.features?.includes('7 baños'));
  assert.equal(casaB.offer?.priceCop, 650_000_000);
  assert.equal(casaB.offer?.previousPriceCop, 750_000_000);
  assert.equal(casaB.offer?.negotiable, false);
  assert.equal(casaB.locationName, 'Condominio San Marcos Poblado');
  assert.equal(casaB.city, 'Ricaurte');
  assert.equal(casaB.department, 'Cundinamarca');
  assert.equal(casaB.media.hero?.src, '/properties/casa-b-girardot/20261107_124114.jpg');
  assert.ok(casaB.media.gallery.every(({ src }) => src.startsWith('/properties/casa-b-girardot/')));
  assert.ok([casaB.media.hero, ...casaB.media.gallery].every((asset) => asset && existsSync(join(process.cwd(), 'public', asset.src.slice(1)))));
  assert.equal(casaB.media.videos.shared?.title, '10 razones para comprar estas casas');
  assert.equal(casaB.media.videos.property?.youtubeId, 'SWz5ofRMEVU');
  assert.equal(casaB.media.videos.property?.title, 'Recorrido de Casa 2.');
  assert.equal(casaB.media.videos.shared?.youtubeId, 'rJWKPUV2EqI');
  assert.deepEqual(casaB.editorial.sections, ['hero', 'property-video', 'closed-sale', 'facts', 'bifamiliar', 'main-home', 'independent-apartment', 'pool', 'gallery', 'shared-video', 'location', 'offer']);
  assert.equal(casaB.editorial.hero.title.lines.map(({ text }) => text).join(' '), 'Llegas con las maletas. Lo demás ya está aquí.');
  assert.equal(casaB.editorial.narrativeBlocks?.['closed-sale']?.highlight, 'SOLO TRAE TU ROPA. LO DEMÁS TE ESPERA.');
  assert.deepEqual(casaB.editorial.narrativeBlocks?.['independent-apartment']?.features, ['Sala-comedor', '2 habitaciones', 'Cocina']);
  assert.equal(casaB.editorial.videos.property?.title, 'Conoce Casa 2 por dentro.');
});

test('Casa A uses its own real property photography without assigning images to Casa B', () => {
  const casaA = properties['casa-ricaurte-1'];
  const casaB = properties['casa-ricaurte-2'];

  assert.equal(casaA.media.hero?.src, '/properties/casa-a-girardot/hero-pool.webp');
  assert.ok(casaA.media.gallery.length >= 5);
  assert.ok(casaA.media.gallery.every(({ src }) => src.startsWith('/properties/casa-a-girardot/')));
  assert.ok([casaA.media.hero, ...casaA.media.gallery].every((asset) =>
    asset && existsSync(join(process.cwd(), 'public', asset.src.slice(1))),
  ));
  assert.equal(casaA.media.videos.shared?.title, '10 razones para comprar estas casas');
  assert.equal(casaA.media.videos.property?.title, 'Hay lugares que se sienten como vacaciones.');
  assert.equal(casaA.media.videos.shared?.youtubeId, 'rJWKPUV2EqI');
  assert.equal(casaA.media.videos.property?.youtubeId, 'kvjobT6w3mA');
  assert.strictEqual(casaA.media.videos.shared, casaB.media.videos.shared);
  assert.deepEqual(casaA.features, [
    'Venta a puerta cerrada: muebles, camas, ventiladores, electrodomésticos, neveras, lavadora y decoración.',
    'Apartamento independiente con distribución bifamiliar.',
    'Posibilidad de vivir en la casa o evaluar renta por Airbnb.',
    'Seguridad privada en el condominio.',
    'Dos cocinas.',
    'Cinco habitaciones y cinco baños, más baño de servicio.',
    'Piscina privada y zona BBQ.',
    'Predial económico.',
    'Zonas comerciales cercanas.',
    'Muebles en mampostería.',
  ]);
  assert.equal(formatWhatsAppNumber(casaA.contact.whatsappNumber), '301 136 0508');
  assert.equal(
    createWhatsAppUrl(casaA, 'recibir información'),
    'https://wa.me/573011360508?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20Casa%20A%20%C2%B7%20San%20Marcos%20en%20Ricaurte%2C%20Cundinamarca.',
  );
  assert.ok(casaB.media.hero?.src.startsWith('/properties/casa-b-girardot/'));
  assert.ok(casaB.media.gallery.every(({ src }) => src.startsWith('/properties/casa-b-girardot/')));
});
