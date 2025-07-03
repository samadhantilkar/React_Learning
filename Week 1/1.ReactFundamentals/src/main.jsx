import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const rootElement= document.getElementById('root')
const rootDom=createRoot(rootElement);

const paragraph= <p>lorem ipusm dolor sit amet.</p>
const firstname="Samadhan";
const age=2;
const h2Style={color:'yellow',
              backgroundColor:"red",
              display:"inline",
              padding:"4px 10px"};
rootDom.render(
  <>
    { firstname &&<h1 className='heading name title'>Hello {firstname}</h1>}
    { age > 25 ? paragraph:""}
    <h2>{firstname}</h2>
    { firstname==''?"":<h1 className='heading name title'>Hello {firstname}</h1>}
    <h1 style={h2Style} >Samadhan</h1>
  </>
);

