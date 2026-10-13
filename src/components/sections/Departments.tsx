import type { ComponentType, CSSProperties, SVGProps } from 'react'
import {
  LeafIcon,
  AppleIcon,
  MeatIcon,
  MilkIcon,
  CartIcon,
  SparklesIcon,
  BreadIcon,
  CupSodaIcon,
  ChevronRightIcon,
} from '@/components/icons'

type DeptIcon = ComponentType<SVGProps<SVGSVGElement>>

const departments: { id: string; name: string; Icon: DeptIcon; color: string; description: string }[] = [
  { id: 'verduleria', name: 'Verdulería', Icon: LeafIcon, color: '#2e7d32', description: 'Vegetales frescos de la región' },
  { id: 'fruteria', name: 'Frutería', Icon: AppleIcon, color: '#e67e22', description: 'Frutas de temporada y tropicales' },
  { id: 'carniceria', name: 'Carnicería', Icon: MeatIcon, color: '#c62828', description: 'Cortes frescos y seleccionados' },
  { id: 'cremeria', name: 'Cremería', Icon: MilkIcon, color: '#1565c0', description: 'Lácteos, huevos y derivados' },
  { id: 'abarrotes', name: 'Abarrotes', Icon: CartIcon, color: '#6a1b9a', description: 'Despensa básica y enlatados' },
  { id: 'limpieza', name: 'Limpieza', Icon: SparklesIcon, color: '#00695c', description: 'Productos del hogar y aseo' },
  { id: 'panaderia', name: 'Panadería', Icon: BreadIcon, color: '#bf360c', description: 'Pan fresco y repostería diaria' },
  { id: 'bebidas', name: 'Bebidas', Icon: CupSodaIcon, color: '#283593', description: 'Refrescos, aguas y jugos' },
]

export function Departments() {
  return (
    <section id="departamentos" className="section departments" aria-labelledby="dept-title">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">8 departamentos</span>
          <h2 id="dept-title" className="section-title">Nuestros Departamentos</h2>
          <p className="section-intro">
            Encuentra todo lo que necesitas en un solo lugar. Calidad garantizada en cada pasillo.
          </p>
        </div>
        <ul className="dept-grid">
          {departments.map(({ id, name, Icon, color, description }) => (
            <li key={id}>
              <article className="dept-card" style={{ '--dept-color': color } as CSSProperties}>
                <span className="dept-icon">
                  <Icon />
                </span>
                <h3 className="dept-name">{name}</h3>
                <p className="dept-desc">{description}</p>
                <a href="#ofertas" className="dept-link" aria-label={`Ver ofertas de ${name}`}>
                  Ver productos <ChevronRightIcon width={16} height={16} />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
