import { useState } from 'react'
import logo from '@/assets/logo-tienda.jpg'
import { MenuIcon, CloseIcon, PhoneIcon, ClockIcon, MapPinIcon } from '@/components/icons'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#departamentos', label: 'Departamentos' },
  { href: '#ofertas', label: 'Ofertas' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <ul className="topbar-info">
            <li>
              <ClockIcon />
              Lun a Dom 7:00 - 22:00
            </li>
            <li>
              <MapPinIcon />
              Culiacán, Sinaloa
            </li>
          </ul>
          <p className="topbar-slogan">¡Puro poder Culiacán!</p>
        </div>
      </div>

      <header className="header" role="banner">
        <div className="container header-inner">
          <a href="#inicio" className="logo-section" aria-label="Super Nallely - Ir al inicio">
            <img src={logo} alt="Super Nallely" className="logo-img" width={52} height={52} />
            <span className="logo-text">
              <h1 className="site-title">Super Nallely</h1>
              <span className="site-subtitle">Verdulería · Frutería · Carnicería</span>
            </span>
          </a>

          <nav className="nav" data-open={menuOpen} aria-label="Navegación principal">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="tel:+526671234567" className="header-cta" aria-label="Llamar a Super Nallely">
            <PhoneIcon width={20} height={20} />
            Llamar
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  )
}
