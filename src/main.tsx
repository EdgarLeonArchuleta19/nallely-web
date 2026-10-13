import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.css'
import App from '@/App'

// Algunos navegadores móviles mantienen el zoom anterior al alternar entre modo
// escritorio/móvil; re-aplicar el meta viewport fuerza el reflujo sin recargar.
let lastWidth = window.innerWidth
const reflowViewport = () => {
  if (window.innerWidth === lastWidth) return
  lastWidth = window.innerWidth
  const meta = document.querySelector('meta[name="viewport"]')
  if (!meta) return
  const content = meta.getAttribute('content') ?? ''
  meta.setAttribute('content', content.replace('initial-scale=1.0', 'initial-scale=1.0001'))
  requestAnimationFrame(() => meta.setAttribute('content', content))
}
window.addEventListener('resize', reflowViewport)
window.addEventListener('orientationchange', reflowViewport)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
