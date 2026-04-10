import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'

// Export requis par vite-react-ssg pour le pré-rendu SSG.
// ViteReactSSG gère le routing et le rendu serveur — App est défini dans routes.tsx.
export const createRoot = ViteReactSSG({ routes })
