import type { Property } from '@/domain/property';

export function formatWhatsAppNumber(value: string | null): string | null {
  const digits = value?.replace(/\D/g, '');
  if (!digits) return null;

  const nationalNumber = digits.startsWith('57') && digits.length === 12 ? digits.slice(2) : digits;
  return nationalNumber.length === 10
    ? nationalNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
    : null;
}

export function createWhatsAppUrl(property: Property, action: string): string | null {
  const number = property.contact.whatsappNumber?.replace(/\D/g, '');
  if (!number || !/^\d{11,15}$/.test(number)) return null;

  const location = [property.city, property.department].filter(Boolean).join(', ');
  const message = `Hola, quiero ${action} sobre ${property.name} en ${location}.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
