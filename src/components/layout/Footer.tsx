import logo from '@/assets/logo-tienda.jpg'
import {
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  CreditCardIcon,
  BanknoteIcon,
  LandmarkIcon,
} from '@/components/icons'

const schedule = [
  'Lunes a viernes: 7:00 - 22:00',
  'Sábados: 7:00 - 22:00',
  'Domingos: 8:00 - 21:00',
  'Días festivos: 9:00 - 20:00',
]

const social = [
  { href: 'https://facebook.com', label: 'Facebook', Icon: FacebookIcon },
  { href: 'https://wa.me/526671234567', label: 'WhatsApp', Icon: WhatsAppIcon },
  { href: 'https://instagram.com', label: 'Instagram', Icon: InstagramIcon },
]

const payments = [
  { label: 'Tarjetas', Icon: CreditCardIcon },
  { label: 'Efectivo', Icon: BanknoteIcon },
  { label: 'Transferencias', Icon: LandmarkIcon },
]

export function Footer() {
  return (
    <footer id="contacto" className="footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Super Nallely" className="footer-logo" width={88} height={88} />
          <h3>Super Nallely</h3>
          <p>
            Más de 20 años sirviendo a las familias culiacanenses con la mejor calidad y frescura.
          </p>
          <p className="footer-slogan">¡Puro poder Culiacán!</p>
        </div>

        <div className="footer-info">
          <h4>Información</h4>
          <ul>
            <li>
              <MapPinIcon />
              <span>Blvd. Pedro Infante #1234, Col. Centro, Culiacán, Sinaloa</span>
            </li>
            <li>
              <PhoneIcon />
              <a href="tel:+526671234567">667 123 4567</a>
            </li>
            <li>
              <WhatsAppIcon />
              <a href="https://wa.me/526671234567" target="_blank" rel="noopener noreferrer">
                WhatsApp: 667 123 4567
              </a>
            </li>
            <li>
              <MailIcon />
              <a href="mailto:contacto@supernallely.com">contacto@supernallely.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-horarios">
          <h4>Horarios</h4>
          <ul>
            {schedule.map((item) => (
              <li key={item}>
                <ClockIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-redes">
          <h4>Síguenos</h4>
          <div className="redes-links">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                className="red-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
                {label}
              </a>
            ))}
          </div>
          <div className="metodos-pago">
            <h4>Métodos de Pago</h4>
            <div className="pago-icons">
              {payments.map(({ label, Icon }) => (
                <span key={label} className="pago-item">
                  <Icon />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Super Nallely. Todos los derechos reservados.</p>
        <p>Hecho con cariño en Culiacán, Sinaloa</p>
      </div>
    </footer>
  )
}
