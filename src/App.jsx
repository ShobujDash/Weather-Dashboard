import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl text-center text-red-700'>Wellcome to vite with TailwindCSS  and React</h1>
    </>
  )
}

export default App