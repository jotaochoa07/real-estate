# Smart Hunter Real Estate Premium

A Next.js foundation for editorial real-estate presentations. Property facts and media are configured independently from the shared page components; real property photography must be supplied before a listing is launch-ready.

## Architecture

- `src/domain/property.ts` defines the typed property contract.
- `src/content/properties.ts` stores independent Casa A and Casa B content and media references.
- `src/app/casas/[slug]/page.tsx` creates one static route and metadata set per property.
- `src/components/property/` contains the shared editorial composition. Sections share a design system, not a generic card layout.
- `public/properties/<slug>/` is the property-specific home for approved photographs and video.
- Next.js `standalone` output feeds the production Docker image.

Casa B only contains information already supplied. Its price, exact location, and media remain unset until verified.

## Local development

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000/casa-ricaurte-1`. The root route redirects there; the former Casa 1 URL also redirects to this canonical path. Use `npm test`, `npm run typecheck`, and `npm run build` for checks.

## Coolify deployment preparation

See [Coolify deployment notes](docs/deploy-coolify.md). The container listens on `0.0.0.0:3000`. The configured domain is `https://realestate.smarthunter.co`; DNS is managed outside this repository.
