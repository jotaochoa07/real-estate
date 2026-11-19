export type PropertySlug = 'casa-ricaurte-1' | 'casa-ricaurte-2';

export interface PropertyMedia {
  src: string;
  alt: string;
  caption?: string;
}

export interface PropertyVideo {
  youtubeId: string | null;
  title: string;
}

export interface PropertyFact {
  label: string;
  value: string;
}

export type EditorialSectionId =
  | 'hero'
  | 'property-video'
  | 'introduction'
  | 'facts'
  | 'gallery'
  | 'shared-video'
  | 'closed-sale'
  | 'bifamiliar'
  | 'main-home'
  | 'independent-apartment'
  | 'pool'
  | 'experience'
  | 'location'
  | 'offer';

export interface EditorialTitleLine {
  text: string;
  emphasis?: boolean;
}

export interface EditorialTitle {
  lines: EditorialTitleLine[];
}

export interface PropertyEditorial {
  sections: EditorialSectionId[];
  headerCta?: {
    intent: string;
  };
  hero: {
    eyebrow: string;
    title: EditorialTitle;
    titleClassName?: string;
    showTopline: boolean;
    showLocation: boolean;
    price?: {
      kicker: string;
      previousLabel: string;
      currentLabel: string;
      negotiableLabel: string;
    };
    propertyVideoLink?: {
      anchorId: string;
      eyebrow: string;
      label: string;
      ariaLabel: string;
    };
  };
  introduction: {
    eyebrow: string;
    title: EditorialTitle;
    body: string;
    aside: string;
  };
  gallery?: {
    eyebrow: string;
    title: EditorialTitle;
    description: string;
  };
  videos: {
    property?: {
      anchorId: string;
      eyebrow: string;
      title: string;
      description?: string;
    };
    shared?: {
      anchorId: string;
      eyebrow: string;
      title: string;
    };
  };
  narrativeBlocks?: Partial<Record<'closed-sale' | 'bifamiliar' | 'main-home' | 'independent-apartment' | 'pool', {
    eyebrow: string;
    title: EditorialTitle;
    body: string[];
    highlight?: string;
    features?: string[];
    mediaIndex?: number;
    tone: 'light' | 'dark';
  }>>;
  experience?: {
    eyebrow: string;
    title: EditorialTitle;
    body: string;
    secondary?: string;
    copyClassName?: string;
    featureMarker: 'icon' | 'number';
    visualLabel: string;
  };
  location?: {
    eyebrow: string;
    title: EditorialTitle;
    place: string;
    description: string;
    address?: string;
    note?: string;
    map?: {
      embedUrl: string;
      directionsUrl: string;
      title: string;
      directionsLabel: string;
    };
    lineStart: string;
  };
  offer?: {
    eyebrow: string;
    title: EditorialTitle;
    description?: string;
    priceLabel: string;
    previousPriceLabel: string;
    currentPriceLabel: string;
    negotiableLabel: string;
    primaryAction: {
      intent: string;
      label: string;
    };
    secondaryAction: {
      intent: string;
      label: string;
    };
  };
}

export interface Property {
  id: string;
  slug: PropertySlug;
  archetype: 'residential-luxury';
  name: string;
  city: string;
  department?: string;
  locationName?: string;
  facts: PropertyFact[];
  features: string[];
  media: {
    hero: PropertyMedia | null;
    gallery: PropertyMedia[];
    videos: {
      shared: PropertyVideo | null;
      property: PropertyVideo | null;
    };
  };
  offer?: {
    previousPriceCop?: number;
    priceCop: number;
    negotiable: boolean;
    saleLabel?: string;
    swapNote?: string;
  };
  contact: {
    whatsappNumber: string | null;
  };
  editorial: PropertyEditorial;
  seo: {
    title: string;
    description: string;
  };
}
