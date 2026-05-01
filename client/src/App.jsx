// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import "./App.css"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <Contact />
    </>
  )
}

export default App
