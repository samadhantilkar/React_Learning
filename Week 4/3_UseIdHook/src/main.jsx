import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LearnUseId from './LearnUseId/LearnUseId'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <LearnUseId/>
  // </StrictMode>,
)
