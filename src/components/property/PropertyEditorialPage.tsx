import Image from 'next/image';
import type { Property, PropertyMedia } from '@/domain/property';

type MediaFrameProps = {
  asset: PropertyMedia | null;
  label: string;
  className: string;
  priority?: boolean;
};

function MediaFrame({ asset, label, className, priority = false }: MediaFrameProps) {
  if (asset) {
    return (
      <figure className={`media-frame ${className}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes={priority ? '100vw' : '(max-width: 680px) 80vw, 50vw'}
          priority={priority}
        />
        {asset.caption ? <figcaption className="sr-only">{asset.caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <div className={`media-frame media-frame--pending ${className}`} role="img" aria-label={label}>
      <span className="media-frame__index">SMART HUNTER / ARCHIVO VISUAL</span>
      <span className="media-frame__caption">{label}</span>
      <span className="media-frame__mark" aria-hidden="true">+</span>
    </div>
  );
}

function Header({ property }: { property: Property }) {
  return (
    <header className="site-header" id="top">
      <a className="wordmark" href="#top" aria-label="Smart Hunter Real Estate, volver arriba">
        SMART HUNTER<span>REAL ESTATE</span>
      </a>
      <nav aria-label="Navegación principal">
        <a href="#gallery">La propiedad</a>
        <a href="#location">Ubicación</a>
        <a href="#contact">Contacto</a>
      </nav>
      <a className="header-cta" href="#contact">Conocer {property.name.split(' · ')[0]} <span aria-hidden="true">↗</span></a>
    </header>
  );
}

function Hero({ property }: { property: Property }) {
  const location = property.locationName ?? property.city;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <MediaFrame asset={property.media.hero} label="Fotografía principal pendiente de selección" className="hero__image" priority />
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__topline"><span>SMART HUNTER <i>·</i> RESIDENCIAL</span><span>{property.slug === 'casa-a-girardot' ? '01' : '02'} / GIRARDOT</span></div>
      <div className="hero__copy">
        <p className="eyebrow eyebrow--light">{property.eyebrow}</p>
        <h1 id="hero-title">{property.headline}</h1>
        <a className="text-link text-link--light" href="#property-intro">Descubrir la propiedad <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero__location"><span>{location}</span><span>{property.city}, Colombia</span></div>
      {!property.media.hero ? <span className="hero__asset-note">Fotografía real pendiente de selección</span> : null}
    </section>
  );
}

function Introduction({ property }: { property: Property }) {
  return (
    <section className="intro section-shell" id="property-intro" aria-labelledby="intro-title">
      <div className="intro__index"><span>01 — LA PROPIEDAD</span><span className="rule" aria-hidden="true" /><span>GIRARDOT / COLOMBIA</span></div>
      <div className="intro__body">
        <div>
          <p className="eyebrow">{property.locationName ?? 'Girardot · Colombia'}</p>
          <h2 id="intro-title">Una propiedad<br /><em>con identidad propia.</em></h2>
        </div>
        <div className="intro__aside"><p>{property.introduction}</p><span>Una lectura de la propiedad<br />en sus propios términos →</span></div>
      </div>
    </section>
  );
}

function Facts({ property }: { property: Property }) {
  return (
    <section className="facts" aria-label="Características principales">
      <div className="facts__heading"><span>02 — EN CIFRAS</span><span>DATOS VERIFICADOS DE LA PROPIEDAD</span></div>
      <dl className="facts__grid">
        {property.facts.map((fact) => (
          <div className="fact" key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Gallery({ property }: { property: Property }) {
  const frames = [property.media.gallery[0] ?? null, property.media.gallery[1] ?? null];

  return (
    <section className="gallery section-shell" id="gallery" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">03 — UNA MIRADA PROPIA</p>
        <h2 id="gallery-title">La propiedad,<br /><em>sin artificios.</em></h2>
        <p className="section-heading__note">{property.media.gallery.length ? 'Una selección de imágenes reales de la propiedad.' : 'La selección visual se completará con fotografías reales del inmueble. No utilizamos imágenes de stock como sustituto.'}</p>
      </div>
      <div className="gallery__collage">
        <MediaFrame asset={frames[0] ?? null} label="Fotografía real pendiente de selección" className="gallery__frame gallery__frame--large" />
        <MediaFrame asset={frames[1] ?? null} label="Detalle fotográfico pendiente de selección" className="gallery__frame gallery__frame--small" />
        <p className="gallery__caption"><span>SELECCIÓN VISUAL</span><span>{property.media.gallery.length ? 'Archivo visual de la propiedad' : 'Fotografías reales pendientes de selección'}</span></p>
      </div>
    </section>
  );
}

function Video({ property }: { property: Property }) {
  if (!property.media.video) return null;

  return (
    <section className="film section-shell" aria-labelledby="film-title">
      <p className="eyebrow">04 — RECORRIDO AUDIOVISUAL</p>
      <h2 id="film-title">La casa en <em>movimiento.</em></h2>
      <video className="film__video" controls preload="metadata" aria-label={`Recorrido audiovisual de ${property.name}`}>
        <source src={property.media.video} type="video/mp4" />
        Tu navegador no puede reproducir este video.
      </video>
    </section>
  );
}

function Experience({ property }: { property: Property }) {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="experience__visual">
        <MediaFrame asset={property.media.gallery[0] ?? null} label="Fotografía de la propiedad pendiente de selección" className="experience__image" />
        <span className="experience__vertical">ARQUITECTURA · ESPACIO · VIDA</span>
      </div>
      <div className="experience__copy">
        <p className="eyebrow">05 — VIDA EN CASA</p>
        <h2 id="experience-title">Espacio.<br />Privacidad.<br /><em>Otra manera.</em></h2>
        <p>{property.introduction}</p>
        <ul className="amenity-list">
          {property.features.map((feature, index) => <li key={feature}><span>{String(index + 1).padStart(2, '0')}</span>{feature}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Location({ property }: { property: Property }) {
  return (
    <section className="location section-shell" id="location" aria-labelledby="location-title">
      <p className="eyebrow">06 — UBICACIÓN</p>
      <div className="location__body">
        <h2 id="location-title">{property.city},<br /><em>con privacidad.</em></h2>
        <div>
          <p className="location__place">{property.locationName ?? 'Ubicación precisa por confirmar'}</p>
          <p>{property.city}, Colombia</p>
          <span className="location__note">Los detalles del entorno se agregarán al confirmar la información.</span>
        </div>
      </div>
      <div className="location__line"><span>REGIÓN DEL ALTO MAGDALENA</span><span>COLOMBIA <b aria-hidden="true">↗</b></span></div>
    </section>
  );
}

function createWhatsAppUrl(property: Property, action: string): string | null {
  const number = property.contact.whatsappNumber?.replace(/\D/g, '');
  if (!number || number.length < 10) return null;
  const message = `Hola, quiero ${action} sobre ${property.name} en ${property.city}.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function Offer({ property }: { property: Property }) {
  const whatsappUrl = createWhatsAppUrl(property, 'recibir información');
  const visitUrl = createWhatsAppUrl(property, 'agendar una visita');
  const price = property.offer
    ? new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(property.offer.priceCop)
    : null;

  return (
    <section className="offer" id="contact" aria-labelledby="contact-title">
      <div className="offer__top"><span>07 — PRECIO Y VISITAS</span><span>{property.name.toUpperCase()}</span></div>
      <div className="offer__body">
        <div><p className="eyebrow eyebrow--light">Una propiedad para descubrir</p><h2 id="contact-title">Hagamos espacio<br />para <em>conocerla.</em></h2><p className="offer__place">{property.locationName ?? property.city} · {property.city}</p></div>
        <div className="offer__price"><span>{price ? 'PRECIO ANUNCIADO' : 'PRECIO'}</span><strong>{price ?? 'No informado'}</strong><small>{property.offer?.negotiable ? 'Negociable' : 'Información pendiente de confirmación'}</small></div>
      </div>
      <div className="offer__actions">
        {whatsappUrl ? <a className="button button--light" href={whatsappUrl}>Solicitar información <span aria-hidden="true">↗</span></a> : <button className="button button--light" type="button" disabled>Solicitar información</button>}
        {visitUrl ? <a className="button button--outline" href={visitUrl}>Agendar una visita <span aria-hidden="true">↗</span></a> : <button className="button button--outline" type="button" disabled>Agendar una visita</button>}
        <p className="offer__status" role="status">{whatsappUrl ? 'Contacto por WhatsApp disponible.' : 'Canal comercial pendiente de configuración.'}</p>
      </div>
    </section>
  );
}

function Footer({ property }: { property: Property }) {
  return (
    <footer className="site-footer">
      <a className="wordmark wordmark--footer" href="#top" aria-label="Smart Hunter, volver arriba">SMART HUNTER<span>REAL ESTATE</span></a>
      <p>{property.name}<br />{property.city}, Colombia</p>
      <a href="#top" className="footer-top">VOLVER ARRIBA ↑</a>
    </footer>
  );
}

export function PropertyEditorialPage({ property }: { property: Property }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header property={property} />
      <main id="main-content">
        <Hero property={property} />
        <Introduction property={property} />
        <Facts property={property} />
        <Gallery property={property} />
        <Video property={property} />
        <Experience property={property} />
        <Location property={property} />
        <Offer property={property} />
      </main>
      <Footer property={property} />
    </>
  );
}
