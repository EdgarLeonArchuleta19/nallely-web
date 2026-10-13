import { ShieldCheckIcon, LeafIcon, TagIcon, TruckIcon, HeartIcon, PhoneIcon, TagIcon as TagAlt } from '@/components/icons'

const badges = [
  { Icon: LeafIcon, text: 'Frescos diarios' },
  { Icon: TagIcon, text: 'Precios justos' },
  { Icon: TruckIcon, text: 'A domicilio' },
  { Icon: HeartIcon, text: 'Te atendemos bien' },
]

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-content container">
        <span className="hero-years">
          <ShieldCheckIcon />
          Más de 20 años en Culiacán
        </span>
        <h2 id="hero-title" className="hero-title">
          Bienvenidos a <span className="highlight">Super Nallely</span>
        </h2>
        <p className="hero-subtitle">
          Tu tienda de confianza. Calidad, frescura y el mejor precio para tu familia,
          como de vecino a vecino.
        </p>
        <p className="hero-tagline">¡Puro poder Culiacán!</p>
        <div className="hero-actions">
          <a href="#ofertas" className="btn btn-cream">
            <TagAlt width={20} height={20} />
            Ver ofertas de la semana
          </a>
          <a href="tel:+526671234567" className="btn btn-outline-light">
            <PhoneIcon width={20} height={20} />
            Llamar ahora
          </a>
        </div>
        <ul className="hero-badges" aria-label="Razones para comprar con nosotros">
          {badges.map(({ Icon, text }) => (
            <li key={text} className="badge">
              <Icon />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
