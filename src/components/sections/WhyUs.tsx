import { ShieldCheckIcon, LeafIcon, TagIcon, HeartIcon } from '@/components/icons'

const features = [
  {
    Icon: ShieldCheckIcon,
    title: '20 años de confianza',
    text: 'Sirviendo a las familias de Culiacán con calidad y honestidad desde siempre.',
  },
  {
    Icon: LeafIcon,
    title: 'Frescura todos los días',
    text: 'Productos frescos cada mañana, directos del campo y el mercado.',
  },
  {
    Icon: TagIcon,
    title: 'Precios que cuidan tu bolsillo',
    text: 'Ofertas de la semana y precios justos en todos nuestros departamentos.',
  },
  {
    Icon: HeartIcon,
    title: 'Te atendemos como en casa',
    text: 'Atención personalizada, con consejo y servicio de vecino a vecino.',
  },
]

export function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="section why-us" aria-labelledby="why-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">¿Por qué elegirnos?</span>
          <h2 id="why-title" className="section-title">La tienda de tu confianza</h2>
          <p className="section-intro">
            En Super Nallely encuentras calidad, buen precio y alguien que siempre te recibe con una sonrisa.
          </p>
        </div>
        <ul className="why-grid">
          {features.map(({ Icon, title, text }) => (
            <li key={title}>
              <article className="why-card">
                <span className="why-icon">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
