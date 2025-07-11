import { createRoot } from 'react-dom/client'
import SignIn from './dynamicForms/SignIn';
import "./BlackScreen.css"
import SignUp from './SignUp';
import ZodLogin from './advanceForm/ZodLogin';

const root=document.getElementById("root");
const rootRendered=createRoot(root).render(
  // <SignIn/>
  // <SignUp/>
  <ZodLogin/>
)