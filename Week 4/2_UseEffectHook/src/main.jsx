import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LearnUseEffect from './2_UseEffect/learnUseEffect'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LearnUseEffect/>
  </StrictMode>
)
