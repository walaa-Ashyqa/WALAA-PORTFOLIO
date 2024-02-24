import React from 'react'
import "./Sections.css"
import { Link, Outlet } from 'react-router-dom'
function Sections() {
  return (
    <div className='sections' id='sections'>
        <div className="container-sections">
          <Link  className='section-link' to="projects"  > my projects </Link>
            <Link className='section-link' to="contact"> Contact </Link>
            <Link className='section-link' to="about"> About </Link>
        </div>
        <Outlet/>
         
         </div>
         
  )
}

export default Sections