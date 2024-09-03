import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './Nabvar'
import Body from './Body'
import Boxes from './Boxes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Nabvar/>
       <Body/>
       <Boxes/>
    </>
  )
}

export default App
