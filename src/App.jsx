import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/UI/Navbar'
import  {MorphingNavigation}  from "./components/UI/morphing-navigation"
import "./components/lightswind.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MorphingNavigation
  links={[
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'shop', label: 'Shop', href: '#shop' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'help', label: 'Help', href: '#help' }
  ]}
  onLinkClick={(link) => console.log('Clicked:', link)}
/>
      
      
     <div className="sec1 bg-amber-600 w-full h-screen">section 1</div>
     <div className="sec1 bg-violet-600 w-full h-screen"> section2</div>
    </>
  )
}

export default App
