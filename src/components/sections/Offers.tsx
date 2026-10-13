import { TrendingDownIcon } from '@/components/icons'

const offers = [
  { product: 'Tomate Saladette', price: 28.9, previous: 34.9, unit: '/kg', category: 'Verdulería' },
  { product: 'Manzana Golden', price: 42.5, previous: 48, unit: '/kg', category: 'Frutería' },
  { product: 'Carne Molida de Res', price: 145, previous: 165, unit: '/kg', category: 'Carnicería' },
  { product: 'Leche Entera 1L', price: 26.9, previous: 29.5, unit: '/pza', category: 'Cremería' },
  { product: 'Aceite Nutrioli 1L', price: 38.9, previous: 44, unit: '/pza', category: 'Abarrotes' },
  { product: 'Suavitel 2L', price: 82, previous: 95, unit: '/pza', category: 'Limpieza' },
  { product: 'Bolillo Tradicional', price: 2.5, previous: 3, unit: '/pza', category: 'Panadería' },
  { product: 'Coca-Cola 600ml', price: 18, previous: 21, unit: '/pza', category: 'Bebidas' },
]

const currency = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 2,
})

export function Offers() {
  return (
    <section id="ofertas" className="section offers" aria-labelledby="offers-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Del 13 al 19 de octubre</span>
          <h2 id="offers-title" className="section-title">Ofertas de la Semana</h2>
          <p className="section-intro">
            Precios especiales válidos del <strong>lunes 13 al domingo 19 de octubre 2026</strong>.
          </p>
        </div>
        <ul className="offers-grid">
          {offers.map((offer) => {
            const savings = offer.previous - offer.price
            const discount = Math.round((savings / offer.previous) * 100)
            return (
              <li key={offer.product}>
                <article className="offer-card">
                  <span className="offer-badge">-{discount}%</span>
                  <span className="offer-category">{offer.category}</span>
                  <h3 className="offer-product">{offer.product}</h3>
                  <div className="offer-prices">
                    <span className="offer-current-price">
                      {currency.format(offer.price)}
                      <span className="offer-unit"> {offer.unit}</span>
                    </span>
                    <span className="offer-previous-price">{currency.format(offer.previous)}</span>
                  </div>
                  <span className="offer-savings">
                    <TrendingDownIcon />
                    Ahorras {currency.format(savings)}
                  </span>
                </article>
              </li>
            )
          })}
        </ul>
        <p className="offers-note">* Precios sujetos a disponibilidad. Imágenes ilustrativas.</p>
      </div>
    </section>
  )
}
