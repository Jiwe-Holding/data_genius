import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The production build ships prerendered HTML (see prerender.js); dev mode does not.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
