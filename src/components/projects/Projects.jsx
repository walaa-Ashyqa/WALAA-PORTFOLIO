import React from 'react'
import './Projects.css'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
function Projects() {
  return (
<div className="container-Project" id='projects'> 

<div className='title'><h2 >Projects</h2></div>
<Outlet/>
  <div className="works-content">

      <div className="work-item">
        <img src="geminiClone.png" alt />
        <div className="work-overley">
          <small>Website Development-ReactJs        </small>
          <p>gemini Clone</p>
          <a href="https://my-gemini-react.onrender.com/" target='_blank'><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></a>
        </div> {/* /team-overley */}
      </div>

      <div className="work-item">
        <img src="Wstore.png" alt />
        <div className="work-overley">
          <small>Website Development-ReactJs        </small>
          <p>Ecommerce Website</p>
          <a href="https://wstore.onrender.com/home" target='_blank'><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></a>
        </div> {/* /team-overley */}
      </div>

     

      <div className="work-item">
        <img src="restaurant2.png" alt />
        <div className="work-overley">
          <small>Website Development-ReactJs</small>
          <p>Restaurant Website</p>
          <a href="https://react-restaurant-api-project.onrender.com/" target='_blank' ><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></a>
        </div> {/* /team-overley */}
      </div>

      <div className="work-item">
        <img src="wstore-js.png" alt />
        <div className="work-overley">
          <small>Website Development-HTML,CSS,Bootstrap,JS</small>
          <p>Ecommerce Website</p>
          <a href="https://walaa-ashyqa.github.io/WSTORE-JS/index.html" target='_blank'><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></a>
        </div> {/* /team-overley */}
      </div>
    
     
    
  </div>
  <div className="works-content">

<div className="work-item">
  <img src="p-folio.png" alt />
  <div className="work-overley">
    <small>Website Development-HTML,CSS,Bootstrap</small>
    <p>Portfolio Website</p>
    <a href="https://walaa-ashyqa.github.io/Portfolio/" target='_blank'><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></a>
  </div> {/* /team-overley */}
</div>



<div className="work-item">
  <img src="restaurant1.png" alt />
  <div className="work-overley">
    <small>Website Development-HTML,CSS,Bootstrap</small>
    <p>Restaurant Website</p>
    <a href="https://walaa-ashyqa.github.io/Restaurants/" target='_blank'><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></a>
  </div> {/* /team-overley */}
</div>
<div className="work-item">
  <img src="creative-agancy.png" alt />
  <div className="work-overley">
    <small>Website Development-HTML,CSS</small>
    <p>Creative Agency Website</p>
    <a href="https://walaa-ashyqa.github.io/Creative-Agency-Project/" target='_blank'><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></a>
  </div> {/* /team-overley */}
</div>



</div>
</div> 
 

  )
}

export default Projects
