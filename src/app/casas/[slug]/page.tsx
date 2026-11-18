import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PropertyEditorialPage } from '@/components/property/PropertyEditorialPage';
import { getPropertyBySlug, getPropertySlugs } from '@/lib/properties';

type PropertyRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PropertyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return {
    title: property.seo.title,
    description: property.seo.description,
    openGraph: {
      type: 'website',
      title: property.seo.title,
      description: property.seo.description,
      ...(property.media.hero ? { images: [{ url: property.media.hero.src, alt: property.media.hero.alt }] } : {}),
    },
  };
}

export default async function PropertyRoute({ params }: PropertyRouteProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return <PropertyEditorialPage property={property} />;
}
