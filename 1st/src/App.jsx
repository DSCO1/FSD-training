import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car1 from './Vehicle.jsx'
import Car3 from './Vehicle3.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Car1 />
      <Car3 />
    </>
  )
}

export default App;