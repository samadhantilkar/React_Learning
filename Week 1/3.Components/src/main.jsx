import { createRoot } from 'react-dom/client'
import './app/landing/profile.css'
import './index.css'
import LandingPage from './app/landing/index.jsx';

const rootElemet=document.getElementById('root');
const rootDom=createRoot(rootElemet);

rootDom.render(
  <>
    <LandingPage/>
  </>
)