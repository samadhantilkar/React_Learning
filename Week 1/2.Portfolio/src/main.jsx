import { createRoot } from 'react-dom/client'
import './index.css'
import viteImg from '/vite.svg'
import rightArrow from './assets/right-arrow.svg'
import './profile.css'

const rootElemet=document.getElementById('root');
const rootDom=createRoot(rootElemet);

rootDom.render(
  <>
      <header>
        <img src={viteImg} style={{width:"4rem", height:"4rem"}} alt="Vite Image" />
        <h1 className='heading'> Hi, I am a React <span >Developer</span></h1>
      </header>

      <main>
        <h2 className='name-heading'>My name is samadhan</h2>
        <ol>
          <li>I like react Programming</li>
          <li>I like Vite also, Webpack not so much</li>
          <li>Let's build some interactive react project</li>
        </ol>

        <a href="#" className='hire-me-button'>
          <span>Hire Me</span>  
          <img src={rightArrow} alt="Right Arrow" />
        </a>
      </main>

      <footer style={{marginTop:'2rem'}}>
        <span style={{color:"gray"}}> <span style={{color:"white"}}>©️</span> All rights reserved</span>
      </footer>
  </>
);