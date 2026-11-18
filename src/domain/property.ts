export type PropertySlug = 'casa-a-girardot' | 'casa-b-girardot';

export interface PropertyMedia {
  src: string;
  alt: string;
  caption?: string;
}

export interface PropertyFact {
  label: string;
  value: string;
}

export interface Property {
  id: string;
  slug: PropertySlug;
  archetype: 'residential-luxury';
  name: string;
  city: string;
  locationName?: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  facts: PropertyFact[];
  features: string[];
  media: {
    hero: PropertyMedia | null;
    gallery: PropertyMedia[];
    video: string | null;
  };
  offer?: {
    priceCop: number;
    negotiable: boolean;
  };
  contact: {
    whatsappNumber: string | null;
  };
  seo: {
    title: string;
    description: string;
  };
}
