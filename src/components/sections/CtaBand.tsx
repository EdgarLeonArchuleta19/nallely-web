import { PhoneIcon, WhatsAppIcon, MapPinIcon } from '@/components/icons'

export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-band-content container">
        <h2 id="cta-title">Ven a visitarnos</h2>
        <p>
          Haz tu despensa con nosotros o pide a domicilio. Con gusto te preparamos
          tu pedido y te lo llevamos hasta tu casa.
        </p>
        <p className="cta-band-address">
          <MapPinIcon />
          Blvd. Pedro Infante #1234, Col. Centro, Culiacán
        </p>
        <div className="cta-band-actions">
          <a href="tel:+526671234567" className="btn btn-cream">
            <PhoneIcon width={20} height={20} />
            Llamar ahora
          </a>
          <a
            href="https://wa.me/526671234567"
            className="btn btn-outline-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon width={20} height={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
