import { properties } from '@/content/properties';
import type { Property, PropertySlug } from '@/domain/property';

export function getPropertyBySlug(slug: string): Property | undefined {
  return Object.values(properties).find((property) => property.slug === slug);
}

export function getPropertySlugs(): PropertySlug[] {
  return Object.keys(properties) as PropertySlug[];
}
