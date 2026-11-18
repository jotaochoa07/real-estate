import assert from 'node:assert/strict';
import test from 'node:test';
import { properties } from '../src/content/properties.ts';

test('Girardot property records keep unique slugs, identities, and media collections', () => {
  const casaA = properties['casa-a-girardot'];
  const casaB = properties['casa-b-girardot'];

  assert.notEqual(casaA.id, casaB.id);
  assert.notEqual(casaA.slug, casaB.slug);
  assert.notStrictEqual(casaA.media, casaB.media);
  assert.notStrictEqual(casaA.media.gallery, casaB.media.gallery);
});

test('Casa A contains only the confirmed facts and announced price', () => {
  const casaA = properties['casa-a-girardot'];

  assert.deepEqual(casaA.facts.map(({ value }) => value), ['1.000 m²', '5', '5 + 1', '12 personas']);
  assert.equal(casaA.offer?.priceCop, 580_000_000);
  assert.equal(casaA.offer?.negotiable, true);
});

test('Casa B contains supplied details without invented price, location, or photography', () => {
  const casaB = properties['casa-b-girardot'];

  assert.deepEqual(casaB.facts.map(({ value }) => value), ['750 m²', 'Mayor área', 'Bifamiliar', 'Apartamento privado']);
  assert.equal('offer' in casaB, false);
  assert.equal('locationName' in casaB, false);
  assert.equal(casaB.media.hero, null);
  assert.deepEqual(casaB.media.gallery, []);
  assert.equal(casaB.media.video, null);
});
