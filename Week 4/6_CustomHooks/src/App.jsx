import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LearnCustomHook from './CustomHook/LearnCustomHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LearnCustomHook/>
    </>
  )
}

export default App
