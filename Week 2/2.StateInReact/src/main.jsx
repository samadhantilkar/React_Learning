import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateIntro from './StateIntro'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateIntro/>
  </StrictMode>,
)
