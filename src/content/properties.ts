import type { Property, PropertySlug } from '@/domain/property';

export const properties = {
  'casa-a-girardot': {
    id: 'girardot-casa-a',
    slug: 'casa-a-girardot',
    archetype: 'residential-luxury',
    name: 'Casa A · San Marcos',
    city: 'Girardot',
    locationName: 'Condominio San Marcos Poblado',
    eyebrow: 'Una casa para compartir Girardot',
    headline: 'El tiempo toma otra forma.',
    introduction: 'Espacio, privacidad y una piscina propia para disfrutar Girardot en compañía.',
    facts: [
      { label: 'Área reportada', value: '1.000 m²' },
      { label: 'Habitaciones', value: '5' },
      { label: 'Baños + servicio', value: '5 + 1' },
      { label: 'Capacidad', value: '12 personas' },
    ],
    features: ['Piscina privada', 'Zona BBQ', 'Capacidad para 12 personas'],
    media: {
      hero: null,
      gallery: [],
      video: null,
    },
    offer: { priceCop: 580_000_000, negotiable: true },
    contact: { whatsappNumber: null },
    seo: {
      title: 'Casa privada en Girardot | San Marcos Poblado',
      description: 'Casa en el Condominio San Marcos Poblado, Girardot. 1.000 m² reportados, cinco habitaciones, piscina privada y capacidad para 12 personas.',
    },
  },
  'casa-b-girardot': {
    id: 'girardot-casa-b',
    slug: 'casa-b-girardot',
    archetype: 'residential-luxury',
    name: 'Casa B · Girardot',
    city: 'Girardot',
    eyebrow: 'Dos espacios, una misma propiedad',
    headline: 'Una casa con dos formas de habitar.',
    introduction: 'Un lote de 750 m², una mayor área construida y una distribución bifamiliar con apartamento privado independiente.',
    facts: [
      { label: 'Área del terreno', value: '750 m²' },
      { label: 'Área construida', value: 'Mayor área' },
      { label: 'Distribución', value: 'Bifamiliar' },
      { label: 'Unidad independiente', value: 'Apartamento privado' },
    ],
    features: ['Distribución bifamiliar', 'Apartamento privado independiente'],
    media: {
      hero: null,
      gallery: [],
      video: null,
    },
    contact: { whatsappNumber: null },
    seo: {
      title: 'Casa bifamiliar en Girardot | Smart Hunter',
      description: 'Propiedad en Girardot con terreno de 750 m², mayor área construida y apartamento privado independiente.',
    },
  },
} satisfies Record<PropertySlug, Property>;
