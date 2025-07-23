import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/UI/Navbar'

import "./components/lightswind.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <div className="sec1 bg-amber-600 w-full h-screen">section 1</div>
     <div className="sec1 bg-violet-600 w-full h-screen"> section2</div>
    </>
  )
}

export default App
