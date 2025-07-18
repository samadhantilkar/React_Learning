import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LearnAxios from './Axios/LearnAxios'
import CreatePost from './Axios/createPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LearnAxios/> */}
      <CreatePost/>
    </>
  )
}

export default App
