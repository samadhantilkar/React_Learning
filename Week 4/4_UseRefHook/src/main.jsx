import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LearnUseRefHook from './UseRefHook/learnUseRefHook'
import LearnUseRefHook2 from './UseRefHook/learnUseRefHook2'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <LearnUseRefHook2/>
    
  // </StrictMode>,
)
