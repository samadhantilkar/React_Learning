import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UseTransitionHook from './UseTranstionHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseTransitionHook/>
    </>
  )
}

export default App
