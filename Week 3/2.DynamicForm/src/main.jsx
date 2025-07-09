import { createRoot } from 'react-dom/client'
import SignIn from './dynamicForms/SignIn';
import "./BlackScreen.css"
import SignUp from './SignUp';

const root=document.getElementById("root");
const rootRendered=createRoot(root).render(
  // <SignIn/>
  <SignUp/>
)