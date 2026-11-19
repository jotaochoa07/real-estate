import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PropertyEditorialPage } from '@/components/property/PropertyEditorialPage';
import { getPropertyBySlug } from '@/lib/properties';

const CASA_ONE_PUBLIC_URL = 'https://realestate.smarthunter.co/casa-ricaurte-1';

export async function generateMetadata(): Promise<Metadata> {
  const property = getPropertyBySlug('casa-ricaurte-1');
  if (!property) return {};

  return {
    title: property.seo.title,
    description: property.seo.description,
    alternates: { canonical: CASA_ONE_PUBLIC_URL },
    openGraph: {
      type: 'website',
      url: CASA_ONE_PUBLIC_URL,
      title: property.seo.title,
      description: property.seo.description,
      images: [{ url: property.seo.image.src, alt: property.seo.image.alt }],
    },
  };
}

export default function CasaRicaurteOnePage() {
  const property = getPropertyBySlug('casa-ricaurte-1');
  if (!property) notFound();

  return <PropertyEditorialPage property={property} />;
}
