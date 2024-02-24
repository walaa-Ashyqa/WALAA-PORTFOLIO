import React, { useEffect, useRef } from 'react'
import './Header.css'
import { CardHeader } from 'react-bootstrap'
function MYHeader() {
  const spanRef =useRef();

const textLoad=()=>{
 
  setTimeout(()=>{
    spanRef.current.innerText ="FULL STACK DEVELOPER";
  },1)
  setTimeout(()=>{
   
    spanRef.current.innerText ="UI/UX DESIGNER";
  },5500)
  setTimeout(()=>{
    spanRef.current.innerText ="FRONT-END DEVELOPER";
  },9500)
  setInterval(textLoad,15000);
}
useEffect( textLoad,[])
  return (
 
   <div className="container1" id='header'>
    <div className=" header-content">
    <h2 className='welcome-text'>WELCOME TO MY PORTFOLIO
    </h2>
    <h1 className='name-text'>HI! I'M WALA' ASHYQA </h1>
   <p className='text-move'>I'M <span ref={spanRef}></span></p> 
    <p className='text-body'>Hello everybody, I have 4 years of experience in web development I always strive to learn new skills and experiences.</p>
    
  </div>
    <div className="header-img">  <img
              src="./header-img.svg"
              width="550"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></div>
  
</div>
 
 


  )
}

export default MYHeader