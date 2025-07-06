import { createRoot } from 'react-dom/client'
import './BlackScreen.css'
import TodoPage from './Todos/TodoPage'
createRoot(document.getElementById('root')).render(
  <>
    <TodoPage/>
  </>
)
