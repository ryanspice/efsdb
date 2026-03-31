import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Extract EFSDB Hydration data to pass as props
const efsdbData = typeof window !== 'undefined' && (window as any).__EFSDB__ 
  ? (window as any).__EFSDB__ 
  : null;

if (efsdbData) {
  console.log("EFSDB Hydration:", efsdbData);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App efsdb={efsdbData} />
  </StrictMode>,
)
