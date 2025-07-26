import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/UI/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const router= createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/></>
    }
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
