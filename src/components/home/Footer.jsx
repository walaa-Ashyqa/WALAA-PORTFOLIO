import React from 'react'
 import './footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
 
function Footer() {

  const openLinked =()=>{
window.open("https://www.linkedin.com/in/wala-hashayki-799154192/")
  }
  const openGit =()=>{
    window.open("https://github.com/walaa-Ashyqa")
  }
  const openBehance =()=>{
    window.open("https://www.behance.net/walaali2")
  }
  const openInstagram =()=>{
    window.open("https://www.instagram.com/hashayki/")
  }
  return (
  <>
 
 
 <div className="footer-icons">
<div className="container footer-container">


  
    <button onClick={openLinked} className="nav-icons"><FontAwesomeIcon icon={faLinkedinIn} /></button>
    
    <button onClick={openGit} className="nav-icons"><FontAwesomeIcon icon={faGithub} /></button>
   
   
    <button onClick={openInstagram} className="nav-icons"><FontAwesomeIcon icon={faInstagram} /></button>
  
    <button onClick={openBehance} className="nav-icons"><FontAwesomeIcon icon={faBehance} /></button>
  
</div>

</div>


      <div className='text-footer ' >
       <span>© 2024 Copyright: </span> 
        <a className='text-white' href='https://mdbootstrap.com/'>
          WALA' ASHYQA
        </a>
      </div>
   
   
</>

  )
}

export default Footer