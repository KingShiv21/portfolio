import React from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Navbar from "./comps/Navbar"
import Footer from "./comps/Footer"

function App() {

  return (
    <div className=" overflow-hidden" >
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
        <Footer/>
      </Router>
    
      
      

    </div>
  )
}

export default App
