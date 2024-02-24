import { useState } from 'react'

import Navbar from './components/home/Navbar.jsx'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/home/Header.jsx';
import Footer from './components/home/Footer.jsx';
 
import Skills from './components/skills/Skills.jsx';
import Projects from './components/projects/Projects.jsx';
import Contact from './components/projects/Contact.jsx';
import Sections from './components/projects/Sections.jsx';
import About from './components/projects/About.jsx';
import Email from './components/home/Email.jsx';
function App() {


  return (
    <div>
       <BrowserRouter >
 <Navbar/>
 <Header/>
 <Skills />
 <Sections/>
 
 
        <Routes>
        
        <Route  path="/" element={ <Projects/>} />
            <Route index  path="projects" element={ <Projects/>} />
            <Route path="contact" element={ <Contact/>} />
            <Route path="about" element={ <About/>} />
        
        </Routes>
        <Email/>
        <Footer />
      </BrowserRouter>
  
    </div>
  )
}

export default App
