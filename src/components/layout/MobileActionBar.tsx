import { PhoneIcon, WhatsAppIcon } from '@/components/icons'

export function MobileActionBar() {
  return (
    <nav className="mobile-bar" aria-label="Acciones rápidas">
      <a href="tel:+526671234567" className="mobile-bar-btn call" aria-label="Llamar a Super Nallely">
        <PhoneIcon />
        Llamar
      </a>
      <a
        href="https://wa.me/526671234567"
        className="mobile-bar-btn wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </nav>
  )
}
